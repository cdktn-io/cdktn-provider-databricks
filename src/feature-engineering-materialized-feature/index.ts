/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/feature_engineering_materialized_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface FeatureEngineeringMaterializedFeatureConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/feature_engineering_materialized_feature#cron_schedule FeatureEngineeringMaterializedFeature#cron_schedule}
  */
  readonly cronSchedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/feature_engineering_materialized_feature#cron_schedule_trigger FeatureEngineeringMaterializedFeature#cron_schedule_trigger}
  */
  readonly cronScheduleTrigger?: FeatureEngineeringMaterializedFeatureCronScheduleTrigger;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/feature_engineering_materialized_feature#feature_name FeatureEngineeringMaterializedFeature#feature_name}
  */
  readonly featureName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/feature_engineering_materialized_feature#offline_store_config FeatureEngineeringMaterializedFeature#offline_store_config}
  */
  readonly offlineStoreConfig?: FeatureEngineeringMaterializedFeatureOfflineStoreConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/feature_engineering_materialized_feature#online_store_config FeatureEngineeringMaterializedFeature#online_store_config}
  */
  readonly onlineStoreConfig?: FeatureEngineeringMaterializedFeatureOnlineStoreConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/feature_engineering_materialized_feature#pipeline_schedule_state FeatureEngineeringMaterializedFeature#pipeline_schedule_state}
  */
  readonly pipelineScheduleState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/feature_engineering_materialized_feature#provider_config FeatureEngineeringMaterializedFeature#provider_config}
  */
  readonly providerConfig?: FeatureEngineeringMaterializedFeatureProviderConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/feature_engineering_materialized_feature#streaming_mode FeatureEngineeringMaterializedFeature#streaming_mode}
  */
  readonly streamingMode?: FeatureEngineeringMaterializedFeatureStreamingMode;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/feature_engineering_materialized_feature#table_trigger FeatureEngineeringMaterializedFeature#table_trigger}
  */
  readonly tableTrigger?: FeatureEngineeringMaterializedFeatureTableTrigger;
}
export interface FeatureEngineeringMaterializedFeatureCronScheduleTrigger {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/feature_engineering_materialized_feature#cron_expression FeatureEngineeringMaterializedFeature#cron_expression}
  */
  readonly cronExpression?: string;
}

export function featureEngineeringMaterializedFeatureCronScheduleTriggerToTerraform(struct?: FeatureEngineeringMaterializedFeatureCronScheduleTrigger | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cron_expression: cdktn.stringToTerraform(struct!.cronExpression),
  }
}


export function featureEngineeringMaterializedFeatureCronScheduleTriggerToHclTerraform(struct?: FeatureEngineeringMaterializedFeatureCronScheduleTrigger | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cron_expression: {
      value: cdktn.stringToHclTerraform(struct!.cronExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FeatureEngineeringMaterializedFeatureCronScheduleTrigger | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cronExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronExpression = this._cronExpression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FeatureEngineeringMaterializedFeatureCronScheduleTrigger | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cronExpression = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cronExpression = value.cronExpression;
    }
  }

  // cron_expression - computed: false, optional: true, required: false
  private _cronExpression?: string; 
  public get cronExpression() {
    return this.getStringAttribute('cron_expression');
  }
  public set cronExpression(value: string) {
    this._cronExpression = value;
  }
  public resetCronExpression() {
    this._cronExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronExpressionInput() {
    return this._cronExpression;
  }
}
export interface FeatureEngineeringMaterializedFeatureOfflineStoreConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/feature_engineering_materialized_feature#catalog_name FeatureEngineeringMaterializedFeature#catalog_name}
  */
  readonly catalogName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/feature_engineering_materialized_feature#schema_name FeatureEngineeringMaterializedFeature#schema_name}
  */
  readonly schemaName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/feature_engineering_materialized_feature#table_name_prefix FeatureEngineeringMaterializedFeature#table_name_prefix}
  */
  readonly tableNamePrefix: string;
}

export function featureEngineeringMaterializedFeatureOfflineStoreConfigToTerraform(struct?: FeatureEngineeringMaterializedFeatureOfflineStoreConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    catalog_name: cdktn.stringToTerraform(struct!.catalogName),
    schema_name: cdktn.stringToTerraform(struct!.schemaName),
    table_name_prefix: cdktn.stringToTerraform(struct!.tableNamePrefix),
  }
}


export function featureEngineeringMaterializedFeatureOfflineStoreConfigToHclTerraform(struct?: FeatureEngineeringMaterializedFeatureOfflineStoreConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    catalog_name: {
      value: cdktn.stringToHclTerraform(struct!.catalogName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_name: {
      value: cdktn.stringToHclTerraform(struct!.schemaName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_name_prefix: {
      value: cdktn.stringToHclTerraform(struct!.tableNamePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FeatureEngineeringMaterializedFeatureOfflineStoreConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalogName !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogName = this._catalogName;
    }
    if (this._schemaName !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaName = this._schemaName;
    }
    if (this._tableNamePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableNamePrefix = this._tableNamePrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FeatureEngineeringMaterializedFeatureOfflineStoreConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._catalogName = undefined;
      this._schemaName = undefined;
      this._tableNamePrefix = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._catalogName = value.catalogName;
      this._schemaName = value.schemaName;
      this._tableNamePrefix = value.tableNamePrefix;
    }
  }

  // catalog_name - computed: false, optional: false, required: true
  private _catalogName?: string; 
  public get catalogName() {
    return this.getStringAttribute('catalog_name');
  }
  public set catalogName(value: string) {
    this._catalogName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogNameInput() {
    return this._catalogName;
  }

  // schema_name - computed: false, optional: false, required: true
  private _schemaName?: string; 
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
  public set schemaName(value: string) {
    this._schemaName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaNameInput() {
    return this._schemaName;
  }

  // table_name_prefix - computed: false, optional: false, required: true
  private _tableNamePrefix?: string; 
  public get tableNamePrefix() {
    return this.getStringAttribute('table_name_prefix');
  }
  public set tableNamePrefix(value: string) {
    this._tableNamePrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNamePrefixInput() {
    return this._tableNamePrefix;
  }
}
export interface FeatureEngineeringMaterializedFeatureOnlineStoreConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/feature_engineering_materialized_feature#catalog_name FeatureEngineeringMaterializedFeature#catalog_name}
  */
  readonly catalogName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/feature_engineering_materialized_feature#online_store_name FeatureEngineeringMaterializedFeature#online_store_name}
  */
  readonly onlineStoreName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/feature_engineering_materialized_feature#schema_name FeatureEngineeringMaterializedFeature#schema_name}
  */
  readonly schemaName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/feature_engineering_materialized_feature#table_name_prefix FeatureEngineeringMaterializedFeature#table_name_prefix}
  */
  readonly tableNamePrefix: string;
}

export function featureEngineeringMaterializedFeatureOnlineStoreConfigToTerraform(struct?: FeatureEngineeringMaterializedFeatureOnlineStoreConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    catalog_name: cdktn.stringToTerraform(struct!.catalogName),
    online_store_name: cdktn.stringToTerraform(struct!.onlineStoreName),
    schema_name: cdktn.stringToTerraform(struct!.schemaName),
    table_name_prefix: cdktn.stringToTerraform(struct!.tableNamePrefix),
  }
}


export function featureEngineeringMaterializedFeatureOnlineStoreConfigToHclTerraform(struct?: FeatureEngineeringMaterializedFeatureOnlineStoreConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    catalog_name: {
      value: cdktn.stringToHclTerraform(struct!.catalogName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    online_store_name: {
      value: cdktn.stringToHclTerraform(struct!.onlineStoreName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_name: {
      value: cdktn.stringToHclTerraform(struct!.schemaName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_name_prefix: {
      value: cdktn.stringToHclTerraform(struct!.tableNamePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FeatureEngineeringMaterializedFeatureOnlineStoreConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalogName !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogName = this._catalogName;
    }
    if (this._onlineStoreName !== undefined) {
      hasAnyValues = true;
      internalValueResult.onlineStoreName = this._onlineStoreName;
    }
    if (this._schemaName !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaName = this._schemaName;
    }
    if (this._tableNamePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableNamePrefix = this._tableNamePrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FeatureEngineeringMaterializedFeatureOnlineStoreConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._catalogName = undefined;
      this._onlineStoreName = undefined;
      this._schemaName = undefined;
      this._tableNamePrefix = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._catalogName = value.catalogName;
      this._onlineStoreName = value.onlineStoreName;
      this._schemaName = value.schemaName;
      this._tableNamePrefix = value.tableNamePrefix;
    }
  }

  // catalog_name - computed: false, optional: false, required: true
  private _catalogName?: string; 
  public get catalogName() {
    return this.getStringAttribute('catalog_name');
  }
  public set catalogName(value: string) {
    this._catalogName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogNameInput() {
    return this._catalogName;
  }

  // online_store_name - computed: false, optional: false, required: true
  private _onlineStoreName?: string; 
  public get onlineStoreName() {
    return this.getStringAttribute('online_store_name');
  }
  public set onlineStoreName(value: string) {
    this._onlineStoreName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get onlineStoreNameInput() {
    return this._onlineStoreName;
  }

  // schema_name - computed: false, optional: false, required: true
  private _schemaName?: string; 
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
  public set schemaName(value: string) {
    this._schemaName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaNameInput() {
    return this._schemaName;
  }

  // table_name_prefix - computed: false, optional: false, required: true
  private _tableNamePrefix?: string; 
  public get tableNamePrefix() {
    return this.getStringAttribute('table_name_prefix');
  }
  public set tableNamePrefix(value: string) {
    this._tableNamePrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNamePrefixInput() {
    return this._tableNamePrefix;
  }
}
export interface FeatureEngineeringMaterializedFeatureProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/feature_engineering_materialized_feature#workspace_id FeatureEngineeringMaterializedFeature#workspace_id}
  */
  readonly workspaceId?: string;
}

export function featureEngineeringMaterializedFeatureProviderConfigToTerraform(struct?: FeatureEngineeringMaterializedFeatureProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function featureEngineeringMaterializedFeatureProviderConfigToHclTerraform(struct?: FeatureEngineeringMaterializedFeatureProviderConfig | cdktn.IResolvable): any {
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

export class FeatureEngineeringMaterializedFeatureProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FeatureEngineeringMaterializedFeatureProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: FeatureEngineeringMaterializedFeatureProviderConfig | cdktn.IResolvable | undefined) {
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
export interface FeatureEngineeringMaterializedFeatureStreamingMode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/feature_engineering_materialized_feature#freshness_target FeatureEngineeringMaterializedFeature#freshness_target}
  */
  readonly freshnessTarget?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/feature_engineering_materialized_feature#mode FeatureEngineeringMaterializedFeature#mode}
  */
  readonly mode?: string;
}

export function featureEngineeringMaterializedFeatureStreamingModeToTerraform(struct?: FeatureEngineeringMaterializedFeatureStreamingMode | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    freshness_target: cdktn.stringToTerraform(struct!.freshnessTarget),
    mode: cdktn.stringToTerraform(struct!.mode),
  }
}


export function featureEngineeringMaterializedFeatureStreamingModeToHclTerraform(struct?: FeatureEngineeringMaterializedFeatureStreamingMode | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    freshness_target: {
      value: cdktn.stringToHclTerraform(struct!.freshnessTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktn.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FeatureEngineeringMaterializedFeatureStreamingModeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FeatureEngineeringMaterializedFeatureStreamingMode | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._freshnessTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.freshnessTarget = this._freshnessTarget;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FeatureEngineeringMaterializedFeatureStreamingMode | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._freshnessTarget = undefined;
      this._mode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._freshnessTarget = value.freshnessTarget;
      this._mode = value.mode;
    }
  }

  // freshness_target - computed: false, optional: true, required: false
  private _freshnessTarget?: string; 
  public get freshnessTarget() {
    return this.getStringAttribute('freshness_target');
  }
  public set freshnessTarget(value: string) {
    this._freshnessTarget = value;
  }
  public resetFreshnessTarget() {
    this._freshnessTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freshnessTargetInput() {
    return this._freshnessTarget;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface FeatureEngineeringMaterializedFeatureTableTrigger {
}

export function featureEngineeringMaterializedFeatureTableTriggerToTerraform(struct?: FeatureEngineeringMaterializedFeatureTableTrigger | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function featureEngineeringMaterializedFeatureTableTriggerToHclTerraform(struct?: FeatureEngineeringMaterializedFeatureTableTrigger | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class FeatureEngineeringMaterializedFeatureTableTriggerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FeatureEngineeringMaterializedFeatureTableTrigger | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FeatureEngineeringMaterializedFeatureTableTrigger | cdktn.IResolvable | undefined) {
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/feature_engineering_materialized_feature databricks_feature_engineering_materialized_feature}
*/
export class FeatureEngineeringMaterializedFeature extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_feature_engineering_materialized_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a FeatureEngineeringMaterializedFeature resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FeatureEngineeringMaterializedFeature to import
  * @param importFromId The id of the existing FeatureEngineeringMaterializedFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/feature_engineering_materialized_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FeatureEngineeringMaterializedFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_feature_engineering_materialized_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/feature_engineering_materialized_feature databricks_feature_engineering_materialized_feature} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FeatureEngineeringMaterializedFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: FeatureEngineeringMaterializedFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_feature_engineering_materialized_feature',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.126.0',
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
    this._cronSchedule = config.cronSchedule;
    this._cronScheduleTrigger.internalValue = config.cronScheduleTrigger;
    this._featureName = config.featureName;
    this._offlineStoreConfig.internalValue = config.offlineStoreConfig;
    this._onlineStoreConfig.internalValue = config.onlineStoreConfig;
    this._pipelineScheduleState = config.pipelineScheduleState;
    this._providerConfig.internalValue = config.providerConfig;
    this._streamingMode.internalValue = config.streamingMode;
    this._tableTrigger.internalValue = config.tableTrigger;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cron_schedule - computed: false, optional: true, required: false
  private _cronSchedule?: string; 
  public get cronSchedule() {
    return this.getStringAttribute('cron_schedule');
  }
  public set cronSchedule(value: string) {
    this._cronSchedule = value;
  }
  public resetCronSchedule() {
    this._cronSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronScheduleInput() {
    return this._cronSchedule;
  }

  // cron_schedule_trigger - computed: false, optional: true, required: false
  private _cronScheduleTrigger = new FeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference(this, "cron_schedule_trigger");
  public get cronScheduleTrigger() {
    return this._cronScheduleTrigger;
  }
  public putCronScheduleTrigger(value: FeatureEngineeringMaterializedFeatureCronScheduleTrigger) {
    this._cronScheduleTrigger.internalValue = value;
  }
  public resetCronScheduleTrigger() {
    this._cronScheduleTrigger.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronScheduleTriggerInput() {
    return this._cronScheduleTrigger.internalValue;
  }

  // feature_name - computed: false, optional: false, required: true
  private _featureName?: string; 
  public get featureName() {
    return this.getStringAttribute('feature_name');
  }
  public set featureName(value: string) {
    this._featureName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureNameInput() {
    return this._featureName;
  }

  // is_online - computed: true, optional: false, required: false
  public get isOnline() {
    return this.getBooleanAttribute('is_online');
  }

  // last_materialization_time - computed: true, optional: false, required: false
  public get lastMaterializationTime() {
    return this.getStringAttribute('last_materialization_time');
  }

  // materialized_feature_id - computed: true, optional: false, required: false
  public get materializedFeatureId() {
    return this.getStringAttribute('materialized_feature_id');
  }

  // offline_store_config - computed: false, optional: true, required: false
  private _offlineStoreConfig = new FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference(this, "offline_store_config");
  public get offlineStoreConfig() {
    return this._offlineStoreConfig;
  }
  public putOfflineStoreConfig(value: FeatureEngineeringMaterializedFeatureOfflineStoreConfig) {
    this._offlineStoreConfig.internalValue = value;
  }
  public resetOfflineStoreConfig() {
    this._offlineStoreConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offlineStoreConfigInput() {
    return this._offlineStoreConfig.internalValue;
  }

  // online_store_config - computed: false, optional: true, required: false
  private _onlineStoreConfig = new FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference(this, "online_store_config");
  public get onlineStoreConfig() {
    return this._onlineStoreConfig;
  }
  public putOnlineStoreConfig(value: FeatureEngineeringMaterializedFeatureOnlineStoreConfig) {
    this._onlineStoreConfig.internalValue = value;
  }
  public resetOnlineStoreConfig() {
    this._onlineStoreConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlineStoreConfigInput() {
    return this._onlineStoreConfig.internalValue;
  }

  // pipeline_schedule_state - computed: false, optional: true, required: false
  private _pipelineScheduleState?: string; 
  public get pipelineScheduleState() {
    return this.getStringAttribute('pipeline_schedule_state');
  }
  public set pipelineScheduleState(value: string) {
    this._pipelineScheduleState = value;
  }
  public resetPipelineScheduleState() {
    this._pipelineScheduleState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineScheduleStateInput() {
    return this._pipelineScheduleState;
  }

  // provider_config - computed: true, optional: true, required: false
  private _providerConfig = new FeatureEngineeringMaterializedFeatureProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: FeatureEngineeringMaterializedFeatureProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // streaming_mode - computed: false, optional: true, required: false
  private _streamingMode = new FeatureEngineeringMaterializedFeatureStreamingModeOutputReference(this, "streaming_mode");
  public get streamingMode() {
    return this._streamingMode;
  }
  public putStreamingMode(value: FeatureEngineeringMaterializedFeatureStreamingMode) {
    this._streamingMode.internalValue = value;
  }
  public resetStreamingMode() {
    this._streamingMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamingModeInput() {
    return this._streamingMode.internalValue;
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }

  // table_trigger - computed: false, optional: true, required: false
  private _tableTrigger = new FeatureEngineeringMaterializedFeatureTableTriggerOutputReference(this, "table_trigger");
  public get tableTrigger() {
    return this._tableTrigger;
  }
  public putTableTrigger(value: FeatureEngineeringMaterializedFeatureTableTrigger) {
    this._tableTrigger.internalValue = value;
  }
  public resetTableTrigger() {
    this._tableTrigger.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableTriggerInput() {
    return this._tableTrigger.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cron_schedule: cdktn.stringToTerraform(this._cronSchedule),
      cron_schedule_trigger: featureEngineeringMaterializedFeatureCronScheduleTriggerToTerraform(this._cronScheduleTrigger.internalValue),
      feature_name: cdktn.stringToTerraform(this._featureName),
      offline_store_config: featureEngineeringMaterializedFeatureOfflineStoreConfigToTerraform(this._offlineStoreConfig.internalValue),
      online_store_config: featureEngineeringMaterializedFeatureOnlineStoreConfigToTerraform(this._onlineStoreConfig.internalValue),
      pipeline_schedule_state: cdktn.stringToTerraform(this._pipelineScheduleState),
      provider_config: featureEngineeringMaterializedFeatureProviderConfigToTerraform(this._providerConfig.internalValue),
      streaming_mode: featureEngineeringMaterializedFeatureStreamingModeToTerraform(this._streamingMode.internalValue),
      table_trigger: featureEngineeringMaterializedFeatureTableTriggerToTerraform(this._tableTrigger.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cron_schedule: {
        value: cdktn.stringToHclTerraform(this._cronSchedule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cron_schedule_trigger: {
        value: featureEngineeringMaterializedFeatureCronScheduleTriggerToHclTerraform(this._cronScheduleTrigger.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FeatureEngineeringMaterializedFeatureCronScheduleTrigger",
      },
      feature_name: {
        value: cdktn.stringToHclTerraform(this._featureName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      offline_store_config: {
        value: featureEngineeringMaterializedFeatureOfflineStoreConfigToHclTerraform(this._offlineStoreConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FeatureEngineeringMaterializedFeatureOfflineStoreConfig",
      },
      online_store_config: {
        value: featureEngineeringMaterializedFeatureOnlineStoreConfigToHclTerraform(this._onlineStoreConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FeatureEngineeringMaterializedFeatureOnlineStoreConfig",
      },
      pipeline_schedule_state: {
        value: cdktn.stringToHclTerraform(this._pipelineScheduleState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_config: {
        value: featureEngineeringMaterializedFeatureProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FeatureEngineeringMaterializedFeatureProviderConfig",
      },
      streaming_mode: {
        value: featureEngineeringMaterializedFeatureStreamingModeToHclTerraform(this._streamingMode.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FeatureEngineeringMaterializedFeatureStreamingMode",
      },
      table_trigger: {
        value: featureEngineeringMaterializedFeatureTableTriggerToHclTerraform(this._tableTrigger.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FeatureEngineeringMaterializedFeatureTableTrigger",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
