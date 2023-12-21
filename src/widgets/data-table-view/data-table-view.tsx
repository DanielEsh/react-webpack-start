import { useReducer } from 'react'
import { dataTableViewReducer, DataTableViewActions } from './constants'
import { DataTableViewState } from './types'
import { DataTableViewProvider } from './data-table-view-context'
import { DataTableViewToolbar } from './data-table-view-toolbar'

const defaultValues: DataTableViewState = {
  page: 1,
  limit: 10,
}

export const DataTableView = () => {
  const [state, dispatch] = useReducer(dataTableViewReducer, defaultValues)

  const handleChangePage = (currentPage: number) => {
    dispatch({
      type: DataTableViewActions.PAGE_CHANGE,
      payload: currentPage,
    })
  }

  return (
    <div>
      <DataTableViewProvider value={{ state, dispatch }}>
        <span>{JSON.stringify(state, null, 2)}</span>
        <button onClick={() => handleChangePage(state.page + 1)}>
          change page
        </button>

        <DataTableViewToolbar />
      </DataTableViewProvider>
    </div>
  )
}
