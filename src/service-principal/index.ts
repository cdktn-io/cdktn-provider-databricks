/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ServicePrincipalConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#acl_principal_id ServicePrincipal#acl_principal_id}
  */
  readonly aclPrincipalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#active ServicePrincipal#active}
  */
  readonly active?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#allow_cluster_create ServicePrincipal#allow_cluster_create}
  */
  readonly allowClusterCreate?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#allow_instance_pool_create ServicePrincipal#allow_instance_pool_create}
  */
  readonly allowInstancePoolCreate?: boolean | cdktn.IResolvable;
  /**
  * Specifies whether to use account-level or workspace-level API. Valid values are `account` and `workspace`. When not set, the API level is inferred from the provider host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#api ServicePrincipal#api}
  */
  readonly api?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#application_id ServicePrincipal#application_id}
  */
  readonly applicationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#databricks_sql_access ServicePrincipal#databricks_sql_access}
  */
  readonly databricksSqlAccess?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#disable_as_user_deletion ServicePrincipal#disable_as_user_deletion}
  */
  readonly disableAsUserDeletion?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#display_name ServicePrincipal#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#external_id ServicePrincipal#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#force ServicePrincipal#force}
  */
  readonly force?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#force_delete_home_dir ServicePrincipal#force_delete_home_dir}
  */
  readonly forceDeleteHomeDir?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#force_delete_repos ServicePrincipal#force_delete_repos}
  */
  readonly forceDeleteRepos?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#home ServicePrincipal#home}
  */
  readonly home?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#id ServicePrincipal#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#repos ServicePrincipal#repos}
  */
  readonly repos?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#workspace_access ServicePrincipal#workspace_access}
  */
  readonly workspaceAccess?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#workspace_consume ServicePrincipal#workspace_consume}
  */
  readonly workspaceConsume?: boolean | cdktn.IResolvable;
  /**
  * provider_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#provider_config ServicePrincipal#provider_config}
  */
  readonly providerConfig?: ServicePrincipalProviderConfig;
}
export interface ServicePrincipalProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#workspace_id ServicePrincipal#workspace_id}
  */
  readonly workspaceId?: string;
}

export function servicePrincipalProviderConfigToTerraform(struct?: ServicePrincipalProviderConfigOutputReference | ServicePrincipalProviderConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function servicePrincipalProviderConfigToHclTerraform(struct?: ServicePrincipalProviderConfigOutputReference | ServicePrincipalProviderConfig): any {
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

export class ServicePrincipalProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServicePrincipalProviderConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceId = this._workspaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePrincipalProviderConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._workspaceId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal databricks_service_principal}
*/
export class ServicePrincipal extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_service_principal";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ServicePrincipal resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServicePrincipal to import
  * @param importFromId The id of the existing ServicePrincipal that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServicePrincipal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_service_principal", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal databricks_service_principal} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServicePrincipalConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ServicePrincipalConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_service_principal',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.115.0',
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
    this._active = config.active;
    this._allowClusterCreate = config.allowClusterCreate;
    this._allowInstancePoolCreate = config.allowInstancePoolCreate;
    this._api = config.api;
    this._applicationId = config.applicationId;
    this._databricksSqlAccess = config.databricksSqlAccess;
    this._disableAsUserDeletion = config.disableAsUserDeletion;
    this._displayName = config.displayName;
    this._externalId = config.externalId;
    this._force = config.force;
    this._forceDeleteHomeDir = config.forceDeleteHomeDir;
    this._forceDeleteRepos = config.forceDeleteRepos;
    this._home = config.home;
    this._id = config.id;
    this._repos = config.repos;
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

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktn.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktn.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
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

  // application_id - computed: true, optional: true, required: false
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  public resetApplicationId() {
    this._applicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
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

  // disable_as_user_deletion - computed: false, optional: true, required: false
  private _disableAsUserDeletion?: boolean | cdktn.IResolvable; 
  public get disableAsUserDeletion() {
    return this.getBooleanAttribute('disable_as_user_deletion');
  }
  public set disableAsUserDeletion(value: boolean | cdktn.IResolvable) {
    this._disableAsUserDeletion = value;
  }
  public resetDisableAsUserDeletion() {
    this._disableAsUserDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAsUserDeletionInput() {
    return this._disableAsUserDeletion;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
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

  // force_delete_home_dir - computed: false, optional: true, required: false
  private _forceDeleteHomeDir?: boolean | cdktn.IResolvable; 
  public get forceDeleteHomeDir() {
    return this.getBooleanAttribute('force_delete_home_dir');
  }
  public set forceDeleteHomeDir(value: boolean | cdktn.IResolvable) {
    this._forceDeleteHomeDir = value;
  }
  public resetForceDeleteHomeDir() {
    this._forceDeleteHomeDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteHomeDirInput() {
    return this._forceDeleteHomeDir;
  }

  // force_delete_repos - computed: false, optional: true, required: false
  private _forceDeleteRepos?: boolean | cdktn.IResolvable; 
  public get forceDeleteRepos() {
    return this.getBooleanAttribute('force_delete_repos');
  }
  public set forceDeleteRepos(value: boolean | cdktn.IResolvable) {
    this._forceDeleteRepos = value;
  }
  public resetForceDeleteRepos() {
    this._forceDeleteRepos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteReposInput() {
    return this._forceDeleteRepos;
  }

  // home - computed: true, optional: true, required: false
  private _home?: string; 
  public get home() {
    return this.getStringAttribute('home');
  }
  public set home(value: string) {
    this._home = value;
  }
  public resetHome() {
    this._home = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get homeInput() {
    return this._home;
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

  // repos - computed: true, optional: true, required: false
  private _repos?: string; 
  public get repos() {
    return this.getStringAttribute('repos');
  }
  public set repos(value: string) {
    this._repos = value;
  }
  public resetRepos() {
    this._repos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reposInput() {
    return this._repos;
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
  private _providerConfig = new ServicePrincipalProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: ServicePrincipalProviderConfig) {
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
      active: cdktn.booleanToTerraform(this._active),
      allow_cluster_create: cdktn.booleanToTerraform(this._allowClusterCreate),
      allow_instance_pool_create: cdktn.booleanToTerraform(this._allowInstancePoolCreate),
      api: cdktn.stringToTerraform(this._api),
      application_id: cdktn.stringToTerraform(this._applicationId),
      databricks_sql_access: cdktn.booleanToTerraform(this._databricksSqlAccess),
      disable_as_user_deletion: cdktn.booleanToTerraform(this._disableAsUserDeletion),
      display_name: cdktn.stringToTerraform(this._displayName),
      external_id: cdktn.stringToTerraform(this._externalId),
      force: cdktn.booleanToTerraform(this._force),
      force_delete_home_dir: cdktn.booleanToTerraform(this._forceDeleteHomeDir),
      force_delete_repos: cdktn.booleanToTerraform(this._forceDeleteRepos),
      home: cdktn.stringToTerraform(this._home),
      id: cdktn.stringToTerraform(this._id),
      repos: cdktn.stringToTerraform(this._repos),
      workspace_access: cdktn.booleanToTerraform(this._workspaceAccess),
      workspace_consume: cdktn.booleanToTerraform(this._workspaceConsume),
      provider_config: servicePrincipalProviderConfigToTerraform(this._providerConfig.internalValue),
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
      active: {
        value: cdktn.booleanToHclTerraform(this._active),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      application_id: {
        value: cdktn.stringToHclTerraform(this._applicationId),
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
      disable_as_user_deletion: {
        value: cdktn.booleanToHclTerraform(this._disableAsUserDeletion),
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
      force_delete_home_dir: {
        value: cdktn.booleanToHclTerraform(this._forceDeleteHomeDir),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force_delete_repos: {
        value: cdktn.booleanToHclTerraform(this._forceDeleteRepos),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      home: {
        value: cdktn.stringToHclTerraform(this._home),
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
      repos: {
        value: cdktn.stringToHclTerraform(this._repos),
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
        value: servicePrincipalProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServicePrincipalProviderConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
