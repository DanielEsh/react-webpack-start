import { useState, useEffect } from 'react'
import { getTestData } from 'shared/api/api'

const CollectionsPage = () => {
  const [testData, setTestData] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    async function fetchData() {
      setLoading(true)

      try {
        const data = await getTestData()
        console.log('data', data)
        setTestData(data)
        setLoading(false)
      } catch (e) {
        setLoading(false)
        setIsError(true)
      }
    }

    fetchData()
    setTimeout(() => {
      console.log('testData', testData)
    }, 2000)
  }, [])

  const beautifyRender = () => {
    if (!testData.length) return

    return testData.map((item, idx) => {
      return <div key={idx}>{JSON.stringify(item, null, '\t')}</div>
    })
  }

  return (
    <div>
      <div>
        <h1>CollectionsPage</h1>

        {isLoading && <div>Loading...</div>}
        {isError && <div>Error loading</div>}
        {testData ? beautifyRender() : null}
      </div>
    </div>
  )
}

export default CollectionsPage
