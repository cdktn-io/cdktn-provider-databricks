/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/database_synced_database_tables
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataDatabricksDatabaseSyncedDatabaseTablesConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/database_synced_database_tables#instance_name DataDatabricksDatabaseSyncedDatabaseTables#instance_name}
  */
  readonly instanceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/database_synced_database_tables#page_size DataDatabricksDatabaseSyncedDatabaseTables#page_size}
  */
  readonly pageSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/database_synced_database_tables#provider_config DataDatabricksDatabaseSyncedDatabaseTables#provider_config}
  */
  readonly providerConfig?: DataDatabricksDatabaseSyncedDatabaseTablesProviderConfig;
}
export interface DataDatabricksDatabaseSyncedDatabaseTablesProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/database_synced_database_tables#workspace_id DataDatabricksDatabaseSyncedDatabaseTables#workspace_id}
  */
  readonly workspaceId?: string;
}

export function dataDatabricksDatabaseSyncedDatabaseTablesProviderConfigToTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTablesProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function dataDatabricksDatabaseSyncedDatabaseTablesProviderConfigToHclTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTablesProviderConfig | cdktn.IResolvable): any {
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

export class DataDatabricksDatabaseSyncedDatabaseTablesProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksDatabaseSyncedDatabaseTablesProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksDatabaseSyncedDatabaseTablesProviderConfig | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress {
}

export function dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressToTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressToHclTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress | undefined) {
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
export interface DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatus {
}

export function dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusToTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatus | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusToHclTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatus | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatus | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatus | cdktn.IResolvable | undefined) {
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
  private _initialPipelineSyncProgress = new DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference(this, "initial_pipeline_sync_progress");
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
export interface DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatus {
}

export function dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusToTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatus | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusToHclTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatus | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatus | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatus | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfo {
}

export function dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoToTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoToHclTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfo | undefined) {
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
export interface DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSync {
}

export function dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncToTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSync): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncToHclTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSync): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSync | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSync | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // delta_table_sync_info - computed: true, optional: false, required: false
  private _deltaTableSyncInfo = new DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference(this, "delta_table_sync_info");
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
export interface DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress {
}

export function dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressToTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressToHclTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress | undefined) {
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
export interface DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatus {
}

export function dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusToTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatus | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusToHclTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatus | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatus | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatus | cdktn.IResolvable | undefined) {
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
  private _initialPipelineSyncProgress = new DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference(this, "initial_pipeline_sync_progress");
  public get initialPipelineSyncProgress() {
    return this._initialPipelineSyncProgress;
  }
}
export interface DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress {
}

export function dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressToTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressToHclTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress | undefined) {
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
export interface DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatus {
}

export function dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusToTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatus | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusToHclTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatus | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatus | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatus | cdktn.IResolvable | undefined) {
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
  private _triggeredUpdateProgress = new DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference(this, "triggered_update_progress");
  public get triggeredUpdateProgress() {
    return this._triggeredUpdateProgress;
  }
}
export interface DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/database_synced_database_tables#continuous_update_status DataDatabricksDatabaseSyncedDatabaseTables#continuous_update_status}
  */
  readonly continuousUpdateStatus?: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatus;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/database_synced_database_tables#failed_status DataDatabricksDatabaseSyncedDatabaseTables#failed_status}
  */
  readonly failedStatus?: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatus;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/database_synced_database_tables#provisioning_status DataDatabricksDatabaseSyncedDatabaseTables#provisioning_status}
  */
  readonly provisioningStatus?: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatus;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/database_synced_database_tables#triggered_update_status DataDatabricksDatabaseSyncedDatabaseTables#triggered_update_status}
  */
  readonly triggeredUpdateStatus?: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatus;
}

export function dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusToTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    continuous_update_status: dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusToTerraform(struct!.continuousUpdateStatus),
    failed_status: dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusToTerraform(struct!.failedStatus),
    provisioning_status: dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusToTerraform(struct!.provisioningStatus),
    triggered_update_status: dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusToTerraform(struct!.triggeredUpdateStatus),
  }
}


export function dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusToHclTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    continuous_update_status: {
      value: dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusToHclTerraform(struct!.continuousUpdateStatus),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatus",
    },
    failed_status: {
      value: dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusToHclTerraform(struct!.failedStatus),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatus",
    },
    provisioning_status: {
      value: dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusToHclTerraform(struct!.provisioningStatus),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatus",
    },
    triggered_update_status: {
      value: dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusToHclTerraform(struct!.triggeredUpdateStatus),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatus",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatus | undefined {
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

  public set internalValue(value: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatus | undefined) {
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
  private _continuousUpdateStatus = new DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference(this, "continuous_update_status");
  public get continuousUpdateStatus() {
    return this._continuousUpdateStatus;
  }
  public putContinuousUpdateStatus(value: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatus) {
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
  private _failedStatus = new DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference(this, "failed_status");
  public get failedStatus() {
    return this._failedStatus;
  }
  public putFailedStatus(value: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatus) {
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
  private _lastSync = new DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference(this, "last_sync");
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
  private _provisioningStatus = new DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference(this, "provisioning_status");
  public get provisioningStatus() {
    return this._provisioningStatus;
  }
  public putProvisioningStatus(value: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatus) {
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
  private _triggeredUpdateStatus = new DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference(this, "triggered_update_status");
  public get triggeredUpdateStatus() {
    return this._triggeredUpdateStatus;
  }
  public putTriggeredUpdateStatus(value: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatus) {
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
export interface DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/database_synced_database_tables#workspace_id DataDatabricksDatabaseSyncedDatabaseTables#workspace_id}
  */
  readonly workspaceId?: string;
}

export function dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesProviderConfigToTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesProviderConfigToHclTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesProviderConfig | cdktn.IResolvable): any {
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

export class DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesProviderConfig | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/database_synced_database_tables#budget_policy_id DataDatabricksDatabaseSyncedDatabaseTables#budget_policy_id}
  */
  readonly budgetPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/database_synced_database_tables#storage_catalog DataDatabricksDatabaseSyncedDatabaseTables#storage_catalog}
  */
  readonly storageCatalog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/database_synced_database_tables#storage_schema DataDatabricksDatabaseSyncedDatabaseTables#storage_schema}
  */
  readonly storageSchema?: string;
}

export function dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecToTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpec | cdktn.IResolvable): any {
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


export function dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecToHclTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpec | cdktn.IResolvable): any {
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

export class DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpec | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpec | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecTypeOverrides {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/database_synced_database_tables#column_name DataDatabricksDatabaseSyncedDatabaseTables#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/database_synced_database_tables#pg_type DataDatabricksDatabaseSyncedDatabaseTables#pg_type}
  */
  readonly pgType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/database_synced_database_tables#size DataDatabricksDatabaseSyncedDatabaseTables#size}
  */
  readonly size?: number;
}

export function dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecTypeOverridesToTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecTypeOverrides | cdktn.IResolvable): any {
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


export function dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecTypeOverridesToHclTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecTypeOverrides | cdktn.IResolvable): any {
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

export class DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecTypeOverridesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecTypeOverrides | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecTypeOverrides | cdktn.IResolvable | undefined) {
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

export class DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecTypeOverridesList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecTypeOverrides[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecTypeOverridesOutputReference {
    return new DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecTypeOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/database_synced_database_tables#accelerated_sync DataDatabricksDatabaseSyncedDatabaseTables#accelerated_sync}
  */
  readonly acceleratedSync?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/database_synced_database_tables#create_database_objects_if_missing DataDatabricksDatabaseSyncedDatabaseTables#create_database_objects_if_missing}
  */
  readonly createDatabaseObjectsIfMissing?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/database_synced_database_tables#existing_pipeline_id DataDatabricksDatabaseSyncedDatabaseTables#existing_pipeline_id}
  */
  readonly existingPipelineId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/database_synced_database_tables#new_pipeline_spec DataDatabricksDatabaseSyncedDatabaseTables#new_pipeline_spec}
  */
  readonly newPipelineSpec?: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpec;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/database_synced_database_tables#primary_key_columns DataDatabricksDatabaseSyncedDatabaseTables#primary_key_columns}
  */
  readonly primaryKeyColumns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/database_synced_database_tables#scheduling_policy DataDatabricksDatabaseSyncedDatabaseTables#scheduling_policy}
  */
  readonly schedulingPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/database_synced_database_tables#source_table_full_name DataDatabricksDatabaseSyncedDatabaseTables#source_table_full_name}
  */
  readonly sourceTableFullName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/database_synced_database_tables#timeseries_key DataDatabricksDatabaseSyncedDatabaseTables#timeseries_key}
  */
  readonly timeseriesKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/database_synced_database_tables#type_overrides DataDatabricksDatabaseSyncedDatabaseTables#type_overrides}
  */
  readonly typeOverrides?: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecTypeOverrides[] | cdktn.IResolvable;
}

export function dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecToTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    accelerated_sync: cdktn.booleanToTerraform(struct!.acceleratedSync),
    create_database_objects_if_missing: cdktn.booleanToTerraform(struct!.createDatabaseObjectsIfMissing),
    existing_pipeline_id: cdktn.stringToTerraform(struct!.existingPipelineId),
    new_pipeline_spec: dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecToTerraform(struct!.newPipelineSpec),
    primary_key_columns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.primaryKeyColumns),
    scheduling_policy: cdktn.stringToTerraform(struct!.schedulingPolicy),
    source_table_full_name: cdktn.stringToTerraform(struct!.sourceTableFullName),
    timeseries_key: cdktn.stringToTerraform(struct!.timeseriesKey),
    type_overrides: cdktn.listMapper(dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecTypeOverridesToTerraform, false)(struct!.typeOverrides),
  }
}


export function dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecToHclTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpec): any {
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
      value: dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecToHclTerraform(struct!.newPipelineSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpec",
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
      value: cdktn.listMapperHcl(dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecTypeOverridesToHclTerraform, false)(struct!.typeOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecTypeOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpec | undefined {
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

  public set internalValue(value: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpec | undefined) {
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
  private _newPipelineSpec = new DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference(this, "new_pipeline_spec");
  public get newPipelineSpec() {
    return this._newPipelineSpec;
  }
  public putNewPipelineSpec(value: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpec) {
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
  private _typeOverrides = new DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecTypeOverridesList(this, "type_overrides", false);
  public get typeOverrides() {
    return this._typeOverrides;
  }
  public putTypeOverrides(value: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecTypeOverrides[] | cdktn.IResolvable) {
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
export interface DataDatabricksDatabaseSyncedDatabaseTablesSyncedTables {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/database_synced_database_tables#name DataDatabricksDatabaseSyncedDatabaseTables#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/database_synced_database_tables#provider_config DataDatabricksDatabaseSyncedDatabaseTables#provider_config}
  */
  readonly providerConfig?: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesProviderConfig;
}

export function dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesToTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTables): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    provider_config: dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesProviderConfigToTerraform(struct!.providerConfig),
  }
}


export function dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesToHclTerraform(struct?: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTables): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider_config: {
      value: dataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesProviderConfigToHclTerraform(struct!.providerConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesProviderConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksDatabaseSyncedDatabaseTablesSyncedTables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._providerConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerConfig = this._providerConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._providerConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._providerConfig.internalValue = value.providerConfig;
    }
  }

  // data_synchronization_status - computed: true, optional: false, required: false
  private _dataSynchronizationStatus = new DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference(this, "data_synchronization_status");
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

  // name - computed: true, optional: false, required: true
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

  // provider_config - computed: true, optional: true, required: false
  private _providerConfig = new DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesProviderConfig) {
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
  private _spec = new DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }

  // unity_catalog_provisioning_state - computed: true, optional: false, required: false
  public get unityCatalogProvisioningState() {
    return this.getStringAttribute('unity_catalog_provisioning_state');
  }
}

export class DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksDatabaseSyncedDatabaseTablesSyncedTables[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference {
    return new DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/database_synced_database_tables databricks_database_synced_database_tables}
*/
export class DataDatabricksDatabaseSyncedDatabaseTables extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_database_synced_database_tables";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataDatabricksDatabaseSyncedDatabaseTables resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksDatabaseSyncedDatabaseTables to import
  * @param importFromId The id of the existing DataDatabricksDatabaseSyncedDatabaseTables that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/database_synced_database_tables#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksDatabaseSyncedDatabaseTables to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_database_synced_database_tables", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/database_synced_database_tables databricks_database_synced_database_tables} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksDatabaseSyncedDatabaseTablesConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksDatabaseSyncedDatabaseTablesConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_database_synced_database_tables',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.130.0',
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
    this._instanceName = config.instanceName;
    this._pageSize = config.pageSize;
    this._providerConfig.internalValue = config.providerConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // instance_name - computed: false, optional: false, required: true
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // page_size - computed: false, optional: true, required: false
  private _pageSize?: number; 
  public get pageSize() {
    return this.getNumberAttribute('page_size');
  }
  public set pageSize(value: number) {
    this._pageSize = value;
  }
  public resetPageSize() {
    this._pageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageSizeInput() {
    return this._pageSize;
  }

  // provider_config - computed: false, optional: true, required: false
  private _providerConfig = new DataDatabricksDatabaseSyncedDatabaseTablesProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataDatabricksDatabaseSyncedDatabaseTablesProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // synced_tables - computed: true, optional: false, required: false
  private _syncedTables = new DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesList(this, "synced_tables", false);
  public get syncedTables() {
    return this._syncedTables;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      instance_name: cdktn.stringToTerraform(this._instanceName),
      page_size: cdktn.numberToTerraform(this._pageSize),
      provider_config: dataDatabricksDatabaseSyncedDatabaseTablesProviderConfigToTerraform(this._providerConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      instance_name: {
        value: cdktn.stringToHclTerraform(this._instanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      page_size: {
        value: cdktn.numberToHclTerraform(this._pageSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      provider_config: {
        value: dataDatabricksDatabaseSyncedDatabaseTablesProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataDatabricksDatabaseSyncedDatabaseTablesProviderConfig",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
