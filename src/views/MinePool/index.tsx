import NavBar from '@/components/NavBar/NavBar'
import store from '@/store/minePool'
import { InfiniteScroll } from 'antd-mobile'
import { useEffect, useState } from 'react'
import { Content, List, PoolBox, PoolTab } from './styled'

const MinePool: React.FC = () => {
  const [tabIndex, setTabIndex] = useState(0)
  const { getDataInfo, dataInfo, getDataList, dataList, loadMore, hasMore } = store()

  useEffect(() => {
    getDataInfo()
  }, [])

  useEffect(() => {
    getDataList(tabIndex)
  }, [tabIndex])

  return (
    <>
      <NavBar title='矿池' />
      <Content>
        <PoolBox>
          <div className='topBox'>
            <div className='left'>
              当前等级<span>{dataInfo?.mini_group}</span>
            </div>
            <img className='right' src={require('@/static/mask.png')} />
          </div>
          <div className='bottomBox'>
            <div>
              云算力数量<span>{dataInfo?.total}</span>
            </div>
            <div>
              映射算力<span>{dataInfo?.ys_suanli}</span>
            </div>
            <div>
              共识算力<span>{dataInfo?.gs_suanli}</span>
            </div>
            <div>
              矿池质押<span>{dataInfo?.zy_money}</span>
            </div>
            <div>
              矿池算力<span>{dataInfo?.suanli}</span>
            </div>
          </div>
        </PoolBox>
        <PoolTab>
          <div className={tabIndex == 0 ? 'active' : ''} onClick={() => setTabIndex(0)}>
            映射算力
          </div>
          <div className={tabIndex == 1 ? 'active' : ''} onClick={() => setTabIndex(1)}>
            共识算力
          </div>
        </PoolTab>
        <List>
          <div className='content'>
            <div className='th'>
              <div>时间</div>
              <div>地址</div>
              <div>质押(BAYE)</div>
              <div>算力(CU)</div>
            </div>
            {dataList.map((res, index) => {
              return (
                <div className='td' key={index}>
                  <div>{res.create_time}</div>
                  <div>{res.address}</div>
                  <div>{res.zy_money}</div>
                  <div>{res.suanli}</div>
                </div>
              )
            })}
            <InfiniteScroll loadMore={() => loadMore(tabIndex)} hasMore={hasMore} threshold={40} />
          </div>
        </List>
      </Content>
    </>
  )
}

export default MinePool
