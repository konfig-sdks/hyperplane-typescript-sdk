/*
Hyperplane API Gateway

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ModelsUserScore } from './models-user-score';

/**
 * 
 * @export
 * @interface ModelsAutoMLRunUsersGetResponse
 */
export interface ModelsAutoMLRunUsersGetResponse {
    /**
     * Date string of last inference in `YYYY-MM-DD hh:mm:ss` format
     * @type {string}
     * @memberof ModelsAutoMLRunUsersGetResponse
     */
    'last_scored_date'?: string;
    /**
     * List of user scores
     * @type {Array<ModelsUserScore>}
     * @memberof ModelsAutoMLRunUsersGetResponse
     */
    'user_scores': Array<ModelsUserScore>;
}

