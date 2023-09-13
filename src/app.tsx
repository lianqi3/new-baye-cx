import React, { useEffect, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from '@/router'
import { useWeb3React } from '@web3-react/core'
import { changeNetwork } from '@/web3'
import Loading from '@/components/Loading/Loading'
import PageLoading from '@/components/PageLoading'

import { injected } from '@/web3/connectors'
import { LoadingProvider } from '@/components/Loading/LoadingContext'
import BgCanvas from './components/BgCanvas/BgCanvas'

const CHAINID = Number(process.env.REACT_APP_CHAIN_ID)

function App() {
  const { activate, chainId, account } = useWeb3React()
  // 链接钱包
  useEffect(() => {
    activate(
      injected,
      (err) => {
        console.error(err)
        changeNetwork(CHAINID)
      },
      false,
    ).then(() => {
      if (chainId !== CHAINID) {
        changeNetwork(CHAINID)
      }
    })
  }, [chainId])
  // 监听切换

  const handleChainChanged = async () => {
    console.log('网络切换监听')
    await activate(injected, undefined, true).catch((error) => {
      console.error('链改变后链接钱包失败', error)
    })
    await changeNetwork(CHAINID)
  }

  const handleAccountsChanged = (accounts: string[]) => {
    console.log('钱包切换监听')
    if (accounts.length > 0) {
      activate(injected, undefined, true).catch((error) => {
        console.error('钱包变更后链接钱包失败', error)
      })
    }
  }

  window.ethereum.on('chainChanged', handleChainChanged)
  window.ethereum.on('accountsChanged', handleAccountsChanged)
  // 钱包切换刷新
  useEffect(() => {
    window.ethereum.on('accountsChanged', () => {
      window.location.reload()
    })
  }, [account])
  return (
    <LoadingProvider>
      <BgCanvas backgroundColor={'#010201'} />
      <Suspense fallback={<PageLoading />}>{useRoutes(routes)}</Suspense>
      <Loading />
    </LoadingProvider>
  )
}

export default App
