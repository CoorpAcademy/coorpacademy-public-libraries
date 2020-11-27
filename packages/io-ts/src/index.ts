import * as t from 'io-ts';
import {UrlCodec, JwtCodec} from './codecs';

export type Url = t.TypeOf<typeof UrlCodec>;
export type Jwt = t.TypeOf<typeof JwtCodec>;

module.exports = {UrlCodec, JwtCodec};
