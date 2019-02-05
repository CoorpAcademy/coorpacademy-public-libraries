const fs = require('fs');
const path = require('path');

function getConfiguration(configFolder, envName, envMapping) {
  // ensure existance of folder
  if (!fs.existsSync(configFolder)) {
    throw new new Error(`unexpected config folder, given ${configFolder}`);
  }

  const defaults = `${configFolder}/defaults.js`;

  // retrieve defaults config
  if (!fs.existsSync(defaults)) {
    throw Error(`can't retrieve defaults from ${configFolder}`);
  }

  // va fetcher le fichier envName dans config folder. (err -> crash)
  // Injecte les envs pour avoir
  // merge la config
  return {bioutiful: 'config'};
}

const resolveRelativePath = (folder, configPath) => path.join(folder, configPath);

module.exports = {get: getConfiguration, from: resolveRelativePath};
