import { RuleSetRule } from "webpack";
import { BuildOptions } from "./types";
import { cssLoader } from "./loaders";

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

    const sassLoader = cssLoader(options.isDev)

    const babelLoader = {
        test: /\.(ts|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env"],
                plugins: [
                    [
                        "i18next-extract",
                        {
                            locales: ["en", "ru"],
                            keyAsDefaultValue: true,
                        },
                    ],
                ],
            },
        },
    };

    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    };

    return {
        rules: [svgLoader, sassLoader, babelLoader, typeScriptLoader],
    };
}
