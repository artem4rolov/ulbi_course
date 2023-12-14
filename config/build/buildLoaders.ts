import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { RuleSetRule } from "webpack";
import { BuildOptions } from "./types";

export function buildLoaders(options: BuildOptions): RuleSetRule {
  const svgLoader = {
    test: /\.svg$/,
    issuer: {
      and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
    },
    use: [
      {
        loader: "@svgr/webpack",
        options: {
          prettier: false,
          svgo: false,
          svgoConfig: {
            plugins: [{ removeViewBox: false }],
          },
          titleProp: true,
          ref: true,
        },
      },
      // {
      //   loader: "file-loader",
      //   options: {
      //     name: "static/media/[name].[hash].[ext]",
      //   },
      // },
    ],
  };

  const sassLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // style-loader Creates `style` nodes from JS strings
      // в дев мы не отделяем css от js
      // в проде мы отделяем стили отдельно от js
      options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: "css-loader",
        options: {
          modules: {
            // не совсем понял как работает 'auto'
            auto: (resourcePath: string) =>
              Boolean(resourcePath.includes(".module.")),
            // в деве генерим имена понятные для стилей
            // в проде генерем хэш-имена для стилей
            localIdentName: options.isDev
              ? "[path][name]__[local]--[hash:base64:5]"
              : "[hash:base64:8]",
          },
        },
      },
      // Compiles Sass to CSS
      "sass-loader",
    ],
  };

  const typeScriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return {
    rules: [svgLoader, sassLoader, typeScriptLoader],
  };
}
