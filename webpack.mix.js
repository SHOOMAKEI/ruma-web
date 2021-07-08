const mix = require('laravel-mix');
const path = require('path');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.alias({
    ziggy: path.resolve('vendor/tightenco/ziggy/dist'),
});

mix.ts('resources/js/app.js', 'public/js')
    .webpackConfig({
        resolve: {
            alias: {
                '@': path.resolve('resources/js'),
                '~': path.resolve('Modules'),
            },
        },
        output: {
            chunkFilename: 'js/[name].js?id=[chunkhash]',
        }
    });
