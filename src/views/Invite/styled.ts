import styled, { css } from 'styled-components'
import inviteBg from '@/static/inviteBg.png'
import InfoBg from '@/static/withdraw-bg.png'

const bgStyle = css`
  background-size: 100% 100%;
  background-repeat: no-repeat;
`

export const Content = styled.div`
  padding: 20px 21px;
`

export const InviteBox = styled.div`
  margin-top: 56px;
  padding-top: 21px;
  padding-bottom: 28px;
  height: 500px;
  background-image: url(${inviteBg});
  ${bgStyle}
  .title {
    font-size: 32px;
    font-weight: bold;
    color: #ffffff;
    text-align: center;
  }
  .info {
    text-align: center;
    width: 267px;
    margin: auto;
    font-size: 13px;
    font-weight: bold;
    color: #ffffff;
  }
`

export const InviteInfo = styled.div`
  margin-top: 24px;
  display: flex;
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  justify-content: space-between;
  padding: 13px 12px;
  background-image: url(${InfoBg});
  ${bgStyle}
  span {
    margin-left: 16px;
  }
  img {
    width: 24px;
    height: 24px;
  }
`
