import { DataTableViewActions } from './constants'

export interface DataTableViewState {
  page: number
  limit: number
  sortBy?: string
  orderBy?: string
}

export type DataTableViewPageChangeAction = {
  type: DataTableViewActions.PAGE_CHANGE
  payload: number
}

export type DataTableViewLimitChangeAction = {
  type: DataTableViewActions.LIMIT_CHANGE
  payload: number
}

export type DataTableViewSortChangeAction = {
  type: DataTableViewActions.SORT_CHANGE
  payload: {
    sortBy?: string
    orderBy?: string
  }
}

export type DataTableViewChangeActions =
  | DataTableViewPageChangeAction
  | DataTableViewLimitChangeAction
  | DataTableViewSortChangeAction
