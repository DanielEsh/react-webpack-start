import { useState } from 'react'
import { useGetCollections } from 'entities/Collection/api'

import { Outlet, useSearchParams } from 'react-router-dom'
import { CollectionsTable } from 'entities/Collection'
import { useQueryClient } from '@tanstack/react-query'

type RowsPerPage = 5 | 10 | 25

import { Data } from 'entities/Collection/types'

interface Values {
  page: number
  limit: number
  sort_by: string[]
  order_by: string[]
}

const CollectionsPage = () => {
  const [rowsPerPage, setRowsPerPage] = useState<RowsPerPage>(5)
  const [searchParams, setSearchParams] = useSearchParams()
  const [values, setValues] = useState<Values>({
    page: Number(searchParams.get('page')) ?? 1,
    limit: 5,
    sort_by: [],
    order_by: [],
  })

  const { isLoading, isError, data } = useGetCollections(values)

  const handleRowPerPageChange = (event: any) => {
    setRowsPerPage(event.target.value)
    setSearchParams({ limit: event.target.value })
  }

  const handlePageClick = (page: number) => {
    const strPage = String(page)
    setSearchParams({ page: strPage })
    setValues({
      ...values,
      page: page,
    })
  }

  const handleSortChange = async (sort: any) => {
    console.log('SORT', sort)
    if (!sort) return

    setValues({
      ...values,
      sort_by: [sort.name],
      order_by: [sort.type],
    })
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
            currentPage={values.page}
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
