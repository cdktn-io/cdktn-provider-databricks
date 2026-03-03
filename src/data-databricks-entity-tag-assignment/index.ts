/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/entity_tag_assignment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataDatabricksEntityTagAssignmentConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/entity_tag_assignment#entity_name DataDatabricksEntityTagAssignment#entity_name}
  */
  readonly entityName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/entity_tag_assignment#entity_type DataDatabricksEntityTagAssignment#entity_type}
  */
  readonly entityType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/entity_tag_assignment#provider_config DataDatabricksEntityTagAssignment#provider_config}
  */
  readonly providerConfig?: DataDatabricksEntityTagAssignmentProviderConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/entity_tag_assignment#tag_key DataDatabricksEntityTagAssignment#tag_key}
  */
  readonly tagKey: string;
}
export interface DataDatabricksEntityTagAssignmentProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/entity_tag_assignment#workspace_id DataDatabricksEntityTagAssignment#workspace_id}
  */
  readonly workspaceId: string;
}

export function dataDatabricksEntityTagAssignmentProviderConfigToTerraform(struct?: DataDatabricksEntityTagAssignmentProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function dataDatabricksEntityTagAssignmentProviderConfigToHclTerraform(struct?: DataDatabricksEntityTagAssignmentProviderConfig | cdktn.IResolvable): any {
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

export class DataDatabricksEntityTagAssignmentProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksEntityTagAssignmentProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksEntityTagAssignmentProviderConfig | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/entity_tag_assignment databricks_entity_tag_assignment}
*/
export class DataDatabricksEntityTagAssignment extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_entity_tag_assignment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataDatabricksEntityTagAssignment resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksEntityTagAssignment to import
  * @param importFromId The id of the existing DataDatabricksEntityTagAssignment that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/entity_tag_assignment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksEntityTagAssignment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_entity_tag_assignment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/entity_tag_assignment databricks_entity_tag_assignment} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksEntityTagAssignmentConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksEntityTagAssignmentConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_entity_tag_assignment',
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
    this._entityName = config.entityName;
    this._entityType = config.entityType;
    this._providerConfig.internalValue = config.providerConfig;
    this._tagKey = config.tagKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // entity_name - computed: false, optional: false, required: true
  private _entityName?: string; 
  public get entityName() {
    return this.getStringAttribute('entity_name');
  }
  public set entityName(value: string) {
    this._entityName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityNameInput() {
    return this._entityName;
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
  private _providerConfig = new DataDatabricksEntityTagAssignmentProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataDatabricksEntityTagAssignmentProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // source_type - computed: true, optional: false, required: false
  public get sourceType() {
    return this.getStringAttribute('source_type');
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

  // tag_value - computed: true, optional: false, required: false
  public get tagValue() {
    return this.getStringAttribute('tag_value');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      entity_name: cdktn.stringToTerraform(this._entityName),
      entity_type: cdktn.stringToTerraform(this._entityType),
      provider_config: dataDatabricksEntityTagAssignmentProviderConfigToTerraform(this._providerConfig.internalValue),
      tag_key: cdktn.stringToTerraform(this._tagKey),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      entity_name: {
        value: cdktn.stringToHclTerraform(this._entityName),
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
        value: dataDatabricksEntityTagAssignmentProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataDatabricksEntityTagAssignmentProviderConfig",
      },
      tag_key: {
        value: cdktn.stringToHclTerraform(this._tagKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
