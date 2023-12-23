import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import qs from 'qs'
import type { SortValues } from 'shared/ui/data-table/use-sort'
import { useIsFirstRender } from 'shared/lib/hooks/use-is-first-render'
import { useIsomorphicLayoutEffect } from 'shared/lib/hooks/useIsomorphicLayoutEffect'

interface InitialState {
  page: number
  limit: number
  sortBy?: string
  orderBy?: 'asc' | 'desc'
}

export function useDataTableViewState() {
  const defaultState: InitialState = {
    page: 1,
    limit: 10,
    sortBy: undefined,
    orderBy: undefined,
  }

  const [searchParams, setSearchParams] = useSearchParams()
  const isFirst = useIsFirstRender()

  useIsomorphicLayoutEffect(() => {
    if (!isFirst && searchParams) return

    const pageFromSearchParams = searchParams.get('page')
    const limitFromSearchParams = searchParams.get('limit')

    defaultState.page = pageFromSearchParams ? +pageFromSearchParams : 1
    defaultState.limit = limitFromSearchParams ? +limitFromSearchParams : 10
    defaultState.sortBy = searchParams.get('sortBy') ?? undefined
    defaultState.orderBy =
      (searchParams.get('orderBy') as 'asc' | 'desc') ?? undefined
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
      sortBy: sort.sortBy,
      orderBy: sort.orderBy,
    }))

    setSearchParams(
      qs.stringify({
        ...state,
        sortBy: sort.sortBy,
        orderBy: sort.orderBy,
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
