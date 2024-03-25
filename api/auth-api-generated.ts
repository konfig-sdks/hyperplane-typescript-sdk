/* tslint:disable */
/* eslint-disable */
/*
Hyperplane API Gateway

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { ApiErrResponse } from '../models';
// @ts-ignore
import { ModelsAuthRequest } from '../models';
// @ts-ignore
import { ModelsAuthResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * AuthApi - axios parameter creator
 * @export
 */
export const AuthApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Authenticate a client and get an access token
         * @summary Get Token
         * @param {ModelsAuthRequest} modelsAuthRequest Request body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getToken: async (modelsAuthRequest: ModelsAuthRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'modelsAuthRequest' is not null or undefined
            assertParamExists('getToken', 'modelsAuthRequest', modelsAuthRequest)
            const localVarPath = `/auth/token`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: modelsAuthRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/auth/token',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(modelsAuthRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AuthApi - functional programming interface
 * @export
 */
export const AuthApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AuthApiAxiosParamCreator(configuration)
    return {
        /**
         * Authenticate a client and get an access token
         * @summary Get Token
         * @param {AuthApiGetTokenRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getToken(requestParameters: AuthApiGetTokenRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ModelsAuthResponse>> {
            const modelsAuthRequest: ModelsAuthRequest = {
                client_id: requestParameters.client_id,
                client_secret: requestParameters.client_secret
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.getToken(modelsAuthRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AuthApi - factory interface
 * @export
 */
export const AuthApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AuthApiFp(configuration)
    return {
        /**
         * Authenticate a client and get an access token
         * @summary Get Token
         * @param {AuthApiGetTokenRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getToken(requestParameters: AuthApiGetTokenRequest, options?: AxiosRequestConfig): AxiosPromise<ModelsAuthResponse> {
            return localVarFp.getToken(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getToken operation in AuthApi.
 * @export
 * @interface AuthApiGetTokenRequest
 */
export type AuthApiGetTokenRequest = {
    
} & ModelsAuthRequest

/**
 * AuthApiGenerated - object-oriented interface
 * @export
 * @class AuthApiGenerated
 * @extends {BaseAPI}
 */
export class AuthApiGenerated extends BaseAPI {
    /**
     * Authenticate a client and get an access token
     * @summary Get Token
     * @param {AuthApiGetTokenRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApiGenerated
     */
    public getToken(requestParameters: AuthApiGetTokenRequest, options?: AxiosRequestConfig) {
        return AuthApiFp(this.configuration).getToken(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
