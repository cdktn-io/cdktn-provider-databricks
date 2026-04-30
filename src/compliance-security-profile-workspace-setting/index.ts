/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/compliance_security_profile_workspace_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ComplianceSecurityProfileWorkspaceSettingConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/compliance_security_profile_workspace_setting#etag ComplianceSecurityProfileWorkspaceSetting#etag}
  */
  readonly etag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/compliance_security_profile_workspace_setting#id ComplianceSecurityProfileWorkspaceSetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/compliance_security_profile_workspace_setting#setting_name ComplianceSecurityProfileWorkspaceSetting#setting_name}
  */
  readonly settingName?: string;
  /**
  * compliance_security_profile_workspace block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/compliance_security_profile_workspace_setting#compliance_security_profile_workspace ComplianceSecurityProfileWorkspaceSetting#compliance_security_profile_workspace}
  */
  readonly complianceSecurityProfileWorkspace: ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace;
  /**
  * provider_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/compliance_security_profile_workspace_setting#provider_config ComplianceSecurityProfileWorkspaceSetting#provider_config}
  */
  readonly providerConfig?: ComplianceSecurityProfileWorkspaceSettingProviderConfig;
}
export interface ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/compliance_security_profile_workspace_setting#compliance_standards ComplianceSecurityProfileWorkspaceSetting#compliance_standards}
  */
  readonly complianceStandards: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/compliance_security_profile_workspace_setting#is_enabled ComplianceSecurityProfileWorkspaceSetting#is_enabled}
  */
  readonly isEnabled: boolean | cdktn.IResolvable;
}

export function complianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceToTerraform(struct?: ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference | ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compliance_standards: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.complianceStandards),
    is_enabled: cdktn.booleanToTerraform(struct!.isEnabled),
  }
}


export function complianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceToHclTerraform(struct?: ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference | ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compliance_standards: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.complianceStandards),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    is_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._complianceStandards !== undefined) {
      hasAnyValues = true;
      internalValueResult.complianceStandards = this._complianceStandards;
    }
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._complianceStandards = undefined;
      this._isEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._complianceStandards = value.complianceStandards;
      this._isEnabled = value.isEnabled;
    }
  }

  // compliance_standards - computed: false, optional: false, required: true
  private _complianceStandards?: string[]; 
  public get complianceStandards() {
    return this.getListAttribute('compliance_standards');
  }
  public set complianceStandards(value: string[]) {
    this._complianceStandards = value;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceStandardsInput() {
    return this._complianceStandards;
  }

  // is_enabled - computed: false, optional: false, required: true
  private _isEnabled?: boolean | cdktn.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktn.IResolvable) {
    this._isEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }
}
export interface ComplianceSecurityProfileWorkspaceSettingProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/compliance_security_profile_workspace_setting#workspace_id ComplianceSecurityProfileWorkspaceSetting#workspace_id}
  */
  readonly workspaceId: string;
}

export function complianceSecurityProfileWorkspaceSettingProviderConfigToTerraform(struct?: ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference | ComplianceSecurityProfileWorkspaceSettingProviderConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function complianceSecurityProfileWorkspaceSettingProviderConfigToHclTerraform(struct?: ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference | ComplianceSecurityProfileWorkspaceSettingProviderConfig): any {
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

export class ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComplianceSecurityProfileWorkspaceSettingProviderConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceId = this._workspaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComplianceSecurityProfileWorkspaceSettingProviderConfig | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/compliance_security_profile_workspace_setting databricks_compliance_security_profile_workspace_setting}
*/
export class ComplianceSecurityProfileWorkspaceSetting extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_compliance_security_profile_workspace_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ComplianceSecurityProfileWorkspaceSetting resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComplianceSecurityProfileWorkspaceSetting to import
  * @param importFromId The id of the existing ComplianceSecurityProfileWorkspaceSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/compliance_security_profile_workspace_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComplianceSecurityProfileWorkspaceSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_compliance_security_profile_workspace_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/compliance_security_profile_workspace_setting databricks_compliance_security_profile_workspace_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComplianceSecurityProfileWorkspaceSettingConfig
  */
  public constructor(scope: Construct, id: string, config: ComplianceSecurityProfileWorkspaceSettingConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_compliance_security_profile_workspace_setting',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.114.1',
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
    this._complianceSecurityProfileWorkspace.internalValue = config.complianceSecurityProfileWorkspace;
    this._providerConfig.internalValue = config.providerConfig;
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

  // compliance_security_profile_workspace - computed: false, optional: false, required: true
  private _complianceSecurityProfileWorkspace = new ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference(this, "compliance_security_profile_workspace");
  public get complianceSecurityProfileWorkspace() {
    return this._complianceSecurityProfileWorkspace;
  }
  public putComplianceSecurityProfileWorkspace(value: ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace) {
    this._complianceSecurityProfileWorkspace.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceSecurityProfileWorkspaceInput() {
    return this._complianceSecurityProfileWorkspace.internalValue;
  }

  // provider_config - computed: false, optional: true, required: false
  private _providerConfig = new ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: ComplianceSecurityProfileWorkspaceSettingProviderConfig) {
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
      etag: cdktn.stringToTerraform(this._etag),
      id: cdktn.stringToTerraform(this._id),
      setting_name: cdktn.stringToTerraform(this._settingName),
      compliance_security_profile_workspace: complianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceToTerraform(this._complianceSecurityProfileWorkspace.internalValue),
      provider_config: complianceSecurityProfileWorkspaceSettingProviderConfigToTerraform(this._providerConfig.internalValue),
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
      compliance_security_profile_workspace: {
        value: complianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceToHclTerraform(this._complianceSecurityProfileWorkspace.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceList",
      },
      provider_config: {
        value: complianceSecurityProfileWorkspaceSettingProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComplianceSecurityProfileWorkspaceSettingProviderConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
