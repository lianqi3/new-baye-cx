import networkConf, { NetworkConf } from '@/config/netWorkConfig'
import { ethers } from 'ethers'

export const changeNetwork = async (targetChainId: number, config?: NetworkConf) => {
  if (!config) {
    config = networkConf
  }
  return new Promise<void>(async (resolve) => {
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
          window.ethereum
            .send('wallet_switchEthereumChain', [
              {
                chainId: `0x${targetChainId.toString(16)}`,
              },
            ])
            .then(() => {
              setTimeout(resolve, 500)
            })
            .catch(async (error: { code: number }) => {
              console.log('切换以太坊链时出错:', error)

              if (error.code === 4902) {
                // 检查链配置是否存在
                const chainConfig = config![targetChainId]
                if (chainConfig) {
                  try {
                    console.log('尝试添加以太坊链配置')
                    await window.ethereum.send('wallet_addEthereumChain', [chainConfig])
                    console.log('成功添加以太坊链配置')
                    // 添加成功后可以再次尝试切换以太坊链
                    // ...
                  } catch (addError) {
                    console.error('添加以太坊链配置时出错:', addError)
                  }
                } else {
                  console.error('缺少以太坊链配置')
                }
              }
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
