/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/knowledge_assistant_knowledge_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface KnowledgeAssistantKnowledgeSourceConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/knowledge_assistant_knowledge_source#description KnowledgeAssistantKnowledgeSource#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/knowledge_assistant_knowledge_source#display_name KnowledgeAssistantKnowledgeSource#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/knowledge_assistant_knowledge_source#file_table KnowledgeAssistantKnowledgeSource#file_table}
  */
  readonly fileTable?: KnowledgeAssistantKnowledgeSourceFileTable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/knowledge_assistant_knowledge_source#files KnowledgeAssistantKnowledgeSource#files}
  */
  readonly files?: KnowledgeAssistantKnowledgeSourceFiles;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/knowledge_assistant_knowledge_source#index KnowledgeAssistantKnowledgeSource#index}
  */
  readonly index?: KnowledgeAssistantKnowledgeSourceIndex;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/knowledge_assistant_knowledge_source#parent KnowledgeAssistantKnowledgeSource#parent}
  */
  readonly parent: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/knowledge_assistant_knowledge_source#provider_config KnowledgeAssistantKnowledgeSource#provider_config}
  */
  readonly providerConfig?: KnowledgeAssistantKnowledgeSourceProviderConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/knowledge_assistant_knowledge_source#source_type KnowledgeAssistantKnowledgeSource#source_type}
  */
  readonly sourceType: string;
}
export interface KnowledgeAssistantKnowledgeSourceFileTable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/knowledge_assistant_knowledge_source#file_col KnowledgeAssistantKnowledgeSource#file_col}
  */
  readonly fileCol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/knowledge_assistant_knowledge_source#table_name KnowledgeAssistantKnowledgeSource#table_name}
  */
  readonly tableName: string;
}

export function knowledgeAssistantKnowledgeSourceFileTableToTerraform(struct?: KnowledgeAssistantKnowledgeSourceFileTable | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_col: cdktn.stringToTerraform(struct!.fileCol),
    table_name: cdktn.stringToTerraform(struct!.tableName),
  }
}


export function knowledgeAssistantKnowledgeSourceFileTableToHclTerraform(struct?: KnowledgeAssistantKnowledgeSourceFileTable | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class KnowledgeAssistantKnowledgeSourceFileTableOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KnowledgeAssistantKnowledgeSourceFileTable | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: KnowledgeAssistantKnowledgeSourceFileTable | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileCol = undefined;
      this._tableName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fileCol = value.fileCol;
      this._tableName = value.tableName;
    }
  }

  // file_col - computed: false, optional: false, required: true
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

  // table_name - computed: false, optional: false, required: true
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
export interface KnowledgeAssistantKnowledgeSourceFiles {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/knowledge_assistant_knowledge_source#path KnowledgeAssistantKnowledgeSource#path}
  */
  readonly path: string;
}

export function knowledgeAssistantKnowledgeSourceFilesToTerraform(struct?: KnowledgeAssistantKnowledgeSourceFiles | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktn.stringToTerraform(struct!.path),
  }
}


export function knowledgeAssistantKnowledgeSourceFilesToHclTerraform(struct?: KnowledgeAssistantKnowledgeSourceFiles | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class KnowledgeAssistantKnowledgeSourceFilesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KnowledgeAssistantKnowledgeSourceFiles | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KnowledgeAssistantKnowledgeSourceFiles | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
    }
  }

  // path - computed: false, optional: false, required: true
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
export interface KnowledgeAssistantKnowledgeSourceIndex {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/knowledge_assistant_knowledge_source#doc_uri_col KnowledgeAssistantKnowledgeSource#doc_uri_col}
  */
  readonly docUriCol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/knowledge_assistant_knowledge_source#index_name KnowledgeAssistantKnowledgeSource#index_name}
  */
  readonly indexName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/knowledge_assistant_knowledge_source#text_col KnowledgeAssistantKnowledgeSource#text_col}
  */
  readonly textCol: string;
}

export function knowledgeAssistantKnowledgeSourceIndexToTerraform(struct?: KnowledgeAssistantKnowledgeSourceIndex | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    doc_uri_col: cdktn.stringToTerraform(struct!.docUriCol),
    index_name: cdktn.stringToTerraform(struct!.indexName),
    text_col: cdktn.stringToTerraform(struct!.textCol),
  }
}


export function knowledgeAssistantKnowledgeSourceIndexToHclTerraform(struct?: KnowledgeAssistantKnowledgeSourceIndex | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class KnowledgeAssistantKnowledgeSourceIndexOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KnowledgeAssistantKnowledgeSourceIndex | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: KnowledgeAssistantKnowledgeSourceIndex | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._docUriCol = undefined;
      this._indexName = undefined;
      this._textCol = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._docUriCol = value.docUriCol;
      this._indexName = value.indexName;
      this._textCol = value.textCol;
    }
  }

  // doc_uri_col - computed: false, optional: false, required: true
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

  // index_name - computed: false, optional: false, required: true
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

  // text_col - computed: false, optional: false, required: true
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
export interface KnowledgeAssistantKnowledgeSourceProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/knowledge_assistant_knowledge_source#workspace_id KnowledgeAssistantKnowledgeSource#workspace_id}
  */
  readonly workspaceId: string;
}

export function knowledgeAssistantKnowledgeSourceProviderConfigToTerraform(struct?: KnowledgeAssistantKnowledgeSourceProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function knowledgeAssistantKnowledgeSourceProviderConfigToHclTerraform(struct?: KnowledgeAssistantKnowledgeSourceProviderConfig | cdktn.IResolvable): any {
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

export class KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KnowledgeAssistantKnowledgeSourceProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: KnowledgeAssistantKnowledgeSourceProviderConfig | cdktn.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/knowledge_assistant_knowledge_source databricks_knowledge_assistant_knowledge_source}
*/
export class KnowledgeAssistantKnowledgeSource extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_knowledge_assistant_knowledge_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a KnowledgeAssistantKnowledgeSource resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KnowledgeAssistantKnowledgeSource to import
  * @param importFromId The id of the existing KnowledgeAssistantKnowledgeSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/knowledge_assistant_knowledge_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KnowledgeAssistantKnowledgeSource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_knowledge_assistant_knowledge_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/knowledge_assistant_knowledge_source databricks_knowledge_assistant_knowledge_source} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KnowledgeAssistantKnowledgeSourceConfig
  */
  public constructor(scope: Construct, id: string, config: KnowledgeAssistantKnowledgeSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_knowledge_assistant_knowledge_source',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.114.1',
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
    this._description = config.description;
    this._displayName = config.displayName;
    this._fileTable.internalValue = config.fileTable;
    this._files.internalValue = config.files;
    this._index.internalValue = config.index;
    this._parent = config.parent;
    this._providerConfig.internalValue = config.providerConfig;
    this._sourceType = config.sourceType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // file_table - computed: false, optional: true, required: false
  private _fileTable = new KnowledgeAssistantKnowledgeSourceFileTableOutputReference(this, "file_table");
  public get fileTable() {
    return this._fileTable;
  }
  public putFileTable(value: KnowledgeAssistantKnowledgeSourceFileTable) {
    this._fileTable.internalValue = value;
  }
  public resetFileTable() {
    this._fileTable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileTableInput() {
    return this._fileTable.internalValue;
  }

  // files - computed: false, optional: true, required: false
  private _files = new KnowledgeAssistantKnowledgeSourceFilesOutputReference(this, "files");
  public get files() {
    return this._files;
  }
  public putFiles(value: KnowledgeAssistantKnowledgeSourceFiles) {
    this._files.internalValue = value;
  }
  public resetFiles() {
    this._files.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesInput() {
    return this._files.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // index - computed: false, optional: true, required: false
  private _index = new KnowledgeAssistantKnowledgeSourceIndexOutputReference(this, "index");
  public get index() {
    return this._index;
  }
  public putIndex(value: KnowledgeAssistantKnowledgeSourceIndex) {
    this._index.internalValue = value;
  }
  public resetIndex() {
    this._index.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index.internalValue;
  }

  // knowledge_cutoff_time - computed: true, optional: false, required: false
  public get knowledgeCutoffTime() {
    return this.getStringAttribute('knowledge_cutoff_time');
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

  // provider_config - computed: false, optional: true, required: false
  private _providerConfig = new KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: KnowledgeAssistantKnowledgeSourceProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // source_type - computed: false, optional: false, required: true
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktn.stringToTerraform(this._description),
      display_name: cdktn.stringToTerraform(this._displayName),
      file_table: knowledgeAssistantKnowledgeSourceFileTableToTerraform(this._fileTable.internalValue),
      files: knowledgeAssistantKnowledgeSourceFilesToTerraform(this._files.internalValue),
      index: knowledgeAssistantKnowledgeSourceIndexToTerraform(this._index.internalValue),
      parent: cdktn.stringToTerraform(this._parent),
      provider_config: knowledgeAssistantKnowledgeSourceProviderConfigToTerraform(this._providerConfig.internalValue),
      source_type: cdktn.stringToTerraform(this._sourceType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktn.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_table: {
        value: knowledgeAssistantKnowledgeSourceFileTableToHclTerraform(this._fileTable.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KnowledgeAssistantKnowledgeSourceFileTable",
      },
      files: {
        value: knowledgeAssistantKnowledgeSourceFilesToHclTerraform(this._files.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KnowledgeAssistantKnowledgeSourceFiles",
      },
      index: {
        value: knowledgeAssistantKnowledgeSourceIndexToHclTerraform(this._index.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KnowledgeAssistantKnowledgeSourceIndex",
      },
      parent: {
        value: cdktn.stringToHclTerraform(this._parent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_config: {
        value: knowledgeAssistantKnowledgeSourceProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KnowledgeAssistantKnowledgeSourceProviderConfig",
      },
      source_type: {
        value: cdktn.stringToHclTerraform(this._sourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
