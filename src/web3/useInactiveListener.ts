import { useWeb3React as useWeb3ReactCore } from '@web3-react/core'
import { useEffect } from 'react'
import { injected } from '@/web3/connectors'
import { changeNetwork } from '@/web3/index'
const CHAINID = Number(process.env.REACT_APP_CHAIN_ID)

function useInactiveListener(suppress = false) {
  const { active, error, activate } = useWeb3ReactCore() // specifically using useWeb3React because of what this hook does

  useEffect(() => {
    const { ethereum } = window
    if (ethereum && ethereum.on && !active && !error && !suppress) {
      const handleChainChanged = async () => {
        console.log('网络切换监听')
        // eat errors
        await activate(injected, undefined, true).catch((error) => {
          console.error('Failed to activate after chain changed', error)
        })
        await changeNetwork(CHAINID)
      }

      const handleAccountsChanged = (accounts: string[]) => {
        console.log('钱包切换监听')
        if (accounts.length > 0) {
          // eat errors
          activate(injected, undefined, true).catch((error) => {
            console.error('Failed to activate after accounts changed', error)
          })
        }
      }

      ethereum.on('chainChanged', handleChainChanged)
      ethereum.on('accountsChanged', handleAccountsChanged)

      return () => {
        if (ethereum.removeListener) {
          ethereum.removeListener('chainChanged', handleChainChanged)
          ethereum.removeListener('accountsChanged', handleAccountsChanged)
        }
      }
    }
    return undefined
  }, [active, error, suppress, activate])
}

export default useInactiveListener
