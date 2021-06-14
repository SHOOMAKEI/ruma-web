const path = require('path');

module.exports = {
    resolve: {
        alias: {
            '@': path.resolve('resources/js'),
            '~': path.resolve('Modules'),
        },
    },
    output: {
        chunkFilename: 'js/[name].js?id=[chunkhash]',
    }
};
