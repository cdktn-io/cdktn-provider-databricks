/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/database_synced_database_table
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataDatabricksDatabaseSyncedDatabaseTableConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/database_synced_database_table#name DataDatabricksDatabaseSyncedDatabaseTable#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/database_synced_database_table#provider_config DataDatabricksDatabaseSyncedDatabaseTable#provider_config}
  */
  readonly providerConfig?: DataDatabricksDatabaseSyncedDatabaseTableProviderConfig;
}
export interface DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress {
}

export function dataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressToTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressToHclTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // estimated_completion_time_seconds - computed: true, optional: false, required: false
  public get estimatedCompletionTimeSeconds() {
    return this.getNumberAttribute('estimated_completion_time_seconds');
  }

  // latest_version_currently_processing - computed: true, optional: false, required: false
  public get latestVersionCurrentlyProcessing() {
    return this.getNumberAttribute('latest_version_currently_processing');
  }

  // provisioning_phase - computed: true, optional: false, required: false
  public get provisioningPhase() {
    return this.getStringAttribute('provisioning_phase');
  }

  // sync_progress_completion - computed: true, optional: false, required: false
  public get syncProgressCompletion() {
    return this.getNumberAttribute('sync_progress_completion');
  }

  // synced_row_count - computed: true, optional: false, required: false
  public get syncedRowCount() {
    return this.getNumberAttribute('synced_row_count');
  }

  // total_row_count - computed: true, optional: false, required: false
  public get totalRowCount() {
    return this.getNumberAttribute('total_row_count');
  }
}
export interface DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus {
}

export function dataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusToTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusToHclTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // initial_pipeline_sync_progress - computed: true, optional: false, required: false
  private _initialPipelineSyncProgress = new DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference(this, "initial_pipeline_sync_progress");
  public get initialPipelineSyncProgress() {
    return this._initialPipelineSyncProgress;
  }

  // last_processed_commit_version - computed: true, optional: false, required: false
  public get lastProcessedCommitVersion() {
    return this.getNumberAttribute('last_processed_commit_version');
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }
}
export interface DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus {
}

export function dataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusToTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusToHclTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // last_processed_commit_version - computed: true, optional: false, required: false
  public get lastProcessedCommitVersion() {
    return this.getNumberAttribute('last_processed_commit_version');
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }
}
export interface DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfo {
}

export function dataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoToTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoToHclTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // delta_commit_timestamp - computed: true, optional: false, required: false
  public get deltaCommitTimestamp() {
    return this.getStringAttribute('delta_commit_timestamp');
  }

  // delta_commit_version - computed: true, optional: false, required: false
  public get deltaCommitVersion() {
    return this.getNumberAttribute('delta_commit_version');
  }
}
export interface DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSync {
}

export function dataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncToTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSync): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncToHclTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSync): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSync | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSync | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // delta_table_sync_info - computed: true, optional: false, required: false
  private _deltaTableSyncInfo = new DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference(this, "delta_table_sync_info");
  public get deltaTableSyncInfo() {
    return this._deltaTableSyncInfo;
  }

  // sync_end_timestamp - computed: true, optional: false, required: false
  public get syncEndTimestamp() {
    return this.getStringAttribute('sync_end_timestamp');
  }

  // sync_start_timestamp - computed: true, optional: false, required: false
  public get syncStartTimestamp() {
    return this.getStringAttribute('sync_start_timestamp');
  }
}
export interface DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress {
}

export function dataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressToTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressToHclTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // estimated_completion_time_seconds - computed: true, optional: false, required: false
  public get estimatedCompletionTimeSeconds() {
    return this.getNumberAttribute('estimated_completion_time_seconds');
  }

  // latest_version_currently_processing - computed: true, optional: false, required: false
  public get latestVersionCurrentlyProcessing() {
    return this.getNumberAttribute('latest_version_currently_processing');
  }

  // provisioning_phase - computed: true, optional: false, required: false
  public get provisioningPhase() {
    return this.getStringAttribute('provisioning_phase');
  }

  // sync_progress_completion - computed: true, optional: false, required: false
  public get syncProgressCompletion() {
    return this.getNumberAttribute('sync_progress_completion');
  }

  // synced_row_count - computed: true, optional: false, required: false
  public get syncedRowCount() {
    return this.getNumberAttribute('synced_row_count');
  }

  // total_row_count - computed: true, optional: false, required: false
  public get totalRowCount() {
    return this.getNumberAttribute('total_row_count');
  }
}
export interface DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus {
}

export function dataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusToTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusToHclTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // initial_pipeline_sync_progress - computed: true, optional: false, required: false
  private _initialPipelineSyncProgress = new DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference(this, "initial_pipeline_sync_progress");
  public get initialPipelineSyncProgress() {
    return this._initialPipelineSyncProgress;
  }
}
export interface DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress {
}

export function dataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressToTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressToHclTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // estimated_completion_time_seconds - computed: true, optional: false, required: false
  public get estimatedCompletionTimeSeconds() {
    return this.getNumberAttribute('estimated_completion_time_seconds');
  }

  // latest_version_currently_processing - computed: true, optional: false, required: false
  public get latestVersionCurrentlyProcessing() {
    return this.getNumberAttribute('latest_version_currently_processing');
  }

  // provisioning_phase - computed: true, optional: false, required: false
  public get provisioningPhase() {
    return this.getStringAttribute('provisioning_phase');
  }

  // sync_progress_completion - computed: true, optional: false, required: false
  public get syncProgressCompletion() {
    return this.getNumberAttribute('sync_progress_completion');
  }

  // synced_row_count - computed: true, optional: false, required: false
  public get syncedRowCount() {
    return this.getNumberAttribute('synced_row_count');
  }

  // total_row_count - computed: true, optional: false, required: false
  public get totalRowCount() {
    return this.getNumberAttribute('total_row_count');
  }
}
export interface DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus {
}

export function dataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusToTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusToHclTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // last_processed_commit_version - computed: true, optional: false, required: false
  public get lastProcessedCommitVersion() {
    return this.getNumberAttribute('last_processed_commit_version');
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }

  // triggered_update_progress - computed: true, optional: false, required: false
  private _triggeredUpdateProgress = new DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference(this, "triggered_update_progress");
  public get triggeredUpdateProgress() {
    return this._triggeredUpdateProgress;
  }
}
export interface DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/database_synced_database_table#continuous_update_status DataDatabricksDatabaseSyncedDatabaseTable#continuous_update_status}
  */
  readonly continuousUpdateStatus?: DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/database_synced_database_table#failed_status DataDatabricksDatabaseSyncedDatabaseTable#failed_status}
  */
  readonly failedStatus?: DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/database_synced_database_table#provisioning_status DataDatabricksDatabaseSyncedDatabaseTable#provisioning_status}
  */
  readonly provisioningStatus?: DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/database_synced_database_table#triggered_update_status DataDatabricksDatabaseSyncedDatabaseTable#triggered_update_status}
  */
  readonly triggeredUpdateStatus?: DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus;
}

export function dataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusToTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    continuous_update_status: dataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusToTerraform(struct!.continuousUpdateStatus),
    failed_status: dataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusToTerraform(struct!.failedStatus),
    provisioning_status: dataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusToTerraform(struct!.provisioningStatus),
    triggered_update_status: dataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusToTerraform(struct!.triggeredUpdateStatus),
  }
}


export function dataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusToHclTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    continuous_update_status: {
      value: dataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusToHclTerraform(struct!.continuousUpdateStatus),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus",
    },
    failed_status: {
      value: dataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusToHclTerraform(struct!.failedStatus),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus",
    },
    provisioning_status: {
      value: dataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusToHclTerraform(struct!.provisioningStatus),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus",
    },
    triggered_update_status: {
      value: dataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusToHclTerraform(struct!.triggeredUpdateStatus),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._continuousUpdateStatus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.continuousUpdateStatus = this._continuousUpdateStatus?.internalValue;
    }
    if (this._failedStatus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.failedStatus = this._failedStatus?.internalValue;
    }
    if (this._provisioningStatus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisioningStatus = this._provisioningStatus?.internalValue;
    }
    if (this._triggeredUpdateStatus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggeredUpdateStatus = this._triggeredUpdateStatus?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._continuousUpdateStatus.internalValue = undefined;
      this._failedStatus.internalValue = undefined;
      this._provisioningStatus.internalValue = undefined;
      this._triggeredUpdateStatus.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._continuousUpdateStatus.internalValue = value.continuousUpdateStatus;
      this._failedStatus.internalValue = value.failedStatus;
      this._provisioningStatus.internalValue = value.provisioningStatus;
      this._triggeredUpdateStatus.internalValue = value.triggeredUpdateStatus;
    }
  }

  // continuous_update_status - computed: true, optional: true, required: false
  private _continuousUpdateStatus = new DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference(this, "continuous_update_status");
  public get continuousUpdateStatus() {
    return this._continuousUpdateStatus;
  }
  public putContinuousUpdateStatus(value: DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus) {
    this._continuousUpdateStatus.internalValue = value;
  }
  public resetContinuousUpdateStatus() {
    this._continuousUpdateStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continuousUpdateStatusInput() {
    return this._continuousUpdateStatus.internalValue;
  }

  // detailed_state - computed: true, optional: false, required: false
  public get detailedState() {
    return this.getStringAttribute('detailed_state');
  }

  // failed_status - computed: true, optional: true, required: false
  private _failedStatus = new DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference(this, "failed_status");
  public get failedStatus() {
    return this._failedStatus;
  }
  public putFailedStatus(value: DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus) {
    this._failedStatus.internalValue = value;
  }
  public resetFailedStatus() {
    this._failedStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedStatusInput() {
    return this._failedStatus.internalValue;
  }

  // last_sync - computed: true, optional: false, required: false
  private _lastSync = new DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference(this, "last_sync");
  public get lastSync() {
    return this._lastSync;
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // pipeline_id - computed: true, optional: false, required: false
  public get pipelineId() {
    return this.getStringAttribute('pipeline_id');
  }

  // provisioning_status - computed: true, optional: true, required: false
  private _provisioningStatus = new DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference(this, "provisioning_status");
  public get provisioningStatus() {
    return this._provisioningStatus;
  }
  public putProvisioningStatus(value: DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus) {
    this._provisioningStatus.internalValue = value;
  }
  public resetProvisioningStatus() {
    this._provisioningStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisioningStatusInput() {
    return this._provisioningStatus.internalValue;
  }

  // triggered_update_status - computed: true, optional: true, required: false
  private _triggeredUpdateStatus = new DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference(this, "triggered_update_status");
  public get triggeredUpdateStatus() {
    return this._triggeredUpdateStatus;
  }
  public putTriggeredUpdateStatus(value: DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus) {
    this._triggeredUpdateStatus.internalValue = value;
  }
  public resetTriggeredUpdateStatus() {
    this._triggeredUpdateStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggeredUpdateStatusInput() {
    return this._triggeredUpdateStatus.internalValue;
  }
}
export interface DataDatabricksDatabaseSyncedDatabaseTableProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/database_synced_database_table#workspace_id DataDatabricksDatabaseSyncedDatabaseTable#workspace_id}
  */
  readonly workspaceId?: string;
}

export function dataDatabricksDatabaseSyncedDatabaseTableProviderConfigToTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTableProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function dataDatabricksDatabaseSyncedDatabaseTableProviderConfigToHclTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTableProviderConfig | cdktn.IResolvable): any {
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

export class DataDatabricksDatabaseSyncedDatabaseTableProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksDatabaseSyncedDatabaseTableProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksDatabaseSyncedDatabaseTableProviderConfig | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/database_synced_database_table#budget_policy_id DataDatabricksDatabaseSyncedDatabaseTable#budget_policy_id}
  */
  readonly budgetPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/database_synced_database_table#storage_catalog DataDatabricksDatabaseSyncedDatabaseTable#storage_catalog}
  */
  readonly storageCatalog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/database_synced_database_table#storage_schema DataDatabricksDatabaseSyncedDatabaseTable#storage_schema}
  */
  readonly storageSchema?: string;
}

export function dataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecToTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    budget_policy_id: cdktn.stringToTerraform(struct!.budgetPolicyId),
    storage_catalog: cdktn.stringToTerraform(struct!.storageCatalog),
    storage_schema: cdktn.stringToTerraform(struct!.storageSchema),
  }
}


export function dataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecToHclTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    budget_policy_id: {
      value: cdktn.stringToHclTerraform(struct!.budgetPolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_catalog: {
      value: cdktn.stringToHclTerraform(struct!.storageCatalog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_schema: {
      value: cdktn.stringToHclTerraform(struct!.storageSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._budgetPolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.budgetPolicyId = this._budgetPolicyId;
    }
    if (this._storageCatalog !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageCatalog = this._storageCatalog;
    }
    if (this._storageSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageSchema = this._storageSchema;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._budgetPolicyId = undefined;
      this._storageCatalog = undefined;
      this._storageSchema = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._budgetPolicyId = value.budgetPolicyId;
      this._storageCatalog = value.storageCatalog;
      this._storageSchema = value.storageSchema;
    }
  }

  // budget_policy_id - computed: true, optional: true, required: false
  private _budgetPolicyId?: string; 
  public get budgetPolicyId() {
    return this.getStringAttribute('budget_policy_id');
  }
  public set budgetPolicyId(value: string) {
    this._budgetPolicyId = value;
  }
  public resetBudgetPolicyId() {
    this._budgetPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get budgetPolicyIdInput() {
    return this._budgetPolicyId;
  }

  // storage_catalog - computed: true, optional: true, required: false
  private _storageCatalog?: string; 
  public get storageCatalog() {
    return this.getStringAttribute('storage_catalog');
  }
  public set storageCatalog(value: string) {
    this._storageCatalog = value;
  }
  public resetStorageCatalog() {
    this._storageCatalog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageCatalogInput() {
    return this._storageCatalog;
  }

  // storage_schema - computed: true, optional: true, required: false
  private _storageSchema?: string; 
  public get storageSchema() {
    return this.getStringAttribute('storage_schema');
  }
  public set storageSchema(value: string) {
    this._storageSchema = value;
  }
  public resetStorageSchema() {
    this._storageSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageSchemaInput() {
    return this._storageSchema;
  }
}
export interface DataDatabricksDatabaseSyncedDatabaseTableSpecTypeOverrides {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/database_synced_database_table#column_name DataDatabricksDatabaseSyncedDatabaseTable#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/database_synced_database_table#pg_type DataDatabricksDatabaseSyncedDatabaseTable#pg_type}
  */
  readonly pgType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/database_synced_database_table#size DataDatabricksDatabaseSyncedDatabaseTable#size}
  */
  readonly size?: number;
}

export function dataDatabricksDatabaseSyncedDatabaseTableSpecTypeOverridesToTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTableSpecTypeOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    column_name: cdktn.stringToTerraform(struct!.columnName),
    pg_type: cdktn.stringToTerraform(struct!.pgType),
    size: cdktn.numberToTerraform(struct!.size),
  }
}


export function dataDatabricksDatabaseSyncedDatabaseTableSpecTypeOverridesToHclTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTableSpecTypeOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    column_name: {
      value: cdktn.stringToHclTerraform(struct!.columnName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pg_type: {
      value: cdktn.stringToHclTerraform(struct!.pgType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktn.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksDatabaseSyncedDatabaseTableSpecTypeOverridesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksDatabaseSyncedDatabaseTableSpecTypeOverrides | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnName = this._columnName;
    }
    if (this._pgType !== undefined) {
      hasAnyValues = true;
      internalValueResult.pgType = this._pgType;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksDatabaseSyncedDatabaseTableSpecTypeOverrides | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columnName = undefined;
      this._pgType = undefined;
      this._size = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columnName = value.columnName;
      this._pgType = value.pgType;
      this._size = value.size;
    }
  }

  // column_name - computed: true, optional: false, required: true
  private _columnName?: string; 
  public get columnName() {
    return this.getStringAttribute('column_name');
  }
  public set columnName(value: string) {
    this._columnName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNameInput() {
    return this._columnName;
  }

  // pg_type - computed: true, optional: false, required: true
  private _pgType?: string; 
  public get pgType() {
    return this.getStringAttribute('pg_type');
  }
  public set pgType(value: string) {
    this._pgType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pgTypeInput() {
    return this._pgType;
  }

  // size - computed: true, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }
}

export class DataDatabricksDatabaseSyncedDatabaseTableSpecTypeOverridesList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksDatabaseSyncedDatabaseTableSpecTypeOverrides[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksDatabaseSyncedDatabaseTableSpecTypeOverridesOutputReference {
    return new DataDatabricksDatabaseSyncedDatabaseTableSpecTypeOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksDatabaseSyncedDatabaseTableSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/database_synced_database_table#accelerated_sync DataDatabricksDatabaseSyncedDatabaseTable#accelerated_sync}
  */
  readonly acceleratedSync?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/database_synced_database_table#create_database_objects_if_missing DataDatabricksDatabaseSyncedDatabaseTable#create_database_objects_if_missing}
  */
  readonly createDatabaseObjectsIfMissing?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/database_synced_database_table#existing_pipeline_id DataDatabricksDatabaseSyncedDatabaseTable#existing_pipeline_id}
  */
  readonly existingPipelineId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/database_synced_database_table#new_pipeline_spec DataDatabricksDatabaseSyncedDatabaseTable#new_pipeline_spec}
  */
  readonly newPipelineSpec?: DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/database_synced_database_table#primary_key_columns DataDatabricksDatabaseSyncedDatabaseTable#primary_key_columns}
  */
  readonly primaryKeyColumns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/database_synced_database_table#scheduling_policy DataDatabricksDatabaseSyncedDatabaseTable#scheduling_policy}
  */
  readonly schedulingPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/database_synced_database_table#source_table_full_name DataDatabricksDatabaseSyncedDatabaseTable#source_table_full_name}
  */
  readonly sourceTableFullName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/database_synced_database_table#timeseries_key DataDatabricksDatabaseSyncedDatabaseTable#timeseries_key}
  */
  readonly timeseriesKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/database_synced_database_table#type_overrides DataDatabricksDatabaseSyncedDatabaseTable#type_overrides}
  */
  readonly typeOverrides?: DataDatabricksDatabaseSyncedDatabaseTableSpecTypeOverrides[] | cdktn.IResolvable;
}

export function dataDatabricksDatabaseSyncedDatabaseTableSpecToTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTableSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    accelerated_sync: cdktn.booleanToTerraform(struct!.acceleratedSync),
    create_database_objects_if_missing: cdktn.booleanToTerraform(struct!.createDatabaseObjectsIfMissing),
    existing_pipeline_id: cdktn.stringToTerraform(struct!.existingPipelineId),
    new_pipeline_spec: dataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecToTerraform(struct!.newPipelineSpec),
    primary_key_columns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.primaryKeyColumns),
    scheduling_policy: cdktn.stringToTerraform(struct!.schedulingPolicy),
    source_table_full_name: cdktn.stringToTerraform(struct!.sourceTableFullName),
    timeseries_key: cdktn.stringToTerraform(struct!.timeseriesKey),
    type_overrides: cdktn.listMapper(dataDatabricksDatabaseSyncedDatabaseTableSpecTypeOverridesToTerraform, false)(struct!.typeOverrides),
  }
}


export function dataDatabricksDatabaseSyncedDatabaseTableSpecToHclTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTableSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    accelerated_sync: {
      value: cdktn.booleanToHclTerraform(struct!.acceleratedSync),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    create_database_objects_if_missing: {
      value: cdktn.booleanToHclTerraform(struct!.createDatabaseObjectsIfMissing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    existing_pipeline_id: {
      value: cdktn.stringToHclTerraform(struct!.existingPipelineId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    new_pipeline_spec: {
      value: dataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecToHclTerraform(struct!.newPipelineSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec",
    },
    primary_key_columns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.primaryKeyColumns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    scheduling_policy: {
      value: cdktn.stringToHclTerraform(struct!.schedulingPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_table_full_name: {
      value: cdktn.stringToHclTerraform(struct!.sourceTableFullName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeseries_key: {
      value: cdktn.stringToHclTerraform(struct!.timeseriesKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_overrides: {
      value: cdktn.listMapperHcl(dataDatabricksDatabaseSyncedDatabaseTableSpecTypeOverridesToHclTerraform, false)(struct!.typeOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksDatabaseSyncedDatabaseTableSpecTypeOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksDatabaseSyncedDatabaseTableSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceleratedSync !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceleratedSync = this._acceleratedSync;
    }
    if (this._createDatabaseObjectsIfMissing !== undefined) {
      hasAnyValues = true;
      internalValueResult.createDatabaseObjectsIfMissing = this._createDatabaseObjectsIfMissing;
    }
    if (this._existingPipelineId !== undefined) {
      hasAnyValues = true;
      internalValueResult.existingPipelineId = this._existingPipelineId;
    }
    if (this._newPipelineSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.newPipelineSpec = this._newPipelineSpec?.internalValue;
    }
    if (this._primaryKeyColumns !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKeyColumns = this._primaryKeyColumns;
    }
    if (this._schedulingPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulingPolicy = this._schedulingPolicy;
    }
    if (this._sourceTableFullName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceTableFullName = this._sourceTableFullName;
    }
    if (this._timeseriesKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeseriesKey = this._timeseriesKey;
    }
    if (this._typeOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeOverrides = this._typeOverrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksDatabaseSyncedDatabaseTableSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acceleratedSync = undefined;
      this._createDatabaseObjectsIfMissing = undefined;
      this._existingPipelineId = undefined;
      this._newPipelineSpec.internalValue = undefined;
      this._primaryKeyColumns = undefined;
      this._schedulingPolicy = undefined;
      this._sourceTableFullName = undefined;
      this._timeseriesKey = undefined;
      this._typeOverrides.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acceleratedSync = value.acceleratedSync;
      this._createDatabaseObjectsIfMissing = value.createDatabaseObjectsIfMissing;
      this._existingPipelineId = value.existingPipelineId;
      this._newPipelineSpec.internalValue = value.newPipelineSpec;
      this._primaryKeyColumns = value.primaryKeyColumns;
      this._schedulingPolicy = value.schedulingPolicy;
      this._sourceTableFullName = value.sourceTableFullName;
      this._timeseriesKey = value.timeseriesKey;
      this._typeOverrides.internalValue = value.typeOverrides;
    }
  }

  // accelerated_sync - computed: true, optional: true, required: false
  private _acceleratedSync?: boolean | cdktn.IResolvable; 
  public get acceleratedSync() {
    return this.getBooleanAttribute('accelerated_sync');
  }
  public set acceleratedSync(value: boolean | cdktn.IResolvable) {
    this._acceleratedSync = value;
  }
  public resetAcceleratedSync() {
    this._acceleratedSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratedSyncInput() {
    return this._acceleratedSync;
  }

  // create_database_objects_if_missing - computed: true, optional: true, required: false
  private _createDatabaseObjectsIfMissing?: boolean | cdktn.IResolvable; 
  public get createDatabaseObjectsIfMissing() {
    return this.getBooleanAttribute('create_database_objects_if_missing');
  }
  public set createDatabaseObjectsIfMissing(value: boolean | cdktn.IResolvable) {
    this._createDatabaseObjectsIfMissing = value;
  }
  public resetCreateDatabaseObjectsIfMissing() {
    this._createDatabaseObjectsIfMissing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createDatabaseObjectsIfMissingInput() {
    return this._createDatabaseObjectsIfMissing;
  }

  // existing_pipeline_id - computed: true, optional: true, required: false
  private _existingPipelineId?: string; 
  public get existingPipelineId() {
    return this.getStringAttribute('existing_pipeline_id');
  }
  public set existingPipelineId(value: string) {
    this._existingPipelineId = value;
  }
  public resetExistingPipelineId() {
    this._existingPipelineId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existingPipelineIdInput() {
    return this._existingPipelineId;
  }

  // new_pipeline_spec - computed: true, optional: true, required: false
  private _newPipelineSpec = new DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference(this, "new_pipeline_spec");
  public get newPipelineSpec() {
    return this._newPipelineSpec;
  }
  public putNewPipelineSpec(value: DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec) {
    this._newPipelineSpec.internalValue = value;
  }
  public resetNewPipelineSpec() {
    this._newPipelineSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newPipelineSpecInput() {
    return this._newPipelineSpec.internalValue;
  }

  // primary_key_columns - computed: true, optional: true, required: false
  private _primaryKeyColumns?: string[]; 
  public get primaryKeyColumns() {
    return this.getListAttribute('primary_key_columns');
  }
  public set primaryKeyColumns(value: string[]) {
    this._primaryKeyColumns = value;
  }
  public resetPrimaryKeyColumns() {
    this._primaryKeyColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyColumnsInput() {
    return this._primaryKeyColumns;
  }

  // scheduling_policy - computed: true, optional: true, required: false
  private _schedulingPolicy?: string; 
  public get schedulingPolicy() {
    return this.getStringAttribute('scheduling_policy');
  }
  public set schedulingPolicy(value: string) {
    this._schedulingPolicy = value;
  }
  public resetSchedulingPolicy() {
    this._schedulingPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingPolicyInput() {
    return this._schedulingPolicy;
  }

  // source_table_full_name - computed: true, optional: true, required: false
  private _sourceTableFullName?: string; 
  public get sourceTableFullName() {
    return this.getStringAttribute('source_table_full_name');
  }
  public set sourceTableFullName(value: string) {
    this._sourceTableFullName = value;
  }
  public resetSourceTableFullName() {
    this._sourceTableFullName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTableFullNameInput() {
    return this._sourceTableFullName;
  }

  // timeseries_key - computed: true, optional: true, required: false
  private _timeseriesKey?: string; 
  public get timeseriesKey() {
    return this.getStringAttribute('timeseries_key');
  }
  public set timeseriesKey(value: string) {
    this._timeseriesKey = value;
  }
  public resetTimeseriesKey() {
    this._timeseriesKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeseriesKeyInput() {
    return this._timeseriesKey;
  }

  // type_overrides - computed: true, optional: true, required: false
  private _typeOverrides = new DataDatabricksDatabaseSyncedDatabaseTableSpecTypeOverridesList(this, "type_overrides", false);
  public get typeOverrides() {
    return this._typeOverrides;
  }
  public putTypeOverrides(value: DataDatabricksDatabaseSyncedDatabaseTableSpecTypeOverrides[] | cdktn.IResolvable) {
    this._typeOverrides.internalValue = value;
  }
  public resetTypeOverrides() {
    this._typeOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeOverridesInput() {
    return this._typeOverrides.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/database_synced_database_table databricks_database_synced_database_table}
*/
export class DataDatabricksDatabaseSyncedDatabaseTable extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_database_synced_database_table";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataDatabricksDatabaseSyncedDatabaseTable resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksDatabaseSyncedDatabaseTable to import
  * @param importFromId The id of the existing DataDatabricksDatabaseSyncedDatabaseTable that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/database_synced_database_table#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksDatabaseSyncedDatabaseTable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_database_synced_database_table", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/database_synced_database_table databricks_database_synced_database_table} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksDatabaseSyncedDatabaseTableConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksDatabaseSyncedDatabaseTableConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_database_synced_database_table',
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

  // data_synchronization_status - computed: true, optional: false, required: false
  private _dataSynchronizationStatus = new DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference(this, "data_synchronization_status");
  public get dataSynchronizationStatus() {
    return this._dataSynchronizationStatus;
  }

  // database_instance_name - computed: true, optional: false, required: false
  public get databaseInstanceName() {
    return this.getStringAttribute('database_instance_name');
  }

  // effective_database_instance_name - computed: true, optional: false, required: false
  public get effectiveDatabaseInstanceName() {
    return this.getStringAttribute('effective_database_instance_name');
  }

  // effective_logical_database_name - computed: true, optional: false, required: false
  public get effectiveLogicalDatabaseName() {
    return this.getStringAttribute('effective_logical_database_name');
  }

  // logical_database_name - computed: true, optional: false, required: false
  public get logicalDatabaseName() {
    return this.getStringAttribute('logical_database_name');
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

  // provider_config - computed: false, optional: true, required: false
  private _providerConfig = new DataDatabricksDatabaseSyncedDatabaseTableProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataDatabricksDatabaseSyncedDatabaseTableProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // spec - computed: true, optional: false, required: false
  private _spec = new DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }

  // unity_catalog_provisioning_state - computed: true, optional: false, required: false
  public get unityCatalogProvisioningState() {
    return this.getStringAttribute('unity_catalog_provisioning_state');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktn.stringToTerraform(this._name),
      provider_config: dataDatabricksDatabaseSyncedDatabaseTableProviderConfigToTerraform(this._providerConfig.internalValue),
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
        value: dataDatabricksDatabaseSyncedDatabaseTableProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataDatabricksDatabaseSyncedDatabaseTableProviderConfig",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
