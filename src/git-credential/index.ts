/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/git_credential
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface GitCredentialConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/git_credential#force GitCredential#force}
  */
  readonly force?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/git_credential#git_email GitCredential#git_email}
  */
  readonly gitEmail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/git_credential#git_provider GitCredential#git_provider}
  */
  readonly gitProvider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/git_credential#git_username GitCredential#git_username}
  */
  readonly gitUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/git_credential#id GitCredential#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/git_credential#is_default_for_provider GitCredential#is_default_for_provider}
  */
  readonly isDefaultForProvider?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/git_credential#name GitCredential#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/git_credential#personal_access_token GitCredential#personal_access_token}
  */
  readonly personalAccessToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/git_credential#principal_id GitCredential#principal_id}
  */
  readonly principalId?: number;
  /**
  * provider_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/git_credential#provider_config GitCredential#provider_config}
  */
  readonly providerConfig?: GitCredentialProviderConfig;
}
export interface GitCredentialProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/git_credential#workspace_id GitCredential#workspace_id}
  */
  readonly workspaceId?: string;
}

export function gitCredentialProviderConfigToTerraform(struct?: GitCredentialProviderConfigOutputReference | GitCredentialProviderConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function gitCredentialProviderConfigToHclTerraform(struct?: GitCredentialProviderConfigOutputReference | GitCredentialProviderConfig): any {
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

export class GitCredentialProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GitCredentialProviderConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceId = this._workspaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GitCredentialProviderConfig | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/git_credential databricks_git_credential}
*/
export class GitCredential extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_git_credential";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a GitCredential resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GitCredential to import
  * @param importFromId The id of the existing GitCredential that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/git_credential#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GitCredential to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_git_credential", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/git_credential databricks_git_credential} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GitCredentialConfig
  */
  public constructor(scope: Construct, id: string, config: GitCredentialConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_git_credential',
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
    this._force = config.force;
    this._gitEmail = config.gitEmail;
    this._gitProvider = config.gitProvider;
    this._gitUsername = config.gitUsername;
    this._id = config.id;
    this._isDefaultForProvider = config.isDefaultForProvider;
    this._name = config.name;
    this._personalAccessToken = config.personalAccessToken;
    this._principalId = config.principalId;
    this._providerConfig.internalValue = config.providerConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // git_email - computed: false, optional: true, required: false
  private _gitEmail?: string; 
  public get gitEmail() {
    return this.getStringAttribute('git_email');
  }
  public set gitEmail(value: string) {
    this._gitEmail = value;
  }
  public resetGitEmail() {
    this._gitEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitEmailInput() {
    return this._gitEmail;
  }

  // git_provider - computed: false, optional: false, required: true
  private _gitProvider?: string; 
  public get gitProvider() {
    return this.getStringAttribute('git_provider');
  }
  public set gitProvider(value: string) {
    this._gitProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gitProviderInput() {
    return this._gitProvider;
  }

  // git_username - computed: false, optional: true, required: false
  private _gitUsername?: string; 
  public get gitUsername() {
    return this.getStringAttribute('git_username');
  }
  public set gitUsername(value: string) {
    this._gitUsername = value;
  }
  public resetGitUsername() {
    this._gitUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitUsernameInput() {
    return this._gitUsername;
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

  // is_default_for_provider - computed: false, optional: true, required: false
  private _isDefaultForProvider?: boolean | cdktn.IResolvable; 
  public get isDefaultForProvider() {
    return this.getBooleanAttribute('is_default_for_provider');
  }
  public set isDefaultForProvider(value: boolean | cdktn.IResolvable) {
    this._isDefaultForProvider = value;
  }
  public resetIsDefaultForProvider() {
    this._isDefaultForProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultForProviderInput() {
    return this._isDefaultForProvider;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // personal_access_token - computed: false, optional: true, required: false
  private _personalAccessToken?: string; 
  public get personalAccessToken() {
    return this.getStringAttribute('personal_access_token');
  }
  public set personalAccessToken(value: string) {
    this._personalAccessToken = value;
  }
  public resetPersonalAccessToken() {
    this._personalAccessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get personalAccessTokenInput() {
    return this._personalAccessToken;
  }

  // principal_id - computed: false, optional: true, required: false
  private _principalId?: number; 
  public get principalId() {
    return this.getNumberAttribute('principal_id');
  }
  public set principalId(value: number) {
    this._principalId = value;
  }
  public resetPrincipalId() {
    this._principalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalIdInput() {
    return this._principalId;
  }

  // provider_config - computed: false, optional: true, required: false
  private _providerConfig = new GitCredentialProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: GitCredentialProviderConfig) {
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
      force: cdktn.booleanToTerraform(this._force),
      git_email: cdktn.stringToTerraform(this._gitEmail),
      git_provider: cdktn.stringToTerraform(this._gitProvider),
      git_username: cdktn.stringToTerraform(this._gitUsername),
      id: cdktn.stringToTerraform(this._id),
      is_default_for_provider: cdktn.booleanToTerraform(this._isDefaultForProvider),
      name: cdktn.stringToTerraform(this._name),
      personal_access_token: cdktn.stringToTerraform(this._personalAccessToken),
      principal_id: cdktn.numberToTerraform(this._principalId),
      provider_config: gitCredentialProviderConfigToTerraform(this._providerConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      force: {
        value: cdktn.booleanToHclTerraform(this._force),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      git_email: {
        value: cdktn.stringToHclTerraform(this._gitEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      git_provider: {
        value: cdktn.stringToHclTerraform(this._gitProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      git_username: {
        value: cdktn.stringToHclTerraform(this._gitUsername),
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
      is_default_for_provider: {
        value: cdktn.booleanToHclTerraform(this._isDefaultForProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      personal_access_token: {
        value: cdktn.stringToHclTerraform(this._personalAccessToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      principal_id: {
        value: cdktn.numberToHclTerraform(this._principalId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      provider_config: {
        value: gitCredentialProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GitCredentialProviderConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
