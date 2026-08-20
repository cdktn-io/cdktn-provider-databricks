/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/account_iam_workspace_assignment_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface AccountIamWorkspaceAssignmentV2Config extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/account_iam_workspace_assignment_v2#entitlements AccountIamWorkspaceAssignmentV2#entitlements}
  */
  readonly entitlements?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/account_iam_workspace_assignment_v2#principal_id AccountIamWorkspaceAssignmentV2#principal_id}
  */
  readonly principalId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/account_iam_workspace_assignment_v2#workspace_id AccountIamWorkspaceAssignmentV2#workspace_id}
  */
  readonly workspaceId?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/account_iam_workspace_assignment_v2 databricks_account_iam_workspace_assignment_v2}
*/
export class AccountIamWorkspaceAssignmentV2 extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_account_iam_workspace_assignment_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AccountIamWorkspaceAssignmentV2 resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AccountIamWorkspaceAssignmentV2 to import
  * @param importFromId The id of the existing AccountIamWorkspaceAssignmentV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/account_iam_workspace_assignment_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AccountIamWorkspaceAssignmentV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_account_iam_workspace_assignment_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/account_iam_workspace_assignment_v2 databricks_account_iam_workspace_assignment_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccountIamWorkspaceAssignmentV2Config
  */
  public constructor(scope: Construct, id: string, config: AccountIamWorkspaceAssignmentV2Config) {
    super(scope, id, {
      terraformResourceType: 'databricks_account_iam_workspace_assignment_v2',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.128.0',
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
    this._entitlements = config.entitlements;
    this._principalId = config.principalId;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // effective_entitlements - computed: true, optional: false, required: false
  public get effectiveEntitlements() {
    return cdktn.Fn.tolist(this.getListAttribute('effective_entitlements'));
  }

  // entitlements - computed: false, optional: true, required: false
  private _entitlements?: string[]; 
  public get entitlements() {
    return cdktn.Fn.tolist(this.getListAttribute('entitlements'));
  }
  public set entitlements(value: string[]) {
    this._entitlements = value;
  }
  public resetEntitlements() {
    this._entitlements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entitlementsInput() {
    return this._entitlements;
  }

  // principal_id - computed: false, optional: false, required: true
  private _principalId?: number; 
  public get principalId() {
    return this.getNumberAttribute('principal_id');
  }
  public set principalId(value: number) {
    this._principalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalIdInput() {
    return this._principalId;
  }

  // principal_type - computed: true, optional: false, required: false
  public get principalType() {
    return this.getStringAttribute('principal_type');
  }

  // workspace_id - computed: true, optional: true, required: false
  private _workspaceId?: number; 
  public get workspaceId() {
    return this.getNumberAttribute('workspace_id');
  }
  public set workspaceId(value: number) {
    this._workspaceId = value;
  }
  public resetWorkspaceId() {
    this._workspaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      entitlements: cdktn.listMapper(cdktn.stringToTerraform, false)(this._entitlements),
      principal_id: cdktn.numberToTerraform(this._principalId),
      workspace_id: cdktn.numberToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      entitlements: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._entitlements),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      principal_id: {
        value: cdktn.numberToHclTerraform(this._principalId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      workspace_id: {
        value: cdktn.numberToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
