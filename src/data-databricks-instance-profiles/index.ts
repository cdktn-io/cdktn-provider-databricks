/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/instance_profiles
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataDatabricksInstanceProfilesConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/instance_profiles#id DataDatabricksInstanceProfiles#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * instance_profiles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/instance_profiles#instance_profiles DataDatabricksInstanceProfiles#instance_profiles}
  */
  readonly instanceProfiles?: DataDatabricksInstanceProfilesInstanceProfiles[] | cdktn.IResolvable;
  /**
  * provider_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/instance_profiles#provider_config DataDatabricksInstanceProfiles#provider_config}
  */
  readonly providerConfig?: DataDatabricksInstanceProfilesProviderConfig;
}
export interface DataDatabricksInstanceProfilesInstanceProfiles {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/instance_profiles#arn DataDatabricksInstanceProfiles#arn}
  */
  readonly arn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/instance_profiles#is_meta DataDatabricksInstanceProfiles#is_meta}
  */
  readonly isMeta?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/instance_profiles#name DataDatabricksInstanceProfiles#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/instance_profiles#role_arn DataDatabricksInstanceProfiles#role_arn}
  */
  readonly roleArn?: string;
}

export function dataDatabricksInstanceProfilesInstanceProfilesToTerraform(struct?: DataDatabricksInstanceProfilesInstanceProfiles | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arn: cdktn.stringToTerraform(struct!.arn),
    is_meta: cdktn.booleanToTerraform(struct!.isMeta),
    name: cdktn.stringToTerraform(struct!.name),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function dataDatabricksInstanceProfilesInstanceProfilesToHclTerraform(struct?: DataDatabricksInstanceProfilesInstanceProfiles | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arn: {
      value: cdktn.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_meta: {
      value: cdktn.booleanToHclTerraform(struct!.isMeta),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksInstanceProfilesInstanceProfilesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDatabricksInstanceProfilesInstanceProfiles | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._isMeta !== undefined) {
      hasAnyValues = true;
      internalValueResult.isMeta = this._isMeta;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksInstanceProfilesInstanceProfiles | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
      this._isMeta = undefined;
      this._name = undefined;
      this._roleArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arn = value.arn;
      this._isMeta = value.isMeta;
      this._name = value.name;
      this._roleArn = value.roleArn;
    }
  }

  // arn - computed: true, optional: true, required: false
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  public resetArn() {
    this._arn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // is_meta - computed: true, optional: true, required: false
  private _isMeta?: boolean | cdktn.IResolvable; 
  public get isMeta() {
    return this.getBooleanAttribute('is_meta');
  }
  public set isMeta(value: boolean | cdktn.IResolvable) {
    this._isMeta = value;
  }
  public resetIsMeta() {
    this._isMeta = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMetaInput() {
    return this._isMeta;
  }

  // name - computed: true, optional: true, required: false
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

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}

export class DataDatabricksInstanceProfilesInstanceProfilesList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksInstanceProfilesInstanceProfiles[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatabricksInstanceProfilesInstanceProfilesOutputReference {
    return new DataDatabricksInstanceProfilesInstanceProfilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksInstanceProfilesProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/instance_profiles#workspace_id DataDatabricksInstanceProfiles#workspace_id}
  */
  readonly workspaceId: string;
}

export function dataDatabricksInstanceProfilesProviderConfigToTerraform(struct?: DataDatabricksInstanceProfilesProviderConfigOutputReference | DataDatabricksInstanceProfilesProviderConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function dataDatabricksInstanceProfilesProviderConfigToHclTerraform(struct?: DataDatabricksInstanceProfilesProviderConfigOutputReference | DataDatabricksInstanceProfilesProviderConfig): any {
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

export class DataDatabricksInstanceProfilesProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksInstanceProfilesProviderConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceId = this._workspaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksInstanceProfilesProviderConfig | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/instance_profiles databricks_instance_profiles}
*/
export class DataDatabricksInstanceProfiles extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_instance_profiles";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataDatabricksInstanceProfiles resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksInstanceProfiles to import
  * @param importFromId The id of the existing DataDatabricksInstanceProfiles that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/instance_profiles#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksInstanceProfiles to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_instance_profiles", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/instance_profiles databricks_instance_profiles} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksInstanceProfilesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksInstanceProfilesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_instance_profiles',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.113.0',
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
    this._id = config.id;
    this._instanceProfiles.internalValue = config.instanceProfiles;
    this._providerConfig.internalValue = config.providerConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // instance_profiles - computed: false, optional: true, required: false
  private _instanceProfiles = new DataDatabricksInstanceProfilesInstanceProfilesList(this, "instance_profiles", false);
  public get instanceProfiles() {
    return this._instanceProfiles;
  }
  public putInstanceProfiles(value: DataDatabricksInstanceProfilesInstanceProfiles[] | cdktn.IResolvable) {
    this._instanceProfiles.internalValue = value;
  }
  public resetInstanceProfiles() {
    this._instanceProfiles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceProfilesInput() {
    return this._instanceProfiles.internalValue;
  }

  // provider_config - computed: false, optional: true, required: false
  private _providerConfig = new DataDatabricksInstanceProfilesProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataDatabricksInstanceProfilesProviderConfig) {
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
      id: cdktn.stringToTerraform(this._id),
      instance_profiles: cdktn.listMapper(dataDatabricksInstanceProfilesInstanceProfilesToTerraform, true)(this._instanceProfiles.internalValue),
      provider_config: dataDatabricksInstanceProfilesProviderConfigToTerraform(this._providerConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_profiles: {
        value: cdktn.listMapperHcl(dataDatabricksInstanceProfilesInstanceProfilesToHclTerraform, true)(this._instanceProfiles.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataDatabricksInstanceProfilesInstanceProfilesList",
      },
      provider_config: {
        value: dataDatabricksInstanceProfilesProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataDatabricksInstanceProfilesProviderConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
