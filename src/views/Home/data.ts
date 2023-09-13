export interface commonTypes {
  byss_price: string // BYSS质押价
  byss_market_price: string // BYSS市场价
  baye_price: string // BAYE质押价
  baye_market_price: string // BAYE市场价
  address: string // BAYE质押地址
  contract: string // BAYE合约地址
  total_output_byss: number // BYSS产出对应质押阶段：>100W为第二阶段， >200万为第三阶段
  pledge_step: number // 质押阶段
  pledge_byss_rate: number // 质押BYSS比列
  on_user_max_pledge: number // 个人最多可质押(U)
}
