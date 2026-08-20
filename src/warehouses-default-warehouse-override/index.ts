/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/warehouses_default_warehouse_override
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface WarehousesDefaultWarehouseOverrideConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/warehouses_default_warehouse_override#default_warehouse_override_id WarehousesDefaultWarehouseOverride#default_warehouse_override_id}
  */
  readonly defaultWarehouseOverrideId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/warehouses_default_warehouse_override#provider_config WarehousesDefaultWarehouseOverride#provider_config}
  */
  readonly providerConfig?: WarehousesDefaultWarehouseOverrideProviderConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/warehouses_default_warehouse_override#type WarehousesDefaultWarehouseOverride#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/warehouses_default_warehouse_override#warehouse_id WarehousesDefaultWarehouseOverride#warehouse_id}
  */
  readonly warehouseId?: string;
}
export interface WarehousesDefaultWarehouseOverrideProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/warehouses_default_warehouse_override#workspace_id WarehousesDefaultWarehouseOverride#workspace_id}
  */
  readonly workspaceId?: string;
}

export function warehousesDefaultWarehouseOverrideProviderConfigToTerraform(struct?: WarehousesDefaultWarehouseOverrideProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function warehousesDefaultWarehouseOverrideProviderConfigToHclTerraform(struct?: WarehousesDefaultWarehouseOverrideProviderConfig | cdktn.IResolvable): any {
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

export class WarehousesDefaultWarehouseOverrideProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WarehousesDefaultWarehouseOverrideProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WarehousesDefaultWarehouseOverrideProviderConfig | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/warehouses_default_warehouse_override databricks_warehouses_default_warehouse_override}
*/
export class WarehousesDefaultWarehouseOverride extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_warehouses_default_warehouse_override";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a WarehousesDefaultWarehouseOverride resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WarehousesDefaultWarehouseOverride to import
  * @param importFromId The id of the existing WarehousesDefaultWarehouseOverride that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/warehouses_default_warehouse_override#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WarehousesDefaultWarehouseOverride to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_warehouses_default_warehouse_override", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/warehouses_default_warehouse_override databricks_warehouses_default_warehouse_override} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WarehousesDefaultWarehouseOverrideConfig
  */
  public constructor(scope: Construct, id: string, config: WarehousesDefaultWarehouseOverrideConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_warehouses_default_warehouse_override',
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
    this._defaultWarehouseOverrideId = config.defaultWarehouseOverrideId;
    this._providerConfig.internalValue = config.providerConfig;
    this._type = config.type;
    this._warehouseId = config.warehouseId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_warehouse_override_id - computed: false, optional: false, required: true
  private _defaultWarehouseOverrideId?: string; 
  public get defaultWarehouseOverrideId() {
    return this.getStringAttribute('default_warehouse_override_id');
  }
  public set defaultWarehouseOverrideId(value: string) {
    this._defaultWarehouseOverrideId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultWarehouseOverrideIdInput() {
    return this._defaultWarehouseOverrideId;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // provider_config - computed: true, optional: true, required: false
  private _providerConfig = new WarehousesDefaultWarehouseOverrideProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: WarehousesDefaultWarehouseOverrideProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // warehouse_id - computed: false, optional: true, required: false
  private _warehouseId?: string; 
  public get warehouseId() {
    return this.getStringAttribute('warehouse_id');
  }
  public set warehouseId(value: string) {
    this._warehouseId = value;
  }
  public resetWarehouseId() {
    this._warehouseId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warehouseIdInput() {
    return this._warehouseId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_warehouse_override_id: cdktn.stringToTerraform(this._defaultWarehouseOverrideId),
      provider_config: warehousesDefaultWarehouseOverrideProviderConfigToTerraform(this._providerConfig.internalValue),
      type: cdktn.stringToTerraform(this._type),
      warehouse_id: cdktn.stringToTerraform(this._warehouseId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_warehouse_override_id: {
        value: cdktn.stringToHclTerraform(this._defaultWarehouseOverrideId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_config: {
        value: warehousesDefaultWarehouseOverrideProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WarehousesDefaultWarehouseOverrideProviderConfig",
      },
      type: {
        value: cdktn.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      warehouse_id: {
        value: cdktn.stringToHclTerraform(this._warehouseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
