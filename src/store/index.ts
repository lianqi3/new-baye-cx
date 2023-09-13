// import { addBindSuper, assetInfo, commonInfo, Login } from '@/request/api'
import { create } from 'zustand'
import { Toast } from 'antd-mobile'

const mainStore = create<AppStore>()((set, get) => ({
  address: null,
}))

export default mainStore
