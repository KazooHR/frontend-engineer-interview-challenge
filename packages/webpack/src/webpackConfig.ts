import path from "path";

import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import TerserPlugin from "terser-webpack-plugin";
import { Configuration } from "webpack";

import { getSwcLoader } from "./getSwcLoader";
import { buildDir, publicPath } from "./paths";

export function getWebpackConfig({
  mode = "development",
  additionalPlugins = [],
  moduleRulesToAddBefore = [],
  optimize = true,
}: {
  mode?: "development" | "production";
  additionalPlugins?: Configuration["plugins"];
  moduleRulesToAddBefore?: Required<Required<Configuration>["module"]>["rules"];
  optimize?: boolean;
} = {}): Configuration {
  return {
    mode,
    target: "web",
    entry: {
      combined: path.resolve(buildDir, "combined.ts"),
    },
    devtool: "source-map",
    output: {
      publicPath,
      path: buildDir,
      filename: "[name].[contenthash].js",
    },
    plugins: [
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "[name].css",
        chunkFilename: "[id].css",
      }),
      ...additionalPlugins,
    ],
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx", ".scss", ".css", ".mjs"],
    },
    optimization: !optimize
      ? undefined
      : {
          moduleIds: "deterministic",
          runtimeChunk: "single",
          minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
          splitChunks: {
            chunks: "all",
          },
        },
    module: {
      rules: [
        ...moduleRulesToAddBefore,
        /**
         * For SCSS modules (our normal stuff)
         */
        {
          test: /\.s?[ac]ss$/i,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
                modules: {
                  localIdentName: "[name]_[local]",
                },
              },
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
              },
            },
          ],
        },
      ],
    },
  };
}

export default getWebpackConfig({
  moduleRulesToAddBefore: [getSwcLoader({ develop: false })],
});
