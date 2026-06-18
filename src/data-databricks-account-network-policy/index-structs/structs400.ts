/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

import * as cdktn from 'cdktn';
import { DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthentication,
dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthenticationToTerraform,
dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthenticationToHclTerraform,
DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthenticationOutputReference,
DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestination,
dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationToTerraform,
dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationToHclTerraform,
DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationOutputReference,
DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOrigin,
dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginToTerraform,
dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginToHclTerraform,
DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginOutputReference,
DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRules,
dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesToTerraform,
dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesToHclTerraform,
DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesList,
DataDatabricksAccountNetworkPolicyIngressDryRunCrossWorkspaceAccess,
dataDatabricksAccountNetworkPolicyIngressDryRunCrossWorkspaceAccessToTerraform,
dataDatabricksAccountNetworkPolicyIngressDryRunCrossWorkspaceAccessToHclTerraform,
DataDatabricksAccountNetworkPolicyIngressDryRunCrossWorkspaceAccessOutputReference,
DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccess,
dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessToTerraform,
dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessToHclTerraform,
DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessOutputReference } from './structs0';
export interface DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/account_network_policy#authentication DataDatabricksAccountNetworkPolicy#authentication}
  */
  readonly authentication?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthentication;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/account_network_policy#destination DataDatabricksAccountNetworkPolicy#destination}
  */
  readonly destination?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestination;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/account_network_policy#label DataDatabricksAccountNetworkPolicy#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/account_network_policy#origin DataDatabricksAccountNetworkPolicy#origin}
  */
  readonly origin?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOrigin;
}

export function dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authentication: dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthenticationToTerraform(struct!.authentication),
    destination: dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationToTerraform(struct!.destination),
    label: cdktn.stringToTerraform(struct!.label),
    origin: dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginToTerraform(struct!.origin),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authentication: {
      value: dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthentication",
    },
    destination: {
      value: dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestination",
    },
    label: {
      value: cdktn.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin: {
      value: dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginToHclTerraform(struct!.origin),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOrigin",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRules | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRules | cdktn.IResolvable | undefined) {
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
  private _authentication = new DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthentication) {
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
  private _destination = new DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestination) {
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
  private _origin = new DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginOutputReference(this, "origin");
  public get origin() {
    return this._origin;
  }
  public putOrigin(value: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOrigin) {
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

export class DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRules[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOutputReference {
    return new DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/account_network_policy#allow_rules DataDatabricksAccountNetworkPolicy#allow_rules}
  */
  readonly allowRules?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRules[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/account_network_policy#deny_rules DataDatabricksAccountNetworkPolicy#deny_rules}
  */
  readonly denyRules?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRules[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/account_network_policy#restriction_mode DataDatabricksAccountNetworkPolicy#restriction_mode}
  */
  readonly restrictionMode: string;
}

export function dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccess | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allow_rules: cdktn.listMapper(dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesToTerraform, false)(struct!.allowRules),
    deny_rules: cdktn.listMapper(dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesToTerraform, false)(struct!.denyRules),
    restriction_mode: cdktn.stringToTerraform(struct!.restrictionMode),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccess | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allow_rules: {
      value: cdktn.listMapperHcl(dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesToHclTerraform, false)(struct!.allowRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesList",
    },
    deny_rules: {
      value: cdktn.listMapperHcl(dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesToHclTerraform, false)(struct!.denyRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesList",
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

export class DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccess | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccess | cdktn.IResolvable | undefined) {
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
  private _allowRules = new DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesList(this, "allow_rules", false);
  public get allowRules() {
    return this._allowRules;
  }
  public putAllowRules(value: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRules[] | cdktn.IResolvable) {
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
  private _denyRules = new DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesList(this, "deny_rules", false);
  public get denyRules() {
    return this._denyRules;
  }
  public putDenyRules(value: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRules[] | cdktn.IResolvable) {
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
export interface DataDatabricksAccountNetworkPolicyIngressDryRun {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/account_network_policy#cross_workspace_access DataDatabricksAccountNetworkPolicy#cross_workspace_access}
  */
  readonly crossWorkspaceAccess?: DataDatabricksAccountNetworkPolicyIngressDryRunCrossWorkspaceAccess;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/account_network_policy#private_access DataDatabricksAccountNetworkPolicy#private_access}
  */
  readonly privateAccess?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccess;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/account_network_policy#public_access DataDatabricksAccountNetworkPolicy#public_access}
  */
  readonly publicAccess?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccess;
}

export function dataDatabricksAccountNetworkPolicyIngressDryRunToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRun): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cross_workspace_access: dataDatabricksAccountNetworkPolicyIngressDryRunCrossWorkspaceAccessToTerraform(struct!.crossWorkspaceAccess),
    private_access: dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessToTerraform(struct!.privateAccess),
    public_access: dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessToTerraform(struct!.publicAccess),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressDryRunToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRun): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cross_workspace_access: {
      value: dataDatabricksAccountNetworkPolicyIngressDryRunCrossWorkspaceAccessToHclTerraform(struct!.crossWorkspaceAccess),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressDryRunCrossWorkspaceAccess",
    },
    private_access: {
      value: dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessToHclTerraform(struct!.privateAccess),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccess",
    },
    public_access: {
      value: dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessToHclTerraform(struct!.publicAccess),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccess",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPolicyIngressDryRunOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressDryRun | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressDryRun | undefined) {
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
  private _crossWorkspaceAccess = new DataDatabricksAccountNetworkPolicyIngressDryRunCrossWorkspaceAccessOutputReference(this, "cross_workspace_access");
  public get crossWorkspaceAccess() {
    return this._crossWorkspaceAccess;
  }
  public putCrossWorkspaceAccess(value: DataDatabricksAccountNetworkPolicyIngressDryRunCrossWorkspaceAccess) {
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
  private _privateAccess = new DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessOutputReference(this, "private_access");
  public get privateAccess() {
    return this._privateAccess;
  }
  public putPrivateAccess(value: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccess) {
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
  private _publicAccess = new DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessOutputReference(this, "public_access");
  public get publicAccess() {
    return this._publicAccess;
  }
  public putPublicAccess(value: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccess) {
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
