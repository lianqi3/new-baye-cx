import React, { useEffect, Suspense, useState } from 'react'
import { useLocation, useRoutes, useSearchParams } from 'react-router-dom'
import routes from '@/router'
import { useWeb3React } from '@web3-react/core'
import { changeNetwork } from '@/web3'
import Loading from '@/components/Loading/Loading'
import PageLoading from '@/components/PageLoading'

import { injected } from '@/web3/connectors'
import { LoadingProvider } from '@/components/Loading/LoadingContext'
import { createGlobalStyle } from 'styled-components'
import mainStore from '@/store'
import { useTranslation } from 'react-i18next'
import { ConfigProvider, setDefaultConfig } from 'antd-mobile'
import enUS from 'antd-mobile/es/locales/en-US'
import zhCN from 'antd-mobile/es/locales/zh-CN'
import BgCanvas from '@/components/BgCanvas/BgCanvas'
import BindSuper from '@/components/BindSuper'

const CHAINID = Number(process.env.REACT_APP_CHAIN_ID)
function App() {
  const { login, outLogin, isBindCode } = mainStore()
  const { activate, chainId, account, error } = useWeb3React()
  const { i18n } = useTranslation()
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const [code, setCode] = useState<string>('')
  const hasWeb3 = Boolean(window.web3) || Boolean(window.ethereum)
  const [showPopup, setShowPopup] = useState<boolean>(false)

  useEffect(() => {
    const locale: any = localStorage.getItem('locale') ?? 'zh'

    if (locale === 'zh') {
      setDefaultConfig({
        locale: zhCN,
      })
    } else {
      setDefaultConfig({
        locale: enUS,
      })
    }
    i18n.changeLanguage(locale)
  }, [i18n.language])
  // 链接钱包
  useEffect(() => {
    const { ethereum } = window
    if (!ethereum) return
    activate(
      injected,
      (err) => {
        changeNetwork(CHAINID)
      },
      false,
    ).then(() => {
      if (chainId !== CHAINID) {
        changeNetwork(CHAINID).then(() => {
          window.location.reload()
        })
      }
    })
  }, [chainId])

  useEffect(() => {
    if (isBindCode) {
      setShowPopup(true)
    } else {
      setShowPopup(false)
    }
  }, [isBindCode])

  // 监听切换
  const handleChainChanged = async () => {
    console.log('网络切换监听')
    outLogin()
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

  useEffect(() => {
    const value = params.get('code')
    console.log(value)

    if (value) {
      setCode(value)
    }
  }, [location])

  if (hasWeb3) {
    window.ethereum.on('chainChanged', handleChainChanged)
    window.ethereum.on('accountsChanged', handleAccountsChanged)
  }
  // 钱包切换刷新
  useEffect(() => {
    if (!hasWeb3) return
    window.ethereum.on('accountsChanged', () => {
      outLogin()
      window.location.reload()
    })
    if (account) {
      localStorage.setItem('address', account)
      console.log(code)

      login({
        referee: code,
        user_address: account,
      })
    }
  }, [account, chainId, code])

  function bindSuper(value: string) {
    setCode(value)
  }
  return (
    <LoadingProvider>
      <BindSuper visible={showPopup} submit={bindSuper} />
      <BgCanvas backgroundColor={'#010201'} />
      <Suspense fallback={<PageLoading />}>{useRoutes(routes)}</Suspense>
      <Loading />
    </LoadingProvider>
  )
}

export default App
