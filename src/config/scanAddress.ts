import { ChainId } from '@/config/chainId'

const SCAN_ADDRESS = {
  [ChainId.BSC]: 'https://bscscan.com',
  [ChainId.BSC_TESTNET]: 'https://data-seed-prebsc-1-s3.binance.org:8545',
  [ChainId.GODE]: 'https://explorer.godechain.com',
  [ChainId.GODE2]: 'https://explorer.godechain.com',
  [ChainId.GODE_TESTNET]: 'https://explorertest.godechain.com',
}
export default SCAN_ADDRESS
