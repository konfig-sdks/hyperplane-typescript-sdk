/*
Hyperplane API Gateway

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ModelsAutoMLRunMetrics } from './models-auto-mlrun-metrics';
import { ModelsInputLabelSummary } from './models-input-label-summary';

/**
 * 
 * @export
 * @interface ModelsAutoMLRunSummary
 */
export interface ModelsAutoMLRunSummary {
    /**
     * Engagement type of this product run
     * @type {string}
     * @memberof ModelsAutoMLRunSummary
     */
    'engagement_type'?: string;
    /**
     * Analysis of input labels detailing amounts of labels given, amounts of labels detected, monthly breakdowns of positive rates and counts, and a breakdown of weights by label value.
     * @type {ModelsInputLabelSummary}
     * @memberof ModelsAutoMLRunSummary
     */
    'input_label_summary'?: ModelsInputLabelSummary;
    /**
     * NumberOfInferenceUsers is the number of users in model inference
     * @type {number}
     * @memberof ModelsAutoMLRunSummary
     */
    'number_of_inference_users'?: number;
    /**
     * NumberOfTrainUsers is the number of users in model training
     * @type {number}
     * @memberof ModelsAutoMLRunSummary
     */
    'number_of_train_users'?: number;
    /**
     * RunDescription is the description of the AutoML training run
     * @type {string}
     * @memberof ModelsAutoMLRunSummary
     */
    'run_description': string;
    /**
     * RunID is the unique identifier for the AutoML run
     * @type {string}
     * @memberof ModelsAutoMLRunSummary
     */
    'run_id': string;
    /**
     * RunMetrics is the metrics of the AutoML training run
     * @type {ModelsAutoMLRunMetrics}
     * @memberof ModelsAutoMLRunSummary
     */
    'run_metrics'?: ModelsAutoMLRunMetrics;
    /**
     * RunStatus is the status of the AutoML training run
     * @type {string}
     * @memberof ModelsAutoMLRunSummary
     */
    'status': string;
    /**
     * Timestamp is the time when the training run began
     * @type {string}
     * @memberof ModelsAutoMLRunSummary
     */
    'timestamp': string;
}

