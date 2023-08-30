export enum DataViewActions {
  PAGE_CHANGE = 'PAGE_CHANGE',
  PAGE_LIMIT_CHANGE = 'PAGE_LIMIT_CHANGE',
  SORT_CHANGE = 'SORT_CHANGE',
}

export type SortPayload = {
  sortBy: string | null
  orderBy: string | null
}

export type DataViewActionsType =
  | { type: DataViewActions.PAGE_CHANGE; payload: number }
  | { type: DataViewActions.PAGE_LIMIT_CHANGE; payload: number }
  | { type: DataViewActions.SORT_CHANGE; payload: SortPayload }

export interface DataViewState {
  page: number
  limit: number
  sortBy?: string | null
  orderBy?: string | null
}
