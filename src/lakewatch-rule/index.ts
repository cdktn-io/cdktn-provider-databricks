/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface LakewatchRuleConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#annotations LakewatchRule#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#batch LakewatchRule#batch}
  */
  readonly batch?: LakewatchRuleBatch;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#catalog_name LakewatchRule#catalog_name}
  */
  readonly catalogName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#category LakewatchRule#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#content_resource_id LakewatchRule#content_resource_id}
  */
  readonly contentResourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#deduplication LakewatchRule#deduplication}
  */
  readonly deduplication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#deduplication_time_window LakewatchRule#deduplication_time_window}
  */
  readonly deduplicationTimeWindow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#description LakewatchRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#fidelity LakewatchRule#fidelity}
  */
  readonly fidelity: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#mitre LakewatchRule#mitre}
  */
  readonly mitre?: LakewatchRuleMitre[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#objective LakewatchRule#objective}
  */
  readonly objective?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#output LakewatchRule#output}
  */
  readonly output: LakewatchRuleOutput;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#provider_config LakewatchRule#provider_config}
  */
  readonly providerConfig?: LakewatchRuleProviderConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#references LakewatchRule#references}
  */
  readonly references?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#rule_name LakewatchRule#rule_name}
  */
  readonly ruleName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#run_as_principal LakewatchRule#run_as_principal}
  */
  readonly runAsPrincipal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#runbook LakewatchRule#runbook}
  */
  readonly runbook?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#schedule LakewatchRule#schedule}
  */
  readonly schedule: LakewatchRuleSchedule;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#schema_name LakewatchRule#schema_name}
  */
  readonly schemaName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#severity LakewatchRule#severity}
  */
  readonly severity: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#suppress_until_time LakewatchRule#suppress_until_time}
  */
  readonly suppressUntilTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#timerange LakewatchRule#timerange}
  */
  readonly timerange?: LakewatchRuleTimerange;
}
export interface LakewatchRuleBatchCustom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#notebook LakewatchRule#notebook}
  */
  readonly notebook: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#options LakewatchRule#options}
  */
  readonly options?: { [key: string]: string };
}

export function lakewatchRuleBatchCustomToTerraform(struct?: LakewatchRuleBatchCustom | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    notebook: cdktn.stringToTerraform(struct!.notebook),
    options: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.options),
  }
}


export function lakewatchRuleBatchCustomToHclTerraform(struct?: LakewatchRuleBatchCustom | cdktn.IResolvable): any {
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

export class LakewatchRuleBatchCustomOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LakewatchRuleBatchCustom | cdktn.IResolvable | undefined {
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

  public set internalValue(value: LakewatchRuleBatchCustom | cdktn.IResolvable | undefined) {
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

  // notebook - computed: false, optional: false, required: true
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

  // options - computed: false, optional: true, required: false
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
export interface LakewatchRuleBatchSql {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#default_catalog_name LakewatchRule#default_catalog_name}
  */
  readonly defaultCatalogName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#default_schema_name LakewatchRule#default_schema_name}
  */
  readonly defaultSchemaName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#query LakewatchRule#query}
  */
  readonly query: string;
}

export function lakewatchRuleBatchSqlToTerraform(struct?: LakewatchRuleBatchSql | cdktn.IResolvable): any {
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


export function lakewatchRuleBatchSqlToHclTerraform(struct?: LakewatchRuleBatchSql | cdktn.IResolvable): any {
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

export class LakewatchRuleBatchSqlOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LakewatchRuleBatchSql | cdktn.IResolvable | undefined {
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

  public set internalValue(value: LakewatchRuleBatchSql | cdktn.IResolvable | undefined) {
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

  // default_catalog_name - computed: false, optional: true, required: false
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

  // default_schema_name - computed: false, optional: true, required: false
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

  // query - computed: false, optional: false, required: true
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
export interface LakewatchRuleBatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#custom LakewatchRule#custom}
  */
  readonly custom?: LakewatchRuleBatchCustom;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#sql LakewatchRule#sql}
  */
  readonly sql?: LakewatchRuleBatchSql;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#warehouse_id LakewatchRule#warehouse_id}
  */
  readonly warehouseId?: string;
}

export function lakewatchRuleBatchToTerraform(struct?: LakewatchRuleBatch | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom: lakewatchRuleBatchCustomToTerraform(struct!.custom),
    sql: lakewatchRuleBatchSqlToTerraform(struct!.sql),
    warehouse_id: cdktn.stringToTerraform(struct!.warehouseId),
  }
}


export function lakewatchRuleBatchToHclTerraform(struct?: LakewatchRuleBatch | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom: {
      value: lakewatchRuleBatchCustomToHclTerraform(struct!.custom),
      isBlock: true,
      type: "struct",
      storageClassType: "LakewatchRuleBatchCustom",
    },
    sql: {
      value: lakewatchRuleBatchSqlToHclTerraform(struct!.sql),
      isBlock: true,
      type: "struct",
      storageClassType: "LakewatchRuleBatchSql",
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

export class LakewatchRuleBatchOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LakewatchRuleBatch | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: LakewatchRuleBatch | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._custom.internalValue = undefined;
      this._sql.internalValue = undefined;
      this._warehouseId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._custom.internalValue = value.custom;
      this._sql.internalValue = value.sql;
      this._warehouseId = value.warehouseId;
    }
  }

  // custom - computed: false, optional: true, required: false
  private _custom = new LakewatchRuleBatchCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: LakewatchRuleBatchCustom) {
    this._custom.internalValue = value;
  }
  public resetCustom() {
    this._custom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom.internalValue;
  }

  // sql - computed: false, optional: true, required: false
  private _sql = new LakewatchRuleBatchSqlOutputReference(this, "sql");
  public get sql() {
    return this._sql;
  }
  public putSql(value: LakewatchRuleBatchSql) {
    this._sql.internalValue = value;
  }
  public resetSql() {
    this._sql.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlInput() {
    return this._sql.internalValue;
  }

  // warehouse_id - computed: false, optional: true, required: false
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
export interface LakewatchRuleCreatedBy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#display_name LakewatchRule#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#email LakewatchRule#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#id LakewatchRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#principal_type LakewatchRule#principal_type}
  */
  readonly principalType?: string;
}

export function lakewatchRuleCreatedByToTerraform(struct?: LakewatchRuleCreatedBy): any {
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


export function lakewatchRuleCreatedByToHclTerraform(struct?: LakewatchRuleCreatedBy): any {
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

export class LakewatchRuleCreatedByOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LakewatchRuleCreatedBy | undefined {
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

  public set internalValue(value: LakewatchRuleCreatedBy | undefined) {
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
export interface LakewatchRuleMitre {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#sub_technique LakewatchRule#sub_technique}
  */
  readonly subTechnique?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#sub_technique_id LakewatchRule#sub_technique_id}
  */
  readonly subTechniqueId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#tactic LakewatchRule#tactic}
  */
  readonly tactic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#taxonomy LakewatchRule#taxonomy}
  */
  readonly taxonomy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#technique LakewatchRule#technique}
  */
  readonly technique?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#technique_id LakewatchRule#technique_id}
  */
  readonly techniqueId?: string;
}

export function lakewatchRuleMitreToTerraform(struct?: LakewatchRuleMitre | cdktn.IResolvable): any {
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


export function lakewatchRuleMitreToHclTerraform(struct?: LakewatchRuleMitre | cdktn.IResolvable): any {
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

export class LakewatchRuleMitreOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LakewatchRuleMitre | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: LakewatchRuleMitre | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._subTechnique = undefined;
      this._subTechniqueId = undefined;
      this._tactic = undefined;
      this._taxonomy = undefined;
      this._technique = undefined;
      this._techniqueId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._subTechnique = value.subTechnique;
      this._subTechniqueId = value.subTechniqueId;
      this._tactic = value.tactic;
      this._taxonomy = value.taxonomy;
      this._technique = value.technique;
      this._techniqueId = value.techniqueId;
    }
  }

  // sub_technique - computed: false, optional: true, required: false
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

  // sub_technique_id - computed: false, optional: true, required: false
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

  // tactic - computed: false, optional: true, required: false
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

  // taxonomy - computed: false, optional: true, required: false
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

  // technique - computed: false, optional: true, required: false
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

  // technique_id - computed: false, optional: true, required: false
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

export class LakewatchRuleMitreList extends cdktn.ComplexList {
  public internalValue? : LakewatchRuleMitre[] | cdktn.IResolvable

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
  public get(index: number): LakewatchRuleMitreOutputReference {
    return new LakewatchRuleMitreOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LakewatchRuleOriginalContentPack {
}

export function lakewatchRuleOriginalContentPackToTerraform(struct?: LakewatchRuleOriginalContentPack): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function lakewatchRuleOriginalContentPackToHclTerraform(struct?: LakewatchRuleOriginalContentPack): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class LakewatchRuleOriginalContentPackOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LakewatchRuleOriginalContentPack | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LakewatchRuleOriginalContentPack | undefined) {
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
export interface LakewatchRuleOutput {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#context LakewatchRule#context}
  */
  readonly context?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#default_context LakewatchRule#default_context}
  */
  readonly defaultContext?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#event_time_column LakewatchRule#event_time_column}
  */
  readonly eventTimeColumn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#summary LakewatchRule#summary}
  */
  readonly summary?: string;
}

export function lakewatchRuleOutputToTerraform(struct?: LakewatchRuleOutput | cdktn.IResolvable): any {
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


export function lakewatchRuleOutputToHclTerraform(struct?: LakewatchRuleOutput | cdktn.IResolvable): any {
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

export class LakewatchRuleOutputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LakewatchRuleOutput | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: LakewatchRuleOutput | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._context = undefined;
      this._defaultContext = undefined;
      this._eventTimeColumn = undefined;
      this._summary = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._context = value.context;
      this._defaultContext = value.defaultContext;
      this._eventTimeColumn = value.eventTimeColumn;
      this._summary = value.summary;
    }
  }

  // context - computed: false, optional: true, required: false
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

  // default_context - computed: false, optional: true, required: false
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

  // event_time_column - computed: false, optional: true, required: false
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

  // summary - computed: false, optional: true, required: false
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
export interface LakewatchRuleOwner {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#display_name LakewatchRule#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#email LakewatchRule#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#id LakewatchRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#principal_type LakewatchRule#principal_type}
  */
  readonly principalType?: string;
}

export function lakewatchRuleOwnerToTerraform(struct?: LakewatchRuleOwner): any {
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


export function lakewatchRuleOwnerToHclTerraform(struct?: LakewatchRuleOwner): any {
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

export class LakewatchRuleOwnerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LakewatchRuleOwner | undefined {
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

  public set internalValue(value: LakewatchRuleOwner | undefined) {
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
export interface LakewatchRuleProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#workspace_id LakewatchRule#workspace_id}
  */
  readonly workspaceId?: string;
}

export function lakewatchRuleProviderConfigToTerraform(struct?: LakewatchRuleProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function lakewatchRuleProviderConfigToHclTerraform(struct?: LakewatchRuleProviderConfig | cdktn.IResolvable): any {
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

export class LakewatchRuleProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LakewatchRuleProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: LakewatchRuleProviderConfig | cdktn.IResolvable | undefined) {
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
export interface LakewatchRuleSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#at_least_every LakewatchRule#at_least_every}
  */
  readonly atLeastEvery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#continuous LakewatchRule#continuous}
  */
  readonly continuous?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#cron_expression LakewatchRule#cron_expression}
  */
  readonly cronExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#enabled LakewatchRule#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function lakewatchRuleScheduleToTerraform(struct?: LakewatchRuleSchedule | cdktn.IResolvable): any {
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


export function lakewatchRuleScheduleToHclTerraform(struct?: LakewatchRuleSchedule | cdktn.IResolvable): any {
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

export class LakewatchRuleScheduleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LakewatchRuleSchedule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: LakewatchRuleSchedule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._atLeastEvery = undefined;
      this._continuous = undefined;
      this._cronExpression = undefined;
      this._enabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._atLeastEvery = value.atLeastEvery;
      this._continuous = value.continuous;
      this._cronExpression = value.cronExpression;
      this._enabled = value.enabled;
    }
  }

  // at_least_every - computed: false, optional: true, required: false
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

  // continuous - computed: false, optional: true, required: false
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

  // cron_expression - computed: false, optional: true, required: false
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

  // enabled - computed: false, optional: true, required: false
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
export interface LakewatchRuleStatus {
}

export function lakewatchRuleStatusToTerraform(struct?: LakewatchRuleStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function lakewatchRuleStatusToHclTerraform(struct?: LakewatchRuleStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class LakewatchRuleStatusOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LakewatchRuleStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LakewatchRuleStatus | undefined) {
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
export interface LakewatchRuleTimerange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#extend_lookback LakewatchRule#extend_lookback}
  */
  readonly extendLookback?: string;
}

export function lakewatchRuleTimerangeToTerraform(struct?: LakewatchRuleTimerange | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    extend_lookback: cdktn.stringToTerraform(struct!.extendLookback),
  }
}


export function lakewatchRuleTimerangeToHclTerraform(struct?: LakewatchRuleTimerange | cdktn.IResolvable): any {
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

export class LakewatchRuleTimerangeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LakewatchRuleTimerange | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extendLookback !== undefined) {
      hasAnyValues = true;
      internalValueResult.extendLookback = this._extendLookback;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LakewatchRuleTimerange | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extendLookback = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extendLookback = value.extendLookback;
    }
  }

  // extend_lookback - computed: false, optional: true, required: false
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
export interface LakewatchRuleUpdatedBy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#display_name LakewatchRule#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#email LakewatchRule#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#id LakewatchRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#principal_type LakewatchRule#principal_type}
  */
  readonly principalType?: string;
}

export function lakewatchRuleUpdatedByToTerraform(struct?: LakewatchRuleUpdatedBy): any {
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


export function lakewatchRuleUpdatedByToHclTerraform(struct?: LakewatchRuleUpdatedBy): any {
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

export class LakewatchRuleUpdatedByOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LakewatchRuleUpdatedBy | undefined {
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

  public set internalValue(value: LakewatchRuleUpdatedBy | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule databricks_lakewatch_rule}
*/
export class LakewatchRule extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_lakewatch_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a LakewatchRule resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LakewatchRule to import
  * @param importFromId The id of the existing LakewatchRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LakewatchRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_lakewatch_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule databricks_lakewatch_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LakewatchRuleConfig
  */
  public constructor(scope: Construct, id: string, config: LakewatchRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_lakewatch_rule',
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
    this._annotations = config.annotations;
    this._batch.internalValue = config.batch;
    this._catalogName = config.catalogName;
    this._category = config.category;
    this._contentResourceId = config.contentResourceId;
    this._deduplication = config.deduplication;
    this._deduplicationTimeWindow = config.deduplicationTimeWindow;
    this._description = config.description;
    this._fidelity = config.fidelity;
    this._mitre.internalValue = config.mitre;
    this._objective = config.objective;
    this._output.internalValue = config.output;
    this._providerConfig.internalValue = config.providerConfig;
    this._references = config.references;
    this._ruleName = config.ruleName;
    this._runAsPrincipal = config.runAsPrincipal;
    this._runbook = config.runbook;
    this._schedule.internalValue = config.schedule;
    this._schemaName = config.schemaName;
    this._severity = config.severity;
    this._suppressUntilTime = config.suppressUntilTime;
    this._timerange.internalValue = config.timerange;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // batch - computed: false, optional: true, required: false
  private _batch = new LakewatchRuleBatchOutputReference(this, "batch");
  public get batch() {
    return this._batch;
  }
  public putBatch(value: LakewatchRuleBatch) {
    this._batch.internalValue = value;
  }
  public resetBatch() {
    this._batch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchInput() {
    return this._batch.internalValue;
  }

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

  // category - computed: false, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // compute_workspace_id - computed: true, optional: false, required: false
  public get computeWorkspaceId() {
    return this.getStringAttribute('compute_workspace_id');
  }

  // content_resource_id - computed: false, optional: true, required: false
  private _contentResourceId?: string; 
  public get contentResourceId() {
    return this.getStringAttribute('content_resource_id');
  }
  public set contentResourceId(value: string) {
    this._contentResourceId = value;
  }
  public resetContentResourceId() {
    this._contentResourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentResourceIdInput() {
    return this._contentResourceId;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // created_by - computed: true, optional: false, required: false
  private _createdBy = new LakewatchRuleCreatedByOutputReference(this, "created_by");
  public get createdBy() {
    return this._createdBy;
  }

  // deduplication - computed: false, optional: true, required: false
  private _deduplication?: string; 
  public get deduplication() {
    return this.getStringAttribute('deduplication');
  }
  public set deduplication(value: string) {
    this._deduplication = value;
  }
  public resetDeduplication() {
    this._deduplication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deduplicationInput() {
    return this._deduplication;
  }

  // deduplication_time_window - computed: false, optional: true, required: false
  private _deduplicationTimeWindow?: string; 
  public get deduplicationTimeWindow() {
    return this.getStringAttribute('deduplication_time_window');
  }
  public set deduplicationTimeWindow(value: string) {
    this._deduplicationTimeWindow = value;
  }
  public resetDeduplicationTimeWindow() {
    this._deduplicationTimeWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deduplicationTimeWindowInput() {
    return this._deduplicationTimeWindow;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // fidelity - computed: false, optional: false, required: true
  private _fidelity?: string; 
  public get fidelity() {
    return this.getStringAttribute('fidelity');
  }
  public set fidelity(value: string) {
    this._fidelity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fidelityInput() {
    return this._fidelity;
  }

  // mitre - computed: false, optional: true, required: false
  private _mitre = new LakewatchRuleMitreList(this, "mitre", false);
  public get mitre() {
    return this._mitre;
  }
  public putMitre(value: LakewatchRuleMitre[] | cdktn.IResolvable) {
    this._mitre.internalValue = value;
  }
  public resetMitre() {
    this._mitre.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mitreInput() {
    return this._mitre.internalValue;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // objective - computed: false, optional: true, required: false
  private _objective?: string; 
  public get objective() {
    return this.getStringAttribute('objective');
  }
  public set objective(value: string) {
    this._objective = value;
  }
  public resetObjective() {
    this._objective = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectiveInput() {
    return this._objective;
  }

  // original_content_pack - computed: true, optional: false, required: false
  private _originalContentPack = new LakewatchRuleOriginalContentPackOutputReference(this, "original_content_pack");
  public get originalContentPack() {
    return this._originalContentPack;
  }

  // output - computed: false, optional: false, required: true
  private _output = new LakewatchRuleOutputOutputReference(this, "output");
  public get output() {
    return this._output;
  }
  public putOutput(value: LakewatchRuleOutput) {
    this._output.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputInput() {
    return this._output.internalValue;
  }

  // owner - computed: true, optional: false, required: false
  private _owner = new LakewatchRuleOwnerOutputReference(this, "owner");
  public get owner() {
    return this._owner;
  }

  // provider_config - computed: true, optional: true, required: false
  private _providerConfig = new LakewatchRuleProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: LakewatchRuleProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // references - computed: false, optional: true, required: false
  private _references?: string[]; 
  public get references() {
    return this.getListAttribute('references');
  }
  public set references(value: string[]) {
    this._references = value;
  }
  public resetReferences() {
    this._references = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referencesInput() {
    return this._references;
  }

  // rule_id - computed: true, optional: false, required: false
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }

  // rule_name - computed: false, optional: false, required: true
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }

  // run_as_principal - computed: false, optional: true, required: false
  private _runAsPrincipal?: string; 
  public get runAsPrincipal() {
    return this.getStringAttribute('run_as_principal');
  }
  public set runAsPrincipal(value: string) {
    this._runAsPrincipal = value;
  }
  public resetRunAsPrincipal() {
    this._runAsPrincipal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsPrincipalInput() {
    return this._runAsPrincipal;
  }

  // runbook - computed: false, optional: true, required: false
  private _runbook?: string; 
  public get runbook() {
    return this.getStringAttribute('runbook');
  }
  public set runbook(value: string) {
    this._runbook = value;
  }
  public resetRunbook() {
    this._runbook = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runbookInput() {
    return this._runbook;
  }

  // schedule - computed: false, optional: false, required: true
  private _schedule = new LakewatchRuleScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: LakewatchRuleSchedule) {
    this._schedule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // schema_name - computed: false, optional: false, required: true
  private _schemaName?: string; 
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
  public set schemaName(value: string) {
    this._schemaName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaNameInput() {
    return this._schemaName;
  }

  // severity - computed: false, optional: false, required: true
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // status - computed: true, optional: false, required: false
  private _status = new LakewatchRuleStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }

  // suppress_until_time - computed: false, optional: true, required: false
  private _suppressUntilTime?: string; 
  public get suppressUntilTime() {
    return this.getStringAttribute('suppress_until_time');
  }
  public set suppressUntilTime(value: string) {
    this._suppressUntilTime = value;
  }
  public resetSuppressUntilTime() {
    this._suppressUntilTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressUntilTimeInput() {
    return this._suppressUntilTime;
  }

  // timerange - computed: false, optional: true, required: false
  private _timerange = new LakewatchRuleTimerangeOutputReference(this, "timerange");
  public get timerange() {
    return this._timerange;
  }
  public putTimerange(value: LakewatchRuleTimerange) {
    this._timerange.internalValue = value;
  }
  public resetTimerange() {
    this._timerange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timerangeInput() {
    return this._timerange.internalValue;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // updated_by - computed: true, optional: false, required: false
  private _updatedBy = new LakewatchRuleUpdatedByOutputReference(this, "updated_by");
  public get updatedBy() {
    return this._updatedBy;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktn.hashMapper(cdktn.stringToTerraform)(this._annotations),
      batch: lakewatchRuleBatchToTerraform(this._batch.internalValue),
      catalog_name: cdktn.stringToTerraform(this._catalogName),
      category: cdktn.stringToTerraform(this._category),
      content_resource_id: cdktn.stringToTerraform(this._contentResourceId),
      deduplication: cdktn.stringToTerraform(this._deduplication),
      deduplication_time_window: cdktn.stringToTerraform(this._deduplicationTimeWindow),
      description: cdktn.stringToTerraform(this._description),
      fidelity: cdktn.stringToTerraform(this._fidelity),
      mitre: cdktn.listMapper(lakewatchRuleMitreToTerraform, false)(this._mitre.internalValue),
      objective: cdktn.stringToTerraform(this._objective),
      output: lakewatchRuleOutputToTerraform(this._output.internalValue),
      provider_config: lakewatchRuleProviderConfigToTerraform(this._providerConfig.internalValue),
      references: cdktn.listMapper(cdktn.stringToTerraform, false)(this._references),
      rule_name: cdktn.stringToTerraform(this._ruleName),
      run_as_principal: cdktn.stringToTerraform(this._runAsPrincipal),
      runbook: cdktn.stringToTerraform(this._runbook),
      schedule: lakewatchRuleScheduleToTerraform(this._schedule.internalValue),
      schema_name: cdktn.stringToTerraform(this._schemaName),
      severity: cdktn.stringToTerraform(this._severity),
      suppress_until_time: cdktn.stringToTerraform(this._suppressUntilTime),
      timerange: lakewatchRuleTimerangeToTerraform(this._timerange.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      batch: {
        value: lakewatchRuleBatchToHclTerraform(this._batch.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LakewatchRuleBatch",
      },
      catalog_name: {
        value: cdktn.stringToHclTerraform(this._catalogName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      category: {
        value: cdktn.stringToHclTerraform(this._category),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_resource_id: {
        value: cdktn.stringToHclTerraform(this._contentResourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deduplication: {
        value: cdktn.stringToHclTerraform(this._deduplication),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deduplication_time_window: {
        value: cdktn.stringToHclTerraform(this._deduplicationTimeWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fidelity: {
        value: cdktn.stringToHclTerraform(this._fidelity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mitre: {
        value: cdktn.listMapperHcl(lakewatchRuleMitreToHclTerraform, false)(this._mitre.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LakewatchRuleMitreList",
      },
      objective: {
        value: cdktn.stringToHclTerraform(this._objective),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output: {
        value: lakewatchRuleOutputToHclTerraform(this._output.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LakewatchRuleOutput",
      },
      provider_config: {
        value: lakewatchRuleProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LakewatchRuleProviderConfig",
      },
      references: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._references),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      rule_name: {
        value: cdktn.stringToHclTerraform(this._ruleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      run_as_principal: {
        value: cdktn.stringToHclTerraform(this._runAsPrincipal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      runbook: {
        value: cdktn.stringToHclTerraform(this._runbook),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule: {
        value: lakewatchRuleScheduleToHclTerraform(this._schedule.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LakewatchRuleSchedule",
      },
      schema_name: {
        value: cdktn.stringToHclTerraform(this._schemaName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      severity: {
        value: cdktn.stringToHclTerraform(this._severity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      suppress_until_time: {
        value: cdktn.stringToHclTerraform(this._suppressUntilTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timerange: {
        value: lakewatchRuleTimerangeToHclTerraform(this._timerange.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LakewatchRuleTimerange",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
