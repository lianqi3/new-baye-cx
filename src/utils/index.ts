import TextOmit from './textOmit'
import getQueryString from './getQueryString'
import { useLocation } from 'react-router-dom'

/** address 截取. */
export const formatStrAddress = (a: number, b: number, str: string) => {
  return str.substring(0, a) + new Array(4).join('.') + str.substring(str.length - b, str.length)
}

// 小数位数解析（不四舍五入）
export const decimal = (num: any, digit: number) => {
  const temp = Math.pow(10, digit)
  return Math.floor(Number(num) * temp) / temp
}

export { TextOmit, getQueryString }
