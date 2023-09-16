import { create } from 'zustand'
import { Toast } from 'antd-mobile'
import { getCoin, getFuelList, GetNotice, getOverview, Login } from '@/request/api'

const mainStore = create<AppStore>()((set, get) => ({
  address: null,
  token: null,
  userInfo: null,
  commonInfo: null,
  chainInfo: null,
  isBindCode: false,
  noticeList: [],
  coinData: null,
  overviewData: null,
  fuelList: [],
  login: async (params: LoginTypes) => {
    const res: any = await Login(params)
    if (res.code === -2) {
      set({ isBindCode: true })
      return
    } else if (res.code === 1) {
      const data = res.data
      localStorage.setItem('userInfo', JSON.stringify(data))
      localStorage.setItem('token', data.token)
      set({ isBindCode: false })
      set({ address: data.address })
      set({ userInfo: data })
    }
    // set({ token: data.token })
  },
  outLogin: () => {
    console.log('退出登录')

    localStorage.clear()
    set({ userInfo: null })
    set({ token: null })
    set({ address: null })
  },
  getNoticeList: async () => {
    const { data }: any = await GetNotice({
      type_id: 1,
    })
    set({ noticeList: data.data })
  },
  getCoinList: async () => {
    const { data }: any = await getCoin()
    set({ coinData: data })
  },
  getOverviewData: async () => {
    const { data }: any = await getOverview()
    set({ overviewData: data })
  },
  getFuelList: async () => {
    const { data }: any = await getFuelList()
    set({ fuelList: data.data })
  },
}))

export default mainStore
