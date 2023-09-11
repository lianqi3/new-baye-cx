# react-web3-template

## 已集成

- web3-react
- ethers
- react 18.2
- react-redux
- redux-persist
- @reduxjs/toolkit
- ahooks
- antd-mobile
- axios
- dayjs
- less
- @craco/craco
- i18next
- styled-components
- typescript
- eslint
- prettier
- ethers ^5.7.2
- web3-react

## VirtualList 组件使用

> 对接不同后端,组件内部逻辑以及字段可能有些出入,按需修改

```tsx
<VirtualList
  key={'assetsList'}
  propslimit={10}
  list={assetsList}
  method={(vConfig: { page: number; limit: number }) => getAssetsList(vConfig)}
>
  {(item: any) => (
    <Styled.DetailItem>
      <div className='left'>
        <div className='left-title'>提现</div>
        <div className='left-time'>2022/02/03 12:03:56</div>
      </div>
      <div className='right'>{item.money_action + item.money}</div>
    </Styled.DetailItem>
  )}
</VirtualList>
```

- key 多个 VirtualList 渲染时必加
- propslimit 一次获取多少数据
- getAssetsList 获取页面数据的网络请求
- assetsList 当前页面的数据接收器
- 渲染模版(自定义)

```tsx
<Styled.DetailItem>
  <div className='left'>
    <div className='left-title'>{item.messages}</div>
    <div className='left-time'>{item.time}</div>
  </div>
  <div className='right'>{item.money_action + item.money}</div>
</Styled.DetailItem>
```

## ERC20 合约常用方法

1. name()：获取代币名称。(只读方法)
2. symbol()：获取代币符号。(只读方法)
3. decimals()：获取代币的小数位数。(只读方法)
4. totalSupply()：获取代币的总供应量。(只读方法)
5. balanceOf(address account)：获取指定账户的代币余额。(只读方法)
6. transfer(address recipient, uint256 amount)：将指定数量的代币转移到另一个账户。(可读可写合约)
7. transferFrom(address sender, address recipient, uint256 amount)：从发送方账户中转移指定数量的代币到接收方账户。(可读可写合约)
8. approve(address spender, uint256 amount)：授权第三方账户可以从你的账户中转移指定数量的代币。(可读可写合约)
9. allowance(address owner, address spender)：获取授权给指定账户的代币数量。(只读方法)

## 基于 TypeScript 后端接口对接类型声明

- 请求参数统一 `xxxxRequest`
- 响应参数统一 `xxxxResponse`

```ts
export function apiLogin<T>(params: LoginRequest): Promise<Response<LoginResponse>> {
  return request.post({
    url: '/user/login/register',
    params,
  })
}
```

```ts
// 对接不同后端可能有些出入需要修改
export interface Response<T = any> {
  code: number
  msg: string
  data: T
}
export interface ListResponse<T = any> {
  current_page: number
  last_page: number
  per_page: number
  total: number
  data: T[]
}
```

## request/index.ts 增加支付过滤接口

作用:

- 过滤支付接口,支付接口的 loading 状态改为 loading Hooks, 其他接口默认 antd-mobile 的 Toast.loading

## web3/index.ts changeNetwork 网络切换优化

上一个版本存在问题:

1. 不兼容 `trustWallet` 钱包的网络切换
2. 无法获取当前 chainId
3. 无法动态获取 rpc 配置

优化:

- 优化上一个版本无法正常获取当前版本号 bug
- 增加可选 rpc 配置,可以获取后端提供的 rpc 配置
- 兼容 `trustWallet` 钱包
- 动态获取 rpc 配置

## 增加策略模式表单验证

```ts

const errorMessages = {
  0: '提现或者充值暂未开放',
  1: '请输入金额',
  2: '金额不能为0',
  3: `金额不能小于${amount}`,
  4: `金额不能大于${amount}`,
  5: '余额不足',
};

validate(value, amount, isStatusValidation, t, errorMessages); // 执行开关验证
validate(value, amount, isEmptyValidation, t, errorMessages); // 执行空验证
validate(value, amount, isNegativeValidation, t, errorMessages); // 执行小于0验证
validate(value, amount, isInsufficientBalanceValidation, t, errorMessages); // 执行余额不足验证
validate(value, amount, isMinValidation, t, errorMessages); // 执行最小值验证
validate(value, amount, isMaxValidation, t, errorMessages); // 执行最大值验证
```