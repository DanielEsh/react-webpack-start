import { useGetCategories } from 'entities/categories/api/queries'
import { DataTableView } from 'widgets/data-table-view/data-table-view'
import { columns } from './columns'
import { useState } from 'react'

const defaultState = {
  page: 1,
  limit: 10,
  sort_by: [],
  order_by: [],
}

export const RCategoriesDataTable = () => {
  const [state, setState] = useState(defaultState)
  const { isLoading, isError, data } = useGetCategories(state)

  const handlePageChange = (currentPage: number) => {
    console.log('page', currentPage)
    setState((state) => ({
      ...state,
      page: currentPage,
    }))
  }

  const handleLimitChange = (limit: number) => {
    console.log('limit', limit)
    setState((state) => ({
      ...state,
      limit,
    }))
  }

  const handleSortChange = (sort: any) => {
    console.log('sort', sort)
    setState((state) => ({
      ...state,
      sort_by: sort.sortBy,
      order_by: sort.orderBy,
    }))
  }

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error</div>}
      {data && (
        <DataTableView
          data={data}
          columns={columns}
          onPageChange={handlePageChange}
          onLimitChange={handleLimitChange}
          onSortChange={handleSortChange}
        />
      )}
    </>
  )
}
