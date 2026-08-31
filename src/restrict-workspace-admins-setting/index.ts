/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/restrict_workspace_admins_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface RestrictWorkspaceAdminsSettingConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/restrict_workspace_admins_setting#etag RestrictWorkspaceAdminsSetting#etag}
  */
  readonly etag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/restrict_workspace_admins_setting#id RestrictWorkspaceAdminsSetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/restrict_workspace_admins_setting#setting_name RestrictWorkspaceAdminsSetting#setting_name}
  */
  readonly settingName?: string;
  /**
  * provider_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/restrict_workspace_admins_setting#provider_config RestrictWorkspaceAdminsSetting#provider_config}
  */
  readonly providerConfig?: RestrictWorkspaceAdminsSettingProviderConfig;
  /**
  * restrict_workspace_admins block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/restrict_workspace_admins_setting#restrict_workspace_admins RestrictWorkspaceAdminsSetting#restrict_workspace_admins}
  */
  readonly restrictWorkspaceAdmins: RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins;
}
export interface RestrictWorkspaceAdminsSettingProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/restrict_workspace_admins_setting#workspace_id RestrictWorkspaceAdminsSetting#workspace_id}
  */
  readonly workspaceId?: string;
}

export function restrictWorkspaceAdminsSettingProviderConfigToTerraform(struct?: RestrictWorkspaceAdminsSettingProviderConfigOutputReference | RestrictWorkspaceAdminsSettingProviderConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function restrictWorkspaceAdminsSettingProviderConfigToHclTerraform(struct?: RestrictWorkspaceAdminsSettingProviderConfigOutputReference | RestrictWorkspaceAdminsSettingProviderConfig): any {
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

export class RestrictWorkspaceAdminsSettingProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RestrictWorkspaceAdminsSettingProviderConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceId = this._workspaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RestrictWorkspaceAdminsSettingProviderConfig | undefined) {
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
export interface RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/restrict_workspace_admins_setting#disable_gov_tag_creation RestrictWorkspaceAdminsSetting#disable_gov_tag_creation}
  */
  readonly disableGovTagCreation?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/restrict_workspace_admins_setting#status RestrictWorkspaceAdminsSetting#status}
  */
  readonly status: string;
}

export function restrictWorkspaceAdminsSettingRestrictWorkspaceAdminsToTerraform(struct?: RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference | RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    disable_gov_tag_creation: cdktn.booleanToTerraform(struct!.disableGovTagCreation),
    status: cdktn.stringToTerraform(struct!.status),
  }
}


export function restrictWorkspaceAdminsSettingRestrictWorkspaceAdminsToHclTerraform(struct?: RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference | RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    disable_gov_tag_creation: {
      value: cdktn.booleanToHclTerraform(struct!.disableGovTagCreation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    status: {
      value: cdktn.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableGovTagCreation !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableGovTagCreation = this._disableGovTagCreation;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableGovTagCreation = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableGovTagCreation = value.disableGovTagCreation;
      this._status = value.status;
    }
  }

  // disable_gov_tag_creation - computed: false, optional: true, required: false
  private _disableGovTagCreation?: boolean | cdktn.IResolvable; 
  public get disableGovTagCreation() {
    return this.getBooleanAttribute('disable_gov_tag_creation');
  }
  public set disableGovTagCreation(value: boolean | cdktn.IResolvable) {
    this._disableGovTagCreation = value;
  }
  public resetDisableGovTagCreation() {
    this._disableGovTagCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableGovTagCreationInput() {
    return this._disableGovTagCreation;
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/restrict_workspace_admins_setting databricks_restrict_workspace_admins_setting}
*/
export class RestrictWorkspaceAdminsSetting extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_restrict_workspace_admins_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a RestrictWorkspaceAdminsSetting resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RestrictWorkspaceAdminsSetting to import
  * @param importFromId The id of the existing RestrictWorkspaceAdminsSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/restrict_workspace_admins_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RestrictWorkspaceAdminsSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_restrict_workspace_admins_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/restrict_workspace_admins_setting databricks_restrict_workspace_admins_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RestrictWorkspaceAdminsSettingConfig
  */
  public constructor(scope: Construct, id: string, config: RestrictWorkspaceAdminsSettingConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_restrict_workspace_admins_setting',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.130.0',
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
    this._etag = config.etag;
    this._id = config.id;
    this._settingName = config.settingName;
    this._providerConfig.internalValue = config.providerConfig;
    this._restrictWorkspaceAdmins.internalValue = config.restrictWorkspaceAdmins;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // etag - computed: true, optional: true, required: false
  private _etag?: string; 
  public get etag() {
    return this.getStringAttribute('etag');
  }
  public set etag(value: string) {
    this._etag = value;
  }
  public resetEtag() {
    this._etag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etagInput() {
    return this._etag;
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

  // setting_name - computed: true, optional: true, required: false
  private _settingName?: string; 
  public get settingName() {
    return this.getStringAttribute('setting_name');
  }
  public set settingName(value: string) {
    this._settingName = value;
  }
  public resetSettingName() {
    this._settingName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingNameInput() {
    return this._settingName;
  }

  // provider_config - computed: false, optional: true, required: false
  private _providerConfig = new RestrictWorkspaceAdminsSettingProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: RestrictWorkspaceAdminsSettingProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // restrict_workspace_admins - computed: false, optional: false, required: true
  private _restrictWorkspaceAdmins = new RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference(this, "restrict_workspace_admins");
  public get restrictWorkspaceAdmins() {
    return this._restrictWorkspaceAdmins;
  }
  public putRestrictWorkspaceAdmins(value: RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins) {
    this._restrictWorkspaceAdmins.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictWorkspaceAdminsInput() {
    return this._restrictWorkspaceAdmins.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      etag: cdktn.stringToTerraform(this._etag),
      id: cdktn.stringToTerraform(this._id),
      setting_name: cdktn.stringToTerraform(this._settingName),
      provider_config: restrictWorkspaceAdminsSettingProviderConfigToTerraform(this._providerConfig.internalValue),
      restrict_workspace_admins: restrictWorkspaceAdminsSettingRestrictWorkspaceAdminsToTerraform(this._restrictWorkspaceAdmins.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      etag: {
        value: cdktn.stringToHclTerraform(this._etag),
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
      setting_name: {
        value: cdktn.stringToHclTerraform(this._settingName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_config: {
        value: restrictWorkspaceAdminsSettingProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RestrictWorkspaceAdminsSettingProviderConfigList",
      },
      restrict_workspace_admins: {
        value: restrictWorkspaceAdminsSettingRestrictWorkspaceAdminsToHclTerraform(this._restrictWorkspaceAdmins.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
