import { Input } from 'antd-mobile'
import styled from 'styled-components'
import bindSuper from '@/static/bindSuper.png'
import BtnImg from '@/static/btn1.png'

export const PageModelStyled = styled.div`
  .model-content {
    background-image: url(${bindSuper});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-color: transparent;
    padding: 16px;
    .title {
      text-align: center;
      font-size: 16px;
      font-family: Source Han Sans CN-Medium, Source Han Sans CN;
      font-weight: bold;
      color: #ffffff;
    }
    .input {
      margin-top: 24px;
      background: rgba(27, 255, 0, 0.11);
      border: 1px solid #1bff00;
      padding: 12px 9px;
      --font-size: 14px;
      font-weight: bold;
      --color: #fff;
      --placeholder-color: #73b081;
    }
    .btn {
      margin-top: 30px;
      width: 100%;
      font-size: 16px;
      font-weight: bold;
      color: #ffffff;
      line-height: 16px;
      border: none;
      padding: 11px 0;
      background-image: url(${BtnImg});
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }
  }
`
