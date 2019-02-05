const fs = require('fs');
const path = require('path');
const merge = require('lodash/fp/merge');

/**
 * Get configuration from a configFolder, envName and environment
 * @param {string} configFolder the folder holding the configuration
 * @param {string} envName the name of the config to load
 * @param {} environment the environemnt to be injected in the configuration
 */
function getConfiguration(configFolder, envName, environment) {
  // ensure existance of folder
  if (!fs.existsSync(configFolder)) {
    throw new Error(`unexpected config folder, given ${configFolder}`);
  }

  // retrieve defaults config
  if (!fs.existsSync(path.join(configFolder, 'defaults.js'))) {
    throw new Error(`can't retrieve defaults from ${configFolder}`);
  }
  // eslint-disable-next-line import/no-dynamic-require
  const defaultsFactory = require(path.join(configFolder, 'defaults'));
  const defaultConfig = defaultsFactory(environment);

  if (!fs.existsSync(path.join(configFolder, `${envName}.js`))) {
    throw new Error(`can't retrieve ${envName} config from ${configFolder}`);
  }
  // eslint-disable-next-line import/no-dynamic-require
  const envFactory = require(path.join(configFolder, envName));
  const envConfig = envFactory(environment);

  return merge(defaultConfig, envConfig);
}

/**
 * Resolve relative path to have some absolute path to the config.
 * @param {string} folder the base folder. (typically use __dirname from client code)
 * @param {string} configPath the path relative to the folder
 */
const resolveRelativePath = (folder, configPath) => path.join(folder, configPath);

module.exports = {get: getConfiguration, from: resolveRelativePath};
