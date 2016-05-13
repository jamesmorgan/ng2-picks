import {Headers} from "@angular/http";

/**
 * Centralise this so we can work out how to switch it out in the future if needs be
 *
 * @type {string}
 */
export var BASE_URL:String = Object.freeze('http://localhost:2000');

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