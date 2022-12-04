import path from 'path'
import {Configuration} from 'webpack'
import {webpackConfigFactory} from "./config/webpack/config";
import {BuildEnv, BuildPaths} from "./config/webpack/types";

const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
}

export default (env: BuildEnv) => {
    const mode = env.mode || 'development'
    const isDev = mode === 'development';
    const port = env.port || 3000

    const config: Configuration = webpackConfigFactory({
        mode,
        paths,
        port,
        isDev,
    })

    return config
};