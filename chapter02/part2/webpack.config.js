const path = require('path')
const HTMLWwebpackplugin = require('html-webpack-plugin')
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')

// webpack中所有的配置信息都应该写在module.exports中
module.exports = {
    mode: 'none',
    // 指定入口文件
    entry: "./src/index.ts",
    // 指定打包文件所在目录
    output: {
        // 指定打包文件的目录
        path: path.resolve(__dirname, 'dist'),
        // 打包后文件的文件
        filename: 'bundle.js',

        // 告诉webpack不使用箭头函数
        environment:{
            arrowFunction:false
        }
    },

    // 指定webpack打包时要使用的模块
    module: {
        // 指定要加载的规则
        rules: [{
            // test指定规则生效的文件(一个正则表达)
            test: /\.ts$/,
            // 要使用的loader(执行顺序是从后往前执行)
            use: [
                // 配置babel
                {
                    // 置顶加载器
                    loader: 'babel-loader',
                    options: {
                        // 设置预定义环境
                        presets: [
                            [
                                // 指定环境的插件
                                "@babel/preset-env",
                                // 配置信息
                                {
                                    // 要兼容的目标浏览器
                                    targets: {
                                        "chrome": "88",
                                        "ie":'11'
                                    },
                                    // 置顶corejs的版本（corejs的作用是比如ie没有promise，但是代码中有，就会把corejs里的promise引入进去）
                                    "corejs":'3',
                                    // 使用corejs的方式'usage'标识按需加载
                                     "useBuiltIns":'usage'
                                }
                            ]
                        ]
                    }
                },
                'ts-loader'
            ],
            // 要排除的文件
            exclude: /node_modules/
        },
        // less文件的规则
        {
            test: /\.less$/,
            use:[
                "style-loader",
                "css-loader",
                // 引入postcss
                {
                    loader:"postcss-loader",
                    options:{
                        postcssOptions:{
                            plugins:[
                                [
                                    "postcss-preset-env",
                                    {
                                        browsers:'last 3 versions'
                                    }
                                ]
                            ]
                        }
                    }
                },
                "less-loader"
            ]
        }
    ]
    },


    // 配置webpack插件
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWwebpackplugin({
            // title:'自定义title'
            template: './src/index.html'
        })
    ],

    // 用来设置可以引用模块
    resolve: {
        // 将.ts 和.js为后缀的文件设置为可以作为模块引用
        extensions: ['.ts', '.js']
    }
}