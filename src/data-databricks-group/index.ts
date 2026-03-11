/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataDatabricksGroupConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/group#acl_principal_id DataDatabricksGroup#acl_principal_id}
  */
  readonly aclPrincipalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/group#allow_cluster_create DataDatabricksGroup#allow_cluster_create}
  */
  readonly allowClusterCreate?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/group#allow_instance_pool_create DataDatabricksGroup#allow_instance_pool_create}
  */
  readonly allowInstancePoolCreate?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/group#child_groups DataDatabricksGroup#child_groups}
  */
  readonly childGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/group#databricks_sql_access DataDatabricksGroup#databricks_sql_access}
  */
  readonly databricksSqlAccess?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/group#display_name DataDatabricksGroup#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/group#external_id DataDatabricksGroup#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/group#groups DataDatabricksGroup#groups}
  */
  readonly groups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/group#id DataDatabricksGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/group#instance_profiles DataDatabricksGroup#instance_profiles}
  */
  readonly instanceProfiles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/group#members DataDatabricksGroup#members}
  */
  readonly members?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/group#recursive DataDatabricksGroup#recursive}
  */
  readonly recursive?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/group#service_principals DataDatabricksGroup#service_principals}
  */
  readonly servicePrincipals?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/group#users DataDatabricksGroup#users}
  */
  readonly users?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/group#workspace_access DataDatabricksGroup#workspace_access}
  */
  readonly workspaceAccess?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/group#workspace_consume DataDatabricksGroup#workspace_consume}
  */
  readonly workspaceConsume?: boolean | cdktn.IResolvable;
  /**
  * provider_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/group#provider_config DataDatabricksGroup#provider_config}
  */
  readonly providerConfig?: DataDatabricksGroupProviderConfig;
}
export interface DataDatabricksGroupProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/group#workspace_id DataDatabricksGroup#workspace_id}
  */
  readonly workspaceId: string;
}

export function dataDatabricksGroupProviderConfigToTerraform(struct?: DataDatabricksGroupProviderConfigOutputReference | DataDatabricksGroupProviderConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function dataDatabricksGroupProviderConfigToHclTerraform(struct?: DataDatabricksGroupProviderConfigOutputReference | DataDatabricksGroupProviderConfig): any {
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

export class DataDatabricksGroupProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksGroupProviderConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceId = this._workspaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksGroupProviderConfig | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/group databricks_group}
*/
export class DataDatabricksGroup extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataDatabricksGroup resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksGroup to import
  * @param importFromId The id of the existing DataDatabricksGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/group databricks_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_group',
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
    this._aclPrincipalId = config.aclPrincipalId;
    this._allowClusterCreate = config.allowClusterCreate;
    this._allowInstancePoolCreate = config.allowInstancePoolCreate;
    this._childGroups = config.childGroups;
    this._databricksSqlAccess = config.databricksSqlAccess;
    this._displayName = config.displayName;
    this._externalId = config.externalId;
    this._groups = config.groups;
    this._id = config.id;
    this._instanceProfiles = config.instanceProfiles;
    this._members = config.members;
    this._recursive = config.recursive;
    this._servicePrincipals = config.servicePrincipals;
    this._users = config.users;
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

  // child_groups - computed: true, optional: true, required: false
  private _childGroups?: string[]; 
  public get childGroups() {
    return cdktn.Fn.tolist(this.getListAttribute('child_groups'));
  }
  public set childGroups(value: string[]) {
    this._childGroups = value;
  }
  public resetChildGroups() {
    this._childGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get childGroupsInput() {
    return this._childGroups;
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

  // external_id - computed: true, optional: true, required: false
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

  // groups - computed: true, optional: true, required: false
  private _groups?: string[]; 
  public get groups() {
    return cdktn.Fn.tolist(this.getListAttribute('groups'));
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
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

  // instance_profiles - computed: true, optional: true, required: false
  private _instanceProfiles?: string[]; 
  public get instanceProfiles() {
    return cdktn.Fn.tolist(this.getListAttribute('instance_profiles'));
  }
  public set instanceProfiles(value: string[]) {
    this._instanceProfiles = value;
  }
  public resetInstanceProfiles() {
    this._instanceProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceProfilesInput() {
    return this._instanceProfiles;
  }

  // members - computed: true, optional: true, required: false
  private _members?: string[]; 
  public get members() {
    return cdktn.Fn.tolist(this.getListAttribute('members'));
  }
  public set members(value: string[]) {
    this._members = value;
  }
  public resetMembers() {
    this._members = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members;
  }

  // recursive - computed: false, optional: true, required: false
  private _recursive?: boolean | cdktn.IResolvable; 
  public get recursive() {
    return this.getBooleanAttribute('recursive');
  }
  public set recursive(value: boolean | cdktn.IResolvable) {
    this._recursive = value;
  }
  public resetRecursive() {
    this._recursive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recursiveInput() {
    return this._recursive;
  }

  // service_principals - computed: true, optional: true, required: false
  private _servicePrincipals?: string[]; 
  public get servicePrincipals() {
    return cdktn.Fn.tolist(this.getListAttribute('service_principals'));
  }
  public set servicePrincipals(value: string[]) {
    this._servicePrincipals = value;
  }
  public resetServicePrincipals() {
    this._servicePrincipals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePrincipalsInput() {
    return this._servicePrincipals;
  }

  // users - computed: true, optional: true, required: false
  private _users?: string[]; 
  public get users() {
    return cdktn.Fn.tolist(this.getListAttribute('users'));
  }
  public set users(value: string[]) {
    this._users = value;
  }
  public resetUsers() {
    this._users = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users;
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
  private _providerConfig = new DataDatabricksGroupProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataDatabricksGroupProviderConfig) {
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
      child_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(this._childGroups),
      databricks_sql_access: cdktn.booleanToTerraform(this._databricksSqlAccess),
      display_name: cdktn.stringToTerraform(this._displayName),
      external_id: cdktn.stringToTerraform(this._externalId),
      groups: cdktn.listMapper(cdktn.stringToTerraform, false)(this._groups),
      id: cdktn.stringToTerraform(this._id),
      instance_profiles: cdktn.listMapper(cdktn.stringToTerraform, false)(this._instanceProfiles),
      members: cdktn.listMapper(cdktn.stringToTerraform, false)(this._members),
      recursive: cdktn.booleanToTerraform(this._recursive),
      service_principals: cdktn.listMapper(cdktn.stringToTerraform, false)(this._servicePrincipals),
      users: cdktn.listMapper(cdktn.stringToTerraform, false)(this._users),
      workspace_access: cdktn.booleanToTerraform(this._workspaceAccess),
      workspace_consume: cdktn.booleanToTerraform(this._workspaceConsume),
      provider_config: dataDatabricksGroupProviderConfigToTerraform(this._providerConfig.internalValue),
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
      child_groups: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._childGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      groups: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._groups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_profiles: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._instanceProfiles),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      members: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._members),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      recursive: {
        value: cdktn.booleanToHclTerraform(this._recursive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      service_principals: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._servicePrincipals),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      users: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._users),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
        value: dataDatabricksGroupProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataDatabricksGroupProviderConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
