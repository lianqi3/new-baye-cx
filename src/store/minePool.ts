import { getMinePoolData, getMinePoolInfo } from '@/request/api'
import { create } from 'zustand'

const minePoolStore = create<MinePoolStore>()((set, get) => ({
  dataInfo: null,
  dataList: [],
  page: 1,
  hasMore: true,
  getDataInfo: async () => {
    const { data }: any = await getMinePoolInfo()
    set({ dataInfo: data })
  },
  getDataList: async (type = 1, isLoad = false) => {
    const res: any = await getMinePoolData({
      limit: 10,
      page: get().page,
      type,
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
  loadMore: async (type: number) => {
    if (get().dataList.length) {
      set((state) => ({ page: state.page + 1 }))
      get().getDataList(type, true)
    }
  },
}))
export default minePoolStore
