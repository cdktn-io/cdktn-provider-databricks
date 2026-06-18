/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/disaster_recovery_stable_url
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DisasterRecoveryStableUrlConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/disaster_recovery_stable_url#initial_workspace_id DisasterRecoveryStableUrl#initial_workspace_id}
  */
  readonly initialWorkspaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/disaster_recovery_stable_url#parent DisasterRecoveryStableUrl#parent}
  */
  readonly parent: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/disaster_recovery_stable_url#stable_url_id DisasterRecoveryStableUrl#stable_url_id}
  */
  readonly stableUrlId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/disaster_recovery_stable_url databricks_disaster_recovery_stable_url}
*/
export class DisasterRecoveryStableUrl extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_disaster_recovery_stable_url";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DisasterRecoveryStableUrl resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DisasterRecoveryStableUrl to import
  * @param importFromId The id of the existing DisasterRecoveryStableUrl that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/disaster_recovery_stable_url#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DisasterRecoveryStableUrl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_disaster_recovery_stable_url", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/disaster_recovery_stable_url databricks_disaster_recovery_stable_url} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DisasterRecoveryStableUrlConfig
  */
  public constructor(scope: Construct, id: string, config: DisasterRecoveryStableUrlConfig) {
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
    this._initialWorkspaceId = config.initialWorkspaceId;
    this._parent = config.parent;
    this._stableUrlId = config.stableUrlId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // failover_group_name - computed: true, optional: false, required: false
  public get failoverGroupName() {
    return this.getStringAttribute('failover_group_name');
  }

  // initial_workspace_id - computed: false, optional: false, required: true
  private _initialWorkspaceId?: string; 
  public get initialWorkspaceId() {
    return this.getStringAttribute('initial_workspace_id');
  }
  public set initialWorkspaceId(value: string) {
    this._initialWorkspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get initialWorkspaceIdInput() {
    return this._initialWorkspaceId;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent - computed: false, optional: false, required: true
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // stable_url_id - computed: false, optional: false, required: true
  private _stableUrlId?: string; 
  public get stableUrlId() {
    return this.getStringAttribute('stable_url_id');
  }
  public set stableUrlId(value: string) {
    this._stableUrlId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stableUrlIdInput() {
    return this._stableUrlId;
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
      initial_workspace_id: cdktn.stringToTerraform(this._initialWorkspaceId),
      parent: cdktn.stringToTerraform(this._parent),
      stable_url_id: cdktn.stringToTerraform(this._stableUrlId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      initial_workspace_id: {
        value: cdktn.stringToHclTerraform(this._initialWorkspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent: {
        value: cdktn.stringToHclTerraform(this._parent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stable_url_id: {
        value: cdktn.stringToHclTerraform(this._stableUrlId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
