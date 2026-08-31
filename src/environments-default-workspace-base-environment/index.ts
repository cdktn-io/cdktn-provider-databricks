/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/environments_default_workspace_base_environment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface EnvironmentsDefaultWorkspaceBaseEnvironmentConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/environments_default_workspace_base_environment#cpu_workspace_base_environment EnvironmentsDefaultWorkspaceBaseEnvironment#cpu_workspace_base_environment}
  */
  readonly cpuWorkspaceBaseEnvironment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/environments_default_workspace_base_environment#gpu_workspace_base_environment EnvironmentsDefaultWorkspaceBaseEnvironment#gpu_workspace_base_environment}
  */
  readonly gpuWorkspaceBaseEnvironment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/environments_default_workspace_base_environment#provider_config EnvironmentsDefaultWorkspaceBaseEnvironment#provider_config}
  */
  readonly providerConfig?: EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig;
}
export interface EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/environments_default_workspace_base_environment#workspace_id EnvironmentsDefaultWorkspaceBaseEnvironment#workspace_id}
  */
  readonly workspaceId?: string;
}

export function environmentsDefaultWorkspaceBaseEnvironmentProviderConfigToTerraform(struct?: EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function environmentsDefaultWorkspaceBaseEnvironmentProviderConfigToHclTerraform(struct?: EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig | cdktn.IResolvable): any {
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

export class EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig | cdktn.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/environments_default_workspace_base_environment databricks_environments_default_workspace_base_environment}
*/
export class EnvironmentsDefaultWorkspaceBaseEnvironment extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_environments_default_workspace_base_environment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a EnvironmentsDefaultWorkspaceBaseEnvironment resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EnvironmentsDefaultWorkspaceBaseEnvironment to import
  * @param importFromId The id of the existing EnvironmentsDefaultWorkspaceBaseEnvironment that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/environments_default_workspace_base_environment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EnvironmentsDefaultWorkspaceBaseEnvironment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_environments_default_workspace_base_environment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/environments_default_workspace_base_environment databricks_environments_default_workspace_base_environment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EnvironmentsDefaultWorkspaceBaseEnvironmentConfig = {}
  */
  public constructor(scope: Construct, id: string, config: EnvironmentsDefaultWorkspaceBaseEnvironmentConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_environments_default_workspace_base_environment',
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
    this._cpuWorkspaceBaseEnvironment = config.cpuWorkspaceBaseEnvironment;
    this._gpuWorkspaceBaseEnvironment = config.gpuWorkspaceBaseEnvironment;
    this._providerConfig.internalValue = config.providerConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cpu_workspace_base_environment - computed: false, optional: true, required: false
  private _cpuWorkspaceBaseEnvironment?: string; 
  public get cpuWorkspaceBaseEnvironment() {
    return this.getStringAttribute('cpu_workspace_base_environment');
  }
  public set cpuWorkspaceBaseEnvironment(value: string) {
    this._cpuWorkspaceBaseEnvironment = value;
  }
  public resetCpuWorkspaceBaseEnvironment() {
    this._cpuWorkspaceBaseEnvironment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuWorkspaceBaseEnvironmentInput() {
    return this._cpuWorkspaceBaseEnvironment;
  }

  // gpu_workspace_base_environment - computed: false, optional: true, required: false
  private _gpuWorkspaceBaseEnvironment?: string; 
  public get gpuWorkspaceBaseEnvironment() {
    return this.getStringAttribute('gpu_workspace_base_environment');
  }
  public set gpuWorkspaceBaseEnvironment(value: string) {
    this._gpuWorkspaceBaseEnvironment = value;
  }
  public resetGpuWorkspaceBaseEnvironment() {
    this._gpuWorkspaceBaseEnvironment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuWorkspaceBaseEnvironmentInput() {
    return this._gpuWorkspaceBaseEnvironment;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // provider_config - computed: true, optional: true, required: false
  private _providerConfig = new EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig) {
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
      cpu_workspace_base_environment: cdktn.stringToTerraform(this._cpuWorkspaceBaseEnvironment),
      gpu_workspace_base_environment: cdktn.stringToTerraform(this._gpuWorkspaceBaseEnvironment),
      provider_config: environmentsDefaultWorkspaceBaseEnvironmentProviderConfigToTerraform(this._providerConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cpu_workspace_base_environment: {
        value: cdktn.stringToHclTerraform(this._cpuWorkspaceBaseEnvironment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gpu_workspace_base_environment: {
        value: cdktn.stringToHclTerraform(this._gpuWorkspaceBaseEnvironment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_config: {
        value: environmentsDefaultWorkspaceBaseEnvironmentProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
