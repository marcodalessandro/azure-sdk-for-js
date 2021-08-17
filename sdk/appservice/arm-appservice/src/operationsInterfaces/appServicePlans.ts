/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  AppServicePlan,
  AppServicePlansListOptionalParams,
  AppServicePlansListByResourceGroupOptionalParams,
  AppServicePlansListWebAppsByHybridConnectionOptionalParams,
  HybridConnection,
  AppServicePlansListHybridConnectionsOptionalParams,
  Site,
  AppServicePlansListWebAppsOptionalParams,
  CsmUsageQuota,
  AppServicePlansListUsagesOptionalParams,
  AppServicePlansGetOptionalParams,
  AppServicePlansGetResponse,
  AppServicePlansCreateOrUpdateOptionalParams,
  AppServicePlansCreateOrUpdateResponse,
  AppServicePlansDeleteOptionalParams,
  AppServicePlanPatchResource,
  AppServicePlansUpdateOptionalParams,
  AppServicePlansUpdateResponse,
  AppServicePlansListCapabilitiesOptionalParams,
  AppServicePlansListCapabilitiesResponse,
  AppServicePlansGetHybridConnectionOptionalParams,
  AppServicePlansGetHybridConnectionResponse,
  AppServicePlansDeleteHybridConnectionOptionalParams,
  AppServicePlansListHybridConnectionKeysOptionalParams,
  AppServicePlansListHybridConnectionKeysResponse,
  AppServicePlansGetHybridConnectionPlanLimitOptionalParams,
  AppServicePlansGetHybridConnectionPlanLimitResponse,
  AppServicePlansRestartWebAppsOptionalParams,
  AppServicePlansGetServerFarmSkusOptionalParams,
  AppServicePlansGetServerFarmSkusResponse,
  AppServicePlansListVnetsOptionalParams,
  AppServicePlansListVnetsResponse,
  AppServicePlansGetVnetFromServerFarmOptionalParams,
  AppServicePlansGetVnetFromServerFarmResponse,
  AppServicePlansGetVnetGatewayOptionalParams,
  AppServicePlansGetVnetGatewayResponse,
  VnetGateway,
  AppServicePlansUpdateVnetGatewayOptionalParams,
  AppServicePlansUpdateVnetGatewayResponse,
  AppServicePlansListRoutesForVnetOptionalParams,
  AppServicePlansListRoutesForVnetResponse,
  AppServicePlansGetRouteForVnetOptionalParams,
  AppServicePlansGetRouteForVnetResponse,
  VnetRoute,
  AppServicePlansCreateOrUpdateVnetRouteOptionalParams,
  AppServicePlansCreateOrUpdateVnetRouteResponse,
  AppServicePlansDeleteVnetRouteOptionalParams,
  AppServicePlansUpdateVnetRouteOptionalParams,
  AppServicePlansUpdateVnetRouteResponse,
  AppServicePlansRebootWorkerOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a AppServicePlans. */
export interface AppServicePlans {
  /**
   * Description for Get all App Service plans for a subscription.
   * @param options The options parameters.
   */
  list(
    options?: AppServicePlansListOptionalParams
  ): PagedAsyncIterableIterator<AppServicePlan>;
  /**
   * Description for Get all App Service plans in a resource group.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: AppServicePlansListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<AppServicePlan>;
  /**
   * Description for Get all apps that use a Hybrid Connection in an App Service Plan.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of the App Service plan.
   * @param namespaceName Name of the Hybrid Connection namespace.
   * @param relayName Name of the Hybrid Connection relay.
   * @param options The options parameters.
   */
  listWebAppsByHybridConnection(
    resourceGroupName: string,
    name: string,
    namespaceName: string,
    relayName: string,
    options?: AppServicePlansListWebAppsByHybridConnectionOptionalParams
  ): PagedAsyncIterableIterator<string>;
  /**
   * Description for Retrieve all Hybrid Connections in use in an App Service plan.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of the App Service plan.
   * @param options The options parameters.
   */
  listHybridConnections(
    resourceGroupName: string,
    name: string,
    options?: AppServicePlansListHybridConnectionsOptionalParams
  ): PagedAsyncIterableIterator<HybridConnection>;
  /**
   * Description for Get all apps associated with an App Service plan.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of the App Service plan.
   * @param options The options parameters.
   */
  listWebApps(
    resourceGroupName: string,
    name: string,
    options?: AppServicePlansListWebAppsOptionalParams
  ): PagedAsyncIterableIterator<Site>;
  /**
   * Description for Gets server farm usage information
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of App Service Plan
   * @param options The options parameters.
   */
  listUsages(
    resourceGroupName: string,
    name: string,
    options?: AppServicePlansListUsagesOptionalParams
  ): PagedAsyncIterableIterator<CsmUsageQuota>;
  /**
   * Description for Get an App Service plan.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of the App Service plan.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    name: string,
    options?: AppServicePlansGetOptionalParams
  ): Promise<AppServicePlansGetResponse>;
  /**
   * Description for Creates or updates an App Service Plan.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of the App Service plan.
   * @param appServicePlan Details of the App Service plan.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    name: string,
    appServicePlan: AppServicePlan,
    options?: AppServicePlansCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<AppServicePlansCreateOrUpdateResponse>,
      AppServicePlansCreateOrUpdateResponse
    >
  >;
  /**
   * Description for Creates or updates an App Service Plan.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of the App Service plan.
   * @param appServicePlan Details of the App Service plan.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    name: string,
    appServicePlan: AppServicePlan,
    options?: AppServicePlansCreateOrUpdateOptionalParams
  ): Promise<AppServicePlansCreateOrUpdateResponse>;
  /**
   * Description for Delete an App Service plan.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of the App Service plan.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    name: string,
    options?: AppServicePlansDeleteOptionalParams
  ): Promise<void>;
  /**
   * Description for Creates or updates an App Service Plan.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of the App Service plan.
   * @param appServicePlan Details of the App Service plan.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    name: string,
    appServicePlan: AppServicePlanPatchResource,
    options?: AppServicePlansUpdateOptionalParams
  ): Promise<AppServicePlansUpdateResponse>;
  /**
   * Description for List all capabilities of an App Service plan.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of the App Service plan.
   * @param options The options parameters.
   */
  listCapabilities(
    resourceGroupName: string,
    name: string,
    options?: AppServicePlansListCapabilitiesOptionalParams
  ): Promise<AppServicePlansListCapabilitiesResponse>;
  /**
   * Description for Retrieve a Hybrid Connection in use in an App Service plan.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of the App Service plan.
   * @param namespaceName Name of the Service Bus namespace.
   * @param relayName Name of the Service Bus relay.
   * @param options The options parameters.
   */
  getHybridConnection(
    resourceGroupName: string,
    name: string,
    namespaceName: string,
    relayName: string,
    options?: AppServicePlansGetHybridConnectionOptionalParams
  ): Promise<AppServicePlansGetHybridConnectionResponse>;
  /**
   * Description for Delete a Hybrid Connection in use in an App Service plan.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of the App Service plan.
   * @param namespaceName Name of the Service Bus namespace.
   * @param relayName Name of the Service Bus relay.
   * @param options The options parameters.
   */
  deleteHybridConnection(
    resourceGroupName: string,
    name: string,
    namespaceName: string,
    relayName: string,
    options?: AppServicePlansDeleteHybridConnectionOptionalParams
  ): Promise<void>;
  /**
   * Description for Get the send key name and value of a Hybrid Connection.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of the App Service plan.
   * @param namespaceName The name of the Service Bus namespace.
   * @param relayName The name of the Service Bus relay.
   * @param options The options parameters.
   */
  listHybridConnectionKeys(
    resourceGroupName: string,
    name: string,
    namespaceName: string,
    relayName: string,
    options?: AppServicePlansListHybridConnectionKeysOptionalParams
  ): Promise<AppServicePlansListHybridConnectionKeysResponse>;
  /**
   * Description for Get the maximum number of Hybrid Connections allowed in an App Service plan.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of the App Service plan.
   * @param options The options parameters.
   */
  getHybridConnectionPlanLimit(
    resourceGroupName: string,
    name: string,
    options?: AppServicePlansGetHybridConnectionPlanLimitOptionalParams
  ): Promise<AppServicePlansGetHybridConnectionPlanLimitResponse>;
  /**
   * Description for Restart all apps in an App Service plan.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of the App Service plan.
   * @param options The options parameters.
   */
  restartWebApps(
    resourceGroupName: string,
    name: string,
    options?: AppServicePlansRestartWebAppsOptionalParams
  ): Promise<void>;
  /**
   * Description for Gets all selectable SKUs for a given App Service Plan
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of App Service Plan
   * @param options The options parameters.
   */
  getServerFarmSkus(
    resourceGroupName: string,
    name: string,
    options?: AppServicePlansGetServerFarmSkusOptionalParams
  ): Promise<AppServicePlansGetServerFarmSkusResponse>;
  /**
   * Description for Get all Virtual Networks associated with an App Service plan.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of the App Service plan.
   * @param options The options parameters.
   */
  listVnets(
    resourceGroupName: string,
    name: string,
    options?: AppServicePlansListVnetsOptionalParams
  ): Promise<AppServicePlansListVnetsResponse>;
  /**
   * Description for Get a Virtual Network associated with an App Service plan.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of the App Service plan.
   * @param vnetName Name of the Virtual Network.
   * @param options The options parameters.
   */
  getVnetFromServerFarm(
    resourceGroupName: string,
    name: string,
    vnetName: string,
    options?: AppServicePlansGetVnetFromServerFarmOptionalParams
  ): Promise<AppServicePlansGetVnetFromServerFarmResponse>;
  /**
   * Description for Get a Virtual Network gateway.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of the App Service plan.
   * @param vnetName Name of the Virtual Network.
   * @param gatewayName Name of the gateway. Only the 'primary' gateway is supported.
   * @param options The options parameters.
   */
  getVnetGateway(
    resourceGroupName: string,
    name: string,
    vnetName: string,
    gatewayName: string,
    options?: AppServicePlansGetVnetGatewayOptionalParams
  ): Promise<AppServicePlansGetVnetGatewayResponse>;
  /**
   * Description for Update a Virtual Network gateway.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of the App Service plan.
   * @param vnetName Name of the Virtual Network.
   * @param gatewayName Name of the gateway. Only the 'primary' gateway is supported.
   * @param connectionEnvelope Definition of the gateway.
   * @param options The options parameters.
   */
  updateVnetGateway(
    resourceGroupName: string,
    name: string,
    vnetName: string,
    gatewayName: string,
    connectionEnvelope: VnetGateway,
    options?: AppServicePlansUpdateVnetGatewayOptionalParams
  ): Promise<AppServicePlansUpdateVnetGatewayResponse>;
  /**
   * Description for Get all routes that are associated with a Virtual Network in an App Service plan.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of the App Service plan.
   * @param vnetName Name of the Virtual Network.
   * @param options The options parameters.
   */
  listRoutesForVnet(
    resourceGroupName: string,
    name: string,
    vnetName: string,
    options?: AppServicePlansListRoutesForVnetOptionalParams
  ): Promise<AppServicePlansListRoutesForVnetResponse>;
  /**
   * Description for Get a Virtual Network route in an App Service plan.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of the App Service plan.
   * @param vnetName Name of the Virtual Network.
   * @param routeName Name of the Virtual Network route.
   * @param options The options parameters.
   */
  getRouteForVnet(
    resourceGroupName: string,
    name: string,
    vnetName: string,
    routeName: string,
    options?: AppServicePlansGetRouteForVnetOptionalParams
  ): Promise<AppServicePlansGetRouteForVnetResponse>;
  /**
   * Description for Create or update a Virtual Network route in an App Service plan.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of the App Service plan.
   * @param vnetName Name of the Virtual Network.
   * @param routeName Name of the Virtual Network route.
   * @param route Definition of the Virtual Network route.
   * @param options The options parameters.
   */
  createOrUpdateVnetRoute(
    resourceGroupName: string,
    name: string,
    vnetName: string,
    routeName: string,
    route: VnetRoute,
    options?: AppServicePlansCreateOrUpdateVnetRouteOptionalParams
  ): Promise<AppServicePlansCreateOrUpdateVnetRouteResponse>;
  /**
   * Description for Delete a Virtual Network route in an App Service plan.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of the App Service plan.
   * @param vnetName Name of the Virtual Network.
   * @param routeName Name of the Virtual Network route.
   * @param options The options parameters.
   */
  deleteVnetRoute(
    resourceGroupName: string,
    name: string,
    vnetName: string,
    routeName: string,
    options?: AppServicePlansDeleteVnetRouteOptionalParams
  ): Promise<void>;
  /**
   * Description for Create or update a Virtual Network route in an App Service plan.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of the App Service plan.
   * @param vnetName Name of the Virtual Network.
   * @param routeName Name of the Virtual Network route.
   * @param route Definition of the Virtual Network route.
   * @param options The options parameters.
   */
  updateVnetRoute(
    resourceGroupName: string,
    name: string,
    vnetName: string,
    routeName: string,
    route: VnetRoute,
    options?: AppServicePlansUpdateVnetRouteOptionalParams
  ): Promise<AppServicePlansUpdateVnetRouteResponse>;
  /**
   * Description for Reboot a worker machine in an App Service plan.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of the App Service plan.
   * @param workerName Name of worker machine, which typically starts with RD.
   * @param options The options parameters.
   */
  rebootWorker(
    resourceGroupName: string,
    name: string,
    workerName: string,
    options?: AppServicePlansRebootWorkerOptionalParams
  ): Promise<void>;
}