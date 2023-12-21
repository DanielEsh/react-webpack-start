import { useReducer } from 'react'
import { dataTableViewReducer } from './constants'
import { DataTableViewState } from './types'
import { DataTableViewProvider } from './data-table-view-context'
import { DataTableViewToolbar } from './data-table-view-toolbar'
import { DataTable } from 'shared/ui/data-table'

const defaultValues: DataTableViewState = {
  page: 1,
  limit: 10,
}

interface Props {
  data: any
  columns: any
}

export const DataTableView = (props: Props) => {
  const { data, columns } = props
  const [state, dispatch] = useReducer(dataTableViewReducer, defaultValues)

  return (
    <div>
      <DataTableViewProvider value={{ state, dispatch }}>
        <DataTable
          data={data.content}
          columns={columns}
        />

        <DataTableViewToolbar
          totalCount={data.meta.totalItemsCount}
          totalPages={data.meta.pagination.totalPages}
        />
      </DataTableViewProvider>
    </div>
  )
}
