import {
  PaginationElementsType,
  createPaginationElement,
  createRange,
} from './helpers'

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
    type: 'ELLIPSIS',
    key: 'FIRST_ELLIPSIS',
    value: pageNumber,
    isActive: false,
  }
}

export const createSecondEllipsis = (pageNumber: number) => {
  return {
    type: 'ELLIPSIS',
    key: 'SECOND_ELLIPSIS',
    value: pageNumber,
    isActive: false,
  }
}

export const createPreviousPageLink = (currentPage: number) => {
  return {
    type: 'PREVIOUS_PAGE_LINK',
    key: 'PREVIOUS_PAGE_LINK',
    value: Math.max(1, currentPage - 1),
    isActive: currentPage === 1,
  }
}

export const createNextPageLink = (currentPage: number, totalPages: number) => {
  return {
    type: 'NEXT_PAGE_LINK',
    key: 'NEXT_PAGE_LINK',
    value: Math.min(totalPages, currentPage + 1),
    isActive: currentPage === totalPages,
  }
}

export const createFirstPageLink = (currentPage: number) => {
  return {
    type: 'FIRST_PAGE_LINK',
    key: 'FIRST_PAGE_LINK',
    value: 1,
    isActive: currentPage === 1,
  }
}

export const createLastPageLink = (currentPage: number, totalPages: number) => {
  return {
    type: 'LAST_PAGE_LINK',
    key: 'LAST_PAGE_LINK',
    value: totalPages,
    isActive: currentPage === totalPages,
  }
}

interface PaginationModelOptions {
  /**
   * total number of pages
   */
  totalPages: number

  /**
   * currentPage number
   */
  currentPage: number

  /**
   * number of always visible pages at the beginning and end
   */
  boundaryPagesRange?: number

  /**
   * number of always visible pages before and after the current one
   */
  siblingPagesRange?: number
}

const DEFAULT_SIBLING_COUNT = 1
const DEFAULT_BOUNDARY_PAGES_RANGE = 1

export function paginationFactory(options: PaginationModelOptions) {
  const {
    boundaryPagesRange = DEFAULT_BOUNDARY_PAGES_RANGE,
    siblingPagesRange = DEFAULT_SIBLING_COUNT,
    totalPages,
    currentPage,
  } = options

  const ellipsisSize = 1
  const paginationModel = []

  const createPage = createPageFactory(currentPage)

  const makeFirstGroup = (groupEnd: number) => {
    const firstPagesStart = 1
    return createRange(firstPagesStart, groupEnd).map(createPage)
  }

  const makeLastGroup = (groupStart: number) => {
    return createRange(groupStart, totalPages).map(createPage)
  }

  // Simplify generation of pages if number of available items is equal or greater than total pages to show
  if (
    1 + 2 * ellipsisSize + 2 * siblingPagesRange + 2 * boundaryPagesRange >=
    totalPages
  ) {
    const allPages = createRange(1, totalPages).map(createPage)
    paginationModel.push(...allPages)
  } else {
    // Calculate group of first pages
    const firstPagesEnd = boundaryPagesRange
    const firstPages = makeFirstGroup(firstPagesEnd)

    // Calculate group of last pages
    const lastPagesStart = totalPages + 1 - boundaryPagesRange
    const lastPages = makeLastGroup(lastPagesStart)

    // Calculate group of main pages
    const mainPagesStart = Math.min(
      Math.max(
        currentPage - siblingPagesRange,
        firstPagesEnd + ellipsisSize + 1,
      ),
      lastPagesStart - ellipsisSize - 2 * siblingPagesRange - 1,
    )
    const mainPagesEnd = mainPagesStart + 2 * siblingPagesRange
    const mainPages = createRange(mainPagesStart, mainPagesEnd).map(createPage)

    // Add group of first pages
    paginationModel.push(...firstPages)

    // Calculate and add ellipsis before group of main pages
    const firstEllipsisPageNumber = mainPagesStart - 1
    const showPageInsteadOfFirstEllipsis =
      firstEllipsisPageNumber === firstPagesEnd + 1
    const createFirstEllipsisOrPage = showPageInsteadOfFirstEllipsis
      ? createPage
      : createFirstEllipsis
    const firstEllipsis = createFirstEllipsisOrPage(firstEllipsisPageNumber)
    paginationModel.push(firstEllipsis)

    // Add group of main pages
    paginationModel.push(...mainPages)

    // Calculate and add ellipsis after group of main pages
    const secondEllipsisPageNumber = mainPagesEnd + 1
    const showPageInsteadOfSecondEllipsis =
      secondEllipsisPageNumber === lastPagesStart - 1
    const createSecondEllipsisOrPage = showPageInsteadOfSecondEllipsis
      ? createPage
      : createSecondEllipsis
    const secondEllipsis = createSecondEllipsisOrPage(secondEllipsisPageNumber)
    paginationModel.push(secondEllipsis)

    // Add group of last pages
    paginationModel.push(...lastPages)
  }

  const first = createFirstPageLink(currentPage)
  const last = createLastPageLink(currentPage, totalPages)
  const prev = createPreviousPageLink(currentPage)
  const next = createNextPageLink(currentPage, totalPages)

  return [first, prev, ...paginationModel, next, last]
}
