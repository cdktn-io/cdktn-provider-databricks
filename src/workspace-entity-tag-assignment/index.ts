/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/workspace_entity_tag_assignment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface WorkspaceEntityTagAssignmentConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/workspace_entity_tag_assignment#entity_id WorkspaceEntityTagAssignment#entity_id}
  */
  readonly entityId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/workspace_entity_tag_assignment#entity_type WorkspaceEntityTagAssignment#entity_type}
  */
  readonly entityType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/workspace_entity_tag_assignment#provider_config WorkspaceEntityTagAssignment#provider_config}
  */
  readonly providerConfig?: WorkspaceEntityTagAssignmentProviderConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/workspace_entity_tag_assignment#tag_key WorkspaceEntityTagAssignment#tag_key}
  */
  readonly tagKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/workspace_entity_tag_assignment#tag_value WorkspaceEntityTagAssignment#tag_value}
  */
  readonly tagValue?: string;
}
export interface WorkspaceEntityTagAssignmentProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/workspace_entity_tag_assignment#workspace_id WorkspaceEntityTagAssignment#workspace_id}
  */
  readonly workspaceId: string;
}

export function workspaceEntityTagAssignmentProviderConfigToTerraform(struct?: WorkspaceEntityTagAssignmentProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function workspaceEntityTagAssignmentProviderConfigToHclTerraform(struct?: WorkspaceEntityTagAssignmentProviderConfig | cdktn.IResolvable): any {
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

export class WorkspaceEntityTagAssignmentProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceEntityTagAssignmentProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceEntityTagAssignmentProviderConfig | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/workspace_entity_tag_assignment databricks_workspace_entity_tag_assignment}
*/
export class WorkspaceEntityTagAssignment extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_workspace_entity_tag_assignment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a WorkspaceEntityTagAssignment resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkspaceEntityTagAssignment to import
  * @param importFromId The id of the existing WorkspaceEntityTagAssignment that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/workspace_entity_tag_assignment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkspaceEntityTagAssignment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_workspace_entity_tag_assignment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/workspace_entity_tag_assignment databricks_workspace_entity_tag_assignment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkspaceEntityTagAssignmentConfig
  */
  public constructor(scope: Construct, id: string, config: WorkspaceEntityTagAssignmentConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_workspace_entity_tag_assignment',
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
    this._entityId = config.entityId;
    this._entityType = config.entityType;
    this._providerConfig.internalValue = config.providerConfig;
    this._tagKey = config.tagKey;
    this._tagValue = config.tagValue;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // entity_id - computed: false, optional: false, required: true
  private _entityId?: string; 
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }
  public set entityId(value: string) {
    this._entityId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIdInput() {
    return this._entityId;
  }

  // entity_type - computed: false, optional: false, required: true
  private _entityType?: string; 
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }
  public set entityType(value: string) {
    this._entityType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityTypeInput() {
    return this._entityType;
  }

  // provider_config - computed: false, optional: true, required: false
  private _providerConfig = new WorkspaceEntityTagAssignmentProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: WorkspaceEntityTagAssignmentProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // tag_key - computed: false, optional: false, required: true
  private _tagKey?: string; 
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }
  public set tagKey(value: string) {
    this._tagKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyInput() {
    return this._tagKey;
  }

  // tag_value - computed: false, optional: true, required: false
  private _tagValue?: string; 
  public get tagValue() {
    return this.getStringAttribute('tag_value');
  }
  public set tagValue(value: string) {
    this._tagValue = value;
  }
  public resetTagValue() {
    this._tagValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValueInput() {
    return this._tagValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      entity_id: cdktn.stringToTerraform(this._entityId),
      entity_type: cdktn.stringToTerraform(this._entityType),
      provider_config: workspaceEntityTagAssignmentProviderConfigToTerraform(this._providerConfig.internalValue),
      tag_key: cdktn.stringToTerraform(this._tagKey),
      tag_value: cdktn.stringToTerraform(this._tagValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      entity_id: {
        value: cdktn.stringToHclTerraform(this._entityId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entity_type: {
        value: cdktn.stringToHclTerraform(this._entityType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_config: {
        value: workspaceEntityTagAssignmentProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WorkspaceEntityTagAssignmentProviderConfig",
      },
      tag_key: {
        value: cdktn.stringToHclTerraform(this._tagKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag_value: {
        value: cdktn.stringToHclTerraform(this._tagValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
