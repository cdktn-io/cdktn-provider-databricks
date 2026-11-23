/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataDatabricksAccountSettingV2Config extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#name DataDatabricksAccountSettingV2#name}
  */
  readonly name: string;
}
export interface DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#access_policy_type DataDatabricksAccountSettingV2#access_policy_type}
  */
  readonly accessPolicyType: string;
}

export function dataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicyToTerraform(struct?: DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_policy_type: cdktn.stringToTerraform(struct!.accessPolicyType),
  }
}


export function dataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicyToHclTerraform(struct?: DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicy): any {
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

export class DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessPolicyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessPolicyType = this._accessPolicyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicy | undefined) {
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
export interface DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomains {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#approved_domains DataDatabricksAccountSettingV2#approved_domains}
  */
  readonly approvedDomains?: string[];
}

export function dataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomainsToTerraform(struct?: DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomains): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    approved_domains: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.approvedDomains),
  }
}


export function dataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomainsToHclTerraform(struct?: DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomains): any {
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

export class DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomains | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._approvedDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.approvedDomains = this._approvedDomains;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomains | undefined) {
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
export interface DataDatabricksAccountSettingV2AllowedAppsUserApiScopes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#allowed_scopes DataDatabricksAccountSettingV2#allowed_scopes}
  */
  readonly allowedScopes?: string[];
}

export function dataDatabricksAccountSettingV2AllowedAppsUserApiScopesToTerraform(struct?: DataDatabricksAccountSettingV2AllowedAppsUserApiScopes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allowed_scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedScopes),
  }
}


export function dataDatabricksAccountSettingV2AllowedAppsUserApiScopesToHclTerraform(struct?: DataDatabricksAccountSettingV2AllowedAppsUserApiScopes): any {
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

export class DataDatabricksAccountSettingV2AllowedAppsUserApiScopesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2AllowedAppsUserApiScopes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedScopes = this._allowedScopes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountSettingV2AllowedAppsUserApiScopes | undefined) {
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
export interface DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#forced_for_compliance_mode DataDatabricksAccountSettingV2#forced_for_compliance_mode}
  */
  readonly forcedForComplianceMode?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#unavailable_for_disabled_entitlement DataDatabricksAccountSettingV2#unavailable_for_disabled_entitlement}
  */
  readonly unavailableForDisabledEntitlement?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#unavailable_for_non_enterprise_tier DataDatabricksAccountSettingV2#unavailable_for_non_enterprise_tier}
  */
  readonly unavailableForNonEnterpriseTier?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsToTerraform(struct?: DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails | cdktn.IResolvable): any {
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


export function dataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsToHclTerraform(struct?: DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails | cdktn.IResolvable): any {
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

export class DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#hours DataDatabricksAccountSettingV2#hours}
  */
  readonly hours?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#minutes DataDatabricksAccountSettingV2#minutes}
  */
  readonly minutes?: number;
}

export function dataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeToTerraform(struct?: DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hours: cdktn.numberToTerraform(struct!.hours),
    minutes: cdktn.numberToTerraform(struct!.minutes),
  }
}


export function dataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeToHclTerraform(struct?: DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime | cdktn.IResolvable): any {
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

export class DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#day_of_week DataDatabricksAccountSettingV2#day_of_week}
  */
  readonly dayOfWeek?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#frequency DataDatabricksAccountSettingV2#frequency}
  */
  readonly frequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#window_start_time DataDatabricksAccountSettingV2#window_start_time}
  */
  readonly windowStartTime?: DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime;
}

export function dataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleToTerraform(struct?: DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    day_of_week: cdktn.stringToTerraform(struct!.dayOfWeek),
    frequency: cdktn.stringToTerraform(struct!.frequency),
    window_start_time: dataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeToTerraform(struct!.windowStartTime),
  }
}


export function dataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleToHclTerraform(struct?: DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule | cdktn.IResolvable): any {
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
      value: dataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeToHclTerraform(struct!.windowStartTime),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule | cdktn.IResolvable | undefined) {
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
  private _windowStartTime = new DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference(this, "window_start_time");
  public get windowStartTime() {
    return this._windowStartTime;
  }
  public putWindowStartTime(value: DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime) {
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
export interface DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#week_day_based_schedule DataDatabricksAccountSettingV2#week_day_based_schedule}
  */
  readonly weekDayBasedSchedule?: DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule;
}

export function dataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowToTerraform(struct?: DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    week_day_based_schedule: dataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleToTerraform(struct!.weekDayBasedSchedule),
  }
}


export function dataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowToHclTerraform(struct?: DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    week_day_based_schedule: {
      value: dataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleToHclTerraform(struct!.weekDayBasedSchedule),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow | cdktn.IResolvable | undefined) {
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
  private _weekDayBasedSchedule = new DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference(this, "week_day_based_schedule");
  public get weekDayBasedSchedule() {
    return this._weekDayBasedSchedule;
  }
  public putWeekDayBasedSchedule(value: DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule) {
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
export interface DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspace {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#can_toggle DataDatabricksAccountSettingV2#can_toggle}
  */
  readonly canToggle?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#enabled DataDatabricksAccountSettingV2#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#enablement_details DataDatabricksAccountSettingV2#enablement_details}
  */
  readonly enablementDetails?: DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#maintenance_window DataDatabricksAccountSettingV2#maintenance_window}
  */
  readonly maintenanceWindow?: DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#restart_even_if_no_updates_available DataDatabricksAccountSettingV2#restart_even_if_no_updates_available}
  */
  readonly restartEvenIfNoUpdatesAvailable?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceToTerraform(struct?: DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspace): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    can_toggle: cdktn.booleanToTerraform(struct!.canToggle),
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    enablement_details: dataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsToTerraform(struct!.enablementDetails),
    maintenance_window: dataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowToTerraform(struct!.maintenanceWindow),
    restart_even_if_no_updates_available: cdktn.booleanToTerraform(struct!.restartEvenIfNoUpdatesAvailable),
  }
}


export function dataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceToHclTerraform(struct?: DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspace): any {
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
      value: dataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsToHclTerraform(struct!.enablementDetails),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails",
    },
    maintenance_window: {
      value: dataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowToHclTerraform(struct!.maintenanceWindow),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow",
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

export class DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspace | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspace | undefined) {
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
  private _enablementDetails = new DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference(this, "enablement_details");
  public get enablementDetails() {
    return this._enablementDetails;
  }
  public putEnablementDetails(value: DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails) {
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
  private _maintenanceWindow = new DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference(this, "maintenance_window");
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }
  public putMaintenanceWindow(value: DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow) {
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
export interface DataDatabricksAccountSettingV2BooleanVal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#value DataDatabricksAccountSettingV2#value}
  */
  readonly value?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountSettingV2BooleanValToTerraform(struct?: DataDatabricksAccountSettingV2BooleanVal): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.booleanToTerraform(struct!.value),
  }
}


export function dataDatabricksAccountSettingV2BooleanValToHclTerraform(struct?: DataDatabricksAccountSettingV2BooleanVal): any {
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

export class DataDatabricksAccountSettingV2BooleanValOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2BooleanVal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountSettingV2BooleanVal | undefined) {
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
export interface DataDatabricksAccountSettingV2CollaborationPlatformConnectivity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#connectivity DataDatabricksAccountSettingV2#connectivity}
  */
  readonly connectivity: string;
}

export function dataDatabricksAccountSettingV2CollaborationPlatformConnectivityToTerraform(struct?: DataDatabricksAccountSettingV2CollaborationPlatformConnectivity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    connectivity: cdktn.stringToTerraform(struct!.connectivity),
  }
}


export function dataDatabricksAccountSettingV2CollaborationPlatformConnectivityToHclTerraform(struct?: DataDatabricksAccountSettingV2CollaborationPlatformConnectivity): any {
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

export class DataDatabricksAccountSettingV2CollaborationPlatformConnectivityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2CollaborationPlatformConnectivity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectivity !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectivity = this._connectivity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountSettingV2CollaborationPlatformConnectivity | undefined) {
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
export interface DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#access_policy_type DataDatabricksAccountSettingV2#access_policy_type}
  */
  readonly accessPolicyType: string;
}

export function dataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyToTerraform(struct?: DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_policy_type: cdktn.stringToTerraform(struct!.accessPolicyType),
  }
}


export function dataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyToHclTerraform(struct?: DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy): any {
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

export class DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessPolicyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessPolicyType = this._accessPolicyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy | undefined) {
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
export interface DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#approved_domains DataDatabricksAccountSettingV2#approved_domains}
  */
  readonly approvedDomains?: string[];
}

export function dataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsToTerraform(struct?: DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    approved_domains: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.approvedDomains),
  }
}


export function dataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsToHclTerraform(struct?: DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains): any {
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

export class DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._approvedDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.approvedDomains = this._approvedDomains;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains | undefined) {
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
export interface DataDatabricksAccountSettingV2EffectiveAllowedAppsUserApiScopes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#allowed_scopes DataDatabricksAccountSettingV2#allowed_scopes}
  */
  readonly allowedScopes?: string[];
}

export function dataDatabricksAccountSettingV2EffectiveAllowedAppsUserApiScopesToTerraform(struct?: DataDatabricksAccountSettingV2EffectiveAllowedAppsUserApiScopes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allowed_scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedScopes),
  }
}


export function dataDatabricksAccountSettingV2EffectiveAllowedAppsUserApiScopesToHclTerraform(struct?: DataDatabricksAccountSettingV2EffectiveAllowedAppsUserApiScopes): any {
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

export class DataDatabricksAccountSettingV2EffectiveAllowedAppsUserApiScopesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2EffectiveAllowedAppsUserApiScopes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedScopes = this._allowedScopes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountSettingV2EffectiveAllowedAppsUserApiScopes | undefined) {
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
export interface DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#forced_for_compliance_mode DataDatabricksAccountSettingV2#forced_for_compliance_mode}
  */
  readonly forcedForComplianceMode?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#unavailable_for_disabled_entitlement DataDatabricksAccountSettingV2#unavailable_for_disabled_entitlement}
  */
  readonly unavailableForDisabledEntitlement?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#unavailable_for_non_enterprise_tier DataDatabricksAccountSettingV2#unavailable_for_non_enterprise_tier}
  */
  readonly unavailableForNonEnterpriseTier?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsToTerraform(struct?: DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails | cdktn.IResolvable): any {
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


export function dataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsToHclTerraform(struct?: DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails | cdktn.IResolvable): any {
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

export class DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#hours DataDatabricksAccountSettingV2#hours}
  */
  readonly hours?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#minutes DataDatabricksAccountSettingV2#minutes}
  */
  readonly minutes?: number;
}

export function dataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeToTerraform(struct?: DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hours: cdktn.numberToTerraform(struct!.hours),
    minutes: cdktn.numberToTerraform(struct!.minutes),
  }
}


export function dataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeToHclTerraform(struct?: DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime | cdktn.IResolvable): any {
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

export class DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#day_of_week DataDatabricksAccountSettingV2#day_of_week}
  */
  readonly dayOfWeek?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#frequency DataDatabricksAccountSettingV2#frequency}
  */
  readonly frequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#window_start_time DataDatabricksAccountSettingV2#window_start_time}
  */
  readonly windowStartTime?: DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime;
}

export function dataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleToTerraform(struct?: DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    day_of_week: cdktn.stringToTerraform(struct!.dayOfWeek),
    frequency: cdktn.stringToTerraform(struct!.frequency),
    window_start_time: dataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeToTerraform(struct!.windowStartTime),
  }
}


export function dataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleToHclTerraform(struct?: DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule | cdktn.IResolvable): any {
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
      value: dataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeToHclTerraform(struct!.windowStartTime),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule | cdktn.IResolvable | undefined) {
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
  private _windowStartTime = new DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference(this, "window_start_time");
  public get windowStartTime() {
    return this._windowStartTime;
  }
  public putWindowStartTime(value: DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime) {
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
export interface DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#week_day_based_schedule DataDatabricksAccountSettingV2#week_day_based_schedule}
  */
  readonly weekDayBasedSchedule?: DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule;
}

export function dataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowToTerraform(struct?: DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    week_day_based_schedule: dataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleToTerraform(struct!.weekDayBasedSchedule),
  }
}


export function dataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowToHclTerraform(struct?: DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    week_day_based_schedule: {
      value: dataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleToHclTerraform(struct!.weekDayBasedSchedule),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow | cdktn.IResolvable | undefined) {
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
  private _weekDayBasedSchedule = new DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference(this, "week_day_based_schedule");
  public get weekDayBasedSchedule() {
    return this._weekDayBasedSchedule;
  }
  public putWeekDayBasedSchedule(value: DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule) {
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
export interface DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspace {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#can_toggle DataDatabricksAccountSettingV2#can_toggle}
  */
  readonly canToggle?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#enabled DataDatabricksAccountSettingV2#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#enablement_details DataDatabricksAccountSettingV2#enablement_details}
  */
  readonly enablementDetails?: DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#maintenance_window DataDatabricksAccountSettingV2#maintenance_window}
  */
  readonly maintenanceWindow?: DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#restart_even_if_no_updates_available DataDatabricksAccountSettingV2#restart_even_if_no_updates_available}
  */
  readonly restartEvenIfNoUpdatesAvailable?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceToTerraform(struct?: DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspace): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    can_toggle: cdktn.booleanToTerraform(struct!.canToggle),
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    enablement_details: dataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsToTerraform(struct!.enablementDetails),
    maintenance_window: dataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowToTerraform(struct!.maintenanceWindow),
    restart_even_if_no_updates_available: cdktn.booleanToTerraform(struct!.restartEvenIfNoUpdatesAvailable),
  }
}


export function dataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceToHclTerraform(struct?: DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspace): any {
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
      value: dataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsToHclTerraform(struct!.enablementDetails),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails",
    },
    maintenance_window: {
      value: dataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowToHclTerraform(struct!.maintenanceWindow),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow",
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

export class DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspace | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspace | undefined) {
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
  private _enablementDetails = new DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference(this, "enablement_details");
  public get enablementDetails() {
    return this._enablementDetails;
  }
  public putEnablementDetails(value: DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails) {
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
  private _maintenanceWindow = new DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference(this, "maintenance_window");
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }
  public putMaintenanceWindow(value: DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow) {
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
export interface DataDatabricksAccountSettingV2EffectiveBooleanVal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#value DataDatabricksAccountSettingV2#value}
  */
  readonly value?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountSettingV2EffectiveBooleanValToTerraform(struct?: DataDatabricksAccountSettingV2EffectiveBooleanVal): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.booleanToTerraform(struct!.value),
  }
}


export function dataDatabricksAccountSettingV2EffectiveBooleanValToHclTerraform(struct?: DataDatabricksAccountSettingV2EffectiveBooleanVal): any {
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

export class DataDatabricksAccountSettingV2EffectiveBooleanValOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2EffectiveBooleanVal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountSettingV2EffectiveBooleanVal | undefined) {
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
export interface DataDatabricksAccountSettingV2EffectiveCollaborationPlatformConnectivity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#connectivity DataDatabricksAccountSettingV2#connectivity}
  */
  readonly connectivity: string;
}

export function dataDatabricksAccountSettingV2EffectiveCollaborationPlatformConnectivityToTerraform(struct?: DataDatabricksAccountSettingV2EffectiveCollaborationPlatformConnectivity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    connectivity: cdktn.stringToTerraform(struct!.connectivity),
  }
}


export function dataDatabricksAccountSettingV2EffectiveCollaborationPlatformConnectivityToHclTerraform(struct?: DataDatabricksAccountSettingV2EffectiveCollaborationPlatformConnectivity): any {
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

export class DataDatabricksAccountSettingV2EffectiveCollaborationPlatformConnectivityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2EffectiveCollaborationPlatformConnectivity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectivity !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectivity = this._connectivity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountSettingV2EffectiveCollaborationPlatformConnectivity | undefined) {
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
export interface DataDatabricksAccountSettingV2EffectiveIntegerVal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#value DataDatabricksAccountSettingV2#value}
  */
  readonly value?: number;
}

export function dataDatabricksAccountSettingV2EffectiveIntegerValToTerraform(struct?: DataDatabricksAccountSettingV2EffectiveIntegerVal): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function dataDatabricksAccountSettingV2EffectiveIntegerValToHclTerraform(struct?: DataDatabricksAccountSettingV2EffectiveIntegerVal): any {
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

export class DataDatabricksAccountSettingV2EffectiveIntegerValOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2EffectiveIntegerVal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountSettingV2EffectiveIntegerVal | undefined) {
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
export interface DataDatabricksAccountSettingV2EffectiveOperationalEmailCustomRecipient {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#email DataDatabricksAccountSettingV2#email}
  */
  readonly email?: string;
}

export function dataDatabricksAccountSettingV2EffectiveOperationalEmailCustomRecipientToTerraform(struct?: DataDatabricksAccountSettingV2EffectiveOperationalEmailCustomRecipient): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    email: cdktn.stringToTerraform(struct!.email),
  }
}


export function dataDatabricksAccountSettingV2EffectiveOperationalEmailCustomRecipientToHclTerraform(struct?: DataDatabricksAccountSettingV2EffectiveOperationalEmailCustomRecipient): any {
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

export class DataDatabricksAccountSettingV2EffectiveOperationalEmailCustomRecipientOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2EffectiveOperationalEmailCustomRecipient | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountSettingV2EffectiveOperationalEmailCustomRecipient | undefined) {
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
export interface DataDatabricksAccountSettingV2EffectivePersonalCompute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#value DataDatabricksAccountSettingV2#value}
  */
  readonly value?: string;
}

export function dataDatabricksAccountSettingV2EffectivePersonalComputeToTerraform(struct?: DataDatabricksAccountSettingV2EffectivePersonalCompute): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function dataDatabricksAccountSettingV2EffectivePersonalComputeToHclTerraform(struct?: DataDatabricksAccountSettingV2EffectivePersonalCompute): any {
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

export class DataDatabricksAccountSettingV2EffectivePersonalComputeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2EffectivePersonalCompute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountSettingV2EffectivePersonalCompute | undefined) {
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
export interface DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdmins {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#disable_gov_tag_creation DataDatabricksAccountSettingV2#disable_gov_tag_creation}
  */
  readonly disableGovTagCreation?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#status DataDatabricksAccountSettingV2#status}
  */
  readonly status: string;
}

export function dataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdminsToTerraform(struct?: DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdmins): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    disable_gov_tag_creation: cdktn.booleanToTerraform(struct!.disableGovTagCreation),
    status: cdktn.stringToTerraform(struct!.status),
  }
}


export function dataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdminsToHclTerraform(struct?: DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdmins): any {
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

export class DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdmins | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdmins | undefined) {
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
export interface DataDatabricksAccountSettingV2EffectiveStringVal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#value DataDatabricksAccountSettingV2#value}
  */
  readonly value?: string;
}

export function dataDatabricksAccountSettingV2EffectiveStringValToTerraform(struct?: DataDatabricksAccountSettingV2EffectiveStringVal): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function dataDatabricksAccountSettingV2EffectiveStringValToHclTerraform(struct?: DataDatabricksAccountSettingV2EffectiveStringVal): any {
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

export class DataDatabricksAccountSettingV2EffectiveStringValOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2EffectiveStringVal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountSettingV2EffectiveStringVal | undefined) {
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
export interface DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeAxisLineColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#dark DataDatabricksAccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#light DataDatabricksAccountSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeAxisLineColorToTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeAxisLineColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeAxisLineColorToHclTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeAxisLineColor | cdktn.IResolvable): any {
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

export class DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeAxisLineColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeAxisLineColor | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeAxisLineColor | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeCanvasBackgroundColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#dark DataDatabricksAccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#light DataDatabricksAccountSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeCanvasBackgroundColorToTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeCanvasBackgroundColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeCanvasBackgroundColorToHclTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeCanvasBackgroundColor | cdktn.IResolvable): any {
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

export class DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeCanvasBackgroundColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeCanvasBackgroundColor | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeCanvasBackgroundColor | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEnd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#dark DataDatabricksAccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#light DataDatabricksAccountSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEndToTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEnd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEndToHclTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEnd | cdktn.IResolvable): any {
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

export class DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEndOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEnd | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEnd | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMid {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#dark DataDatabricksAccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#light DataDatabricksAccountSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMidToTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMid | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMidToHclTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMid | cdktn.IResolvable): any {
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

export class DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMidOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMid | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMid | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStart {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#dark DataDatabricksAccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#light DataDatabricksAccountSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStartToTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStart | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStartToHclTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStart | cdktn.IResolvable): any {
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

export class DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStartOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStart | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStart | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDiverging {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#end DataDatabricksAccountSettingV2#end}
  */
  readonly end?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEnd;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#mid DataDatabricksAccountSettingV2#mid}
  */
  readonly mid?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMid;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#start DataDatabricksAccountSettingV2#start}
  */
  readonly start?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStart;
}

export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingToTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDiverging | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEndToTerraform(struct!.end),
    mid: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMidToTerraform(struct!.mid),
    start: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStartToTerraform(struct!.start),
  }
}


export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingToHclTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDiverging | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end: {
      value: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEndToHclTerraform(struct!.end),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEnd",
    },
    mid: {
      value: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMidToHclTerraform(struct!.mid),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMid",
    },
    start: {
      value: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStartToHclTerraform(struct!.start),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStart",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDiverging | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDiverging | cdktn.IResolvable | undefined) {
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
  private _end = new DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEndOutputReference(this, "end");
  public get end() {
    return this._end;
  }
  public putEnd(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEnd) {
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
  private _mid = new DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMidOutputReference(this, "mid");
  public get mid() {
    return this._mid;
  }
  public putMid(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMid) {
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
  private _start = new DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStartOutputReference(this, "start");
  public get start() {
    return this._start;
  }
  public putStart(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStart) {
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
export interface DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEnd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#dark DataDatabricksAccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#light DataDatabricksAccountSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEndToTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEnd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEndToHclTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEnd | cdktn.IResolvable): any {
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

export class DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEndOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEnd | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEnd | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStart {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#dark DataDatabricksAccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#light DataDatabricksAccountSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStartToTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStart | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStartToHclTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStart | cdktn.IResolvable): any {
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

export class DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStartOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStart | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStart | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequential {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#end DataDatabricksAccountSettingV2#end}
  */
  readonly end?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEnd;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#start DataDatabricksAccountSettingV2#start}
  */
  readonly start?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStart;
}

export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialToTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequential | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEndToTerraform(struct!.end),
    start: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStartToTerraform(struct!.start),
  }
}


export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialToHclTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequential | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end: {
      value: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEndToHclTerraform(struct!.end),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEnd",
    },
    start: {
      value: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStartToHclTerraform(struct!.start),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStart",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequential | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequential | cdktn.IResolvable | undefined) {
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
  private _end = new DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEndOutputReference(this, "end");
  public get end() {
    return this._end;
  }
  public putEnd(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEnd) {
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
  private _start = new DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStartOutputReference(this, "start");
  public get start() {
    return this._start;
  }
  public putStart(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStart) {
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
export interface DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkMode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#color DataDatabricksAccountSettingV2#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#color_scheme DataDatabricksAccountSettingV2#color_scheme}
  */
  readonly colorScheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#custom_diverging DataDatabricksAccountSettingV2#custom_diverging}
  */
  readonly customDiverging?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDiverging;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#custom_sequential DataDatabricksAccountSettingV2#custom_sequential}
  */
  readonly customSequential?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequential;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#from_categorical_index DataDatabricksAccountSettingV2#from_categorical_index}
  */
  readonly fromCategoricalIndex?: number;
}

export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeToTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkMode | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    color: cdktn.stringToTerraform(struct!.color),
    color_scheme: cdktn.stringToTerraform(struct!.colorScheme),
    custom_diverging: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingToTerraform(struct!.customDiverging),
    custom_sequential: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialToTerraform(struct!.customSequential),
    from_categorical_index: cdktn.numberToTerraform(struct!.fromCategoricalIndex),
  }
}


export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeToHclTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkMode | cdktn.IResolvable): any {
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
      value: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingToHclTerraform(struct!.customDiverging),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDiverging",
    },
    custom_sequential: {
      value: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialToHclTerraform(struct!.customSequential),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequential",
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

export class DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkMode | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkMode | cdktn.IResolvable | undefined) {
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
  private _customDiverging = new DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingOutputReference(this, "custom_diverging");
  public get customDiverging() {
    return this._customDiverging;
  }
  public putCustomDiverging(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomDiverging) {
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
  private _customSequential = new DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialOutputReference(this, "custom_sequential");
  public get customSequential() {
    return this._customSequential;
  }
  public putCustomSequential(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeCustomSequential) {
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
export interface DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEnd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#dark DataDatabricksAccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#light DataDatabricksAccountSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEndToTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEnd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEndToHclTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEnd | cdktn.IResolvable): any {
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

export class DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEndOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEnd | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEnd | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMid {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#dark DataDatabricksAccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#light DataDatabricksAccountSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMidToTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMid | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMidToHclTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMid | cdktn.IResolvable): any {
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

export class DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMidOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMid | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMid | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStart {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#dark DataDatabricksAccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#light DataDatabricksAccountSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStartToTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStart | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStartToHclTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStart | cdktn.IResolvable): any {
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

export class DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStartOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStart | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStart | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDiverging {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#end DataDatabricksAccountSettingV2#end}
  */
  readonly end?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEnd;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#mid DataDatabricksAccountSettingV2#mid}
  */
  readonly mid?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMid;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#start DataDatabricksAccountSettingV2#start}
  */
  readonly start?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStart;
}

export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingToTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDiverging | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEndToTerraform(struct!.end),
    mid: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMidToTerraform(struct!.mid),
    start: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStartToTerraform(struct!.start),
  }
}


export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingToHclTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDiverging | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end: {
      value: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEndToHclTerraform(struct!.end),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEnd",
    },
    mid: {
      value: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMidToHclTerraform(struct!.mid),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMid",
    },
    start: {
      value: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStartToHclTerraform(struct!.start),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStart",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDiverging | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDiverging | cdktn.IResolvable | undefined) {
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
  private _end = new DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEndOutputReference(this, "end");
  public get end() {
    return this._end;
  }
  public putEnd(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEnd) {
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
  private _mid = new DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMidOutputReference(this, "mid");
  public get mid() {
    return this._mid;
  }
  public putMid(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMid) {
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
  private _start = new DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStartOutputReference(this, "start");
  public get start() {
    return this._start;
  }
  public putStart(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStart) {
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
export interface DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEnd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#dark DataDatabricksAccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#light DataDatabricksAccountSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEndToTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEnd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEndToHclTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEnd | cdktn.IResolvable): any {
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

export class DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEndOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEnd | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEnd | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStart {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#dark DataDatabricksAccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#light DataDatabricksAccountSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStartToTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStart | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStartToHclTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStart | cdktn.IResolvable): any {
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

export class DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStartOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStart | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStart | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequential {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#end DataDatabricksAccountSettingV2#end}
  */
  readonly end?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEnd;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#start DataDatabricksAccountSettingV2#start}
  */
  readonly start?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStart;
}

export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialToTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequential | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEndToTerraform(struct!.end),
    start: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStartToTerraform(struct!.start),
  }
}


export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialToHclTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequential | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end: {
      value: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEndToHclTerraform(struct!.end),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEnd",
    },
    start: {
      value: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStartToHclTerraform(struct!.start),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStart",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequential | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequential | cdktn.IResolvable | undefined) {
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
  private _end = new DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEndOutputReference(this, "end");
  public get end() {
    return this._end;
  }
  public putEnd(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEnd) {
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
  private _start = new DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStartOutputReference(this, "start");
  public get start() {
    return this._start;
  }
  public putStart(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStart) {
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
export interface DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightMode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#color DataDatabricksAccountSettingV2#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#color_scheme DataDatabricksAccountSettingV2#color_scheme}
  */
  readonly colorScheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#custom_diverging DataDatabricksAccountSettingV2#custom_diverging}
  */
  readonly customDiverging?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDiverging;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#custom_sequential DataDatabricksAccountSettingV2#custom_sequential}
  */
  readonly customSequential?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequential;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#from_categorical_index DataDatabricksAccountSettingV2#from_categorical_index}
  */
  readonly fromCategoricalIndex?: number;
}

export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeToTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightMode | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    color: cdktn.stringToTerraform(struct!.color),
    color_scheme: cdktn.stringToTerraform(struct!.colorScheme),
    custom_diverging: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingToTerraform(struct!.customDiverging),
    custom_sequential: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialToTerraform(struct!.customSequential),
    from_categorical_index: cdktn.numberToTerraform(struct!.fromCategoricalIndex),
  }
}


export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeToHclTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightMode | cdktn.IResolvable): any {
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
      value: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingToHclTerraform(struct!.customDiverging),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDiverging",
    },
    custom_sequential: {
      value: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialToHclTerraform(struct!.customSequential),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequential",
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

export class DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightMode | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightMode | cdktn.IResolvable | undefined) {
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
  private _customDiverging = new DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingOutputReference(this, "custom_diverging");
  public get customDiverging() {
    return this._customDiverging;
  }
  public putCustomDiverging(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomDiverging) {
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
  private _customSequential = new DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialOutputReference(this, "custom_sequential");
  public get customSequential() {
    return this._customSequential;
  }
  public putCustomSequential(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeCustomSequential) {
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
export interface DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradient {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#dark_mode DataDatabricksAccountSettingV2#dark_mode}
  */
  readonly darkMode?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkMode;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#light_mode DataDatabricksAccountSettingV2#light_mode}
  */
  readonly lightMode?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightMode;
}

export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientToTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradient | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark_mode: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeToTerraform(struct!.darkMode),
    light_mode: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeToTerraform(struct!.lightMode),
  }
}


export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientToHclTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradient | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dark_mode: {
      value: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeToHclTerraform(struct!.darkMode),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkMode",
    },
    light_mode: {
      value: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeToHclTerraform(struct!.lightMode),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightMode",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradient | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradient | cdktn.IResolvable | undefined) {
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
  private _darkMode = new DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkModeOutputReference(this, "dark_mode");
  public get darkMode() {
    return this._darkMode;
  }
  public putDarkMode(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientDarkMode) {
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
  private _lightMode = new DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightModeOutputReference(this, "light_mode");
  public get lightMode() {
    return this._lightMode;
  }
  public putLightMode(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientLightMode) {
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
export interface DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#dark DataDatabricksAccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#light DataDatabricksAccountSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontColorToTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontColorToHclTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontColor | cdktn.IResolvable): any {
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

export class DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontColor | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontColor | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseFontColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#dark DataDatabricksAccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#light DataDatabricksAccountSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseFontColorToTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseFontColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseFontColorToHclTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseFontColor | cdktn.IResolvable): any {
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

export class DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseFontColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseFontColor | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseFontColor | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBase {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#font_color DataDatabricksAccountSettingV2#font_color}
  */
  readonly fontColor?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseFontColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#font_family DataDatabricksAccountSettingV2#font_family}
  */
  readonly fontFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#font_size DataDatabricksAccountSettingV2#font_size}
  */
  readonly fontSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#font_style DataDatabricksAccountSettingV2#font_style}
  */
  readonly fontStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#font_weight DataDatabricksAccountSettingV2#font_weight}
  */
  readonly fontWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#text_case DataDatabricksAccountSettingV2#text_case}
  */
  readonly textCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#text_decoration DataDatabricksAccountSettingV2#text_decoration}
  */
  readonly textDecoration?: string;
}

export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseToTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBase | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    font_color: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseFontColorToTerraform(struct!.fontColor),
    font_family: cdktn.stringToTerraform(struct!.fontFamily),
    font_size: cdktn.numberToTerraform(struct!.fontSize),
    font_style: cdktn.stringToTerraform(struct!.fontStyle),
    font_weight: cdktn.numberToTerraform(struct!.fontWeight),
    text_case: cdktn.stringToTerraform(struct!.textCase),
    text_decoration: cdktn.stringToTerraform(struct!.textDecoration),
  }
}


export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseToHclTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBase | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    font_color: {
      value: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseFontColorToHclTerraform(struct!.fontColor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseFontColor",
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

export class DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBase | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBase | cdktn.IResolvable | undefined) {
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
  private _fontColor = new DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseFontColorOutputReference(this, "font_color");
  public get fontColor() {
    return this._fontColor;
  }
  public putFontColor(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseFontColor) {
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
export interface DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleFontColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#dark DataDatabricksAccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#light DataDatabricksAccountSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleFontColorToTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleFontColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleFontColorToHclTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleFontColor | cdktn.IResolvable): any {
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

export class DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleFontColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleFontColor | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleFontColor | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#font_color DataDatabricksAccountSettingV2#font_color}
  */
  readonly fontColor?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleFontColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#font_family DataDatabricksAccountSettingV2#font_family}
  */
  readonly fontFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#font_size DataDatabricksAccountSettingV2#font_size}
  */
  readonly fontSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#font_style DataDatabricksAccountSettingV2#font_style}
  */
  readonly fontStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#font_weight DataDatabricksAccountSettingV2#font_weight}
  */
  readonly fontWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#text_case DataDatabricksAccountSettingV2#text_case}
  */
  readonly textCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#text_decoration DataDatabricksAccountSettingV2#text_decoration}
  */
  readonly textDecoration?: string;
}

export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleToTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitle | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    font_color: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleFontColorToTerraform(struct!.fontColor),
    font_family: cdktn.stringToTerraform(struct!.fontFamily),
    font_size: cdktn.numberToTerraform(struct!.fontSize),
    font_style: cdktn.stringToTerraform(struct!.fontStyle),
    font_weight: cdktn.numberToTerraform(struct!.fontWeight),
    text_case: cdktn.stringToTerraform(struct!.textCase),
    text_decoration: cdktn.stringToTerraform(struct!.textDecoration),
  }
}


export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleToHclTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitle | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    font_color: {
      value: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleFontColorToHclTerraform(struct!.fontColor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleFontColor",
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

export class DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitle | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitle | cdktn.IResolvable | undefined) {
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
  private _fontColor = new DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleFontColorOutputReference(this, "font_color");
  public get fontColor() {
    return this._fontColor;
  }
  public putFontColor(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleFontColor) {
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
export interface DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueFontColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#dark DataDatabricksAccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#light DataDatabricksAccountSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueFontColorToTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueFontColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueFontColorToHclTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueFontColor | cdktn.IResolvable): any {
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

export class DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueFontColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueFontColor | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueFontColor | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#font_color DataDatabricksAccountSettingV2#font_color}
  */
  readonly fontColor?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueFontColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#font_family DataDatabricksAccountSettingV2#font_family}
  */
  readonly fontFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#font_size DataDatabricksAccountSettingV2#font_size}
  */
  readonly fontSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#font_style DataDatabricksAccountSettingV2#font_style}
  */
  readonly fontStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#font_weight DataDatabricksAccountSettingV2#font_weight}
  */
  readonly fontWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#text_case DataDatabricksAccountSettingV2#text_case}
  */
  readonly textCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#text_decoration DataDatabricksAccountSettingV2#text_decoration}
  */
  readonly textDecoration?: string;
}

export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueToTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    font_color: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueFontColorToTerraform(struct!.fontColor),
    font_family: cdktn.stringToTerraform(struct!.fontFamily),
    font_size: cdktn.numberToTerraform(struct!.fontSize),
    font_style: cdktn.stringToTerraform(struct!.fontStyle),
    font_weight: cdktn.numberToTerraform(struct!.fontWeight),
    text_case: cdktn.stringToTerraform(struct!.textCase),
    text_decoration: cdktn.stringToTerraform(struct!.textDecoration),
  }
}


export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueToHclTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    font_color: {
      value: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueFontColorToHclTerraform(struct!.fontColor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueFontColor",
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

export class DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValue | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValue | cdktn.IResolvable | undefined) {
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
  private _fontColor = new DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueFontColorOutputReference(this, "font_color");
  public get fontColor() {
    return this._fontColor;
  }
  public putFontColor(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueFontColor) {
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
export interface DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#dark DataDatabricksAccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#light DataDatabricksAccountSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColorToTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColorToHclTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColor | cdktn.IResolvable): any {
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

export class DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColor | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColor | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescription {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#font_color DataDatabricksAccountSettingV2#font_color}
  */
  readonly fontColor?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#font_family DataDatabricksAccountSettingV2#font_family}
  */
  readonly fontFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#font_size DataDatabricksAccountSettingV2#font_size}
  */
  readonly fontSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#font_style DataDatabricksAccountSettingV2#font_style}
  */
  readonly fontStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#font_weight DataDatabricksAccountSettingV2#font_weight}
  */
  readonly fontWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#text_case DataDatabricksAccountSettingV2#text_case}
  */
  readonly textCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#text_decoration DataDatabricksAccountSettingV2#text_decoration}
  */
  readonly textDecoration?: string;
}

export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionToTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescription | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    font_color: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColorToTerraform(struct!.fontColor),
    font_family: cdktn.stringToTerraform(struct!.fontFamily),
    font_size: cdktn.numberToTerraform(struct!.fontSize),
    font_style: cdktn.stringToTerraform(struct!.fontStyle),
    font_weight: cdktn.numberToTerraform(struct!.fontWeight),
    text_case: cdktn.stringToTerraform(struct!.textCase),
    text_decoration: cdktn.stringToTerraform(struct!.textDecoration),
  }
}


export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionToHclTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescription | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    font_color: {
      value: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColorToHclTerraform(struct!.fontColor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColor",
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

export class DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescription | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescription | cdktn.IResolvable | undefined) {
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
  private _fontColor = new DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColorOutputReference(this, "font_color");
  public get fontColor() {
    return this._fontColor;
  }
  public putFontColor(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColor) {
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
export interface DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleFontColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#dark DataDatabricksAccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#light DataDatabricksAccountSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleFontColorToTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleFontColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleFontColorToHclTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleFontColor | cdktn.IResolvable): any {
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

export class DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleFontColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleFontColor | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleFontColor | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#font_color DataDatabricksAccountSettingV2#font_color}
  */
  readonly fontColor?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleFontColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#font_family DataDatabricksAccountSettingV2#font_family}
  */
  readonly fontFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#font_size DataDatabricksAccountSettingV2#font_size}
  */
  readonly fontSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#font_style DataDatabricksAccountSettingV2#font_style}
  */
  readonly fontStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#font_weight DataDatabricksAccountSettingV2#font_weight}
  */
  readonly fontWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#text_case DataDatabricksAccountSettingV2#text_case}
  */
  readonly textCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#text_decoration DataDatabricksAccountSettingV2#text_decoration}
  */
  readonly textDecoration?: string;
}

export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleToTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitle | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    font_color: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleFontColorToTerraform(struct!.fontColor),
    font_family: cdktn.stringToTerraform(struct!.fontFamily),
    font_size: cdktn.numberToTerraform(struct!.fontSize),
    font_style: cdktn.stringToTerraform(struct!.fontStyle),
    font_weight: cdktn.numberToTerraform(struct!.fontWeight),
    text_case: cdktn.stringToTerraform(struct!.textCase),
    text_decoration: cdktn.stringToTerraform(struct!.textDecoration),
  }
}


export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleToHclTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitle | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    font_color: {
      value: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleFontColorToHclTerraform(struct!.fontColor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleFontColor",
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

export class DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitle | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitle | cdktn.IResolvable | undefined) {
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
  private _fontColor = new DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleFontColorOutputReference(this, "font_color");
  public get fontColor() {
    return this._fontColor;
  }
  public putFontColor(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleFontColor) {
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
export interface DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#base DataDatabricksAccountSettingV2#base}
  */
  readonly base?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBase;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#field_title DataDatabricksAccountSettingV2#field_title}
  */
  readonly fieldTitle?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitle;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#field_value DataDatabricksAccountSettingV2#field_value}
  */
  readonly fieldValue?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValue;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#widget_description DataDatabricksAccountSettingV2#widget_description}
  */
  readonly widgetDescription?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescription;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#widget_title DataDatabricksAccountSettingV2#widget_title}
  */
  readonly widgetTitle?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitle;
}

export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsToTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    base: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseToTerraform(struct!.base),
    field_title: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleToTerraform(struct!.fieldTitle),
    field_value: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueToTerraform(struct!.fieldValue),
    widget_description: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionToTerraform(struct!.widgetDescription),
    widget_title: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleToTerraform(struct!.widgetTitle),
  }
}


export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsToHclTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    base: {
      value: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseToHclTerraform(struct!.base),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBase",
    },
    field_title: {
      value: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleToHclTerraform(struct!.fieldTitle),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitle",
    },
    field_value: {
      value: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueToHclTerraform(struct!.fieldValue),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValue",
    },
    widget_description: {
      value: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionToHclTerraform(struct!.widgetDescription),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescription",
    },
    widget_title: {
      value: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleToHclTerraform(struct!.widgetTitle),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitle",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettings | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettings | cdktn.IResolvable | undefined) {
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
  private _base = new DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBaseOutputReference(this, "base");
  public get base() {
    return this._base;
  }
  public putBase(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsBase) {
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
  private _fieldTitle = new DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitleOutputReference(this, "field_title");
  public get fieldTitle() {
    return this._fieldTitle;
  }
  public putFieldTitle(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldTitle) {
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
  private _fieldValue = new DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValueOutputReference(this, "field_value");
  public get fieldValue() {
    return this._fieldValue;
  }
  public putFieldValue(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsFieldValue) {
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
  private _widgetDescription = new DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescriptionOutputReference(this, "widget_description");
  public get widgetDescription() {
    return this._widgetDescription;
  }
  public putWidgetDescription(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetDescription) {
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
  private _widgetTitle = new DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitleOutputReference(this, "widget_title");
  public get widgetTitle() {
    return this._widgetTitle;
  }
  public putWidgetTitle(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsWidgetTitle) {
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
export interface DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeGridLineColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#dark DataDatabricksAccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#light DataDatabricksAccountSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeGridLineColorToTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeGridLineColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeGridLineColorToHclTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeGridLineColor | cdktn.IResolvable): any {
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

export class DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeGridLineColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeGridLineColor | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeGridLineColor | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeSelectionColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#dark DataDatabricksAccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#light DataDatabricksAccountSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeSelectionColorToTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeSelectionColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeSelectionColorToHclTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeSelectionColor | cdktn.IResolvable): any {
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

export class DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeSelectionColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeSelectionColor | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeSelectionColor | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNegative {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#dark DataDatabricksAccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#light DataDatabricksAccountSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNegativeToTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNegative | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNegativeToHclTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNegative | cdktn.IResolvable): any {
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

export class DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNegativeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNegative | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNegative | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNeutral {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#dark DataDatabricksAccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#light DataDatabricksAccountSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNeutralToTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNeutral | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNeutralToHclTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNeutral | cdktn.IResolvable): any {
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

export class DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNeutralOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNeutral | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNeutral | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsPositive {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#dark DataDatabricksAccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#light DataDatabricksAccountSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsPositiveToTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsPositive | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsPositiveToHclTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsPositive | cdktn.IResolvable): any {
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

export class DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsPositiveOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsPositive | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsPositive | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#negative DataDatabricksAccountSettingV2#negative}
  */
  readonly negative?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNegative;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#neutral DataDatabricksAccountSettingV2#neutral}
  */
  readonly neutral?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNeutral;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#positive DataDatabricksAccountSettingV2#positive}
  */
  readonly positive?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsPositive;
}

export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsToTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    negative: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNegativeToTerraform(struct!.negative),
    neutral: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNeutralToTerraform(struct!.neutral),
    positive: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsPositiveToTerraform(struct!.positive),
  }
}


export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsToHclTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    negative: {
      value: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNegativeToHclTerraform(struct!.negative),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNegative",
    },
    neutral: {
      value: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNeutralToHclTerraform(struct!.neutral),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNeutral",
    },
    positive: {
      value: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsPositiveToHclTerraform(struct!.positive),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsPositive",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColors | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColors | cdktn.IResolvable | undefined) {
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
  private _negative = new DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNegativeOutputReference(this, "negative");
  public get negative() {
    return this._negative;
  }
  public putNegative(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNegative) {
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
  private _neutral = new DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNeutralOutputReference(this, "neutral");
  public get neutral() {
    return this._neutral;
  }
  public putNeutral(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsNeutral) {
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
  private _positive = new DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsPositiveOutputReference(this, "positive");
  public get positive() {
    return this._positive;
  }
  public putPositive(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsPositive) {
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
export interface DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeWidgetBackgroundColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#dark DataDatabricksAccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#light DataDatabricksAccountSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeWidgetBackgroundColorToTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeWidgetBackgroundColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeWidgetBackgroundColorToHclTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeWidgetBackgroundColor | cdktn.IResolvable): any {
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

export class DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeWidgetBackgroundColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeWidgetBackgroundColor | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeWidgetBackgroundColor | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeWidgetBorderColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#dark DataDatabricksAccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#light DataDatabricksAccountSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeWidgetBorderColorToTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeWidgetBorderColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeWidgetBorderColorToHclTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeWidgetBorderColor | cdktn.IResolvable): any {
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

export class DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeWidgetBorderColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeWidgetBorderColor | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeWidgetBorderColor | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardTheme {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#axis_line_color DataDatabricksAccountSettingV2#axis_line_color}
  */
  readonly axisLineColor?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeAxisLineColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#canvas_background_color DataDatabricksAccountSettingV2#canvas_background_color}
  */
  readonly canvasBackgroundColor?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeCanvasBackgroundColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#continuous_gradient DataDatabricksAccountSettingV2#continuous_gradient}
  */
  readonly continuousGradient?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradient;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#font_color DataDatabricksAccountSettingV2#font_color}
  */
  readonly fontColor?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#font_family DataDatabricksAccountSettingV2#font_family}
  */
  readonly fontFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#font_settings DataDatabricksAccountSettingV2#font_settings}
  */
  readonly fontSettings?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#grid_line_color DataDatabricksAccountSettingV2#grid_line_color}
  */
  readonly gridLineColor?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeGridLineColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#mark_corner_radius DataDatabricksAccountSettingV2#mark_corner_radius}
  */
  readonly markCornerRadius?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#selection_color DataDatabricksAccountSettingV2#selection_color}
  */
  readonly selectionColor?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeSelectionColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#sentiment_colors DataDatabricksAccountSettingV2#sentiment_colors}
  */
  readonly sentimentColors?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColors;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#text_box_vertical_align DataDatabricksAccountSettingV2#text_box_vertical_align}
  */
  readonly textBoxVerticalAlign?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#visualization_color_01 DataDatabricksAccountSettingV2#visualization_color_01}
  */
  readonly visualizationColor01?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#visualization_color_02 DataDatabricksAccountSettingV2#visualization_color_02}
  */
  readonly visualizationColor02?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#visualization_color_03 DataDatabricksAccountSettingV2#visualization_color_03}
  */
  readonly visualizationColor03?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#visualization_color_04 DataDatabricksAccountSettingV2#visualization_color_04}
  */
  readonly visualizationColor04?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#visualization_color_05 DataDatabricksAccountSettingV2#visualization_color_05}
  */
  readonly visualizationColor05?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#visualization_color_06 DataDatabricksAccountSettingV2#visualization_color_06}
  */
  readonly visualizationColor06?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#visualization_color_07 DataDatabricksAccountSettingV2#visualization_color_07}
  */
  readonly visualizationColor07?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#visualization_color_08 DataDatabricksAccountSettingV2#visualization_color_08}
  */
  readonly visualizationColor08?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#visualization_color_09 DataDatabricksAccountSettingV2#visualization_color_09}
  */
  readonly visualizationColor09?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#visualization_color_10 DataDatabricksAccountSettingV2#visualization_color_10}
  */
  readonly visualizationColor10?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#visualization_color_11 DataDatabricksAccountSettingV2#visualization_color_11}
  */
  readonly visualizationColor11?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#visualization_color_12 DataDatabricksAccountSettingV2#visualization_color_12}
  */
  readonly visualizationColor12?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#visualization_color_13 DataDatabricksAccountSettingV2#visualization_color_13}
  */
  readonly visualizationColor13?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#visualization_color_14 DataDatabricksAccountSettingV2#visualization_color_14}
  */
  readonly visualizationColor14?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#visualization_color_15 DataDatabricksAccountSettingV2#visualization_color_15}
  */
  readonly visualizationColor15?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#visualization_color_16 DataDatabricksAccountSettingV2#visualization_color_16}
  */
  readonly visualizationColor16?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#visualization_color_17 DataDatabricksAccountSettingV2#visualization_color_17}
  */
  readonly visualizationColor17?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#visualization_color_18 DataDatabricksAccountSettingV2#visualization_color_18}
  */
  readonly visualizationColor18?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#visualization_color_19 DataDatabricksAccountSettingV2#visualization_color_19}
  */
  readonly visualizationColor19?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#visualization_color_20 DataDatabricksAccountSettingV2#visualization_color_20}
  */
  readonly visualizationColor20?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#widget_background_color DataDatabricksAccountSettingV2#widget_background_color}
  */
  readonly widgetBackgroundColor?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeWidgetBackgroundColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#widget_border_color DataDatabricksAccountSettingV2#widget_border_color}
  */
  readonly widgetBorderColor?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeWidgetBorderColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#widget_corner_radius DataDatabricksAccountSettingV2#widget_corner_radius}
  */
  readonly widgetCornerRadius?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#widget_header_alignment DataDatabricksAccountSettingV2#widget_header_alignment}
  */
  readonly widgetHeaderAlignment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#widget_margin DataDatabricksAccountSettingV2#widget_margin}
  */
  readonly widgetMargin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#widget_padding DataDatabricksAccountSettingV2#widget_padding}
  */
  readonly widgetPadding?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#widget_shadow DataDatabricksAccountSettingV2#widget_shadow}
  */
  readonly widgetShadow?: number;
}

export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeToTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardTheme): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    axis_line_color: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeAxisLineColorToTerraform(struct!.axisLineColor),
    canvas_background_color: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeCanvasBackgroundColorToTerraform(struct!.canvasBackgroundColor),
    continuous_gradient: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientToTerraform(struct!.continuousGradient),
    font_color: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontColorToTerraform(struct!.fontColor),
    font_family: cdktn.stringToTerraform(struct!.fontFamily),
    font_settings: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsToTerraform(struct!.fontSettings),
    grid_line_color: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeGridLineColorToTerraform(struct!.gridLineColor),
    mark_corner_radius: cdktn.numberToTerraform(struct!.markCornerRadius),
    selection_color: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeSelectionColorToTerraform(struct!.selectionColor),
    sentiment_colors: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsToTerraform(struct!.sentimentColors),
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
    widget_background_color: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeWidgetBackgroundColorToTerraform(struct!.widgetBackgroundColor),
    widget_border_color: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeWidgetBorderColorToTerraform(struct!.widgetBorderColor),
    widget_corner_radius: cdktn.numberToTerraform(struct!.widgetCornerRadius),
    widget_header_alignment: cdktn.stringToTerraform(struct!.widgetHeaderAlignment),
    widget_margin: cdktn.numberToTerraform(struct!.widgetMargin),
    widget_padding: cdktn.numberToTerraform(struct!.widgetPadding),
    widget_shadow: cdktn.numberToTerraform(struct!.widgetShadow),
  }
}


export function dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeToHclTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardTheme): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    axis_line_color: {
      value: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeAxisLineColorToHclTerraform(struct!.axisLineColor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeAxisLineColor",
    },
    canvas_background_color: {
      value: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeCanvasBackgroundColorToHclTerraform(struct!.canvasBackgroundColor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeCanvasBackgroundColor",
    },
    continuous_gradient: {
      value: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientToHclTerraform(struct!.continuousGradient),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradient",
    },
    font_color: {
      value: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontColorToHclTerraform(struct!.fontColor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontColor",
    },
    font_family: {
      value: cdktn.stringToHclTerraform(struct!.fontFamily),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_settings: {
      value: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsToHclTerraform(struct!.fontSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettings",
    },
    grid_line_color: {
      value: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeGridLineColorToHclTerraform(struct!.gridLineColor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeGridLineColor",
    },
    mark_corner_radius: {
      value: cdktn.numberToHclTerraform(struct!.markCornerRadius),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    selection_color: {
      value: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeSelectionColorToHclTerraform(struct!.selectionColor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeSelectionColor",
    },
    sentiment_colors: {
      value: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsToHclTerraform(struct!.sentimentColors),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColors",
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
      value: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeWidgetBackgroundColorToHclTerraform(struct!.widgetBackgroundColor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeWidgetBackgroundColor",
    },
    widget_border_color: {
      value: dataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeWidgetBorderColorToHclTerraform(struct!.widgetBorderColor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeWidgetBorderColor",
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

export class DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardTheme | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardTheme | undefined) {
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
  private _axisLineColor = new DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeAxisLineColorOutputReference(this, "axis_line_color");
  public get axisLineColor() {
    return this._axisLineColor;
  }
  public putAxisLineColor(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeAxisLineColor) {
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
  private _canvasBackgroundColor = new DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeCanvasBackgroundColorOutputReference(this, "canvas_background_color");
  public get canvasBackgroundColor() {
    return this._canvasBackgroundColor;
  }
  public putCanvasBackgroundColor(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeCanvasBackgroundColor) {
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
  private _continuousGradient = new DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradientOutputReference(this, "continuous_gradient");
  public get continuousGradient() {
    return this._continuousGradient;
  }
  public putContinuousGradient(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeContinuousGradient) {
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
  private _fontColor = new DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontColorOutputReference(this, "font_color");
  public get fontColor() {
    return this._fontColor;
  }
  public putFontColor(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontColor) {
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
  private _fontSettings = new DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettingsOutputReference(this, "font_settings");
  public get fontSettings() {
    return this._fontSettings;
  }
  public putFontSettings(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeFontSettings) {
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
  private _gridLineColor = new DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeGridLineColorOutputReference(this, "grid_line_color");
  public get gridLineColor() {
    return this._gridLineColor;
  }
  public putGridLineColor(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeGridLineColor) {
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
  private _selectionColor = new DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeSelectionColorOutputReference(this, "selection_color");
  public get selectionColor() {
    return this._selectionColor;
  }
  public putSelectionColor(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeSelectionColor) {
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
  private _sentimentColors = new DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColorsOutputReference(this, "sentiment_colors");
  public get sentimentColors() {
    return this._sentimentColors;
  }
  public putSentimentColors(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeSentimentColors) {
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
  private _widgetBackgroundColor = new DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeWidgetBackgroundColorOutputReference(this, "widget_background_color");
  public get widgetBackgroundColor() {
    return this._widgetBackgroundColor;
  }
  public putWidgetBackgroundColor(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeWidgetBackgroundColor) {
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
  private _widgetBorderColor = new DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeWidgetBorderColorOutputReference(this, "widget_border_color");
  public get widgetBorderColor() {
    return this._widgetBorderColor;
  }
  public putWidgetBorderColor(value: DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeWidgetBorderColor) {
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
export interface DataDatabricksAccountSettingV2EffectiveWorkspaceLabel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#color DataDatabricksAccountSettingV2#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#label DataDatabricksAccountSettingV2#label}
  */
  readonly label?: string;
}

export function dataDatabricksAccountSettingV2EffectiveWorkspaceLabelToTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceLabel): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    color: cdktn.stringToTerraform(struct!.color),
    label: cdktn.stringToTerraform(struct!.label),
  }
}


export function dataDatabricksAccountSettingV2EffectiveWorkspaceLabelToHclTerraform(struct?: DataDatabricksAccountSettingV2EffectiveWorkspaceLabel): any {
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

export class DataDatabricksAccountSettingV2EffectiveWorkspaceLabelOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2EffectiveWorkspaceLabel | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2EffectiveWorkspaceLabel | undefined) {
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
export interface DataDatabricksAccountSettingV2IntegerVal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#value DataDatabricksAccountSettingV2#value}
  */
  readonly value?: number;
}

export function dataDatabricksAccountSettingV2IntegerValToTerraform(struct?: DataDatabricksAccountSettingV2IntegerVal): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function dataDatabricksAccountSettingV2IntegerValToHclTerraform(struct?: DataDatabricksAccountSettingV2IntegerVal): any {
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

export class DataDatabricksAccountSettingV2IntegerValOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2IntegerVal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountSettingV2IntegerVal | undefined) {
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
export interface DataDatabricksAccountSettingV2OperationalEmailCustomRecipient {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#email DataDatabricksAccountSettingV2#email}
  */
  readonly email?: string;
}

export function dataDatabricksAccountSettingV2OperationalEmailCustomRecipientToTerraform(struct?: DataDatabricksAccountSettingV2OperationalEmailCustomRecipient): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    email: cdktn.stringToTerraform(struct!.email),
  }
}


export function dataDatabricksAccountSettingV2OperationalEmailCustomRecipientToHclTerraform(struct?: DataDatabricksAccountSettingV2OperationalEmailCustomRecipient): any {
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

export class DataDatabricksAccountSettingV2OperationalEmailCustomRecipientOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2OperationalEmailCustomRecipient | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountSettingV2OperationalEmailCustomRecipient | undefined) {
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
export interface DataDatabricksAccountSettingV2PersonalCompute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#value DataDatabricksAccountSettingV2#value}
  */
  readonly value?: string;
}

export function dataDatabricksAccountSettingV2PersonalComputeToTerraform(struct?: DataDatabricksAccountSettingV2PersonalCompute): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function dataDatabricksAccountSettingV2PersonalComputeToHclTerraform(struct?: DataDatabricksAccountSettingV2PersonalCompute): any {
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

export class DataDatabricksAccountSettingV2PersonalComputeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2PersonalCompute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountSettingV2PersonalCompute | undefined) {
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
export interface DataDatabricksAccountSettingV2RestrictWorkspaceAdmins {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#disable_gov_tag_creation DataDatabricksAccountSettingV2#disable_gov_tag_creation}
  */
  readonly disableGovTagCreation?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#status DataDatabricksAccountSettingV2#status}
  */
  readonly status: string;
}

export function dataDatabricksAccountSettingV2RestrictWorkspaceAdminsToTerraform(struct?: DataDatabricksAccountSettingV2RestrictWorkspaceAdmins): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    disable_gov_tag_creation: cdktn.booleanToTerraform(struct!.disableGovTagCreation),
    status: cdktn.stringToTerraform(struct!.status),
  }
}


export function dataDatabricksAccountSettingV2RestrictWorkspaceAdminsToHclTerraform(struct?: DataDatabricksAccountSettingV2RestrictWorkspaceAdmins): any {
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

export class DataDatabricksAccountSettingV2RestrictWorkspaceAdminsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2RestrictWorkspaceAdmins | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2RestrictWorkspaceAdmins | undefined) {
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
export interface DataDatabricksAccountSettingV2StringVal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#value DataDatabricksAccountSettingV2#value}
  */
  readonly value?: string;
}

export function dataDatabricksAccountSettingV2StringValToTerraform(struct?: DataDatabricksAccountSettingV2StringVal): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function dataDatabricksAccountSettingV2StringValToHclTerraform(struct?: DataDatabricksAccountSettingV2StringVal): any {
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

export class DataDatabricksAccountSettingV2StringValOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2StringVal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountSettingV2StringVal | undefined) {
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
export interface DataDatabricksAccountSettingV2WorkspaceDashboardThemeAxisLineColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#dark DataDatabricksAccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#light DataDatabricksAccountSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeAxisLineColorToTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeAxisLineColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeAxisLineColorToHclTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeAxisLineColor | cdktn.IResolvable): any {
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

export class DataDatabricksAccountSettingV2WorkspaceDashboardThemeAxisLineColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2WorkspaceDashboardThemeAxisLineColor | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeAxisLineColor | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountSettingV2WorkspaceDashboardThemeCanvasBackgroundColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#dark DataDatabricksAccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#light DataDatabricksAccountSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeCanvasBackgroundColorToTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeCanvasBackgroundColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeCanvasBackgroundColorToHclTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeCanvasBackgroundColor | cdktn.IResolvable): any {
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

export class DataDatabricksAccountSettingV2WorkspaceDashboardThemeCanvasBackgroundColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2WorkspaceDashboardThemeCanvasBackgroundColor | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeCanvasBackgroundColor | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEnd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#dark DataDatabricksAccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#light DataDatabricksAccountSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEndToTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEnd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEndToHclTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEnd | cdktn.IResolvable): any {
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

export class DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEndOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEnd | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEnd | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMid {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#dark DataDatabricksAccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#light DataDatabricksAccountSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMidToTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMid | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMidToHclTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMid | cdktn.IResolvable): any {
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

export class DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMidOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMid | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMid | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStart {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#dark DataDatabricksAccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#light DataDatabricksAccountSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStartToTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStart | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStartToHclTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStart | cdktn.IResolvable): any {
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

export class DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStartOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStart | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStart | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDiverging {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#end DataDatabricksAccountSettingV2#end}
  */
  readonly end?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEnd;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#mid DataDatabricksAccountSettingV2#mid}
  */
  readonly mid?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMid;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#start DataDatabricksAccountSettingV2#start}
  */
  readonly start?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStart;
}

export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingToTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDiverging | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end: dataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEndToTerraform(struct!.end),
    mid: dataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMidToTerraform(struct!.mid),
    start: dataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStartToTerraform(struct!.start),
  }
}


export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingToHclTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDiverging | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end: {
      value: dataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEndToHclTerraform(struct!.end),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEnd",
    },
    mid: {
      value: dataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMidToHclTerraform(struct!.mid),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMid",
    },
    start: {
      value: dataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStartToHclTerraform(struct!.start),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStart",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDiverging | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDiverging | cdktn.IResolvable | undefined) {
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
  private _end = new DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEndOutputReference(this, "end");
  public get end() {
    return this._end;
  }
  public putEnd(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingEnd) {
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
  private _mid = new DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMidOutputReference(this, "mid");
  public get mid() {
    return this._mid;
  }
  public putMid(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingMid) {
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
  private _start = new DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStartOutputReference(this, "start");
  public get start() {
    return this._start;
  }
  public putStart(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingStart) {
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
export interface DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEnd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#dark DataDatabricksAccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#light DataDatabricksAccountSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEndToTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEnd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEndToHclTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEnd | cdktn.IResolvable): any {
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

export class DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEndOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEnd | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEnd | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStart {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#dark DataDatabricksAccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#light DataDatabricksAccountSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStartToTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStart | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStartToHclTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStart | cdktn.IResolvable): any {
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

export class DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStartOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStart | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStart | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequential {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#end DataDatabricksAccountSettingV2#end}
  */
  readonly end?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEnd;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#start DataDatabricksAccountSettingV2#start}
  */
  readonly start?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStart;
}

export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialToTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequential | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end: dataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEndToTerraform(struct!.end),
    start: dataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStartToTerraform(struct!.start),
  }
}


export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialToHclTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequential | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end: {
      value: dataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEndToHclTerraform(struct!.end),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEnd",
    },
    start: {
      value: dataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStartToHclTerraform(struct!.start),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStart",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequential | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequential | cdktn.IResolvable | undefined) {
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
  private _end = new DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEndOutputReference(this, "end");
  public get end() {
    return this._end;
  }
  public putEnd(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialEnd) {
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
  private _start = new DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStartOutputReference(this, "start");
  public get start() {
    return this._start;
  }
  public putStart(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialStart) {
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
export interface DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkMode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#color DataDatabricksAccountSettingV2#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#color_scheme DataDatabricksAccountSettingV2#color_scheme}
  */
  readonly colorScheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#custom_diverging DataDatabricksAccountSettingV2#custom_diverging}
  */
  readonly customDiverging?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDiverging;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#custom_sequential DataDatabricksAccountSettingV2#custom_sequential}
  */
  readonly customSequential?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequential;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#from_categorical_index DataDatabricksAccountSettingV2#from_categorical_index}
  */
  readonly fromCategoricalIndex?: number;
}

export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeToTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkMode | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    color: cdktn.stringToTerraform(struct!.color),
    color_scheme: cdktn.stringToTerraform(struct!.colorScheme),
    custom_diverging: dataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingToTerraform(struct!.customDiverging),
    custom_sequential: dataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialToTerraform(struct!.customSequential),
    from_categorical_index: cdktn.numberToTerraform(struct!.fromCategoricalIndex),
  }
}


export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeToHclTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkMode | cdktn.IResolvable): any {
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
      value: dataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingToHclTerraform(struct!.customDiverging),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDiverging",
    },
    custom_sequential: {
      value: dataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialToHclTerraform(struct!.customSequential),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequential",
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

export class DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkMode | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkMode | cdktn.IResolvable | undefined) {
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
  private _customDiverging = new DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDivergingOutputReference(this, "custom_diverging");
  public get customDiverging() {
    return this._customDiverging;
  }
  public putCustomDiverging(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomDiverging) {
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
  private _customSequential = new DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequentialOutputReference(this, "custom_sequential");
  public get customSequential() {
    return this._customSequential;
  }
  public putCustomSequential(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeCustomSequential) {
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
export interface DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEnd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#dark DataDatabricksAccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#light DataDatabricksAccountSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEndToTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEnd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEndToHclTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEnd | cdktn.IResolvable): any {
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

export class DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEndOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEnd | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEnd | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMid {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#dark DataDatabricksAccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#light DataDatabricksAccountSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMidToTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMid | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMidToHclTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMid | cdktn.IResolvable): any {
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

export class DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMidOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMid | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMid | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStart {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#dark DataDatabricksAccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#light DataDatabricksAccountSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStartToTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStart | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStartToHclTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStart | cdktn.IResolvable): any {
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

export class DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStartOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStart | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStart | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDiverging {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#end DataDatabricksAccountSettingV2#end}
  */
  readonly end?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEnd;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#mid DataDatabricksAccountSettingV2#mid}
  */
  readonly mid?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMid;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#start DataDatabricksAccountSettingV2#start}
  */
  readonly start?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStart;
}

export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingToTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDiverging | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end: dataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEndToTerraform(struct!.end),
    mid: dataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMidToTerraform(struct!.mid),
    start: dataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStartToTerraform(struct!.start),
  }
}


export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingToHclTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDiverging | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end: {
      value: dataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEndToHclTerraform(struct!.end),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEnd",
    },
    mid: {
      value: dataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMidToHclTerraform(struct!.mid),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMid",
    },
    start: {
      value: dataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStartToHclTerraform(struct!.start),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStart",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDiverging | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDiverging | cdktn.IResolvable | undefined) {
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
  private _end = new DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEndOutputReference(this, "end");
  public get end() {
    return this._end;
  }
  public putEnd(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingEnd) {
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
  private _mid = new DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMidOutputReference(this, "mid");
  public get mid() {
    return this._mid;
  }
  public putMid(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingMid) {
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
  private _start = new DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStartOutputReference(this, "start");
  public get start() {
    return this._start;
  }
  public putStart(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingStart) {
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
export interface DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEnd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#dark DataDatabricksAccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#light DataDatabricksAccountSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEndToTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEnd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEndToHclTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEnd | cdktn.IResolvable): any {
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

export class DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEndOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEnd | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEnd | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStart {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#dark DataDatabricksAccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#light DataDatabricksAccountSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStartToTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStart | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStartToHclTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStart | cdktn.IResolvable): any {
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

export class DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStartOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStart | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStart | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequential {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#end DataDatabricksAccountSettingV2#end}
  */
  readonly end?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEnd;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#start DataDatabricksAccountSettingV2#start}
  */
  readonly start?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStart;
}

export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialToTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequential | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end: dataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEndToTerraform(struct!.end),
    start: dataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStartToTerraform(struct!.start),
  }
}


export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialToHclTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequential | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end: {
      value: dataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEndToHclTerraform(struct!.end),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEnd",
    },
    start: {
      value: dataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStartToHclTerraform(struct!.start),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStart",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequential | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequential | cdktn.IResolvable | undefined) {
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
  private _end = new DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEndOutputReference(this, "end");
  public get end() {
    return this._end;
  }
  public putEnd(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialEnd) {
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
  private _start = new DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStartOutputReference(this, "start");
  public get start() {
    return this._start;
  }
  public putStart(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialStart) {
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
export interface DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightMode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#color DataDatabricksAccountSettingV2#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#color_scheme DataDatabricksAccountSettingV2#color_scheme}
  */
  readonly colorScheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#custom_diverging DataDatabricksAccountSettingV2#custom_diverging}
  */
  readonly customDiverging?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDiverging;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#custom_sequential DataDatabricksAccountSettingV2#custom_sequential}
  */
  readonly customSequential?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequential;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#from_categorical_index DataDatabricksAccountSettingV2#from_categorical_index}
  */
  readonly fromCategoricalIndex?: number;
}

export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeToTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightMode | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    color: cdktn.stringToTerraform(struct!.color),
    color_scheme: cdktn.stringToTerraform(struct!.colorScheme),
    custom_diverging: dataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingToTerraform(struct!.customDiverging),
    custom_sequential: dataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialToTerraform(struct!.customSequential),
    from_categorical_index: cdktn.numberToTerraform(struct!.fromCategoricalIndex),
  }
}


export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeToHclTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightMode | cdktn.IResolvable): any {
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
      value: dataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingToHclTerraform(struct!.customDiverging),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDiverging",
    },
    custom_sequential: {
      value: dataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialToHclTerraform(struct!.customSequential),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequential",
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

export class DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightMode | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightMode | cdktn.IResolvable | undefined) {
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
  private _customDiverging = new DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDivergingOutputReference(this, "custom_diverging");
  public get customDiverging() {
    return this._customDiverging;
  }
  public putCustomDiverging(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomDiverging) {
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
  private _customSequential = new DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequentialOutputReference(this, "custom_sequential");
  public get customSequential() {
    return this._customSequential;
  }
  public putCustomSequential(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeCustomSequential) {
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
export interface DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradient {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#dark_mode DataDatabricksAccountSettingV2#dark_mode}
  */
  readonly darkMode?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkMode;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#light_mode DataDatabricksAccountSettingV2#light_mode}
  */
  readonly lightMode?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightMode;
}

export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientToTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradient | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark_mode: dataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeToTerraform(struct!.darkMode),
    light_mode: dataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeToTerraform(struct!.lightMode),
  }
}


export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientToHclTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradient | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dark_mode: {
      value: dataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeToHclTerraform(struct!.darkMode),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkMode",
    },
    light_mode: {
      value: dataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeToHclTerraform(struct!.lightMode),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightMode",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradient | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradient | cdktn.IResolvable | undefined) {
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
  private _darkMode = new DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkModeOutputReference(this, "dark_mode");
  public get darkMode() {
    return this._darkMode;
  }
  public putDarkMode(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientDarkMode) {
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
  private _lightMode = new DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightModeOutputReference(this, "light_mode");
  public get lightMode() {
    return this._lightMode;
  }
  public putLightMode(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientLightMode) {
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
export interface DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#dark DataDatabricksAccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#light DataDatabricksAccountSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeFontColorToTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeFontColorToHclTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontColor | cdktn.IResolvable): any {
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

export class DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontColor | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontColor | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsBaseFontColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#dark DataDatabricksAccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#light DataDatabricksAccountSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsBaseFontColorToTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsBaseFontColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsBaseFontColorToHclTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsBaseFontColor | cdktn.IResolvable): any {
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

export class DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsBaseFontColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsBaseFontColor | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsBaseFontColor | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsBase {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#font_color DataDatabricksAccountSettingV2#font_color}
  */
  readonly fontColor?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsBaseFontColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#font_family DataDatabricksAccountSettingV2#font_family}
  */
  readonly fontFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#font_size DataDatabricksAccountSettingV2#font_size}
  */
  readonly fontSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#font_style DataDatabricksAccountSettingV2#font_style}
  */
  readonly fontStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#font_weight DataDatabricksAccountSettingV2#font_weight}
  */
  readonly fontWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#text_case DataDatabricksAccountSettingV2#text_case}
  */
  readonly textCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#text_decoration DataDatabricksAccountSettingV2#text_decoration}
  */
  readonly textDecoration?: string;
}

export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsBaseToTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsBase | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    font_color: dataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsBaseFontColorToTerraform(struct!.fontColor),
    font_family: cdktn.stringToTerraform(struct!.fontFamily),
    font_size: cdktn.numberToTerraform(struct!.fontSize),
    font_style: cdktn.stringToTerraform(struct!.fontStyle),
    font_weight: cdktn.numberToTerraform(struct!.fontWeight),
    text_case: cdktn.stringToTerraform(struct!.textCase),
    text_decoration: cdktn.stringToTerraform(struct!.textDecoration),
  }
}


export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsBaseToHclTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsBase | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    font_color: {
      value: dataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsBaseFontColorToHclTerraform(struct!.fontColor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsBaseFontColor",
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

export class DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsBaseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsBase | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsBase | cdktn.IResolvable | undefined) {
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
  private _fontColor = new DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsBaseFontColorOutputReference(this, "font_color");
  public get fontColor() {
    return this._fontColor;
  }
  public putFontColor(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsBaseFontColor) {
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
export interface DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleFontColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#dark DataDatabricksAccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#light DataDatabricksAccountSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleFontColorToTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleFontColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleFontColorToHclTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleFontColor | cdktn.IResolvable): any {
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

export class DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleFontColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleFontColor | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleFontColor | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsFieldTitle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#font_color DataDatabricksAccountSettingV2#font_color}
  */
  readonly fontColor?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleFontColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#font_family DataDatabricksAccountSettingV2#font_family}
  */
  readonly fontFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#font_size DataDatabricksAccountSettingV2#font_size}
  */
  readonly fontSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#font_style DataDatabricksAccountSettingV2#font_style}
  */
  readonly fontStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#font_weight DataDatabricksAccountSettingV2#font_weight}
  */
  readonly fontWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#text_case DataDatabricksAccountSettingV2#text_case}
  */
  readonly textCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#text_decoration DataDatabricksAccountSettingV2#text_decoration}
  */
  readonly textDecoration?: string;
}

export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleToTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsFieldTitle | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    font_color: dataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleFontColorToTerraform(struct!.fontColor),
    font_family: cdktn.stringToTerraform(struct!.fontFamily),
    font_size: cdktn.numberToTerraform(struct!.fontSize),
    font_style: cdktn.stringToTerraform(struct!.fontStyle),
    font_weight: cdktn.numberToTerraform(struct!.fontWeight),
    text_case: cdktn.stringToTerraform(struct!.textCase),
    text_decoration: cdktn.stringToTerraform(struct!.textDecoration),
  }
}


export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleToHclTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsFieldTitle | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    font_color: {
      value: dataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleFontColorToHclTerraform(struct!.fontColor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleFontColor",
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

export class DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsFieldTitle | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsFieldTitle | cdktn.IResolvable | undefined) {
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
  private _fontColor = new DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleFontColorOutputReference(this, "font_color");
  public get fontColor() {
    return this._fontColor;
  }
  public putFontColor(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleFontColor) {
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
export interface DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsFieldValueFontColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#dark DataDatabricksAccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#light DataDatabricksAccountSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsFieldValueFontColorToTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsFieldValueFontColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsFieldValueFontColorToHclTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsFieldValueFontColor | cdktn.IResolvable): any {
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

export class DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsFieldValueFontColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsFieldValueFontColor | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsFieldValueFontColor | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsFieldValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#font_color DataDatabricksAccountSettingV2#font_color}
  */
  readonly fontColor?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsFieldValueFontColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#font_family DataDatabricksAccountSettingV2#font_family}
  */
  readonly fontFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#font_size DataDatabricksAccountSettingV2#font_size}
  */
  readonly fontSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#font_style DataDatabricksAccountSettingV2#font_style}
  */
  readonly fontStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#font_weight DataDatabricksAccountSettingV2#font_weight}
  */
  readonly fontWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#text_case DataDatabricksAccountSettingV2#text_case}
  */
  readonly textCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#text_decoration DataDatabricksAccountSettingV2#text_decoration}
  */
  readonly textDecoration?: string;
}

export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsFieldValueToTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsFieldValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    font_color: dataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsFieldValueFontColorToTerraform(struct!.fontColor),
    font_family: cdktn.stringToTerraform(struct!.fontFamily),
    font_size: cdktn.numberToTerraform(struct!.fontSize),
    font_style: cdktn.stringToTerraform(struct!.fontStyle),
    font_weight: cdktn.numberToTerraform(struct!.fontWeight),
    text_case: cdktn.stringToTerraform(struct!.textCase),
    text_decoration: cdktn.stringToTerraform(struct!.textDecoration),
  }
}


export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsFieldValueToHclTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsFieldValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    font_color: {
      value: dataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsFieldValueFontColorToHclTerraform(struct!.fontColor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsFieldValueFontColor",
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

export class DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsFieldValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsFieldValue | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsFieldValue | cdktn.IResolvable | undefined) {
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
  private _fontColor = new DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsFieldValueFontColorOutputReference(this, "font_color");
  public get fontColor() {
    return this._fontColor;
  }
  public putFontColor(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsFieldValueFontColor) {
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
export interface DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#dark DataDatabricksAccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#light DataDatabricksAccountSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColorToTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColorToHclTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColor | cdktn.IResolvable): any {
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

export class DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColor | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColor | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescription {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#font_color DataDatabricksAccountSettingV2#font_color}
  */
  readonly fontColor?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#font_family DataDatabricksAccountSettingV2#font_family}
  */
  readonly fontFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#font_size DataDatabricksAccountSettingV2#font_size}
  */
  readonly fontSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#font_style DataDatabricksAccountSettingV2#font_style}
  */
  readonly fontStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#font_weight DataDatabricksAccountSettingV2#font_weight}
  */
  readonly fontWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#text_case DataDatabricksAccountSettingV2#text_case}
  */
  readonly textCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#text_decoration DataDatabricksAccountSettingV2#text_decoration}
  */
  readonly textDecoration?: string;
}

export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionToTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescription | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    font_color: dataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColorToTerraform(struct!.fontColor),
    font_family: cdktn.stringToTerraform(struct!.fontFamily),
    font_size: cdktn.numberToTerraform(struct!.fontSize),
    font_style: cdktn.stringToTerraform(struct!.fontStyle),
    font_weight: cdktn.numberToTerraform(struct!.fontWeight),
    text_case: cdktn.stringToTerraform(struct!.textCase),
    text_decoration: cdktn.stringToTerraform(struct!.textDecoration),
  }
}


export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionToHclTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescription | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    font_color: {
      value: dataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColorToHclTerraform(struct!.fontColor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColor",
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

export class DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescription | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescription | cdktn.IResolvable | undefined) {
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
  private _fontColor = new DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColorOutputReference(this, "font_color");
  public get fontColor() {
    return this._fontColor;
  }
  public putFontColor(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionFontColor) {
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
export interface DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleFontColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#dark DataDatabricksAccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#light DataDatabricksAccountSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleFontColorToTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleFontColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleFontColorToHclTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleFontColor | cdktn.IResolvable): any {
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

export class DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleFontColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleFontColor | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleFontColor | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#font_color DataDatabricksAccountSettingV2#font_color}
  */
  readonly fontColor?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleFontColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#font_family DataDatabricksAccountSettingV2#font_family}
  */
  readonly fontFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#font_size DataDatabricksAccountSettingV2#font_size}
  */
  readonly fontSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#font_style DataDatabricksAccountSettingV2#font_style}
  */
  readonly fontStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#font_weight DataDatabricksAccountSettingV2#font_weight}
  */
  readonly fontWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#text_case DataDatabricksAccountSettingV2#text_case}
  */
  readonly textCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#text_decoration DataDatabricksAccountSettingV2#text_decoration}
  */
  readonly textDecoration?: string;
}

export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleToTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitle | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    font_color: dataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleFontColorToTerraform(struct!.fontColor),
    font_family: cdktn.stringToTerraform(struct!.fontFamily),
    font_size: cdktn.numberToTerraform(struct!.fontSize),
    font_style: cdktn.stringToTerraform(struct!.fontStyle),
    font_weight: cdktn.numberToTerraform(struct!.fontWeight),
    text_case: cdktn.stringToTerraform(struct!.textCase),
    text_decoration: cdktn.stringToTerraform(struct!.textDecoration),
  }
}


export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleToHclTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitle | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    font_color: {
      value: dataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleFontColorToHclTerraform(struct!.fontColor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleFontColor",
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

export class DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitle | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitle | cdktn.IResolvable | undefined) {
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
  private _fontColor = new DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleFontColorOutputReference(this, "font_color");
  public get fontColor() {
    return this._fontColor;
  }
  public putFontColor(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleFontColor) {
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
export interface DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#base DataDatabricksAccountSettingV2#base}
  */
  readonly base?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsBase;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#field_title DataDatabricksAccountSettingV2#field_title}
  */
  readonly fieldTitle?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsFieldTitle;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#field_value DataDatabricksAccountSettingV2#field_value}
  */
  readonly fieldValue?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsFieldValue;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#widget_description DataDatabricksAccountSettingV2#widget_description}
  */
  readonly widgetDescription?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescription;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#widget_title DataDatabricksAccountSettingV2#widget_title}
  */
  readonly widgetTitle?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitle;
}

export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsToTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    base: dataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsBaseToTerraform(struct!.base),
    field_title: dataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleToTerraform(struct!.fieldTitle),
    field_value: dataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsFieldValueToTerraform(struct!.fieldValue),
    widget_description: dataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionToTerraform(struct!.widgetDescription),
    widget_title: dataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleToTerraform(struct!.widgetTitle),
  }
}


export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsToHclTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    base: {
      value: dataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsBaseToHclTerraform(struct!.base),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsBase",
    },
    field_title: {
      value: dataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleToHclTerraform(struct!.fieldTitle),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsFieldTitle",
    },
    field_value: {
      value: dataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsFieldValueToHclTerraform(struct!.fieldValue),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsFieldValue",
    },
    widget_description: {
      value: dataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionToHclTerraform(struct!.widgetDescription),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescription",
    },
    widget_title: {
      value: dataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleToHclTerraform(struct!.widgetTitle),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitle",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettings | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettings | cdktn.IResolvable | undefined) {
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
  private _base = new DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsBaseOutputReference(this, "base");
  public get base() {
    return this._base;
  }
  public putBase(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsBase) {
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
  private _fieldTitle = new DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsFieldTitleOutputReference(this, "field_title");
  public get fieldTitle() {
    return this._fieldTitle;
  }
  public putFieldTitle(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsFieldTitle) {
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
  private _fieldValue = new DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsFieldValueOutputReference(this, "field_value");
  public get fieldValue() {
    return this._fieldValue;
  }
  public putFieldValue(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsFieldValue) {
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
  private _widgetDescription = new DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescriptionOutputReference(this, "widget_description");
  public get widgetDescription() {
    return this._widgetDescription;
  }
  public putWidgetDescription(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetDescription) {
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
  private _widgetTitle = new DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitleOutputReference(this, "widget_title");
  public get widgetTitle() {
    return this._widgetTitle;
  }
  public putWidgetTitle(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsWidgetTitle) {
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
export interface DataDatabricksAccountSettingV2WorkspaceDashboardThemeGridLineColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#dark DataDatabricksAccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#light DataDatabricksAccountSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeGridLineColorToTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeGridLineColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeGridLineColorToHclTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeGridLineColor | cdktn.IResolvable): any {
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

export class DataDatabricksAccountSettingV2WorkspaceDashboardThemeGridLineColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2WorkspaceDashboardThemeGridLineColor | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeGridLineColor | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountSettingV2WorkspaceDashboardThemeSelectionColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#dark DataDatabricksAccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#light DataDatabricksAccountSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeSelectionColorToTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeSelectionColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeSelectionColorToHclTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeSelectionColor | cdktn.IResolvable): any {
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

export class DataDatabricksAccountSettingV2WorkspaceDashboardThemeSelectionColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2WorkspaceDashboardThemeSelectionColor | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeSelectionColor | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountSettingV2WorkspaceDashboardThemeSentimentColorsNegative {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#dark DataDatabricksAccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#light DataDatabricksAccountSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeSentimentColorsNegativeToTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeSentimentColorsNegative | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeSentimentColorsNegativeToHclTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeSentimentColorsNegative | cdktn.IResolvable): any {
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

export class DataDatabricksAccountSettingV2WorkspaceDashboardThemeSentimentColorsNegativeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2WorkspaceDashboardThemeSentimentColorsNegative | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeSentimentColorsNegative | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountSettingV2WorkspaceDashboardThemeSentimentColorsNeutral {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#dark DataDatabricksAccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#light DataDatabricksAccountSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeSentimentColorsNeutralToTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeSentimentColorsNeutral | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeSentimentColorsNeutralToHclTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeSentimentColorsNeutral | cdktn.IResolvable): any {
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

export class DataDatabricksAccountSettingV2WorkspaceDashboardThemeSentimentColorsNeutralOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2WorkspaceDashboardThemeSentimentColorsNeutral | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeSentimentColorsNeutral | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountSettingV2WorkspaceDashboardThemeSentimentColorsPositive {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#dark DataDatabricksAccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#light DataDatabricksAccountSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeSentimentColorsPositiveToTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeSentimentColorsPositive | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeSentimentColorsPositiveToHclTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeSentimentColorsPositive | cdktn.IResolvable): any {
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

export class DataDatabricksAccountSettingV2WorkspaceDashboardThemeSentimentColorsPositiveOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2WorkspaceDashboardThemeSentimentColorsPositive | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeSentimentColorsPositive | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountSettingV2WorkspaceDashboardThemeSentimentColors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#negative DataDatabricksAccountSettingV2#negative}
  */
  readonly negative?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeSentimentColorsNegative;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#neutral DataDatabricksAccountSettingV2#neutral}
  */
  readonly neutral?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeSentimentColorsNeutral;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#positive DataDatabricksAccountSettingV2#positive}
  */
  readonly positive?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeSentimentColorsPositive;
}

export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeSentimentColorsToTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeSentimentColors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    negative: dataDatabricksAccountSettingV2WorkspaceDashboardThemeSentimentColorsNegativeToTerraform(struct!.negative),
    neutral: dataDatabricksAccountSettingV2WorkspaceDashboardThemeSentimentColorsNeutralToTerraform(struct!.neutral),
    positive: dataDatabricksAccountSettingV2WorkspaceDashboardThemeSentimentColorsPositiveToTerraform(struct!.positive),
  }
}


export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeSentimentColorsToHclTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeSentimentColors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    negative: {
      value: dataDatabricksAccountSettingV2WorkspaceDashboardThemeSentimentColorsNegativeToHclTerraform(struct!.negative),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2WorkspaceDashboardThemeSentimentColorsNegative",
    },
    neutral: {
      value: dataDatabricksAccountSettingV2WorkspaceDashboardThemeSentimentColorsNeutralToHclTerraform(struct!.neutral),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2WorkspaceDashboardThemeSentimentColorsNeutral",
    },
    positive: {
      value: dataDatabricksAccountSettingV2WorkspaceDashboardThemeSentimentColorsPositiveToHclTerraform(struct!.positive),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2WorkspaceDashboardThemeSentimentColorsPositive",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountSettingV2WorkspaceDashboardThemeSentimentColorsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2WorkspaceDashboardThemeSentimentColors | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeSentimentColors | cdktn.IResolvable | undefined) {
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
  private _negative = new DataDatabricksAccountSettingV2WorkspaceDashboardThemeSentimentColorsNegativeOutputReference(this, "negative");
  public get negative() {
    return this._negative;
  }
  public putNegative(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeSentimentColorsNegative) {
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
  private _neutral = new DataDatabricksAccountSettingV2WorkspaceDashboardThemeSentimentColorsNeutralOutputReference(this, "neutral");
  public get neutral() {
    return this._neutral;
  }
  public putNeutral(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeSentimentColorsNeutral) {
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
  private _positive = new DataDatabricksAccountSettingV2WorkspaceDashboardThemeSentimentColorsPositiveOutputReference(this, "positive");
  public get positive() {
    return this._positive;
  }
  public putPositive(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeSentimentColorsPositive) {
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
export interface DataDatabricksAccountSettingV2WorkspaceDashboardThemeWidgetBackgroundColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#dark DataDatabricksAccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#light DataDatabricksAccountSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeWidgetBackgroundColorToTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeWidgetBackgroundColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeWidgetBackgroundColorToHclTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeWidgetBackgroundColor | cdktn.IResolvable): any {
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

export class DataDatabricksAccountSettingV2WorkspaceDashboardThemeWidgetBackgroundColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2WorkspaceDashboardThemeWidgetBackgroundColor | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeWidgetBackgroundColor | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountSettingV2WorkspaceDashboardThemeWidgetBorderColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#dark DataDatabricksAccountSettingV2#dark}
  */
  readonly dark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#light DataDatabricksAccountSettingV2#light}
  */
  readonly light?: string;
}

export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeWidgetBorderColorToTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeWidgetBorderColor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dark: cdktn.stringToTerraform(struct!.dark),
    light: cdktn.stringToTerraform(struct!.light),
  }
}


export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeWidgetBorderColorToHclTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeWidgetBorderColor | cdktn.IResolvable): any {
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

export class DataDatabricksAccountSettingV2WorkspaceDashboardThemeWidgetBorderColorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2WorkspaceDashboardThemeWidgetBorderColor | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeWidgetBorderColor | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountSettingV2WorkspaceDashboardTheme {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#axis_line_color DataDatabricksAccountSettingV2#axis_line_color}
  */
  readonly axisLineColor?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeAxisLineColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#canvas_background_color DataDatabricksAccountSettingV2#canvas_background_color}
  */
  readonly canvasBackgroundColor?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeCanvasBackgroundColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#continuous_gradient DataDatabricksAccountSettingV2#continuous_gradient}
  */
  readonly continuousGradient?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradient;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#font_color DataDatabricksAccountSettingV2#font_color}
  */
  readonly fontColor?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#font_family DataDatabricksAccountSettingV2#font_family}
  */
  readonly fontFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#font_settings DataDatabricksAccountSettingV2#font_settings}
  */
  readonly fontSettings?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#grid_line_color DataDatabricksAccountSettingV2#grid_line_color}
  */
  readonly gridLineColor?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeGridLineColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#mark_corner_radius DataDatabricksAccountSettingV2#mark_corner_radius}
  */
  readonly markCornerRadius?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#selection_color DataDatabricksAccountSettingV2#selection_color}
  */
  readonly selectionColor?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeSelectionColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#sentiment_colors DataDatabricksAccountSettingV2#sentiment_colors}
  */
  readonly sentimentColors?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeSentimentColors;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#text_box_vertical_align DataDatabricksAccountSettingV2#text_box_vertical_align}
  */
  readonly textBoxVerticalAlign?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#visualization_color_01 DataDatabricksAccountSettingV2#visualization_color_01}
  */
  readonly visualizationColor01?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#visualization_color_02 DataDatabricksAccountSettingV2#visualization_color_02}
  */
  readonly visualizationColor02?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#visualization_color_03 DataDatabricksAccountSettingV2#visualization_color_03}
  */
  readonly visualizationColor03?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#visualization_color_04 DataDatabricksAccountSettingV2#visualization_color_04}
  */
  readonly visualizationColor04?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#visualization_color_05 DataDatabricksAccountSettingV2#visualization_color_05}
  */
  readonly visualizationColor05?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#visualization_color_06 DataDatabricksAccountSettingV2#visualization_color_06}
  */
  readonly visualizationColor06?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#visualization_color_07 DataDatabricksAccountSettingV2#visualization_color_07}
  */
  readonly visualizationColor07?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#visualization_color_08 DataDatabricksAccountSettingV2#visualization_color_08}
  */
  readonly visualizationColor08?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#visualization_color_09 DataDatabricksAccountSettingV2#visualization_color_09}
  */
  readonly visualizationColor09?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#visualization_color_10 DataDatabricksAccountSettingV2#visualization_color_10}
  */
  readonly visualizationColor10?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#visualization_color_11 DataDatabricksAccountSettingV2#visualization_color_11}
  */
  readonly visualizationColor11?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#visualization_color_12 DataDatabricksAccountSettingV2#visualization_color_12}
  */
  readonly visualizationColor12?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#visualization_color_13 DataDatabricksAccountSettingV2#visualization_color_13}
  */
  readonly visualizationColor13?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#visualization_color_14 DataDatabricksAccountSettingV2#visualization_color_14}
  */
  readonly visualizationColor14?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#visualization_color_15 DataDatabricksAccountSettingV2#visualization_color_15}
  */
  readonly visualizationColor15?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#visualization_color_16 DataDatabricksAccountSettingV2#visualization_color_16}
  */
  readonly visualizationColor16?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#visualization_color_17 DataDatabricksAccountSettingV2#visualization_color_17}
  */
  readonly visualizationColor17?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#visualization_color_18 DataDatabricksAccountSettingV2#visualization_color_18}
  */
  readonly visualizationColor18?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#visualization_color_19 DataDatabricksAccountSettingV2#visualization_color_19}
  */
  readonly visualizationColor19?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#visualization_color_20 DataDatabricksAccountSettingV2#visualization_color_20}
  */
  readonly visualizationColor20?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#widget_background_color DataDatabricksAccountSettingV2#widget_background_color}
  */
  readonly widgetBackgroundColor?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeWidgetBackgroundColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#widget_border_color DataDatabricksAccountSettingV2#widget_border_color}
  */
  readonly widgetBorderColor?: DataDatabricksAccountSettingV2WorkspaceDashboardThemeWidgetBorderColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#widget_corner_radius DataDatabricksAccountSettingV2#widget_corner_radius}
  */
  readonly widgetCornerRadius?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#widget_header_alignment DataDatabricksAccountSettingV2#widget_header_alignment}
  */
  readonly widgetHeaderAlignment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#widget_margin DataDatabricksAccountSettingV2#widget_margin}
  */
  readonly widgetMargin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#widget_padding DataDatabricksAccountSettingV2#widget_padding}
  */
  readonly widgetPadding?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#widget_shadow DataDatabricksAccountSettingV2#widget_shadow}
  */
  readonly widgetShadow?: number;
}

export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeToTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardTheme): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    axis_line_color: dataDatabricksAccountSettingV2WorkspaceDashboardThemeAxisLineColorToTerraform(struct!.axisLineColor),
    canvas_background_color: dataDatabricksAccountSettingV2WorkspaceDashboardThemeCanvasBackgroundColorToTerraform(struct!.canvasBackgroundColor),
    continuous_gradient: dataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientToTerraform(struct!.continuousGradient),
    font_color: dataDatabricksAccountSettingV2WorkspaceDashboardThemeFontColorToTerraform(struct!.fontColor),
    font_family: cdktn.stringToTerraform(struct!.fontFamily),
    font_settings: dataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsToTerraform(struct!.fontSettings),
    grid_line_color: dataDatabricksAccountSettingV2WorkspaceDashboardThemeGridLineColorToTerraform(struct!.gridLineColor),
    mark_corner_radius: cdktn.numberToTerraform(struct!.markCornerRadius),
    selection_color: dataDatabricksAccountSettingV2WorkspaceDashboardThemeSelectionColorToTerraform(struct!.selectionColor),
    sentiment_colors: dataDatabricksAccountSettingV2WorkspaceDashboardThemeSentimentColorsToTerraform(struct!.sentimentColors),
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
    widget_background_color: dataDatabricksAccountSettingV2WorkspaceDashboardThemeWidgetBackgroundColorToTerraform(struct!.widgetBackgroundColor),
    widget_border_color: dataDatabricksAccountSettingV2WorkspaceDashboardThemeWidgetBorderColorToTerraform(struct!.widgetBorderColor),
    widget_corner_radius: cdktn.numberToTerraform(struct!.widgetCornerRadius),
    widget_header_alignment: cdktn.stringToTerraform(struct!.widgetHeaderAlignment),
    widget_margin: cdktn.numberToTerraform(struct!.widgetMargin),
    widget_padding: cdktn.numberToTerraform(struct!.widgetPadding),
    widget_shadow: cdktn.numberToTerraform(struct!.widgetShadow),
  }
}


export function dataDatabricksAccountSettingV2WorkspaceDashboardThemeToHclTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceDashboardTheme): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    axis_line_color: {
      value: dataDatabricksAccountSettingV2WorkspaceDashboardThemeAxisLineColorToHclTerraform(struct!.axisLineColor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2WorkspaceDashboardThemeAxisLineColor",
    },
    canvas_background_color: {
      value: dataDatabricksAccountSettingV2WorkspaceDashboardThemeCanvasBackgroundColorToHclTerraform(struct!.canvasBackgroundColor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2WorkspaceDashboardThemeCanvasBackgroundColor",
    },
    continuous_gradient: {
      value: dataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientToHclTerraform(struct!.continuousGradient),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradient",
    },
    font_color: {
      value: dataDatabricksAccountSettingV2WorkspaceDashboardThemeFontColorToHclTerraform(struct!.fontColor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontColor",
    },
    font_family: {
      value: cdktn.stringToHclTerraform(struct!.fontFamily),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_settings: {
      value: dataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsToHclTerraform(struct!.fontSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettings",
    },
    grid_line_color: {
      value: dataDatabricksAccountSettingV2WorkspaceDashboardThemeGridLineColorToHclTerraform(struct!.gridLineColor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2WorkspaceDashboardThemeGridLineColor",
    },
    mark_corner_radius: {
      value: cdktn.numberToHclTerraform(struct!.markCornerRadius),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    selection_color: {
      value: dataDatabricksAccountSettingV2WorkspaceDashboardThemeSelectionColorToHclTerraform(struct!.selectionColor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2WorkspaceDashboardThemeSelectionColor",
    },
    sentiment_colors: {
      value: dataDatabricksAccountSettingV2WorkspaceDashboardThemeSentimentColorsToHclTerraform(struct!.sentimentColors),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2WorkspaceDashboardThemeSentimentColors",
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
      value: dataDatabricksAccountSettingV2WorkspaceDashboardThemeWidgetBackgroundColorToHclTerraform(struct!.widgetBackgroundColor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2WorkspaceDashboardThemeWidgetBackgroundColor",
    },
    widget_border_color: {
      value: dataDatabricksAccountSettingV2WorkspaceDashboardThemeWidgetBorderColorToHclTerraform(struct!.widgetBorderColor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountSettingV2WorkspaceDashboardThemeWidgetBorderColor",
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

export class DataDatabricksAccountSettingV2WorkspaceDashboardThemeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2WorkspaceDashboardTheme | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2WorkspaceDashboardTheme | undefined) {
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
  private _axisLineColor = new DataDatabricksAccountSettingV2WorkspaceDashboardThemeAxisLineColorOutputReference(this, "axis_line_color");
  public get axisLineColor() {
    return this._axisLineColor;
  }
  public putAxisLineColor(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeAxisLineColor) {
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
  private _canvasBackgroundColor = new DataDatabricksAccountSettingV2WorkspaceDashboardThemeCanvasBackgroundColorOutputReference(this, "canvas_background_color");
  public get canvasBackgroundColor() {
    return this._canvasBackgroundColor;
  }
  public putCanvasBackgroundColor(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeCanvasBackgroundColor) {
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
  private _continuousGradient = new DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradientOutputReference(this, "continuous_gradient");
  public get continuousGradient() {
    return this._continuousGradient;
  }
  public putContinuousGradient(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeContinuousGradient) {
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
  private _fontColor = new DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontColorOutputReference(this, "font_color");
  public get fontColor() {
    return this._fontColor;
  }
  public putFontColor(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontColor) {
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
  private _fontSettings = new DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettingsOutputReference(this, "font_settings");
  public get fontSettings() {
    return this._fontSettings;
  }
  public putFontSettings(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeFontSettings) {
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
  private _gridLineColor = new DataDatabricksAccountSettingV2WorkspaceDashboardThemeGridLineColorOutputReference(this, "grid_line_color");
  public get gridLineColor() {
    return this._gridLineColor;
  }
  public putGridLineColor(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeGridLineColor) {
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
  private _selectionColor = new DataDatabricksAccountSettingV2WorkspaceDashboardThemeSelectionColorOutputReference(this, "selection_color");
  public get selectionColor() {
    return this._selectionColor;
  }
  public putSelectionColor(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeSelectionColor) {
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
  private _sentimentColors = new DataDatabricksAccountSettingV2WorkspaceDashboardThemeSentimentColorsOutputReference(this, "sentiment_colors");
  public get sentimentColors() {
    return this._sentimentColors;
  }
  public putSentimentColors(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeSentimentColors) {
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
  private _widgetBackgroundColor = new DataDatabricksAccountSettingV2WorkspaceDashboardThemeWidgetBackgroundColorOutputReference(this, "widget_background_color");
  public get widgetBackgroundColor() {
    return this._widgetBackgroundColor;
  }
  public putWidgetBackgroundColor(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeWidgetBackgroundColor) {
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
  private _widgetBorderColor = new DataDatabricksAccountSettingV2WorkspaceDashboardThemeWidgetBorderColorOutputReference(this, "widget_border_color");
  public get widgetBorderColor() {
    return this._widgetBorderColor;
  }
  public putWidgetBorderColor(value: DataDatabricksAccountSettingV2WorkspaceDashboardThemeWidgetBorderColor) {
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
export interface DataDatabricksAccountSettingV2WorkspaceLabel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#color DataDatabricksAccountSettingV2#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#label DataDatabricksAccountSettingV2#label}
  */
  readonly label?: string;
}

export function dataDatabricksAccountSettingV2WorkspaceLabelToTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceLabel): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    color: cdktn.stringToTerraform(struct!.color),
    label: cdktn.stringToTerraform(struct!.label),
  }
}


export function dataDatabricksAccountSettingV2WorkspaceLabelToHclTerraform(struct?: DataDatabricksAccountSettingV2WorkspaceLabel): any {
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

export class DataDatabricksAccountSettingV2WorkspaceLabelOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountSettingV2WorkspaceLabel | undefined {
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

  public set internalValue(value: DataDatabricksAccountSettingV2WorkspaceLabel | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2 databricks_account_setting_v2}
*/
export class DataDatabricksAccountSettingV2 extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_account_setting_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataDatabricksAccountSettingV2 resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksAccountSettingV2 to import
  * @param importFromId The id of the existing DataDatabricksAccountSettingV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksAccountSettingV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_account_setting_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/account_setting_v2 databricks_account_setting_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksAccountSettingV2Config
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksAccountSettingV2Config) {
    super(scope, id, {
      terraformResourceType: 'databricks_account_setting_v2',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aibi_dashboard_embedding_access_policy - computed: true, optional: false, required: false
  private _aibiDashboardEmbeddingAccessPolicy = new DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference(this, "aibi_dashboard_embedding_access_policy");
  public get aibiDashboardEmbeddingAccessPolicy() {
    return this._aibiDashboardEmbeddingAccessPolicy;
  }

  // aibi_dashboard_embedding_approved_domains - computed: true, optional: false, required: false
  private _aibiDashboardEmbeddingApprovedDomains = new DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference(this, "aibi_dashboard_embedding_approved_domains");
  public get aibiDashboardEmbeddingApprovedDomains() {
    return this._aibiDashboardEmbeddingApprovedDomains;
  }

  // allowed_apps_user_api_scopes - computed: true, optional: false, required: false
  private _allowedAppsUserApiScopes = new DataDatabricksAccountSettingV2AllowedAppsUserApiScopesOutputReference(this, "allowed_apps_user_api_scopes");
  public get allowedAppsUserApiScopes() {
    return this._allowedAppsUserApiScopes;
  }

  // automatic_cluster_update_workspace - computed: true, optional: false, required: false
  private _automaticClusterUpdateWorkspace = new DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference(this, "automatic_cluster_update_workspace");
  public get automaticClusterUpdateWorkspace() {
    return this._automaticClusterUpdateWorkspace;
  }

  // boolean_val - computed: true, optional: false, required: false
  private _booleanVal = new DataDatabricksAccountSettingV2BooleanValOutputReference(this, "boolean_val");
  public get booleanVal() {
    return this._booleanVal;
  }

  // collaboration_platform_connectivity - computed: true, optional: false, required: false
  private _collaborationPlatformConnectivity = new DataDatabricksAccountSettingV2CollaborationPlatformConnectivityOutputReference(this, "collaboration_platform_connectivity");
  public get collaborationPlatformConnectivity() {
    return this._collaborationPlatformConnectivity;
  }

  // effective_aibi_dashboard_embedding_access_policy - computed: true, optional: false, required: false
  private _effectiveAibiDashboardEmbeddingAccessPolicy = new DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference(this, "effective_aibi_dashboard_embedding_access_policy");
  public get effectiveAibiDashboardEmbeddingAccessPolicy() {
    return this._effectiveAibiDashboardEmbeddingAccessPolicy;
  }

  // effective_aibi_dashboard_embedding_approved_domains - computed: true, optional: false, required: false
  private _effectiveAibiDashboardEmbeddingApprovedDomains = new DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference(this, "effective_aibi_dashboard_embedding_approved_domains");
  public get effectiveAibiDashboardEmbeddingApprovedDomains() {
    return this._effectiveAibiDashboardEmbeddingApprovedDomains;
  }

  // effective_allowed_apps_user_api_scopes - computed: true, optional: false, required: false
  private _effectiveAllowedAppsUserApiScopes = new DataDatabricksAccountSettingV2EffectiveAllowedAppsUserApiScopesOutputReference(this, "effective_allowed_apps_user_api_scopes");
  public get effectiveAllowedAppsUserApiScopes() {
    return this._effectiveAllowedAppsUserApiScopes;
  }

  // effective_automatic_cluster_update_workspace - computed: true, optional: false, required: false
  private _effectiveAutomaticClusterUpdateWorkspace = new DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference(this, "effective_automatic_cluster_update_workspace");
  public get effectiveAutomaticClusterUpdateWorkspace() {
    return this._effectiveAutomaticClusterUpdateWorkspace;
  }

  // effective_boolean_val - computed: true, optional: false, required: false
  private _effectiveBooleanVal = new DataDatabricksAccountSettingV2EffectiveBooleanValOutputReference(this, "effective_boolean_val");
  public get effectiveBooleanVal() {
    return this._effectiveBooleanVal;
  }

  // effective_collaboration_platform_connectivity - computed: true, optional: false, required: false
  private _effectiveCollaborationPlatformConnectivity = new DataDatabricksAccountSettingV2EffectiveCollaborationPlatformConnectivityOutputReference(this, "effective_collaboration_platform_connectivity");
  public get effectiveCollaborationPlatformConnectivity() {
    return this._effectiveCollaborationPlatformConnectivity;
  }

  // effective_integer_val - computed: true, optional: false, required: false
  private _effectiveIntegerVal = new DataDatabricksAccountSettingV2EffectiveIntegerValOutputReference(this, "effective_integer_val");
  public get effectiveIntegerVal() {
    return this._effectiveIntegerVal;
  }

  // effective_operational_email_custom_recipient - computed: true, optional: false, required: false
  private _effectiveOperationalEmailCustomRecipient = new DataDatabricksAccountSettingV2EffectiveOperationalEmailCustomRecipientOutputReference(this, "effective_operational_email_custom_recipient");
  public get effectiveOperationalEmailCustomRecipient() {
    return this._effectiveOperationalEmailCustomRecipient;
  }

  // effective_personal_compute - computed: true, optional: false, required: false
  private _effectivePersonalCompute = new DataDatabricksAccountSettingV2EffectivePersonalComputeOutputReference(this, "effective_personal_compute");
  public get effectivePersonalCompute() {
    return this._effectivePersonalCompute;
  }

  // effective_restrict_workspace_admins - computed: true, optional: false, required: false
  private _effectiveRestrictWorkspaceAdmins = new DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference(this, "effective_restrict_workspace_admins");
  public get effectiveRestrictWorkspaceAdmins() {
    return this._effectiveRestrictWorkspaceAdmins;
  }

  // effective_string_val - computed: true, optional: false, required: false
  private _effectiveStringVal = new DataDatabricksAccountSettingV2EffectiveStringValOutputReference(this, "effective_string_val");
  public get effectiveStringVal() {
    return this._effectiveStringVal;
  }

  // effective_workspace_dashboard_theme - computed: true, optional: false, required: false
  private _effectiveWorkspaceDashboardTheme = new DataDatabricksAccountSettingV2EffectiveWorkspaceDashboardThemeOutputReference(this, "effective_workspace_dashboard_theme");
  public get effectiveWorkspaceDashboardTheme() {
    return this._effectiveWorkspaceDashboardTheme;
  }

  // effective_workspace_label - computed: true, optional: false, required: false
  private _effectiveWorkspaceLabel = new DataDatabricksAccountSettingV2EffectiveWorkspaceLabelOutputReference(this, "effective_workspace_label");
  public get effectiveWorkspaceLabel() {
    return this._effectiveWorkspaceLabel;
  }

  // integer_val - computed: true, optional: false, required: false
  private _integerVal = new DataDatabricksAccountSettingV2IntegerValOutputReference(this, "integer_val");
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
  private _operationalEmailCustomRecipient = new DataDatabricksAccountSettingV2OperationalEmailCustomRecipientOutputReference(this, "operational_email_custom_recipient");
  public get operationalEmailCustomRecipient() {
    return this._operationalEmailCustomRecipient;
  }

  // personal_compute - computed: true, optional: false, required: false
  private _personalCompute = new DataDatabricksAccountSettingV2PersonalComputeOutputReference(this, "personal_compute");
  public get personalCompute() {
    return this._personalCompute;
  }

  // restrict_workspace_admins - computed: true, optional: false, required: false
  private _restrictWorkspaceAdmins = new DataDatabricksAccountSettingV2RestrictWorkspaceAdminsOutputReference(this, "restrict_workspace_admins");
  public get restrictWorkspaceAdmins() {
    return this._restrictWorkspaceAdmins;
  }

  // string_val - computed: true, optional: false, required: false
  private _stringVal = new DataDatabricksAccountSettingV2StringValOutputReference(this, "string_val");
  public get stringVal() {
    return this._stringVal;
  }

  // workspace_dashboard_theme - computed: true, optional: false, required: false
  private _workspaceDashboardTheme = new DataDatabricksAccountSettingV2WorkspaceDashboardThemeOutputReference(this, "workspace_dashboard_theme");
  public get workspaceDashboardTheme() {
    return this._workspaceDashboardTheme;
  }

  // workspace_label - computed: true, optional: false, required: false
  private _workspaceLabel = new DataDatabricksAccountSettingV2WorkspaceLabelOutputReference(this, "workspace_label");
  public get workspaceLabel() {
    return this._workspaceLabel;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktn.stringToTerraform(this._name),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
