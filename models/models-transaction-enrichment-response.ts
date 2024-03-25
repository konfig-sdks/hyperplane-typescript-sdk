/*
Hyperplane API Gateway

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ModelsLocation } from './models-location';
import { ModelsMerchantInfo } from './models-merchant-info';
import { ModelsTransferMetadata } from './models-transfer-metadata';

/**
 * 
 * @export
 * @interface ModelsTransactionEnrichmentResponse
 */
export interface ModelsTransactionEnrichmentResponse {
    /**
     * Transaction description
     * @type {string}
     * @memberof ModelsTransactionEnrichmentResponse
     */
    'description'?: string;
    /**
     * Amount of transaction
     * @type {number}
     * @memberof ModelsTransactionEnrichmentResponse
     */
    'amount'?: number;
    /**
     * Category enum of transaction
     * @type {string}
     * @memberof ModelsTransactionEnrichmentResponse
     */
    'category'?: string;
    /**
     * Category human-readable name of transaction
     * @type {string}
     * @memberof ModelsTransactionEnrichmentResponse
     */
    'category_name'?: string;
    /**
     * Transaction currency
     * @type {string}
     * @memberof ModelsTransactionEnrichmentResponse
     */
    'currency'?: string;
    /**
     * Current installment. If 0, it is not an installment
     * @type {number}
     * @memberof ModelsTransactionEnrichmentResponse
     */
    'current_installment'?: number;
    /**
     * Date of transaction
     * @type {string}
     * @memberof ModelsTransactionEnrichmentResponse
     */
    'date'?: string;
    /**
     * First installment date, that is, the purchase date
     * @type {string}
     * @memberof ModelsTransactionEnrichmentResponse
     */
    'installment_start_date'?: string;
    /**
     * Contains metadata about the merchant, if available.
     * @type {ModelsMerchantInfo}
     * @memberof ModelsTransactionEnrichmentResponse
     */
    'merchant_info'?: ModelsMerchantInfo;
    /**
     * Number of installments
     * @type {number}
     * @memberof ModelsTransactionEnrichmentResponse
     */
    'number_of_installments'?: number;
    /**
     * Sum of amounts for all installments
     * @type {number}
     * @memberof ModelsTransactionEnrichmentResponse
     */
    'total_installed_amount'?: number;
    /**
     * Unique transaction id
     * @type {string}
     * @memberof ModelsTransactionEnrichmentResponse
     */
    'transaction_id'?: string;
    /**
     * Location where the transaction happened
     * @type {ModelsLocation}
     * @memberof ModelsTransactionEnrichmentResponse
     */
    'transaction_location'?: ModelsLocation;
    /**
     * Transaction status
     * @type {string}
     * @memberof ModelsTransactionEnrichmentResponse
     */
    'transaction_status'?: string;
    /**
     * Contains metadata about the payment method, the sender, and the receiver.
     * @type {ModelsTransferMetadata}
     * @memberof ModelsTransactionEnrichmentResponse
     */
    'transfer_metadata'?: ModelsTransferMetadata;
}

