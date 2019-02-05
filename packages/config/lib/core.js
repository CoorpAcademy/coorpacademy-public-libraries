'use strict';

const merge = require('lodash/fp/merge');
const getOr = require('lodash/fp/getOr');
const coreConfig = require('./config');

const configs = {
  development: require('./development'),
  production: require('./production'),
  staging: require('./staging'),
  test: require('./test')
};

function getEnvConfig(forceEnv) {
  const env = forceEnv || getOr('development', 'NODE_ENV', process.env);
  // eslint-disable-next-line import/no-dynamic-require
  return merge(coreConfig, configs[env]());
}

module.exports = getEnvConfig;
