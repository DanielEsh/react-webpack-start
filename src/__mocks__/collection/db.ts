import { factory, primaryKey } from '@mswjs/data'
import { rest } from 'msw'
import { seed, incrementalNumber, randNumber, rand } from '@ngneat/falso'

seed('test-seed')

const getId = incrementalNumber()
const getSlug = () => rand(['slug1', 'slug2', 'slug3', 'slug4'])
const getName = () => rand(['name1', 'name2', 'name3', 'name4'])
const getGoodsCount = () => randNumber({ min: 1, max: 100 })

interface CreateForm {
  slug: string
  name: string
  goodsCount: number
}

export const db = factory({
  collection: {
    id: primaryKey(() => getId()),
    slug: () => getSlug(),
    name: () => getName(),
    goodsCount: () => getGoodsCount(),
  },
})

const ITEMS_COUNT = 20

for (let i = 0; i < ITEMS_COUNT; i++) db.collection.create()

const create = (form?: CreateForm) => {
  return rest.post(
    'http://localhost:8000/api/collection/create',
    (_req, res, ctx) => {
      const createResult = db.collection.create({
        slug: form?.slug,
        name: form?.name,
        goodsCount: form?.goodsCount,
      })

      return res(ctx.json(createResult))
    },
  )
}

const readAll = () => {
  return rest.get('http://localhost:8000/api/collection', (_req, res, ctx) => {
    const currentPage = Number(_req.url.searchParams.get('page')) ?? 1
    const limit = Number(_req.url.searchParams.get('limit')) ?? 1
    const offset = (currentPage - 1) * limit

    // take - limit
    // offset - skip

    console.group('Pagination')
    console.log('limit', limit)
    console.log('offset', offset)
    console.groupEnd()

    const firstPage = db.collection.findMany({
      take: limit,
      cursor: null,
    })

    const secondPage = db.collection.findMany({
      take: limit,
      cursor: firstPage[firstPage.length - 1].id,
    })

    const items = db.collection.findMany({
      take: limit,
      skip: offset,
    })

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
        secondPage: secondPage,
      },
    }

    return res(ctx.json(result))
  })
}

export const collectionHandlers = [create(), readAll()]
