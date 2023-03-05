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

const readAll = () => {
  return rest.get('http://localhost:8000/api/collection', (_req, res, ctx) => {
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
        secondPage: secondPage,
      },
    }

    return res(ctx.json(result))
  })
}

export const collectionHandlers = [readAll()]
