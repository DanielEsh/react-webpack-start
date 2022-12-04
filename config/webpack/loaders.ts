import {RuleSetRule} from 'webpack';

const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
}

const cssLoader = {
    test: /\.css$/i,
    use: [
        // Creates `style` nodes from js strings
        'style-loader',
        // Translates CSS into CommonJS
        'css-loader',
        // 
        'postcss-loader',
    ]
}

export const loaders = (): RuleSetRule[] => {
    return [
        cssLoader,
        typescriptLoader,
    ]
}