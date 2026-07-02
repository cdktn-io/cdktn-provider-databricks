/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/warehouses_default_warehouse_overrides
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataDatabricksWarehousesDefaultWarehouseOverridesConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/warehouses_default_warehouse_overrides#page_size DataDatabricksWarehousesDefaultWarehouseOverrides#page_size}
  */
  readonly pageSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/warehouses_default_warehouse_overrides#provider_config DataDatabricksWarehousesDefaultWarehouseOverrides#provider_config}
  */
  readonly providerConfig?: DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig;
}
export interface DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/warehouses_default_warehouse_overrides#workspace_id DataDatabricksWarehousesDefaultWarehouseOverrides#workspace_id}
  */
  readonly workspaceId?: string;
}

export function dataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigToTerraform(struct?: DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function dataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigToHclTerraform(struct?: DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig | cdktn.IResolvable): any {
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

export class DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/warehouses_default_warehouse_overrides#name DataDatabricksWarehousesDefaultWarehouseOverrides#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/warehouses_default_warehouse_overrides#provider_config DataDatabricksWarehousesDefaultWarehouseOverrides#provider_config}
  */
  readonly providerConfig?: DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig;
}

export function dataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesToTerraform(struct?: DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    provider_config: dataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigToTerraform(struct!.providerConfig),
  }
}


export function dataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesToHclTerraform(struct?: DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides): any {
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
      value: dataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigToHclTerraform(struct!.providerConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides | undefined {
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

  public set internalValue(value: DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides | undefined) {
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

  // default_warehouse_override_id - computed: true, optional: false, required: false
  public get defaultWarehouseOverrideId() {
    return this.getStringAttribute('default_warehouse_override_id');
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
  private _providerConfig = new DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // warehouse_id - computed: true, optional: false, required: false
  public get warehouseId() {
    return this.getStringAttribute('warehouse_id');
  }
}

export class DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference {
    return new DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/warehouses_default_warehouse_overrides#workspace_id DataDatabricksWarehousesDefaultWarehouseOverrides#workspace_id}
  */
  readonly workspaceId?: string;
}

export function dataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigToTerraform(struct?: DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function dataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigToHclTerraform(struct?: DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig | cdktn.IResolvable): any {
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

export class DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/warehouses_default_warehouse_overrides databricks_warehouses_default_warehouse_overrides}
*/
export class DataDatabricksWarehousesDefaultWarehouseOverrides extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_warehouses_default_warehouse_overrides";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataDatabricksWarehousesDefaultWarehouseOverrides resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksWarehousesDefaultWarehouseOverrides to import
  * @param importFromId The id of the existing DataDatabricksWarehousesDefaultWarehouseOverrides that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/warehouses_default_warehouse_overrides#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksWarehousesDefaultWarehouseOverrides to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_warehouses_default_warehouse_overrides", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/warehouses_default_warehouse_overrides databricks_warehouses_default_warehouse_overrides} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksWarehousesDefaultWarehouseOverridesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksWarehousesDefaultWarehouseOverridesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_warehouses_default_warehouse_overrides',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.120.0',
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
    this._providerConfig.internalValue = config.providerConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_warehouse_overrides - computed: true, optional: false, required: false
  private _defaultWarehouseOverrides = new DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList(this, "default_warehouse_overrides", false);
  public get defaultWarehouseOverrides() {
    return this._defaultWarehouseOverrides;
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

  // provider_config - computed: false, optional: true, required: false
  private _providerConfig = new DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig) {
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
      provider_config: dataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigToTerraform(this._providerConfig.internalValue),
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
      provider_config: {
        value: dataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
