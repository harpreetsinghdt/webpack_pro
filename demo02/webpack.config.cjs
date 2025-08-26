const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: 'svg-inline-loader'
            },
            {
                test: /\.sass$/,
                use: ['style-loader', 'css-loader', 'sass-loader'], // <-- comma added
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin()],
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    resolve: {
        extensions: ['.js']
    }
};
