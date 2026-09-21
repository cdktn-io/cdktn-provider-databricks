/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/postgres_snapshot_schedule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataDatabricksPostgresSnapshotScheduleConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/postgres_snapshot_schedule#name DataDatabricksPostgresSnapshotSchedule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/postgres_snapshot_schedule#provider_config DataDatabricksPostgresSnapshotSchedule#provider_config}
  */
  readonly providerConfig?: DataDatabricksPostgresSnapshotScheduleProviderConfig;
}
export interface DataDatabricksPostgresSnapshotScheduleProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/postgres_snapshot_schedule#workspace_id DataDatabricksPostgresSnapshotSchedule#workspace_id}
  */
  readonly workspaceId?: string;
}

export function dataDatabricksPostgresSnapshotScheduleProviderConfigToTerraform(struct?: DataDatabricksPostgresSnapshotScheduleProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function dataDatabricksPostgresSnapshotScheduleProviderConfigToHclTerraform(struct?: DataDatabricksPostgresSnapshotScheduleProviderConfig | cdktn.IResolvable): any {
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

export class DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksPostgresSnapshotScheduleProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksPostgresSnapshotScheduleProviderConfig | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksPostgresSnapshotScheduleScheduleDailySchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/postgres_snapshot_schedule#hour DataDatabricksPostgresSnapshotSchedule#hour}
  */
  readonly hour?: number;
}

export function dataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleToTerraform(struct?: DataDatabricksPostgresSnapshotScheduleScheduleDailySchedule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hour: cdktn.numberToTerraform(struct!.hour),
  }
}


export function dataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleToHclTerraform(struct?: DataDatabricksPostgresSnapshotScheduleScheduleDailySchedule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    hour: {
      value: cdktn.numberToHclTerraform(struct!.hour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksPostgresSnapshotScheduleScheduleDailySchedule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hour !== undefined) {
      hasAnyValues = true;
      internalValueResult.hour = this._hour;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksPostgresSnapshotScheduleScheduleDailySchedule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hour = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hour = value.hour;
    }
  }

  // hour - computed: true, optional: true, required: false
  private _hour?: number; 
  public get hour() {
    return this.getNumberAttribute('hour');
  }
  public set hour(value: number) {
    this._hour = value;
  }
  public resetHour() {
    this._hour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourInput() {
    return this._hour;
  }
}
export interface DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/postgres_snapshot_schedule#day DataDatabricksPostgresSnapshotSchedule#day}
  */
  readonly day: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/postgres_snapshot_schedule#hour DataDatabricksPostgresSnapshotSchedule#hour}
  */
  readonly hour?: number;
}

export function dataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleToTerraform(struct?: DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    day: cdktn.numberToTerraform(struct!.day),
    hour: cdktn.numberToTerraform(struct!.hour),
  }
}


export function dataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleToHclTerraform(struct?: DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    day: {
      value: cdktn.numberToHclTerraform(struct!.day),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hour: {
      value: cdktn.numberToHclTerraform(struct!.hour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._day !== undefined) {
      hasAnyValues = true;
      internalValueResult.day = this._day;
    }
    if (this._hour !== undefined) {
      hasAnyValues = true;
      internalValueResult.hour = this._hour;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._day = undefined;
      this._hour = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._day = value.day;
      this._hour = value.hour;
    }
  }

  // day - computed: true, optional: false, required: true
  private _day?: number; 
  public get day() {
    return this.getNumberAttribute('day');
  }
  public set day(value: number) {
    this._day = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // hour - computed: true, optional: true, required: false
  private _hour?: number; 
  public get hour() {
    return this.getNumberAttribute('hour');
  }
  public set hour(value: number) {
    this._hour = value;
  }
  public resetHour() {
    this._hour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourInput() {
    return this._hour;
  }
}
export interface DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/postgres_snapshot_schedule#day_of_week DataDatabricksPostgresSnapshotSchedule#day_of_week}
  */
  readonly dayOfWeek: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/postgres_snapshot_schedule#hour DataDatabricksPostgresSnapshotSchedule#hour}
  */
  readonly hour?: number;
}

export function dataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleToTerraform(struct?: DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    day_of_week: cdktn.stringToTerraform(struct!.dayOfWeek),
    hour: cdktn.numberToTerraform(struct!.hour),
  }
}


export function dataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleToHclTerraform(struct?: DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule | cdktn.IResolvable): any {
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
    hour: {
      value: cdktn.numberToHclTerraform(struct!.hour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    if (this._hour !== undefined) {
      hasAnyValues = true;
      internalValueResult.hour = this._hour;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dayOfWeek = undefined;
      this._hour = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dayOfWeek = value.dayOfWeek;
      this._hour = value.hour;
    }
  }

  // day_of_week - computed: true, optional: false, required: true
  private _dayOfWeek?: string; 
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
  public set dayOfWeek(value: string) {
    this._dayOfWeek = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }

  // hour - computed: true, optional: true, required: false
  private _hour?: number; 
  public get hour() {
    return this.getNumberAttribute('hour');
  }
  public set hour(value: number) {
    this._hour = value;
  }
  public resetHour() {
    this._hour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourInput() {
    return this._hour;
  }
}
export interface DataDatabricksPostgresSnapshotScheduleSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/postgres_snapshot_schedule#daily_schedule DataDatabricksPostgresSnapshotSchedule#daily_schedule}
  */
  readonly dailySchedule?: DataDatabricksPostgresSnapshotScheduleScheduleDailySchedule;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/postgres_snapshot_schedule#monthly_schedule DataDatabricksPostgresSnapshotSchedule#monthly_schedule}
  */
  readonly monthlySchedule?: DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/postgres_snapshot_schedule#retention DataDatabricksPostgresSnapshotSchedule#retention}
  */
  readonly retention: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/postgres_snapshot_schedule#weekly_schedule DataDatabricksPostgresSnapshotSchedule#weekly_schedule}
  */
  readonly weeklySchedule?: DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule;
}

export function dataDatabricksPostgresSnapshotScheduleScheduleToTerraform(struct?: DataDatabricksPostgresSnapshotScheduleSchedule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    daily_schedule: dataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleToTerraform(struct!.dailySchedule),
    monthly_schedule: dataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleToTerraform(struct!.monthlySchedule),
    retention: cdktn.stringToTerraform(struct!.retention),
    weekly_schedule: dataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleToTerraform(struct!.weeklySchedule),
  }
}


export function dataDatabricksPostgresSnapshotScheduleScheduleToHclTerraform(struct?: DataDatabricksPostgresSnapshotScheduleSchedule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    daily_schedule: {
      value: dataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleToHclTerraform(struct!.dailySchedule),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksPostgresSnapshotScheduleScheduleDailySchedule",
    },
    monthly_schedule: {
      value: dataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleToHclTerraform(struct!.monthlySchedule),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule",
    },
    retention: {
      value: cdktn.stringToHclTerraform(struct!.retention),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weekly_schedule: {
      value: dataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleToHclTerraform(struct!.weeklySchedule),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksPostgresSnapshotScheduleScheduleOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksPostgresSnapshotScheduleSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dailySchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dailySchedule = this._dailySchedule?.internalValue;
    }
    if (this._monthlySchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthlySchedule = this._monthlySchedule?.internalValue;
    }
    if (this._retention !== undefined) {
      hasAnyValues = true;
      internalValueResult.retention = this._retention;
    }
    if (this._weeklySchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weeklySchedule = this._weeklySchedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksPostgresSnapshotScheduleSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dailySchedule.internalValue = undefined;
      this._monthlySchedule.internalValue = undefined;
      this._retention = undefined;
      this._weeklySchedule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dailySchedule.internalValue = value.dailySchedule;
      this._monthlySchedule.internalValue = value.monthlySchedule;
      this._retention = value.retention;
      this._weeklySchedule.internalValue = value.weeklySchedule;
    }
  }

  // daily_schedule - computed: true, optional: true, required: false
  private _dailySchedule = new DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference(this, "daily_schedule");
  public get dailySchedule() {
    return this._dailySchedule;
  }
  public putDailySchedule(value: DataDatabricksPostgresSnapshotScheduleScheduleDailySchedule) {
    this._dailySchedule.internalValue = value;
  }
  public resetDailySchedule() {
    this._dailySchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyScheduleInput() {
    return this._dailySchedule.internalValue;
  }

  // monthly_schedule - computed: true, optional: true, required: false
  private _monthlySchedule = new DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference(this, "monthly_schedule");
  public get monthlySchedule() {
    return this._monthlySchedule;
  }
  public putMonthlySchedule(value: DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule) {
    this._monthlySchedule.internalValue = value;
  }
  public resetMonthlySchedule() {
    this._monthlySchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlyScheduleInput() {
    return this._monthlySchedule.internalValue;
  }

  // retention - computed: true, optional: false, required: true
  private _retention?: string; 
  public get retention() {
    return this.getStringAttribute('retention');
  }
  public set retention(value: string) {
    this._retention = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInput() {
    return this._retention;
  }

  // weekly_schedule - computed: true, optional: true, required: false
  private _weeklySchedule = new DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference(this, "weekly_schedule");
  public get weeklySchedule() {
    return this._weeklySchedule;
  }
  public putWeeklySchedule(value: DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule) {
    this._weeklySchedule.internalValue = value;
  }
  public resetWeeklySchedule() {
    this._weeklySchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyScheduleInput() {
    return this._weeklySchedule.internalValue;
  }
}

export class DataDatabricksPostgresSnapshotScheduleScheduleList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksPostgresSnapshotScheduleSchedule[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksPostgresSnapshotScheduleScheduleOutputReference {
    return new DataDatabricksPostgresSnapshotScheduleScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/postgres_snapshot_schedule databricks_postgres_snapshot_schedule}
*/
export class DataDatabricksPostgresSnapshotSchedule extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_postgres_snapshot_schedule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataDatabricksPostgresSnapshotSchedule resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksPostgresSnapshotSchedule to import
  * @param importFromId The id of the existing DataDatabricksPostgresSnapshotSchedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/postgres_snapshot_schedule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksPostgresSnapshotSchedule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_postgres_snapshot_schedule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/postgres_snapshot_schedule databricks_postgres_snapshot_schedule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksPostgresSnapshotScheduleConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksPostgresSnapshotScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_postgres_snapshot_schedule',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.133.0',
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

  // provider_config - computed: false, optional: true, required: false
  private _providerConfig = new DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataDatabricksPostgresSnapshotScheduleProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // schedule - computed: true, optional: false, required: false
  private _schedule = new DataDatabricksPostgresSnapshotScheduleScheduleList(this, "schedule", true);
  public get schedule() {
    return this._schedule;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktn.stringToTerraform(this._name),
      provider_config: dataDatabricksPostgresSnapshotScheduleProviderConfigToTerraform(this._providerConfig.internalValue),
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
        value: dataDatabricksPostgresSnapshotScheduleProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataDatabricksPostgresSnapshotScheduleProviderConfig",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
