'use strict';

const test = require('ava');

const Config = require('..');

const from = _path => Config.from(__dirname, _path);

test('should get overriden value based on envName value', t => {
  const conf = Config.get(from('configs/working-config'), 'staging', {});

  t.is(conf.number, 412);
});

test('should rely on default without env override', t => {
  const conf = Config.get(from('configs/working-config'), 'staging', {});

  t.is(conf.nodeEnv, 'development'); // no env given
});

test('should get configuration for some concrete example', t => {
  const conf = Config.get(from('configs/working-config'), 'production', {NODE_ENV: 'production'});

  t.deepEqual(conf, {
    nodeEnv: 'production',
    number: 4012,
    chaine: 'the production string'
  });
});

test('should not be modifiable (freeze)', t => {
  const conf = Config.get(from('configs/working-config'), 'production', {NODE_ENV: 'production'});
  t.throws(() => {
    conf.number = 12;
  }, "Cannot assign to read only property 'number' of object '#<Object>'");
  t.throws(() => {
    conf.chaine = 'jaitoucasser';
  }, "Cannot assign to read only property 'chaine' of object '#<Object>'");
  t.throws(() => {
    conf.newvalue = 'sneaky add';
  }, /object is not extensible/);
});
