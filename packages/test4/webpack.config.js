const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = { 
  target: 'web',
  entry:'./src/page/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'ts-loader'],
        include: `${__dirname}/src/page`,
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    modules: ["src", "node_modules"]
  },
  output:{
    path: `${__dirname}/dist/page`,
    filename: 'bundle.js',
    publicPath: '/dist/page'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/page/index.html'
    })
  ]
}