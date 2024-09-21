export const buildBabelLoader = (isDev: boolean) => {
  console.log(isDev)

  return {
    test: /\.(ts|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          [
            'i18next-extract',
            {
              locales: ['en', 'ru'],
              // keyAsDefaultValue: true,
            },
            isDev && require.resolve('react-refresh/babel'),
          ],
        ].filter(Boolean),
      },
    },
  }
}
