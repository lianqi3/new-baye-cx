import styled, { css } from 'styled-components'
import SymbolsBg from '@/static/symbols-bg.png'
import TabDefault from '@/static/tabDefault.png'
import TabActive from '@/static/tabActive.png'
import ListBg from '@/static/list-bg.png'
import BtnImg from '@/static/btn1.png'
import BtnImgLg from '@/static/btn1-lg.png'

const bgStyle = css`
  background-size: 100% 100%;
  background-repeat: no-repeat;
`

export const Content = styled.div`
  padding: 24px 18px;
`
export const MineInfo = styled.div`
  position: relative;
  margin-top: 25px;
  padding: 0 16px;
  .earth {
    width: 58px;
    height: 58px;
    position: absolute;
    top: 3px;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    transform-style: preserve-3d; /* 保持子元素的3D效果 */
    animation: rotate 7s linear infinite; /* 使用动画效果，无限循环旋转 */
  }

  @keyframes rotate {
    from {
      transform: rotateY(0deg); /* 起始角度 */
    }
    to {
      transform: rotateY(360deg); /* 终止角度（一圈） */
    }
  }
  .content {
    display: grid;
    gap: 17px 31px;
    grid-template-columns: repeat(2, 1fr);
    .box {
      padding: 12px 9px;
      position: relative;
      &.right {
        text-align: right;
      }
      img {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        &.scaleX {
          transform: scaleX(-1); /* 水平翻转，通过 scaleX(-1) 实现 */
        }
        &.scaleY {
          transform: scaleY(-1); /* 垂直翻转，通过 scaleY(-1) 实现 */
        }
        &.scaleXY {
          transform: scaleX(-1) scaleY(-1); /* 水平翻转，通过 scaleX(-1) 实现 */
        }
      }
      .box-title {
        font-size: 12px;
        color: #b6debf;
        line-height: 12px;
      }
      .box-num {
        margin-top: 8px;
        font-size: 14px;
        font-weight: 500;
        color: #ffffff;
        line-height: 14px;
      }
    }
  }
`

export const Fuel = styled.div`
  background-image: url(${SymbolsBg});
  padding: 20px 16px 22px;
  ${bgStyle}
  .box1 {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    font-weight: 500;
    color: #b6debf;
    line-height: 14px;
    margin-bottom: 20px;
    span {
      color: #1bff00;
    }
  }
  .box2 {
    display: flex;
    align-items: center;
    gap: 15px;
    font-size: 14px;
    font-weight: bold;
    color: #1bff00;
    line-height: 14px;
    justify-content: space-between;
  }
`

export const Tab = styled.div`
  display: flex;
  gap: 17px;
  margin-top: 24px;
  .box {
    font-size: 14px;
    font-weight: 500;
    color: #0e360f;
    padding: 7px 0;
    font-weight: bold;
    flex: 1;
    text-align: center;
    transition: background-image 0.3s ease-in-out;
    background-image: url(${TabDefault});
    ${bgStyle}
    &.active {
      background-image: url(${TabActive});
    }
  }
`
export const MineContent = styled.div`
  margin-top: 12px;
  padding: 20px 16px 35px;
  background-image: url(${ListBg});
  ${bgStyle}
  .mineInput {
    display: flex;
    justify-content: space-between;
    background: rgba(27, 255, 0, 0.11);
    border: 1px solid #1bff00;
    padding: 15px 16px;
    font-size: 14px;
    font-weight: bold;
    color: #ffffff;
    align-items: center;
    .input {
      font-weight: bold;
      color: #73b081;
      line-height: 14px;
      --font-size: 14px;
      --color: #fff;
    }
    .all {
      flex: none;
      align-self: center;
    }
  }
  .btn-group {
    margin-top: 20px;
    display: flex;
    gap: 27px;
    justify-content: space-between;
  }
  .btn {
    font-size: 16px;
    font-weight: bold;
    color: #ffffff;
    line-height: 16px;
    flex: 1;
    border: none;
    padding: 11px 0;
    background-image: url(${BtnImg});
    ${bgStyle}
  }
  .btnLg {
    background-image: url(${BtnImgLg});
  }

  .mineInfo {
    margin-top: 16px;
    font-size: 12px;
    font-weight: bold;
    color: #b6debf;
  }
`

export const MineContentInfo = styled.div`
  min-height: 86px;
  gap: 12px;
  div {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    color: #b6debf;
    line-height: 12px;
    margin-top: 12px;
    span {
      text-align: right;
      color: #ffffff;
    }
    .unit-box {
      span {
        margin-top: 8px;
        display: block;
        color: #b6debf;
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
      text-align: left;
    }
    &:last-child {
      text-align: right;
    }
    &:not(:first-child):not(:last-child) {
      text-align: center;
    }
  }
`

export const MinList = styled.div`
  margin-top: 32px;
  background-image: url(${ListBg});
  ${bgStyle}
  .title {
    ${title}
  }

  .content {
    padding: 14px 16px 52px;
    min-height: 280px;
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
