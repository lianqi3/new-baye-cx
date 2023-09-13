import NavBar from '@/components/NavBar/NavBar'
import ProgressBar from '@/components/Progress/Progress'
import NumberAnimation from '@/utils/numberAnimation'
import { Button, Input } from 'antd-mobile'
import { useState } from 'react'
import { Content, Fuel, MineContent, MineContentInfo, MineInfo, MinList, Tab } from './styled'

const Mine: React.FC = () => {
  const tabs = [{ label: '购买矿机' }, { label: '质押激活' }, { label: '添加燃料' }]
  const [tabIndex, setTabIndex] = useState(0)

  return (
    <div>
      <NavBar title='矿机' />
      <MineInfo>
        <img className='earth' src={require('@/static/Earth.png')} />
        <div className='content'>
          <div className='box'>
            <img src={require('@/static/overview-box.png')} />
            <div className='box-title'>当前拥有矿机(CU)</div>
            <div className='box-num'>{NumberAnimation('13302294')}</div>
          </div>
          <div className='box right'>
            <img className='scaleX' src={require('@/static/overview-box.png')} />
            <div className='box-title'>当前质押资产(USDT)</div>
            <div className='box-num'>{NumberAnimation('1330.2294')}</div>
          </div>
          <div className='box'>
            <img className='scaleY' src={require('@/static/overview-box.png')} />
            <div className='box-title'>收益中矿机(CU)</div>
            <div className='box-num'>{NumberAnimation('13302294')}</div>
          </div>
          <div className='box right'>
            <img className='scaleXY' src={require('@/static/overview-box.png')} />
            <div className='box-title'>未激活矿机(CU)</div>
            <div className='box-num'>{NumberAnimation('13302294')}</div>
          </div>
        </div>
      </MineInfo>

      <Content>
        <Fuel>
          <div className='box1'>
            当前燃料
            <span>0.0000 USDT</span>
          </div>
          <div className='box2'>
            <ProgressBar amount={50} />
            50%
          </div>
        </Fuel>
        <Tab>
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`box ${tabIndex === index ? 'active' : ''}`}
              onClick={() => setTabIndex(index)}
            >
              {tab.label}
            </div>
          ))}
        </Tab>
        {tabIndex == 0 ? (
          <MineContent>
            <div className='mineInput'>
              <Input className='input' placeholder='请输入购买矿机CU数' type='number' />
              <div>CU</div>
            </div>
            <MineContentInfo>
              <div>
                当前可用:<span>0.00 USDT</span>
              </div>
              <div>
                预计支付:<span>0.00 USDT</span>
              </div>
              <div>
                当前可用:<span>0.00 USDT</span>
              </div>
              <div>
                预计支付:<span>0.00 USDT</span>
              </div>
            </MineContentInfo>
            <div className='btn-group'>
              <Button className='btn'>USDT质押</Button>
              <Button className='btn'>BAYE质押</Button>
            </div>
            <div className='mineInfo'>
              注:购买矿机最低算力为1CU，购买好矿机要去质押激活才能享受收益
            </div>
          </MineContent>
        ) : tabIndex === 1 ? (
          <MineContent>
            <div className='mineInput'>
              <Input className='input' placeholder='请输入激活CU数' type='number' />
              <div>CU</div>
            </div>
            <MineContentInfo>
              <div>
                当前可用:<span>0.00 BAYE</span>
              </div>
              <div>
                预计支付:
                <span className='unit-box'>
                  0.00 BAYE
                  <span>≈0.00 USDT</span>
                </span>
              </div>
            </MineContentInfo>
            <div className='btn-group'>
              <Button className='btn btnLg'>确定激活</Button>
            </div>
            <div className='mineInfo'>
              注:购买矿机最低算力为1CU，购买好矿机要去质押激活才能享受收益
            </div>
          </MineContent>
        ) : (
          <MineContent>
            <div className='mineInput'>
              <Input className='input' placeholder='请输入BAYE数量' type='number' />
              <div className='all'>全部</div>
            </div>
            <MineContentInfo>
              <div>
                当前可用:<span>0.00 BAYE</span>
              </div>
              <div>
                预计支付:
                <span className='unit-box'>
                  0.00 BAYE
                  <span>≈0.00 USDT</span>
                </span>
              </div>
            </MineContentInfo>
            <div className='btn-group'>
              <Button className='btn btnLg'>添加燃料</Button>
            </div>
            <div className='mineInfo'>
              注:购买矿机最低算力为1CU，购买好矿机要去质押激活才能享受收益
            </div>
          </MineContent>
        )}
        <MinList>
          <div className='title'>矿机明细</div>
          <div className='content'>
            <div className='th'>
              <div>时间</div>
              <div>算力</div>
              <div>数量</div>
              <div>类型</div>
            </div>
            <div className='td'>
              <div>2023/09/07 13:25:36</div>
              <div>56325</div>
              <div>68592</div>
              <div>质押</div>
            </div>
          </div>
        </MinList>
      </Content>
    </div>
  )
}
export default Mine
