import React from 'react'
import axios from 'axios'
// eslint-disable-next-line no-duplicate-imports
import type { AxiosInstance } from 'axios'
import { Toast } from 'antd-mobile'

class Request {
  instance: AxiosInstance
  // request实例 => axios的实例
  constructor(config: RequestConfig) {
    this.instance = axios.create(config)
    // 每个instance实例都添加拦截器
    this.instance.interceptors.request.use(
      (config) => {
        if (config && config.headers) {
          config.headers['app-key'] = '123456789'
          config.headers['Content-Type'] = 'application/json'
          config.headers['X-localization'] = window.localStorage.getItem('i18nextLng') || 'zh'
          config.headers['User-Token'] = window.localStorage.getItem('token') || ''
          config.headers['User-Address'] = window.localStorage.getItem('address') || ''
        }
        // loading/token
        return config
      },
      (err) => {
        return err
      },
    )
    this.instance.interceptors.response.use(
      (res) => {
        // loading/token
        return res.data
      },
      (err) => {
        return err
      },
    )

    // 针对特定的Request实例添加拦截器
    this.instance.interceptors.request.use(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      config.interceptors?.requestSuccessFn,
      config.interceptors?.requestFailureFn,
    )
    this.instance.interceptors.response.use(
      config.interceptors?.responseSuccessFn,
      config.interceptors?.responseFailureFn,
    )
  }

  // 封装网络请求的方法
  // T => IHomeData
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  request<T = any>(config: RequestConfig<T>) {
    // 单次请求的成功拦截处理
    if (config.interceptors?.requestSuccessFn) {
      config = config.interceptors.requestSuccessFn(config)
    }

    // 返回Promise
    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, any>(config)
        .then((res) => {
          if (res.msg && res.code !== 1) {
            Toast.show({
              content: res.msg,
            })
          }
          switch (res.code) {
            case 1:
              resolve(res)
              break
            case -403:
              window.location.replace('/')
              reject(res)
              break
            default:
              resolve(res)
          }
          // if (config.interceptors?.responseSuccessFn) {
          //   // 单词响应的成功拦截处理
          //   res = config.interceptors.responseSuccessFn(res);
          // }
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get<T = any>(config: RequestConfig<T>) {
    return this.request({ ...config, method: 'GET' })
  }
  post<T = any>(config: RequestConfig<T>) {
    return this.request({ ...config, method: 'POST' })
  }
  delete<T = any>(config: RequestConfig<T>) {
    return this.request({ ...config, method: 'DELETE' })
  }
  patch<T = any>(config: RequestConfig<T>) {
    return this.request({ ...config, method: 'PATCH' })
  }
}

export default Request
