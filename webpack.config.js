let path = require('path');
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let jeet = require('jeet');
let nib = require('nib');
let sync = require('browser-sync-webpack-plugin');

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
    watch: true,
    plugins: [
        new sync({
            host: "localhost",
            port: 6555,
            server: {
                baseDir: "./"  // здесь д.б. index.html, не регариует на ../
            },
            open: false,
            files: ["./*.html"]
        }),
        new ExtractTextPlugin("styles.css"),
        /*new BrowserSyncPlugin(
            // BrowserSync options
            {
                // browse to http://localhost:3000/ during development
                host: 'localhost',
                port: 7331,
                // proxy the Webpack Dev Server endpoint
                // (which should be serving on http://localhost:3100/)
                // through BrowserSync
                proxy: 'http://localhost:8080/'
            },
            // plugin options
            {
                // prevent BrowserSync from reloading the page
                // and let Webpack Dev Server take care of this
                reload: false
            }
        )*/
        /*new HtmlWebpackPlugin({
            template: './src/index.pug',
        })*/
    ]
};

module.exports = conf;
