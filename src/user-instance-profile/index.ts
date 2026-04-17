/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/user_instance_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface UserInstanceProfileConfig extends cdktn.TerraformMetaArguments {
  /**
  * Specifies whether to use account-level or workspace-level API. Valid values are `account` and `workspace`. When not set, the API level is inferred from the provider host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/user_instance_profile#api UserInstanceProfile#api}
  */
  readonly api?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/user_instance_profile#id UserInstanceProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/user_instance_profile#instance_profile_id UserInstanceProfile#instance_profile_id}
  */
  readonly instanceProfileId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/user_instance_profile#user_id UserInstanceProfile#user_id}
  */
  readonly userId: string;
  /**
  * provider_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/user_instance_profile#provider_config UserInstanceProfile#provider_config}
  */
  readonly providerConfig?: UserInstanceProfileProviderConfig;
}
export interface UserInstanceProfileProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/user_instance_profile#workspace_id UserInstanceProfile#workspace_id}
  */
  readonly workspaceId: string;
}

export function userInstanceProfileProviderConfigToTerraform(struct?: UserInstanceProfileProviderConfigOutputReference | UserInstanceProfileProviderConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function userInstanceProfileProviderConfigToHclTerraform(struct?: UserInstanceProfileProviderConfigOutputReference | UserInstanceProfileProviderConfig): any {
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

export class UserInstanceProfileProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UserInstanceProfileProviderConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceId = this._workspaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserInstanceProfileProviderConfig | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/user_instance_profile databricks_user_instance_profile}
*/
export class UserInstanceProfile extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_user_instance_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a UserInstanceProfile resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserInstanceProfile to import
  * @param importFromId The id of the existing UserInstanceProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/user_instance_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserInstanceProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_user_instance_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/user_instance_profile databricks_user_instance_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserInstanceProfileConfig
  */
  public constructor(scope: Construct, id: string, config: UserInstanceProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_user_instance_profile',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.113.0',
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
    this._id = config.id;
    this._instanceProfileId = config.instanceProfileId;
    this._userId = config.userId;
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

  // instance_profile_id - computed: false, optional: false, required: true
  private _instanceProfileId?: string; 
  public get instanceProfileId() {
    return this.getStringAttribute('instance_profile_id');
  }
  public set instanceProfileId(value: string) {
    this._instanceProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceProfileIdInput() {
    return this._instanceProfileId;
  }

  // user_id - computed: false, optional: false, required: true
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // provider_config - computed: false, optional: true, required: false
  private _providerConfig = new UserInstanceProfileProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: UserInstanceProfileProviderConfig) {
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
      id: cdktn.stringToTerraform(this._id),
      instance_profile_id: cdktn.stringToTerraform(this._instanceProfileId),
      user_id: cdktn.stringToTerraform(this._userId),
      provider_config: userInstanceProfileProviderConfigToTerraform(this._providerConfig.internalValue),
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
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_profile_id: {
        value: cdktn.stringToHclTerraform(this._instanceProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_id: {
        value: cdktn.stringToHclTerraform(this._userId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_config: {
        value: userInstanceProfileProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserInstanceProfileProviderConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
