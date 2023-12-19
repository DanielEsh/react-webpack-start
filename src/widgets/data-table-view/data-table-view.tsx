import { useReducer } from 'react'
import { dataTableViewReducer, DataTableViewActions } from './constants'

export const DataTableView = () => {
  const defaultValues = {
    page: 1,
    limit: 10,
  }

  const [state, dispatch] = useReducer(dataTableViewReducer, defaultValues)

  const handleClick = () => {
    dispatch({
      type: DataTableViewActions.PAGE_CHANGE,
      payload: 1,
    })
  }

  return (
    <div>
      <span>{JSON.stringify(state, null, 2)}</span>
      <button onClick={handleClick}>change page</button>
    </div>
  )
}
