const path = require("path");

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry: './src/index.js',
    output: {
        filename: "output.js",
        path: path.resolve(__dirname, 'dist'),
    },
    module:{
        rules:[
            {
                test: /\.scss$/,
                use: [
                    { loader: 'style-loader' },
                    {
                      loader: 'css-loader',
                      options: {
                        modules: true,
                      },
                    },
                    { loader: 'sass-loader' },
                  ],
            }
        ]
    },
    /*plugins: [
        new BundleAnalyzerPlugin()
    ],*/
    devServer:{
        contentBase: path.join(__dirname,'public'),
        port:9000
    }
}