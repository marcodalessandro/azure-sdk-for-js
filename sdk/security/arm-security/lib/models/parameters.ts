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

export const acceptLanguage: msRest.OperationParameter = {
  parameterPath: "acceptLanguage",
  mapper: {
    serializedName: "accept-language",
    defaultValue: 'en-US',
    type: {
      name: "String"
    }
  }
};
export const alertName: msRest.OperationURLParameter = {
  parameterPath: "alertName",
  mapper: {
    required: true,
    serializedName: "alertName",
    type: {
      name: "String"
    }
  }
};
export const alertUpdateActionType: msRest.OperationURLParameter = {
  parameterPath: "alertUpdateActionType",
  mapper: {
    required: true,
    serializedName: "alertUpdateActionType",
    type: {
      name: "String"
    }
  }
};
export const apiVersion0: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "api-version",
    defaultValue: '2018-06-01',
    type: {
      name: "String"
    }
  }
};
export const apiVersion1: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "api-version",
    defaultValue: '2019-01-01',
    type: {
      name: "String"
    }
  }
};
export const apiVersion2: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "api-version",
    defaultValue: '2015-06-01-preview',
    type: {
      name: "String"
    }
  }
};
export const apiVersion3: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "api-version",
    defaultValue: '2017-08-01-preview',
    type: {
      name: "String"
    }
  }
};
export const apiVersion4: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "api-version",
    defaultValue: '2019-01-01-preview',
    type: {
      name: "String"
    }
  }
};
export const ascLocation: msRest.OperationURLParameter = {
  parameterPath: "ascLocation",
  mapper: {
    required: true,
    serializedName: "ascLocation",
    type: {
      name: "String"
    }
  }
};
export const complianceName: msRest.OperationURLParameter = {
  parameterPath: "complianceName",
  mapper: {
    required: true,
    serializedName: "complianceName",
    type: {
      name: "String"
    }
  }
};
export const connectionType: msRest.OperationURLParameter = {
  parameterPath: "connectionType",
  mapper: {
    required: true,
    serializedName: "connectionType",
    type: {
      name: "String"
    }
  }
};
export const discoveredSecuritySolutionName: msRest.OperationURLParameter = {
  parameterPath: "discoveredSecuritySolutionName",
  mapper: {
    required: true,
    serializedName: "discoveredSecuritySolutionName",
    type: {
      name: "String"
    }
  }
};
export const expand: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "expand"
  ],
  mapper: {
    serializedName: "$expand",
    type: {
      name: "String"
    }
  }
};
export const externalSecuritySolutionsName: msRest.OperationURLParameter = {
  parameterPath: "externalSecuritySolutionsName",
  mapper: {
    required: true,
    serializedName: "externalSecuritySolutionsName",
    type: {
      name: "String"
    }
  }
};
export const filter: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "filter"
  ],
  mapper: {
    serializedName: "$filter",
    type: {
      name: "String"
    }
  }
};
export const informationProtectionPolicyName: msRest.OperationURLParameter = {
  parameterPath: "informationProtectionPolicyName",
  mapper: {
    required: true,
    serializedName: "informationProtectionPolicyName",
    type: {
      name: "String"
    }
  }
};
export const jitNetworkAccessPolicyInitiateType: msRest.OperationURLParameter = {
  parameterPath: "jitNetworkAccessPolicyInitiateType",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "jitNetworkAccessPolicyInitiateType",
    defaultValue: 'initiate',
    type: {
      name: "String"
    }
  }
};
export const jitNetworkAccessPolicyName: msRest.OperationURLParameter = {
  parameterPath: "jitNetworkAccessPolicyName",
  mapper: {
    required: true,
    serializedName: "jitNetworkAccessPolicyName",
    type: {
      name: "String"
    }
  }
};
export const nextPageLink: msRest.OperationURLParameter = {
  parameterPath: "nextPageLink",
  mapper: {
    required: true,
    serializedName: "nextLink",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const pricingName: msRest.OperationURLParameter = {
  parameterPath: "pricingName",
  mapper: {
    required: true,
    serializedName: "pricingName",
    type: {
      name: "String"
    }
  }
};
export const regulatoryComplianceAssessmentName: msRest.OperationURLParameter = {
  parameterPath: "regulatoryComplianceAssessmentName",
  mapper: {
    required: true,
    serializedName: "regulatoryComplianceAssessmentName",
    type: {
      name: "String"
    }
  }
};
export const regulatoryComplianceControlName: msRest.OperationURLParameter = {
  parameterPath: "regulatoryComplianceControlName",
  mapper: {
    required: true,
    serializedName: "regulatoryComplianceControlName",
    type: {
      name: "String"
    }
  }
};
export const regulatoryComplianceStandardName: msRest.OperationURLParameter = {
  parameterPath: "regulatoryComplianceStandardName",
  mapper: {
    required: true,
    serializedName: "regulatoryComplianceStandardName",
    type: {
      name: "String"
    }
  }
};
export const resourceGroupName: msRest.OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    required: true,
    serializedName: "resourceGroupName",
    constraints: {
      MaxLength: 90,
      MinLength: 1,
      Pattern: /^[-\w\._\(\)]+$/
    },
    type: {
      name: "String"
    }
  }
};
export const resourceId: msRest.OperationURLParameter = {
  parameterPath: "resourceId",
  mapper: {
    required: true,
    serializedName: "resourceId",
    type: {
      name: "String"
    }
  }
};
export const scope: msRest.OperationURLParameter = {
  parameterPath: "scope",
  mapper: {
    required: true,
    serializedName: "scope",
    type: {
      name: "String"
    }
  }
};
export const securityContactName: msRest.OperationURLParameter = {
  parameterPath: "securityContactName",
  mapper: {
    required: true,
    serializedName: "securityContactName",
    type: {
      name: "String"
    }
  }
};
export const select: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "select"
  ],
  mapper: {
    serializedName: "$select",
    type: {
      name: "String"
    }
  }
};
export const settingName0: msRest.OperationURLParameter = {
  parameterPath: "settingName",
  mapper: {
    required: true,
    serializedName: "settingName",
    type: {
      name: "String"
    }
  }
};
export const settingName1: msRest.OperationURLParameter = {
  parameterPath: "settingName",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "settingName",
    defaultValue: 'current',
    type: {
      name: "String"
    }
  }
};
export const subscriptionId: msRest.OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    required: true,
    serializedName: "subscriptionId",
    constraints: {
      Pattern: /^[0-9A-Fa-f]{8}-([0-9A-Fa-f]{4}-){3}[0-9A-Fa-f]{12}$/
    },
    type: {
      name: "String"
    }
  }
};
export const taskName: msRest.OperationURLParameter = {
  parameterPath: "taskName",
  mapper: {
    required: true,
    serializedName: "taskName",
    type: {
      name: "String"
    }
  }
};
export const taskUpdateActionType: msRest.OperationURLParameter = {
  parameterPath: "taskUpdateActionType",
  mapper: {
    required: true,
    serializedName: "taskUpdateActionType",
    type: {
      name: "String"
    }
  }
};
export const topologyResourceName: msRest.OperationURLParameter = {
  parameterPath: "topologyResourceName",
  mapper: {
    required: true,
    serializedName: "topologyResourceName",
    type: {
      name: "String"
    }
  }
};
export const workspaceSettingName: msRest.OperationURLParameter = {
  parameterPath: "workspaceSettingName",
  mapper: {
    required: true,
    serializedName: "workspaceSettingName",
    type: {
      name: "String"
    }
  }
};
