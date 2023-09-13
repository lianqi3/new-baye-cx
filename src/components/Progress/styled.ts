import styled from 'styled-components'
import defaultImg from '@/static/progress.png'
import activeImg from '@/static/progress-active.png'

export const Progress = styled.div`
  border: 1px solid #1bff00;
  overflow: hidden;
  padding: 3px;
  .progress-bar {
    display: flex;
    align-items: center;
    height: 100%;
    transition: width 0.05s ease-in-out;
  }

  /* 使用背景图片来显示进度 */
  .arrow {
    width: 9px;
    height: 18px;
    background-size: cover;
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

  .activeImg {
    background-image: url(${activeImg}); /* 红色箭头图片路径 */
  }

  .defaultImg {
    background-image: url(${defaultImg}); /* 绿色箭头图片路径 */
  }
`
