/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/compliancesMappers";
import * as Parameters from "../models/parameters";
import { SecurityCenterContext } from "../securityCenterContext";

/** Class representing a Compliances. */
export class Compliances {
  private readonly client: SecurityCenterContext;

  /**
   * Create a Compliances.
   * @param {SecurityCenterContext} client Reference to the service client.
   */
  constructor(client: SecurityCenterContext) {
    this.client = client;
  }

  /**
   * The Compliance scores of the specific management group.
   * @param scope Scope of the query, can be subscription
   * (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group
   * (/providers/Microsoft.Management/managementGroups/mgName).
   * @param [options] The optional parameters
   * @returns Promise<Models.CompliancesListResponse>
   */
  list(scope: string, options?: msRest.RequestOptionsBase): Promise<Models.CompliancesListResponse>;
  /**
   * @param scope Scope of the query, can be subscription
   * (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group
   * (/providers/Microsoft.Management/managementGroups/mgName).
   * @param callback The callback
   */
  list(scope: string, callback: msRest.ServiceCallback<Models.ComplianceList>): void;
  /**
   * @param scope Scope of the query, can be subscription
   * (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group
   * (/providers/Microsoft.Management/managementGroups/mgName).
   * @param options The optional parameters
   * @param callback The callback
   */
  list(scope: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ComplianceList>): void;
  list(scope: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ComplianceList>, callback?: msRest.ServiceCallback<Models.ComplianceList>): Promise<Models.CompliancesListResponse> {
    return this.client.sendOperationRequest(
      {
        scope,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.CompliancesListResponse>;
  }

  /**
   * Details of a specific Compliance.
   * @param scope Scope of the query, can be subscription
   * (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group
   * (/providers/Microsoft.Management/managementGroups/mgName).
   * @param complianceName name of the Compliance
   * @param [options] The optional parameters
   * @returns Promise<Models.CompliancesGetResponse>
   */
  get(scope: string, complianceName: string, options?: msRest.RequestOptionsBase): Promise<Models.CompliancesGetResponse>;
  /**
   * @param scope Scope of the query, can be subscription
   * (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group
   * (/providers/Microsoft.Management/managementGroups/mgName).
   * @param complianceName name of the Compliance
   * @param callback The callback
   */
  get(scope: string, complianceName: string, callback: msRest.ServiceCallback<Models.Compliance>): void;
  /**
   * @param scope Scope of the query, can be subscription
   * (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group
   * (/providers/Microsoft.Management/managementGroups/mgName).
   * @param complianceName name of the Compliance
   * @param options The optional parameters
   * @param callback The callback
   */
  get(scope: string, complianceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Compliance>): void;
  get(scope: string, complianceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Compliance>, callback?: msRest.ServiceCallback<Models.Compliance>): Promise<Models.CompliancesGetResponse> {
    return this.client.sendOperationRequest(
      {
        scope,
        complianceName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.CompliancesGetResponse>;
  }

  /**
   * The Compliance scores of the specific management group.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.CompliancesListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.CompliancesListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ComplianceList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ComplianceList>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ComplianceList>, callback?: msRest.ServiceCallback<Models.ComplianceList>): Promise<Models.CompliancesListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.CompliancesListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "{scope}/providers/Microsoft.Security/compliances",
  urlParameters: [
    Parameters.scope
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ComplianceList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "{scope}/providers/Microsoft.Security/compliances/{complianceName}",
  urlParameters: [
    Parameters.scope,
    Parameters.complianceName
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Compliance
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ComplianceList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
