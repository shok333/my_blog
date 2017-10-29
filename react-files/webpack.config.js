'use strict'

const NODE_ENV = process.env.NODE_ENV || 'dev'
// Для разработки запуск NODE_ENV='dev' webpack


const ExtractTextPlugin = require("extract-text-webpack-plugin");

var extractPlugin = new ExtractTextPlugin({
    filename: 'css/[name].css'
});

process.traceDeprecation = true

module .exports={
    //context:__dirname+'\\development/js',//из этой директории берутся исходные файлы
    entry:{
        index: "./frontend/app",
    },
    output: {//output показывает куда будем выводить полученные данные
        path: __dirname+ '/../web/',
        filename: "js/[name].js", //имя получившегося файла
        publicPath: '/web/'
    },
    devServer: {
        inline: false
    },
    watch: NODE_ENV =='dev',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use:[
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["es2015"]
                        },
                    }
                ]
                // options for the loader
            },{
                test: /\.scss$/,
                use: extractPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
            },{
                test: /\.sass$/,
                use: extractPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]



    },
    plugins: [
        extractPlugin
    ],
    resolve:{
        extensions: ['*', '.js', '.es6'] // расширения для загрузки модулей
    },
    devtool: NODE_ENV =='dev' ? 'eval-source-map' : null,



};

