import { useState, useEffect } from 'react'
import { getTestData } from 'shared/api/api'
import { useSearchParams } from 'react-router-dom'

const CollectionsPage = () => {
  const [testData, setTestData] = useState<any>(null)
  const [isLoading, setLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const [searchParams, setSearchParams] = useSearchParams()

  const currentPage = searchParams.get('page') ?? '1'

  useEffect(() => {
    async function fetchData() {
      setLoading(true)

      try {
        const data = await getTestData(currentPage)
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
  }, [currentPage])

  const beautifyRender = () => {
    return testData.items.map((item: any, idx: number) => {
      return <div key={idx}>{JSON.stringify(item, null, '\t')}</div>
    })
  }

  const handlePageClick = (page: number) => {
    const strPage = String(page)
    setSearchParams({ page: strPage })
  }

  const render = () => {
    if (!testData) return

    return (
      <div>
        {beautifyRender()}
        <div className="flex gap-3">
          <div>Prev</div>
          {testData.meta.pages.map((item: number, idx: number) => {
            return (
              <div key={idx} onClick={() => handlePageClick(item)}>
                {item}
              </div>
            )
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
