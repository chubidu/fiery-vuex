const path = require('path')

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.ts' ]
  },
  output: {
    filename: 'fiery-vuex.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'FieryVuex',
    libraryTarget: 'umd',
    umdNamedDefine: true
  }
}
