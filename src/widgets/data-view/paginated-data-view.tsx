import { type ColumnDef } from '@tanstack/react-table'
import { DataTable } from 'widgets/data-table'
import { DataViewFooterToolbar } from './data-view-footer-toolbar'
import { useEffect, useReducer } from 'react'
import { DataViewContext } from './data-view.context'

interface Meta {
  totalPages: number
}

interface Props<DATA> {
  data: DATA[]
  columns: ColumnDef<DATA>[]
  meta: Meta
  defaultValues?: any
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

  const reducer = (state, { type, payload }) => {
    switch (type) {
      case 'PAGE_CHANGE': {
        return {
          ...state,
          page: payload,
        }
      }

      case 'PAGE_LIMIT_CHANGE': {
        return {
          ...state,
          limit: payload,
        }
      }

      case 'SORT_CHANGE': {
        return {
          ...state,
        }
      }

      default:
        throw new Error(`Unhandled action type ${type}`)
    }
  }

  const [state, dispatch] = useReducer(reducer, defaultValues)

  useEffect(() => {
    onChange && onChange(state)
  }, [state])

  return (
    <DataViewContext.Provider value={{ state, dispatch }}>
      <DataTable<DATA>
        data={data}
        columns={columns}
      />

      <DataViewFooterToolbar totalPages={meta.totalPages} />
    </DataViewContext.Provider>
  )
}
