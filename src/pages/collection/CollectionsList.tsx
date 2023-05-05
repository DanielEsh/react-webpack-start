import { useState } from 'react'
import { useGetCollections } from 'entities/Collection/api'

import { Outlet, useSearchParams } from 'react-router-dom'
import { CollectionsTable } from 'entities/Collection'

type RowsPerPage = 5 | 10 | 25

import { Data } from 'entities/Collection/types'

interface Values {
  currentPage: number
  limit: number
  sort_by: string[]
  group_by: string[]
}

const CollectionsPage = () => {
  const { isLoading, isError, data } = useGetCollections()

  const [rowsPerPage, setRowsPerPage] = useState<RowsPerPage>(5)

  const [searchParams, setSearchParams] = useSearchParams()

  const values: Values = {
    currentPage: Number(searchParams.get('page')) ?? 1,
    limit: Number(searchParams.get('limit')) ?? 5,
    sort_by: [],
    group_by: [],
  }

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
    if (!sort) return

    values.sort_by.push(sort.name)
    values.group_by.push(sort.type)
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
            currentPage={values.currentPage}
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
