interface PaginationParams {
  totalPagesCount: number
  currentPage: number
  siblingCount?: number
}

const DOTS = '...'
const DEFAULT_SIBLING_COUNT = 1
/**
 * Create an array of certain length and set the elements within it from
 * start value to end value.
 */
const range = (start: number, end: number) => {
  const length = end - start + 1
  return Array.from({ length }, (_, idx) => idx + start)
}

export const usePagination = (params: PaginationParams) => {
  const {
    totalPagesCount,
    siblingCount = DEFAULT_SIBLING_COUNT,
    currentPage,
  } = params

  // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
  const totalPageNumbers = siblingCount + 5

  if (totalPageNumbers >= totalPagesCount) {
    return range(1, totalPagesCount)
  }

  const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
  const rightSiblingIndex = Math.min(
    currentPage + siblingCount,
    totalPagesCount,
  )

  const shouldShowLeftDots = leftSiblingIndex > 2
  const shouldShowRightDots = rightSiblingIndex < totalPagesCount - 2

  const firstPageIndex = 1
  const lastPageIndex = totalPagesCount

  if (!shouldShowLeftDots && shouldShowRightDots) {
    const leftItemCount = 3 + 2 * siblingCount
    const leftRange = range(1, leftItemCount)

    return [...leftRange, DOTS, totalPagesCount]
  }

  if (shouldShowLeftDots && !shouldShowRightDots) {
    const rightItemCount = 3 + 2 * siblingCount
    const rightRange = range(
      totalPagesCount - rightItemCount + 1,
      totalPagesCount,
    )
    return [firstPageIndex, DOTS, ...rightRange]
  }

  if (shouldShowLeftDots && shouldShowRightDots) {
    const middleRange = range(leftSiblingIndex, rightSiblingIndex)
    return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex]
  }
}
