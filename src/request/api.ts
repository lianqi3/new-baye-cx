import request from './index'

// 登录
export function Login(data: LoginTypes): Promise<Response> {
  return request.post({
    url: '/user/login/register',
    data,
  })
}

// 获取公告
export function GetNotice(data: any): Promise<Response> {
  return request.post({
    url: 'news/news/index',
    data,
  })
}

// 获取币对
export function getCoin(): Promise<Response> {
  return request.post({
    url: 'invest/home/getCoin',
  })
}

// 获取概览
export function getOverview(): Promise<Response> {
  return request.post({
    url: 'invest/Home/index',
  })
}

// 获取全网算力排行
export function getFuelList(): Promise<Response> {
  return request.post({
    url: 'invest/Home/fuelList',
  })
}

// 获取矿机信息
export function getMining(data: any): Promise<Response> {
  return request.post({
    url: 'invest/Lease/getMining',
    data,
  })
}
// 获取矿机支付信息
export function getTrans(data: any): Promise<Response> {
  return request.post({
    url: 'invest/Lease/trans',
    data,
  })
}
// 获取矿机支付信息
export function getMineList(data: any): Promise<ListResponse> {
  return request.post({
    url: 'invest/Lease/getOrderList',
    data,
  })
}
