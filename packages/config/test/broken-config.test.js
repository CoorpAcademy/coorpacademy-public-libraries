const test = require('ava');

const getConfiguration = require('..');

test('should crash when path is not defined', t => {
	t.throws(() => getConfiguration())
	t.pass();
  
});
test('should crash when path does not point to a folder', t => {
	t.throws(() => getConfiguration('../missing-defaults'))
	t.pass();
});

test.todo('should crash with missing defaults');

test.todo('should crash with invalid envName');

test.todo('should crash with missing  envName');
