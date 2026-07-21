/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/ai_search_index
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataDatabricksAiSearchIndexConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/ai_search_index#name DataDatabricksAiSearchIndex#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/ai_search_index#provider_config DataDatabricksAiSearchIndex#provider_config}
  */
  readonly providerConfig?: DataDatabricksAiSearchIndexProviderConfig;
}
export interface DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/ai_search_index#embedding_model_endpoint DataDatabricksAiSearchIndex#embedding_model_endpoint}
  */
  readonly embeddingModelEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/ai_search_index#model_endpoint_name_for_query DataDatabricksAiSearchIndex#model_endpoint_name_for_query}
  */
  readonly modelEndpointNameForQuery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/ai_search_index#name DataDatabricksAiSearchIndex#name}
  */
  readonly name?: string;
}

export function dataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsToTerraform(struct?: DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    embedding_model_endpoint: cdktn.stringToTerraform(struct!.embeddingModelEndpoint),
    model_endpoint_name_for_query: cdktn.stringToTerraform(struct!.modelEndpointNameForQuery),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function dataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsToHclTerraform(struct?: DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    embedding_model_endpoint: {
      value: cdktn.stringToHclTerraform(struct!.embeddingModelEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_endpoint_name_for_query: {
      value: cdktn.stringToHclTerraform(struct!.modelEndpointNameForQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._embeddingModelEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.embeddingModelEndpoint = this._embeddingModelEndpoint;
    }
    if (this._modelEndpointNameForQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelEndpointNameForQuery = this._modelEndpointNameForQuery;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._embeddingModelEndpoint = undefined;
      this._modelEndpointNameForQuery = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._embeddingModelEndpoint = value.embeddingModelEndpoint;
      this._modelEndpointNameForQuery = value.modelEndpointNameForQuery;
      this._name = value.name;
    }
  }

  // embedding_model_endpoint - computed: true, optional: true, required: false
  private _embeddingModelEndpoint?: string; 
  public get embeddingModelEndpoint() {
    return this.getStringAttribute('embedding_model_endpoint');
  }
  public set embeddingModelEndpoint(value: string) {
    this._embeddingModelEndpoint = value;
  }
  public resetEmbeddingModelEndpoint() {
    this._embeddingModelEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get embeddingModelEndpointInput() {
    return this._embeddingModelEndpoint;
  }

  // model_endpoint_name_for_query - computed: true, optional: true, required: false
  private _modelEndpointNameForQuery?: string; 
  public get modelEndpointNameForQuery() {
    return this.getStringAttribute('model_endpoint_name_for_query');
  }
  public set modelEndpointNameForQuery(value: string) {
    this._modelEndpointNameForQuery = value;
  }
  public resetModelEndpointNameForQuery() {
    this._modelEndpointNameForQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelEndpointNameForQueryInput() {
    return this._modelEndpointNameForQuery;
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
}

export class DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference {
    return new DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/ai_search_index#embedding_dimension DataDatabricksAiSearchIndex#embedding_dimension}
  */
  readonly embeddingDimension?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/ai_search_index#name DataDatabricksAiSearchIndex#name}
  */
  readonly name?: string;
}

export function dataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsToTerraform(struct?: DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    embedding_dimension: cdktn.numberToTerraform(struct!.embeddingDimension),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function dataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsToHclTerraform(struct?: DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    embedding_dimension: {
      value: cdktn.numberToHclTerraform(struct!.embeddingDimension),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._embeddingDimension !== undefined) {
      hasAnyValues = true;
      internalValueResult.embeddingDimension = this._embeddingDimension;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._embeddingDimension = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._embeddingDimension = value.embeddingDimension;
      this._name = value.name;
    }
  }

  // embedding_dimension - computed: true, optional: true, required: false
  private _embeddingDimension?: number; 
  public get embeddingDimension() {
    return this.getNumberAttribute('embedding_dimension');
  }
  public set embeddingDimension(value: number) {
    this._embeddingDimension = value;
  }
  public resetEmbeddingDimension() {
    this._embeddingDimension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get embeddingDimensionInput() {
    return this._embeddingDimension;
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
}

export class DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference {
    return new DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksAiSearchIndexDeltaSyncIndexSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/ai_search_index#columns_to_sync DataDatabricksAiSearchIndex#columns_to_sync}
  */
  readonly columnsToSync?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/ai_search_index#embedding_source_columns DataDatabricksAiSearchIndex#embedding_source_columns}
  */
  readonly embeddingSourceColumns?: DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/ai_search_index#embedding_vector_columns DataDatabricksAiSearchIndex#embedding_vector_columns}
  */
  readonly embeddingVectorColumns?: DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/ai_search_index#embedding_writeback_table DataDatabricksAiSearchIndex#embedding_writeback_table}
  */
  readonly embeddingWritebackTable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/ai_search_index#pipeline_type DataDatabricksAiSearchIndex#pipeline_type}
  */
  readonly pipelineType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/ai_search_index#source_table DataDatabricksAiSearchIndex#source_table}
  */
  readonly sourceTable?: string;
}

export function dataDatabricksAiSearchIndexDeltaSyncIndexSpecToTerraform(struct?: DataDatabricksAiSearchIndexDeltaSyncIndexSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    columns_to_sync: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.columnsToSync),
    embedding_source_columns: cdktn.listMapper(dataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsToTerraform, false)(struct!.embeddingSourceColumns),
    embedding_vector_columns: cdktn.listMapper(dataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsToTerraform, false)(struct!.embeddingVectorColumns),
    embedding_writeback_table: cdktn.stringToTerraform(struct!.embeddingWritebackTable),
    pipeline_type: cdktn.stringToTerraform(struct!.pipelineType),
    source_table: cdktn.stringToTerraform(struct!.sourceTable),
  }
}


export function dataDatabricksAiSearchIndexDeltaSyncIndexSpecToHclTerraform(struct?: DataDatabricksAiSearchIndexDeltaSyncIndexSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    columns_to_sync: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.columnsToSync),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    embedding_source_columns: {
      value: cdktn.listMapperHcl(dataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsToHclTerraform, false)(struct!.embeddingSourceColumns),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList",
    },
    embedding_vector_columns: {
      value: cdktn.listMapperHcl(dataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsToHclTerraform, false)(struct!.embeddingVectorColumns),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList",
    },
    embedding_writeback_table: {
      value: cdktn.stringToHclTerraform(struct!.embeddingWritebackTable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pipeline_type: {
      value: cdktn.stringToHclTerraform(struct!.pipelineType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_table: {
      value: cdktn.stringToHclTerraform(struct!.sourceTable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiSearchIndexDeltaSyncIndexSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnsToSync !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnsToSync = this._columnsToSync;
    }
    if (this._embeddingSourceColumns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.embeddingSourceColumns = this._embeddingSourceColumns?.internalValue;
    }
    if (this._embeddingVectorColumns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.embeddingVectorColumns = this._embeddingVectorColumns?.internalValue;
    }
    if (this._embeddingWritebackTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.embeddingWritebackTable = this._embeddingWritebackTable;
    }
    if (this._pipelineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineType = this._pipelineType;
    }
    if (this._sourceTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceTable = this._sourceTable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAiSearchIndexDeltaSyncIndexSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._columnsToSync = undefined;
      this._embeddingSourceColumns.internalValue = undefined;
      this._embeddingVectorColumns.internalValue = undefined;
      this._embeddingWritebackTable = undefined;
      this._pipelineType = undefined;
      this._sourceTable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._columnsToSync = value.columnsToSync;
      this._embeddingSourceColumns.internalValue = value.embeddingSourceColumns;
      this._embeddingVectorColumns.internalValue = value.embeddingVectorColumns;
      this._embeddingWritebackTable = value.embeddingWritebackTable;
      this._pipelineType = value.pipelineType;
      this._sourceTable = value.sourceTable;
    }
  }

  // columns_to_sync - computed: true, optional: true, required: false
  private _columnsToSync?: string[]; 
  public get columnsToSync() {
    return this.getListAttribute('columns_to_sync');
  }
  public set columnsToSync(value: string[]) {
    this._columnsToSync = value;
  }
  public resetColumnsToSync() {
    this._columnsToSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsToSyncInput() {
    return this._columnsToSync;
  }

  // embedding_source_columns - computed: true, optional: true, required: false
  private _embeddingSourceColumns = new DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList(this, "embedding_source_columns", false);
  public get embeddingSourceColumns() {
    return this._embeddingSourceColumns;
  }
  public putEmbeddingSourceColumns(value: DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns[] | cdktn.IResolvable) {
    this._embeddingSourceColumns.internalValue = value;
  }
  public resetEmbeddingSourceColumns() {
    this._embeddingSourceColumns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get embeddingSourceColumnsInput() {
    return this._embeddingSourceColumns.internalValue;
  }

  // embedding_vector_columns - computed: true, optional: true, required: false
  private _embeddingVectorColumns = new DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList(this, "embedding_vector_columns", false);
  public get embeddingVectorColumns() {
    return this._embeddingVectorColumns;
  }
  public putEmbeddingVectorColumns(value: DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns[] | cdktn.IResolvable) {
    this._embeddingVectorColumns.internalValue = value;
  }
  public resetEmbeddingVectorColumns() {
    this._embeddingVectorColumns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get embeddingVectorColumnsInput() {
    return this._embeddingVectorColumns.internalValue;
  }

  // embedding_writeback_table - computed: true, optional: true, required: false
  private _embeddingWritebackTable?: string; 
  public get embeddingWritebackTable() {
    return this.getStringAttribute('embedding_writeback_table');
  }
  public set embeddingWritebackTable(value: string) {
    this._embeddingWritebackTable = value;
  }
  public resetEmbeddingWritebackTable() {
    this._embeddingWritebackTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get embeddingWritebackTableInput() {
    return this._embeddingWritebackTable;
  }

  // pipeline_id - computed: true, optional: false, required: false
  public get pipelineId() {
    return this.getStringAttribute('pipeline_id');
  }

  // pipeline_type - computed: true, optional: false, required: true
  private _pipelineType?: string; 
  public get pipelineType() {
    return this.getStringAttribute('pipeline_type');
  }
  public set pipelineType(value: string) {
    this._pipelineType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineTypeInput() {
    return this._pipelineType;
  }

  // source_table - computed: true, optional: true, required: false
  private _sourceTable?: string; 
  public get sourceTable() {
    return this.getStringAttribute('source_table');
  }
  public set sourceTable(value: string) {
    this._sourceTable = value;
  }
  public resetSourceTable() {
    this._sourceTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTableInput() {
    return this._sourceTable;
  }
}
export interface DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/ai_search_index#embedding_model_endpoint DataDatabricksAiSearchIndex#embedding_model_endpoint}
  */
  readonly embeddingModelEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/ai_search_index#model_endpoint_name_for_query DataDatabricksAiSearchIndex#model_endpoint_name_for_query}
  */
  readonly modelEndpointNameForQuery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/ai_search_index#name DataDatabricksAiSearchIndex#name}
  */
  readonly name?: string;
}

export function dataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsToTerraform(struct?: DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    embedding_model_endpoint: cdktn.stringToTerraform(struct!.embeddingModelEndpoint),
    model_endpoint_name_for_query: cdktn.stringToTerraform(struct!.modelEndpointNameForQuery),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function dataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsToHclTerraform(struct?: DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    embedding_model_endpoint: {
      value: cdktn.stringToHclTerraform(struct!.embeddingModelEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_endpoint_name_for_query: {
      value: cdktn.stringToHclTerraform(struct!.modelEndpointNameForQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._embeddingModelEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.embeddingModelEndpoint = this._embeddingModelEndpoint;
    }
    if (this._modelEndpointNameForQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelEndpointNameForQuery = this._modelEndpointNameForQuery;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._embeddingModelEndpoint = undefined;
      this._modelEndpointNameForQuery = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._embeddingModelEndpoint = value.embeddingModelEndpoint;
      this._modelEndpointNameForQuery = value.modelEndpointNameForQuery;
      this._name = value.name;
    }
  }

  // embedding_model_endpoint - computed: true, optional: true, required: false
  private _embeddingModelEndpoint?: string; 
  public get embeddingModelEndpoint() {
    return this.getStringAttribute('embedding_model_endpoint');
  }
  public set embeddingModelEndpoint(value: string) {
    this._embeddingModelEndpoint = value;
  }
  public resetEmbeddingModelEndpoint() {
    this._embeddingModelEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get embeddingModelEndpointInput() {
    return this._embeddingModelEndpoint;
  }

  // model_endpoint_name_for_query - computed: true, optional: true, required: false
  private _modelEndpointNameForQuery?: string; 
  public get modelEndpointNameForQuery() {
    return this.getStringAttribute('model_endpoint_name_for_query');
  }
  public set modelEndpointNameForQuery(value: string) {
    this._modelEndpointNameForQuery = value;
  }
  public resetModelEndpointNameForQuery() {
    this._modelEndpointNameForQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelEndpointNameForQueryInput() {
    return this._modelEndpointNameForQuery;
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
}

export class DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference {
    return new DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/ai_search_index#embedding_dimension DataDatabricksAiSearchIndex#embedding_dimension}
  */
  readonly embeddingDimension?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/ai_search_index#name DataDatabricksAiSearchIndex#name}
  */
  readonly name?: string;
}

export function dataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsToTerraform(struct?: DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    embedding_dimension: cdktn.numberToTerraform(struct!.embeddingDimension),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function dataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsToHclTerraform(struct?: DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    embedding_dimension: {
      value: cdktn.numberToHclTerraform(struct!.embeddingDimension),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._embeddingDimension !== undefined) {
      hasAnyValues = true;
      internalValueResult.embeddingDimension = this._embeddingDimension;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._embeddingDimension = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._embeddingDimension = value.embeddingDimension;
      this._name = value.name;
    }
  }

  // embedding_dimension - computed: true, optional: true, required: false
  private _embeddingDimension?: number; 
  public get embeddingDimension() {
    return this.getNumberAttribute('embedding_dimension');
  }
  public set embeddingDimension(value: number) {
    this._embeddingDimension = value;
  }
  public resetEmbeddingDimension() {
    this._embeddingDimension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get embeddingDimensionInput() {
    return this._embeddingDimension;
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
}

export class DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference {
    return new DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksAiSearchIndexDirectAccessIndexSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/ai_search_index#embedding_source_columns DataDatabricksAiSearchIndex#embedding_source_columns}
  */
  readonly embeddingSourceColumns?: DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/ai_search_index#embedding_vector_columns DataDatabricksAiSearchIndex#embedding_vector_columns}
  */
  readonly embeddingVectorColumns?: DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/ai_search_index#schema_json DataDatabricksAiSearchIndex#schema_json}
  */
  readonly schemaJson?: string;
}

export function dataDatabricksAiSearchIndexDirectAccessIndexSpecToTerraform(struct?: DataDatabricksAiSearchIndexDirectAccessIndexSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    embedding_source_columns: cdktn.listMapper(dataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsToTerraform, false)(struct!.embeddingSourceColumns),
    embedding_vector_columns: cdktn.listMapper(dataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsToTerraform, false)(struct!.embeddingVectorColumns),
    schema_json: cdktn.stringToTerraform(struct!.schemaJson),
  }
}


export function dataDatabricksAiSearchIndexDirectAccessIndexSpecToHclTerraform(struct?: DataDatabricksAiSearchIndexDirectAccessIndexSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    embedding_source_columns: {
      value: cdktn.listMapperHcl(dataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsToHclTerraform, false)(struct!.embeddingSourceColumns),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList",
    },
    embedding_vector_columns: {
      value: cdktn.listMapperHcl(dataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsToHclTerraform, false)(struct!.embeddingVectorColumns),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList",
    },
    schema_json: {
      value: cdktn.stringToHclTerraform(struct!.schemaJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiSearchIndexDirectAccessIndexSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._embeddingSourceColumns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.embeddingSourceColumns = this._embeddingSourceColumns?.internalValue;
    }
    if (this._embeddingVectorColumns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.embeddingVectorColumns = this._embeddingVectorColumns?.internalValue;
    }
    if (this._schemaJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaJson = this._schemaJson;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAiSearchIndexDirectAccessIndexSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._embeddingSourceColumns.internalValue = undefined;
      this._embeddingVectorColumns.internalValue = undefined;
      this._schemaJson = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._embeddingSourceColumns.internalValue = value.embeddingSourceColumns;
      this._embeddingVectorColumns.internalValue = value.embeddingVectorColumns;
      this._schemaJson = value.schemaJson;
    }
  }

  // embedding_source_columns - computed: true, optional: true, required: false
  private _embeddingSourceColumns = new DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList(this, "embedding_source_columns", false);
  public get embeddingSourceColumns() {
    return this._embeddingSourceColumns;
  }
  public putEmbeddingSourceColumns(value: DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns[] | cdktn.IResolvable) {
    this._embeddingSourceColumns.internalValue = value;
  }
  public resetEmbeddingSourceColumns() {
    this._embeddingSourceColumns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get embeddingSourceColumnsInput() {
    return this._embeddingSourceColumns.internalValue;
  }

  // embedding_vector_columns - computed: true, optional: true, required: false
  private _embeddingVectorColumns = new DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList(this, "embedding_vector_columns", false);
  public get embeddingVectorColumns() {
    return this._embeddingVectorColumns;
  }
  public putEmbeddingVectorColumns(value: DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns[] | cdktn.IResolvable) {
    this._embeddingVectorColumns.internalValue = value;
  }
  public resetEmbeddingVectorColumns() {
    this._embeddingVectorColumns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get embeddingVectorColumnsInput() {
    return this._embeddingVectorColumns.internalValue;
  }

  // schema_json - computed: true, optional: true, required: false
  private _schemaJson?: string; 
  public get schemaJson() {
    return this.getStringAttribute('schema_json');
  }
  public set schemaJson(value: string) {
    this._schemaJson = value;
  }
  public resetSchemaJson() {
    this._schemaJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaJsonInput() {
    return this._schemaJson;
  }
}
export interface DataDatabricksAiSearchIndexProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/ai_search_index#workspace_id DataDatabricksAiSearchIndex#workspace_id}
  */
  readonly workspaceId?: string;
}

export function dataDatabricksAiSearchIndexProviderConfigToTerraform(struct?: DataDatabricksAiSearchIndexProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function dataDatabricksAiSearchIndexProviderConfigToHclTerraform(struct?: DataDatabricksAiSearchIndexProviderConfig | cdktn.IResolvable): any {
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

export class DataDatabricksAiSearchIndexProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiSearchIndexProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiSearchIndexProviderConfig | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAiSearchIndexStatus {
}

export function dataDatabricksAiSearchIndexStatusToTerraform(struct?: DataDatabricksAiSearchIndexStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataDatabricksAiSearchIndexStatusToHclTerraform(struct?: DataDatabricksAiSearchIndexStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatabricksAiSearchIndexStatusOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiSearchIndexStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAiSearchIndexStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // index_url - computed: true, optional: false, required: false
  public get indexUrl() {
    return this.getStringAttribute('index_url');
  }

  // indexed_row_count - computed: true, optional: false, required: false
  public get indexedRowCount() {
    return this.getNumberAttribute('indexed_row_count');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // ready - computed: true, optional: false, required: false
  public get ready() {
    return this.getBooleanAttribute('ready');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/ai_search_index databricks_ai_search_index}
*/
export class DataDatabricksAiSearchIndex extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_ai_search_index";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataDatabricksAiSearchIndex resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksAiSearchIndex to import
  * @param importFromId The id of the existing DataDatabricksAiSearchIndex that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/ai_search_index#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksAiSearchIndex to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_ai_search_index", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/ai_search_index databricks_ai_search_index} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksAiSearchIndexConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksAiSearchIndexConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_ai_search_index',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.122.0',
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

  // creator - computed: true, optional: false, required: false
  public get creator() {
    return this.getStringAttribute('creator');
  }

  // delta_sync_index_spec - computed: true, optional: false, required: false
  private _deltaSyncIndexSpec = new DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference(this, "delta_sync_index_spec");
  public get deltaSyncIndexSpec() {
    return this._deltaSyncIndexSpec;
  }

  // direct_access_index_spec - computed: true, optional: false, required: false
  private _directAccessIndexSpec = new DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference(this, "direct_access_index_spec");
  public get directAccessIndexSpec() {
    return this._directAccessIndexSpec;
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // index_subtype - computed: true, optional: false, required: false
  public get indexSubtype() {
    return this.getStringAttribute('index_subtype');
  }

  // index_type - computed: true, optional: false, required: false
  public get indexType() {
    return this.getStringAttribute('index_type');
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

  // primary_key - computed: true, optional: false, required: false
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }

  // provider_config - computed: false, optional: true, required: false
  private _providerConfig = new DataDatabricksAiSearchIndexProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataDatabricksAiSearchIndexProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // status - computed: true, optional: false, required: false
  private _status = new DataDatabricksAiSearchIndexStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktn.stringToTerraform(this._name),
      provider_config: dataDatabricksAiSearchIndexProviderConfigToTerraform(this._providerConfig.internalValue),
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
        value: dataDatabricksAiSearchIndexProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataDatabricksAiSearchIndexProviderConfig",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
