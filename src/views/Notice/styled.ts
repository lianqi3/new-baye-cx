import styled, { css } from 'styled-components'
import listImg from '@/static/symbols-bg.png'

const fontStyle = css`
  .title {
    font-size: 16px;
    font-family: Source Han Sans CN-Medium, Source Han Sans CN;
    font-weight: 500;
    color: #ffffff;
    line-height: 16px;
  }
  .time {
    font-size: 12px;
    font-family: Source Han Sans CN-Regular, Source Han Sans CN;
    font-weight: 400;
    color: #b6debf;
    line-height: 12px;
  }
`

export const NoticeList = styled.div`
  display: grid;
  padding: 25px 18px;
  gap: 16px;
  .box {
    padding: 20px 16px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-image: url(${listImg});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    ${fontStyle}
    .time {
      margin-top: 16px;
    }
    img {
      width: 13px;
      height: 15px;
    }
  }
`
export const DetailContent = styled.div`
  padding: 33px 16px;
  ${fontStyle}
  .time {
    margin-top: 12px;
  }
  .content {
    margin-top: 24px;
    font-size: 14px;
    font-family: Source Han Sans CN-Medium, Source Han Sans CN;
    font-weight: 500;
    color: #ffffff;
    line-height: 21px;
  }
`
