const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { join } = require('path');

const outputDir = join(__dirname, 'dist');

module.exports = {
  output: {
    path: join(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        type: "asset/source"
      }
    ]
  },
  plugins: [
    new NxAppWebpackPlugin({
      target: 'node',
      compiler: 'tsc',
      main: './src/electron-docs-main.ts',
      tsConfig: './tsconfig.app.json',
      optimization: false,
      outputHashing: 'none',
      generatePackageJson: true,
      externalDependencies: [
        "electron/main",
        "@electron/remote/main",
        "electron",
        "@electron/remote",        
        "better-sqlite3"
      ]
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "../desktop/dist/node_modules",
          to: join(outputDir, "node_modules")
        },
        {
          from: "../desktop/dist/assets",
          to: join(outputDir, "assets")
        },
        {
          from: "../desktop/dist/public",
          to: join(outputDir, "public")
        },
      ]
    })
  ],
};
