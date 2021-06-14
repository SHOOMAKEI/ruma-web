const mix = require('laravel-mix');
require('laravel-mix-merge-manifest');

const path = require('path');

mix.alias({
    ziggy: path.resolve('vendor/tightenco/ziggy/dist'),
});

mix.setPublicPath('../../public').mergeManifest();

mix.js(__dirname + '/Resources/assets/js/app.js', 'js/employee-management.js').react();
    // mix.sass( __dirname + '/Resources/assets/sass/app.scss', 'css/employee-management.css');

if (mix.inProduction()) {
    mix.version();
}
