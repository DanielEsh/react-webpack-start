import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const Counter = () => {
  const { t } = useTranslation()

  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  useEffect(() => {
    // if (Math.random() < 0.5) {
    //   throw new Error()
    // }
    // throw new Error()
  }, [])

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>{t('test')}</button>
    </div>
  )
}

export default Counter
