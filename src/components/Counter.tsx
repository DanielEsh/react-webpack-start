import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

const Counter = () => {
  const { t } = useTranslation()

  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>{t('test')}</button>
    </div>
  )
}

export default Counter
