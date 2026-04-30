/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/enhanced_security_monitoring_workspace_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface EnhancedSecurityMonitoringWorkspaceSettingConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/enhanced_security_monitoring_workspace_setting#etag EnhancedSecurityMonitoringWorkspaceSetting#etag}
  */
  readonly etag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/enhanced_security_monitoring_workspace_setting#id EnhancedSecurityMonitoringWorkspaceSetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/enhanced_security_monitoring_workspace_setting#setting_name EnhancedSecurityMonitoringWorkspaceSetting#setting_name}
  */
  readonly settingName?: string;
  /**
  * enhanced_security_monitoring_workspace block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/enhanced_security_monitoring_workspace_setting#enhanced_security_monitoring_workspace EnhancedSecurityMonitoringWorkspaceSetting#enhanced_security_monitoring_workspace}
  */
  readonly enhancedSecurityMonitoringWorkspace: EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspace;
  /**
  * provider_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/enhanced_security_monitoring_workspace_setting#provider_config EnhancedSecurityMonitoringWorkspaceSetting#provider_config}
  */
  readonly providerConfig?: EnhancedSecurityMonitoringWorkspaceSettingProviderConfig;
}
export interface EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspace {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/enhanced_security_monitoring_workspace_setting#is_enabled EnhancedSecurityMonitoringWorkspaceSetting#is_enabled}
  */
  readonly isEnabled: boolean | cdktn.IResolvable;
}

export function enhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceToTerraform(struct?: EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference | EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspace): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktn.booleanToTerraform(struct!.isEnabled),
  }
}


export function enhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceToHclTerraform(struct?: EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference | EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspace): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspace | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspace | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isEnabled = value.isEnabled;
    }
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
export interface EnhancedSecurityMonitoringWorkspaceSettingProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/enhanced_security_monitoring_workspace_setting#workspace_id EnhancedSecurityMonitoringWorkspaceSetting#workspace_id}
  */
  readonly workspaceId: string;
}

export function enhancedSecurityMonitoringWorkspaceSettingProviderConfigToTerraform(struct?: EnhancedSecurityMonitoringWorkspaceSettingProviderConfigOutputReference | EnhancedSecurityMonitoringWorkspaceSettingProviderConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function enhancedSecurityMonitoringWorkspaceSettingProviderConfigToHclTerraform(struct?: EnhancedSecurityMonitoringWorkspaceSettingProviderConfigOutputReference | EnhancedSecurityMonitoringWorkspaceSettingProviderConfig): any {
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

export class EnhancedSecurityMonitoringWorkspaceSettingProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnhancedSecurityMonitoringWorkspaceSettingProviderConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceId = this._workspaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnhancedSecurityMonitoringWorkspaceSettingProviderConfig | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/enhanced_security_monitoring_workspace_setting databricks_enhanced_security_monitoring_workspace_setting}
*/
export class EnhancedSecurityMonitoringWorkspaceSetting extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_enhanced_security_monitoring_workspace_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a EnhancedSecurityMonitoringWorkspaceSetting resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EnhancedSecurityMonitoringWorkspaceSetting to import
  * @param importFromId The id of the existing EnhancedSecurityMonitoringWorkspaceSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/enhanced_security_monitoring_workspace_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EnhancedSecurityMonitoringWorkspaceSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_enhanced_security_monitoring_workspace_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/enhanced_security_monitoring_workspace_setting databricks_enhanced_security_monitoring_workspace_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EnhancedSecurityMonitoringWorkspaceSettingConfig
  */
  public constructor(scope: Construct, id: string, config: EnhancedSecurityMonitoringWorkspaceSettingConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_enhanced_security_monitoring_workspace_setting',
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
    this._enhancedSecurityMonitoringWorkspace.internalValue = config.enhancedSecurityMonitoringWorkspace;
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

  // enhanced_security_monitoring_workspace - computed: false, optional: false, required: true
  private _enhancedSecurityMonitoringWorkspace = new EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference(this, "enhanced_security_monitoring_workspace");
  public get enhancedSecurityMonitoringWorkspace() {
    return this._enhancedSecurityMonitoringWorkspace;
  }
  public putEnhancedSecurityMonitoringWorkspace(value: EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspace) {
    this._enhancedSecurityMonitoringWorkspace.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedSecurityMonitoringWorkspaceInput() {
    return this._enhancedSecurityMonitoringWorkspace.internalValue;
  }

  // provider_config - computed: false, optional: true, required: false
  private _providerConfig = new EnhancedSecurityMonitoringWorkspaceSettingProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: EnhancedSecurityMonitoringWorkspaceSettingProviderConfig) {
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
      enhanced_security_monitoring_workspace: enhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceToTerraform(this._enhancedSecurityMonitoringWorkspace.internalValue),
      provider_config: enhancedSecurityMonitoringWorkspaceSettingProviderConfigToTerraform(this._providerConfig.internalValue),
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
      enhanced_security_monitoring_workspace: {
        value: enhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceToHclTerraform(this._enhancedSecurityMonitoringWorkspace.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceList",
      },
      provider_config: {
        value: enhancedSecurityMonitoringWorkspaceSettingProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EnhancedSecurityMonitoringWorkspaceSettingProviderConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
