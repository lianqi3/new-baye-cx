import styled, { css } from 'styled-components'
import boxBg from '@/static/assetsBgLg.png'
import tabBg from '@/static/tabBg.png'
import tabActive from '@/static/tabActive1.png'
import tabDefault from '@/static/tabDefault.png'
import ListBg from '@/static/listLg-bg.png'

const bgStyle = css`
  background-size: 100% 100%;
  background-repeat: no-repeat;
`
export const Content = styled.div`
  padding: 17px 18px;
`
export const PoolBox = styled.div`
  padding: 33px 12px;
  background-image: url(${boxBg});
  ${bgStyle}
  .topBox {
    display: flex;
    justify-content: space-between;
    .left {
      font-size: 12px;
      color: #b6debf;
      span {
        font-size: 24px;
        font-family: zihun152hao-jijiachaojihei-Regular, zihun152hao-jijiachaojihei;
        color: #1bff00;
        font-weight: bold;
        display: block;
        margin-top: 12px;
      }
    }
    .right {
      width: 32px;
      height: 32px;
    }
  }
  .bottomBox {
    margin-top: 32px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px 30px;
    div {
      font-size: 12px;
      line-height: 12px;
      color: #b6debf;
      span {
        display: block;
        margin-top: 8px;
        font-weight: bold;
        color: #1bff00;
      }
      &:nth-child(3) {
        text-align: right;
      }
    }
  }
`

export const PoolTab = styled.div`
  height: 28px;
  width: 280px;
  margin: auto;
  display: flex;
  margin-top: 32px;
  overflow: hidden;
  background-image: url(${tabBg});
  ${bgStyle}
  div {
    flex: 1;
    text-align: center;
    line-height: 28px;
    font-size: 14px;
    font-weight: bold;
    color: #0e360f;
    background-image: url(${tabDefault});
    ${bgStyle}
    transition: background-image 0.3s ease-in-out;
    &.active {
      background-image: url(${tabActive});
    }
  }
`

const coinTd = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  line-height: 12px;
  font-weight: 500;
  div {
    flex: 1;
    &:last-child {
      text-align: right;
    }
  }
`

export const List = styled.div`
  margin-top: 12px;
  background-image: url(${ListBg});
  ${bgStyle}
  .content {
    padding: 16px 18px;
    min-height: 470px;
    .th,
    .td {
      ${coinTd}
    }
    .th {
      color: #b6debf;
    }
    .td {
      margin-top: 16px;
      color: #ffffff;
    }
  }
`
