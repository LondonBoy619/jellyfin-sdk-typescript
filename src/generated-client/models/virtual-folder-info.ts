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
import type { CollectionTypeOptions } from './collection-type-options';
// May contain unused imports in some cases
// @ts-ignore
import type { LibraryOptions } from './library-options';

/**
 * Used to hold information about a user\'s list of configured virtual folders.
 * @export
 * @interface VirtualFolderInfo
 */
export interface VirtualFolderInfo {
    /**
     * Gets or sets the name.
     * @type {string}
     * @memberof VirtualFolderInfo
     */
    'Name'?: string | null;
    /**
     * Gets or sets the locations.
     * @type {Array<string>}
     * @memberof VirtualFolderInfo
     */
    'Locations'?: Array<string> | null;
    /**
     * 
     * @type {CollectionTypeOptions}
     * @memberof VirtualFolderInfo
     */
    'CollectionType'?: CollectionTypeOptions;
    /**
     * 
     * @type {LibraryOptions}
     * @memberof VirtualFolderInfo
     */
    'LibraryOptions'?: LibraryOptions;
    /**
     * Gets or sets the item identifier.
     * @type {string}
     * @memberof VirtualFolderInfo
     */
    'ItemId'?: string | null;
    /**
     * Gets or sets the primary image item identifier.
     * @type {string}
     * @memberof VirtualFolderInfo
     */
    'PrimaryImageItemId'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof VirtualFolderInfo
     */
    'RefreshProgress'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof VirtualFolderInfo
     */
    'RefreshStatus'?: string | null;
}



