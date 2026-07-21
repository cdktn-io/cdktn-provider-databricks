/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/postgres_synced_table
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface PostgresSyncedTableConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/postgres_synced_table#provider_config PostgresSyncedTable#provider_config}
  */
  readonly providerConfig?: PostgresSyncedTableProviderConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/postgres_synced_table#spec PostgresSyncedTable#spec}
  */
  readonly spec?: PostgresSyncedTableSpec;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/postgres_synced_table#synced_table_id PostgresSyncedTable#synced_table_id}
  */
  readonly syncedTableId: string;
}
export interface PostgresSyncedTableProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/postgres_synced_table#workspace_id PostgresSyncedTable#workspace_id}
  */
  readonly workspaceId?: string;
}

export function postgresSyncedTableProviderConfigToTerraform(struct?: PostgresSyncedTableProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function postgresSyncedTableProviderConfigToHclTerraform(struct?: PostgresSyncedTableProviderConfig | cdktn.IResolvable): any {
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

export class PostgresSyncedTableProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PostgresSyncedTableProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PostgresSyncedTableProviderConfig | cdktn.IResolvable | undefined) {
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
export interface PostgresSyncedTableSpecNewPipelineSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/postgres_synced_table#budget_policy_id PostgresSyncedTable#budget_policy_id}
  */
  readonly budgetPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/postgres_synced_table#storage_catalog PostgresSyncedTable#storage_catalog}
  */
  readonly storageCatalog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/postgres_synced_table#storage_schema PostgresSyncedTable#storage_schema}
  */
  readonly storageSchema?: string;
}

export function postgresSyncedTableSpecNewPipelineSpecToTerraform(struct?: PostgresSyncedTableSpecNewPipelineSpec | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    budget_policy_id: cdktn.stringToTerraform(struct!.budgetPolicyId),
    storage_catalog: cdktn.stringToTerraform(struct!.storageCatalog),
    storage_schema: cdktn.stringToTerraform(struct!.storageSchema),
  }
}


export function postgresSyncedTableSpecNewPipelineSpecToHclTerraform(struct?: PostgresSyncedTableSpecNewPipelineSpec | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    budget_policy_id: {
      value: cdktn.stringToHclTerraform(struct!.budgetPolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_catalog: {
      value: cdktn.stringToHclTerraform(struct!.storageCatalog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_schema: {
      value: cdktn.stringToHclTerraform(struct!.storageSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PostgresSyncedTableSpecNewPipelineSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PostgresSyncedTableSpecNewPipelineSpec | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._budgetPolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.budgetPolicyId = this._budgetPolicyId;
    }
    if (this._storageCatalog !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageCatalog = this._storageCatalog;
    }
    if (this._storageSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageSchema = this._storageSchema;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PostgresSyncedTableSpecNewPipelineSpec | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._budgetPolicyId = undefined;
      this._storageCatalog = undefined;
      this._storageSchema = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._budgetPolicyId = value.budgetPolicyId;
      this._storageCatalog = value.storageCatalog;
      this._storageSchema = value.storageSchema;
    }
  }

  // budget_policy_id - computed: true, optional: true, required: false
  private _budgetPolicyId?: string; 
  public get budgetPolicyId() {
    return this.getStringAttribute('budget_policy_id');
  }
  public set budgetPolicyId(value: string) {
    this._budgetPolicyId = value;
  }
  public resetBudgetPolicyId() {
    this._budgetPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get budgetPolicyIdInput() {
    return this._budgetPolicyId;
  }

  // storage_catalog - computed: true, optional: true, required: false
  private _storageCatalog?: string; 
  public get storageCatalog() {
    return this.getStringAttribute('storage_catalog');
  }
  public set storageCatalog(value: string) {
    this._storageCatalog = value;
  }
  public resetStorageCatalog() {
    this._storageCatalog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageCatalogInput() {
    return this._storageCatalog;
  }

  // storage_schema - computed: true, optional: true, required: false
  private _storageSchema?: string; 
  public get storageSchema() {
    return this.getStringAttribute('storage_schema');
  }
  public set storageSchema(value: string) {
    this._storageSchema = value;
  }
  public resetStorageSchema() {
    this._storageSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageSchemaInput() {
    return this._storageSchema;
  }
}
export interface PostgresSyncedTableSpecTypeOverrides {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/postgres_synced_table#column_name PostgresSyncedTable#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/postgres_synced_table#pg_type PostgresSyncedTable#pg_type}
  */
  readonly pgType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/postgres_synced_table#size PostgresSyncedTable#size}
  */
  readonly size?: number;
}

export function postgresSyncedTableSpecTypeOverridesToTerraform(struct?: PostgresSyncedTableSpecTypeOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    column_name: cdktn.stringToTerraform(struct!.columnName),
    pg_type: cdktn.stringToTerraform(struct!.pgType),
    size: cdktn.numberToTerraform(struct!.size),
  }
}


export function postgresSyncedTableSpecTypeOverridesToHclTerraform(struct?: PostgresSyncedTableSpecTypeOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    column_name: {
      value: cdktn.stringToHclTerraform(struct!.columnName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pg_type: {
      value: cdktn.stringToHclTerraform(struct!.pgType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktn.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PostgresSyncedTableSpecTypeOverridesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PostgresSyncedTableSpecTypeOverrides | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnName = this._columnName;
    }
    if (this._pgType !== undefined) {
      hasAnyValues = true;
      internalValueResult.pgType = this._pgType;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PostgresSyncedTableSpecTypeOverrides | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columnName = undefined;
      this._pgType = undefined;
      this._size = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columnName = value.columnName;
      this._pgType = value.pgType;
      this._size = value.size;
    }
  }

  // column_name - computed: true, optional: false, required: true
  private _columnName?: string; 
  public get columnName() {
    return this.getStringAttribute('column_name');
  }
  public set columnName(value: string) {
    this._columnName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNameInput() {
    return this._columnName;
  }

  // pg_type - computed: true, optional: false, required: true
  private _pgType?: string; 
  public get pgType() {
    return this.getStringAttribute('pg_type');
  }
  public set pgType(value: string) {
    this._pgType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pgTypeInput() {
    return this._pgType;
  }

  // size - computed: true, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }
}

export class PostgresSyncedTableSpecTypeOverridesList extends cdktn.ComplexList {
  public internalValue? : PostgresSyncedTableSpecTypeOverrides[] | cdktn.IResolvable

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
  public get(index: number): PostgresSyncedTableSpecTypeOverridesOutputReference {
    return new PostgresSyncedTableSpecTypeOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PostgresSyncedTableSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/postgres_synced_table#accelerated_sync PostgresSyncedTable#accelerated_sync}
  */
  readonly acceleratedSync?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/postgres_synced_table#branch PostgresSyncedTable#branch}
  */
  readonly branch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/postgres_synced_table#create_database_objects_if_missing PostgresSyncedTable#create_database_objects_if_missing}
  */
  readonly createDatabaseObjectsIfMissing?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/postgres_synced_table#existing_pipeline_id PostgresSyncedTable#existing_pipeline_id}
  */
  readonly existingPipelineId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/postgres_synced_table#new_pipeline_spec PostgresSyncedTable#new_pipeline_spec}
  */
  readonly newPipelineSpec?: PostgresSyncedTableSpecNewPipelineSpec;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/postgres_synced_table#postgres_database PostgresSyncedTable#postgres_database}
  */
  readonly postgresDatabase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/postgres_synced_table#primary_key_columns PostgresSyncedTable#primary_key_columns}
  */
  readonly primaryKeyColumns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/postgres_synced_table#scheduling_policy PostgresSyncedTable#scheduling_policy}
  */
  readonly schedulingPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/postgres_synced_table#source_table_full_name PostgresSyncedTable#source_table_full_name}
  */
  readonly sourceTableFullName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/postgres_synced_table#timeseries_key PostgresSyncedTable#timeseries_key}
  */
  readonly timeseriesKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/postgres_synced_table#type_overrides PostgresSyncedTable#type_overrides}
  */
  readonly typeOverrides?: PostgresSyncedTableSpecTypeOverrides[] | cdktn.IResolvable;
}

export function postgresSyncedTableSpecToTerraform(struct?: PostgresSyncedTableSpec | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    accelerated_sync: cdktn.booleanToTerraform(struct!.acceleratedSync),
    branch: cdktn.stringToTerraform(struct!.branch),
    create_database_objects_if_missing: cdktn.booleanToTerraform(struct!.createDatabaseObjectsIfMissing),
    existing_pipeline_id: cdktn.stringToTerraform(struct!.existingPipelineId),
    new_pipeline_spec: postgresSyncedTableSpecNewPipelineSpecToTerraform(struct!.newPipelineSpec),
    postgres_database: cdktn.stringToTerraform(struct!.postgresDatabase),
    primary_key_columns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.primaryKeyColumns),
    scheduling_policy: cdktn.stringToTerraform(struct!.schedulingPolicy),
    source_table_full_name: cdktn.stringToTerraform(struct!.sourceTableFullName),
    timeseries_key: cdktn.stringToTerraform(struct!.timeseriesKey),
    type_overrides: cdktn.listMapper(postgresSyncedTableSpecTypeOverridesToTerraform, false)(struct!.typeOverrides),
  }
}


export function postgresSyncedTableSpecToHclTerraform(struct?: PostgresSyncedTableSpec | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    accelerated_sync: {
      value: cdktn.booleanToHclTerraform(struct!.acceleratedSync),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    branch: {
      value: cdktn.stringToHclTerraform(struct!.branch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    create_database_objects_if_missing: {
      value: cdktn.booleanToHclTerraform(struct!.createDatabaseObjectsIfMissing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    existing_pipeline_id: {
      value: cdktn.stringToHclTerraform(struct!.existingPipelineId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    new_pipeline_spec: {
      value: postgresSyncedTableSpecNewPipelineSpecToHclTerraform(struct!.newPipelineSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "PostgresSyncedTableSpecNewPipelineSpec",
    },
    postgres_database: {
      value: cdktn.stringToHclTerraform(struct!.postgresDatabase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_key_columns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.primaryKeyColumns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    scheduling_policy: {
      value: cdktn.stringToHclTerraform(struct!.schedulingPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_table_full_name: {
      value: cdktn.stringToHclTerraform(struct!.sourceTableFullName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeseries_key: {
      value: cdktn.stringToHclTerraform(struct!.timeseriesKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_overrides: {
      value: cdktn.listMapperHcl(postgresSyncedTableSpecTypeOverridesToHclTerraform, false)(struct!.typeOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "PostgresSyncedTableSpecTypeOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PostgresSyncedTableSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PostgresSyncedTableSpec | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceleratedSync !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceleratedSync = this._acceleratedSync;
    }
    if (this._branch !== undefined) {
      hasAnyValues = true;
      internalValueResult.branch = this._branch;
    }
    if (this._createDatabaseObjectsIfMissing !== undefined) {
      hasAnyValues = true;
      internalValueResult.createDatabaseObjectsIfMissing = this._createDatabaseObjectsIfMissing;
    }
    if (this._existingPipelineId !== undefined) {
      hasAnyValues = true;
      internalValueResult.existingPipelineId = this._existingPipelineId;
    }
    if (this._newPipelineSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.newPipelineSpec = this._newPipelineSpec?.internalValue;
    }
    if (this._postgresDatabase !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgresDatabase = this._postgresDatabase;
    }
    if (this._primaryKeyColumns !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKeyColumns = this._primaryKeyColumns;
    }
    if (this._schedulingPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulingPolicy = this._schedulingPolicy;
    }
    if (this._sourceTableFullName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceTableFullName = this._sourceTableFullName;
    }
    if (this._timeseriesKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeseriesKey = this._timeseriesKey;
    }
    if (this._typeOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeOverrides = this._typeOverrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PostgresSyncedTableSpec | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acceleratedSync = undefined;
      this._branch = undefined;
      this._createDatabaseObjectsIfMissing = undefined;
      this._existingPipelineId = undefined;
      this._newPipelineSpec.internalValue = undefined;
      this._postgresDatabase = undefined;
      this._primaryKeyColumns = undefined;
      this._schedulingPolicy = undefined;
      this._sourceTableFullName = undefined;
      this._timeseriesKey = undefined;
      this._typeOverrides.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acceleratedSync = value.acceleratedSync;
      this._branch = value.branch;
      this._createDatabaseObjectsIfMissing = value.createDatabaseObjectsIfMissing;
      this._existingPipelineId = value.existingPipelineId;
      this._newPipelineSpec.internalValue = value.newPipelineSpec;
      this._postgresDatabase = value.postgresDatabase;
      this._primaryKeyColumns = value.primaryKeyColumns;
      this._schedulingPolicy = value.schedulingPolicy;
      this._sourceTableFullName = value.sourceTableFullName;
      this._timeseriesKey = value.timeseriesKey;
      this._typeOverrides.internalValue = value.typeOverrides;
    }
  }

  // accelerated_sync - computed: true, optional: true, required: false
  private _acceleratedSync?: boolean | cdktn.IResolvable; 
  public get acceleratedSync() {
    return this.getBooleanAttribute('accelerated_sync');
  }
  public set acceleratedSync(value: boolean | cdktn.IResolvable) {
    this._acceleratedSync = value;
  }
  public resetAcceleratedSync() {
    this._acceleratedSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratedSyncInput() {
    return this._acceleratedSync;
  }

  // branch - computed: true, optional: true, required: false
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  public resetBranch() {
    this._branch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // create_database_objects_if_missing - computed: true, optional: true, required: false
  private _createDatabaseObjectsIfMissing?: boolean | cdktn.IResolvable; 
  public get createDatabaseObjectsIfMissing() {
    return this.getBooleanAttribute('create_database_objects_if_missing');
  }
  public set createDatabaseObjectsIfMissing(value: boolean | cdktn.IResolvable) {
    this._createDatabaseObjectsIfMissing = value;
  }
  public resetCreateDatabaseObjectsIfMissing() {
    this._createDatabaseObjectsIfMissing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createDatabaseObjectsIfMissingInput() {
    return this._createDatabaseObjectsIfMissing;
  }

  // existing_pipeline_id - computed: true, optional: true, required: false
  private _existingPipelineId?: string; 
  public get existingPipelineId() {
    return this.getStringAttribute('existing_pipeline_id');
  }
  public set existingPipelineId(value: string) {
    this._existingPipelineId = value;
  }
  public resetExistingPipelineId() {
    this._existingPipelineId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existingPipelineIdInput() {
    return this._existingPipelineId;
  }

  // new_pipeline_spec - computed: true, optional: true, required: false
  private _newPipelineSpec = new PostgresSyncedTableSpecNewPipelineSpecOutputReference(this, "new_pipeline_spec");
  public get newPipelineSpec() {
    return this._newPipelineSpec;
  }
  public putNewPipelineSpec(value: PostgresSyncedTableSpecNewPipelineSpec) {
    this._newPipelineSpec.internalValue = value;
  }
  public resetNewPipelineSpec() {
    this._newPipelineSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newPipelineSpecInput() {
    return this._newPipelineSpec.internalValue;
  }

  // postgres_database - computed: true, optional: true, required: false
  private _postgresDatabase?: string; 
  public get postgresDatabase() {
    return this.getStringAttribute('postgres_database');
  }
  public set postgresDatabase(value: string) {
    this._postgresDatabase = value;
  }
  public resetPostgresDatabase() {
    this._postgresDatabase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresDatabaseInput() {
    return this._postgresDatabase;
  }

  // primary_key_columns - computed: true, optional: true, required: false
  private _primaryKeyColumns?: string[]; 
  public get primaryKeyColumns() {
    return this.getListAttribute('primary_key_columns');
  }
  public set primaryKeyColumns(value: string[]) {
    this._primaryKeyColumns = value;
  }
  public resetPrimaryKeyColumns() {
    this._primaryKeyColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyColumnsInput() {
    return this._primaryKeyColumns;
  }

  // scheduling_policy - computed: true, optional: true, required: false
  private _schedulingPolicy?: string; 
  public get schedulingPolicy() {
    return this.getStringAttribute('scheduling_policy');
  }
  public set schedulingPolicy(value: string) {
    this._schedulingPolicy = value;
  }
  public resetSchedulingPolicy() {
    this._schedulingPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingPolicyInput() {
    return this._schedulingPolicy;
  }

  // source_table_full_name - computed: true, optional: true, required: false
  private _sourceTableFullName?: string; 
  public get sourceTableFullName() {
    return this.getStringAttribute('source_table_full_name');
  }
  public set sourceTableFullName(value: string) {
    this._sourceTableFullName = value;
  }
  public resetSourceTableFullName() {
    this._sourceTableFullName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTableFullNameInput() {
    return this._sourceTableFullName;
  }

  // timeseries_key - computed: true, optional: true, required: false
  private _timeseriesKey?: string; 
  public get timeseriesKey() {
    return this.getStringAttribute('timeseries_key');
  }
  public set timeseriesKey(value: string) {
    this._timeseriesKey = value;
  }
  public resetTimeseriesKey() {
    this._timeseriesKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeseriesKeyInput() {
    return this._timeseriesKey;
  }

  // type_overrides - computed: true, optional: true, required: false
  private _typeOverrides = new PostgresSyncedTableSpecTypeOverridesList(this, "type_overrides", false);
  public get typeOverrides() {
    return this._typeOverrides;
  }
  public putTypeOverrides(value: PostgresSyncedTableSpecTypeOverrides[] | cdktn.IResolvable) {
    this._typeOverrides.internalValue = value;
  }
  public resetTypeOverrides() {
    this._typeOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeOverridesInput() {
    return this._typeOverrides.internalValue;
  }
}
export interface PostgresSyncedTableStatusLastSyncDeltaTableSyncInfo {
}

export function postgresSyncedTableStatusLastSyncDeltaTableSyncInfoToTerraform(struct?: PostgresSyncedTableStatusLastSyncDeltaTableSyncInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function postgresSyncedTableStatusLastSyncDeltaTableSyncInfoToHclTerraform(struct?: PostgresSyncedTableStatusLastSyncDeltaTableSyncInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PostgresSyncedTableStatusLastSyncDeltaTableSyncInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PostgresSyncedTableStatusLastSyncDeltaTableSyncInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // delta_commit_time - computed: true, optional: false, required: false
  public get deltaCommitTime() {
    return this.getStringAttribute('delta_commit_time');
  }

  // delta_commit_version - computed: true, optional: false, required: false
  public get deltaCommitVersion() {
    return this.getNumberAttribute('delta_commit_version');
  }
}
export interface PostgresSyncedTableStatusLastSync {
}

export function postgresSyncedTableStatusLastSyncToTerraform(struct?: PostgresSyncedTableStatusLastSync): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function postgresSyncedTableStatusLastSyncToHclTerraform(struct?: PostgresSyncedTableStatusLastSync): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class PostgresSyncedTableStatusLastSyncOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PostgresSyncedTableStatusLastSync | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PostgresSyncedTableStatusLastSync | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // delta_table_sync_info - computed: true, optional: false, required: false
  private _deltaTableSyncInfo = new PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference(this, "delta_table_sync_info");
  public get deltaTableSyncInfo() {
    return this._deltaTableSyncInfo;
  }

  // sync_end_time - computed: true, optional: false, required: false
  public get syncEndTime() {
    return this.getStringAttribute('sync_end_time');
  }

  // sync_start_time - computed: true, optional: false, required: false
  public get syncStartTime() {
    return this.getStringAttribute('sync_start_time');
  }
}
export interface PostgresSyncedTableStatusOngoingSyncProgress {
}

export function postgresSyncedTableStatusOngoingSyncProgressToTerraform(struct?: PostgresSyncedTableStatusOngoingSyncProgress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function postgresSyncedTableStatusOngoingSyncProgressToHclTerraform(struct?: PostgresSyncedTableStatusOngoingSyncProgress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class PostgresSyncedTableStatusOngoingSyncProgressOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PostgresSyncedTableStatusOngoingSyncProgress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PostgresSyncedTableStatusOngoingSyncProgress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // estimated_completion_time_seconds - computed: true, optional: false, required: false
  public get estimatedCompletionTimeSeconds() {
    return this.getNumberAttribute('estimated_completion_time_seconds');
  }

  // latest_version_currently_processing - computed: true, optional: false, required: false
  public get latestVersionCurrentlyProcessing() {
    return this.getNumberAttribute('latest_version_currently_processing');
  }

  // sync_progress_completion - computed: true, optional: false, required: false
  public get syncProgressCompletion() {
    return this.getNumberAttribute('sync_progress_completion');
  }

  // synced_row_count - computed: true, optional: false, required: false
  public get syncedRowCount() {
    return this.getNumberAttribute('synced_row_count');
  }

  // total_row_count - computed: true, optional: false, required: false
  public get totalRowCount() {
    return this.getNumberAttribute('total_row_count');
  }
}
export interface PostgresSyncedTableStatus {
}

export function postgresSyncedTableStatusToTerraform(struct?: PostgresSyncedTableStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function postgresSyncedTableStatusToHclTerraform(struct?: PostgresSyncedTableStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class PostgresSyncedTableStatusOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PostgresSyncedTableStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PostgresSyncedTableStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // detailed_state - computed: true, optional: false, required: false
  public get detailedState() {
    return this.getStringAttribute('detailed_state');
  }

  // last_processed_commit_version - computed: true, optional: false, required: false
  public get lastProcessedCommitVersion() {
    return this.getNumberAttribute('last_processed_commit_version');
  }

  // last_sync - computed: true, optional: false, required: false
  private _lastSync = new PostgresSyncedTableStatusLastSyncOutputReference(this, "last_sync");
  public get lastSync() {
    return this._lastSync;
  }

  // last_sync_time - computed: true, optional: false, required: false
  public get lastSyncTime() {
    return this.getStringAttribute('last_sync_time');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // ongoing_sync_progress - computed: true, optional: false, required: false
  private _ongoingSyncProgress = new PostgresSyncedTableStatusOngoingSyncProgressOutputReference(this, "ongoing_sync_progress");
  public get ongoingSyncProgress() {
    return this._ongoingSyncProgress;
  }

  // pipeline_id - computed: true, optional: false, required: false
  public get pipelineId() {
    return this.getStringAttribute('pipeline_id');
  }

  // project - computed: true, optional: false, required: false
  public get project() {
    return this.getStringAttribute('project');
  }

  // provisioning_phase - computed: true, optional: false, required: false
  public get provisioningPhase() {
    return this.getStringAttribute('provisioning_phase');
  }

  // unity_catalog_provisioning_state - computed: true, optional: false, required: false
  public get unityCatalogProvisioningState() {
    return this.getStringAttribute('unity_catalog_provisioning_state');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/postgres_synced_table databricks_postgres_synced_table}
*/
export class PostgresSyncedTable extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_postgres_synced_table";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a PostgresSyncedTable resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PostgresSyncedTable to import
  * @param importFromId The id of the existing PostgresSyncedTable that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/postgres_synced_table#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PostgresSyncedTable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_postgres_synced_table", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/postgres_synced_table databricks_postgres_synced_table} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PostgresSyncedTableConfig
  */
  public constructor(scope: Construct, id: string, config: PostgresSyncedTableConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_postgres_synced_table',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.122.0',
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
    this._spec.internalValue = config.spec;
    this._syncedTableId = config.syncedTableId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // provider_config - computed: true, optional: true, required: false
  private _providerConfig = new PostgresSyncedTableProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: PostgresSyncedTableProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // spec - computed: true, optional: true, required: false
  private _spec = new PostgresSyncedTableSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: PostgresSyncedTableSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // status - computed: true, optional: false, required: false
  private _status = new PostgresSyncedTableStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }

  // synced_table_id - computed: false, optional: false, required: true
  private _syncedTableId?: string; 
  public get syncedTableId() {
    return this.getStringAttribute('synced_table_id');
  }
  public set syncedTableId(value: string) {
    this._syncedTableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get syncedTableIdInput() {
    return this._syncedTableId;
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
      provider_config: postgresSyncedTableProviderConfigToTerraform(this._providerConfig.internalValue),
      spec: postgresSyncedTableSpecToTerraform(this._spec.internalValue),
      synced_table_id: cdktn.stringToTerraform(this._syncedTableId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      provider_config: {
        value: postgresSyncedTableProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PostgresSyncedTableProviderConfig",
      },
      spec: {
        value: postgresSyncedTableSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PostgresSyncedTableSpec",
      },
      synced_table_id: {
        value: cdktn.stringToHclTerraform(this._syncedTableId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
