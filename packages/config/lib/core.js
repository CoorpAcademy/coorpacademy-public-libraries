const fs = require('fs');
const path = require('path');
const merge = require('lodash/fp/merge');

function getConfiguration(configFolder, envName, envMapping) {
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
  const defaultConfig = defaultsFactory(envMapping);

  if (!fs.existsSync(path.join(configFolder, `${envName}.js`))) {
    throw new Error(`can't retrieve ${envName} config from ${configFolder}`);
  }
  // eslint-disable-next-line import/no-dynamic-require
  const envFactory = require(path.join(configFolder, envName));
  const envConfig = envFactory(envMapping);

  return merge(defaultConfig, envConfig);
}

const resolveRelativePath = (folder, configPath) => path.join(folder, configPath);

module.exports = {get: getConfiguration, from: resolveRelativePath};
