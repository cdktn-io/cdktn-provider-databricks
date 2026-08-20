/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/mlflow_experiment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataDatabricksMlflowExperimentConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/mlflow_experiment#artifact_location DataDatabricksMlflowExperiment#artifact_location}
  */
  readonly artifactLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/mlflow_experiment#creation_time DataDatabricksMlflowExperiment#creation_time}
  */
  readonly creationTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/mlflow_experiment#experiment_id DataDatabricksMlflowExperiment#experiment_id}
  */
  readonly experimentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/mlflow_experiment#id DataDatabricksMlflowExperiment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/mlflow_experiment#last_update_time DataDatabricksMlflowExperiment#last_update_time}
  */
  readonly lastUpdateTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/mlflow_experiment#lifecycle_stage DataDatabricksMlflowExperiment#lifecycle_stage}
  */
  readonly lifecycleStage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/mlflow_experiment#name DataDatabricksMlflowExperiment#name}
  */
  readonly name?: string;
  /**
  * provider_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/mlflow_experiment#provider_config DataDatabricksMlflowExperiment#provider_config}
  */
  readonly providerConfig?: DataDatabricksMlflowExperimentProviderConfig;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/mlflow_experiment#tags DataDatabricksMlflowExperiment#tags}
  */
  readonly tags?: DataDatabricksMlflowExperimentTags[] | cdktn.IResolvable;
  /**
  * trace_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/mlflow_experiment#trace_location DataDatabricksMlflowExperiment#trace_location}
  */
  readonly traceLocation?: DataDatabricksMlflowExperimentTraceLocation;
}
export interface DataDatabricksMlflowExperimentProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/mlflow_experiment#workspace_id DataDatabricksMlflowExperiment#workspace_id}
  */
  readonly workspaceId?: string;
}

export function dataDatabricksMlflowExperimentProviderConfigToTerraform(struct?: DataDatabricksMlflowExperimentProviderConfigOutputReference | DataDatabricksMlflowExperimentProviderConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function dataDatabricksMlflowExperimentProviderConfigToHclTerraform(struct?: DataDatabricksMlflowExperimentProviderConfigOutputReference | DataDatabricksMlflowExperimentProviderConfig): any {
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

export class DataDatabricksMlflowExperimentProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksMlflowExperimentProviderConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceId = this._workspaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksMlflowExperimentProviderConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._workspaceId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface DataDatabricksMlflowExperimentTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/mlflow_experiment#key DataDatabricksMlflowExperiment#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/mlflow_experiment#value DataDatabricksMlflowExperiment#value}
  */
  readonly value?: string;
}

export function dataDatabricksMlflowExperimentTagsToTerraform(struct?: DataDatabricksMlflowExperimentTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function dataDatabricksMlflowExperimentTagsToHclTerraform(struct?: DataDatabricksMlflowExperimentTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class DataDatabricksMlflowExperimentTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksMlflowExperimentTags | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksMlflowExperimentTags | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

export class DataDatabricksMlflowExperimentTagsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksMlflowExperimentTags[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksMlflowExperimentTagsOutputReference {
    return new DataDatabricksMlflowExperimentTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksMlflowExperimentTraceLocationUcTraceLocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/mlflow_experiment#catalog DataDatabricksMlflowExperiment#catalog}
  */
  readonly catalog: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/mlflow_experiment#effective_table_prefix DataDatabricksMlflowExperiment#effective_table_prefix}
  */
  readonly effectiveTablePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/mlflow_experiment#schema DataDatabricksMlflowExperiment#schema}
  */
  readonly schema: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/mlflow_experiment#table_prefix DataDatabricksMlflowExperiment#table_prefix}
  */
  readonly tablePrefix?: string;
}

export function dataDatabricksMlflowExperimentTraceLocationUcTraceLocationToTerraform(struct?: DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference | DataDatabricksMlflowExperimentTraceLocationUcTraceLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    catalog: cdktn.stringToTerraform(struct!.catalog),
    effective_table_prefix: cdktn.stringToTerraform(struct!.effectiveTablePrefix),
    schema: cdktn.stringToTerraform(struct!.schema),
    table_prefix: cdktn.stringToTerraform(struct!.tablePrefix),
  }
}


export function dataDatabricksMlflowExperimentTraceLocationUcTraceLocationToHclTerraform(struct?: DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference | DataDatabricksMlflowExperimentTraceLocationUcTraceLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    catalog: {
      value: cdktn.stringToHclTerraform(struct!.catalog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    effective_table_prefix: {
      value: cdktn.stringToHclTerraform(struct!.effectiveTablePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema: {
      value: cdktn.stringToHclTerraform(struct!.schema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_prefix: {
      value: cdktn.stringToHclTerraform(struct!.tablePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksMlflowExperimentTraceLocationUcTraceLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalog !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalog = this._catalog;
    }
    if (this._effectiveTablePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.effectiveTablePrefix = this._effectiveTablePrefix;
    }
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._tablePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.tablePrefix = this._tablePrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksMlflowExperimentTraceLocationUcTraceLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._catalog = undefined;
      this._effectiveTablePrefix = undefined;
      this._schema = undefined;
      this._tablePrefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._catalog = value.catalog;
      this._effectiveTablePrefix = value.effectiveTablePrefix;
      this._schema = value.schema;
      this._tablePrefix = value.tablePrefix;
    }
  }

  // catalog - computed: false, optional: false, required: true
  private _catalog?: string; 
  public get catalog() {
    return this.getStringAttribute('catalog');
  }
  public set catalog(value: string) {
    this._catalog = value;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog;
  }

  // effective_table_prefix - computed: false, optional: true, required: false
  private _effectiveTablePrefix?: string; 
  public get effectiveTablePrefix() {
    return this.getStringAttribute('effective_table_prefix');
  }
  public set effectiveTablePrefix(value: string) {
    this._effectiveTablePrefix = value;
  }
  public resetEffectiveTablePrefix() {
    this._effectiveTablePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectiveTablePrefixInput() {
    return this._effectiveTablePrefix;
  }

  // schema - computed: false, optional: false, required: true
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // table_prefix - computed: false, optional: true, required: false
  private _tablePrefix?: string; 
  public get tablePrefix() {
    return this.getStringAttribute('table_prefix');
  }
  public set tablePrefix(value: string) {
    this._tablePrefix = value;
  }
  public resetTablePrefix() {
    this._tablePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tablePrefixInput() {
    return this._tablePrefix;
  }
}
export interface DataDatabricksMlflowExperimentTraceLocation {
  /**
  * uc_trace_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/mlflow_experiment#uc_trace_location DataDatabricksMlflowExperiment#uc_trace_location}
  */
  readonly ucTraceLocation?: DataDatabricksMlflowExperimentTraceLocationUcTraceLocation;
}

export function dataDatabricksMlflowExperimentTraceLocationToTerraform(struct?: DataDatabricksMlflowExperimentTraceLocationOutputReference | DataDatabricksMlflowExperimentTraceLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    uc_trace_location: dataDatabricksMlflowExperimentTraceLocationUcTraceLocationToTerraform(struct!.ucTraceLocation),
  }
}


export function dataDatabricksMlflowExperimentTraceLocationToHclTerraform(struct?: DataDatabricksMlflowExperimentTraceLocationOutputReference | DataDatabricksMlflowExperimentTraceLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    uc_trace_location: {
      value: dataDatabricksMlflowExperimentTraceLocationUcTraceLocationToHclTerraform(struct!.ucTraceLocation),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksMlflowExperimentTraceLocationUcTraceLocationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksMlflowExperimentTraceLocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksMlflowExperimentTraceLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ucTraceLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ucTraceLocation = this._ucTraceLocation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksMlflowExperimentTraceLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ucTraceLocation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ucTraceLocation.internalValue = value.ucTraceLocation;
    }
  }

  // uc_trace_location - computed: false, optional: true, required: false
  private _ucTraceLocation = new DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference(this, "uc_trace_location");
  public get ucTraceLocation() {
    return this._ucTraceLocation;
  }
  public putUcTraceLocation(value: DataDatabricksMlflowExperimentTraceLocationUcTraceLocation) {
    this._ucTraceLocation.internalValue = value;
  }
  public resetUcTraceLocation() {
    this._ucTraceLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ucTraceLocationInput() {
    return this._ucTraceLocation.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/mlflow_experiment databricks_mlflow_experiment}
*/
export class DataDatabricksMlflowExperiment extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_mlflow_experiment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataDatabricksMlflowExperiment resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksMlflowExperiment to import
  * @param importFromId The id of the existing DataDatabricksMlflowExperiment that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/mlflow_experiment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksMlflowExperiment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_mlflow_experiment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/mlflow_experiment databricks_mlflow_experiment} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksMlflowExperimentConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksMlflowExperimentConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_mlflow_experiment',
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
    this._artifactLocation = config.artifactLocation;
    this._creationTime = config.creationTime;
    this._experimentId = config.experimentId;
    this._id = config.id;
    this._lastUpdateTime = config.lastUpdateTime;
    this._lifecycleStage = config.lifecycleStage;
    this._name = config.name;
    this._providerConfig.internalValue = config.providerConfig;
    this._tags.internalValue = config.tags;
    this._traceLocation.internalValue = config.traceLocation;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // artifact_location - computed: true, optional: true, required: false
  private _artifactLocation?: string; 
  public get artifactLocation() {
    return this.getStringAttribute('artifact_location');
  }
  public set artifactLocation(value: string) {
    this._artifactLocation = value;
  }
  public resetArtifactLocation() {
    this._artifactLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactLocationInput() {
    return this._artifactLocation;
  }

  // creation_time - computed: true, optional: true, required: false
  private _creationTime?: number; 
  public get creationTime() {
    return this.getNumberAttribute('creation_time');
  }
  public set creationTime(value: number) {
    this._creationTime = value;
  }
  public resetCreationTime() {
    this._creationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creationTimeInput() {
    return this._creationTime;
  }

  // experiment_id - computed: true, optional: true, required: false
  private _experimentId?: string; 
  public get experimentId() {
    return this.getStringAttribute('experiment_id');
  }
  public set experimentId(value: string) {
    this._experimentId = value;
  }
  public resetExperimentId() {
    this._experimentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get experimentIdInput() {
    return this._experimentId;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // last_update_time - computed: true, optional: true, required: false
  private _lastUpdateTime?: number; 
  public get lastUpdateTime() {
    return this.getNumberAttribute('last_update_time');
  }
  public set lastUpdateTime(value: number) {
    this._lastUpdateTime = value;
  }
  public resetLastUpdateTime() {
    this._lastUpdateTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdateTimeInput() {
    return this._lastUpdateTime;
  }

  // lifecycle_stage - computed: true, optional: true, required: false
  private _lifecycleStage?: string; 
  public get lifecycleStage() {
    return this.getStringAttribute('lifecycle_stage');
  }
  public set lifecycleStage(value: string) {
    this._lifecycleStage = value;
  }
  public resetLifecycleStage() {
    this._lifecycleStage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleStageInput() {
    return this._lifecycleStage;
  }

  // name - computed: true, optional: true, required: false
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

  // provider_config - computed: false, optional: true, required: false
  private _providerConfig = new DataDatabricksMlflowExperimentProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataDatabricksMlflowExperimentProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataDatabricksMlflowExperimentTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataDatabricksMlflowExperimentTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // trace_location - computed: false, optional: true, required: false
  private _traceLocation = new DataDatabricksMlflowExperimentTraceLocationOutputReference(this, "trace_location");
  public get traceLocation() {
    return this._traceLocation;
  }
  public putTraceLocation(value: DataDatabricksMlflowExperimentTraceLocation) {
    this._traceLocation.internalValue = value;
  }
  public resetTraceLocation() {
    this._traceLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traceLocationInput() {
    return this._traceLocation.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      artifact_location: cdktn.stringToTerraform(this._artifactLocation),
      creation_time: cdktn.numberToTerraform(this._creationTime),
      experiment_id: cdktn.stringToTerraform(this._experimentId),
      id: cdktn.stringToTerraform(this._id),
      last_update_time: cdktn.numberToTerraform(this._lastUpdateTime),
      lifecycle_stage: cdktn.stringToTerraform(this._lifecycleStage),
      name: cdktn.stringToTerraform(this._name),
      provider_config: dataDatabricksMlflowExperimentProviderConfigToTerraform(this._providerConfig.internalValue),
      tags: cdktn.listMapper(dataDatabricksMlflowExperimentTagsToTerraform, true)(this._tags.internalValue),
      trace_location: dataDatabricksMlflowExperimentTraceLocationToTerraform(this._traceLocation.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      artifact_location: {
        value: cdktn.stringToHclTerraform(this._artifactLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      creation_time: {
        value: cdktn.numberToHclTerraform(this._creationTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      experiment_id: {
        value: cdktn.stringToHclTerraform(this._experimentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_update_time: {
        value: cdktn.numberToHclTerraform(this._lastUpdateTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      lifecycle_stage: {
        value: cdktn.stringToHclTerraform(this._lifecycleStage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_config: {
        value: dataDatabricksMlflowExperimentProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataDatabricksMlflowExperimentProviderConfigList",
      },
      tags: {
        value: cdktn.listMapperHcl(dataDatabricksMlflowExperimentTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataDatabricksMlflowExperimentTagsList",
      },
      trace_location: {
        value: dataDatabricksMlflowExperimentTraceLocationToHclTerraform(this._traceLocation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataDatabricksMlflowExperimentTraceLocationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
