import NavBar from '@/components/NavBar/NavBar'
import NumberAnimation from '@/utils/numberAnimation'
import { Button } from 'antd-mobile'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AssetsInfo, Content, List } from './styled'

const Mine: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div>
      <NavBar title='资产' />
      <Content>
        <AssetsInfo>
          <div className='topBox'>
            <div className='left'>
              <div>总资产(BAYE)</div>
              <div className='num'>{NumberAnimation('65654984.0000')}</div>
            </div>
            <img className='right' src={require('@/static/mask.png')} />
          </div>
          <div className='bottomBox'>
            <div>
              累计收益(BAYE)
              <span>{NumberAnimation('4984.00')}</span>
            </div>
            <div>
              昨日收益(BAYE)
              <span>{NumberAnimation('4984.00')}</span>
            </div>
            <div>
              剩余燃料(USDT)
              <span>{NumberAnimation('4984.00')}</span>
            </div>
          </div>
        </AssetsInfo>
        <Button className='btn' onClick={() => navigate('/Withdraw')}>
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
            <div className='td'>
              <div>2023/09/07 13:25:36</div>
              <div>+685.92</div>
              <div>收益</div>
            </div>
          </div>
        </List>
      </Content>
    </div>
  )
}
export default Mine
