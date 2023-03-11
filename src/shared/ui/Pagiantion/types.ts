export enum PaginationElementsType {
  PAGE = 'PAGE',
  ELLIPSIS = 'ELLIPSIS',
  PREVIOUS = 'PREVIOUS',
  NEXT = 'NEXT',
  FIRST = 'FIRST',
  LAST = 'LAST',
}

export enum PaginationElementsKeys {
  FIRST_ELLIPSIS = 'FIRST_ELLIPSIS',
  SECOND_ELLIPSIS = 'SECOND_ELLIPSIS',
  PREVIOUS = 'PREVIOUS',
  NEXT = 'NEXT',
  FIRST = 'FIRST',
  LAST = 'LAST',
}

export interface PaginationModel {
  type: PaginationElementsType
  key: PaginationElementsKeys | number
  value: number
  isActive: boolean
  isDisabled: boolean
}
