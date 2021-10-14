/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { ManagementGroups } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { OperationalInsightsManagementClientContext } from "../operationalInsightsManagementClientContext";
import {
  ManagementGroup,
  ManagementGroupsListOptionalParams,
  ManagementGroupsListResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ManagementGroups operations. */
export class ManagementGroupsImpl implements ManagementGroups {
  private readonly client: OperationalInsightsManagementClientContext;

  /**
   * Initialize a new instance of the class ManagementGroups class.
   * @param client Reference to the service client
   */
  constructor(client: OperationalInsightsManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a list of management groups connected to a workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    workspaceName: string,
    options?: ManagementGroupsListOptionalParams
  ): PagedAsyncIterableIterator<ManagementGroup> {
    const iter = this.listPagingAll(resourceGroupName, workspaceName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(resourceGroupName, workspaceName, options);
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    workspaceName: string,
    options?: ManagementGroupsListOptionalParams
  ): AsyncIterableIterator<ManagementGroup[]> {
    let result = await this._list(resourceGroupName, workspaceName, options);
    yield result.value || [];
  }

  private async *listPagingAll(
    resourceGroupName: string,
    workspaceName: string,
    options?: ManagementGroupsListOptionalParams
  ): AsyncIterableIterator<ManagementGroup> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      workspaceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets a list of management groups connected to a workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    workspaceName: string,
    options?: ManagementGroupsListOptionalParams
  ): Promise<ManagementGroupsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, options },
      listOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/managementGroups",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.WorkspaceListManagementGroupsResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
