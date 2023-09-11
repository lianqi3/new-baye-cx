import networkConf, { NetworkConf } from '@/config/netWorkConfig'
import { ethers } from 'ethers'

export const changeNetwork = async (targetChainId: number, config?: NetworkConf) => {
  if (!config) {
    config = networkConf
  }
  return new Promise<void>(async (reslove) => {
    const { ethereum } = window
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    // 检查当前链ID
    const chainId = await provider.getNetwork().then((network: any) => network.chainId)
    console.log('当前链: ', chainId)
    console.log('目标链: ', targetChainId)
    if (config !== undefined) {
      if (ethereum && !config[chainId]) {
        if (Number(chainId) !== Number(targetChainId)) {
          console.log('开始切换')
          await provider
            .send('wallet_switchEthereumChain', [
              {
                chainId: `0x${targetChainId.toString(16)}`,
              },
            ])
            .then(() => {
              setTimeout(reslove, 500)
            })
            .catch(async () => {
              await provider
                .send('wallet_addEthereumChain', [
                  {
                    ...config![targetChainId],
                  },
                ])
                .then(() => {
                  setTimeout(reslove, 500)
                })
            })
        } else {
          console.log('链正确')
        }
      } else {
        console.log('无法切换')
      }
    }
  })
}
