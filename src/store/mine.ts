import useContract from '@/hooks/useContract'
import { getMineList, getMining, getTrans } from '@/request/api'
import { useWeb3React } from '@web3-react/core'
import { create } from 'zustand'

const mineStore = create<MineStore>()((set, get) => ({
  mineData: null,
  transConfig: null,
  dataList: [],
  page: 1,
  hasMore: true,
  getMining: async (chain: any) => {
    const { data }: any = await getMining({ chain })
    set({ mineData: data })
  },
  getTransInfo: async (config: any) => {
    const { data }: any = await getTrans(config)
    set({ transConfig: data.data })
  },
  getDataList: async (isLoad = false) => {
    const res: any = await getMineList({
      limit: 10,
      page: get().page,
      order_type: 0,
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
      get().getDataList(true)
    }
  },
}))

export default mineStore
