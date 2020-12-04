import * as t from 'io-ts';
import moment from 'moment';
import validator from 'validator';

interface _URL {
  readonly URL: unique symbol;
}
export const UrlCodec = t.brand(
  t.string,
  (u: string): u is t.Branded<string, _URL> => validator.isURL(u),
  'URL'
);
interface _JWT {
  readonly JWT: unique symbol;
}
export const JwtCodec = t.brand(
  t.string,
  (u: string): u is t.Branded<string, _JWT> => validator.isJWT(u),
  'JWT'
);
interface _Moment {
  readonly Moment: unique symbol;
}
export const MomentCodec = t.brand(
  t.string,
  (u: string): u is t.Branded<string, _Moment> => moment(u, moment.ISO_8601, true).isValid(),
  'Moment'
);
interface _NonEmptyString {
  readonly NonEmptyString: unique symbol;
}
export const NonEmptyStringCodec = t.brand(
  t.string,
  (u: string): u is t.Branded<string, _NonEmptyString> => u.length > 0,
  'NonEmptyString'
);
interface _NonEmptyArray {
  readonly NonEmptyArray: unique symbol;
}
export const NonEmptyArrayCodec = t.brand(
  t.UnknownArray,
  (u: Array<unknown>): u is t.Branded<Array<unknown>, _NonEmptyArray> => u.length > 0,
  'NonEmptyArray'
);
interface _Email {
  readonly Email: unique symbol;
}
export const EmailCodec = t.brand(
  t.string,
  (u: string): u is t.Branded<string, _Email> => validator.isEmail(u),
  'Email'
);
interface _HexColor {
  readonly HexColor: unique symbol;
}
export const HexColorCodec = t.brand(
  t.string,
  (u: string): u is t.Branded<string, _HexColor> => validator.isHexColor(u),
  'HexColor'
);
interface _PositiveInteger {
  readonly PositiveInteger: unique symbol;
}
export const PositiveIntegerCodec = t.brand(
  t.number,
  (u: number): u is t.Branded<number, _PositiveInteger> => u > 0,
  'PositiveInteger'
);
interface _Uuid {
  readonly Uuid: unique symbol;
}
export const UuidCodec = t.brand(
  t.string,
  (u: string): u is t.Branded<string, _Uuid> => validator.isUUID(u),
  'Uuid'
);
