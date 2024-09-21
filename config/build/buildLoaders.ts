import { RuleSetRule } from 'webpack'
import { BuildOptions } from './types'
import { buildBabelLoader, cssLoader } from './loaders'
import { fileLoader } from './loaders/file-loader'

export function buildLoaders(options: BuildOptions): RuleSetRule {
  const svgLoader = fileLoader()

  const sassLoader = cssLoader(options.isDev)

  const babelLoader = buildBabelLoader(options.isDev)

  const typeScriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  return {
    rules: [svgLoader, sassLoader, babelLoader, typeScriptLoader],
  }
}
