/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/environments_workspace_base_environment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface EnvironmentsWorkspaceBaseEnvironmentConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/environments_workspace_base_environment#base_environment_type EnvironmentsWorkspaceBaseEnvironment#base_environment_type}
  */
  readonly baseEnvironmentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/environments_workspace_base_environment#display_name EnvironmentsWorkspaceBaseEnvironment#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/environments_workspace_base_environment#filepath EnvironmentsWorkspaceBaseEnvironment#filepath}
  */
  readonly filepath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/environments_workspace_base_environment#provider_config EnvironmentsWorkspaceBaseEnvironment#provider_config}
  */
  readonly providerConfig?: EnvironmentsWorkspaceBaseEnvironmentProviderConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/environments_workspace_base_environment#workspace_base_environment_id EnvironmentsWorkspaceBaseEnvironment#workspace_base_environment_id}
  */
  readonly workspaceBaseEnvironmentId?: string;
}
export interface EnvironmentsWorkspaceBaseEnvironmentProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/environments_workspace_base_environment#workspace_id EnvironmentsWorkspaceBaseEnvironment#workspace_id}
  */
  readonly workspaceId?: string;
}

export function environmentsWorkspaceBaseEnvironmentProviderConfigToTerraform(struct?: EnvironmentsWorkspaceBaseEnvironmentProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function environmentsWorkspaceBaseEnvironmentProviderConfigToHclTerraform(struct?: EnvironmentsWorkspaceBaseEnvironmentProviderConfig | cdktn.IResolvable): any {
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

export class EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EnvironmentsWorkspaceBaseEnvironmentProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: EnvironmentsWorkspaceBaseEnvironmentProviderConfig | cdktn.IResolvable | undefined) {
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
export interface EnvironmentsWorkspaceBaseEnvironmentSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/environments_workspace_base_environment#dependencies EnvironmentsWorkspaceBaseEnvironment#dependencies}
  */
  readonly dependencies?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/environments_workspace_base_environment#environment_version EnvironmentsWorkspaceBaseEnvironment#environment_version}
  */
  readonly environmentVersion?: string;
}

export function environmentsWorkspaceBaseEnvironmentSpecToTerraform(struct?: EnvironmentsWorkspaceBaseEnvironmentSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dependencies: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.dependencies),
    environment_version: cdktn.stringToTerraform(struct!.environmentVersion),
  }
}


export function environmentsWorkspaceBaseEnvironmentSpecToHclTerraform(struct?: EnvironmentsWorkspaceBaseEnvironmentSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dependencies: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.dependencies),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    environment_version: {
      value: cdktn.stringToHclTerraform(struct!.environmentVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EnvironmentsWorkspaceBaseEnvironmentSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dependencies !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependencies = this._dependencies;
    }
    if (this._environmentVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentVersion = this._environmentVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentsWorkspaceBaseEnvironmentSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dependencies = undefined;
      this._environmentVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dependencies = value.dependencies;
      this._environmentVersion = value.environmentVersion;
    }
  }

  // dependencies - computed: true, optional: true, required: false
  private _dependencies?: string[]; 
  public get dependencies() {
    return this.getListAttribute('dependencies');
  }
  public set dependencies(value: string[]) {
    this._dependencies = value;
  }
  public resetDependencies() {
    this._dependencies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependenciesInput() {
    return this._dependencies;
  }

  // environment_version - computed: true, optional: true, required: false
  private _environmentVersion?: string; 
  public get environmentVersion() {
    return this.getStringAttribute('environment_version');
  }
  public set environmentVersion(value: string) {
    this._environmentVersion = value;
  }
  public resetEnvironmentVersion() {
    this._environmentVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentVersionInput() {
    return this._environmentVersion;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/environments_workspace_base_environment databricks_environments_workspace_base_environment}
*/
export class EnvironmentsWorkspaceBaseEnvironment extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_environments_workspace_base_environment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a EnvironmentsWorkspaceBaseEnvironment resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EnvironmentsWorkspaceBaseEnvironment to import
  * @param importFromId The id of the existing EnvironmentsWorkspaceBaseEnvironment that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/environments_workspace_base_environment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EnvironmentsWorkspaceBaseEnvironment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_environments_workspace_base_environment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/environments_workspace_base_environment databricks_environments_workspace_base_environment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EnvironmentsWorkspaceBaseEnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: EnvironmentsWorkspaceBaseEnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_environments_workspace_base_environment',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.126.0',
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
    this._baseEnvironmentType = config.baseEnvironmentType;
    this._displayName = config.displayName;
    this._filepath = config.filepath;
    this._providerConfig.internalValue = config.providerConfig;
    this._workspaceBaseEnvironmentId = config.workspaceBaseEnvironmentId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base_environment_type - computed: false, optional: true, required: false
  private _baseEnvironmentType?: string; 
  public get baseEnvironmentType() {
    return this.getStringAttribute('base_environment_type');
  }
  public set baseEnvironmentType(value: string) {
    this._baseEnvironmentType = value;
  }
  public resetBaseEnvironmentType() {
    this._baseEnvironmentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseEnvironmentTypeInput() {
    return this._baseEnvironmentType;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // creator_user_id - computed: true, optional: false, required: false
  public get creatorUserId() {
    return this.getStringAttribute('creator_user_id');
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

  // effective_base_environment_type - computed: true, optional: false, required: false
  public get effectiveBaseEnvironmentType() {
    return this.getStringAttribute('effective_base_environment_type');
  }

  // filepath - computed: false, optional: true, required: false
  private _filepath?: string; 
  public get filepath() {
    return this.getStringAttribute('filepath');
  }
  public set filepath(value: string) {
    this._filepath = value;
  }
  public resetFilepath() {
    this._filepath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filepathInput() {
    return this._filepath;
  }

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }

  // last_updated_user_id - computed: true, optional: false, required: false
  public get lastUpdatedUserId() {
    return this.getStringAttribute('last_updated_user_id');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // provider_config - computed: true, optional: true, required: false
  private _providerConfig = new EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: EnvironmentsWorkspaceBaseEnvironmentProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // spec - computed: true, optional: false, required: false
  private _spec = new EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // workspace_base_environment_id - computed: true, optional: true, required: false
  private _workspaceBaseEnvironmentId?: string; 
  public get workspaceBaseEnvironmentId() {
    return this.getStringAttribute('workspace_base_environment_id');
  }
  public set workspaceBaseEnvironmentId(value: string) {
    this._workspaceBaseEnvironmentId = value;
  }
  public resetWorkspaceBaseEnvironmentId() {
    this._workspaceBaseEnvironmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceBaseEnvironmentIdInput() {
    return this._workspaceBaseEnvironmentId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      base_environment_type: cdktn.stringToTerraform(this._baseEnvironmentType),
      display_name: cdktn.stringToTerraform(this._displayName),
      filepath: cdktn.stringToTerraform(this._filepath),
      provider_config: environmentsWorkspaceBaseEnvironmentProviderConfigToTerraform(this._providerConfig.internalValue),
      workspace_base_environment_id: cdktn.stringToTerraform(this._workspaceBaseEnvironmentId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      base_environment_type: {
        value: cdktn.stringToHclTerraform(this._baseEnvironmentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktn.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filepath: {
        value: cdktn.stringToHclTerraform(this._filepath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_config: {
        value: environmentsWorkspaceBaseEnvironmentProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EnvironmentsWorkspaceBaseEnvironmentProviderConfig",
      },
      workspace_base_environment_id: {
        value: cdktn.stringToHclTerraform(this._workspaceBaseEnvironmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
