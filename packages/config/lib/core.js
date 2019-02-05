const fs = require('fs');
const path = require('path');

function getConfiguration(configFolder, envName, envMapping) {

	if (! fs.existsSync(configFolder)) {
    throw Error(`unexpected config folder, given ${configFolder}`)
	}

	const defaults = `${configFolder}/defaults`;

	if (!fs.existsSync(defaults)) {
		throw Error(`can't retrieve defaults from ${configFolder}`)
	}
  
  // vérification que le folder existe
  // va fetcher les defaults dans config folder. (err -> crash) (defaults)
  // va fetcher le fichier envName dans config folder. (err -> crash)
  // Injecte les envs pour avoir les configs
  // merge la config
  return {bioutiful: 'config'};
}

module.exports = getConfiguration;
