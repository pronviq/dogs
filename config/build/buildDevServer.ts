import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types/types";
import path from "path";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  const port = options.port;

  return {
    port: port,
    open: false,
    historyApiFallback: true,
    hot: true,
    host: "0.0.0.0",
    allowedHosts: "all",
    client: {
      logging: "none",
      overlay: false,
    },
    watchFiles: [path.resolve(options.path.src, "..", ".env")],
  };
}
