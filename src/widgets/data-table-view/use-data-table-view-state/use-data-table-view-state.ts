import { useState } from 'react'

const defaultState = {
  page: 1,
  limit: 10,
  sort_by: undefined,
  order_by: undefined,
}

export function useDataTableViewState() {
  const [state, setState] = useState(defaultState)

  const handlePageChange = (currentPage: number) => {
    setState((state) => ({
      ...state,
      page: currentPage,
    }))
  }

  const handleLimitChange = (limit: number) => {
    setState((state) => ({
      ...state,
      limit,
    }))
  }

  const handleSortChange = (sort: any) => {
    setState((state) => ({
      ...state,
      sort_by: sort.sortBy,
      order_by: sort.orderBy,
    }))
  }

  return {
    state,
    changePage: handlePageChange,
    changeLimit: handleLimitChange,
    changeSort: handleSortChange,
  }
}
