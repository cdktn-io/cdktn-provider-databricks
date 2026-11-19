/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface WorkspaceSettingV2Config extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#aibi_dashboard_embedding_access_policy WorkspaceSettingV2#aibi_dashboard_embedding_access_policy}
  */
  readonly aibiDashboardEmbeddingAccessPolicy?: WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#aibi_dashboard_embedding_approved_domains WorkspaceSettingV2#aibi_dashboard_embedding_approved_domains}
  */
  readonly aibiDashboardEmbeddingApprovedDomains?: WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#allowed_apps_user_api_scopes WorkspaceSettingV2#allowed_apps_user_api_scopes}
  */
  readonly allowedAppsUserApiScopes?: WorkspaceSettingV2AllowedAppsUserApiScopes;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#automatic_cluster_update_workspace WorkspaceSettingV2#automatic_cluster_update_workspace}
  */
  readonly automaticClusterUpdateWorkspace?: WorkspaceSettingV2AutomaticClusterUpdateWorkspace;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#boolean_val WorkspaceSettingV2#boolean_val}
  */
  readonly booleanVal?: WorkspaceSettingV2BooleanVal;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#collaboration_platform_connectivity WorkspaceSettingV2#collaboration_platform_connectivity}
  */
  readonly collaborationPlatformConnectivity?: WorkspaceSettingV2CollaborationPlatformConnectivity;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#effective_aibi_dashboard_embedding_access_policy WorkspaceSettingV2#effective_aibi_dashboard_embedding_access_policy}
  */
  readonly effectiveAibiDashboardEmbeddingAccessPolicy?: WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#effective_aibi_dashboard_embedding_approved_domains WorkspaceSettingV2#effective_aibi_dashboard_embedding_approved_domains}
  */
  readonly effectiveAibiDashboardEmbeddingApprovedDomains?: WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#effective_automatic_cluster_update_workspace WorkspaceSettingV2#effective_automatic_cluster_update_workspace}
  */
  readonly effectiveAutomaticClusterUpdateWorkspace?: WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#effective_personal_compute WorkspaceSettingV2#effective_personal_compute}
  */
  readonly effectivePersonalCompute?: WorkspaceSettingV2EffectivePersonalCompute;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#effective_restrict_workspace_admins WorkspaceSettingV2#effective_restrict_workspace_admins}
  */
  readonly effectiveRestrictWorkspaceAdmins?: WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#effective_workspace_label WorkspaceSettingV2#effective_workspace_label}
  */
  readonly effectiveWorkspaceLabel?: WorkspaceSettingV2EffectiveWorkspaceLabel;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#integer_val WorkspaceSettingV2#integer_val}
  */
  readonly integerVal?: WorkspaceSettingV2IntegerVal;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#name WorkspaceSettingV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#operational_email_custom_recipient WorkspaceSettingV2#operational_email_custom_recipient}
  */
  readonly operationalEmailCustomRecipient?: WorkspaceSettingV2OperationalEmailCustomRecipient;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#personal_compute WorkspaceSettingV2#personal_compute}
  */
  readonly personalCompute?: WorkspaceSettingV2PersonalCompute;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#provider_config WorkspaceSettingV2#provider_config}
  */
  readonly providerConfig?: WorkspaceSettingV2ProviderConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#restrict_workspace_admins WorkspaceSettingV2#restrict_workspace_admins}
  */
  readonly restrictWorkspaceAdmins?: WorkspaceSettingV2RestrictWorkspaceAdmins;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#string_val WorkspaceSettingV2#string_val}
  */
  readonly stringVal?: WorkspaceSettingV2StringVal;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#workspace_dashboard_theme WorkspaceSettingV2#workspace_dashboard_theme}
  */
  readonly workspaceDashboardTheme?: WorkspaceSettingV2WorkspaceDashboardTheme;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#workspace_label WorkspaceSettingV2#workspace_label}
  */
  readonly workspaceLabel?: WorkspaceSettingV2WorkspaceLabel;
}
export interface WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#access_policy_type WorkspaceSettingV2#access_policy_type}
  */
  readonly accessPolicyType: string;
}

export function workspaceSettingV2AibiDashboardEmbeddingAccessPolicyToTerraform(struct?: WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_policy_type: cdktn.stringToTerraform(struct!.accessPolicyType),
  }
}


export function workspaceSettingV2AibiDashboardEmbeddingAccessPolicyToHclTerraform(struct?: WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy | cdktn.IResolvable): any {
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

export class WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy | cdktn.IResolvable | undefined) {
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
export interface WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#approved_domains WorkspaceSettingV2#approved_domains}
  */
  readonly approvedDomains?: string[];
}

export function workspaceSettingV2AibiDashboardEmbeddingApprovedDomainsToTerraform(struct?: WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    approved_domains: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.approvedDomains),
  }
}


export function workspaceSettingV2AibiDashboardEmbeddingApprovedDomainsToHclTerraform(struct?: WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains | cdktn.IResolvable): any {
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

export class WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains | cdktn.IResolvable | undefined) {
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
export interface WorkspaceSettingV2AllowedAppsUserApiScopes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#allowed_scopes WorkspaceSettingV2#allowed_scopes}
  */
  readonly allowedScopes?: string[];
}

export function workspaceSettingV2AllowedAppsUserApiScopesToTerraform(struct?: WorkspaceSettingV2AllowedAppsUserApiScopes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allowed_scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedScopes),
  }
}


export function workspaceSettingV2AllowedAppsUserApiScopesToHclTerraform(struct?: WorkspaceSettingV2AllowedAppsUserApiScopes | cdktn.IResolvable): any {
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

export class WorkspaceSettingV2AllowedAppsUserApiScopesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2AllowedAppsUserApiScopes | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2AllowedAppsUserApiScopes | cdktn.IResolvable | undefined) {
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
export interface WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#forced_for_compliance_mode WorkspaceSettingV2#forced_for_compliance_mode}
  */
  readonly forcedForComplianceMode?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#unavailable_for_disabled_entitlement WorkspaceSettingV2#unavailable_for_disabled_entitlement}
  */
  readonly unavailableForDisabledEntitlement?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#unavailable_for_non_enterprise_tier WorkspaceSettingV2#unavailable_for_non_enterprise_tier}
  */
  readonly unavailableForNonEnterpriseTier?: boolean | cdktn.IResolvable;
}

export function workspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsToTerraform(struct?: WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails | cdktn.IResolvable): any {
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


export function workspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsToHclTerraform(struct?: WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails | cdktn.IResolvable): any {
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

export class WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails | cdktn.IResolvable | undefined) {
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
export interface WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#hours WorkspaceSettingV2#hours}
  */
  readonly hours?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#minutes WorkspaceSettingV2#minutes}
  */
  readonly minutes?: number;
}

export function workspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeToTerraform(struct?: WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hours: cdktn.numberToTerraform(struct!.hours),
    minutes: cdktn.numberToTerraform(struct!.minutes),
  }
}


export function workspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeToHclTerraform(struct?: WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime | cdktn.IResolvable): any {
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

export class WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime | cdktn.IResolvable | undefined) {
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
export interface WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#day_of_week WorkspaceSettingV2#day_of_week}
  */
  readonly dayOfWeek?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#frequency WorkspaceSettingV2#frequency}
  */
  readonly frequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#window_start_time WorkspaceSettingV2#window_start_time}
  */
  readonly windowStartTime?: WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime;
}

export function workspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleToTerraform(struct?: WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    day_of_week: cdktn.stringToTerraform(struct!.dayOfWeek),
    frequency: cdktn.stringToTerraform(struct!.frequency),
    window_start_time: workspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeToTerraform(struct!.windowStartTime),
  }
}


export function workspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleToHclTerraform(struct?: WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule | cdktn.IResolvable): any {
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
      value: workspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeToHclTerraform(struct!.windowStartTime),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule | cdktn.IResolvable | undefined) {
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
  private _windowStartTime = new WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference(this, "window_start_time");
  public get windowStartTime() {
    return this._windowStartTime;
  }
  public putWindowStartTime(value: WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime) {
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
export interface WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#week_day_based_schedule WorkspaceSettingV2#week_day_based_schedule}
  */
  readonly weekDayBasedSchedule?: WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule;
}

export function workspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowToTerraform(struct?: WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    week_day_based_schedule: workspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleToTerraform(struct!.weekDayBasedSchedule),
  }
}


export function workspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowToHclTerraform(struct?: WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    week_day_based_schedule: {
      value: workspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleToHclTerraform(struct!.weekDayBasedSchedule),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow | cdktn.IResolvable | undefined) {
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
  private _weekDayBasedSchedule = new WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference(this, "week_day_based_schedule");
  public get weekDayBasedSchedule() {
    return this._weekDayBasedSchedule;
  }
  public putWeekDayBasedSchedule(value: WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule) {
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
export interface WorkspaceSettingV2AutomaticClusterUpdateWorkspace {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#can_toggle WorkspaceSettingV2#can_toggle}
  */
  readonly canToggle?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#enabled WorkspaceSettingV2#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#enablement_details WorkspaceSettingV2#enablement_details}
  */
  readonly enablementDetails?: WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#maintenance_window WorkspaceSettingV2#maintenance_window}
  */
  readonly maintenanceWindow?: WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#restart_even_if_no_updates_available WorkspaceSettingV2#restart_even_if_no_updates_available}
  */
  readonly restartEvenIfNoUpdatesAvailable?: boolean | cdktn.IResolvable;
}

export function workspaceSettingV2AutomaticClusterUpdateWorkspaceToTerraform(struct?: WorkspaceSettingV2AutomaticClusterUpdateWorkspace | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    can_toggle: cdktn.booleanToTerraform(struct!.canToggle),
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    enablement_details: workspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsToTerraform(struct!.enablementDetails),
    maintenance_window: workspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowToTerraform(struct!.maintenanceWindow),
    restart_even_if_no_updates_available: cdktn.booleanToTerraform(struct!.restartEvenIfNoUpdatesAvailable),
  }
}


export function workspaceSettingV2AutomaticClusterUpdateWorkspaceToHclTerraform(struct?: WorkspaceSettingV2AutomaticClusterUpdateWorkspace | cdktn.IResolvable): any {
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
      value: workspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsToHclTerraform(struct!.enablementDetails),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails",
    },
    maintenance_window: {
      value: workspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowToHclTerraform(struct!.maintenanceWindow),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow",
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

export class WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2AutomaticClusterUpdateWorkspace | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2AutomaticClusterUpdateWorkspace | cdktn.IResolvable | undefined) {
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
  private _enablementDetails = new WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference(this, "enablement_details");
  public get enablementDetails() {
    return this._enablementDetails;
  }
  public putEnablementDetails(value: WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails) {
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
  private _maintenanceWindow = new WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference(this, "maintenance_window");
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }
  public putMaintenanceWindow(value: WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow) {
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
export interface WorkspaceSettingV2BooleanVal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#value WorkspaceSettingV2#value}
  */
  readonly value?: boolean | cdktn.IResolvable;
}

export function workspaceSettingV2BooleanValToTerraform(struct?: WorkspaceSettingV2BooleanVal | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.booleanToTerraform(struct!.value),
  }
}


export function workspaceSettingV2BooleanValToHclTerraform(struct?: WorkspaceSettingV2BooleanVal | cdktn.IResolvable): any {
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

export class WorkspaceSettingV2BooleanValOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2BooleanVal | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2BooleanVal | cdktn.IResolvable | undefined) {
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
export interface WorkspaceSettingV2CollaborationPlatformConnectivity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#connectivity WorkspaceSettingV2#connectivity}
  */
  readonly connectivity: string;
}

export function workspaceSettingV2CollaborationPlatformConnectivityToTerraform(struct?: WorkspaceSettingV2CollaborationPlatformConnectivity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    connectivity: cdktn.stringToTerraform(struct!.connectivity),
  }
}


export function workspaceSettingV2CollaborationPlatformConnectivityToHclTerraform(struct?: WorkspaceSettingV2CollaborationPlatformConnectivity | cdktn.IResolvable): any {
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

export class WorkspaceSettingV2CollaborationPlatformConnectivityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2CollaborationPlatformConnectivity | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2CollaborationPlatformConnectivity | cdktn.IResolvable | undefined) {
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
export interface WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#access_policy_type WorkspaceSettingV2#access_policy_type}
  */
  readonly accessPolicyType: string;
}

export function workspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyToTerraform(struct?: WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_policy_type: cdktn.stringToTerraform(struct!.accessPolicyType),
  }
}


export function workspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyToHclTerraform(struct?: WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy | cdktn.IResolvable): any {
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

export class WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy | cdktn.IResolvable | undefined) {
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
export interface WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#approved_domains WorkspaceSettingV2#approved_domains}
  */
  readonly approvedDomains?: string[];
}

export function workspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsToTerraform(struct?: WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    approved_domains: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.approvedDomains),
  }
}


export function workspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsToHclTerraform(struct?: WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains | cdktn.IResolvable): any {
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

export class WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains | cdktn.IResolvable | undefined) {
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
export interface WorkspaceSettingV2EffectiveAllowedAppsUserApiScopes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#allowed_scopes WorkspaceSettingV2#allowed_scopes}
  */
  readonly allowedScopes?: string[];
}

export function workspaceSettingV2EffectiveAllowedAppsUserApiScopesToTerraform(struct?: WorkspaceSettingV2EffectiveAllowedAppsUserApiScopes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allowed_scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedScopes),
  }
}


export function workspaceSettingV2EffectiveAllowedAppsUserApiScopesToHclTerraform(struct?: WorkspaceSettingV2EffectiveAllowedAppsUserApiScopes): any {
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

export class WorkspaceSettingV2EffectiveAllowedAppsUserApiScopesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2EffectiveAllowedAppsUserApiScopes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedScopes = this._allowedScopes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkspaceSettingV2EffectiveAllowedAppsUserApiScopes | undefined) {
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
export interface WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#forced_for_compliance_mode WorkspaceSettingV2#forced_for_compliance_mode}
  */
  readonly forcedForComplianceMode?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#unavailable_for_disabled_entitlement WorkspaceSettingV2#unavailable_for_disabled_entitlement}
  */
  readonly unavailableForDisabledEntitlement?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#unavailable_for_non_enterprise_tier WorkspaceSettingV2#unavailable_for_non_enterprise_tier}
  */
  readonly unavailableForNonEnterpriseTier?: boolean | cdktn.IResolvable;
}

export function workspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsToTerraform(struct?: WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails | cdktn.IResolvable): any {
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


export function workspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsToHclTerraform(struct?: WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails | cdktn.IResolvable): any {
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

export class WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails | cdktn.IResolvable | undefined) {
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
export interface WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#hours WorkspaceSettingV2#hours}
  */
  readonly hours?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#minutes WorkspaceSettingV2#minutes}
  */
  readonly minutes?: number;
}

export function workspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeToTerraform(struct?: WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hours: cdktn.numberToTerraform(struct!.hours),
    minutes: cdktn.numberToTerraform(struct!.minutes),
  }
}


export function workspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeToHclTerraform(struct?: WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime | cdktn.IResolvable): any {
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

export class WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime | cdktn.IResolvable | undefined) {
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
export interface WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#day_of_week WorkspaceSettingV2#day_of_week}
  */
  readonly dayOfWeek?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#frequency WorkspaceSettingV2#frequency}
  */
  readonly frequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#window_start_time WorkspaceSettingV2#window_start_time}
  */
  readonly windowStartTime?: WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime;
}

export function workspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleToTerraform(struct?: WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    day_of_week: cdktn.stringToTerraform(struct!.dayOfWeek),
    frequency: cdktn.stringToTerraform(struct!.frequency),
    window_start_time: workspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeToTerraform(struct!.windowStartTime),
  }
}


export function workspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleToHclTerraform(struct?: WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule | cdktn.IResolvable): any {
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
      value: workspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeToHclTerraform(struct!.windowStartTime),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule | cdktn.IResolvable | undefined) {
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
  private _windowStartTime = new WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference(this, "window_start_time");
  public get windowStartTime() {
    return this._windowStartTime;
  }
  public putWindowStartTime(value: WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime) {
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
export interface WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#week_day_based_schedule WorkspaceSettingV2#week_day_based_schedule}
  */
  readonly weekDayBasedSchedule?: WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule;
}

export function workspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowToTerraform(struct?: WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    week_day_based_schedule: workspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleToTerraform(struct!.weekDayBasedSchedule),
  }
}


export function workspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowToHclTerraform(struct?: WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    week_day_based_schedule: {
      value: workspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleToHclTerraform(struct!.weekDayBasedSchedule),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow | cdktn.IResolvable | undefined) {
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
  private _weekDayBasedSchedule = new WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference(this, "week_day_based_schedule");
  public get weekDayBasedSchedule() {
    return this._weekDayBasedSchedule;
  }
  public putWeekDayBasedSchedule(value: WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule) {
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
export interface WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#can_toggle WorkspaceSettingV2#can_toggle}
  */
  readonly canToggle?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#enabled WorkspaceSettingV2#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#enablement_details WorkspaceSettingV2#enablement_details}
  */
  readonly enablementDetails?: WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#maintenance_window WorkspaceSettingV2#maintenance_window}
  */
  readonly maintenanceWindow?: WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#restart_even_if_no_updates_available WorkspaceSettingV2#restart_even_if_no_updates_available}
  */
  readonly restartEvenIfNoUpdatesAvailable?: boolean | cdktn.IResolvable;
}

export function workspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceToTerraform(struct?: WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    can_toggle: cdktn.booleanToTerraform(struct!.canToggle),
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    enablement_details: workspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsToTerraform(struct!.enablementDetails),
    maintenance_window: workspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowToTerraform(struct!.maintenanceWindow),
    restart_even_if_no_updates_available: cdktn.booleanToTerraform(struct!.restartEvenIfNoUpdatesAvailable),
  }
}


export function workspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceToHclTerraform(struct?: WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace | cdktn.IResolvable): any {
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
      value: workspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsToHclTerraform(struct!.enablementDetails),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails",
    },
    maintenance_window: {
      value: workspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowToHclTerraform(struct!.maintenanceWindow),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow",
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

export class WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace | cdktn.IResolvable | undefined) {
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
  private _enablementDetails = new WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference(this, "enablement_details");
  public get enablementDetails() {
    return this._enablementDetails;
  }
  public putEnablementDetails(value: WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails) {
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
  private _maintenanceWindow = new WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference(this, "maintenance_window");
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }
  public putMaintenanceWindow(value: WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow) {
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
export interface WorkspaceSettingV2EffectiveBooleanVal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#value WorkspaceSettingV2#value}
  */
  readonly value?: boolean | cdktn.IResolvable;
}

export function workspaceSettingV2EffectiveBooleanValToTerraform(struct?: WorkspaceSettingV2EffectiveBooleanVal): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.booleanToTerraform(struct!.value),
  }
}


export function workspaceSettingV2EffectiveBooleanValToHclTerraform(struct?: WorkspaceSettingV2EffectiveBooleanVal): any {
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

export class WorkspaceSettingV2EffectiveBooleanValOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2EffectiveBooleanVal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkspaceSettingV2EffectiveBooleanVal | undefined) {
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
export interface WorkspaceSettingV2EffectiveCollaborationPlatformConnectivity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#connectivity WorkspaceSettingV2#connectivity}
  */
  readonly connectivity: string;
}

export function workspaceSettingV2EffectiveCollaborationPlatformConnectivityToTerraform(struct?: WorkspaceSettingV2EffectiveCollaborationPlatformConnectivity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    connectivity: cdktn.stringToTerraform(struct!.connectivity),
  }
}


export function workspaceSettingV2EffectiveCollaborationPlatformConnectivityToHclTerraform(struct?: WorkspaceSettingV2EffectiveCollaborationPlatformConnectivity): any {
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

export class WorkspaceSettingV2EffectiveCollaborationPlatformConnectivityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2EffectiveCollaborationPlatformConnectivity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectivity !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectivity = this._connectivity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkspaceSettingV2EffectiveCollaborationPlatformConnectivity | undefined) {
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
export interface WorkspaceSettingV2EffectiveIntegerVal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#value WorkspaceSettingV2#value}
  */
  readonly value?: number;
}

export function workspaceSettingV2EffectiveIntegerValToTerraform(struct?: WorkspaceSettingV2EffectiveIntegerVal): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function workspaceSettingV2EffectiveIntegerValToHclTerraform(struct?: WorkspaceSettingV2EffectiveIntegerVal): any {
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

export class WorkspaceSettingV2EffectiveIntegerValOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2EffectiveIntegerVal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkspaceSettingV2EffectiveIntegerVal | undefined) {
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
export interface WorkspaceSettingV2EffectiveOperationalEmailCustomRecipient {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#email WorkspaceSettingV2#email}
  */
  readonly email?: string;
}

export function workspaceSettingV2EffectiveOperationalEmailCustomRecipientToTerraform(struct?: WorkspaceSettingV2EffectiveOperationalEmailCustomRecipient): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    email: cdktn.stringToTerraform(struct!.email),
  }
}


export function workspaceSettingV2EffectiveOperationalEmailCustomRecipientToHclTerraform(struct?: WorkspaceSettingV2EffectiveOperationalEmailCustomRecipient): any {
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

export class WorkspaceSettingV2EffectiveOperationalEmailCustomRecipientOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2EffectiveOperationalEmailCustomRecipient | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkspaceSettingV2EffectiveOperationalEmailCustomRecipient | undefined) {
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
export interface WorkspaceSettingV2EffectivePersonalCompute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#value WorkspaceSettingV2#value}
  */
  readonly value?: string;
}

export function workspaceSettingV2EffectivePersonalComputeToTerraform(struct?: WorkspaceSettingV2EffectivePersonalCompute | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function workspaceSettingV2EffectivePersonalComputeToHclTerraform(struct?: WorkspaceSettingV2EffectivePersonalCompute | cdktn.IResolvable): any {
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

export class WorkspaceSettingV2EffectivePersonalComputeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2EffectivePersonalCompute | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2EffectivePersonalCompute | cdktn.IResolvable | undefined) {
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
export interface WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#disable_gov_tag_creation WorkspaceSettingV2#disable_gov_tag_creation}
  */
  readonly disableGovTagCreation?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#status WorkspaceSettingV2#status}
  */
  readonly status: string;
}

export function workspaceSettingV2EffectiveRestrictWorkspaceAdminsToTerraform(struct?: WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    disable_gov_tag_creation: cdktn.booleanToTerraform(struct!.disableGovTagCreation),
    status: cdktn.stringToTerraform(struct!.status),
  }
}


export function workspaceSettingV2EffectiveRestrictWorkspaceAdminsToHclTerraform(struct?: WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins | cdktn.IResolvable): any {
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

export class WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins | cdktn.IResolvable | undefined) {
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
export interface WorkspaceSettingV2EffectiveStringVal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#value WorkspaceSettingV2#value}
  */
  readonly value?: string;
}

export function workspaceSettingV2EffectiveStringValToTerraform(struct?: WorkspaceSettingV2EffectiveStringVal): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function workspaceSettingV2EffectiveStringValToHclTerraform(struct?: WorkspaceSettingV2EffectiveStringVal): any {
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

export class WorkspaceSettingV2EffectiveStringValOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2EffectiveStringVal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkspaceSettingV2EffectiveStringVal | undefined) {
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
export interface WorkspaceSettingV2EffectiveWorkspaceDashboardThemeAxisLineColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#dark WorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#light WorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function workspaceSettingV2EffectiveWorkspaceDashboardThemeAxisLineColorToTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeAxisLineColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function workspaceSettingV2EffectiveWorkspaceDashboardThemeAxisLineColorToHclTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeAxisLineColor | cdktn.IResolvable): any {
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

export class WorkspaceSettingV2EffectiveWorkspaceDashboardThemeAxisLineColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2EffectiveWorkspaceDashboardThemeAxisLineColor | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeAxisLineColor | cdktn.IResolvable | undefined) {
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
export interface WorkspaceSettingV2EffectiveWorkspaceDashboardThemeCanvasBackgroundColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#dark WorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#light WorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function workspaceSettingV2EffectiveWorkspaceDashboardThemeCanvasBackgroundColorToTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeCanvasBackgroundColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function workspaceSettingV2EffectiveWorkspaceDashboardThemeCanvasBackgroundColorToHclTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeCanvasBackgroundColor | cdktn.IResolvable): any {
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

export class WorkspaceSettingV2EffectiveWorkspaceDashboardThemeCanvasBackgroundColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2EffectiveWorkspaceDashboardThemeCanvasBackgroundColor | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeCanvasBackgroundColor | cdktn.IResolvable | undefined) {
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
export interface WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEnd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#dark WorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#light WorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function workspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEndToTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEnd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function workspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEndToHclTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEnd | cdktn.IResolvable): any {
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

export class WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEndOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEnd | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEnd | cdktn.IResolvable | undefined) {
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
export interface WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMid {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#dark WorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#light WorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function workspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMidToTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMid | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function workspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMidToHclTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMid | cdktn.IResolvable): any {
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

export class WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMidOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMid | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMid | cdktn.IResolvable | undefined) {
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
export interface WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStart {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#dark WorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#light WorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function workspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStartToTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStart | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function workspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStartToHclTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStart | cdktn.IResolvable): any {
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

export class WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStartOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStart | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStart | cdktn.IResolvable | undefined) {
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
export interface WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDiverging {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#end WorkspaceSettingV2#end}
  */
  readonly end?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEnd;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#mid WorkspaceSettingV2#mid}
  */
  readonly mid?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMid;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#start WorkspaceSettingV2#start}
  */
  readonly start?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStart;
}

export function workspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingToTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDiverging | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end: workspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEndToTerraform(struct!.end),
    mid: workspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMidToTerraform(struct!.mid),
    start: workspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStartToTerraform(struct!.start),
  }
}


export function workspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingToHclTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDiverging | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end: {
      value: workspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEndToHclTerraform(struct!.end),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEnd",
    },
    mid: {
      value: workspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMidToHclTerraform(struct!.mid),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMid",
    },
    start: {
      value: workspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStartToHclTerraform(struct!.start),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStart",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDiverging | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDiverging | cdktn.IResolvable | undefined) {
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
  private _end = new WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEndOutputReference(this, "end");
  public get end() {
    return this._end;
  }
  public putEnd(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEnd) {
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
  private _mid = new WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMidOutputReference(this, "mid");
  public get mid() {
    return this._mid;
  }
  public putMid(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMid) {
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
  private _start = new WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStartOutputReference(this, "start");
  public get start() {
    return this._start;
  }
  public putStart(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStart) {
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
export interface WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEnd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#dark WorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#light WorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function workspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEndToTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEnd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function workspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEndToHclTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEnd | cdktn.IResolvable): any {
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

export class WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEndOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEnd | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEnd | cdktn.IResolvable | undefined) {
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
export interface WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStart {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#dark WorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#light WorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function workspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStartToTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStart | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function workspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStartToHclTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStart | cdktn.IResolvable): any {
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

export class WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStartOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStart | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStart | cdktn.IResolvable | undefined) {
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
export interface WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequential {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#end WorkspaceSettingV2#end}
  */
  readonly end?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEnd;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#start WorkspaceSettingV2#start}
  */
  readonly start?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStart;
}

export function workspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialToTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequential | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end: workspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEndToTerraform(struct!.end),
    start: workspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStartToTerraform(struct!.start),
  }
}


export function workspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialToHclTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequential | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end: {
      value: workspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEndToHclTerraform(struct!.end),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEnd",
    },
    start: {
      value: workspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStartToHclTerraform(struct!.start),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStart",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequential | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequential | cdktn.IResolvable | undefined) {
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
  private _end = new WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEndOutputReference(this, "end");
  public get end() {
    return this._end;
  }
  public putEnd(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEnd) {
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
  private _start = new WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStartOutputReference(this, "start");
  public get start() {
    return this._start;
  }
  public putStart(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStart) {
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
export interface WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkMode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#color WorkspaceSettingV2#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#color_scheme WorkspaceSettingV2#color_scheme}
  */
  readonly colorScheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#custom_diverging WorkspaceSettingV2#custom_diverging}
  */
  readonly customDiverging?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDiverging;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#custom_sequential WorkspaceSettingV2#custom_sequential}
  */
  readonly customSequential?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequential;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#from_categorical_index WorkspaceSettingV2#from_categorical_index}
  */
  readonly fromCategoricalIndex?: number;
}

export function workspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeToTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkMode | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    color: cdktn.stringToTerraform(struct!.color),
    color_scheme: cdktn.stringToTerraform(struct!.colorScheme),
    custom_diverging: workspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingToTerraform(struct!.customDiverging),
    custom_sequential: workspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialToTerraform(struct!.customSequential),
    from_categorical_index: cdktn.numberToTerraform(struct!.fromCategoricalIndex),
  }
}


export function workspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeToHclTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkMode | cdktn.IResolvable): any {
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
      value: workspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingToHclTerraform(struct!.customDiverging),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDiverging",
    },
    custom_sequential: {
      value: workspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialToHclTerraform(struct!.customSequential),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequential",
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

export class WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkMode | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkMode | cdktn.IResolvable | undefined) {
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
  private _customDiverging = new WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingOutputReference(this, "custom_diverging");
  public get customDiverging() {
    return this._customDiverging;
  }
  public putCustomDiverging(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDiverging) {
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
  private _customSequential = new WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialOutputReference(this, "custom_sequential");
  public get customSequential() {
    return this._customSequential;
  }
  public putCustomSequential(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequential) {
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
export interface WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEnd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#dark WorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#light WorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function workspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEndToTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEnd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function workspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEndToHclTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEnd | cdktn.IResolvable): any {
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

export class WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEndOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEnd | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEnd | cdktn.IResolvable | undefined) {
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
export interface WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMid {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#dark WorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#light WorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function workspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMidToTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMid | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function workspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMidToHclTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMid | cdktn.IResolvable): any {
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

export class WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMidOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMid | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMid | cdktn.IResolvable | undefined) {
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
export interface WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStart {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#dark WorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#light WorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function workspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStartToTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStart | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function workspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStartToHclTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStart | cdktn.IResolvable): any {
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

export class WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStartOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStart | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStart | cdktn.IResolvable | undefined) {
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
export interface WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDiverging {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#end WorkspaceSettingV2#end}
  */
  readonly end?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEnd;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#mid WorkspaceSettingV2#mid}
  */
  readonly mid?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMid;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#start WorkspaceSettingV2#start}
  */
  readonly start?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStart;
}

export function workspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingToTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDiverging | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end: workspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEndToTerraform(struct!.end),
    mid: workspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMidToTerraform(struct!.mid),
    start: workspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStartToTerraform(struct!.start),
  }
}


export function workspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingToHclTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDiverging | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end: {
      value: workspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEndToHclTerraform(struct!.end),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEnd",
    },
    mid: {
      value: workspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMidToHclTerraform(struct!.mid),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMid",
    },
    start: {
      value: workspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStartToHclTerraform(struct!.start),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStart",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDiverging | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDiverging | cdktn.IResolvable | undefined) {
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
  private _end = new WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEndOutputReference(this, "end");
  public get end() {
    return this._end;
  }
  public putEnd(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEnd) {
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
  private _mid = new WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMidOutputReference(this, "mid");
  public get mid() {
    return this._mid;
  }
  public putMid(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMid) {
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
  private _start = new WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStartOutputReference(this, "start");
  public get start() {
    return this._start;
  }
  public putStart(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStart) {
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
export interface WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEnd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#dark WorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#light WorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function workspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEndToTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEnd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function workspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEndToHclTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEnd | cdktn.IResolvable): any {
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

export class WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEndOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEnd | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEnd | cdktn.IResolvable | undefined) {
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
export interface WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStart {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#dark WorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#light WorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function workspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStartToTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStart | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function workspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStartToHclTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStart | cdktn.IResolvable): any {
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

export class WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStartOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStart | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStart | cdktn.IResolvable | undefined) {
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
export interface WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequential {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#end WorkspaceSettingV2#end}
  */
  readonly end?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEnd;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#start WorkspaceSettingV2#start}
  */
  readonly start?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStart;
}

export function workspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialToTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequential | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end: workspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEndToTerraform(struct!.end),
    start: workspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStartToTerraform(struct!.start),
  }
}


export function workspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialToHclTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequential | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end: {
      value: workspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEndToHclTerraform(struct!.end),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEnd",
    },
    start: {
      value: workspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStartToHclTerraform(struct!.start),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStart",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequential | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequential | cdktn.IResolvable | undefined) {
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
  private _end = new WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEndOutputReference(this, "end");
  public get end() {
    return this._end;
  }
  public putEnd(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEnd) {
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
  private _start = new WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStartOutputReference(this, "start");
  public get start() {
    return this._start;
  }
  public putStart(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStart) {
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
export interface WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightMode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#color WorkspaceSettingV2#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#color_scheme WorkspaceSettingV2#color_scheme}
  */
  readonly colorScheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#custom_diverging WorkspaceSettingV2#custom_diverging}
  */
  readonly customDiverging?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDiverging;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#custom_sequential WorkspaceSettingV2#custom_sequential}
  */
  readonly customSequential?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequential;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#from_categorical_index WorkspaceSettingV2#from_categorical_index}
  */
  readonly fromCategoricalIndex?: number;
}

export function workspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeToTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightMode | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    color: cdktn.stringToTerraform(struct!.color),
    color_scheme: cdktn.stringToTerraform(struct!.colorScheme),
    custom_diverging: workspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingToTerraform(struct!.customDiverging),
    custom_sequential: workspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialToTerraform(struct!.customSequential),
    from_categorical_index: cdktn.numberToTerraform(struct!.fromCategoricalIndex),
  }
}


export function workspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeToHclTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightMode | cdktn.IResolvable): any {
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
      value: workspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingToHclTerraform(struct!.customDiverging),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDiverging",
    },
    custom_sequential: {
      value: workspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialToHclTerraform(struct!.customSequential),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequential",
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

export class WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightMode | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightMode | cdktn.IResolvable | undefined) {
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
  private _customDiverging = new WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingOutputReference(this, "custom_diverging");
  public get customDiverging() {
    return this._customDiverging;
  }
  public putCustomDiverging(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDiverging) {
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
  private _customSequential = new WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialOutputReference(this, "custom_sequential");
  public get customSequential() {
    return this._customSequential;
  }
  public putCustomSequential(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequential) {
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
export interface WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradient {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#dark_mode WorkspaceSettingV2#dark_mode}
  */
  readonly darkMode?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkMode;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#light_mode WorkspaceSettingV2#light_mode}
  */
  readonly lightMode?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightMode;
}

export function workspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientToTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradient | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark_mode: workspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeToTerraform(struct!.darkMode),
    light_mode: workspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeToTerraform(struct!.lightMode),
  }
}


export function workspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientToHclTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradient | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dark_mode: {
      value: workspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeToHclTerraform(struct!.darkMode),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkMode",
    },
    light_mode: {
      value: workspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeToHclTerraform(struct!.lightMode),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightMode",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradient | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradient | cdktn.IResolvable | undefined) {
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
  private _darkMode = new WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeOutputReference(this, "dark_mode");
  public get darkMode() {
    return this._darkMode;
  }
  public putDarkMode(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkMode) {
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
  private _lightMode = new WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeOutputReference(this, "light_mode");
  public get lightMode() {
    return this._lightMode;
  }
  public putLightMode(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightMode) {
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
export interface WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#dark WorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#light WorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function workspaceSettingV2EffectiveWorkspaceDashboardThemeFontColorToTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function workspaceSettingV2EffectiveWorkspaceDashboardThemeFontColorToHclTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontColor | cdktn.IResolvable): any {
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

export class WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontColor | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontColor | cdktn.IResolvable | undefined) {
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
export interface WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseFontColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#dark WorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#light WorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function workspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseFontColorToTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseFontColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function workspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseFontColorToHclTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseFontColor | cdktn.IResolvable): any {
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

export class WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseFontColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseFontColor | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseFontColor | cdktn.IResolvable | undefined) {
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
export interface WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBase {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#font_color WorkspaceSettingV2#font_color}
  */
  readonly fontColor?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseFontColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#font_family WorkspaceSettingV2#font_family}
  */
  readonly fontFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#font_size WorkspaceSettingV2#font_size}
  */
  readonly fontSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#font_style WorkspaceSettingV2#font_style}
  */
  readonly fontStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#font_weight WorkspaceSettingV2#font_weight}
  */
  readonly fontWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#text_case WorkspaceSettingV2#text_case}
  */
  readonly textCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#text_decoration WorkspaceSettingV2#text_decoration}
  */
  readonly textDecoration?: string;
}

export function workspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseToTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBase | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    font_color: workspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseFontColorToTerraform(struct!.fontColor),
    font_family: cdktn.stringToTerraform(struct!.fontFamily),
    font_size: cdktn.numberToTerraform(struct!.fontSize),
    font_style: cdktn.stringToTerraform(struct!.fontStyle),
    font_weight: cdktn.numberToTerraform(struct!.fontWeight),
    text_case: cdktn.stringToTerraform(struct!.textCase),
    text_decoration: cdktn.stringToTerraform(struct!.textDecoration),
  }
}


export function workspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseToHclTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBase | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    font_color: {
      value: workspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseFontColorToHclTerraform(struct!.fontColor),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseFontColor",
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

export class WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBase | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBase | cdktn.IResolvable | undefined) {
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
  private _fontColor = new WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseFontColorOutputReference(this, "font_color");
  public get fontColor() {
    return this._fontColor;
  }
  public putFontColor(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseFontColor) {
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
export interface WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleFontColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#dark WorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#light WorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function workspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleFontColorToTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleFontColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function workspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleFontColorToHclTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleFontColor | cdktn.IResolvable): any {
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

export class WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleFontColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleFontColor | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleFontColor | cdktn.IResolvable | undefined) {
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
export interface WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#font_color WorkspaceSettingV2#font_color}
  */
  readonly fontColor?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleFontColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#font_family WorkspaceSettingV2#font_family}
  */
  readonly fontFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#font_size WorkspaceSettingV2#font_size}
  */
  readonly fontSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#font_style WorkspaceSettingV2#font_style}
  */
  readonly fontStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#font_weight WorkspaceSettingV2#font_weight}
  */
  readonly fontWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#text_case WorkspaceSettingV2#text_case}
  */
  readonly textCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#text_decoration WorkspaceSettingV2#text_decoration}
  */
  readonly textDecoration?: string;
}

export function workspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleToTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitle | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    font_color: workspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleFontColorToTerraform(struct!.fontColor),
    font_family: cdktn.stringToTerraform(struct!.fontFamily),
    font_size: cdktn.numberToTerraform(struct!.fontSize),
    font_style: cdktn.stringToTerraform(struct!.fontStyle),
    font_weight: cdktn.numberToTerraform(struct!.fontWeight),
    text_case: cdktn.stringToTerraform(struct!.textCase),
    text_decoration: cdktn.stringToTerraform(struct!.textDecoration),
  }
}


export function workspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleToHclTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitle | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    font_color: {
      value: workspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleFontColorToHclTerraform(struct!.fontColor),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleFontColor",
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

export class WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitle | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitle | cdktn.IResolvable | undefined) {
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
  private _fontColor = new WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleFontColorOutputReference(this, "font_color");
  public get fontColor() {
    return this._fontColor;
  }
  public putFontColor(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleFontColor) {
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
export interface WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueFontColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#dark WorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#light WorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function workspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueFontColorToTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueFontColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function workspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueFontColorToHclTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueFontColor | cdktn.IResolvable): any {
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

export class WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueFontColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueFontColor | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueFontColor | cdktn.IResolvable | undefined) {
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
export interface WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#font_color WorkspaceSettingV2#font_color}
  */
  readonly fontColor?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueFontColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#font_family WorkspaceSettingV2#font_family}
  */
  readonly fontFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#font_size WorkspaceSettingV2#font_size}
  */
  readonly fontSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#font_style WorkspaceSettingV2#font_style}
  */
  readonly fontStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#font_weight WorkspaceSettingV2#font_weight}
  */
  readonly fontWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#text_case WorkspaceSettingV2#text_case}
  */
  readonly textCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#text_decoration WorkspaceSettingV2#text_decoration}
  */
  readonly textDecoration?: string;
}

export function workspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueToTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    font_color: workspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueFontColorToTerraform(struct!.fontColor),
    font_family: cdktn.stringToTerraform(struct!.fontFamily),
    font_size: cdktn.numberToTerraform(struct!.fontSize),
    font_style: cdktn.stringToTerraform(struct!.fontStyle),
    font_weight: cdktn.numberToTerraform(struct!.fontWeight),
    text_case: cdktn.stringToTerraform(struct!.textCase),
    text_decoration: cdktn.stringToTerraform(struct!.textDecoration),
  }
}


export function workspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueToHclTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    font_color: {
      value: workspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueFontColorToHclTerraform(struct!.fontColor),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueFontColor",
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

export class WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValue | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValue | cdktn.IResolvable | undefined) {
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
  private _fontColor = new WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueFontColorOutputReference(this, "font_color");
  public get fontColor() {
    return this._fontColor;
  }
  public putFontColor(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueFontColor) {
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
export interface WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#dark WorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#light WorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function workspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColorToTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function workspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColorToHclTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColor | cdktn.IResolvable): any {
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

export class WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColor | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColor | cdktn.IResolvable | undefined) {
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
export interface WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescription {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#font_color WorkspaceSettingV2#font_color}
  */
  readonly fontColor?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#font_family WorkspaceSettingV2#font_family}
  */
  readonly fontFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#font_size WorkspaceSettingV2#font_size}
  */
  readonly fontSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#font_style WorkspaceSettingV2#font_style}
  */
  readonly fontStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#font_weight WorkspaceSettingV2#font_weight}
  */
  readonly fontWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#text_case WorkspaceSettingV2#text_case}
  */
  readonly textCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#text_decoration WorkspaceSettingV2#text_decoration}
  */
  readonly textDecoration?: string;
}

export function workspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionToTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescription | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    font_color: workspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColorToTerraform(struct!.fontColor),
    font_family: cdktn.stringToTerraform(struct!.fontFamily),
    font_size: cdktn.numberToTerraform(struct!.fontSize),
    font_style: cdktn.stringToTerraform(struct!.fontStyle),
    font_weight: cdktn.numberToTerraform(struct!.fontWeight),
    text_case: cdktn.stringToTerraform(struct!.textCase),
    text_decoration: cdktn.stringToTerraform(struct!.textDecoration),
  }
}


export function workspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionToHclTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescription | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    font_color: {
      value: workspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColorToHclTerraform(struct!.fontColor),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColor",
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

export class WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescription | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescription | cdktn.IResolvable | undefined) {
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
  private _fontColor = new WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColorOutputReference(this, "font_color");
  public get fontColor() {
    return this._fontColor;
  }
  public putFontColor(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColor) {
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
export interface WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleFontColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#dark WorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#light WorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function workspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleFontColorToTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleFontColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function workspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleFontColorToHclTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleFontColor | cdktn.IResolvable): any {
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

export class WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleFontColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleFontColor | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleFontColor | cdktn.IResolvable | undefined) {
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
export interface WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#font_color WorkspaceSettingV2#font_color}
  */
  readonly fontColor?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleFontColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#font_family WorkspaceSettingV2#font_family}
  */
  readonly fontFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#font_size WorkspaceSettingV2#font_size}
  */
  readonly fontSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#font_style WorkspaceSettingV2#font_style}
  */
  readonly fontStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#font_weight WorkspaceSettingV2#font_weight}
  */
  readonly fontWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#text_case WorkspaceSettingV2#text_case}
  */
  readonly textCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#text_decoration WorkspaceSettingV2#text_decoration}
  */
  readonly textDecoration?: string;
}

export function workspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleToTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitle | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    font_color: workspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleFontColorToTerraform(struct!.fontColor),
    font_family: cdktn.stringToTerraform(struct!.fontFamily),
    font_size: cdktn.numberToTerraform(struct!.fontSize),
    font_style: cdktn.stringToTerraform(struct!.fontStyle),
    font_weight: cdktn.numberToTerraform(struct!.fontWeight),
    text_case: cdktn.stringToTerraform(struct!.textCase),
    text_decoration: cdktn.stringToTerraform(struct!.textDecoration),
  }
}


export function workspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleToHclTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitle | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    font_color: {
      value: workspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleFontColorToHclTerraform(struct!.fontColor),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleFontColor",
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

export class WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitle | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitle | cdktn.IResolvable | undefined) {
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
  private _fontColor = new WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleFontColorOutputReference(this, "font_color");
  public get fontColor() {
    return this._fontColor;
  }
  public putFontColor(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleFontColor) {
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
export interface WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#base WorkspaceSettingV2#base}
  */
  readonly base?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBase;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#field_title WorkspaceSettingV2#field_title}
  */
  readonly fieldTitle?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitle;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#field_value WorkspaceSettingV2#field_value}
  */
  readonly fieldValue?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValue;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#widget_description WorkspaceSettingV2#widget_description}
  */
  readonly widgetDescription?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescription;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#widget_title WorkspaceSettingV2#widget_title}
  */
  readonly widgetTitle?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitle;
}

export function workspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsToTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    base: workspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseToTerraform(struct!.base),
    field_title: workspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleToTerraform(struct!.fieldTitle),
    field_value: workspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueToTerraform(struct!.fieldValue),
    widget_description: workspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionToTerraform(struct!.widgetDescription),
    widget_title: workspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleToTerraform(struct!.widgetTitle),
  }
}


export function workspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsToHclTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    base: {
      value: workspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseToHclTerraform(struct!.base),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBase",
    },
    field_title: {
      value: workspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleToHclTerraform(struct!.fieldTitle),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitle",
    },
    field_value: {
      value: workspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueToHclTerraform(struct!.fieldValue),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValue",
    },
    widget_description: {
      value: workspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionToHclTerraform(struct!.widgetDescription),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescription",
    },
    widget_title: {
      value: workspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleToHclTerraform(struct!.widgetTitle),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitle",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettings | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettings | cdktn.IResolvable | undefined) {
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
  private _base = new WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseOutputReference(this, "base");
  public get base() {
    return this._base;
  }
  public putBase(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBase) {
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
  private _fieldTitle = new WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleOutputReference(this, "field_title");
  public get fieldTitle() {
    return this._fieldTitle;
  }
  public putFieldTitle(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitle) {
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
  private _fieldValue = new WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueOutputReference(this, "field_value");
  public get fieldValue() {
    return this._fieldValue;
  }
  public putFieldValue(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValue) {
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
  private _widgetDescription = new WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionOutputReference(this, "widget_description");
  public get widgetDescription() {
    return this._widgetDescription;
  }
  public putWidgetDescription(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescription) {
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
  private _widgetTitle = new WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleOutputReference(this, "widget_title");
  public get widgetTitle() {
    return this._widgetTitle;
  }
  public putWidgetTitle(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitle) {
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
export interface WorkspaceSettingV2EffectiveWorkspaceDashboardThemeGridLineColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#dark WorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#light WorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function workspaceSettingV2EffectiveWorkspaceDashboardThemeGridLineColorToTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeGridLineColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function workspaceSettingV2EffectiveWorkspaceDashboardThemeGridLineColorToHclTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeGridLineColor | cdktn.IResolvable): any {
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

export class WorkspaceSettingV2EffectiveWorkspaceDashboardThemeGridLineColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2EffectiveWorkspaceDashboardThemeGridLineColor | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeGridLineColor | cdktn.IResolvable | undefined) {
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
export interface WorkspaceSettingV2EffectiveWorkspaceDashboardThemeSelectionColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#dark WorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#light WorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function workspaceSettingV2EffectiveWorkspaceDashboardThemeSelectionColorToTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeSelectionColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function workspaceSettingV2EffectiveWorkspaceDashboardThemeSelectionColorToHclTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeSelectionColor | cdktn.IResolvable): any {
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

export class WorkspaceSettingV2EffectiveWorkspaceDashboardThemeSelectionColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2EffectiveWorkspaceDashboardThemeSelectionColor | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeSelectionColor | cdktn.IResolvable | undefined) {
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
export interface WorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNegative {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#dark WorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#light WorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function workspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNegativeToTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNegative | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function workspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNegativeToHclTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNegative | cdktn.IResolvable): any {
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

export class WorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNegativeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNegative | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNegative | cdktn.IResolvable | undefined) {
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
export interface WorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNeutral {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#dark WorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#light WorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function workspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNeutralToTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNeutral | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function workspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNeutralToHclTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNeutral | cdktn.IResolvable): any {
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

export class WorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNeutralOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNeutral | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNeutral | cdktn.IResolvable | undefined) {
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
export interface WorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsPositive {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#dark WorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#light WorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function workspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsPositiveToTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsPositive | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function workspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsPositiveToHclTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsPositive | cdktn.IResolvable): any {
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

export class WorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsPositiveOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsPositive | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsPositive | cdktn.IResolvable | undefined) {
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
export interface WorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#negative WorkspaceSettingV2#negative}
  */
  readonly negative?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNegative;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#neutral WorkspaceSettingV2#neutral}
  */
  readonly neutral?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNeutral;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#positive WorkspaceSettingV2#positive}
  */
  readonly positive?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsPositive;
}

export function workspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsToTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    negative: workspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNegativeToTerraform(struct!.negative),
    neutral: workspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNeutralToTerraform(struct!.neutral),
    positive: workspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsPositiveToTerraform(struct!.positive),
  }
}


export function workspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsToHclTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    negative: {
      value: workspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNegativeToHclTerraform(struct!.negative),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNegative",
    },
    neutral: {
      value: workspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNeutralToHclTerraform(struct!.neutral),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNeutral",
    },
    positive: {
      value: workspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsPositiveToHclTerraform(struct!.positive),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsPositive",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColors | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColors | cdktn.IResolvable | undefined) {
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
  private _negative = new WorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNegativeOutputReference(this, "negative");
  public get negative() {
    return this._negative;
  }
  public putNegative(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNegative) {
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
  private _neutral = new WorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNeutralOutputReference(this, "neutral");
  public get neutral() {
    return this._neutral;
  }
  public putNeutral(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNeutral) {
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
  private _positive = new WorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsPositiveOutputReference(this, "positive");
  public get positive() {
    return this._positive;
  }
  public putPositive(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsPositive) {
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
export interface WorkspaceSettingV2EffectiveWorkspaceDashboardThemeWidgetBackgroundColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#dark WorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#light WorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function workspaceSettingV2EffectiveWorkspaceDashboardThemeWidgetBackgroundColorToTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeWidgetBackgroundColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function workspaceSettingV2EffectiveWorkspaceDashboardThemeWidgetBackgroundColorToHclTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeWidgetBackgroundColor | cdktn.IResolvable): any {
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

export class WorkspaceSettingV2EffectiveWorkspaceDashboardThemeWidgetBackgroundColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2EffectiveWorkspaceDashboardThemeWidgetBackgroundColor | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeWidgetBackgroundColor | cdktn.IResolvable | undefined) {
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
export interface WorkspaceSettingV2EffectiveWorkspaceDashboardThemeWidgetBorderColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#dark WorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#light WorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function workspaceSettingV2EffectiveWorkspaceDashboardThemeWidgetBorderColorToTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeWidgetBorderColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function workspaceSettingV2EffectiveWorkspaceDashboardThemeWidgetBorderColorToHclTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeWidgetBorderColor | cdktn.IResolvable): any {
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

export class WorkspaceSettingV2EffectiveWorkspaceDashboardThemeWidgetBorderColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2EffectiveWorkspaceDashboardThemeWidgetBorderColor | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeWidgetBorderColor | cdktn.IResolvable | undefined) {
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
export interface WorkspaceSettingV2EffectiveWorkspaceDashboardTheme {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#axis_line_color WorkspaceSettingV2#axis_line_color}
  */
  readonly axisLineColor?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeAxisLineColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#canvas_background_color WorkspaceSettingV2#canvas_background_color}
  */
  readonly canvasBackgroundColor?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeCanvasBackgroundColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#continuous_gradient WorkspaceSettingV2#continuous_gradient}
  */
  readonly continuousGradient?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradient;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#font_color WorkspaceSettingV2#font_color}
  */
  readonly fontColor?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#font_family WorkspaceSettingV2#font_family}
  */
  readonly fontFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#font_settings WorkspaceSettingV2#font_settings}
  */
  readonly fontSettings?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#grid_line_color WorkspaceSettingV2#grid_line_color}
  */
  readonly gridLineColor?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeGridLineColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#mark_corner_radius WorkspaceSettingV2#mark_corner_radius}
  */
  readonly markCornerRadius?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#selection_color WorkspaceSettingV2#selection_color}
  */
  readonly selectionColor?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeSelectionColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#sentiment_colors WorkspaceSettingV2#sentiment_colors}
  */
  readonly sentimentColors?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColors;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#text_box_vertical_align WorkspaceSettingV2#text_box_vertical_align}
  */
  readonly textBoxVerticalAlign?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#visualization_color_01 WorkspaceSettingV2#visualization_color_01}
  */
  readonly visualizationColor01?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#visualization_color_02 WorkspaceSettingV2#visualization_color_02}
  */
  readonly visualizationColor02?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#visualization_color_03 WorkspaceSettingV2#visualization_color_03}
  */
  readonly visualizationColor03?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#visualization_color_04 WorkspaceSettingV2#visualization_color_04}
  */
  readonly visualizationColor04?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#visualization_color_05 WorkspaceSettingV2#visualization_color_05}
  */
  readonly visualizationColor05?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#visualization_color_06 WorkspaceSettingV2#visualization_color_06}
  */
  readonly visualizationColor06?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#visualization_color_07 WorkspaceSettingV2#visualization_color_07}
  */
  readonly visualizationColor07?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#visualization_color_08 WorkspaceSettingV2#visualization_color_08}
  */
  readonly visualizationColor08?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#visualization_color_09 WorkspaceSettingV2#visualization_color_09}
  */
  readonly visualizationColor09?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#visualization_color_10 WorkspaceSettingV2#visualization_color_10}
  */
  readonly visualizationColor10?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#visualization_color_11 WorkspaceSettingV2#visualization_color_11}
  */
  readonly visualizationColor11?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#visualization_color_12 WorkspaceSettingV2#visualization_color_12}
  */
  readonly visualizationColor12?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#visualization_color_13 WorkspaceSettingV2#visualization_color_13}
  */
  readonly visualizationColor13?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#visualization_color_14 WorkspaceSettingV2#visualization_color_14}
  */
  readonly visualizationColor14?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#visualization_color_15 WorkspaceSettingV2#visualization_color_15}
  */
  readonly visualizationColor15?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#visualization_color_16 WorkspaceSettingV2#visualization_color_16}
  */
  readonly visualizationColor16?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#visualization_color_17 WorkspaceSettingV2#visualization_color_17}
  */
  readonly visualizationColor17?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#visualization_color_18 WorkspaceSettingV2#visualization_color_18}
  */
  readonly visualizationColor18?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#visualization_color_19 WorkspaceSettingV2#visualization_color_19}
  */
  readonly visualizationColor19?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#visualization_color_20 WorkspaceSettingV2#visualization_color_20}
  */
  readonly visualizationColor20?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#widget_background_color WorkspaceSettingV2#widget_background_color}
  */
  readonly widgetBackgroundColor?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeWidgetBackgroundColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#widget_border_color WorkspaceSettingV2#widget_border_color}
  */
  readonly widgetBorderColor?: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeWidgetBorderColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#widget_corner_radius WorkspaceSettingV2#widget_corner_radius}
  */
  readonly widgetCornerRadius?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#widget_header_alignment WorkspaceSettingV2#widget_header_alignment}
  */
  readonly widgetHeaderAlignment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#widget_margin WorkspaceSettingV2#widget_margin}
  */
  readonly widgetMargin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#widget_padding WorkspaceSettingV2#widget_padding}
  */
  readonly widgetPadding?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#widget_shadow WorkspaceSettingV2#widget_shadow}
  */
  readonly widgetShadow?: number;
}

export function workspaceSettingV2EffectiveWorkspaceDashboardThemeToTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardTheme): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    axis_line_color: workspaceSettingV2EffectiveWorkspaceDashboardThemeAxisLineColorToTerraform(struct!.axisLineColor),
    canvas_background_color: workspaceSettingV2EffectiveWorkspaceDashboardThemeCanvasBackgroundColorToTerraform(struct!.canvasBackgroundColor),
    continuous_gradient: workspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientToTerraform(struct!.continuousGradient),
    font_color: workspaceSettingV2EffectiveWorkspaceDashboardThemeFontColorToTerraform(struct!.fontColor),
    font_family: cdktn.stringToTerraform(struct!.fontFamily),
    font_settings: workspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsToTerraform(struct!.fontSettings),
    grid_line_color: workspaceSettingV2EffectiveWorkspaceDashboardThemeGridLineColorToTerraform(struct!.gridLineColor),
    mark_corner_radius: cdktn.numberToTerraform(struct!.markCornerRadius),
    selection_color: workspaceSettingV2EffectiveWorkspaceDashboardThemeSelectionColorToTerraform(struct!.selectionColor),
    sentiment_colors: workspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsToTerraform(struct!.sentimentColors),
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
    widget_background_color: workspaceSettingV2EffectiveWorkspaceDashboardThemeWidgetBackgroundColorToTerraform(struct!.widgetBackgroundColor),
    widget_border_color: workspaceSettingV2EffectiveWorkspaceDashboardThemeWidgetBorderColorToTerraform(struct!.widgetBorderColor),
    widget_corner_radius: cdktn.numberToTerraform(struct!.widgetCornerRadius),
    widget_header_alignment: cdktn.stringToTerraform(struct!.widgetHeaderAlignment),
    widget_margin: cdktn.numberToTerraform(struct!.widgetMargin),
    widget_padding: cdktn.numberToTerraform(struct!.widgetPadding),
    widget_shadow: cdktn.numberToTerraform(struct!.widgetShadow),
  }
}


export function workspaceSettingV2EffectiveWorkspaceDashboardThemeToHclTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceDashboardTheme): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    axis_line_color: {
      value: workspaceSettingV2EffectiveWorkspaceDashboardThemeAxisLineColorToHclTerraform(struct!.axisLineColor),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2EffectiveWorkspaceDashboardThemeAxisLineColor",
    },
    canvas_background_color: {
      value: workspaceSettingV2EffectiveWorkspaceDashboardThemeCanvasBackgroundColorToHclTerraform(struct!.canvasBackgroundColor),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2EffectiveWorkspaceDashboardThemeCanvasBackgroundColor",
    },
    continuous_gradient: {
      value: workspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientToHclTerraform(struct!.continuousGradient),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradient",
    },
    font_color: {
      value: workspaceSettingV2EffectiveWorkspaceDashboardThemeFontColorToHclTerraform(struct!.fontColor),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontColor",
    },
    font_family: {
      value: cdktn.stringToHclTerraform(struct!.fontFamily),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_settings: {
      value: workspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsToHclTerraform(struct!.fontSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettings",
    },
    grid_line_color: {
      value: workspaceSettingV2EffectiveWorkspaceDashboardThemeGridLineColorToHclTerraform(struct!.gridLineColor),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2EffectiveWorkspaceDashboardThemeGridLineColor",
    },
    mark_corner_radius: {
      value: cdktn.numberToHclTerraform(struct!.markCornerRadius),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    selection_color: {
      value: workspaceSettingV2EffectiveWorkspaceDashboardThemeSelectionColorToHclTerraform(struct!.selectionColor),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2EffectiveWorkspaceDashboardThemeSelectionColor",
    },
    sentiment_colors: {
      value: workspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsToHclTerraform(struct!.sentimentColors),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColors",
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
      value: workspaceSettingV2EffectiveWorkspaceDashboardThemeWidgetBackgroundColorToHclTerraform(struct!.widgetBackgroundColor),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2EffectiveWorkspaceDashboardThemeWidgetBackgroundColor",
    },
    widget_border_color: {
      value: workspaceSettingV2EffectiveWorkspaceDashboardThemeWidgetBorderColorToHclTerraform(struct!.widgetBorderColor),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2EffectiveWorkspaceDashboardThemeWidgetBorderColor",
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

export class WorkspaceSettingV2EffectiveWorkspaceDashboardThemeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2EffectiveWorkspaceDashboardTheme | undefined {
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

  public set internalValue(value: WorkspaceSettingV2EffectiveWorkspaceDashboardTheme | undefined) {
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
  private _axisLineColor = new WorkspaceSettingV2EffectiveWorkspaceDashboardThemeAxisLineColorOutputReference(this, "axis_line_color");
  public get axisLineColor() {
    return this._axisLineColor;
  }
  public putAxisLineColor(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeAxisLineColor) {
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
  private _canvasBackgroundColor = new WorkspaceSettingV2EffectiveWorkspaceDashboardThemeCanvasBackgroundColorOutputReference(this, "canvas_background_color");
  public get canvasBackgroundColor() {
    return this._canvasBackgroundColor;
  }
  public putCanvasBackgroundColor(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeCanvasBackgroundColor) {
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
  private _continuousGradient = new WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientOutputReference(this, "continuous_gradient");
  public get continuousGradient() {
    return this._continuousGradient;
  }
  public putContinuousGradient(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradient) {
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
  private _fontColor = new WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontColorOutputReference(this, "font_color");
  public get fontColor() {
    return this._fontColor;
  }
  public putFontColor(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontColor) {
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
  private _fontSettings = new WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsOutputReference(this, "font_settings");
  public get fontSettings() {
    return this._fontSettings;
  }
  public putFontSettings(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettings) {
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
  private _gridLineColor = new WorkspaceSettingV2EffectiveWorkspaceDashboardThemeGridLineColorOutputReference(this, "grid_line_color");
  public get gridLineColor() {
    return this._gridLineColor;
  }
  public putGridLineColor(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeGridLineColor) {
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
  private _selectionColor = new WorkspaceSettingV2EffectiveWorkspaceDashboardThemeSelectionColorOutputReference(this, "selection_color");
  public get selectionColor() {
    return this._selectionColor;
  }
  public putSelectionColor(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeSelectionColor) {
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
  private _sentimentColors = new WorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsOutputReference(this, "sentiment_colors");
  public get sentimentColors() {
    return this._sentimentColors;
  }
  public putSentimentColors(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColors) {
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
  private _widgetBackgroundColor = new WorkspaceSettingV2EffectiveWorkspaceDashboardThemeWidgetBackgroundColorOutputReference(this, "widget_background_color");
  public get widgetBackgroundColor() {
    return this._widgetBackgroundColor;
  }
  public putWidgetBackgroundColor(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeWidgetBackgroundColor) {
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
  private _widgetBorderColor = new WorkspaceSettingV2EffectiveWorkspaceDashboardThemeWidgetBorderColorOutputReference(this, "widget_border_color");
  public get widgetBorderColor() {
    return this._widgetBorderColor;
  }
  public putWidgetBorderColor(value: WorkspaceSettingV2EffectiveWorkspaceDashboardThemeWidgetBorderColor) {
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
export interface WorkspaceSettingV2EffectiveWorkspaceLabel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#color WorkspaceSettingV2#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#label WorkspaceSettingV2#label}
  */
  readonly label?: string;
}

export function workspaceSettingV2EffectiveWorkspaceLabelToTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceLabel | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    color: cdktn.stringToTerraform(struct!.color),
    label: cdktn.stringToTerraform(struct!.label),
  }
}


export function workspaceSettingV2EffectiveWorkspaceLabelToHclTerraform(struct?: WorkspaceSettingV2EffectiveWorkspaceLabel | cdktn.IResolvable): any {
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

export class WorkspaceSettingV2EffectiveWorkspaceLabelOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2EffectiveWorkspaceLabel | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2EffectiveWorkspaceLabel | cdktn.IResolvable | undefined) {
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
export interface WorkspaceSettingV2IntegerVal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#value WorkspaceSettingV2#value}
  */
  readonly value?: number;
}

export function workspaceSettingV2IntegerValToTerraform(struct?: WorkspaceSettingV2IntegerVal | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function workspaceSettingV2IntegerValToHclTerraform(struct?: WorkspaceSettingV2IntegerVal | cdktn.IResolvable): any {
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

export class WorkspaceSettingV2IntegerValOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2IntegerVal | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2IntegerVal | cdktn.IResolvable | undefined) {
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
export interface WorkspaceSettingV2OperationalEmailCustomRecipient {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#email WorkspaceSettingV2#email}
  */
  readonly email?: string;
}

export function workspaceSettingV2OperationalEmailCustomRecipientToTerraform(struct?: WorkspaceSettingV2OperationalEmailCustomRecipient | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    email: cdktn.stringToTerraform(struct!.email),
  }
}


export function workspaceSettingV2OperationalEmailCustomRecipientToHclTerraform(struct?: WorkspaceSettingV2OperationalEmailCustomRecipient | cdktn.IResolvable): any {
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

export class WorkspaceSettingV2OperationalEmailCustomRecipientOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2OperationalEmailCustomRecipient | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2OperationalEmailCustomRecipient | cdktn.IResolvable | undefined) {
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
export interface WorkspaceSettingV2PersonalCompute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#value WorkspaceSettingV2#value}
  */
  readonly value?: string;
}

export function workspaceSettingV2PersonalComputeToTerraform(struct?: WorkspaceSettingV2PersonalCompute | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function workspaceSettingV2PersonalComputeToHclTerraform(struct?: WorkspaceSettingV2PersonalCompute | cdktn.IResolvable): any {
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

export class WorkspaceSettingV2PersonalComputeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2PersonalCompute | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2PersonalCompute | cdktn.IResolvable | undefined) {
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
export interface WorkspaceSettingV2ProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#workspace_id WorkspaceSettingV2#workspace_id}
  */
  readonly workspaceId?: string;
}

export function workspaceSettingV2ProviderConfigToTerraform(struct?: WorkspaceSettingV2ProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function workspaceSettingV2ProviderConfigToHclTerraform(struct?: WorkspaceSettingV2ProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    workspace_id: {
      value: cdktn.stringToHclTerraform(struct!.workspaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkspaceSettingV2ProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2ProviderConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceId = this._workspaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkspaceSettingV2ProviderConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._workspaceId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._workspaceId = value.workspaceId;
    }
  }

  // workspace_id - computed: true, optional: true, required: false
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  public resetWorkspaceId() {
    this._workspaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }
}
export interface WorkspaceSettingV2RestrictWorkspaceAdmins {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#disable_gov_tag_creation WorkspaceSettingV2#disable_gov_tag_creation}
  */
  readonly disableGovTagCreation?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#status WorkspaceSettingV2#status}
  */
  readonly status: string;
}

export function workspaceSettingV2RestrictWorkspaceAdminsToTerraform(struct?: WorkspaceSettingV2RestrictWorkspaceAdmins | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    disable_gov_tag_creation: cdktn.booleanToTerraform(struct!.disableGovTagCreation),
    status: cdktn.stringToTerraform(struct!.status),
  }
}


export function workspaceSettingV2RestrictWorkspaceAdminsToHclTerraform(struct?: WorkspaceSettingV2RestrictWorkspaceAdmins | cdktn.IResolvable): any {
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

export class WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2RestrictWorkspaceAdmins | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2RestrictWorkspaceAdmins | cdktn.IResolvable | undefined) {
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
export interface WorkspaceSettingV2StringVal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#value WorkspaceSettingV2#value}
  */
  readonly value?: string;
}

export function workspaceSettingV2StringValToTerraform(struct?: WorkspaceSettingV2StringVal | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function workspaceSettingV2StringValToHclTerraform(struct?: WorkspaceSettingV2StringVal | cdktn.IResolvable): any {
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

export class WorkspaceSettingV2StringValOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2StringVal | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2StringVal | cdktn.IResolvable | undefined) {
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
export interface WorkspaceSettingV2WorkspaceDashboardThemeAxisLineColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#dark WorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#light WorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function workspaceSettingV2WorkspaceDashboardThemeAxisLineColorToTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeAxisLineColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function workspaceSettingV2WorkspaceDashboardThemeAxisLineColorToHclTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeAxisLineColor | cdktn.IResolvable): any {
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

export class WorkspaceSettingV2WorkspaceDashboardThemeAxisLineColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2WorkspaceDashboardThemeAxisLineColor | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2WorkspaceDashboardThemeAxisLineColor | cdktn.IResolvable | undefined) {
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
export interface WorkspaceSettingV2WorkspaceDashboardThemeCanvasBackgroundColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#dark WorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#light WorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function workspaceSettingV2WorkspaceDashboardThemeCanvasBackgroundColorToTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeCanvasBackgroundColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function workspaceSettingV2WorkspaceDashboardThemeCanvasBackgroundColorToHclTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeCanvasBackgroundColor | cdktn.IResolvable): any {
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

export class WorkspaceSettingV2WorkspaceDashboardThemeCanvasBackgroundColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2WorkspaceDashboardThemeCanvasBackgroundColor | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2WorkspaceDashboardThemeCanvasBackgroundColor | cdktn.IResolvable | undefined) {
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
export interface WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEnd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#dark WorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#light WorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function workspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEndToTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEnd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function workspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEndToHclTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEnd | cdktn.IResolvable): any {
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

export class WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEndOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEnd | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEnd | cdktn.IResolvable | undefined) {
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
export interface WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMid {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#dark WorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#light WorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function workspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMidToTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMid | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function workspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMidToHclTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMid | cdktn.IResolvable): any {
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

export class WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMidOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMid | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMid | cdktn.IResolvable | undefined) {
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
export interface WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStart {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#dark WorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#light WorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function workspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStartToTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStart | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function workspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStartToHclTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStart | cdktn.IResolvable): any {
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

export class WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStartOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStart | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStart | cdktn.IResolvable | undefined) {
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
export interface WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDiverging {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#end WorkspaceSettingV2#end}
  */
  readonly end?: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEnd;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#mid WorkspaceSettingV2#mid}
  */
  readonly mid?: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMid;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#start WorkspaceSettingV2#start}
  */
  readonly start?: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStart;
}

export function workspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingToTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDiverging | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end: workspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEndToTerraform(struct!.end),
    mid: workspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMidToTerraform(struct!.mid),
    start: workspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStartToTerraform(struct!.start),
  }
}


export function workspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingToHclTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDiverging | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end: {
      value: workspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEndToHclTerraform(struct!.end),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEnd",
    },
    mid: {
      value: workspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMidToHclTerraform(struct!.mid),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMid",
    },
    start: {
      value: workspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStartToHclTerraform(struct!.start),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStart",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDiverging | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDiverging | cdktn.IResolvable | undefined) {
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
  private _end = new WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEndOutputReference(this, "end");
  public get end() {
    return this._end;
  }
  public putEnd(value: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEnd) {
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
  private _mid = new WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMidOutputReference(this, "mid");
  public get mid() {
    return this._mid;
  }
  public putMid(value: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMid) {
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
  private _start = new WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStartOutputReference(this, "start");
  public get start() {
    return this._start;
  }
  public putStart(value: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStart) {
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
export interface WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEnd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#dark WorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#light WorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function workspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEndToTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEnd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function workspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEndToHclTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEnd | cdktn.IResolvable): any {
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

export class WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEndOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEnd | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEnd | cdktn.IResolvable | undefined) {
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
export interface WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStart {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#dark WorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#light WorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function workspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStartToTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStart | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function workspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStartToHclTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStart | cdktn.IResolvable): any {
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

export class WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStartOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStart | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStart | cdktn.IResolvable | undefined) {
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
export interface WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequential {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#end WorkspaceSettingV2#end}
  */
  readonly end?: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEnd;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#start WorkspaceSettingV2#start}
  */
  readonly start?: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStart;
}

export function workspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialToTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequential | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end: workspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEndToTerraform(struct!.end),
    start: workspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStartToTerraform(struct!.start),
  }
}


export function workspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialToHclTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequential | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end: {
      value: workspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEndToHclTerraform(struct!.end),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEnd",
    },
    start: {
      value: workspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStartToHclTerraform(struct!.start),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStart",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequential | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequential | cdktn.IResolvable | undefined) {
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
  private _end = new WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEndOutputReference(this, "end");
  public get end() {
    return this._end;
  }
  public putEnd(value: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEnd) {
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
  private _start = new WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStartOutputReference(this, "start");
  public get start() {
    return this._start;
  }
  public putStart(value: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStart) {
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
export interface WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkMode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#color WorkspaceSettingV2#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#color_scheme WorkspaceSettingV2#color_scheme}
  */
  readonly colorScheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#custom_diverging WorkspaceSettingV2#custom_diverging}
  */
  readonly customDiverging?: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDiverging;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#custom_sequential WorkspaceSettingV2#custom_sequential}
  */
  readonly customSequential?: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequential;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#from_categorical_index WorkspaceSettingV2#from_categorical_index}
  */
  readonly fromCategoricalIndex?: number;
}

export function workspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeToTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkMode | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    color: cdktn.stringToTerraform(struct!.color),
    color_scheme: cdktn.stringToTerraform(struct!.colorScheme),
    custom_diverging: workspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingToTerraform(struct!.customDiverging),
    custom_sequential: workspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialToTerraform(struct!.customSequential),
    from_categorical_index: cdktn.numberToTerraform(struct!.fromCategoricalIndex),
  }
}


export function workspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeToHclTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkMode | cdktn.IResolvable): any {
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
      value: workspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingToHclTerraform(struct!.customDiverging),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDiverging",
    },
    custom_sequential: {
      value: workspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialToHclTerraform(struct!.customSequential),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequential",
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

export class WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkMode | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkMode | cdktn.IResolvable | undefined) {
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
  private _customDiverging = new WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingOutputReference(this, "custom_diverging");
  public get customDiverging() {
    return this._customDiverging;
  }
  public putCustomDiverging(value: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDiverging) {
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
  private _customSequential = new WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialOutputReference(this, "custom_sequential");
  public get customSequential() {
    return this._customSequential;
  }
  public putCustomSequential(value: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequential) {
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
export interface WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEnd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#dark WorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#light WorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function workspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEndToTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEnd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function workspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEndToHclTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEnd | cdktn.IResolvable): any {
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

export class WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEndOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEnd | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEnd | cdktn.IResolvable | undefined) {
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
export interface WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMid {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#dark WorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#light WorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function workspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMidToTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMid | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function workspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMidToHclTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMid | cdktn.IResolvable): any {
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

export class WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMidOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMid | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMid | cdktn.IResolvable | undefined) {
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
export interface WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStart {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#dark WorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#light WorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function workspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStartToTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStart | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function workspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStartToHclTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStart | cdktn.IResolvable): any {
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

export class WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStartOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStart | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStart | cdktn.IResolvable | undefined) {
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
export interface WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDiverging {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#end WorkspaceSettingV2#end}
  */
  readonly end?: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEnd;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#mid WorkspaceSettingV2#mid}
  */
  readonly mid?: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMid;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#start WorkspaceSettingV2#start}
  */
  readonly start?: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStart;
}

export function workspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingToTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDiverging | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end: workspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEndToTerraform(struct!.end),
    mid: workspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMidToTerraform(struct!.mid),
    start: workspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStartToTerraform(struct!.start),
  }
}


export function workspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingToHclTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDiverging | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end: {
      value: workspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEndToHclTerraform(struct!.end),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEnd",
    },
    mid: {
      value: workspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMidToHclTerraform(struct!.mid),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMid",
    },
    start: {
      value: workspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStartToHclTerraform(struct!.start),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStart",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDiverging | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDiverging | cdktn.IResolvable | undefined) {
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
  private _end = new WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEndOutputReference(this, "end");
  public get end() {
    return this._end;
  }
  public putEnd(value: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEnd) {
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
  private _mid = new WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMidOutputReference(this, "mid");
  public get mid() {
    return this._mid;
  }
  public putMid(value: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMid) {
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
  private _start = new WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStartOutputReference(this, "start");
  public get start() {
    return this._start;
  }
  public putStart(value: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStart) {
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
export interface WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEnd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#dark WorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#light WorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function workspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEndToTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEnd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function workspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEndToHclTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEnd | cdktn.IResolvable): any {
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

export class WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEndOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEnd | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEnd | cdktn.IResolvable | undefined) {
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
export interface WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStart {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#dark WorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#light WorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function workspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStartToTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStart | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function workspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStartToHclTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStart | cdktn.IResolvable): any {
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

export class WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStartOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStart | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStart | cdktn.IResolvable | undefined) {
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
export interface WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequential {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#end WorkspaceSettingV2#end}
  */
  readonly end?: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEnd;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#start WorkspaceSettingV2#start}
  */
  readonly start?: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStart;
}

export function workspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialToTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequential | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end: workspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEndToTerraform(struct!.end),
    start: workspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStartToTerraform(struct!.start),
  }
}


export function workspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialToHclTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequential | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end: {
      value: workspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEndToHclTerraform(struct!.end),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEnd",
    },
    start: {
      value: workspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStartToHclTerraform(struct!.start),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStart",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequential | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequential | cdktn.IResolvable | undefined) {
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
  private _end = new WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEndOutputReference(this, "end");
  public get end() {
    return this._end;
  }
  public putEnd(value: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEnd) {
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
  private _start = new WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStartOutputReference(this, "start");
  public get start() {
    return this._start;
  }
  public putStart(value: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStart) {
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
export interface WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightMode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#color WorkspaceSettingV2#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#color_scheme WorkspaceSettingV2#color_scheme}
  */
  readonly colorScheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#custom_diverging WorkspaceSettingV2#custom_diverging}
  */
  readonly customDiverging?: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDiverging;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#custom_sequential WorkspaceSettingV2#custom_sequential}
  */
  readonly customSequential?: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequential;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#from_categorical_index WorkspaceSettingV2#from_categorical_index}
  */
  readonly fromCategoricalIndex?: number;
}

export function workspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeToTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightMode | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    color: cdktn.stringToTerraform(struct!.color),
    color_scheme: cdktn.stringToTerraform(struct!.colorScheme),
    custom_diverging: workspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingToTerraform(struct!.customDiverging),
    custom_sequential: workspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialToTerraform(struct!.customSequential),
    from_categorical_index: cdktn.numberToTerraform(struct!.fromCategoricalIndex),
  }
}


export function workspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeToHclTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightMode | cdktn.IResolvable): any {
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
      value: workspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingToHclTerraform(struct!.customDiverging),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDiverging",
    },
    custom_sequential: {
      value: workspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialToHclTerraform(struct!.customSequential),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequential",
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

export class WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightMode | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightMode | cdktn.IResolvable | undefined) {
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
  private _customDiverging = new WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingOutputReference(this, "custom_diverging");
  public get customDiverging() {
    return this._customDiverging;
  }
  public putCustomDiverging(value: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDiverging) {
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
  private _customSequential = new WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialOutputReference(this, "custom_sequential");
  public get customSequential() {
    return this._customSequential;
  }
  public putCustomSequential(value: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequential) {
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
export interface WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradient {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#dark_mode WorkspaceSettingV2#dark_mode}
  */
  readonly darkMode?: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkMode;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#light_mode WorkspaceSettingV2#light_mode}
  */
  readonly lightMode?: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightMode;
}

export function workspaceSettingV2WorkspaceDashboardThemeContinuousGradientToTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradient | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark_mode: workspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeToTerraform(struct!.darkMode),
    light_mode: workspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeToTerraform(struct!.lightMode),
  }
}


export function workspaceSettingV2WorkspaceDashboardThemeContinuousGradientToHclTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradient | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dark_mode: {
      value: workspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeToHclTerraform(struct!.darkMode),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkMode",
    },
    light_mode: {
      value: workspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeToHclTerraform(struct!.lightMode),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightMode",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradient | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradient | cdktn.IResolvable | undefined) {
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
  private _darkMode = new WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeOutputReference(this, "dark_mode");
  public get darkMode() {
    return this._darkMode;
  }
  public putDarkMode(value: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkMode) {
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
  private _lightMode = new WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeOutputReference(this, "light_mode");
  public get lightMode() {
    return this._lightMode;
  }
  public putLightMode(value: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightMode) {
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
export interface WorkspaceSettingV2WorkspaceDashboardThemeFontColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#dark WorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#light WorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function workspaceSettingV2WorkspaceDashboardThemeFontColorToTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeFontColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function workspaceSettingV2WorkspaceDashboardThemeFontColorToHclTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeFontColor | cdktn.IResolvable): any {
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

export class WorkspaceSettingV2WorkspaceDashboardThemeFontColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2WorkspaceDashboardThemeFontColor | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2WorkspaceDashboardThemeFontColor | cdktn.IResolvable | undefined) {
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
export interface WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsBaseFontColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#dark WorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#light WorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function workspaceSettingV2WorkspaceDashboardThemeFontSettingsBaseFontColorToTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsBaseFontColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function workspaceSettingV2WorkspaceDashboardThemeFontSettingsBaseFontColorToHclTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsBaseFontColor | cdktn.IResolvable): any {
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

export class WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsBaseFontColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsBaseFontColor | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsBaseFontColor | cdktn.IResolvable | undefined) {
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
export interface WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsBase {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#font_color WorkspaceSettingV2#font_color}
  */
  readonly fontColor?: WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsBaseFontColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#font_family WorkspaceSettingV2#font_family}
  */
  readonly fontFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#font_size WorkspaceSettingV2#font_size}
  */
  readonly fontSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#font_style WorkspaceSettingV2#font_style}
  */
  readonly fontStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#font_weight WorkspaceSettingV2#font_weight}
  */
  readonly fontWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#text_case WorkspaceSettingV2#text_case}
  */
  readonly textCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#text_decoration WorkspaceSettingV2#text_decoration}
  */
  readonly textDecoration?: string;
}

export function workspaceSettingV2WorkspaceDashboardThemeFontSettingsBaseToTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsBase | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    font_color: workspaceSettingV2WorkspaceDashboardThemeFontSettingsBaseFontColorToTerraform(struct!.fontColor),
    font_family: cdktn.stringToTerraform(struct!.fontFamily),
    font_size: cdktn.numberToTerraform(struct!.fontSize),
    font_style: cdktn.stringToTerraform(struct!.fontStyle),
    font_weight: cdktn.numberToTerraform(struct!.fontWeight),
    text_case: cdktn.stringToTerraform(struct!.textCase),
    text_decoration: cdktn.stringToTerraform(struct!.textDecoration),
  }
}


export function workspaceSettingV2WorkspaceDashboardThemeFontSettingsBaseToHclTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsBase | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    font_color: {
      value: workspaceSettingV2WorkspaceDashboardThemeFontSettingsBaseFontColorToHclTerraform(struct!.fontColor),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsBaseFontColor",
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

export class WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsBaseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsBase | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsBase | cdktn.IResolvable | undefined) {
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
  private _fontColor = new WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsBaseFontColorOutputReference(this, "font_color");
  public get fontColor() {
    return this._fontColor;
  }
  public putFontColor(value: WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsBaseFontColor) {
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
export interface WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleFontColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#dark WorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#light WorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function workspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleFontColorToTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleFontColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function workspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleFontColorToHclTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleFontColor | cdktn.IResolvable): any {
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

export class WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleFontColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleFontColor | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleFontColor | cdktn.IResolvable | undefined) {
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
export interface WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldTitle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#font_color WorkspaceSettingV2#font_color}
  */
  readonly fontColor?: WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleFontColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#font_family WorkspaceSettingV2#font_family}
  */
  readonly fontFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#font_size WorkspaceSettingV2#font_size}
  */
  readonly fontSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#font_style WorkspaceSettingV2#font_style}
  */
  readonly fontStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#font_weight WorkspaceSettingV2#font_weight}
  */
  readonly fontWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#text_case WorkspaceSettingV2#text_case}
  */
  readonly textCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#text_decoration WorkspaceSettingV2#text_decoration}
  */
  readonly textDecoration?: string;
}

export function workspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleToTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldTitle | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    font_color: workspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleFontColorToTerraform(struct!.fontColor),
    font_family: cdktn.stringToTerraform(struct!.fontFamily),
    font_size: cdktn.numberToTerraform(struct!.fontSize),
    font_style: cdktn.stringToTerraform(struct!.fontStyle),
    font_weight: cdktn.numberToTerraform(struct!.fontWeight),
    text_case: cdktn.stringToTerraform(struct!.textCase),
    text_decoration: cdktn.stringToTerraform(struct!.textDecoration),
  }
}


export function workspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleToHclTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldTitle | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    font_color: {
      value: workspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleFontColorToHclTerraform(struct!.fontColor),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleFontColor",
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

export class WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldTitle | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldTitle | cdktn.IResolvable | undefined) {
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
  private _fontColor = new WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleFontColorOutputReference(this, "font_color");
  public get fontColor() {
    return this._fontColor;
  }
  public putFontColor(value: WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleFontColor) {
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
export interface WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldValueFontColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#dark WorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#light WorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function workspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldValueFontColorToTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldValueFontColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function workspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldValueFontColorToHclTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldValueFontColor | cdktn.IResolvable): any {
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

export class WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldValueFontColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldValueFontColor | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldValueFontColor | cdktn.IResolvable | undefined) {
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
export interface WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#font_color WorkspaceSettingV2#font_color}
  */
  readonly fontColor?: WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldValueFontColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#font_family WorkspaceSettingV2#font_family}
  */
  readonly fontFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#font_size WorkspaceSettingV2#font_size}
  */
  readonly fontSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#font_style WorkspaceSettingV2#font_style}
  */
  readonly fontStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#font_weight WorkspaceSettingV2#font_weight}
  */
  readonly fontWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#text_case WorkspaceSettingV2#text_case}
  */
  readonly textCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#text_decoration WorkspaceSettingV2#text_decoration}
  */
  readonly textDecoration?: string;
}

export function workspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldValueToTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    font_color: workspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldValueFontColorToTerraform(struct!.fontColor),
    font_family: cdktn.stringToTerraform(struct!.fontFamily),
    font_size: cdktn.numberToTerraform(struct!.fontSize),
    font_style: cdktn.stringToTerraform(struct!.fontStyle),
    font_weight: cdktn.numberToTerraform(struct!.fontWeight),
    text_case: cdktn.stringToTerraform(struct!.textCase),
    text_decoration: cdktn.stringToTerraform(struct!.textDecoration),
  }
}


export function workspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldValueToHclTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    font_color: {
      value: workspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldValueFontColorToHclTerraform(struct!.fontColor),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldValueFontColor",
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

export class WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldValue | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldValue | cdktn.IResolvable | undefined) {
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
  private _fontColor = new WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldValueFontColorOutputReference(this, "font_color");
  public get fontColor() {
    return this._fontColor;
  }
  public putFontColor(value: WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldValueFontColor) {
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
export interface WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#dark WorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#light WorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function workspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColorToTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function workspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColorToHclTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColor | cdktn.IResolvable): any {
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

export class WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColor | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColor | cdktn.IResolvable | undefined) {
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
export interface WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescription {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#font_color WorkspaceSettingV2#font_color}
  */
  readonly fontColor?: WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#font_family WorkspaceSettingV2#font_family}
  */
  readonly fontFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#font_size WorkspaceSettingV2#font_size}
  */
  readonly fontSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#font_style WorkspaceSettingV2#font_style}
  */
  readonly fontStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#font_weight WorkspaceSettingV2#font_weight}
  */
  readonly fontWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#text_case WorkspaceSettingV2#text_case}
  */
  readonly textCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#text_decoration WorkspaceSettingV2#text_decoration}
  */
  readonly textDecoration?: string;
}

export function workspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionToTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescription | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    font_color: workspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColorToTerraform(struct!.fontColor),
    font_family: cdktn.stringToTerraform(struct!.fontFamily),
    font_size: cdktn.numberToTerraform(struct!.fontSize),
    font_style: cdktn.stringToTerraform(struct!.fontStyle),
    font_weight: cdktn.numberToTerraform(struct!.fontWeight),
    text_case: cdktn.stringToTerraform(struct!.textCase),
    text_decoration: cdktn.stringToTerraform(struct!.textDecoration),
  }
}


export function workspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionToHclTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescription | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    font_color: {
      value: workspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColorToHclTerraform(struct!.fontColor),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColor",
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

export class WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescription | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescription | cdktn.IResolvable | undefined) {
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
  private _fontColor = new WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColorOutputReference(this, "font_color");
  public get fontColor() {
    return this._fontColor;
  }
  public putFontColor(value: WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColor) {
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
export interface WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleFontColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#dark WorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#light WorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function workspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleFontColorToTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleFontColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function workspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleFontColorToHclTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleFontColor | cdktn.IResolvable): any {
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

export class WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleFontColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleFontColor | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleFontColor | cdktn.IResolvable | undefined) {
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
export interface WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#font_color WorkspaceSettingV2#font_color}
  */
  readonly fontColor?: WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleFontColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#font_family WorkspaceSettingV2#font_family}
  */
  readonly fontFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#font_size WorkspaceSettingV2#font_size}
  */
  readonly fontSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#font_style WorkspaceSettingV2#font_style}
  */
  readonly fontStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#font_weight WorkspaceSettingV2#font_weight}
  */
  readonly fontWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#text_case WorkspaceSettingV2#text_case}
  */
  readonly textCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#text_decoration WorkspaceSettingV2#text_decoration}
  */
  readonly textDecoration?: string;
}

export function workspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleToTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitle | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    font_color: workspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleFontColorToTerraform(struct!.fontColor),
    font_family: cdktn.stringToTerraform(struct!.fontFamily),
    font_size: cdktn.numberToTerraform(struct!.fontSize),
    font_style: cdktn.stringToTerraform(struct!.fontStyle),
    font_weight: cdktn.numberToTerraform(struct!.fontWeight),
    text_case: cdktn.stringToTerraform(struct!.textCase),
    text_decoration: cdktn.stringToTerraform(struct!.textDecoration),
  }
}


export function workspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleToHclTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitle | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    font_color: {
      value: workspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleFontColorToHclTerraform(struct!.fontColor),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleFontColor",
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

export class WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitle | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitle | cdktn.IResolvable | undefined) {
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
  private _fontColor = new WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleFontColorOutputReference(this, "font_color");
  public get fontColor() {
    return this._fontColor;
  }
  public putFontColor(value: WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleFontColor) {
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
export interface WorkspaceSettingV2WorkspaceDashboardThemeFontSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#base WorkspaceSettingV2#base}
  */
  readonly base?: WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsBase;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#field_title WorkspaceSettingV2#field_title}
  */
  readonly fieldTitle?: WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldTitle;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#field_value WorkspaceSettingV2#field_value}
  */
  readonly fieldValue?: WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldValue;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#widget_description WorkspaceSettingV2#widget_description}
  */
  readonly widgetDescription?: WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescription;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#widget_title WorkspaceSettingV2#widget_title}
  */
  readonly widgetTitle?: WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitle;
}

export function workspaceSettingV2WorkspaceDashboardThemeFontSettingsToTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeFontSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    base: workspaceSettingV2WorkspaceDashboardThemeFontSettingsBaseToTerraform(struct!.base),
    field_title: workspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleToTerraform(struct!.fieldTitle),
    field_value: workspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldValueToTerraform(struct!.fieldValue),
    widget_description: workspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionToTerraform(struct!.widgetDescription),
    widget_title: workspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleToTerraform(struct!.widgetTitle),
  }
}


export function workspaceSettingV2WorkspaceDashboardThemeFontSettingsToHclTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeFontSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    base: {
      value: workspaceSettingV2WorkspaceDashboardThemeFontSettingsBaseToHclTerraform(struct!.base),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsBase",
    },
    field_title: {
      value: workspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleToHclTerraform(struct!.fieldTitle),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldTitle",
    },
    field_value: {
      value: workspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldValueToHclTerraform(struct!.fieldValue),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldValue",
    },
    widget_description: {
      value: workspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionToHclTerraform(struct!.widgetDescription),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescription",
    },
    widget_title: {
      value: workspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleToHclTerraform(struct!.widgetTitle),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitle",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2WorkspaceDashboardThemeFontSettings | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2WorkspaceDashboardThemeFontSettings | cdktn.IResolvable | undefined) {
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
  private _base = new WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsBaseOutputReference(this, "base");
  public get base() {
    return this._base;
  }
  public putBase(value: WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsBase) {
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
  private _fieldTitle = new WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleOutputReference(this, "field_title");
  public get fieldTitle() {
    return this._fieldTitle;
  }
  public putFieldTitle(value: WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldTitle) {
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
  private _fieldValue = new WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldValueOutputReference(this, "field_value");
  public get fieldValue() {
    return this._fieldValue;
  }
  public putFieldValue(value: WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldValue) {
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
  private _widgetDescription = new WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionOutputReference(this, "widget_description");
  public get widgetDescription() {
    return this._widgetDescription;
  }
  public putWidgetDescription(value: WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescription) {
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
  private _widgetTitle = new WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleOutputReference(this, "widget_title");
  public get widgetTitle() {
    return this._widgetTitle;
  }
  public putWidgetTitle(value: WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitle) {
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
export interface WorkspaceSettingV2WorkspaceDashboardThemeGridLineColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#dark WorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#light WorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function workspaceSettingV2WorkspaceDashboardThemeGridLineColorToTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeGridLineColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function workspaceSettingV2WorkspaceDashboardThemeGridLineColorToHclTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeGridLineColor | cdktn.IResolvable): any {
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

export class WorkspaceSettingV2WorkspaceDashboardThemeGridLineColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2WorkspaceDashboardThemeGridLineColor | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2WorkspaceDashboardThemeGridLineColor | cdktn.IResolvable | undefined) {
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
export interface WorkspaceSettingV2WorkspaceDashboardThemeSelectionColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#dark WorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#light WorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function workspaceSettingV2WorkspaceDashboardThemeSelectionColorToTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeSelectionColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function workspaceSettingV2WorkspaceDashboardThemeSelectionColorToHclTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeSelectionColor | cdktn.IResolvable): any {
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

export class WorkspaceSettingV2WorkspaceDashboardThemeSelectionColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2WorkspaceDashboardThemeSelectionColor | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2WorkspaceDashboardThemeSelectionColor | cdktn.IResolvable | undefined) {
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
export interface WorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsNegative {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#dark WorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#light WorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function workspaceSettingV2WorkspaceDashboardThemeSentimentColorsNegativeToTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsNegative | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function workspaceSettingV2WorkspaceDashboardThemeSentimentColorsNegativeToHclTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsNegative | cdktn.IResolvable): any {
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

export class WorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsNegativeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsNegative | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsNegative | cdktn.IResolvable | undefined) {
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
export interface WorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsNeutral {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#dark WorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#light WorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function workspaceSettingV2WorkspaceDashboardThemeSentimentColorsNeutralToTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsNeutral | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function workspaceSettingV2WorkspaceDashboardThemeSentimentColorsNeutralToHclTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsNeutral | cdktn.IResolvable): any {
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

export class WorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsNeutralOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsNeutral | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsNeutral | cdktn.IResolvable | undefined) {
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
export interface WorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsPositive {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#dark WorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#light WorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function workspaceSettingV2WorkspaceDashboardThemeSentimentColorsPositiveToTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsPositive | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function workspaceSettingV2WorkspaceDashboardThemeSentimentColorsPositiveToHclTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsPositive | cdktn.IResolvable): any {
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

export class WorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsPositiveOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsPositive | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsPositive | cdktn.IResolvable | undefined) {
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
export interface WorkspaceSettingV2WorkspaceDashboardThemeSentimentColors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#negative WorkspaceSettingV2#negative}
  */
  readonly negative?: WorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsNegative;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#neutral WorkspaceSettingV2#neutral}
  */
  readonly neutral?: WorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsNeutral;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#positive WorkspaceSettingV2#positive}
  */
  readonly positive?: WorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsPositive;
}

export function workspaceSettingV2WorkspaceDashboardThemeSentimentColorsToTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeSentimentColors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    negative: workspaceSettingV2WorkspaceDashboardThemeSentimentColorsNegativeToTerraform(struct!.negative),
    neutral: workspaceSettingV2WorkspaceDashboardThemeSentimentColorsNeutralToTerraform(struct!.neutral),
    positive: workspaceSettingV2WorkspaceDashboardThemeSentimentColorsPositiveToTerraform(struct!.positive),
  }
}


export function workspaceSettingV2WorkspaceDashboardThemeSentimentColorsToHclTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeSentimentColors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    negative: {
      value: workspaceSettingV2WorkspaceDashboardThemeSentimentColorsNegativeToHclTerraform(struct!.negative),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsNegative",
    },
    neutral: {
      value: workspaceSettingV2WorkspaceDashboardThemeSentimentColorsNeutralToHclTerraform(struct!.neutral),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsNeutral",
    },
    positive: {
      value: workspaceSettingV2WorkspaceDashboardThemeSentimentColorsPositiveToHclTerraform(struct!.positive),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsPositive",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2WorkspaceDashboardThemeSentimentColors | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2WorkspaceDashboardThemeSentimentColors | cdktn.IResolvable | undefined) {
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
  private _negative = new WorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsNegativeOutputReference(this, "negative");
  public get negative() {
    return this._negative;
  }
  public putNegative(value: WorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsNegative) {
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
  private _neutral = new WorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsNeutralOutputReference(this, "neutral");
  public get neutral() {
    return this._neutral;
  }
  public putNeutral(value: WorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsNeutral) {
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
  private _positive = new WorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsPositiveOutputReference(this, "positive");
  public get positive() {
    return this._positive;
  }
  public putPositive(value: WorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsPositive) {
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
export interface WorkspaceSettingV2WorkspaceDashboardThemeWidgetBackgroundColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#dark WorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#light WorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function workspaceSettingV2WorkspaceDashboardThemeWidgetBackgroundColorToTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeWidgetBackgroundColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function workspaceSettingV2WorkspaceDashboardThemeWidgetBackgroundColorToHclTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeWidgetBackgroundColor | cdktn.IResolvable): any {
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

export class WorkspaceSettingV2WorkspaceDashboardThemeWidgetBackgroundColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2WorkspaceDashboardThemeWidgetBackgroundColor | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2WorkspaceDashboardThemeWidgetBackgroundColor | cdktn.IResolvable | undefined) {
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
export interface WorkspaceSettingV2WorkspaceDashboardThemeWidgetBorderColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#dark WorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#light WorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function workspaceSettingV2WorkspaceDashboardThemeWidgetBorderColorToTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeWidgetBorderColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function workspaceSettingV2WorkspaceDashboardThemeWidgetBorderColorToHclTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardThemeWidgetBorderColor | cdktn.IResolvable): any {
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

export class WorkspaceSettingV2WorkspaceDashboardThemeWidgetBorderColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2WorkspaceDashboardThemeWidgetBorderColor | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2WorkspaceDashboardThemeWidgetBorderColor | cdktn.IResolvable | undefined) {
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
export interface WorkspaceSettingV2WorkspaceDashboardTheme {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#axis_line_color WorkspaceSettingV2#axis_line_color}
  */
  readonly axisLineColor?: WorkspaceSettingV2WorkspaceDashboardThemeAxisLineColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#canvas_background_color WorkspaceSettingV2#canvas_background_color}
  */
  readonly canvasBackgroundColor?: WorkspaceSettingV2WorkspaceDashboardThemeCanvasBackgroundColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#continuous_gradient WorkspaceSettingV2#continuous_gradient}
  */
  readonly continuousGradient?: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradient;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#font_color WorkspaceSettingV2#font_color}
  */
  readonly fontColor?: WorkspaceSettingV2WorkspaceDashboardThemeFontColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#font_family WorkspaceSettingV2#font_family}
  */
  readonly fontFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#font_settings WorkspaceSettingV2#font_settings}
  */
  readonly fontSettings?: WorkspaceSettingV2WorkspaceDashboardThemeFontSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#grid_line_color WorkspaceSettingV2#grid_line_color}
  */
  readonly gridLineColor?: WorkspaceSettingV2WorkspaceDashboardThemeGridLineColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#mark_corner_radius WorkspaceSettingV2#mark_corner_radius}
  */
  readonly markCornerRadius?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#selection_color WorkspaceSettingV2#selection_color}
  */
  readonly selectionColor?: WorkspaceSettingV2WorkspaceDashboardThemeSelectionColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#sentiment_colors WorkspaceSettingV2#sentiment_colors}
  */
  readonly sentimentColors?: WorkspaceSettingV2WorkspaceDashboardThemeSentimentColors;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#text_box_vertical_align WorkspaceSettingV2#text_box_vertical_align}
  */
  readonly textBoxVerticalAlign?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#visualization_color_01 WorkspaceSettingV2#visualization_color_01}
  */
  readonly visualizationColor01?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#visualization_color_02 WorkspaceSettingV2#visualization_color_02}
  */
  readonly visualizationColor02?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#visualization_color_03 WorkspaceSettingV2#visualization_color_03}
  */
  readonly visualizationColor03?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#visualization_color_04 WorkspaceSettingV2#visualization_color_04}
  */
  readonly visualizationColor04?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#visualization_color_05 WorkspaceSettingV2#visualization_color_05}
  */
  readonly visualizationColor05?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#visualization_color_06 WorkspaceSettingV2#visualization_color_06}
  */
  readonly visualizationColor06?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#visualization_color_07 WorkspaceSettingV2#visualization_color_07}
  */
  readonly visualizationColor07?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#visualization_color_08 WorkspaceSettingV2#visualization_color_08}
  */
  readonly visualizationColor08?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#visualization_color_09 WorkspaceSettingV2#visualization_color_09}
  */
  readonly visualizationColor09?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#visualization_color_10 WorkspaceSettingV2#visualization_color_10}
  */
  readonly visualizationColor10?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#visualization_color_11 WorkspaceSettingV2#visualization_color_11}
  */
  readonly visualizationColor11?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#visualization_color_12 WorkspaceSettingV2#visualization_color_12}
  */
  readonly visualizationColor12?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#visualization_color_13 WorkspaceSettingV2#visualization_color_13}
  */
  readonly visualizationColor13?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#visualization_color_14 WorkspaceSettingV2#visualization_color_14}
  */
  readonly visualizationColor14?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#visualization_color_15 WorkspaceSettingV2#visualization_color_15}
  */
  readonly visualizationColor15?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#visualization_color_16 WorkspaceSettingV2#visualization_color_16}
  */
  readonly visualizationColor16?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#visualization_color_17 WorkspaceSettingV2#visualization_color_17}
  */
  readonly visualizationColor17?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#visualization_color_18 WorkspaceSettingV2#visualization_color_18}
  */
  readonly visualizationColor18?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#visualization_color_19 WorkspaceSettingV2#visualization_color_19}
  */
  readonly visualizationColor19?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#visualization_color_20 WorkspaceSettingV2#visualization_color_20}
  */
  readonly visualizationColor20?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#widget_background_color WorkspaceSettingV2#widget_background_color}
  */
  readonly widgetBackgroundColor?: WorkspaceSettingV2WorkspaceDashboardThemeWidgetBackgroundColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#widget_border_color WorkspaceSettingV2#widget_border_color}
  */
  readonly widgetBorderColor?: WorkspaceSettingV2WorkspaceDashboardThemeWidgetBorderColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#widget_corner_radius WorkspaceSettingV2#widget_corner_radius}
  */
  readonly widgetCornerRadius?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#widget_header_alignment WorkspaceSettingV2#widget_header_alignment}
  */
  readonly widgetHeaderAlignment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#widget_margin WorkspaceSettingV2#widget_margin}
  */
  readonly widgetMargin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#widget_padding WorkspaceSettingV2#widget_padding}
  */
  readonly widgetPadding?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#widget_shadow WorkspaceSettingV2#widget_shadow}
  */
  readonly widgetShadow?: number;
}

export function workspaceSettingV2WorkspaceDashboardThemeToTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardTheme | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    axis_line_color: workspaceSettingV2WorkspaceDashboardThemeAxisLineColorToTerraform(struct!.axisLineColor),
    canvas_background_color: workspaceSettingV2WorkspaceDashboardThemeCanvasBackgroundColorToTerraform(struct!.canvasBackgroundColor),
    continuous_gradient: workspaceSettingV2WorkspaceDashboardThemeContinuousGradientToTerraform(struct!.continuousGradient),
    font_color: workspaceSettingV2WorkspaceDashboardThemeFontColorToTerraform(struct!.fontColor),
    font_family: cdktn.stringToTerraform(struct!.fontFamily),
    font_settings: workspaceSettingV2WorkspaceDashboardThemeFontSettingsToTerraform(struct!.fontSettings),
    grid_line_color: workspaceSettingV2WorkspaceDashboardThemeGridLineColorToTerraform(struct!.gridLineColor),
    mark_corner_radius: cdktn.numberToTerraform(struct!.markCornerRadius),
    selection_color: workspaceSettingV2WorkspaceDashboardThemeSelectionColorToTerraform(struct!.selectionColor),
    sentiment_colors: workspaceSettingV2WorkspaceDashboardThemeSentimentColorsToTerraform(struct!.sentimentColors),
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
    widget_background_color: workspaceSettingV2WorkspaceDashboardThemeWidgetBackgroundColorToTerraform(struct!.widgetBackgroundColor),
    widget_border_color: workspaceSettingV2WorkspaceDashboardThemeWidgetBorderColorToTerraform(struct!.widgetBorderColor),
    widget_corner_radius: cdktn.numberToTerraform(struct!.widgetCornerRadius),
    widget_header_alignment: cdktn.stringToTerraform(struct!.widgetHeaderAlignment),
    widget_margin: cdktn.numberToTerraform(struct!.widgetMargin),
    widget_padding: cdktn.numberToTerraform(struct!.widgetPadding),
    widget_shadow: cdktn.numberToTerraform(struct!.widgetShadow),
  }
}


export function workspaceSettingV2WorkspaceDashboardThemeToHclTerraform(struct?: WorkspaceSettingV2WorkspaceDashboardTheme | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    axis_line_color: {
      value: workspaceSettingV2WorkspaceDashboardThemeAxisLineColorToHclTerraform(struct!.axisLineColor),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2WorkspaceDashboardThemeAxisLineColor",
    },
    canvas_background_color: {
      value: workspaceSettingV2WorkspaceDashboardThemeCanvasBackgroundColorToHclTerraform(struct!.canvasBackgroundColor),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2WorkspaceDashboardThemeCanvasBackgroundColor",
    },
    continuous_gradient: {
      value: workspaceSettingV2WorkspaceDashboardThemeContinuousGradientToHclTerraform(struct!.continuousGradient),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradient",
    },
    font_color: {
      value: workspaceSettingV2WorkspaceDashboardThemeFontColorToHclTerraform(struct!.fontColor),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2WorkspaceDashboardThemeFontColor",
    },
    font_family: {
      value: cdktn.stringToHclTerraform(struct!.fontFamily),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_settings: {
      value: workspaceSettingV2WorkspaceDashboardThemeFontSettingsToHclTerraform(struct!.fontSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2WorkspaceDashboardThemeFontSettings",
    },
    grid_line_color: {
      value: workspaceSettingV2WorkspaceDashboardThemeGridLineColorToHclTerraform(struct!.gridLineColor),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2WorkspaceDashboardThemeGridLineColor",
    },
    mark_corner_radius: {
      value: cdktn.numberToHclTerraform(struct!.markCornerRadius),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    selection_color: {
      value: workspaceSettingV2WorkspaceDashboardThemeSelectionColorToHclTerraform(struct!.selectionColor),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2WorkspaceDashboardThemeSelectionColor",
    },
    sentiment_colors: {
      value: workspaceSettingV2WorkspaceDashboardThemeSentimentColorsToHclTerraform(struct!.sentimentColors),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2WorkspaceDashboardThemeSentimentColors",
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
      value: workspaceSettingV2WorkspaceDashboardThemeWidgetBackgroundColorToHclTerraform(struct!.widgetBackgroundColor),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2WorkspaceDashboardThemeWidgetBackgroundColor",
    },
    widget_border_color: {
      value: workspaceSettingV2WorkspaceDashboardThemeWidgetBorderColorToHclTerraform(struct!.widgetBorderColor),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceSettingV2WorkspaceDashboardThemeWidgetBorderColor",
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

export class WorkspaceSettingV2WorkspaceDashboardThemeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2WorkspaceDashboardTheme | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2WorkspaceDashboardTheme | cdktn.IResolvable | undefined) {
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
  private _axisLineColor = new WorkspaceSettingV2WorkspaceDashboardThemeAxisLineColorOutputReference(this, "axis_line_color");
  public get axisLineColor() {
    return this._axisLineColor;
  }
  public putAxisLineColor(value: WorkspaceSettingV2WorkspaceDashboardThemeAxisLineColor) {
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
  private _canvasBackgroundColor = new WorkspaceSettingV2WorkspaceDashboardThemeCanvasBackgroundColorOutputReference(this, "canvas_background_color");
  public get canvasBackgroundColor() {
    return this._canvasBackgroundColor;
  }
  public putCanvasBackgroundColor(value: WorkspaceSettingV2WorkspaceDashboardThemeCanvasBackgroundColor) {
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
  private _continuousGradient = new WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientOutputReference(this, "continuous_gradient");
  public get continuousGradient() {
    return this._continuousGradient;
  }
  public putContinuousGradient(value: WorkspaceSettingV2WorkspaceDashboardThemeContinuousGradient) {
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
  private _fontColor = new WorkspaceSettingV2WorkspaceDashboardThemeFontColorOutputReference(this, "font_color");
  public get fontColor() {
    return this._fontColor;
  }
  public putFontColor(value: WorkspaceSettingV2WorkspaceDashboardThemeFontColor) {
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
  private _fontSettings = new WorkspaceSettingV2WorkspaceDashboardThemeFontSettingsOutputReference(this, "font_settings");
  public get fontSettings() {
    return this._fontSettings;
  }
  public putFontSettings(value: WorkspaceSettingV2WorkspaceDashboardThemeFontSettings) {
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
  private _gridLineColor = new WorkspaceSettingV2WorkspaceDashboardThemeGridLineColorOutputReference(this, "grid_line_color");
  public get gridLineColor() {
    return this._gridLineColor;
  }
  public putGridLineColor(value: WorkspaceSettingV2WorkspaceDashboardThemeGridLineColor) {
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
  private _selectionColor = new WorkspaceSettingV2WorkspaceDashboardThemeSelectionColorOutputReference(this, "selection_color");
  public get selectionColor() {
    return this._selectionColor;
  }
  public putSelectionColor(value: WorkspaceSettingV2WorkspaceDashboardThemeSelectionColor) {
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
  private _sentimentColors = new WorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsOutputReference(this, "sentiment_colors");
  public get sentimentColors() {
    return this._sentimentColors;
  }
  public putSentimentColors(value: WorkspaceSettingV2WorkspaceDashboardThemeSentimentColors) {
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
  private _widgetBackgroundColor = new WorkspaceSettingV2WorkspaceDashboardThemeWidgetBackgroundColorOutputReference(this, "widget_background_color");
  public get widgetBackgroundColor() {
    return this._widgetBackgroundColor;
  }
  public putWidgetBackgroundColor(value: WorkspaceSettingV2WorkspaceDashboardThemeWidgetBackgroundColor) {
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
  private _widgetBorderColor = new WorkspaceSettingV2WorkspaceDashboardThemeWidgetBorderColorOutputReference(this, "widget_border_color");
  public get widgetBorderColor() {
    return this._widgetBorderColor;
  }
  public putWidgetBorderColor(value: WorkspaceSettingV2WorkspaceDashboardThemeWidgetBorderColor) {
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
export interface WorkspaceSettingV2WorkspaceLabel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#color WorkspaceSettingV2#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#label WorkspaceSettingV2#label}
  */
  readonly label?: string;
}

export function workspaceSettingV2WorkspaceLabelToTerraform(struct?: WorkspaceSettingV2WorkspaceLabel | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    color: cdktn.stringToTerraform(struct!.color),
    label: cdktn.stringToTerraform(struct!.label),
  }
}


export function workspaceSettingV2WorkspaceLabelToHclTerraform(struct?: WorkspaceSettingV2WorkspaceLabel | cdktn.IResolvable): any {
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

export class WorkspaceSettingV2WorkspaceLabelOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceSettingV2WorkspaceLabel | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceSettingV2WorkspaceLabel | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2 databricks_workspace_setting_v2}
*/
export class WorkspaceSettingV2 extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_workspace_setting_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a WorkspaceSettingV2 resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkspaceSettingV2 to import
  * @param importFromId The id of the existing WorkspaceSettingV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkspaceSettingV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_workspace_setting_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/workspace_setting_v2 databricks_workspace_setting_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkspaceSettingV2Config = {}
  */
  public constructor(scope: Construct, id: string, config: WorkspaceSettingV2Config = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_workspace_setting_v2',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.144.0',
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
    this._providerConfig.internalValue = config.providerConfig;
    this._restrictWorkspaceAdmins.internalValue = config.restrictWorkspaceAdmins;
    this._stringVal.internalValue = config.stringVal;
    this._workspaceDashboardTheme.internalValue = config.workspaceDashboardTheme;
    this._workspaceLabel.internalValue = config.workspaceLabel;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aibi_dashboard_embedding_access_policy - computed: false, optional: true, required: false
  private _aibiDashboardEmbeddingAccessPolicy = new WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference(this, "aibi_dashboard_embedding_access_policy");
  public get aibiDashboardEmbeddingAccessPolicy() {
    return this._aibiDashboardEmbeddingAccessPolicy;
  }
  public putAibiDashboardEmbeddingAccessPolicy(value: WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy) {
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
  private _aibiDashboardEmbeddingApprovedDomains = new WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference(this, "aibi_dashboard_embedding_approved_domains");
  public get aibiDashboardEmbeddingApprovedDomains() {
    return this._aibiDashboardEmbeddingApprovedDomains;
  }
  public putAibiDashboardEmbeddingApprovedDomains(value: WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains) {
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
  private _allowedAppsUserApiScopes = new WorkspaceSettingV2AllowedAppsUserApiScopesOutputReference(this, "allowed_apps_user_api_scopes");
  public get allowedAppsUserApiScopes() {
    return this._allowedAppsUserApiScopes;
  }
  public putAllowedAppsUserApiScopes(value: WorkspaceSettingV2AllowedAppsUserApiScopes) {
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
  private _automaticClusterUpdateWorkspace = new WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference(this, "automatic_cluster_update_workspace");
  public get automaticClusterUpdateWorkspace() {
    return this._automaticClusterUpdateWorkspace;
  }
  public putAutomaticClusterUpdateWorkspace(value: WorkspaceSettingV2AutomaticClusterUpdateWorkspace) {
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
  private _booleanVal = new WorkspaceSettingV2BooleanValOutputReference(this, "boolean_val");
  public get booleanVal() {
    return this._booleanVal;
  }
  public putBooleanVal(value: WorkspaceSettingV2BooleanVal) {
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
  private _collaborationPlatformConnectivity = new WorkspaceSettingV2CollaborationPlatformConnectivityOutputReference(this, "collaboration_platform_connectivity");
  public get collaborationPlatformConnectivity() {
    return this._collaborationPlatformConnectivity;
  }
  public putCollaborationPlatformConnectivity(value: WorkspaceSettingV2CollaborationPlatformConnectivity) {
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
  private _effectiveAibiDashboardEmbeddingAccessPolicy = new WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference(this, "effective_aibi_dashboard_embedding_access_policy");
  public get effectiveAibiDashboardEmbeddingAccessPolicy() {
    return this._effectiveAibiDashboardEmbeddingAccessPolicy;
  }
  public putEffectiveAibiDashboardEmbeddingAccessPolicy(value: WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy) {
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
  private _effectiveAibiDashboardEmbeddingApprovedDomains = new WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference(this, "effective_aibi_dashboard_embedding_approved_domains");
  public get effectiveAibiDashboardEmbeddingApprovedDomains() {
    return this._effectiveAibiDashboardEmbeddingApprovedDomains;
  }
  public putEffectiveAibiDashboardEmbeddingApprovedDomains(value: WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains) {
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
  private _effectiveAllowedAppsUserApiScopes = new WorkspaceSettingV2EffectiveAllowedAppsUserApiScopesOutputReference(this, "effective_allowed_apps_user_api_scopes");
  public get effectiveAllowedAppsUserApiScopes() {
    return this._effectiveAllowedAppsUserApiScopes;
  }

  // effective_automatic_cluster_update_workspace - computed: false, optional: true, required: false
  private _effectiveAutomaticClusterUpdateWorkspace = new WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference(this, "effective_automatic_cluster_update_workspace");
  public get effectiveAutomaticClusterUpdateWorkspace() {
    return this._effectiveAutomaticClusterUpdateWorkspace;
  }
  public putEffectiveAutomaticClusterUpdateWorkspace(value: WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace) {
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
  private _effectiveBooleanVal = new WorkspaceSettingV2EffectiveBooleanValOutputReference(this, "effective_boolean_val");
  public get effectiveBooleanVal() {
    return this._effectiveBooleanVal;
  }

  // effective_collaboration_platform_connectivity - computed: true, optional: false, required: false
  private _effectiveCollaborationPlatformConnectivity = new WorkspaceSettingV2EffectiveCollaborationPlatformConnectivityOutputReference(this, "effective_collaboration_platform_connectivity");
  public get effectiveCollaborationPlatformConnectivity() {
    return this._effectiveCollaborationPlatformConnectivity;
  }

  // effective_integer_val - computed: true, optional: false, required: false
  private _effectiveIntegerVal = new WorkspaceSettingV2EffectiveIntegerValOutputReference(this, "effective_integer_val");
  public get effectiveIntegerVal() {
    return this._effectiveIntegerVal;
  }

  // effective_operational_email_custom_recipient - computed: true, optional: false, required: false
  private _effectiveOperationalEmailCustomRecipient = new WorkspaceSettingV2EffectiveOperationalEmailCustomRecipientOutputReference(this, "effective_operational_email_custom_recipient");
  public get effectiveOperationalEmailCustomRecipient() {
    return this._effectiveOperationalEmailCustomRecipient;
  }

  // effective_personal_compute - computed: false, optional: true, required: false
  private _effectivePersonalCompute = new WorkspaceSettingV2EffectivePersonalComputeOutputReference(this, "effective_personal_compute");
  public get effectivePersonalCompute() {
    return this._effectivePersonalCompute;
  }
  public putEffectivePersonalCompute(value: WorkspaceSettingV2EffectivePersonalCompute) {
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
  private _effectiveRestrictWorkspaceAdmins = new WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference(this, "effective_restrict_workspace_admins");
  public get effectiveRestrictWorkspaceAdmins() {
    return this._effectiveRestrictWorkspaceAdmins;
  }
  public putEffectiveRestrictWorkspaceAdmins(value: WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins) {
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
  private _effectiveStringVal = new WorkspaceSettingV2EffectiveStringValOutputReference(this, "effective_string_val");
  public get effectiveStringVal() {
    return this._effectiveStringVal;
  }

  // effective_workspace_dashboard_theme - computed: true, optional: false, required: false
  private _effectiveWorkspaceDashboardTheme = new WorkspaceSettingV2EffectiveWorkspaceDashboardThemeOutputReference(this, "effective_workspace_dashboard_theme");
  public get effectiveWorkspaceDashboardTheme() {
    return this._effectiveWorkspaceDashboardTheme;
  }

  // effective_workspace_label - computed: false, optional: true, required: false
  private _effectiveWorkspaceLabel = new WorkspaceSettingV2EffectiveWorkspaceLabelOutputReference(this, "effective_workspace_label");
  public get effectiveWorkspaceLabel() {
    return this._effectiveWorkspaceLabel;
  }
  public putEffectiveWorkspaceLabel(value: WorkspaceSettingV2EffectiveWorkspaceLabel) {
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
  private _integerVal = new WorkspaceSettingV2IntegerValOutputReference(this, "integer_val");
  public get integerVal() {
    return this._integerVal;
  }
  public putIntegerVal(value: WorkspaceSettingV2IntegerVal) {
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
  private _operationalEmailCustomRecipient = new WorkspaceSettingV2OperationalEmailCustomRecipientOutputReference(this, "operational_email_custom_recipient");
  public get operationalEmailCustomRecipient() {
    return this._operationalEmailCustomRecipient;
  }
  public putOperationalEmailCustomRecipient(value: WorkspaceSettingV2OperationalEmailCustomRecipient) {
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
  private _personalCompute = new WorkspaceSettingV2PersonalComputeOutputReference(this, "personal_compute");
  public get personalCompute() {
    return this._personalCompute;
  }
  public putPersonalCompute(value: WorkspaceSettingV2PersonalCompute) {
    this._personalCompute.internalValue = value;
  }
  public resetPersonalCompute() {
    this._personalCompute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get personalComputeInput() {
    return this._personalCompute.internalValue;
  }

  // provider_config - computed: true, optional: true, required: false
  private _providerConfig = new WorkspaceSettingV2ProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: WorkspaceSettingV2ProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // restrict_workspace_admins - computed: false, optional: true, required: false
  private _restrictWorkspaceAdmins = new WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference(this, "restrict_workspace_admins");
  public get restrictWorkspaceAdmins() {
    return this._restrictWorkspaceAdmins;
  }
  public putRestrictWorkspaceAdmins(value: WorkspaceSettingV2RestrictWorkspaceAdmins) {
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
  private _stringVal = new WorkspaceSettingV2StringValOutputReference(this, "string_val");
  public get stringVal() {
    return this._stringVal;
  }
  public putStringVal(value: WorkspaceSettingV2StringVal) {
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
  private _workspaceDashboardTheme = new WorkspaceSettingV2WorkspaceDashboardThemeOutputReference(this, "workspace_dashboard_theme");
  public get workspaceDashboardTheme() {
    return this._workspaceDashboardTheme;
  }
  public putWorkspaceDashboardTheme(value: WorkspaceSettingV2WorkspaceDashboardTheme) {
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
  private _workspaceLabel = new WorkspaceSettingV2WorkspaceLabelOutputReference(this, "workspace_label");
  public get workspaceLabel() {
    return this._workspaceLabel;
  }
  public putWorkspaceLabel(value: WorkspaceSettingV2WorkspaceLabel) {
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
      aibi_dashboard_embedding_access_policy: workspaceSettingV2AibiDashboardEmbeddingAccessPolicyToTerraform(this._aibiDashboardEmbeddingAccessPolicy.internalValue),
      aibi_dashboard_embedding_approved_domains: workspaceSettingV2AibiDashboardEmbeddingApprovedDomainsToTerraform(this._aibiDashboardEmbeddingApprovedDomains.internalValue),
      allowed_apps_user_api_scopes: workspaceSettingV2AllowedAppsUserApiScopesToTerraform(this._allowedAppsUserApiScopes.internalValue),
      automatic_cluster_update_workspace: workspaceSettingV2AutomaticClusterUpdateWorkspaceToTerraform(this._automaticClusterUpdateWorkspace.internalValue),
      boolean_val: workspaceSettingV2BooleanValToTerraform(this._booleanVal.internalValue),
      collaboration_platform_connectivity: workspaceSettingV2CollaborationPlatformConnectivityToTerraform(this._collaborationPlatformConnectivity.internalValue),
      effective_aibi_dashboard_embedding_access_policy: workspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyToTerraform(this._effectiveAibiDashboardEmbeddingAccessPolicy.internalValue),
      effective_aibi_dashboard_embedding_approved_domains: workspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsToTerraform(this._effectiveAibiDashboardEmbeddingApprovedDomains.internalValue),
      effective_automatic_cluster_update_workspace: workspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceToTerraform(this._effectiveAutomaticClusterUpdateWorkspace.internalValue),
      effective_personal_compute: workspaceSettingV2EffectivePersonalComputeToTerraform(this._effectivePersonalCompute.internalValue),
      effective_restrict_workspace_admins: workspaceSettingV2EffectiveRestrictWorkspaceAdminsToTerraform(this._effectiveRestrictWorkspaceAdmins.internalValue),
      effective_workspace_label: workspaceSettingV2EffectiveWorkspaceLabelToTerraform(this._effectiveWorkspaceLabel.internalValue),
      integer_val: workspaceSettingV2IntegerValToTerraform(this._integerVal.internalValue),
      name: cdktn.stringToTerraform(this._name),
      operational_email_custom_recipient: workspaceSettingV2OperationalEmailCustomRecipientToTerraform(this._operationalEmailCustomRecipient.internalValue),
      personal_compute: workspaceSettingV2PersonalComputeToTerraform(this._personalCompute.internalValue),
      provider_config: workspaceSettingV2ProviderConfigToTerraform(this._providerConfig.internalValue),
      restrict_workspace_admins: workspaceSettingV2RestrictWorkspaceAdminsToTerraform(this._restrictWorkspaceAdmins.internalValue),
      string_val: workspaceSettingV2StringValToTerraform(this._stringVal.internalValue),
      workspace_dashboard_theme: workspaceSettingV2WorkspaceDashboardThemeToTerraform(this._workspaceDashboardTheme.internalValue),
      workspace_label: workspaceSettingV2WorkspaceLabelToTerraform(this._workspaceLabel.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aibi_dashboard_embedding_access_policy: {
        value: workspaceSettingV2AibiDashboardEmbeddingAccessPolicyToHclTerraform(this._aibiDashboardEmbeddingAccessPolicy.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy",
      },
      aibi_dashboard_embedding_approved_domains: {
        value: workspaceSettingV2AibiDashboardEmbeddingApprovedDomainsToHclTerraform(this._aibiDashboardEmbeddingApprovedDomains.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains",
      },
      allowed_apps_user_api_scopes: {
        value: workspaceSettingV2AllowedAppsUserApiScopesToHclTerraform(this._allowedAppsUserApiScopes.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WorkspaceSettingV2AllowedAppsUserApiScopes",
      },
      automatic_cluster_update_workspace: {
        value: workspaceSettingV2AutomaticClusterUpdateWorkspaceToHclTerraform(this._automaticClusterUpdateWorkspace.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WorkspaceSettingV2AutomaticClusterUpdateWorkspace",
      },
      boolean_val: {
        value: workspaceSettingV2BooleanValToHclTerraform(this._booleanVal.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WorkspaceSettingV2BooleanVal",
      },
      collaboration_platform_connectivity: {
        value: workspaceSettingV2CollaborationPlatformConnectivityToHclTerraform(this._collaborationPlatformConnectivity.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WorkspaceSettingV2CollaborationPlatformConnectivity",
      },
      effective_aibi_dashboard_embedding_access_policy: {
        value: workspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyToHclTerraform(this._effectiveAibiDashboardEmbeddingAccessPolicy.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy",
      },
      effective_aibi_dashboard_embedding_approved_domains: {
        value: workspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsToHclTerraform(this._effectiveAibiDashboardEmbeddingApprovedDomains.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains",
      },
      effective_automatic_cluster_update_workspace: {
        value: workspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceToHclTerraform(this._effectiveAutomaticClusterUpdateWorkspace.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace",
      },
      effective_personal_compute: {
        value: workspaceSettingV2EffectivePersonalComputeToHclTerraform(this._effectivePersonalCompute.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WorkspaceSettingV2EffectivePersonalCompute",
      },
      effective_restrict_workspace_admins: {
        value: workspaceSettingV2EffectiveRestrictWorkspaceAdminsToHclTerraform(this._effectiveRestrictWorkspaceAdmins.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins",
      },
      effective_workspace_label: {
        value: workspaceSettingV2EffectiveWorkspaceLabelToHclTerraform(this._effectiveWorkspaceLabel.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WorkspaceSettingV2EffectiveWorkspaceLabel",
      },
      integer_val: {
        value: workspaceSettingV2IntegerValToHclTerraform(this._integerVal.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WorkspaceSettingV2IntegerVal",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      operational_email_custom_recipient: {
        value: workspaceSettingV2OperationalEmailCustomRecipientToHclTerraform(this._operationalEmailCustomRecipient.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WorkspaceSettingV2OperationalEmailCustomRecipient",
      },
      personal_compute: {
        value: workspaceSettingV2PersonalComputeToHclTerraform(this._personalCompute.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WorkspaceSettingV2PersonalCompute",
      },
      provider_config: {
        value: workspaceSettingV2ProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WorkspaceSettingV2ProviderConfig",
      },
      restrict_workspace_admins: {
        value: workspaceSettingV2RestrictWorkspaceAdminsToHclTerraform(this._restrictWorkspaceAdmins.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WorkspaceSettingV2RestrictWorkspaceAdmins",
      },
      string_val: {
        value: workspaceSettingV2StringValToHclTerraform(this._stringVal.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WorkspaceSettingV2StringVal",
      },
      workspace_dashboard_theme: {
        value: workspaceSettingV2WorkspaceDashboardThemeToHclTerraform(this._workspaceDashboardTheme.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WorkspaceSettingV2WorkspaceDashboardTheme",
      },
      workspace_label: {
        value: workspaceSettingV2WorkspaceLabelToHclTerraform(this._workspaceLabel.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WorkspaceSettingV2WorkspaceLabel",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
