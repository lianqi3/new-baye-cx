import React, { memo, useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import { Button, SpinLoading } from 'antd-mobile'
import useContract from '@/hooks/useContract'
// 模拟数据
import { abi, contract } from '@/mock'

import Skeleton from 'react-skeleton-loader'

const MyLoader = (props: any) => <Skeleton width='100%' height='100%' count={3} />

const Home: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const { account, library } = useWeb3React()
  const { writeContract } = useContract()
  const transferClick = async () => {
    try {
      setLoading(true)
      const res = await writeContract({
        abi: abi,
        contract: contract,
        method: 'transfer',
        provider: library,
        config: ['0x698f31002A8Ad356fd344eCE86D28113a656A1f1', '10'],
      })
      setLoading(res.loading)
    } catch (e: any) {
      setLoading(e.loading)
    }
  }
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
  return (
    <div>
      <h1 className='text-[red]'>Home</h1>
      <div>{!loading ? account : <MyLoader />}</div>
      {loading ? (
        <SpinLoading color='primary' />
      ) : (
        <Button color='primary' fill='solid' onClick={transferClick}>
          发起转账
        </Button>
      )}
    </div>
  )
}

export default memo(Home)
