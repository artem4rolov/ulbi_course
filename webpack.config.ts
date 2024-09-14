import webpack from 'webpack'
import path from 'path'
import { EnvTypes, PathsType } from './config/build/types'
import buildConfig from './config/build/buildConfig'

const paths: PathsType = {
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  output: path.resolve(__dirname, 'build'),
  html: path.resolve(__dirname, 'public', 'index.html'),
  src: path.resolve(__dirname, 'src'),
}

export default (env: EnvTypes) => {
  const apiUrl = env.apiUrl || 'http://localhost:8000'
  const mode = env.mode || 'development'
  const isDev = mode === 'development'
  const PORT = env.port || 3000

  const config: webpack.Configuration = buildConfig({
    mode: env.mode,
    paths,
    port: PORT,
    isDev,
    apiUrl,
  })

  return config
}
