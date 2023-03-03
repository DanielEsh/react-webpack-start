import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

export const resolveRoot = (...segments) =>
  resolve(__dirname, '..', '..', ...segments)
