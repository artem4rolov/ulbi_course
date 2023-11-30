import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolves } from "./buildResolves";
import { devServer } from "./devServer";
import { BuildOptions } from "./types";

export default function buildConfig(options: BuildOptions) {
  const { mode, paths, isDev } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: "[name][contenthash].js",
      path: paths.output,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: buildLoaders(options),
    resolve: buildResolves(options),
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev ? devServer({ port: 3000, open: true }) : undefined,
  };
}
