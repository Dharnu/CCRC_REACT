module.exports = {
  entry: [
    './src/App.jsx'
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015']
      },
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/
    }, {
      test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
      loader: 'file-loader?name=public/assets/fonts/[name].[ext]'
    }]
  }
};