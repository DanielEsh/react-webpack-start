import { useState, useEffect } from 'react'
import { getTestData } from 'shared/api/api'

const CollectionsPage = () => {
  const [testData, setTestData] = useState([])

  useEffect(() => {
    async function fetchData() {
      const data = await getTestData()
      console.log('data', data)
      setTestData(data)
    }

    fetchData()
    setTimeout(() => {
      console.log('testData', testData)
    }, 2000)
  }, [])

  const beautifyRender = () => {
    if (!testData.length) return

    return testData.map((item) => {
      return <div>{JSON.stringify(item, null, '\t')}</div>
    })
  }

  return (
    <div>
      <div>
        <h1>CollectionsPage</h1>

        {testData ? beautifyRender() : null}
      </div>
    </div>
  )
}

export default CollectionsPage
