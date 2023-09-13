import styled, { css } from 'styled-components'
import assetsBg from '@/static/assetsBg.png'
import BtnImg from '@/static/btn2-lg.png'
import ListBg from '@/static/listLg-bg.png'

const bgStyle = css`
  background-size: 100% 100%;
  background-repeat: no-repeat;
`

export const Content = styled.div`
  padding: 16px;
  .btn {
    width: 100%;
    margin-top: 24px;
    border: none;
    background-image: url(${BtnImg});
    padding: 14px 0;
    font-size: 16px;
    font-weight: bold;
    color: #0e360f;
    line-height: 16px;
    ${bgStyle}
  }
`

export const AssetsInfo = styled.div`
  padding: 33px 12px 25px;
  background-image: url(${assetsBg});
  ${bgStyle}
  .topBox {
    display: flex;
    justify-content: space-between;
    .left {
      font-size: 12px;
      color: #b6debf;
      line-height: 12px;
      .num {
        margin-top: 12px;
        font-size: 24px;
        font-weight: bold;
        color: #1bff00;
        line-height: 24px;
      }
    }
    .right {
      width: 32px;
      height: 32px;
    }
  }
  .bottomBox {
    margin-top: 32px;
    display: flex;
    gap: 20px;
    div {
      flex: 1;
      font-size: 12px;
      color: #b6debf;
      line-height: 12px;
      span {
        margin-top: 8px;
        display: block;
        font-weight: bold;
        color: #1bff00;
      }
      &:last-child {
        text-align: right;
      }
    }
  }
`
const title = css`
  min-width: 160px;
  width: fit-content;
  padding: 6px 0.5rem;
  background: #1bff00;
  font-size: 16px;
  font-weight: bold;
  color: #0e360f;
  line-height: 16px;
  margin: auto;
  text-align: center;
  clip-path: polygon(0% 0%, 100% 0%, 94% 100%, 6% 100%);
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
    &:first-child {
      flex: none;
      text-align: left;
      width: 28%;
    }
    &:last-child {
      text-align: right;
    }
    &:not(:first-child):not(:last-child) {
      text-align: center;
    }
  }
`

export const List = styled.div`
  margin-top: 32px;
  background-image: url(${ListBg});
  ${bgStyle}
  .title {
    ${title}
  }

  .content {
    padding: 14px 16px 52px;
    min-height: 480px;
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
