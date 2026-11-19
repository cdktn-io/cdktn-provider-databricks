/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/assume_group_restricted_sharing_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface AssumeGroupRestrictedSharingGroupConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/assume_group_restricted_sharing_group#provider_config AssumeGroupRestrictedSharingGroup#provider_config}
  */
  readonly providerConfig?: AssumeGroupRestrictedSharingGroupProviderConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/assume_group_restricted_sharing_group#restricted_sharing_group_id AssumeGroupRestrictedSharingGroup#restricted_sharing_group_id}
  */
  readonly restrictedSharingGroupId: string;
}
export interface AssumeGroupRestrictedSharingGroupProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/assume_group_restricted_sharing_group#workspace_id AssumeGroupRestrictedSharingGroup#workspace_id}
  */
  readonly workspaceId?: string;
}

export function assumeGroupRestrictedSharingGroupProviderConfigToTerraform(struct?: AssumeGroupRestrictedSharingGroupProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function assumeGroupRestrictedSharingGroupProviderConfigToHclTerraform(struct?: AssumeGroupRestrictedSharingGroupProviderConfig | cdktn.IResolvable): any {
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

export class AssumeGroupRestrictedSharingGroupProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AssumeGroupRestrictedSharingGroupProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AssumeGroupRestrictedSharingGroupProviderConfig | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/assume_group_restricted_sharing_group databricks_assume_group_restricted_sharing_group}
*/
export class AssumeGroupRestrictedSharingGroup extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_assume_group_restricted_sharing_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AssumeGroupRestrictedSharingGroup resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AssumeGroupRestrictedSharingGroup to import
  * @param importFromId The id of the existing AssumeGroupRestrictedSharingGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/assume_group_restricted_sharing_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AssumeGroupRestrictedSharingGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_assume_group_restricted_sharing_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/resources/assume_group_restricted_sharing_group databricks_assume_group_restricted_sharing_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AssumeGroupRestrictedSharingGroupConfig
  */
  public constructor(scope: Construct, id: string, config: AssumeGroupRestrictedSharingGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_assume_group_restricted_sharing_group',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.144.0',
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
    this._providerConfig.internalValue = config.providerConfig;
    this._restrictedSharingGroupId = config.restrictedSharingGroupId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group_display_name - computed: true, optional: false, required: false
  public get groupDisplayName() {
    return this.getStringAttribute('group_display_name');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // provider_config - computed: true, optional: true, required: false
  private _providerConfig = new AssumeGroupRestrictedSharingGroupProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: AssumeGroupRestrictedSharingGroupProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // restricted_sharing_group_id - computed: false, optional: false, required: true
  private _restrictedSharingGroupId?: string; 
  public get restrictedSharingGroupId() {
    return this.getStringAttribute('restricted_sharing_group_id');
  }
  public set restrictedSharingGroupId(value: string) {
    this._restrictedSharingGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedSharingGroupIdInput() {
    return this._restrictedSharingGroupId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      provider_config: assumeGroupRestrictedSharingGroupProviderConfigToTerraform(this._providerConfig.internalValue),
      restricted_sharing_group_id: cdktn.stringToTerraform(this._restrictedSharingGroupId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      provider_config: {
        value: assumeGroupRestrictedSharingGroupProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AssumeGroupRestrictedSharingGroupProviderConfig",
      },
      restricted_sharing_group_id: {
        value: cdktn.stringToHclTerraform(this._restrictedSharingGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
