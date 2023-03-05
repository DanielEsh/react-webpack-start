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
    const result = db.collection.getAll()

    return res(ctx.json(result))
  })
}

export const collectionHandlers = [readAll()]
