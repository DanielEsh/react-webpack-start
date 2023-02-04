import { BuildOptions } from './types/config'
import { ResolveOptions } from 'webpack'

export function buildResolvers(options: BuildOptions): ResolveOptions {
  const { paths } = options
  const { dirSrc } = paths

  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [dirSrc, 'node_modules'],
    mainFiles: ['index'],
    alias: {},
  }
}
