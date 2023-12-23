import { Configuration as DevServerConfiguration } from "webpack-dev-server";

export function devServer(
  options: DevServerConfiguration
): DevServerConfiguration {
  const { port, open } = options;
  return {
    port,
    open,
    historyApiFallback: true,
    hot: true,
  };
}
