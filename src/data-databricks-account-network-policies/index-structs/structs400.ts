/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

import * as cdktn from 'cdktn';
import { DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesAuthentication,
dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesAuthenticationToTerraform,
dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesAuthenticationToHclTerraform,
DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesAuthenticationOutputReference,
DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestination,
dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationToTerraform,
dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationToHclTerraform,
DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationOutputReference,
DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesOrigin,
dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesOriginToTerraform,
dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesOriginToHclTerraform,
DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesOriginOutputReference,
DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRules,
dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesToTerraform,
dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesToHclTerraform,
DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesList,
DataDatabricksAccountNetworkPoliciesItemsIngressDryRunCrossWorkspaceAccess,
dataDatabricksAccountNetworkPoliciesItemsIngressDryRunCrossWorkspaceAccessToTerraform,
dataDatabricksAccountNetworkPoliciesItemsIngressDryRunCrossWorkspaceAccessToHclTerraform,
DataDatabricksAccountNetworkPoliciesItemsIngressDryRunCrossWorkspaceAccessOutputReference,
DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccess,
dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessToTerraform,
dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessToHclTerraform,
DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessOutputReference,
DataDatabricksAccountNetworkPoliciesItemsEgressOutputReference,
DataDatabricksAccountNetworkPoliciesItemsIngressOutputReference } from './structs0';
export interface DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/account_network_policies#authentication DataDatabricksAccountNetworkPolicies#authentication}
  */
  readonly authentication?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesAuthentication;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/account_network_policies#destination DataDatabricksAccountNetworkPolicies#destination}
  */
  readonly destination?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestination;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/account_network_policies#label DataDatabricksAccountNetworkPolicies#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/account_network_policies#origin DataDatabricksAccountNetworkPolicies#origin}
  */
  readonly origin?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesOrigin;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authentication: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesAuthenticationToTerraform(struct!.authentication),
    destination: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationToTerraform(struct!.destination),
    label: cdktn.stringToTerraform(struct!.label),
    origin: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesOriginToTerraform(struct!.origin),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authentication: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesAuthentication",
    },
    destination: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestination",
    },
    label: {
      value: cdktn.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesOriginToHclTerraform(struct!.origin),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesOrigin",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRules | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._origin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.origin = this._origin?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRules | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication.internalValue = undefined;
      this._destination.internalValue = undefined;
      this._label = undefined;
      this._origin.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authentication.internalValue = value.authentication;
      this._destination.internalValue = value.destination;
      this._label = value.label;
      this._origin.internalValue = value.origin;
    }
  }

  // authentication - computed: true, optional: true, required: false
  private _authentication = new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // destination - computed: true, optional: true, required: false
  private _destination = new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestination) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // label - computed: true, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // origin - computed: true, optional: true, required: false
  private _origin = new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesOriginOutputReference(this, "origin");
  public get origin() {
    return this._origin;
  }
  public putOrigin(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesOrigin) {
    this._origin.internalValue = value;
  }
  public resetOrigin() {
    this._origin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin.internalValue;
  }
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRules[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesOutputReference {
    return new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/account_network_policies#allow_rules DataDatabricksAccountNetworkPolicies#allow_rules}
  */
  readonly allowRules?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRules[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/account_network_policies#deny_rules DataDatabricksAccountNetworkPolicies#deny_rules}
  */
  readonly denyRules?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRules[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/account_network_policies#restriction_mode DataDatabricksAccountNetworkPolicies#restriction_mode}
  */
  readonly restrictionMode: string;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccess | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allow_rules: cdktn.listMapper(dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesToTerraform, false)(struct!.allowRules),
    deny_rules: cdktn.listMapper(dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesToTerraform, false)(struct!.denyRules),
    restriction_mode: cdktn.stringToTerraform(struct!.restrictionMode),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccess | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allow_rules: {
      value: cdktn.listMapperHcl(dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesToHclTerraform, false)(struct!.allowRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesList",
    },
    deny_rules: {
      value: cdktn.listMapperHcl(dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesToHclTerraform, false)(struct!.denyRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesList",
    },
    restriction_mode: {
      value: cdktn.stringToHclTerraform(struct!.restrictionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccess | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowRules = this._allowRules?.internalValue;
    }
    if (this._denyRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyRules = this._denyRules?.internalValue;
    }
    if (this._restrictionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictionMode = this._restrictionMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccess | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowRules.internalValue = undefined;
      this._denyRules.internalValue = undefined;
      this._restrictionMode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowRules.internalValue = value.allowRules;
      this._denyRules.internalValue = value.denyRules;
      this._restrictionMode = value.restrictionMode;
    }
  }

  // allow_rules - computed: true, optional: true, required: false
  private _allowRules = new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesList(this, "allow_rules", false);
  public get allowRules() {
    return this._allowRules;
  }
  public putAllowRules(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRules[] | cdktn.IResolvable) {
    this._allowRules.internalValue = value;
  }
  public resetAllowRules() {
    this._allowRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRulesInput() {
    return this._allowRules.internalValue;
  }

  // deny_rules - computed: true, optional: true, required: false
  private _denyRules = new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesList(this, "deny_rules", false);
  public get denyRules() {
    return this._denyRules;
  }
  public putDenyRules(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRules[] | cdktn.IResolvable) {
    this._denyRules.internalValue = value;
  }
  public resetDenyRules() {
    this._denyRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyRulesInput() {
    return this._denyRules.internalValue;
  }

  // restriction_mode - computed: true, optional: false, required: true
  private _restrictionMode?: string; 
  public get restrictionMode() {
    return this.getStringAttribute('restriction_mode');
  }
  public set restrictionMode(value: string) {
    this._restrictionMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictionModeInput() {
    return this._restrictionMode;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressDryRun {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/account_network_policies#cross_workspace_access DataDatabricksAccountNetworkPolicies#cross_workspace_access}
  */
  readonly crossWorkspaceAccess?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunCrossWorkspaceAccess;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/account_network_policies#private_access DataDatabricksAccountNetworkPolicies#private_access}
  */
  readonly privateAccess?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccess;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/account_network_policies#public_access DataDatabricksAccountNetworkPolicies#public_access}
  */
  readonly publicAccess?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccess;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRun): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cross_workspace_access: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunCrossWorkspaceAccessToTerraform(struct!.crossWorkspaceAccess),
    private_access: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessToTerraform(struct!.privateAccess),
    public_access: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessToTerraform(struct!.publicAccess),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRun): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cross_workspace_access: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunCrossWorkspaceAccessToHclTerraform(struct!.crossWorkspaceAccess),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressDryRunCrossWorkspaceAccess",
    },
    private_access: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessToHclTerraform(struct!.privateAccess),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccess",
    },
    public_access: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessToHclTerraform(struct!.publicAccess),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccess",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressDryRunOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressDryRun | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crossWorkspaceAccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossWorkspaceAccess = this._crossWorkspaceAccess?.internalValue;
    }
    if (this._privateAccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateAccess = this._privateAccess?.internalValue;
    }
    if (this._publicAccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicAccess = this._publicAccess?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRun | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._crossWorkspaceAccess.internalValue = undefined;
      this._privateAccess.internalValue = undefined;
      this._publicAccess.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._crossWorkspaceAccess.internalValue = value.crossWorkspaceAccess;
      this._privateAccess.internalValue = value.privateAccess;
      this._publicAccess.internalValue = value.publicAccess;
    }
  }

  // cross_workspace_access - computed: true, optional: true, required: false
  private _crossWorkspaceAccess = new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunCrossWorkspaceAccessOutputReference(this, "cross_workspace_access");
  public get crossWorkspaceAccess() {
    return this._crossWorkspaceAccess;
  }
  public putCrossWorkspaceAccess(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunCrossWorkspaceAccess) {
    this._crossWorkspaceAccess.internalValue = value;
  }
  public resetCrossWorkspaceAccess() {
    this._crossWorkspaceAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossWorkspaceAccessInput() {
    return this._crossWorkspaceAccess.internalValue;
  }

  // private_access - computed: true, optional: true, required: false
  private _privateAccess = new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessOutputReference(this, "private_access");
  public get privateAccess() {
    return this._privateAccess;
  }
  public putPrivateAccess(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccess) {
    this._privateAccess.internalValue = value;
  }
  public resetPrivateAccess() {
    this._privateAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateAccessInput() {
    return this._privateAccess.internalValue;
  }

  // public_access - computed: true, optional: true, required: false
  private _publicAccess = new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessOutputReference(this, "public_access");
  public get publicAccess() {
    return this._publicAccess;
  }
  public putPublicAccess(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccess) {
    this._publicAccess.internalValue = value;
  }
  public resetPublicAccess() {
    this._publicAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicAccessInput() {
    return this._publicAccess.internalValue;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/account_network_policies#network_policy_id DataDatabricksAccountNetworkPolicies#network_policy_id}
  */
  readonly networkPolicyId: string;
}

export function dataDatabricksAccountNetworkPoliciesItemsToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItems): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    network_policy_id: cdktn.stringToTerraform(struct!.networkPolicyId),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItems): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    network_policy_id: {
      value: cdktn.stringToHclTerraform(struct!.networkPolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkPolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPolicyId = this._networkPolicyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkPolicyId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkPolicyId = value.networkPolicyId;
    }
  }

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // egress - computed: true, optional: false, required: false
  private _egress = new DataDatabricksAccountNetworkPoliciesItemsEgressOutputReference(this, "egress");
  public get egress() {
    return this._egress;
  }

  // ingress - computed: true, optional: false, required: false
  private _ingress = new DataDatabricksAccountNetworkPoliciesItemsIngressOutputReference(this, "ingress");
  public get ingress() {
    return this._ingress;
  }

  // ingress_dry_run - computed: true, optional: false, required: false
  private _ingressDryRun = new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunOutputReference(this, "ingress_dry_run");
  public get ingressDryRun() {
    return this._ingressDryRun;
  }

  // network_policy_id - computed: true, optional: false, required: true
  private _networkPolicyId?: string; 
  public get networkPolicyId() {
    return this.getStringAttribute('network_policy_id');
  }
  public set networkPolicyId(value: string) {
    this._networkPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPolicyIdInput() {
    return this._networkPolicyId;
  }
}

export class DataDatabricksAccountNetworkPoliciesItemsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksAccountNetworkPoliciesItems[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatabricksAccountNetworkPoliciesItemsOutputReference {
    return new DataDatabricksAccountNetworkPoliciesItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
