import NavBar from '@/components/NavBar/NavBar'
import ProgressBar from '@/components/Progress/Progress'
import useContract from '@/hooks/useContract'
import mineStore from '@/store/mine'
import { decimal } from '@/utils'
import NumberAnimation from '@/utils/numberAnimation'
import { useWeb3React } from '@web3-react/core'
import { Button, InfiniteScroll, Input, Toast } from 'antd-mobile'
import { BigNumber, ethers } from 'ethers'
import { useEffect, useState } from 'react'
import { Content, Fuel, MineContent, MineContentInfo, MineInfo, MinList, Tab } from './styled'

const Mine: React.FC = () => {
  const CHAINID = Number(process.env.REACT_APP_CHAIN_ID)
  const tabs = [
    { label: '购买矿机', value: 1 },
    { label: '质押激活', value: 2 },
    { label: '添加燃料', value: 3 },
  ]
  const [tabIndex, setTabIndex] = useState(1)
  const [value, setValue] = useState<string>('')
  const [ustdBalance, setUstdBalance] = useState<string>('0')
  const [bayeBalance, setBayeBalance] = useState<string>('0')
  const {
    getMining,
    mineData,
    getTransInfo,
    transConfig,
    getDataList,
    loadMore,
    hasMore,
    dataList,
  } = mineStore()
  const { getTokenAmount, writeContract } = useContract() // web3操作方法
  const { account, library } = useWeb3React()
  const [disabled, setDisabled] = useState<boolean>(false)
  const [isReset, setReset] = useState<boolean>(false)

  useEffect(() => {
    getMining(CHAINID)
    getDataList()
  }, [isReset])

  useEffect(() => {
    if (mineData?.money_type_info) {
      getBalance(mineData.money_type_info.usdt).then((res: any) => {
        setUstdBalance(res.TokenAmount)
      })
      getBalance(mineData.money_type_info.baye).then((res: any) => {
        setBayeBalance(res.TokenAmount)
      })
    }
  }, [mineData])

  async function getBalance(contract: string) {
    const params: any = {
      contract,
      decimal: 18,
      account: account,
      provider: library,
    }
    const { data } = await getTokenAmount(params)
    return data
  }

  useEffect(() => {
    getTransInfo({
      cu: value,
      type: tabIndex,
      chain: CHAINID.toString(),
    })
  }, [value])

  useEffect(() => {
    setValue('')
  }, [tabIndex, isReset])

  function toPay(data: any) {
    setDisabled(true)
    const loading = Toast.show({
      icon: 'loading',
      content: '正在支付',
      duration: 0,
    })
    const amountNum: BigNumber = ethers.utils.parseEther(data.usdt.toString())
    console.log(amountNum)

    const config: any = [data.wallet_address, amountNum]
    console.log(config)
    writeContract({
      method: 'transfer',
      contract: data.contract_address,
      provider: library,
      config,
    })
      .then(() => {
        setTimeout(() => {
          setReset(!isReset)
          loading.close()
          setDisabled(false)
          Toast.show({
            content: '支付成功',
          })
        }, 5000)
      })
      .catch((ele) => {
        loading.close()
        setDisabled(false)
      })
  }

  return (
    <div>
      <NavBar title='矿机' />
      <MineInfo>
        <img className='earth' src={require('@/static/Earth.png')} />
        <div className='content'>
          <div className='box'>
            <img src={require('@/static/overview-box.png')} />
            <div className='box-title'>当前拥有矿机(CU)</div>
            <div className='box-num'>{NumberAnimation(mineData?.cu_count)}</div>
          </div>
          <div className='box right'>
            <img className='scaleX' src={require('@/static/overview-box.png')} />
            <div className='box-title'>当前质押资产(USDT)</div>
            <div className='box-num'>{NumberAnimation(mineData?.order_usdt)}</div>
          </div>
          <div className='box'>
            <img className='scaleY' src={require('@/static/overview-box.png')} />
            <div className='box-title'>收益中矿机(CU)</div>
            <div className='box-num'>{NumberAnimation(mineData?.suanli)}</div>
          </div>
          <div className='box right'>
            <img className='scaleXY' src={require('@/static/overview-box.png')} />
            <div className='box-title'>未激活矿机(CU)</div>
            <div className='box-num'>{NumberAnimation(mineData?.no_cu)}</div>
          </div>
        </div>
      </MineInfo>

      <Content>
        <Fuel>
          <div className='box1'>
            当前燃料
            <span>{mineData?.residual_income} USDT</span>
          </div>
          <div className='box2'>
            <ProgressBar amount={Number(mineData?.progress_bar)} />
            {mineData?.progress_bar}%
          </div>
        </Fuel>
        <Tab>
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`box ${tabIndex === tab.value ? 'active' : ''}`}
              onClick={() => setTabIndex(tab.value)}
            >
              {tab.label}
            </div>
          ))}
        </Tab>
        <MineContent>
          <div className='mineInput'>
            {tabIndex === 1 ? (
              <Input
                className='input'
                value={value}
                onChange={(val) => setValue(val)}
                placeholder='请输入购买矿机CU数'
                type='number'
              />
            ) : tabIndex === 2 ? (
              <Input
                className='input'
                value={value}
                onChange={(val) => {
                  if (Number(val) > Number(mineData?.no_cu) && mineData?.no_cu) {
                    setValue(decimal(mineData?.no_cu, 2).toString())
                    return
                  }
                  setValue(val)
                }}
                placeholder='请输入激活CU数'
                type='number'
                max={Number(mineData?.no_cu)}
              />
            ) : (
              <Input
                className='input'
                value={value}
                onChange={(val) => {
                  if (Number(val) > Number(transConfig?.token) && transConfig?.token) {
                    setValue(decimal(transConfig?.token, 2).toString())
                    return
                  }
                  setValue(val)
                }}
                placeholder='请输入BAYE数量'
                type='number'
              />
            )}
            <div
              className='all'
              onClick={() => {
                if (tabIndex === 3 && transConfig?.token) {
                  if (Number(bayeBalance) <= Number(transConfig?.token)) setValue(bayeBalance)
                  else setValue(decimal(transConfig?.token, 2).toString())
                }
              }}
            >
              {tabIndex === 3 ? '全部' : 'CU'}
            </div>
          </div>
          {tabIndex === 1 ? (
            <MineContentInfo>
              <div>
                当前可用:<span>{ustdBalance} USDT</span>
              </div>
              <div>
                预计支付:<span>{transConfig?.token} USDT</span>
              </div>
              {/* <div>
              当前可用:<span>0.00 USDT</span>
            </div>
            <div>
              预计支付:<span>0.00 USDT</span>
            </div> */}
            </MineContentInfo>
          ) : (
            <MineContentInfo>
              <div>
                当前可用:<span>{bayeBalance} BAYE</span>
              </div>
              <div>
                预计支付:
                <span className='unit-box'>
                  {transConfig?.token} {transConfig?.coin_name}
                  <span>≈{transConfig?.usdt} USDT</span>
                </span>
              </div>
            </MineContentInfo>
          )}
          <div className='btn-group'>
            <Button className='btn' disabled={disabled} onClick={() => toPay(transConfig)}>
              {tabIndex === 1 ? 'USDT质押' : tabIndex === 2 ? '确定激活' : '添加燃料'}
            </Button>
            {/* <Button className='btn'>BAYE质押</Button> */}
          </div>
          <div className='mineInfo'>
            注:购买矿机最低算力为1CU，购买好矿机要去质押激活才能享受收益
          </div>
        </MineContent>
        <MinList>
          <div className='title'>矿机明细</div>
          <div className='content'>
            <div className='th'>
              <div>时间</div>
              <div>算力</div>
              <div>数量</div>
              <div>类型</div>
            </div>
            {dataList.map((item, index) => {
              return (
                <div className='td' key={index}>
                  <div>{item.add_time}</div>
                  <div>{item.cu}</div>
                  <div>{item.order_money}</div>
                  <div>{item.order_type_fmt}</div>
                </div>
              )
            })}
            <InfiniteScroll loadMore={() => loadMore()} hasMore={hasMore} threshold={40} />
          </div>
        </MinList>
      </Content>
    </div>
  )
}
export default Mine
