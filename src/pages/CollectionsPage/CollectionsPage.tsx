import { useState, useEffect } from 'react'
import { getTestData } from 'shared/api/api'

import { useSearchParams } from 'react-router-dom'
import { Pagiantion } from 'shared/ui/Pagiantion/Pagination'
import { CollectionsTable } from 'entities/Collection'

type RowsPerPage = 2 | 5 | 10

const CollectionsPage = () => {
  const [testData, setTestData] = useState<any>(null)
  const [isLoading, setLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const [rowsPerPage, setRowsPerPage] = useState<RowsPerPage>(2)

  const [searchParams, setSearchParams] = useSearchParams()

  const currentPage = searchParams.get('page') ?? '1'
  const limit = searchParams.get('limit') ?? '2'

  useEffect(() => {
    async function fetchData() {
      setLoading(true)

      try {
        const data = await getTestData(currentPage, limit)
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
  }, [currentPage, limit])

  const handleSelectRowsChange = (event: any) => {
    setRowsPerPage(event.target.value)
    setSearchParams({ limit: event.target.value })
  }

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
      <>
        {beautifyRender()}
        {testData && <CollectionsTable collection={testData.items} />}
      </>
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
