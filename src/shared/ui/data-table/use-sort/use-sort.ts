import { useState } from 'react'
import { SortingState } from '@tanstack/react-table'
import { useIsomorphicLayoutEffect } from 'shared/lib/hooks/useIsomorphicLayoutEffect'
export interface SortValues {
  sortBy?: string
  orderBy?: 'asc' | 'desc'
}

export function useSort(
  initialValues: SortValues,
  callback: (values: SortValues) => void,
) {
  const [sorting, setSorting] = useState<SortingState>([])

  const transformTableSortingToValues = () => {
    return sorting.reduce((_, item) => {
      return {
        sortBy: item.id,
        orderBy: item.desc ? 'desc' : 'asc',
      }
    }, {})
  }

  useIsomorphicLayoutEffect(() => {
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
