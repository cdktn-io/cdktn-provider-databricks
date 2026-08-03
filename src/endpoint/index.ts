/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface EndpointConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/endpoint#aws_vpc_endpoint_info Endpoint#aws_vpc_endpoint_info}
  */
  readonly awsVpcEndpointInfo?: EndpointAwsVpcEndpointInfo;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/endpoint#azure_private_endpoint_info Endpoint#azure_private_endpoint_info}
  */
  readonly azurePrivateEndpointInfo?: EndpointAzurePrivateEndpointInfo;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/endpoint#display_name Endpoint#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/endpoint#gcp_psc_endpoint_info Endpoint#gcp_psc_endpoint_info}
  */
  readonly gcpPscEndpointInfo?: EndpointGcpPscEndpointInfo;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/endpoint#parent Endpoint#parent}
  */
  readonly parent: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/endpoint#region Endpoint#region}
  */
  readonly region: string;
}
export interface EndpointAwsVpcEndpointInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/endpoint#aws_vpc_endpoint_id Endpoint#aws_vpc_endpoint_id}
  */
  readonly awsVpcEndpointId: string;
}

export function endpointAwsVpcEndpointInfoToTerraform(struct?: EndpointAwsVpcEndpointInfo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aws_vpc_endpoint_id: cdktn.stringToTerraform(struct!.awsVpcEndpointId),
  }
}


export function endpointAwsVpcEndpointInfoToHclTerraform(struct?: EndpointAwsVpcEndpointInfo | cdktn.IResolvable): any {
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

export class EndpointAwsVpcEndpointInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EndpointAwsVpcEndpointInfo | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsVpcEndpointId !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsVpcEndpointId = this._awsVpcEndpointId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EndpointAwsVpcEndpointInfo | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsVpcEndpointId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

  // aws_vpc_endpoint_id - computed: false, optional: false, required: true
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
export interface EndpointAzurePrivateEndpointInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/endpoint#private_endpoint_name Endpoint#private_endpoint_name}
  */
  readonly privateEndpointName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/endpoint#private_endpoint_resource_guid Endpoint#private_endpoint_resource_guid}
  */
  readonly privateEndpointResourceGuid: string;
}

export function endpointAzurePrivateEndpointInfoToTerraform(struct?: EndpointAzurePrivateEndpointInfo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    private_endpoint_name: cdktn.stringToTerraform(struct!.privateEndpointName),
    private_endpoint_resource_guid: cdktn.stringToTerraform(struct!.privateEndpointResourceGuid),
  }
}


export function endpointAzurePrivateEndpointInfoToHclTerraform(struct?: EndpointAzurePrivateEndpointInfo | cdktn.IResolvable): any {
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

export class EndpointAzurePrivateEndpointInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EndpointAzurePrivateEndpointInfo | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: EndpointAzurePrivateEndpointInfo | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._privateEndpointName = undefined;
      this._privateEndpointResourceGuid = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._privateEndpointName = value.privateEndpointName;
      this._privateEndpointResourceGuid = value.privateEndpointResourceGuid;
    }
  }

  // private_endpoint_name - computed: false, optional: false, required: true
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

  // private_endpoint_resource_guid - computed: false, optional: false, required: true
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
export interface EndpointGcpPscEndpointInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/endpoint#endpoint_region Endpoint#endpoint_region}
  */
  readonly endpointRegion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/endpoint#project_id Endpoint#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/endpoint#psc_endpoint Endpoint#psc_endpoint}
  */
  readonly pscEndpoint: string;
}

export function endpointGcpPscEndpointInfoToTerraform(struct?: EndpointGcpPscEndpointInfo | cdktn.IResolvable): any {
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


export function endpointGcpPscEndpointInfoToHclTerraform(struct?: EndpointGcpPscEndpointInfo | cdktn.IResolvable): any {
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

export class EndpointGcpPscEndpointInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EndpointGcpPscEndpointInfo | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: EndpointGcpPscEndpointInfo | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpointRegion = undefined;
      this._projectId = undefined;
      this._pscEndpoint = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpointRegion = value.endpointRegion;
      this._projectId = value.projectId;
      this._pscEndpoint = value.pscEndpoint;
    }
  }

  // endpoint_region - computed: false, optional: false, required: true
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

  // project_id - computed: false, optional: false, required: true
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

  // psc_endpoint - computed: false, optional: false, required: true
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

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/endpoint databricks_endpoint}
*/
export class Endpoint extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Endpoint resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Endpoint to import
  * @param importFromId The id of the existing Endpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Endpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/endpoint databricks_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EndpointConfig
  */
  public constructor(scope: Construct, id: string, config: EndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.124.0',
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
    this._awsVpcEndpointInfo.internalValue = config.awsVpcEndpointInfo;
    this._azurePrivateEndpointInfo.internalValue = config.azurePrivateEndpointInfo;
    this._displayName = config.displayName;
    this._gcpPscEndpointInfo.internalValue = config.gcpPscEndpointInfo;
    this._parent = config.parent;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // aws_vpc_endpoint_info - computed: false, optional: true, required: false
  private _awsVpcEndpointInfo = new EndpointAwsVpcEndpointInfoOutputReference(this, "aws_vpc_endpoint_info");
  public get awsVpcEndpointInfo() {
    return this._awsVpcEndpointInfo;
  }
  public putAwsVpcEndpointInfo(value: EndpointAwsVpcEndpointInfo) {
    this._awsVpcEndpointInfo.internalValue = value;
  }
  public resetAwsVpcEndpointInfo() {
    this._awsVpcEndpointInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsVpcEndpointInfoInput() {
    return this._awsVpcEndpointInfo.internalValue;
  }

  // azure_private_endpoint_info - computed: false, optional: true, required: false
  private _azurePrivateEndpointInfo = new EndpointAzurePrivateEndpointInfoOutputReference(this, "azure_private_endpoint_info");
  public get azurePrivateEndpointInfo() {
    return this._azurePrivateEndpointInfo;
  }
  public putAzurePrivateEndpointInfo(value: EndpointAzurePrivateEndpointInfo) {
    this._azurePrivateEndpointInfo.internalValue = value;
  }
  public resetAzurePrivateEndpointInfo() {
    this._azurePrivateEndpointInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azurePrivateEndpointInfoInput() {
    return this._azurePrivateEndpointInfo.internalValue;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // endpoint_id - computed: true, optional: false, required: false
  public get endpointId() {
    return this.getStringAttribute('endpoint_id');
  }

  // gcp_psc_endpoint_info - computed: false, optional: true, required: false
  private _gcpPscEndpointInfo = new EndpointGcpPscEndpointInfoOutputReference(this, "gcp_psc_endpoint_info");
  public get gcpPscEndpointInfo() {
    return this._gcpPscEndpointInfo;
  }
  public putGcpPscEndpointInfo(value: EndpointGcpPscEndpointInfo) {
    this._gcpPscEndpointInfo.internalValue = value;
  }
  public resetGcpPscEndpointInfo() {
    this._gcpPscEndpointInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpPscEndpointInfoInput() {
    return this._gcpPscEndpointInfo.internalValue;
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

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // use_case - computed: true, optional: false, required: false
  public get useCase() {
    return this.getStringAttribute('use_case');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_vpc_endpoint_info: endpointAwsVpcEndpointInfoToTerraform(this._awsVpcEndpointInfo.internalValue),
      azure_private_endpoint_info: endpointAzurePrivateEndpointInfoToTerraform(this._azurePrivateEndpointInfo.internalValue),
      display_name: cdktn.stringToTerraform(this._displayName),
      gcp_psc_endpoint_info: endpointGcpPscEndpointInfoToTerraform(this._gcpPscEndpointInfo.internalValue),
      parent: cdktn.stringToTerraform(this._parent),
      region: cdktn.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_vpc_endpoint_info: {
        value: endpointAwsVpcEndpointInfoToHclTerraform(this._awsVpcEndpointInfo.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EndpointAwsVpcEndpointInfo",
      },
      azure_private_endpoint_info: {
        value: endpointAzurePrivateEndpointInfoToHclTerraform(this._azurePrivateEndpointInfo.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EndpointAzurePrivateEndpointInfo",
      },
      display_name: {
        value: cdktn.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcp_psc_endpoint_info: {
        value: endpointGcpPscEndpointInfoToHclTerraform(this._gcpPscEndpointInfo.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EndpointGcpPscEndpointInfo",
      },
      parent: {
        value: cdktn.stringToHclTerraform(this._parent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
