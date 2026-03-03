/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/schema
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SchemaConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/schema#catalog_name Schema#catalog_name}
  */
  readonly catalogName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/schema#comment Schema#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/schema#enable_predictive_optimization Schema#enable_predictive_optimization}
  */
  readonly enablePredictiveOptimization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/schema#force_destroy Schema#force_destroy}
  */
  readonly forceDestroy?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/schema#id Schema#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/schema#metastore_id Schema#metastore_id}
  */
  readonly metastoreId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/schema#name Schema#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/schema#owner Schema#owner}
  */
  readonly owner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/schema#properties Schema#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/schema#storage_root Schema#storage_root}
  */
  readonly storageRoot?: string;
  /**
  * provider_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/schema#provider_config Schema#provider_config}
  */
  readonly providerConfig?: SchemaProviderConfig;
}
export interface SchemaProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/schema#workspace_id Schema#workspace_id}
  */
  readonly workspaceId: string;
}

export function schemaProviderConfigToTerraform(struct?: SchemaProviderConfigOutputReference | SchemaProviderConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function schemaProviderConfigToHclTerraform(struct?: SchemaProviderConfigOutputReference | SchemaProviderConfig): any {
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

export class SchemaProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SchemaProviderConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceId = this._workspaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchemaProviderConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._workspaceId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/schema databricks_schema}
*/
export class Schema extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_schema";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Schema resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Schema to import
  * @param importFromId The id of the existing Schema that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/schema#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Schema to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_schema", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/schema databricks_schema} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SchemaConfig
  */
  public constructor(scope: Construct, id: string, config: SchemaConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_schema',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.110.0',
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
    this._catalogName = config.catalogName;
    this._comment = config.comment;
    this._enablePredictiveOptimization = config.enablePredictiveOptimization;
    this._forceDestroy = config.forceDestroy;
    this._id = config.id;
    this._metastoreId = config.metastoreId;
    this._name = config.name;
    this._owner = config.owner;
    this._properties = config.properties;
    this._storageRoot = config.storageRoot;
    this._providerConfig.internalValue = config.providerConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // enable_predictive_optimization - computed: true, optional: true, required: false
  private _enablePredictiveOptimization?: string; 
  public get enablePredictiveOptimization() {
    return this.getStringAttribute('enable_predictive_optimization');
  }
  public set enablePredictiveOptimization(value: string) {
    this._enablePredictiveOptimization = value;
  }
  public resetEnablePredictiveOptimization() {
    this._enablePredictiveOptimization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePredictiveOptimizationInput() {
    return this._enablePredictiveOptimization;
  }

  // force_destroy - computed: false, optional: true, required: false
  private _forceDestroy?: boolean | cdktn.IResolvable; 
  public get forceDestroy() {
    return this.getBooleanAttribute('force_destroy');
  }
  public set forceDestroy(value: boolean | cdktn.IResolvable) {
    this._forceDestroy = value;
  }
  public resetForceDestroy() {
    this._forceDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDestroyInput() {
    return this._forceDestroy;
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

  // metastore_id - computed: true, optional: true, required: false
  private _metastoreId?: string; 
  public get metastoreId() {
    return this.getStringAttribute('metastore_id');
  }
  public set metastoreId(value: string) {
    this._metastoreId = value;
  }
  public resetMetastoreId() {
    this._metastoreId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metastoreIdInput() {
    return this._metastoreId;
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

  // owner - computed: true, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // properties - computed: false, optional: true, required: false
  private _properties?: { [key: string]: string }; 
  public get properties() {
    return this.getStringMapAttribute('properties');
  }
  public set properties(value: { [key: string]: string }) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }

  // schema_id - computed: true, optional: false, required: false
  public get schemaId() {
    return this.getStringAttribute('schema_id');
  }

  // storage_root - computed: false, optional: true, required: false
  private _storageRoot?: string; 
  public get storageRoot() {
    return this.getStringAttribute('storage_root');
  }
  public set storageRoot(value: string) {
    this._storageRoot = value;
  }
  public resetStorageRoot() {
    this._storageRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageRootInput() {
    return this._storageRoot;
  }

  // provider_config - computed: false, optional: true, required: false
  private _providerConfig = new SchemaProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: SchemaProviderConfig) {
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
      catalog_name: cdktn.stringToTerraform(this._catalogName),
      comment: cdktn.stringToTerraform(this._comment),
      enable_predictive_optimization: cdktn.stringToTerraform(this._enablePredictiveOptimization),
      force_destroy: cdktn.booleanToTerraform(this._forceDestroy),
      id: cdktn.stringToTerraform(this._id),
      metastore_id: cdktn.stringToTerraform(this._metastoreId),
      name: cdktn.stringToTerraform(this._name),
      owner: cdktn.stringToTerraform(this._owner),
      properties: cdktn.hashMapper(cdktn.stringToTerraform)(this._properties),
      storage_root: cdktn.stringToTerraform(this._storageRoot),
      provider_config: schemaProviderConfigToTerraform(this._providerConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      catalog_name: {
        value: cdktn.stringToHclTerraform(this._catalogName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktn.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_predictive_optimization: {
        value: cdktn.stringToHclTerraform(this._enablePredictiveOptimization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_destroy: {
        value: cdktn.booleanToHclTerraform(this._forceDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metastore_id: {
        value: cdktn.stringToHclTerraform(this._metastoreId),
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
      owner: {
        value: cdktn.stringToHclTerraform(this._owner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      properties: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._properties),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      storage_root: {
        value: cdktn.stringToHclTerraform(this._storageRoot),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_config: {
        value: schemaProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SchemaProviderConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
