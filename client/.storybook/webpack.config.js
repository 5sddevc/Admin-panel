const path = require('path');

module.exports = (baseConfig, env, defaultConfig) => {
    // Extend defaultConfig as you need.
    defaultConfig.module.rules.push({
        test: /\.less$/,
        loaders: [
            "style-loader",
            "css-loader",
            {
              loader: "less-loader",
              options: { javascriptEnabled : true }
            }
        ],
        include: path.resolve(__dirname, '../src/'),
    });
    return defaultConfig;
};