/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/ai_search_index
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface AiSearchIndexConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/ai_search_index#delta_sync_index_spec AiSearchIndex#delta_sync_index_spec}
  */
  readonly deltaSyncIndexSpec?: AiSearchIndexDeltaSyncIndexSpec;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/ai_search_index#direct_access_index_spec AiSearchIndex#direct_access_index_spec}
  */
  readonly directAccessIndexSpec?: AiSearchIndexDirectAccessIndexSpec;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/ai_search_index#index_id AiSearchIndex#index_id}
  */
  readonly indexId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/ai_search_index#index_subtype AiSearchIndex#index_subtype}
  */
  readonly indexSubtype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/ai_search_index#index_type AiSearchIndex#index_type}
  */
  readonly indexType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/ai_search_index#parent AiSearchIndex#parent}
  */
  readonly parent: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/ai_search_index#primary_key AiSearchIndex#primary_key}
  */
  readonly primaryKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/ai_search_index#provider_config AiSearchIndex#provider_config}
  */
  readonly providerConfig?: AiSearchIndexProviderConfig;
}
export interface AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/ai_search_index#embedding_model_endpoint AiSearchIndex#embedding_model_endpoint}
  */
  readonly embeddingModelEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/ai_search_index#model_endpoint_name_for_query AiSearchIndex#model_endpoint_name_for_query}
  */
  readonly modelEndpointNameForQuery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/ai_search_index#name AiSearchIndex#name}
  */
  readonly name?: string;
}

export function aiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsToTerraform(struct?: AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns | cdktn.IResolvable): any {
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


export function aiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsToHclTerraform(struct?: AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns | cdktn.IResolvable): any {
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

export class AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns | cdktn.IResolvable | undefined) {
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

  // embedding_model_endpoint - computed: false, optional: true, required: false
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

  // model_endpoint_name_for_query - computed: false, optional: true, required: false
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

  // name - computed: false, optional: true, required: false
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

export class AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList extends cdktn.ComplexList {
  public internalValue? : AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns[] | cdktn.IResolvable

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
  public get(index: number): AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference {
    return new AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/ai_search_index#embedding_dimension AiSearchIndex#embedding_dimension}
  */
  readonly embeddingDimension?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/ai_search_index#name AiSearchIndex#name}
  */
  readonly name?: string;
}

export function aiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsToTerraform(struct?: AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    embedding_dimension: cdktn.numberToTerraform(struct!.embeddingDimension),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function aiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsToHclTerraform(struct?: AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns | cdktn.IResolvable): any {
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

export class AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns | cdktn.IResolvable | undefined) {
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

  // embedding_dimension - computed: false, optional: true, required: false
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

  // name - computed: false, optional: true, required: false
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

export class AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList extends cdktn.ComplexList {
  public internalValue? : AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns[] | cdktn.IResolvable

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
  public get(index: number): AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference {
    return new AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AiSearchIndexDeltaSyncIndexSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/ai_search_index#columns_to_sync AiSearchIndex#columns_to_sync}
  */
  readonly columnsToSync?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/ai_search_index#embedding_source_columns AiSearchIndex#embedding_source_columns}
  */
  readonly embeddingSourceColumns?: AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/ai_search_index#embedding_vector_columns AiSearchIndex#embedding_vector_columns}
  */
  readonly embeddingVectorColumns?: AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/ai_search_index#embedding_writeback_table AiSearchIndex#embedding_writeback_table}
  */
  readonly embeddingWritebackTable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/ai_search_index#pipeline_type AiSearchIndex#pipeline_type}
  */
  readonly pipelineType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/ai_search_index#source_table AiSearchIndex#source_table}
  */
  readonly sourceTable?: string;
}

export function aiSearchIndexDeltaSyncIndexSpecToTerraform(struct?: AiSearchIndexDeltaSyncIndexSpec | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    columns_to_sync: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.columnsToSync),
    embedding_source_columns: cdktn.listMapper(aiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsToTerraform, false)(struct!.embeddingSourceColumns),
    embedding_vector_columns: cdktn.listMapper(aiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsToTerraform, false)(struct!.embeddingVectorColumns),
    embedding_writeback_table: cdktn.stringToTerraform(struct!.embeddingWritebackTable),
    pipeline_type: cdktn.stringToTerraform(struct!.pipelineType),
    source_table: cdktn.stringToTerraform(struct!.sourceTable),
  }
}


export function aiSearchIndexDeltaSyncIndexSpecToHclTerraform(struct?: AiSearchIndexDeltaSyncIndexSpec | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(aiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsToHclTerraform, false)(struct!.embeddingSourceColumns),
      isBlock: true,
      type: "list",
      storageClassType: "AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList",
    },
    embedding_vector_columns: {
      value: cdktn.listMapperHcl(aiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsToHclTerraform, false)(struct!.embeddingVectorColumns),
      isBlock: true,
      type: "list",
      storageClassType: "AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList",
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

export class AiSearchIndexDeltaSyncIndexSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiSearchIndexDeltaSyncIndexSpec | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: AiSearchIndexDeltaSyncIndexSpec | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columnsToSync = undefined;
      this._embeddingSourceColumns.internalValue = undefined;
      this._embeddingVectorColumns.internalValue = undefined;
      this._embeddingWritebackTable = undefined;
      this._pipelineType = undefined;
      this._sourceTable = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columnsToSync = value.columnsToSync;
      this._embeddingSourceColumns.internalValue = value.embeddingSourceColumns;
      this._embeddingVectorColumns.internalValue = value.embeddingVectorColumns;
      this._embeddingWritebackTable = value.embeddingWritebackTable;
      this._pipelineType = value.pipelineType;
      this._sourceTable = value.sourceTable;
    }
  }

  // columns_to_sync - computed: false, optional: true, required: false
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

  // embedding_source_columns - computed: false, optional: true, required: false
  private _embeddingSourceColumns = new AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList(this, "embedding_source_columns", false);
  public get embeddingSourceColumns() {
    return this._embeddingSourceColumns;
  }
  public putEmbeddingSourceColumns(value: AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns[] | cdktn.IResolvable) {
    this._embeddingSourceColumns.internalValue = value;
  }
  public resetEmbeddingSourceColumns() {
    this._embeddingSourceColumns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get embeddingSourceColumnsInput() {
    return this._embeddingSourceColumns.internalValue;
  }

  // embedding_vector_columns - computed: false, optional: true, required: false
  private _embeddingVectorColumns = new AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList(this, "embedding_vector_columns", false);
  public get embeddingVectorColumns() {
    return this._embeddingVectorColumns;
  }
  public putEmbeddingVectorColumns(value: AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns[] | cdktn.IResolvable) {
    this._embeddingVectorColumns.internalValue = value;
  }
  public resetEmbeddingVectorColumns() {
    this._embeddingVectorColumns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get embeddingVectorColumnsInput() {
    return this._embeddingVectorColumns.internalValue;
  }

  // embedding_writeback_table - computed: false, optional: true, required: false
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

  // pipeline_type - computed: false, optional: false, required: true
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

  // source_table - computed: false, optional: true, required: false
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
export interface AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/ai_search_index#embedding_model_endpoint AiSearchIndex#embedding_model_endpoint}
  */
  readonly embeddingModelEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/ai_search_index#model_endpoint_name_for_query AiSearchIndex#model_endpoint_name_for_query}
  */
  readonly modelEndpointNameForQuery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/ai_search_index#name AiSearchIndex#name}
  */
  readonly name?: string;
}

export function aiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsToTerraform(struct?: AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns | cdktn.IResolvable): any {
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


export function aiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsToHclTerraform(struct?: AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns | cdktn.IResolvable): any {
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

export class AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns | cdktn.IResolvable | undefined) {
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

  // embedding_model_endpoint - computed: false, optional: true, required: false
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

  // model_endpoint_name_for_query - computed: false, optional: true, required: false
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

  // name - computed: false, optional: true, required: false
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

export class AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList extends cdktn.ComplexList {
  public internalValue? : AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns[] | cdktn.IResolvable

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
  public get(index: number): AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference {
    return new AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/ai_search_index#embedding_dimension AiSearchIndex#embedding_dimension}
  */
  readonly embeddingDimension?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/ai_search_index#name AiSearchIndex#name}
  */
  readonly name?: string;
}

export function aiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsToTerraform(struct?: AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    embedding_dimension: cdktn.numberToTerraform(struct!.embeddingDimension),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function aiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsToHclTerraform(struct?: AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns | cdktn.IResolvable): any {
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

export class AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns | cdktn.IResolvable | undefined) {
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

  // embedding_dimension - computed: false, optional: true, required: false
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

  // name - computed: false, optional: true, required: false
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

export class AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList extends cdktn.ComplexList {
  public internalValue? : AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns[] | cdktn.IResolvable

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
  public get(index: number): AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference {
    return new AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AiSearchIndexDirectAccessIndexSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/ai_search_index#embedding_source_columns AiSearchIndex#embedding_source_columns}
  */
  readonly embeddingSourceColumns?: AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/ai_search_index#embedding_vector_columns AiSearchIndex#embedding_vector_columns}
  */
  readonly embeddingVectorColumns?: AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/ai_search_index#schema_json AiSearchIndex#schema_json}
  */
  readonly schemaJson?: string;
}

export function aiSearchIndexDirectAccessIndexSpecToTerraform(struct?: AiSearchIndexDirectAccessIndexSpec | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    embedding_source_columns: cdktn.listMapper(aiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsToTerraform, false)(struct!.embeddingSourceColumns),
    embedding_vector_columns: cdktn.listMapper(aiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsToTerraform, false)(struct!.embeddingVectorColumns),
    schema_json: cdktn.stringToTerraform(struct!.schemaJson),
  }
}


export function aiSearchIndexDirectAccessIndexSpecToHclTerraform(struct?: AiSearchIndexDirectAccessIndexSpec | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    embedding_source_columns: {
      value: cdktn.listMapperHcl(aiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsToHclTerraform, false)(struct!.embeddingSourceColumns),
      isBlock: true,
      type: "list",
      storageClassType: "AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList",
    },
    embedding_vector_columns: {
      value: cdktn.listMapperHcl(aiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsToHclTerraform, false)(struct!.embeddingVectorColumns),
      isBlock: true,
      type: "list",
      storageClassType: "AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList",
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

export class AiSearchIndexDirectAccessIndexSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiSearchIndexDirectAccessIndexSpec | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: AiSearchIndexDirectAccessIndexSpec | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._embeddingSourceColumns.internalValue = undefined;
      this._embeddingVectorColumns.internalValue = undefined;
      this._schemaJson = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._embeddingSourceColumns.internalValue = value.embeddingSourceColumns;
      this._embeddingVectorColumns.internalValue = value.embeddingVectorColumns;
      this._schemaJson = value.schemaJson;
    }
  }

  // embedding_source_columns - computed: false, optional: true, required: false
  private _embeddingSourceColumns = new AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList(this, "embedding_source_columns", false);
  public get embeddingSourceColumns() {
    return this._embeddingSourceColumns;
  }
  public putEmbeddingSourceColumns(value: AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns[] | cdktn.IResolvable) {
    this._embeddingSourceColumns.internalValue = value;
  }
  public resetEmbeddingSourceColumns() {
    this._embeddingSourceColumns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get embeddingSourceColumnsInput() {
    return this._embeddingSourceColumns.internalValue;
  }

  // embedding_vector_columns - computed: false, optional: true, required: false
  private _embeddingVectorColumns = new AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList(this, "embedding_vector_columns", false);
  public get embeddingVectorColumns() {
    return this._embeddingVectorColumns;
  }
  public putEmbeddingVectorColumns(value: AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns[] | cdktn.IResolvable) {
    this._embeddingVectorColumns.internalValue = value;
  }
  public resetEmbeddingVectorColumns() {
    this._embeddingVectorColumns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get embeddingVectorColumnsInput() {
    return this._embeddingVectorColumns.internalValue;
  }

  // schema_json - computed: false, optional: true, required: false
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
export interface AiSearchIndexProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/ai_search_index#workspace_id AiSearchIndex#workspace_id}
  */
  readonly workspaceId?: string;
}

export function aiSearchIndexProviderConfigToTerraform(struct?: AiSearchIndexProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function aiSearchIndexProviderConfigToHclTerraform(struct?: AiSearchIndexProviderConfig | cdktn.IResolvable): any {
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

export class AiSearchIndexProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiSearchIndexProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AiSearchIndexProviderConfig | cdktn.IResolvable | undefined) {
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
export interface AiSearchIndexStatus {
}

export function aiSearchIndexStatusToTerraform(struct?: AiSearchIndexStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function aiSearchIndexStatusToHclTerraform(struct?: AiSearchIndexStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class AiSearchIndexStatusOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiSearchIndexStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiSearchIndexStatus | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/ai_search_index databricks_ai_search_index}
*/
export class AiSearchIndex extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_ai_search_index";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AiSearchIndex resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AiSearchIndex to import
  * @param importFromId The id of the existing AiSearchIndex that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/ai_search_index#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AiSearchIndex to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_ai_search_index", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/ai_search_index databricks_ai_search_index} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AiSearchIndexConfig
  */
  public constructor(scope: Construct, id: string, config: AiSearchIndexConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_ai_search_index',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.118.0',
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
    this._deltaSyncIndexSpec.internalValue = config.deltaSyncIndexSpec;
    this._directAccessIndexSpec.internalValue = config.directAccessIndexSpec;
    this._indexId = config.indexId;
    this._indexSubtype = config.indexSubtype;
    this._indexType = config.indexType;
    this._parent = config.parent;
    this._primaryKey = config.primaryKey;
    this._providerConfig.internalValue = config.providerConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creator - computed: true, optional: false, required: false
  public get creator() {
    return this.getStringAttribute('creator');
  }

  // delta_sync_index_spec - computed: false, optional: true, required: false
  private _deltaSyncIndexSpec = new AiSearchIndexDeltaSyncIndexSpecOutputReference(this, "delta_sync_index_spec");
  public get deltaSyncIndexSpec() {
    return this._deltaSyncIndexSpec;
  }
  public putDeltaSyncIndexSpec(value: AiSearchIndexDeltaSyncIndexSpec) {
    this._deltaSyncIndexSpec.internalValue = value;
  }
  public resetDeltaSyncIndexSpec() {
    this._deltaSyncIndexSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deltaSyncIndexSpecInput() {
    return this._deltaSyncIndexSpec.internalValue;
  }

  // direct_access_index_spec - computed: false, optional: true, required: false
  private _directAccessIndexSpec = new AiSearchIndexDirectAccessIndexSpecOutputReference(this, "direct_access_index_spec");
  public get directAccessIndexSpec() {
    return this._directAccessIndexSpec;
  }
  public putDirectAccessIndexSpec(value: AiSearchIndexDirectAccessIndexSpec) {
    this._directAccessIndexSpec.internalValue = value;
  }
  public resetDirectAccessIndexSpec() {
    this._directAccessIndexSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directAccessIndexSpecInput() {
    return this._directAccessIndexSpec.internalValue;
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // index_id - computed: true, optional: true, required: false
  private _indexId?: string; 
  public get indexId() {
    return this.getStringAttribute('index_id');
  }
  public set indexId(value: string) {
    this._indexId = value;
  }
  public resetIndexId() {
    this._indexId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexIdInput() {
    return this._indexId;
  }

  // index_subtype - computed: false, optional: true, required: false
  private _indexSubtype?: string; 
  public get indexSubtype() {
    return this.getStringAttribute('index_subtype');
  }
  public set indexSubtype(value: string) {
    this._indexSubtype = value;
  }
  public resetIndexSubtype() {
    this._indexSubtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexSubtypeInput() {
    return this._indexSubtype;
  }

  // index_type - computed: false, optional: false, required: true
  private _indexType?: string; 
  public get indexType() {
    return this.getStringAttribute('index_type');
  }
  public set indexType(value: string) {
    this._indexType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexTypeInput() {
    return this._indexType;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent - computed: false, optional: false, required: true
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // primary_key - computed: false, optional: false, required: true
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }

  // provider_config - computed: true, optional: true, required: false
  private _providerConfig = new AiSearchIndexProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: AiSearchIndexProviderConfig) {
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
  private _status = new AiSearchIndexStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delta_sync_index_spec: aiSearchIndexDeltaSyncIndexSpecToTerraform(this._deltaSyncIndexSpec.internalValue),
      direct_access_index_spec: aiSearchIndexDirectAccessIndexSpecToTerraform(this._directAccessIndexSpec.internalValue),
      index_id: cdktn.stringToTerraform(this._indexId),
      index_subtype: cdktn.stringToTerraform(this._indexSubtype),
      index_type: cdktn.stringToTerraform(this._indexType),
      parent: cdktn.stringToTerraform(this._parent),
      primary_key: cdktn.stringToTerraform(this._primaryKey),
      provider_config: aiSearchIndexProviderConfigToTerraform(this._providerConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delta_sync_index_spec: {
        value: aiSearchIndexDeltaSyncIndexSpecToHclTerraform(this._deltaSyncIndexSpec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AiSearchIndexDeltaSyncIndexSpec",
      },
      direct_access_index_spec: {
        value: aiSearchIndexDirectAccessIndexSpecToHclTerraform(this._directAccessIndexSpec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AiSearchIndexDirectAccessIndexSpec",
      },
      index_id: {
        value: cdktn.stringToHclTerraform(this._indexId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      index_subtype: {
        value: cdktn.stringToHclTerraform(this._indexSubtype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      index_type: {
        value: cdktn.stringToHclTerraform(this._indexType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent: {
        value: cdktn.stringToHclTerraform(this._parent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_key: {
        value: cdktn.stringToHclTerraform(this._primaryKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_config: {
        value: aiSearchIndexProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AiSearchIndexProviderConfig",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
