/*
Hyperplane API Gateway

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Amount percentage for a given category, related to either the total inflow or outflow
 * @export
 * @interface ModelsCategoryCashflow
 */
export interface ModelsCategoryCashflow {
    /**
     * Aggregate amount for the given category
     * @type {number}
     * @memberof ModelsCategoryCashflow
     */
    'amount'?: number;
    /**
     * Human-friendly category name
     * @type {string}
     * @memberof ModelsCategoryCashflow
     */
    'name'?: string;
    /**
     * Absolute amount flow for the category
     * @type {number}
     * @memberof ModelsCategoryCashflow
     */
    'percentage'?: number;
    /**
     * Human-friendly category taxonomy path
     * @type {string}
     * @memberof ModelsCategoryCashflow
     */
    'taxonomy_path'?: string;
}

