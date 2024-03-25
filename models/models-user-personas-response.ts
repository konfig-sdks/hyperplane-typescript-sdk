/*
Hyperplane API Gateway

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ModelsUserPersonaScore } from './models-user-persona-score';

/**
 * Response of personas linked to a given user
 * @export
 * @interface ModelsUserPersonasResponse
 */
export interface ModelsUserPersonasResponse {
    /**
     * Ranked list of personas for this user
     * @type {Array<ModelsUserPersonaScore>}
     * @memberof ModelsUserPersonasResponse
     */
    'persona_scores': Array<ModelsUserPersonaScore>;
    /**
     * Unique identifier for the user
     * @type {string}
     * @memberof ModelsUserPersonasResponse
     */
    'user_id': string;
}

