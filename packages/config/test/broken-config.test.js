const test = require('ava');

const getConfiguration = require('..');

test('should crash when path is not defined', t => {
  t.throws(() => getConfiguration());
});
test('should crash when path does not point to a folder', t => {
  t.throws(() => getConfiguration('foo'));
});

test('should crash with missing defaults', t => {
  t.throws(() => getConfiguration('../missing-defaults'));
});

test('should crash with invalid envName', t => {
  t.throws(() => getConfiguration('../working-config', null));
});

test('should crash with missing envName', t => {
  t.throws(() => getConfiguration('../working-config', null));
});
