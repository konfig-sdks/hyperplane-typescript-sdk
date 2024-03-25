/*
Hyperplane API Gateway

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ModelsTagCategoricalAttributeFilter } from './models-tag-categorical-attribute-filter';
import { ModelsUserMetadata } from './models-user-metadata';

/**
 * 
 * @export
 * @interface ModelsAutoMLRunUsersGetRequest
 */
export interface ModelsAutoMLRunUsersGetRequest {
    /**
     * List of users to return user scores for
     * @type {Array<ModelsUserMetadata>}
     * @memberof ModelsAutoMLRunUsersGetRequest
     */
    'allow_users'?: Array<ModelsUserMetadata>;
    /**
     * List of users to omit from returned user scores
     * @type {Array<ModelsUserMetadata>}
     * @memberof ModelsAutoMLRunUsersGetRequest
     */
    'block_users'?: Array<ModelsUserMetadata>;
    /**
     * Categorical Filters on pf_type metadata
     * @type {Array<ModelsTagCategoricalAttributeFilter>}
     * @memberof ModelsAutoMLRunUsersGetRequest
     */
    'tag_filters'?: Array<ModelsTagCategoricalAttributeFilter>;
}

