import { useState, useEffect } from 'react'
import { getTestData } from 'shared/api/api'

import { useSearchParams } from 'react-router-dom'
import { Pagiantion } from 'shared/ui/Pagiantion/Pagination'
import { CollectionsTable } from 'entities/Collection'

type RowsPerPage = 2 | 5 | 10

import { Data } from 'entities/Collection/types'

const CollectionsPage = () => {
  const [testData, setTestData] = useState<Data | null>(null)
  const [isLoading, setLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const [rowsPerPage, setRowsPerPage] = useState<RowsPerPage>(5)

  const [searchParams, setSearchParams] = useSearchParams()

  const currentPage = searchParams.get('page') ?? '1'
  const limit = searchParams.get('limit') ?? '5'

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

  const handlePageClick = (page: number) => {
    const strPage = String(page)
    setSearchParams({ page: strPage })
  }

  const render = () => {
    if (!testData) return

    return (
      <>
        {testData && (
          <CollectionsTable
            currentPage={Number(currentPage)}
            items={testData.items}
            meta={testData.meta}
            onPageChange={handlePageClick}
          />
        )}
      </>
    )
  }

  return (
    <div>
      <div>
        <pre>
          <code>Breadcrumbs</code>
        </pre>

        {isLoading && <div>Loading...</div>}
        {isError && <div>Error loading</div>}
        {testData ? render() : null}
      </div>
    </div>
  )
}

export default CollectionsPage
