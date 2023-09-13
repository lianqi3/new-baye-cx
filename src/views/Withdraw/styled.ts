import styled, { css } from 'styled-components'
import withdrawBg from '@/static/withdraw-bg.png'
import BtnImg from '@/static/btn2-lg.png'

const bgStyle = css`
  background-size: 100% 100%;
  background-repeat: no-repeat;
`

export const Content = styled.div`
  padding: 25px 18px;
  .info-box {
    margin-top: 21px;
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    font-weight: bold;
    color: #b6debf;
    span {
      color: #ffffff;
    }
  }

  .btn {
    width: 100%;
    margin-top: 80px;
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

export const WithdrawBox = styled.div`
  padding: 18px 16px;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  gap: 20px;
  background-image: url(${withdrawBg});
  ${bgStyle}
  &.input-group {
    margin-top: 24px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    font-weight: bold;
    color: #ffffff;
    align-items: center;
    .input {
      font-weight: bold;
      color: #73b081;
      --font-size: 14px;
      --color: #fff;
    }
    .all {
      flex: none;
      align-self: center;
    }
  }
  .mask {
    width: 30px;
    height: 30px;
  }
`
