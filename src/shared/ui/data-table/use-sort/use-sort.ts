import { useState } from 'react'
import { SortingState } from '@tanstack/react-table'
import { useIsomorphicLayoutEffect } from 'shared/lib/hooks/useIsomorphicLayoutEffect'
import { useIsFirstRender } from 'shared/lib/hooks/use-is-first-render'
export interface SortValues {
  sortBy?: string
  orderBy?: 'asc' | 'desc'
}

export function useSort(
  initialValues: SortValues,
  callback: (values: SortValues) => void,
) {
  const [sorting, setSorting] = useState<SortingState>([])
  const isFirst = useIsFirstRender()
  const transformTableSortingToValues = () => {
    return sorting.reduce((_, item) => {
      return {
        sortBy: item.id,
        orderBy: item.desc ? 'desc' : 'asc',
      }
    }, {})
  }

  useIsomorphicLayoutEffect(() => {
    if (isFirst) return
    if (!sorting.length) {
      callback({})
    }

    callback(transformTableSortingToValues())
  }, [sorting])

  useIsomorphicLayoutEffect(() => {
    if (initialValues.sortBy && initialValues.orderBy) {
      setSorting([
        {
          id: initialValues.sortBy,
          desc: initialValues.orderBy === 'desc',
        },
      ])
    }
  }, [])

  return {
    sortState: sorting,
    setSorting,
  }
}
