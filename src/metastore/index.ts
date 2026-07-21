/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/metastore
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface MetastoreConfig extends cdktn.TerraformMetaArguments {
  /**
  * Specifies whether to use account-level or workspace-level API. Valid values are `account` and `workspace`. When not set, the API level is inferred from the provider host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/metastore#api Metastore#api}
  */
  readonly api?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/metastore#default_data_access_config_id Metastore#default_data_access_config_id}
  */
  readonly defaultDataAccessConfigId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/metastore#delta_sharing_organization_name Metastore#delta_sharing_organization_name}
  */
  readonly deltaSharingOrganizationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/metastore#delta_sharing_recipient_token_lifetime_in_seconds Metastore#delta_sharing_recipient_token_lifetime_in_seconds}
  */
  readonly deltaSharingRecipientTokenLifetimeInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/metastore#delta_sharing_scope Metastore#delta_sharing_scope}
  */
  readonly deltaSharingScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/metastore#external_access_enabled Metastore#external_access_enabled}
  */
  readonly externalAccessEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/metastore#force_destroy Metastore#force_destroy}
  */
  readonly forceDestroy?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/metastore#id Metastore#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/metastore#name Metastore#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/metastore#owner Metastore#owner}
  */
  readonly owner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/metastore#privilege_model_version Metastore#privilege_model_version}
  */
  readonly privilegeModelVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/metastore#region Metastore#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/metastore#storage_root Metastore#storage_root}
  */
  readonly storageRoot?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/metastore#storage_root_credential_id Metastore#storage_root_credential_id}
  */
  readonly storageRootCredentialId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/metastore#storage_root_credential_name Metastore#storage_root_credential_name}
  */
  readonly storageRootCredentialName?: string;
  /**
  * provider_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/metastore#provider_config Metastore#provider_config}
  */
  readonly providerConfig?: MetastoreProviderConfig;
}
export interface MetastoreProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/metastore#workspace_id Metastore#workspace_id}
  */
  readonly workspaceId?: string;
}

export function metastoreProviderConfigToTerraform(struct?: MetastoreProviderConfigOutputReference | MetastoreProviderConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function metastoreProviderConfigToHclTerraform(struct?: MetastoreProviderConfigOutputReference | MetastoreProviderConfig): any {
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

export class MetastoreProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MetastoreProviderConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceId = this._workspaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetastoreProviderConfig | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/metastore databricks_metastore}
*/
export class Metastore extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_metastore";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Metastore resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Metastore to import
  * @param importFromId The id of the existing Metastore that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/metastore#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Metastore to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_metastore", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/metastore databricks_metastore} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MetastoreConfig = {}
  */
  public constructor(scope: Construct, id: string, config: MetastoreConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_metastore',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.122.0',
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
    this._defaultDataAccessConfigId = config.defaultDataAccessConfigId;
    this._deltaSharingOrganizationName = config.deltaSharingOrganizationName;
    this._deltaSharingRecipientTokenLifetimeInSeconds = config.deltaSharingRecipientTokenLifetimeInSeconds;
    this._deltaSharingScope = config.deltaSharingScope;
    this._externalAccessEnabled = config.externalAccessEnabled;
    this._forceDestroy = config.forceDestroy;
    this._id = config.id;
    this._name = config.name;
    this._owner = config.owner;
    this._privilegeModelVersion = config.privilegeModelVersion;
    this._region = config.region;
    this._storageRoot = config.storageRoot;
    this._storageRootCredentialId = config.storageRootCredentialId;
    this._storageRootCredentialName = config.storageRootCredentialName;
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

  // cloud - computed: true, optional: false, required: false
  public get cloud() {
    return this.getStringAttribute('cloud');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getNumberAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // default_data_access_config_id - computed: false, optional: true, required: false
  private _defaultDataAccessConfigId?: string; 
  public get defaultDataAccessConfigId() {
    return this.getStringAttribute('default_data_access_config_id');
  }
  public set defaultDataAccessConfigId(value: string) {
    this._defaultDataAccessConfigId = value;
  }
  public resetDefaultDataAccessConfigId() {
    this._defaultDataAccessConfigId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDataAccessConfigIdInput() {
    return this._defaultDataAccessConfigId;
  }

  // delta_sharing_organization_name - computed: false, optional: true, required: false
  private _deltaSharingOrganizationName?: string; 
  public get deltaSharingOrganizationName() {
    return this.getStringAttribute('delta_sharing_organization_name');
  }
  public set deltaSharingOrganizationName(value: string) {
    this._deltaSharingOrganizationName = value;
  }
  public resetDeltaSharingOrganizationName() {
    this._deltaSharingOrganizationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deltaSharingOrganizationNameInput() {
    return this._deltaSharingOrganizationName;
  }

  // delta_sharing_recipient_token_lifetime_in_seconds - computed: false, optional: true, required: false
  private _deltaSharingRecipientTokenLifetimeInSeconds?: number; 
  public get deltaSharingRecipientTokenLifetimeInSeconds() {
    return this.getNumberAttribute('delta_sharing_recipient_token_lifetime_in_seconds');
  }
  public set deltaSharingRecipientTokenLifetimeInSeconds(value: number) {
    this._deltaSharingRecipientTokenLifetimeInSeconds = value;
  }
  public resetDeltaSharingRecipientTokenLifetimeInSeconds() {
    this._deltaSharingRecipientTokenLifetimeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deltaSharingRecipientTokenLifetimeInSecondsInput() {
    return this._deltaSharingRecipientTokenLifetimeInSeconds;
  }

  // delta_sharing_scope - computed: false, optional: true, required: false
  private _deltaSharingScope?: string; 
  public get deltaSharingScope() {
    return this.getStringAttribute('delta_sharing_scope');
  }
  public set deltaSharingScope(value: string) {
    this._deltaSharingScope = value;
  }
  public resetDeltaSharingScope() {
    this._deltaSharingScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deltaSharingScopeInput() {
    return this._deltaSharingScope;
  }

  // external_access_enabled - computed: false, optional: true, required: false
  private _externalAccessEnabled?: boolean | cdktn.IResolvable; 
  public get externalAccessEnabled() {
    return this.getBooleanAttribute('external_access_enabled');
  }
  public set externalAccessEnabled(value: boolean | cdktn.IResolvable) {
    this._externalAccessEnabled = value;
  }
  public resetExternalAccessEnabled() {
    this._externalAccessEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalAccessEnabledInput() {
    return this._externalAccessEnabled;
  }

  // force_destroy - computed: false, optional: true, required: false
  private _forceDestroy?: boolean | cdktn.IResolvable; 
  public get forceDestroy() {
    return this.getBooleanAttribute('force_destroy');
  }
  public set forceDestroy(value: boolean | cdktn.IResolvable) {
    this._forceDestroy = value;
  }
  public resetForceDestroy() {
    this._forceDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDestroyInput() {
    return this._forceDestroy;
  }

  // global_metastore_id - computed: true, optional: false, required: false
  public get globalMetastoreId() {
    return this.getStringAttribute('global_metastore_id');
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

  // metastore_id - computed: true, optional: false, required: false
  public get metastoreId() {
    return this.getStringAttribute('metastore_id');
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

  // owner - computed: true, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // privilege_model_version - computed: true, optional: true, required: false
  private _privilegeModelVersion?: string; 
  public get privilegeModelVersion() {
    return this.getStringAttribute('privilege_model_version');
  }
  public set privilegeModelVersion(value: string) {
    this._privilegeModelVersion = value;
  }
  public resetPrivilegeModelVersion() {
    this._privilegeModelVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegeModelVersionInput() {
    return this._privilegeModelVersion;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // storage_root - computed: false, optional: true, required: false
  private _storageRoot?: string; 
  public get storageRoot() {
    return this.getStringAttribute('storage_root');
  }
  public set storageRoot(value: string) {
    this._storageRoot = value;
  }
  public resetStorageRoot() {
    this._storageRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageRootInput() {
    return this._storageRoot;
  }

  // storage_root_credential_id - computed: false, optional: true, required: false
  private _storageRootCredentialId?: string; 
  public get storageRootCredentialId() {
    return this.getStringAttribute('storage_root_credential_id');
  }
  public set storageRootCredentialId(value: string) {
    this._storageRootCredentialId = value;
  }
  public resetStorageRootCredentialId() {
    this._storageRootCredentialId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageRootCredentialIdInput() {
    return this._storageRootCredentialId;
  }

  // storage_root_credential_name - computed: false, optional: true, required: false
  private _storageRootCredentialName?: string; 
  public get storageRootCredentialName() {
    return this.getStringAttribute('storage_root_credential_name');
  }
  public set storageRootCredentialName(value: string) {
    this._storageRootCredentialName = value;
  }
  public resetStorageRootCredentialName() {
    this._storageRootCredentialName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageRootCredentialNameInput() {
    return this._storageRootCredentialName;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getNumberAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // provider_config - computed: false, optional: true, required: false
  private _providerConfig = new MetastoreProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: MetastoreProviderConfig) {
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
      default_data_access_config_id: cdktn.stringToTerraform(this._defaultDataAccessConfigId),
      delta_sharing_organization_name: cdktn.stringToTerraform(this._deltaSharingOrganizationName),
      delta_sharing_recipient_token_lifetime_in_seconds: cdktn.numberToTerraform(this._deltaSharingRecipientTokenLifetimeInSeconds),
      delta_sharing_scope: cdktn.stringToTerraform(this._deltaSharingScope),
      external_access_enabled: cdktn.booleanToTerraform(this._externalAccessEnabled),
      force_destroy: cdktn.booleanToTerraform(this._forceDestroy),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      owner: cdktn.stringToTerraform(this._owner),
      privilege_model_version: cdktn.stringToTerraform(this._privilegeModelVersion),
      region: cdktn.stringToTerraform(this._region),
      storage_root: cdktn.stringToTerraform(this._storageRoot),
      storage_root_credential_id: cdktn.stringToTerraform(this._storageRootCredentialId),
      storage_root_credential_name: cdktn.stringToTerraform(this._storageRootCredentialName),
      provider_config: metastoreProviderConfigToTerraform(this._providerConfig.internalValue),
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
      default_data_access_config_id: {
        value: cdktn.stringToHclTerraform(this._defaultDataAccessConfigId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delta_sharing_organization_name: {
        value: cdktn.stringToHclTerraform(this._deltaSharingOrganizationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delta_sharing_recipient_token_lifetime_in_seconds: {
        value: cdktn.numberToHclTerraform(this._deltaSharingRecipientTokenLifetimeInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      delta_sharing_scope: {
        value: cdktn.stringToHclTerraform(this._deltaSharingScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_access_enabled: {
        value: cdktn.booleanToHclTerraform(this._externalAccessEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force_destroy: {
        value: cdktn.booleanToHclTerraform(this._forceDestroy),
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
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner: {
        value: cdktn.stringToHclTerraform(this._owner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      privilege_model_version: {
        value: cdktn.stringToHclTerraform(this._privilegeModelVersion),
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
      storage_root: {
        value: cdktn.stringToHclTerraform(this._storageRoot),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_root_credential_id: {
        value: cdktn.stringToHclTerraform(this._storageRootCredentialId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_root_credential_name: {
        value: cdktn.stringToHclTerraform(this._storageRootCredentialName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_config: {
        value: metastoreProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MetastoreProviderConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
