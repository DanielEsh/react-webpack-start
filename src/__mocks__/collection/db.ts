import { factory, primaryKey } from '@mswjs/data'
import { rest } from 'msw'
import { seed, randUuid, rand } from '@ngneat/falso'

seed('test-seed')

const getId = () => randUuid()
const getSlug = () => rand(['slug1', 'slug2', 'slug3', 'slug4'])
const getName = () => rand(['name1', 'name2', 'name3', 'name4'])

export const db = factory({
  collection: {
    id: primaryKey(() => getId()),
    slug: () => getSlug(),
    name: () => getName(),
  },
})

const ITEMS_COUNT = 20

for (let i = 0; i < ITEMS_COUNT; i++) db.collection.create()

const DOTS = '...'

const range = (start: number, end: number) => {
  const length = end - start + 1
  /*
        Create an array of certain length and set the elements within it from
        start value to end value.
      */
  return Array.from({ length }, (_, idx) => idx + start)
}

const getPaginationRange = (currentPage = 1) => {
  const totalItemsCount = db.collection.count()
  // totalCount - общее кол-во данных
  // currentPage - текущая активная страница
  // pageSize - максимальный объем данных, видимых на странице
  // siblingCount - представляет минимальное количество кнопок страницы, которые будут отображаться с каждой стороны кнопки текущей страницы. По умолчанию 1.
  const pageSize = 2
  const siblingCount = 1
  const totalPageCount = Math.ceil(totalItemsCount / pageSize)

  // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
  const totalPageNumbers = siblingCount + 5

  if (totalPageNumbers >= totalPageCount) {
    return range(1, totalPageCount)
  }

  const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
  const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount)

  const shouldShowLeftDots = leftSiblingIndex > 2
  const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2

  const firstPageIndex = 1
  const lastPageIndex = totalPageCount

  if (!shouldShowLeftDots && shouldShowRightDots) {
    const leftItemCount = 3 + 2 * siblingCount
    const leftRange = range(1, leftItemCount)

    return [...leftRange, DOTS, totalPageCount]
  }

  if (shouldShowLeftDots && !shouldShowRightDots) {
    const rightItemCount = 3 + 2 * siblingCount
    const rightRange = range(
      totalPageCount - rightItemCount + 1,
      totalPageCount,
    )
    return [firstPageIndex, DOTS, ...rightRange]
  }

  if (shouldShowLeftDots && shouldShowRightDots) {
    const middleRange = range(leftSiblingIndex, rightSiblingIndex)
    return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex]
  }
}

const readAll = () => {
  return rest.get('http://localhost:8000/api/collection', (_req, res, ctx) => {
    const currentPage = Number(_req.url.searchParams.get('page')) ?? 1

    const firstPage = db.collection.findMany({
      take: 2,
      cursor: null,
    })

    const secondPage = db.collection.findMany({
      take: 2,
      cursor: firstPage[firstPage.length - 1].id,
    })

    const items = db.collection.findMany({
      take: 2,
      skip: 2,
    })

    const limit = 2
    const totalItemsCount = db.collection.count()
    const totalPages =
      totalItemsCount !== undefined
        ? Math.ceil(totalItemsCount / limit)
        : undefined

    const result = {
      items: items,
      meta: {
        totalCount: db.collection.count(),
        totalPages: totalPages,
        firstPage: firstPage,
        pages: getPaginationRange(currentPage),
        secondPage: secondPage,
      },
    }

    return res(ctx.json(result))
  })
}

export const collectionHandlers = [readAll()]
