import { ChainId } from '@/config/chainId'
import Rpc from '@/config/rpc'
import SCAN_ADDRESS from '@/config/scanAddress'

export type NetworkConf = {
  [key: number]: {
    chainId: string
    chainName: string
    nativeCurrency: {
      name: string
      symbol: string
      decimals: number
    }
    rpcUrls: string[]
    blockExplorerUrls: string[]
  }
}

const networkConf: NetworkConf = {
  [ChainId.BSC]: {
    chainId: '0x38',
    chainName: 'BSC',
    nativeCurrency: {
      name: 'BNB',
      symbol: 'BNB',
      decimals: 18,
    },
    rpcUrls: [Rpc[ChainId.BSC]],
    blockExplorerUrls: [SCAN_ADDRESS[ChainId.BSC]],
  },
  [ChainId.BSC_TESTNET]: {
    chainId: `0x${(97).toString(16)}`,
    chainName: 'BSCTEST',
    nativeCurrency: {
      name: 'tBNB',
      symbol: 'tBNB',
      decimals: 18,
    },
    rpcUrls: [Rpc[ChainId.BSC_TESTNET]],
    blockExplorerUrls: [SCAN_ADDRESS[ChainId.BSC_TESTNET]],
  },
  [ChainId.GODE_TESTNET]: {
    chainId: `0x${(5566).toString(16)}`,
    chainName: 'GODETEST',
    nativeCurrency: {
      name: 'GODE',
      symbol: 'GODE',
      decimals: 18,
    },
    rpcUrls: [Rpc[ChainId.GODE_TESTNET]],
    blockExplorerUrls: [SCAN_ADDRESS[ChainId.GODE_TESTNET]],
  },
  [ChainId.GODE]: {
    chainId: `0x${(5500).toString(16)}`,
    chainName: 'GODE',
    nativeCurrency: {
      name: 'GODE',
      symbol: 'GODE',
      decimals: 18,
    },
    rpcUrls: [Rpc[ChainId.GODE]],
    blockExplorerUrls: [SCAN_ADDRESS[ChainId.GODE]],
  },
  [ChainId.GODE2]: {
    chainId: `0x${(5500).toString(16)}`,
    chainName: 'GODE',
    nativeCurrency: {
      name: 'GODE',
      symbol: 'GODE',
      decimals: 18,
    },
    rpcUrls: [Rpc[ChainId.GODE2]],
    blockExplorerUrls: [SCAN_ADDRESS[ChainId.GODE2]],
  },
}

export default networkConf
