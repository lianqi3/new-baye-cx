import React, { useState, useEffect } from 'react'

function NumberAnimation({ targetNumber = 500 }: any) {
  const [currentNumber, setCurrentNumber] = useState(0)

  useEffect(() => {
    const animationDuration = 1000 // 动画持续时间（毫秒）
    const steps = 100 // 动画步数
    const stepValue = targetNumber / steps

    let currentStep = 0

    const interval = setInterval(() => {
      if (currentStep < steps) {
        setCurrentNumber((prevNumber) => prevNumber + stepValue)
        currentStep++
      } else {
        setCurrentNumber(targetNumber)
        clearInterval(interval)
      }
    }, animationDuration / steps)

    return () => clearInterval(interval)
  }, [targetNumber])

  return (
    <div>
      <h1>Number Animation</h1>
      <p style={{ color: '#fff' }}>{Math.round(currentNumber)}</p>
    </div>
  )
}

export default NumberAnimation
