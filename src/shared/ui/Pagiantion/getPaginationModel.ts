import {
  createRange,
  createPageFactory,
  createFirstPageLink,
  createLastPageLink,
  createNextPageLink,
  createPreviousPageLink,
  createFirstEllipsis,
  createSecondEllipsis,
} from './helpers'
import type { PaginationModel } from './types'

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
const ELLIPSIS_SIZE = 1
const FIRST_PAGE = 1

export function getPaginationModel(
  options: PaginationModelOptions,
): PaginationModel[] {
  const {
    boundaryPagesRange = DEFAULT_BOUNDARY_PAGES_RANGE,
    siblingPagesRange = DEFAULT_SIBLING_COUNT,
    totalPages,
    currentPage,
  } = options

  const paginationModel = []

  const createPage = createPageFactory(currentPage)
  const first = createFirstPageLink(currentPage)
  const last = createLastPageLink(currentPage, totalPages)
  const prev = createPreviousPageLink(currentPage)
  const next = createNextPageLink(currentPage, totalPages)

  const makeFirstGroup = (groupEnd: number) => {
    return createRange(FIRST_PAGE, groupEnd).map(createPage)
  }

  const makeLastGroup = (groupStart: number) => {
    return createRange(groupStart, totalPages).map(createPage)
  }

  const createAllElements = () => {
    return createRange(FIRST_PAGE, totalPages).map(createPage)
  }

  // Simplify generation of pages if number of available items is equal or greater than total pages to show
  if (
    1 + 2 * ELLIPSIS_SIZE + 2 * siblingPagesRange + 2 * boundaryPagesRange >=
    totalPages
  ) {
    paginationModel.push(...createAllElements())
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
        firstPagesEnd + ELLIPSIS_SIZE + 1,
      ),
      lastPagesStart - ELLIPSIS_SIZE - 2 * siblingPagesRange - 1,
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

  return [first, prev, ...paginationModel, next, last]
}
