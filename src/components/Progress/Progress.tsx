import React, { useState, useEffect, useRef } from 'react'
import { decimal } from '@/utils'
import { Progress } from './styled'

const ProgressBar: React.FC<{ amount: number }> = ({ amount = 50 }) => {
  const [progress, setProgress] = useState(0)
  const divRef = useRef(null)
  const [progressNum, setProgressNum] = useState(100)
  const [increasing, setIncreasing] = useState(true) // 是否是刚进入页面加载进度条
  useEffect(() => {
    const interval = setInterval(() => {
      // 当前进度小于100且处于递增状态
      if (progress < 100 && increasing) {
        setProgress(progress + 1)
      }
      // 当进度达到100并且处于递增状态时，切换为递减状态
      else if (progress === 100 && increasing) {
        setIncreasing(false)
      }
      // 当进度大于0且处于递减状态，且showProgress为false时
      else if (progress >= 0 && !increasing) {
        if (progress >= amount) {
          setProgress(progress - 1)
        }
      }
    }, 20)

    return () => clearInterval(interval)
  }, [progress, increasing, amount])

  useEffect(() => {
    const divElement: any = divRef.current

    if (divElement) {
      const computedStyle = getComputedStyle(divElement)
      const paddingLeft = parseFloat(computedStyle.paddingLeft)
      const paddingRight = parseFloat(computedStyle.paddingRight)
      const borderLeft = parseFloat(computedStyle.borderLeftWidth)
      const borderRight = parseFloat(computedStyle.borderRightWidth)

      // 计算内部宽度
      const value = divElement.clientWidth - paddingLeft - paddingRight - borderLeft - borderRight
      setProgressNum(decimal(value / 9, 0))
    }
  }, [])

  const getArrowColor = (index: number) => {
    const num = decimal((progress / 100) * progressNum, 0)
    if (index <= num) {
      return 'activeImg' // 进度达到一半以上，显示绿色箭头
    }
    return 'defaultImg' // 进度未达到一半，显示红色箭头
  }

  return (
    <Progress ref={divRef}>
      <div className='progress-bar'>
        {[...Array(progressNum)].map((_, index) => (
          <div key={index} className={`arrow ${getArrowColor(index)}`} />
        ))}
      </div>
    </Progress>
  )
}

export default ProgressBar
