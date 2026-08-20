/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_setting_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataDatabricksWorkspaceSettingV2Config extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_setting_v2#name DataDatabricksWorkspaceSettingV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_setting_v2#provider_config DataDatabricksWorkspaceSettingV2#provider_config}
  */
  readonly providerConfig?: DataDatabricksWorkspaceSettingV2ProviderConfig;
}
export interface DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_setting_v2#access_policy_type DataDatabricksWorkspaceSettingV2#access_policy_type}
  */
  readonly accessPolicyType: string;
}

export function dataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyToTerraform(struct?: DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_policy_type: cdktn.stringToTerraform(struct!.accessPolicyType),
  }
}


export function dataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy): any {
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

export class DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessPolicyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessPolicyType = this._accessPolicyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessPolicyType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessPolicyType = value.accessPolicyType;
    }
  }

  // access_policy_type - computed: true, optional: false, required: true
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
export interface DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_setting_v2#approved_domains DataDatabricksWorkspaceSettingV2#approved_domains}
  */
  readonly approvedDomains?: string[];
}

export function dataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsToTerraform(struct?: DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    approved_domains: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.approvedDomains),
  }
}


export function dataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains): any {
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

export class DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._approvedDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.approvedDomains = this._approvedDomains;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._approvedDomains = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._approvedDomains = value.approvedDomains;
    }
  }

  // approved_domains - computed: true, optional: true, required: false
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
export interface DataDatabricksWorkspaceSettingV2AllowedAppsUserApiScopes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_setting_v2#allowed_scopes DataDatabricksWorkspaceSettingV2#allowed_scopes}
  */
  readonly allowedScopes?: string[];
}

export function dataDatabricksWorkspaceSettingV2AllowedAppsUserApiScopesToTerraform(struct?: DataDatabricksWorkspaceSettingV2AllowedAppsUserApiScopes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allowed_scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedScopes),
  }
}


export function dataDatabricksWorkspaceSettingV2AllowedAppsUserApiScopesToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2AllowedAppsUserApiScopes): any {
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

export class DataDatabricksWorkspaceSettingV2AllowedAppsUserApiScopesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2AllowedAppsUserApiScopes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedScopes = this._allowedScopes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksWorkspaceSettingV2AllowedAppsUserApiScopes | undefined) {
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
export interface DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_setting_v2#forced_for_compliance_mode DataDatabricksWorkspaceSettingV2#forced_for_compliance_mode}
  */
  readonly forcedForComplianceMode?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_setting_v2#unavailable_for_disabled_entitlement DataDatabricksWorkspaceSettingV2#unavailable_for_disabled_entitlement}
  */
  readonly unavailableForDisabledEntitlement?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_setting_v2#unavailable_for_non_enterprise_tier DataDatabricksWorkspaceSettingV2#unavailable_for_non_enterprise_tier}
  */
  readonly unavailableForNonEnterpriseTier?: boolean | cdktn.IResolvable;
}

export function dataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsToTerraform(struct?: DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails | cdktn.IResolvable): any {
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


export function dataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails | cdktn.IResolvable): any {
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

export class DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails | cdktn.IResolvable | undefined) {
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

  // forced_for_compliance_mode - computed: true, optional: true, required: false
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

  // unavailable_for_disabled_entitlement - computed: true, optional: true, required: false
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

  // unavailable_for_non_enterprise_tier - computed: true, optional: true, required: false
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
export interface DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_setting_v2#hours DataDatabricksWorkspaceSettingV2#hours}
  */
  readonly hours?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_setting_v2#minutes DataDatabricksWorkspaceSettingV2#minutes}
  */
  readonly minutes?: number;
}

export function dataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeToTerraform(struct?: DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hours: cdktn.numberToTerraform(struct!.hours),
    minutes: cdktn.numberToTerraform(struct!.minutes),
  }
}


export function dataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime | cdktn.IResolvable): any {
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

export class DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime | cdktn.IResolvable | undefined) {
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

  // hours - computed: true, optional: true, required: false
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

  // minutes - computed: true, optional: true, required: false
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
export interface DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_setting_v2#day_of_week DataDatabricksWorkspaceSettingV2#day_of_week}
  */
  readonly dayOfWeek?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_setting_v2#frequency DataDatabricksWorkspaceSettingV2#frequency}
  */
  readonly frequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_setting_v2#window_start_time DataDatabricksWorkspaceSettingV2#window_start_time}
  */
  readonly windowStartTime?: DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime;
}

export function dataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleToTerraform(struct?: DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    day_of_week: cdktn.stringToTerraform(struct!.dayOfWeek),
    frequency: cdktn.stringToTerraform(struct!.frequency),
    window_start_time: dataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeToTerraform(struct!.windowStartTime),
  }
}


export function dataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule | cdktn.IResolvable): any {
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
      value: dataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeToHclTerraform(struct!.windowStartTime),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule | cdktn.IResolvable | undefined) {
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

  // day_of_week - computed: true, optional: true, required: false
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

  // frequency - computed: true, optional: true, required: false
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

  // window_start_time - computed: true, optional: true, required: false
  private _windowStartTime = new DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference(this, "window_start_time");
  public get windowStartTime() {
    return this._windowStartTime;
  }
  public putWindowStartTime(value: DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime) {
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
export interface DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_setting_v2#week_day_based_schedule DataDatabricksWorkspaceSettingV2#week_day_based_schedule}
  */
  readonly weekDayBasedSchedule?: DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule;
}

export function dataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowToTerraform(struct?: DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    week_day_based_schedule: dataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleToTerraform(struct!.weekDayBasedSchedule),
  }
}


export function dataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    week_day_based_schedule: {
      value: dataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleToHclTerraform(struct!.weekDayBasedSchedule),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow | cdktn.IResolvable | undefined) {
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

  // week_day_based_schedule - computed: true, optional: true, required: false
  private _weekDayBasedSchedule = new DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference(this, "week_day_based_schedule");
  public get weekDayBasedSchedule() {
    return this._weekDayBasedSchedule;
  }
  public putWeekDayBasedSchedule(value: DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule) {
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
export interface DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspace {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_setting_v2#can_toggle DataDatabricksWorkspaceSettingV2#can_toggle}
  */
  readonly canToggle?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_setting_v2#enabled DataDatabricksWorkspaceSettingV2#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_setting_v2#enablement_details DataDatabricksWorkspaceSettingV2#enablement_details}
  */
  readonly enablementDetails?: DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_setting_v2#maintenance_window DataDatabricksWorkspaceSettingV2#maintenance_window}
  */
  readonly maintenanceWindow?: DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_setting_v2#restart_even_if_no_updates_available DataDatabricksWorkspaceSettingV2#restart_even_if_no_updates_available}
  */
  readonly restartEvenIfNoUpdatesAvailable?: boolean | cdktn.IResolvable;
}

export function dataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceToTerraform(struct?: DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspace): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    can_toggle: cdktn.booleanToTerraform(struct!.canToggle),
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    enablement_details: dataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsToTerraform(struct!.enablementDetails),
    maintenance_window: dataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowToTerraform(struct!.maintenanceWindow),
    restart_even_if_no_updates_available: cdktn.booleanToTerraform(struct!.restartEvenIfNoUpdatesAvailable),
  }
}


export function dataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspace): any {
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
      value: dataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsToHclTerraform(struct!.enablementDetails),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails",
    },
    maintenance_window: {
      value: dataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowToHclTerraform(struct!.maintenanceWindow),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow",
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

export class DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspace | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspace | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._canToggle = undefined;
      this._enabled = undefined;
      this._enablementDetails.internalValue = undefined;
      this._maintenanceWindow.internalValue = undefined;
      this._restartEvenIfNoUpdatesAvailable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._canToggle = value.canToggle;
      this._enabled = value.enabled;
      this._enablementDetails.internalValue = value.enablementDetails;
      this._maintenanceWindow.internalValue = value.maintenanceWindow;
      this._restartEvenIfNoUpdatesAvailable = value.restartEvenIfNoUpdatesAvailable;
    }
  }

  // can_toggle - computed: true, optional: true, required: false
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

  // enabled - computed: true, optional: true, required: false
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

  // enablement_details - computed: true, optional: true, required: false
  private _enablementDetails = new DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference(this, "enablement_details");
  public get enablementDetails() {
    return this._enablementDetails;
  }
  public putEnablementDetails(value: DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails) {
    this._enablementDetails.internalValue = value;
  }
  public resetEnablementDetails() {
    this._enablementDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablementDetailsInput() {
    return this._enablementDetails.internalValue;
  }

  // maintenance_window - computed: true, optional: true, required: false
  private _maintenanceWindow = new DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference(this, "maintenance_window");
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }
  public putMaintenanceWindow(value: DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow) {
    this._maintenanceWindow.internalValue = value;
  }
  public resetMaintenanceWindow() {
    this._maintenanceWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowInput() {
    return this._maintenanceWindow.internalValue;
  }

  // restart_even_if_no_updates_available - computed: true, optional: true, required: false
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
export interface DataDatabricksWorkspaceSettingV2BooleanVal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_setting_v2#value DataDatabricksWorkspaceSettingV2#value}
  */
  readonly value?: boolean | cdktn.IResolvable;
}

export function dataDatabricksWorkspaceSettingV2BooleanValToTerraform(struct?: DataDatabricksWorkspaceSettingV2BooleanVal): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.booleanToTerraform(struct!.value),
  }
}


export function dataDatabricksWorkspaceSettingV2BooleanValToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2BooleanVal): any {
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

export class DataDatabricksWorkspaceSettingV2BooleanValOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2BooleanVal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksWorkspaceSettingV2BooleanVal | undefined) {
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
export interface DataDatabricksWorkspaceSettingV2CollaborationPlatformConnectivity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_setting_v2#connectivity DataDatabricksWorkspaceSettingV2#connectivity}
  */
  readonly connectivity: string;
}

export function dataDatabricksWorkspaceSettingV2CollaborationPlatformConnectivityToTerraform(struct?: DataDatabricksWorkspaceSettingV2CollaborationPlatformConnectivity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    connectivity: cdktn.stringToTerraform(struct!.connectivity),
  }
}


export function dataDatabricksWorkspaceSettingV2CollaborationPlatformConnectivityToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2CollaborationPlatformConnectivity): any {
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

export class DataDatabricksWorkspaceSettingV2CollaborationPlatformConnectivityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2CollaborationPlatformConnectivity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectivity !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectivity = this._connectivity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksWorkspaceSettingV2CollaborationPlatformConnectivity | undefined) {
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
export interface DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_setting_v2#access_policy_type DataDatabricksWorkspaceSettingV2#access_policy_type}
  */
  readonly accessPolicyType: string;
}

export function dataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyToTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_policy_type: cdktn.stringToTerraform(struct!.accessPolicyType),
  }
}


export function dataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy): any {
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

export class DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessPolicyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessPolicyType = this._accessPolicyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessPolicyType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessPolicyType = value.accessPolicyType;
    }
  }

  // access_policy_type - computed: true, optional: false, required: true
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
export interface DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_setting_v2#approved_domains DataDatabricksWorkspaceSettingV2#approved_domains}
  */
  readonly approvedDomains?: string[];
}

export function dataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsToTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    approved_domains: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.approvedDomains),
  }
}


export function dataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains): any {
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

export class DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._approvedDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.approvedDomains = this._approvedDomains;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._approvedDomains = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._approvedDomains = value.approvedDomains;
    }
  }

  // approved_domains - computed: true, optional: true, required: false
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
export interface DataDatabricksWorkspaceSettingV2EffectiveAllowedAppsUserApiScopes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_setting_v2#allowed_scopes DataDatabricksWorkspaceSettingV2#allowed_scopes}
  */
  readonly allowedScopes?: string[];
}

export function dataDatabricksWorkspaceSettingV2EffectiveAllowedAppsUserApiScopesToTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveAllowedAppsUserApiScopes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allowed_scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedScopes),
  }
}


export function dataDatabricksWorkspaceSettingV2EffectiveAllowedAppsUserApiScopesToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveAllowedAppsUserApiScopes): any {
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

export class DataDatabricksWorkspaceSettingV2EffectiveAllowedAppsUserApiScopesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2EffectiveAllowedAppsUserApiScopes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedScopes = this._allowedScopes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksWorkspaceSettingV2EffectiveAllowedAppsUserApiScopes | undefined) {
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
export interface DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_setting_v2#forced_for_compliance_mode DataDatabricksWorkspaceSettingV2#forced_for_compliance_mode}
  */
  readonly forcedForComplianceMode?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_setting_v2#unavailable_for_disabled_entitlement DataDatabricksWorkspaceSettingV2#unavailable_for_disabled_entitlement}
  */
  readonly unavailableForDisabledEntitlement?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_setting_v2#unavailable_for_non_enterprise_tier DataDatabricksWorkspaceSettingV2#unavailable_for_non_enterprise_tier}
  */
  readonly unavailableForNonEnterpriseTier?: boolean | cdktn.IResolvable;
}

export function dataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsToTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails | cdktn.IResolvable): any {
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


export function dataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails | cdktn.IResolvable): any {
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

export class DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails | cdktn.IResolvable | undefined) {
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

  // forced_for_compliance_mode - computed: true, optional: true, required: false
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

  // unavailable_for_disabled_entitlement - computed: true, optional: true, required: false
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

  // unavailable_for_non_enterprise_tier - computed: true, optional: true, required: false
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
export interface DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_setting_v2#hours DataDatabricksWorkspaceSettingV2#hours}
  */
  readonly hours?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_setting_v2#minutes DataDatabricksWorkspaceSettingV2#minutes}
  */
  readonly minutes?: number;
}

export function dataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeToTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hours: cdktn.numberToTerraform(struct!.hours),
    minutes: cdktn.numberToTerraform(struct!.minutes),
  }
}


export function dataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime | cdktn.IResolvable): any {
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

export class DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime | cdktn.IResolvable | undefined) {
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

  // hours - computed: true, optional: true, required: false
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

  // minutes - computed: true, optional: true, required: false
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
export interface DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_setting_v2#day_of_week DataDatabricksWorkspaceSettingV2#day_of_week}
  */
  readonly dayOfWeek?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_setting_v2#frequency DataDatabricksWorkspaceSettingV2#frequency}
  */
  readonly frequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_setting_v2#window_start_time DataDatabricksWorkspaceSettingV2#window_start_time}
  */
  readonly windowStartTime?: DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime;
}

export function dataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleToTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    day_of_week: cdktn.stringToTerraform(struct!.dayOfWeek),
    frequency: cdktn.stringToTerraform(struct!.frequency),
    window_start_time: dataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeToTerraform(struct!.windowStartTime),
  }
}


export function dataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule | cdktn.IResolvable): any {
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
      value: dataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeToHclTerraform(struct!.windowStartTime),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule | cdktn.IResolvable | undefined) {
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

  // day_of_week - computed: true, optional: true, required: false
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

  // frequency - computed: true, optional: true, required: false
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

  // window_start_time - computed: true, optional: true, required: false
  private _windowStartTime = new DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference(this, "window_start_time");
  public get windowStartTime() {
    return this._windowStartTime;
  }
  public putWindowStartTime(value: DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime) {
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
export interface DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_setting_v2#week_day_based_schedule DataDatabricksWorkspaceSettingV2#week_day_based_schedule}
  */
  readonly weekDayBasedSchedule?: DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule;
}

export function dataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowToTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    week_day_based_schedule: dataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleToTerraform(struct!.weekDayBasedSchedule),
  }
}


export function dataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    week_day_based_schedule: {
      value: dataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleToHclTerraform(struct!.weekDayBasedSchedule),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow | cdktn.IResolvable | undefined) {
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

  // week_day_based_schedule - computed: true, optional: true, required: false
  private _weekDayBasedSchedule = new DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference(this, "week_day_based_schedule");
  public get weekDayBasedSchedule() {
    return this._weekDayBasedSchedule;
  }
  public putWeekDayBasedSchedule(value: DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule) {
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
export interface DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_setting_v2#can_toggle DataDatabricksWorkspaceSettingV2#can_toggle}
  */
  readonly canToggle?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_setting_v2#enabled DataDatabricksWorkspaceSettingV2#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_setting_v2#enablement_details DataDatabricksWorkspaceSettingV2#enablement_details}
  */
  readonly enablementDetails?: DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_setting_v2#maintenance_window DataDatabricksWorkspaceSettingV2#maintenance_window}
  */
  readonly maintenanceWindow?: DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_setting_v2#restart_even_if_no_updates_available DataDatabricksWorkspaceSettingV2#restart_even_if_no_updates_available}
  */
  readonly restartEvenIfNoUpdatesAvailable?: boolean | cdktn.IResolvable;
}

export function dataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceToTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    can_toggle: cdktn.booleanToTerraform(struct!.canToggle),
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    enablement_details: dataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsToTerraform(struct!.enablementDetails),
    maintenance_window: dataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowToTerraform(struct!.maintenanceWindow),
    restart_even_if_no_updates_available: cdktn.booleanToTerraform(struct!.restartEvenIfNoUpdatesAvailable),
  }
}


export function dataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace): any {
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
      value: dataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsToHclTerraform(struct!.enablementDetails),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails",
    },
    maintenance_window: {
      value: dataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowToHclTerraform(struct!.maintenanceWindow),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow",
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

export class DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._canToggle = undefined;
      this._enabled = undefined;
      this._enablementDetails.internalValue = undefined;
      this._maintenanceWindow.internalValue = undefined;
      this._restartEvenIfNoUpdatesAvailable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._canToggle = value.canToggle;
      this._enabled = value.enabled;
      this._enablementDetails.internalValue = value.enablementDetails;
      this._maintenanceWindow.internalValue = value.maintenanceWindow;
      this._restartEvenIfNoUpdatesAvailable = value.restartEvenIfNoUpdatesAvailable;
    }
  }

  // can_toggle - computed: true, optional: true, required: false
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

  // enabled - computed: true, optional: true, required: false
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

  // enablement_details - computed: true, optional: true, required: false
  private _enablementDetails = new DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference(this, "enablement_details");
  public get enablementDetails() {
    return this._enablementDetails;
  }
  public putEnablementDetails(value: DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails) {
    this._enablementDetails.internalValue = value;
  }
  public resetEnablementDetails() {
    this._enablementDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablementDetailsInput() {
    return this._enablementDetails.internalValue;
  }

  // maintenance_window - computed: true, optional: true, required: false
  private _maintenanceWindow = new DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference(this, "maintenance_window");
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }
  public putMaintenanceWindow(value: DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow) {
    this._maintenanceWindow.internalValue = value;
  }
  public resetMaintenanceWindow() {
    this._maintenanceWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowInput() {
    return this._maintenanceWindow.internalValue;
  }

  // restart_even_if_no_updates_available - computed: true, optional: true, required: false
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
export interface DataDatabricksWorkspaceSettingV2EffectiveBooleanVal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_setting_v2#value DataDatabricksWorkspaceSettingV2#value}
  */
  readonly value?: boolean | cdktn.IResolvable;
}

export function dataDatabricksWorkspaceSettingV2EffectiveBooleanValToTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveBooleanVal): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.booleanToTerraform(struct!.value),
  }
}


export function dataDatabricksWorkspaceSettingV2EffectiveBooleanValToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveBooleanVal): any {
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

export class DataDatabricksWorkspaceSettingV2EffectiveBooleanValOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2EffectiveBooleanVal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksWorkspaceSettingV2EffectiveBooleanVal | undefined) {
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
export interface DataDatabricksWorkspaceSettingV2EffectiveCollaborationPlatformConnectivity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_setting_v2#connectivity DataDatabricksWorkspaceSettingV2#connectivity}
  */
  readonly connectivity: string;
}

export function dataDatabricksWorkspaceSettingV2EffectiveCollaborationPlatformConnectivityToTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveCollaborationPlatformConnectivity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    connectivity: cdktn.stringToTerraform(struct!.connectivity),
  }
}


export function dataDatabricksWorkspaceSettingV2EffectiveCollaborationPlatformConnectivityToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveCollaborationPlatformConnectivity): any {
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

export class DataDatabricksWorkspaceSettingV2EffectiveCollaborationPlatformConnectivityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2EffectiveCollaborationPlatformConnectivity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectivity !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectivity = this._connectivity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksWorkspaceSettingV2EffectiveCollaborationPlatformConnectivity | undefined) {
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
export interface DataDatabricksWorkspaceSettingV2EffectiveIntegerVal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_setting_v2#value DataDatabricksWorkspaceSettingV2#value}
  */
  readonly value?: number;
}

export function dataDatabricksWorkspaceSettingV2EffectiveIntegerValToTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveIntegerVal): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function dataDatabricksWorkspaceSettingV2EffectiveIntegerValToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveIntegerVal): any {
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

export class DataDatabricksWorkspaceSettingV2EffectiveIntegerValOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2EffectiveIntegerVal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksWorkspaceSettingV2EffectiveIntegerVal | undefined) {
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
export interface DataDatabricksWorkspaceSettingV2EffectiveOperationalEmailCustomRecipient {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_setting_v2#email DataDatabricksWorkspaceSettingV2#email}
  */
  readonly email?: string;
}

export function dataDatabricksWorkspaceSettingV2EffectiveOperationalEmailCustomRecipientToTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveOperationalEmailCustomRecipient): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    email: cdktn.stringToTerraform(struct!.email),
  }
}


export function dataDatabricksWorkspaceSettingV2EffectiveOperationalEmailCustomRecipientToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveOperationalEmailCustomRecipient): any {
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

export class DataDatabricksWorkspaceSettingV2EffectiveOperationalEmailCustomRecipientOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2EffectiveOperationalEmailCustomRecipient | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksWorkspaceSettingV2EffectiveOperationalEmailCustomRecipient | undefined) {
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
export interface DataDatabricksWorkspaceSettingV2EffectivePersonalCompute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_setting_v2#value DataDatabricksWorkspaceSettingV2#value}
  */
  readonly value?: string;
}

export function dataDatabricksWorkspaceSettingV2EffectivePersonalComputeToTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectivePersonalCompute): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function dataDatabricksWorkspaceSettingV2EffectivePersonalComputeToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectivePersonalCompute): any {
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

export class DataDatabricksWorkspaceSettingV2EffectivePersonalComputeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2EffectivePersonalCompute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksWorkspaceSettingV2EffectivePersonalCompute | undefined) {
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
export interface DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdmins {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_setting_v2#disable_gov_tag_creation DataDatabricksWorkspaceSettingV2#disable_gov_tag_creation}
  */
  readonly disableGovTagCreation?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_setting_v2#status DataDatabricksWorkspaceSettingV2#status}
  */
  readonly status: string;
}

export function dataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdminsToTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdmins): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    disable_gov_tag_creation: cdktn.booleanToTerraform(struct!.disableGovTagCreation),
    status: cdktn.stringToTerraform(struct!.status),
  }
}


export function dataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdminsToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdmins): any {
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

export class DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdmins | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdmins | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableGovTagCreation = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableGovTagCreation = value.disableGovTagCreation;
      this._status = value.status;
    }
  }

  // disable_gov_tag_creation - computed: true, optional: true, required: false
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

  // status - computed: true, optional: false, required: true
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
export interface DataDatabricksWorkspaceSettingV2EffectiveStringVal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_setting_v2#value DataDatabricksWorkspaceSettingV2#value}
  */
  readonly value?: string;
}

export function dataDatabricksWorkspaceSettingV2EffectiveStringValToTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveStringVal): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function dataDatabricksWorkspaceSettingV2EffectiveStringValToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveStringVal): any {
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

export class DataDatabricksWorkspaceSettingV2EffectiveStringValOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2EffectiveStringVal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksWorkspaceSettingV2EffectiveStringVal | undefined) {
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
export interface DataDatabricksWorkspaceSettingV2IntegerVal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_setting_v2#value DataDatabricksWorkspaceSettingV2#value}
  */
  readonly value?: number;
}

export function dataDatabricksWorkspaceSettingV2IntegerValToTerraform(struct?: DataDatabricksWorkspaceSettingV2IntegerVal): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function dataDatabricksWorkspaceSettingV2IntegerValToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2IntegerVal): any {
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

export class DataDatabricksWorkspaceSettingV2IntegerValOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2IntegerVal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksWorkspaceSettingV2IntegerVal | undefined) {
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
export interface DataDatabricksWorkspaceSettingV2OperationalEmailCustomRecipient {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_setting_v2#email DataDatabricksWorkspaceSettingV2#email}
  */
  readonly email?: string;
}

export function dataDatabricksWorkspaceSettingV2OperationalEmailCustomRecipientToTerraform(struct?: DataDatabricksWorkspaceSettingV2OperationalEmailCustomRecipient): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    email: cdktn.stringToTerraform(struct!.email),
  }
}


export function dataDatabricksWorkspaceSettingV2OperationalEmailCustomRecipientToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2OperationalEmailCustomRecipient): any {
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

export class DataDatabricksWorkspaceSettingV2OperationalEmailCustomRecipientOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2OperationalEmailCustomRecipient | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksWorkspaceSettingV2OperationalEmailCustomRecipient | undefined) {
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
export interface DataDatabricksWorkspaceSettingV2PersonalCompute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_setting_v2#value DataDatabricksWorkspaceSettingV2#value}
  */
  readonly value?: string;
}

export function dataDatabricksWorkspaceSettingV2PersonalComputeToTerraform(struct?: DataDatabricksWorkspaceSettingV2PersonalCompute): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function dataDatabricksWorkspaceSettingV2PersonalComputeToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2PersonalCompute): any {
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

export class DataDatabricksWorkspaceSettingV2PersonalComputeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2PersonalCompute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksWorkspaceSettingV2PersonalCompute | undefined) {
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
export interface DataDatabricksWorkspaceSettingV2ProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_setting_v2#workspace_id DataDatabricksWorkspaceSettingV2#workspace_id}
  */
  readonly workspaceId?: string;
}

export function dataDatabricksWorkspaceSettingV2ProviderConfigToTerraform(struct?: DataDatabricksWorkspaceSettingV2ProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function dataDatabricksWorkspaceSettingV2ProviderConfigToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2ProviderConfig | cdktn.IResolvable): any {
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

export class DataDatabricksWorkspaceSettingV2ProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2ProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2ProviderConfig | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdmins {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_setting_v2#disable_gov_tag_creation DataDatabricksWorkspaceSettingV2#disable_gov_tag_creation}
  */
  readonly disableGovTagCreation?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_setting_v2#status DataDatabricksWorkspaceSettingV2#status}
  */
  readonly status: string;
}

export function dataDatabricksWorkspaceSettingV2RestrictWorkspaceAdminsToTerraform(struct?: DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdmins): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    disable_gov_tag_creation: cdktn.booleanToTerraform(struct!.disableGovTagCreation),
    status: cdktn.stringToTerraform(struct!.status),
  }
}


export function dataDatabricksWorkspaceSettingV2RestrictWorkspaceAdminsToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdmins): any {
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

export class DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdminsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdmins | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdmins | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableGovTagCreation = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableGovTagCreation = value.disableGovTagCreation;
      this._status = value.status;
    }
  }

  // disable_gov_tag_creation - computed: true, optional: true, required: false
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

  // status - computed: true, optional: false, required: true
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
export interface DataDatabricksWorkspaceSettingV2StringVal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_setting_v2#value DataDatabricksWorkspaceSettingV2#value}
  */
  readonly value?: string;
}

export function dataDatabricksWorkspaceSettingV2StringValToTerraform(struct?: DataDatabricksWorkspaceSettingV2StringVal): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function dataDatabricksWorkspaceSettingV2StringValToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2StringVal): any {
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

export class DataDatabricksWorkspaceSettingV2StringValOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2StringVal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksWorkspaceSettingV2StringVal | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_setting_v2 databricks_workspace_setting_v2}
*/
export class DataDatabricksWorkspaceSettingV2 extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_workspace_setting_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataDatabricksWorkspaceSettingV2 resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksWorkspaceSettingV2 to import
  * @param importFromId The id of the existing DataDatabricksWorkspaceSettingV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_setting_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksWorkspaceSettingV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_workspace_setting_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_setting_v2 databricks_workspace_setting_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksWorkspaceSettingV2Config
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksWorkspaceSettingV2Config) {
    super(scope, id, {
      terraformResourceType: 'databricks_workspace_setting_v2',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.128.0',
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
    this._name = config.name;
    this._providerConfig.internalValue = config.providerConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aibi_dashboard_embedding_access_policy - computed: true, optional: false, required: false
  private _aibiDashboardEmbeddingAccessPolicy = new DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference(this, "aibi_dashboard_embedding_access_policy");
  public get aibiDashboardEmbeddingAccessPolicy() {
    return this._aibiDashboardEmbeddingAccessPolicy;
  }

  // aibi_dashboard_embedding_approved_domains - computed: true, optional: false, required: false
  private _aibiDashboardEmbeddingApprovedDomains = new DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference(this, "aibi_dashboard_embedding_approved_domains");
  public get aibiDashboardEmbeddingApprovedDomains() {
    return this._aibiDashboardEmbeddingApprovedDomains;
  }

  // allowed_apps_user_api_scopes - computed: true, optional: false, required: false
  private _allowedAppsUserApiScopes = new DataDatabricksWorkspaceSettingV2AllowedAppsUserApiScopesOutputReference(this, "allowed_apps_user_api_scopes");
  public get allowedAppsUserApiScopes() {
    return this._allowedAppsUserApiScopes;
  }

  // automatic_cluster_update_workspace - computed: true, optional: false, required: false
  private _automaticClusterUpdateWorkspace = new DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference(this, "automatic_cluster_update_workspace");
  public get automaticClusterUpdateWorkspace() {
    return this._automaticClusterUpdateWorkspace;
  }

  // boolean_val - computed: true, optional: false, required: false
  private _booleanVal = new DataDatabricksWorkspaceSettingV2BooleanValOutputReference(this, "boolean_val");
  public get booleanVal() {
    return this._booleanVal;
  }

  // collaboration_platform_connectivity - computed: true, optional: false, required: false
  private _collaborationPlatformConnectivity = new DataDatabricksWorkspaceSettingV2CollaborationPlatformConnectivityOutputReference(this, "collaboration_platform_connectivity");
  public get collaborationPlatformConnectivity() {
    return this._collaborationPlatformConnectivity;
  }

  // effective_aibi_dashboard_embedding_access_policy - computed: true, optional: false, required: false
  private _effectiveAibiDashboardEmbeddingAccessPolicy = new DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference(this, "effective_aibi_dashboard_embedding_access_policy");
  public get effectiveAibiDashboardEmbeddingAccessPolicy() {
    return this._effectiveAibiDashboardEmbeddingAccessPolicy;
  }

  // effective_aibi_dashboard_embedding_approved_domains - computed: true, optional: false, required: false
  private _effectiveAibiDashboardEmbeddingApprovedDomains = new DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference(this, "effective_aibi_dashboard_embedding_approved_domains");
  public get effectiveAibiDashboardEmbeddingApprovedDomains() {
    return this._effectiveAibiDashboardEmbeddingApprovedDomains;
  }

  // effective_allowed_apps_user_api_scopes - computed: true, optional: false, required: false
  private _effectiveAllowedAppsUserApiScopes = new DataDatabricksWorkspaceSettingV2EffectiveAllowedAppsUserApiScopesOutputReference(this, "effective_allowed_apps_user_api_scopes");
  public get effectiveAllowedAppsUserApiScopes() {
    return this._effectiveAllowedAppsUserApiScopes;
  }

  // effective_automatic_cluster_update_workspace - computed: true, optional: false, required: false
  private _effectiveAutomaticClusterUpdateWorkspace = new DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference(this, "effective_automatic_cluster_update_workspace");
  public get effectiveAutomaticClusterUpdateWorkspace() {
    return this._effectiveAutomaticClusterUpdateWorkspace;
  }

  // effective_boolean_val - computed: true, optional: false, required: false
  private _effectiveBooleanVal = new DataDatabricksWorkspaceSettingV2EffectiveBooleanValOutputReference(this, "effective_boolean_val");
  public get effectiveBooleanVal() {
    return this._effectiveBooleanVal;
  }

  // effective_collaboration_platform_connectivity - computed: true, optional: false, required: false
  private _effectiveCollaborationPlatformConnectivity = new DataDatabricksWorkspaceSettingV2EffectiveCollaborationPlatformConnectivityOutputReference(this, "effective_collaboration_platform_connectivity");
  public get effectiveCollaborationPlatformConnectivity() {
    return this._effectiveCollaborationPlatformConnectivity;
  }

  // effective_integer_val - computed: true, optional: false, required: false
  private _effectiveIntegerVal = new DataDatabricksWorkspaceSettingV2EffectiveIntegerValOutputReference(this, "effective_integer_val");
  public get effectiveIntegerVal() {
    return this._effectiveIntegerVal;
  }

  // effective_operational_email_custom_recipient - computed: true, optional: false, required: false
  private _effectiveOperationalEmailCustomRecipient = new DataDatabricksWorkspaceSettingV2EffectiveOperationalEmailCustomRecipientOutputReference(this, "effective_operational_email_custom_recipient");
  public get effectiveOperationalEmailCustomRecipient() {
    return this._effectiveOperationalEmailCustomRecipient;
  }

  // effective_personal_compute - computed: true, optional: false, required: false
  private _effectivePersonalCompute = new DataDatabricksWorkspaceSettingV2EffectivePersonalComputeOutputReference(this, "effective_personal_compute");
  public get effectivePersonalCompute() {
    return this._effectivePersonalCompute;
  }

  // effective_restrict_workspace_admins - computed: true, optional: false, required: false
  private _effectiveRestrictWorkspaceAdmins = new DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference(this, "effective_restrict_workspace_admins");
  public get effectiveRestrictWorkspaceAdmins() {
    return this._effectiveRestrictWorkspaceAdmins;
  }

  // effective_string_val - computed: true, optional: false, required: false
  private _effectiveStringVal = new DataDatabricksWorkspaceSettingV2EffectiveStringValOutputReference(this, "effective_string_val");
  public get effectiveStringVal() {
    return this._effectiveStringVal;
  }

  // integer_val - computed: true, optional: false, required: false
  private _integerVal = new DataDatabricksWorkspaceSettingV2IntegerValOutputReference(this, "integer_val");
  public get integerVal() {
    return this._integerVal;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // operational_email_custom_recipient - computed: true, optional: false, required: false
  private _operationalEmailCustomRecipient = new DataDatabricksWorkspaceSettingV2OperationalEmailCustomRecipientOutputReference(this, "operational_email_custom_recipient");
  public get operationalEmailCustomRecipient() {
    return this._operationalEmailCustomRecipient;
  }

  // personal_compute - computed: true, optional: false, required: false
  private _personalCompute = new DataDatabricksWorkspaceSettingV2PersonalComputeOutputReference(this, "personal_compute");
  public get personalCompute() {
    return this._personalCompute;
  }

  // provider_config - computed: false, optional: true, required: false
  private _providerConfig = new DataDatabricksWorkspaceSettingV2ProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataDatabricksWorkspaceSettingV2ProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // restrict_workspace_admins - computed: true, optional: false, required: false
  private _restrictWorkspaceAdmins = new DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdminsOutputReference(this, "restrict_workspace_admins");
  public get restrictWorkspaceAdmins() {
    return this._restrictWorkspaceAdmins;
  }

  // string_val - computed: true, optional: false, required: false
  private _stringVal = new DataDatabricksWorkspaceSettingV2StringValOutputReference(this, "string_val");
  public get stringVal() {
    return this._stringVal;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktn.stringToTerraform(this._name),
      provider_config: dataDatabricksWorkspaceSettingV2ProviderConfigToTerraform(this._providerConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_config: {
        value: dataDatabricksWorkspaceSettingV2ProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataDatabricksWorkspaceSettingV2ProviderConfig",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
