import styled, { createGlobalStyle, css } from 'styled-components'
import bgImg from '@/static/head-bg.png'
import BtnLeft from '@/static/btn-left.png'
import BtnRight from '@/static/btn-right.png'

export const TopNav = styled.div`
  width: 100%;
  padding: 11px 16px 18px;
  display: flex;
  justify-content: space-between;
  background-image: url(${bgImg});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  .linkWallet {
    padding: 5px 12px;
    border: none;
    height: 32px;
    background: #ffffff;
    border-radius: 4px 4px 4px 4px;
    font-size: 14px;
    font-family: Source Han Sans CN-Regular, Source Han Sans CN;
    font-weight: 400;
    color: #10b85d;
    line-height: 16px;
  }
  .languageBtn {
    border: none;
    height: 28px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 4px;
    font-size: 12px;
    font-family: Source Han Sans CN-Regular, Source Han Sans CN;
    color: #387857;
    span {
      display: flex;
      align-items: center;
      gap: 2px;
    }
  }
`

export const ButtonNav = styled.button`
  padding: 7px 12px;
  font-size: 14px;
  font-weight: 500;
  color: #0e360f;
  line-height: 14px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  &.left {
    background-image: url(${BtnLeft});
  }
  &.right {
    padding: 7px;
    display: flex;
    align-items: center;
    background-image: url(${BtnRight});
  }
`

export const LanguageContent = styled.div`
  display: grid;
  div {
    padding: 16px;
    font-size: 14px;
    text-align: center;
    color: #939393;
    &.active {
      font-size: 15px;
      color: #000;
    }
  }
`
export const BackNav = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  .backImg {
    width: 24px;
    height: 24px;
  }
  .title {
    flex: auto;
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    color: #ffffff;
    line-height: 24px;
    padding-right: 24px;
  }
`
