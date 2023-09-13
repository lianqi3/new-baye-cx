import { useState, useEffect } from 'react'
import { decimal } from '@/utils'

/**
 * 自定义 Hook 用于数字动画
 * @param {number} targetNumber - 要动画到的目标数字。
 * @param {number} animationDuration - 动画持续时间（毫秒）。默认为 1000 毫秒。
 * @param {number} steps - 动画步数。默认为 100 步。
 * @returns {number} - 当前动画的数字值。
 */
function useNumberAnimation(targetNumber: number, animationDuration = 1000, steps = 100) {
  const [currentNumber, setCurrentNumber] = useState(0)

  useEffect(() => {
    let currentStep = 0

    // 计算每一步增加的值
    const stepValue = decimal(targetNumber / steps, 0)

    const interval = setInterval(() => {
      if (currentStep < steps) {
        // 更新当前数字
        setCurrentNumber((prevNumber) => prevNumber + stepValue)
        currentStep++
      } else {
        // 动画完成后设置最终数字并清除间隔
        setCurrentNumber(targetNumber)
        clearInterval(interval)
      }
    }, animationDuration / steps)

    // 在组件卸载时清除间隔，以防止内存泄漏
    return () => clearInterval(interval)
  }, [targetNumber, animationDuration, steps])

  return currentNumber
}

/**
 * 数字动画组件
 * @param {number} targetNumber - 要动画到的目标数字。
 * @returns {number} - 当前动画的数字值。
 */
function NumberAnimation(targetNumber: any) {
  // 使用自定义 Hook 获取当前动画的数字
  const currentNumber = useNumberAnimation(targetNumber)

  return currentNumber
}

export default NumberAnimation
