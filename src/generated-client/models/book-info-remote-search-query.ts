/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * Do not edit the class manually.
 *
 * Jellyfin API
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { BookInfo } from './book-info';

/**
 * 
 * @export
 * @interface BookInfoRemoteSearchQuery
 */
export interface BookInfoRemoteSearchQuery {
    /**
     * 
     * @type {BookInfo}
     * @memberof BookInfoRemoteSearchQuery
     */
    'SearchInfo'?: BookInfo;
    /**
     * 
     * @type {string}
     * @memberof BookInfoRemoteSearchQuery
     */
    'ItemId'?: string;
    /**
     * Gets or sets the provider name to search within if set.
     * @type {string}
     * @memberof BookInfoRemoteSearchQuery
     */
    'SearchProviderName'?: string | null;
    /**
     * Gets or sets a value indicating whether disabled providers should be included.
     * @type {boolean}
     * @memberof BookInfoRemoteSearchQuery
     */
    'IncludeDisabledProviders'?: boolean;
}

