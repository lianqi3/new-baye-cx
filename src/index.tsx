import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import { ExternalProvider, JsonRpcFetchFunc, Web3Provider } from '@ethersproject/providers'
import { Web3ReactProvider, createWeb3ReactRoot } from '@web3-react/core'
import 'normalize.css'
import 'lib-flexible'

import App from './App'
import './global.css'
import '@/language'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const getLibrary = (provider: ExternalProvider | JsonRpcFetchFunc) => {
  const library = new Web3Provider(provider)
  library.pollingInterval = 8000
  return library
}

const Web3ReactProviderReloaded = createWeb3ReactRoot('anotherOne')

root.render(
  <HashRouter>
    <Web3ReactProvider getLibrary={getLibrary}>
      <Web3ReactProviderReloaded getLibrary={getLibrary}>
        <App />
      </Web3ReactProviderReloaded>
    </Web3ReactProvider>
  </HashRouter>,
)
