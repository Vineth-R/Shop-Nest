// next.config.js
module.exports = {
  webpack: (config) => {
    config.resolve.alias['styled-jsx'] = require.resolve('styled-jsx');
    return config;
  }
};
