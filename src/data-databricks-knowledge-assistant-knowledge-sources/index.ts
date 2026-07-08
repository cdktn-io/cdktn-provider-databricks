/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.121.0/docs/data-sources/knowledge_assistant_knowledge_sources
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.121.0/docs/data-sources/knowledge_assistant_knowledge_sources#page_size DataDatabricksKnowledgeAssistantKnowledgeSources#page_size}
  */
  readonly pageSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.121.0/docs/data-sources/knowledge_assistant_knowledge_sources#parent DataDatabricksKnowledgeAssistantKnowledgeSources#parent}
  */
  readonly parent: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.121.0/docs/data-sources/knowledge_assistant_knowledge_sources#provider_config DataDatabricksKnowledgeAssistantKnowledgeSources#provider_config}
  */
  readonly providerConfig?: DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig;
}
export interface DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.121.0/docs/data-sources/knowledge_assistant_knowledge_sources#file_col DataDatabricksKnowledgeAssistantKnowledgeSources#file_col}
  */
  readonly fileCol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.121.0/docs/data-sources/knowledge_assistant_knowledge_sources#table_name DataDatabricksKnowledgeAssistantKnowledgeSources#table_name}
  */
  readonly tableName: string;
}

export function dataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableToTerraform(struct?: DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    file_col: cdktn.stringToTerraform(struct!.fileCol),
    table_name: cdktn.stringToTerraform(struct!.tableName),
  }
}


export function dataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableToHclTerraform(struct?: DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    file_col: {
      value: cdktn.stringToHclTerraform(struct!.fileCol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_name: {
      value: cdktn.stringToHclTerraform(struct!.tableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileCol !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileCol = this._fileCol;
    }
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileCol = undefined;
      this._tableName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileCol = value.fileCol;
      this._tableName = value.tableName;
    }
  }

  // file_col - computed: true, optional: false, required: true
  private _fileCol?: string; 
  public get fileCol() {
    return this.getStringAttribute('file_col');
  }
  public set fileCol(value: string) {
    this._fileCol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileColInput() {
    return this._fileCol;
  }

  // table_name - computed: true, optional: false, required: true
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }
}
export interface DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFiles {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.121.0/docs/data-sources/knowledge_assistant_knowledge_sources#path DataDatabricksKnowledgeAssistantKnowledgeSources#path}
  */
  readonly path: string;
}

export function dataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesToTerraform(struct?: DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFiles): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    path: cdktn.stringToTerraform(struct!.path),
  }
}


export function dataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesToHclTerraform(struct?: DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFiles): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFiles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFiles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
    }
  }

  // path - computed: true, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndex {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.121.0/docs/data-sources/knowledge_assistant_knowledge_sources#doc_uri_col DataDatabricksKnowledgeAssistantKnowledgeSources#doc_uri_col}
  */
  readonly docUriCol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.121.0/docs/data-sources/knowledge_assistant_knowledge_sources#index_name DataDatabricksKnowledgeAssistantKnowledgeSources#index_name}
  */
  readonly indexName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.121.0/docs/data-sources/knowledge_assistant_knowledge_sources#text_col DataDatabricksKnowledgeAssistantKnowledgeSources#text_col}
  */
  readonly textCol: string;
}

export function dataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexToTerraform(struct?: DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndex): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    doc_uri_col: cdktn.stringToTerraform(struct!.docUriCol),
    index_name: cdktn.stringToTerraform(struct!.indexName),
    text_col: cdktn.stringToTerraform(struct!.textCol),
  }
}


export function dataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexToHclTerraform(struct?: DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndex): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    doc_uri_col: {
      value: cdktn.stringToHclTerraform(struct!.docUriCol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index_name: {
      value: cdktn.stringToHclTerraform(struct!.indexName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text_col: {
      value: cdktn.stringToHclTerraform(struct!.textCol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndex | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._docUriCol !== undefined) {
      hasAnyValues = true;
      internalValueResult.docUriCol = this._docUriCol;
    }
    if (this._indexName !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexName = this._indexName;
    }
    if (this._textCol !== undefined) {
      hasAnyValues = true;
      internalValueResult.textCol = this._textCol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndex | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._docUriCol = undefined;
      this._indexName = undefined;
      this._textCol = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._docUriCol = value.docUriCol;
      this._indexName = value.indexName;
      this._textCol = value.textCol;
    }
  }

  // doc_uri_col - computed: true, optional: false, required: true
  private _docUriCol?: string; 
  public get docUriCol() {
    return this.getStringAttribute('doc_uri_col');
  }
  public set docUriCol(value: string) {
    this._docUriCol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get docUriColInput() {
    return this._docUriCol;
  }

  // index_name - computed: true, optional: false, required: true
  private _indexName?: string; 
  public get indexName() {
    return this.getStringAttribute('index_name');
  }
  public set indexName(value: string) {
    this._indexName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexNameInput() {
    return this._indexName;
  }

  // text_col - computed: true, optional: false, required: true
  private _textCol?: string; 
  public get textCol() {
    return this.getStringAttribute('text_col');
  }
  public set textCol(value: string) {
    this._textCol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textColInput() {
    return this._textCol;
  }
}
export interface DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.121.0/docs/data-sources/knowledge_assistant_knowledge_sources#workspace_id DataDatabricksKnowledgeAssistantKnowledgeSources#workspace_id}
  */
  readonly workspaceId?: string;
}

export function dataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigToTerraform(struct?: DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function dataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigToHclTerraform(struct?: DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfig | cdktn.IResolvable): any {
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

export class DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfig | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.121.0/docs/data-sources/knowledge_assistant_knowledge_sources#name DataDatabricksKnowledgeAssistantKnowledgeSources#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.121.0/docs/data-sources/knowledge_assistant_knowledge_sources#provider_config DataDatabricksKnowledgeAssistantKnowledgeSources#provider_config}
  */
  readonly providerConfig?: DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfig;
}

export function dataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesToTerraform(struct?: DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    provider_config: dataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigToTerraform(struct!.providerConfig),
  }
}


export function dataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesToHclTerraform(struct?: DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSources): any {
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
      value: dataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigToHclTerraform(struct!.providerConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSources | undefined {
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

  public set internalValue(value: DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSources | undefined) {
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

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // file_table - computed: true, optional: false, required: false
  private _fileTable = new DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference(this, "file_table");
  public get fileTable() {
    return this._fileTable;
  }

  // files - computed: true, optional: false, required: false
  private _files = new DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference(this, "files");
  public get files() {
    return this._files;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // index - computed: true, optional: false, required: false
  private _index = new DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference(this, "index");
  public get index() {
    return this._index;
  }

  // knowledge_cutoff_time - computed: true, optional: false, required: false
  public get knowledgeCutoffTime() {
    return this.getStringAttribute('knowledge_cutoff_time');
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
  private _providerConfig = new DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // source_type - computed: true, optional: false, required: false
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSources[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference {
    return new DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.121.0/docs/data-sources/knowledge_assistant_knowledge_sources#workspace_id DataDatabricksKnowledgeAssistantKnowledgeSources#workspace_id}
  */
  readonly workspaceId?: string;
}

export function dataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigToTerraform(struct?: DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function dataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigToHclTerraform(struct?: DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig | cdktn.IResolvable): any {
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

export class DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.121.0/docs/data-sources/knowledge_assistant_knowledge_sources databricks_knowledge_assistant_knowledge_sources}
*/
export class DataDatabricksKnowledgeAssistantKnowledgeSources extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_knowledge_assistant_knowledge_sources";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataDatabricksKnowledgeAssistantKnowledgeSources resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksKnowledgeAssistantKnowledgeSources to import
  * @param importFromId The id of the existing DataDatabricksKnowledgeAssistantKnowledgeSources that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.121.0/docs/data-sources/knowledge_assistant_knowledge_sources#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksKnowledgeAssistantKnowledgeSources to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_knowledge_assistant_knowledge_sources", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.121.0/docs/data-sources/knowledge_assistant_knowledge_sources databricks_knowledge_assistant_knowledge_sources} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_knowledge_assistant_knowledge_sources',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.121.0',
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
    this._pageSize = config.pageSize;
    this._parent = config.parent;
    this._providerConfig.internalValue = config.providerConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // knowledge_sources - computed: true, optional: false, required: false
  private _knowledgeSources = new DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList(this, "knowledge_sources", false);
  public get knowledgeSources() {
    return this._knowledgeSources;
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

  // provider_config - computed: false, optional: true, required: false
  private _providerConfig = new DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig) {
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
      page_size: cdktn.numberToTerraform(this._pageSize),
      parent: cdktn.stringToTerraform(this._parent),
      provider_config: dataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigToTerraform(this._providerConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      page_size: {
        value: cdktn.numberToHclTerraform(this._pageSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      parent: {
        value: cdktn.stringToHclTerraform(this._parent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_config: {
        value: dataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
