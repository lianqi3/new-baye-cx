import Request from './http'
import { Toast } from 'antd-mobile'
import * as CONFIG from '@/config/config'
const BASE_URL = process.env.REACT_APP_BASE_URL
let requestCount = 0
let handler: any = null
const request = new Request({
  baseURL: BASE_URL,
  timeout: 50000,
  interceptors: {
    requestSuccessFn: (config: any) => {
      requestCount += 1
      // 过滤掉支付接口
      if (!CONFIG.PAY_URL.includes(config.url as string)) {
        handler = Toast.show({
          icon: 'loading',
          content: 'loading...',
          maskClickable: false,
        })
      }
      return config
    },
    requestFailureFn: (config: any) => {
      setTimeout(() => {
        handler?.close()
      }, CONFIG.NETWORK_WAIT)
      return config
    },
    responseSuccessFn: (config: any) => {
      requestCount -= 1
      if (requestCount === 0) {
        setTimeout(() => {
          handler?.close()
        }, CONFIG.NETWORK_WAIT)
      }
      return config
    },
    responseFailureFn: (config: any) => {
      setTimeout(() => {
        handler?.close()
      }, CONFIG.NETWORK_WAIT)
      return config
    },
  },
})

export default request
