/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/metastore_assignment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface MetastoreAssignmentConfig extends cdktn.TerraformMetaArguments {
  /**
  * Specifies whether to use account-level or workspace-level API. Valid values are `account` and `workspace`. When not set, the API level is inferred from the provider host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/metastore_assignment#api MetastoreAssignment#api}
  */
  readonly api?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/metastore_assignment#default_catalog_name MetastoreAssignment#default_catalog_name}
  */
  readonly defaultCatalogName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/metastore_assignment#id MetastoreAssignment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/metastore_assignment#metastore_id MetastoreAssignment#metastore_id}
  */
  readonly metastoreId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/metastore_assignment#workspace_id MetastoreAssignment#workspace_id}
  */
  readonly workspaceId: number;
  /**
  * provider_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/metastore_assignment#provider_config MetastoreAssignment#provider_config}
  */
  readonly providerConfig?: MetastoreAssignmentProviderConfig;
}
export interface MetastoreAssignmentProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/metastore_assignment#workspace_id MetastoreAssignment#workspace_id}
  */
  readonly workspaceId: string;
}

export function metastoreAssignmentProviderConfigToTerraform(struct?: MetastoreAssignmentProviderConfigOutputReference | MetastoreAssignmentProviderConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function metastoreAssignmentProviderConfigToHclTerraform(struct?: MetastoreAssignmentProviderConfigOutputReference | MetastoreAssignmentProviderConfig): any {
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

export class MetastoreAssignmentProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MetastoreAssignmentProviderConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceId = this._workspaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetastoreAssignmentProviderConfig | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/metastore_assignment databricks_metastore_assignment}
*/
export class MetastoreAssignment extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_metastore_assignment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a MetastoreAssignment resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MetastoreAssignment to import
  * @param importFromId The id of the existing MetastoreAssignment that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/metastore_assignment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MetastoreAssignment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_metastore_assignment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/metastore_assignment databricks_metastore_assignment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MetastoreAssignmentConfig
  */
  public constructor(scope: Construct, id: string, config: MetastoreAssignmentConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_metastore_assignment',
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
    this._api = config.api;
    this._defaultCatalogName = config.defaultCatalogName;
    this._id = config.id;
    this._metastoreId = config.metastoreId;
    this._workspaceId = config.workspaceId;
    this._providerConfig.internalValue = config.providerConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api - computed: false, optional: true, required: false
  private _api?: string; 
  public get api() {
    return this.getStringAttribute('api');
  }
  public set api(value: string) {
    this._api = value;
  }
  public resetApi() {
    this._api = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiInput() {
    return this._api;
  }

  // default_catalog_name - computed: true, optional: true, required: false
  private _defaultCatalogName?: string; 
  public get defaultCatalogName() {
    return this.getStringAttribute('default_catalog_name');
  }
  public set defaultCatalogName(value: string) {
    this._defaultCatalogName = value;
  }
  public resetDefaultCatalogName() {
    this._defaultCatalogName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCatalogNameInput() {
    return this._defaultCatalogName;
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

  // metastore_id - computed: false, optional: false, required: true
  private _metastoreId?: string; 
  public get metastoreId() {
    return this.getStringAttribute('metastore_id');
  }
  public set metastoreId(value: string) {
    this._metastoreId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metastoreIdInput() {
    return this._metastoreId;
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: number; 
  public get workspaceId() {
    return this.getNumberAttribute('workspace_id');
  }
  public set workspaceId(value: number) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // provider_config - computed: false, optional: true, required: false
  private _providerConfig = new MetastoreAssignmentProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: MetastoreAssignmentProviderConfig) {
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
      api: cdktn.stringToTerraform(this._api),
      default_catalog_name: cdktn.stringToTerraform(this._defaultCatalogName),
      id: cdktn.stringToTerraform(this._id),
      metastore_id: cdktn.stringToTerraform(this._metastoreId),
      workspace_id: cdktn.numberToTerraform(this._workspaceId),
      provider_config: metastoreAssignmentProviderConfigToTerraform(this._providerConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api: {
        value: cdktn.stringToHclTerraform(this._api),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_catalog_name: {
        value: cdktn.stringToHclTerraform(this._defaultCatalogName),
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
      metastore_id: {
        value: cdktn.stringToHclTerraform(this._metastoreId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspace_id: {
        value: cdktn.numberToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      provider_config: {
        value: metastoreAssignmentProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MetastoreAssignmentProviderConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
