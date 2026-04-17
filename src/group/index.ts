/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface GroupConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/group#acl_principal_id Group#acl_principal_id}
  */
  readonly aclPrincipalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/group#allow_cluster_create Group#allow_cluster_create}
  */
  readonly allowClusterCreate?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/group#allow_instance_pool_create Group#allow_instance_pool_create}
  */
  readonly allowInstancePoolCreate?: boolean | cdktn.IResolvable;
  /**
  * Specifies whether to use account-level or workspace-level API. Valid values are `account` and `workspace`. When not set, the API level is inferred from the provider host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/group#api Group#api}
  */
  readonly api?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/group#databricks_sql_access Group#databricks_sql_access}
  */
  readonly databricksSqlAccess?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/group#display_name Group#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/group#external_id Group#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/group#force Group#force}
  */
  readonly force?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/group#id Group#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/group#url Group#url}
  */
  readonly url?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/group#workspace_access Group#workspace_access}
  */
  readonly workspaceAccess?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/group#workspace_consume Group#workspace_consume}
  */
  readonly workspaceConsume?: boolean | cdktn.IResolvable;
  /**
  * provider_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/group#provider_config Group#provider_config}
  */
  readonly providerConfig?: GroupProviderConfig;
}
export interface GroupProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/group#workspace_id Group#workspace_id}
  */
  readonly workspaceId: string;
}

export function groupProviderConfigToTerraform(struct?: GroupProviderConfigOutputReference | GroupProviderConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function groupProviderConfigToHclTerraform(struct?: GroupProviderConfigOutputReference | GroupProviderConfig): any {
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

export class GroupProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GroupProviderConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceId = this._workspaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupProviderConfig | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/group databricks_group}
*/
export class Group extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Group resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Group to import
  * @param importFromId The id of the existing Group that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Group to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/group databricks_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupConfig
  */
  public constructor(scope: Construct, id: string, config: GroupConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_group',
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
    this._aclPrincipalId = config.aclPrincipalId;
    this._allowClusterCreate = config.allowClusterCreate;
    this._allowInstancePoolCreate = config.allowInstancePoolCreate;
    this._api = config.api;
    this._databricksSqlAccess = config.databricksSqlAccess;
    this._displayName = config.displayName;
    this._externalId = config.externalId;
    this._force = config.force;
    this._id = config.id;
    this._url = config.url;
    this._workspaceAccess = config.workspaceAccess;
    this._workspaceConsume = config.workspaceConsume;
    this._providerConfig.internalValue = config.providerConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acl_principal_id - computed: true, optional: true, required: false
  private _aclPrincipalId?: string; 
  public get aclPrincipalId() {
    return this.getStringAttribute('acl_principal_id');
  }
  public set aclPrincipalId(value: string) {
    this._aclPrincipalId = value;
  }
  public resetAclPrincipalId() {
    this._aclPrincipalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclPrincipalIdInput() {
    return this._aclPrincipalId;
  }

  // allow_cluster_create - computed: false, optional: true, required: false
  private _allowClusterCreate?: boolean | cdktn.IResolvable; 
  public get allowClusterCreate() {
    return this.getBooleanAttribute('allow_cluster_create');
  }
  public set allowClusterCreate(value: boolean | cdktn.IResolvable) {
    this._allowClusterCreate = value;
  }
  public resetAllowClusterCreate() {
    this._allowClusterCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowClusterCreateInput() {
    return this._allowClusterCreate;
  }

  // allow_instance_pool_create - computed: false, optional: true, required: false
  private _allowInstancePoolCreate?: boolean | cdktn.IResolvable; 
  public get allowInstancePoolCreate() {
    return this.getBooleanAttribute('allow_instance_pool_create');
  }
  public set allowInstancePoolCreate(value: boolean | cdktn.IResolvable) {
    this._allowInstancePoolCreate = value;
  }
  public resetAllowInstancePoolCreate() {
    this._allowInstancePoolCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInstancePoolCreateInput() {
    return this._allowInstancePoolCreate;
  }

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

  // databricks_sql_access - computed: false, optional: true, required: false
  private _databricksSqlAccess?: boolean | cdktn.IResolvable; 
  public get databricksSqlAccess() {
    return this.getBooleanAttribute('databricks_sql_access');
  }
  public set databricksSqlAccess(value: boolean | cdktn.IResolvable) {
    this._databricksSqlAccess = value;
  }
  public resetDatabricksSqlAccess() {
    this._databricksSqlAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databricksSqlAccessInput() {
    return this._databricksSqlAccess;
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

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // force - computed: false, optional: true, required: false
  private _force?: boolean | cdktn.IResolvable; 
  public get force() {
    return this.getBooleanAttribute('force');
  }
  public set force(value: boolean | cdktn.IResolvable) {
    this._force = value;
  }
  public resetForce() {
    this._force = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceInput() {
    return this._force;
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

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // workspace_access - computed: false, optional: true, required: false
  private _workspaceAccess?: boolean | cdktn.IResolvable; 
  public get workspaceAccess() {
    return this.getBooleanAttribute('workspace_access');
  }
  public set workspaceAccess(value: boolean | cdktn.IResolvable) {
    this._workspaceAccess = value;
  }
  public resetWorkspaceAccess() {
    this._workspaceAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceAccessInput() {
    return this._workspaceAccess;
  }

  // workspace_consume - computed: false, optional: true, required: false
  private _workspaceConsume?: boolean | cdktn.IResolvable; 
  public get workspaceConsume() {
    return this.getBooleanAttribute('workspace_consume');
  }
  public set workspaceConsume(value: boolean | cdktn.IResolvable) {
    this._workspaceConsume = value;
  }
  public resetWorkspaceConsume() {
    this._workspaceConsume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceConsumeInput() {
    return this._workspaceConsume;
  }

  // provider_config - computed: false, optional: true, required: false
  private _providerConfig = new GroupProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: GroupProviderConfig) {
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
      acl_principal_id: cdktn.stringToTerraform(this._aclPrincipalId),
      allow_cluster_create: cdktn.booleanToTerraform(this._allowClusterCreate),
      allow_instance_pool_create: cdktn.booleanToTerraform(this._allowInstancePoolCreate),
      api: cdktn.stringToTerraform(this._api),
      databricks_sql_access: cdktn.booleanToTerraform(this._databricksSqlAccess),
      display_name: cdktn.stringToTerraform(this._displayName),
      external_id: cdktn.stringToTerraform(this._externalId),
      force: cdktn.booleanToTerraform(this._force),
      id: cdktn.stringToTerraform(this._id),
      url: cdktn.stringToTerraform(this._url),
      workspace_access: cdktn.booleanToTerraform(this._workspaceAccess),
      workspace_consume: cdktn.booleanToTerraform(this._workspaceConsume),
      provider_config: groupProviderConfigToTerraform(this._providerConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acl_principal_id: {
        value: cdktn.stringToHclTerraform(this._aclPrincipalId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_cluster_create: {
        value: cdktn.booleanToHclTerraform(this._allowClusterCreate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_instance_pool_create: {
        value: cdktn.booleanToHclTerraform(this._allowInstancePoolCreate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      api: {
        value: cdktn.stringToHclTerraform(this._api),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      databricks_sql_access: {
        value: cdktn.booleanToHclTerraform(this._databricksSqlAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      display_name: {
        value: cdktn.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_id: {
        value: cdktn.stringToHclTerraform(this._externalId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force: {
        value: cdktn.booleanToHclTerraform(this._force),
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
      url: {
        value: cdktn.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspace_access: {
        value: cdktn.booleanToHclTerraform(this._workspaceAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      workspace_consume: {
        value: cdktn.booleanToHclTerraform(this._workspaceConsume),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      provider_config: {
        value: groupProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GroupProviderConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
