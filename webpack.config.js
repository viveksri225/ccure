const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const fs = require('fs');
const lessToJs = require('less-vars-to-js');
const themeVars = path.join(__dirname, 'src/assets/fonts/antd/antd-theme-overrides.less');
const themeVariables = lessToJs(fs.readFileSync(themeVars, 'utf8'));

module.exports = {
    entry: {
        app: './src/index.js',
    },
    output: {
        path: path.join(__dirname, '/build'),
        filename: 'js/[name].bundle.js',
        publicPath: '/',
    },
    devServer: {
        historyApiFallback: true,
        disableHostCheck: true,
        host: process.env.IP || '0.0.0.0',
        port: process.env.PORT || '8080',
    },
    plugins: [
        // new BundleAnalyzerPlugin(),
        new CompressionPlugin({
            cache: true,
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: 'css/[name].css',
        }),
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                chunkFilter: (chunk) => {
                    if (chunk.name === 'vendor') {
                        return false;
                    }

                    return true;
                },
            }),
            new OptimizeCSSAssetsPlugin({}),
        ],
        splitChunks: {
            cacheGroups: {
                react: {
                    test: /[\\/]node_modules[\\/]((react).*)[\\/]/,
                    name: 'react',
                    chunks: 'all',
                },
                vendor: {
                    test: /[\\/]node_modules[\\/]((?!react).*)[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                },
            },
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: { loader: 'babel-loader' },
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                ],
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    {
                        loader: 'less-loader',
                        options: { javascriptEnabled: true, modifyVars: themeVariables },
                    },
                ],
            },
            {
                test: /\.html$/,
                use: [{ loader: 'html-loader', options: { minimize: true } }],
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 100000,
                            name: '[hash]_[name].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css'],
        symlinks: false,
    },
};
