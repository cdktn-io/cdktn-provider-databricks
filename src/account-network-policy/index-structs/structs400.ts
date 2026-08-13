/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

import * as cdktn from 'cdktn';
import { AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthentication,
accountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthenticationToTerraform,
accountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthenticationToHclTerraform,
AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthenticationOutputReference,
AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestination,
accountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationToTerraform,
accountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationToHclTerraform,
AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationOutputReference,
AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOrigin,
accountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginToTerraform,
accountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginToHclTerraform,
AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginOutputReference,
AccountNetworkPolicyIngressDryRunPublicAccessAllowRules,
accountNetworkPolicyIngressDryRunPublicAccessAllowRulesToTerraform,
accountNetworkPolicyIngressDryRunPublicAccessAllowRulesToHclTerraform,
AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesList,
AccountNetworkPolicyIngressDryRunCrossWorkspaceAccess,
accountNetworkPolicyIngressDryRunCrossWorkspaceAccessToTerraform,
accountNetworkPolicyIngressDryRunCrossWorkspaceAccessToHclTerraform,
AccountNetworkPolicyIngressDryRunCrossWorkspaceAccessOutputReference,
AccountNetworkPolicyIngressDryRunPrivateAccess,
accountNetworkPolicyIngressDryRunPrivateAccessToTerraform,
accountNetworkPolicyIngressDryRunPrivateAccessToHclTerraform,
AccountNetworkPolicyIngressDryRunPrivateAccessOutputReference } from './structs0';
export interface AccountNetworkPolicyIngressDryRunPublicAccessDenyRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/account_network_policy#authentication AccountNetworkPolicy#authentication}
  */
  readonly authentication?: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthentication;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/account_network_policy#destination AccountNetworkPolicy#destination}
  */
  readonly destination?: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestination;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/account_network_policy#label AccountNetworkPolicy#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/account_network_policy#origin AccountNetworkPolicy#origin}
  */
  readonly origin?: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOrigin;
}

export function accountNetworkPolicyIngressDryRunPublicAccessDenyRulesToTerraform(struct?: AccountNetworkPolicyIngressDryRunPublicAccessDenyRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authentication: accountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthenticationToTerraform(struct!.authentication),
    destination: accountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationToTerraform(struct!.destination),
    label: cdktn.stringToTerraform(struct!.label),
    origin: accountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginToTerraform(struct!.origin),
  }
}


export function accountNetworkPolicyIngressDryRunPublicAccessDenyRulesToHclTerraform(struct?: AccountNetworkPolicyIngressDryRunPublicAccessDenyRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authentication: {
      value: accountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthentication",
    },
    destination: {
      value: accountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestination",
    },
    label: {
      value: cdktn.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin: {
      value: accountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginToHclTerraform(struct!.origin),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOrigin",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AccountNetworkPolicyIngressDryRunPublicAccessDenyRules | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressDryRunPublicAccessDenyRules | cdktn.IResolvable | undefined) {
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

  // authentication - computed: false, optional: true, required: false
  private _authentication = new AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // destination - computed: false, optional: true, required: false
  private _destination = new AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestination) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // label - computed: false, optional: true, required: false
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

  // origin - computed: false, optional: true, required: false
  private _origin = new AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginOutputReference(this, "origin");
  public get origin() {
    return this._origin;
  }
  public putOrigin(value: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOrigin) {
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

export class AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesList extends cdktn.ComplexList {
  public internalValue? : AccountNetworkPolicyIngressDryRunPublicAccessDenyRules[] | cdktn.IResolvable

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
  public get(index: number): AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOutputReference {
    return new AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccountNetworkPolicyIngressDryRunPublicAccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/account_network_policy#allow_rules AccountNetworkPolicy#allow_rules}
  */
  readonly allowRules?: AccountNetworkPolicyIngressDryRunPublicAccessAllowRules[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/account_network_policy#deny_rules AccountNetworkPolicy#deny_rules}
  */
  readonly denyRules?: AccountNetworkPolicyIngressDryRunPublicAccessDenyRules[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/account_network_policy#restriction_mode AccountNetworkPolicy#restriction_mode}
  */
  readonly restrictionMode: string;
}

export function accountNetworkPolicyIngressDryRunPublicAccessToTerraform(struct?: AccountNetworkPolicyIngressDryRunPublicAccess | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allow_rules: cdktn.listMapper(accountNetworkPolicyIngressDryRunPublicAccessAllowRulesToTerraform, false)(struct!.allowRules),
    deny_rules: cdktn.listMapper(accountNetworkPolicyIngressDryRunPublicAccessDenyRulesToTerraform, false)(struct!.denyRules),
    restriction_mode: cdktn.stringToTerraform(struct!.restrictionMode),
  }
}


export function accountNetworkPolicyIngressDryRunPublicAccessToHclTerraform(struct?: AccountNetworkPolicyIngressDryRunPublicAccess | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allow_rules: {
      value: cdktn.listMapperHcl(accountNetworkPolicyIngressDryRunPublicAccessAllowRulesToHclTerraform, false)(struct!.allowRules),
      isBlock: true,
      type: "list",
      storageClassType: "AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesList",
    },
    deny_rules: {
      value: cdktn.listMapperHcl(accountNetworkPolicyIngressDryRunPublicAccessDenyRulesToHclTerraform, false)(struct!.denyRules),
      isBlock: true,
      type: "list",
      storageClassType: "AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesList",
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

export class AccountNetworkPolicyIngressDryRunPublicAccessOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressDryRunPublicAccess | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressDryRunPublicAccess | cdktn.IResolvable | undefined) {
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

  // allow_rules - computed: false, optional: true, required: false
  private _allowRules = new AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesList(this, "allow_rules", false);
  public get allowRules() {
    return this._allowRules;
  }
  public putAllowRules(value: AccountNetworkPolicyIngressDryRunPublicAccessAllowRules[] | cdktn.IResolvable) {
    this._allowRules.internalValue = value;
  }
  public resetAllowRules() {
    this._allowRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRulesInput() {
    return this._allowRules.internalValue;
  }

  // deny_rules - computed: false, optional: true, required: false
  private _denyRules = new AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesList(this, "deny_rules", false);
  public get denyRules() {
    return this._denyRules;
  }
  public putDenyRules(value: AccountNetworkPolicyIngressDryRunPublicAccessDenyRules[] | cdktn.IResolvable) {
    this._denyRules.internalValue = value;
  }
  public resetDenyRules() {
    this._denyRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyRulesInput() {
    return this._denyRules.internalValue;
  }

  // restriction_mode - computed: false, optional: false, required: true
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
export interface AccountNetworkPolicyIngressDryRun {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/account_network_policy#cross_workspace_access AccountNetworkPolicy#cross_workspace_access}
  */
  readonly crossWorkspaceAccess?: AccountNetworkPolicyIngressDryRunCrossWorkspaceAccess;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/account_network_policy#private_access AccountNetworkPolicy#private_access}
  */
  readonly privateAccess?: AccountNetworkPolicyIngressDryRunPrivateAccess;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/account_network_policy#public_access AccountNetworkPolicy#public_access}
  */
  readonly publicAccess?: AccountNetworkPolicyIngressDryRunPublicAccess;
}

export function accountNetworkPolicyIngressDryRunToTerraform(struct?: AccountNetworkPolicyIngressDryRun | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cross_workspace_access: accountNetworkPolicyIngressDryRunCrossWorkspaceAccessToTerraform(struct!.crossWorkspaceAccess),
    private_access: accountNetworkPolicyIngressDryRunPrivateAccessToTerraform(struct!.privateAccess),
    public_access: accountNetworkPolicyIngressDryRunPublicAccessToTerraform(struct!.publicAccess),
  }
}


export function accountNetworkPolicyIngressDryRunToHclTerraform(struct?: AccountNetworkPolicyIngressDryRun | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cross_workspace_access: {
      value: accountNetworkPolicyIngressDryRunCrossWorkspaceAccessToHclTerraform(struct!.crossWorkspaceAccess),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressDryRunCrossWorkspaceAccess",
    },
    private_access: {
      value: accountNetworkPolicyIngressDryRunPrivateAccessToHclTerraform(struct!.privateAccess),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressDryRunPrivateAccess",
    },
    public_access: {
      value: accountNetworkPolicyIngressDryRunPublicAccessToHclTerraform(struct!.publicAccess),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressDryRunPublicAccess",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountNetworkPolicyIngressDryRunOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressDryRun | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: AccountNetworkPolicyIngressDryRun | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._crossWorkspaceAccess.internalValue = undefined;
      this._privateAccess.internalValue = undefined;
      this._publicAccess.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._crossWorkspaceAccess.internalValue = value.crossWorkspaceAccess;
      this._privateAccess.internalValue = value.privateAccess;
      this._publicAccess.internalValue = value.publicAccess;
    }
  }

  // cross_workspace_access - computed: false, optional: true, required: false
  private _crossWorkspaceAccess = new AccountNetworkPolicyIngressDryRunCrossWorkspaceAccessOutputReference(this, "cross_workspace_access");
  public get crossWorkspaceAccess() {
    return this._crossWorkspaceAccess;
  }
  public putCrossWorkspaceAccess(value: AccountNetworkPolicyIngressDryRunCrossWorkspaceAccess) {
    this._crossWorkspaceAccess.internalValue = value;
  }
  public resetCrossWorkspaceAccess() {
    this._crossWorkspaceAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossWorkspaceAccessInput() {
    return this._crossWorkspaceAccess.internalValue;
  }

  // private_access - computed: false, optional: true, required: false
  private _privateAccess = new AccountNetworkPolicyIngressDryRunPrivateAccessOutputReference(this, "private_access");
  public get privateAccess() {
    return this._privateAccess;
  }
  public putPrivateAccess(value: AccountNetworkPolicyIngressDryRunPrivateAccess) {
    this._privateAccess.internalValue = value;
  }
  public resetPrivateAccess() {
    this._privateAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateAccessInput() {
    return this._privateAccess.internalValue;
  }

  // public_access - computed: false, optional: true, required: false
  private _publicAccess = new AccountNetworkPolicyIngressDryRunPublicAccessOutputReference(this, "public_access");
  public get publicAccess() {
    return this._publicAccess;
  }
  public putPublicAccess(value: AccountNetworkPolicyIngressDryRunPublicAccess) {
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
