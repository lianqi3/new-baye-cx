import type { AxiosRequestConfig, AxiosResponse } from 'axios'

declare global {
  // 针对AxiosRequestConfig配置进行扩展
  interface Interceptors<T = AxiosResponse> {
    requestSuccessFn?: (config: AxiosRequestConfig) => AxiosRequestConfig
    requestFailureFn?: (err: any) => any
    responseSuccessFn?: (res: any) => any
    responseFailureFn?: (err: any) => any
  }

  interface RequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
    interceptors?: Interceptors<T>
    headers?: any
  }

  interface Response<T = any> {
    code: number
    msg: string
    data: T[]
  }

  interface ListResponse<T = any> {
    current_page: number
    last_page: number
    per_page: number
    total: number
    data: T[]
  }

  interface LoginTypes {
    referee: string
    user_address: string
  }

  interface paging {
    limit: number
    page: number
  }

  interface Pledge {
    coin: string // 币种
    num: string // 数量
    coin_other: string | null // 第二币种
    num_other: string | null // 第二币种数量
  }
  interface Withdrawal {
    coin: string // 币种
    amount: string // 数量
  }
  interface Exchange {
    from: string // 被兑换币种
    to: string // 兑换成币种
    trans_byss_amount: string // 被兑换币种数量
    trans_usdt_amount: string // 可兑换成币种数量(按被兑换市价计算得出)
  }

  interface Transfer {
    receive: string // 转入地址、接收地址
    coin: string //	转账币种
    amount: string //	转账数量
  }

  interface Invite {
    invite_code: string
  }
}
