/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/default_namespace_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DefaultNamespaceSettingConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/default_namespace_setting#etag DefaultNamespaceSetting#etag}
  */
  readonly etag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/default_namespace_setting#id DefaultNamespaceSetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/default_namespace_setting#setting_name DefaultNamespaceSetting#setting_name}
  */
  readonly settingName?: string;
  /**
  * namespace block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/default_namespace_setting#namespace DefaultNamespaceSetting#namespace}
  */
  readonly namespace: DefaultNamespaceSettingNamespace;
  /**
  * provider_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/default_namespace_setting#provider_config DefaultNamespaceSetting#provider_config}
  */
  readonly providerConfig?: DefaultNamespaceSettingProviderConfig;
}
export interface DefaultNamespaceSettingNamespace {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/default_namespace_setting#value DefaultNamespaceSetting#value}
  */
  readonly value?: string;
}

export function defaultNamespaceSettingNamespaceToTerraform(struct?: DefaultNamespaceSettingNamespaceOutputReference | DefaultNamespaceSettingNamespace): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function defaultNamespaceSettingNamespaceToHclTerraform(struct?: DefaultNamespaceSettingNamespaceOutputReference | DefaultNamespaceSettingNamespace): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DefaultNamespaceSettingNamespaceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DefaultNamespaceSettingNamespace | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultNamespaceSettingNamespace | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DefaultNamespaceSettingProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/default_namespace_setting#workspace_id DefaultNamespaceSetting#workspace_id}
  */
  readonly workspaceId: string;
}

export function defaultNamespaceSettingProviderConfigToTerraform(struct?: DefaultNamespaceSettingProviderConfigOutputReference | DefaultNamespaceSettingProviderConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function defaultNamespaceSettingProviderConfigToHclTerraform(struct?: DefaultNamespaceSettingProviderConfigOutputReference | DefaultNamespaceSettingProviderConfig): any {
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

export class DefaultNamespaceSettingProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DefaultNamespaceSettingProviderConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceId = this._workspaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultNamespaceSettingProviderConfig | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/default_namespace_setting databricks_default_namespace_setting}
*/
export class DefaultNamespaceSetting extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_default_namespace_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DefaultNamespaceSetting resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DefaultNamespaceSetting to import
  * @param importFromId The id of the existing DefaultNamespaceSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/default_namespace_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DefaultNamespaceSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_default_namespace_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/default_namespace_setting databricks_default_namespace_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultNamespaceSettingConfig
  */
  public constructor(scope: Construct, id: string, config: DefaultNamespaceSettingConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_default_namespace_setting',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.110.0',
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
    this._namespace.internalValue = config.namespace;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace = new DefaultNamespaceSettingNamespaceOutputReference(this, "namespace");
  public get namespace() {
    return this._namespace;
  }
  public putNamespace(value: DefaultNamespaceSettingNamespace) {
    this._namespace.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace.internalValue;
  }

  // provider_config - computed: false, optional: true, required: false
  private _providerConfig = new DefaultNamespaceSettingProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DefaultNamespaceSettingProviderConfig) {
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
      namespace: defaultNamespaceSettingNamespaceToTerraform(this._namespace.internalValue),
      provider_config: defaultNamespaceSettingProviderConfigToTerraform(this._providerConfig.internalValue),
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
      namespace: {
        value: defaultNamespaceSettingNamespaceToHclTerraform(this._namespace.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DefaultNamespaceSettingNamespaceList",
      },
      provider_config: {
        value: defaultNamespaceSettingProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DefaultNamespaceSettingProviderConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
