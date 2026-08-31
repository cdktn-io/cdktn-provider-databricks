/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/data_classification_catalog_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataClassificationCatalogConfigConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/data_classification_catalog_config#auto_tag_configs DataClassificationCatalogConfig#auto_tag_configs}
  */
  readonly autoTagConfigs?: DataClassificationCatalogConfigAutoTagConfigs[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/data_classification_catalog_config#excluded_schemas DataClassificationCatalogConfig#excluded_schemas}
  */
  readonly excludedSchemas?: DataClassificationCatalogConfigExcludedSchemas;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/data_classification_catalog_config#included_schemas DataClassificationCatalogConfig#included_schemas}
  */
  readonly includedSchemas?: DataClassificationCatalogConfigIncludedSchemas;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/data_classification_catalog_config#parent DataClassificationCatalogConfig#parent}
  */
  readonly parent: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/data_classification_catalog_config#provider_config DataClassificationCatalogConfig#provider_config}
  */
  readonly providerConfig?: DataClassificationCatalogConfigProviderConfig;
}
export interface DataClassificationCatalogConfigAutoTagConfigs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/data_classification_catalog_config#auto_tagging_mode DataClassificationCatalogConfig#auto_tagging_mode}
  */
  readonly autoTaggingMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/data_classification_catalog_config#classification_tag DataClassificationCatalogConfig#classification_tag}
  */
  readonly classificationTag: string;
}

export function dataClassificationCatalogConfigAutoTagConfigsToTerraform(struct?: DataClassificationCatalogConfigAutoTagConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auto_tagging_mode: cdktn.stringToTerraform(struct!.autoTaggingMode),
    classification_tag: cdktn.stringToTerraform(struct!.classificationTag),
  }
}


export function dataClassificationCatalogConfigAutoTagConfigsToHclTerraform(struct?: DataClassificationCatalogConfigAutoTagConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auto_tagging_mode: {
      value: cdktn.stringToHclTerraform(struct!.autoTaggingMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    classification_tag: {
      value: cdktn.stringToHclTerraform(struct!.classificationTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataClassificationCatalogConfigAutoTagConfigsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataClassificationCatalogConfigAutoTagConfigs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoTaggingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoTaggingMode = this._autoTaggingMode;
    }
    if (this._classificationTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.classificationTag = this._classificationTag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataClassificationCatalogConfigAutoTagConfigs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoTaggingMode = undefined;
      this._classificationTag = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoTaggingMode = value.autoTaggingMode;
      this._classificationTag = value.classificationTag;
    }
  }

  // auto_tagging_mode - computed: false, optional: false, required: true
  private _autoTaggingMode?: string; 
  public get autoTaggingMode() {
    return this.getStringAttribute('auto_tagging_mode');
  }
  public set autoTaggingMode(value: string) {
    this._autoTaggingMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoTaggingModeInput() {
    return this._autoTaggingMode;
  }

  // classification_tag - computed: false, optional: false, required: true
  private _classificationTag?: string; 
  public get classificationTag() {
    return this.getStringAttribute('classification_tag');
  }
  public set classificationTag(value: string) {
    this._classificationTag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get classificationTagInput() {
    return this._classificationTag;
  }
}

export class DataClassificationCatalogConfigAutoTagConfigsList extends cdktn.ComplexList {
  public internalValue? : DataClassificationCatalogConfigAutoTagConfigs[] | cdktn.IResolvable

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
  public get(index: number): DataClassificationCatalogConfigAutoTagConfigsOutputReference {
    return new DataClassificationCatalogConfigAutoTagConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataClassificationCatalogConfigExcludedSchemas {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/data_classification_catalog_config#names DataClassificationCatalogConfig#names}
  */
  readonly names: string[];
}

export function dataClassificationCatalogConfigExcludedSchemasToTerraform(struct?: DataClassificationCatalogConfigExcludedSchemas | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.names),
  }
}


export function dataClassificationCatalogConfigExcludedSchemasToHclTerraform(struct?: DataClassificationCatalogConfigExcludedSchemas | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.names),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataClassificationCatalogConfigExcludedSchemasOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataClassificationCatalogConfigExcludedSchemas | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._names !== undefined) {
      hasAnyValues = true;
      internalValueResult.names = this._names;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataClassificationCatalogConfigExcludedSchemas | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._names = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._names = value.names;
    }
  }

  // names - computed: false, optional: false, required: true
  private _names?: string[]; 
  public get names() {
    return this.getListAttribute('names');
  }
  public set names(value: string[]) {
    this._names = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namesInput() {
    return this._names;
  }
}
export interface DataClassificationCatalogConfigIncludedSchemas {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/data_classification_catalog_config#names DataClassificationCatalogConfig#names}
  */
  readonly names: string[];
}

export function dataClassificationCatalogConfigIncludedSchemasToTerraform(struct?: DataClassificationCatalogConfigIncludedSchemas | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.names),
  }
}


export function dataClassificationCatalogConfigIncludedSchemasToHclTerraform(struct?: DataClassificationCatalogConfigIncludedSchemas | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.names),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataClassificationCatalogConfigIncludedSchemasOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataClassificationCatalogConfigIncludedSchemas | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._names !== undefined) {
      hasAnyValues = true;
      internalValueResult.names = this._names;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataClassificationCatalogConfigIncludedSchemas | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._names = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._names = value.names;
    }
  }

  // names - computed: false, optional: false, required: true
  private _names?: string[]; 
  public get names() {
    return this.getListAttribute('names');
  }
  public set names(value: string[]) {
    this._names = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namesInput() {
    return this._names;
  }
}
export interface DataClassificationCatalogConfigProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/data_classification_catalog_config#workspace_id DataClassificationCatalogConfig#workspace_id}
  */
  readonly workspaceId?: string;
}

export function dataClassificationCatalogConfigProviderConfigToTerraform(struct?: DataClassificationCatalogConfigProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function dataClassificationCatalogConfigProviderConfigToHclTerraform(struct?: DataClassificationCatalogConfigProviderConfig | cdktn.IResolvable): any {
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

export class DataClassificationCatalogConfigProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataClassificationCatalogConfigProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataClassificationCatalogConfigProviderConfig | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/data_classification_catalog_config databricks_data_classification_catalog_config}
*/
export class DataClassificationCatalogConfig extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_data_classification_catalog_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataClassificationCatalogConfig resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataClassificationCatalogConfig to import
  * @param importFromId The id of the existing DataClassificationCatalogConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/data_classification_catalog_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataClassificationCatalogConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_data_classification_catalog_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/data_classification_catalog_config databricks_data_classification_catalog_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataClassificationCatalogConfigConfig
  */
  public constructor(scope: Construct, id: string, config: DataClassificationCatalogConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_data_classification_catalog_config',
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
    this._autoTagConfigs.internalValue = config.autoTagConfigs;
    this._excludedSchemas.internalValue = config.excludedSchemas;
    this._includedSchemas.internalValue = config.includedSchemas;
    this._parent = config.parent;
    this._providerConfig.internalValue = config.providerConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_tag_configs - computed: false, optional: true, required: false
  private _autoTagConfigs = new DataClassificationCatalogConfigAutoTagConfigsList(this, "auto_tag_configs", false);
  public get autoTagConfigs() {
    return this._autoTagConfigs;
  }
  public putAutoTagConfigs(value: DataClassificationCatalogConfigAutoTagConfigs[] | cdktn.IResolvable) {
    this._autoTagConfigs.internalValue = value;
  }
  public resetAutoTagConfigs() {
    this._autoTagConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoTagConfigsInput() {
    return this._autoTagConfigs.internalValue;
  }

  // excluded_schemas - computed: false, optional: true, required: false
  private _excludedSchemas = new DataClassificationCatalogConfigExcludedSchemasOutputReference(this, "excluded_schemas");
  public get excludedSchemas() {
    return this._excludedSchemas;
  }
  public putExcludedSchemas(value: DataClassificationCatalogConfigExcludedSchemas) {
    this._excludedSchemas.internalValue = value;
  }
  public resetExcludedSchemas() {
    this._excludedSchemas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedSchemasInput() {
    return this._excludedSchemas.internalValue;
  }

  // included_schemas - computed: false, optional: true, required: false
  private _includedSchemas = new DataClassificationCatalogConfigIncludedSchemasOutputReference(this, "included_schemas");
  public get includedSchemas() {
    return this._includedSchemas;
  }
  public putIncludedSchemas(value: DataClassificationCatalogConfigIncludedSchemas) {
    this._includedSchemas.internalValue = value;
  }
  public resetIncludedSchemas() {
    this._includedSchemas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedSchemasInput() {
    return this._includedSchemas.internalValue;
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

  // provider_config - computed: true, optional: true, required: false
  private _providerConfig = new DataClassificationCatalogConfigProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataClassificationCatalogConfigProviderConfig) {
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
      auto_tag_configs: cdktn.listMapper(dataClassificationCatalogConfigAutoTagConfigsToTerraform, false)(this._autoTagConfigs.internalValue),
      excluded_schemas: dataClassificationCatalogConfigExcludedSchemasToTerraform(this._excludedSchemas.internalValue),
      included_schemas: dataClassificationCatalogConfigIncludedSchemasToTerraform(this._includedSchemas.internalValue),
      parent: cdktn.stringToTerraform(this._parent),
      provider_config: dataClassificationCatalogConfigProviderConfigToTerraform(this._providerConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_tag_configs: {
        value: cdktn.listMapperHcl(dataClassificationCatalogConfigAutoTagConfigsToHclTerraform, false)(this._autoTagConfigs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataClassificationCatalogConfigAutoTagConfigsList",
      },
      excluded_schemas: {
        value: dataClassificationCatalogConfigExcludedSchemasToHclTerraform(this._excludedSchemas.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataClassificationCatalogConfigExcludedSchemas",
      },
      included_schemas: {
        value: dataClassificationCatalogConfigIncludedSchemasToHclTerraform(this._includedSchemas.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataClassificationCatalogConfigIncludedSchemas",
      },
      parent: {
        value: cdktn.stringToHclTerraform(this._parent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_config: {
        value: dataClassificationCatalogConfigProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataClassificationCatalogConfigProviderConfig",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
