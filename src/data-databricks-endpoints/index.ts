/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/endpoints
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataDatabricksEndpointsConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/endpoints#page_size DataDatabricksEndpoints#page_size}
  */
  readonly pageSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/endpoints#parent DataDatabricksEndpoints#parent}
  */
  readonly parent: string;
}
export interface DataDatabricksEndpointsItemsAwsVpcEndpointInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/endpoints#aws_vpc_endpoint_id DataDatabricksEndpoints#aws_vpc_endpoint_id}
  */
  readonly awsVpcEndpointId: string;
}

export function dataDatabricksEndpointsItemsAwsVpcEndpointInfoToTerraform(struct?: DataDatabricksEndpointsItemsAwsVpcEndpointInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aws_vpc_endpoint_id: cdktn.stringToTerraform(struct!.awsVpcEndpointId),
  }
}


export function dataDatabricksEndpointsItemsAwsVpcEndpointInfoToHclTerraform(struct?: DataDatabricksEndpointsItemsAwsVpcEndpointInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    aws_vpc_endpoint_id: {
      value: cdktn.stringToHclTerraform(struct!.awsVpcEndpointId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksEndpointsItemsAwsVpcEndpointInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksEndpointsItemsAwsVpcEndpointInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsVpcEndpointId !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsVpcEndpointId = this._awsVpcEndpointId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksEndpointsItemsAwsVpcEndpointInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsVpcEndpointId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsVpcEndpointId = value.awsVpcEndpointId;
    }
  }

  // aws_account_id - computed: true, optional: false, required: false
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }

  // aws_endpoint_service_id - computed: true, optional: false, required: false
  public get awsEndpointServiceId() {
    return this.getStringAttribute('aws_endpoint_service_id');
  }

  // aws_vpc_endpoint_id - computed: true, optional: false, required: true
  private _awsVpcEndpointId?: string; 
  public get awsVpcEndpointId() {
    return this.getStringAttribute('aws_vpc_endpoint_id');
  }
  public set awsVpcEndpointId(value: string) {
    this._awsVpcEndpointId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsVpcEndpointIdInput() {
    return this._awsVpcEndpointId;
  }
}
export interface DataDatabricksEndpointsItemsAzurePrivateEndpointInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/endpoints#private_endpoint_name DataDatabricksEndpoints#private_endpoint_name}
  */
  readonly privateEndpointName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/endpoints#private_endpoint_resource_guid DataDatabricksEndpoints#private_endpoint_resource_guid}
  */
  readonly privateEndpointResourceGuid: string;
}

export function dataDatabricksEndpointsItemsAzurePrivateEndpointInfoToTerraform(struct?: DataDatabricksEndpointsItemsAzurePrivateEndpointInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    private_endpoint_name: cdktn.stringToTerraform(struct!.privateEndpointName),
    private_endpoint_resource_guid: cdktn.stringToTerraform(struct!.privateEndpointResourceGuid),
  }
}


export function dataDatabricksEndpointsItemsAzurePrivateEndpointInfoToHclTerraform(struct?: DataDatabricksEndpointsItemsAzurePrivateEndpointInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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
export interface DataDatabricksEndpointsItemsGcpPscEndpointInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/endpoints#endpoint_region DataDatabricksEndpoints#endpoint_region}
  */
  readonly endpointRegion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/endpoints#project_id DataDatabricksEndpoints#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/endpoints#psc_endpoint DataDatabricksEndpoints#psc_endpoint}
  */
  readonly pscEndpoint: string;
}

export function dataDatabricksEndpointsItemsGcpPscEndpointInfoToTerraform(struct?: DataDatabricksEndpointsItemsGcpPscEndpointInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    endpoint_region: cdktn.stringToTerraform(struct!.endpointRegion),
    project_id: cdktn.stringToTerraform(struct!.projectId),
    psc_endpoint: cdktn.stringToTerraform(struct!.pscEndpoint),
  }
}


export function dataDatabricksEndpointsItemsGcpPscEndpointInfoToHclTerraform(struct?: DataDatabricksEndpointsItemsGcpPscEndpointInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    endpoint_region: {
      value: cdktn.stringToHclTerraform(struct!.endpointRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktn.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    psc_endpoint: {
      value: cdktn.stringToHclTerraform(struct!.pscEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksEndpointsItemsGcpPscEndpointInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksEndpointsItemsGcpPscEndpointInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpointRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointRegion = this._endpointRegion;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._pscEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.pscEndpoint = this._pscEndpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksEndpointsItemsGcpPscEndpointInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endpointRegion = undefined;
      this._projectId = undefined;
      this._pscEndpoint = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endpointRegion = value.endpointRegion;
      this._projectId = value.projectId;
      this._pscEndpoint = value.pscEndpoint;
    }
  }

  // endpoint_region - computed: true, optional: false, required: true
  private _endpointRegion?: string; 
  public get endpointRegion() {
    return this.getStringAttribute('endpoint_region');
  }
  public set endpointRegion(value: string) {
    this._endpointRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointRegionInput() {
    return this._endpointRegion;
  }

  // project_id - computed: true, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // psc_connection_id - computed: true, optional: false, required: false
  public get pscConnectionId() {
    return this.getStringAttribute('psc_connection_id');
  }

  // psc_endpoint - computed: true, optional: false, required: true
  private _pscEndpoint?: string; 
  public get pscEndpoint() {
    return this.getStringAttribute('psc_endpoint');
  }
  public set pscEndpoint(value: string) {
    this._pscEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pscEndpointInput() {
    return this._pscEndpoint;
  }

  // service_attachment_id - computed: true, optional: false, required: false
  public get serviceAttachmentId() {
    return this.getStringAttribute('service_attachment_id');
  }
}
export interface DataDatabricksEndpointsItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/endpoints#name DataDatabricksEndpoints#name}
  */
  readonly name: string;
}

export function dataDatabricksEndpointsItemsToTerraform(struct?: DataDatabricksEndpointsItems): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function dataDatabricksEndpointsItemsToHclTerraform(struct?: DataDatabricksEndpointsItems): any {
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

  // aws_vpc_endpoint_info - computed: true, optional: false, required: false
  private _awsVpcEndpointInfo = new DataDatabricksEndpointsItemsAwsVpcEndpointInfoOutputReference(this, "aws_vpc_endpoint_info");
  public get awsVpcEndpointInfo() {
    return this._awsVpcEndpointInfo;
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

  // gcp_psc_endpoint_info - computed: true, optional: false, required: false
  private _gcpPscEndpointInfo = new DataDatabricksEndpointsItemsGcpPscEndpointInfoOutputReference(this, "gcp_psc_endpoint_info");
  public get gcpPscEndpointInfo() {
    return this._gcpPscEndpointInfo;
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
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatabricksEndpointsItemsOutputReference {
    return new DataDatabricksEndpointsItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/endpoints databricks_endpoints}
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
  * @param importFromId The id of the existing DataDatabricksEndpoints that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/endpoints#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksEndpoints to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_endpoints", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/endpoints databricks_endpoints} Data Source
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
        providerVersion: '1.127.0',
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
