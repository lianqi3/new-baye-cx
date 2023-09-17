import NavBar from '@/components/NavBar/NavBar'
import NumberAnimation from '@/utils/numberAnimation'
import { Button, InfiniteScroll } from 'antd-mobile'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AssetsInfo, Content, List } from './styled'
import store from '@/store/assets'

const Mine: React.FC = () => {
  const navigate = useNavigate()
  const { getAssetsInfo, assetsInfo, getAssetsList, loadMore, hasMore, dataList } = store()

  useEffect(() => {
    init()
  }, [])

  function init() {
    getAssetsInfo()
    getAssetsList()
  }
  return (
    <div>
      <NavBar title='资产' />
      <Content>
        <AssetsInfo>
          <div className='topBox'>
            <div className='left'>
              <div>总资产(BAYE)</div>
              <div className='num'>{NumberAnimation(assetsInfo?.balance)}</div>
            </div>
            <img className='right' src={require('@/static/mask.png')} />
          </div>
          <div className='bottomBox'>
            <div>
              累计收益(BAYE)
              <span>{NumberAnimation(assetsInfo?.total)}</span>
            </div>
            <div>
              昨日收益(BAYE)
              <span>{NumberAnimation(assetsInfo?.yester)}</span>
            </div>
            <div>
              剩余燃料(USDT)
              <span>{NumberAnimation(assetsInfo?.residual_income)}</span>
            </div>
          </div>
        </AssetsInfo>
        <Button className='btn' onClick={() => navigate(`/Withdraw?id=${assetsInfo?.id}`)}>
          提币
        </Button>
        <List>
          <div className='title'>资产明细</div>
          <div className='content'>
            <div className='th'>
              <div>时间</div>
              <div>数量(BAYE)</div>
              <div>类型</div>
            </div>
            {dataList.map((item, index) => {
              return (
                <div className='td' key={index}>
                  <div>{item.add_time_text}</div>
                  <div>{item.money}</div>
                  <div>{item.messages}</div>
                </div>
              )
            })}
            <InfiniteScroll loadMore={() => loadMore()} hasMore={hasMore} threshold={40} />
          </div>
        </List>
      </Content>
    </div>
  )
}
export default Mine
