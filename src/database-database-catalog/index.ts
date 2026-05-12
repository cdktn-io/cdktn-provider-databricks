/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/database_database_catalog
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DatabaseDatabaseCatalogConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/database_database_catalog#create_database_if_not_exists DatabaseDatabaseCatalog#create_database_if_not_exists}
  */
  readonly createDatabaseIfNotExists?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/database_database_catalog#database_instance_name DatabaseDatabaseCatalog#database_instance_name}
  */
  readonly databaseInstanceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/database_database_catalog#database_name DatabaseDatabaseCatalog#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/database_database_catalog#name DatabaseDatabaseCatalog#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/database_database_catalog#provider_config DatabaseDatabaseCatalog#provider_config}
  */
  readonly providerConfig?: DatabaseDatabaseCatalogProviderConfig;
}
export interface DatabaseDatabaseCatalogProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/database_database_catalog#workspace_id DatabaseDatabaseCatalog#workspace_id}
  */
  readonly workspaceId?: string;
}

export function databaseDatabaseCatalogProviderConfigToTerraform(struct?: DatabaseDatabaseCatalogProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function databaseDatabaseCatalogProviderConfigToHclTerraform(struct?: DatabaseDatabaseCatalogProviderConfig | cdktn.IResolvable): any {
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

export class DatabaseDatabaseCatalogProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabaseDatabaseCatalogProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DatabaseDatabaseCatalogProviderConfig | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/database_database_catalog databricks_database_database_catalog}
*/
export class DatabaseDatabaseCatalog extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_database_database_catalog";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DatabaseDatabaseCatalog resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabaseDatabaseCatalog to import
  * @param importFromId The id of the existing DatabaseDatabaseCatalog that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/database_database_catalog#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabaseDatabaseCatalog to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_database_database_catalog", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/database_database_catalog databricks_database_database_catalog} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseDatabaseCatalogConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseDatabaseCatalogConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_database_database_catalog',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.115.0',
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
    this._createDatabaseIfNotExists = config.createDatabaseIfNotExists;
    this._databaseInstanceName = config.databaseInstanceName;
    this._databaseName = config.databaseName;
    this._name = config.name;
    this._providerConfig.internalValue = config.providerConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_database_if_not_exists - computed: true, optional: true, required: false
  private _createDatabaseIfNotExists?: boolean | cdktn.IResolvable; 
  public get createDatabaseIfNotExists() {
    return this.getBooleanAttribute('create_database_if_not_exists');
  }
  public set createDatabaseIfNotExists(value: boolean | cdktn.IResolvable) {
    this._createDatabaseIfNotExists = value;
  }
  public resetCreateDatabaseIfNotExists() {
    this._createDatabaseIfNotExists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createDatabaseIfNotExistsInput() {
    return this._createDatabaseIfNotExists;
  }

  // database_instance_name - computed: false, optional: false, required: true
  private _databaseInstanceName?: string; 
  public get databaseInstanceName() {
    return this.getStringAttribute('database_instance_name');
  }
  public set databaseInstanceName(value: string) {
    this._databaseInstanceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInstanceNameInput() {
    return this._databaseInstanceName;
  }

  // database_name - computed: false, optional: false, required: true
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
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

  // provider_config - computed: true, optional: true, required: false
  private _providerConfig = new DatabaseDatabaseCatalogProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DatabaseDatabaseCatalogProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      create_database_if_not_exists: cdktn.booleanToTerraform(this._createDatabaseIfNotExists),
      database_instance_name: cdktn.stringToTerraform(this._databaseInstanceName),
      database_name: cdktn.stringToTerraform(this._databaseName),
      name: cdktn.stringToTerraform(this._name),
      provider_config: databaseDatabaseCatalogProviderConfigToTerraform(this._providerConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      create_database_if_not_exists: {
        value: cdktn.booleanToHclTerraform(this._createDatabaseIfNotExists),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      database_instance_name: {
        value: cdktn.stringToHclTerraform(this._databaseInstanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_name: {
        value: cdktn.stringToHclTerraform(this._databaseName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_config: {
        value: databaseDatabaseCatalogProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatabaseDatabaseCatalogProviderConfig",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
