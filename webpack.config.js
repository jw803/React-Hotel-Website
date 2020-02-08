const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['@babel/polyfill', './src/index.tsx'],
    mode: 'development',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/assets/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /.ts$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/typescript', '@babel/preset-env']
                    }
                }
            },
            {
                test: /.tsx$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/typescript', '@babel/preset-react', '@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                include: [path.resolve(__dirname, './node_modules')],
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            {
                test: /\.css$/,
                exclude: [/node_modules/],
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[name]__[local]___[hash:base64:5]'
                            },
                            importLoaders: 1
                        }
                    }
                ]
            },
            {
                test: /\.(scss|sass)$/,
                exclude: [/node_modules/],
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[name]__[local]___[hash:base64:5]'
                            },
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: true ? '[name].css' : '[name].[hash].css'
        }),
        new HtmlWebpackPlugin()
    ],
    devServer: {
        port: 9000
    }
};
