import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import qs from 'qs'
import type { SortValues } from 'shared/ui/data-table/use-sort'
import { useIsFirstRender } from 'shared/lib/hooks/use-is-first-render'
import { useIsomorphicLayoutEffect } from 'shared/lib/hooks/useIsomorphicLayoutEffect'

interface InitialState {
  page: number
  limit: number
  sort_by?: string
  order_by?: 'asc' | 'desc'
}

export function useDataTableViewState() {
  const defaultState: InitialState = {
    page: 1,
    limit: 10,
    sort_by: undefined,
    order_by: undefined,
  }

  const [searchParams, setSearchParams] = useSearchParams()
  const isFirst = useIsFirstRender()

  useIsomorphicLayoutEffect(() => {
    if (!isFirst && searchParams) return

    const pageFromSearchParams = searchParams.get('page')
    const limitFromSearchParams = searchParams.get('limit')

    defaultState.page = pageFromSearchParams ? +pageFromSearchParams : 1
    defaultState.limit = limitFromSearchParams ? +limitFromSearchParams : 10
    defaultState.sort_by = searchParams.get('sort_by') ?? undefined
    defaultState.order_by =
      (searchParams.get('order_by') as 'asc' | 'desc') ?? undefined
  }, [])

  const [state, setState] = useState(defaultState)

  const handlePageChange = (page: number) => {
    setState((prevState) => ({
      ...prevState,
      page,
    }))

    setSearchParams(
      qs.stringify({
        ...state,
        page,
      }),
    )
  }

  const handleLimitChange = (limit: number) => {
    setState((state) => ({
      ...state,
      limit,
    }))

    setSearchParams(
      qs.stringify({
        ...state,
        limit,
      }),
    )
  }

  const handleSortChange = (sort: SortValues) => {
    setState((state) => ({
      ...state,
      sort_by: sort.sortBy,
      order_by: sort.orderBy,
    }))

    setSearchParams(
      qs.stringify({
        ...state,
        sort_by: sort.sortBy,
        order_by: sort.orderBy,
      }),
    )
  }

  return {
    state,
    changePage: handlePageChange,
    changeLimit: handleLimitChange,
    changeSort: handleSortChange,
  }
}
