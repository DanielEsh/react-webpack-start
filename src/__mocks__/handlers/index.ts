import { rest } from 'msw'
import { test } from './test'

export const handlers = [
  rest.get('http://localhost:8000/api/test', (_req, res, ctx) => {
    return res(ctx.json(test))
  }),
]
