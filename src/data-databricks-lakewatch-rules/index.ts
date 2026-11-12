/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataDatabricksLakewatchRulesConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#catalog_name DataDatabricksLakewatchRules#catalog_name}
  */
  readonly catalogName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#filter DataDatabricksLakewatchRules#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#page_size DataDatabricksLakewatchRules#page_size}
  */
  readonly pageSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#provider_config DataDatabricksLakewatchRules#provider_config}
  */
  readonly providerConfig?: DataDatabricksLakewatchRulesProviderConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#schema_name DataDatabricksLakewatchRules#schema_name}
  */
  readonly schemaName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#view DataDatabricksLakewatchRules#view}
  */
  readonly view?: string;
}
export interface DataDatabricksLakewatchRulesProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#workspace_id DataDatabricksLakewatchRules#workspace_id}
  */
  readonly workspaceId?: string;
}

export function dataDatabricksLakewatchRulesProviderConfigToTerraform(struct?: DataDatabricksLakewatchRulesProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function dataDatabricksLakewatchRulesProviderConfigToHclTerraform(struct?: DataDatabricksLakewatchRulesProviderConfig | cdktn.IResolvable): any {
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

export class DataDatabricksLakewatchRulesProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksLakewatchRulesProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksLakewatchRulesProviderConfig | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksLakewatchRulesRulesBatchCustom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#notebook DataDatabricksLakewatchRules#notebook}
  */
  readonly notebook: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#options DataDatabricksLakewatchRules#options}
  */
  readonly options?: { [key: string]: string };
}

export function dataDatabricksLakewatchRulesRulesBatchCustomToTerraform(struct?: DataDatabricksLakewatchRulesRulesBatchCustom | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    notebook: cdktn.stringToTerraform(struct!.notebook),
    options: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.options),
  }
}


export function dataDatabricksLakewatchRulesRulesBatchCustomToHclTerraform(struct?: DataDatabricksLakewatchRulesRulesBatchCustom | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    notebook: {
      value: cdktn.stringToHclTerraform(struct!.notebook),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.options),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksLakewatchRulesRulesBatchCustomOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksLakewatchRulesRulesBatchCustom | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notebook !== undefined) {
      hasAnyValues = true;
      internalValueResult.notebook = this._notebook;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksLakewatchRulesRulesBatchCustom | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._notebook = undefined;
      this._options = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._notebook = value.notebook;
      this._options = value.options;
    }
  }

  // notebook - computed: true, optional: false, required: true
  private _notebook?: string; 
  public get notebook() {
    return this.getStringAttribute('notebook');
  }
  public set notebook(value: string) {
    this._notebook = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notebookInput() {
    return this._notebook;
  }

  // options - computed: true, optional: true, required: false
  private _options?: { [key: string]: string }; 
  public get options() {
    return this.getStringMapAttribute('options');
  }
  public set options(value: { [key: string]: string }) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }
}
export interface DataDatabricksLakewatchRulesRulesBatchSql {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#default_catalog_name DataDatabricksLakewatchRules#default_catalog_name}
  */
  readonly defaultCatalogName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#default_schema_name DataDatabricksLakewatchRules#default_schema_name}
  */
  readonly defaultSchemaName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#query DataDatabricksLakewatchRules#query}
  */
  readonly query: string;
}

export function dataDatabricksLakewatchRulesRulesBatchSqlToTerraform(struct?: DataDatabricksLakewatchRulesRulesBatchSql | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_catalog_name: cdktn.stringToTerraform(struct!.defaultCatalogName),
    default_schema_name: cdktn.stringToTerraform(struct!.defaultSchemaName),
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function dataDatabricksLakewatchRulesRulesBatchSqlToHclTerraform(struct?: DataDatabricksLakewatchRulesRulesBatchSql | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default_catalog_name: {
      value: cdktn.stringToHclTerraform(struct!.defaultCatalogName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_schema_name: {
      value: cdktn.stringToHclTerraform(struct!.defaultSchemaName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktn.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksLakewatchRulesRulesBatchSqlOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksLakewatchRulesRulesBatchSql | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultCatalogName !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultCatalogName = this._defaultCatalogName;
    }
    if (this._defaultSchemaName !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSchemaName = this._defaultSchemaName;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksLakewatchRulesRulesBatchSql | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultCatalogName = undefined;
      this._defaultSchemaName = undefined;
      this._query = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultCatalogName = value.defaultCatalogName;
      this._defaultSchemaName = value.defaultSchemaName;
      this._query = value.query;
    }
  }

  // default_catalog_name - computed: true, optional: true, required: false
  private _defaultCatalogName?: string; 
  public get defaultCatalogName() {
    return this.getStringAttribute('default_catalog_name');
  }
  public set defaultCatalogName(value: string) {
    this._defaultCatalogName = value;
  }
  public resetDefaultCatalogName() {
    this._defaultCatalogName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCatalogNameInput() {
    return this._defaultCatalogName;
  }

  // default_schema_name - computed: true, optional: true, required: false
  private _defaultSchemaName?: string; 
  public get defaultSchemaName() {
    return this.getStringAttribute('default_schema_name');
  }
  public set defaultSchemaName(value: string) {
    this._defaultSchemaName = value;
  }
  public resetDefaultSchemaName() {
    this._defaultSchemaName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSchemaNameInput() {
    return this._defaultSchemaName;
  }

  // query - computed: true, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}
export interface DataDatabricksLakewatchRulesRulesBatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#custom DataDatabricksLakewatchRules#custom}
  */
  readonly custom?: DataDatabricksLakewatchRulesRulesBatchCustom;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#sql DataDatabricksLakewatchRules#sql}
  */
  readonly sql?: DataDatabricksLakewatchRulesRulesBatchSql;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#warehouse_id DataDatabricksLakewatchRules#warehouse_id}
  */
  readonly warehouseId?: string;
}

export function dataDatabricksLakewatchRulesRulesBatchToTerraform(struct?: DataDatabricksLakewatchRulesRulesBatch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom: dataDatabricksLakewatchRulesRulesBatchCustomToTerraform(struct!.custom),
    sql: dataDatabricksLakewatchRulesRulesBatchSqlToTerraform(struct!.sql),
    warehouse_id: cdktn.stringToTerraform(struct!.warehouseId),
  }
}


export function dataDatabricksLakewatchRulesRulesBatchToHclTerraform(struct?: DataDatabricksLakewatchRulesRulesBatch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom: {
      value: dataDatabricksLakewatchRulesRulesBatchCustomToHclTerraform(struct!.custom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksLakewatchRulesRulesBatchCustom",
    },
    sql: {
      value: dataDatabricksLakewatchRulesRulesBatchSqlToHclTerraform(struct!.sql),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksLakewatchRulesRulesBatchSql",
    },
    warehouse_id: {
      value: cdktn.stringToHclTerraform(struct!.warehouseId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksLakewatchRulesRulesBatchOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksLakewatchRulesRulesBatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._custom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom = this._custom?.internalValue;
    }
    if (this._sql?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sql = this._sql?.internalValue;
    }
    if (this._warehouseId !== undefined) {
      hasAnyValues = true;
      internalValueResult.warehouseId = this._warehouseId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksLakewatchRulesRulesBatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._custom.internalValue = undefined;
      this._sql.internalValue = undefined;
      this._warehouseId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._custom.internalValue = value.custom;
      this._sql.internalValue = value.sql;
      this._warehouseId = value.warehouseId;
    }
  }

  // custom - computed: true, optional: true, required: false
  private _custom = new DataDatabricksLakewatchRulesRulesBatchCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: DataDatabricksLakewatchRulesRulesBatchCustom) {
    this._custom.internalValue = value;
  }
  public resetCustom() {
    this._custom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom.internalValue;
  }

  // sql - computed: true, optional: true, required: false
  private _sql = new DataDatabricksLakewatchRulesRulesBatchSqlOutputReference(this, "sql");
  public get sql() {
    return this._sql;
  }
  public putSql(value: DataDatabricksLakewatchRulesRulesBatchSql) {
    this._sql.internalValue = value;
  }
  public resetSql() {
    this._sql.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlInput() {
    return this._sql.internalValue;
  }

  // warehouse_id - computed: true, optional: true, required: false
  private _warehouseId?: string; 
  public get warehouseId() {
    return this.getStringAttribute('warehouse_id');
  }
  public set warehouseId(value: string) {
    this._warehouseId = value;
  }
  public resetWarehouseId() {
    this._warehouseId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warehouseIdInput() {
    return this._warehouseId;
  }
}
export interface DataDatabricksLakewatchRulesRulesCreatedBy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#display_name DataDatabricksLakewatchRules#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#email DataDatabricksLakewatchRules#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#id DataDatabricksLakewatchRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#principal_type DataDatabricksLakewatchRules#principal_type}
  */
  readonly principalType?: string;
}

export function dataDatabricksLakewatchRulesRulesCreatedByToTerraform(struct?: DataDatabricksLakewatchRulesRulesCreatedBy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    display_name: cdktn.stringToTerraform(struct!.displayName),
    email: cdktn.stringToTerraform(struct!.email),
    id: cdktn.stringToTerraform(struct!.id),
    principal_type: cdktn.stringToTerraform(struct!.principalType),
  }
}


export function dataDatabricksLakewatchRulesRulesCreatedByToHclTerraform(struct?: DataDatabricksLakewatchRulesRulesCreatedBy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    display_name: {
      value: cdktn.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email: {
      value: cdktn.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    principal_type: {
      value: cdktn.stringToHclTerraform(struct!.principalType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksLakewatchRulesRulesCreatedByOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksLakewatchRulesRulesCreatedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._principalType !== undefined) {
      hasAnyValues = true;
      internalValueResult.principalType = this._principalType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksLakewatchRulesRulesCreatedBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._displayName = undefined;
      this._email = undefined;
      this._id = undefined;
      this._principalType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._displayName = value.displayName;
      this._email = value.email;
      this._id = value.id;
      this._principalType = value.principalType;
    }
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // email - computed: true, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
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

  // principal_type - computed: true, optional: true, required: false
  private _principalType?: string; 
  public get principalType() {
    return this.getStringAttribute('principal_type');
  }
  public set principalType(value: string) {
    this._principalType = value;
  }
  public resetPrincipalType() {
    this._principalType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalTypeInput() {
    return this._principalType;
  }
}
export interface DataDatabricksLakewatchRulesRulesMitre {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#sub_technique DataDatabricksLakewatchRules#sub_technique}
  */
  readonly subTechnique?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#sub_technique_id DataDatabricksLakewatchRules#sub_technique_id}
  */
  readonly subTechniqueId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#tactic DataDatabricksLakewatchRules#tactic}
  */
  readonly tactic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#taxonomy DataDatabricksLakewatchRules#taxonomy}
  */
  readonly taxonomy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#technique DataDatabricksLakewatchRules#technique}
  */
  readonly technique?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#technique_id DataDatabricksLakewatchRules#technique_id}
  */
  readonly techniqueId?: string;
}

export function dataDatabricksLakewatchRulesRulesMitreToTerraform(struct?: DataDatabricksLakewatchRulesRulesMitre): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    sub_technique: cdktn.stringToTerraform(struct!.subTechnique),
    sub_technique_id: cdktn.stringToTerraform(struct!.subTechniqueId),
    tactic: cdktn.stringToTerraform(struct!.tactic),
    taxonomy: cdktn.stringToTerraform(struct!.taxonomy),
    technique: cdktn.stringToTerraform(struct!.technique),
    technique_id: cdktn.stringToTerraform(struct!.techniqueId),
  }
}


export function dataDatabricksLakewatchRulesRulesMitreToHclTerraform(struct?: DataDatabricksLakewatchRulesRulesMitre): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    sub_technique: {
      value: cdktn.stringToHclTerraform(struct!.subTechnique),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sub_technique_id: {
      value: cdktn.stringToHclTerraform(struct!.subTechniqueId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tactic: {
      value: cdktn.stringToHclTerraform(struct!.tactic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    taxonomy: {
      value: cdktn.stringToHclTerraform(struct!.taxonomy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    technique: {
      value: cdktn.stringToHclTerraform(struct!.technique),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    technique_id: {
      value: cdktn.stringToHclTerraform(struct!.techniqueId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksLakewatchRulesRulesMitreOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDatabricksLakewatchRulesRulesMitre | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subTechnique !== undefined) {
      hasAnyValues = true;
      internalValueResult.subTechnique = this._subTechnique;
    }
    if (this._subTechniqueId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subTechniqueId = this._subTechniqueId;
    }
    if (this._tactic !== undefined) {
      hasAnyValues = true;
      internalValueResult.tactic = this._tactic;
    }
    if (this._taxonomy !== undefined) {
      hasAnyValues = true;
      internalValueResult.taxonomy = this._taxonomy;
    }
    if (this._technique !== undefined) {
      hasAnyValues = true;
      internalValueResult.technique = this._technique;
    }
    if (this._techniqueId !== undefined) {
      hasAnyValues = true;
      internalValueResult.techniqueId = this._techniqueId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksLakewatchRulesRulesMitre | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._subTechnique = undefined;
      this._subTechniqueId = undefined;
      this._tactic = undefined;
      this._taxonomy = undefined;
      this._technique = undefined;
      this._techniqueId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._subTechnique = value.subTechnique;
      this._subTechniqueId = value.subTechniqueId;
      this._tactic = value.tactic;
      this._taxonomy = value.taxonomy;
      this._technique = value.technique;
      this._techniqueId = value.techniqueId;
    }
  }

  // sub_technique - computed: true, optional: true, required: false
  private _subTechnique?: string; 
  public get subTechnique() {
    return this.getStringAttribute('sub_technique');
  }
  public set subTechnique(value: string) {
    this._subTechnique = value;
  }
  public resetSubTechnique() {
    this._subTechnique = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subTechniqueInput() {
    return this._subTechnique;
  }

  // sub_technique_id - computed: true, optional: true, required: false
  private _subTechniqueId?: string; 
  public get subTechniqueId() {
    return this.getStringAttribute('sub_technique_id');
  }
  public set subTechniqueId(value: string) {
    this._subTechniqueId = value;
  }
  public resetSubTechniqueId() {
    this._subTechniqueId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subTechniqueIdInput() {
    return this._subTechniqueId;
  }

  // tactic - computed: true, optional: true, required: false
  private _tactic?: string; 
  public get tactic() {
    return this.getStringAttribute('tactic');
  }
  public set tactic(value: string) {
    this._tactic = value;
  }
  public resetTactic() {
    this._tactic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tacticInput() {
    return this._tactic;
  }

  // taxonomy - computed: true, optional: true, required: false
  private _taxonomy?: string; 
  public get taxonomy() {
    return this.getStringAttribute('taxonomy');
  }
  public set taxonomy(value: string) {
    this._taxonomy = value;
  }
  public resetTaxonomy() {
    this._taxonomy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taxonomyInput() {
    return this._taxonomy;
  }

  // technique - computed: true, optional: true, required: false
  private _technique?: string; 
  public get technique() {
    return this.getStringAttribute('technique');
  }
  public set technique(value: string) {
    this._technique = value;
  }
  public resetTechnique() {
    this._technique = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get techniqueInput() {
    return this._technique;
  }

  // technique_id - computed: true, optional: true, required: false
  private _techniqueId?: string; 
  public get techniqueId() {
    return this.getStringAttribute('technique_id');
  }
  public set techniqueId(value: string) {
    this._techniqueId = value;
  }
  public resetTechniqueId() {
    this._techniqueId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get techniqueIdInput() {
    return this._techniqueId;
  }
}

export class DataDatabricksLakewatchRulesRulesMitreList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksLakewatchRulesRulesMitre[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksLakewatchRulesRulesMitreOutputReference {
    return new DataDatabricksLakewatchRulesRulesMitreOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksLakewatchRulesRulesOriginalContentPack {
}

export function dataDatabricksLakewatchRulesRulesOriginalContentPackToTerraform(struct?: DataDatabricksLakewatchRulesRulesOriginalContentPack): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataDatabricksLakewatchRulesRulesOriginalContentPackToHclTerraform(struct?: DataDatabricksLakewatchRulesRulesOriginalContentPack): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksLakewatchRulesRulesOriginalContentPack | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksLakewatchRulesRulesOriginalContentPack | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}
export interface DataDatabricksLakewatchRulesRulesOutput {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#context DataDatabricksLakewatchRules#context}
  */
  readonly context?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#default_context DataDatabricksLakewatchRules#default_context}
  */
  readonly defaultContext?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#event_time_column DataDatabricksLakewatchRules#event_time_column}
  */
  readonly eventTimeColumn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#summary DataDatabricksLakewatchRules#summary}
  */
  readonly summary?: string;
}

export function dataDatabricksLakewatchRulesRulesOutputToTerraform(struct?: DataDatabricksLakewatchRulesRulesOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    context: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.context),
    default_context: cdktn.booleanToTerraform(struct!.defaultContext),
    event_time_column: cdktn.stringToTerraform(struct!.eventTimeColumn),
    summary: cdktn.stringToTerraform(struct!.summary),
  }
}


export function dataDatabricksLakewatchRulesRulesOutputToHclTerraform(struct?: DataDatabricksLakewatchRulesRulesOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    context: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.context),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    default_context: {
      value: cdktn.booleanToHclTerraform(struct!.defaultContext),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    event_time_column: {
      value: cdktn.stringToHclTerraform(struct!.eventTimeColumn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    summary: {
      value: cdktn.stringToHclTerraform(struct!.summary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksLakewatchRulesRulesOutputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksLakewatchRulesRulesOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._defaultContext !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultContext = this._defaultContext;
    }
    if (this._eventTimeColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventTimeColumn = this._eventTimeColumn;
    }
    if (this._summary !== undefined) {
      hasAnyValues = true;
      internalValueResult.summary = this._summary;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksLakewatchRulesRulesOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._context = undefined;
      this._defaultContext = undefined;
      this._eventTimeColumn = undefined;
      this._summary = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._context = value.context;
      this._defaultContext = value.defaultContext;
      this._eventTimeColumn = value.eventTimeColumn;
      this._summary = value.summary;
    }
  }

  // context - computed: true, optional: true, required: false
  private _context?: { [key: string]: string }; 
  public get context() {
    return this.getStringMapAttribute('context');
  }
  public set context(value: { [key: string]: string }) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // default_context - computed: true, optional: true, required: false
  private _defaultContext?: boolean | cdktn.IResolvable; 
  public get defaultContext() {
    return this.getBooleanAttribute('default_context');
  }
  public set defaultContext(value: boolean | cdktn.IResolvable) {
    this._defaultContext = value;
  }
  public resetDefaultContext() {
    this._defaultContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultContextInput() {
    return this._defaultContext;
  }

  // event_time_column - computed: true, optional: true, required: false
  private _eventTimeColumn?: string; 
  public get eventTimeColumn() {
    return this.getStringAttribute('event_time_column');
  }
  public set eventTimeColumn(value: string) {
    this._eventTimeColumn = value;
  }
  public resetEventTimeColumn() {
    this._eventTimeColumn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTimeColumnInput() {
    return this._eventTimeColumn;
  }

  // summary - computed: true, optional: true, required: false
  private _summary?: string; 
  public get summary() {
    return this.getStringAttribute('summary');
  }
  public set summary(value: string) {
    this._summary = value;
  }
  public resetSummary() {
    this._summary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryInput() {
    return this._summary;
  }
}
export interface DataDatabricksLakewatchRulesRulesOwner {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#display_name DataDatabricksLakewatchRules#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#email DataDatabricksLakewatchRules#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#id DataDatabricksLakewatchRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#principal_type DataDatabricksLakewatchRules#principal_type}
  */
  readonly principalType?: string;
}

export function dataDatabricksLakewatchRulesRulesOwnerToTerraform(struct?: DataDatabricksLakewatchRulesRulesOwner): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    display_name: cdktn.stringToTerraform(struct!.displayName),
    email: cdktn.stringToTerraform(struct!.email),
    id: cdktn.stringToTerraform(struct!.id),
    principal_type: cdktn.stringToTerraform(struct!.principalType),
  }
}


export function dataDatabricksLakewatchRulesRulesOwnerToHclTerraform(struct?: DataDatabricksLakewatchRulesRulesOwner): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    display_name: {
      value: cdktn.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email: {
      value: cdktn.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    principal_type: {
      value: cdktn.stringToHclTerraform(struct!.principalType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksLakewatchRulesRulesOwnerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksLakewatchRulesRulesOwner | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._principalType !== undefined) {
      hasAnyValues = true;
      internalValueResult.principalType = this._principalType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksLakewatchRulesRulesOwner | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._displayName = undefined;
      this._email = undefined;
      this._id = undefined;
      this._principalType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._displayName = value.displayName;
      this._email = value.email;
      this._id = value.id;
      this._principalType = value.principalType;
    }
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // email - computed: true, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
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

  // principal_type - computed: true, optional: true, required: false
  private _principalType?: string; 
  public get principalType() {
    return this.getStringAttribute('principal_type');
  }
  public set principalType(value: string) {
    this._principalType = value;
  }
  public resetPrincipalType() {
    this._principalType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalTypeInput() {
    return this._principalType;
  }
}
export interface DataDatabricksLakewatchRulesRulesProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#workspace_id DataDatabricksLakewatchRules#workspace_id}
  */
  readonly workspaceId?: string;
}

export function dataDatabricksLakewatchRulesRulesProviderConfigToTerraform(struct?: DataDatabricksLakewatchRulesRulesProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function dataDatabricksLakewatchRulesRulesProviderConfigToHclTerraform(struct?: DataDatabricksLakewatchRulesRulesProviderConfig | cdktn.IResolvable): any {
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

export class DataDatabricksLakewatchRulesRulesProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksLakewatchRulesRulesProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksLakewatchRulesRulesProviderConfig | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksLakewatchRulesRulesSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#at_least_every DataDatabricksLakewatchRules#at_least_every}
  */
  readonly atLeastEvery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#continuous DataDatabricksLakewatchRules#continuous}
  */
  readonly continuous?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#cron_expression DataDatabricksLakewatchRules#cron_expression}
  */
  readonly cronExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#enabled DataDatabricksLakewatchRules#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function dataDatabricksLakewatchRulesRulesScheduleToTerraform(struct?: DataDatabricksLakewatchRulesRulesSchedule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    at_least_every: cdktn.stringToTerraform(struct!.atLeastEvery),
    continuous: cdktn.booleanToTerraform(struct!.continuous),
    cron_expression: cdktn.stringToTerraform(struct!.cronExpression),
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function dataDatabricksLakewatchRulesRulesScheduleToHclTerraform(struct?: DataDatabricksLakewatchRulesRulesSchedule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    at_least_every: {
      value: cdktn.stringToHclTerraform(struct!.atLeastEvery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    continuous: {
      value: cdktn.booleanToHclTerraform(struct!.continuous),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cron_expression: {
      value: cdktn.stringToHclTerraform(struct!.cronExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksLakewatchRulesRulesScheduleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksLakewatchRulesRulesSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._atLeastEvery !== undefined) {
      hasAnyValues = true;
      internalValueResult.atLeastEvery = this._atLeastEvery;
    }
    if (this._continuous !== undefined) {
      hasAnyValues = true;
      internalValueResult.continuous = this._continuous;
    }
    if (this._cronExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronExpression = this._cronExpression;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksLakewatchRulesRulesSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._atLeastEvery = undefined;
      this._continuous = undefined;
      this._cronExpression = undefined;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._atLeastEvery = value.atLeastEvery;
      this._continuous = value.continuous;
      this._cronExpression = value.cronExpression;
      this._enabled = value.enabled;
    }
  }

  // at_least_every - computed: true, optional: true, required: false
  private _atLeastEvery?: string; 
  public get atLeastEvery() {
    return this.getStringAttribute('at_least_every');
  }
  public set atLeastEvery(value: string) {
    this._atLeastEvery = value;
  }
  public resetAtLeastEvery() {
    this._atLeastEvery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atLeastEveryInput() {
    return this._atLeastEvery;
  }

  // continuous - computed: true, optional: true, required: false
  private _continuous?: boolean | cdktn.IResolvable; 
  public get continuous() {
    return this.getBooleanAttribute('continuous');
  }
  public set continuous(value: boolean | cdktn.IResolvable) {
    this._continuous = value;
  }
  public resetContinuous() {
    this._continuous = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continuousInput() {
    return this._continuous;
  }

  // cron_expression - computed: true, optional: true, required: false
  private _cronExpression?: string; 
  public get cronExpression() {
    return this.getStringAttribute('cron_expression');
  }
  public set cronExpression(value: string) {
    this._cronExpression = value;
  }
  public resetCronExpression() {
    this._cronExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronExpressionInput() {
    return this._cronExpression;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface DataDatabricksLakewatchRulesRulesStatus {
}

export function dataDatabricksLakewatchRulesRulesStatusToTerraform(struct?: DataDatabricksLakewatchRulesRulesStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataDatabricksLakewatchRulesRulesStatusToHclTerraform(struct?: DataDatabricksLakewatchRulesRulesStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatabricksLakewatchRulesRulesStatusOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksLakewatchRulesRulesStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksLakewatchRulesRulesStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // job_id - computed: true, optional: false, required: false
  public get jobId() {
    return this.getStringAttribute('job_id');
  }

  // last_complete_time - computed: true, optional: false, required: false
  public get lastCompleteTime() {
    return this.getStringAttribute('last_complete_time');
  }

  // last_error_message - computed: true, optional: false, required: false
  public get lastErrorMessage() {
    return this.getStringAttribute('last_error_message');
  }

  // last_start_time - computed: true, optional: false, required: false
  public get lastStartTime() {
    return this.getStringAttribute('last_start_time');
  }

  // last_status_change_time - computed: true, optional: false, required: false
  public get lastStatusChangeTime() {
    return this.getStringAttribute('last_status_change_time');
  }

  // lifecycle_state - computed: true, optional: false, required: false
  public get lifecycleState() {
    return this.getStringAttribute('lifecycle_state');
  }

  // pipeline_id - computed: true, optional: false, required: false
  public get pipelineId() {
    return this.getStringAttribute('pipeline_id');
  }

  // run_state - computed: true, optional: false, required: false
  public get runState() {
    return this.getStringAttribute('run_state');
  }
}
export interface DataDatabricksLakewatchRulesRulesTimerange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#extend_lookback DataDatabricksLakewatchRules#extend_lookback}
  */
  readonly extendLookback?: string;
}

export function dataDatabricksLakewatchRulesRulesTimerangeToTerraform(struct?: DataDatabricksLakewatchRulesRulesTimerange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    extend_lookback: cdktn.stringToTerraform(struct!.extendLookback),
  }
}


export function dataDatabricksLakewatchRulesRulesTimerangeToHclTerraform(struct?: DataDatabricksLakewatchRulesRulesTimerange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    extend_lookback: {
      value: cdktn.stringToHclTerraform(struct!.extendLookback),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksLakewatchRulesRulesTimerangeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksLakewatchRulesRulesTimerange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extendLookback !== undefined) {
      hasAnyValues = true;
      internalValueResult.extendLookback = this._extendLookback;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksLakewatchRulesRulesTimerange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._extendLookback = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._extendLookback = value.extendLookback;
    }
  }

  // extend_lookback - computed: true, optional: true, required: false
  private _extendLookback?: string; 
  public get extendLookback() {
    return this.getStringAttribute('extend_lookback');
  }
  public set extendLookback(value: string) {
    this._extendLookback = value;
  }
  public resetExtendLookback() {
    this._extendLookback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendLookbackInput() {
    return this._extendLookback;
  }
}
export interface DataDatabricksLakewatchRulesRulesUpdatedBy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#display_name DataDatabricksLakewatchRules#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#email DataDatabricksLakewatchRules#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#id DataDatabricksLakewatchRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#principal_type DataDatabricksLakewatchRules#principal_type}
  */
  readonly principalType?: string;
}

export function dataDatabricksLakewatchRulesRulesUpdatedByToTerraform(struct?: DataDatabricksLakewatchRulesRulesUpdatedBy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    display_name: cdktn.stringToTerraform(struct!.displayName),
    email: cdktn.stringToTerraform(struct!.email),
    id: cdktn.stringToTerraform(struct!.id),
    principal_type: cdktn.stringToTerraform(struct!.principalType),
  }
}


export function dataDatabricksLakewatchRulesRulesUpdatedByToHclTerraform(struct?: DataDatabricksLakewatchRulesRulesUpdatedBy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    display_name: {
      value: cdktn.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email: {
      value: cdktn.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    principal_type: {
      value: cdktn.stringToHclTerraform(struct!.principalType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksLakewatchRulesRulesUpdatedByOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksLakewatchRulesRulesUpdatedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._principalType !== undefined) {
      hasAnyValues = true;
      internalValueResult.principalType = this._principalType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksLakewatchRulesRulesUpdatedBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._displayName = undefined;
      this._email = undefined;
      this._id = undefined;
      this._principalType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._displayName = value.displayName;
      this._email = value.email;
      this._id = value.id;
      this._principalType = value.principalType;
    }
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // email - computed: true, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
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

  // principal_type - computed: true, optional: true, required: false
  private _principalType?: string; 
  public get principalType() {
    return this.getStringAttribute('principal_type');
  }
  public set principalType(value: string) {
    this._principalType = value;
  }
  public resetPrincipalType() {
    this._principalType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalTypeInput() {
    return this._principalType;
  }
}
export interface DataDatabricksLakewatchRulesRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#name DataDatabricksLakewatchRules#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#provider_config DataDatabricksLakewatchRules#provider_config}
  */
  readonly providerConfig?: DataDatabricksLakewatchRulesRulesProviderConfig;
}

export function dataDatabricksLakewatchRulesRulesToTerraform(struct?: DataDatabricksLakewatchRulesRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    provider_config: dataDatabricksLakewatchRulesRulesProviderConfigToTerraform(struct!.providerConfig),
  }
}


export function dataDatabricksLakewatchRulesRulesToHclTerraform(struct?: DataDatabricksLakewatchRulesRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider_config: {
      value: dataDatabricksLakewatchRulesRulesProviderConfigToHclTerraform(struct!.providerConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksLakewatchRulesRulesProviderConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksLakewatchRulesRulesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDatabricksLakewatchRulesRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._providerConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerConfig = this._providerConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksLakewatchRulesRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._providerConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._providerConfig.internalValue = value.providerConfig;
    }
  }

  // annotations - computed: true, optional: false, required: false
  private _annotations = new cdktn.StringMap(this, "annotations");
  public get annotations() {
    return this._annotations;
  }

  // batch - computed: true, optional: false, required: false
  private _batch = new DataDatabricksLakewatchRulesRulesBatchOutputReference(this, "batch");
  public get batch() {
    return this._batch;
  }

  // catalog_name - computed: true, optional: false, required: false
  public get catalogName() {
    return this.getStringAttribute('catalog_name');
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // compute_workspace_id - computed: true, optional: false, required: false
  public get computeWorkspaceId() {
    return this.getStringAttribute('compute_workspace_id');
  }

  // content_resource_id - computed: true, optional: false, required: false
  public get contentResourceId() {
    return this.getStringAttribute('content_resource_id');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // created_by - computed: true, optional: false, required: false
  private _createdBy = new DataDatabricksLakewatchRulesRulesCreatedByOutputReference(this, "created_by");
  public get createdBy() {
    return this._createdBy;
  }

  // deduplication - computed: true, optional: false, required: false
  public get deduplication() {
    return this.getStringAttribute('deduplication');
  }

  // deduplication_time_window - computed: true, optional: false, required: false
  public get deduplicationTimeWindow() {
    return this.getStringAttribute('deduplication_time_window');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // effective_catalog_name - computed: true, optional: false, required: false
  public get effectiveCatalogName() {
    return this.getStringAttribute('effective_catalog_name');
  }

  // effective_rule_name - computed: true, optional: false, required: false
  public get effectiveRuleName() {
    return this.getStringAttribute('effective_rule_name');
  }

  // effective_run_as_principal - computed: true, optional: false, required: false
  public get effectiveRunAsPrincipal() {
    return this.getStringAttribute('effective_run_as_principal');
  }

  // effective_schema_name - computed: true, optional: false, required: false
  public get effectiveSchemaName() {
    return this.getStringAttribute('effective_schema_name');
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // fidelity - computed: true, optional: false, required: false
  public get fidelity() {
    return this.getStringAttribute('fidelity');
  }

  // mitre - computed: true, optional: false, required: false
  private _mitre = new DataDatabricksLakewatchRulesRulesMitreList(this, "mitre", false);
  public get mitre() {
    return this._mitre;
  }

  // name - computed: true, optional: false, required: true
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

  // objective - computed: true, optional: false, required: false
  public get objective() {
    return this.getStringAttribute('objective');
  }

  // original_content_pack - computed: true, optional: false, required: false
  private _originalContentPack = new DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference(this, "original_content_pack");
  public get originalContentPack() {
    return this._originalContentPack;
  }

  // output - computed: true, optional: false, required: false
  private _output = new DataDatabricksLakewatchRulesRulesOutputOutputReference(this, "output");
  public get output() {
    return this._output;
  }

  // owner - computed: true, optional: false, required: false
  private _owner = new DataDatabricksLakewatchRulesRulesOwnerOutputReference(this, "owner");
  public get owner() {
    return this._owner;
  }

  // provider_config - computed: true, optional: true, required: false
  private _providerConfig = new DataDatabricksLakewatchRulesRulesProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataDatabricksLakewatchRulesRulesProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // references - computed: true, optional: false, required: false
  public get references() {
    return this.getListAttribute('references');
  }

  // rule_id - computed: true, optional: false, required: false
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }

  // rule_name - computed: true, optional: false, required: false
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }

  // run_as_principal - computed: true, optional: false, required: false
  public get runAsPrincipal() {
    return this.getStringAttribute('run_as_principal');
  }

  // runbook - computed: true, optional: false, required: false
  public get runbook() {
    return this.getStringAttribute('runbook');
  }

  // schedule - computed: true, optional: false, required: false
  private _schedule = new DataDatabricksLakewatchRulesRulesScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }

  // schema_name - computed: true, optional: false, required: false
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getStringAttribute('severity');
  }

  // status - computed: true, optional: false, required: false
  private _status = new DataDatabricksLakewatchRulesRulesStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }

  // suppress_until_time - computed: true, optional: false, required: false
  public get suppressUntilTime() {
    return this.getStringAttribute('suppress_until_time');
  }

  // timerange - computed: true, optional: false, required: false
  private _timerange = new DataDatabricksLakewatchRulesRulesTimerangeOutputReference(this, "timerange");
  public get timerange() {
    return this._timerange;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // updated_by - computed: true, optional: false, required: false
  private _updatedBy = new DataDatabricksLakewatchRulesRulesUpdatedByOutputReference(this, "updated_by");
  public get updatedBy() {
    return this._updatedBy;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }
}

export class DataDatabricksLakewatchRulesRulesList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksLakewatchRulesRules[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksLakewatchRulesRulesOutputReference {
    return new DataDatabricksLakewatchRulesRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules databricks_lakewatch_rules}
*/
export class DataDatabricksLakewatchRules extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_lakewatch_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataDatabricksLakewatchRules resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksLakewatchRules to import
  * @param importFromId The id of the existing DataDatabricksLakewatchRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksLakewatchRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_lakewatch_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules databricks_lakewatch_rules} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksLakewatchRulesConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksLakewatchRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_lakewatch_rules',
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
    this._catalogName = config.catalogName;
    this._filter = config.filter;
    this._pageSize = config.pageSize;
    this._providerConfig.internalValue = config.providerConfig;
    this._schemaName = config.schemaName;
    this._view = config.view;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // catalog_name - computed: false, optional: false, required: true
  private _catalogName?: string; 
  public get catalogName() {
    return this.getStringAttribute('catalog_name');
  }
  public set catalogName(value: string) {
    this._catalogName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogNameInput() {
    return this._catalogName;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // page_size - computed: false, optional: true, required: false
  private _pageSize?: number; 
  public get pageSize() {
    return this.getNumberAttribute('page_size');
  }
  public set pageSize(value: number) {
    this._pageSize = value;
  }
  public resetPageSize() {
    this._pageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageSizeInput() {
    return this._pageSize;
  }

  // provider_config - computed: false, optional: true, required: false
  private _providerConfig = new DataDatabricksLakewatchRulesProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataDatabricksLakewatchRulesProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataDatabricksLakewatchRulesRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }

  // schema_name - computed: false, optional: true, required: false
  private _schemaName?: string; 
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
  public set schemaName(value: string) {
    this._schemaName = value;
  }
  public resetSchemaName() {
    this._schemaName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaNameInput() {
    return this._schemaName;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      catalog_name: cdktn.stringToTerraform(this._catalogName),
      filter: cdktn.stringToTerraform(this._filter),
      page_size: cdktn.numberToTerraform(this._pageSize),
      provider_config: dataDatabricksLakewatchRulesProviderConfigToTerraform(this._providerConfig.internalValue),
      schema_name: cdktn.stringToTerraform(this._schemaName),
      view: cdktn.stringToTerraform(this._view),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      catalog_name: {
        value: cdktn.stringToHclTerraform(this._catalogName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktn.stringToHclTerraform(this._filter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      page_size: {
        value: cdktn.numberToHclTerraform(this._pageSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      provider_config: {
        value: dataDatabricksLakewatchRulesProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataDatabricksLakewatchRulesProviderConfig",
      },
      schema_name: {
        value: cdktn.stringToHclTerraform(this._schemaName),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
