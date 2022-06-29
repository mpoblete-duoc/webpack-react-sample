const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const ruleForJavascript = {
    test: /\.js$/,
    loader: 'babel-loader',
    options: {
        presets: [
            ['@babel/preset-react', { runtime: "automatic" }]
        ]
    }
}

const ruleForStyles = {
    test: /\.css$/,
    use: [
        'style-loader',
        'css-loader'
    ]
}

const rules = [ruleForJavascript, ruleForStyles]

module.exports = {
    //entry: './src/index.js'
    output: {
        path: path.resolve(__dirname, 'build')
    },
    plugins: [
        new HtmlWebpackPlugin({template: 'src/index.html'})
    ],
    module: {
        rules
    },
    devServer: {
        open: true, //abre navegador,
        port: 3000,
        compress: true,
        client: {
            overlay: true,
        }
    }
}