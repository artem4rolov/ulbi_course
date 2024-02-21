import { RuleSetRule } from "webpack";
import { BuildOptions } from "./types";
import { cssLoader } from "./loaders";
import { fileLoader } from "./loaders/file-loader";

export function buildLoaders(options: BuildOptions): RuleSetRule {
    const svgLoader = fileLoader()

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
                            // keyAsDefaultValue: true,
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
