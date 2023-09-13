import NavBar from '@/components/NavBar/NavBar'
import { Button, Input } from 'antd-mobile'
import { Content, WithdrawBox } from './styled'

const Withdraw: React.FC = () => {
  return (
    <div>
      <NavBar title='提币' />
      <Content>
        <WithdrawBox>
          <img className='mask' src={require('@/static/mask.png')} />
          BAYE
        </WithdrawBox>
        <WithdrawBox className='input-group'>
          <Input className='input' placeholder='请输入提币数量' type='number' />
          <div className='all'>全部</div>
        </WithdrawBox>
        <div className='info-box'>
          当前可用:
          <span>0.00 BAYE</span>
        </div>
        <Button className='btn'>提币</Button>
      </Content>
    </div>
  )
}

export default Withdraw
