/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataDatabricksWorkspaceSettingV2Config extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#name DataDatabricksWorkspaceSettingV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#provider_config DataDatabricksWorkspaceSettingV2#provider_config}
  */
  readonly providerConfig?: DataDatabricksWorkspaceSettingV2ProviderConfig;
}
export interface DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#access_policy_type DataDatabricksWorkspaceSettingV2#access_policy_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#approved_domains DataDatabricksWorkspaceSettingV2#approved_domains}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#allowed_scopes DataDatabricksWorkspaceSettingV2#allowed_scopes}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#forced_for_compliance_mode DataDatabricksWorkspaceSettingV2#forced_for_compliance_mode}
  */
  readonly forcedForComplianceMode?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#unavailable_for_disabled_entitlement DataDatabricksWorkspaceSettingV2#unavailable_for_disabled_entitlement}
  */
  readonly unavailableForDisabledEntitlement?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#unavailable_for_non_enterprise_tier DataDatabricksWorkspaceSettingV2#unavailable_for_non_enterprise_tier}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#hours DataDatabricksWorkspaceSettingV2#hours}
  */
  readonly hours?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#minutes DataDatabricksWorkspaceSettingV2#minutes}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#day_of_week DataDatabricksWorkspaceSettingV2#day_of_week}
  */
  readonly dayOfWeek?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#frequency DataDatabricksWorkspaceSettingV2#frequency}
  */
  readonly frequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#window_start_time DataDatabricksWorkspaceSettingV2#window_start_time}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#week_day_based_schedule DataDatabricksWorkspaceSettingV2#week_day_based_schedule}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#can_toggle DataDatabricksWorkspaceSettingV2#can_toggle}
  */
  readonly canToggle?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#enabled DataDatabricksWorkspaceSettingV2#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#enablement_details DataDatabricksWorkspaceSettingV2#enablement_details}
  */
  readonly enablementDetails?: DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#maintenance_window DataDatabricksWorkspaceSettingV2#maintenance_window}
  */
  readonly maintenanceWindow?: DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#restart_even_if_no_updates_available DataDatabricksWorkspaceSettingV2#restart_even_if_no_updates_available}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#value DataDatabricksWorkspaceSettingV2#value}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#connectivity DataDatabricksWorkspaceSettingV2#connectivity}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#access_policy_type DataDatabricksWorkspaceSettingV2#access_policy_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#approved_domains DataDatabricksWorkspaceSettingV2#approved_domains}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#allowed_scopes DataDatabricksWorkspaceSettingV2#allowed_scopes}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#forced_for_compliance_mode DataDatabricksWorkspaceSettingV2#forced_for_compliance_mode}
  */
  readonly forcedForComplianceMode?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#unavailable_for_disabled_entitlement DataDatabricksWorkspaceSettingV2#unavailable_for_disabled_entitlement}
  */
  readonly unavailableForDisabledEntitlement?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#unavailable_for_non_enterprise_tier DataDatabricksWorkspaceSettingV2#unavailable_for_non_enterprise_tier}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#hours DataDatabricksWorkspaceSettingV2#hours}
  */
  readonly hours?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#minutes DataDatabricksWorkspaceSettingV2#minutes}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#day_of_week DataDatabricksWorkspaceSettingV2#day_of_week}
  */
  readonly dayOfWeek?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#frequency DataDatabricksWorkspaceSettingV2#frequency}
  */
  readonly frequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#window_start_time DataDatabricksWorkspaceSettingV2#window_start_time}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#week_day_based_schedule DataDatabricksWorkspaceSettingV2#week_day_based_schedule}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#can_toggle DataDatabricksWorkspaceSettingV2#can_toggle}
  */
  readonly canToggle?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#enabled DataDatabricksWorkspaceSettingV2#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#enablement_details DataDatabricksWorkspaceSettingV2#enablement_details}
  */
  readonly enablementDetails?: DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#maintenance_window DataDatabricksWorkspaceSettingV2#maintenance_window}
  */
  readonly maintenanceWindow?: DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#restart_even_if_no_updates_available DataDatabricksWorkspaceSettingV2#restart_even_if_no_updates_available}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#value DataDatabricksWorkspaceSettingV2#value}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#connectivity DataDatabricksWorkspaceSettingV2#connectivity}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#value DataDatabricksWorkspaceSettingV2#value}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#email DataDatabricksWorkspaceSettingV2#email}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#value DataDatabricksWorkspaceSettingV2#value}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#disable_gov_tag_creation DataDatabricksWorkspaceSettingV2#disable_gov_tag_creation}
  */
  readonly disableGovTagCreation?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#status DataDatabricksWorkspaceSettingV2#status}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#value DataDatabricksWorkspaceSettingV2#value}
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
export interface DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeAxisLineColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#dark DataDatabricksWorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#light DataDatabricksWorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeAxisLineColorToTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeAxisLineColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeAxisLineColorToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeAxisLineColor | cdktn.IResolvable): any {
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

export class DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeAxisLineColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeAxisLineColor | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeAxisLineColor | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeCanvasBackgroundColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#dark DataDatabricksWorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#light DataDatabricksWorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeCanvasBackgroundColorToTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeCanvasBackgroundColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeCanvasBackgroundColorToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeCanvasBackgroundColor | cdktn.IResolvable): any {
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

export class DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeCanvasBackgroundColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeCanvasBackgroundColor | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeCanvasBackgroundColor | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEnd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#dark DataDatabricksWorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#light DataDatabricksWorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEndToTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEnd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEndToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEnd | cdktn.IResolvable): any {
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

export class DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEndOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEnd | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEnd | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMid {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#dark DataDatabricksWorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#light DataDatabricksWorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMidToTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMid | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMidToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMid | cdktn.IResolvable): any {
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

export class DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMidOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMid | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMid | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStart {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#dark DataDatabricksWorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#light DataDatabricksWorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStartToTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStart | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStartToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStart | cdktn.IResolvable): any {
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

export class DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStartOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStart | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStart | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDiverging {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#end DataDatabricksWorkspaceSettingV2#end}
  */
  readonly end?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEnd;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#mid DataDatabricksWorkspaceSettingV2#mid}
  */
  readonly mid?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMid;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#start DataDatabricksWorkspaceSettingV2#start}
  */
  readonly start?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStart;
}

export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingToTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDiverging | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEndToTerraform(struct!.end),
    mid: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMidToTerraform(struct!.mid),
    start: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStartToTerraform(struct!.start),
  }
}


export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDiverging | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end: {
      value: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEndToHclTerraform(struct!.end),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEnd",
    },
    mid: {
      value: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMidToHclTerraform(struct!.mid),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMid",
    },
    start: {
      value: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStartToHclTerraform(struct!.start),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStart",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDiverging | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDiverging | cdktn.IResolvable | undefined) {
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
  private _end = new DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEndOutputReference(this, "end");
  public get end() {
    return this._end;
  }
  public putEnd(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEnd) {
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
  private _mid = new DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMidOutputReference(this, "mid");
  public get mid() {
    return this._mid;
  }
  public putMid(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMid) {
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
  private _start = new DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStartOutputReference(this, "start");
  public get start() {
    return this._start;
  }
  public putStart(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStart) {
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
export interface DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEnd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#dark DataDatabricksWorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#light DataDatabricksWorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEndToTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEnd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEndToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEnd | cdktn.IResolvable): any {
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

export class DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEndOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEnd | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEnd | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStart {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#dark DataDatabricksWorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#light DataDatabricksWorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStartToTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStart | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStartToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStart | cdktn.IResolvable): any {
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

export class DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStartOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStart | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStart | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequential {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#end DataDatabricksWorkspaceSettingV2#end}
  */
  readonly end?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEnd;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#start DataDatabricksWorkspaceSettingV2#start}
  */
  readonly start?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStart;
}

export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialToTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequential | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEndToTerraform(struct!.end),
    start: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStartToTerraform(struct!.start),
  }
}


export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequential | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end: {
      value: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEndToHclTerraform(struct!.end),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEnd",
    },
    start: {
      value: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStartToHclTerraform(struct!.start),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStart",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequential | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequential | cdktn.IResolvable | undefined) {
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
  private _end = new DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEndOutputReference(this, "end");
  public get end() {
    return this._end;
  }
  public putEnd(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEnd) {
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
  private _start = new DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStartOutputReference(this, "start");
  public get start() {
    return this._start;
  }
  public putStart(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStart) {
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
export interface DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkMode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#color DataDatabricksWorkspaceSettingV2#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#color_scheme DataDatabricksWorkspaceSettingV2#color_scheme}
  */
  readonly colorScheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#custom_diverging DataDatabricksWorkspaceSettingV2#custom_diverging}
  */
  readonly customDiverging?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDiverging;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#custom_sequential DataDatabricksWorkspaceSettingV2#custom_sequential}
  */
  readonly customSequential?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequential;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#from_categorical_index DataDatabricksWorkspaceSettingV2#from_categorical_index}
  */
  readonly fromCategoricalIndex?: number;
}

export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeToTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkMode | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    color: cdktn.stringToTerraform(struct!.color),
    color_scheme: cdktn.stringToTerraform(struct!.colorScheme),
    custom_diverging: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingToTerraform(struct!.customDiverging),
    custom_sequential: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialToTerraform(struct!.customSequential),
    from_categorical_index: cdktn.numberToTerraform(struct!.fromCategoricalIndex),
  }
}


export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkMode | cdktn.IResolvable): any {
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
      value: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingToHclTerraform(struct!.customDiverging),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDiverging",
    },
    custom_sequential: {
      value: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialToHclTerraform(struct!.customSequential),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequential",
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

export class DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkMode | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkMode | cdktn.IResolvable | undefined) {
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
  private _customDiverging = new DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingOutputReference(this, "custom_diverging");
  public get customDiverging() {
    return this._customDiverging;
  }
  public putCustomDiverging(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDiverging) {
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
  private _customSequential = new DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialOutputReference(this, "custom_sequential");
  public get customSequential() {
    return this._customSequential;
  }
  public putCustomSequential(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequential) {
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
export interface DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEnd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#dark DataDatabricksWorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#light DataDatabricksWorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEndToTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEnd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEndToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEnd | cdktn.IResolvable): any {
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

export class DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEndOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEnd | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEnd | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMid {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#dark DataDatabricksWorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#light DataDatabricksWorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMidToTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMid | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMidToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMid | cdktn.IResolvable): any {
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

export class DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMidOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMid | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMid | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStart {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#dark DataDatabricksWorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#light DataDatabricksWorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStartToTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStart | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStartToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStart | cdktn.IResolvable): any {
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

export class DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStartOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStart | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStart | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDiverging {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#end DataDatabricksWorkspaceSettingV2#end}
  */
  readonly end?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEnd;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#mid DataDatabricksWorkspaceSettingV2#mid}
  */
  readonly mid?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMid;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#start DataDatabricksWorkspaceSettingV2#start}
  */
  readonly start?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStart;
}

export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingToTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDiverging | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEndToTerraform(struct!.end),
    mid: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMidToTerraform(struct!.mid),
    start: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStartToTerraform(struct!.start),
  }
}


export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDiverging | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end: {
      value: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEndToHclTerraform(struct!.end),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEnd",
    },
    mid: {
      value: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMidToHclTerraform(struct!.mid),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMid",
    },
    start: {
      value: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStartToHclTerraform(struct!.start),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStart",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDiverging | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDiverging | cdktn.IResolvable | undefined) {
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
  private _end = new DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEndOutputReference(this, "end");
  public get end() {
    return this._end;
  }
  public putEnd(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEnd) {
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
  private _mid = new DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMidOutputReference(this, "mid");
  public get mid() {
    return this._mid;
  }
  public putMid(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMid) {
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
  private _start = new DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStartOutputReference(this, "start");
  public get start() {
    return this._start;
  }
  public putStart(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStart) {
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
export interface DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEnd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#dark DataDatabricksWorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#light DataDatabricksWorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEndToTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEnd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEndToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEnd | cdktn.IResolvable): any {
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

export class DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEndOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEnd | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEnd | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStart {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#dark DataDatabricksWorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#light DataDatabricksWorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStartToTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStart | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStartToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStart | cdktn.IResolvable): any {
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

export class DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStartOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStart | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStart | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequential {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#end DataDatabricksWorkspaceSettingV2#end}
  */
  readonly end?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEnd;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#start DataDatabricksWorkspaceSettingV2#start}
  */
  readonly start?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStart;
}

export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialToTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequential | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEndToTerraform(struct!.end),
    start: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStartToTerraform(struct!.start),
  }
}


export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequential | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end: {
      value: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEndToHclTerraform(struct!.end),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEnd",
    },
    start: {
      value: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStartToHclTerraform(struct!.start),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStart",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequential | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequential | cdktn.IResolvable | undefined) {
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
  private _end = new DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEndOutputReference(this, "end");
  public get end() {
    return this._end;
  }
  public putEnd(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEnd) {
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
  private _start = new DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStartOutputReference(this, "start");
  public get start() {
    return this._start;
  }
  public putStart(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStart) {
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
export interface DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightMode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#color DataDatabricksWorkspaceSettingV2#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#color_scheme DataDatabricksWorkspaceSettingV2#color_scheme}
  */
  readonly colorScheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#custom_diverging DataDatabricksWorkspaceSettingV2#custom_diverging}
  */
  readonly customDiverging?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDiverging;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#custom_sequential DataDatabricksWorkspaceSettingV2#custom_sequential}
  */
  readonly customSequential?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequential;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#from_categorical_index DataDatabricksWorkspaceSettingV2#from_categorical_index}
  */
  readonly fromCategoricalIndex?: number;
}

export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeToTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightMode | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    color: cdktn.stringToTerraform(struct!.color),
    color_scheme: cdktn.stringToTerraform(struct!.colorScheme),
    custom_diverging: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingToTerraform(struct!.customDiverging),
    custom_sequential: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialToTerraform(struct!.customSequential),
    from_categorical_index: cdktn.numberToTerraform(struct!.fromCategoricalIndex),
  }
}


export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightMode | cdktn.IResolvable): any {
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
      value: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingToHclTerraform(struct!.customDiverging),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDiverging",
    },
    custom_sequential: {
      value: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialToHclTerraform(struct!.customSequential),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequential",
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

export class DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightMode | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightMode | cdktn.IResolvable | undefined) {
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
  private _customDiverging = new DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingOutputReference(this, "custom_diverging");
  public get customDiverging() {
    return this._customDiverging;
  }
  public putCustomDiverging(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDiverging) {
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
  private _customSequential = new DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialOutputReference(this, "custom_sequential");
  public get customSequential() {
    return this._customSequential;
  }
  public putCustomSequential(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequential) {
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
export interface DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradient {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#dark_mode DataDatabricksWorkspaceSettingV2#dark_mode}
  */
  readonly darkMode?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkMode;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#light_mode DataDatabricksWorkspaceSettingV2#light_mode}
  */
  readonly lightMode?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightMode;
}

export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientToTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradient | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark_mode: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeToTerraform(struct!.darkMode),
    light_mode: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeToTerraform(struct!.lightMode),
  }
}


export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradient | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dark_mode: {
      value: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeToHclTerraform(struct!.darkMode),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkMode",
    },
    light_mode: {
      value: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeToHclTerraform(struct!.lightMode),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightMode",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradient | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradient | cdktn.IResolvable | undefined) {
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
  private _darkMode = new DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeOutputReference(this, "dark_mode");
  public get darkMode() {
    return this._darkMode;
  }
  public putDarkMode(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkMode) {
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
  private _lightMode = new DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeOutputReference(this, "light_mode");
  public get lightMode() {
    return this._lightMode;
  }
  public putLightMode(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightMode) {
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
export interface DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#dark DataDatabricksWorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#light DataDatabricksWorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontColorToTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontColorToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontColor | cdktn.IResolvable): any {
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

export class DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontColor | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontColor | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseFontColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#dark DataDatabricksWorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#light DataDatabricksWorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseFontColorToTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseFontColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseFontColorToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseFontColor | cdktn.IResolvable): any {
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

export class DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseFontColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseFontColor | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseFontColor | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBase {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#font_color DataDatabricksWorkspaceSettingV2#font_color}
  */
  readonly fontColor?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseFontColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#font_family DataDatabricksWorkspaceSettingV2#font_family}
  */
  readonly fontFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#font_size DataDatabricksWorkspaceSettingV2#font_size}
  */
  readonly fontSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#font_style DataDatabricksWorkspaceSettingV2#font_style}
  */
  readonly fontStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#font_weight DataDatabricksWorkspaceSettingV2#font_weight}
  */
  readonly fontWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#text_case DataDatabricksWorkspaceSettingV2#text_case}
  */
  readonly textCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#text_decoration DataDatabricksWorkspaceSettingV2#text_decoration}
  */
  readonly textDecoration?: string;
}

export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseToTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBase | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    font_color: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseFontColorToTerraform(struct!.fontColor),
    font_family: cdktn.stringToTerraform(struct!.fontFamily),
    font_size: cdktn.numberToTerraform(struct!.fontSize),
    font_style: cdktn.stringToTerraform(struct!.fontStyle),
    font_weight: cdktn.numberToTerraform(struct!.fontWeight),
    text_case: cdktn.stringToTerraform(struct!.textCase),
    text_decoration: cdktn.stringToTerraform(struct!.textDecoration),
  }
}


export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBase | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    font_color: {
      value: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseFontColorToHclTerraform(struct!.fontColor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseFontColor",
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

export class DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBase | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBase | cdktn.IResolvable | undefined) {
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
  private _fontColor = new DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseFontColorOutputReference(this, "font_color");
  public get fontColor() {
    return this._fontColor;
  }
  public putFontColor(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseFontColor) {
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
export interface DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleFontColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#dark DataDatabricksWorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#light DataDatabricksWorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleFontColorToTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleFontColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleFontColorToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleFontColor | cdktn.IResolvable): any {
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

export class DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleFontColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleFontColor | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleFontColor | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#font_color DataDatabricksWorkspaceSettingV2#font_color}
  */
  readonly fontColor?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleFontColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#font_family DataDatabricksWorkspaceSettingV2#font_family}
  */
  readonly fontFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#font_size DataDatabricksWorkspaceSettingV2#font_size}
  */
  readonly fontSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#font_style DataDatabricksWorkspaceSettingV2#font_style}
  */
  readonly fontStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#font_weight DataDatabricksWorkspaceSettingV2#font_weight}
  */
  readonly fontWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#text_case DataDatabricksWorkspaceSettingV2#text_case}
  */
  readonly textCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#text_decoration DataDatabricksWorkspaceSettingV2#text_decoration}
  */
  readonly textDecoration?: string;
}

export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleToTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitle | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    font_color: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleFontColorToTerraform(struct!.fontColor),
    font_family: cdktn.stringToTerraform(struct!.fontFamily),
    font_size: cdktn.numberToTerraform(struct!.fontSize),
    font_style: cdktn.stringToTerraform(struct!.fontStyle),
    font_weight: cdktn.numberToTerraform(struct!.fontWeight),
    text_case: cdktn.stringToTerraform(struct!.textCase),
    text_decoration: cdktn.stringToTerraform(struct!.textDecoration),
  }
}


export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitle | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    font_color: {
      value: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleFontColorToHclTerraform(struct!.fontColor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleFontColor",
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

export class DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitle | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitle | cdktn.IResolvable | undefined) {
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
  private _fontColor = new DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleFontColorOutputReference(this, "font_color");
  public get fontColor() {
    return this._fontColor;
  }
  public putFontColor(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleFontColor) {
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
export interface DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueFontColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#dark DataDatabricksWorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#light DataDatabricksWorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueFontColorToTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueFontColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueFontColorToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueFontColor | cdktn.IResolvable): any {
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

export class DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueFontColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueFontColor | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueFontColor | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#font_color DataDatabricksWorkspaceSettingV2#font_color}
  */
  readonly fontColor?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueFontColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#font_family DataDatabricksWorkspaceSettingV2#font_family}
  */
  readonly fontFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#font_size DataDatabricksWorkspaceSettingV2#font_size}
  */
  readonly fontSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#font_style DataDatabricksWorkspaceSettingV2#font_style}
  */
  readonly fontStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#font_weight DataDatabricksWorkspaceSettingV2#font_weight}
  */
  readonly fontWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#text_case DataDatabricksWorkspaceSettingV2#text_case}
  */
  readonly textCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#text_decoration DataDatabricksWorkspaceSettingV2#text_decoration}
  */
  readonly textDecoration?: string;
}

export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueToTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    font_color: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueFontColorToTerraform(struct!.fontColor),
    font_family: cdktn.stringToTerraform(struct!.fontFamily),
    font_size: cdktn.numberToTerraform(struct!.fontSize),
    font_style: cdktn.stringToTerraform(struct!.fontStyle),
    font_weight: cdktn.numberToTerraform(struct!.fontWeight),
    text_case: cdktn.stringToTerraform(struct!.textCase),
    text_decoration: cdktn.stringToTerraform(struct!.textDecoration),
  }
}


export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    font_color: {
      value: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueFontColorToHclTerraform(struct!.fontColor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueFontColor",
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

export class DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValue | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValue | cdktn.IResolvable | undefined) {
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
  private _fontColor = new DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueFontColorOutputReference(this, "font_color");
  public get fontColor() {
    return this._fontColor;
  }
  public putFontColor(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueFontColor) {
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
export interface DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#dark DataDatabricksWorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#light DataDatabricksWorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColorToTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColorToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColor | cdktn.IResolvable): any {
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

export class DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColor | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColor | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescription {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#font_color DataDatabricksWorkspaceSettingV2#font_color}
  */
  readonly fontColor?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#font_family DataDatabricksWorkspaceSettingV2#font_family}
  */
  readonly fontFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#font_size DataDatabricksWorkspaceSettingV2#font_size}
  */
  readonly fontSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#font_style DataDatabricksWorkspaceSettingV2#font_style}
  */
  readonly fontStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#font_weight DataDatabricksWorkspaceSettingV2#font_weight}
  */
  readonly fontWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#text_case DataDatabricksWorkspaceSettingV2#text_case}
  */
  readonly textCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#text_decoration DataDatabricksWorkspaceSettingV2#text_decoration}
  */
  readonly textDecoration?: string;
}

export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionToTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescription | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    font_color: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColorToTerraform(struct!.fontColor),
    font_family: cdktn.stringToTerraform(struct!.fontFamily),
    font_size: cdktn.numberToTerraform(struct!.fontSize),
    font_style: cdktn.stringToTerraform(struct!.fontStyle),
    font_weight: cdktn.numberToTerraform(struct!.fontWeight),
    text_case: cdktn.stringToTerraform(struct!.textCase),
    text_decoration: cdktn.stringToTerraform(struct!.textDecoration),
  }
}


export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescription | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    font_color: {
      value: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColorToHclTerraform(struct!.fontColor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColor",
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

export class DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescription | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescription | cdktn.IResolvable | undefined) {
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
  private _fontColor = new DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColorOutputReference(this, "font_color");
  public get fontColor() {
    return this._fontColor;
  }
  public putFontColor(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColor) {
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
export interface DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleFontColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#dark DataDatabricksWorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#light DataDatabricksWorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleFontColorToTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleFontColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleFontColorToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleFontColor | cdktn.IResolvable): any {
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

export class DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleFontColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleFontColor | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleFontColor | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#font_color DataDatabricksWorkspaceSettingV2#font_color}
  */
  readonly fontColor?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleFontColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#font_family DataDatabricksWorkspaceSettingV2#font_family}
  */
  readonly fontFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#font_size DataDatabricksWorkspaceSettingV2#font_size}
  */
  readonly fontSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#font_style DataDatabricksWorkspaceSettingV2#font_style}
  */
  readonly fontStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#font_weight DataDatabricksWorkspaceSettingV2#font_weight}
  */
  readonly fontWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#text_case DataDatabricksWorkspaceSettingV2#text_case}
  */
  readonly textCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#text_decoration DataDatabricksWorkspaceSettingV2#text_decoration}
  */
  readonly textDecoration?: string;
}

export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleToTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitle | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    font_color: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleFontColorToTerraform(struct!.fontColor),
    font_family: cdktn.stringToTerraform(struct!.fontFamily),
    font_size: cdktn.numberToTerraform(struct!.fontSize),
    font_style: cdktn.stringToTerraform(struct!.fontStyle),
    font_weight: cdktn.numberToTerraform(struct!.fontWeight),
    text_case: cdktn.stringToTerraform(struct!.textCase),
    text_decoration: cdktn.stringToTerraform(struct!.textDecoration),
  }
}


export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitle | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    font_color: {
      value: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleFontColorToHclTerraform(struct!.fontColor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleFontColor",
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

export class DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitle | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitle | cdktn.IResolvable | undefined) {
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
  private _fontColor = new DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleFontColorOutputReference(this, "font_color");
  public get fontColor() {
    return this._fontColor;
  }
  public putFontColor(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleFontColor) {
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
export interface DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#base DataDatabricksWorkspaceSettingV2#base}
  */
  readonly base?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBase;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#field_title DataDatabricksWorkspaceSettingV2#field_title}
  */
  readonly fieldTitle?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitle;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#field_value DataDatabricksWorkspaceSettingV2#field_value}
  */
  readonly fieldValue?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValue;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#widget_description DataDatabricksWorkspaceSettingV2#widget_description}
  */
  readonly widgetDescription?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescription;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#widget_title DataDatabricksWorkspaceSettingV2#widget_title}
  */
  readonly widgetTitle?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitle;
}

export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsToTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    base: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseToTerraform(struct!.base),
    field_title: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleToTerraform(struct!.fieldTitle),
    field_value: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueToTerraform(struct!.fieldValue),
    widget_description: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionToTerraform(struct!.widgetDescription),
    widget_title: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleToTerraform(struct!.widgetTitle),
  }
}


export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    base: {
      value: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseToHclTerraform(struct!.base),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBase",
    },
    field_title: {
      value: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleToHclTerraform(struct!.fieldTitle),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitle",
    },
    field_value: {
      value: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueToHclTerraform(struct!.fieldValue),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValue",
    },
    widget_description: {
      value: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionToHclTerraform(struct!.widgetDescription),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescription",
    },
    widget_title: {
      value: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleToHclTerraform(struct!.widgetTitle),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitle",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettings | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettings | cdktn.IResolvable | undefined) {
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
  private _base = new DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseOutputReference(this, "base");
  public get base() {
    return this._base;
  }
  public putBase(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBase) {
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
  private _fieldTitle = new DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleOutputReference(this, "field_title");
  public get fieldTitle() {
    return this._fieldTitle;
  }
  public putFieldTitle(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitle) {
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
  private _fieldValue = new DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueOutputReference(this, "field_value");
  public get fieldValue() {
    return this._fieldValue;
  }
  public putFieldValue(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValue) {
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
  private _widgetDescription = new DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionOutputReference(this, "widget_description");
  public get widgetDescription() {
    return this._widgetDescription;
  }
  public putWidgetDescription(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescription) {
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
  private _widgetTitle = new DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleOutputReference(this, "widget_title");
  public get widgetTitle() {
    return this._widgetTitle;
  }
  public putWidgetTitle(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitle) {
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
export interface DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeGridLineColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#dark DataDatabricksWorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#light DataDatabricksWorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeGridLineColorToTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeGridLineColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeGridLineColorToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeGridLineColor | cdktn.IResolvable): any {
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

export class DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeGridLineColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeGridLineColor | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeGridLineColor | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeSelectionColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#dark DataDatabricksWorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#light DataDatabricksWorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeSelectionColorToTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeSelectionColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeSelectionColorToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeSelectionColor | cdktn.IResolvable): any {
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

export class DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeSelectionColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeSelectionColor | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeSelectionColor | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNegative {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#dark DataDatabricksWorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#light DataDatabricksWorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNegativeToTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNegative | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNegativeToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNegative | cdktn.IResolvable): any {
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

export class DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNegativeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNegative | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNegative | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNeutral {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#dark DataDatabricksWorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#light DataDatabricksWorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNeutralToTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNeutral | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNeutralToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNeutral | cdktn.IResolvable): any {
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

export class DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNeutralOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNeutral | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNeutral | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsPositive {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#dark DataDatabricksWorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#light DataDatabricksWorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsPositiveToTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsPositive | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsPositiveToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsPositive | cdktn.IResolvable): any {
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

export class DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsPositiveOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsPositive | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsPositive | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#negative DataDatabricksWorkspaceSettingV2#negative}
  */
  readonly negative?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNegative;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#neutral DataDatabricksWorkspaceSettingV2#neutral}
  */
  readonly neutral?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNeutral;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#positive DataDatabricksWorkspaceSettingV2#positive}
  */
  readonly positive?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsPositive;
}

export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsToTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    negative: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNegativeToTerraform(struct!.negative),
    neutral: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNeutralToTerraform(struct!.neutral),
    positive: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsPositiveToTerraform(struct!.positive),
  }
}


export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    negative: {
      value: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNegativeToHclTerraform(struct!.negative),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNegative",
    },
    neutral: {
      value: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNeutralToHclTerraform(struct!.neutral),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNeutral",
    },
    positive: {
      value: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsPositiveToHclTerraform(struct!.positive),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsPositive",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColors | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColors | cdktn.IResolvable | undefined) {
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
  private _negative = new DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNegativeOutputReference(this, "negative");
  public get negative() {
    return this._negative;
  }
  public putNegative(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNegative) {
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
  private _neutral = new DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNeutralOutputReference(this, "neutral");
  public get neutral() {
    return this._neutral;
  }
  public putNeutral(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNeutral) {
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
  private _positive = new DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsPositiveOutputReference(this, "positive");
  public get positive() {
    return this._positive;
  }
  public putPositive(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsPositive) {
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
export interface DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeWidgetBackgroundColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#dark DataDatabricksWorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#light DataDatabricksWorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeWidgetBackgroundColorToTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeWidgetBackgroundColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeWidgetBackgroundColorToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeWidgetBackgroundColor | cdktn.IResolvable): any {
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

export class DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeWidgetBackgroundColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeWidgetBackgroundColor | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeWidgetBackgroundColor | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeWidgetBorderColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#dark DataDatabricksWorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#light DataDatabricksWorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeWidgetBorderColorToTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeWidgetBorderColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeWidgetBorderColorToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeWidgetBorderColor | cdktn.IResolvable): any {
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

export class DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeWidgetBorderColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeWidgetBorderColor | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeWidgetBorderColor | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardTheme {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#axis_line_color DataDatabricksWorkspaceSettingV2#axis_line_color}
  */
  readonly axisLineColor?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeAxisLineColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#canvas_background_color DataDatabricksWorkspaceSettingV2#canvas_background_color}
  */
  readonly canvasBackgroundColor?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeCanvasBackgroundColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#continuous_gradient DataDatabricksWorkspaceSettingV2#continuous_gradient}
  */
  readonly continuousGradient?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradient;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#font_color DataDatabricksWorkspaceSettingV2#font_color}
  */
  readonly fontColor?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#font_family DataDatabricksWorkspaceSettingV2#font_family}
  */
  readonly fontFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#font_settings DataDatabricksWorkspaceSettingV2#font_settings}
  */
  readonly fontSettings?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#grid_line_color DataDatabricksWorkspaceSettingV2#grid_line_color}
  */
  readonly gridLineColor?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeGridLineColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#mark_corner_radius DataDatabricksWorkspaceSettingV2#mark_corner_radius}
  */
  readonly markCornerRadius?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#selection_color DataDatabricksWorkspaceSettingV2#selection_color}
  */
  readonly selectionColor?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeSelectionColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#sentiment_colors DataDatabricksWorkspaceSettingV2#sentiment_colors}
  */
  readonly sentimentColors?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColors;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#text_box_vertical_align DataDatabricksWorkspaceSettingV2#text_box_vertical_align}
  */
  readonly textBoxVerticalAlign?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#visualization_color_01 DataDatabricksWorkspaceSettingV2#visualization_color_01}
  */
  readonly visualizationColor01?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#visualization_color_02 DataDatabricksWorkspaceSettingV2#visualization_color_02}
  */
  readonly visualizationColor02?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#visualization_color_03 DataDatabricksWorkspaceSettingV2#visualization_color_03}
  */
  readonly visualizationColor03?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#visualization_color_04 DataDatabricksWorkspaceSettingV2#visualization_color_04}
  */
  readonly visualizationColor04?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#visualization_color_05 DataDatabricksWorkspaceSettingV2#visualization_color_05}
  */
  readonly visualizationColor05?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#visualization_color_06 DataDatabricksWorkspaceSettingV2#visualization_color_06}
  */
  readonly visualizationColor06?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#visualization_color_07 DataDatabricksWorkspaceSettingV2#visualization_color_07}
  */
  readonly visualizationColor07?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#visualization_color_08 DataDatabricksWorkspaceSettingV2#visualization_color_08}
  */
  readonly visualizationColor08?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#visualization_color_09 DataDatabricksWorkspaceSettingV2#visualization_color_09}
  */
  readonly visualizationColor09?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#visualization_color_10 DataDatabricksWorkspaceSettingV2#visualization_color_10}
  */
  readonly visualizationColor10?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#visualization_color_11 DataDatabricksWorkspaceSettingV2#visualization_color_11}
  */
  readonly visualizationColor11?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#visualization_color_12 DataDatabricksWorkspaceSettingV2#visualization_color_12}
  */
  readonly visualizationColor12?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#visualization_color_13 DataDatabricksWorkspaceSettingV2#visualization_color_13}
  */
  readonly visualizationColor13?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#visualization_color_14 DataDatabricksWorkspaceSettingV2#visualization_color_14}
  */
  readonly visualizationColor14?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#visualization_color_15 DataDatabricksWorkspaceSettingV2#visualization_color_15}
  */
  readonly visualizationColor15?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#visualization_color_16 DataDatabricksWorkspaceSettingV2#visualization_color_16}
  */
  readonly visualizationColor16?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#visualization_color_17 DataDatabricksWorkspaceSettingV2#visualization_color_17}
  */
  readonly visualizationColor17?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#visualization_color_18 DataDatabricksWorkspaceSettingV2#visualization_color_18}
  */
  readonly visualizationColor18?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#visualization_color_19 DataDatabricksWorkspaceSettingV2#visualization_color_19}
  */
  readonly visualizationColor19?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#visualization_color_20 DataDatabricksWorkspaceSettingV2#visualization_color_20}
  */
  readonly visualizationColor20?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#widget_background_color DataDatabricksWorkspaceSettingV2#widget_background_color}
  */
  readonly widgetBackgroundColor?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeWidgetBackgroundColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#widget_border_color DataDatabricksWorkspaceSettingV2#widget_border_color}
  */
  readonly widgetBorderColor?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeWidgetBorderColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#widget_corner_radius DataDatabricksWorkspaceSettingV2#widget_corner_radius}
  */
  readonly widgetCornerRadius?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#widget_header_alignment DataDatabricksWorkspaceSettingV2#widget_header_alignment}
  */
  readonly widgetHeaderAlignment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#widget_margin DataDatabricksWorkspaceSettingV2#widget_margin}
  */
  readonly widgetMargin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#widget_padding DataDatabricksWorkspaceSettingV2#widget_padding}
  */
  readonly widgetPadding?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#widget_shadow DataDatabricksWorkspaceSettingV2#widget_shadow}
  */
  readonly widgetShadow?: number;
}

export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeToTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardTheme): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    axis_line_color: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeAxisLineColorToTerraform(struct!.axisLineColor),
    canvas_background_color: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeCanvasBackgroundColorToTerraform(struct!.canvasBackgroundColor),
    continuous_gradient: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientToTerraform(struct!.continuousGradient),
    font_color: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontColorToTerraform(struct!.fontColor),
    font_family: cdktn.stringToTerraform(struct!.fontFamily),
    font_settings: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsToTerraform(struct!.fontSettings),
    grid_line_color: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeGridLineColorToTerraform(struct!.gridLineColor),
    mark_corner_radius: cdktn.numberToTerraform(struct!.markCornerRadius),
    selection_color: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeSelectionColorToTerraform(struct!.selectionColor),
    sentiment_colors: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsToTerraform(struct!.sentimentColors),
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
    widget_background_color: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeWidgetBackgroundColorToTerraform(struct!.widgetBackgroundColor),
    widget_border_color: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeWidgetBorderColorToTerraform(struct!.widgetBorderColor),
    widget_corner_radius: cdktn.numberToTerraform(struct!.widgetCornerRadius),
    widget_header_alignment: cdktn.stringToTerraform(struct!.widgetHeaderAlignment),
    widget_margin: cdktn.numberToTerraform(struct!.widgetMargin),
    widget_padding: cdktn.numberToTerraform(struct!.widgetPadding),
    widget_shadow: cdktn.numberToTerraform(struct!.widgetShadow),
  }
}


export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardTheme): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    axis_line_color: {
      value: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeAxisLineColorToHclTerraform(struct!.axisLineColor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeAxisLineColor",
    },
    canvas_background_color: {
      value: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeCanvasBackgroundColorToHclTerraform(struct!.canvasBackgroundColor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeCanvasBackgroundColor",
    },
    continuous_gradient: {
      value: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientToHclTerraform(struct!.continuousGradient),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradient",
    },
    font_color: {
      value: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontColorToHclTerraform(struct!.fontColor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontColor",
    },
    font_family: {
      value: cdktn.stringToHclTerraform(struct!.fontFamily),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_settings: {
      value: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsToHclTerraform(struct!.fontSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettings",
    },
    grid_line_color: {
      value: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeGridLineColorToHclTerraform(struct!.gridLineColor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeGridLineColor",
    },
    mark_corner_radius: {
      value: cdktn.numberToHclTerraform(struct!.markCornerRadius),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    selection_color: {
      value: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeSelectionColorToHclTerraform(struct!.selectionColor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeSelectionColor",
    },
    sentiment_colors: {
      value: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsToHclTerraform(struct!.sentimentColors),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColors",
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
      value: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeWidgetBackgroundColorToHclTerraform(struct!.widgetBackgroundColor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeWidgetBackgroundColor",
    },
    widget_border_color: {
      value: dataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeWidgetBorderColorToHclTerraform(struct!.widgetBorderColor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeWidgetBorderColor",
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

export class DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardTheme | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardTheme | undefined) {
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
  private _axisLineColor = new DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeAxisLineColorOutputReference(this, "axis_line_color");
  public get axisLineColor() {
    return this._axisLineColor;
  }
  public putAxisLineColor(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeAxisLineColor) {
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
  private _canvasBackgroundColor = new DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeCanvasBackgroundColorOutputReference(this, "canvas_background_color");
  public get canvasBackgroundColor() {
    return this._canvasBackgroundColor;
  }
  public putCanvasBackgroundColor(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeCanvasBackgroundColor) {
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
  private _continuousGradient = new DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientOutputReference(this, "continuous_gradient");
  public get continuousGradient() {
    return this._continuousGradient;
  }
  public putContinuousGradient(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeContinuousGradient) {
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
  private _fontColor = new DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontColorOutputReference(this, "font_color");
  public get fontColor() {
    return this._fontColor;
  }
  public putFontColor(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontColor) {
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
  private _fontSettings = new DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettingsOutputReference(this, "font_settings");
  public get fontSettings() {
    return this._fontSettings;
  }
  public putFontSettings(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeFontSettings) {
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
  private _gridLineColor = new DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeGridLineColorOutputReference(this, "grid_line_color");
  public get gridLineColor() {
    return this._gridLineColor;
  }
  public putGridLineColor(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeGridLineColor) {
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
  private _selectionColor = new DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeSelectionColorOutputReference(this, "selection_color");
  public get selectionColor() {
    return this._selectionColor;
  }
  public putSelectionColor(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeSelectionColor) {
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
  private _sentimentColors = new DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsOutputReference(this, "sentiment_colors");
  public get sentimentColors() {
    return this._sentimentColors;
  }
  public putSentimentColors(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeSentimentColors) {
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
  private _widgetBackgroundColor = new DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeWidgetBackgroundColorOutputReference(this, "widget_background_color");
  public get widgetBackgroundColor() {
    return this._widgetBackgroundColor;
  }
  public putWidgetBackgroundColor(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeWidgetBackgroundColor) {
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
  private _widgetBorderColor = new DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeWidgetBorderColorOutputReference(this, "widget_border_color");
  public get widgetBorderColor() {
    return this._widgetBorderColor;
  }
  public putWidgetBorderColor(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeWidgetBorderColor) {
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
export interface DataDatabricksWorkspaceSettingV2EffectiveWorkspaceLabel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#color DataDatabricksWorkspaceSettingV2#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#label DataDatabricksWorkspaceSettingV2#label}
  */
  readonly label?: string;
}

export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceLabelToTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceLabel): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    color: cdktn.stringToTerraform(struct!.color),
    label: cdktn.stringToTerraform(struct!.label),
  }
}


export function dataDatabricksWorkspaceSettingV2EffectiveWorkspaceLabelToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceLabel): any {
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

export class DataDatabricksWorkspaceSettingV2EffectiveWorkspaceLabelOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2EffectiveWorkspaceLabel | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2EffectiveWorkspaceLabel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._color = undefined;
      this._label = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._color = value.color;
      this._label = value.label;
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
}
export interface DataDatabricksWorkspaceSettingV2IntegerVal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#value DataDatabricksWorkspaceSettingV2#value}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#email DataDatabricksWorkspaceSettingV2#email}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#value DataDatabricksWorkspaceSettingV2#value}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#workspace_id DataDatabricksWorkspaceSettingV2#workspace_id}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#disable_gov_tag_creation DataDatabricksWorkspaceSettingV2#disable_gov_tag_creation}
  */
  readonly disableGovTagCreation?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#status DataDatabricksWorkspaceSettingV2#status}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#value DataDatabricksWorkspaceSettingV2#value}
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
export interface DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeAxisLineColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#dark DataDatabricksWorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#light DataDatabricksWorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeAxisLineColorToTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeAxisLineColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeAxisLineColorToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeAxisLineColor | cdktn.IResolvable): any {
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

export class DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeAxisLineColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeAxisLineColor | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeAxisLineColor | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeCanvasBackgroundColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#dark DataDatabricksWorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#light DataDatabricksWorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeCanvasBackgroundColorToTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeCanvasBackgroundColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeCanvasBackgroundColorToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeCanvasBackgroundColor | cdktn.IResolvable): any {
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

export class DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeCanvasBackgroundColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeCanvasBackgroundColor | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeCanvasBackgroundColor | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEnd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#dark DataDatabricksWorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#light DataDatabricksWorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEndToTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEnd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEndToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEnd | cdktn.IResolvable): any {
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

export class DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEndOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEnd | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEnd | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMid {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#dark DataDatabricksWorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#light DataDatabricksWorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMidToTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMid | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMidToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMid | cdktn.IResolvable): any {
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

export class DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMidOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMid | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMid | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStart {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#dark DataDatabricksWorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#light DataDatabricksWorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStartToTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStart | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStartToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStart | cdktn.IResolvable): any {
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

export class DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStartOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStart | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStart | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDiverging {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#end DataDatabricksWorkspaceSettingV2#end}
  */
  readonly end?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEnd;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#mid DataDatabricksWorkspaceSettingV2#mid}
  */
  readonly mid?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMid;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#start DataDatabricksWorkspaceSettingV2#start}
  */
  readonly start?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStart;
}

export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingToTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDiverging | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEndToTerraform(struct!.end),
    mid: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMidToTerraform(struct!.mid),
    start: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStartToTerraform(struct!.start),
  }
}


export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDiverging | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end: {
      value: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEndToHclTerraform(struct!.end),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEnd",
    },
    mid: {
      value: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMidToHclTerraform(struct!.mid),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMid",
    },
    start: {
      value: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStartToHclTerraform(struct!.start),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStart",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDiverging | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDiverging | cdktn.IResolvable | undefined) {
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
  private _end = new DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEndOutputReference(this, "end");
  public get end() {
    return this._end;
  }
  public putEnd(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEnd) {
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
  private _mid = new DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMidOutputReference(this, "mid");
  public get mid() {
    return this._mid;
  }
  public putMid(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMid) {
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
  private _start = new DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStartOutputReference(this, "start");
  public get start() {
    return this._start;
  }
  public putStart(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStart) {
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
export interface DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEnd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#dark DataDatabricksWorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#light DataDatabricksWorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEndToTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEnd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEndToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEnd | cdktn.IResolvable): any {
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

export class DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEndOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEnd | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEnd | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStart {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#dark DataDatabricksWorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#light DataDatabricksWorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStartToTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStart | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStartToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStart | cdktn.IResolvable): any {
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

export class DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStartOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStart | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStart | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequential {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#end DataDatabricksWorkspaceSettingV2#end}
  */
  readonly end?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEnd;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#start DataDatabricksWorkspaceSettingV2#start}
  */
  readonly start?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStart;
}

export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialToTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequential | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEndToTerraform(struct!.end),
    start: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStartToTerraform(struct!.start),
  }
}


export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequential | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end: {
      value: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEndToHclTerraform(struct!.end),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEnd",
    },
    start: {
      value: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStartToHclTerraform(struct!.start),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStart",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequential | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequential | cdktn.IResolvable | undefined) {
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
  private _end = new DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEndOutputReference(this, "end");
  public get end() {
    return this._end;
  }
  public putEnd(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEnd) {
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
  private _start = new DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStartOutputReference(this, "start");
  public get start() {
    return this._start;
  }
  public putStart(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStart) {
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
export interface DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkMode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#color DataDatabricksWorkspaceSettingV2#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#color_scheme DataDatabricksWorkspaceSettingV2#color_scheme}
  */
  readonly colorScheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#custom_diverging DataDatabricksWorkspaceSettingV2#custom_diverging}
  */
  readonly customDiverging?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDiverging;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#custom_sequential DataDatabricksWorkspaceSettingV2#custom_sequential}
  */
  readonly customSequential?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequential;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#from_categorical_index DataDatabricksWorkspaceSettingV2#from_categorical_index}
  */
  readonly fromCategoricalIndex?: number;
}

export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeToTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkMode | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    color: cdktn.stringToTerraform(struct!.color),
    color_scheme: cdktn.stringToTerraform(struct!.colorScheme),
    custom_diverging: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingToTerraform(struct!.customDiverging),
    custom_sequential: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialToTerraform(struct!.customSequential),
    from_categorical_index: cdktn.numberToTerraform(struct!.fromCategoricalIndex),
  }
}


export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkMode | cdktn.IResolvable): any {
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
      value: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingToHclTerraform(struct!.customDiverging),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDiverging",
    },
    custom_sequential: {
      value: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialToHclTerraform(struct!.customSequential),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequential",
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

export class DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkMode | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkMode | cdktn.IResolvable | undefined) {
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
  private _customDiverging = new DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingOutputReference(this, "custom_diverging");
  public get customDiverging() {
    return this._customDiverging;
  }
  public putCustomDiverging(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDiverging) {
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
  private _customSequential = new DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialOutputReference(this, "custom_sequential");
  public get customSequential() {
    return this._customSequential;
  }
  public putCustomSequential(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequential) {
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
export interface DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEnd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#dark DataDatabricksWorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#light DataDatabricksWorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEndToTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEnd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEndToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEnd | cdktn.IResolvable): any {
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

export class DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEndOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEnd | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEnd | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMid {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#dark DataDatabricksWorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#light DataDatabricksWorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMidToTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMid | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMidToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMid | cdktn.IResolvable): any {
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

export class DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMidOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMid | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMid | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStart {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#dark DataDatabricksWorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#light DataDatabricksWorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStartToTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStart | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStartToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStart | cdktn.IResolvable): any {
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

export class DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStartOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStart | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStart | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDiverging {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#end DataDatabricksWorkspaceSettingV2#end}
  */
  readonly end?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEnd;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#mid DataDatabricksWorkspaceSettingV2#mid}
  */
  readonly mid?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMid;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#start DataDatabricksWorkspaceSettingV2#start}
  */
  readonly start?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStart;
}

export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingToTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDiverging | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEndToTerraform(struct!.end),
    mid: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMidToTerraform(struct!.mid),
    start: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStartToTerraform(struct!.start),
  }
}


export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDiverging | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end: {
      value: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEndToHclTerraform(struct!.end),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEnd",
    },
    mid: {
      value: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMidToHclTerraform(struct!.mid),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMid",
    },
    start: {
      value: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStartToHclTerraform(struct!.start),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStart",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDiverging | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDiverging | cdktn.IResolvable | undefined) {
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
  private _end = new DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEndOutputReference(this, "end");
  public get end() {
    return this._end;
  }
  public putEnd(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEnd) {
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
  private _mid = new DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMidOutputReference(this, "mid");
  public get mid() {
    return this._mid;
  }
  public putMid(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMid) {
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
  private _start = new DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStartOutputReference(this, "start");
  public get start() {
    return this._start;
  }
  public putStart(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStart) {
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
export interface DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEnd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#dark DataDatabricksWorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#light DataDatabricksWorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEndToTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEnd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEndToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEnd | cdktn.IResolvable): any {
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

export class DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEndOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEnd | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEnd | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStart {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#dark DataDatabricksWorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#light DataDatabricksWorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStartToTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStart | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStartToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStart | cdktn.IResolvable): any {
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

export class DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStartOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStart | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStart | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequential {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#end DataDatabricksWorkspaceSettingV2#end}
  */
  readonly end?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEnd;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#start DataDatabricksWorkspaceSettingV2#start}
  */
  readonly start?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStart;
}

export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialToTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequential | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEndToTerraform(struct!.end),
    start: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStartToTerraform(struct!.start),
  }
}


export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequential | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end: {
      value: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEndToHclTerraform(struct!.end),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEnd",
    },
    start: {
      value: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStartToHclTerraform(struct!.start),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStart",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequential | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequential | cdktn.IResolvable | undefined) {
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
  private _end = new DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEndOutputReference(this, "end");
  public get end() {
    return this._end;
  }
  public putEnd(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEnd) {
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
  private _start = new DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStartOutputReference(this, "start");
  public get start() {
    return this._start;
  }
  public putStart(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStart) {
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
export interface DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightMode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#color DataDatabricksWorkspaceSettingV2#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#color_scheme DataDatabricksWorkspaceSettingV2#color_scheme}
  */
  readonly colorScheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#custom_diverging DataDatabricksWorkspaceSettingV2#custom_diverging}
  */
  readonly customDiverging?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDiverging;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#custom_sequential DataDatabricksWorkspaceSettingV2#custom_sequential}
  */
  readonly customSequential?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequential;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#from_categorical_index DataDatabricksWorkspaceSettingV2#from_categorical_index}
  */
  readonly fromCategoricalIndex?: number;
}

export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeToTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightMode | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    color: cdktn.stringToTerraform(struct!.color),
    color_scheme: cdktn.stringToTerraform(struct!.colorScheme),
    custom_diverging: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingToTerraform(struct!.customDiverging),
    custom_sequential: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialToTerraform(struct!.customSequential),
    from_categorical_index: cdktn.numberToTerraform(struct!.fromCategoricalIndex),
  }
}


export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightMode | cdktn.IResolvable): any {
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
      value: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingToHclTerraform(struct!.customDiverging),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDiverging",
    },
    custom_sequential: {
      value: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialToHclTerraform(struct!.customSequential),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequential",
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

export class DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightMode | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightMode | cdktn.IResolvable | undefined) {
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
  private _customDiverging = new DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingOutputReference(this, "custom_diverging");
  public get customDiverging() {
    return this._customDiverging;
  }
  public putCustomDiverging(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDiverging) {
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
  private _customSequential = new DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialOutputReference(this, "custom_sequential");
  public get customSequential() {
    return this._customSequential;
  }
  public putCustomSequential(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequential) {
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
export interface DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradient {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#dark_mode DataDatabricksWorkspaceSettingV2#dark_mode}
  */
  readonly darkMode?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkMode;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#light_mode DataDatabricksWorkspaceSettingV2#light_mode}
  */
  readonly lightMode?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightMode;
}

export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientToTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradient | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark_mode: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeToTerraform(struct!.darkMode),
    light_mode: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeToTerraform(struct!.lightMode),
  }
}


export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradient | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dark_mode: {
      value: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeToHclTerraform(struct!.darkMode),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkMode",
    },
    light_mode: {
      value: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeToHclTerraform(struct!.lightMode),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightMode",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradient | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradient | cdktn.IResolvable | undefined) {
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
  private _darkMode = new DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeOutputReference(this, "dark_mode");
  public get darkMode() {
    return this._darkMode;
  }
  public putDarkMode(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientDarkMode) {
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
  private _lightMode = new DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightModeOutputReference(this, "light_mode");
  public get lightMode() {
    return this._lightMode;
  }
  public putLightMode(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientLightMode) {
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
export interface DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#dark DataDatabricksWorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#light DataDatabricksWorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontColorToTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontColorToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontColor | cdktn.IResolvable): any {
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

export class DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontColor | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontColor | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsBaseFontColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#dark DataDatabricksWorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#light DataDatabricksWorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsBaseFontColorToTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsBaseFontColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsBaseFontColorToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsBaseFontColor | cdktn.IResolvable): any {
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

export class DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsBaseFontColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsBaseFontColor | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsBaseFontColor | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsBase {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#font_color DataDatabricksWorkspaceSettingV2#font_color}
  */
  readonly fontColor?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsBaseFontColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#font_family DataDatabricksWorkspaceSettingV2#font_family}
  */
  readonly fontFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#font_size DataDatabricksWorkspaceSettingV2#font_size}
  */
  readonly fontSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#font_style DataDatabricksWorkspaceSettingV2#font_style}
  */
  readonly fontStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#font_weight DataDatabricksWorkspaceSettingV2#font_weight}
  */
  readonly fontWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#text_case DataDatabricksWorkspaceSettingV2#text_case}
  */
  readonly textCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#text_decoration DataDatabricksWorkspaceSettingV2#text_decoration}
  */
  readonly textDecoration?: string;
}

export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsBaseToTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsBase | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    font_color: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsBaseFontColorToTerraform(struct!.fontColor),
    font_family: cdktn.stringToTerraform(struct!.fontFamily),
    font_size: cdktn.numberToTerraform(struct!.fontSize),
    font_style: cdktn.stringToTerraform(struct!.fontStyle),
    font_weight: cdktn.numberToTerraform(struct!.fontWeight),
    text_case: cdktn.stringToTerraform(struct!.textCase),
    text_decoration: cdktn.stringToTerraform(struct!.textDecoration),
  }
}


export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsBaseToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsBase | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    font_color: {
      value: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsBaseFontColorToHclTerraform(struct!.fontColor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsBaseFontColor",
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

export class DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsBaseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsBase | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsBase | cdktn.IResolvable | undefined) {
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
  private _fontColor = new DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsBaseFontColorOutputReference(this, "font_color");
  public get fontColor() {
    return this._fontColor;
  }
  public putFontColor(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsBaseFontColor) {
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
export interface DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleFontColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#dark DataDatabricksWorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#light DataDatabricksWorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleFontColorToTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleFontColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleFontColorToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleFontColor | cdktn.IResolvable): any {
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

export class DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleFontColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleFontColor | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleFontColor | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldTitle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#font_color DataDatabricksWorkspaceSettingV2#font_color}
  */
  readonly fontColor?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleFontColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#font_family DataDatabricksWorkspaceSettingV2#font_family}
  */
  readonly fontFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#font_size DataDatabricksWorkspaceSettingV2#font_size}
  */
  readonly fontSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#font_style DataDatabricksWorkspaceSettingV2#font_style}
  */
  readonly fontStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#font_weight DataDatabricksWorkspaceSettingV2#font_weight}
  */
  readonly fontWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#text_case DataDatabricksWorkspaceSettingV2#text_case}
  */
  readonly textCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#text_decoration DataDatabricksWorkspaceSettingV2#text_decoration}
  */
  readonly textDecoration?: string;
}

export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleToTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldTitle | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    font_color: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleFontColorToTerraform(struct!.fontColor),
    font_family: cdktn.stringToTerraform(struct!.fontFamily),
    font_size: cdktn.numberToTerraform(struct!.fontSize),
    font_style: cdktn.stringToTerraform(struct!.fontStyle),
    font_weight: cdktn.numberToTerraform(struct!.fontWeight),
    text_case: cdktn.stringToTerraform(struct!.textCase),
    text_decoration: cdktn.stringToTerraform(struct!.textDecoration),
  }
}


export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldTitle | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    font_color: {
      value: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleFontColorToHclTerraform(struct!.fontColor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleFontColor",
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

export class DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldTitle | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldTitle | cdktn.IResolvable | undefined) {
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
  private _fontColor = new DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleFontColorOutputReference(this, "font_color");
  public get fontColor() {
    return this._fontColor;
  }
  public putFontColor(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleFontColor) {
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
export interface DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldValueFontColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#dark DataDatabricksWorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#light DataDatabricksWorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldValueFontColorToTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldValueFontColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldValueFontColorToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldValueFontColor | cdktn.IResolvable): any {
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

export class DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldValueFontColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldValueFontColor | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldValueFontColor | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#font_color DataDatabricksWorkspaceSettingV2#font_color}
  */
  readonly fontColor?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldValueFontColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#font_family DataDatabricksWorkspaceSettingV2#font_family}
  */
  readonly fontFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#font_size DataDatabricksWorkspaceSettingV2#font_size}
  */
  readonly fontSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#font_style DataDatabricksWorkspaceSettingV2#font_style}
  */
  readonly fontStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#font_weight DataDatabricksWorkspaceSettingV2#font_weight}
  */
  readonly fontWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#text_case DataDatabricksWorkspaceSettingV2#text_case}
  */
  readonly textCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#text_decoration DataDatabricksWorkspaceSettingV2#text_decoration}
  */
  readonly textDecoration?: string;
}

export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldValueToTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    font_color: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldValueFontColorToTerraform(struct!.fontColor),
    font_family: cdktn.stringToTerraform(struct!.fontFamily),
    font_size: cdktn.numberToTerraform(struct!.fontSize),
    font_style: cdktn.stringToTerraform(struct!.fontStyle),
    font_weight: cdktn.numberToTerraform(struct!.fontWeight),
    text_case: cdktn.stringToTerraform(struct!.textCase),
    text_decoration: cdktn.stringToTerraform(struct!.textDecoration),
  }
}


export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldValueToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    font_color: {
      value: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldValueFontColorToHclTerraform(struct!.fontColor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldValueFontColor",
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

export class DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldValue | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldValue | cdktn.IResolvable | undefined) {
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
  private _fontColor = new DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldValueFontColorOutputReference(this, "font_color");
  public get fontColor() {
    return this._fontColor;
  }
  public putFontColor(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldValueFontColor) {
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
export interface DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#dark DataDatabricksWorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#light DataDatabricksWorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColorToTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColorToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColor | cdktn.IResolvable): any {
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

export class DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColor | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColor | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescription {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#font_color DataDatabricksWorkspaceSettingV2#font_color}
  */
  readonly fontColor?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#font_family DataDatabricksWorkspaceSettingV2#font_family}
  */
  readonly fontFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#font_size DataDatabricksWorkspaceSettingV2#font_size}
  */
  readonly fontSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#font_style DataDatabricksWorkspaceSettingV2#font_style}
  */
  readonly fontStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#font_weight DataDatabricksWorkspaceSettingV2#font_weight}
  */
  readonly fontWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#text_case DataDatabricksWorkspaceSettingV2#text_case}
  */
  readonly textCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#text_decoration DataDatabricksWorkspaceSettingV2#text_decoration}
  */
  readonly textDecoration?: string;
}

export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionToTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescription | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    font_color: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColorToTerraform(struct!.fontColor),
    font_family: cdktn.stringToTerraform(struct!.fontFamily),
    font_size: cdktn.numberToTerraform(struct!.fontSize),
    font_style: cdktn.stringToTerraform(struct!.fontStyle),
    font_weight: cdktn.numberToTerraform(struct!.fontWeight),
    text_case: cdktn.stringToTerraform(struct!.textCase),
    text_decoration: cdktn.stringToTerraform(struct!.textDecoration),
  }
}


export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescription | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    font_color: {
      value: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColorToHclTerraform(struct!.fontColor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColor",
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

export class DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescription | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescription | cdktn.IResolvable | undefined) {
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
  private _fontColor = new DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColorOutputReference(this, "font_color");
  public get fontColor() {
    return this._fontColor;
  }
  public putFontColor(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColor) {
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
export interface DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleFontColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#dark DataDatabricksWorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#light DataDatabricksWorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleFontColorToTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleFontColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleFontColorToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleFontColor | cdktn.IResolvable): any {
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

export class DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleFontColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleFontColor | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleFontColor | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#font_color DataDatabricksWorkspaceSettingV2#font_color}
  */
  readonly fontColor?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleFontColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#font_family DataDatabricksWorkspaceSettingV2#font_family}
  */
  readonly fontFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#font_size DataDatabricksWorkspaceSettingV2#font_size}
  */
  readonly fontSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#font_style DataDatabricksWorkspaceSettingV2#font_style}
  */
  readonly fontStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#font_weight DataDatabricksWorkspaceSettingV2#font_weight}
  */
  readonly fontWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#text_case DataDatabricksWorkspaceSettingV2#text_case}
  */
  readonly textCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#text_decoration DataDatabricksWorkspaceSettingV2#text_decoration}
  */
  readonly textDecoration?: string;
}

export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleToTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitle | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    font_color: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleFontColorToTerraform(struct!.fontColor),
    font_family: cdktn.stringToTerraform(struct!.fontFamily),
    font_size: cdktn.numberToTerraform(struct!.fontSize),
    font_style: cdktn.stringToTerraform(struct!.fontStyle),
    font_weight: cdktn.numberToTerraform(struct!.fontWeight),
    text_case: cdktn.stringToTerraform(struct!.textCase),
    text_decoration: cdktn.stringToTerraform(struct!.textDecoration),
  }
}


export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitle | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    font_color: {
      value: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleFontColorToHclTerraform(struct!.fontColor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleFontColor",
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

export class DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitle | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitle | cdktn.IResolvable | undefined) {
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
  private _fontColor = new DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleFontColorOutputReference(this, "font_color");
  public get fontColor() {
    return this._fontColor;
  }
  public putFontColor(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleFontColor) {
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
export interface DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#base DataDatabricksWorkspaceSettingV2#base}
  */
  readonly base?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsBase;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#field_title DataDatabricksWorkspaceSettingV2#field_title}
  */
  readonly fieldTitle?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldTitle;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#field_value DataDatabricksWorkspaceSettingV2#field_value}
  */
  readonly fieldValue?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldValue;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#widget_description DataDatabricksWorkspaceSettingV2#widget_description}
  */
  readonly widgetDescription?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescription;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#widget_title DataDatabricksWorkspaceSettingV2#widget_title}
  */
  readonly widgetTitle?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitle;
}

export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsToTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    base: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsBaseToTerraform(struct!.base),
    field_title: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleToTerraform(struct!.fieldTitle),
    field_value: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldValueToTerraform(struct!.fieldValue),
    widget_description: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionToTerraform(struct!.widgetDescription),
    widget_title: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleToTerraform(struct!.widgetTitle),
  }
}


export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    base: {
      value: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsBaseToHclTerraform(struct!.base),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsBase",
    },
    field_title: {
      value: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleToHclTerraform(struct!.fieldTitle),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldTitle",
    },
    field_value: {
      value: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldValueToHclTerraform(struct!.fieldValue),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldValue",
    },
    widget_description: {
      value: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionToHclTerraform(struct!.widgetDescription),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescription",
    },
    widget_title: {
      value: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleToHclTerraform(struct!.widgetTitle),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitle",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettings | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettings | cdktn.IResolvable | undefined) {
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
  private _base = new DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsBaseOutputReference(this, "base");
  public get base() {
    return this._base;
  }
  public putBase(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsBase) {
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
  private _fieldTitle = new DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleOutputReference(this, "field_title");
  public get fieldTitle() {
    return this._fieldTitle;
  }
  public putFieldTitle(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldTitle) {
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
  private _fieldValue = new DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldValueOutputReference(this, "field_value");
  public get fieldValue() {
    return this._fieldValue;
  }
  public putFieldValue(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsFieldValue) {
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
  private _widgetDescription = new DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionOutputReference(this, "widget_description");
  public get widgetDescription() {
    return this._widgetDescription;
  }
  public putWidgetDescription(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescription) {
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
  private _widgetTitle = new DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleOutputReference(this, "widget_title");
  public get widgetTitle() {
    return this._widgetTitle;
  }
  public putWidgetTitle(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitle) {
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
export interface DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeGridLineColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#dark DataDatabricksWorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#light DataDatabricksWorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeGridLineColorToTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeGridLineColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeGridLineColorToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeGridLineColor | cdktn.IResolvable): any {
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

export class DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeGridLineColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeGridLineColor | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeGridLineColor | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeSelectionColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#dark DataDatabricksWorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#light DataDatabricksWorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeSelectionColorToTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeSelectionColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeSelectionColorToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeSelectionColor | cdktn.IResolvable): any {
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

export class DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeSelectionColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeSelectionColor | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeSelectionColor | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsNegative {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#dark DataDatabricksWorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#light DataDatabricksWorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsNegativeToTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsNegative | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsNegativeToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsNegative | cdktn.IResolvable): any {
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

export class DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsNegativeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsNegative | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsNegative | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsNeutral {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#dark DataDatabricksWorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#light DataDatabricksWorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsNeutralToTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsNeutral | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsNeutralToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsNeutral | cdktn.IResolvable): any {
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

export class DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsNeutralOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsNeutral | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsNeutral | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsPositive {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#dark DataDatabricksWorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#light DataDatabricksWorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsPositiveToTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsPositive | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsPositiveToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsPositive | cdktn.IResolvable): any {
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

export class DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsPositiveOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsPositive | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsPositive | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeSentimentColors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#negative DataDatabricksWorkspaceSettingV2#negative}
  */
  readonly negative?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsNegative;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#neutral DataDatabricksWorkspaceSettingV2#neutral}
  */
  readonly neutral?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsNeutral;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#positive DataDatabricksWorkspaceSettingV2#positive}
  */
  readonly positive?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsPositive;
}

export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsToTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeSentimentColors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    negative: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsNegativeToTerraform(struct!.negative),
    neutral: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsNeutralToTerraform(struct!.neutral),
    positive: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsPositiveToTerraform(struct!.positive),
  }
}


export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeSentimentColors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    negative: {
      value: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsNegativeToHclTerraform(struct!.negative),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsNegative",
    },
    neutral: {
      value: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsNeutralToHclTerraform(struct!.neutral),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsNeutral",
    },
    positive: {
      value: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsPositiveToHclTerraform(struct!.positive),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsPositive",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeSentimentColors | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeSentimentColors | cdktn.IResolvable | undefined) {
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
  private _negative = new DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsNegativeOutputReference(this, "negative");
  public get negative() {
    return this._negative;
  }
  public putNegative(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsNegative) {
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
  private _neutral = new DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsNeutralOutputReference(this, "neutral");
  public get neutral() {
    return this._neutral;
  }
  public putNeutral(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsNeutral) {
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
  private _positive = new DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsPositiveOutputReference(this, "positive");
  public get positive() {
    return this._positive;
  }
  public putPositive(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsPositive) {
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
export interface DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeWidgetBackgroundColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#dark DataDatabricksWorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#light DataDatabricksWorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeWidgetBackgroundColorToTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeWidgetBackgroundColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeWidgetBackgroundColorToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeWidgetBackgroundColor | cdktn.IResolvable): any {
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

export class DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeWidgetBackgroundColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeWidgetBackgroundColor | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeWidgetBackgroundColor | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeWidgetBorderColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#dark DataDatabricksWorkspaceSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#light DataDatabricksWorkspaceSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeWidgetBorderColorToTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeWidgetBorderColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeWidgetBorderColorToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeWidgetBorderColor | cdktn.IResolvable): any {
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

export class DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeWidgetBorderColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeWidgetBorderColor | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeWidgetBorderColor | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksWorkspaceSettingV2WorkspaceDashboardTheme {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#axis_line_color DataDatabricksWorkspaceSettingV2#axis_line_color}
  */
  readonly axisLineColor?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeAxisLineColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#canvas_background_color DataDatabricksWorkspaceSettingV2#canvas_background_color}
  */
  readonly canvasBackgroundColor?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeCanvasBackgroundColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#continuous_gradient DataDatabricksWorkspaceSettingV2#continuous_gradient}
  */
  readonly continuousGradient?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradient;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#font_color DataDatabricksWorkspaceSettingV2#font_color}
  */
  readonly fontColor?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#font_family DataDatabricksWorkspaceSettingV2#font_family}
  */
  readonly fontFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#font_settings DataDatabricksWorkspaceSettingV2#font_settings}
  */
  readonly fontSettings?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#grid_line_color DataDatabricksWorkspaceSettingV2#grid_line_color}
  */
  readonly gridLineColor?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeGridLineColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#mark_corner_radius DataDatabricksWorkspaceSettingV2#mark_corner_radius}
  */
  readonly markCornerRadius?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#selection_color DataDatabricksWorkspaceSettingV2#selection_color}
  */
  readonly selectionColor?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeSelectionColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#sentiment_colors DataDatabricksWorkspaceSettingV2#sentiment_colors}
  */
  readonly sentimentColors?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeSentimentColors;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#text_box_vertical_align DataDatabricksWorkspaceSettingV2#text_box_vertical_align}
  */
  readonly textBoxVerticalAlign?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#visualization_color_01 DataDatabricksWorkspaceSettingV2#visualization_color_01}
  */
  readonly visualizationColor01?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#visualization_color_02 DataDatabricksWorkspaceSettingV2#visualization_color_02}
  */
  readonly visualizationColor02?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#visualization_color_03 DataDatabricksWorkspaceSettingV2#visualization_color_03}
  */
  readonly visualizationColor03?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#visualization_color_04 DataDatabricksWorkspaceSettingV2#visualization_color_04}
  */
  readonly visualizationColor04?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#visualization_color_05 DataDatabricksWorkspaceSettingV2#visualization_color_05}
  */
  readonly visualizationColor05?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#visualization_color_06 DataDatabricksWorkspaceSettingV2#visualization_color_06}
  */
  readonly visualizationColor06?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#visualization_color_07 DataDatabricksWorkspaceSettingV2#visualization_color_07}
  */
  readonly visualizationColor07?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#visualization_color_08 DataDatabricksWorkspaceSettingV2#visualization_color_08}
  */
  readonly visualizationColor08?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#visualization_color_09 DataDatabricksWorkspaceSettingV2#visualization_color_09}
  */
  readonly visualizationColor09?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#visualization_color_10 DataDatabricksWorkspaceSettingV2#visualization_color_10}
  */
  readonly visualizationColor10?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#visualization_color_11 DataDatabricksWorkspaceSettingV2#visualization_color_11}
  */
  readonly visualizationColor11?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#visualization_color_12 DataDatabricksWorkspaceSettingV2#visualization_color_12}
  */
  readonly visualizationColor12?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#visualization_color_13 DataDatabricksWorkspaceSettingV2#visualization_color_13}
  */
  readonly visualizationColor13?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#visualization_color_14 DataDatabricksWorkspaceSettingV2#visualization_color_14}
  */
  readonly visualizationColor14?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#visualization_color_15 DataDatabricksWorkspaceSettingV2#visualization_color_15}
  */
  readonly visualizationColor15?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#visualization_color_16 DataDatabricksWorkspaceSettingV2#visualization_color_16}
  */
  readonly visualizationColor16?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#visualization_color_17 DataDatabricksWorkspaceSettingV2#visualization_color_17}
  */
  readonly visualizationColor17?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#visualization_color_18 DataDatabricksWorkspaceSettingV2#visualization_color_18}
  */
  readonly visualizationColor18?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#visualization_color_19 DataDatabricksWorkspaceSettingV2#visualization_color_19}
  */
  readonly visualizationColor19?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#visualization_color_20 DataDatabricksWorkspaceSettingV2#visualization_color_20}
  */
  readonly visualizationColor20?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#widget_background_color DataDatabricksWorkspaceSettingV2#widget_background_color}
  */
  readonly widgetBackgroundColor?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeWidgetBackgroundColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#widget_border_color DataDatabricksWorkspaceSettingV2#widget_border_color}
  */
  readonly widgetBorderColor?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeWidgetBorderColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#widget_corner_radius DataDatabricksWorkspaceSettingV2#widget_corner_radius}
  */
  readonly widgetCornerRadius?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#widget_header_alignment DataDatabricksWorkspaceSettingV2#widget_header_alignment}
  */
  readonly widgetHeaderAlignment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#widget_margin DataDatabricksWorkspaceSettingV2#widget_margin}
  */
  readonly widgetMargin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#widget_padding DataDatabricksWorkspaceSettingV2#widget_padding}
  */
  readonly widgetPadding?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#widget_shadow DataDatabricksWorkspaceSettingV2#widget_shadow}
  */
  readonly widgetShadow?: number;
}

export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeToTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardTheme): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    axis_line_color: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeAxisLineColorToTerraform(struct!.axisLineColor),
    canvas_background_color: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeCanvasBackgroundColorToTerraform(struct!.canvasBackgroundColor),
    continuous_gradient: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientToTerraform(struct!.continuousGradient),
    font_color: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontColorToTerraform(struct!.fontColor),
    font_family: cdktn.stringToTerraform(struct!.fontFamily),
    font_settings: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsToTerraform(struct!.fontSettings),
    grid_line_color: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeGridLineColorToTerraform(struct!.gridLineColor),
    mark_corner_radius: cdktn.numberToTerraform(struct!.markCornerRadius),
    selection_color: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeSelectionColorToTerraform(struct!.selectionColor),
    sentiment_colors: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsToTerraform(struct!.sentimentColors),
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
    widget_background_color: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeWidgetBackgroundColorToTerraform(struct!.widgetBackgroundColor),
    widget_border_color: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeWidgetBorderColorToTerraform(struct!.widgetBorderColor),
    widget_corner_radius: cdktn.numberToTerraform(struct!.widgetCornerRadius),
    widget_header_alignment: cdktn.stringToTerraform(struct!.widgetHeaderAlignment),
    widget_margin: cdktn.numberToTerraform(struct!.widgetMargin),
    widget_padding: cdktn.numberToTerraform(struct!.widgetPadding),
    widget_shadow: cdktn.numberToTerraform(struct!.widgetShadow),
  }
}


export function dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceDashboardTheme): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    axis_line_color: {
      value: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeAxisLineColorToHclTerraform(struct!.axisLineColor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeAxisLineColor",
    },
    canvas_background_color: {
      value: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeCanvasBackgroundColorToHclTerraform(struct!.canvasBackgroundColor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeCanvasBackgroundColor",
    },
    continuous_gradient: {
      value: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientToHclTerraform(struct!.continuousGradient),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradient",
    },
    font_color: {
      value: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontColorToHclTerraform(struct!.fontColor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontColor",
    },
    font_family: {
      value: cdktn.stringToHclTerraform(struct!.fontFamily),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_settings: {
      value: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsToHclTerraform(struct!.fontSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettings",
    },
    grid_line_color: {
      value: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeGridLineColorToHclTerraform(struct!.gridLineColor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeGridLineColor",
    },
    mark_corner_radius: {
      value: cdktn.numberToHclTerraform(struct!.markCornerRadius),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    selection_color: {
      value: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeSelectionColorToHclTerraform(struct!.selectionColor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeSelectionColor",
    },
    sentiment_colors: {
      value: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsToHclTerraform(struct!.sentimentColors),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeSentimentColors",
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
      value: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeWidgetBackgroundColorToHclTerraform(struct!.widgetBackgroundColor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeWidgetBackgroundColor",
    },
    widget_border_color: {
      value: dataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeWidgetBorderColorToHclTerraform(struct!.widgetBorderColor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeWidgetBorderColor",
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

export class DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2WorkspaceDashboardTheme | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardTheme | undefined) {
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
  private _axisLineColor = new DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeAxisLineColorOutputReference(this, "axis_line_color");
  public get axisLineColor() {
    return this._axisLineColor;
  }
  public putAxisLineColor(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeAxisLineColor) {
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
  private _canvasBackgroundColor = new DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeCanvasBackgroundColorOutputReference(this, "canvas_background_color");
  public get canvasBackgroundColor() {
    return this._canvasBackgroundColor;
  }
  public putCanvasBackgroundColor(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeCanvasBackgroundColor) {
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
  private _continuousGradient = new DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradientOutputReference(this, "continuous_gradient");
  public get continuousGradient() {
    return this._continuousGradient;
  }
  public putContinuousGradient(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeContinuousGradient) {
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
  private _fontColor = new DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontColorOutputReference(this, "font_color");
  public get fontColor() {
    return this._fontColor;
  }
  public putFontColor(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontColor) {
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
  private _fontSettings = new DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettingsOutputReference(this, "font_settings");
  public get fontSettings() {
    return this._fontSettings;
  }
  public putFontSettings(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeFontSettings) {
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
  private _gridLineColor = new DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeGridLineColorOutputReference(this, "grid_line_color");
  public get gridLineColor() {
    return this._gridLineColor;
  }
  public putGridLineColor(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeGridLineColor) {
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
  private _selectionColor = new DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeSelectionColorOutputReference(this, "selection_color");
  public get selectionColor() {
    return this._selectionColor;
  }
  public putSelectionColor(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeSelectionColor) {
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
  private _sentimentColors = new DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeSentimentColorsOutputReference(this, "sentiment_colors");
  public get sentimentColors() {
    return this._sentimentColors;
  }
  public putSentimentColors(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeSentimentColors) {
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
  private _widgetBackgroundColor = new DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeWidgetBackgroundColorOutputReference(this, "widget_background_color");
  public get widgetBackgroundColor() {
    return this._widgetBackgroundColor;
  }
  public putWidgetBackgroundColor(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeWidgetBackgroundColor) {
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
  private _widgetBorderColor = new DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeWidgetBorderColorOutputReference(this, "widget_border_color");
  public get widgetBorderColor() {
    return this._widgetBorderColor;
  }
  public putWidgetBorderColor(value: DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeWidgetBorderColor) {
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
export interface DataDatabricksWorkspaceSettingV2WorkspaceLabel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#color DataDatabricksWorkspaceSettingV2#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#label DataDatabricksWorkspaceSettingV2#label}
  */
  readonly label?: string;
}

export function dataDatabricksWorkspaceSettingV2WorkspaceLabelToTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceLabel): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    color: cdktn.stringToTerraform(struct!.color),
    label: cdktn.stringToTerraform(struct!.label),
  }
}


export function dataDatabricksWorkspaceSettingV2WorkspaceLabelToHclTerraform(struct?: DataDatabricksWorkspaceSettingV2WorkspaceLabel): any {
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

export class DataDatabricksWorkspaceSettingV2WorkspaceLabelOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceSettingV2WorkspaceLabel | undefined {
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

  public set internalValue(value: DataDatabricksWorkspaceSettingV2WorkspaceLabel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._color = undefined;
      this._label = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._color = value.color;
      this._label = value.label;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2 databricks_workspace_setting_v2}
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
  * @param importFromId The id of the existing DataDatabricksWorkspaceSettingV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksWorkspaceSettingV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_workspace_setting_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/workspace_setting_v2 databricks_workspace_setting_v2} Data Source
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
        providerVersion: '1.145.0',
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

  // effective_workspace_dashboard_theme - computed: true, optional: false, required: false
  private _effectiveWorkspaceDashboardTheme = new DataDatabricksWorkspaceSettingV2EffectiveWorkspaceDashboardThemeOutputReference(this, "effective_workspace_dashboard_theme");
  public get effectiveWorkspaceDashboardTheme() {
    return this._effectiveWorkspaceDashboardTheme;
  }

  // effective_workspace_label - computed: true, optional: false, required: false
  private _effectiveWorkspaceLabel = new DataDatabricksWorkspaceSettingV2EffectiveWorkspaceLabelOutputReference(this, "effective_workspace_label");
  public get effectiveWorkspaceLabel() {
    return this._effectiveWorkspaceLabel;
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

  // workspace_dashboard_theme - computed: true, optional: false, required: false
  private _workspaceDashboardTheme = new DataDatabricksWorkspaceSettingV2WorkspaceDashboardThemeOutputReference(this, "workspace_dashboard_theme");
  public get workspaceDashboardTheme() {
    return this._workspaceDashboardTheme;
  }

  // workspace_label - computed: true, optional: false, required: false
  private _workspaceLabel = new DataDatabricksWorkspaceSettingV2WorkspaceLabelOutputReference(this, "workspace_label");
  public get workspaceLabel() {
    return this._workspaceLabel;
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
