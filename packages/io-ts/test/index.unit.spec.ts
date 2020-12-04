/* eslint-disable mocha/no-mocha-arrows */
import {expect} from 'chai';
import {isLeft} from 'fp-ts/lib/Either';
import {
  UrlCodec,
  JwtCodec,
  MomentCodec,
  NonEmptyStringCodec,
  NonEmptyArrayCodec,
  EmailCodec,
  HexColorCodec,
  PositiveIntegerCodec,
  UuidCodec,
  Url,
  Jwt,
  Moment,
  NonEmptyString,
  NonEmptyArray,
  Email,
  HexColor,
  PositiveInteger,
  Uuid
} from '../src';

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
      const actual = UrlCodec.decode(_URL);
      expect(isLeft(actual)).to.equal(false);
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

  describe('Moment', function () {
    const _Date = '2030-01-31T00:00:00.000Z';

    it('MomentCodec should decode value', () => {
      const actual = MomentCodec.decode(_Date);
      expect(isLeft(actual)).to.equal(false);
      if (isLeft(actual)) return;
      expect(actual.right).to.equal(_Date);
    });

    it('MomentCodec should failure on wrong value ', () => {
      const actual = MomentCodec.decode('foo');
      expect(isLeft(actual)).to.equal(true);
    });

    it('MomentCodec shoudl encode', () => {
      const actual = MomentCodec.encode(_Date as Moment);
      expect(actual).to.equal(_Date);
    });

    it('MomentCodec should type guard', () => {
      expect(MomentCodec.is(_Date)).to.equal(true);
      expect(MomentCodec.is('foo')).to.equal(false);
    });
  });

  describe('NonEmptyString', function () {
    const str = 'non empty string';

    it('NonEmptyStringCodec should decode value', () => {
      const actual = NonEmptyStringCodec.decode(str);
      expect(isLeft(actual)).to.equal(false);
      if (isLeft(actual)) return;
      expect(actual.right).to.equal(str);
    });

    it('NonEmptyStringCodec should failure on wrong value ', () => {
      const actual = NonEmptyStringCodec.decode('');
      expect(isLeft(actual)).to.equal(true);
    });

    it('NonEmptyStringCodec shoudl encode', () => {
      const actual = NonEmptyStringCodec.encode(str as NonEmptyString);
      expect(actual).to.equal(str);
    });

    it('NonEmptyStringCodec should type guard', () => {
      expect(NonEmptyStringCodec.is(str)).to.equal(true);
      expect(NonEmptyStringCodec.is('')).to.equal(false);
    });
  });

  describe('NonEmptyArray', function () {
    const _NonEmptyArray = ['first', 'seconde'];

    it('NonEmptyArrayCodec should decode value', () => {
      const actual = NonEmptyArrayCodec.decode(_NonEmptyArray);
      expect(isLeft(actual)).to.equal(false);
      if (isLeft(actual)) return;
      expect(actual.right).to.equal(_NonEmptyArray);
    });

    it('NonEmptyArrayCodec should failure on wrong value ', () => {
      const actual = NonEmptyArrayCodec.decode([]);
      expect(isLeft(actual)).to.equal(true);
    });

    it('NonEmptyArrayCodec shoudl encode', () => {
      const actual = NonEmptyArrayCodec.encode(_NonEmptyArray as NonEmptyArray);
      expect(actual).to.equal(_NonEmptyArray);
    });

    it('NonEmptyArrayCodec should type guard', () => {
      expect(NonEmptyArrayCodec.is(_NonEmptyArray)).to.equal(true);
      expect(NonEmptyArrayCodec.is([])).to.equal(false);
    });
  });

  describe('Email', function () {
    const _Email = 'foo@coorpacademy.com';

    it('EmailCodec should decode value', () => {
      const actual = EmailCodec.decode(_Email);
      expect(isLeft(actual)).to.equal(false);
      if (isLeft(actual)) return;
      expect(actual.right).to.equal(_Email);
    });

    it('EmailCodec should failure on wrong value ', () => {
      const actual = EmailCodec.decode('fake email');
      expect(isLeft(actual)).to.equal(true);
    });

    it('EmailCodec shoudl encode', () => {
      const actual = EmailCodec.encode(_Email as Email);
      expect(actual).to.equal(_Email);
    });

    it('EmailCodec should type guard', () => {
      expect(EmailCodec.is(_Email)).to.equal(true);
      expect(EmailCodec.is('fake email')).to.equal(false);
    });
  });

  describe('HexColor', function () {
    const _HexColor = '#000000';

    it('HexColorCodec should decode value', () => {
      const actual = HexColorCodec.decode(_HexColor);
      expect(isLeft(actual)).to.equal(false);
      if (isLeft(actual)) return;
      expect(actual.right).to.equal(_HexColor);
    });

    it('HexColorCodec should failure on wrong value ', () => {
      const actual = HexColorCodec.decode('fake color');
      expect(isLeft(actual)).to.equal(true);
    });

    it('HexColorCodec shoudl encode', () => {
      const actual = HexColorCodec.encode(_HexColor as HexColor);
      expect(actual).to.equal(_HexColor);
    });

    it('HexColorCodec should type guard', () => {
      expect(HexColorCodec.is(_HexColor)).to.equal(true);
      expect(HexColorCodec.is('fake color')).to.equal(false);
    });
  });

  describe('PositiveInteger', function () {
    const _PositiveInteger = 7;

    it('PositiveIntegerCodec should decode value', () => {
      const actual = PositiveIntegerCodec.decode(_PositiveInteger);
      expect(isLeft(actual)).to.equal(false);
      if (isLeft(actual)) return;
      expect(actual.right).to.equal(_PositiveInteger);
    });

    it('PositiveIntegerCodec should failure on wrong value ', () => {
      const actual = PositiveIntegerCodec.decode(-7);
      expect(isLeft(actual)).to.equal(true);
    });

    it('PositiveIntegerCodec shoudl encode', () => {
      const actual = PositiveIntegerCodec.encode(_PositiveInteger as PositiveInteger);
      expect(actual).to.equal(_PositiveInteger);
    });

    it('PositiveIntegerCodec should type guard', () => {
      expect(PositiveIntegerCodec.is(_PositiveInteger)).to.equal(true);
      expect(PositiveIntegerCodec.is(-7)).to.equal(false);
    });
  });

  describe('Uuid', function () {
    const _Uuid = 'd469aad0-8e55-47f7-b7e6-e7dfb2c2d5b3';

    it('UuidCodec should decode value', () => {
      const actual = UuidCodec.decode(_Uuid);
      expect(isLeft(actual)).to.equal(false);
      if (isLeft(actual)) return;
      expect(actual.right).to.equal(_Uuid);
    });

    it('UuidCodec should failure on wrong value ', () => {
      const actual = UuidCodec.decode('fake uuid');
      expect(isLeft(actual)).to.equal(true);
    });

    it('UuidCodec shoudl encode', () => {
      const actual = UuidCodec.encode(_Uuid as Uuid);
      expect(actual).to.equal(_Uuid);
    });

    it('UuidCodec should type guard', () => {
      expect(UuidCodec.is(_Uuid)).to.equal(true);
      expect(UuidCodec.is('fake uuid')).to.equal(false);
    });
  });
});
