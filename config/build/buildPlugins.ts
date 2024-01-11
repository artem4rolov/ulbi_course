import HTMLWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { DefinePlugin, ProgressPlugin, type WebpackPluginInstance } from 'webpack'
import { type BuildOptions } from './types'

export function buildPlugins (options: BuildOptions): WebpackPluginInstance[] {
    return [
        new HTMLWebpackPlugin({
            template: options.paths.html
        }),
        new ProgressPlugin(),
        new MiniCssExtractPlugin(),
        new DefinePlugin({
            __IS_DEV__: options.isDev
        })
    ]
}
