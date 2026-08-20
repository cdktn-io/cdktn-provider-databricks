/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/service_principal
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataDatabricksServicePrincipalConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/service_principal#acl_principal_id DataDatabricksServicePrincipal#acl_principal_id}
  */
  readonly aclPrincipalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/service_principal#active DataDatabricksServicePrincipal#active}
  */
  readonly active?: boolean | cdktn.IResolvable;
  /**
  * Specifies whether to use account-level or workspace-level API. Valid values are `account` and `workspace`. When not set, the API level is inferred from the provider host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/service_principal#api DataDatabricksServicePrincipal#api}
  */
  readonly api?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/service_principal#application_id DataDatabricksServicePrincipal#application_id}
  */
  readonly applicationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/service_principal#display_name DataDatabricksServicePrincipal#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/service_principal#external_id DataDatabricksServicePrincipal#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/service_principal#home DataDatabricksServicePrincipal#home}
  */
  readonly home?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/service_principal#id DataDatabricksServicePrincipal#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/service_principal#repos DataDatabricksServicePrincipal#repos}
  */
  readonly repos?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/service_principal#scim_id DataDatabricksServicePrincipal#scim_id}
  */
  readonly scimId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/service_principal#sp_id DataDatabricksServicePrincipal#sp_id}
  */
  readonly spId?: string;
  /**
  * provider_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/service_principal#provider_config DataDatabricksServicePrincipal#provider_config}
  */
  readonly providerConfig?: DataDatabricksServicePrincipalProviderConfig;
}
export interface DataDatabricksServicePrincipalProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/service_principal#workspace_id DataDatabricksServicePrincipal#workspace_id}
  */
  readonly workspaceId?: string;
}

export function dataDatabricksServicePrincipalProviderConfigToTerraform(struct?: DataDatabricksServicePrincipalProviderConfigOutputReference | DataDatabricksServicePrincipalProviderConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function dataDatabricksServicePrincipalProviderConfigToHclTerraform(struct?: DataDatabricksServicePrincipalProviderConfigOutputReference | DataDatabricksServicePrincipalProviderConfig): any {
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

export class DataDatabricksServicePrincipalProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksServicePrincipalProviderConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceId = this._workspaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksServicePrincipalProviderConfig | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/service_principal databricks_service_principal}
*/
export class DataDatabricksServicePrincipal extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_service_principal";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataDatabricksServicePrincipal resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksServicePrincipal to import
  * @param importFromId The id of the existing DataDatabricksServicePrincipal that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/service_principal#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksServicePrincipal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_service_principal", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/service_principal databricks_service_principal} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksServicePrincipalConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksServicePrincipalConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_service_principal',
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
    this._aclPrincipalId = config.aclPrincipalId;
    this._active = config.active;
    this._api = config.api;
    this._applicationId = config.applicationId;
    this._displayName = config.displayName;
    this._externalId = config.externalId;
    this._home = config.home;
    this._id = config.id;
    this._repos = config.repos;
    this._scimId = config.scimId;
    this._spId = config.spId;
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

  // active - computed: true, optional: true, required: false
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

  // scim_id - computed: true, optional: true, required: false
  private _scimId?: string; 
  public get scimId() {
    return this.getStringAttribute('scim_id');
  }
  public set scimId(value: string) {
    this._scimId = value;
  }
  public resetScimId() {
    this._scimId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scimIdInput() {
    return this._scimId;
  }

  // sp_id - computed: true, optional: true, required: false
  private _spId?: string; 
  public get spId() {
    return this.getStringAttribute('sp_id');
  }
  public set spId(value: string) {
    this._spId = value;
  }
  public resetSpId() {
    this._spId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spIdInput() {
    return this._spId;
  }

  // provider_config - computed: false, optional: true, required: false
  private _providerConfig = new DataDatabricksServicePrincipalProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataDatabricksServicePrincipalProviderConfig) {
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
      api: cdktn.stringToTerraform(this._api),
      application_id: cdktn.stringToTerraform(this._applicationId),
      display_name: cdktn.stringToTerraform(this._displayName),
      external_id: cdktn.stringToTerraform(this._externalId),
      home: cdktn.stringToTerraform(this._home),
      id: cdktn.stringToTerraform(this._id),
      repos: cdktn.stringToTerraform(this._repos),
      scim_id: cdktn.stringToTerraform(this._scimId),
      sp_id: cdktn.stringToTerraform(this._spId),
      provider_config: dataDatabricksServicePrincipalProviderConfigToTerraform(this._providerConfig.internalValue),
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
      scim_id: {
        value: cdktn.stringToHclTerraform(this._scimId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sp_id: {
        value: cdktn.stringToHclTerraform(this._spId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_config: {
        value: dataDatabricksServicePrincipalProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataDatabricksServicePrincipalProviderConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
