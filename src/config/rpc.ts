import { ChainId } from './chainId'

const RPC = {
  [ChainId.BSC]: 'https://bsc-dataseed.binance.org',
  [ChainId.BSC_TESTNET]: 'https://data-seed-prebsc-2-s1.binance.org:8545',
  [ChainId.GODE]: 'https://rpc.godechain.com',
  [ChainId.GODE2]: 'https://rpc.godechain03.com',
  [ChainId.GODE_TESTNET]: 'https://rpctest.godechain.com',
}

export default RPC
