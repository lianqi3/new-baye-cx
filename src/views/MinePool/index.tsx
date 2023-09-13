import NavBar from '@/components/NavBar/NavBar'
import { useState } from 'react'
import { Content, List, PoolBox, PoolTab } from './styled'

const MinePool: React.FC = () => {
  const [tabIndex, setTabIndex] = useState(0)
  return (
    <>
      <NavBar title='矿池' />
      <Content>
        <PoolBox>
          <div className='topBox'>
            <div className='left'>
              当前等级<span>LV.1</span>
            </div>
            <img className='right' src={require('@/static/mask.png')} />
          </div>
          <div className='bottomBox'>
            <div>
              云算力数量<span>4984</span>
            </div>
            <div>
              映射算力<span>4984</span>
            </div>
            <div>
              共识算力<span>4984</span>
            </div>
            <div>
              矿池质押<span>4984</span>
            </div>
            <div>
              矿池算力<span>4984</span>
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
            <div className='td'>
              <div>2023/09/07 13:25:36</div>
              <div>0x92****4 4bd06</div>
              <div>68592</div>
              <div>68365.00</div>
            </div>
          </div>
        </List>
      </Content>
    </>
  )
}

export default MinePool
