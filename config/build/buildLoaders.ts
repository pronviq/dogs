import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack, { ModuleOptions } from "webpack";
import { BuildOptions } from "./types/types";
import ReactRefreshTypeScript from "react-refresh-typescript";

export function buildLoaders(options: BuildOptions): ModuleOptions["rules"] {
  const isDev = options.mode === "development";
  const isProd = options.mode === "production";

  const tsLoader = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: "ts-loader",
        options: {
          transpileOnly: isDev,
          getCustomTransformers: () => ({
            before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
          }),
        },
      },
    ],
  };

  const cssLoaderWithModules = {
    loader: "css-loader",
    options: {
      modules: {
        localIdentName: isDev ? "[local]_[hash:base64:5]" : "[hash:base64:10]",
      },
      sourceMap: true,
    },
  };

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isProd ? MiniCssExtractPlugin.loader : "style-loader",
      cssLoaderWithModules,
      "sass-loader",
    ],
    exclude: /node_modules/,
  };

  const cssLoader = {
    test: /\.css$/i,
    use: ["style-loader", "css-loader"],
    // exclude: /node_modules/,
  };

  return [tsLoader, cssLoader, scssLoader];
}
