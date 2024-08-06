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


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, type RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import type { DefaultDirectoryBrowserInfoDto } from '../models';
// @ts-ignore
import type { FileSystemEntryInfo } from '../models';
// @ts-ignore
import type { ProblemDetails } from '../models';
// @ts-ignore
import type { ValidatePathDto } from '../models';
/**
 * EnvironmentApi - axios parameter creator
 * @export
 */
export const EnvironmentApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get Default directory browser.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDefaultDirectoryBrowser: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/Environment/DefaultDirectoryBrowser`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Gets the contents of a given directory in the file system.
         * @param {string} path The path.
         * @param {boolean} [includeFiles] An optional filter to include or exclude files from the results. true/false.
         * @param {boolean} [includeDirectories] An optional filter to include or exclude folders from the results. true/false.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDirectoryContents: async (path: string, includeFiles?: boolean, includeDirectories?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'path' is not null or undefined
            assertParamExists('getDirectoryContents', 'path', path)
            const localVarPath = `/Environment/DirectoryContents`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            if (path !== undefined) {
                localVarQueryParameter['path'] = path;
            }

            if (includeFiles !== undefined) {
                localVarQueryParameter['includeFiles'] = includeFiles;
            }

            if (includeDirectories !== undefined) {
                localVarQueryParameter['includeDirectories'] = includeDirectories;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Gets available drives from the server\'s file system.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDrives: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/Environment/Drives`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Gets network paths.
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        getNetworkShares: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/Environment/NetworkShares`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Gets the parent path of a given path.
         * @param {string} path The path.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getParentPath: async (path: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'path' is not null or undefined
            assertParamExists('getParentPath', 'path', path)
            const localVarPath = `/Environment/ParentPath`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            if (path !== undefined) {
                localVarQueryParameter['path'] = path;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Validates path.
         * @param {ValidatePathDto} validatePathDto Validate request object.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        validatePath: async (validatePathDto: ValidatePathDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'validatePathDto' is not null or undefined
            assertParamExists('validatePath', 'validatePathDto', validatePathDto)
            const localVarPath = `/Environment/ValidatePath`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(validatePathDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * EnvironmentApi - functional programming interface
 * @export
 */
export const EnvironmentApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = EnvironmentApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get Default directory browser.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDefaultDirectoryBrowser(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DefaultDirectoryBrowserInfoDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDefaultDirectoryBrowser(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['EnvironmentApi.getDefaultDirectoryBrowser']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Gets the contents of a given directory in the file system.
         * @param {string} path The path.
         * @param {boolean} [includeFiles] An optional filter to include or exclude files from the results. true/false.
         * @param {boolean} [includeDirectories] An optional filter to include or exclude folders from the results. true/false.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDirectoryContents(path: string, includeFiles?: boolean, includeDirectories?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<FileSystemEntryInfo>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDirectoryContents(path, includeFiles, includeDirectories, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['EnvironmentApi.getDirectoryContents']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Gets available drives from the server\'s file system.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDrives(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<FileSystemEntryInfo>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDrives(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['EnvironmentApi.getDrives']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Gets network paths.
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        async getNetworkShares(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<FileSystemEntryInfo>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getNetworkShares(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['EnvironmentApi.getNetworkShares']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Gets the parent path of a given path.
         * @param {string} path The path.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getParentPath(path: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getParentPath(path, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['EnvironmentApi.getParentPath']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Validates path.
         * @param {ValidatePathDto} validatePathDto Validate request object.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async validatePath(validatePathDto: ValidatePathDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.validatePath(validatePathDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['EnvironmentApi.validatePath']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * EnvironmentApi - factory interface
 * @export
 */
export const EnvironmentApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = EnvironmentApiFp(configuration)
    return {
        /**
         * 
         * @summary Get Default directory browser.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDefaultDirectoryBrowser(options?: RawAxiosRequestConfig): AxiosPromise<DefaultDirectoryBrowserInfoDto> {
            return localVarFp.getDefaultDirectoryBrowser(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets the contents of a given directory in the file system.
         * @param {EnvironmentApiGetDirectoryContentsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDirectoryContents(requestParameters: EnvironmentApiGetDirectoryContentsRequest, options?: RawAxiosRequestConfig): AxiosPromise<Array<FileSystemEntryInfo>> {
            return localVarFp.getDirectoryContents(requestParameters.path, requestParameters.includeFiles, requestParameters.includeDirectories, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets available drives from the server\'s file system.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDrives(options?: RawAxiosRequestConfig): AxiosPromise<Array<FileSystemEntryInfo>> {
            return localVarFp.getDrives(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets network paths.
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        getNetworkShares(options?: RawAxiosRequestConfig): AxiosPromise<Array<FileSystemEntryInfo>> {
            return localVarFp.getNetworkShares(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets the parent path of a given path.
         * @param {EnvironmentApiGetParentPathRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getParentPath(requestParameters: EnvironmentApiGetParentPathRequest, options?: RawAxiosRequestConfig): AxiosPromise<string> {
            return localVarFp.getParentPath(requestParameters.path, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Validates path.
         * @param {EnvironmentApiValidatePathRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        validatePath(requestParameters: EnvironmentApiValidatePathRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.validatePath(requestParameters.validatePathDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getDirectoryContents operation in EnvironmentApi.
 * @export
 * @interface EnvironmentApiGetDirectoryContentsRequest
 */
export interface EnvironmentApiGetDirectoryContentsRequest {
    /**
     * The path.
     * @type {string}
     * @memberof EnvironmentApiGetDirectoryContents
     */
    readonly path: string

    /**
     * An optional filter to include or exclude files from the results. true/false.
     * @type {boolean}
     * @memberof EnvironmentApiGetDirectoryContents
     */
    readonly includeFiles?: boolean

    /**
     * An optional filter to include or exclude folders from the results. true/false.
     * @type {boolean}
     * @memberof EnvironmentApiGetDirectoryContents
     */
    readonly includeDirectories?: boolean
}

/**
 * Request parameters for getParentPath operation in EnvironmentApi.
 * @export
 * @interface EnvironmentApiGetParentPathRequest
 */
export interface EnvironmentApiGetParentPathRequest {
    /**
     * The path.
     * @type {string}
     * @memberof EnvironmentApiGetParentPath
     */
    readonly path: string
}

/**
 * Request parameters for validatePath operation in EnvironmentApi.
 * @export
 * @interface EnvironmentApiValidatePathRequest
 */
export interface EnvironmentApiValidatePathRequest {
    /**
     * Validate request object.
     * @type {ValidatePathDto}
     * @memberof EnvironmentApiValidatePath
     */
    readonly validatePathDto: ValidatePathDto
}

/**
 * EnvironmentApi - object-oriented interface
 * @export
 * @class EnvironmentApi
 * @extends {BaseAPI}
 */
export class EnvironmentApi extends BaseAPI {
    /**
     * 
     * @summary Get Default directory browser.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EnvironmentApi
     */
    public getDefaultDirectoryBrowser(options?: RawAxiosRequestConfig) {
        return EnvironmentApiFp(this.configuration).getDefaultDirectoryBrowser(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets the contents of a given directory in the file system.
     * @param {EnvironmentApiGetDirectoryContentsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EnvironmentApi
     */
    public getDirectoryContents(requestParameters: EnvironmentApiGetDirectoryContentsRequest, options?: RawAxiosRequestConfig) {
        return EnvironmentApiFp(this.configuration).getDirectoryContents(requestParameters.path, requestParameters.includeFiles, requestParameters.includeDirectories, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets available drives from the server\'s file system.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EnvironmentApi
     */
    public getDrives(options?: RawAxiosRequestConfig) {
        return EnvironmentApiFp(this.configuration).getDrives(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets network paths.
     * @param {*} [options] Override http request option.
     * @deprecated
     * @throws {RequiredError}
     * @memberof EnvironmentApi
     */
    public getNetworkShares(options?: RawAxiosRequestConfig) {
        return EnvironmentApiFp(this.configuration).getNetworkShares(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets the parent path of a given path.
     * @param {EnvironmentApiGetParentPathRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EnvironmentApi
     */
    public getParentPath(requestParameters: EnvironmentApiGetParentPathRequest, options?: RawAxiosRequestConfig) {
        return EnvironmentApiFp(this.configuration).getParentPath(requestParameters.path, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Validates path.
     * @param {EnvironmentApiValidatePathRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EnvironmentApi
     */
    public validatePath(requestParameters: EnvironmentApiValidatePathRequest, options?: RawAxiosRequestConfig) {
        return EnvironmentApiFp(this.configuration).validatePath(requestParameters.validatePathDto, options).then((request) => request(this.axios, this.basePath));
    }
}

