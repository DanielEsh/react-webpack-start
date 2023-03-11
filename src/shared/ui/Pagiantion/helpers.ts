import {
  PaginationElementsType,
  PaginationElementsKeys,
  type PaginationModel,
} from './types'

export const createPaginationElement = (options: PaginationModel) => {
  const { type, key, value, isActive } = options
  return {
    type,
    key,
    value,
    isActive,
  }
}

export const createRange = (start: number, end: number) => {
  const length = end - start + 1
  return Array.from({ length }, (_, idx) => idx + start)
}

export const createPageFactory = (currentPage: number) => {
  return (pageNumber: number) => {
    return createPaginationElement({
      type: PaginationElementsType.PAGE,
      key: pageNumber,
      value: pageNumber,
      isActive: pageNumber === currentPage,
    })
  }
}

export const createFirstEllipsis = (pageNumber: number) => {
  return {
    type: PaginationElementsType.ELLIPSIS,
    key: PaginationElementsKeys.FIRST_ELLIPSIS,
    value: pageNumber,
    isActive: false,
  }
}

export const createSecondEllipsis = (pageNumber: number) => {
  return {
    type: PaginationElementsType.ELLIPSIS,
    key: PaginationElementsKeys.SECOND_ELLIPSIS,
    value: pageNumber,
    isActive: false,
  }
}

export const createPreviousPageLink = (currentPage: number) => {
  return {
    type: PaginationElementsType.PREVIOUS,
    key: PaginationElementsKeys.PREVIOUS,
    value: Math.max(1, currentPage - 1),
    isActive: currentPage === 1,
  }
}

export const createNextPageLink = (currentPage: number, totalPages: number) => {
  return {
    type: PaginationElementsType.NEXT,
    key: PaginationElementsKeys.NEXT,
    value: Math.min(totalPages, currentPage + 1),
    isActive: currentPage === totalPages,
  }
}

export const createFirstPageLink = (currentPage: number) => {
  return {
    type: PaginationElementsType.FIRST,
    key: PaginationElementsKeys.FIRST,
    value: 1,
    isActive: currentPage === 1,
  }
}

export const createLastPageLink = (currentPage: number, totalPages: number) => {
  return {
    type: PaginationElementsType.LAST,
    key: PaginationElementsKeys.LAST,
    value: totalPages,
    isActive: currentPage === totalPages,
  }
}
