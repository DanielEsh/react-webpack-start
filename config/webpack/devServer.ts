import {BuildOptions} from "./types";
import type {Configuration} from "webpack-dev-server";

export const devServer = (options: BuildOptions): Configuration => {
    const {port} = options;

    return {
        port: port,
        open: true,
    }
}