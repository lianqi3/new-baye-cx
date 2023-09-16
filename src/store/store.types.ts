interface AppStore {
  address: string | null
  token: string | null
  userInfo: userInfoType | null
  commonInfo: commonInfoType | null
  chainInfo: chainInfoType | null
  isBindCode: boolean
  noticeList: Notice[]
  coinData: CoinData[] | null
  overviewData: Overview | null
  fuelList: FuelList[] | null
  login: (params: LoginTypes) => Promise<void>
  outLogin: () => void
  getNoticeList: () => Promise<void>
  getCoinList: () => Promise<void>
  getOverviewData: () => Promise<void>
  getFuelList: () => Promise<void>
}

interface MineStore {
  mineData: MineType | null
  transConfig: TransConfig | null
  dataList: MineList[]
  page: number
  hasMore: boolean
  getMining: (chain: number) => Promise<void>
  getTransInfo: (config: TransQuery) => Promise<void>
  getDataList: (order_type: number) => Promise<void>
  loadMore: (index: number) => Promise<void>
}

interface MineList {
  order_id: number
  order_type: number // 1购买矿机 2质押激活 3添加燃料
  add_time: string // 下单时间
  order_money: number // 金额（显示这个）
  cu: number // 加多少算力
  order_money_usdt: number // 金额USDT
  money_type_name: string // 质押币种
  order_type_fmt: string // 类型
}

interface QueryMine {
  limit: number
  page: number
  order_type: number
}
interface TransConfig {
  token: string // 预计扣除 （显示这个）第三步添加燃料输入不要超过这个数
  coin_name: string // 代币单位
  usdt: number // 预计扣除
  wallet_address: string // 收款地址
  contract_address: string // 合约地址
}

interface TransQuery {
  cu: string
  type: number
  chain: string
}

interface MineType {
  suanli: string // 已激活cu
  no_cu: string // 未激活cu
  progress_bar: string // 进度条
  cu_count: number // 当前拥有矿机cu
  order_usdt: number // 当前质押资产
  residual_income: string
  money_type_info: {
    baye: string
    usdt: string
  }
}

interface FuelList {
  suanli: number
  address: string
}

interface Overview {
  data_1: number
  data_2: number // 昨日全网收益BAYE
  data_3: number // 全网总算力
  data_4: number
}
interface CoinData {
  transaction_pair: string
  exchange_rate: number
  range_ability: string
}

interface chainInfoType {
  browser_url: string
  chain_id: number
  rpc_url: string
  web: string
}

interface userInfoType {
  id: number // 用户id
  username: string // 钱包地址
  my_invite_code: string // 我的邀请码
  fuel: number // 燃料
  power: number // 算力
  user_id: number
  createtime: number
  expiretime: number
  expires_in: number
  achievement: string
  invite_id: number // 邀请人ID
}

interface commonInfoType {
  byss_price: number // BYSS质押价
  byss_market_price: number // BYSS市场价
  baye_price: number // BAYE质押价
  baye_market_price: number // BAYE市场价
  address: string // BAYE质押地址
  contract: string // BAYE合约地址
  total_output_byss: number // BYSS产出对应质押阶段：>100W为第二阶段， >200万为第三阶段
  pledge_step: number // 质押阶段
  pledge_byss_rate: number // 质押BYSS比列
  on_user_max_pledge: number // 个人最多可质押(U)
}

interface Notice {
  content: string
  creat_time_cl: string
  create_time: number
  id: number
  image: string
  introduce: string
  jump_url: string
  show_url: string
  title: string
  update_time: number
}
