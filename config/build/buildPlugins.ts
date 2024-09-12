import HTMLWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import {
  DefinePlugin,
  ProgressPlugin,
  type WebpackPluginInstance,
} from 'webpack'
import { type BuildOptions } from './types'

export function buildPlugins(options: BuildOptions): WebpackPluginInstance[] {
  const plugins = [
    new HTMLWebpackPlugin({
      template: options.paths.html,
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin(),
    new DefinePlugin({
      __IS_DEV__: options.isDev,
    }),
  ]

  if (options.isDev) {
    plugins.push(
      new BundleAnalyzerPlugin({
        openAnalyzer: false,
      }),
    )
  }

  return plugins
}
