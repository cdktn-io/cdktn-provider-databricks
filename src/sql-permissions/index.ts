/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/sql_permissions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SqlPermissionsConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/sql_permissions#anonymous_function SqlPermissions#anonymous_function}
  */
  readonly anonymousFunction?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/sql_permissions#any_file SqlPermissions#any_file}
  */
  readonly anyFile?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/sql_permissions#catalog SqlPermissions#catalog}
  */
  readonly catalog?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/sql_permissions#cluster_id SqlPermissions#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/sql_permissions#database SqlPermissions#database}
  */
  readonly database?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/sql_permissions#id SqlPermissions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/sql_permissions#table SqlPermissions#table}
  */
  readonly table?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/sql_permissions#view SqlPermissions#view}
  */
  readonly view?: string;
  /**
  * privilege_assignments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/sql_permissions#privilege_assignments SqlPermissions#privilege_assignments}
  */
  readonly privilegeAssignments?: SqlPermissionsPrivilegeAssignments[] | cdktn.IResolvable;
  /**
  * provider_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/sql_permissions#provider_config SqlPermissions#provider_config}
  */
  readonly providerConfig?: SqlPermissionsProviderConfig;
}
export interface SqlPermissionsPrivilegeAssignments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/sql_permissions#principal SqlPermissions#principal}
  */
  readonly principal: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/sql_permissions#privileges SqlPermissions#privileges}
  */
  readonly privileges: string[];
}

export function sqlPermissionsPrivilegeAssignmentsToTerraform(struct?: SqlPermissionsPrivilegeAssignments | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    principal: cdktn.stringToTerraform(struct!.principal),
    privileges: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.privileges),
  }
}


export function sqlPermissionsPrivilegeAssignmentsToHclTerraform(struct?: SqlPermissionsPrivilegeAssignments | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    principal: {
      value: cdktn.stringToHclTerraform(struct!.principal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    privileges: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.privileges),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SqlPermissionsPrivilegeAssignmentsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SqlPermissionsPrivilegeAssignments | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._principal !== undefined) {
      hasAnyValues = true;
      internalValueResult.principal = this._principal;
    }
    if (this._privileges !== undefined) {
      hasAnyValues = true;
      internalValueResult.privileges = this._privileges;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlPermissionsPrivilegeAssignments | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._principal = undefined;
      this._privileges = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._principal = value.principal;
      this._privileges = value.privileges;
    }
  }

  // principal - computed: false, optional: false, required: true
  private _principal?: string; 
  public get principal() {
    return this.getStringAttribute('principal');
  }
  public set principal(value: string) {
    this._principal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal;
  }

  // privileges - computed: false, optional: false, required: true
  private _privileges?: string[]; 
  public get privileges() {
    return cdktn.Fn.tolist(this.getListAttribute('privileges'));
  }
  public set privileges(value: string[]) {
    this._privileges = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegesInput() {
    return this._privileges;
  }
}

export class SqlPermissionsPrivilegeAssignmentsList extends cdktn.ComplexList {
  public internalValue? : SqlPermissionsPrivilegeAssignments[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SqlPermissionsPrivilegeAssignmentsOutputReference {
    return new SqlPermissionsPrivilegeAssignmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SqlPermissionsProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/sql_permissions#workspace_id SqlPermissions#workspace_id}
  */
  readonly workspaceId?: string;
}

export function sqlPermissionsProviderConfigToTerraform(struct?: SqlPermissionsProviderConfigOutputReference | SqlPermissionsProviderConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function sqlPermissionsProviderConfigToHclTerraform(struct?: SqlPermissionsProviderConfigOutputReference | SqlPermissionsProviderConfig): any {
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

export class SqlPermissionsProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SqlPermissionsProviderConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceId = this._workspaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlPermissionsProviderConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._workspaceId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/sql_permissions databricks_sql_permissions}
*/
export class SqlPermissions extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_sql_permissions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SqlPermissions resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SqlPermissions to import
  * @param importFromId The id of the existing SqlPermissions that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/sql_permissions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SqlPermissions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_sql_permissions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/sql_permissions databricks_sql_permissions} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SqlPermissionsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SqlPermissionsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_sql_permissions',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.126.0',
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
    this._anonymousFunction = config.anonymousFunction;
    this._anyFile = config.anyFile;
    this._catalog = config.catalog;
    this._clusterId = config.clusterId;
    this._database = config.database;
    this._id = config.id;
    this._table = config.table;
    this._view = config.view;
    this._privilegeAssignments.internalValue = config.privilegeAssignments;
    this._providerConfig.internalValue = config.providerConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // anonymous_function - computed: false, optional: true, required: false
  private _anonymousFunction?: boolean | cdktn.IResolvable; 
  public get anonymousFunction() {
    return this.getBooleanAttribute('anonymous_function');
  }
  public set anonymousFunction(value: boolean | cdktn.IResolvable) {
    this._anonymousFunction = value;
  }
  public resetAnonymousFunction() {
    this._anonymousFunction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anonymousFunctionInput() {
    return this._anonymousFunction;
  }

  // any_file - computed: false, optional: true, required: false
  private _anyFile?: boolean | cdktn.IResolvable; 
  public get anyFile() {
    return this.getBooleanAttribute('any_file');
  }
  public set anyFile(value: boolean | cdktn.IResolvable) {
    this._anyFile = value;
  }
  public resetAnyFile() {
    this._anyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyFileInput() {
    return this._anyFile;
  }

  // catalog - computed: false, optional: true, required: false
  private _catalog?: boolean | cdktn.IResolvable; 
  public get catalog() {
    return this.getBooleanAttribute('catalog');
  }
  public set catalog(value: boolean | cdktn.IResolvable) {
    this._catalog = value;
  }
  public resetCatalog() {
    this._catalog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog;
  }

  // cluster_id - computed: true, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // database - computed: false, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // table - computed: false, optional: true, required: false
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  public resetTable() {
    this._table = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }

  // view - computed: false, optional: true, required: false
  private _view?: string; 
  public get view() {
    return this.getStringAttribute('view');
  }
  public set view(value: string) {
    this._view = value;
  }
  public resetView() {
    this._view = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewInput() {
    return this._view;
  }

  // privilege_assignments - computed: false, optional: true, required: false
  private _privilegeAssignments = new SqlPermissionsPrivilegeAssignmentsList(this, "privilege_assignments", true);
  public get privilegeAssignments() {
    return this._privilegeAssignments;
  }
  public putPrivilegeAssignments(value: SqlPermissionsPrivilegeAssignments[] | cdktn.IResolvable) {
    this._privilegeAssignments.internalValue = value;
  }
  public resetPrivilegeAssignments() {
    this._privilegeAssignments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegeAssignmentsInput() {
    return this._privilegeAssignments.internalValue;
  }

  // provider_config - computed: false, optional: true, required: false
  private _providerConfig = new SqlPermissionsProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: SqlPermissionsProviderConfig) {
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
      anonymous_function: cdktn.booleanToTerraform(this._anonymousFunction),
      any_file: cdktn.booleanToTerraform(this._anyFile),
      catalog: cdktn.booleanToTerraform(this._catalog),
      cluster_id: cdktn.stringToTerraform(this._clusterId),
      database: cdktn.stringToTerraform(this._database),
      id: cdktn.stringToTerraform(this._id),
      table: cdktn.stringToTerraform(this._table),
      view: cdktn.stringToTerraform(this._view),
      privilege_assignments: cdktn.listMapper(sqlPermissionsPrivilegeAssignmentsToTerraform, true)(this._privilegeAssignments.internalValue),
      provider_config: sqlPermissionsProviderConfigToTerraform(this._providerConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      anonymous_function: {
        value: cdktn.booleanToHclTerraform(this._anonymousFunction),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      any_file: {
        value: cdktn.booleanToHclTerraform(this._anyFile),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      catalog: {
        value: cdktn.booleanToHclTerraform(this._catalog),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cluster_id: {
        value: cdktn.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database: {
        value: cdktn.stringToHclTerraform(this._database),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      table: {
        value: cdktn.stringToHclTerraform(this._table),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      view: {
        value: cdktn.stringToHclTerraform(this._view),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      privilege_assignments: {
        value: cdktn.listMapperHcl(sqlPermissionsPrivilegeAssignmentsToHclTerraform, true)(this._privilegeAssignments.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SqlPermissionsPrivilegeAssignmentsList",
      },
      provider_config: {
        value: sqlPermissionsProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SqlPermissionsProviderConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
