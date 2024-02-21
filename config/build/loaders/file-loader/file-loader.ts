
export const fileLoader = () => {
    return {
        
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

    }}