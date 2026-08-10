/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/environments_workspace_base_environments
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/environments_workspace_base_environments#page_size DataDatabricksEnvironmentsWorkspaceBaseEnvironments#page_size}
  */
  readonly pageSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/environments_workspace_base_environments#provider_config DataDatabricksEnvironmentsWorkspaceBaseEnvironments#provider_config}
  */
  readonly providerConfig?: DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig;
}
export interface DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/environments_workspace_base_environments#workspace_id DataDatabricksEnvironmentsWorkspaceBaseEnvironments#workspace_id}
  */
  readonly workspaceId?: string;
}

export function dataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigToTerraform(struct?: DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function dataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigToHclTerraform(struct?: DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig | cdktn.IResolvable): any {
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

export class DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/environments_workspace_base_environments#workspace_id DataDatabricksEnvironmentsWorkspaceBaseEnvironments#workspace_id}
  */
  readonly workspaceId?: string;
}

export function dataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigToTerraform(struct?: DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function dataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigToHclTerraform(struct?: DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig | cdktn.IResolvable): any {
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

export class DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/environments_workspace_base_environments#dependencies DataDatabricksEnvironmentsWorkspaceBaseEnvironments#dependencies}
  */
  readonly dependencies?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/environments_workspace_base_environments#environment_version DataDatabricksEnvironmentsWorkspaceBaseEnvironments#environment_version}
  */
  readonly environmentVersion?: string;
}

export function dataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecToTerraform(struct?: DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dependencies: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.dependencies),
    environment_version: cdktn.stringToTerraform(struct!.environmentVersion),
  }
}


export function dataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecToHclTerraform(struct?: DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpec): any {
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

export class DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpec | undefined {
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

  public set internalValue(value: DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpec | undefined) {
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
export interface DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/environments_workspace_base_environments#name DataDatabricksEnvironmentsWorkspaceBaseEnvironments#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/environments_workspace_base_environments#provider_config DataDatabricksEnvironmentsWorkspaceBaseEnvironments#provider_config}
  */
  readonly providerConfig?: DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig;
}

export function dataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsToTerraform(struct?: DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    provider_config: dataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigToTerraform(struct!.providerConfig),
  }
}


export function dataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsToHclTerraform(struct?: DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider_config: {
      value: dataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigToHclTerraform(struct!.providerConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._providerConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerConfig = this._providerConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._providerConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._providerConfig.internalValue = value.providerConfig;
    }
  }

  // base_environment_type - computed: true, optional: false, required: false
  public get baseEnvironmentType() {
    return this.getStringAttribute('base_environment_type');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // creator_user_id - computed: true, optional: false, required: false
  public get creatorUserId() {
    return this.getStringAttribute('creator_user_id');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // effective_base_environment_type - computed: true, optional: false, required: false
  public get effectiveBaseEnvironmentType() {
    return this.getStringAttribute('effective_base_environment_type');
  }

  // filepath - computed: true, optional: false, required: false
  public get filepath() {
    return this.getStringAttribute('filepath');
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

  // name - computed: true, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // provider_config - computed: true, optional: true, required: false
  private _providerConfig = new DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig) {
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
  private _spec = new DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference(this, "spec");
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
}

export class DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference {
    return new DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/environments_workspace_base_environments databricks_environments_workspace_base_environments}
*/
export class DataDatabricksEnvironmentsWorkspaceBaseEnvironments extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_environments_workspace_base_environments";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataDatabricksEnvironmentsWorkspaceBaseEnvironments resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksEnvironmentsWorkspaceBaseEnvironments to import
  * @param importFromId The id of the existing DataDatabricksEnvironmentsWorkspaceBaseEnvironments that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/environments_workspace_base_environments#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksEnvironmentsWorkspaceBaseEnvironments to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_environments_workspace_base_environments", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/environments_workspace_base_environments databricks_environments_workspace_base_environments} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_environments_workspace_base_environments',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.125.0',
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
    this._pageSize = config.pageSize;
    this._providerConfig.internalValue = config.providerConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // page_size - computed: false, optional: true, required: false
  private _pageSize?: number; 
  public get pageSize() {
    return this.getNumberAttribute('page_size');
  }
  public set pageSize(value: number) {
    this._pageSize = value;
  }
  public resetPageSize() {
    this._pageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageSizeInput() {
    return this._pageSize;
  }

  // provider_config - computed: false, optional: true, required: false
  private _providerConfig = new DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // workspace_base_environments - computed: true, optional: false, required: false
  private _workspaceBaseEnvironments = new DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList(this, "workspace_base_environments", false);
  public get workspaceBaseEnvironments() {
    return this._workspaceBaseEnvironments;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      page_size: cdktn.numberToTerraform(this._pageSize),
      provider_config: dataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigToTerraform(this._providerConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      page_size: {
        value: cdktn.numberToHclTerraform(this._pageSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      provider_config: {
        value: dataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
