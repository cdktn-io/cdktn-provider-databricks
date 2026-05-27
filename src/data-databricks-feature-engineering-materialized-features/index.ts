/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_materialized_features
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataDatabricksFeatureEngineeringMaterializedFeaturesConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_materialized_features#feature_name DataDatabricksFeatureEngineeringMaterializedFeatures#feature_name}
  */
  readonly featureName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_materialized_features#page_size DataDatabricksFeatureEngineeringMaterializedFeatures#page_size}
  */
  readonly pageSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_materialized_features#provider_config DataDatabricksFeatureEngineeringMaterializedFeatures#provider_config}
  */
  readonly providerConfig?: DataDatabricksFeatureEngineeringMaterializedFeaturesProviderConfig;
}
export interface DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_materialized_features#catalog_name DataDatabricksFeatureEngineeringMaterializedFeatures#catalog_name}
  */
  readonly catalogName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_materialized_features#schema_name DataDatabricksFeatureEngineeringMaterializedFeatures#schema_name}
  */
  readonly schemaName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_materialized_features#table_name_prefix DataDatabricksFeatureEngineeringMaterializedFeatures#table_name_prefix}
  */
  readonly tableNamePrefix: string;
}

export function dataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigToTerraform(struct?: DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog_name: cdktn.stringToTerraform(struct!.catalogName),
    schema_name: cdktn.stringToTerraform(struct!.schemaName),
    table_name_prefix: cdktn.stringToTerraform(struct!.tableNamePrefix),
  }
}


export function dataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigToHclTerraform(struct?: DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfig | undefined {
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

  public set internalValue(value: DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._catalogName = undefined;
      this._schemaName = undefined;
      this._tableNamePrefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._catalogName = value.catalogName;
      this._schemaName = value.schemaName;
      this._tableNamePrefix = value.tableNamePrefix;
    }
  }

  // catalog_name - computed: true, optional: false, required: true
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

  // schema_name - computed: true, optional: false, required: true
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

  // table_name_prefix - computed: true, optional: false, required: true
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
export interface DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_materialized_features#catalog_name DataDatabricksFeatureEngineeringMaterializedFeatures#catalog_name}
  */
  readonly catalogName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_materialized_features#online_store_name DataDatabricksFeatureEngineeringMaterializedFeatures#online_store_name}
  */
  readonly onlineStoreName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_materialized_features#schema_name DataDatabricksFeatureEngineeringMaterializedFeatures#schema_name}
  */
  readonly schemaName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_materialized_features#table_name_prefix DataDatabricksFeatureEngineeringMaterializedFeatures#table_name_prefix}
  */
  readonly tableNamePrefix: string;
}

export function dataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigToTerraform(struct?: DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog_name: cdktn.stringToTerraform(struct!.catalogName),
    online_store_name: cdktn.stringToTerraform(struct!.onlineStoreName),
    schema_name: cdktn.stringToTerraform(struct!.schemaName),
    table_name_prefix: cdktn.stringToTerraform(struct!.tableNamePrefix),
  }
}


export function dataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigToHclTerraform(struct?: DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfig | undefined {
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

  public set internalValue(value: DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._catalogName = undefined;
      this._onlineStoreName = undefined;
      this._schemaName = undefined;
      this._tableNamePrefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._catalogName = value.catalogName;
      this._onlineStoreName = value.onlineStoreName;
      this._schemaName = value.schemaName;
      this._tableNamePrefix = value.tableNamePrefix;
    }
  }

  // catalog_name - computed: true, optional: false, required: true
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

  // online_store_name - computed: true, optional: false, required: true
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

  // schema_name - computed: true, optional: false, required: true
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

  // table_name_prefix - computed: true, optional: false, required: true
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
export interface DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_materialized_features#workspace_id DataDatabricksFeatureEngineeringMaterializedFeatures#workspace_id}
  */
  readonly workspaceId?: string;
}

export function dataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesProviderConfigToTerraform(struct?: DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function dataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesProviderConfigToHclTerraform(struct?: DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesProviderConfig | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeatures {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_materialized_features#materialized_feature_id DataDatabricksFeatureEngineeringMaterializedFeatures#materialized_feature_id}
  */
  readonly materializedFeatureId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_materialized_features#provider_config DataDatabricksFeatureEngineeringMaterializedFeatures#provider_config}
  */
  readonly providerConfig?: DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesProviderConfig;
}

export function dataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesToTerraform(struct?: DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeatures): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    materialized_feature_id: cdktn.stringToTerraform(struct!.materializedFeatureId),
    provider_config: dataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesProviderConfigToTerraform(struct!.providerConfig),
  }
}


export function dataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesToHclTerraform(struct?: DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeatures): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    materialized_feature_id: {
      value: cdktn.stringToHclTerraform(struct!.materializedFeatureId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider_config: {
      value: dataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesProviderConfigToHclTerraform(struct!.providerConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesProviderConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeatures | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._materializedFeatureId !== undefined) {
      hasAnyValues = true;
      internalValueResult.materializedFeatureId = this._materializedFeatureId;
    }
    if (this._providerConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerConfig = this._providerConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeatures | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._materializedFeatureId = undefined;
      this._providerConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._materializedFeatureId = value.materializedFeatureId;
      this._providerConfig.internalValue = value.providerConfig;
    }
  }

  // cron_schedule - computed: true, optional: false, required: false
  public get cronSchedule() {
    return this.getStringAttribute('cron_schedule');
  }

  // feature_name - computed: true, optional: false, required: false
  public get featureName() {
    return this.getStringAttribute('feature_name');
  }

  // is_online - computed: true, optional: false, required: false
  public get isOnline() {
    return this.getBooleanAttribute('is_online');
  }

  // last_materialization_time - computed: true, optional: false, required: false
  public get lastMaterializationTime() {
    return this.getStringAttribute('last_materialization_time');
  }

  // materialized_feature_id - computed: true, optional: false, required: true
  private _materializedFeatureId?: string; 
  public get materializedFeatureId() {
    return this.getStringAttribute('materialized_feature_id');
  }
  public set materializedFeatureId(value: string) {
    this._materializedFeatureId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get materializedFeatureIdInput() {
    return this._materializedFeatureId;
  }

  // offline_store_config - computed: true, optional: false, required: false
  private _offlineStoreConfig = new DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference(this, "offline_store_config");
  public get offlineStoreConfig() {
    return this._offlineStoreConfig;
  }

  // online_store_config - computed: true, optional: false, required: false
  private _onlineStoreConfig = new DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference(this, "online_store_config");
  public get onlineStoreConfig() {
    return this._onlineStoreConfig;
  }

  // pipeline_schedule_state - computed: true, optional: false, required: false
  public get pipelineScheduleState() {
    return this.getStringAttribute('pipeline_schedule_state');
  }

  // provider_config - computed: true, optional: true, required: false
  private _providerConfig = new DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
}

export class DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeatures[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference {
    return new DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksFeatureEngineeringMaterializedFeaturesProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_materialized_features#workspace_id DataDatabricksFeatureEngineeringMaterializedFeatures#workspace_id}
  */
  readonly workspaceId?: string;
}

export function dataDatabricksFeatureEngineeringMaterializedFeaturesProviderConfigToTerraform(struct?: DataDatabricksFeatureEngineeringMaterializedFeaturesProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function dataDatabricksFeatureEngineeringMaterializedFeaturesProviderConfigToHclTerraform(struct?: DataDatabricksFeatureEngineeringMaterializedFeaturesProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class DataDatabricksFeatureEngineeringMaterializedFeaturesProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringMaterializedFeaturesProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksFeatureEngineeringMaterializedFeaturesProviderConfig | cdktn.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_materialized_features databricks_feature_engineering_materialized_features}
*/
export class DataDatabricksFeatureEngineeringMaterializedFeatures extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_feature_engineering_materialized_features";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataDatabricksFeatureEngineeringMaterializedFeatures resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksFeatureEngineeringMaterializedFeatures to import
  * @param importFromId The id of the existing DataDatabricksFeatureEngineeringMaterializedFeatures that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_materialized_features#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksFeatureEngineeringMaterializedFeatures to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_feature_engineering_materialized_features", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_materialized_features databricks_feature_engineering_materialized_features} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksFeatureEngineeringMaterializedFeaturesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksFeatureEngineeringMaterializedFeaturesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_feature_engineering_materialized_features',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.115.0',
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
    this._featureName = config.featureName;
    this._pageSize = config.pageSize;
    this._providerConfig.internalValue = config.providerConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // feature_name - computed: false, optional: true, required: false
  private _featureName?: string; 
  public get featureName() {
    return this.getStringAttribute('feature_name');
  }
  public set featureName(value: string) {
    this._featureName = value;
  }
  public resetFeatureName() {
    this._featureName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureNameInput() {
    return this._featureName;
  }

  // materialized_features - computed: true, optional: false, required: false
  private _materializedFeatures = new DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList(this, "materialized_features", false);
  public get materializedFeatures() {
    return this._materializedFeatures;
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
  private _providerConfig = new DataDatabricksFeatureEngineeringMaterializedFeaturesProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataDatabricksFeatureEngineeringMaterializedFeaturesProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      feature_name: cdktn.stringToTerraform(this._featureName),
      page_size: cdktn.numberToTerraform(this._pageSize),
      provider_config: dataDatabricksFeatureEngineeringMaterializedFeaturesProviderConfigToTerraform(this._providerConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      feature_name: {
        value: cdktn.stringToHclTerraform(this._featureName),
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
        value: dataDatabricksFeatureEngineeringMaterializedFeaturesProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataDatabricksFeatureEngineeringMaterializedFeaturesProviderConfig",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
