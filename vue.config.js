/* eslint no-param-reassign:0 import/no-extraneous-dependencies:0 */
const path = require('path');
// const webpack = require('webpack');
const winston = require('winston-color');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const WebpackSynchronizableShellPlugin = require('webpack-synchronizable-shell-plugin');
const NativeScriptVueExternals = require('nativescript-vue-externals');
const NativeScriptVueTarget = require('nativescript-vue-target');
const cssnano = require('cssnano');
const { copyNativeScriptPlugins, updateDistFromTemplate } = require('./src/native/prepare');

const lifecycleEvent = process.env.npm_lifecycle_event;
let action = 'build';
let watch = false;

if (lifecycleEvent.indexOf('build:debug') === 0) {
    action = 'debug';
    watch = true;
}
if (lifecycleEvent.indexOf('build:watch') === 0) {
    action = 'run';
    watch = true;
}

// Prepare NativeScript application from template (if necessary)
copyNativeScriptPlugins();
updateDistFromTemplate();

// CSS / SCSS style extraction loaders
const cssLoader = ExtractTextPlugin.extract({
    use: [
        {
            loader: 'css-loader',
            options: { url: false },
        },
    ],
});
const scssLoader = ExtractTextPlugin.extract({
    use: [
        {
            loader: 'css-loader',
            options: {
                url: false,
                includePaths: [path.resolve(__dirname, 'node_modules')],
            },
        },
        'sass-loader',
    ],
});

// Generate platform-specific webpack configuration
const configuration = (platform, launchArgs) => {
    winston.info(`Bundling application for ${process.env.VUE_APP_PLATFORM}...`);

    return {
        lintOnSave: true,
        outputDir: (process.env.VUE_APP_PLATFORM === 'android' || process.env.VUE_APP_PLATFORM === 'ios') ? './dist/app' : 'dist',
        configureWebpack: (config) => {
            if (process.env.VUE_APP_PLATFORM === 'android' || process.env.VUE_APP_PLATFORM === 'ios') {
                config.watch = watch;
                config.output.filename = `app.${process.env.VUE_APP_PLATFORM}.js`;
                config.resolve.modules = [
                    'node_modules/tns-core-modules',
                    'node_modules',
                ];
                config.node = {
                    http: false,
                    timers: false,
                    setImmediate: false,
                    fs: 'empty',
                };
                config.stats = 'errors-only';
                config.externals = NativeScriptVueExternals;
                config.target = NativeScriptVueTarget;
                config.plugins = [
                    // Extract CSS to separate file
                    new ExtractTextPlugin({ filename: `app.${platform}.css` }),

                    // Optimize CSS output
                    new OptimizeCssAssetsPlugin({
                        cssProcessor: cssnano,
                        cssProcessorOptions: { discardComments: { removeAll: true } },
                        canPrint: false,
                    }),

                    // Minify JavaScript code
                    // new webpack.optimize.UglifyJsPlugin({
                    //   compress: { warnings: false },
                    //   output: { comments: false },
                    // }),

                    // Copy src/assets/**/* to dist/
                    new CopyWebpackPlugin([
                        { from: 'assets', context: 'src' },
                        { from: 'template', to: '../' },
                    ]),

                    // Execute post-build scripts with specific arguments
                    new WebpackSynchronizableShellPlugin({
                        onBuildEnd: {
                            scripts: [
                                ...launchArgs ? [`node ./src/native/launch.js ${launchArgs}`] : [],
                            ],
                            blocking: false,
                        },
                    }),
                ];
            }

            if (process.env.VUE_APP_PLATFORM === 'web') {
                config.resolve.extensions = [
                    '.js',
                    '.jsx',
                    '.vue',
                    '.json',
                ];
            } else if (process.env.VUE_APP_PLATFORM === 'android') {
                config.resolve.extensions = [
                    '.native.js',
                    '.android.js',
                    '.js',
                    '.native.vue',
                    '.android.vue',
                    '.vue',
                    '.json',
                ];
            } else if (process.env.VUE_APP_PLATFORM === 'ios') {
                config.resolve.extensions = [
                    '.native.js',
                    '.ios.js',
                    '.js',
                    '.native.vue',
                    '.ios.vue',
                    '.vue',
                    '.json',
                ];
            }
        },
        chainWebpack: (config) => {
            if (process.env.VUE_APP_PLATFORM === 'android' || process.env.VUE_APP_PLATFORM === 'ios') {
                config.entry('app').clear().add('./src/native/main.js');

                config.module.rules.delete('vue');

                config.module
                    .rule('vue')
                    .test(/\.vue$/)
                    .use('ns-vue-loader')
                    .loader('ns-vue-loader')
                    .options({
                        loaders: {
                            css: cssLoader,
                            scss: scssLoader,
                        },
                    });

                config.plugins.clear();
            } else if (process.env.VUE_APP_PLATFORM === 'web') {
                config.entry('app').clear().add('./src/web/main.js');
            }
        },
    };
};

// Determine platform(s) and action from webpack env arguments
function getConfig() {
    return configuration(process.env.VUE_APP_PLATFORM, `${action} ${process.env.VUE_APP_PLATFORM}`);
}

module.exports = getConfig();
