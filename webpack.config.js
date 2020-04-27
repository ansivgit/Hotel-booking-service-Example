const path = require('path'); // для корректной записи путей
const HTMLWebpackPlugin = require('html-webpack-plugin'); // для формирования html файлов
const {CleanWebpackPlugin} = require('clean-webpack-plugin'); // для очистки папки dist после пересборки
const CopyWebpackPlugin = require('copy-webpack-plugin'); // для копирования сторонних файлов или целых папок в папку сборки
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // обработка файлов css
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin'); // минификация css
const TerserWebpackPlugin = require('terser-webpack-plugin'); // минификация html

const isDev = process.env.NODE_ENV === 'development'; // устанавливает значение разработка/продакшн
const isProd = !isDev;

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all', // ищет одинаковый код и выносит его в отдельные файлы (напр., jQuery)
    },
  }
    if (isProd) {
      config.minimizer = [
        new OptimizeCssAssetWebpackPlugin(),
        new TerserWebpackPlugin(),
      ]
    }
  return config;
}

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`; // в режиме разработки имена файлов будут обычными, а в продакшн - с хэшами

module.exports = {
  context: path.resolve(__dirname, 'source'), // определяет "рабочую среду", относительно которой будем писать пути
  mode: 'development', //режим сборки по умолчанию
  entry: {
    'colors-type': './pages/colors-type/colors-type.js', //точка входа
  },
  output: {
    filename: filename(ext = 'js'),
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.json', '.pug', '.scss', 'css'], // определяет расширения по умолчанию, если они опущены
    alias: {
      '@': path.resolve(__dirname, 'source'), // для упрощения указания путей
    },
  },
  optimization: optimization(),
  devServer: {
    port: 4200,
    hot: isDev, // налету перегружает модули. Должно работать только для девелопмента
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './pages/colors-type/colors-type.pug',
      minify: {
        collapseWhitespace: isProd, // минификация html, должно работать только для продакшена
      }
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'source/theme/img/favicon.png'), // копируем в напку сборки фавиконку
        to: path.resolve(__dirname, 'dist'),
      }
    ]),
    new MiniCssExtractPlugin({
      filename: filename(ext = 'css'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: isDev, // налету перегружает модули. Должно работать только для девелопмента
              reloadAll: true,
            },
          },
          'css-loader',
        ],
      },
      {
        test: /\.scss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: isDev, // налету перегружает модули. Должно работать только для девелопмента
              reloadAll: true,
            },
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.pug$/i,
        use: ['pug-loader'],
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        use: ['file-loader'],
      },
      {
        test: /\.(ttf|woff|woff2|eot|eot\?)$/i, // возможно, надо убрать вопросы
        use: ['file-loader'],
      },
    ]
  }
}