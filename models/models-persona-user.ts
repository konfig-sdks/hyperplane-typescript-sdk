/*
Hyperplane API Gateway

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * User associated with a given persona
 * @export
 * @interface ModelsPersonaUser
 */
export interface ModelsPersonaUser {
    /**
     * Unique identifier for the user
     * @type {string}
     * @memberof ModelsPersonaUser
     */
    'id': string;
    /**
     * Relevance score of user in this persona. In range `[0,1]`
     * @type {number}
     * @memberof ModelsPersonaUser
     */
    'score'?: number;
}

