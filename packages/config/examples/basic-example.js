const Config = require('..');

const config = Config.get(Config.from(__dirname, 'basic-config'), 'production', process.env);
// eslint-disable-next-line no-console, @coorpacademy/coorpacademy/no-dangerous-logs
console.log(config);
