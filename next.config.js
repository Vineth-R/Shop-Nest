const path = require('path');

module.exports = {
  webpack: (config, { isServer }) => {
    // Force webpack to resolve styled-jsx using require.resolve
    try {
      config.resolve.alias['styled-jsx/package.json'] = require.resolve('styled-jsx/package.json');
    } catch (err) {
      config.resolve.alias['styled-jsx/package.json'] = path.join(__dirname, 'node_modules', 'styled-jsx', 'package.json');
    }
    // Alias styled-jsx itself
    try {
      config.resolve.alias['styled-jsx'] = require.resolve('styled-jsx');
    } catch (err) {
      config.resolve.alias['styled-jsx'] = path.join(__dirname, 'node_modules', 'styled-jsx');
    }
    // Ensure regenerate-unicode-properties is resolved correctly.
    try {
      config.resolve.alias['regenerate-unicode-properties'] = require.resolve('regenerate-unicode-properties');
    } catch (err) {
      config.resolve.alias['regenerate-unicode-properties'] = path.join(__dirname, 'node_modules', 'regenerate-unicode-properties');
    }
    return config;
  },
};