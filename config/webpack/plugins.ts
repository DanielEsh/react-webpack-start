import {WebpackPluginInstance, ProgressPlugin} from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {BuildOptions} from "./types";

export const plugins = ({paths}: BuildOptions): WebpackPluginInstance[] => {
    return [
        new HtmlWebpackPlugin({ template: paths.html }),
        new ProgressPlugin()
    ]
}