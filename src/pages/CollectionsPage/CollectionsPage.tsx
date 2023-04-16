import { useState } from 'react'
import { useGetCollections } from 'entities/Collection/api'

import { Outlet, useSearchParams } from 'react-router-dom'
import { CollectionsTable } from 'entities/Collection'

type RowsPerPage = 5 | 10 | 25

import { Data } from 'entities/Collection/types'

const CollectionsPage = () => {
  const { isLoading, isError, data } = useGetCollections()

  const [rowsPerPage, setRowsPerPage] = useState<RowsPerPage>(5)

  const [searchParams, setSearchParams] = useSearchParams()

  const currentPage = searchParams.get('page') ?? '1'
  // const limit = searchParams.get('limit') ?? '5'

  const handleRowPerPageChange = (event: any) => {
    setRowsPerPage(event.target.value)
    setSearchParams({ limit: event.target.value })
  }

  const handlePageClick = (page: number) => {
    const strPage = String(page)
    setSearchParams({ page: strPage })
  }

  const handleSortChange = async (sort: any) => {
    console.log('SORT', sort)
    // const data = await getTestData(sort)
    // setTestData(data)
  }

  return (
    <div>
      <div>
        <pre>
          <code>Breadcrumbs</code>
        </pre>

        {isError && <div>Error loading</div>}
        {data && (
          <CollectionsTable
            currentPage={Number(currentPage)}
            items={data.data}
            meta={data.meta}
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
