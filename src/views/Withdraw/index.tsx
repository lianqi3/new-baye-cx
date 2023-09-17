import NavBar from '@/components/NavBar/NavBar'
import { Button, Input, Toast } from 'antd-mobile'
import { Content, WithdrawBox } from './styled'
import store from '@/store/assets'
import { useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Withdraw: React.FC = () => {
  const [search] = useSearchParams()
  const { getWithdrawInfo, withdrawInfo, withdraw } = store()
  const [value, setValue] = useState<string>('')
  const id = search.get('id') || ''
  useEffect(() => {
    init()
  }, [])

  function init() {
    getWithdrawInfo(Number(id))
  }

  function submit() {
    withdraw({
      money: value,
      money_type: id,
    }).then((res: any) => {
      if (res.code == 1) {
        init()
        Toast.show({
          content: '提币成功',
        })
      }
    })
  }

  return (
    <div>
      <NavBar title='提币' />
      <Content>
        <WithdrawBox>
          <img className='mask' src={require('@/static/mask.png')} />
          BAYE
        </WithdrawBox>
        <WithdrawBox className='input-group'>
          <Input
            className='input'
            placeholder='请输入提币数量'
            value={value}
            onChange={(val) => setValue(val)}
            type='number'
          />
          <div
            className='all'
            onClick={() => {
              if (withdrawInfo?.balance) setValue(withdrawInfo?.balance.toString())
            }}
          >
            全部
          </div>
        </WithdrawBox>
        <div className='info-box'>
          当前可用:
          <span>{withdrawInfo?.balance} BAYE</span>
        </div>
        <Button className='btn' disabled={withdrawInfo?.is_atm == 0 || !value} onClick={submit}>
          提币
        </Button>
      </Content>
    </div>
  )
}

export default Withdraw
