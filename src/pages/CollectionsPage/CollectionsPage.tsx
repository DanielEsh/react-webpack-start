import { useState, useEffect } from 'react'
import { getTestData } from 'shared/api/api'

const CollectionsPage = () => {
  const [testData, setTestData] = useState<any>(null)
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
    return testData.items.map((item: any, idx: number) => {
      return <div key={idx}>{JSON.stringify(item, null, '\t')}</div>
    })
  }

  const render = () => {
    if (!testData) return

    return (
      <div>
        {beautifyRender()}
        <div className="flex gap-3">
          <div>Prev</div>
          {testData.meta.pages.map((item: number, idx: number) => {
            return <div key={idx}>{item}</div>
          })}
          <div>Next</div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div>
        <h1>CollectionsPage</h1>

        {isLoading && <div>Loading...</div>}
        {isError && <div>Error loading</div>}
        {testData ? render() : null}
      </div>
    </div>
  )
}

export default CollectionsPage
