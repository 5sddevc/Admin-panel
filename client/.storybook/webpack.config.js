module.exports = async ({ config }) => console.dir(config, { depth: null }) || config;

const path = require('path');

module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.less$/,
    loaders: [
      "style-loader",
      "css-loader",
      {
        loader: "less-loader",
        options: { javascriptEnabled: true }
      }
    ],
    include: path.resolve(__dirname, '../src/'),
  });
  return config;
}

// module.exports = function ({ config }) {
//   config.module.rules.push({
//     test: /\.stories\.jsx?$/,
//     loaders: [
//       {
//         loader: require.resolve('@storybook/source-loader'),
//         options: {
//           prettierConfig: {
//             printWidth: 100,
//             singleQuote: false,
//           },
//         },
//       },
//     ],
//     enforce: 'pre',
//   });

//   return config;
// };
