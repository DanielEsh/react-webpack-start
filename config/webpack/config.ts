import {Configuration} from "webpack";
import {BuildOptions} from "./types";
import {devServer, loaders, plugins, resolve} from "../webpack/index";

export const webpackConfigFactory = (options: BuildOptions): Configuration => {
    const {mode, paths, isDev} = options;

    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.output,
            clean: true,
        },
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? devServer(options) : undefined,
        resolve: resolve,
        module: {
            rules: loaders(),
        },
        plugins: plugins(options),
    }
}