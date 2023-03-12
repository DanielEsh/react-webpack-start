import webpack from 'webpack'
import path from 'path'
import dotenv from 'dotenv'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import { BuildEnv, BuildPaths } from './config/build/types/config'

const DEFAULT_PORT = 3000

dotenv.config()

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    dirSrc: path.resolve(__dirname, 'src'),
  }

  console.log('ENV', process.env.PORT)
  const envPort = process.env.PORT as number | undefined

  const mode = env.mode || 'development'
  const isDev = mode === 'development'
  const PORT = envPort ?? DEFAULT_PORT

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
  })

  return config
}
