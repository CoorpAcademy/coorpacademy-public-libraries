const test = require('ava');
const path = require('path');

const Config = require('..');
const from = _path => Config.from(__dirname, _path);

test.todo('should get overriden value based on envName value');

test.todo('should rely on default without env override');

test.todo('should crash with missing envName');

test.todo('should get configuration for some concrete example');
