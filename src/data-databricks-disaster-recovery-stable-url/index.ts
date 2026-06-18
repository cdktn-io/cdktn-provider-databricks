/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/disaster_recovery_stable_url
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataDatabricksDisasterRecoveryStableUrlConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/disaster_recovery_stable_url#name DataDatabricksDisasterRecoveryStableUrl#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/disaster_recovery_stable_url databricks_disaster_recovery_stable_url}
*/
export class DataDatabricksDisasterRecoveryStableUrl extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_disaster_recovery_stable_url";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataDatabricksDisasterRecoveryStableUrl resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksDisasterRecoveryStableUrl to import
  * @param importFromId The id of the existing DataDatabricksDisasterRecoveryStableUrl that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/disaster_recovery_stable_url#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksDisasterRecoveryStableUrl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_disaster_recovery_stable_url", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/disaster_recovery_stable_url databricks_disaster_recovery_stable_url} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksDisasterRecoveryStableUrlConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksDisasterRecoveryStableUrlConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_disaster_recovery_stable_url',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.118.0',
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
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // failover_group_name - computed: true, optional: false, required: false
  public get failoverGroupName() {
    return this.getStringAttribute('failover_group_name');
  }

  // initial_workspace_id - computed: true, optional: false, required: false
  public get initialWorkspaceId() {
    return this.getStringAttribute('initial_workspace_id');
  }

  // name - computed: false, optional: false, required: true
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

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktn.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
