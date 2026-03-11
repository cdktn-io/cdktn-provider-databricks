/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/endpoints
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataDatabricksEndpointsConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/endpoints#page_size DataDatabricksEndpoints#page_size}
  */
  readonly pageSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/endpoints#parent DataDatabricksEndpoints#parent}
  */
  readonly parent: string;
}
export interface DataDatabricksEndpointsItemsAzurePrivateEndpointInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/endpoints#private_endpoint_name DataDatabricksEndpoints#private_endpoint_name}
  */
  readonly privateEndpointName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/endpoints#private_endpoint_resource_guid DataDatabricksEndpoints#private_endpoint_resource_guid}
  */
  readonly privateEndpointResourceGuid: string;
}

export function dataDatabricksEndpointsItemsAzurePrivateEndpointInfoToTerraform(struct?: DataDatabricksEndpointsItemsAzurePrivateEndpointInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    private_endpoint_name: cdktn.stringToTerraform(struct!.privateEndpointName),
    private_endpoint_resource_guid: cdktn.stringToTerraform(struct!.privateEndpointResourceGuid),
  }
}


export function dataDatabricksEndpointsItemsAzurePrivateEndpointInfoToHclTerraform(struct?: DataDatabricksEndpointsItemsAzurePrivateEndpointInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    private_endpoint_name: {
      value: cdktn.stringToHclTerraform(struct!.privateEndpointName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_endpoint_resource_guid: {
      value: cdktn.stringToHclTerraform(struct!.privateEndpointResourceGuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksEndpointsItemsAzurePrivateEndpointInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksEndpointsItemsAzurePrivateEndpointInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._privateEndpointName !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateEndpointName = this._privateEndpointName;
    }
    if (this._privateEndpointResourceGuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateEndpointResourceGuid = this._privateEndpointResourceGuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksEndpointsItemsAzurePrivateEndpointInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._privateEndpointName = undefined;
      this._privateEndpointResourceGuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._privateEndpointName = value.privateEndpointName;
      this._privateEndpointResourceGuid = value.privateEndpointResourceGuid;
    }
  }

  // private_endpoint_name - computed: true, optional: false, required: true
  private _privateEndpointName?: string; 
  public get privateEndpointName() {
    return this.getStringAttribute('private_endpoint_name');
  }
  public set privateEndpointName(value: string) {
    this._privateEndpointName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateEndpointNameInput() {
    return this._privateEndpointName;
  }

  // private_endpoint_resource_guid - computed: true, optional: false, required: true
  private _privateEndpointResourceGuid?: string; 
  public get privateEndpointResourceGuid() {
    return this.getStringAttribute('private_endpoint_resource_guid');
  }
  public set privateEndpointResourceGuid(value: string) {
    this._privateEndpointResourceGuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateEndpointResourceGuidInput() {
    return this._privateEndpointResourceGuid;
  }

  // private_endpoint_resource_id - computed: true, optional: false, required: false
  public get privateEndpointResourceId() {
    return this.getStringAttribute('private_endpoint_resource_id');
  }

  // private_link_service_id - computed: true, optional: false, required: false
  public get privateLinkServiceId() {
    return this.getStringAttribute('private_link_service_id');
  }
}
export interface DataDatabricksEndpointsItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/endpoints#name DataDatabricksEndpoints#name}
  */
  readonly name: string;
}

export function dataDatabricksEndpointsItemsToTerraform(struct?: DataDatabricksEndpointsItems): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function dataDatabricksEndpointsItemsToHclTerraform(struct?: DataDatabricksEndpointsItems): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataDatabricksEndpointsItemsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksEndpointsItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksEndpointsItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
  }

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // azure_private_endpoint_info - computed: true, optional: false, required: false
  private _azurePrivateEndpointInfo = new DataDatabricksEndpointsItemsAzurePrivateEndpointInfoOutputReference(this, "azure_private_endpoint_info");
  public get azurePrivateEndpointInfo() {
    return this._azurePrivateEndpointInfo;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // endpoint_id - computed: true, optional: false, required: false
  public get endpointId() {
    return this.getStringAttribute('endpoint_id');
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

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // use_case - computed: true, optional: false, required: false
  public get useCase() {
    return this.getStringAttribute('use_case');
  }
}

export class DataDatabricksEndpointsItemsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksEndpointsItems[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatabricksEndpointsItemsOutputReference {
    return new DataDatabricksEndpointsItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/endpoints databricks_endpoints}
*/
export class DataDatabricksEndpoints extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_endpoints";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataDatabricksEndpoints resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksEndpoints to import
  * @param importFromId The id of the existing DataDatabricksEndpoints that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/endpoints#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksEndpoints to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_endpoints", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/endpoints databricks_endpoints} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksEndpointsConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksEndpointsConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_endpoints',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.111.0',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // items - computed: true, optional: false, required: false
  private _items = new DataDatabricksEndpointsItemsList(this, "items", false);
  public get items() {
    return this._items;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      page_size: cdktn.numberToTerraform(this._pageSize),
      parent: cdktn.stringToTerraform(this._parent),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
