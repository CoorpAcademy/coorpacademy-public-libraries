const test = require('ava');

const Config = require('..');

const from = _path => Config.from(__dirname, _path);
const EMPTY_ENV = {};

test('should crash when path is not defined', t => {
  t.throws(() => Config.get());
});
test('should crash when path does not point to a folder', t => {
  t.throws(() => Config.get(from('foo')));
});

test('should crash with missing defaults', t => {
  t.throws(() => Config.get(from('configs/missing-defaults')));
});

test('should crash with invalid envName', t => {
  t.throws(() => Config.get(from('configs/working-config'), null, EMPTY_ENV));
});

test('should crash with missing envName', t => {
  t.throws(() => Config.get(from('configs/working-config'), 'test', EMPTY_ENV));
});
