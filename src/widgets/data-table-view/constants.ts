import type { Reducer } from 'react'
import { DataTableViewState, DataTableViewChangeActions } from './types'

export enum DataTableViewActions {
  PAGE_CHANGE = 'PAGE_CHANGE',
  LIMIT_CHANGE = 'LIMIT_CHANGE',
  SORT_CHANGE = 'SORT_CHANGE',
}

export const dataTableViewReducer: Reducer<
  DataTableViewState,
  DataTableViewChangeActions
> = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case DataTableViewActions.PAGE_CHANGE: {
      return {
        ...state,
        page: payload,
      }
    }

    case DataTableViewActions.LIMIT_CHANGE: {
      return {
        ...state,
        limit: payload,
      }
    }

    case DataTableViewActions.SORT_CHANGE: {
      const { sortBy, orderBy } = payload

      return {
        ...state,
        sortBy,
        orderBy,
      }
    }

    default:
      throw new Error(`Unhandled action type ${type}`)
  }
}
