import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export const cssLoader = (isDev: boolean) => {
  return {
    test: /\.s[ac]ss$/i,
    use: [
      // style-loader Creates `style` nodes from JS strings
      // в дев мы не отделяем css от js
      // в проде мы отделяем стили отдельно от js
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: 'css-loader',
        options: {
          modules: {
            // не совсем понял как работает 'auto'
            auto: (resourcePath: string) =>
              Boolean(resourcePath.includes('.module.')),
            // в деве генерим имена понятные для стилей
            // в проде генерем хэш-имена для стилей
            localIdentName: isDev
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64:8]',
          },
        },
      },
      // Compiles Sass to CSS
      'sass-loader',
    ],
  }
}
