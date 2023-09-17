import { assetsList, getAssets, getWithdraw, toWithdraw } from '@/request/api'
import { create } from 'zustand'

const assetsStore = create<AssetsStore>()((set, get) => ({
  assetsInfo: null,
  dataList: [],
  page: 1,
  hasMore: true,
  withdrawInfo: null,
  getAssetsInfo: async () => {
    const chain = Number(process.env.REACT_APP_CHAIN_ID)
    const { data }: any = await getAssets({ chain })
    set({ assetsInfo: data.list[0] })
  },
  getAssetsList: async (isLoad = false) => {
    const res: any = await assetsList({
      limit: 10,
      page: get().page,
    })
    if (res.code == 1) {
      const rows: any = res.data.data // 请求返回当页的列表

      if (rows == null || rows.length === 0) {
        // 加载结束
        set({ hasMore: false })
        return
      }

      if (res.data.current_page == 1) {
        set({ dataList: rows })
        return
      }

      // 将新数据与老数据进行合并
      if (isLoad) set((state) => ({ dataList: state.dataList.concat(rows) }))
      // 如果列表数据条数>=总条数，不再触发滚动加载
      if (res.data.last_page == res.data.current_page) {
        set({ hasMore: false })
      }
    }
  },
  loadMore: async () => {
    if (get().dataList.length) {
      set((state) => ({ page: state.page + 1 }))
      get().getAssetsList(true)
    }
  },
  getWithdrawInfo: async (id) => {
    const { data }: any = await getWithdraw({ money_type_id: id })
    set({ withdrawInfo: data })
  },
  withdraw: async (params) => {
    const res: any = await toWithdraw(params)
    return res
  },
}))

export default assetsStore
