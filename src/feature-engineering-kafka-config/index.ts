/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/resources/feature_engineering_kafka_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface FeatureEngineeringKafkaConfigConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/resources/feature_engineering_kafka_config#auth_config FeatureEngineeringKafkaConfig#auth_config}
  */
  readonly authConfig: FeatureEngineeringKafkaConfigAuthConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/resources/feature_engineering_kafka_config#backfill_source FeatureEngineeringKafkaConfig#backfill_source}
  */
  readonly backfillSource?: FeatureEngineeringKafkaConfigBackfillSource;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/resources/feature_engineering_kafka_config#bootstrap_servers FeatureEngineeringKafkaConfig#bootstrap_servers}
  */
  readonly bootstrapServers: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/resources/feature_engineering_kafka_config#extra_options FeatureEngineeringKafkaConfig#extra_options}
  */
  readonly extraOptions?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/resources/feature_engineering_kafka_config#key_schema FeatureEngineeringKafkaConfig#key_schema}
  */
  readonly keySchema?: FeatureEngineeringKafkaConfigKeySchema;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/resources/feature_engineering_kafka_config#provider_config FeatureEngineeringKafkaConfig#provider_config}
  */
  readonly providerConfig?: FeatureEngineeringKafkaConfigProviderConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/resources/feature_engineering_kafka_config#subscription_mode FeatureEngineeringKafkaConfig#subscription_mode}
  */
  readonly subscriptionMode: FeatureEngineeringKafkaConfigSubscriptionMode;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/resources/feature_engineering_kafka_config#value_schema FeatureEngineeringKafkaConfig#value_schema}
  */
  readonly valueSchema?: FeatureEngineeringKafkaConfigValueSchema;
}
export interface FeatureEngineeringKafkaConfigAuthConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/resources/feature_engineering_kafka_config#uc_service_credential_name FeatureEngineeringKafkaConfig#uc_service_credential_name}
  */
  readonly ucServiceCredentialName?: string;
}

export function featureEngineeringKafkaConfigAuthConfigToTerraform(struct?: FeatureEngineeringKafkaConfigAuthConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uc_service_credential_name: cdktn.stringToTerraform(struct!.ucServiceCredentialName),
  }
}


export function featureEngineeringKafkaConfigAuthConfigToHclTerraform(struct?: FeatureEngineeringKafkaConfigAuthConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uc_service_credential_name: {
      value: cdktn.stringToHclTerraform(struct!.ucServiceCredentialName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FeatureEngineeringKafkaConfigAuthConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FeatureEngineeringKafkaConfigAuthConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ucServiceCredentialName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ucServiceCredentialName = this._ucServiceCredentialName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FeatureEngineeringKafkaConfigAuthConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ucServiceCredentialName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ucServiceCredentialName = value.ucServiceCredentialName;
    }
  }

  // uc_service_credential_name - computed: false, optional: true, required: false
  private _ucServiceCredentialName?: string; 
  public get ucServiceCredentialName() {
    return this.getStringAttribute('uc_service_credential_name');
  }
  public set ucServiceCredentialName(value: string) {
    this._ucServiceCredentialName = value;
  }
  public resetUcServiceCredentialName() {
    this._ucServiceCredentialName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ucServiceCredentialNameInput() {
    return this._ucServiceCredentialName;
  }
}
export interface FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/resources/feature_engineering_kafka_config#dataframe_schema FeatureEngineeringKafkaConfig#dataframe_schema}
  */
  readonly dataframeSchema?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/resources/feature_engineering_kafka_config#entity_columns FeatureEngineeringKafkaConfig#entity_columns}
  */
  readonly entityColumns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/resources/feature_engineering_kafka_config#filter_condition FeatureEngineeringKafkaConfig#filter_condition}
  */
  readonly filterCondition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/resources/feature_engineering_kafka_config#full_name FeatureEngineeringKafkaConfig#full_name}
  */
  readonly fullName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/resources/feature_engineering_kafka_config#timeseries_column FeatureEngineeringKafkaConfig#timeseries_column}
  */
  readonly timeseriesColumn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/resources/feature_engineering_kafka_config#transformation_sql FeatureEngineeringKafkaConfig#transformation_sql}
  */
  readonly transformationSql?: string;
}

export function featureEngineeringKafkaConfigBackfillSourceDeltaTableSourceToTerraform(struct?: FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataframe_schema: cdktn.stringToTerraform(struct!.dataframeSchema),
    entity_columns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.entityColumns),
    filter_condition: cdktn.stringToTerraform(struct!.filterCondition),
    full_name: cdktn.stringToTerraform(struct!.fullName),
    timeseries_column: cdktn.stringToTerraform(struct!.timeseriesColumn),
    transformation_sql: cdktn.stringToTerraform(struct!.transformationSql),
  }
}


export function featureEngineeringKafkaConfigBackfillSourceDeltaTableSourceToHclTerraform(struct?: FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dataframe_schema: {
      value: cdktn.stringToHclTerraform(struct!.dataframeSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entity_columns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.entityColumns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    filter_condition: {
      value: cdktn.stringToHclTerraform(struct!.filterCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    full_name: {
      value: cdktn.stringToHclTerraform(struct!.fullName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeseries_column: {
      value: cdktn.stringToHclTerraform(struct!.timeseriesColumn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transformation_sql: {
      value: cdktn.stringToHclTerraform(struct!.transformationSql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataframeSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataframeSchema = this._dataframeSchema;
    }
    if (this._entityColumns !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityColumns = this._entityColumns;
    }
    if (this._filterCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterCondition = this._filterCondition;
    }
    if (this._fullName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullName = this._fullName;
    }
    if (this._timeseriesColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeseriesColumn = this._timeseriesColumn;
    }
    if (this._transformationSql !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformationSql = this._transformationSql;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataframeSchema = undefined;
      this._entityColumns = undefined;
      this._filterCondition = undefined;
      this._fullName = undefined;
      this._timeseriesColumn = undefined;
      this._transformationSql = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataframeSchema = value.dataframeSchema;
      this._entityColumns = value.entityColumns;
      this._filterCondition = value.filterCondition;
      this._fullName = value.fullName;
      this._timeseriesColumn = value.timeseriesColumn;
      this._transformationSql = value.transformationSql;
    }
  }

  // dataframe_schema - computed: false, optional: true, required: false
  private _dataframeSchema?: string; 
  public get dataframeSchema() {
    return this.getStringAttribute('dataframe_schema');
  }
  public set dataframeSchema(value: string) {
    this._dataframeSchema = value;
  }
  public resetDataframeSchema() {
    this._dataframeSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataframeSchemaInput() {
    return this._dataframeSchema;
  }

  // entity_columns - computed: false, optional: true, required: false
  private _entityColumns?: string[]; 
  public get entityColumns() {
    return this.getListAttribute('entity_columns');
  }
  public set entityColumns(value: string[]) {
    this._entityColumns = value;
  }
  public resetEntityColumns() {
    this._entityColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityColumnsInput() {
    return this._entityColumns;
  }

  // filter_condition - computed: false, optional: true, required: false
  private _filterCondition?: string; 
  public get filterCondition() {
    return this.getStringAttribute('filter_condition');
  }
  public set filterCondition(value: string) {
    this._filterCondition = value;
  }
  public resetFilterCondition() {
    this._filterCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterConditionInput() {
    return this._filterCondition;
  }

  // full_name - computed: false, optional: false, required: true
  private _fullName?: string; 
  public get fullName() {
    return this.getStringAttribute('full_name');
  }
  public set fullName(value: string) {
    this._fullName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fullNameInput() {
    return this._fullName;
  }

  // timeseries_column - computed: false, optional: true, required: false
  private _timeseriesColumn?: string; 
  public get timeseriesColumn() {
    return this.getStringAttribute('timeseries_column');
  }
  public set timeseriesColumn(value: string) {
    this._timeseriesColumn = value;
  }
  public resetTimeseriesColumn() {
    this._timeseriesColumn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeseriesColumnInput() {
    return this._timeseriesColumn;
  }

  // transformation_sql - computed: false, optional: true, required: false
  private _transformationSql?: string; 
  public get transformationSql() {
    return this.getStringAttribute('transformation_sql');
  }
  public set transformationSql(value: string) {
    this._transformationSql = value;
  }
  public resetTransformationSql() {
    this._transformationSql = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformationSqlInput() {
    return this._transformationSql;
  }
}
export interface FeatureEngineeringKafkaConfigBackfillSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/resources/feature_engineering_kafka_config#delta_table_source FeatureEngineeringKafkaConfig#delta_table_source}
  */
  readonly deltaTableSource?: FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource;
}

export function featureEngineeringKafkaConfigBackfillSourceToTerraform(struct?: FeatureEngineeringKafkaConfigBackfillSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delta_table_source: featureEngineeringKafkaConfigBackfillSourceDeltaTableSourceToTerraform(struct!.deltaTableSource),
  }
}


export function featureEngineeringKafkaConfigBackfillSourceToHclTerraform(struct?: FeatureEngineeringKafkaConfigBackfillSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delta_table_source: {
      value: featureEngineeringKafkaConfigBackfillSourceDeltaTableSourceToHclTerraform(struct!.deltaTableSource),
      isBlock: true,
      type: "struct",
      storageClassType: "FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FeatureEngineeringKafkaConfigBackfillSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FeatureEngineeringKafkaConfigBackfillSource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deltaTableSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deltaTableSource = this._deltaTableSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FeatureEngineeringKafkaConfigBackfillSource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deltaTableSource.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deltaTableSource.internalValue = value.deltaTableSource;
    }
  }

  // delta_table_source - computed: false, optional: true, required: false
  private _deltaTableSource = new FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference(this, "delta_table_source");
  public get deltaTableSource() {
    return this._deltaTableSource;
  }
  public putDeltaTableSource(value: FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource) {
    this._deltaTableSource.internalValue = value;
  }
  public resetDeltaTableSource() {
    this._deltaTableSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deltaTableSourceInput() {
    return this._deltaTableSource.internalValue;
  }
}
export interface FeatureEngineeringKafkaConfigKeySchema {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/resources/feature_engineering_kafka_config#json_schema FeatureEngineeringKafkaConfig#json_schema}
  */
  readonly jsonSchema?: string;
}

export function featureEngineeringKafkaConfigKeySchemaToTerraform(struct?: FeatureEngineeringKafkaConfigKeySchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    json_schema: cdktn.stringToTerraform(struct!.jsonSchema),
  }
}


export function featureEngineeringKafkaConfigKeySchemaToHclTerraform(struct?: FeatureEngineeringKafkaConfigKeySchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    json_schema: {
      value: cdktn.stringToHclTerraform(struct!.jsonSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FeatureEngineeringKafkaConfigKeySchemaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FeatureEngineeringKafkaConfigKeySchema | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jsonSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonSchema = this._jsonSchema;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FeatureEngineeringKafkaConfigKeySchema | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jsonSchema = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jsonSchema = value.jsonSchema;
    }
  }

  // json_schema - computed: false, optional: true, required: false
  private _jsonSchema?: string; 
  public get jsonSchema() {
    return this.getStringAttribute('json_schema');
  }
  public set jsonSchema(value: string) {
    this._jsonSchema = value;
  }
  public resetJsonSchema() {
    this._jsonSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonSchemaInput() {
    return this._jsonSchema;
  }
}
export interface FeatureEngineeringKafkaConfigProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/resources/feature_engineering_kafka_config#workspace_id FeatureEngineeringKafkaConfig#workspace_id}
  */
  readonly workspaceId: string;
}

export function featureEngineeringKafkaConfigProviderConfigToTerraform(struct?: FeatureEngineeringKafkaConfigProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function featureEngineeringKafkaConfigProviderConfigToHclTerraform(struct?: FeatureEngineeringKafkaConfigProviderConfig | cdktn.IResolvable): any {
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

export class FeatureEngineeringKafkaConfigProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FeatureEngineeringKafkaConfigProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: FeatureEngineeringKafkaConfigProviderConfig | cdktn.IResolvable | undefined) {
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

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }
}
export interface FeatureEngineeringKafkaConfigSubscriptionMode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/resources/feature_engineering_kafka_config#assign FeatureEngineeringKafkaConfig#assign}
  */
  readonly assign?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/resources/feature_engineering_kafka_config#subscribe FeatureEngineeringKafkaConfig#subscribe}
  */
  readonly subscribe?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/resources/feature_engineering_kafka_config#subscribe_pattern FeatureEngineeringKafkaConfig#subscribe_pattern}
  */
  readonly subscribePattern?: string;
}

export function featureEngineeringKafkaConfigSubscriptionModeToTerraform(struct?: FeatureEngineeringKafkaConfigSubscriptionMode | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assign: cdktn.stringToTerraform(struct!.assign),
    subscribe: cdktn.stringToTerraform(struct!.subscribe),
    subscribe_pattern: cdktn.stringToTerraform(struct!.subscribePattern),
  }
}


export function featureEngineeringKafkaConfigSubscriptionModeToHclTerraform(struct?: FeatureEngineeringKafkaConfigSubscriptionMode | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assign: {
      value: cdktn.stringToHclTerraform(struct!.assign),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subscribe: {
      value: cdktn.stringToHclTerraform(struct!.subscribe),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subscribe_pattern: {
      value: cdktn.stringToHclTerraform(struct!.subscribePattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FeatureEngineeringKafkaConfigSubscriptionModeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FeatureEngineeringKafkaConfigSubscriptionMode | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assign !== undefined) {
      hasAnyValues = true;
      internalValueResult.assign = this._assign;
    }
    if (this._subscribe !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscribe = this._subscribe;
    }
    if (this._subscribePattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscribePattern = this._subscribePattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FeatureEngineeringKafkaConfigSubscriptionMode | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assign = undefined;
      this._subscribe = undefined;
      this._subscribePattern = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assign = value.assign;
      this._subscribe = value.subscribe;
      this._subscribePattern = value.subscribePattern;
    }
  }

  // assign - computed: false, optional: true, required: false
  private _assign?: string; 
  public get assign() {
    return this.getStringAttribute('assign');
  }
  public set assign(value: string) {
    this._assign = value;
  }
  public resetAssign() {
    this._assign = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignInput() {
    return this._assign;
  }

  // subscribe - computed: false, optional: true, required: false
  private _subscribe?: string; 
  public get subscribe() {
    return this.getStringAttribute('subscribe');
  }
  public set subscribe(value: string) {
    this._subscribe = value;
  }
  public resetSubscribe() {
    this._subscribe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscribeInput() {
    return this._subscribe;
  }

  // subscribe_pattern - computed: false, optional: true, required: false
  private _subscribePattern?: string; 
  public get subscribePattern() {
    return this.getStringAttribute('subscribe_pattern');
  }
  public set subscribePattern(value: string) {
    this._subscribePattern = value;
  }
  public resetSubscribePattern() {
    this._subscribePattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscribePatternInput() {
    return this._subscribePattern;
  }
}
export interface FeatureEngineeringKafkaConfigValueSchema {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/resources/feature_engineering_kafka_config#json_schema FeatureEngineeringKafkaConfig#json_schema}
  */
  readonly jsonSchema?: string;
}

export function featureEngineeringKafkaConfigValueSchemaToTerraform(struct?: FeatureEngineeringKafkaConfigValueSchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    json_schema: cdktn.stringToTerraform(struct!.jsonSchema),
  }
}


export function featureEngineeringKafkaConfigValueSchemaToHclTerraform(struct?: FeatureEngineeringKafkaConfigValueSchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    json_schema: {
      value: cdktn.stringToHclTerraform(struct!.jsonSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FeatureEngineeringKafkaConfigValueSchemaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FeatureEngineeringKafkaConfigValueSchema | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jsonSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonSchema = this._jsonSchema;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FeatureEngineeringKafkaConfigValueSchema | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jsonSchema = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jsonSchema = value.jsonSchema;
    }
  }

  // json_schema - computed: false, optional: true, required: false
  private _jsonSchema?: string; 
  public get jsonSchema() {
    return this.getStringAttribute('json_schema');
  }
  public set jsonSchema(value: string) {
    this._jsonSchema = value;
  }
  public resetJsonSchema() {
    this._jsonSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonSchemaInput() {
    return this._jsonSchema;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/resources/feature_engineering_kafka_config databricks_feature_engineering_kafka_config}
*/
export class FeatureEngineeringKafkaConfig extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_feature_engineering_kafka_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a FeatureEngineeringKafkaConfig resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FeatureEngineeringKafkaConfig to import
  * @param importFromId The id of the existing FeatureEngineeringKafkaConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/resources/feature_engineering_kafka_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FeatureEngineeringKafkaConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_feature_engineering_kafka_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/resources/feature_engineering_kafka_config databricks_feature_engineering_kafka_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FeatureEngineeringKafkaConfigConfig
  */
  public constructor(scope: Construct, id: string, config: FeatureEngineeringKafkaConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_feature_engineering_kafka_config',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.112.0',
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
    this._authConfig.internalValue = config.authConfig;
    this._backfillSource.internalValue = config.backfillSource;
    this._bootstrapServers = config.bootstrapServers;
    this._extraOptions = config.extraOptions;
    this._keySchema.internalValue = config.keySchema;
    this._providerConfig.internalValue = config.providerConfig;
    this._subscriptionMode.internalValue = config.subscriptionMode;
    this._valueSchema.internalValue = config.valueSchema;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_config - computed: false, optional: false, required: true
  private _authConfig = new FeatureEngineeringKafkaConfigAuthConfigOutputReference(this, "auth_config");
  public get authConfig() {
    return this._authConfig;
  }
  public putAuthConfig(value: FeatureEngineeringKafkaConfigAuthConfig) {
    this._authConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authConfigInput() {
    return this._authConfig.internalValue;
  }

  // backfill_source - computed: false, optional: true, required: false
  private _backfillSource = new FeatureEngineeringKafkaConfigBackfillSourceOutputReference(this, "backfill_source");
  public get backfillSource() {
    return this._backfillSource;
  }
  public putBackfillSource(value: FeatureEngineeringKafkaConfigBackfillSource) {
    this._backfillSource.internalValue = value;
  }
  public resetBackfillSource() {
    this._backfillSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backfillSourceInput() {
    return this._backfillSource.internalValue;
  }

  // bootstrap_servers - computed: false, optional: false, required: true
  private _bootstrapServers?: string; 
  public get bootstrapServers() {
    return this.getStringAttribute('bootstrap_servers');
  }
  public set bootstrapServers(value: string) {
    this._bootstrapServers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapServersInput() {
    return this._bootstrapServers;
  }

  // extra_options - computed: false, optional: true, required: false
  private _extraOptions?: { [key: string]: string }; 
  public get extraOptions() {
    return this.getStringMapAttribute('extra_options');
  }
  public set extraOptions(value: { [key: string]: string }) {
    this._extraOptions = value;
  }
  public resetExtraOptions() {
    this._extraOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraOptionsInput() {
    return this._extraOptions;
  }

  // key_schema - computed: false, optional: true, required: false
  private _keySchema = new FeatureEngineeringKafkaConfigKeySchemaOutputReference(this, "key_schema");
  public get keySchema() {
    return this._keySchema;
  }
  public putKeySchema(value: FeatureEngineeringKafkaConfigKeySchema) {
    this._keySchema.internalValue = value;
  }
  public resetKeySchema() {
    this._keySchema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keySchemaInput() {
    return this._keySchema.internalValue;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // provider_config - computed: false, optional: true, required: false
  private _providerConfig = new FeatureEngineeringKafkaConfigProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: FeatureEngineeringKafkaConfigProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // subscription_mode - computed: false, optional: false, required: true
  private _subscriptionMode = new FeatureEngineeringKafkaConfigSubscriptionModeOutputReference(this, "subscription_mode");
  public get subscriptionMode() {
    return this._subscriptionMode;
  }
  public putSubscriptionMode(value: FeatureEngineeringKafkaConfigSubscriptionMode) {
    this._subscriptionMode.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionModeInput() {
    return this._subscriptionMode.internalValue;
  }

  // value_schema - computed: false, optional: true, required: false
  private _valueSchema = new FeatureEngineeringKafkaConfigValueSchemaOutputReference(this, "value_schema");
  public get valueSchema() {
    return this._valueSchema;
  }
  public putValueSchema(value: FeatureEngineeringKafkaConfigValueSchema) {
    this._valueSchema.internalValue = value;
  }
  public resetValueSchema() {
    this._valueSchema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueSchemaInput() {
    return this._valueSchema.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_config: featureEngineeringKafkaConfigAuthConfigToTerraform(this._authConfig.internalValue),
      backfill_source: featureEngineeringKafkaConfigBackfillSourceToTerraform(this._backfillSource.internalValue),
      bootstrap_servers: cdktn.stringToTerraform(this._bootstrapServers),
      extra_options: cdktn.hashMapper(cdktn.stringToTerraform)(this._extraOptions),
      key_schema: featureEngineeringKafkaConfigKeySchemaToTerraform(this._keySchema.internalValue),
      provider_config: featureEngineeringKafkaConfigProviderConfigToTerraform(this._providerConfig.internalValue),
      subscription_mode: featureEngineeringKafkaConfigSubscriptionModeToTerraform(this._subscriptionMode.internalValue),
      value_schema: featureEngineeringKafkaConfigValueSchemaToTerraform(this._valueSchema.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_config: {
        value: featureEngineeringKafkaConfigAuthConfigToHclTerraform(this._authConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FeatureEngineeringKafkaConfigAuthConfig",
      },
      backfill_source: {
        value: featureEngineeringKafkaConfigBackfillSourceToHclTerraform(this._backfillSource.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FeatureEngineeringKafkaConfigBackfillSource",
      },
      bootstrap_servers: {
        value: cdktn.stringToHclTerraform(this._bootstrapServers),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extra_options: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._extraOptions),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      key_schema: {
        value: featureEngineeringKafkaConfigKeySchemaToHclTerraform(this._keySchema.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FeatureEngineeringKafkaConfigKeySchema",
      },
      provider_config: {
        value: featureEngineeringKafkaConfigProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FeatureEngineeringKafkaConfigProviderConfig",
      },
      subscription_mode: {
        value: featureEngineeringKafkaConfigSubscriptionModeToHclTerraform(this._subscriptionMode.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FeatureEngineeringKafkaConfigSubscriptionMode",
      },
      value_schema: {
        value: featureEngineeringKafkaConfigValueSchemaToHclTerraform(this._valueSchema.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FeatureEngineeringKafkaConfigValueSchema",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
