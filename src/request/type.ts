import type { AxiosRequestConfig, AxiosResponse } from 'axios'

// 针对AxiosRequestConfig配置进行扩展
export interface Interceptors<T = AxiosResponse> {
  requestSuccessFn?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestFailureFn?: (err: any) => any
  responseSuccessFn?: (res: any) => any
  responseFailureFn?: (err: any) => any
}

export interface RequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: Interceptors<T>
  headers?: any
}

export interface Response<T = any> {
  code: number
  msg: string
  data: T[]
}

export interface ListResponse<T = any> {
  current_page: number
  last_page: number
  per_page: number
  total: number
  data: T[]
}
