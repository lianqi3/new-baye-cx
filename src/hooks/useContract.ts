import { ethers } from 'ethers'
import { Web3Provider } from '@ethersproject/providers'
import { formatUnits } from '@ethersproject/units'
import abi from '@/web3/abi.json'
type ContractConfig = [string, ...any[]]
const useContract = () => {
  /*
   * @method(writeContract)
   * 写合约方法,用于合约转账,等操作合约方法
   * */
  const writeContract = (write: {
    // 合约方法名
    method: string
    // 合约地址
    contract: string
    // web3 实例 使用web3-react的话就是 library
    provider: Web3Provider
    // 合约方法需要的参数
    config: ContractConfig
  }): Promise<{ loading: boolean; data: any }> => {
    const { method, contract, provider, config } = write
    if (!method || !abi || !contract || !provider || !config) {
      throw new Error('合约参数不全')
    }
    return new Promise(async (resolve, reject) => {
      try {
        // @ts-ignore
        const Contract = new ethers.Contract(contract, abi, provider.getSigner())
        const receipt = await Contract[method](...config)
        const res = await receipt.wait()
        resolve({ loading: true, data: res })
      } catch (e) {
        reject({ loading: false, data: e })
      }
    })
  }

  /*
   * @method(readContract)
   * 写合约方法,用于查询余额等读取合约数据操作
   * */
  const readContract = (read: {
    // 合约方法名
    method: string
    // 合约地址
    contract: string
    // web3 实例
    provider: Web3Provider
    // 合约方法需要的参数
    config: ContractConfig
    // 是否格式化
    format: boolean
    // 小数位
    decimal: number
  }): Promise<{ loading: boolean; data: any }> => {
    const { method, contract, provider, config, format, decimal } = read
    if (!method || !abi || !contract || !provider || !config) {
      throw new Error('合约参数不全')
    }
    return new Promise(async (resolve, reject) => {
      try {
        // @ts-ignore
        const Contract = new ethers.Contract(contract, abi, provider.getSigner())
        const receipt = await Contract[method](...config)
        if (format) {
          resolve({
            loading: false,
            data: formatUnits(receipt.toString(), decimal),
          })
        } else {
          resolve({ loading: true, data: receipt })
        }
      } catch (e) {
        reject({ loading: false, data: e })
      }
    })
  }
  /*
   * @method(mainTransfer)
   * 主币交易
   * */
  const mainTransfer = async (data: {
    // 收款钱包
    to: string
    // 金额
    value: any
    // web3实例
    provider: Web3Provider
  }): Promise<{ loading: boolean; data: any }> => {
    const { to, value, provider } = data

    return new Promise(async (resolve, reject) => {
      try {
        if (!to || !value || !provider) {
          reject({ loading: false, data: '合约参数不全' })
        }
        // @ts-ignore
        const Signer = provider.getSigner()
        const receipt = await Signer.sendTransaction({ to, value })
        const res = await receipt.wait()
        resolve({ loading: true, data: res })
      } catch (err) {
        reject({ loading: false, data: err })
      }
    })
  }
  /*
   * @method(getAmount)
   * 查询主币余额
   * */
  const getAmount = (data: {
    // web3实例
    provider: Web3Provider
    // 钱包地址
    account: string
    // 小数位
    decimal: number
  }): Promise<{ loading: boolean; data: any }> => {
    const { provider, account, decimal } = data
    return new Promise(async (resolve, reject) => {
      try {
        if (!provider || !account || !decimal) {
          reject({ loading: false, data: '合约参数不全' })
        }
        const res = await provider.getBalance(account)
        resolve({ loading: false, data: formatUnits(res.toString(), decimal) })
      } catch (e) {
        reject({ loading: false, data: e })
      }
    })
  }

  /*
   * @method(getTokenAmount)
   * 查询代币余额
   * */
  const getTokenAmount = async (data: {
    // 合约地址
    contract: string
    // 小数位
    decimal: number
    // 钱包地址
    account: any
    // web3 实例
    provider: Web3Provider
  }): Promise<{ loading: boolean; data: any }> => {
    const { provider, contract, decimal, account } = data

    return new Promise(async (resolve, reject) => {
      try {
        if (!provider || !abi || !contract || !decimal || !account) {
          reject({ loading: false, data: '合约参数不全' })
        }
        // @ts-ignore
        const Contract = new ethers.Contract(contract, abi, provider.getSigner())
        const TokenName = await Contract.name()
        const TokenSymbol = await Contract.symbol()
        const res = await Contract.balanceOf(account)
        const TokenAmount = formatUnits(res.toString(), decimal)
        resolve({
          loading: true,
          data: {
            TokenName,
            TokenSymbol,
            TokenAmount,
          },
        })
      } catch (err) {
        reject({ loading: true, data: err })
      }
    })
  }

  return {
    writeContract,
    readContract,
    mainTransfer,
    getAmount,
    getTokenAmount,
  }
}

export default useContract
