import { type Reducer } from 'react'
import {
  type DataViewActionsType,
  type DataViewState,
  DataViewActions,
} from './types'

export const dataViewReducer: Reducer<DataViewState, DataViewActionsType> = (
  state,
  action,
) => {
  const { type, payload } = action

  switch (type) {
    case DataViewActions.PAGE_CHANGE: {
      return {
        ...state,
        page: payload,
      }
    }

    case DataViewActions.PAGE_LIMIT_CHANGE: {
      return {
        ...state,
        limit: payload,
      }
    }

    case DataViewActions.SORT_CHANGE: {
      return {
        ...state,
      }
    }

    default:
      throw new Error(`Unhandled action type ${type}`)
  }
}
