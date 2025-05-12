const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { join } = require('path');

const outputDir = join(__dirname, 'dist');

module.exports = {
  output: {
    path: outputDir,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        type: "asset/source"
      }
    ]
  },
  target: [ "node" ],
  plugins: [
    new NxAppWebpackPlugin({
      target: 'node',
      compiler: 'tsc',
      main: './src/electron-main.ts',
      tsConfig: './tsconfig.app.json',
      assets: ["./src/assets"],
      optimization: false,
      outputHashing: 'none',
      generatePackageJson: false,
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
                from: "../client/dist",
                to: join(outputDir, "public")
            },
            {
                from: "../server/dist/node_modules",
                to: join(outputDir, "node_modules")
            },
            {
                from: "../server/dist/assets",
                to: join(outputDir, "assets")
            },
            {
              from: "node_modules/@electron/remote",
              to: join(outputDir, "node_modules/@electron/remote")
            },
            {
              from: "node_modules/prebuild-install",
              to: join(outputDir, "node_modules/better-sqlite3/node_modules/prebuild-install")
            },
            {
              from: "package.json",
              to: join(outputDir, "package.json")
            }
        ]
    })
  ]
};
