import HTMLWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ProgressPlugin, WebpackPluginInstance } from "webpack";

export function buildPlugins(htmlPath: string): WebpackPluginInstance[] {
  return [
    new HTMLWebpackPlugin({
      template: htmlPath,
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin(),
  ];
}
