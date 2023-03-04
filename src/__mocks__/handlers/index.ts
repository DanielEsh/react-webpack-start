import { rest } from 'msw'
import { test } from './test'

export const handlers = [
  rest.get('https://my.backend/book', (_req, res, ctx) => {
    return res(ctx.json(test))
  }),
]
