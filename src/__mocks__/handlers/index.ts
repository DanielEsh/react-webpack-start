import { rest } from 'msw'
import { test } from './test'
import { collectionHandlers } from '__mocks__/collection/db'

export const handlers = [
  rest.get('http://localhost:8000/api/test', (_req, res, ctx) => {
    return res(ctx.json(test))
  }),
  ...collectionHandlers,
]
