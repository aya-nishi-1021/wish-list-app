const sassResourcesLoader = require('craco-sass-resources-loader');
const path = require('path');

module.exports = {
    mode: "development",
    output: {
        path: __dirname,
    },
    plugins: [
        {
            plugin: sassResourcesLoader,
            options: {
                resources: "./src/assets/styles/global.scss",
            },
        },
    ],
    webpack: {
        alias: {
            '@': path.resolve(__dirname, './src/'),
        },
    },
};