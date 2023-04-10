import { useState, useEffect } from 'react'
import { getTestData } from 'shared/api/api'

import { Outlet, useSearchParams } from 'react-router-dom'
import { CollectionsTable } from 'entities/Collection'

type RowsPerPage = 5 | 10 | 25

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
        const data = await getTestData({})
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

  const handleRowPerPageChange = (event: any) => {
    setRowsPerPage(event.target.value)
    setSearchParams({ limit: event.target.value })
  }

  const handlePageClick = (page: number) => {
    const strPage = String(page)
    setSearchParams({ page: strPage })
  }

  const handleSortChange = async (sort: any) => {
    const data = await getTestData(sort)
    setTestData(data)
  }

  return (
    <div>
      <div>
        <pre>
          <code>Breadcrumbs</code>
        </pre>

        {isError && <div>Error loading</div>}
        {testData && (
          <CollectionsTable
            currentPage={Number(currentPage)}
            items={testData.data}
            meta={testData.meta}
            rowPerPage={rowsPerPage}
            onPageChange={handlePageClick}
            onSortChange={handleSortChange}
            onRowsPerPageChange={handleRowPerPageChange}
          />
        )}
      </div>

      <Outlet />
    </div>
  )
}

export default CollectionsPage
