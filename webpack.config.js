const path = require("path")
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
module.exports = {
    mode: 'production',
    entry: "./src/index.js",
    resolve: {
        extensions: ['.js', '.vue']
    },
    externals: ['vue', 'vue-loader', 'vue-template-compiler'],
    module: {
        rules: [
            {
            test: /\.vue?$/,
            loader: 'vue-loader'
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                        }
                    },
                    'less-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: '[name]_[hash].[ext]',
                        outputPath: 'images/',
                        limit: 5000
                    }
                }
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[name].chunk.css'
        }),
        new CleanWebpackPlugin()
    ],
    optimization: {
        minimizer: [new OptimizeCSSAssetsPlugin({})],
    },
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: '[name].js',
        libraryTarget: 'umd'
    }
}