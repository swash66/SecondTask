let path = require('path');
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let jeet = require('jeet');
let nib = require('nib');

let conf = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
        publicPath: 'dist/'
    },
    devServer: {
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test:   /\.styl$/,
                //loader: 'style-loader!css-loader!stylus-loader'
                use: ExtractTextPlugin.extract({
                    publicPath: '../',
                    fallback: 'style-loader',
                    use: ['css-loader','stylus-loader'],
                })

            },
            {
                test: /\.pug$/,
                use: [{ loader : "pug-loader", options: { pretty: true } }]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: 'file-loader?name=./src/fonts/MyriadPro/[name].[ext]'
                    },
                    {
                        loader: 'file-loader?name=./src/fonts/MyriadPro/[name].[ext]'
                    }
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
        /*new HtmlWebpackPlugin({
            template: './src/index.pug',
        })*/
    ]
};

module.exports = conf;