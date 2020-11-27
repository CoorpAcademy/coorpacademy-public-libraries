/* eslint-disable mocha/no-mocha-arrows */
import {expect} from 'chai';
import {isLeft} from 'fp-ts/lib/Either';
import {JwtCodec, UrlCodec, Jwt, Url} from '../src';

describe('io-ts codecs', function () {
  describe('Jwt', function () {
    const TOKEN =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

    it('JWTCodec should decode value', () => {
      const actual = JwtCodec.decode(TOKEN);
      expect(isLeft(actual)).to.equal(false);
      if (isLeft(actual)) return;
      expect(actual.right).to.equal(TOKEN);
    });

    it('JwtCodec should failure on wrong value ', () => {
      const actual = JwtCodec.decode('foo');
      expect(isLeft(actual)).to.equal(true);
    });

    it('JwtCodec shoudl encode', () => {
      const actual = JwtCodec.encode(TOKEN as Jwt);
      expect(actual).to.equal(TOKEN);
    });

    it('JwtCodec should type guard', () => {
      expect(JwtCodec.is(TOKEN)).to.equal(true);
      expect(JwtCodec.is('foo')).to.equal(false);
    });
  });

  describe('Url', function () {
    const _URL = 'https://coorpacademy.com';

    it('UrlCodec should decode value', () => {
      const actual = JwtCodec.decode(_URL);
      expect(isLeft(actual)).to.equal(true);
      if (isLeft(actual)) return;
      expect(actual.right).to.equal(_URL);
    });

    it('UrlCodec should failure on wrong value ', () => {
      const actual = UrlCodec.decode('foo');
      expect(isLeft(actual)).to.equal(true);
    });

    it('UrlCodec shoudl encode', () => {
      const actual = UrlCodec.encode(_URL as Url);
      expect(actual).to.equal(_URL);
    });

    it('UrlCodec should type guard', () => {
      expect(UrlCodec.is(_URL)).to.equal(true);
      expect(UrlCodec.is('foo')).to.equal(false);
    });
  });
});
