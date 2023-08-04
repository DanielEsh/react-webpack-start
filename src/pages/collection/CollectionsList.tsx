import { useState } from 'react'
import { useGetCollections } from 'entities/collection/api'

import { Outlet, useSearchParams } from 'react-router-dom'
import {
  CollectionsTable,
  CollectionsTableHeader,
  CollectionsTableFooter,
} from 'entities/collection'

import { Values } from 'entities/collection/types'
import { CollectionDataTable } from 'entities/collection/ui/list-table/collection-data-table'

type RowsPerPage = 5 | 10 | 25

const CollectionsPage = () => {
  const [rowsPerPage, setRowsPerPage] = useState<RowsPerPage>(5)
  const [searchParams, setSearchParams] = useSearchParams()
  const [values, setValues] = useState<Values>({
    page: 1,
    limit: 5,
    sort_by: ['id'],
    order_by: ['asc'],
  })

  const { isLoading, isError, data } = useGetCollections(values)

  const handleRowPerPageChange = (rowsPerPage: any) => {
    setRowsPerPage(rowsPerPage)
    setSearchParams({ limit: rowsPerPage })
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
    if (!sort) {
      setValues({
        ...values,
        sort_by: [],
        order_by: [],
      })

      setSearchParams({ sort_by: [], order_by: [] })
      getTableSort()
      return
    }

    if (sort.name && sort.type) {
      setValues({
        ...values,
        sort_by: [sort.name],
        order_by: [sort.type],
      })

      setSearchParams({ sort_by: [sort.name], order_by: [sort.type] })
      getTableSort()
    }
  }

  const getTableSort = () => {
    const result = [
      {
        id: searchParams.getAll('sort_by')[0],
        desc: searchParams.getAll('order_by')[0] === 'desc' ? true : false,
      },
    ]
    console.log('RES', result)
    return result
  }

  return (
    <div>
      <div>
        <pre>
          <code>Breadcrumbs</code>
        </pre>

        {isError && <div>Error loading</div>}
        {isLoading && <div>Loading...</div>}
        {data && (
          <>
            <CollectionsTableHeader />
            <CollectionDataTable data={data.data} />

            <CollectionsTableFooter
              totalItemsCount={data.meta.pagination.totalItemsCount}
              currentPage={data.meta.pagination.currentPage}
              rowPerPage={rowsPerPage}
              totalPages={data.meta.pagination.totalPages}
              onRowPerPageChange={handleRowPerPageChange}
              onPageClick={handlePageClick}
            />
          </>
        )}
      </div>

      <Outlet />
    </div>
  )
}

export default CollectionsPage
