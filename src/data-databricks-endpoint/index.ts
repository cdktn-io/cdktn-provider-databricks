/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataDatabricksEndpointConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/endpoint#name DataDatabricksEndpoint#name}
  */
  readonly name: string;
}
export interface DataDatabricksEndpointAzurePrivateEndpointInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/endpoint#private_endpoint_name DataDatabricksEndpoint#private_endpoint_name}
  */
  readonly privateEndpointName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/endpoint#private_endpoint_resource_guid DataDatabricksEndpoint#private_endpoint_resource_guid}
  */
  readonly privateEndpointResourceGuid: string;
}

export function dataDatabricksEndpointAzurePrivateEndpointInfoToTerraform(struct?: DataDatabricksEndpointAzurePrivateEndpointInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    private_endpoint_name: cdktn.stringToTerraform(struct!.privateEndpointName),
    private_endpoint_resource_guid: cdktn.stringToTerraform(struct!.privateEndpointResourceGuid),
  }
}


export function dataDatabricksEndpointAzurePrivateEndpointInfoToHclTerraform(struct?: DataDatabricksEndpointAzurePrivateEndpointInfo): any {
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

export class DataDatabricksEndpointAzurePrivateEndpointInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksEndpointAzurePrivateEndpointInfo | undefined {
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

  public set internalValue(value: DataDatabricksEndpointAzurePrivateEndpointInfo | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/endpoint databricks_endpoint}
*/
export class DataDatabricksEndpoint extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataDatabricksEndpoint resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksEndpoint to import
  * @param importFromId The id of the existing DataDatabricksEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/endpoint databricks_endpoint} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.119.0',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // azure_private_endpoint_info - computed: true, optional: false, required: false
  private _azurePrivateEndpointInfo = new DataDatabricksEndpointAzurePrivateEndpointInfoOutputReference(this, "azure_private_endpoint_info");
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktn.stringToTerraform(this._name),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
