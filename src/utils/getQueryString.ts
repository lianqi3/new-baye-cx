/**
 * 获取链接地址 url参数
 * name ? 指定参数值 : 参数对象
 */
const getQueryString = (name: any) => {
  let url = '',
    obj = null,
    _temp: any[] = []
  // const reg = new RegExp('(^|&|)' + name + '=([^&?]*)(&|$|)', 'i');
  if (window.location.search !== '') {
    url = decodeURIComponent(window.location.search) // 特殊符号解码
    // 获取url中"?"后的字符串并正则匹配
    _temp = url.substr(1).split('&')
  } else {
    // 单页应用 hash路由
    url = decodeURIComponent(window.location.hash)
    const queryArr = url.split('?')
    queryArr.length > 1 && (_temp = queryArr[1].split('&'))
  }
  if (_temp.length) {
    obj = _temp.reduce((prev, item) => {
      const [key, value] = item.split('=')
      if (key.trim()) prev[key] = value
      return prev
    }, {})
  }
  return !obj ? obj : !name ? obj : obj[name] || null
}

export default getQueryString
