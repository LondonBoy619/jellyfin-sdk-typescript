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
import type { SessionMessageType } from './session-message-type';

/**
 * Refresh progress message.
 * @export
 * @interface RefreshProgressMessage
 */
export interface RefreshProgressMessage {
    /**
     * Gets or sets the data.
     * @type {{ [key: string]: string | null; }}
     * @memberof RefreshProgressMessage
     */
    'Data'?: { [key: string]: string | null; } | null;
    /**
     * Gets or sets the message id.
     * @type {string}
     * @memberof RefreshProgressMessage
     */
    'MessageId'?: string;
    /**
     * 
     * @type {SessionMessageType}
     * @memberof RefreshProgressMessage
     */
    'MessageType'?: SessionMessageType;
}



