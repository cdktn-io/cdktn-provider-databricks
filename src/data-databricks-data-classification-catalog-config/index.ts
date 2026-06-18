/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_classification_catalog_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataDatabricksDataClassificationCatalogConfigConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_classification_catalog_config#name DataDatabricksDataClassificationCatalogConfig#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_classification_catalog_config#provider_config DataDatabricksDataClassificationCatalogConfig#provider_config}
  */
  readonly providerConfig?: DataDatabricksDataClassificationCatalogConfigProviderConfig;
}
export interface DataDatabricksDataClassificationCatalogConfigAutoTagConfigs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_classification_catalog_config#auto_tagging_mode DataDatabricksDataClassificationCatalogConfig#auto_tagging_mode}
  */
  readonly autoTaggingMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_classification_catalog_config#classification_tag DataDatabricksDataClassificationCatalogConfig#classification_tag}
  */
  readonly classificationTag: string;
}

export function dataDatabricksDataClassificationCatalogConfigAutoTagConfigsToTerraform(struct?: DataDatabricksDataClassificationCatalogConfigAutoTagConfigs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auto_tagging_mode: cdktn.stringToTerraform(struct!.autoTaggingMode),
    classification_tag: cdktn.stringToTerraform(struct!.classificationTag),
  }
}


export function dataDatabricksDataClassificationCatalogConfigAutoTagConfigsToHclTerraform(struct?: DataDatabricksDataClassificationCatalogConfigAutoTagConfigs): any {
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

export class DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksDataClassificationCatalogConfigAutoTagConfigs | undefined {
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

  public set internalValue(value: DataDatabricksDataClassificationCatalogConfigAutoTagConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoTaggingMode = undefined;
      this._classificationTag = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoTaggingMode = value.autoTaggingMode;
      this._classificationTag = value.classificationTag;
    }
  }

  // auto_tagging_mode - computed: true, optional: false, required: true
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

  // classification_tag - computed: true, optional: false, required: true
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

export class DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksDataClassificationCatalogConfigAutoTagConfigs[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference {
    return new DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksDataClassificationCatalogConfigIncludedSchemas {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_classification_catalog_config#names DataDatabricksDataClassificationCatalogConfig#names}
  */
  readonly names: string[];
}

export function dataDatabricksDataClassificationCatalogConfigIncludedSchemasToTerraform(struct?: DataDatabricksDataClassificationCatalogConfigIncludedSchemas): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.names),
  }
}


export function dataDatabricksDataClassificationCatalogConfigIncludedSchemasToHclTerraform(struct?: DataDatabricksDataClassificationCatalogConfigIncludedSchemas): any {
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

export class DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksDataClassificationCatalogConfigIncludedSchemas | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._names !== undefined) {
      hasAnyValues = true;
      internalValueResult.names = this._names;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksDataClassificationCatalogConfigIncludedSchemas | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._names = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._names = value.names;
    }
  }

  // names - computed: true, optional: false, required: true
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
export interface DataDatabricksDataClassificationCatalogConfigProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_classification_catalog_config#workspace_id DataDatabricksDataClassificationCatalogConfig#workspace_id}
  */
  readonly workspaceId?: string;
}

export function dataDatabricksDataClassificationCatalogConfigProviderConfigToTerraform(struct?: DataDatabricksDataClassificationCatalogConfigProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function dataDatabricksDataClassificationCatalogConfigProviderConfigToHclTerraform(struct?: DataDatabricksDataClassificationCatalogConfigProviderConfig | cdktn.IResolvable): any {
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

export class DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksDataClassificationCatalogConfigProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksDataClassificationCatalogConfigProviderConfig | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_classification_catalog_config databricks_data_classification_catalog_config}
*/
export class DataDatabricksDataClassificationCatalogConfig extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_data_classification_catalog_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataDatabricksDataClassificationCatalogConfig resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksDataClassificationCatalogConfig to import
  * @param importFromId The id of the existing DataDatabricksDataClassificationCatalogConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_classification_catalog_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksDataClassificationCatalogConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_data_classification_catalog_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_classification_catalog_config databricks_data_classification_catalog_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksDataClassificationCatalogConfigConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksDataClassificationCatalogConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_data_classification_catalog_config',
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
    this._name = config.name;
    this._providerConfig.internalValue = config.providerConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_tag_configs - computed: true, optional: false, required: false
  private _autoTagConfigs = new DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList(this, "auto_tag_configs", false);
  public get autoTagConfigs() {
    return this._autoTagConfigs;
  }

  // included_schemas - computed: true, optional: false, required: false
  private _includedSchemas = new DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference(this, "included_schemas");
  public get includedSchemas() {
    return this._includedSchemas;
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

  // provider_config - computed: false, optional: true, required: false
  private _providerConfig = new DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataDatabricksDataClassificationCatalogConfigProviderConfig) {
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
      name: cdktn.stringToTerraform(this._name),
      provider_config: dataDatabricksDataClassificationCatalogConfigProviderConfigToTerraform(this._providerConfig.internalValue),
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
        value: dataDatabricksDataClassificationCatalogConfigProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataDatabricksDataClassificationCatalogConfigProviderConfig",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
