const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.m?js$/, //This says that whenever
                //we import in a file that ends with an extension of either mjs
                //or just js, we want it to be processed by Bable
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react',//Babel is going to process all the different
                            //JSM tags so we add into our application so that a little bit of reactor related code
                            '@babel/preset-env'],//right here is going to transform our code in a variety of
                        //different ways , so take all these kind of 2025, 16, 17 and so on syntax
                        //and convert it down to S5.                   
                        plugins: ['@babel/plugin-transform-runtime'], //plug in transform runtime is going to add
                        //in a little bit of additional code just to enable some different features for our project
                        //inside the browser, such as async syntax and some other related things
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
    ]
}