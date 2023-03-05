import { factory, primaryKey } from '@mswjs/data'
import { rest } from 'msw'

export const db = factory({
  collection: {
    id: primaryKey(String),
    firstName: String,
    age: Number,
  },
})

db.collection.create({ id: 'user-1', firstName: 'test', age: 27 })
db.collection.create({ id: 'user-2', firstName: 't2', age: 21 })
db.collection.create({ id: 'user-3', firstName: 't3', age: 44 })

const readAll = () => {
  return rest.get('http://localhost:8000/api/collection', (_req, res, ctx) => {
    const result = db.collection.getAll()

    return res(ctx.json(result))
  })
}

export const collectionHandlers = [readAll()]
