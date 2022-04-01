const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function(env, argv) {
    const config = await createExpoWebpackConfigAsync({
        ...env,
        babel: {
            dangerouslyAddModulePathsToTranspile: ['@ui-kitten/components']
        }
    }, argv);
    return config;
};


const path = require('path')

module.exports = async function(env, argv) {
    const config = await createExpoWebpackConfigAsync(env, argv);
    config.module.rules.forEach(r => {
        if (r.oneOf) {
            r.oneOf.forEach(o => {
                if (o.use && o.use.loader && o.use.loader.includes('babel-loader')) {
                    o.include = [
                        path.resolve('.'),
                        path.resolve('node_modules/@twotalltotems/react-native-otp-input'),
                    ]
                }
            })
        }
    })
    return config;
};