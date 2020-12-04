import * as t from 'io-ts';
import {
  UrlCodec,
  JwtCodec,
  MomentCodec,
  NonEmptyStringCodec,
  NonEmptyArrayCodec,
  EmailCodec,
  HexColorCodec,
  PositiveIntegerCodec,
  UuidCodec
} from './codecs';

export type Url = t.TypeOf<typeof UrlCodec>;
export type Jwt = t.TypeOf<typeof JwtCodec>;
export type Moment = t.TypeOf<typeof MomentCodec>;
export type NonEmptyString = t.TypeOf<typeof NonEmptyStringCodec>;
export type NonEmptyArray = t.TypeOf<typeof NonEmptyArrayCodec>;
export type Email = t.TypeOf<typeof EmailCodec>;
export type HexColor = t.TypeOf<typeof HexColorCodec>;
export type PositiveInteger = t.TypeOf<typeof PositiveIntegerCodec>;
export type Uuid = t.TypeOf<typeof UuidCodec>;
