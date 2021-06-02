## API Report File for "@azure/monitor-query"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { OperationOptions } from '@azure/core-http';
import { PipelineOptions } from '@azure/core-http';
import { TokenCredential } from '@azure/core-auth';

// @public
export type AggregationType = "None" | "Average" | "Count" | "Minimum" | "Maximum" | "Total";

// @public
export interface BatchQuery {
    azureResourceIds?: string[];
    includeQueryStatistics?: boolean;
    qualifiedNames?: string[];
    query: string;
    serverTimeoutInSeconds?: number;
    timespan?: string;
    workspace: string;
    workspaceIds?: string[];
    workspaces?: string[];
}

// @public
export type ColumnDataType = string;

// @public
export const CommonDurations: {
    readonly last7Days: "P7D";
    readonly last3Days: "P3D";
    readonly last2Days: "P2D";
    readonly lastDay: "P1D";
    readonly lastHour: "PT1H";
    readonly last4Hours: "PT4H";
    readonly last24Hours: "P1D";
    readonly last48Hours: "P2D";
    readonly last30Minutes: "PT30M";
    readonly last5Minutes: "PT5M";
};

// @public
export interface ErrorDetail {
    additionalProperties?: any;
    code: string;
    message: string;
    resources?: string[];
    target?: string;
    value?: string;
}

// @public
export interface ErrorInfo {
    additionalProperties?: any;
    code: string;
    details?: ErrorDetail[];
    innererror?: ErrorInfo;
    message: string;
}

// @public
export interface GetMetricDefinitionsOptions extends OperationOptions {
    metricNamespace?: string;
}

// @public
export interface GetMetricDefinitionsResponse {
    definitions: MetricDefinition[];
}

// @public
export interface GetMetricNamespacesOptions {
    startTime?: string;
}

// @public
export interface GetMetricNamespacesResponse {
    namespaces: MetricNamespace[];
}

// @public
export interface LocalizableString {
    localizedValue?: string;
    value: string;
}

// @public
export class LogsClient {
    constructor(tokenCredential: TokenCredential, options?: LogsClientOptions);
    // (undocumented)
    queryLogs(workspaceId: string, query: string, options?: QueryLogsOptions): Promise<QueryLogsResult>;
    // (undocumented)
    queryLogsBatch(batch: QueryLogsBatch, options?: QueryLogsBatchOptions): Promise<QueryLogsBatchResponse>;
}

// @public (undocumented)
export interface LogsClientOptions extends PipelineOptions {
    endpoint?: string;
}

// @public
export interface MetadataValue {
    name?: LocalizableString;
    value?: string;
}

// @public
export interface Metric {
    displayDescription: string;
    errorCode?: string;
    id: string;
    name: LocalizableString;
    timeseries: TimeSeriesElement[];
    type: string;
    unit: MetricUnit;
}

// @public
export interface MetricAvailability {
    retention?: string;
    timeGrain?: string;
}

// @public
export interface MetricColumn {
    name?: string;
    type?: ColumnDataType;
}

// @public
export interface MetricDefinition {
    category?: string;
    dimensions?: LocalizableString_2[];
    displayDescription?: string;
    id?: string;
    isDimensionRequired?: boolean;
    metricAvailabilities?: MetricAvailability[];
    // Warning: (ae-forgotten-export) The symbol "LocalizableString" needs to be exported by the entry point index.d.ts
    name?: LocalizableString_2;
    primaryAggregationType?: AggregationType;
    resourceId?: string;
    // Warning: (ae-forgotten-export) The symbol "MetricUnit" needs to be exported by the entry point index.d.ts
    unit?: MetricUnit_2;
}

// @public
export interface MetricNamespace {
    classification?: NamespaceClassification;
    id?: string;
    name?: string;
    properties?: MetricNamespaceName;
    type?: string;
}

// @public
export interface MetricNamespaceName {
    metricNamespaceName?: string;
}

// @public (undocumented)
export class MetricsClient {
    constructor(tokenCredential: TokenCredential, options?: MetricsClientOptions);
    // (undocumented)
    getMetricDefinitions(resourceUri: string, options?: GetMetricDefinitionsOptions): Promise<GetMetricDefinitionsResponse>;
    // (undocumented)
    getMetricNamespaces(resourceUri: string, options?: GetMetricNamespacesOptions): Promise<GetMetricNamespacesResponse>;
    // (undocumented)
    queryMetrics(resourceUri: string, options?: QueryMetricsOptions): Promise<QueryMetricsResponse>;
}

// @public (undocumented)
export interface MetricsClientOptions extends PipelineOptions {
    endpoint?: string;
}

// @public
export type MetricUnit = string;

// @public
export interface MetricValue {
    average?: number;
    count?: number;
    maximum?: number;
    minimum?: number;
    timeStamp: Date;
    total?: number;
}

// @public
export type NamespaceClassification = string;

// @public
export interface QueryLogsBatch {
    queries: BatchQuery[];
}

// @public (undocumented)
export type QueryLogsBatchOptions = OperationOptions;

// @public
export interface QueryLogsBatchResponse {
    results?: {
        id?: string;
        status?: number;
        tables?: Table[];
        error?: ErrorInfo;
    }[];
}

// @public (undocumented)
export interface QueryLogsOptions extends OperationOptions {
    includeQueryStatistics?: boolean;
    serverTimeoutInSeconds?: number;
    timespan?: string;
}

// @public (undocumented)
export type QueryLogsResult = QueryResults & {
    statistics?: QueryStatistics;
};

// @public
export interface QueryMetricsOptions extends OperationOptions {
    aggregations?: string[];
    filter?: string;
    interval?: string;
    metricNames?: string[];
    metricNamespace?: string;
    orderBy?: string;
    resultType?: ResultType;
    timespan?: string;
    top?: number;
}

// @public
export interface QueryMetricsResponse {
    cost?: number;
    interval?: string;
    metrics: Metric[];
    namespace?: string;
    resourceRegion?: string;
    timespan: string;
}

// @public
export interface QueryResults {
    statistics?: any;
    tables: Table[];
}

// @public (undocumented)
export interface QueryStatistics {
    // (undocumented)
    [key: string]: unknown;
    // (undocumented)
    query?: {
        executionTime?: number;
        [key: string]: unknown;
    };
}

// @public
export type ResultType = "Data" | "Metadata";

// @public
export interface Table {
    columns: MetricColumn[];
    name: string;
    rows: string[][];
}

// @public
export interface TimeSeriesElement {
    data?: MetricValue[];
    metadataValues?: MetadataValue[];
}


// (No @packageDocumentation comment for this package)

```