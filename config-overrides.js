const webpack = require('webpack');

module.exports = function override(config, env) {
  // Check if the module causing the issue is content-disposition
  const problematicModule = 'content-disposition';

  // Add a resolve fallback for the specific problematic module
  if (config.resolve.fallback && config.resolve.fallback[problematicModule]) {
    config.resolve.fallback[problematicModule] = require.resolve('path-browserify');
  }

  // Add a plugin to provide a global Buffer variable
  config.plugins.push(new webpack.ProvidePlugin({
    Buffer: ['buffer', 'Buffer'],
  }));

  return config;
};
