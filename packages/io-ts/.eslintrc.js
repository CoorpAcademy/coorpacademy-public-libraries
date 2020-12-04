module.exports = {
  env: {
    es6: true,
    node: true,
    mocha: true
  },
  plugins: ['@coorpacademy/coorpacademy'],
  extends: [
    'plugin:@coorpacademy/coorpacademy/core',
    'plugin:@coorpacademy/coorpacademy/mocha',
    'plugin:@coorpacademy/coorpacademy/es20XX',
    'plugin:@coorpacademy/coorpacademy/lodash-fp',
    'plugin:@coorpacademy/coorpacademy/prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript'
  ],
  parser: '@typescript-eslint/parser',
  settings: {
    'import/ignore': ['node_modules'],
    'import/extensions': ['.js', '.ts'],
    node: {
      resolvePaths: ['node_modules/@types'],
      tryExtensions: ['.js', '.json', '.ts', '.d.ts']
    }
  },
  rules: {
    'node/no-unsupported-features/es-syntax': ['error', {ignores: ['modules']}],
    'promise/no-native': 'off',
    'promise/no-callback-in-promise': 'off'
  }
};
