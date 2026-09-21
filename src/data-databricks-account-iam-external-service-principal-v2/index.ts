/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/account_iam_external_service_principal_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataDatabricksAccountIamExternalServicePrincipalV2Config extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/account_iam_external_service_principal_v2#name DataDatabricksAccountIamExternalServicePrincipalV2#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/account_iam_external_service_principal_v2 databricks_account_iam_external_service_principal_v2}
*/
export class DataDatabricksAccountIamExternalServicePrincipalV2 extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_account_iam_external_service_principal_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataDatabricksAccountIamExternalServicePrincipalV2 resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksAccountIamExternalServicePrincipalV2 to import
  * @param importFromId The id of the existing DataDatabricksAccountIamExternalServicePrincipalV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/account_iam_external_service_principal_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksAccountIamExternalServicePrincipalV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_account_iam_external_service_principal_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/account_iam_external_service_principal_v2 databricks_account_iam_external_service_principal_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksAccountIamExternalServicePrincipalV2Config
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksAccountIamExternalServicePrincipalV2Config) {
    super(scope, id, {
      terraformResourceType: 'databricks_account_iam_external_service_principal_v2',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.133.0',
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

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // account_sp_status - computed: true, optional: false, required: false
  public get accountSpStatus() {
    return this.getStringAttribute('account_sp_status');
  }

  // application_id - computed: true, optional: false, required: false
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // external_service_principal_id - computed: true, optional: false, required: false
  public get externalServicePrincipalId() {
    return this.getStringAttribute('external_service_principal_id');
  }

  // internal_id - computed: true, optional: false, required: false
  public get internalId() {
    return this.getStringAttribute('internal_id');
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
