import styled, { createGlobalStyle, css } from 'styled-components'
import NoticeBg from '@/static/notice-bg.png'
import SymbolsBg from '@/static/symbols-bg.png'
import overviewBg from '@/static/overviewBg.png'
import ListBg from '@/static/list-bg.png'

export const Content = styled.div`
  padding: 26px 16px;
  .banner {
    width: 100%;
  }
`

const bgStyle = css`
  background-size: 100% 100%;
  background-repeat: no-repeat;
`

export const Notice = styled.div`
  margin-top: 16px;
  background-image: url(${NoticeBg});
  padding: 14px 11px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 500;
  color: #b6debf;
  line-height: 14px;
  ${bgStyle}
  div {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 89%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
  }
  img {
    height: 16px;
  }
`
export const Menu = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  .box {
    width: 72px;
    font-size: 14px;
    font-weight: 500;
    color: #edffef;
    line-height: 14px;
    text-align: center;
    img {
      margin-bottom: 12px;
    }
  }
`

const coinTd = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .box {
    text-align: center;
    &:first-child {
      text-align: left;
    }
    &:last-child {
      text-align: right;
    }
  }
`
export const Symbols = styled.div`
  margin-top: 24px;
  background-image: url(${SymbolsBg});
  padding: 16px 15px 24px 20px;
  ${bgStyle}
  .th,
  .td {
    ${coinTd}
    .box {
      flex: 1;
    }
  }
  .th {
    font-size: 12px;
    color: #b6debf;
    line-height: 12px;
    margin-bottom: 24px;
  }
  .td {
    font-size: 14px;
    font-weight: 500;
    color: #ffffff;
    span {
      font-size: 12px;
    }
    .rate {
      padding: 6px;
      background: #1bff00;
      border-radius: 4px;
      font-size: 12px;
      font-weight: bold;
      color: #0e360f;
      width: max-content;
      float: right;
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

const listBox = css`
  background-image: url(${ListBg});
  margin-top: 32px;
  position: relative;
  ${bgStyle}
`

export const Overview = styled.div`
  ${listBox}
  background-image: url(${overviewBg});
  .title {
    ${title}
  }
  .mask {
    width: 50px;
    height: 50px;
    position: absolute;
    top: 3px;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
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
    padding: 16px 16px 38px;
    display: grid;
    gap: 16px 27px;
    grid-template-columns: repeat(2, 1fr);
    .box {
      padding: 11px 8px;
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
export const RankList = styled.div`
  ${listBox}
  .title {
    ${title}
  }
  .content {
    padding: 16px 16px 29px;
    min-height: 280px;
    .th,
    .td {
      ${coinTd}
      div:last-child {
        flex: auto;
        width: 45%;
        text-align: right;
      }
      div:first-child {
        width: 25%;
      }
      div:nth-child(2) {
        width: 30%;
        text-align: center;
      }
    }
    .th {
      font-size: 12px;
      font-weight: 500;
      color: #b6debf;
      line-height: 12px;
    }
    .td {
      margin-top: 16px;
      font-size: 13px;
      font-weight: 500;
      color: #ffffff;
      line-height: 13px;
      span {
        display: block;
        line-height: 25px;
        text-align: center;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        font-size: 16px;
        font-weight: bold;
        color: #000000;
        background: #53aa49;
      }
      .span0 {
        background: linear-gradient(127deg, #9fff94 0%, #1bff00 100%);
      }
      .span1 {
        background: linear-gradient(127deg, #fdff94 0%, #adff00 100%);
      }
      .span2 {
        background: linear-gradient(127deg, #94ffd2 0%, #00ff75 100%);
      }
    }
  }
`
