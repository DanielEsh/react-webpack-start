import {RuleSetRule} from 'webpack';
import MiniCssExtractPlugin from "mini-css-extract-plugin"

const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
}

const cssLoader = {
    test: /\.css$/i,
    use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'postcss-loader',
    ]
}

export const loaders = (): RuleSetRule[] => {
    return [
        cssLoader,
        typescriptLoader,
    ]
}