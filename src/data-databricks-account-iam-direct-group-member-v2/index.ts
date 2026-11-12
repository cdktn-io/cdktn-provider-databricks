/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/account_iam_direct_group_member_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataDatabricksAccountIamDirectGroupMemberV2Config extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/account_iam_direct_group_member_v2#name DataDatabricksAccountIamDirectGroupMemberV2#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/account_iam_direct_group_member_v2 databricks_account_iam_direct_group_member_v2}
*/
export class DataDatabricksAccountIamDirectGroupMemberV2 extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_account_iam_direct_group_member_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataDatabricksAccountIamDirectGroupMemberV2 resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksAccountIamDirectGroupMemberV2 to import
  * @param importFromId The id of the existing DataDatabricksAccountIamDirectGroupMemberV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/account_iam_direct_group_member_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksAccountIamDirectGroupMemberV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_account_iam_direct_group_member_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/account_iam_direct_group_member_v2 databricks_account_iam_direct_group_member_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksAccountIamDirectGroupMemberV2Config
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksAccountIamDirectGroupMemberV2Config) {
    super(scope, id, {
      terraformResourceType: 'databricks_account_iam_direct_group_member_v2',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.142.0',
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

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // external_id - computed: true, optional: false, required: false
  public get externalId() {
    return this.getStringAttribute('external_id');
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }

  // membership_source - computed: true, optional: false, required: false
  public get membershipSource() {
    return this.getStringAttribute('membership_source');
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

  // parent - computed: true, optional: false, required: false
  public get parent() {
    return this.getStringAttribute('parent');
  }

  // principal_id - computed: true, optional: false, required: false
  public get principalId() {
    return this.getNumberAttribute('principal_id');
  }

  // principal_type - computed: true, optional: false, required: false
  public get principalType() {
    return this.getStringAttribute('principal_type');
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
