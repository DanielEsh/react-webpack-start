import { type ColumnDef } from '@tanstack/react-table'
import { DataTable } from 'shared/ui/data-table'
import { DataViewFooterToolbar } from './data-view-footer-toolbar'
import { useEffect, useReducer } from 'react'
import { DataViewContext } from './data-view.context'
import { dataViewReducer } from './constants'
import { DataViewState } from './types'

interface Props<DATA> {
  data: DATA[]
  columns: ColumnDef<DATA>[]
  meta: any
  defaultValues?: DataViewState
  onChange?(state: any): void
}

export const PaginatedDataView = <DATA extends unknown | object>(
  props: Props<DATA>,
) => {
  const {
    data,
    columns,
    meta,
    defaultValues = {
      page: 1,
      limit: 10,
      sortBy: null,
      orderBy: null,
    },
    onChange,
  } = props

  const [state, dispatch] = useReducer(dataViewReducer, defaultValues)

  useEffect(() => {
    onChange && onChange(state)
  }, [state])

  return (
    <DataViewContext.Provider value={{ state, dispatch }}>
      <DataTable<DATA>
        data={data}
        columns={columns}
      />

      <DataViewFooterToolbar totalPages={meta.pagination.totalPages} />
    </DataViewContext.Provider>
  )
}
