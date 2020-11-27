import * as t from 'io-ts';
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
