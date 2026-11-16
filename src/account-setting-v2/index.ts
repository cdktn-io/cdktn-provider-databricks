/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface AccountSettingV2Config extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#aibi_dashboard_embedding_access_policy AccountSettingV2#aibi_dashboard_embedding_access_policy}
  */
  readonly aibiDashboardEmbeddingAccessPolicy?: AccountSettingV2AibiDashboardEmbeddingAccessPolicy;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#aibi_dashboard_embedding_approved_domains AccountSettingV2#aibi_dashboard_embedding_approved_domains}
  */
  readonly aibiDashboardEmbeddingApprovedDomains?: AccountSettingV2AibiDashboardEmbeddingApprovedDomains;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#allowed_apps_user_api_scopes AccountSettingV2#allowed_apps_user_api_scopes}
  */
  readonly allowedAppsUserApiScopes?: AccountSettingV2AllowedAppsUserApiScopes;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#automatic_cluster_update_workspace AccountSettingV2#automatic_cluster_update_workspace}
  */
  readonly automaticClusterUpdateWorkspace?: AccountSettingV2AutomaticClusterUpdateWorkspace;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#boolean_val AccountSettingV2#boolean_val}
  */
  readonly booleanVal?: AccountSettingV2BooleanVal;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#collaboration_platform_connectivity AccountSettingV2#collaboration_platform_connectivity}
  */
  readonly collaborationPlatformConnectivity?: AccountSettingV2CollaborationPlatformConnectivity;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#effective_aibi_dashboard_embedding_access_policy AccountSettingV2#effective_aibi_dashboard_embedding_access_policy}
  */
  readonly effectiveAibiDashboardEmbeddingAccessPolicy?: AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#effective_aibi_dashboard_embedding_approved_domains AccountSettingV2#effective_aibi_dashboard_embedding_approved_domains}
  */
  readonly effectiveAibiDashboardEmbeddingApprovedDomains?: AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#effective_automatic_cluster_update_workspace AccountSettingV2#effective_automatic_cluster_update_workspace}
  */
  readonly effectiveAutomaticClusterUpdateWorkspace?: AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#effective_personal_compute AccountSettingV2#effective_personal_compute}
  */
  readonly effectivePersonalCompute?: AccountSettingV2EffectivePersonalCompute;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#effective_restrict_workspace_admins AccountSettingV2#effective_restrict_workspace_admins}
  */
  readonly effectiveRestrictWorkspaceAdmins?: AccountSettingV2EffectiveRestrictWorkspaceAdmins;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#effective_workspace_label AccountSettingV2#effective_workspace_label}
  */
  readonly effectiveWorkspaceLabel?: AccountSettingV2EffectiveWorkspaceLabel;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#integer_val AccountSettingV2#integer_val}
  */
  readonly integerVal?: AccountSettingV2IntegerVal;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#name AccountSettingV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#operational_email_custom_recipient AccountSettingV2#operational_email_custom_recipient}
  */
  readonly operationalEmailCustomRecipient?: AccountSettingV2OperationalEmailCustomRecipient;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#personal_compute AccountSettingV2#personal_compute}
  */
  readonly personalCompute?: AccountSettingV2PersonalCompute;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#restrict_workspace_admins AccountSettingV2#restrict_workspace_admins}
  */
  readonly restrictWorkspaceAdmins?: AccountSettingV2RestrictWorkspaceAdmins;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#string_val AccountSettingV2#string_val}
  */
  readonly stringVal?: AccountSettingV2StringVal;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#workspace_dashboard_theme AccountSettingV2#workspace_dashboard_theme}
  */
  readonly workspaceDashboardTheme?: AccountSettingV2WorkspaceDashboardTheme;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#workspace_label AccountSettingV2#workspace_label}
  */
  readonly workspaceLabel?: AccountSettingV2WorkspaceLabel;
}
export interface AccountSettingV2AibiDashboardEmbeddingAccessPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#access_policy_type AccountSettingV2#access_policy_type}
  */
  readonly accessPolicyType: string;
}

export function accountSettingV2AibiDashboardEmbeddingAccessPolicyToTerraform(struct?: AccountSettingV2AibiDashboardEmbeddingAccessPolicy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_policy_type: cdktn.stringToTerraform(struct!.accessPolicyType),
  }
}


export function accountSettingV2AibiDashboardEmbeddingAccessPolicyToHclTerraform(struct?: AccountSettingV2AibiDashboardEmbeddingAccessPolicy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    access_policy_type: {
      value: cdktn.stringToHclTerraform(struct!.accessPolicyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2AibiDashboardEmbeddingAccessPolicy | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessPolicyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessPolicyType = this._accessPolicyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2AibiDashboardEmbeddingAccessPolicy | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessPolicyType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessPolicyType = value.accessPolicyType;
    }
  }

  // access_policy_type - computed: false, optional: false, required: true
  private _accessPolicyType?: string; 
  public get accessPolicyType() {
    return this.getStringAttribute('access_policy_type');
  }
  public set accessPolicyType(value: string) {
    this._accessPolicyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPolicyTypeInput() {
    return this._accessPolicyType;
  }
}
export interface AccountSettingV2AibiDashboardEmbeddingApprovedDomains {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#approved_domains AccountSettingV2#approved_domains}
  */
  readonly approvedDomains?: string[];
}

export function accountSettingV2AibiDashboardEmbeddingApprovedDomainsToTerraform(struct?: AccountSettingV2AibiDashboardEmbeddingApprovedDomains | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    approved_domains: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.approvedDomains),
  }
}


export function accountSettingV2AibiDashboardEmbeddingApprovedDomainsToHclTerraform(struct?: AccountSettingV2AibiDashboardEmbeddingApprovedDomains | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    approved_domains: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.approvedDomains),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2AibiDashboardEmbeddingApprovedDomains | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._approvedDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.approvedDomains = this._approvedDomains;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2AibiDashboardEmbeddingApprovedDomains | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._approvedDomains = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._approvedDomains = value.approvedDomains;
    }
  }

  // approved_domains - computed: false, optional: true, required: false
  private _approvedDomains?: string[]; 
  public get approvedDomains() {
    return this.getListAttribute('approved_domains');
  }
  public set approvedDomains(value: string[]) {
    this._approvedDomains = value;
  }
  public resetApprovedDomains() {
    this._approvedDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvedDomainsInput() {
    return this._approvedDomains;
  }
}
export interface AccountSettingV2AllowedAppsUserApiScopes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#allowed_scopes AccountSettingV2#allowed_scopes}
  */
  readonly allowedScopes?: string[];
}

export function accountSettingV2AllowedAppsUserApiScopesToTerraform(struct?: AccountSettingV2AllowedAppsUserApiScopes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allowed_scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedScopes),
  }
}


export function accountSettingV2AllowedAppsUserApiScopesToHclTerraform(struct?: AccountSettingV2AllowedAppsUserApiScopes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allowed_scopes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedScopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2AllowedAppsUserApiScopesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2AllowedAppsUserApiScopes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedScopes = this._allowedScopes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2AllowedAppsUserApiScopes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedScopes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedScopes = value.allowedScopes;
    }
  }

  // allowed_scopes - computed: false, optional: true, required: false
  private _allowedScopes?: string[]; 
  public get allowedScopes() {
    return this.getListAttribute('allowed_scopes');
  }
  public set allowedScopes(value: string[]) {
    this._allowedScopes = value;
  }
  public resetAllowedScopes() {
    this._allowedScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedScopesInput() {
    return this._allowedScopes;
  }
}
export interface AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#forced_for_compliance_mode AccountSettingV2#forced_for_compliance_mode}
  */
  readonly forcedForComplianceMode?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#unavailable_for_disabled_entitlement AccountSettingV2#unavailable_for_disabled_entitlement}
  */
  readonly unavailableForDisabledEntitlement?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#unavailable_for_non_enterprise_tier AccountSettingV2#unavailable_for_non_enterprise_tier}
  */
  readonly unavailableForNonEnterpriseTier?: boolean | cdktn.IResolvable;
}

export function accountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsToTerraform(struct?: AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    forced_for_compliance_mode: cdktn.booleanToTerraform(struct!.forcedForComplianceMode),
    unavailable_for_disabled_entitlement: cdktn.booleanToTerraform(struct!.unavailableForDisabledEntitlement),
    unavailable_for_non_enterprise_tier: cdktn.booleanToTerraform(struct!.unavailableForNonEnterpriseTier),
  }
}


export function accountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsToHclTerraform(struct?: AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    forced_for_compliance_mode: {
      value: cdktn.booleanToHclTerraform(struct!.forcedForComplianceMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    unavailable_for_disabled_entitlement: {
      value: cdktn.booleanToHclTerraform(struct!.unavailableForDisabledEntitlement),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    unavailable_for_non_enterprise_tier: {
      value: cdktn.booleanToHclTerraform(struct!.unavailableForNonEnterpriseTier),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forcedForComplianceMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.forcedForComplianceMode = this._forcedForComplianceMode;
    }
    if (this._unavailableForDisabledEntitlement !== undefined) {
      hasAnyValues = true;
      internalValueResult.unavailableForDisabledEntitlement = this._unavailableForDisabledEntitlement;
    }
    if (this._unavailableForNonEnterpriseTier !== undefined) {
      hasAnyValues = true;
      internalValueResult.unavailableForNonEnterpriseTier = this._unavailableForNonEnterpriseTier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._forcedForComplianceMode = undefined;
      this._unavailableForDisabledEntitlement = undefined;
      this._unavailableForNonEnterpriseTier = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._forcedForComplianceMode = value.forcedForComplianceMode;
      this._unavailableForDisabledEntitlement = value.unavailableForDisabledEntitlement;
      this._unavailableForNonEnterpriseTier = value.unavailableForNonEnterpriseTier;
    }
  }

  // forced_for_compliance_mode - computed: false, optional: true, required: false
  private _forcedForComplianceMode?: boolean | cdktn.IResolvable; 
  public get forcedForComplianceMode() {
    return this.getBooleanAttribute('forced_for_compliance_mode');
  }
  public set forcedForComplianceMode(value: boolean | cdktn.IResolvable) {
    this._forcedForComplianceMode = value;
  }
  public resetForcedForComplianceMode() {
    this._forcedForComplianceMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forcedForComplianceModeInput() {
    return this._forcedForComplianceMode;
  }

  // unavailable_for_disabled_entitlement - computed: false, optional: true, required: false
  private _unavailableForDisabledEntitlement?: boolean | cdktn.IResolvable; 
  public get unavailableForDisabledEntitlement() {
    return this.getBooleanAttribute('unavailable_for_disabled_entitlement');
  }
  public set unavailableForDisabledEntitlement(value: boolean | cdktn.IResolvable) {
    this._unavailableForDisabledEntitlement = value;
  }
  public resetUnavailableForDisabledEntitlement() {
    this._unavailableForDisabledEntitlement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unavailableForDisabledEntitlementInput() {
    return this._unavailableForDisabledEntitlement;
  }

  // unavailable_for_non_enterprise_tier - computed: false, optional: true, required: false
  private _unavailableForNonEnterpriseTier?: boolean | cdktn.IResolvable; 
  public get unavailableForNonEnterpriseTier() {
    return this.getBooleanAttribute('unavailable_for_non_enterprise_tier');
  }
  public set unavailableForNonEnterpriseTier(value: boolean | cdktn.IResolvable) {
    this._unavailableForNonEnterpriseTier = value;
  }
  public resetUnavailableForNonEnterpriseTier() {
    this._unavailableForNonEnterpriseTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unavailableForNonEnterpriseTierInput() {
    return this._unavailableForNonEnterpriseTier;
  }
}
export interface AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#hours AccountSettingV2#hours}
  */
  readonly hours?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#minutes AccountSettingV2#minutes}
  */
  readonly minutes?: number;
}

export function accountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeToTerraform(struct?: AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hours: cdktn.numberToTerraform(struct!.hours),
    minutes: cdktn.numberToTerraform(struct!.minutes),
  }
}


export function accountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeToHclTerraform(struct?: AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    hours: {
      value: cdktn.numberToHclTerraform(struct!.hours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minutes: {
      value: cdktn.numberToHclTerraform(struct!.minutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hours !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours;
    }
    if (this._minutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutes = this._minutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hours = undefined;
      this._minutes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hours = value.hours;
      this._minutes = value.minutes;
    }
  }

  // hours - computed: false, optional: true, required: false
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  public resetHours() {
    this._hours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }

  // minutes - computed: false, optional: true, required: false
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  public resetMinutes() {
    this._minutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
  }
}
export interface AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#day_of_week AccountSettingV2#day_of_week}
  */
  readonly dayOfWeek?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#frequency AccountSettingV2#frequency}
  */
  readonly frequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#window_start_time AccountSettingV2#window_start_time}
  */
  readonly windowStartTime?: AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime;
}

export function accountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleToTerraform(struct?: AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    day_of_week: cdktn.stringToTerraform(struct!.dayOfWeek),
    frequency: cdktn.stringToTerraform(struct!.frequency),
    window_start_time: accountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeToTerraform(struct!.windowStartTime),
  }
}


export function accountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleToHclTerraform(struct?: AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    day_of_week: {
      value: cdktn.stringToHclTerraform(struct!.dayOfWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    frequency: {
      value: cdktn.stringToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    window_start_time: {
      value: accountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeToHclTerraform(struct!.windowStartTime),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    if (this._windowStartTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowStartTime = this._windowStartTime?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dayOfWeek = undefined;
      this._frequency = undefined;
      this._windowStartTime.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dayOfWeek = value.dayOfWeek;
      this._frequency = value.frequency;
      this._windowStartTime.internalValue = value.windowStartTime;
    }
  }

  // day_of_week - computed: false, optional: true, required: false
  private _dayOfWeek?: string; 
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
  public set dayOfWeek(value: string) {
    this._dayOfWeek = value;
  }
  public resetDayOfWeek() {
    this._dayOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }

  // frequency - computed: false, optional: true, required: false
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // window_start_time - computed: false, optional: true, required: false
  private _windowStartTime = new AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference(this, "window_start_time");
  public get windowStartTime() {
    return this._windowStartTime;
  }
  public putWindowStartTime(value: AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime) {
    this._windowStartTime.internalValue = value;
  }
  public resetWindowStartTime() {
    this._windowStartTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowStartTimeInput() {
    return this._windowStartTime.internalValue;
  }
}
export interface AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#week_day_based_schedule AccountSettingV2#week_day_based_schedule}
  */
  readonly weekDayBasedSchedule?: AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule;
}

export function accountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowToTerraform(struct?: AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    week_day_based_schedule: accountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleToTerraform(struct!.weekDayBasedSchedule),
  }
}


export function accountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowToHclTerraform(struct?: AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    week_day_based_schedule: {
      value: accountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleToHclTerraform(struct!.weekDayBasedSchedule),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._weekDayBasedSchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekDayBasedSchedule = this._weekDayBasedSchedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._weekDayBasedSchedule.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._weekDayBasedSchedule.internalValue = value.weekDayBasedSchedule;
    }
  }

  // week_day_based_schedule - computed: false, optional: true, required: false
  private _weekDayBasedSchedule = new AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference(this, "week_day_based_schedule");
  public get weekDayBasedSchedule() {
    return this._weekDayBasedSchedule;
  }
  public putWeekDayBasedSchedule(value: AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule) {
    this._weekDayBasedSchedule.internalValue = value;
  }
  public resetWeekDayBasedSchedule() {
    this._weekDayBasedSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekDayBasedScheduleInput() {
    return this._weekDayBasedSchedule.internalValue;
  }
}
export interface AccountSettingV2AutomaticClusterUpdateWorkspace {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#can_toggle AccountSettingV2#can_toggle}
  */
  readonly canToggle?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#enabled AccountSettingV2#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#enablement_details AccountSettingV2#enablement_details}
  */
  readonly enablementDetails?: AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#maintenance_window AccountSettingV2#maintenance_window}
  */
  readonly maintenanceWindow?: AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#restart_even_if_no_updates_available AccountSettingV2#restart_even_if_no_updates_available}
  */
  readonly restartEvenIfNoUpdatesAvailable?: boolean | cdktn.IResolvable;
}

export function accountSettingV2AutomaticClusterUpdateWorkspaceToTerraform(struct?: AccountSettingV2AutomaticClusterUpdateWorkspace | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    can_toggle: cdktn.booleanToTerraform(struct!.canToggle),
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    enablement_details: accountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsToTerraform(struct!.enablementDetails),
    maintenance_window: accountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowToTerraform(struct!.maintenanceWindow),
    restart_even_if_no_updates_available: cdktn.booleanToTerraform(struct!.restartEvenIfNoUpdatesAvailable),
  }
}


export function accountSettingV2AutomaticClusterUpdateWorkspaceToHclTerraform(struct?: AccountSettingV2AutomaticClusterUpdateWorkspace | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    can_toggle: {
      value: cdktn.booleanToHclTerraform(struct!.canToggle),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enablement_details: {
      value: accountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsToHclTerraform(struct!.enablementDetails),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails",
    },
    maintenance_window: {
      value: accountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowToHclTerraform(struct!.maintenanceWindow),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow",
    },
    restart_even_if_no_updates_available: {
      value: cdktn.booleanToHclTerraform(struct!.restartEvenIfNoUpdatesAvailable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2AutomaticClusterUpdateWorkspace | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._canToggle !== undefined) {
      hasAnyValues = true;
      internalValueResult.canToggle = this._canToggle;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._enablementDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablementDetails = this._enablementDetails?.internalValue;
    }
    if (this._maintenanceWindow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceWindow = this._maintenanceWindow?.internalValue;
    }
    if (this._restartEvenIfNoUpdatesAvailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.restartEvenIfNoUpdatesAvailable = this._restartEvenIfNoUpdatesAvailable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2AutomaticClusterUpdateWorkspace | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._canToggle = undefined;
      this._enabled = undefined;
      this._enablementDetails.internalValue = undefined;
      this._maintenanceWindow.internalValue = undefined;
      this._restartEvenIfNoUpdatesAvailable = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._canToggle = value.canToggle;
      this._enabled = value.enabled;
      this._enablementDetails.internalValue = value.enablementDetails;
      this._maintenanceWindow.internalValue = value.maintenanceWindow;
      this._restartEvenIfNoUpdatesAvailable = value.restartEvenIfNoUpdatesAvailable;
    }
  }

  // can_toggle - computed: false, optional: true, required: false
  private _canToggle?: boolean | cdktn.IResolvable; 
  public get canToggle() {
    return this.getBooleanAttribute('can_toggle');
  }
  public set canToggle(value: boolean | cdktn.IResolvable) {
    this._canToggle = value;
  }
  public resetCanToggle() {
    this._canToggle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canToggleInput() {
    return this._canToggle;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // enablement_details - computed: false, optional: true, required: false
  private _enablementDetails = new AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference(this, "enablement_details");
  public get enablementDetails() {
    return this._enablementDetails;
  }
  public putEnablementDetails(value: AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails) {
    this._enablementDetails.internalValue = value;
  }
  public resetEnablementDetails() {
    this._enablementDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablementDetailsInput() {
    return this._enablementDetails.internalValue;
  }

  // maintenance_window - computed: false, optional: true, required: false
  private _maintenanceWindow = new AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference(this, "maintenance_window");
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }
  public putMaintenanceWindow(value: AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow) {
    this._maintenanceWindow.internalValue = value;
  }
  public resetMaintenanceWindow() {
    this._maintenanceWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowInput() {
    return this._maintenanceWindow.internalValue;
  }

  // restart_even_if_no_updates_available - computed: false, optional: true, required: false
  private _restartEvenIfNoUpdatesAvailable?: boolean | cdktn.IResolvable; 
  public get restartEvenIfNoUpdatesAvailable() {
    return this.getBooleanAttribute('restart_even_if_no_updates_available');
  }
  public set restartEvenIfNoUpdatesAvailable(value: boolean | cdktn.IResolvable) {
    this._restartEvenIfNoUpdatesAvailable = value;
  }
  public resetRestartEvenIfNoUpdatesAvailable() {
    this._restartEvenIfNoUpdatesAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartEvenIfNoUpdatesAvailableInput() {
    return this._restartEvenIfNoUpdatesAvailable;
  }
}
export interface AccountSettingV2BooleanVal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#value AccountSettingV2#value}
  */
  readonly value?: boolean | cdktn.IResolvable;
}

export function accountSettingV2BooleanValToTerraform(struct?: AccountSettingV2BooleanVal | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.booleanToTerraform(struct!.value),
  }
}


export function accountSettingV2BooleanValToHclTerraform(struct?: AccountSettingV2BooleanVal | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    value: {
      value: cdktn.booleanToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2BooleanValOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2BooleanVal | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2BooleanVal | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value?: boolean | cdktn.IResolvable; 
  public get value() {
    return this.getBooleanAttribute('value');
  }
  public set value(value: boolean | cdktn.IResolvable) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface AccountSettingV2CollaborationPlatformConnectivity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#connectivity AccountSettingV2#connectivity}
  */
  readonly connectivity: string;
}

export function accountSettingV2CollaborationPlatformConnectivityToTerraform(struct?: AccountSettingV2CollaborationPlatformConnectivity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    connectivity: cdktn.stringToTerraform(struct!.connectivity),
  }
}


export function accountSettingV2CollaborationPlatformConnectivityToHclTerraform(struct?: AccountSettingV2CollaborationPlatformConnectivity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    connectivity: {
      value: cdktn.stringToHclTerraform(struct!.connectivity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2CollaborationPlatformConnectivityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2CollaborationPlatformConnectivity | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectivity !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectivity = this._connectivity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2CollaborationPlatformConnectivity | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectivity = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectivity = value.connectivity;
    }
  }

  // connectivity - computed: false, optional: false, required: true
  private _connectivity?: string; 
  public get connectivity() {
    return this.getStringAttribute('connectivity');
  }
  public set connectivity(value: string) {
    this._connectivity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectivityInput() {
    return this._connectivity;
  }
}
export interface AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#access_policy_type AccountSettingV2#access_policy_type}
  */
  readonly accessPolicyType: string;
}

export function accountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyToTerraform(struct?: AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_policy_type: cdktn.stringToTerraform(struct!.accessPolicyType),
  }
}


export function accountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyToHclTerraform(struct?: AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    access_policy_type: {
      value: cdktn.stringToHclTerraform(struct!.accessPolicyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessPolicyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessPolicyType = this._accessPolicyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessPolicyType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessPolicyType = value.accessPolicyType;
    }
  }

  // access_policy_type - computed: false, optional: false, required: true
  private _accessPolicyType?: string; 
  public get accessPolicyType() {
    return this.getStringAttribute('access_policy_type');
  }
  public set accessPolicyType(value: string) {
    this._accessPolicyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPolicyTypeInput() {
    return this._accessPolicyType;
  }
}
export interface AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#approved_domains AccountSettingV2#approved_domains}
  */
  readonly approvedDomains?: string[];
}

export function accountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsToTerraform(struct?: AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    approved_domains: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.approvedDomains),
  }
}


export function accountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsToHclTerraform(struct?: AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    approved_domains: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.approvedDomains),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._approvedDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.approvedDomains = this._approvedDomains;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._approvedDomains = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._approvedDomains = value.approvedDomains;
    }
  }

  // approved_domains - computed: false, optional: true, required: false
  private _approvedDomains?: string[]; 
  public get approvedDomains() {
    return this.getListAttribute('approved_domains');
  }
  public set approvedDomains(value: string[]) {
    this._approvedDomains = value;
  }
  public resetApprovedDomains() {
    this._approvedDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvedDomainsInput() {
    return this._approvedDomains;
  }
}
export interface AccountSettingV2EffectiveAllowedAppsUserApiScopes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#allowed_scopes AccountSettingV2#allowed_scopes}
  */
  readonly allowedScopes?: string[];
}

export function accountSettingV2EffectiveAllowedAppsUserApiScopesToTerraform(struct?: AccountSettingV2EffectiveAllowedAppsUserApiScopes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allowed_scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedScopes),
  }
}


export function accountSettingV2EffectiveAllowedAppsUserApiScopesToHclTerraform(struct?: AccountSettingV2EffectiveAllowedAppsUserApiScopes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allowed_scopes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedScopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2EffectiveAllowedAppsUserApiScopesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2EffectiveAllowedAppsUserApiScopes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedScopes = this._allowedScopes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2EffectiveAllowedAppsUserApiScopes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedScopes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedScopes = value.allowedScopes;
    }
  }

  // allowed_scopes - computed: true, optional: true, required: false
  private _allowedScopes?: string[]; 
  public get allowedScopes() {
    return this.getListAttribute('allowed_scopes');
  }
  public set allowedScopes(value: string[]) {
    this._allowedScopes = value;
  }
  public resetAllowedScopes() {
    this._allowedScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedScopesInput() {
    return this._allowedScopes;
  }
}
export interface AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#forced_for_compliance_mode AccountSettingV2#forced_for_compliance_mode}
  */
  readonly forcedForComplianceMode?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#unavailable_for_disabled_entitlement AccountSettingV2#unavailable_for_disabled_entitlement}
  */
  readonly unavailableForDisabledEntitlement?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#unavailable_for_non_enterprise_tier AccountSettingV2#unavailable_for_non_enterprise_tier}
  */
  readonly unavailableForNonEnterpriseTier?: boolean | cdktn.IResolvable;
}

export function accountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsToTerraform(struct?: AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    forced_for_compliance_mode: cdktn.booleanToTerraform(struct!.forcedForComplianceMode),
    unavailable_for_disabled_entitlement: cdktn.booleanToTerraform(struct!.unavailableForDisabledEntitlement),
    unavailable_for_non_enterprise_tier: cdktn.booleanToTerraform(struct!.unavailableForNonEnterpriseTier),
  }
}


export function accountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsToHclTerraform(struct?: AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    forced_for_compliance_mode: {
      value: cdktn.booleanToHclTerraform(struct!.forcedForComplianceMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    unavailable_for_disabled_entitlement: {
      value: cdktn.booleanToHclTerraform(struct!.unavailableForDisabledEntitlement),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    unavailable_for_non_enterprise_tier: {
      value: cdktn.booleanToHclTerraform(struct!.unavailableForNonEnterpriseTier),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forcedForComplianceMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.forcedForComplianceMode = this._forcedForComplianceMode;
    }
    if (this._unavailableForDisabledEntitlement !== undefined) {
      hasAnyValues = true;
      internalValueResult.unavailableForDisabledEntitlement = this._unavailableForDisabledEntitlement;
    }
    if (this._unavailableForNonEnterpriseTier !== undefined) {
      hasAnyValues = true;
      internalValueResult.unavailableForNonEnterpriseTier = this._unavailableForNonEnterpriseTier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._forcedForComplianceMode = undefined;
      this._unavailableForDisabledEntitlement = undefined;
      this._unavailableForNonEnterpriseTier = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._forcedForComplianceMode = value.forcedForComplianceMode;
      this._unavailableForDisabledEntitlement = value.unavailableForDisabledEntitlement;
      this._unavailableForNonEnterpriseTier = value.unavailableForNonEnterpriseTier;
    }
  }

  // forced_for_compliance_mode - computed: false, optional: true, required: false
  private _forcedForComplianceMode?: boolean | cdktn.IResolvable; 
  public get forcedForComplianceMode() {
    return this.getBooleanAttribute('forced_for_compliance_mode');
  }
  public set forcedForComplianceMode(value: boolean | cdktn.IResolvable) {
    this._forcedForComplianceMode = value;
  }
  public resetForcedForComplianceMode() {
    this._forcedForComplianceMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forcedForComplianceModeInput() {
    return this._forcedForComplianceMode;
  }

  // unavailable_for_disabled_entitlement - computed: false, optional: true, required: false
  private _unavailableForDisabledEntitlement?: boolean | cdktn.IResolvable; 
  public get unavailableForDisabledEntitlement() {
    return this.getBooleanAttribute('unavailable_for_disabled_entitlement');
  }
  public set unavailableForDisabledEntitlement(value: boolean | cdktn.IResolvable) {
    this._unavailableForDisabledEntitlement = value;
  }
  public resetUnavailableForDisabledEntitlement() {
    this._unavailableForDisabledEntitlement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unavailableForDisabledEntitlementInput() {
    return this._unavailableForDisabledEntitlement;
  }

  // unavailable_for_non_enterprise_tier - computed: false, optional: true, required: false
  private _unavailableForNonEnterpriseTier?: boolean | cdktn.IResolvable; 
  public get unavailableForNonEnterpriseTier() {
    return this.getBooleanAttribute('unavailable_for_non_enterprise_tier');
  }
  public set unavailableForNonEnterpriseTier(value: boolean | cdktn.IResolvable) {
    this._unavailableForNonEnterpriseTier = value;
  }
  public resetUnavailableForNonEnterpriseTier() {
    this._unavailableForNonEnterpriseTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unavailableForNonEnterpriseTierInput() {
    return this._unavailableForNonEnterpriseTier;
  }
}
export interface AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#hours AccountSettingV2#hours}
  */
  readonly hours?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#minutes AccountSettingV2#minutes}
  */
  readonly minutes?: number;
}

export function accountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeToTerraform(struct?: AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hours: cdktn.numberToTerraform(struct!.hours),
    minutes: cdktn.numberToTerraform(struct!.minutes),
  }
}


export function accountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeToHclTerraform(struct?: AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    hours: {
      value: cdktn.numberToHclTerraform(struct!.hours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minutes: {
      value: cdktn.numberToHclTerraform(struct!.minutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hours !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours;
    }
    if (this._minutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutes = this._minutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hours = undefined;
      this._minutes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hours = value.hours;
      this._minutes = value.minutes;
    }
  }

  // hours - computed: false, optional: true, required: false
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  public resetHours() {
    this._hours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }

  // minutes - computed: false, optional: true, required: false
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  public resetMinutes() {
    this._minutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
  }
}
export interface AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#day_of_week AccountSettingV2#day_of_week}
  */
  readonly dayOfWeek?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#frequency AccountSettingV2#frequency}
  */
  readonly frequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#window_start_time AccountSettingV2#window_start_time}
  */
  readonly windowStartTime?: AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime;
}

export function accountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleToTerraform(struct?: AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    day_of_week: cdktn.stringToTerraform(struct!.dayOfWeek),
    frequency: cdktn.stringToTerraform(struct!.frequency),
    window_start_time: accountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeToTerraform(struct!.windowStartTime),
  }
}


export function accountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleToHclTerraform(struct?: AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    day_of_week: {
      value: cdktn.stringToHclTerraform(struct!.dayOfWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    frequency: {
      value: cdktn.stringToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    window_start_time: {
      value: accountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeToHclTerraform(struct!.windowStartTime),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    if (this._windowStartTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowStartTime = this._windowStartTime?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dayOfWeek = undefined;
      this._frequency = undefined;
      this._windowStartTime.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dayOfWeek = value.dayOfWeek;
      this._frequency = value.frequency;
      this._windowStartTime.internalValue = value.windowStartTime;
    }
  }

  // day_of_week - computed: false, optional: true, required: false
  private _dayOfWeek?: string; 
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
  public set dayOfWeek(value: string) {
    this._dayOfWeek = value;
  }
  public resetDayOfWeek() {
    this._dayOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }

  // frequency - computed: false, optional: true, required: false
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // window_start_time - computed: false, optional: true, required: false
  private _windowStartTime = new AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference(this, "window_start_time");
  public get windowStartTime() {
    return this._windowStartTime;
  }
  public putWindowStartTime(value: AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime) {
    this._windowStartTime.internalValue = value;
  }
  public resetWindowStartTime() {
    this._windowStartTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowStartTimeInput() {
    return this._windowStartTime.internalValue;
  }
}
export interface AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#week_day_based_schedule AccountSettingV2#week_day_based_schedule}
  */
  readonly weekDayBasedSchedule?: AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule;
}

export function accountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowToTerraform(struct?: AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    week_day_based_schedule: accountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleToTerraform(struct!.weekDayBasedSchedule),
  }
}


export function accountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowToHclTerraform(struct?: AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    week_day_based_schedule: {
      value: accountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleToHclTerraform(struct!.weekDayBasedSchedule),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._weekDayBasedSchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekDayBasedSchedule = this._weekDayBasedSchedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._weekDayBasedSchedule.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._weekDayBasedSchedule.internalValue = value.weekDayBasedSchedule;
    }
  }

  // week_day_based_schedule - computed: false, optional: true, required: false
  private _weekDayBasedSchedule = new AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference(this, "week_day_based_schedule");
  public get weekDayBasedSchedule() {
    return this._weekDayBasedSchedule;
  }
  public putWeekDayBasedSchedule(value: AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule) {
    this._weekDayBasedSchedule.internalValue = value;
  }
  public resetWeekDayBasedSchedule() {
    this._weekDayBasedSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekDayBasedScheduleInput() {
    return this._weekDayBasedSchedule.internalValue;
  }
}
export interface AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#can_toggle AccountSettingV2#can_toggle}
  */
  readonly canToggle?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#enabled AccountSettingV2#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#enablement_details AccountSettingV2#enablement_details}
  */
  readonly enablementDetails?: AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#maintenance_window AccountSettingV2#maintenance_window}
  */
  readonly maintenanceWindow?: AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#restart_even_if_no_updates_available AccountSettingV2#restart_even_if_no_updates_available}
  */
  readonly restartEvenIfNoUpdatesAvailable?: boolean | cdktn.IResolvable;
}

export function accountSettingV2EffectiveAutomaticClusterUpdateWorkspaceToTerraform(struct?: AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    can_toggle: cdktn.booleanToTerraform(struct!.canToggle),
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    enablement_details: accountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsToTerraform(struct!.enablementDetails),
    maintenance_window: accountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowToTerraform(struct!.maintenanceWindow),
    restart_even_if_no_updates_available: cdktn.booleanToTerraform(struct!.restartEvenIfNoUpdatesAvailable),
  }
}


export function accountSettingV2EffectiveAutomaticClusterUpdateWorkspaceToHclTerraform(struct?: AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    can_toggle: {
      value: cdktn.booleanToHclTerraform(struct!.canToggle),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enablement_details: {
      value: accountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsToHclTerraform(struct!.enablementDetails),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails",
    },
    maintenance_window: {
      value: accountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowToHclTerraform(struct!.maintenanceWindow),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow",
    },
    restart_even_if_no_updates_available: {
      value: cdktn.booleanToHclTerraform(struct!.restartEvenIfNoUpdatesAvailable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._canToggle !== undefined) {
      hasAnyValues = true;
      internalValueResult.canToggle = this._canToggle;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._enablementDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablementDetails = this._enablementDetails?.internalValue;
    }
    if (this._maintenanceWindow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceWindow = this._maintenanceWindow?.internalValue;
    }
    if (this._restartEvenIfNoUpdatesAvailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.restartEvenIfNoUpdatesAvailable = this._restartEvenIfNoUpdatesAvailable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._canToggle = undefined;
      this._enabled = undefined;
      this._enablementDetails.internalValue = undefined;
      this._maintenanceWindow.internalValue = undefined;
      this._restartEvenIfNoUpdatesAvailable = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._canToggle = value.canToggle;
      this._enabled = value.enabled;
      this._enablementDetails.internalValue = value.enablementDetails;
      this._maintenanceWindow.internalValue = value.maintenanceWindow;
      this._restartEvenIfNoUpdatesAvailable = value.restartEvenIfNoUpdatesAvailable;
    }
  }

  // can_toggle - computed: false, optional: true, required: false
  private _canToggle?: boolean | cdktn.IResolvable; 
  public get canToggle() {
    return this.getBooleanAttribute('can_toggle');
  }
  public set canToggle(value: boolean | cdktn.IResolvable) {
    this._canToggle = value;
  }
  public resetCanToggle() {
    this._canToggle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canToggleInput() {
    return this._canToggle;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // enablement_details - computed: false, optional: true, required: false
  private _enablementDetails = new AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference(this, "enablement_details");
  public get enablementDetails() {
    return this._enablementDetails;
  }
  public putEnablementDetails(value: AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails) {
    this._enablementDetails.internalValue = value;
  }
  public resetEnablementDetails() {
    this._enablementDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablementDetailsInput() {
    return this._enablementDetails.internalValue;
  }

  // maintenance_window - computed: false, optional: true, required: false
  private _maintenanceWindow = new AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference(this, "maintenance_window");
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }
  public putMaintenanceWindow(value: AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow) {
    this._maintenanceWindow.internalValue = value;
  }
  public resetMaintenanceWindow() {
    this._maintenanceWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowInput() {
    return this._maintenanceWindow.internalValue;
  }

  // restart_even_if_no_updates_available - computed: false, optional: true, required: false
  private _restartEvenIfNoUpdatesAvailable?: boolean | cdktn.IResolvable; 
  public get restartEvenIfNoUpdatesAvailable() {
    return this.getBooleanAttribute('restart_even_if_no_updates_available');
  }
  public set restartEvenIfNoUpdatesAvailable(value: boolean | cdktn.IResolvable) {
    this._restartEvenIfNoUpdatesAvailable = value;
  }
  public resetRestartEvenIfNoUpdatesAvailable() {
    this._restartEvenIfNoUpdatesAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartEvenIfNoUpdatesAvailableInput() {
    return this._restartEvenIfNoUpdatesAvailable;
  }
}
export interface AccountSettingV2EffectiveBooleanVal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#value AccountSettingV2#value}
  */
  readonly value?: boolean | cdktn.IResolvable;
}

export function accountSettingV2EffectiveBooleanValToTerraform(struct?: AccountSettingV2EffectiveBooleanVal): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.booleanToTerraform(struct!.value),
  }
}


export function accountSettingV2EffectiveBooleanValToHclTerraform(struct?: AccountSettingV2EffectiveBooleanVal): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    value: {
      value: cdktn.booleanToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2EffectiveBooleanValOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2EffectiveBooleanVal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2EffectiveBooleanVal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: true, optional: true, required: false
  private _value?: boolean | cdktn.IResolvable; 
  public get value() {
    return this.getBooleanAttribute('value');
  }
  public set value(value: boolean | cdktn.IResolvable) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface AccountSettingV2EffectiveCollaborationPlatformConnectivity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#connectivity AccountSettingV2#connectivity}
  */
  readonly connectivity: string;
}

export function accountSettingV2EffectiveCollaborationPlatformConnectivityToTerraform(struct?: AccountSettingV2EffectiveCollaborationPlatformConnectivity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    connectivity: cdktn.stringToTerraform(struct!.connectivity),
  }
}


export function accountSettingV2EffectiveCollaborationPlatformConnectivityToHclTerraform(struct?: AccountSettingV2EffectiveCollaborationPlatformConnectivity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    connectivity: {
      value: cdktn.stringToHclTerraform(struct!.connectivity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2EffectiveCollaborationPlatformConnectivityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2EffectiveCollaborationPlatformConnectivity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectivity !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectivity = this._connectivity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2EffectiveCollaborationPlatformConnectivity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectivity = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectivity = value.connectivity;
    }
  }

  // connectivity - computed: true, optional: false, required: true
  private _connectivity?: string; 
  public get connectivity() {
    return this.getStringAttribute('connectivity');
  }
  public set connectivity(value: string) {
    this._connectivity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectivityInput() {
    return this._connectivity;
  }
}
export interface AccountSettingV2EffectiveIntegerVal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#value AccountSettingV2#value}
  */
  readonly value?: number;
}

export function accountSettingV2EffectiveIntegerValToTerraform(struct?: AccountSettingV2EffectiveIntegerVal): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function accountSettingV2EffectiveIntegerValToHclTerraform(struct?: AccountSettingV2EffectiveIntegerVal): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2EffectiveIntegerValOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2EffectiveIntegerVal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2EffectiveIntegerVal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: true, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface AccountSettingV2EffectiveOperationalEmailCustomRecipient {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#email AccountSettingV2#email}
  */
  readonly email?: string;
}

export function accountSettingV2EffectiveOperationalEmailCustomRecipientToTerraform(struct?: AccountSettingV2EffectiveOperationalEmailCustomRecipient): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    email: cdktn.stringToTerraform(struct!.email),
  }
}


export function accountSettingV2EffectiveOperationalEmailCustomRecipientToHclTerraform(struct?: AccountSettingV2EffectiveOperationalEmailCustomRecipient): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    email: {
      value: cdktn.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2EffectiveOperationalEmailCustomRecipientOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2EffectiveOperationalEmailCustomRecipient | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2EffectiveOperationalEmailCustomRecipient | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._email = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._email = value.email;
    }
  }

  // email - computed: true, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }
}
export interface AccountSettingV2EffectivePersonalCompute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#value AccountSettingV2#value}
  */
  readonly value?: string;
}

export function accountSettingV2EffectivePersonalComputeToTerraform(struct?: AccountSettingV2EffectivePersonalCompute | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function accountSettingV2EffectivePersonalComputeToHclTerraform(struct?: AccountSettingV2EffectivePersonalCompute | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2EffectivePersonalComputeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2EffectivePersonalCompute | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2EffectivePersonalCompute | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface AccountSettingV2EffectiveRestrictWorkspaceAdmins {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#disable_gov_tag_creation AccountSettingV2#disable_gov_tag_creation}
  */
  readonly disableGovTagCreation?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#status AccountSettingV2#status}
  */
  readonly status: string;
}

export function accountSettingV2EffectiveRestrictWorkspaceAdminsToTerraform(struct?: AccountSettingV2EffectiveRestrictWorkspaceAdmins | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    disable_gov_tag_creation: cdktn.booleanToTerraform(struct!.disableGovTagCreation),
    status: cdktn.stringToTerraform(struct!.status),
  }
}


export function accountSettingV2EffectiveRestrictWorkspaceAdminsToHclTerraform(struct?: AccountSettingV2EffectiveRestrictWorkspaceAdmins | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    disable_gov_tag_creation: {
      value: cdktn.booleanToHclTerraform(struct!.disableGovTagCreation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    status: {
      value: cdktn.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2EffectiveRestrictWorkspaceAdmins | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableGovTagCreation !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableGovTagCreation = this._disableGovTagCreation;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2EffectiveRestrictWorkspaceAdmins | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableGovTagCreation = undefined;
      this._status = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableGovTagCreation = value.disableGovTagCreation;
      this._status = value.status;
    }
  }

  // disable_gov_tag_creation - computed: false, optional: true, required: false
  private _disableGovTagCreation?: boolean | cdktn.IResolvable; 
  public get disableGovTagCreation() {
    return this.getBooleanAttribute('disable_gov_tag_creation');
  }
  public set disableGovTagCreation(value: boolean | cdktn.IResolvable) {
    this._disableGovTagCreation = value;
  }
  public resetDisableGovTagCreation() {
    this._disableGovTagCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableGovTagCreationInput() {
    return this._disableGovTagCreation;
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface AccountSettingV2EffectiveStringVal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#value AccountSettingV2#value}
  */
  readonly value?: string;
}

export function accountSettingV2EffectiveStringValToTerraform(struct?: AccountSettingV2EffectiveStringVal): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function accountSettingV2EffectiveStringValToHclTerraform(struct?: AccountSettingV2EffectiveStringVal): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2EffectiveStringValOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2EffectiveStringVal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2EffectiveStringVal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface AccountSettingV2EffectiveWorkspaceDashboardThemeAxisLineColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#dark AccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#light AccountSettingV2#light}
  */
  readonly light?: string;
}

export function accountSettingV2EffectiveWorkspaceDashboardThemeAxisLineColorToTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeAxisLineColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function accountSettingV2EffectiveWorkspaceDashboardThemeAxisLineColorToHclTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeAxisLineColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dark: {
      value: cdktn.stringToHclTerraform(struct!.dark),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    light: {
      value: cdktn.stringToHclTerraform(struct!.light),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2EffectiveWorkspaceDashboardThemeAxisLineColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2EffectiveWorkspaceDashboardThemeAxisLineColor | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dark !== undefined) {
      hasAnyValues = true;
      internalValueResult.dark = this._dark;
    }
    if (this._light !== undefined) {
      hasAnyValues = true;
      internalValueResult.light = this._light;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2EffectiveWorkspaceDashboardThemeAxisLineColor | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dark = undefined;
      this._light = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dark = value.dark;
      this._light = value.light;
    }
  }

  // dark - computed: true, optional: true, required: false
  private _dark?: string; 
  public get dark() {
    return this.getStringAttribute('dark');
  }
  public set dark(value: string) {
    this._dark = value;
  }
  public resetDark() {
    this._dark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get darkInput() {
    return this._dark;
  }

  // light - computed: true, optional: true, required: false
  private _light?: string; 
  public get light() {
    return this.getStringAttribute('light');
  }
  public set light(value: string) {
    this._light = value;
  }
  public resetLight() {
    this._light = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lightInput() {
    return this._light;
  }
}
export interface AccountSettingV2EffectiveWorkspaceDashboardThemeCanvasBackgroundColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#dark AccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#light AccountSettingV2#light}
  */
  readonly light?: string;
}

export function accountSettingV2EffectiveWorkspaceDashboardThemeCanvasBackgroundColorToTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeCanvasBackgroundColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function accountSettingV2EffectiveWorkspaceDashboardThemeCanvasBackgroundColorToHclTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeCanvasBackgroundColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dark: {
      value: cdktn.stringToHclTerraform(struct!.dark),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    light: {
      value: cdktn.stringToHclTerraform(struct!.light),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2EffectiveWorkspaceDashboardThemeCanvasBackgroundColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2EffectiveWorkspaceDashboardThemeCanvasBackgroundColor | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dark !== undefined) {
      hasAnyValues = true;
      internalValueResult.dark = this._dark;
    }
    if (this._light !== undefined) {
      hasAnyValues = true;
      internalValueResult.light = this._light;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2EffectiveWorkspaceDashboardThemeCanvasBackgroundColor | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dark = undefined;
      this._light = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dark = value.dark;
      this._light = value.light;
    }
  }

  // dark - computed: true, optional: true, required: false
  private _dark?: string; 
  public get dark() {
    return this.getStringAttribute('dark');
  }
  public set dark(value: string) {
    this._dark = value;
  }
  public resetDark() {
    this._dark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get darkInput() {
    return this._dark;
  }

  // light - computed: true, optional: true, required: false
  private _light?: string; 
  public get light() {
    return this.getStringAttribute('light');
  }
  public set light(value: string) {
    this._light = value;
  }
  public resetLight() {
    this._light = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lightInput() {
    return this._light;
  }
}
export interface AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEnd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#dark AccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#light AccountSettingV2#light}
  */
  readonly light?: string;
}

export function accountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEndToTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEnd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function accountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEndToHclTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEnd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dark: {
      value: cdktn.stringToHclTerraform(struct!.dark),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    light: {
      value: cdktn.stringToHclTerraform(struct!.light),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEndOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEnd | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dark !== undefined) {
      hasAnyValues = true;
      internalValueResult.dark = this._dark;
    }
    if (this._light !== undefined) {
      hasAnyValues = true;
      internalValueResult.light = this._light;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEnd | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dark = undefined;
      this._light = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dark = value.dark;
      this._light = value.light;
    }
  }

  // dark - computed: true, optional: true, required: false
  private _dark?: string; 
  public get dark() {
    return this.getStringAttribute('dark');
  }
  public set dark(value: string) {
    this._dark = value;
  }
  public resetDark() {
    this._dark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get darkInput() {
    return this._dark;
  }

  // light - computed: true, optional: true, required: false
  private _light?: string; 
  public get light() {
    return this.getStringAttribute('light');
  }
  public set light(value: string) {
    this._light = value;
  }
  public resetLight() {
    this._light = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lightInput() {
    return this._light;
  }
}
export interface AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMid {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#dark AccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#light AccountSettingV2#light}
  */
  readonly light?: string;
}

export function accountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMidToTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMid | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function accountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMidToHclTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMid | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dark: {
      value: cdktn.stringToHclTerraform(struct!.dark),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    light: {
      value: cdktn.stringToHclTerraform(struct!.light),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMidOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMid | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dark !== undefined) {
      hasAnyValues = true;
      internalValueResult.dark = this._dark;
    }
    if (this._light !== undefined) {
      hasAnyValues = true;
      internalValueResult.light = this._light;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMid | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dark = undefined;
      this._light = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dark = value.dark;
      this._light = value.light;
    }
  }

  // dark - computed: true, optional: true, required: false
  private _dark?: string; 
  public get dark() {
    return this.getStringAttribute('dark');
  }
  public set dark(value: string) {
    this._dark = value;
  }
  public resetDark() {
    this._dark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get darkInput() {
    return this._dark;
  }

  // light - computed: true, optional: true, required: false
  private _light?: string; 
  public get light() {
    return this.getStringAttribute('light');
  }
  public set light(value: string) {
    this._light = value;
  }
  public resetLight() {
    this._light = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lightInput() {
    return this._light;
  }
}
export interface AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStart {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#dark AccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#light AccountSettingV2#light}
  */
  readonly light?: string;
}

export function accountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStartToTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStart | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function accountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStartToHclTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStart | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dark: {
      value: cdktn.stringToHclTerraform(struct!.dark),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    light: {
      value: cdktn.stringToHclTerraform(struct!.light),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStartOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStart | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dark !== undefined) {
      hasAnyValues = true;
      internalValueResult.dark = this._dark;
    }
    if (this._light !== undefined) {
      hasAnyValues = true;
      internalValueResult.light = this._light;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStart | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dark = undefined;
      this._light = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dark = value.dark;
      this._light = value.light;
    }
  }

  // dark - computed: true, optional: true, required: false
  private _dark?: string; 
  public get dark() {
    return this.getStringAttribute('dark');
  }
  public set dark(value: string) {
    this._dark = value;
  }
  public resetDark() {
    this._dark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get darkInput() {
    return this._dark;
  }

  // light - computed: true, optional: true, required: false
  private _light?: string; 
  public get light() {
    return this.getStringAttribute('light');
  }
  public set light(value: string) {
    this._light = value;
  }
  public resetLight() {
    this._light = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lightInput() {
    return this._light;
  }
}
export interface AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDiverging {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#end AccountSettingV2#end}
  */
  readonly end?: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEnd;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#mid AccountSettingV2#mid}
  */
  readonly mid?: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMid;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#start AccountSettingV2#start}
  */
  readonly start?: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStart;
}

export function accountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingToTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDiverging | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end: accountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEndToTerraform(struct!.end),
    mid: accountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMidToTerraform(struct!.mid),
    start: accountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStartToTerraform(struct!.start),
  }
}


export function accountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingToHclTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDiverging | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end: {
      value: accountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEndToHclTerraform(struct!.end),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEnd",
    },
    mid: {
      value: accountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMidToHclTerraform(struct!.mid),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMid",
    },
    start: {
      value: accountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStartToHclTerraform(struct!.start),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStart",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDiverging | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end?.internalValue;
    }
    if (this._mid?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mid = this._mid?.internalValue;
    }
    if (this._start?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDiverging | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end.internalValue = undefined;
      this._mid.internalValue = undefined;
      this._start.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end.internalValue = value.end;
      this._mid.internalValue = value.mid;
      this._start.internalValue = value.start;
    }
  }

  // end - computed: true, optional: true, required: false
  private _end = new AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEndOutputReference(this, "end");
  public get end() {
    return this._end;
  }
  public putEnd(value: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEnd) {
    this._end.internalValue = value;
  }
  public resetEnd() {
    this._end.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end.internalValue;
  }

  // mid - computed: true, optional: true, required: false
  private _mid = new AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMidOutputReference(this, "mid");
  public get mid() {
    return this._mid;
  }
  public putMid(value: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMid) {
    this._mid.internalValue = value;
  }
  public resetMid() {
    this._mid.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get midInput() {
    return this._mid.internalValue;
  }

  // start - computed: true, optional: true, required: false
  private _start = new AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStartOutputReference(this, "start");
  public get start() {
    return this._start;
  }
  public putStart(value: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStart) {
    this._start.internalValue = value;
  }
  public resetStart() {
    this._start.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start.internalValue;
  }
}
export interface AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEnd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#dark AccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#light AccountSettingV2#light}
  */
  readonly light?: string;
}

export function accountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEndToTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEnd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function accountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEndToHclTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEnd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dark: {
      value: cdktn.stringToHclTerraform(struct!.dark),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    light: {
      value: cdktn.stringToHclTerraform(struct!.light),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEndOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEnd | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dark !== undefined) {
      hasAnyValues = true;
      internalValueResult.dark = this._dark;
    }
    if (this._light !== undefined) {
      hasAnyValues = true;
      internalValueResult.light = this._light;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEnd | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dark = undefined;
      this._light = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dark = value.dark;
      this._light = value.light;
    }
  }

  // dark - computed: true, optional: true, required: false
  private _dark?: string; 
  public get dark() {
    return this.getStringAttribute('dark');
  }
  public set dark(value: string) {
    this._dark = value;
  }
  public resetDark() {
    this._dark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get darkInput() {
    return this._dark;
  }

  // light - computed: true, optional: true, required: false
  private _light?: string; 
  public get light() {
    return this.getStringAttribute('light');
  }
  public set light(value: string) {
    this._light = value;
  }
  public resetLight() {
    this._light = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lightInput() {
    return this._light;
  }
}
export interface AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStart {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#dark AccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#light AccountSettingV2#light}
  */
  readonly light?: string;
}

export function accountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStartToTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStart | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function accountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStartToHclTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStart | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dark: {
      value: cdktn.stringToHclTerraform(struct!.dark),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    light: {
      value: cdktn.stringToHclTerraform(struct!.light),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStartOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStart | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dark !== undefined) {
      hasAnyValues = true;
      internalValueResult.dark = this._dark;
    }
    if (this._light !== undefined) {
      hasAnyValues = true;
      internalValueResult.light = this._light;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStart | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dark = undefined;
      this._light = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dark = value.dark;
      this._light = value.light;
    }
  }

  // dark - computed: true, optional: true, required: false
  private _dark?: string; 
  public get dark() {
    return this.getStringAttribute('dark');
  }
  public set dark(value: string) {
    this._dark = value;
  }
  public resetDark() {
    this._dark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get darkInput() {
    return this._dark;
  }

  // light - computed: true, optional: true, required: false
  private _light?: string; 
  public get light() {
    return this.getStringAttribute('light');
  }
  public set light(value: string) {
    this._light = value;
  }
  public resetLight() {
    this._light = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lightInput() {
    return this._light;
  }
}
export interface AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequential {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#end AccountSettingV2#end}
  */
  readonly end?: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEnd;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#start AccountSettingV2#start}
  */
  readonly start?: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStart;
}

export function accountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialToTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequential | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end: accountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEndToTerraform(struct!.end),
    start: accountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStartToTerraform(struct!.start),
  }
}


export function accountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialToHclTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequential | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end: {
      value: accountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEndToHclTerraform(struct!.end),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEnd",
    },
    start: {
      value: accountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStartToHclTerraform(struct!.start),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStart",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequential | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end?.internalValue;
    }
    if (this._start?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequential | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end.internalValue = undefined;
      this._start.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end.internalValue = value.end;
      this._start.internalValue = value.start;
    }
  }

  // end - computed: true, optional: true, required: false
  private _end = new AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEndOutputReference(this, "end");
  public get end() {
    return this._end;
  }
  public putEnd(value: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEnd) {
    this._end.internalValue = value;
  }
  public resetEnd() {
    this._end.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end.internalValue;
  }

  // start - computed: true, optional: true, required: false
  private _start = new AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStartOutputReference(this, "start");
  public get start() {
    return this._start;
  }
  public putStart(value: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStart) {
    this._start.internalValue = value;
  }
  public resetStart() {
    this._start.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start.internalValue;
  }
}
export interface AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkMode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#color AccountSettingV2#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#color_scheme AccountSettingV2#color_scheme}
  */
  readonly colorScheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#custom_diverging AccountSettingV2#custom_diverging}
  */
  readonly customDiverging?: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDiverging;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#custom_sequential AccountSettingV2#custom_sequential}
  */
  readonly customSequential?: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequential;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#from_categorical_index AccountSettingV2#from_categorical_index}
  */
  readonly fromCategoricalIndex?: number;
}

export function accountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeToTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkMode | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    color: cdktn.stringToTerraform(struct!.color),
    color_scheme: cdktn.stringToTerraform(struct!.colorScheme),
    custom_diverging: accountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingToTerraform(struct!.customDiverging),
    custom_sequential: accountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialToTerraform(struct!.customSequential),
    from_categorical_index: cdktn.numberToTerraform(struct!.fromCategoricalIndex),
  }
}


export function accountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeToHclTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkMode | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    color: {
      value: cdktn.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    color_scheme: {
      value: cdktn.stringToHclTerraform(struct!.colorScheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_diverging: {
      value: accountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingToHclTerraform(struct!.customDiverging),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDiverging",
    },
    custom_sequential: {
      value: accountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialToHclTerraform(struct!.customSequential),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequential",
    },
    from_categorical_index: {
      value: cdktn.numberToHclTerraform(struct!.fromCategoricalIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkMode | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._colorScheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.colorScheme = this._colorScheme;
    }
    if (this._customDiverging?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customDiverging = this._customDiverging?.internalValue;
    }
    if (this._customSequential?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSequential = this._customSequential?.internalValue;
    }
    if (this._fromCategoricalIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromCategoricalIndex = this._fromCategoricalIndex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkMode | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._colorScheme = undefined;
      this._customDiverging.internalValue = undefined;
      this._customSequential.internalValue = undefined;
      this._fromCategoricalIndex = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._colorScheme = value.colorScheme;
      this._customDiverging.internalValue = value.customDiverging;
      this._customSequential.internalValue = value.customSequential;
      this._fromCategoricalIndex = value.fromCategoricalIndex;
    }
  }

  // color - computed: true, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // color_scheme - computed: true, optional: true, required: false
  private _colorScheme?: string; 
  public get colorScheme() {
    return this.getStringAttribute('color_scheme');
  }
  public set colorScheme(value: string) {
    this._colorScheme = value;
  }
  public resetColorScheme() {
    this._colorScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorSchemeInput() {
    return this._colorScheme;
  }

  // custom_diverging - computed: true, optional: true, required: false
  private _customDiverging = new AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingOutputReference(this, "custom_diverging");
  public get customDiverging() {
    return this._customDiverging;
  }
  public putCustomDiverging(value: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDiverging) {
    this._customDiverging.internalValue = value;
  }
  public resetCustomDiverging() {
    this._customDiverging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDivergingInput() {
    return this._customDiverging.internalValue;
  }

  // custom_sequential - computed: true, optional: true, required: false
  private _customSequential = new AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialOutputReference(this, "custom_sequential");
  public get customSequential() {
    return this._customSequential;
  }
  public putCustomSequential(value: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequential) {
    this._customSequential.internalValue = value;
  }
  public resetCustomSequential() {
    this._customSequential.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSequentialInput() {
    return this._customSequential.internalValue;
  }

  // from_categorical_index - computed: true, optional: true, required: false
  private _fromCategoricalIndex?: number; 
  public get fromCategoricalIndex() {
    return this.getNumberAttribute('from_categorical_index');
  }
  public set fromCategoricalIndex(value: number) {
    this._fromCategoricalIndex = value;
  }
  public resetFromCategoricalIndex() {
    this._fromCategoricalIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromCategoricalIndexInput() {
    return this._fromCategoricalIndex;
  }
}
export interface AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEnd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#dark AccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#light AccountSettingV2#light}
  */
  readonly light?: string;
}

export function accountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEndToTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEnd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function accountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEndToHclTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEnd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dark: {
      value: cdktn.stringToHclTerraform(struct!.dark),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    light: {
      value: cdktn.stringToHclTerraform(struct!.light),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEndOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEnd | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dark !== undefined) {
      hasAnyValues = true;
      internalValueResult.dark = this._dark;
    }
    if (this._light !== undefined) {
      hasAnyValues = true;
      internalValueResult.light = this._light;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEnd | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dark = undefined;
      this._light = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dark = value.dark;
      this._light = value.light;
    }
  }

  // dark - computed: true, optional: true, required: false
  private _dark?: string; 
  public get dark() {
    return this.getStringAttribute('dark');
  }
  public set dark(value: string) {
    this._dark = value;
  }
  public resetDark() {
    this._dark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get darkInput() {
    return this._dark;
  }

  // light - computed: true, optional: true, required: false
  private _light?: string; 
  public get light() {
    return this.getStringAttribute('light');
  }
  public set light(value: string) {
    this._light = value;
  }
  public resetLight() {
    this._light = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lightInput() {
    return this._light;
  }
}
export interface AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMid {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#dark AccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#light AccountSettingV2#light}
  */
  readonly light?: string;
}

export function accountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMidToTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMid | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function accountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMidToHclTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMid | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dark: {
      value: cdktn.stringToHclTerraform(struct!.dark),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    light: {
      value: cdktn.stringToHclTerraform(struct!.light),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMidOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMid | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dark !== undefined) {
      hasAnyValues = true;
      internalValueResult.dark = this._dark;
    }
    if (this._light !== undefined) {
      hasAnyValues = true;
      internalValueResult.light = this._light;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMid | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dark = undefined;
      this._light = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dark = value.dark;
      this._light = value.light;
    }
  }

  // dark - computed: true, optional: true, required: false
  private _dark?: string; 
  public get dark() {
    return this.getStringAttribute('dark');
  }
  public set dark(value: string) {
    this._dark = value;
  }
  public resetDark() {
    this._dark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get darkInput() {
    return this._dark;
  }

  // light - computed: true, optional: true, required: false
  private _light?: string; 
  public get light() {
    return this.getStringAttribute('light');
  }
  public set light(value: string) {
    this._light = value;
  }
  public resetLight() {
    this._light = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lightInput() {
    return this._light;
  }
}
export interface AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStart {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#dark AccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#light AccountSettingV2#light}
  */
  readonly light?: string;
}

export function accountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStartToTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStart | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function accountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStartToHclTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStart | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dark: {
      value: cdktn.stringToHclTerraform(struct!.dark),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    light: {
      value: cdktn.stringToHclTerraform(struct!.light),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStartOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStart | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dark !== undefined) {
      hasAnyValues = true;
      internalValueResult.dark = this._dark;
    }
    if (this._light !== undefined) {
      hasAnyValues = true;
      internalValueResult.light = this._light;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStart | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dark = undefined;
      this._light = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dark = value.dark;
      this._light = value.light;
    }
  }

  // dark - computed: true, optional: true, required: false
  private _dark?: string; 
  public get dark() {
    return this.getStringAttribute('dark');
  }
  public set dark(value: string) {
    this._dark = value;
  }
  public resetDark() {
    this._dark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get darkInput() {
    return this._dark;
  }

  // light - computed: true, optional: true, required: false
  private _light?: string; 
  public get light() {
    return this.getStringAttribute('light');
  }
  public set light(value: string) {
    this._light = value;
  }
  public resetLight() {
    this._light = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lightInput() {
    return this._light;
  }
}
export interface AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDiverging {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#end AccountSettingV2#end}
  */
  readonly end?: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEnd;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#mid AccountSettingV2#mid}
  */
  readonly mid?: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMid;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#start AccountSettingV2#start}
  */
  readonly start?: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStart;
}

export function accountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingToTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDiverging | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end: accountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEndToTerraform(struct!.end),
    mid: accountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMidToTerraform(struct!.mid),
    start: accountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStartToTerraform(struct!.start),
  }
}


export function accountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingToHclTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDiverging | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end: {
      value: accountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEndToHclTerraform(struct!.end),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEnd",
    },
    mid: {
      value: accountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMidToHclTerraform(struct!.mid),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMid",
    },
    start: {
      value: accountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStartToHclTerraform(struct!.start),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStart",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDiverging | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end?.internalValue;
    }
    if (this._mid?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mid = this._mid?.internalValue;
    }
    if (this._start?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDiverging | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end.internalValue = undefined;
      this._mid.internalValue = undefined;
      this._start.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end.internalValue = value.end;
      this._mid.internalValue = value.mid;
      this._start.internalValue = value.start;
    }
  }

  // end - computed: true, optional: true, required: false
  private _end = new AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEndOutputReference(this, "end");
  public get end() {
    return this._end;
  }
  public putEnd(value: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEnd) {
    this._end.internalValue = value;
  }
  public resetEnd() {
    this._end.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end.internalValue;
  }

  // mid - computed: true, optional: true, required: false
  private _mid = new AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMidOutputReference(this, "mid");
  public get mid() {
    return this._mid;
  }
  public putMid(value: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMid) {
    this._mid.internalValue = value;
  }
  public resetMid() {
    this._mid.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get midInput() {
    return this._mid.internalValue;
  }

  // start - computed: true, optional: true, required: false
  private _start = new AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStartOutputReference(this, "start");
  public get start() {
    return this._start;
  }
  public putStart(value: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStart) {
    this._start.internalValue = value;
  }
  public resetStart() {
    this._start.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start.internalValue;
  }
}
export interface AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEnd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#dark AccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#light AccountSettingV2#light}
  */
  readonly light?: string;
}

export function accountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEndToTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEnd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function accountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEndToHclTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEnd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dark: {
      value: cdktn.stringToHclTerraform(struct!.dark),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    light: {
      value: cdktn.stringToHclTerraform(struct!.light),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEndOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEnd | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dark !== undefined) {
      hasAnyValues = true;
      internalValueResult.dark = this._dark;
    }
    if (this._light !== undefined) {
      hasAnyValues = true;
      internalValueResult.light = this._light;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEnd | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dark = undefined;
      this._light = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dark = value.dark;
      this._light = value.light;
    }
  }

  // dark - computed: true, optional: true, required: false
  private _dark?: string; 
  public get dark() {
    return this.getStringAttribute('dark');
  }
  public set dark(value: string) {
    this._dark = value;
  }
  public resetDark() {
    this._dark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get darkInput() {
    return this._dark;
  }

  // light - computed: true, optional: true, required: false
  private _light?: string; 
  public get light() {
    return this.getStringAttribute('light');
  }
  public set light(value: string) {
    this._light = value;
  }
  public resetLight() {
    this._light = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lightInput() {
    return this._light;
  }
}
export interface AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStart {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#dark AccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#light AccountSettingV2#light}
  */
  readonly light?: string;
}

export function accountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStartToTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStart | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function accountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStartToHclTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStart | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dark: {
      value: cdktn.stringToHclTerraform(struct!.dark),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    light: {
      value: cdktn.stringToHclTerraform(struct!.light),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStartOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStart | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dark !== undefined) {
      hasAnyValues = true;
      internalValueResult.dark = this._dark;
    }
    if (this._light !== undefined) {
      hasAnyValues = true;
      internalValueResult.light = this._light;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStart | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dark = undefined;
      this._light = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dark = value.dark;
      this._light = value.light;
    }
  }

  // dark - computed: true, optional: true, required: false
  private _dark?: string; 
  public get dark() {
    return this.getStringAttribute('dark');
  }
  public set dark(value: string) {
    this._dark = value;
  }
  public resetDark() {
    this._dark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get darkInput() {
    return this._dark;
  }

  // light - computed: true, optional: true, required: false
  private _light?: string; 
  public get light() {
    return this.getStringAttribute('light');
  }
  public set light(value: string) {
    this._light = value;
  }
  public resetLight() {
    this._light = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lightInput() {
    return this._light;
  }
}
export interface AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequential {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#end AccountSettingV2#end}
  */
  readonly end?: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEnd;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#start AccountSettingV2#start}
  */
  readonly start?: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStart;
}

export function accountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialToTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequential | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end: accountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEndToTerraform(struct!.end),
    start: accountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStartToTerraform(struct!.start),
  }
}


export function accountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialToHclTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequential | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end: {
      value: accountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEndToHclTerraform(struct!.end),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEnd",
    },
    start: {
      value: accountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStartToHclTerraform(struct!.start),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStart",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequential | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end?.internalValue;
    }
    if (this._start?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequential | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end.internalValue = undefined;
      this._start.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end.internalValue = value.end;
      this._start.internalValue = value.start;
    }
  }

  // end - computed: true, optional: true, required: false
  private _end = new AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEndOutputReference(this, "end");
  public get end() {
    return this._end;
  }
  public putEnd(value: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEnd) {
    this._end.internalValue = value;
  }
  public resetEnd() {
    this._end.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end.internalValue;
  }

  // start - computed: true, optional: true, required: false
  private _start = new AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStartOutputReference(this, "start");
  public get start() {
    return this._start;
  }
  public putStart(value: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStart) {
    this._start.internalValue = value;
  }
  public resetStart() {
    this._start.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start.internalValue;
  }
}
export interface AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightMode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#color AccountSettingV2#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#color_scheme AccountSettingV2#color_scheme}
  */
  readonly colorScheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#custom_diverging AccountSettingV2#custom_diverging}
  */
  readonly customDiverging?: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDiverging;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#custom_sequential AccountSettingV2#custom_sequential}
  */
  readonly customSequential?: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequential;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#from_categorical_index AccountSettingV2#from_categorical_index}
  */
  readonly fromCategoricalIndex?: number;
}

export function accountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeToTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightMode | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    color: cdktn.stringToTerraform(struct!.color),
    color_scheme: cdktn.stringToTerraform(struct!.colorScheme),
    custom_diverging: accountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingToTerraform(struct!.customDiverging),
    custom_sequential: accountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialToTerraform(struct!.customSequential),
    from_categorical_index: cdktn.numberToTerraform(struct!.fromCategoricalIndex),
  }
}


export function accountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeToHclTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightMode | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    color: {
      value: cdktn.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    color_scheme: {
      value: cdktn.stringToHclTerraform(struct!.colorScheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_diverging: {
      value: accountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingToHclTerraform(struct!.customDiverging),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDiverging",
    },
    custom_sequential: {
      value: accountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialToHclTerraform(struct!.customSequential),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequential",
    },
    from_categorical_index: {
      value: cdktn.numberToHclTerraform(struct!.fromCategoricalIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightMode | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._colorScheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.colorScheme = this._colorScheme;
    }
    if (this._customDiverging?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customDiverging = this._customDiverging?.internalValue;
    }
    if (this._customSequential?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSequential = this._customSequential?.internalValue;
    }
    if (this._fromCategoricalIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromCategoricalIndex = this._fromCategoricalIndex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightMode | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._colorScheme = undefined;
      this._customDiverging.internalValue = undefined;
      this._customSequential.internalValue = undefined;
      this._fromCategoricalIndex = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._colorScheme = value.colorScheme;
      this._customDiverging.internalValue = value.customDiverging;
      this._customSequential.internalValue = value.customSequential;
      this._fromCategoricalIndex = value.fromCategoricalIndex;
    }
  }

  // color - computed: true, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // color_scheme - computed: true, optional: true, required: false
  private _colorScheme?: string; 
  public get colorScheme() {
    return this.getStringAttribute('color_scheme');
  }
  public set colorScheme(value: string) {
    this._colorScheme = value;
  }
  public resetColorScheme() {
    this._colorScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorSchemeInput() {
    return this._colorScheme;
  }

  // custom_diverging - computed: true, optional: true, required: false
  private _customDiverging = new AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingOutputReference(this, "custom_diverging");
  public get customDiverging() {
    return this._customDiverging;
  }
  public putCustomDiverging(value: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDiverging) {
    this._customDiverging.internalValue = value;
  }
  public resetCustomDiverging() {
    this._customDiverging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDivergingInput() {
    return this._customDiverging.internalValue;
  }

  // custom_sequential - computed: true, optional: true, required: false
  private _customSequential = new AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialOutputReference(this, "custom_sequential");
  public get customSequential() {
    return this._customSequential;
  }
  public putCustomSequential(value: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequential) {
    this._customSequential.internalValue = value;
  }
  public resetCustomSequential() {
    this._customSequential.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSequentialInput() {
    return this._customSequential.internalValue;
  }

  // from_categorical_index - computed: true, optional: true, required: false
  private _fromCategoricalIndex?: number; 
  public get fromCategoricalIndex() {
    return this.getNumberAttribute('from_categorical_index');
  }
  public set fromCategoricalIndex(value: number) {
    this._fromCategoricalIndex = value;
  }
  public resetFromCategoricalIndex() {
    this._fromCategoricalIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromCategoricalIndexInput() {
    return this._fromCategoricalIndex;
  }
}
export interface AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradient {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#dark_mode AccountSettingV2#dark_mode}
  */
  readonly darkMode?: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkMode;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#light_mode AccountSettingV2#light_mode}
  */
  readonly lightMode?: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightMode;
}

export function accountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientToTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradient | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark_mode: accountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeToTerraform(struct!.darkMode),
    light_mode: accountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeToTerraform(struct!.lightMode),
  }
}


export function accountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientToHclTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradient | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dark_mode: {
      value: accountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeToHclTerraform(struct!.darkMode),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkMode",
    },
    light_mode: {
      value: accountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeToHclTerraform(struct!.lightMode),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightMode",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradient | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._darkMode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.darkMode = this._darkMode?.internalValue;
    }
    if (this._lightMode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lightMode = this._lightMode?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradient | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._darkMode.internalValue = undefined;
      this._lightMode.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._darkMode.internalValue = value.darkMode;
      this._lightMode.internalValue = value.lightMode;
    }
  }

  // dark_mode - computed: true, optional: true, required: false
  private _darkMode = new AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeOutputReference(this, "dark_mode");
  public get darkMode() {
    return this._darkMode;
  }
  public putDarkMode(value: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkMode) {
    this._darkMode.internalValue = value;
  }
  public resetDarkMode() {
    this._darkMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get darkModeInput() {
    return this._darkMode.internalValue;
  }

  // light_mode - computed: true, optional: true, required: false
  private _lightMode = new AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeOutputReference(this, "light_mode");
  public get lightMode() {
    return this._lightMode;
  }
  public putLightMode(value: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightMode) {
    this._lightMode.internalValue = value;
  }
  public resetLightMode() {
    this._lightMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lightModeInput() {
    return this._lightMode.internalValue;
  }
}
export interface AccountSettingV2EffectiveWorkspaceDashboardThemeFontColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#dark AccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#light AccountSettingV2#light}
  */
  readonly light?: string;
}

export function accountSettingV2EffectiveWorkspaceDashboardThemeFontColorToTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeFontColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function accountSettingV2EffectiveWorkspaceDashboardThemeFontColorToHclTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeFontColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dark: {
      value: cdktn.stringToHclTerraform(struct!.dark),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    light: {
      value: cdktn.stringToHclTerraform(struct!.light),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2EffectiveWorkspaceDashboardThemeFontColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2EffectiveWorkspaceDashboardThemeFontColor | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dark !== undefined) {
      hasAnyValues = true;
      internalValueResult.dark = this._dark;
    }
    if (this._light !== undefined) {
      hasAnyValues = true;
      internalValueResult.light = this._light;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2EffectiveWorkspaceDashboardThemeFontColor | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dark = undefined;
      this._light = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dark = value.dark;
      this._light = value.light;
    }
  }

  // dark - computed: true, optional: true, required: false
  private _dark?: string; 
  public get dark() {
    return this.getStringAttribute('dark');
  }
  public set dark(value: string) {
    this._dark = value;
  }
  public resetDark() {
    this._dark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get darkInput() {
    return this._dark;
  }

  // light - computed: true, optional: true, required: false
  private _light?: string; 
  public get light() {
    return this.getStringAttribute('light');
  }
  public set light(value: string) {
    this._light = value;
  }
  public resetLight() {
    this._light = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lightInput() {
    return this._light;
  }
}
export interface AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseFontColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#dark AccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#light AccountSettingV2#light}
  */
  readonly light?: string;
}

export function accountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseFontColorToTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseFontColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function accountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseFontColorToHclTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseFontColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dark: {
      value: cdktn.stringToHclTerraform(struct!.dark),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    light: {
      value: cdktn.stringToHclTerraform(struct!.light),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseFontColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseFontColor | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dark !== undefined) {
      hasAnyValues = true;
      internalValueResult.dark = this._dark;
    }
    if (this._light !== undefined) {
      hasAnyValues = true;
      internalValueResult.light = this._light;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseFontColor | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dark = undefined;
      this._light = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dark = value.dark;
      this._light = value.light;
    }
  }

  // dark - computed: true, optional: true, required: false
  private _dark?: string; 
  public get dark() {
    return this.getStringAttribute('dark');
  }
  public set dark(value: string) {
    this._dark = value;
  }
  public resetDark() {
    this._dark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get darkInput() {
    return this._dark;
  }

  // light - computed: true, optional: true, required: false
  private _light?: string; 
  public get light() {
    return this.getStringAttribute('light');
  }
  public set light(value: string) {
    this._light = value;
  }
  public resetLight() {
    this._light = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lightInput() {
    return this._light;
  }
}
export interface AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBase {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#font_color AccountSettingV2#font_color}
  */
  readonly fontColor?: AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseFontColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#font_family AccountSettingV2#font_family}
  */
  readonly fontFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#font_size AccountSettingV2#font_size}
  */
  readonly fontSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#font_style AccountSettingV2#font_style}
  */
  readonly fontStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#font_weight AccountSettingV2#font_weight}
  */
  readonly fontWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#text_case AccountSettingV2#text_case}
  */
  readonly textCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#text_decoration AccountSettingV2#text_decoration}
  */
  readonly textDecoration?: string;
}

export function accountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseToTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBase | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    font_color: accountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseFontColorToTerraform(struct!.fontColor),
    font_family: cdktn.stringToTerraform(struct!.fontFamily),
    font_size: cdktn.numberToTerraform(struct!.fontSize),
    font_style: cdktn.stringToTerraform(struct!.fontStyle),
    font_weight: cdktn.numberToTerraform(struct!.fontWeight),
    text_case: cdktn.stringToTerraform(struct!.textCase),
    text_decoration: cdktn.stringToTerraform(struct!.textDecoration),
  }
}


export function accountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseToHclTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBase | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    font_color: {
      value: accountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseFontColorToHclTerraform(struct!.fontColor),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseFontColor",
    },
    font_family: {
      value: cdktn.stringToHclTerraform(struct!.fontFamily),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_size: {
      value: cdktn.numberToHclTerraform(struct!.fontSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    font_style: {
      value: cdktn.stringToHclTerraform(struct!.fontStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_weight: {
      value: cdktn.numberToHclTerraform(struct!.fontWeight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    text_case: {
      value: cdktn.stringToHclTerraform(struct!.textCase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text_decoration: {
      value: cdktn.stringToHclTerraform(struct!.textDecoration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBase | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fontColor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontColor = this._fontColor?.internalValue;
    }
    if (this._fontFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontFamily = this._fontFamily;
    }
    if (this._fontSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontSize = this._fontSize;
    }
    if (this._fontStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontStyle = this._fontStyle;
    }
    if (this._fontWeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontWeight = this._fontWeight;
    }
    if (this._textCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.textCase = this._textCase;
    }
    if (this._textDecoration !== undefined) {
      hasAnyValues = true;
      internalValueResult.textDecoration = this._textDecoration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBase | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fontColor.internalValue = undefined;
      this._fontFamily = undefined;
      this._fontSize = undefined;
      this._fontStyle = undefined;
      this._fontWeight = undefined;
      this._textCase = undefined;
      this._textDecoration = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fontColor.internalValue = value.fontColor;
      this._fontFamily = value.fontFamily;
      this._fontSize = value.fontSize;
      this._fontStyle = value.fontStyle;
      this._fontWeight = value.fontWeight;
      this._textCase = value.textCase;
      this._textDecoration = value.textDecoration;
    }
  }

  // font_color - computed: true, optional: true, required: false
  private _fontColor = new AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseFontColorOutputReference(this, "font_color");
  public get fontColor() {
    return this._fontColor;
  }
  public putFontColor(value: AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseFontColor) {
    this._fontColor.internalValue = value;
  }
  public resetFontColor() {
    this._fontColor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontColorInput() {
    return this._fontColor.internalValue;
  }

  // font_family - computed: true, optional: true, required: false
  private _fontFamily?: string; 
  public get fontFamily() {
    return this.getStringAttribute('font_family');
  }
  public set fontFamily(value: string) {
    this._fontFamily = value;
  }
  public resetFontFamily() {
    this._fontFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontFamilyInput() {
    return this._fontFamily;
  }

  // font_size - computed: true, optional: true, required: false
  private _fontSize?: number; 
  public get fontSize() {
    return this.getNumberAttribute('font_size');
  }
  public set fontSize(value: number) {
    this._fontSize = value;
  }
  public resetFontSize() {
    this._fontSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontSizeInput() {
    return this._fontSize;
  }

  // font_style - computed: true, optional: true, required: false
  private _fontStyle?: string; 
  public get fontStyle() {
    return this.getStringAttribute('font_style');
  }
  public set fontStyle(value: string) {
    this._fontStyle = value;
  }
  public resetFontStyle() {
    this._fontStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontStyleInput() {
    return this._fontStyle;
  }

  // font_weight - computed: true, optional: true, required: false
  private _fontWeight?: number; 
  public get fontWeight() {
    return this.getNumberAttribute('font_weight');
  }
  public set fontWeight(value: number) {
    this._fontWeight = value;
  }
  public resetFontWeight() {
    this._fontWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontWeightInput() {
    return this._fontWeight;
  }

  // text_case - computed: true, optional: true, required: false
  private _textCase?: string; 
  public get textCase() {
    return this.getStringAttribute('text_case');
  }
  public set textCase(value: string) {
    this._textCase = value;
  }
  public resetTextCase() {
    this._textCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textCaseInput() {
    return this._textCase;
  }

  // text_decoration - computed: true, optional: true, required: false
  private _textDecoration?: string; 
  public get textDecoration() {
    return this.getStringAttribute('text_decoration');
  }
  public set textDecoration(value: string) {
    this._textDecoration = value;
  }
  public resetTextDecoration() {
    this._textDecoration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textDecorationInput() {
    return this._textDecoration;
  }
}
export interface AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleFontColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#dark AccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#light AccountSettingV2#light}
  */
  readonly light?: string;
}

export function accountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleFontColorToTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleFontColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function accountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleFontColorToHclTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleFontColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dark: {
      value: cdktn.stringToHclTerraform(struct!.dark),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    light: {
      value: cdktn.stringToHclTerraform(struct!.light),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleFontColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleFontColor | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dark !== undefined) {
      hasAnyValues = true;
      internalValueResult.dark = this._dark;
    }
    if (this._light !== undefined) {
      hasAnyValues = true;
      internalValueResult.light = this._light;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleFontColor | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dark = undefined;
      this._light = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dark = value.dark;
      this._light = value.light;
    }
  }

  // dark - computed: true, optional: true, required: false
  private _dark?: string; 
  public get dark() {
    return this.getStringAttribute('dark');
  }
  public set dark(value: string) {
    this._dark = value;
  }
  public resetDark() {
    this._dark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get darkInput() {
    return this._dark;
  }

  // light - computed: true, optional: true, required: false
  private _light?: string; 
  public get light() {
    return this.getStringAttribute('light');
  }
  public set light(value: string) {
    this._light = value;
  }
  public resetLight() {
    this._light = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lightInput() {
    return this._light;
  }
}
export interface AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#font_color AccountSettingV2#font_color}
  */
  readonly fontColor?: AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleFontColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#font_family AccountSettingV2#font_family}
  */
  readonly fontFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#font_size AccountSettingV2#font_size}
  */
  readonly fontSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#font_style AccountSettingV2#font_style}
  */
  readonly fontStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#font_weight AccountSettingV2#font_weight}
  */
  readonly fontWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#text_case AccountSettingV2#text_case}
  */
  readonly textCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#text_decoration AccountSettingV2#text_decoration}
  */
  readonly textDecoration?: string;
}

export function accountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleToTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitle | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    font_color: accountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleFontColorToTerraform(struct!.fontColor),
    font_family: cdktn.stringToTerraform(struct!.fontFamily),
    font_size: cdktn.numberToTerraform(struct!.fontSize),
    font_style: cdktn.stringToTerraform(struct!.fontStyle),
    font_weight: cdktn.numberToTerraform(struct!.fontWeight),
    text_case: cdktn.stringToTerraform(struct!.textCase),
    text_decoration: cdktn.stringToTerraform(struct!.textDecoration),
  }
}


export function accountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleToHclTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitle | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    font_color: {
      value: accountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleFontColorToHclTerraform(struct!.fontColor),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleFontColor",
    },
    font_family: {
      value: cdktn.stringToHclTerraform(struct!.fontFamily),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_size: {
      value: cdktn.numberToHclTerraform(struct!.fontSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    font_style: {
      value: cdktn.stringToHclTerraform(struct!.fontStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_weight: {
      value: cdktn.numberToHclTerraform(struct!.fontWeight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    text_case: {
      value: cdktn.stringToHclTerraform(struct!.textCase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text_decoration: {
      value: cdktn.stringToHclTerraform(struct!.textDecoration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitle | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fontColor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontColor = this._fontColor?.internalValue;
    }
    if (this._fontFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontFamily = this._fontFamily;
    }
    if (this._fontSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontSize = this._fontSize;
    }
    if (this._fontStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontStyle = this._fontStyle;
    }
    if (this._fontWeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontWeight = this._fontWeight;
    }
    if (this._textCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.textCase = this._textCase;
    }
    if (this._textDecoration !== undefined) {
      hasAnyValues = true;
      internalValueResult.textDecoration = this._textDecoration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitle | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fontColor.internalValue = undefined;
      this._fontFamily = undefined;
      this._fontSize = undefined;
      this._fontStyle = undefined;
      this._fontWeight = undefined;
      this._textCase = undefined;
      this._textDecoration = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fontColor.internalValue = value.fontColor;
      this._fontFamily = value.fontFamily;
      this._fontSize = value.fontSize;
      this._fontStyle = value.fontStyle;
      this._fontWeight = value.fontWeight;
      this._textCase = value.textCase;
      this._textDecoration = value.textDecoration;
    }
  }

  // font_color - computed: true, optional: true, required: false
  private _fontColor = new AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleFontColorOutputReference(this, "font_color");
  public get fontColor() {
    return this._fontColor;
  }
  public putFontColor(value: AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleFontColor) {
    this._fontColor.internalValue = value;
  }
  public resetFontColor() {
    this._fontColor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontColorInput() {
    return this._fontColor.internalValue;
  }

  // font_family - computed: true, optional: true, required: false
  private _fontFamily?: string; 
  public get fontFamily() {
    return this.getStringAttribute('font_family');
  }
  public set fontFamily(value: string) {
    this._fontFamily = value;
  }
  public resetFontFamily() {
    this._fontFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontFamilyInput() {
    return this._fontFamily;
  }

  // font_size - computed: true, optional: true, required: false
  private _fontSize?: number; 
  public get fontSize() {
    return this.getNumberAttribute('font_size');
  }
  public set fontSize(value: number) {
    this._fontSize = value;
  }
  public resetFontSize() {
    this._fontSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontSizeInput() {
    return this._fontSize;
  }

  // font_style - computed: true, optional: true, required: false
  private _fontStyle?: string; 
  public get fontStyle() {
    return this.getStringAttribute('font_style');
  }
  public set fontStyle(value: string) {
    this._fontStyle = value;
  }
  public resetFontStyle() {
    this._fontStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontStyleInput() {
    return this._fontStyle;
  }

  // font_weight - computed: true, optional: true, required: false
  private _fontWeight?: number; 
  public get fontWeight() {
    return this.getNumberAttribute('font_weight');
  }
  public set fontWeight(value: number) {
    this._fontWeight = value;
  }
  public resetFontWeight() {
    this._fontWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontWeightInput() {
    return this._fontWeight;
  }

  // text_case - computed: true, optional: true, required: false
  private _textCase?: string; 
  public get textCase() {
    return this.getStringAttribute('text_case');
  }
  public set textCase(value: string) {
    this._textCase = value;
  }
  public resetTextCase() {
    this._textCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textCaseInput() {
    return this._textCase;
  }

  // text_decoration - computed: true, optional: true, required: false
  private _textDecoration?: string; 
  public get textDecoration() {
    return this.getStringAttribute('text_decoration');
  }
  public set textDecoration(value: string) {
    this._textDecoration = value;
  }
  public resetTextDecoration() {
    this._textDecoration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textDecorationInput() {
    return this._textDecoration;
  }
}
export interface AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueFontColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#dark AccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#light AccountSettingV2#light}
  */
  readonly light?: string;
}

export function accountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueFontColorToTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueFontColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function accountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueFontColorToHclTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueFontColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dark: {
      value: cdktn.stringToHclTerraform(struct!.dark),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    light: {
      value: cdktn.stringToHclTerraform(struct!.light),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueFontColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueFontColor | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dark !== undefined) {
      hasAnyValues = true;
      internalValueResult.dark = this._dark;
    }
    if (this._light !== undefined) {
      hasAnyValues = true;
      internalValueResult.light = this._light;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueFontColor | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dark = undefined;
      this._light = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dark = value.dark;
      this._light = value.light;
    }
  }

  // dark - computed: true, optional: true, required: false
  private _dark?: string; 
  public get dark() {
    return this.getStringAttribute('dark');
  }
  public set dark(value: string) {
    this._dark = value;
  }
  public resetDark() {
    this._dark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get darkInput() {
    return this._dark;
  }

  // light - computed: true, optional: true, required: false
  private _light?: string; 
  public get light() {
    return this.getStringAttribute('light');
  }
  public set light(value: string) {
    this._light = value;
  }
  public resetLight() {
    this._light = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lightInput() {
    return this._light;
  }
}
export interface AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#font_color AccountSettingV2#font_color}
  */
  readonly fontColor?: AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueFontColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#font_family AccountSettingV2#font_family}
  */
  readonly fontFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#font_size AccountSettingV2#font_size}
  */
  readonly fontSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#font_style AccountSettingV2#font_style}
  */
  readonly fontStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#font_weight AccountSettingV2#font_weight}
  */
  readonly fontWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#text_case AccountSettingV2#text_case}
  */
  readonly textCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#text_decoration AccountSettingV2#text_decoration}
  */
  readonly textDecoration?: string;
}

export function accountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueToTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    font_color: accountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueFontColorToTerraform(struct!.fontColor),
    font_family: cdktn.stringToTerraform(struct!.fontFamily),
    font_size: cdktn.numberToTerraform(struct!.fontSize),
    font_style: cdktn.stringToTerraform(struct!.fontStyle),
    font_weight: cdktn.numberToTerraform(struct!.fontWeight),
    text_case: cdktn.stringToTerraform(struct!.textCase),
    text_decoration: cdktn.stringToTerraform(struct!.textDecoration),
  }
}


export function accountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueToHclTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    font_color: {
      value: accountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueFontColorToHclTerraform(struct!.fontColor),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueFontColor",
    },
    font_family: {
      value: cdktn.stringToHclTerraform(struct!.fontFamily),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_size: {
      value: cdktn.numberToHclTerraform(struct!.fontSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    font_style: {
      value: cdktn.stringToHclTerraform(struct!.fontStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_weight: {
      value: cdktn.numberToHclTerraform(struct!.fontWeight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    text_case: {
      value: cdktn.stringToHclTerraform(struct!.textCase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text_decoration: {
      value: cdktn.stringToHclTerraform(struct!.textDecoration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValue | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fontColor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontColor = this._fontColor?.internalValue;
    }
    if (this._fontFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontFamily = this._fontFamily;
    }
    if (this._fontSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontSize = this._fontSize;
    }
    if (this._fontStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontStyle = this._fontStyle;
    }
    if (this._fontWeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontWeight = this._fontWeight;
    }
    if (this._textCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.textCase = this._textCase;
    }
    if (this._textDecoration !== undefined) {
      hasAnyValues = true;
      internalValueResult.textDecoration = this._textDecoration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValue | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fontColor.internalValue = undefined;
      this._fontFamily = undefined;
      this._fontSize = undefined;
      this._fontStyle = undefined;
      this._fontWeight = undefined;
      this._textCase = undefined;
      this._textDecoration = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fontColor.internalValue = value.fontColor;
      this._fontFamily = value.fontFamily;
      this._fontSize = value.fontSize;
      this._fontStyle = value.fontStyle;
      this._fontWeight = value.fontWeight;
      this._textCase = value.textCase;
      this._textDecoration = value.textDecoration;
    }
  }

  // font_color - computed: true, optional: true, required: false
  private _fontColor = new AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueFontColorOutputReference(this, "font_color");
  public get fontColor() {
    return this._fontColor;
  }
  public putFontColor(value: AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueFontColor) {
    this._fontColor.internalValue = value;
  }
  public resetFontColor() {
    this._fontColor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontColorInput() {
    return this._fontColor.internalValue;
  }

  // font_family - computed: true, optional: true, required: false
  private _fontFamily?: string; 
  public get fontFamily() {
    return this.getStringAttribute('font_family');
  }
  public set fontFamily(value: string) {
    this._fontFamily = value;
  }
  public resetFontFamily() {
    this._fontFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontFamilyInput() {
    return this._fontFamily;
  }

  // font_size - computed: true, optional: true, required: false
  private _fontSize?: number; 
  public get fontSize() {
    return this.getNumberAttribute('font_size');
  }
  public set fontSize(value: number) {
    this._fontSize = value;
  }
  public resetFontSize() {
    this._fontSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontSizeInput() {
    return this._fontSize;
  }

  // font_style - computed: true, optional: true, required: false
  private _fontStyle?: string; 
  public get fontStyle() {
    return this.getStringAttribute('font_style');
  }
  public set fontStyle(value: string) {
    this._fontStyle = value;
  }
  public resetFontStyle() {
    this._fontStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontStyleInput() {
    return this._fontStyle;
  }

  // font_weight - computed: true, optional: true, required: false
  private _fontWeight?: number; 
  public get fontWeight() {
    return this.getNumberAttribute('font_weight');
  }
  public set fontWeight(value: number) {
    this._fontWeight = value;
  }
  public resetFontWeight() {
    this._fontWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontWeightInput() {
    return this._fontWeight;
  }

  // text_case - computed: true, optional: true, required: false
  private _textCase?: string; 
  public get textCase() {
    return this.getStringAttribute('text_case');
  }
  public set textCase(value: string) {
    this._textCase = value;
  }
  public resetTextCase() {
    this._textCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textCaseInput() {
    return this._textCase;
  }

  // text_decoration - computed: true, optional: true, required: false
  private _textDecoration?: string; 
  public get textDecoration() {
    return this.getStringAttribute('text_decoration');
  }
  public set textDecoration(value: string) {
    this._textDecoration = value;
  }
  public resetTextDecoration() {
    this._textDecoration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textDecorationInput() {
    return this._textDecoration;
  }
}
export interface AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#dark AccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#light AccountSettingV2#light}
  */
  readonly light?: string;
}

export function accountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColorToTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function accountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColorToHclTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dark: {
      value: cdktn.stringToHclTerraform(struct!.dark),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    light: {
      value: cdktn.stringToHclTerraform(struct!.light),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColor | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dark !== undefined) {
      hasAnyValues = true;
      internalValueResult.dark = this._dark;
    }
    if (this._light !== undefined) {
      hasAnyValues = true;
      internalValueResult.light = this._light;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColor | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dark = undefined;
      this._light = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dark = value.dark;
      this._light = value.light;
    }
  }

  // dark - computed: true, optional: true, required: false
  private _dark?: string; 
  public get dark() {
    return this.getStringAttribute('dark');
  }
  public set dark(value: string) {
    this._dark = value;
  }
  public resetDark() {
    this._dark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get darkInput() {
    return this._dark;
  }

  // light - computed: true, optional: true, required: false
  private _light?: string; 
  public get light() {
    return this.getStringAttribute('light');
  }
  public set light(value: string) {
    this._light = value;
  }
  public resetLight() {
    this._light = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lightInput() {
    return this._light;
  }
}
export interface AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescription {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#font_color AccountSettingV2#font_color}
  */
  readonly fontColor?: AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#font_family AccountSettingV2#font_family}
  */
  readonly fontFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#font_size AccountSettingV2#font_size}
  */
  readonly fontSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#font_style AccountSettingV2#font_style}
  */
  readonly fontStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#font_weight AccountSettingV2#font_weight}
  */
  readonly fontWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#text_case AccountSettingV2#text_case}
  */
  readonly textCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#text_decoration AccountSettingV2#text_decoration}
  */
  readonly textDecoration?: string;
}

export function accountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionToTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescription | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    font_color: accountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColorToTerraform(struct!.fontColor),
    font_family: cdktn.stringToTerraform(struct!.fontFamily),
    font_size: cdktn.numberToTerraform(struct!.fontSize),
    font_style: cdktn.stringToTerraform(struct!.fontStyle),
    font_weight: cdktn.numberToTerraform(struct!.fontWeight),
    text_case: cdktn.stringToTerraform(struct!.textCase),
    text_decoration: cdktn.stringToTerraform(struct!.textDecoration),
  }
}


export function accountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionToHclTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescription | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    font_color: {
      value: accountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColorToHclTerraform(struct!.fontColor),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColor",
    },
    font_family: {
      value: cdktn.stringToHclTerraform(struct!.fontFamily),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_size: {
      value: cdktn.numberToHclTerraform(struct!.fontSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    font_style: {
      value: cdktn.stringToHclTerraform(struct!.fontStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_weight: {
      value: cdktn.numberToHclTerraform(struct!.fontWeight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    text_case: {
      value: cdktn.stringToHclTerraform(struct!.textCase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text_decoration: {
      value: cdktn.stringToHclTerraform(struct!.textDecoration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescription | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fontColor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontColor = this._fontColor?.internalValue;
    }
    if (this._fontFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontFamily = this._fontFamily;
    }
    if (this._fontSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontSize = this._fontSize;
    }
    if (this._fontStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontStyle = this._fontStyle;
    }
    if (this._fontWeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontWeight = this._fontWeight;
    }
    if (this._textCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.textCase = this._textCase;
    }
    if (this._textDecoration !== undefined) {
      hasAnyValues = true;
      internalValueResult.textDecoration = this._textDecoration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescription | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fontColor.internalValue = undefined;
      this._fontFamily = undefined;
      this._fontSize = undefined;
      this._fontStyle = undefined;
      this._fontWeight = undefined;
      this._textCase = undefined;
      this._textDecoration = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fontColor.internalValue = value.fontColor;
      this._fontFamily = value.fontFamily;
      this._fontSize = value.fontSize;
      this._fontStyle = value.fontStyle;
      this._fontWeight = value.fontWeight;
      this._textCase = value.textCase;
      this._textDecoration = value.textDecoration;
    }
  }

  // font_color - computed: true, optional: true, required: false
  private _fontColor = new AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColorOutputReference(this, "font_color");
  public get fontColor() {
    return this._fontColor;
  }
  public putFontColor(value: AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColor) {
    this._fontColor.internalValue = value;
  }
  public resetFontColor() {
    this._fontColor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontColorInput() {
    return this._fontColor.internalValue;
  }

  // font_family - computed: true, optional: true, required: false
  private _fontFamily?: string; 
  public get fontFamily() {
    return this.getStringAttribute('font_family');
  }
  public set fontFamily(value: string) {
    this._fontFamily = value;
  }
  public resetFontFamily() {
    this._fontFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontFamilyInput() {
    return this._fontFamily;
  }

  // font_size - computed: true, optional: true, required: false
  private _fontSize?: number; 
  public get fontSize() {
    return this.getNumberAttribute('font_size');
  }
  public set fontSize(value: number) {
    this._fontSize = value;
  }
  public resetFontSize() {
    this._fontSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontSizeInput() {
    return this._fontSize;
  }

  // font_style - computed: true, optional: true, required: false
  private _fontStyle?: string; 
  public get fontStyle() {
    return this.getStringAttribute('font_style');
  }
  public set fontStyle(value: string) {
    this._fontStyle = value;
  }
  public resetFontStyle() {
    this._fontStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontStyleInput() {
    return this._fontStyle;
  }

  // font_weight - computed: true, optional: true, required: false
  private _fontWeight?: number; 
  public get fontWeight() {
    return this.getNumberAttribute('font_weight');
  }
  public set fontWeight(value: number) {
    this._fontWeight = value;
  }
  public resetFontWeight() {
    this._fontWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontWeightInput() {
    return this._fontWeight;
  }

  // text_case - computed: true, optional: true, required: false
  private _textCase?: string; 
  public get textCase() {
    return this.getStringAttribute('text_case');
  }
  public set textCase(value: string) {
    this._textCase = value;
  }
  public resetTextCase() {
    this._textCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textCaseInput() {
    return this._textCase;
  }

  // text_decoration - computed: true, optional: true, required: false
  private _textDecoration?: string; 
  public get textDecoration() {
    return this.getStringAttribute('text_decoration');
  }
  public set textDecoration(value: string) {
    this._textDecoration = value;
  }
  public resetTextDecoration() {
    this._textDecoration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textDecorationInput() {
    return this._textDecoration;
  }
}
export interface AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleFontColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#dark AccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#light AccountSettingV2#light}
  */
  readonly light?: string;
}

export function accountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleFontColorToTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleFontColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function accountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleFontColorToHclTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleFontColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dark: {
      value: cdktn.stringToHclTerraform(struct!.dark),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    light: {
      value: cdktn.stringToHclTerraform(struct!.light),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleFontColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleFontColor | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dark !== undefined) {
      hasAnyValues = true;
      internalValueResult.dark = this._dark;
    }
    if (this._light !== undefined) {
      hasAnyValues = true;
      internalValueResult.light = this._light;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleFontColor | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dark = undefined;
      this._light = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dark = value.dark;
      this._light = value.light;
    }
  }

  // dark - computed: true, optional: true, required: false
  private _dark?: string; 
  public get dark() {
    return this.getStringAttribute('dark');
  }
  public set dark(value: string) {
    this._dark = value;
  }
  public resetDark() {
    this._dark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get darkInput() {
    return this._dark;
  }

  // light - computed: true, optional: true, required: false
  private _light?: string; 
  public get light() {
    return this.getStringAttribute('light');
  }
  public set light(value: string) {
    this._light = value;
  }
  public resetLight() {
    this._light = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lightInput() {
    return this._light;
  }
}
export interface AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#font_color AccountSettingV2#font_color}
  */
  readonly fontColor?: AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleFontColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#font_family AccountSettingV2#font_family}
  */
  readonly fontFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#font_size AccountSettingV2#font_size}
  */
  readonly fontSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#font_style AccountSettingV2#font_style}
  */
  readonly fontStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#font_weight AccountSettingV2#font_weight}
  */
  readonly fontWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#text_case AccountSettingV2#text_case}
  */
  readonly textCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#text_decoration AccountSettingV2#text_decoration}
  */
  readonly textDecoration?: string;
}

export function accountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleToTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitle | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    font_color: accountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleFontColorToTerraform(struct!.fontColor),
    font_family: cdktn.stringToTerraform(struct!.fontFamily),
    font_size: cdktn.numberToTerraform(struct!.fontSize),
    font_style: cdktn.stringToTerraform(struct!.fontStyle),
    font_weight: cdktn.numberToTerraform(struct!.fontWeight),
    text_case: cdktn.stringToTerraform(struct!.textCase),
    text_decoration: cdktn.stringToTerraform(struct!.textDecoration),
  }
}


export function accountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleToHclTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitle | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    font_color: {
      value: accountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleFontColorToHclTerraform(struct!.fontColor),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleFontColor",
    },
    font_family: {
      value: cdktn.stringToHclTerraform(struct!.fontFamily),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_size: {
      value: cdktn.numberToHclTerraform(struct!.fontSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    font_style: {
      value: cdktn.stringToHclTerraform(struct!.fontStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_weight: {
      value: cdktn.numberToHclTerraform(struct!.fontWeight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    text_case: {
      value: cdktn.stringToHclTerraform(struct!.textCase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text_decoration: {
      value: cdktn.stringToHclTerraform(struct!.textDecoration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitle | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fontColor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontColor = this._fontColor?.internalValue;
    }
    if (this._fontFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontFamily = this._fontFamily;
    }
    if (this._fontSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontSize = this._fontSize;
    }
    if (this._fontStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontStyle = this._fontStyle;
    }
    if (this._fontWeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontWeight = this._fontWeight;
    }
    if (this._textCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.textCase = this._textCase;
    }
    if (this._textDecoration !== undefined) {
      hasAnyValues = true;
      internalValueResult.textDecoration = this._textDecoration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitle | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fontColor.internalValue = undefined;
      this._fontFamily = undefined;
      this._fontSize = undefined;
      this._fontStyle = undefined;
      this._fontWeight = undefined;
      this._textCase = undefined;
      this._textDecoration = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fontColor.internalValue = value.fontColor;
      this._fontFamily = value.fontFamily;
      this._fontSize = value.fontSize;
      this._fontStyle = value.fontStyle;
      this._fontWeight = value.fontWeight;
      this._textCase = value.textCase;
      this._textDecoration = value.textDecoration;
    }
  }

  // font_color - computed: true, optional: true, required: false
  private _fontColor = new AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleFontColorOutputReference(this, "font_color");
  public get fontColor() {
    return this._fontColor;
  }
  public putFontColor(value: AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleFontColor) {
    this._fontColor.internalValue = value;
  }
  public resetFontColor() {
    this._fontColor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontColorInput() {
    return this._fontColor.internalValue;
  }

  // font_family - computed: true, optional: true, required: false
  private _fontFamily?: string; 
  public get fontFamily() {
    return this.getStringAttribute('font_family');
  }
  public set fontFamily(value: string) {
    this._fontFamily = value;
  }
  public resetFontFamily() {
    this._fontFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontFamilyInput() {
    return this._fontFamily;
  }

  // font_size - computed: true, optional: true, required: false
  private _fontSize?: number; 
  public get fontSize() {
    return this.getNumberAttribute('font_size');
  }
  public set fontSize(value: number) {
    this._fontSize = value;
  }
  public resetFontSize() {
    this._fontSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontSizeInput() {
    return this._fontSize;
  }

  // font_style - computed: true, optional: true, required: false
  private _fontStyle?: string; 
  public get fontStyle() {
    return this.getStringAttribute('font_style');
  }
  public set fontStyle(value: string) {
    this._fontStyle = value;
  }
  public resetFontStyle() {
    this._fontStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontStyleInput() {
    return this._fontStyle;
  }

  // font_weight - computed: true, optional: true, required: false
  private _fontWeight?: number; 
  public get fontWeight() {
    return this.getNumberAttribute('font_weight');
  }
  public set fontWeight(value: number) {
    this._fontWeight = value;
  }
  public resetFontWeight() {
    this._fontWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontWeightInput() {
    return this._fontWeight;
  }

  // text_case - computed: true, optional: true, required: false
  private _textCase?: string; 
  public get textCase() {
    return this.getStringAttribute('text_case');
  }
  public set textCase(value: string) {
    this._textCase = value;
  }
  public resetTextCase() {
    this._textCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textCaseInput() {
    return this._textCase;
  }

  // text_decoration - computed: true, optional: true, required: false
  private _textDecoration?: string; 
  public get textDecoration() {
    return this.getStringAttribute('text_decoration');
  }
  public set textDecoration(value: string) {
    this._textDecoration = value;
  }
  public resetTextDecoration() {
    this._textDecoration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textDecorationInput() {
    return this._textDecoration;
  }
}
export interface AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#base AccountSettingV2#base}
  */
  readonly base?: AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBase;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#field_title AccountSettingV2#field_title}
  */
  readonly fieldTitle?: AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitle;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#field_value AccountSettingV2#field_value}
  */
  readonly fieldValue?: AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValue;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#widget_description AccountSettingV2#widget_description}
  */
  readonly widgetDescription?: AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescription;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#widget_title AccountSettingV2#widget_title}
  */
  readonly widgetTitle?: AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitle;
}

export function accountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsToTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    base: accountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseToTerraform(struct!.base),
    field_title: accountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleToTerraform(struct!.fieldTitle),
    field_value: accountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueToTerraform(struct!.fieldValue),
    widget_description: accountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionToTerraform(struct!.widgetDescription),
    widget_title: accountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleToTerraform(struct!.widgetTitle),
  }
}


export function accountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsToHclTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    base: {
      value: accountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseToHclTerraform(struct!.base),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBase",
    },
    field_title: {
      value: accountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleToHclTerraform(struct!.fieldTitle),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitle",
    },
    field_value: {
      value: accountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueToHclTerraform(struct!.fieldValue),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValue",
    },
    widget_description: {
      value: accountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionToHclTerraform(struct!.widgetDescription),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescription",
    },
    widget_title: {
      value: accountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleToHclTerraform(struct!.widgetTitle),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitle",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._base?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.base = this._base?.internalValue;
    }
    if (this._fieldTitle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldTitle = this._fieldTitle?.internalValue;
    }
    if (this._fieldValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldValue = this._fieldValue?.internalValue;
    }
    if (this._widgetDescription?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.widgetDescription = this._widgetDescription?.internalValue;
    }
    if (this._widgetTitle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.widgetTitle = this._widgetTitle?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._base.internalValue = undefined;
      this._fieldTitle.internalValue = undefined;
      this._fieldValue.internalValue = undefined;
      this._widgetDescription.internalValue = undefined;
      this._widgetTitle.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._base.internalValue = value.base;
      this._fieldTitle.internalValue = value.fieldTitle;
      this._fieldValue.internalValue = value.fieldValue;
      this._widgetDescription.internalValue = value.widgetDescription;
      this._widgetTitle.internalValue = value.widgetTitle;
    }
  }

  // base - computed: true, optional: true, required: false
  private _base = new AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseOutputReference(this, "base");
  public get base() {
    return this._base;
  }
  public putBase(value: AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBase) {
    this._base.internalValue = value;
  }
  public resetBase() {
    this._base.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseInput() {
    return this._base.internalValue;
  }

  // field_title - computed: true, optional: true, required: false
  private _fieldTitle = new AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleOutputReference(this, "field_title");
  public get fieldTitle() {
    return this._fieldTitle;
  }
  public putFieldTitle(value: AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitle) {
    this._fieldTitle.internalValue = value;
  }
  public resetFieldTitle() {
    this._fieldTitle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldTitleInput() {
    return this._fieldTitle.internalValue;
  }

  // field_value - computed: true, optional: true, required: false
  private _fieldValue = new AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueOutputReference(this, "field_value");
  public get fieldValue() {
    return this._fieldValue;
  }
  public putFieldValue(value: AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValue) {
    this._fieldValue.internalValue = value;
  }
  public resetFieldValue() {
    this._fieldValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldValueInput() {
    return this._fieldValue.internalValue;
  }

  // widget_description - computed: true, optional: true, required: false
  private _widgetDescription = new AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionOutputReference(this, "widget_description");
  public get widgetDescription() {
    return this._widgetDescription;
  }
  public putWidgetDescription(value: AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescription) {
    this._widgetDescription.internalValue = value;
  }
  public resetWidgetDescription() {
    this._widgetDescription.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widgetDescriptionInput() {
    return this._widgetDescription.internalValue;
  }

  // widget_title - computed: true, optional: true, required: false
  private _widgetTitle = new AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleOutputReference(this, "widget_title");
  public get widgetTitle() {
    return this._widgetTitle;
  }
  public putWidgetTitle(value: AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitle) {
    this._widgetTitle.internalValue = value;
  }
  public resetWidgetTitle() {
    this._widgetTitle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widgetTitleInput() {
    return this._widgetTitle.internalValue;
  }
}
export interface AccountSettingV2EffectiveWorkspaceDashboardThemeGridLineColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#dark AccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#light AccountSettingV2#light}
  */
  readonly light?: string;
}

export function accountSettingV2EffectiveWorkspaceDashboardThemeGridLineColorToTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeGridLineColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function accountSettingV2EffectiveWorkspaceDashboardThemeGridLineColorToHclTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeGridLineColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dark: {
      value: cdktn.stringToHclTerraform(struct!.dark),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    light: {
      value: cdktn.stringToHclTerraform(struct!.light),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2EffectiveWorkspaceDashboardThemeGridLineColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2EffectiveWorkspaceDashboardThemeGridLineColor | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dark !== undefined) {
      hasAnyValues = true;
      internalValueResult.dark = this._dark;
    }
    if (this._light !== undefined) {
      hasAnyValues = true;
      internalValueResult.light = this._light;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2EffectiveWorkspaceDashboardThemeGridLineColor | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dark = undefined;
      this._light = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dark = value.dark;
      this._light = value.light;
    }
  }

  // dark - computed: true, optional: true, required: false
  private _dark?: string; 
  public get dark() {
    return this.getStringAttribute('dark');
  }
  public set dark(value: string) {
    this._dark = value;
  }
  public resetDark() {
    this._dark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get darkInput() {
    return this._dark;
  }

  // light - computed: true, optional: true, required: false
  private _light?: string; 
  public get light() {
    return this.getStringAttribute('light');
  }
  public set light(value: string) {
    this._light = value;
  }
  public resetLight() {
    this._light = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lightInput() {
    return this._light;
  }
}
export interface AccountSettingV2EffectiveWorkspaceDashboardThemeSelectionColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#dark AccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#light AccountSettingV2#light}
  */
  readonly light?: string;
}

export function accountSettingV2EffectiveWorkspaceDashboardThemeSelectionColorToTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeSelectionColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function accountSettingV2EffectiveWorkspaceDashboardThemeSelectionColorToHclTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeSelectionColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dark: {
      value: cdktn.stringToHclTerraform(struct!.dark),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    light: {
      value: cdktn.stringToHclTerraform(struct!.light),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2EffectiveWorkspaceDashboardThemeSelectionColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2EffectiveWorkspaceDashboardThemeSelectionColor | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dark !== undefined) {
      hasAnyValues = true;
      internalValueResult.dark = this._dark;
    }
    if (this._light !== undefined) {
      hasAnyValues = true;
      internalValueResult.light = this._light;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2EffectiveWorkspaceDashboardThemeSelectionColor | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dark = undefined;
      this._light = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dark = value.dark;
      this._light = value.light;
    }
  }

  // dark - computed: true, optional: true, required: false
  private _dark?: string; 
  public get dark() {
    return this.getStringAttribute('dark');
  }
  public set dark(value: string) {
    this._dark = value;
  }
  public resetDark() {
    this._dark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get darkInput() {
    return this._dark;
  }

  // light - computed: true, optional: true, required: false
  private _light?: string; 
  public get light() {
    return this.getStringAttribute('light');
  }
  public set light(value: string) {
    this._light = value;
  }
  public resetLight() {
    this._light = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lightInput() {
    return this._light;
  }
}
export interface AccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNegative {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#dark AccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#light AccountSettingV2#light}
  */
  readonly light?: string;
}

export function accountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNegativeToTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNegative | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function accountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNegativeToHclTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNegative | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dark: {
      value: cdktn.stringToHclTerraform(struct!.dark),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    light: {
      value: cdktn.stringToHclTerraform(struct!.light),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNegativeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNegative | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dark !== undefined) {
      hasAnyValues = true;
      internalValueResult.dark = this._dark;
    }
    if (this._light !== undefined) {
      hasAnyValues = true;
      internalValueResult.light = this._light;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNegative | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dark = undefined;
      this._light = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dark = value.dark;
      this._light = value.light;
    }
  }

  // dark - computed: true, optional: true, required: false
  private _dark?: string; 
  public get dark() {
    return this.getStringAttribute('dark');
  }
  public set dark(value: string) {
    this._dark = value;
  }
  public resetDark() {
    this._dark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get darkInput() {
    return this._dark;
  }

  // light - computed: true, optional: true, required: false
  private _light?: string; 
  public get light() {
    return this.getStringAttribute('light');
  }
  public set light(value: string) {
    this._light = value;
  }
  public resetLight() {
    this._light = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lightInput() {
    return this._light;
  }
}
export interface AccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNeutral {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#dark AccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#light AccountSettingV2#light}
  */
  readonly light?: string;
}

export function accountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNeutralToTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNeutral | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function accountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNeutralToHclTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNeutral | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dark: {
      value: cdktn.stringToHclTerraform(struct!.dark),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    light: {
      value: cdktn.stringToHclTerraform(struct!.light),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNeutralOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNeutral | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dark !== undefined) {
      hasAnyValues = true;
      internalValueResult.dark = this._dark;
    }
    if (this._light !== undefined) {
      hasAnyValues = true;
      internalValueResult.light = this._light;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNeutral | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dark = undefined;
      this._light = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dark = value.dark;
      this._light = value.light;
    }
  }

  // dark - computed: true, optional: true, required: false
  private _dark?: string; 
  public get dark() {
    return this.getStringAttribute('dark');
  }
  public set dark(value: string) {
    this._dark = value;
  }
  public resetDark() {
    this._dark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get darkInput() {
    return this._dark;
  }

  // light - computed: true, optional: true, required: false
  private _light?: string; 
  public get light() {
    return this.getStringAttribute('light');
  }
  public set light(value: string) {
    this._light = value;
  }
  public resetLight() {
    this._light = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lightInput() {
    return this._light;
  }
}
export interface AccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsPositive {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#dark AccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#light AccountSettingV2#light}
  */
  readonly light?: string;
}

export function accountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsPositiveToTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsPositive | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function accountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsPositiveToHclTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsPositive | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dark: {
      value: cdktn.stringToHclTerraform(struct!.dark),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    light: {
      value: cdktn.stringToHclTerraform(struct!.light),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsPositiveOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsPositive | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dark !== undefined) {
      hasAnyValues = true;
      internalValueResult.dark = this._dark;
    }
    if (this._light !== undefined) {
      hasAnyValues = true;
      internalValueResult.light = this._light;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsPositive | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dark = undefined;
      this._light = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dark = value.dark;
      this._light = value.light;
    }
  }

  // dark - computed: true, optional: true, required: false
  private _dark?: string; 
  public get dark() {
    return this.getStringAttribute('dark');
  }
  public set dark(value: string) {
    this._dark = value;
  }
  public resetDark() {
    this._dark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get darkInput() {
    return this._dark;
  }

  // light - computed: true, optional: true, required: false
  private _light?: string; 
  public get light() {
    return this.getStringAttribute('light');
  }
  public set light(value: string) {
    this._light = value;
  }
  public resetLight() {
    this._light = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lightInput() {
    return this._light;
  }
}
export interface AccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#negative AccountSettingV2#negative}
  */
  readonly negative?: AccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNegative;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#neutral AccountSettingV2#neutral}
  */
  readonly neutral?: AccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNeutral;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#positive AccountSettingV2#positive}
  */
  readonly positive?: AccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsPositive;
}

export function accountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsToTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    negative: accountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNegativeToTerraform(struct!.negative),
    neutral: accountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNeutralToTerraform(struct!.neutral),
    positive: accountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsPositiveToTerraform(struct!.positive),
  }
}


export function accountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsToHclTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    negative: {
      value: accountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNegativeToHclTerraform(struct!.negative),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNegative",
    },
    neutral: {
      value: accountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNeutralToHclTerraform(struct!.neutral),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNeutral",
    },
    positive: {
      value: accountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsPositiveToHclTerraform(struct!.positive),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsPositive",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColors | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negative?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.negative = this._negative?.internalValue;
    }
    if (this._neutral?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.neutral = this._neutral?.internalValue;
    }
    if (this._positive?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.positive = this._positive?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColors | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negative.internalValue = undefined;
      this._neutral.internalValue = undefined;
      this._positive.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negative.internalValue = value.negative;
      this._neutral.internalValue = value.neutral;
      this._positive.internalValue = value.positive;
    }
  }

  // negative - computed: true, optional: true, required: false
  private _negative = new AccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNegativeOutputReference(this, "negative");
  public get negative() {
    return this._negative;
  }
  public putNegative(value: AccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNegative) {
    this._negative.internalValue = value;
  }
  public resetNegative() {
    this._negative.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negativeInput() {
    return this._negative.internalValue;
  }

  // neutral - computed: true, optional: true, required: false
  private _neutral = new AccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNeutralOutputReference(this, "neutral");
  public get neutral() {
    return this._neutral;
  }
  public putNeutral(value: AccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNeutral) {
    this._neutral.internalValue = value;
  }
  public resetNeutral() {
    this._neutral.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neutralInput() {
    return this._neutral.internalValue;
  }

  // positive - computed: true, optional: true, required: false
  private _positive = new AccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsPositiveOutputReference(this, "positive");
  public get positive() {
    return this._positive;
  }
  public putPositive(value: AccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsPositive) {
    this._positive.internalValue = value;
  }
  public resetPositive() {
    this._positive.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positiveInput() {
    return this._positive.internalValue;
  }
}
export interface AccountSettingV2EffectiveWorkspaceDashboardThemeWidgetBackgroundColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#dark AccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#light AccountSettingV2#light}
  */
  readonly light?: string;
}

export function accountSettingV2EffectiveWorkspaceDashboardThemeWidgetBackgroundColorToTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeWidgetBackgroundColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function accountSettingV2EffectiveWorkspaceDashboardThemeWidgetBackgroundColorToHclTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeWidgetBackgroundColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dark: {
      value: cdktn.stringToHclTerraform(struct!.dark),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    light: {
      value: cdktn.stringToHclTerraform(struct!.light),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2EffectiveWorkspaceDashboardThemeWidgetBackgroundColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2EffectiveWorkspaceDashboardThemeWidgetBackgroundColor | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dark !== undefined) {
      hasAnyValues = true;
      internalValueResult.dark = this._dark;
    }
    if (this._light !== undefined) {
      hasAnyValues = true;
      internalValueResult.light = this._light;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2EffectiveWorkspaceDashboardThemeWidgetBackgroundColor | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dark = undefined;
      this._light = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dark = value.dark;
      this._light = value.light;
    }
  }

  // dark - computed: true, optional: true, required: false
  private _dark?: string; 
  public get dark() {
    return this.getStringAttribute('dark');
  }
  public set dark(value: string) {
    this._dark = value;
  }
  public resetDark() {
    this._dark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get darkInput() {
    return this._dark;
  }

  // light - computed: true, optional: true, required: false
  private _light?: string; 
  public get light() {
    return this.getStringAttribute('light');
  }
  public set light(value: string) {
    this._light = value;
  }
  public resetLight() {
    this._light = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lightInput() {
    return this._light;
  }
}
export interface AccountSettingV2EffectiveWorkspaceDashboardThemeWidgetBorderColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#dark AccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#light AccountSettingV2#light}
  */
  readonly light?: string;
}

export function accountSettingV2EffectiveWorkspaceDashboardThemeWidgetBorderColorToTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeWidgetBorderColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function accountSettingV2EffectiveWorkspaceDashboardThemeWidgetBorderColorToHclTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardThemeWidgetBorderColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dark: {
      value: cdktn.stringToHclTerraform(struct!.dark),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    light: {
      value: cdktn.stringToHclTerraform(struct!.light),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2EffectiveWorkspaceDashboardThemeWidgetBorderColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2EffectiveWorkspaceDashboardThemeWidgetBorderColor | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dark !== undefined) {
      hasAnyValues = true;
      internalValueResult.dark = this._dark;
    }
    if (this._light !== undefined) {
      hasAnyValues = true;
      internalValueResult.light = this._light;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2EffectiveWorkspaceDashboardThemeWidgetBorderColor | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dark = undefined;
      this._light = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dark = value.dark;
      this._light = value.light;
    }
  }

  // dark - computed: true, optional: true, required: false
  private _dark?: string; 
  public get dark() {
    return this.getStringAttribute('dark');
  }
  public set dark(value: string) {
    this._dark = value;
  }
  public resetDark() {
    this._dark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get darkInput() {
    return this._dark;
  }

  // light - computed: true, optional: true, required: false
  private _light?: string; 
  public get light() {
    return this.getStringAttribute('light');
  }
  public set light(value: string) {
    this._light = value;
  }
  public resetLight() {
    this._light = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lightInput() {
    return this._light;
  }
}
export interface AccountSettingV2EffectiveWorkspaceDashboardTheme {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#axis_line_color AccountSettingV2#axis_line_color}
  */
  readonly axisLineColor?: AccountSettingV2EffectiveWorkspaceDashboardThemeAxisLineColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#canvas_background_color AccountSettingV2#canvas_background_color}
  */
  readonly canvasBackgroundColor?: AccountSettingV2EffectiveWorkspaceDashboardThemeCanvasBackgroundColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#continuous_gradient AccountSettingV2#continuous_gradient}
  */
  readonly continuousGradient?: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradient;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#font_color AccountSettingV2#font_color}
  */
  readonly fontColor?: AccountSettingV2EffectiveWorkspaceDashboardThemeFontColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#font_family AccountSettingV2#font_family}
  */
  readonly fontFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#font_settings AccountSettingV2#font_settings}
  */
  readonly fontSettings?: AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#grid_line_color AccountSettingV2#grid_line_color}
  */
  readonly gridLineColor?: AccountSettingV2EffectiveWorkspaceDashboardThemeGridLineColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#mark_corner_radius AccountSettingV2#mark_corner_radius}
  */
  readonly markCornerRadius?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#selection_color AccountSettingV2#selection_color}
  */
  readonly selectionColor?: AccountSettingV2EffectiveWorkspaceDashboardThemeSelectionColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#sentiment_colors AccountSettingV2#sentiment_colors}
  */
  readonly sentimentColors?: AccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColors;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#text_box_vertical_align AccountSettingV2#text_box_vertical_align}
  */
  readonly textBoxVerticalAlign?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#visualization_color_01 AccountSettingV2#visualization_color_01}
  */
  readonly visualizationColor01?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#visualization_color_02 AccountSettingV2#visualization_color_02}
  */
  readonly visualizationColor02?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#visualization_color_03 AccountSettingV2#visualization_color_03}
  */
  readonly visualizationColor03?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#visualization_color_04 AccountSettingV2#visualization_color_04}
  */
  readonly visualizationColor04?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#visualization_color_05 AccountSettingV2#visualization_color_05}
  */
  readonly visualizationColor05?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#visualization_color_06 AccountSettingV2#visualization_color_06}
  */
  readonly visualizationColor06?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#visualization_color_07 AccountSettingV2#visualization_color_07}
  */
  readonly visualizationColor07?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#visualization_color_08 AccountSettingV2#visualization_color_08}
  */
  readonly visualizationColor08?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#visualization_color_09 AccountSettingV2#visualization_color_09}
  */
  readonly visualizationColor09?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#visualization_color_10 AccountSettingV2#visualization_color_10}
  */
  readonly visualizationColor10?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#visualization_color_11 AccountSettingV2#visualization_color_11}
  */
  readonly visualizationColor11?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#visualization_color_12 AccountSettingV2#visualization_color_12}
  */
  readonly visualizationColor12?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#visualization_color_13 AccountSettingV2#visualization_color_13}
  */
  readonly visualizationColor13?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#visualization_color_14 AccountSettingV2#visualization_color_14}
  */
  readonly visualizationColor14?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#visualization_color_15 AccountSettingV2#visualization_color_15}
  */
  readonly visualizationColor15?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#visualization_color_16 AccountSettingV2#visualization_color_16}
  */
  readonly visualizationColor16?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#visualization_color_17 AccountSettingV2#visualization_color_17}
  */
  readonly visualizationColor17?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#visualization_color_18 AccountSettingV2#visualization_color_18}
  */
  readonly visualizationColor18?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#visualization_color_19 AccountSettingV2#visualization_color_19}
  */
  readonly visualizationColor19?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#visualization_color_20 AccountSettingV2#visualization_color_20}
  */
  readonly visualizationColor20?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#widget_background_color AccountSettingV2#widget_background_color}
  */
  readonly widgetBackgroundColor?: AccountSettingV2EffectiveWorkspaceDashboardThemeWidgetBackgroundColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#widget_border_color AccountSettingV2#widget_border_color}
  */
  readonly widgetBorderColor?: AccountSettingV2EffectiveWorkspaceDashboardThemeWidgetBorderColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#widget_corner_radius AccountSettingV2#widget_corner_radius}
  */
  readonly widgetCornerRadius?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#widget_header_alignment AccountSettingV2#widget_header_alignment}
  */
  readonly widgetHeaderAlignment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#widget_margin AccountSettingV2#widget_margin}
  */
  readonly widgetMargin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#widget_padding AccountSettingV2#widget_padding}
  */
  readonly widgetPadding?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#widget_shadow AccountSettingV2#widget_shadow}
  */
  readonly widgetShadow?: number;
}

export function accountSettingV2EffectiveWorkspaceDashboardThemeToTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardTheme): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    axis_line_color: accountSettingV2EffectiveWorkspaceDashboardThemeAxisLineColorToTerraform(struct!.axisLineColor),
    canvas_background_color: accountSettingV2EffectiveWorkspaceDashboardThemeCanvasBackgroundColorToTerraform(struct!.canvasBackgroundColor),
    continuous_gradient: accountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientToTerraform(struct!.continuousGradient),
    font_color: accountSettingV2EffectiveWorkspaceDashboardThemeFontColorToTerraform(struct!.fontColor),
    font_family: cdktn.stringToTerraform(struct!.fontFamily),
    font_settings: accountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsToTerraform(struct!.fontSettings),
    grid_line_color: accountSettingV2EffectiveWorkspaceDashboardThemeGridLineColorToTerraform(struct!.gridLineColor),
    mark_corner_radius: cdktn.numberToTerraform(struct!.markCornerRadius),
    selection_color: accountSettingV2EffectiveWorkspaceDashboardThemeSelectionColorToTerraform(struct!.selectionColor),
    sentiment_colors: accountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsToTerraform(struct!.sentimentColors),
    text_box_vertical_align: cdktn.stringToTerraform(struct!.textBoxVerticalAlign),
    visualization_color_01: cdktn.stringToTerraform(struct!.visualizationColor01),
    visualization_color_02: cdktn.stringToTerraform(struct!.visualizationColor02),
    visualization_color_03: cdktn.stringToTerraform(struct!.visualizationColor03),
    visualization_color_04: cdktn.stringToTerraform(struct!.visualizationColor04),
    visualization_color_05: cdktn.stringToTerraform(struct!.visualizationColor05),
    visualization_color_06: cdktn.stringToTerraform(struct!.visualizationColor06),
    visualization_color_07: cdktn.stringToTerraform(struct!.visualizationColor07),
    visualization_color_08: cdktn.stringToTerraform(struct!.visualizationColor08),
    visualization_color_09: cdktn.stringToTerraform(struct!.visualizationColor09),
    visualization_color_10: cdktn.stringToTerraform(struct!.visualizationColor10),
    visualization_color_11: cdktn.stringToTerraform(struct!.visualizationColor11),
    visualization_color_12: cdktn.stringToTerraform(struct!.visualizationColor12),
    visualization_color_13: cdktn.stringToTerraform(struct!.visualizationColor13),
    visualization_color_14: cdktn.stringToTerraform(struct!.visualizationColor14),
    visualization_color_15: cdktn.stringToTerraform(struct!.visualizationColor15),
    visualization_color_16: cdktn.stringToTerraform(struct!.visualizationColor16),
    visualization_color_17: cdktn.stringToTerraform(struct!.visualizationColor17),
    visualization_color_18: cdktn.stringToTerraform(struct!.visualizationColor18),
    visualization_color_19: cdktn.stringToTerraform(struct!.visualizationColor19),
    visualization_color_20: cdktn.stringToTerraform(struct!.visualizationColor20),
    widget_background_color: accountSettingV2EffectiveWorkspaceDashboardThemeWidgetBackgroundColorToTerraform(struct!.widgetBackgroundColor),
    widget_border_color: accountSettingV2EffectiveWorkspaceDashboardThemeWidgetBorderColorToTerraform(struct!.widgetBorderColor),
    widget_corner_radius: cdktn.numberToTerraform(struct!.widgetCornerRadius),
    widget_header_alignment: cdktn.stringToTerraform(struct!.widgetHeaderAlignment),
    widget_margin: cdktn.numberToTerraform(struct!.widgetMargin),
    widget_padding: cdktn.numberToTerraform(struct!.widgetPadding),
    widget_shadow: cdktn.numberToTerraform(struct!.widgetShadow),
  }
}


export function accountSettingV2EffectiveWorkspaceDashboardThemeToHclTerraform(struct?: AccountSettingV2EffectiveWorkspaceDashboardTheme): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    axis_line_color: {
      value: accountSettingV2EffectiveWorkspaceDashboardThemeAxisLineColorToHclTerraform(struct!.axisLineColor),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2EffectiveWorkspaceDashboardThemeAxisLineColor",
    },
    canvas_background_color: {
      value: accountSettingV2EffectiveWorkspaceDashboardThemeCanvasBackgroundColorToHclTerraform(struct!.canvasBackgroundColor),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2EffectiveWorkspaceDashboardThemeCanvasBackgroundColor",
    },
    continuous_gradient: {
      value: accountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientToHclTerraform(struct!.continuousGradient),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradient",
    },
    font_color: {
      value: accountSettingV2EffectiveWorkspaceDashboardThemeFontColorToHclTerraform(struct!.fontColor),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2EffectiveWorkspaceDashboardThemeFontColor",
    },
    font_family: {
      value: cdktn.stringToHclTerraform(struct!.fontFamily),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_settings: {
      value: accountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsToHclTerraform(struct!.fontSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettings",
    },
    grid_line_color: {
      value: accountSettingV2EffectiveWorkspaceDashboardThemeGridLineColorToHclTerraform(struct!.gridLineColor),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2EffectiveWorkspaceDashboardThemeGridLineColor",
    },
    mark_corner_radius: {
      value: cdktn.numberToHclTerraform(struct!.markCornerRadius),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    selection_color: {
      value: accountSettingV2EffectiveWorkspaceDashboardThemeSelectionColorToHclTerraform(struct!.selectionColor),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2EffectiveWorkspaceDashboardThemeSelectionColor",
    },
    sentiment_colors: {
      value: accountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsToHclTerraform(struct!.sentimentColors),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColors",
    },
    text_box_vertical_align: {
      value: cdktn.stringToHclTerraform(struct!.textBoxVerticalAlign),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    visualization_color_01: {
      value: cdktn.stringToHclTerraform(struct!.visualizationColor01),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    visualization_color_02: {
      value: cdktn.stringToHclTerraform(struct!.visualizationColor02),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    visualization_color_03: {
      value: cdktn.stringToHclTerraform(struct!.visualizationColor03),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    visualization_color_04: {
      value: cdktn.stringToHclTerraform(struct!.visualizationColor04),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    visualization_color_05: {
      value: cdktn.stringToHclTerraform(struct!.visualizationColor05),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    visualization_color_06: {
      value: cdktn.stringToHclTerraform(struct!.visualizationColor06),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    visualization_color_07: {
      value: cdktn.stringToHclTerraform(struct!.visualizationColor07),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    visualization_color_08: {
      value: cdktn.stringToHclTerraform(struct!.visualizationColor08),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    visualization_color_09: {
      value: cdktn.stringToHclTerraform(struct!.visualizationColor09),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    visualization_color_10: {
      value: cdktn.stringToHclTerraform(struct!.visualizationColor10),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    visualization_color_11: {
      value: cdktn.stringToHclTerraform(struct!.visualizationColor11),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    visualization_color_12: {
      value: cdktn.stringToHclTerraform(struct!.visualizationColor12),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    visualization_color_13: {
      value: cdktn.stringToHclTerraform(struct!.visualizationColor13),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    visualization_color_14: {
      value: cdktn.stringToHclTerraform(struct!.visualizationColor14),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    visualization_color_15: {
      value: cdktn.stringToHclTerraform(struct!.visualizationColor15),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    visualization_color_16: {
      value: cdktn.stringToHclTerraform(struct!.visualizationColor16),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    visualization_color_17: {
      value: cdktn.stringToHclTerraform(struct!.visualizationColor17),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    visualization_color_18: {
      value: cdktn.stringToHclTerraform(struct!.visualizationColor18),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    visualization_color_19: {
      value: cdktn.stringToHclTerraform(struct!.visualizationColor19),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    visualization_color_20: {
      value: cdktn.stringToHclTerraform(struct!.visualizationColor20),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    widget_background_color: {
      value: accountSettingV2EffectiveWorkspaceDashboardThemeWidgetBackgroundColorToHclTerraform(struct!.widgetBackgroundColor),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2EffectiveWorkspaceDashboardThemeWidgetBackgroundColor",
    },
    widget_border_color: {
      value: accountSettingV2EffectiveWorkspaceDashboardThemeWidgetBorderColorToHclTerraform(struct!.widgetBorderColor),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2EffectiveWorkspaceDashboardThemeWidgetBorderColor",
    },
    widget_corner_radius: {
      value: cdktn.numberToHclTerraform(struct!.widgetCornerRadius),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    widget_header_alignment: {
      value: cdktn.stringToHclTerraform(struct!.widgetHeaderAlignment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    widget_margin: {
      value: cdktn.numberToHclTerraform(struct!.widgetMargin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    widget_padding: {
      value: cdktn.numberToHclTerraform(struct!.widgetPadding),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    widget_shadow: {
      value: cdktn.numberToHclTerraform(struct!.widgetShadow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2EffectiveWorkspaceDashboardThemeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2EffectiveWorkspaceDashboardTheme | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._axisLineColor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.axisLineColor = this._axisLineColor?.internalValue;
    }
    if (this._canvasBackgroundColor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.canvasBackgroundColor = this._canvasBackgroundColor?.internalValue;
    }
    if (this._continuousGradient?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.continuousGradient = this._continuousGradient?.internalValue;
    }
    if (this._fontColor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontColor = this._fontColor?.internalValue;
    }
    if (this._fontFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontFamily = this._fontFamily;
    }
    if (this._fontSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontSettings = this._fontSettings?.internalValue;
    }
    if (this._gridLineColor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gridLineColor = this._gridLineColor?.internalValue;
    }
    if (this._markCornerRadius !== undefined) {
      hasAnyValues = true;
      internalValueResult.markCornerRadius = this._markCornerRadius;
    }
    if (this._selectionColor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectionColor = this._selectionColor?.internalValue;
    }
    if (this._sentimentColors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sentimentColors = this._sentimentColors?.internalValue;
    }
    if (this._textBoxVerticalAlign !== undefined) {
      hasAnyValues = true;
      internalValueResult.textBoxVerticalAlign = this._textBoxVerticalAlign;
    }
    if (this._visualizationColor01 !== undefined) {
      hasAnyValues = true;
      internalValueResult.visualizationColor01 = this._visualizationColor01;
    }
    if (this._visualizationColor02 !== undefined) {
      hasAnyValues = true;
      internalValueResult.visualizationColor02 = this._visualizationColor02;
    }
    if (this._visualizationColor03 !== undefined) {
      hasAnyValues = true;
      internalValueResult.visualizationColor03 = this._visualizationColor03;
    }
    if (this._visualizationColor04 !== undefined) {
      hasAnyValues = true;
      internalValueResult.visualizationColor04 = this._visualizationColor04;
    }
    if (this._visualizationColor05 !== undefined) {
      hasAnyValues = true;
      internalValueResult.visualizationColor05 = this._visualizationColor05;
    }
    if (this._visualizationColor06 !== undefined) {
      hasAnyValues = true;
      internalValueResult.visualizationColor06 = this._visualizationColor06;
    }
    if (this._visualizationColor07 !== undefined) {
      hasAnyValues = true;
      internalValueResult.visualizationColor07 = this._visualizationColor07;
    }
    if (this._visualizationColor08 !== undefined) {
      hasAnyValues = true;
      internalValueResult.visualizationColor08 = this._visualizationColor08;
    }
    if (this._visualizationColor09 !== undefined) {
      hasAnyValues = true;
      internalValueResult.visualizationColor09 = this._visualizationColor09;
    }
    if (this._visualizationColor10 !== undefined) {
      hasAnyValues = true;
      internalValueResult.visualizationColor10 = this._visualizationColor10;
    }
    if (this._visualizationColor11 !== undefined) {
      hasAnyValues = true;
      internalValueResult.visualizationColor11 = this._visualizationColor11;
    }
    if (this._visualizationColor12 !== undefined) {
      hasAnyValues = true;
      internalValueResult.visualizationColor12 = this._visualizationColor12;
    }
    if (this._visualizationColor13 !== undefined) {
      hasAnyValues = true;
      internalValueResult.visualizationColor13 = this._visualizationColor13;
    }
    if (this._visualizationColor14 !== undefined) {
      hasAnyValues = true;
      internalValueResult.visualizationColor14 = this._visualizationColor14;
    }
    if (this._visualizationColor15 !== undefined) {
      hasAnyValues = true;
      internalValueResult.visualizationColor15 = this._visualizationColor15;
    }
    if (this._visualizationColor16 !== undefined) {
      hasAnyValues = true;
      internalValueResult.visualizationColor16 = this._visualizationColor16;
    }
    if (this._visualizationColor17 !== undefined) {
      hasAnyValues = true;
      internalValueResult.visualizationColor17 = this._visualizationColor17;
    }
    if (this._visualizationColor18 !== undefined) {
      hasAnyValues = true;
      internalValueResult.visualizationColor18 = this._visualizationColor18;
    }
    if (this._visualizationColor19 !== undefined) {
      hasAnyValues = true;
      internalValueResult.visualizationColor19 = this._visualizationColor19;
    }
    if (this._visualizationColor20 !== undefined) {
      hasAnyValues = true;
      internalValueResult.visualizationColor20 = this._visualizationColor20;
    }
    if (this._widgetBackgroundColor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.widgetBackgroundColor = this._widgetBackgroundColor?.internalValue;
    }
    if (this._widgetBorderColor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.widgetBorderColor = this._widgetBorderColor?.internalValue;
    }
    if (this._widgetCornerRadius !== undefined) {
      hasAnyValues = true;
      internalValueResult.widgetCornerRadius = this._widgetCornerRadius;
    }
    if (this._widgetHeaderAlignment !== undefined) {
      hasAnyValues = true;
      internalValueResult.widgetHeaderAlignment = this._widgetHeaderAlignment;
    }
    if (this._widgetMargin !== undefined) {
      hasAnyValues = true;
      internalValueResult.widgetMargin = this._widgetMargin;
    }
    if (this._widgetPadding !== undefined) {
      hasAnyValues = true;
      internalValueResult.widgetPadding = this._widgetPadding;
    }
    if (this._widgetShadow !== undefined) {
      hasAnyValues = true;
      internalValueResult.widgetShadow = this._widgetShadow;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2EffectiveWorkspaceDashboardTheme | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._axisLineColor.internalValue = undefined;
      this._canvasBackgroundColor.internalValue = undefined;
      this._continuousGradient.internalValue = undefined;
      this._fontColor.internalValue = undefined;
      this._fontFamily = undefined;
      this._fontSettings.internalValue = undefined;
      this._gridLineColor.internalValue = undefined;
      this._markCornerRadius = undefined;
      this._selectionColor.internalValue = undefined;
      this._sentimentColors.internalValue = undefined;
      this._textBoxVerticalAlign = undefined;
      this._visualizationColor01 = undefined;
      this._visualizationColor02 = undefined;
      this._visualizationColor03 = undefined;
      this._visualizationColor04 = undefined;
      this._visualizationColor05 = undefined;
      this._visualizationColor06 = undefined;
      this._visualizationColor07 = undefined;
      this._visualizationColor08 = undefined;
      this._visualizationColor09 = undefined;
      this._visualizationColor10 = undefined;
      this._visualizationColor11 = undefined;
      this._visualizationColor12 = undefined;
      this._visualizationColor13 = undefined;
      this._visualizationColor14 = undefined;
      this._visualizationColor15 = undefined;
      this._visualizationColor16 = undefined;
      this._visualizationColor17 = undefined;
      this._visualizationColor18 = undefined;
      this._visualizationColor19 = undefined;
      this._visualizationColor20 = undefined;
      this._widgetBackgroundColor.internalValue = undefined;
      this._widgetBorderColor.internalValue = undefined;
      this._widgetCornerRadius = undefined;
      this._widgetHeaderAlignment = undefined;
      this._widgetMargin = undefined;
      this._widgetPadding = undefined;
      this._widgetShadow = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._axisLineColor.internalValue = value.axisLineColor;
      this._canvasBackgroundColor.internalValue = value.canvasBackgroundColor;
      this._continuousGradient.internalValue = value.continuousGradient;
      this._fontColor.internalValue = value.fontColor;
      this._fontFamily = value.fontFamily;
      this._fontSettings.internalValue = value.fontSettings;
      this._gridLineColor.internalValue = value.gridLineColor;
      this._markCornerRadius = value.markCornerRadius;
      this._selectionColor.internalValue = value.selectionColor;
      this._sentimentColors.internalValue = value.sentimentColors;
      this._textBoxVerticalAlign = value.textBoxVerticalAlign;
      this._visualizationColor01 = value.visualizationColor01;
      this._visualizationColor02 = value.visualizationColor02;
      this._visualizationColor03 = value.visualizationColor03;
      this._visualizationColor04 = value.visualizationColor04;
      this._visualizationColor05 = value.visualizationColor05;
      this._visualizationColor06 = value.visualizationColor06;
      this._visualizationColor07 = value.visualizationColor07;
      this._visualizationColor08 = value.visualizationColor08;
      this._visualizationColor09 = value.visualizationColor09;
      this._visualizationColor10 = value.visualizationColor10;
      this._visualizationColor11 = value.visualizationColor11;
      this._visualizationColor12 = value.visualizationColor12;
      this._visualizationColor13 = value.visualizationColor13;
      this._visualizationColor14 = value.visualizationColor14;
      this._visualizationColor15 = value.visualizationColor15;
      this._visualizationColor16 = value.visualizationColor16;
      this._visualizationColor17 = value.visualizationColor17;
      this._visualizationColor18 = value.visualizationColor18;
      this._visualizationColor19 = value.visualizationColor19;
      this._visualizationColor20 = value.visualizationColor20;
      this._widgetBackgroundColor.internalValue = value.widgetBackgroundColor;
      this._widgetBorderColor.internalValue = value.widgetBorderColor;
      this._widgetCornerRadius = value.widgetCornerRadius;
      this._widgetHeaderAlignment = value.widgetHeaderAlignment;
      this._widgetMargin = value.widgetMargin;
      this._widgetPadding = value.widgetPadding;
      this._widgetShadow = value.widgetShadow;
    }
  }

  // axis_line_color - computed: true, optional: true, required: false
  private _axisLineColor = new AccountSettingV2EffectiveWorkspaceDashboardThemeAxisLineColorOutputReference(this, "axis_line_color");
  public get axisLineColor() {
    return this._axisLineColor;
  }
  public putAxisLineColor(value: AccountSettingV2EffectiveWorkspaceDashboardThemeAxisLineColor) {
    this._axisLineColor.internalValue = value;
  }
  public resetAxisLineColor() {
    this._axisLineColor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get axisLineColorInput() {
    return this._axisLineColor.internalValue;
  }

  // canvas_background_color - computed: true, optional: true, required: false
  private _canvasBackgroundColor = new AccountSettingV2EffectiveWorkspaceDashboardThemeCanvasBackgroundColorOutputReference(this, "canvas_background_color");
  public get canvasBackgroundColor() {
    return this._canvasBackgroundColor;
  }
  public putCanvasBackgroundColor(value: AccountSettingV2EffectiveWorkspaceDashboardThemeCanvasBackgroundColor) {
    this._canvasBackgroundColor.internalValue = value;
  }
  public resetCanvasBackgroundColor() {
    this._canvasBackgroundColor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canvasBackgroundColorInput() {
    return this._canvasBackgroundColor.internalValue;
  }

  // continuous_gradient - computed: true, optional: true, required: false
  private _continuousGradient = new AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientOutputReference(this, "continuous_gradient");
  public get continuousGradient() {
    return this._continuousGradient;
  }
  public putContinuousGradient(value: AccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradient) {
    this._continuousGradient.internalValue = value;
  }
  public resetContinuousGradient() {
    this._continuousGradient.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continuousGradientInput() {
    return this._continuousGradient.internalValue;
  }

  // font_color - computed: true, optional: true, required: false
  private _fontColor = new AccountSettingV2EffectiveWorkspaceDashboardThemeFontColorOutputReference(this, "font_color");
  public get fontColor() {
    return this._fontColor;
  }
  public putFontColor(value: AccountSettingV2EffectiveWorkspaceDashboardThemeFontColor) {
    this._fontColor.internalValue = value;
  }
  public resetFontColor() {
    this._fontColor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontColorInput() {
    return this._fontColor.internalValue;
  }

  // font_family - computed: true, optional: true, required: false
  private _fontFamily?: string; 
  public get fontFamily() {
    return this.getStringAttribute('font_family');
  }
  public set fontFamily(value: string) {
    this._fontFamily = value;
  }
  public resetFontFamily() {
    this._fontFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontFamilyInput() {
    return this._fontFamily;
  }

  // font_settings - computed: true, optional: true, required: false
  private _fontSettings = new AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsOutputReference(this, "font_settings");
  public get fontSettings() {
    return this._fontSettings;
  }
  public putFontSettings(value: AccountSettingV2EffectiveWorkspaceDashboardThemeFontSettings) {
    this._fontSettings.internalValue = value;
  }
  public resetFontSettings() {
    this._fontSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontSettingsInput() {
    return this._fontSettings.internalValue;
  }

  // grid_line_color - computed: true, optional: true, required: false
  private _gridLineColor = new AccountSettingV2EffectiveWorkspaceDashboardThemeGridLineColorOutputReference(this, "grid_line_color");
  public get gridLineColor() {
    return this._gridLineColor;
  }
  public putGridLineColor(value: AccountSettingV2EffectiveWorkspaceDashboardThemeGridLineColor) {
    this._gridLineColor.internalValue = value;
  }
  public resetGridLineColor() {
    this._gridLineColor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gridLineColorInput() {
    return this._gridLineColor.internalValue;
  }

  // mark_corner_radius - computed: true, optional: true, required: false
  private _markCornerRadius?: number; 
  public get markCornerRadius() {
    return this.getNumberAttribute('mark_corner_radius');
  }
  public set markCornerRadius(value: number) {
    this._markCornerRadius = value;
  }
  public resetMarkCornerRadius() {
    this._markCornerRadius = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markCornerRadiusInput() {
    return this._markCornerRadius;
  }

  // selection_color - computed: true, optional: true, required: false
  private _selectionColor = new AccountSettingV2EffectiveWorkspaceDashboardThemeSelectionColorOutputReference(this, "selection_color");
  public get selectionColor() {
    return this._selectionColor;
  }
  public putSelectionColor(value: AccountSettingV2EffectiveWorkspaceDashboardThemeSelectionColor) {
    this._selectionColor.internalValue = value;
  }
  public resetSelectionColor() {
    this._selectionColor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectionColorInput() {
    return this._selectionColor.internalValue;
  }

  // sentiment_colors - computed: true, optional: true, required: false
  private _sentimentColors = new AccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsOutputReference(this, "sentiment_colors");
  public get sentimentColors() {
    return this._sentimentColors;
  }
  public putSentimentColors(value: AccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColors) {
    this._sentimentColors.internalValue = value;
  }
  public resetSentimentColors() {
    this._sentimentColors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sentimentColorsInput() {
    return this._sentimentColors.internalValue;
  }

  // text_box_vertical_align - computed: true, optional: true, required: false
  private _textBoxVerticalAlign?: string; 
  public get textBoxVerticalAlign() {
    return this.getStringAttribute('text_box_vertical_align');
  }
  public set textBoxVerticalAlign(value: string) {
    this._textBoxVerticalAlign = value;
  }
  public resetTextBoxVerticalAlign() {
    this._textBoxVerticalAlign = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textBoxVerticalAlignInput() {
    return this._textBoxVerticalAlign;
  }

  // visualization_color_01 - computed: true, optional: true, required: false
  private _visualizationColor01?: string; 
  public get visualizationColor01() {
    return this.getStringAttribute('visualization_color_01');
  }
  public set visualizationColor01(value: string) {
    this._visualizationColor01 = value;
  }
  public resetVisualizationColor01() {
    this._visualizationColor01 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visualizationColor01Input() {
    return this._visualizationColor01;
  }

  // visualization_color_02 - computed: true, optional: true, required: false
  private _visualizationColor02?: string; 
  public get visualizationColor02() {
    return this.getStringAttribute('visualization_color_02');
  }
  public set visualizationColor02(value: string) {
    this._visualizationColor02 = value;
  }
  public resetVisualizationColor02() {
    this._visualizationColor02 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visualizationColor02Input() {
    return this._visualizationColor02;
  }

  // visualization_color_03 - computed: true, optional: true, required: false
  private _visualizationColor03?: string; 
  public get visualizationColor03() {
    return this.getStringAttribute('visualization_color_03');
  }
  public set visualizationColor03(value: string) {
    this._visualizationColor03 = value;
  }
  public resetVisualizationColor03() {
    this._visualizationColor03 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visualizationColor03Input() {
    return this._visualizationColor03;
  }

  // visualization_color_04 - computed: true, optional: true, required: false
  private _visualizationColor04?: string; 
  public get visualizationColor04() {
    return this.getStringAttribute('visualization_color_04');
  }
  public set visualizationColor04(value: string) {
    this._visualizationColor04 = value;
  }
  public resetVisualizationColor04() {
    this._visualizationColor04 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visualizationColor04Input() {
    return this._visualizationColor04;
  }

  // visualization_color_05 - computed: true, optional: true, required: false
  private _visualizationColor05?: string; 
  public get visualizationColor05() {
    return this.getStringAttribute('visualization_color_05');
  }
  public set visualizationColor05(value: string) {
    this._visualizationColor05 = value;
  }
  public resetVisualizationColor05() {
    this._visualizationColor05 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visualizationColor05Input() {
    return this._visualizationColor05;
  }

  // visualization_color_06 - computed: true, optional: true, required: false
  private _visualizationColor06?: string; 
  public get visualizationColor06() {
    return this.getStringAttribute('visualization_color_06');
  }
  public set visualizationColor06(value: string) {
    this._visualizationColor06 = value;
  }
  public resetVisualizationColor06() {
    this._visualizationColor06 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visualizationColor06Input() {
    return this._visualizationColor06;
  }

  // visualization_color_07 - computed: true, optional: true, required: false
  private _visualizationColor07?: string; 
  public get visualizationColor07() {
    return this.getStringAttribute('visualization_color_07');
  }
  public set visualizationColor07(value: string) {
    this._visualizationColor07 = value;
  }
  public resetVisualizationColor07() {
    this._visualizationColor07 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visualizationColor07Input() {
    return this._visualizationColor07;
  }

  // visualization_color_08 - computed: true, optional: true, required: false
  private _visualizationColor08?: string; 
  public get visualizationColor08() {
    return this.getStringAttribute('visualization_color_08');
  }
  public set visualizationColor08(value: string) {
    this._visualizationColor08 = value;
  }
  public resetVisualizationColor08() {
    this._visualizationColor08 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visualizationColor08Input() {
    return this._visualizationColor08;
  }

  // visualization_color_09 - computed: true, optional: true, required: false
  private _visualizationColor09?: string; 
  public get visualizationColor09() {
    return this.getStringAttribute('visualization_color_09');
  }
  public set visualizationColor09(value: string) {
    this._visualizationColor09 = value;
  }
  public resetVisualizationColor09() {
    this._visualizationColor09 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visualizationColor09Input() {
    return this._visualizationColor09;
  }

  // visualization_color_10 - computed: true, optional: true, required: false
  private _visualizationColor10?: string; 
  public get visualizationColor10() {
    return this.getStringAttribute('visualization_color_10');
  }
  public set visualizationColor10(value: string) {
    this._visualizationColor10 = value;
  }
  public resetVisualizationColor10() {
    this._visualizationColor10 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visualizationColor10Input() {
    return this._visualizationColor10;
  }

  // visualization_color_11 - computed: true, optional: true, required: false
  private _visualizationColor11?: string; 
  public get visualizationColor11() {
    return this.getStringAttribute('visualization_color_11');
  }
  public set visualizationColor11(value: string) {
    this._visualizationColor11 = value;
  }
  public resetVisualizationColor11() {
    this._visualizationColor11 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visualizationColor11Input() {
    return this._visualizationColor11;
  }

  // visualization_color_12 - computed: true, optional: true, required: false
  private _visualizationColor12?: string; 
  public get visualizationColor12() {
    return this.getStringAttribute('visualization_color_12');
  }
  public set visualizationColor12(value: string) {
    this._visualizationColor12 = value;
  }
  public resetVisualizationColor12() {
    this._visualizationColor12 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visualizationColor12Input() {
    return this._visualizationColor12;
  }

  // visualization_color_13 - computed: true, optional: true, required: false
  private _visualizationColor13?: string; 
  public get visualizationColor13() {
    return this.getStringAttribute('visualization_color_13');
  }
  public set visualizationColor13(value: string) {
    this._visualizationColor13 = value;
  }
  public resetVisualizationColor13() {
    this._visualizationColor13 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visualizationColor13Input() {
    return this._visualizationColor13;
  }

  // visualization_color_14 - computed: true, optional: true, required: false
  private _visualizationColor14?: string; 
  public get visualizationColor14() {
    return this.getStringAttribute('visualization_color_14');
  }
  public set visualizationColor14(value: string) {
    this._visualizationColor14 = value;
  }
  public resetVisualizationColor14() {
    this._visualizationColor14 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visualizationColor14Input() {
    return this._visualizationColor14;
  }

  // visualization_color_15 - computed: true, optional: true, required: false
  private _visualizationColor15?: string; 
  public get visualizationColor15() {
    return this.getStringAttribute('visualization_color_15');
  }
  public set visualizationColor15(value: string) {
    this._visualizationColor15 = value;
  }
  public resetVisualizationColor15() {
    this._visualizationColor15 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visualizationColor15Input() {
    return this._visualizationColor15;
  }

  // visualization_color_16 - computed: true, optional: true, required: false
  private _visualizationColor16?: string; 
  public get visualizationColor16() {
    return this.getStringAttribute('visualization_color_16');
  }
  public set visualizationColor16(value: string) {
    this._visualizationColor16 = value;
  }
  public resetVisualizationColor16() {
    this._visualizationColor16 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visualizationColor16Input() {
    return this._visualizationColor16;
  }

  // visualization_color_17 - computed: true, optional: true, required: false
  private _visualizationColor17?: string; 
  public get visualizationColor17() {
    return this.getStringAttribute('visualization_color_17');
  }
  public set visualizationColor17(value: string) {
    this._visualizationColor17 = value;
  }
  public resetVisualizationColor17() {
    this._visualizationColor17 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visualizationColor17Input() {
    return this._visualizationColor17;
  }

  // visualization_color_18 - computed: true, optional: true, required: false
  private _visualizationColor18?: string; 
  public get visualizationColor18() {
    return this.getStringAttribute('visualization_color_18');
  }
  public set visualizationColor18(value: string) {
    this._visualizationColor18 = value;
  }
  public resetVisualizationColor18() {
    this._visualizationColor18 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visualizationColor18Input() {
    return this._visualizationColor18;
  }

  // visualization_color_19 - computed: true, optional: true, required: false
  private _visualizationColor19?: string; 
  public get visualizationColor19() {
    return this.getStringAttribute('visualization_color_19');
  }
  public set visualizationColor19(value: string) {
    this._visualizationColor19 = value;
  }
  public resetVisualizationColor19() {
    this._visualizationColor19 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visualizationColor19Input() {
    return this._visualizationColor19;
  }

  // visualization_color_20 - computed: true, optional: true, required: false
  private _visualizationColor20?: string; 
  public get visualizationColor20() {
    return this.getStringAttribute('visualization_color_20');
  }
  public set visualizationColor20(value: string) {
    this._visualizationColor20 = value;
  }
  public resetVisualizationColor20() {
    this._visualizationColor20 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visualizationColor20Input() {
    return this._visualizationColor20;
  }

  // widget_background_color - computed: true, optional: true, required: false
  private _widgetBackgroundColor = new AccountSettingV2EffectiveWorkspaceDashboardThemeWidgetBackgroundColorOutputReference(this, "widget_background_color");
  public get widgetBackgroundColor() {
    return this._widgetBackgroundColor;
  }
  public putWidgetBackgroundColor(value: AccountSettingV2EffectiveWorkspaceDashboardThemeWidgetBackgroundColor) {
    this._widgetBackgroundColor.internalValue = value;
  }
  public resetWidgetBackgroundColor() {
    this._widgetBackgroundColor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widgetBackgroundColorInput() {
    return this._widgetBackgroundColor.internalValue;
  }

  // widget_border_color - computed: true, optional: true, required: false
  private _widgetBorderColor = new AccountSettingV2EffectiveWorkspaceDashboardThemeWidgetBorderColorOutputReference(this, "widget_border_color");
  public get widgetBorderColor() {
    return this._widgetBorderColor;
  }
  public putWidgetBorderColor(value: AccountSettingV2EffectiveWorkspaceDashboardThemeWidgetBorderColor) {
    this._widgetBorderColor.internalValue = value;
  }
  public resetWidgetBorderColor() {
    this._widgetBorderColor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widgetBorderColorInput() {
    return this._widgetBorderColor.internalValue;
  }

  // widget_corner_radius - computed: true, optional: true, required: false
  private _widgetCornerRadius?: number; 
  public get widgetCornerRadius() {
    return this.getNumberAttribute('widget_corner_radius');
  }
  public set widgetCornerRadius(value: number) {
    this._widgetCornerRadius = value;
  }
  public resetWidgetCornerRadius() {
    this._widgetCornerRadius = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widgetCornerRadiusInput() {
    return this._widgetCornerRadius;
  }

  // widget_header_alignment - computed: true, optional: true, required: false
  private _widgetHeaderAlignment?: string; 
  public get widgetHeaderAlignment() {
    return this.getStringAttribute('widget_header_alignment');
  }
  public set widgetHeaderAlignment(value: string) {
    this._widgetHeaderAlignment = value;
  }
  public resetWidgetHeaderAlignment() {
    this._widgetHeaderAlignment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widgetHeaderAlignmentInput() {
    return this._widgetHeaderAlignment;
  }

  // widget_margin - computed: true, optional: true, required: false
  private _widgetMargin?: number; 
  public get widgetMargin() {
    return this.getNumberAttribute('widget_margin');
  }
  public set widgetMargin(value: number) {
    this._widgetMargin = value;
  }
  public resetWidgetMargin() {
    this._widgetMargin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widgetMarginInput() {
    return this._widgetMargin;
  }

  // widget_padding - computed: true, optional: true, required: false
  private _widgetPadding?: number; 
  public get widgetPadding() {
    return this.getNumberAttribute('widget_padding');
  }
  public set widgetPadding(value: number) {
    this._widgetPadding = value;
  }
  public resetWidgetPadding() {
    this._widgetPadding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widgetPaddingInput() {
    return this._widgetPadding;
  }

  // widget_shadow - computed: true, optional: true, required: false
  private _widgetShadow?: number; 
  public get widgetShadow() {
    return this.getNumberAttribute('widget_shadow');
  }
  public set widgetShadow(value: number) {
    this._widgetShadow = value;
  }
  public resetWidgetShadow() {
    this._widgetShadow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widgetShadowInput() {
    return this._widgetShadow;
  }
}
export interface AccountSettingV2EffectiveWorkspaceLabel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#color AccountSettingV2#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#label AccountSettingV2#label}
  */
  readonly label?: string;
}

export function accountSettingV2EffectiveWorkspaceLabelToTerraform(struct?: AccountSettingV2EffectiveWorkspaceLabel | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    color: cdktn.stringToTerraform(struct!.color),
    label: cdktn.stringToTerraform(struct!.label),
  }
}


export function accountSettingV2EffectiveWorkspaceLabelToHclTerraform(struct?: AccountSettingV2EffectiveWorkspaceLabel | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    color: {
      value: cdktn.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktn.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2EffectiveWorkspaceLabelOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2EffectiveWorkspaceLabel | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2EffectiveWorkspaceLabel | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._label = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._label = value.label;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
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
}
export interface AccountSettingV2IntegerVal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#value AccountSettingV2#value}
  */
  readonly value?: number;
}

export function accountSettingV2IntegerValToTerraform(struct?: AccountSettingV2IntegerVal | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function accountSettingV2IntegerValToHclTerraform(struct?: AccountSettingV2IntegerVal | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2IntegerValOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2IntegerVal | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2IntegerVal | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface AccountSettingV2OperationalEmailCustomRecipient {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#email AccountSettingV2#email}
  */
  readonly email?: string;
}

export function accountSettingV2OperationalEmailCustomRecipientToTerraform(struct?: AccountSettingV2OperationalEmailCustomRecipient | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    email: cdktn.stringToTerraform(struct!.email),
  }
}


export function accountSettingV2OperationalEmailCustomRecipientToHclTerraform(struct?: AccountSettingV2OperationalEmailCustomRecipient | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    email: {
      value: cdktn.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2OperationalEmailCustomRecipientOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2OperationalEmailCustomRecipient | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2OperationalEmailCustomRecipient | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._email = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._email = value.email;
    }
  }

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }
}
export interface AccountSettingV2PersonalCompute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#value AccountSettingV2#value}
  */
  readonly value?: string;
}

export function accountSettingV2PersonalComputeToTerraform(struct?: AccountSettingV2PersonalCompute | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function accountSettingV2PersonalComputeToHclTerraform(struct?: AccountSettingV2PersonalCompute | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2PersonalComputeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2PersonalCompute | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2PersonalCompute | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface AccountSettingV2RestrictWorkspaceAdmins {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#disable_gov_tag_creation AccountSettingV2#disable_gov_tag_creation}
  */
  readonly disableGovTagCreation?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#status AccountSettingV2#status}
  */
  readonly status: string;
}

export function accountSettingV2RestrictWorkspaceAdminsToTerraform(struct?: AccountSettingV2RestrictWorkspaceAdmins | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    disable_gov_tag_creation: cdktn.booleanToTerraform(struct!.disableGovTagCreation),
    status: cdktn.stringToTerraform(struct!.status),
  }
}


export function accountSettingV2RestrictWorkspaceAdminsToHclTerraform(struct?: AccountSettingV2RestrictWorkspaceAdmins | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    disable_gov_tag_creation: {
      value: cdktn.booleanToHclTerraform(struct!.disableGovTagCreation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    status: {
      value: cdktn.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2RestrictWorkspaceAdminsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2RestrictWorkspaceAdmins | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableGovTagCreation !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableGovTagCreation = this._disableGovTagCreation;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2RestrictWorkspaceAdmins | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableGovTagCreation = undefined;
      this._status = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableGovTagCreation = value.disableGovTagCreation;
      this._status = value.status;
    }
  }

  // disable_gov_tag_creation - computed: false, optional: true, required: false
  private _disableGovTagCreation?: boolean | cdktn.IResolvable; 
  public get disableGovTagCreation() {
    return this.getBooleanAttribute('disable_gov_tag_creation');
  }
  public set disableGovTagCreation(value: boolean | cdktn.IResolvable) {
    this._disableGovTagCreation = value;
  }
  public resetDisableGovTagCreation() {
    this._disableGovTagCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableGovTagCreationInput() {
    return this._disableGovTagCreation;
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface AccountSettingV2StringVal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#value AccountSettingV2#value}
  */
  readonly value?: string;
}

export function accountSettingV2StringValToTerraform(struct?: AccountSettingV2StringVal | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function accountSettingV2StringValToHclTerraform(struct?: AccountSettingV2StringVal | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2StringValOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2StringVal | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2StringVal | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface AccountSettingV2WorkspaceDashboardThemeAxisLineColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#dark AccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#light AccountSettingV2#light}
  */
  readonly light?: string;
}

export function accountSettingV2WorkspaceDashboardThemeAxisLineColorToTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeAxisLineColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function accountSettingV2WorkspaceDashboardThemeAxisLineColorToHclTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeAxisLineColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dark: {
      value: cdktn.stringToHclTerraform(struct!.dark),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    light: {
      value: cdktn.stringToHclTerraform(struct!.light),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2WorkspaceDashboardThemeAxisLineColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2WorkspaceDashboardThemeAxisLineColor | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dark !== undefined) {
      hasAnyValues = true;
      internalValueResult.dark = this._dark;
    }
    if (this._light !== undefined) {
      hasAnyValues = true;
      internalValueResult.light = this._light;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2WorkspaceDashboardThemeAxisLineColor | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dark = undefined;
      this._light = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dark = value.dark;
      this._light = value.light;
    }
  }

  // dark - computed: false, optional: true, required: false
  private _dark?: string; 
  public get dark() {
    return this.getStringAttribute('dark');
  }
  public set dark(value: string) {
    this._dark = value;
  }
  public resetDark() {
    this._dark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get darkInput() {
    return this._dark;
  }

  // light - computed: false, optional: true, required: false
  private _light?: string; 
  public get light() {
    return this.getStringAttribute('light');
  }
  public set light(value: string) {
    this._light = value;
  }
  public resetLight() {
    this._light = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lightInput() {
    return this._light;
  }
}
export interface AccountSettingV2WorkspaceDashboardThemeCanvasBackgroundColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#dark AccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#light AccountSettingV2#light}
  */
  readonly light?: string;
}

export function accountSettingV2WorkspaceDashboardThemeCanvasBackgroundColorToTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeCanvasBackgroundColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function accountSettingV2WorkspaceDashboardThemeCanvasBackgroundColorToHclTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeCanvasBackgroundColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dark: {
      value: cdktn.stringToHclTerraform(struct!.dark),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    light: {
      value: cdktn.stringToHclTerraform(struct!.light),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2WorkspaceDashboardThemeCanvasBackgroundColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2WorkspaceDashboardThemeCanvasBackgroundColor | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dark !== undefined) {
      hasAnyValues = true;
      internalValueResult.dark = this._dark;
    }
    if (this._light !== undefined) {
      hasAnyValues = true;
      internalValueResult.light = this._light;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2WorkspaceDashboardThemeCanvasBackgroundColor | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dark = undefined;
      this._light = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dark = value.dark;
      this._light = value.light;
    }
  }

  // dark - computed: false, optional: true, required: false
  private _dark?: string; 
  public get dark() {
    return this.getStringAttribute('dark');
  }
  public set dark(value: string) {
    this._dark = value;
  }
  public resetDark() {
    this._dark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get darkInput() {
    return this._dark;
  }

  // light - computed: false, optional: true, required: false
  private _light?: string; 
  public get light() {
    return this.getStringAttribute('light');
  }
  public set light(value: string) {
    this._light = value;
  }
  public resetLight() {
    this._light = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lightInput() {
    return this._light;
  }
}
export interface AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEnd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#dark AccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#light AccountSettingV2#light}
  */
  readonly light?: string;
}

export function accountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEndToTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEnd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function accountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEndToHclTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEnd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dark: {
      value: cdktn.stringToHclTerraform(struct!.dark),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    light: {
      value: cdktn.stringToHclTerraform(struct!.light),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEndOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEnd | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dark !== undefined) {
      hasAnyValues = true;
      internalValueResult.dark = this._dark;
    }
    if (this._light !== undefined) {
      hasAnyValues = true;
      internalValueResult.light = this._light;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEnd | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dark = undefined;
      this._light = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dark = value.dark;
      this._light = value.light;
    }
  }

  // dark - computed: false, optional: true, required: false
  private _dark?: string; 
  public get dark() {
    return this.getStringAttribute('dark');
  }
  public set dark(value: string) {
    this._dark = value;
  }
  public resetDark() {
    this._dark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get darkInput() {
    return this._dark;
  }

  // light - computed: false, optional: true, required: false
  private _light?: string; 
  public get light() {
    return this.getStringAttribute('light');
  }
  public set light(value: string) {
    this._light = value;
  }
  public resetLight() {
    this._light = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lightInput() {
    return this._light;
  }
}
export interface AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMid {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#dark AccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#light AccountSettingV2#light}
  */
  readonly light?: string;
}

export function accountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMidToTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMid | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function accountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMidToHclTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMid | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dark: {
      value: cdktn.stringToHclTerraform(struct!.dark),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    light: {
      value: cdktn.stringToHclTerraform(struct!.light),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMidOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMid | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dark !== undefined) {
      hasAnyValues = true;
      internalValueResult.dark = this._dark;
    }
    if (this._light !== undefined) {
      hasAnyValues = true;
      internalValueResult.light = this._light;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMid | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dark = undefined;
      this._light = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dark = value.dark;
      this._light = value.light;
    }
  }

  // dark - computed: false, optional: true, required: false
  private _dark?: string; 
  public get dark() {
    return this.getStringAttribute('dark');
  }
  public set dark(value: string) {
    this._dark = value;
  }
  public resetDark() {
    this._dark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get darkInput() {
    return this._dark;
  }

  // light - computed: false, optional: true, required: false
  private _light?: string; 
  public get light() {
    return this.getStringAttribute('light');
  }
  public set light(value: string) {
    this._light = value;
  }
  public resetLight() {
    this._light = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lightInput() {
    return this._light;
  }
}
export interface AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStart {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#dark AccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#light AccountSettingV2#light}
  */
  readonly light?: string;
}

export function accountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStartToTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStart | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function accountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStartToHclTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStart | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dark: {
      value: cdktn.stringToHclTerraform(struct!.dark),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    light: {
      value: cdktn.stringToHclTerraform(struct!.light),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStartOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStart | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dark !== undefined) {
      hasAnyValues = true;
      internalValueResult.dark = this._dark;
    }
    if (this._light !== undefined) {
      hasAnyValues = true;
      internalValueResult.light = this._light;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStart | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dark = undefined;
      this._light = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dark = value.dark;
      this._light = value.light;
    }
  }

  // dark - computed: false, optional: true, required: false
  private _dark?: string; 
  public get dark() {
    return this.getStringAttribute('dark');
  }
  public set dark(value: string) {
    this._dark = value;
  }
  public resetDark() {
    this._dark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get darkInput() {
    return this._dark;
  }

  // light - computed: false, optional: true, required: false
  private _light?: string; 
  public get light() {
    return this.getStringAttribute('light');
  }
  public set light(value: string) {
    this._light = value;
  }
  public resetLight() {
    this._light = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lightInput() {
    return this._light;
  }
}
export interface AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDiverging {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#end AccountSettingV2#end}
  */
  readonly end?: AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEnd;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#mid AccountSettingV2#mid}
  */
  readonly mid?: AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMid;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#start AccountSettingV2#start}
  */
  readonly start?: AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStart;
}

export function accountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingToTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDiverging | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end: accountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEndToTerraform(struct!.end),
    mid: accountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMidToTerraform(struct!.mid),
    start: accountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStartToTerraform(struct!.start),
  }
}


export function accountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingToHclTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDiverging | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end: {
      value: accountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEndToHclTerraform(struct!.end),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEnd",
    },
    mid: {
      value: accountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMidToHclTerraform(struct!.mid),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMid",
    },
    start: {
      value: accountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStartToHclTerraform(struct!.start),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStart",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDiverging | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end?.internalValue;
    }
    if (this._mid?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mid = this._mid?.internalValue;
    }
    if (this._start?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDiverging | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end.internalValue = undefined;
      this._mid.internalValue = undefined;
      this._start.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end.internalValue = value.end;
      this._mid.internalValue = value.mid;
      this._start.internalValue = value.start;
    }
  }

  // end - computed: false, optional: true, required: false
  private _end = new AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEndOutputReference(this, "end");
  public get end() {
    return this._end;
  }
  public putEnd(value: AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEnd) {
    this._end.internalValue = value;
  }
  public resetEnd() {
    this._end.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end.internalValue;
  }

  // mid - computed: false, optional: true, required: false
  private _mid = new AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMidOutputReference(this, "mid");
  public get mid() {
    return this._mid;
  }
  public putMid(value: AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMid) {
    this._mid.internalValue = value;
  }
  public resetMid() {
    this._mid.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get midInput() {
    return this._mid.internalValue;
  }

  // start - computed: false, optional: true, required: false
  private _start = new AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStartOutputReference(this, "start");
  public get start() {
    return this._start;
  }
  public putStart(value: AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStart) {
    this._start.internalValue = value;
  }
  public resetStart() {
    this._start.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start.internalValue;
  }
}
export interface AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEnd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#dark AccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#light AccountSettingV2#light}
  */
  readonly light?: string;
}

export function accountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEndToTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEnd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function accountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEndToHclTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEnd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dark: {
      value: cdktn.stringToHclTerraform(struct!.dark),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    light: {
      value: cdktn.stringToHclTerraform(struct!.light),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEndOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEnd | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dark !== undefined) {
      hasAnyValues = true;
      internalValueResult.dark = this._dark;
    }
    if (this._light !== undefined) {
      hasAnyValues = true;
      internalValueResult.light = this._light;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEnd | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dark = undefined;
      this._light = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dark = value.dark;
      this._light = value.light;
    }
  }

  // dark - computed: false, optional: true, required: false
  private _dark?: string; 
  public get dark() {
    return this.getStringAttribute('dark');
  }
  public set dark(value: string) {
    this._dark = value;
  }
  public resetDark() {
    this._dark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get darkInput() {
    return this._dark;
  }

  // light - computed: false, optional: true, required: false
  private _light?: string; 
  public get light() {
    return this.getStringAttribute('light');
  }
  public set light(value: string) {
    this._light = value;
  }
  public resetLight() {
    this._light = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lightInput() {
    return this._light;
  }
}
export interface AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStart {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#dark AccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#light AccountSettingV2#light}
  */
  readonly light?: string;
}

export function accountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStartToTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStart | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function accountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStartToHclTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStart | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dark: {
      value: cdktn.stringToHclTerraform(struct!.dark),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    light: {
      value: cdktn.stringToHclTerraform(struct!.light),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStartOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStart | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dark !== undefined) {
      hasAnyValues = true;
      internalValueResult.dark = this._dark;
    }
    if (this._light !== undefined) {
      hasAnyValues = true;
      internalValueResult.light = this._light;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStart | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dark = undefined;
      this._light = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dark = value.dark;
      this._light = value.light;
    }
  }

  // dark - computed: false, optional: true, required: false
  private _dark?: string; 
  public get dark() {
    return this.getStringAttribute('dark');
  }
  public set dark(value: string) {
    this._dark = value;
  }
  public resetDark() {
    this._dark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get darkInput() {
    return this._dark;
  }

  // light - computed: false, optional: true, required: false
  private _light?: string; 
  public get light() {
    return this.getStringAttribute('light');
  }
  public set light(value: string) {
    this._light = value;
  }
  public resetLight() {
    this._light = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lightInput() {
    return this._light;
  }
}
export interface AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequential {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#end AccountSettingV2#end}
  */
  readonly end?: AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEnd;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#start AccountSettingV2#start}
  */
  readonly start?: AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStart;
}

export function accountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialToTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequential | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end: accountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEndToTerraform(struct!.end),
    start: accountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStartToTerraform(struct!.start),
  }
}


export function accountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialToHclTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequential | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end: {
      value: accountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEndToHclTerraform(struct!.end),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEnd",
    },
    start: {
      value: accountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStartToHclTerraform(struct!.start),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStart",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequential | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end?.internalValue;
    }
    if (this._start?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequential | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end.internalValue = undefined;
      this._start.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end.internalValue = value.end;
      this._start.internalValue = value.start;
    }
  }

  // end - computed: false, optional: true, required: false
  private _end = new AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEndOutputReference(this, "end");
  public get end() {
    return this._end;
  }
  public putEnd(value: AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEnd) {
    this._end.internalValue = value;
  }
  public resetEnd() {
    this._end.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end.internalValue;
  }

  // start - computed: false, optional: true, required: false
  private _start = new AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStartOutputReference(this, "start");
  public get start() {
    return this._start;
  }
  public putStart(value: AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStart) {
    this._start.internalValue = value;
  }
  public resetStart() {
    this._start.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start.internalValue;
  }
}
export interface AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkMode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#color AccountSettingV2#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#color_scheme AccountSettingV2#color_scheme}
  */
  readonly colorScheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#custom_diverging AccountSettingV2#custom_diverging}
  */
  readonly customDiverging?: AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDiverging;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#custom_sequential AccountSettingV2#custom_sequential}
  */
  readonly customSequential?: AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequential;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#from_categorical_index AccountSettingV2#from_categorical_index}
  */
  readonly fromCategoricalIndex?: number;
}

export function accountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeToTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkMode | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    color: cdktn.stringToTerraform(struct!.color),
    color_scheme: cdktn.stringToTerraform(struct!.colorScheme),
    custom_diverging: accountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingToTerraform(struct!.customDiverging),
    custom_sequential: accountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialToTerraform(struct!.customSequential),
    from_categorical_index: cdktn.numberToTerraform(struct!.fromCategoricalIndex),
  }
}


export function accountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeToHclTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkMode | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    color: {
      value: cdktn.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    color_scheme: {
      value: cdktn.stringToHclTerraform(struct!.colorScheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_diverging: {
      value: accountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingToHclTerraform(struct!.customDiverging),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDiverging",
    },
    custom_sequential: {
      value: accountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialToHclTerraform(struct!.customSequential),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequential",
    },
    from_categorical_index: {
      value: cdktn.numberToHclTerraform(struct!.fromCategoricalIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkMode | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._colorScheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.colorScheme = this._colorScheme;
    }
    if (this._customDiverging?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customDiverging = this._customDiverging?.internalValue;
    }
    if (this._customSequential?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSequential = this._customSequential?.internalValue;
    }
    if (this._fromCategoricalIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromCategoricalIndex = this._fromCategoricalIndex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkMode | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._colorScheme = undefined;
      this._customDiverging.internalValue = undefined;
      this._customSequential.internalValue = undefined;
      this._fromCategoricalIndex = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._colorScheme = value.colorScheme;
      this._customDiverging.internalValue = value.customDiverging;
      this._customSequential.internalValue = value.customSequential;
      this._fromCategoricalIndex = value.fromCategoricalIndex;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // color_scheme - computed: false, optional: true, required: false
  private _colorScheme?: string; 
  public get colorScheme() {
    return this.getStringAttribute('color_scheme');
  }
  public set colorScheme(value: string) {
    this._colorScheme = value;
  }
  public resetColorScheme() {
    this._colorScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorSchemeInput() {
    return this._colorScheme;
  }

  // custom_diverging - computed: false, optional: true, required: false
  private _customDiverging = new AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingOutputReference(this, "custom_diverging");
  public get customDiverging() {
    return this._customDiverging;
  }
  public putCustomDiverging(value: AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDiverging) {
    this._customDiverging.internalValue = value;
  }
  public resetCustomDiverging() {
    this._customDiverging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDivergingInput() {
    return this._customDiverging.internalValue;
  }

  // custom_sequential - computed: false, optional: true, required: false
  private _customSequential = new AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialOutputReference(this, "custom_sequential");
  public get customSequential() {
    return this._customSequential;
  }
  public putCustomSequential(value: AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequential) {
    this._customSequential.internalValue = value;
  }
  public resetCustomSequential() {
    this._customSequential.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSequentialInput() {
    return this._customSequential.internalValue;
  }

  // from_categorical_index - computed: false, optional: true, required: false
  private _fromCategoricalIndex?: number; 
  public get fromCategoricalIndex() {
    return this.getNumberAttribute('from_categorical_index');
  }
  public set fromCategoricalIndex(value: number) {
    this._fromCategoricalIndex = value;
  }
  public resetFromCategoricalIndex() {
    this._fromCategoricalIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromCategoricalIndexInput() {
    return this._fromCategoricalIndex;
  }
}
export interface AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEnd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#dark AccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#light AccountSettingV2#light}
  */
  readonly light?: string;
}

export function accountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEndToTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEnd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function accountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEndToHclTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEnd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dark: {
      value: cdktn.stringToHclTerraform(struct!.dark),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    light: {
      value: cdktn.stringToHclTerraform(struct!.light),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEndOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEnd | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dark !== undefined) {
      hasAnyValues = true;
      internalValueResult.dark = this._dark;
    }
    if (this._light !== undefined) {
      hasAnyValues = true;
      internalValueResult.light = this._light;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEnd | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dark = undefined;
      this._light = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dark = value.dark;
      this._light = value.light;
    }
  }

  // dark - computed: false, optional: true, required: false
  private _dark?: string; 
  public get dark() {
    return this.getStringAttribute('dark');
  }
  public set dark(value: string) {
    this._dark = value;
  }
  public resetDark() {
    this._dark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get darkInput() {
    return this._dark;
  }

  // light - computed: false, optional: true, required: false
  private _light?: string; 
  public get light() {
    return this.getStringAttribute('light');
  }
  public set light(value: string) {
    this._light = value;
  }
  public resetLight() {
    this._light = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lightInput() {
    return this._light;
  }
}
export interface AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMid {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#dark AccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#light AccountSettingV2#light}
  */
  readonly light?: string;
}

export function accountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMidToTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMid | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function accountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMidToHclTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMid | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dark: {
      value: cdktn.stringToHclTerraform(struct!.dark),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    light: {
      value: cdktn.stringToHclTerraform(struct!.light),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMidOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMid | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dark !== undefined) {
      hasAnyValues = true;
      internalValueResult.dark = this._dark;
    }
    if (this._light !== undefined) {
      hasAnyValues = true;
      internalValueResult.light = this._light;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMid | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dark = undefined;
      this._light = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dark = value.dark;
      this._light = value.light;
    }
  }

  // dark - computed: false, optional: true, required: false
  private _dark?: string; 
  public get dark() {
    return this.getStringAttribute('dark');
  }
  public set dark(value: string) {
    this._dark = value;
  }
  public resetDark() {
    this._dark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get darkInput() {
    return this._dark;
  }

  // light - computed: false, optional: true, required: false
  private _light?: string; 
  public get light() {
    return this.getStringAttribute('light');
  }
  public set light(value: string) {
    this._light = value;
  }
  public resetLight() {
    this._light = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lightInput() {
    return this._light;
  }
}
export interface AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStart {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#dark AccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#light AccountSettingV2#light}
  */
  readonly light?: string;
}

export function accountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStartToTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStart | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function accountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStartToHclTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStart | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dark: {
      value: cdktn.stringToHclTerraform(struct!.dark),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    light: {
      value: cdktn.stringToHclTerraform(struct!.light),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStartOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStart | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dark !== undefined) {
      hasAnyValues = true;
      internalValueResult.dark = this._dark;
    }
    if (this._light !== undefined) {
      hasAnyValues = true;
      internalValueResult.light = this._light;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStart | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dark = undefined;
      this._light = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dark = value.dark;
      this._light = value.light;
    }
  }

  // dark - computed: false, optional: true, required: false
  private _dark?: string; 
  public get dark() {
    return this.getStringAttribute('dark');
  }
  public set dark(value: string) {
    this._dark = value;
  }
  public resetDark() {
    this._dark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get darkInput() {
    return this._dark;
  }

  // light - computed: false, optional: true, required: false
  private _light?: string; 
  public get light() {
    return this.getStringAttribute('light');
  }
  public set light(value: string) {
    this._light = value;
  }
  public resetLight() {
    this._light = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lightInput() {
    return this._light;
  }
}
export interface AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDiverging {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#end AccountSettingV2#end}
  */
  readonly end?: AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEnd;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#mid AccountSettingV2#mid}
  */
  readonly mid?: AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMid;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#start AccountSettingV2#start}
  */
  readonly start?: AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStart;
}

export function accountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingToTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDiverging | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end: accountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEndToTerraform(struct!.end),
    mid: accountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMidToTerraform(struct!.mid),
    start: accountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStartToTerraform(struct!.start),
  }
}


export function accountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingToHclTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDiverging | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end: {
      value: accountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEndToHclTerraform(struct!.end),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEnd",
    },
    mid: {
      value: accountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMidToHclTerraform(struct!.mid),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMid",
    },
    start: {
      value: accountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStartToHclTerraform(struct!.start),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStart",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDiverging | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end?.internalValue;
    }
    if (this._mid?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mid = this._mid?.internalValue;
    }
    if (this._start?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDiverging | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end.internalValue = undefined;
      this._mid.internalValue = undefined;
      this._start.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end.internalValue = value.end;
      this._mid.internalValue = value.mid;
      this._start.internalValue = value.start;
    }
  }

  // end - computed: false, optional: true, required: false
  private _end = new AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEndOutputReference(this, "end");
  public get end() {
    return this._end;
  }
  public putEnd(value: AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEnd) {
    this._end.internalValue = value;
  }
  public resetEnd() {
    this._end.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end.internalValue;
  }

  // mid - computed: false, optional: true, required: false
  private _mid = new AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMidOutputReference(this, "mid");
  public get mid() {
    return this._mid;
  }
  public putMid(value: AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMid) {
    this._mid.internalValue = value;
  }
  public resetMid() {
    this._mid.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get midInput() {
    return this._mid.internalValue;
  }

  // start - computed: false, optional: true, required: false
  private _start = new AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStartOutputReference(this, "start");
  public get start() {
    return this._start;
  }
  public putStart(value: AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStart) {
    this._start.internalValue = value;
  }
  public resetStart() {
    this._start.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start.internalValue;
  }
}
export interface AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEnd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#dark AccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#light AccountSettingV2#light}
  */
  readonly light?: string;
}

export function accountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEndToTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEnd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function accountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEndToHclTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEnd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dark: {
      value: cdktn.stringToHclTerraform(struct!.dark),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    light: {
      value: cdktn.stringToHclTerraform(struct!.light),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEndOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEnd | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dark !== undefined) {
      hasAnyValues = true;
      internalValueResult.dark = this._dark;
    }
    if (this._light !== undefined) {
      hasAnyValues = true;
      internalValueResult.light = this._light;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEnd | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dark = undefined;
      this._light = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dark = value.dark;
      this._light = value.light;
    }
  }

  // dark - computed: false, optional: true, required: false
  private _dark?: string; 
  public get dark() {
    return this.getStringAttribute('dark');
  }
  public set dark(value: string) {
    this._dark = value;
  }
  public resetDark() {
    this._dark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get darkInput() {
    return this._dark;
  }

  // light - computed: false, optional: true, required: false
  private _light?: string; 
  public get light() {
    return this.getStringAttribute('light');
  }
  public set light(value: string) {
    this._light = value;
  }
  public resetLight() {
    this._light = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lightInput() {
    return this._light;
  }
}
export interface AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStart {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#dark AccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#light AccountSettingV2#light}
  */
  readonly light?: string;
}

export function accountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStartToTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStart | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function accountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStartToHclTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStart | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dark: {
      value: cdktn.stringToHclTerraform(struct!.dark),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    light: {
      value: cdktn.stringToHclTerraform(struct!.light),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStartOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStart | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dark !== undefined) {
      hasAnyValues = true;
      internalValueResult.dark = this._dark;
    }
    if (this._light !== undefined) {
      hasAnyValues = true;
      internalValueResult.light = this._light;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStart | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dark = undefined;
      this._light = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dark = value.dark;
      this._light = value.light;
    }
  }

  // dark - computed: false, optional: true, required: false
  private _dark?: string; 
  public get dark() {
    return this.getStringAttribute('dark');
  }
  public set dark(value: string) {
    this._dark = value;
  }
  public resetDark() {
    this._dark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get darkInput() {
    return this._dark;
  }

  // light - computed: false, optional: true, required: false
  private _light?: string; 
  public get light() {
    return this.getStringAttribute('light');
  }
  public set light(value: string) {
    this._light = value;
  }
  public resetLight() {
    this._light = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lightInput() {
    return this._light;
  }
}
export interface AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequential {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#end AccountSettingV2#end}
  */
  readonly end?: AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEnd;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#start AccountSettingV2#start}
  */
  readonly start?: AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStart;
}

export function accountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialToTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequential | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end: accountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEndToTerraform(struct!.end),
    start: accountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStartToTerraform(struct!.start),
  }
}


export function accountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialToHclTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequential | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end: {
      value: accountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEndToHclTerraform(struct!.end),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEnd",
    },
    start: {
      value: accountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStartToHclTerraform(struct!.start),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStart",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequential | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end?.internalValue;
    }
    if (this._start?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequential | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end.internalValue = undefined;
      this._start.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end.internalValue = value.end;
      this._start.internalValue = value.start;
    }
  }

  // end - computed: false, optional: true, required: false
  private _end = new AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEndOutputReference(this, "end");
  public get end() {
    return this._end;
  }
  public putEnd(value: AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEnd) {
    this._end.internalValue = value;
  }
  public resetEnd() {
    this._end.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end.internalValue;
  }

  // start - computed: false, optional: true, required: false
  private _start = new AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStartOutputReference(this, "start");
  public get start() {
    return this._start;
  }
  public putStart(value: AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStart) {
    this._start.internalValue = value;
  }
  public resetStart() {
    this._start.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start.internalValue;
  }
}
export interface AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightMode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#color AccountSettingV2#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#color_scheme AccountSettingV2#color_scheme}
  */
  readonly colorScheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#custom_diverging AccountSettingV2#custom_diverging}
  */
  readonly customDiverging?: AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDiverging;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#custom_sequential AccountSettingV2#custom_sequential}
  */
  readonly customSequential?: AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequential;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#from_categorical_index AccountSettingV2#from_categorical_index}
  */
  readonly fromCategoricalIndex?: number;
}

export function accountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeToTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightMode | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    color: cdktn.stringToTerraform(struct!.color),
    color_scheme: cdktn.stringToTerraform(struct!.colorScheme),
    custom_diverging: accountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingToTerraform(struct!.customDiverging),
    custom_sequential: accountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialToTerraform(struct!.customSequential),
    from_categorical_index: cdktn.numberToTerraform(struct!.fromCategoricalIndex),
  }
}


export function accountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeToHclTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightMode | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    color: {
      value: cdktn.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    color_scheme: {
      value: cdktn.stringToHclTerraform(struct!.colorScheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_diverging: {
      value: accountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingToHclTerraform(struct!.customDiverging),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDiverging",
    },
    custom_sequential: {
      value: accountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialToHclTerraform(struct!.customSequential),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequential",
    },
    from_categorical_index: {
      value: cdktn.numberToHclTerraform(struct!.fromCategoricalIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightMode | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._colorScheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.colorScheme = this._colorScheme;
    }
    if (this._customDiverging?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customDiverging = this._customDiverging?.internalValue;
    }
    if (this._customSequential?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSequential = this._customSequential?.internalValue;
    }
    if (this._fromCategoricalIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromCategoricalIndex = this._fromCategoricalIndex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightMode | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._colorScheme = undefined;
      this._customDiverging.internalValue = undefined;
      this._customSequential.internalValue = undefined;
      this._fromCategoricalIndex = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._colorScheme = value.colorScheme;
      this._customDiverging.internalValue = value.customDiverging;
      this._customSequential.internalValue = value.customSequential;
      this._fromCategoricalIndex = value.fromCategoricalIndex;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // color_scheme - computed: false, optional: true, required: false
  private _colorScheme?: string; 
  public get colorScheme() {
    return this.getStringAttribute('color_scheme');
  }
  public set colorScheme(value: string) {
    this._colorScheme = value;
  }
  public resetColorScheme() {
    this._colorScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorSchemeInput() {
    return this._colorScheme;
  }

  // custom_diverging - computed: false, optional: true, required: false
  private _customDiverging = new AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingOutputReference(this, "custom_diverging");
  public get customDiverging() {
    return this._customDiverging;
  }
  public putCustomDiverging(value: AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDiverging) {
    this._customDiverging.internalValue = value;
  }
  public resetCustomDiverging() {
    this._customDiverging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDivergingInput() {
    return this._customDiverging.internalValue;
  }

  // custom_sequential - computed: false, optional: true, required: false
  private _customSequential = new AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialOutputReference(this, "custom_sequential");
  public get customSequential() {
    return this._customSequential;
  }
  public putCustomSequential(value: AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequential) {
    this._customSequential.internalValue = value;
  }
  public resetCustomSequential() {
    this._customSequential.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSequentialInput() {
    return this._customSequential.internalValue;
  }

  // from_categorical_index - computed: false, optional: true, required: false
  private _fromCategoricalIndex?: number; 
  public get fromCategoricalIndex() {
    return this.getNumberAttribute('from_categorical_index');
  }
  public set fromCategoricalIndex(value: number) {
    this._fromCategoricalIndex = value;
  }
  public resetFromCategoricalIndex() {
    this._fromCategoricalIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromCategoricalIndexInput() {
    return this._fromCategoricalIndex;
  }
}
export interface AccountSettingV2WorkspaceDashboardThemeContinuousGradient {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#dark_mode AccountSettingV2#dark_mode}
  */
  readonly darkMode?: AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkMode;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#light_mode AccountSettingV2#light_mode}
  */
  readonly lightMode?: AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightMode;
}

export function accountSettingV2WorkspaceDashboardThemeContinuousGradientToTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeContinuousGradient | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark_mode: accountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeToTerraform(struct!.darkMode),
    light_mode: accountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeToTerraform(struct!.lightMode),
  }
}


export function accountSettingV2WorkspaceDashboardThemeContinuousGradientToHclTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeContinuousGradient | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dark_mode: {
      value: accountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeToHclTerraform(struct!.darkMode),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkMode",
    },
    light_mode: {
      value: accountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeToHclTerraform(struct!.lightMode),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightMode",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2WorkspaceDashboardThemeContinuousGradientOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2WorkspaceDashboardThemeContinuousGradient | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._darkMode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.darkMode = this._darkMode?.internalValue;
    }
    if (this._lightMode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lightMode = this._lightMode?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2WorkspaceDashboardThemeContinuousGradient | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._darkMode.internalValue = undefined;
      this._lightMode.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._darkMode.internalValue = value.darkMode;
      this._lightMode.internalValue = value.lightMode;
    }
  }

  // dark_mode - computed: false, optional: true, required: false
  private _darkMode = new AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeOutputReference(this, "dark_mode");
  public get darkMode() {
    return this._darkMode;
  }
  public putDarkMode(value: AccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkMode) {
    this._darkMode.internalValue = value;
  }
  public resetDarkMode() {
    this._darkMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get darkModeInput() {
    return this._darkMode.internalValue;
  }

  // light_mode - computed: false, optional: true, required: false
  private _lightMode = new AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeOutputReference(this, "light_mode");
  public get lightMode() {
    return this._lightMode;
  }
  public putLightMode(value: AccountSettingV2WorkspaceDashboardThemeContinuousGradientLightMode) {
    this._lightMode.internalValue = value;
  }
  public resetLightMode() {
    this._lightMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lightModeInput() {
    return this._lightMode.internalValue;
  }
}
export interface AccountSettingV2WorkspaceDashboardThemeFontColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#dark AccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#light AccountSettingV2#light}
  */
  readonly light?: string;
}

export function accountSettingV2WorkspaceDashboardThemeFontColorToTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeFontColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function accountSettingV2WorkspaceDashboardThemeFontColorToHclTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeFontColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dark: {
      value: cdktn.stringToHclTerraform(struct!.dark),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    light: {
      value: cdktn.stringToHclTerraform(struct!.light),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2WorkspaceDashboardThemeFontColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2WorkspaceDashboardThemeFontColor | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dark !== undefined) {
      hasAnyValues = true;
      internalValueResult.dark = this._dark;
    }
    if (this._light !== undefined) {
      hasAnyValues = true;
      internalValueResult.light = this._light;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2WorkspaceDashboardThemeFontColor | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dark = undefined;
      this._light = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dark = value.dark;
      this._light = value.light;
    }
  }

  // dark - computed: false, optional: true, required: false
  private _dark?: string; 
  public get dark() {
    return this.getStringAttribute('dark');
  }
  public set dark(value: string) {
    this._dark = value;
  }
  public resetDark() {
    this._dark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get darkInput() {
    return this._dark;
  }

  // light - computed: false, optional: true, required: false
  private _light?: string; 
  public get light() {
    return this.getStringAttribute('light');
  }
  public set light(value: string) {
    this._light = value;
  }
  public resetLight() {
    this._light = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lightInput() {
    return this._light;
  }
}
export interface AccountSettingV2WorkspaceDashboardThemeFontSettingsBaseFontColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#dark AccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#light AccountSettingV2#light}
  */
  readonly light?: string;
}

export function accountSettingV2WorkspaceDashboardThemeFontSettingsBaseFontColorToTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeFontSettingsBaseFontColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function accountSettingV2WorkspaceDashboardThemeFontSettingsBaseFontColorToHclTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeFontSettingsBaseFontColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dark: {
      value: cdktn.stringToHclTerraform(struct!.dark),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    light: {
      value: cdktn.stringToHclTerraform(struct!.light),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2WorkspaceDashboardThemeFontSettingsBaseFontColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2WorkspaceDashboardThemeFontSettingsBaseFontColor | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dark !== undefined) {
      hasAnyValues = true;
      internalValueResult.dark = this._dark;
    }
    if (this._light !== undefined) {
      hasAnyValues = true;
      internalValueResult.light = this._light;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2WorkspaceDashboardThemeFontSettingsBaseFontColor | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dark = undefined;
      this._light = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dark = value.dark;
      this._light = value.light;
    }
  }

  // dark - computed: false, optional: true, required: false
  private _dark?: string; 
  public get dark() {
    return this.getStringAttribute('dark');
  }
  public set dark(value: string) {
    this._dark = value;
  }
  public resetDark() {
    this._dark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get darkInput() {
    return this._dark;
  }

  // light - computed: false, optional: true, required: false
  private _light?: string; 
  public get light() {
    return this.getStringAttribute('light');
  }
  public set light(value: string) {
    this._light = value;
  }
  public resetLight() {
    this._light = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lightInput() {
    return this._light;
  }
}
export interface AccountSettingV2WorkspaceDashboardThemeFontSettingsBase {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#font_color AccountSettingV2#font_color}
  */
  readonly fontColor?: AccountSettingV2WorkspaceDashboardThemeFontSettingsBaseFontColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#font_family AccountSettingV2#font_family}
  */
  readonly fontFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#font_size AccountSettingV2#font_size}
  */
  readonly fontSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#font_style AccountSettingV2#font_style}
  */
  readonly fontStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#font_weight AccountSettingV2#font_weight}
  */
  readonly fontWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#text_case AccountSettingV2#text_case}
  */
  readonly textCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#text_decoration AccountSettingV2#text_decoration}
  */
  readonly textDecoration?: string;
}

export function accountSettingV2WorkspaceDashboardThemeFontSettingsBaseToTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeFontSettingsBase | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    font_color: accountSettingV2WorkspaceDashboardThemeFontSettingsBaseFontColorToTerraform(struct!.fontColor),
    font_family: cdktn.stringToTerraform(struct!.fontFamily),
    font_size: cdktn.numberToTerraform(struct!.fontSize),
    font_style: cdktn.stringToTerraform(struct!.fontStyle),
    font_weight: cdktn.numberToTerraform(struct!.fontWeight),
    text_case: cdktn.stringToTerraform(struct!.textCase),
    text_decoration: cdktn.stringToTerraform(struct!.textDecoration),
  }
}


export function accountSettingV2WorkspaceDashboardThemeFontSettingsBaseToHclTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeFontSettingsBase | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    font_color: {
      value: accountSettingV2WorkspaceDashboardThemeFontSettingsBaseFontColorToHclTerraform(struct!.fontColor),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2WorkspaceDashboardThemeFontSettingsBaseFontColor",
    },
    font_family: {
      value: cdktn.stringToHclTerraform(struct!.fontFamily),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_size: {
      value: cdktn.numberToHclTerraform(struct!.fontSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    font_style: {
      value: cdktn.stringToHclTerraform(struct!.fontStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_weight: {
      value: cdktn.numberToHclTerraform(struct!.fontWeight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    text_case: {
      value: cdktn.stringToHclTerraform(struct!.textCase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text_decoration: {
      value: cdktn.stringToHclTerraform(struct!.textDecoration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2WorkspaceDashboardThemeFontSettingsBaseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2WorkspaceDashboardThemeFontSettingsBase | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fontColor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontColor = this._fontColor?.internalValue;
    }
    if (this._fontFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontFamily = this._fontFamily;
    }
    if (this._fontSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontSize = this._fontSize;
    }
    if (this._fontStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontStyle = this._fontStyle;
    }
    if (this._fontWeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontWeight = this._fontWeight;
    }
    if (this._textCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.textCase = this._textCase;
    }
    if (this._textDecoration !== undefined) {
      hasAnyValues = true;
      internalValueResult.textDecoration = this._textDecoration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2WorkspaceDashboardThemeFontSettingsBase | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fontColor.internalValue = undefined;
      this._fontFamily = undefined;
      this._fontSize = undefined;
      this._fontStyle = undefined;
      this._fontWeight = undefined;
      this._textCase = undefined;
      this._textDecoration = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fontColor.internalValue = value.fontColor;
      this._fontFamily = value.fontFamily;
      this._fontSize = value.fontSize;
      this._fontStyle = value.fontStyle;
      this._fontWeight = value.fontWeight;
      this._textCase = value.textCase;
      this._textDecoration = value.textDecoration;
    }
  }

  // font_color - computed: false, optional: true, required: false
  private _fontColor = new AccountSettingV2WorkspaceDashboardThemeFontSettingsBaseFontColorOutputReference(this, "font_color");
  public get fontColor() {
    return this._fontColor;
  }
  public putFontColor(value: AccountSettingV2WorkspaceDashboardThemeFontSettingsBaseFontColor) {
    this._fontColor.internalValue = value;
  }
  public resetFontColor() {
    this._fontColor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontColorInput() {
    return this._fontColor.internalValue;
  }

  // font_family - computed: false, optional: true, required: false
  private _fontFamily?: string; 
  public get fontFamily() {
    return this.getStringAttribute('font_family');
  }
  public set fontFamily(value: string) {
    this._fontFamily = value;
  }
  public resetFontFamily() {
    this._fontFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontFamilyInput() {
    return this._fontFamily;
  }

  // font_size - computed: false, optional: true, required: false
  private _fontSize?: number; 
  public get fontSize() {
    return this.getNumberAttribute('font_size');
  }
  public set fontSize(value: number) {
    this._fontSize = value;
  }
  public resetFontSize() {
    this._fontSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontSizeInput() {
    return this._fontSize;
  }

  // font_style - computed: false, optional: true, required: false
  private _fontStyle?: string; 
  public get fontStyle() {
    return this.getStringAttribute('font_style');
  }
  public set fontStyle(value: string) {
    this._fontStyle = value;
  }
  public resetFontStyle() {
    this._fontStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontStyleInput() {
    return this._fontStyle;
  }

  // font_weight - computed: false, optional: true, required: false
  private _fontWeight?: number; 
  public get fontWeight() {
    return this.getNumberAttribute('font_weight');
  }
  public set fontWeight(value: number) {
    this._fontWeight = value;
  }
  public resetFontWeight() {
    this._fontWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontWeightInput() {
    return this._fontWeight;
  }

  // text_case - computed: false, optional: true, required: false
  private _textCase?: string; 
  public get textCase() {
    return this.getStringAttribute('text_case');
  }
  public set textCase(value: string) {
    this._textCase = value;
  }
  public resetTextCase() {
    this._textCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textCaseInput() {
    return this._textCase;
  }

  // text_decoration - computed: false, optional: true, required: false
  private _textDecoration?: string; 
  public get textDecoration() {
    return this.getStringAttribute('text_decoration');
  }
  public set textDecoration(value: string) {
    this._textDecoration = value;
  }
  public resetTextDecoration() {
    this._textDecoration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textDecorationInput() {
    return this._textDecoration;
  }
}
export interface AccountSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleFontColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#dark AccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#light AccountSettingV2#light}
  */
  readonly light?: string;
}

export function accountSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleFontColorToTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleFontColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function accountSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleFontColorToHclTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleFontColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dark: {
      value: cdktn.stringToHclTerraform(struct!.dark),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    light: {
      value: cdktn.stringToHclTerraform(struct!.light),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleFontColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleFontColor | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dark !== undefined) {
      hasAnyValues = true;
      internalValueResult.dark = this._dark;
    }
    if (this._light !== undefined) {
      hasAnyValues = true;
      internalValueResult.light = this._light;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleFontColor | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dark = undefined;
      this._light = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dark = value.dark;
      this._light = value.light;
    }
  }

  // dark - computed: false, optional: true, required: false
  private _dark?: string; 
  public get dark() {
    return this.getStringAttribute('dark');
  }
  public set dark(value: string) {
    this._dark = value;
  }
  public resetDark() {
    this._dark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get darkInput() {
    return this._dark;
  }

  // light - computed: false, optional: true, required: false
  private _light?: string; 
  public get light() {
    return this.getStringAttribute('light');
  }
  public set light(value: string) {
    this._light = value;
  }
  public resetLight() {
    this._light = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lightInput() {
    return this._light;
  }
}
export interface AccountSettingV2WorkspaceDashboardThemeFontSettingsFieldTitle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#font_color AccountSettingV2#font_color}
  */
  readonly fontColor?: AccountSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleFontColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#font_family AccountSettingV2#font_family}
  */
  readonly fontFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#font_size AccountSettingV2#font_size}
  */
  readonly fontSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#font_style AccountSettingV2#font_style}
  */
  readonly fontStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#font_weight AccountSettingV2#font_weight}
  */
  readonly fontWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#text_case AccountSettingV2#text_case}
  */
  readonly textCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#text_decoration AccountSettingV2#text_decoration}
  */
  readonly textDecoration?: string;
}

export function accountSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleToTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeFontSettingsFieldTitle | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    font_color: accountSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleFontColorToTerraform(struct!.fontColor),
    font_family: cdktn.stringToTerraform(struct!.fontFamily),
    font_size: cdktn.numberToTerraform(struct!.fontSize),
    font_style: cdktn.stringToTerraform(struct!.fontStyle),
    font_weight: cdktn.numberToTerraform(struct!.fontWeight),
    text_case: cdktn.stringToTerraform(struct!.textCase),
    text_decoration: cdktn.stringToTerraform(struct!.textDecoration),
  }
}


export function accountSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleToHclTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeFontSettingsFieldTitle | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    font_color: {
      value: accountSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleFontColorToHclTerraform(struct!.fontColor),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleFontColor",
    },
    font_family: {
      value: cdktn.stringToHclTerraform(struct!.fontFamily),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_size: {
      value: cdktn.numberToHclTerraform(struct!.fontSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    font_style: {
      value: cdktn.stringToHclTerraform(struct!.fontStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_weight: {
      value: cdktn.numberToHclTerraform(struct!.fontWeight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    text_case: {
      value: cdktn.stringToHclTerraform(struct!.textCase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text_decoration: {
      value: cdktn.stringToHclTerraform(struct!.textDecoration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2WorkspaceDashboardThemeFontSettingsFieldTitle | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fontColor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontColor = this._fontColor?.internalValue;
    }
    if (this._fontFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontFamily = this._fontFamily;
    }
    if (this._fontSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontSize = this._fontSize;
    }
    if (this._fontStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontStyle = this._fontStyle;
    }
    if (this._fontWeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontWeight = this._fontWeight;
    }
    if (this._textCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.textCase = this._textCase;
    }
    if (this._textDecoration !== undefined) {
      hasAnyValues = true;
      internalValueResult.textDecoration = this._textDecoration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2WorkspaceDashboardThemeFontSettingsFieldTitle | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fontColor.internalValue = undefined;
      this._fontFamily = undefined;
      this._fontSize = undefined;
      this._fontStyle = undefined;
      this._fontWeight = undefined;
      this._textCase = undefined;
      this._textDecoration = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fontColor.internalValue = value.fontColor;
      this._fontFamily = value.fontFamily;
      this._fontSize = value.fontSize;
      this._fontStyle = value.fontStyle;
      this._fontWeight = value.fontWeight;
      this._textCase = value.textCase;
      this._textDecoration = value.textDecoration;
    }
  }

  // font_color - computed: false, optional: true, required: false
  private _fontColor = new AccountSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleFontColorOutputReference(this, "font_color");
  public get fontColor() {
    return this._fontColor;
  }
  public putFontColor(value: AccountSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleFontColor) {
    this._fontColor.internalValue = value;
  }
  public resetFontColor() {
    this._fontColor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontColorInput() {
    return this._fontColor.internalValue;
  }

  // font_family - computed: false, optional: true, required: false
  private _fontFamily?: string; 
  public get fontFamily() {
    return this.getStringAttribute('font_family');
  }
  public set fontFamily(value: string) {
    this._fontFamily = value;
  }
  public resetFontFamily() {
    this._fontFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontFamilyInput() {
    return this._fontFamily;
  }

  // font_size - computed: false, optional: true, required: false
  private _fontSize?: number; 
  public get fontSize() {
    return this.getNumberAttribute('font_size');
  }
  public set fontSize(value: number) {
    this._fontSize = value;
  }
  public resetFontSize() {
    this._fontSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontSizeInput() {
    return this._fontSize;
  }

  // font_style - computed: false, optional: true, required: false
  private _fontStyle?: string; 
  public get fontStyle() {
    return this.getStringAttribute('font_style');
  }
  public set fontStyle(value: string) {
    this._fontStyle = value;
  }
  public resetFontStyle() {
    this._fontStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontStyleInput() {
    return this._fontStyle;
  }

  // font_weight - computed: false, optional: true, required: false
  private _fontWeight?: number; 
  public get fontWeight() {
    return this.getNumberAttribute('font_weight');
  }
  public set fontWeight(value: number) {
    this._fontWeight = value;
  }
  public resetFontWeight() {
    this._fontWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontWeightInput() {
    return this._fontWeight;
  }

  // text_case - computed: false, optional: true, required: false
  private _textCase?: string; 
  public get textCase() {
    return this.getStringAttribute('text_case');
  }
  public set textCase(value: string) {
    this._textCase = value;
  }
  public resetTextCase() {
    this._textCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textCaseInput() {
    return this._textCase;
  }

  // text_decoration - computed: false, optional: true, required: false
  private _textDecoration?: string; 
  public get textDecoration() {
    return this.getStringAttribute('text_decoration');
  }
  public set textDecoration(value: string) {
    this._textDecoration = value;
  }
  public resetTextDecoration() {
    this._textDecoration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textDecorationInput() {
    return this._textDecoration;
  }
}
export interface AccountSettingV2WorkspaceDashboardThemeFontSettingsFieldValueFontColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#dark AccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#light AccountSettingV2#light}
  */
  readonly light?: string;
}

export function accountSettingV2WorkspaceDashboardThemeFontSettingsFieldValueFontColorToTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeFontSettingsFieldValueFontColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function accountSettingV2WorkspaceDashboardThemeFontSettingsFieldValueFontColorToHclTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeFontSettingsFieldValueFontColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dark: {
      value: cdktn.stringToHclTerraform(struct!.dark),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    light: {
      value: cdktn.stringToHclTerraform(struct!.light),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2WorkspaceDashboardThemeFontSettingsFieldValueFontColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2WorkspaceDashboardThemeFontSettingsFieldValueFontColor | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dark !== undefined) {
      hasAnyValues = true;
      internalValueResult.dark = this._dark;
    }
    if (this._light !== undefined) {
      hasAnyValues = true;
      internalValueResult.light = this._light;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2WorkspaceDashboardThemeFontSettingsFieldValueFontColor | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dark = undefined;
      this._light = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dark = value.dark;
      this._light = value.light;
    }
  }

  // dark - computed: false, optional: true, required: false
  private _dark?: string; 
  public get dark() {
    return this.getStringAttribute('dark');
  }
  public set dark(value: string) {
    this._dark = value;
  }
  public resetDark() {
    this._dark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get darkInput() {
    return this._dark;
  }

  // light - computed: false, optional: true, required: false
  private _light?: string; 
  public get light() {
    return this.getStringAttribute('light');
  }
  public set light(value: string) {
    this._light = value;
  }
  public resetLight() {
    this._light = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lightInput() {
    return this._light;
  }
}
export interface AccountSettingV2WorkspaceDashboardThemeFontSettingsFieldValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#font_color AccountSettingV2#font_color}
  */
  readonly fontColor?: AccountSettingV2WorkspaceDashboardThemeFontSettingsFieldValueFontColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#font_family AccountSettingV2#font_family}
  */
  readonly fontFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#font_size AccountSettingV2#font_size}
  */
  readonly fontSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#font_style AccountSettingV2#font_style}
  */
  readonly fontStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#font_weight AccountSettingV2#font_weight}
  */
  readonly fontWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#text_case AccountSettingV2#text_case}
  */
  readonly textCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#text_decoration AccountSettingV2#text_decoration}
  */
  readonly textDecoration?: string;
}

export function accountSettingV2WorkspaceDashboardThemeFontSettingsFieldValueToTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeFontSettingsFieldValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    font_color: accountSettingV2WorkspaceDashboardThemeFontSettingsFieldValueFontColorToTerraform(struct!.fontColor),
    font_family: cdktn.stringToTerraform(struct!.fontFamily),
    font_size: cdktn.numberToTerraform(struct!.fontSize),
    font_style: cdktn.stringToTerraform(struct!.fontStyle),
    font_weight: cdktn.numberToTerraform(struct!.fontWeight),
    text_case: cdktn.stringToTerraform(struct!.textCase),
    text_decoration: cdktn.stringToTerraform(struct!.textDecoration),
  }
}


export function accountSettingV2WorkspaceDashboardThemeFontSettingsFieldValueToHclTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeFontSettingsFieldValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    font_color: {
      value: accountSettingV2WorkspaceDashboardThemeFontSettingsFieldValueFontColorToHclTerraform(struct!.fontColor),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2WorkspaceDashboardThemeFontSettingsFieldValueFontColor",
    },
    font_family: {
      value: cdktn.stringToHclTerraform(struct!.fontFamily),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_size: {
      value: cdktn.numberToHclTerraform(struct!.fontSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    font_style: {
      value: cdktn.stringToHclTerraform(struct!.fontStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_weight: {
      value: cdktn.numberToHclTerraform(struct!.fontWeight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    text_case: {
      value: cdktn.stringToHclTerraform(struct!.textCase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text_decoration: {
      value: cdktn.stringToHclTerraform(struct!.textDecoration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2WorkspaceDashboardThemeFontSettingsFieldValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2WorkspaceDashboardThemeFontSettingsFieldValue | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fontColor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontColor = this._fontColor?.internalValue;
    }
    if (this._fontFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontFamily = this._fontFamily;
    }
    if (this._fontSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontSize = this._fontSize;
    }
    if (this._fontStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontStyle = this._fontStyle;
    }
    if (this._fontWeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontWeight = this._fontWeight;
    }
    if (this._textCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.textCase = this._textCase;
    }
    if (this._textDecoration !== undefined) {
      hasAnyValues = true;
      internalValueResult.textDecoration = this._textDecoration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2WorkspaceDashboardThemeFontSettingsFieldValue | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fontColor.internalValue = undefined;
      this._fontFamily = undefined;
      this._fontSize = undefined;
      this._fontStyle = undefined;
      this._fontWeight = undefined;
      this._textCase = undefined;
      this._textDecoration = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fontColor.internalValue = value.fontColor;
      this._fontFamily = value.fontFamily;
      this._fontSize = value.fontSize;
      this._fontStyle = value.fontStyle;
      this._fontWeight = value.fontWeight;
      this._textCase = value.textCase;
      this._textDecoration = value.textDecoration;
    }
  }

  // font_color - computed: false, optional: true, required: false
  private _fontColor = new AccountSettingV2WorkspaceDashboardThemeFontSettingsFieldValueFontColorOutputReference(this, "font_color");
  public get fontColor() {
    return this._fontColor;
  }
  public putFontColor(value: AccountSettingV2WorkspaceDashboardThemeFontSettingsFieldValueFontColor) {
    this._fontColor.internalValue = value;
  }
  public resetFontColor() {
    this._fontColor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontColorInput() {
    return this._fontColor.internalValue;
  }

  // font_family - computed: false, optional: true, required: false
  private _fontFamily?: string; 
  public get fontFamily() {
    return this.getStringAttribute('font_family');
  }
  public set fontFamily(value: string) {
    this._fontFamily = value;
  }
  public resetFontFamily() {
    this._fontFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontFamilyInput() {
    return this._fontFamily;
  }

  // font_size - computed: false, optional: true, required: false
  private _fontSize?: number; 
  public get fontSize() {
    return this.getNumberAttribute('font_size');
  }
  public set fontSize(value: number) {
    this._fontSize = value;
  }
  public resetFontSize() {
    this._fontSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontSizeInput() {
    return this._fontSize;
  }

  // font_style - computed: false, optional: true, required: false
  private _fontStyle?: string; 
  public get fontStyle() {
    return this.getStringAttribute('font_style');
  }
  public set fontStyle(value: string) {
    this._fontStyle = value;
  }
  public resetFontStyle() {
    this._fontStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontStyleInput() {
    return this._fontStyle;
  }

  // font_weight - computed: false, optional: true, required: false
  private _fontWeight?: number; 
  public get fontWeight() {
    return this.getNumberAttribute('font_weight');
  }
  public set fontWeight(value: number) {
    this._fontWeight = value;
  }
  public resetFontWeight() {
    this._fontWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontWeightInput() {
    return this._fontWeight;
  }

  // text_case - computed: false, optional: true, required: false
  private _textCase?: string; 
  public get textCase() {
    return this.getStringAttribute('text_case');
  }
  public set textCase(value: string) {
    this._textCase = value;
  }
  public resetTextCase() {
    this._textCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textCaseInput() {
    return this._textCase;
  }

  // text_decoration - computed: false, optional: true, required: false
  private _textDecoration?: string; 
  public get textDecoration() {
    return this.getStringAttribute('text_decoration');
  }
  public set textDecoration(value: string) {
    this._textDecoration = value;
  }
  public resetTextDecoration() {
    this._textDecoration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textDecorationInput() {
    return this._textDecoration;
  }
}
export interface AccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#dark AccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#light AccountSettingV2#light}
  */
  readonly light?: string;
}

export function accountSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColorToTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function accountSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColorToHclTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dark: {
      value: cdktn.stringToHclTerraform(struct!.dark),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    light: {
      value: cdktn.stringToHclTerraform(struct!.light),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColor | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dark !== undefined) {
      hasAnyValues = true;
      internalValueResult.dark = this._dark;
    }
    if (this._light !== undefined) {
      hasAnyValues = true;
      internalValueResult.light = this._light;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColor | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dark = undefined;
      this._light = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dark = value.dark;
      this._light = value.light;
    }
  }

  // dark - computed: false, optional: true, required: false
  private _dark?: string; 
  public get dark() {
    return this.getStringAttribute('dark');
  }
  public set dark(value: string) {
    this._dark = value;
  }
  public resetDark() {
    this._dark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get darkInput() {
    return this._dark;
  }

  // light - computed: false, optional: true, required: false
  private _light?: string; 
  public get light() {
    return this.getStringAttribute('light');
  }
  public set light(value: string) {
    this._light = value;
  }
  public resetLight() {
    this._light = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lightInput() {
    return this._light;
  }
}
export interface AccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescription {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#font_color AccountSettingV2#font_color}
  */
  readonly fontColor?: AccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#font_family AccountSettingV2#font_family}
  */
  readonly fontFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#font_size AccountSettingV2#font_size}
  */
  readonly fontSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#font_style AccountSettingV2#font_style}
  */
  readonly fontStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#font_weight AccountSettingV2#font_weight}
  */
  readonly fontWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#text_case AccountSettingV2#text_case}
  */
  readonly textCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#text_decoration AccountSettingV2#text_decoration}
  */
  readonly textDecoration?: string;
}

export function accountSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionToTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescription | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    font_color: accountSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColorToTerraform(struct!.fontColor),
    font_family: cdktn.stringToTerraform(struct!.fontFamily),
    font_size: cdktn.numberToTerraform(struct!.fontSize),
    font_style: cdktn.stringToTerraform(struct!.fontStyle),
    font_weight: cdktn.numberToTerraform(struct!.fontWeight),
    text_case: cdktn.stringToTerraform(struct!.textCase),
    text_decoration: cdktn.stringToTerraform(struct!.textDecoration),
  }
}


export function accountSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionToHclTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescription | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    font_color: {
      value: accountSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColorToHclTerraform(struct!.fontColor),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColor",
    },
    font_family: {
      value: cdktn.stringToHclTerraform(struct!.fontFamily),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_size: {
      value: cdktn.numberToHclTerraform(struct!.fontSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    font_style: {
      value: cdktn.stringToHclTerraform(struct!.fontStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_weight: {
      value: cdktn.numberToHclTerraform(struct!.fontWeight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    text_case: {
      value: cdktn.stringToHclTerraform(struct!.textCase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text_decoration: {
      value: cdktn.stringToHclTerraform(struct!.textDecoration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescription | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fontColor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontColor = this._fontColor?.internalValue;
    }
    if (this._fontFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontFamily = this._fontFamily;
    }
    if (this._fontSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontSize = this._fontSize;
    }
    if (this._fontStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontStyle = this._fontStyle;
    }
    if (this._fontWeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontWeight = this._fontWeight;
    }
    if (this._textCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.textCase = this._textCase;
    }
    if (this._textDecoration !== undefined) {
      hasAnyValues = true;
      internalValueResult.textDecoration = this._textDecoration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescription | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fontColor.internalValue = undefined;
      this._fontFamily = undefined;
      this._fontSize = undefined;
      this._fontStyle = undefined;
      this._fontWeight = undefined;
      this._textCase = undefined;
      this._textDecoration = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fontColor.internalValue = value.fontColor;
      this._fontFamily = value.fontFamily;
      this._fontSize = value.fontSize;
      this._fontStyle = value.fontStyle;
      this._fontWeight = value.fontWeight;
      this._textCase = value.textCase;
      this._textDecoration = value.textDecoration;
    }
  }

  // font_color - computed: false, optional: true, required: false
  private _fontColor = new AccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColorOutputReference(this, "font_color");
  public get fontColor() {
    return this._fontColor;
  }
  public putFontColor(value: AccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColor) {
    this._fontColor.internalValue = value;
  }
  public resetFontColor() {
    this._fontColor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontColorInput() {
    return this._fontColor.internalValue;
  }

  // font_family - computed: false, optional: true, required: false
  private _fontFamily?: string; 
  public get fontFamily() {
    return this.getStringAttribute('font_family');
  }
  public set fontFamily(value: string) {
    this._fontFamily = value;
  }
  public resetFontFamily() {
    this._fontFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontFamilyInput() {
    return this._fontFamily;
  }

  // font_size - computed: false, optional: true, required: false
  private _fontSize?: number; 
  public get fontSize() {
    return this.getNumberAttribute('font_size');
  }
  public set fontSize(value: number) {
    this._fontSize = value;
  }
  public resetFontSize() {
    this._fontSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontSizeInput() {
    return this._fontSize;
  }

  // font_style - computed: false, optional: true, required: false
  private _fontStyle?: string; 
  public get fontStyle() {
    return this.getStringAttribute('font_style');
  }
  public set fontStyle(value: string) {
    this._fontStyle = value;
  }
  public resetFontStyle() {
    this._fontStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontStyleInput() {
    return this._fontStyle;
  }

  // font_weight - computed: false, optional: true, required: false
  private _fontWeight?: number; 
  public get fontWeight() {
    return this.getNumberAttribute('font_weight');
  }
  public set fontWeight(value: number) {
    this._fontWeight = value;
  }
  public resetFontWeight() {
    this._fontWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontWeightInput() {
    return this._fontWeight;
  }

  // text_case - computed: false, optional: true, required: false
  private _textCase?: string; 
  public get textCase() {
    return this.getStringAttribute('text_case');
  }
  public set textCase(value: string) {
    this._textCase = value;
  }
  public resetTextCase() {
    this._textCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textCaseInput() {
    return this._textCase;
  }

  // text_decoration - computed: false, optional: true, required: false
  private _textDecoration?: string; 
  public get textDecoration() {
    return this.getStringAttribute('text_decoration');
  }
  public set textDecoration(value: string) {
    this._textDecoration = value;
  }
  public resetTextDecoration() {
    this._textDecoration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textDecorationInput() {
    return this._textDecoration;
  }
}
export interface AccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleFontColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#dark AccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#light AccountSettingV2#light}
  */
  readonly light?: string;
}

export function accountSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleFontColorToTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleFontColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function accountSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleFontColorToHclTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleFontColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dark: {
      value: cdktn.stringToHclTerraform(struct!.dark),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    light: {
      value: cdktn.stringToHclTerraform(struct!.light),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleFontColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleFontColor | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dark !== undefined) {
      hasAnyValues = true;
      internalValueResult.dark = this._dark;
    }
    if (this._light !== undefined) {
      hasAnyValues = true;
      internalValueResult.light = this._light;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleFontColor | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dark = undefined;
      this._light = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dark = value.dark;
      this._light = value.light;
    }
  }

  // dark - computed: false, optional: true, required: false
  private _dark?: string; 
  public get dark() {
    return this.getStringAttribute('dark');
  }
  public set dark(value: string) {
    this._dark = value;
  }
  public resetDark() {
    this._dark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get darkInput() {
    return this._dark;
  }

  // light - computed: false, optional: true, required: false
  private _light?: string; 
  public get light() {
    return this.getStringAttribute('light');
  }
  public set light(value: string) {
    this._light = value;
  }
  public resetLight() {
    this._light = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lightInput() {
    return this._light;
  }
}
export interface AccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#font_color AccountSettingV2#font_color}
  */
  readonly fontColor?: AccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleFontColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#font_family AccountSettingV2#font_family}
  */
  readonly fontFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#font_size AccountSettingV2#font_size}
  */
  readonly fontSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#font_style AccountSettingV2#font_style}
  */
  readonly fontStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#font_weight AccountSettingV2#font_weight}
  */
  readonly fontWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#text_case AccountSettingV2#text_case}
  */
  readonly textCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#text_decoration AccountSettingV2#text_decoration}
  */
  readonly textDecoration?: string;
}

export function accountSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleToTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitle | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    font_color: accountSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleFontColorToTerraform(struct!.fontColor),
    font_family: cdktn.stringToTerraform(struct!.fontFamily),
    font_size: cdktn.numberToTerraform(struct!.fontSize),
    font_style: cdktn.stringToTerraform(struct!.fontStyle),
    font_weight: cdktn.numberToTerraform(struct!.fontWeight),
    text_case: cdktn.stringToTerraform(struct!.textCase),
    text_decoration: cdktn.stringToTerraform(struct!.textDecoration),
  }
}


export function accountSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleToHclTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitle | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    font_color: {
      value: accountSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleFontColorToHclTerraform(struct!.fontColor),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleFontColor",
    },
    font_family: {
      value: cdktn.stringToHclTerraform(struct!.fontFamily),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_size: {
      value: cdktn.numberToHclTerraform(struct!.fontSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    font_style: {
      value: cdktn.stringToHclTerraform(struct!.fontStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_weight: {
      value: cdktn.numberToHclTerraform(struct!.fontWeight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    text_case: {
      value: cdktn.stringToHclTerraform(struct!.textCase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text_decoration: {
      value: cdktn.stringToHclTerraform(struct!.textDecoration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitle | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fontColor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontColor = this._fontColor?.internalValue;
    }
    if (this._fontFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontFamily = this._fontFamily;
    }
    if (this._fontSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontSize = this._fontSize;
    }
    if (this._fontStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontStyle = this._fontStyle;
    }
    if (this._fontWeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontWeight = this._fontWeight;
    }
    if (this._textCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.textCase = this._textCase;
    }
    if (this._textDecoration !== undefined) {
      hasAnyValues = true;
      internalValueResult.textDecoration = this._textDecoration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitle | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fontColor.internalValue = undefined;
      this._fontFamily = undefined;
      this._fontSize = undefined;
      this._fontStyle = undefined;
      this._fontWeight = undefined;
      this._textCase = undefined;
      this._textDecoration = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fontColor.internalValue = value.fontColor;
      this._fontFamily = value.fontFamily;
      this._fontSize = value.fontSize;
      this._fontStyle = value.fontStyle;
      this._fontWeight = value.fontWeight;
      this._textCase = value.textCase;
      this._textDecoration = value.textDecoration;
    }
  }

  // font_color - computed: false, optional: true, required: false
  private _fontColor = new AccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleFontColorOutputReference(this, "font_color");
  public get fontColor() {
    return this._fontColor;
  }
  public putFontColor(value: AccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleFontColor) {
    this._fontColor.internalValue = value;
  }
  public resetFontColor() {
    this._fontColor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontColorInput() {
    return this._fontColor.internalValue;
  }

  // font_family - computed: false, optional: true, required: false
  private _fontFamily?: string; 
  public get fontFamily() {
    return this.getStringAttribute('font_family');
  }
  public set fontFamily(value: string) {
    this._fontFamily = value;
  }
  public resetFontFamily() {
    this._fontFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontFamilyInput() {
    return this._fontFamily;
  }

  // font_size - computed: false, optional: true, required: false
  private _fontSize?: number; 
  public get fontSize() {
    return this.getNumberAttribute('font_size');
  }
  public set fontSize(value: number) {
    this._fontSize = value;
  }
  public resetFontSize() {
    this._fontSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontSizeInput() {
    return this._fontSize;
  }

  // font_style - computed: false, optional: true, required: false
  private _fontStyle?: string; 
  public get fontStyle() {
    return this.getStringAttribute('font_style');
  }
  public set fontStyle(value: string) {
    this._fontStyle = value;
  }
  public resetFontStyle() {
    this._fontStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontStyleInput() {
    return this._fontStyle;
  }

  // font_weight - computed: false, optional: true, required: false
  private _fontWeight?: number; 
  public get fontWeight() {
    return this.getNumberAttribute('font_weight');
  }
  public set fontWeight(value: number) {
    this._fontWeight = value;
  }
  public resetFontWeight() {
    this._fontWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontWeightInput() {
    return this._fontWeight;
  }

  // text_case - computed: false, optional: true, required: false
  private _textCase?: string; 
  public get textCase() {
    return this.getStringAttribute('text_case');
  }
  public set textCase(value: string) {
    this._textCase = value;
  }
  public resetTextCase() {
    this._textCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textCaseInput() {
    return this._textCase;
  }

  // text_decoration - computed: false, optional: true, required: false
  private _textDecoration?: string; 
  public get textDecoration() {
    return this.getStringAttribute('text_decoration');
  }
  public set textDecoration(value: string) {
    this._textDecoration = value;
  }
  public resetTextDecoration() {
    this._textDecoration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textDecorationInput() {
    return this._textDecoration;
  }
}
export interface AccountSettingV2WorkspaceDashboardThemeFontSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#base AccountSettingV2#base}
  */
  readonly base?: AccountSettingV2WorkspaceDashboardThemeFontSettingsBase;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#field_title AccountSettingV2#field_title}
  */
  readonly fieldTitle?: AccountSettingV2WorkspaceDashboardThemeFontSettingsFieldTitle;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#field_value AccountSettingV2#field_value}
  */
  readonly fieldValue?: AccountSettingV2WorkspaceDashboardThemeFontSettingsFieldValue;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#widget_description AccountSettingV2#widget_description}
  */
  readonly widgetDescription?: AccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescription;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#widget_title AccountSettingV2#widget_title}
  */
  readonly widgetTitle?: AccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitle;
}

export function accountSettingV2WorkspaceDashboardThemeFontSettingsToTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeFontSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    base: accountSettingV2WorkspaceDashboardThemeFontSettingsBaseToTerraform(struct!.base),
    field_title: accountSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleToTerraform(struct!.fieldTitle),
    field_value: accountSettingV2WorkspaceDashboardThemeFontSettingsFieldValueToTerraform(struct!.fieldValue),
    widget_description: accountSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionToTerraform(struct!.widgetDescription),
    widget_title: accountSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleToTerraform(struct!.widgetTitle),
  }
}


export function accountSettingV2WorkspaceDashboardThemeFontSettingsToHclTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeFontSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    base: {
      value: accountSettingV2WorkspaceDashboardThemeFontSettingsBaseToHclTerraform(struct!.base),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2WorkspaceDashboardThemeFontSettingsBase",
    },
    field_title: {
      value: accountSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleToHclTerraform(struct!.fieldTitle),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2WorkspaceDashboardThemeFontSettingsFieldTitle",
    },
    field_value: {
      value: accountSettingV2WorkspaceDashboardThemeFontSettingsFieldValueToHclTerraform(struct!.fieldValue),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2WorkspaceDashboardThemeFontSettingsFieldValue",
    },
    widget_description: {
      value: accountSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionToHclTerraform(struct!.widgetDescription),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescription",
    },
    widget_title: {
      value: accountSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleToHclTerraform(struct!.widgetTitle),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitle",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2WorkspaceDashboardThemeFontSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2WorkspaceDashboardThemeFontSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._base?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.base = this._base?.internalValue;
    }
    if (this._fieldTitle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldTitle = this._fieldTitle?.internalValue;
    }
    if (this._fieldValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldValue = this._fieldValue?.internalValue;
    }
    if (this._widgetDescription?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.widgetDescription = this._widgetDescription?.internalValue;
    }
    if (this._widgetTitle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.widgetTitle = this._widgetTitle?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2WorkspaceDashboardThemeFontSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._base.internalValue = undefined;
      this._fieldTitle.internalValue = undefined;
      this._fieldValue.internalValue = undefined;
      this._widgetDescription.internalValue = undefined;
      this._widgetTitle.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._base.internalValue = value.base;
      this._fieldTitle.internalValue = value.fieldTitle;
      this._fieldValue.internalValue = value.fieldValue;
      this._widgetDescription.internalValue = value.widgetDescription;
      this._widgetTitle.internalValue = value.widgetTitle;
    }
  }

  // base - computed: false, optional: true, required: false
  private _base = new AccountSettingV2WorkspaceDashboardThemeFontSettingsBaseOutputReference(this, "base");
  public get base() {
    return this._base;
  }
  public putBase(value: AccountSettingV2WorkspaceDashboardThemeFontSettingsBase) {
    this._base.internalValue = value;
  }
  public resetBase() {
    this._base.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseInput() {
    return this._base.internalValue;
  }

  // field_title - computed: false, optional: true, required: false
  private _fieldTitle = new AccountSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleOutputReference(this, "field_title");
  public get fieldTitle() {
    return this._fieldTitle;
  }
  public putFieldTitle(value: AccountSettingV2WorkspaceDashboardThemeFontSettingsFieldTitle) {
    this._fieldTitle.internalValue = value;
  }
  public resetFieldTitle() {
    this._fieldTitle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldTitleInput() {
    return this._fieldTitle.internalValue;
  }

  // field_value - computed: false, optional: true, required: false
  private _fieldValue = new AccountSettingV2WorkspaceDashboardThemeFontSettingsFieldValueOutputReference(this, "field_value");
  public get fieldValue() {
    return this._fieldValue;
  }
  public putFieldValue(value: AccountSettingV2WorkspaceDashboardThemeFontSettingsFieldValue) {
    this._fieldValue.internalValue = value;
  }
  public resetFieldValue() {
    this._fieldValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldValueInput() {
    return this._fieldValue.internalValue;
  }

  // widget_description - computed: false, optional: true, required: false
  private _widgetDescription = new AccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionOutputReference(this, "widget_description");
  public get widgetDescription() {
    return this._widgetDescription;
  }
  public putWidgetDescription(value: AccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescription) {
    this._widgetDescription.internalValue = value;
  }
  public resetWidgetDescription() {
    this._widgetDescription.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widgetDescriptionInput() {
    return this._widgetDescription.internalValue;
  }

  // widget_title - computed: false, optional: true, required: false
  private _widgetTitle = new AccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleOutputReference(this, "widget_title");
  public get widgetTitle() {
    return this._widgetTitle;
  }
  public putWidgetTitle(value: AccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitle) {
    this._widgetTitle.internalValue = value;
  }
  public resetWidgetTitle() {
    this._widgetTitle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widgetTitleInput() {
    return this._widgetTitle.internalValue;
  }
}
export interface AccountSettingV2WorkspaceDashboardThemeGridLineColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#dark AccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#light AccountSettingV2#light}
  */
  readonly light?: string;
}

export function accountSettingV2WorkspaceDashboardThemeGridLineColorToTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeGridLineColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function accountSettingV2WorkspaceDashboardThemeGridLineColorToHclTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeGridLineColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dark: {
      value: cdktn.stringToHclTerraform(struct!.dark),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    light: {
      value: cdktn.stringToHclTerraform(struct!.light),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2WorkspaceDashboardThemeGridLineColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2WorkspaceDashboardThemeGridLineColor | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dark !== undefined) {
      hasAnyValues = true;
      internalValueResult.dark = this._dark;
    }
    if (this._light !== undefined) {
      hasAnyValues = true;
      internalValueResult.light = this._light;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2WorkspaceDashboardThemeGridLineColor | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dark = undefined;
      this._light = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dark = value.dark;
      this._light = value.light;
    }
  }

  // dark - computed: false, optional: true, required: false
  private _dark?: string; 
  public get dark() {
    return this.getStringAttribute('dark');
  }
  public set dark(value: string) {
    this._dark = value;
  }
  public resetDark() {
    this._dark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get darkInput() {
    return this._dark;
  }

  // light - computed: false, optional: true, required: false
  private _light?: string; 
  public get light() {
    return this.getStringAttribute('light');
  }
  public set light(value: string) {
    this._light = value;
  }
  public resetLight() {
    this._light = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lightInput() {
    return this._light;
  }
}
export interface AccountSettingV2WorkspaceDashboardThemeSelectionColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#dark AccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#light AccountSettingV2#light}
  */
  readonly light?: string;
}

export function accountSettingV2WorkspaceDashboardThemeSelectionColorToTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeSelectionColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function accountSettingV2WorkspaceDashboardThemeSelectionColorToHclTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeSelectionColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dark: {
      value: cdktn.stringToHclTerraform(struct!.dark),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    light: {
      value: cdktn.stringToHclTerraform(struct!.light),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2WorkspaceDashboardThemeSelectionColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2WorkspaceDashboardThemeSelectionColor | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dark !== undefined) {
      hasAnyValues = true;
      internalValueResult.dark = this._dark;
    }
    if (this._light !== undefined) {
      hasAnyValues = true;
      internalValueResult.light = this._light;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2WorkspaceDashboardThemeSelectionColor | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dark = undefined;
      this._light = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dark = value.dark;
      this._light = value.light;
    }
  }

  // dark - computed: false, optional: true, required: false
  private _dark?: string; 
  public get dark() {
    return this.getStringAttribute('dark');
  }
  public set dark(value: string) {
    this._dark = value;
  }
  public resetDark() {
    this._dark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get darkInput() {
    return this._dark;
  }

  // light - computed: false, optional: true, required: false
  private _light?: string; 
  public get light() {
    return this.getStringAttribute('light');
  }
  public set light(value: string) {
    this._light = value;
  }
  public resetLight() {
    this._light = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lightInput() {
    return this._light;
  }
}
export interface AccountSettingV2WorkspaceDashboardThemeSentimentColorsNegative {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#dark AccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#light AccountSettingV2#light}
  */
  readonly light?: string;
}

export function accountSettingV2WorkspaceDashboardThemeSentimentColorsNegativeToTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeSentimentColorsNegative | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function accountSettingV2WorkspaceDashboardThemeSentimentColorsNegativeToHclTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeSentimentColorsNegative | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dark: {
      value: cdktn.stringToHclTerraform(struct!.dark),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    light: {
      value: cdktn.stringToHclTerraform(struct!.light),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2WorkspaceDashboardThemeSentimentColorsNegativeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2WorkspaceDashboardThemeSentimentColorsNegative | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dark !== undefined) {
      hasAnyValues = true;
      internalValueResult.dark = this._dark;
    }
    if (this._light !== undefined) {
      hasAnyValues = true;
      internalValueResult.light = this._light;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2WorkspaceDashboardThemeSentimentColorsNegative | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dark = undefined;
      this._light = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dark = value.dark;
      this._light = value.light;
    }
  }

  // dark - computed: false, optional: true, required: false
  private _dark?: string; 
  public get dark() {
    return this.getStringAttribute('dark');
  }
  public set dark(value: string) {
    this._dark = value;
  }
  public resetDark() {
    this._dark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get darkInput() {
    return this._dark;
  }

  // light - computed: false, optional: true, required: false
  private _light?: string; 
  public get light() {
    return this.getStringAttribute('light');
  }
  public set light(value: string) {
    this._light = value;
  }
  public resetLight() {
    this._light = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lightInput() {
    return this._light;
  }
}
export interface AccountSettingV2WorkspaceDashboardThemeSentimentColorsNeutral {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#dark AccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#light AccountSettingV2#light}
  */
  readonly light?: string;
}

export function accountSettingV2WorkspaceDashboardThemeSentimentColorsNeutralToTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeSentimentColorsNeutral | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function accountSettingV2WorkspaceDashboardThemeSentimentColorsNeutralToHclTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeSentimentColorsNeutral | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dark: {
      value: cdktn.stringToHclTerraform(struct!.dark),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    light: {
      value: cdktn.stringToHclTerraform(struct!.light),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2WorkspaceDashboardThemeSentimentColorsNeutralOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2WorkspaceDashboardThemeSentimentColorsNeutral | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dark !== undefined) {
      hasAnyValues = true;
      internalValueResult.dark = this._dark;
    }
    if (this._light !== undefined) {
      hasAnyValues = true;
      internalValueResult.light = this._light;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2WorkspaceDashboardThemeSentimentColorsNeutral | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dark = undefined;
      this._light = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dark = value.dark;
      this._light = value.light;
    }
  }

  // dark - computed: false, optional: true, required: false
  private _dark?: string; 
  public get dark() {
    return this.getStringAttribute('dark');
  }
  public set dark(value: string) {
    this._dark = value;
  }
  public resetDark() {
    this._dark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get darkInput() {
    return this._dark;
  }

  // light - computed: false, optional: true, required: false
  private _light?: string; 
  public get light() {
    return this.getStringAttribute('light');
  }
  public set light(value: string) {
    this._light = value;
  }
  public resetLight() {
    this._light = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lightInput() {
    return this._light;
  }
}
export interface AccountSettingV2WorkspaceDashboardThemeSentimentColorsPositive {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#dark AccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#light AccountSettingV2#light}
  */
  readonly light?: string;
}

export function accountSettingV2WorkspaceDashboardThemeSentimentColorsPositiveToTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeSentimentColorsPositive | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function accountSettingV2WorkspaceDashboardThemeSentimentColorsPositiveToHclTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeSentimentColorsPositive | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dark: {
      value: cdktn.stringToHclTerraform(struct!.dark),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    light: {
      value: cdktn.stringToHclTerraform(struct!.light),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2WorkspaceDashboardThemeSentimentColorsPositiveOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2WorkspaceDashboardThemeSentimentColorsPositive | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dark !== undefined) {
      hasAnyValues = true;
      internalValueResult.dark = this._dark;
    }
    if (this._light !== undefined) {
      hasAnyValues = true;
      internalValueResult.light = this._light;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2WorkspaceDashboardThemeSentimentColorsPositive | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dark = undefined;
      this._light = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dark = value.dark;
      this._light = value.light;
    }
  }

  // dark - computed: false, optional: true, required: false
  private _dark?: string; 
  public get dark() {
    return this.getStringAttribute('dark');
  }
  public set dark(value: string) {
    this._dark = value;
  }
  public resetDark() {
    this._dark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get darkInput() {
    return this._dark;
  }

  // light - computed: false, optional: true, required: false
  private _light?: string; 
  public get light() {
    return this.getStringAttribute('light');
  }
  public set light(value: string) {
    this._light = value;
  }
  public resetLight() {
    this._light = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lightInput() {
    return this._light;
  }
}
export interface AccountSettingV2WorkspaceDashboardThemeSentimentColors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#negative AccountSettingV2#negative}
  */
  readonly negative?: AccountSettingV2WorkspaceDashboardThemeSentimentColorsNegative;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#neutral AccountSettingV2#neutral}
  */
  readonly neutral?: AccountSettingV2WorkspaceDashboardThemeSentimentColorsNeutral;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#positive AccountSettingV2#positive}
  */
  readonly positive?: AccountSettingV2WorkspaceDashboardThemeSentimentColorsPositive;
}

export function accountSettingV2WorkspaceDashboardThemeSentimentColorsToTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeSentimentColors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    negative: accountSettingV2WorkspaceDashboardThemeSentimentColorsNegativeToTerraform(struct!.negative),
    neutral: accountSettingV2WorkspaceDashboardThemeSentimentColorsNeutralToTerraform(struct!.neutral),
    positive: accountSettingV2WorkspaceDashboardThemeSentimentColorsPositiveToTerraform(struct!.positive),
  }
}


export function accountSettingV2WorkspaceDashboardThemeSentimentColorsToHclTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeSentimentColors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    negative: {
      value: accountSettingV2WorkspaceDashboardThemeSentimentColorsNegativeToHclTerraform(struct!.negative),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2WorkspaceDashboardThemeSentimentColorsNegative",
    },
    neutral: {
      value: accountSettingV2WorkspaceDashboardThemeSentimentColorsNeutralToHclTerraform(struct!.neutral),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2WorkspaceDashboardThemeSentimentColorsNeutral",
    },
    positive: {
      value: accountSettingV2WorkspaceDashboardThemeSentimentColorsPositiveToHclTerraform(struct!.positive),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2WorkspaceDashboardThemeSentimentColorsPositive",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2WorkspaceDashboardThemeSentimentColorsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2WorkspaceDashboardThemeSentimentColors | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negative?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.negative = this._negative?.internalValue;
    }
    if (this._neutral?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.neutral = this._neutral?.internalValue;
    }
    if (this._positive?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.positive = this._positive?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2WorkspaceDashboardThemeSentimentColors | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negative.internalValue = undefined;
      this._neutral.internalValue = undefined;
      this._positive.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negative.internalValue = value.negative;
      this._neutral.internalValue = value.neutral;
      this._positive.internalValue = value.positive;
    }
  }

  // negative - computed: false, optional: true, required: false
  private _negative = new AccountSettingV2WorkspaceDashboardThemeSentimentColorsNegativeOutputReference(this, "negative");
  public get negative() {
    return this._negative;
  }
  public putNegative(value: AccountSettingV2WorkspaceDashboardThemeSentimentColorsNegative) {
    this._negative.internalValue = value;
  }
  public resetNegative() {
    this._negative.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negativeInput() {
    return this._negative.internalValue;
  }

  // neutral - computed: false, optional: true, required: false
  private _neutral = new AccountSettingV2WorkspaceDashboardThemeSentimentColorsNeutralOutputReference(this, "neutral");
  public get neutral() {
    return this._neutral;
  }
  public putNeutral(value: AccountSettingV2WorkspaceDashboardThemeSentimentColorsNeutral) {
    this._neutral.internalValue = value;
  }
  public resetNeutral() {
    this._neutral.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neutralInput() {
    return this._neutral.internalValue;
  }

  // positive - computed: false, optional: true, required: false
  private _positive = new AccountSettingV2WorkspaceDashboardThemeSentimentColorsPositiveOutputReference(this, "positive");
  public get positive() {
    return this._positive;
  }
  public putPositive(value: AccountSettingV2WorkspaceDashboardThemeSentimentColorsPositive) {
    this._positive.internalValue = value;
  }
  public resetPositive() {
    this._positive.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positiveInput() {
    return this._positive.internalValue;
  }
}
export interface AccountSettingV2WorkspaceDashboardThemeWidgetBackgroundColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#dark AccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#light AccountSettingV2#light}
  */
  readonly light?: string;
}

export function accountSettingV2WorkspaceDashboardThemeWidgetBackgroundColorToTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeWidgetBackgroundColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function accountSettingV2WorkspaceDashboardThemeWidgetBackgroundColorToHclTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeWidgetBackgroundColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dark: {
      value: cdktn.stringToHclTerraform(struct!.dark),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    light: {
      value: cdktn.stringToHclTerraform(struct!.light),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2WorkspaceDashboardThemeWidgetBackgroundColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2WorkspaceDashboardThemeWidgetBackgroundColor | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dark !== undefined) {
      hasAnyValues = true;
      internalValueResult.dark = this._dark;
    }
    if (this._light !== undefined) {
      hasAnyValues = true;
      internalValueResult.light = this._light;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2WorkspaceDashboardThemeWidgetBackgroundColor | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dark = undefined;
      this._light = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dark = value.dark;
      this._light = value.light;
    }
  }

  // dark - computed: false, optional: true, required: false
  private _dark?: string; 
  public get dark() {
    return this.getStringAttribute('dark');
  }
  public set dark(value: string) {
    this._dark = value;
  }
  public resetDark() {
    this._dark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get darkInput() {
    return this._dark;
  }

  // light - computed: false, optional: true, required: false
  private _light?: string; 
  public get light() {
    return this.getStringAttribute('light');
  }
  public set light(value: string) {
    this._light = value;
  }
  public resetLight() {
    this._light = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lightInput() {
    return this._light;
  }
}
export interface AccountSettingV2WorkspaceDashboardThemeWidgetBorderColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#dark AccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#light AccountSettingV2#light}
  */
  readonly light?: string;
}

export function accountSettingV2WorkspaceDashboardThemeWidgetBorderColorToTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeWidgetBorderColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function accountSettingV2WorkspaceDashboardThemeWidgetBorderColorToHclTerraform(struct?: AccountSettingV2WorkspaceDashboardThemeWidgetBorderColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dark: {
      value: cdktn.stringToHclTerraform(struct!.dark),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    light: {
      value: cdktn.stringToHclTerraform(struct!.light),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2WorkspaceDashboardThemeWidgetBorderColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2WorkspaceDashboardThemeWidgetBorderColor | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dark !== undefined) {
      hasAnyValues = true;
      internalValueResult.dark = this._dark;
    }
    if (this._light !== undefined) {
      hasAnyValues = true;
      internalValueResult.light = this._light;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2WorkspaceDashboardThemeWidgetBorderColor | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dark = undefined;
      this._light = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dark = value.dark;
      this._light = value.light;
    }
  }

  // dark - computed: false, optional: true, required: false
  private _dark?: string; 
  public get dark() {
    return this.getStringAttribute('dark');
  }
  public set dark(value: string) {
    this._dark = value;
  }
  public resetDark() {
    this._dark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get darkInput() {
    return this._dark;
  }

  // light - computed: false, optional: true, required: false
  private _light?: string; 
  public get light() {
    return this.getStringAttribute('light');
  }
  public set light(value: string) {
    this._light = value;
  }
  public resetLight() {
    this._light = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lightInput() {
    return this._light;
  }
}
export interface AccountSettingV2WorkspaceDashboardTheme {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#axis_line_color AccountSettingV2#axis_line_color}
  */
  readonly axisLineColor?: AccountSettingV2WorkspaceDashboardThemeAxisLineColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#canvas_background_color AccountSettingV2#canvas_background_color}
  */
  readonly canvasBackgroundColor?: AccountSettingV2WorkspaceDashboardThemeCanvasBackgroundColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#continuous_gradient AccountSettingV2#continuous_gradient}
  */
  readonly continuousGradient?: AccountSettingV2WorkspaceDashboardThemeContinuousGradient;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#font_color AccountSettingV2#font_color}
  */
  readonly fontColor?: AccountSettingV2WorkspaceDashboardThemeFontColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#font_family AccountSettingV2#font_family}
  */
  readonly fontFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#font_settings AccountSettingV2#font_settings}
  */
  readonly fontSettings?: AccountSettingV2WorkspaceDashboardThemeFontSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#grid_line_color AccountSettingV2#grid_line_color}
  */
  readonly gridLineColor?: AccountSettingV2WorkspaceDashboardThemeGridLineColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#mark_corner_radius AccountSettingV2#mark_corner_radius}
  */
  readonly markCornerRadius?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#selection_color AccountSettingV2#selection_color}
  */
  readonly selectionColor?: AccountSettingV2WorkspaceDashboardThemeSelectionColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#sentiment_colors AccountSettingV2#sentiment_colors}
  */
  readonly sentimentColors?: AccountSettingV2WorkspaceDashboardThemeSentimentColors;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#text_box_vertical_align AccountSettingV2#text_box_vertical_align}
  */
  readonly textBoxVerticalAlign?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#visualization_color_01 AccountSettingV2#visualization_color_01}
  */
  readonly visualizationColor01?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#visualization_color_02 AccountSettingV2#visualization_color_02}
  */
  readonly visualizationColor02?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#visualization_color_03 AccountSettingV2#visualization_color_03}
  */
  readonly visualizationColor03?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#visualization_color_04 AccountSettingV2#visualization_color_04}
  */
  readonly visualizationColor04?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#visualization_color_05 AccountSettingV2#visualization_color_05}
  */
  readonly visualizationColor05?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#visualization_color_06 AccountSettingV2#visualization_color_06}
  */
  readonly visualizationColor06?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#visualization_color_07 AccountSettingV2#visualization_color_07}
  */
  readonly visualizationColor07?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#visualization_color_08 AccountSettingV2#visualization_color_08}
  */
  readonly visualizationColor08?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#visualization_color_09 AccountSettingV2#visualization_color_09}
  */
  readonly visualizationColor09?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#visualization_color_10 AccountSettingV2#visualization_color_10}
  */
  readonly visualizationColor10?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#visualization_color_11 AccountSettingV2#visualization_color_11}
  */
  readonly visualizationColor11?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#visualization_color_12 AccountSettingV2#visualization_color_12}
  */
  readonly visualizationColor12?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#visualization_color_13 AccountSettingV2#visualization_color_13}
  */
  readonly visualizationColor13?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#visualization_color_14 AccountSettingV2#visualization_color_14}
  */
  readonly visualizationColor14?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#visualization_color_15 AccountSettingV2#visualization_color_15}
  */
  readonly visualizationColor15?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#visualization_color_16 AccountSettingV2#visualization_color_16}
  */
  readonly visualizationColor16?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#visualization_color_17 AccountSettingV2#visualization_color_17}
  */
  readonly visualizationColor17?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#visualization_color_18 AccountSettingV2#visualization_color_18}
  */
  readonly visualizationColor18?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#visualization_color_19 AccountSettingV2#visualization_color_19}
  */
  readonly visualizationColor19?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#visualization_color_20 AccountSettingV2#visualization_color_20}
  */
  readonly visualizationColor20?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#widget_background_color AccountSettingV2#widget_background_color}
  */
  readonly widgetBackgroundColor?: AccountSettingV2WorkspaceDashboardThemeWidgetBackgroundColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#widget_border_color AccountSettingV2#widget_border_color}
  */
  readonly widgetBorderColor?: AccountSettingV2WorkspaceDashboardThemeWidgetBorderColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#widget_corner_radius AccountSettingV2#widget_corner_radius}
  */
  readonly widgetCornerRadius?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#widget_header_alignment AccountSettingV2#widget_header_alignment}
  */
  readonly widgetHeaderAlignment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#widget_margin AccountSettingV2#widget_margin}
  */
  readonly widgetMargin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#widget_padding AccountSettingV2#widget_padding}
  */
  readonly widgetPadding?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#widget_shadow AccountSettingV2#widget_shadow}
  */
  readonly widgetShadow?: number;
}

export function accountSettingV2WorkspaceDashboardThemeToTerraform(struct?: AccountSettingV2WorkspaceDashboardTheme | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    axis_line_color: accountSettingV2WorkspaceDashboardThemeAxisLineColorToTerraform(struct!.axisLineColor),
    canvas_background_color: accountSettingV2WorkspaceDashboardThemeCanvasBackgroundColorToTerraform(struct!.canvasBackgroundColor),
    continuous_gradient: accountSettingV2WorkspaceDashboardThemeContinuousGradientToTerraform(struct!.continuousGradient),
    font_color: accountSettingV2WorkspaceDashboardThemeFontColorToTerraform(struct!.fontColor),
    font_family: cdktn.stringToTerraform(struct!.fontFamily),
    font_settings: accountSettingV2WorkspaceDashboardThemeFontSettingsToTerraform(struct!.fontSettings),
    grid_line_color: accountSettingV2WorkspaceDashboardThemeGridLineColorToTerraform(struct!.gridLineColor),
    mark_corner_radius: cdktn.numberToTerraform(struct!.markCornerRadius),
    selection_color: accountSettingV2WorkspaceDashboardThemeSelectionColorToTerraform(struct!.selectionColor),
    sentiment_colors: accountSettingV2WorkspaceDashboardThemeSentimentColorsToTerraform(struct!.sentimentColors),
    text_box_vertical_align: cdktn.stringToTerraform(struct!.textBoxVerticalAlign),
    visualization_color_01: cdktn.stringToTerraform(struct!.visualizationColor01),
    visualization_color_02: cdktn.stringToTerraform(struct!.visualizationColor02),
    visualization_color_03: cdktn.stringToTerraform(struct!.visualizationColor03),
    visualization_color_04: cdktn.stringToTerraform(struct!.visualizationColor04),
    visualization_color_05: cdktn.stringToTerraform(struct!.visualizationColor05),
    visualization_color_06: cdktn.stringToTerraform(struct!.visualizationColor06),
    visualization_color_07: cdktn.stringToTerraform(struct!.visualizationColor07),
    visualization_color_08: cdktn.stringToTerraform(struct!.visualizationColor08),
    visualization_color_09: cdktn.stringToTerraform(struct!.visualizationColor09),
    visualization_color_10: cdktn.stringToTerraform(struct!.visualizationColor10),
    visualization_color_11: cdktn.stringToTerraform(struct!.visualizationColor11),
    visualization_color_12: cdktn.stringToTerraform(struct!.visualizationColor12),
    visualization_color_13: cdktn.stringToTerraform(struct!.visualizationColor13),
    visualization_color_14: cdktn.stringToTerraform(struct!.visualizationColor14),
    visualization_color_15: cdktn.stringToTerraform(struct!.visualizationColor15),
    visualization_color_16: cdktn.stringToTerraform(struct!.visualizationColor16),
    visualization_color_17: cdktn.stringToTerraform(struct!.visualizationColor17),
    visualization_color_18: cdktn.stringToTerraform(struct!.visualizationColor18),
    visualization_color_19: cdktn.stringToTerraform(struct!.visualizationColor19),
    visualization_color_20: cdktn.stringToTerraform(struct!.visualizationColor20),
    widget_background_color: accountSettingV2WorkspaceDashboardThemeWidgetBackgroundColorToTerraform(struct!.widgetBackgroundColor),
    widget_border_color: accountSettingV2WorkspaceDashboardThemeWidgetBorderColorToTerraform(struct!.widgetBorderColor),
    widget_corner_radius: cdktn.numberToTerraform(struct!.widgetCornerRadius),
    widget_header_alignment: cdktn.stringToTerraform(struct!.widgetHeaderAlignment),
    widget_margin: cdktn.numberToTerraform(struct!.widgetMargin),
    widget_padding: cdktn.numberToTerraform(struct!.widgetPadding),
    widget_shadow: cdktn.numberToTerraform(struct!.widgetShadow),
  }
}


export function accountSettingV2WorkspaceDashboardThemeToHclTerraform(struct?: AccountSettingV2WorkspaceDashboardTheme | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    axis_line_color: {
      value: accountSettingV2WorkspaceDashboardThemeAxisLineColorToHclTerraform(struct!.axisLineColor),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2WorkspaceDashboardThemeAxisLineColor",
    },
    canvas_background_color: {
      value: accountSettingV2WorkspaceDashboardThemeCanvasBackgroundColorToHclTerraform(struct!.canvasBackgroundColor),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2WorkspaceDashboardThemeCanvasBackgroundColor",
    },
    continuous_gradient: {
      value: accountSettingV2WorkspaceDashboardThemeContinuousGradientToHclTerraform(struct!.continuousGradient),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2WorkspaceDashboardThemeContinuousGradient",
    },
    font_color: {
      value: accountSettingV2WorkspaceDashboardThemeFontColorToHclTerraform(struct!.fontColor),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2WorkspaceDashboardThemeFontColor",
    },
    font_family: {
      value: cdktn.stringToHclTerraform(struct!.fontFamily),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_settings: {
      value: accountSettingV2WorkspaceDashboardThemeFontSettingsToHclTerraform(struct!.fontSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2WorkspaceDashboardThemeFontSettings",
    },
    grid_line_color: {
      value: accountSettingV2WorkspaceDashboardThemeGridLineColorToHclTerraform(struct!.gridLineColor),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2WorkspaceDashboardThemeGridLineColor",
    },
    mark_corner_radius: {
      value: cdktn.numberToHclTerraform(struct!.markCornerRadius),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    selection_color: {
      value: accountSettingV2WorkspaceDashboardThemeSelectionColorToHclTerraform(struct!.selectionColor),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2WorkspaceDashboardThemeSelectionColor",
    },
    sentiment_colors: {
      value: accountSettingV2WorkspaceDashboardThemeSentimentColorsToHclTerraform(struct!.sentimentColors),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2WorkspaceDashboardThemeSentimentColors",
    },
    text_box_vertical_align: {
      value: cdktn.stringToHclTerraform(struct!.textBoxVerticalAlign),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    visualization_color_01: {
      value: cdktn.stringToHclTerraform(struct!.visualizationColor01),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    visualization_color_02: {
      value: cdktn.stringToHclTerraform(struct!.visualizationColor02),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    visualization_color_03: {
      value: cdktn.stringToHclTerraform(struct!.visualizationColor03),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    visualization_color_04: {
      value: cdktn.stringToHclTerraform(struct!.visualizationColor04),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    visualization_color_05: {
      value: cdktn.stringToHclTerraform(struct!.visualizationColor05),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    visualization_color_06: {
      value: cdktn.stringToHclTerraform(struct!.visualizationColor06),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    visualization_color_07: {
      value: cdktn.stringToHclTerraform(struct!.visualizationColor07),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    visualization_color_08: {
      value: cdktn.stringToHclTerraform(struct!.visualizationColor08),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    visualization_color_09: {
      value: cdktn.stringToHclTerraform(struct!.visualizationColor09),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    visualization_color_10: {
      value: cdktn.stringToHclTerraform(struct!.visualizationColor10),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    visualization_color_11: {
      value: cdktn.stringToHclTerraform(struct!.visualizationColor11),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    visualization_color_12: {
      value: cdktn.stringToHclTerraform(struct!.visualizationColor12),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    visualization_color_13: {
      value: cdktn.stringToHclTerraform(struct!.visualizationColor13),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    visualization_color_14: {
      value: cdktn.stringToHclTerraform(struct!.visualizationColor14),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    visualization_color_15: {
      value: cdktn.stringToHclTerraform(struct!.visualizationColor15),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    visualization_color_16: {
      value: cdktn.stringToHclTerraform(struct!.visualizationColor16),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    visualization_color_17: {
      value: cdktn.stringToHclTerraform(struct!.visualizationColor17),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    visualization_color_18: {
      value: cdktn.stringToHclTerraform(struct!.visualizationColor18),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    visualization_color_19: {
      value: cdktn.stringToHclTerraform(struct!.visualizationColor19),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    visualization_color_20: {
      value: cdktn.stringToHclTerraform(struct!.visualizationColor20),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    widget_background_color: {
      value: accountSettingV2WorkspaceDashboardThemeWidgetBackgroundColorToHclTerraform(struct!.widgetBackgroundColor),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2WorkspaceDashboardThemeWidgetBackgroundColor",
    },
    widget_border_color: {
      value: accountSettingV2WorkspaceDashboardThemeWidgetBorderColorToHclTerraform(struct!.widgetBorderColor),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountSettingV2WorkspaceDashboardThemeWidgetBorderColor",
    },
    widget_corner_radius: {
      value: cdktn.numberToHclTerraform(struct!.widgetCornerRadius),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    widget_header_alignment: {
      value: cdktn.stringToHclTerraform(struct!.widgetHeaderAlignment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    widget_margin: {
      value: cdktn.numberToHclTerraform(struct!.widgetMargin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    widget_padding: {
      value: cdktn.numberToHclTerraform(struct!.widgetPadding),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    widget_shadow: {
      value: cdktn.numberToHclTerraform(struct!.widgetShadow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2WorkspaceDashboardThemeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2WorkspaceDashboardTheme | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._axisLineColor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.axisLineColor = this._axisLineColor?.internalValue;
    }
    if (this._canvasBackgroundColor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.canvasBackgroundColor = this._canvasBackgroundColor?.internalValue;
    }
    if (this._continuousGradient?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.continuousGradient = this._continuousGradient?.internalValue;
    }
    if (this._fontColor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontColor = this._fontColor?.internalValue;
    }
    if (this._fontFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontFamily = this._fontFamily;
    }
    if (this._fontSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontSettings = this._fontSettings?.internalValue;
    }
    if (this._gridLineColor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gridLineColor = this._gridLineColor?.internalValue;
    }
    if (this._markCornerRadius !== undefined) {
      hasAnyValues = true;
      internalValueResult.markCornerRadius = this._markCornerRadius;
    }
    if (this._selectionColor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectionColor = this._selectionColor?.internalValue;
    }
    if (this._sentimentColors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sentimentColors = this._sentimentColors?.internalValue;
    }
    if (this._textBoxVerticalAlign !== undefined) {
      hasAnyValues = true;
      internalValueResult.textBoxVerticalAlign = this._textBoxVerticalAlign;
    }
    if (this._visualizationColor01 !== undefined) {
      hasAnyValues = true;
      internalValueResult.visualizationColor01 = this._visualizationColor01;
    }
    if (this._visualizationColor02 !== undefined) {
      hasAnyValues = true;
      internalValueResult.visualizationColor02 = this._visualizationColor02;
    }
    if (this._visualizationColor03 !== undefined) {
      hasAnyValues = true;
      internalValueResult.visualizationColor03 = this._visualizationColor03;
    }
    if (this._visualizationColor04 !== undefined) {
      hasAnyValues = true;
      internalValueResult.visualizationColor04 = this._visualizationColor04;
    }
    if (this._visualizationColor05 !== undefined) {
      hasAnyValues = true;
      internalValueResult.visualizationColor05 = this._visualizationColor05;
    }
    if (this._visualizationColor06 !== undefined) {
      hasAnyValues = true;
      internalValueResult.visualizationColor06 = this._visualizationColor06;
    }
    if (this._visualizationColor07 !== undefined) {
      hasAnyValues = true;
      internalValueResult.visualizationColor07 = this._visualizationColor07;
    }
    if (this._visualizationColor08 !== undefined) {
      hasAnyValues = true;
      internalValueResult.visualizationColor08 = this._visualizationColor08;
    }
    if (this._visualizationColor09 !== undefined) {
      hasAnyValues = true;
      internalValueResult.visualizationColor09 = this._visualizationColor09;
    }
    if (this._visualizationColor10 !== undefined) {
      hasAnyValues = true;
      internalValueResult.visualizationColor10 = this._visualizationColor10;
    }
    if (this._visualizationColor11 !== undefined) {
      hasAnyValues = true;
      internalValueResult.visualizationColor11 = this._visualizationColor11;
    }
    if (this._visualizationColor12 !== undefined) {
      hasAnyValues = true;
      internalValueResult.visualizationColor12 = this._visualizationColor12;
    }
    if (this._visualizationColor13 !== undefined) {
      hasAnyValues = true;
      internalValueResult.visualizationColor13 = this._visualizationColor13;
    }
    if (this._visualizationColor14 !== undefined) {
      hasAnyValues = true;
      internalValueResult.visualizationColor14 = this._visualizationColor14;
    }
    if (this._visualizationColor15 !== undefined) {
      hasAnyValues = true;
      internalValueResult.visualizationColor15 = this._visualizationColor15;
    }
    if (this._visualizationColor16 !== undefined) {
      hasAnyValues = true;
      internalValueResult.visualizationColor16 = this._visualizationColor16;
    }
    if (this._visualizationColor17 !== undefined) {
      hasAnyValues = true;
      internalValueResult.visualizationColor17 = this._visualizationColor17;
    }
    if (this._visualizationColor18 !== undefined) {
      hasAnyValues = true;
      internalValueResult.visualizationColor18 = this._visualizationColor18;
    }
    if (this._visualizationColor19 !== undefined) {
      hasAnyValues = true;
      internalValueResult.visualizationColor19 = this._visualizationColor19;
    }
    if (this._visualizationColor20 !== undefined) {
      hasAnyValues = true;
      internalValueResult.visualizationColor20 = this._visualizationColor20;
    }
    if (this._widgetBackgroundColor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.widgetBackgroundColor = this._widgetBackgroundColor?.internalValue;
    }
    if (this._widgetBorderColor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.widgetBorderColor = this._widgetBorderColor?.internalValue;
    }
    if (this._widgetCornerRadius !== undefined) {
      hasAnyValues = true;
      internalValueResult.widgetCornerRadius = this._widgetCornerRadius;
    }
    if (this._widgetHeaderAlignment !== undefined) {
      hasAnyValues = true;
      internalValueResult.widgetHeaderAlignment = this._widgetHeaderAlignment;
    }
    if (this._widgetMargin !== undefined) {
      hasAnyValues = true;
      internalValueResult.widgetMargin = this._widgetMargin;
    }
    if (this._widgetPadding !== undefined) {
      hasAnyValues = true;
      internalValueResult.widgetPadding = this._widgetPadding;
    }
    if (this._widgetShadow !== undefined) {
      hasAnyValues = true;
      internalValueResult.widgetShadow = this._widgetShadow;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2WorkspaceDashboardTheme | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._axisLineColor.internalValue = undefined;
      this._canvasBackgroundColor.internalValue = undefined;
      this._continuousGradient.internalValue = undefined;
      this._fontColor.internalValue = undefined;
      this._fontFamily = undefined;
      this._fontSettings.internalValue = undefined;
      this._gridLineColor.internalValue = undefined;
      this._markCornerRadius = undefined;
      this._selectionColor.internalValue = undefined;
      this._sentimentColors.internalValue = undefined;
      this._textBoxVerticalAlign = undefined;
      this._visualizationColor01 = undefined;
      this._visualizationColor02 = undefined;
      this._visualizationColor03 = undefined;
      this._visualizationColor04 = undefined;
      this._visualizationColor05 = undefined;
      this._visualizationColor06 = undefined;
      this._visualizationColor07 = undefined;
      this._visualizationColor08 = undefined;
      this._visualizationColor09 = undefined;
      this._visualizationColor10 = undefined;
      this._visualizationColor11 = undefined;
      this._visualizationColor12 = undefined;
      this._visualizationColor13 = undefined;
      this._visualizationColor14 = undefined;
      this._visualizationColor15 = undefined;
      this._visualizationColor16 = undefined;
      this._visualizationColor17 = undefined;
      this._visualizationColor18 = undefined;
      this._visualizationColor19 = undefined;
      this._visualizationColor20 = undefined;
      this._widgetBackgroundColor.internalValue = undefined;
      this._widgetBorderColor.internalValue = undefined;
      this._widgetCornerRadius = undefined;
      this._widgetHeaderAlignment = undefined;
      this._widgetMargin = undefined;
      this._widgetPadding = undefined;
      this._widgetShadow = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._axisLineColor.internalValue = value.axisLineColor;
      this._canvasBackgroundColor.internalValue = value.canvasBackgroundColor;
      this._continuousGradient.internalValue = value.continuousGradient;
      this._fontColor.internalValue = value.fontColor;
      this._fontFamily = value.fontFamily;
      this._fontSettings.internalValue = value.fontSettings;
      this._gridLineColor.internalValue = value.gridLineColor;
      this._markCornerRadius = value.markCornerRadius;
      this._selectionColor.internalValue = value.selectionColor;
      this._sentimentColors.internalValue = value.sentimentColors;
      this._textBoxVerticalAlign = value.textBoxVerticalAlign;
      this._visualizationColor01 = value.visualizationColor01;
      this._visualizationColor02 = value.visualizationColor02;
      this._visualizationColor03 = value.visualizationColor03;
      this._visualizationColor04 = value.visualizationColor04;
      this._visualizationColor05 = value.visualizationColor05;
      this._visualizationColor06 = value.visualizationColor06;
      this._visualizationColor07 = value.visualizationColor07;
      this._visualizationColor08 = value.visualizationColor08;
      this._visualizationColor09 = value.visualizationColor09;
      this._visualizationColor10 = value.visualizationColor10;
      this._visualizationColor11 = value.visualizationColor11;
      this._visualizationColor12 = value.visualizationColor12;
      this._visualizationColor13 = value.visualizationColor13;
      this._visualizationColor14 = value.visualizationColor14;
      this._visualizationColor15 = value.visualizationColor15;
      this._visualizationColor16 = value.visualizationColor16;
      this._visualizationColor17 = value.visualizationColor17;
      this._visualizationColor18 = value.visualizationColor18;
      this._visualizationColor19 = value.visualizationColor19;
      this._visualizationColor20 = value.visualizationColor20;
      this._widgetBackgroundColor.internalValue = value.widgetBackgroundColor;
      this._widgetBorderColor.internalValue = value.widgetBorderColor;
      this._widgetCornerRadius = value.widgetCornerRadius;
      this._widgetHeaderAlignment = value.widgetHeaderAlignment;
      this._widgetMargin = value.widgetMargin;
      this._widgetPadding = value.widgetPadding;
      this._widgetShadow = value.widgetShadow;
    }
  }

  // axis_line_color - computed: false, optional: true, required: false
  private _axisLineColor = new AccountSettingV2WorkspaceDashboardThemeAxisLineColorOutputReference(this, "axis_line_color");
  public get axisLineColor() {
    return this._axisLineColor;
  }
  public putAxisLineColor(value: AccountSettingV2WorkspaceDashboardThemeAxisLineColor) {
    this._axisLineColor.internalValue = value;
  }
  public resetAxisLineColor() {
    this._axisLineColor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get axisLineColorInput() {
    return this._axisLineColor.internalValue;
  }

  // canvas_background_color - computed: false, optional: true, required: false
  private _canvasBackgroundColor = new AccountSettingV2WorkspaceDashboardThemeCanvasBackgroundColorOutputReference(this, "canvas_background_color");
  public get canvasBackgroundColor() {
    return this._canvasBackgroundColor;
  }
  public putCanvasBackgroundColor(value: AccountSettingV2WorkspaceDashboardThemeCanvasBackgroundColor) {
    this._canvasBackgroundColor.internalValue = value;
  }
  public resetCanvasBackgroundColor() {
    this._canvasBackgroundColor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canvasBackgroundColorInput() {
    return this._canvasBackgroundColor.internalValue;
  }

  // continuous_gradient - computed: false, optional: true, required: false
  private _continuousGradient = new AccountSettingV2WorkspaceDashboardThemeContinuousGradientOutputReference(this, "continuous_gradient");
  public get continuousGradient() {
    return this._continuousGradient;
  }
  public putContinuousGradient(value: AccountSettingV2WorkspaceDashboardThemeContinuousGradient) {
    this._continuousGradient.internalValue = value;
  }
  public resetContinuousGradient() {
    this._continuousGradient.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continuousGradientInput() {
    return this._continuousGradient.internalValue;
  }

  // font_color - computed: false, optional: true, required: false
  private _fontColor = new AccountSettingV2WorkspaceDashboardThemeFontColorOutputReference(this, "font_color");
  public get fontColor() {
    return this._fontColor;
  }
  public putFontColor(value: AccountSettingV2WorkspaceDashboardThemeFontColor) {
    this._fontColor.internalValue = value;
  }
  public resetFontColor() {
    this._fontColor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontColorInput() {
    return this._fontColor.internalValue;
  }

  // font_family - computed: false, optional: true, required: false
  private _fontFamily?: string; 
  public get fontFamily() {
    return this.getStringAttribute('font_family');
  }
  public set fontFamily(value: string) {
    this._fontFamily = value;
  }
  public resetFontFamily() {
    this._fontFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontFamilyInput() {
    return this._fontFamily;
  }

  // font_settings - computed: false, optional: true, required: false
  private _fontSettings = new AccountSettingV2WorkspaceDashboardThemeFontSettingsOutputReference(this, "font_settings");
  public get fontSettings() {
    return this._fontSettings;
  }
  public putFontSettings(value: AccountSettingV2WorkspaceDashboardThemeFontSettings) {
    this._fontSettings.internalValue = value;
  }
  public resetFontSettings() {
    this._fontSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontSettingsInput() {
    return this._fontSettings.internalValue;
  }

  // grid_line_color - computed: false, optional: true, required: false
  private _gridLineColor = new AccountSettingV2WorkspaceDashboardThemeGridLineColorOutputReference(this, "grid_line_color");
  public get gridLineColor() {
    return this._gridLineColor;
  }
  public putGridLineColor(value: AccountSettingV2WorkspaceDashboardThemeGridLineColor) {
    this._gridLineColor.internalValue = value;
  }
  public resetGridLineColor() {
    this._gridLineColor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gridLineColorInput() {
    return this._gridLineColor.internalValue;
  }

  // mark_corner_radius - computed: false, optional: true, required: false
  private _markCornerRadius?: number; 
  public get markCornerRadius() {
    return this.getNumberAttribute('mark_corner_radius');
  }
  public set markCornerRadius(value: number) {
    this._markCornerRadius = value;
  }
  public resetMarkCornerRadius() {
    this._markCornerRadius = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markCornerRadiusInput() {
    return this._markCornerRadius;
  }

  // selection_color - computed: false, optional: true, required: false
  private _selectionColor = new AccountSettingV2WorkspaceDashboardThemeSelectionColorOutputReference(this, "selection_color");
  public get selectionColor() {
    return this._selectionColor;
  }
  public putSelectionColor(value: AccountSettingV2WorkspaceDashboardThemeSelectionColor) {
    this._selectionColor.internalValue = value;
  }
  public resetSelectionColor() {
    this._selectionColor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectionColorInput() {
    return this._selectionColor.internalValue;
  }

  // sentiment_colors - computed: false, optional: true, required: false
  private _sentimentColors = new AccountSettingV2WorkspaceDashboardThemeSentimentColorsOutputReference(this, "sentiment_colors");
  public get sentimentColors() {
    return this._sentimentColors;
  }
  public putSentimentColors(value: AccountSettingV2WorkspaceDashboardThemeSentimentColors) {
    this._sentimentColors.internalValue = value;
  }
  public resetSentimentColors() {
    this._sentimentColors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sentimentColorsInput() {
    return this._sentimentColors.internalValue;
  }

  // text_box_vertical_align - computed: false, optional: true, required: false
  private _textBoxVerticalAlign?: string; 
  public get textBoxVerticalAlign() {
    return this.getStringAttribute('text_box_vertical_align');
  }
  public set textBoxVerticalAlign(value: string) {
    this._textBoxVerticalAlign = value;
  }
  public resetTextBoxVerticalAlign() {
    this._textBoxVerticalAlign = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textBoxVerticalAlignInput() {
    return this._textBoxVerticalAlign;
  }

  // visualization_color_01 - computed: false, optional: true, required: false
  private _visualizationColor01?: string; 
  public get visualizationColor01() {
    return this.getStringAttribute('visualization_color_01');
  }
  public set visualizationColor01(value: string) {
    this._visualizationColor01 = value;
  }
  public resetVisualizationColor01() {
    this._visualizationColor01 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visualizationColor01Input() {
    return this._visualizationColor01;
  }

  // visualization_color_02 - computed: false, optional: true, required: false
  private _visualizationColor02?: string; 
  public get visualizationColor02() {
    return this.getStringAttribute('visualization_color_02');
  }
  public set visualizationColor02(value: string) {
    this._visualizationColor02 = value;
  }
  public resetVisualizationColor02() {
    this._visualizationColor02 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visualizationColor02Input() {
    return this._visualizationColor02;
  }

  // visualization_color_03 - computed: false, optional: true, required: false
  private _visualizationColor03?: string; 
  public get visualizationColor03() {
    return this.getStringAttribute('visualization_color_03');
  }
  public set visualizationColor03(value: string) {
    this._visualizationColor03 = value;
  }
  public resetVisualizationColor03() {
    this._visualizationColor03 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visualizationColor03Input() {
    return this._visualizationColor03;
  }

  // visualization_color_04 - computed: false, optional: true, required: false
  private _visualizationColor04?: string; 
  public get visualizationColor04() {
    return this.getStringAttribute('visualization_color_04');
  }
  public set visualizationColor04(value: string) {
    this._visualizationColor04 = value;
  }
  public resetVisualizationColor04() {
    this._visualizationColor04 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visualizationColor04Input() {
    return this._visualizationColor04;
  }

  // visualization_color_05 - computed: false, optional: true, required: false
  private _visualizationColor05?: string; 
  public get visualizationColor05() {
    return this.getStringAttribute('visualization_color_05');
  }
  public set visualizationColor05(value: string) {
    this._visualizationColor05 = value;
  }
  public resetVisualizationColor05() {
    this._visualizationColor05 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visualizationColor05Input() {
    return this._visualizationColor05;
  }

  // visualization_color_06 - computed: false, optional: true, required: false
  private _visualizationColor06?: string; 
  public get visualizationColor06() {
    return this.getStringAttribute('visualization_color_06');
  }
  public set visualizationColor06(value: string) {
    this._visualizationColor06 = value;
  }
  public resetVisualizationColor06() {
    this._visualizationColor06 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visualizationColor06Input() {
    return this._visualizationColor06;
  }

  // visualization_color_07 - computed: false, optional: true, required: false
  private _visualizationColor07?: string; 
  public get visualizationColor07() {
    return this.getStringAttribute('visualization_color_07');
  }
  public set visualizationColor07(value: string) {
    this._visualizationColor07 = value;
  }
  public resetVisualizationColor07() {
    this._visualizationColor07 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visualizationColor07Input() {
    return this._visualizationColor07;
  }

  // visualization_color_08 - computed: false, optional: true, required: false
  private _visualizationColor08?: string; 
  public get visualizationColor08() {
    return this.getStringAttribute('visualization_color_08');
  }
  public set visualizationColor08(value: string) {
    this._visualizationColor08 = value;
  }
  public resetVisualizationColor08() {
    this._visualizationColor08 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visualizationColor08Input() {
    return this._visualizationColor08;
  }

  // visualization_color_09 - computed: false, optional: true, required: false
  private _visualizationColor09?: string; 
  public get visualizationColor09() {
    return this.getStringAttribute('visualization_color_09');
  }
  public set visualizationColor09(value: string) {
    this._visualizationColor09 = value;
  }
  public resetVisualizationColor09() {
    this._visualizationColor09 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visualizationColor09Input() {
    return this._visualizationColor09;
  }

  // visualization_color_10 - computed: false, optional: true, required: false
  private _visualizationColor10?: string; 
  public get visualizationColor10() {
    return this.getStringAttribute('visualization_color_10');
  }
  public set visualizationColor10(value: string) {
    this._visualizationColor10 = value;
  }
  public resetVisualizationColor10() {
    this._visualizationColor10 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visualizationColor10Input() {
    return this._visualizationColor10;
  }

  // visualization_color_11 - computed: false, optional: true, required: false
  private _visualizationColor11?: string; 
  public get visualizationColor11() {
    return this.getStringAttribute('visualization_color_11');
  }
  public set visualizationColor11(value: string) {
    this._visualizationColor11 = value;
  }
  public resetVisualizationColor11() {
    this._visualizationColor11 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visualizationColor11Input() {
    return this._visualizationColor11;
  }

  // visualization_color_12 - computed: false, optional: true, required: false
  private _visualizationColor12?: string; 
  public get visualizationColor12() {
    return this.getStringAttribute('visualization_color_12');
  }
  public set visualizationColor12(value: string) {
    this._visualizationColor12 = value;
  }
  public resetVisualizationColor12() {
    this._visualizationColor12 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visualizationColor12Input() {
    return this._visualizationColor12;
  }

  // visualization_color_13 - computed: false, optional: true, required: false
  private _visualizationColor13?: string; 
  public get visualizationColor13() {
    return this.getStringAttribute('visualization_color_13');
  }
  public set visualizationColor13(value: string) {
    this._visualizationColor13 = value;
  }
  public resetVisualizationColor13() {
    this._visualizationColor13 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visualizationColor13Input() {
    return this._visualizationColor13;
  }

  // visualization_color_14 - computed: false, optional: true, required: false
  private _visualizationColor14?: string; 
  public get visualizationColor14() {
    return this.getStringAttribute('visualization_color_14');
  }
  public set visualizationColor14(value: string) {
    this._visualizationColor14 = value;
  }
  public resetVisualizationColor14() {
    this._visualizationColor14 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visualizationColor14Input() {
    return this._visualizationColor14;
  }

  // visualization_color_15 - computed: false, optional: true, required: false
  private _visualizationColor15?: string; 
  public get visualizationColor15() {
    return this.getStringAttribute('visualization_color_15');
  }
  public set visualizationColor15(value: string) {
    this._visualizationColor15 = value;
  }
  public resetVisualizationColor15() {
    this._visualizationColor15 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visualizationColor15Input() {
    return this._visualizationColor15;
  }

  // visualization_color_16 - computed: false, optional: true, required: false
  private _visualizationColor16?: string; 
  public get visualizationColor16() {
    return this.getStringAttribute('visualization_color_16');
  }
  public set visualizationColor16(value: string) {
    this._visualizationColor16 = value;
  }
  public resetVisualizationColor16() {
    this._visualizationColor16 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visualizationColor16Input() {
    return this._visualizationColor16;
  }

  // visualization_color_17 - computed: false, optional: true, required: false
  private _visualizationColor17?: string; 
  public get visualizationColor17() {
    return this.getStringAttribute('visualization_color_17');
  }
  public set visualizationColor17(value: string) {
    this._visualizationColor17 = value;
  }
  public resetVisualizationColor17() {
    this._visualizationColor17 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visualizationColor17Input() {
    return this._visualizationColor17;
  }

  // visualization_color_18 - computed: false, optional: true, required: false
  private _visualizationColor18?: string; 
  public get visualizationColor18() {
    return this.getStringAttribute('visualization_color_18');
  }
  public set visualizationColor18(value: string) {
    this._visualizationColor18 = value;
  }
  public resetVisualizationColor18() {
    this._visualizationColor18 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visualizationColor18Input() {
    return this._visualizationColor18;
  }

  // visualization_color_19 - computed: false, optional: true, required: false
  private _visualizationColor19?: string; 
  public get visualizationColor19() {
    return this.getStringAttribute('visualization_color_19');
  }
  public set visualizationColor19(value: string) {
    this._visualizationColor19 = value;
  }
  public resetVisualizationColor19() {
    this._visualizationColor19 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visualizationColor19Input() {
    return this._visualizationColor19;
  }

  // visualization_color_20 - computed: false, optional: true, required: false
  private _visualizationColor20?: string; 
  public get visualizationColor20() {
    return this.getStringAttribute('visualization_color_20');
  }
  public set visualizationColor20(value: string) {
    this._visualizationColor20 = value;
  }
  public resetVisualizationColor20() {
    this._visualizationColor20 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visualizationColor20Input() {
    return this._visualizationColor20;
  }

  // widget_background_color - computed: false, optional: true, required: false
  private _widgetBackgroundColor = new AccountSettingV2WorkspaceDashboardThemeWidgetBackgroundColorOutputReference(this, "widget_background_color");
  public get widgetBackgroundColor() {
    return this._widgetBackgroundColor;
  }
  public putWidgetBackgroundColor(value: AccountSettingV2WorkspaceDashboardThemeWidgetBackgroundColor) {
    this._widgetBackgroundColor.internalValue = value;
  }
  public resetWidgetBackgroundColor() {
    this._widgetBackgroundColor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widgetBackgroundColorInput() {
    return this._widgetBackgroundColor.internalValue;
  }

  // widget_border_color - computed: false, optional: true, required: false
  private _widgetBorderColor = new AccountSettingV2WorkspaceDashboardThemeWidgetBorderColorOutputReference(this, "widget_border_color");
  public get widgetBorderColor() {
    return this._widgetBorderColor;
  }
  public putWidgetBorderColor(value: AccountSettingV2WorkspaceDashboardThemeWidgetBorderColor) {
    this._widgetBorderColor.internalValue = value;
  }
  public resetWidgetBorderColor() {
    this._widgetBorderColor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widgetBorderColorInput() {
    return this._widgetBorderColor.internalValue;
  }

  // widget_corner_radius - computed: false, optional: true, required: false
  private _widgetCornerRadius?: number; 
  public get widgetCornerRadius() {
    return this.getNumberAttribute('widget_corner_radius');
  }
  public set widgetCornerRadius(value: number) {
    this._widgetCornerRadius = value;
  }
  public resetWidgetCornerRadius() {
    this._widgetCornerRadius = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widgetCornerRadiusInput() {
    return this._widgetCornerRadius;
  }

  // widget_header_alignment - computed: false, optional: true, required: false
  private _widgetHeaderAlignment?: string; 
  public get widgetHeaderAlignment() {
    return this.getStringAttribute('widget_header_alignment');
  }
  public set widgetHeaderAlignment(value: string) {
    this._widgetHeaderAlignment = value;
  }
  public resetWidgetHeaderAlignment() {
    this._widgetHeaderAlignment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widgetHeaderAlignmentInput() {
    return this._widgetHeaderAlignment;
  }

  // widget_margin - computed: false, optional: true, required: false
  private _widgetMargin?: number; 
  public get widgetMargin() {
    return this.getNumberAttribute('widget_margin');
  }
  public set widgetMargin(value: number) {
    this._widgetMargin = value;
  }
  public resetWidgetMargin() {
    this._widgetMargin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widgetMarginInput() {
    return this._widgetMargin;
  }

  // widget_padding - computed: false, optional: true, required: false
  private _widgetPadding?: number; 
  public get widgetPadding() {
    return this.getNumberAttribute('widget_padding');
  }
  public set widgetPadding(value: number) {
    this._widgetPadding = value;
  }
  public resetWidgetPadding() {
    this._widgetPadding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widgetPaddingInput() {
    return this._widgetPadding;
  }

  // widget_shadow - computed: false, optional: true, required: false
  private _widgetShadow?: number; 
  public get widgetShadow() {
    return this.getNumberAttribute('widget_shadow');
  }
  public set widgetShadow(value: number) {
    this._widgetShadow = value;
  }
  public resetWidgetShadow() {
    this._widgetShadow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widgetShadowInput() {
    return this._widgetShadow;
  }
}
export interface AccountSettingV2WorkspaceLabel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#color AccountSettingV2#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#label AccountSettingV2#label}
  */
  readonly label?: string;
}

export function accountSettingV2WorkspaceLabelToTerraform(struct?: AccountSettingV2WorkspaceLabel | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    color: cdktn.stringToTerraform(struct!.color),
    label: cdktn.stringToTerraform(struct!.label),
  }
}


export function accountSettingV2WorkspaceLabelToHclTerraform(struct?: AccountSettingV2WorkspaceLabel | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    color: {
      value: cdktn.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktn.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingV2WorkspaceLabelOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettingV2WorkspaceLabel | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettingV2WorkspaceLabel | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._label = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._label = value.label;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2 databricks_account_setting_v2}
*/
export class AccountSettingV2 extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_account_setting_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AccountSettingV2 resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AccountSettingV2 to import
  * @param importFromId The id of the existing AccountSettingV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AccountSettingV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_account_setting_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/account_setting_v2 databricks_account_setting_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccountSettingV2Config = {}
  */
  public constructor(scope: Construct, id: string, config: AccountSettingV2Config = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_account_setting_v2',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.143.0',
        providerVersionConstraint: '~> 1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aibiDashboardEmbeddingAccessPolicy.internalValue = config.aibiDashboardEmbeddingAccessPolicy;
    this._aibiDashboardEmbeddingApprovedDomains.internalValue = config.aibiDashboardEmbeddingApprovedDomains;
    this._allowedAppsUserApiScopes.internalValue = config.allowedAppsUserApiScopes;
    this._automaticClusterUpdateWorkspace.internalValue = config.automaticClusterUpdateWorkspace;
    this._booleanVal.internalValue = config.booleanVal;
    this._collaborationPlatformConnectivity.internalValue = config.collaborationPlatformConnectivity;
    this._effectiveAibiDashboardEmbeddingAccessPolicy.internalValue = config.effectiveAibiDashboardEmbeddingAccessPolicy;
    this._effectiveAibiDashboardEmbeddingApprovedDomains.internalValue = config.effectiveAibiDashboardEmbeddingApprovedDomains;
    this._effectiveAutomaticClusterUpdateWorkspace.internalValue = config.effectiveAutomaticClusterUpdateWorkspace;
    this._effectivePersonalCompute.internalValue = config.effectivePersonalCompute;
    this._effectiveRestrictWorkspaceAdmins.internalValue = config.effectiveRestrictWorkspaceAdmins;
    this._effectiveWorkspaceLabel.internalValue = config.effectiveWorkspaceLabel;
    this._integerVal.internalValue = config.integerVal;
    this._name = config.name;
    this._operationalEmailCustomRecipient.internalValue = config.operationalEmailCustomRecipient;
    this._personalCompute.internalValue = config.personalCompute;
    this._restrictWorkspaceAdmins.internalValue = config.restrictWorkspaceAdmins;
    this._stringVal.internalValue = config.stringVal;
    this._workspaceDashboardTheme.internalValue = config.workspaceDashboardTheme;
    this._workspaceLabel.internalValue = config.workspaceLabel;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aibi_dashboard_embedding_access_policy - computed: false, optional: true, required: false
  private _aibiDashboardEmbeddingAccessPolicy = new AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference(this, "aibi_dashboard_embedding_access_policy");
  public get aibiDashboardEmbeddingAccessPolicy() {
    return this._aibiDashboardEmbeddingAccessPolicy;
  }
  public putAibiDashboardEmbeddingAccessPolicy(value: AccountSettingV2AibiDashboardEmbeddingAccessPolicy) {
    this._aibiDashboardEmbeddingAccessPolicy.internalValue = value;
  }
  public resetAibiDashboardEmbeddingAccessPolicy() {
    this._aibiDashboardEmbeddingAccessPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aibiDashboardEmbeddingAccessPolicyInput() {
    return this._aibiDashboardEmbeddingAccessPolicy.internalValue;
  }

  // aibi_dashboard_embedding_approved_domains - computed: false, optional: true, required: false
  private _aibiDashboardEmbeddingApprovedDomains = new AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference(this, "aibi_dashboard_embedding_approved_domains");
  public get aibiDashboardEmbeddingApprovedDomains() {
    return this._aibiDashboardEmbeddingApprovedDomains;
  }
  public putAibiDashboardEmbeddingApprovedDomains(value: AccountSettingV2AibiDashboardEmbeddingApprovedDomains) {
    this._aibiDashboardEmbeddingApprovedDomains.internalValue = value;
  }
  public resetAibiDashboardEmbeddingApprovedDomains() {
    this._aibiDashboardEmbeddingApprovedDomains.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aibiDashboardEmbeddingApprovedDomainsInput() {
    return this._aibiDashboardEmbeddingApprovedDomains.internalValue;
  }

  // allowed_apps_user_api_scopes - computed: false, optional: true, required: false
  private _allowedAppsUserApiScopes = new AccountSettingV2AllowedAppsUserApiScopesOutputReference(this, "allowed_apps_user_api_scopes");
  public get allowedAppsUserApiScopes() {
    return this._allowedAppsUserApiScopes;
  }
  public putAllowedAppsUserApiScopes(value: AccountSettingV2AllowedAppsUserApiScopes) {
    this._allowedAppsUserApiScopes.internalValue = value;
  }
  public resetAllowedAppsUserApiScopes() {
    this._allowedAppsUserApiScopes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedAppsUserApiScopesInput() {
    return this._allowedAppsUserApiScopes.internalValue;
  }

  // automatic_cluster_update_workspace - computed: false, optional: true, required: false
  private _automaticClusterUpdateWorkspace = new AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference(this, "automatic_cluster_update_workspace");
  public get automaticClusterUpdateWorkspace() {
    return this._automaticClusterUpdateWorkspace;
  }
  public putAutomaticClusterUpdateWorkspace(value: AccountSettingV2AutomaticClusterUpdateWorkspace) {
    this._automaticClusterUpdateWorkspace.internalValue = value;
  }
  public resetAutomaticClusterUpdateWorkspace() {
    this._automaticClusterUpdateWorkspace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticClusterUpdateWorkspaceInput() {
    return this._automaticClusterUpdateWorkspace.internalValue;
  }

  // boolean_val - computed: false, optional: true, required: false
  private _booleanVal = new AccountSettingV2BooleanValOutputReference(this, "boolean_val");
  public get booleanVal() {
    return this._booleanVal;
  }
  public putBooleanVal(value: AccountSettingV2BooleanVal) {
    this._booleanVal.internalValue = value;
  }
  public resetBooleanVal() {
    this._booleanVal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get booleanValInput() {
    return this._booleanVal.internalValue;
  }

  // collaboration_platform_connectivity - computed: false, optional: true, required: false
  private _collaborationPlatformConnectivity = new AccountSettingV2CollaborationPlatformConnectivityOutputReference(this, "collaboration_platform_connectivity");
  public get collaborationPlatformConnectivity() {
    return this._collaborationPlatformConnectivity;
  }
  public putCollaborationPlatformConnectivity(value: AccountSettingV2CollaborationPlatformConnectivity) {
    this._collaborationPlatformConnectivity.internalValue = value;
  }
  public resetCollaborationPlatformConnectivity() {
    this._collaborationPlatformConnectivity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collaborationPlatformConnectivityInput() {
    return this._collaborationPlatformConnectivity.internalValue;
  }

  // effective_aibi_dashboard_embedding_access_policy - computed: false, optional: true, required: false
  private _effectiveAibiDashboardEmbeddingAccessPolicy = new AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference(this, "effective_aibi_dashboard_embedding_access_policy");
  public get effectiveAibiDashboardEmbeddingAccessPolicy() {
    return this._effectiveAibiDashboardEmbeddingAccessPolicy;
  }
  public putEffectiveAibiDashboardEmbeddingAccessPolicy(value: AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy) {
    this._effectiveAibiDashboardEmbeddingAccessPolicy.internalValue = value;
  }
  public resetEffectiveAibiDashboardEmbeddingAccessPolicy() {
    this._effectiveAibiDashboardEmbeddingAccessPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectiveAibiDashboardEmbeddingAccessPolicyInput() {
    return this._effectiveAibiDashboardEmbeddingAccessPolicy.internalValue;
  }

  // effective_aibi_dashboard_embedding_approved_domains - computed: false, optional: true, required: false
  private _effectiveAibiDashboardEmbeddingApprovedDomains = new AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference(this, "effective_aibi_dashboard_embedding_approved_domains");
  public get effectiveAibiDashboardEmbeddingApprovedDomains() {
    return this._effectiveAibiDashboardEmbeddingApprovedDomains;
  }
  public putEffectiveAibiDashboardEmbeddingApprovedDomains(value: AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains) {
    this._effectiveAibiDashboardEmbeddingApprovedDomains.internalValue = value;
  }
  public resetEffectiveAibiDashboardEmbeddingApprovedDomains() {
    this._effectiveAibiDashboardEmbeddingApprovedDomains.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectiveAibiDashboardEmbeddingApprovedDomainsInput() {
    return this._effectiveAibiDashboardEmbeddingApprovedDomains.internalValue;
  }

  // effective_allowed_apps_user_api_scopes - computed: true, optional: false, required: false
  private _effectiveAllowedAppsUserApiScopes = new AccountSettingV2EffectiveAllowedAppsUserApiScopesOutputReference(this, "effective_allowed_apps_user_api_scopes");
  public get effectiveAllowedAppsUserApiScopes() {
    return this._effectiveAllowedAppsUserApiScopes;
  }

  // effective_automatic_cluster_update_workspace - computed: false, optional: true, required: false
  private _effectiveAutomaticClusterUpdateWorkspace = new AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference(this, "effective_automatic_cluster_update_workspace");
  public get effectiveAutomaticClusterUpdateWorkspace() {
    return this._effectiveAutomaticClusterUpdateWorkspace;
  }
  public putEffectiveAutomaticClusterUpdateWorkspace(value: AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace) {
    this._effectiveAutomaticClusterUpdateWorkspace.internalValue = value;
  }
  public resetEffectiveAutomaticClusterUpdateWorkspace() {
    this._effectiveAutomaticClusterUpdateWorkspace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectiveAutomaticClusterUpdateWorkspaceInput() {
    return this._effectiveAutomaticClusterUpdateWorkspace.internalValue;
  }

  // effective_boolean_val - computed: true, optional: false, required: false
  private _effectiveBooleanVal = new AccountSettingV2EffectiveBooleanValOutputReference(this, "effective_boolean_val");
  public get effectiveBooleanVal() {
    return this._effectiveBooleanVal;
  }

  // effective_collaboration_platform_connectivity - computed: true, optional: false, required: false
  private _effectiveCollaborationPlatformConnectivity = new AccountSettingV2EffectiveCollaborationPlatformConnectivityOutputReference(this, "effective_collaboration_platform_connectivity");
  public get effectiveCollaborationPlatformConnectivity() {
    return this._effectiveCollaborationPlatformConnectivity;
  }

  // effective_integer_val - computed: true, optional: false, required: false
  private _effectiveIntegerVal = new AccountSettingV2EffectiveIntegerValOutputReference(this, "effective_integer_val");
  public get effectiveIntegerVal() {
    return this._effectiveIntegerVal;
  }

  // effective_operational_email_custom_recipient - computed: true, optional: false, required: false
  private _effectiveOperationalEmailCustomRecipient = new AccountSettingV2EffectiveOperationalEmailCustomRecipientOutputReference(this, "effective_operational_email_custom_recipient");
  public get effectiveOperationalEmailCustomRecipient() {
    return this._effectiveOperationalEmailCustomRecipient;
  }

  // effective_personal_compute - computed: false, optional: true, required: false
  private _effectivePersonalCompute = new AccountSettingV2EffectivePersonalComputeOutputReference(this, "effective_personal_compute");
  public get effectivePersonalCompute() {
    return this._effectivePersonalCompute;
  }
  public putEffectivePersonalCompute(value: AccountSettingV2EffectivePersonalCompute) {
    this._effectivePersonalCompute.internalValue = value;
  }
  public resetEffectivePersonalCompute() {
    this._effectivePersonalCompute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectivePersonalComputeInput() {
    return this._effectivePersonalCompute.internalValue;
  }

  // effective_restrict_workspace_admins - computed: false, optional: true, required: false
  private _effectiveRestrictWorkspaceAdmins = new AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference(this, "effective_restrict_workspace_admins");
  public get effectiveRestrictWorkspaceAdmins() {
    return this._effectiveRestrictWorkspaceAdmins;
  }
  public putEffectiveRestrictWorkspaceAdmins(value: AccountSettingV2EffectiveRestrictWorkspaceAdmins) {
    this._effectiveRestrictWorkspaceAdmins.internalValue = value;
  }
  public resetEffectiveRestrictWorkspaceAdmins() {
    this._effectiveRestrictWorkspaceAdmins.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectiveRestrictWorkspaceAdminsInput() {
    return this._effectiveRestrictWorkspaceAdmins.internalValue;
  }

  // effective_string_val - computed: true, optional: false, required: false
  private _effectiveStringVal = new AccountSettingV2EffectiveStringValOutputReference(this, "effective_string_val");
  public get effectiveStringVal() {
    return this._effectiveStringVal;
  }

  // effective_workspace_dashboard_theme - computed: true, optional: false, required: false
  private _effectiveWorkspaceDashboardTheme = new AccountSettingV2EffectiveWorkspaceDashboardThemeOutputReference(this, "effective_workspace_dashboard_theme");
  public get effectiveWorkspaceDashboardTheme() {
    return this._effectiveWorkspaceDashboardTheme;
  }

  // effective_workspace_label - computed: false, optional: true, required: false
  private _effectiveWorkspaceLabel = new AccountSettingV2EffectiveWorkspaceLabelOutputReference(this, "effective_workspace_label");
  public get effectiveWorkspaceLabel() {
    return this._effectiveWorkspaceLabel;
  }
  public putEffectiveWorkspaceLabel(value: AccountSettingV2EffectiveWorkspaceLabel) {
    this._effectiveWorkspaceLabel.internalValue = value;
  }
  public resetEffectiveWorkspaceLabel() {
    this._effectiveWorkspaceLabel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectiveWorkspaceLabelInput() {
    return this._effectiveWorkspaceLabel.internalValue;
  }

  // integer_val - computed: false, optional: true, required: false
  private _integerVal = new AccountSettingV2IntegerValOutputReference(this, "integer_val");
  public get integerVal() {
    return this._integerVal;
  }
  public putIntegerVal(value: AccountSettingV2IntegerVal) {
    this._integerVal.internalValue = value;
  }
  public resetIntegerVal() {
    this._integerVal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerValInput() {
    return this._integerVal.internalValue;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // operational_email_custom_recipient - computed: false, optional: true, required: false
  private _operationalEmailCustomRecipient = new AccountSettingV2OperationalEmailCustomRecipientOutputReference(this, "operational_email_custom_recipient");
  public get operationalEmailCustomRecipient() {
    return this._operationalEmailCustomRecipient;
  }
  public putOperationalEmailCustomRecipient(value: AccountSettingV2OperationalEmailCustomRecipient) {
    this._operationalEmailCustomRecipient.internalValue = value;
  }
  public resetOperationalEmailCustomRecipient() {
    this._operationalEmailCustomRecipient.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationalEmailCustomRecipientInput() {
    return this._operationalEmailCustomRecipient.internalValue;
  }

  // personal_compute - computed: false, optional: true, required: false
  private _personalCompute = new AccountSettingV2PersonalComputeOutputReference(this, "personal_compute");
  public get personalCompute() {
    return this._personalCompute;
  }
  public putPersonalCompute(value: AccountSettingV2PersonalCompute) {
    this._personalCompute.internalValue = value;
  }
  public resetPersonalCompute() {
    this._personalCompute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get personalComputeInput() {
    return this._personalCompute.internalValue;
  }

  // restrict_workspace_admins - computed: false, optional: true, required: false
  private _restrictWorkspaceAdmins = new AccountSettingV2RestrictWorkspaceAdminsOutputReference(this, "restrict_workspace_admins");
  public get restrictWorkspaceAdmins() {
    return this._restrictWorkspaceAdmins;
  }
  public putRestrictWorkspaceAdmins(value: AccountSettingV2RestrictWorkspaceAdmins) {
    this._restrictWorkspaceAdmins.internalValue = value;
  }
  public resetRestrictWorkspaceAdmins() {
    this._restrictWorkspaceAdmins.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictWorkspaceAdminsInput() {
    return this._restrictWorkspaceAdmins.internalValue;
  }

  // string_val - computed: false, optional: true, required: false
  private _stringVal = new AccountSettingV2StringValOutputReference(this, "string_val");
  public get stringVal() {
    return this._stringVal;
  }
  public putStringVal(value: AccountSettingV2StringVal) {
    this._stringVal.internalValue = value;
  }
  public resetStringVal() {
    this._stringVal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValInput() {
    return this._stringVal.internalValue;
  }

  // workspace_dashboard_theme - computed: false, optional: true, required: false
  private _workspaceDashboardTheme = new AccountSettingV2WorkspaceDashboardThemeOutputReference(this, "workspace_dashboard_theme");
  public get workspaceDashboardTheme() {
    return this._workspaceDashboardTheme;
  }
  public putWorkspaceDashboardTheme(value: AccountSettingV2WorkspaceDashboardTheme) {
    this._workspaceDashboardTheme.internalValue = value;
  }
  public resetWorkspaceDashboardTheme() {
    this._workspaceDashboardTheme.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceDashboardThemeInput() {
    return this._workspaceDashboardTheme.internalValue;
  }

  // workspace_label - computed: false, optional: true, required: false
  private _workspaceLabel = new AccountSettingV2WorkspaceLabelOutputReference(this, "workspace_label");
  public get workspaceLabel() {
    return this._workspaceLabel;
  }
  public putWorkspaceLabel(value: AccountSettingV2WorkspaceLabel) {
    this._workspaceLabel.internalValue = value;
  }
  public resetWorkspaceLabel() {
    this._workspaceLabel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceLabelInput() {
    return this._workspaceLabel.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aibi_dashboard_embedding_access_policy: accountSettingV2AibiDashboardEmbeddingAccessPolicyToTerraform(this._aibiDashboardEmbeddingAccessPolicy.internalValue),
      aibi_dashboard_embedding_approved_domains: accountSettingV2AibiDashboardEmbeddingApprovedDomainsToTerraform(this._aibiDashboardEmbeddingApprovedDomains.internalValue),
      allowed_apps_user_api_scopes: accountSettingV2AllowedAppsUserApiScopesToTerraform(this._allowedAppsUserApiScopes.internalValue),
      automatic_cluster_update_workspace: accountSettingV2AutomaticClusterUpdateWorkspaceToTerraform(this._automaticClusterUpdateWorkspace.internalValue),
      boolean_val: accountSettingV2BooleanValToTerraform(this._booleanVal.internalValue),
      collaboration_platform_connectivity: accountSettingV2CollaborationPlatformConnectivityToTerraform(this._collaborationPlatformConnectivity.internalValue),
      effective_aibi_dashboard_embedding_access_policy: accountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyToTerraform(this._effectiveAibiDashboardEmbeddingAccessPolicy.internalValue),
      effective_aibi_dashboard_embedding_approved_domains: accountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsToTerraform(this._effectiveAibiDashboardEmbeddingApprovedDomains.internalValue),
      effective_automatic_cluster_update_workspace: accountSettingV2EffectiveAutomaticClusterUpdateWorkspaceToTerraform(this._effectiveAutomaticClusterUpdateWorkspace.internalValue),
      effective_personal_compute: accountSettingV2EffectivePersonalComputeToTerraform(this._effectivePersonalCompute.internalValue),
      effective_restrict_workspace_admins: accountSettingV2EffectiveRestrictWorkspaceAdminsToTerraform(this._effectiveRestrictWorkspaceAdmins.internalValue),
      effective_workspace_label: accountSettingV2EffectiveWorkspaceLabelToTerraform(this._effectiveWorkspaceLabel.internalValue),
      integer_val: accountSettingV2IntegerValToTerraform(this._integerVal.internalValue),
      name: cdktn.stringToTerraform(this._name),
      operational_email_custom_recipient: accountSettingV2OperationalEmailCustomRecipientToTerraform(this._operationalEmailCustomRecipient.internalValue),
      personal_compute: accountSettingV2PersonalComputeToTerraform(this._personalCompute.internalValue),
      restrict_workspace_admins: accountSettingV2RestrictWorkspaceAdminsToTerraform(this._restrictWorkspaceAdmins.internalValue),
      string_val: accountSettingV2StringValToTerraform(this._stringVal.internalValue),
      workspace_dashboard_theme: accountSettingV2WorkspaceDashboardThemeToTerraform(this._workspaceDashboardTheme.internalValue),
      workspace_label: accountSettingV2WorkspaceLabelToTerraform(this._workspaceLabel.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aibi_dashboard_embedding_access_policy: {
        value: accountSettingV2AibiDashboardEmbeddingAccessPolicyToHclTerraform(this._aibiDashboardEmbeddingAccessPolicy.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AccountSettingV2AibiDashboardEmbeddingAccessPolicy",
      },
      aibi_dashboard_embedding_approved_domains: {
        value: accountSettingV2AibiDashboardEmbeddingApprovedDomainsToHclTerraform(this._aibiDashboardEmbeddingApprovedDomains.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AccountSettingV2AibiDashboardEmbeddingApprovedDomains",
      },
      allowed_apps_user_api_scopes: {
        value: accountSettingV2AllowedAppsUserApiScopesToHclTerraform(this._allowedAppsUserApiScopes.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AccountSettingV2AllowedAppsUserApiScopes",
      },
      automatic_cluster_update_workspace: {
        value: accountSettingV2AutomaticClusterUpdateWorkspaceToHclTerraform(this._automaticClusterUpdateWorkspace.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AccountSettingV2AutomaticClusterUpdateWorkspace",
      },
      boolean_val: {
        value: accountSettingV2BooleanValToHclTerraform(this._booleanVal.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AccountSettingV2BooleanVal",
      },
      collaboration_platform_connectivity: {
        value: accountSettingV2CollaborationPlatformConnectivityToHclTerraform(this._collaborationPlatformConnectivity.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AccountSettingV2CollaborationPlatformConnectivity",
      },
      effective_aibi_dashboard_embedding_access_policy: {
        value: accountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyToHclTerraform(this._effectiveAibiDashboardEmbeddingAccessPolicy.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy",
      },
      effective_aibi_dashboard_embedding_approved_domains: {
        value: accountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsToHclTerraform(this._effectiveAibiDashboardEmbeddingApprovedDomains.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains",
      },
      effective_automatic_cluster_update_workspace: {
        value: accountSettingV2EffectiveAutomaticClusterUpdateWorkspaceToHclTerraform(this._effectiveAutomaticClusterUpdateWorkspace.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace",
      },
      effective_personal_compute: {
        value: accountSettingV2EffectivePersonalComputeToHclTerraform(this._effectivePersonalCompute.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AccountSettingV2EffectivePersonalCompute",
      },
      effective_restrict_workspace_admins: {
        value: accountSettingV2EffectiveRestrictWorkspaceAdminsToHclTerraform(this._effectiveRestrictWorkspaceAdmins.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AccountSettingV2EffectiveRestrictWorkspaceAdmins",
      },
      effective_workspace_label: {
        value: accountSettingV2EffectiveWorkspaceLabelToHclTerraform(this._effectiveWorkspaceLabel.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AccountSettingV2EffectiveWorkspaceLabel",
      },
      integer_val: {
        value: accountSettingV2IntegerValToHclTerraform(this._integerVal.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AccountSettingV2IntegerVal",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      operational_email_custom_recipient: {
        value: accountSettingV2OperationalEmailCustomRecipientToHclTerraform(this._operationalEmailCustomRecipient.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AccountSettingV2OperationalEmailCustomRecipient",
      },
      personal_compute: {
        value: accountSettingV2PersonalComputeToHclTerraform(this._personalCompute.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AccountSettingV2PersonalCompute",
      },
      restrict_workspace_admins: {
        value: accountSettingV2RestrictWorkspaceAdminsToHclTerraform(this._restrictWorkspaceAdmins.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AccountSettingV2RestrictWorkspaceAdmins",
      },
      string_val: {
        value: accountSettingV2StringValToHclTerraform(this._stringVal.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AccountSettingV2StringVal",
      },
      workspace_dashboard_theme: {
        value: accountSettingV2WorkspaceDashboardThemeToHclTerraform(this._workspaceDashboardTheme.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AccountSettingV2WorkspaceDashboardTheme",
      },
      workspace_label: {
        value: accountSettingV2WorkspaceLabelToHclTerraform(this._workspaceLabel.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AccountSettingV2WorkspaceLabel",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
