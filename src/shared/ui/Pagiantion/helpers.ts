export enum PaginationElementsType {
  PAGE = 'PAGE',
  ELLIPSIS = 'ELLIPSIS',
  PREVIOUS = 'PREVIOUS',
  NEXT = 'NEXT',
  FIRST = 'FIRST',
  LAST = 'LAST',
}

export enum PaginationElementKeys {
  FIRST_ELLIPSIS = 'FIRST_ELLIPSIS',
  SECOND_ELLIPSIS = 'SECOND_ELLIPSIS',
}

interface CreateOptions {
  type: PaginationElementsType
  key: any
  value: number
  isActive: boolean
}

export const createPaginationElement = (options: CreateOptions) => {
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

// export const createPageFactory = (currentPage: number) => {
//   return (pageNumber: number) => {
//     return {
//       type: PaginationElementsType.PAGE,
//       key: pageNumber,
//       value: pageNumber,
//       isActive: pageNumber === currentPage,
//     }
//   }
// }

// export const createFirstEllipsis = (pageNumber: number) => {
//   return {
//     type: PaginationElementsType.ELLIPSIS,
//     key: PaginationElementsKeys.FIRST_ELLIPSIS,
//     value: pageNumber,
//     isActive: false,
//   }
// }

// export const createSecondEllipsis = (pageNumber: number) => {
//   return {
//     type: PaginationElementsType.ELLIPSIS,
//     key: PaginationElementsKeys.SECOND_ELLIPSIS,
//     value: pageNumber,
//     isActive: false,
//   }
// }

// export const createPreviousPageLink = (currentPage: number) => {
//   return {
//     type: 'PREVIOUS_PAGE_LINK',
//     key: 'PREVIOUS_PAGE_LINK',
//     value: Math.max(1, currentPage - 1),
//     isActive: currentPage === 1,
//   }
// }

// export const createNextPageLink = (currentPage: number, totalPages: number) => {
//   return {
//     type: 'NEXT_PAGE_LINK',
//     key: 'NEXT_PAGE_LINK',
//     value: Math.min(totalPages, currentPage + 1),
//     isActive: currentPage === totalPages,
//   }
// }

// export const createFirstPageLink = (currentPage: number) => {
//   return {
//     type: 'FIRST_PAGE_LINK',
//     key: 'FIRST_PAGE_LINK',
//     value: 1,
//     isActive: currentPage === 1,
//   }
// }

// export const createLastPageLink = (currentPage: number, totalPages: number) => {
//   return {
//     type: 'LAST_PAGE_LINK',
//     key: 'LAST_PAGE_LINK',
//     value: totalPages,
//     isActive: currentPage === totalPages,
//   }
// }
