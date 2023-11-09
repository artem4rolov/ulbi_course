import HTMLWebpackPlugin from "html-webpack-plugin";
import { ProgressPlugin, WebpackPluginInstance } from "webpack";

export function buildPlugins(htmlPath: string): WebpackPluginInstance[] {
  return [
    new HTMLWebpackPlugin({
      template: htmlPath,
    }),
    new ProgressPlugin(),
  ];
}
