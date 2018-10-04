const core = require('./lib/core');

const main = () => {
  /* eslint-disable no-console */
  console.log('Main function');
  console.log(core.greeter());
};

module.exports = main;

if (!module.parent) {
  main();
}
