'use strict';

require('dotenv').config();

const { DefinePlugin, EnvironmentPlugin } = require('webpack');
const CleanPlugin = require('clean-webpack-plugin');
const UglifyPlugin = require('uglifyjs-webpack-plugin');

const HTMLPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// mattL - webpack configuration
const webPackConfig = module.exports = {};

const PRODUCTION = process.env.NODE_ENV === 'production';

webPackConfig.entry = `${__dirname}/src/main.js`;
webPackConfig.output = {
  filename : 'bundle.[hash].js',
  path : `${__dirname}/build`,
  publicPath : '/', // mattL - needed to load the bundle from any page route
};

webPackConfig.plugins = [
  new HTMLPlugin({
    template : `${__dirname}/src/public/index.html`,
    favicon : 'src/images/favicon.ico',
  }),
  new EnvironmentPlugin(['NODE_ENV']),
  new DefinePlugin({
    __API_URL__ : JSON.stringify(process.env.API_URL), // TODO: Define Other ENV variables
  }),
  new ExtractTextPlugin({
    filename : 'bundle.[hash].css',
    disable : process.env.NODE_ENV !== 'production',
  }),
];

if (PRODUCTION) {
  webPackConfig.plugins = webPackConfig.plugins.concat([
    new UglifyPlugin(),
    new CleanPlugin(),
  ]);
}

webPackConfig.module = {
  rules : [
    {
      test : /\.js$/,
      exclude : /node_modules/,
      loader : 'babel-loader',
    },
    // mattL - image loader
    {
      test : /\.(jpg|jpeg|gif|png|svg)$/,
      exclude : /\.icon\.svg$/,
      use : [{
        loader : 'url-loader',
        options : {
          limit : 10000,
          name : 'image/[name].[hash].[ext]',
        },
      }],
    },
    // mattL - load favicon
    {
      test : /\.ico$/,
      use : [{
        loader : 'url-loader',
        options : {
          limit : 10000,
          name : 'image/[name].[ext]',
        },
      }],
    },
    // mattL - font loader
    {
      test : /\.(woff|woff2|ttf|eot).*/,
      use : [
        {
          loader : 'url-loader',
          options : {
            limit : 10000,
            name : 'font/[name].[hash].[ext]',
          },
        },
      ],
    },
    // mattL - sass loader
    {
      test : /\.scss$/,
      loader : ExtractTextPlugin.extract({
        fallback : 'style-loader',
        use : [
          'css-loader',
          'resolve-url-loader',
          {
            loader : 'sass-loader',
            options : {
              sourceMap : true,
              includePaths : [
                `${__dirname}/src/style/main.scss`,
              ],
            },
          },
        ],
      }),
    },
  ],
};

// mattL - devtools for debugging if not in production
webPackConfig.devtool = PRODUCTION ? undefined : 'eval-source-map';

// mattL - handle browser history
webPackConfig.devServer = {
  historyApiFallback : true,
};
