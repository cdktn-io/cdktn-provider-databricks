/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/mws_ncc_private_endpoint_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface MwsNccPrivateEndpointRuleConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/mws_ncc_private_endpoint_rule#domain_names MwsNccPrivateEndpointRule#domain_names}
  */
  readonly domainNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/mws_ncc_private_endpoint_rule#enabled MwsNccPrivateEndpointRule#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/mws_ncc_private_endpoint_rule#endpoint_service MwsNccPrivateEndpointRule#endpoint_service}
  */
  readonly endpointService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/mws_ncc_private_endpoint_rule#group_id MwsNccPrivateEndpointRule#group_id}
  */
  readonly groupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/mws_ncc_private_endpoint_rule#id MwsNccPrivateEndpointRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/mws_ncc_private_endpoint_rule#network_connectivity_config_id MwsNccPrivateEndpointRule#network_connectivity_config_id}
  */
  readonly networkConnectivityConfigId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/mws_ncc_private_endpoint_rule#resource_id MwsNccPrivateEndpointRule#resource_id}
  */
  readonly resourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/mws_ncc_private_endpoint_rule#resource_names MwsNccPrivateEndpointRule#resource_names}
  */
  readonly resourceNames?: string[];
  /**
  * gcp_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/mws_ncc_private_endpoint_rule#gcp_endpoint MwsNccPrivateEndpointRule#gcp_endpoint}
  */
  readonly gcpEndpoint?: MwsNccPrivateEndpointRuleGcpEndpoint;
}
export interface MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpoints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/mws_ncc_private_endpoint_rule#endpoints MwsNccPrivateEndpointRule#endpoints}
  */
  readonly endpoints?: string[];
}

export function mwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpointsToTerraform(struct?: MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpointsOutputReference | MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpoints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    endpoints: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.endpoints),
  }
}


export function mwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpointsToHclTerraform(struct?: MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpointsOutputReference | MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpoints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    endpoints: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.endpoints),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpointsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoints !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoints = this._endpoints;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endpoints = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endpoints = value.endpoints;
    }
  }

  // endpoints - computed: false, optional: true, required: false
  private _endpoints?: string[]; 
  public get endpoints() {
    return this.getListAttribute('endpoints');
  }
  public set endpoints(value: string[]) {
    this._endpoints = value;
  }
  public resetEndpoints() {
    this._endpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsInput() {
    return this._endpoints;
  }
}
export interface MwsNccPrivateEndpointRuleGcpEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/mws_ncc_private_endpoint_rule#all_vpc_sc_services MwsNccPrivateEndpointRule#all_vpc_sc_services}
  */
  readonly allVpcScServices?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/mws_ncc_private_endpoint_rule#service_attachment MwsNccPrivateEndpointRule#service_attachment}
  */
  readonly serviceAttachment?: string;
  /**
  * google_api_endpoints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/mws_ncc_private_endpoint_rule#google_api_endpoints MwsNccPrivateEndpointRule#google_api_endpoints}
  */
  readonly googleApiEndpoints?: MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpoints;
}

export function mwsNccPrivateEndpointRuleGcpEndpointToTerraform(struct?: MwsNccPrivateEndpointRuleGcpEndpointOutputReference | MwsNccPrivateEndpointRuleGcpEndpoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    all_vpc_sc_services: cdktn.booleanToTerraform(struct!.allVpcScServices),
    service_attachment: cdktn.stringToTerraform(struct!.serviceAttachment),
    google_api_endpoints: mwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpointsToTerraform(struct!.googleApiEndpoints),
  }
}


export function mwsNccPrivateEndpointRuleGcpEndpointToHclTerraform(struct?: MwsNccPrivateEndpointRuleGcpEndpointOutputReference | MwsNccPrivateEndpointRuleGcpEndpoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    all_vpc_sc_services: {
      value: cdktn.booleanToHclTerraform(struct!.allVpcScServices),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service_attachment: {
      value: cdktn.stringToHclTerraform(struct!.serviceAttachment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    google_api_endpoints: {
      value: mwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpointsToHclTerraform(struct!.googleApiEndpoints),
      isBlock: true,
      type: "list",
      storageClassType: "MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpointsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MwsNccPrivateEndpointRuleGcpEndpointOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MwsNccPrivateEndpointRuleGcpEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allVpcScServices !== undefined) {
      hasAnyValues = true;
      internalValueResult.allVpcScServices = this._allVpcScServices;
    }
    if (this._serviceAttachment !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAttachment = this._serviceAttachment;
    }
    if (this._googleApiEndpoints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleApiEndpoints = this._googleApiEndpoints?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MwsNccPrivateEndpointRuleGcpEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allVpcScServices = undefined;
      this._serviceAttachment = undefined;
      this._googleApiEndpoints.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allVpcScServices = value.allVpcScServices;
      this._serviceAttachment = value.serviceAttachment;
      this._googleApiEndpoints.internalValue = value.googleApiEndpoints;
    }
  }

  // all_vpc_sc_services - computed: false, optional: true, required: false
  private _allVpcScServices?: boolean | cdktn.IResolvable; 
  public get allVpcScServices() {
    return this.getBooleanAttribute('all_vpc_sc_services');
  }
  public set allVpcScServices(value: boolean | cdktn.IResolvable) {
    this._allVpcScServices = value;
  }
  public resetAllVpcScServices() {
    this._allVpcScServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allVpcScServicesInput() {
    return this._allVpcScServices;
  }

  // psc_endpoint_uri - computed: true, optional: false, required: false
  public get pscEndpointUri() {
    return this.getStringAttribute('psc_endpoint_uri');
  }

  // service_attachment - computed: false, optional: true, required: false
  private _serviceAttachment?: string; 
  public get serviceAttachment() {
    return this.getStringAttribute('service_attachment');
  }
  public set serviceAttachment(value: string) {
    this._serviceAttachment = value;
  }
  public resetServiceAttachment() {
    this._serviceAttachment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAttachmentInput() {
    return this._serviceAttachment;
  }

  // google_api_endpoints - computed: false, optional: true, required: false
  private _googleApiEndpoints = new MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpointsOutputReference(this, "google_api_endpoints");
  public get googleApiEndpoints() {
    return this._googleApiEndpoints;
  }
  public putGoogleApiEndpoints(value: MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpoints) {
    this._googleApiEndpoints.internalValue = value;
  }
  public resetGoogleApiEndpoints() {
    this._googleApiEndpoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleApiEndpointsInput() {
    return this._googleApiEndpoints.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/mws_ncc_private_endpoint_rule databricks_mws_ncc_private_endpoint_rule}
*/
export class MwsNccPrivateEndpointRule extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_mws_ncc_private_endpoint_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a MwsNccPrivateEndpointRule resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MwsNccPrivateEndpointRule to import
  * @param importFromId The id of the existing MwsNccPrivateEndpointRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/mws_ncc_private_endpoint_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MwsNccPrivateEndpointRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_mws_ncc_private_endpoint_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/mws_ncc_private_endpoint_rule databricks_mws_ncc_private_endpoint_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MwsNccPrivateEndpointRuleConfig
  */
  public constructor(scope: Construct, id: string, config: MwsNccPrivateEndpointRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_mws_ncc_private_endpoint_rule',
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
    this._domainNames = config.domainNames;
    this._enabled = config.enabled;
    this._endpointService = config.endpointService;
    this._groupId = config.groupId;
    this._id = config.id;
    this._networkConnectivityConfigId = config.networkConnectivityConfigId;
    this._resourceId = config.resourceId;
    this._resourceNames = config.resourceNames;
    this._gcpEndpoint.internalValue = config.gcpEndpoint;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // connection_state - computed: true, optional: false, required: false
  public get connectionState() {
    return this.getStringAttribute('connection_state');
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getNumberAttribute('creation_time');
  }

  // deactivated - computed: true, optional: false, required: false
  public get deactivated() {
    return this.getBooleanAttribute('deactivated');
  }

  // deactivated_at - computed: true, optional: false, required: false
  public get deactivatedAt() {
    return this.getNumberAttribute('deactivated_at');
  }

  // domain_names - computed: false, optional: true, required: false
  private _domainNames?: string[]; 
  public get domainNames() {
    return this.getListAttribute('domain_names');
  }
  public set domainNames(value: string[]) {
    this._domainNames = value;
  }
  public resetDomainNames() {
    this._domainNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNamesInput() {
    return this._domainNames;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // endpoint_name - computed: true, optional: false, required: false
  public get endpointName() {
    return this.getStringAttribute('endpoint_name');
  }

  // endpoint_service - computed: false, optional: true, required: false
  private _endpointService?: string; 
  public get endpointService() {
    return this.getStringAttribute('endpoint_service');
  }
  public set endpointService(value: string) {
    this._endpointService = value;
  }
  public resetEndpointService() {
    this._endpointService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointServiceInput() {
    return this._endpointService;
  }

  // error_message - computed: true, optional: false, required: false
  public get errorMessage() {
    return this.getStringAttribute('error_message');
  }

  // group_id - computed: false, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
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

  // network_connectivity_config_id - computed: false, optional: false, required: true
  private _networkConnectivityConfigId?: string; 
  public get networkConnectivityConfigId() {
    return this.getStringAttribute('network_connectivity_config_id');
  }
  public set networkConnectivityConfigId(value: string) {
    this._networkConnectivityConfigId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConnectivityConfigIdInput() {
    return this._networkConnectivityConfigId;
  }

  // resource_id - computed: false, optional: true, required: false
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  public resetResourceId() {
    this._resourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // resource_names - computed: false, optional: true, required: false
  private _resourceNames?: string[]; 
  public get resourceNames() {
    return this.getListAttribute('resource_names');
  }
  public set resourceNames(value: string[]) {
    this._resourceNames = value;
  }
  public resetResourceNames() {
    this._resourceNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNamesInput() {
    return this._resourceNames;
  }

  // rule_id - computed: true, optional: false, required: false
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }

  // updated_time - computed: true, optional: false, required: false
  public get updatedTime() {
    return this.getNumberAttribute('updated_time');
  }

  // vpc_endpoint_id - computed: true, optional: false, required: false
  public get vpcEndpointId() {
    return this.getStringAttribute('vpc_endpoint_id');
  }

  // gcp_endpoint - computed: false, optional: true, required: false
  private _gcpEndpoint = new MwsNccPrivateEndpointRuleGcpEndpointOutputReference(this, "gcp_endpoint");
  public get gcpEndpoint() {
    return this._gcpEndpoint;
  }
  public putGcpEndpoint(value: MwsNccPrivateEndpointRuleGcpEndpoint) {
    this._gcpEndpoint.internalValue = value;
  }
  public resetGcpEndpoint() {
    this._gcpEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpEndpointInput() {
    return this._gcpEndpoint.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain_names: cdktn.listMapper(cdktn.stringToTerraform, false)(this._domainNames),
      enabled: cdktn.booleanToTerraform(this._enabled),
      endpoint_service: cdktn.stringToTerraform(this._endpointService),
      group_id: cdktn.stringToTerraform(this._groupId),
      id: cdktn.stringToTerraform(this._id),
      network_connectivity_config_id: cdktn.stringToTerraform(this._networkConnectivityConfigId),
      resource_id: cdktn.stringToTerraform(this._resourceId),
      resource_names: cdktn.listMapper(cdktn.stringToTerraform, false)(this._resourceNames),
      gcp_endpoint: mwsNccPrivateEndpointRuleGcpEndpointToTerraform(this._gcpEndpoint.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain_names: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._domainNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      enabled: {
        value: cdktn.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      endpoint_service: {
        value: cdktn.stringToHclTerraform(this._endpointService),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_id: {
        value: cdktn.stringToHclTerraform(this._groupId),
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
      network_connectivity_config_id: {
        value: cdktn.stringToHclTerraform(this._networkConnectivityConfigId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_id: {
        value: cdktn.stringToHclTerraform(this._resourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_names: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._resourceNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      gcp_endpoint: {
        value: mwsNccPrivateEndpointRuleGcpEndpointToHclTerraform(this._gcpEndpoint.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MwsNccPrivateEndpointRuleGcpEndpointList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
