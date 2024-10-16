import HTMLWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import {
  DefinePlugin,
  ProgressPlugin,
  type WebpackPluginInstance,
} from 'webpack'
import { type BuildOptions } from './types'
import CopyPlugin from 'copy-webpack-plugin'

export function buildPlugins(options: BuildOptions): WebpackPluginInstance[] {
  const plugins = [
    new HTMLWebpackPlugin({
      template: options.paths.html,
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin(),
    new DefinePlugin({
      __IS_DEV__: JSON.parse(JSON.stringify(options.isDev)),
      __API_URL__: JSON.stringify(options.apiUrl),
      __PROJECT__: JSON.stringify(options.project),
    }),
    new CopyPlugin({
      patterns: [
        { from: options.paths.locales, to: options.paths.buildLocales },
      ],
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
