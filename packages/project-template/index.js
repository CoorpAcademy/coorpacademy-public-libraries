const core = require('./lib/core');

const main = () => {
  console.log('Main function');
  core.greeter();
};

module.exports = main;

if (!module.parent) {
  main();
}
