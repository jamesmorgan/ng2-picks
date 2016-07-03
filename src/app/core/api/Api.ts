import {Headers} from "@angular/http";

/**
 * Centralise this so we can work out how to switch it out in the future if needs be
 *
 * @type {string}
 */
// export var BASE_URL:String = Object.freeze('http://localhost:2000');
export var BASE_URL:String = Object.freeze('http://testpicks.whatsthescore.webfactional.com');

/**
 * General factory method for return json headers
 *
 * @return {Headers}
 */
export function json():Headers {
  var headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return headers;
}

var KEY = Object.freeze('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1NzA0MjA1OTVkMjgyM2I1NDc4MTQ4MDEiLCJuYW1lIjoiSmFtZXMgTW9yZ2FuIiwiZW1haWwiOiJqYW1lcy5tb3JnYW4uZUBnb29nbGVtYWlsLmNvbSIsImFkbWluIjp0cnVlfQ.TE5Q_JWsgConKZ57ec5ada29CwFMjCKQ40Jt8teoC08');

export function createAuthorizationHeader(headers:Headers):Headers {
  headers.append('Authorization', 'Bearer ' + KEY);
  return headers;
}

/**
 * Default headers
 * TODO - rename defaults...?
 * @return {Headers}
 */
export function jsonWithAuth():Headers {
  return createAuthorizationHeader(json());
}
