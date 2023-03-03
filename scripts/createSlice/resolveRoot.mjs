import { resolve } from 'path'

export const resolveRoot = (...segments) =>
  resolve(__dirname, '..', '..', ...segments)
