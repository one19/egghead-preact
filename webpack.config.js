const path = require('path');

module.exports = {
  // input
  entry: './src',
  // output
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  // transformations
  module: {
    rules: [
      {
        test: /\.jsx?/i,
        loader: 'babel-loader',
        options: {
          presets: ['env', 'stage-2'],
          plugins: [
            'syntax-flow',
            'transform-flow-strip-types',
            ['transform-react-jsx', { pragma: 'h' }]
          ]
        }
      }
    ]
  },
  resolve: {
    alias: {
      react: 'preact'
    }
  },
  // sourcemaps
  devtool: 'source-map',
  // server
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    compress: true,
    historyApiFallback: true,
    port: 9002
  }
};
