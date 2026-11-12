/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataDatabricksLakewatchDatasourcesConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#catalog_name DataDatabricksLakewatchDatasources#catalog_name}
  */
  readonly catalogName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#filter DataDatabricksLakewatchDatasources#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#page_size DataDatabricksLakewatchDatasources#page_size}
  */
  readonly pageSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#provider_config DataDatabricksLakewatchDatasources#provider_config}
  */
  readonly providerConfig?: DataDatabricksLakewatchDatasourcesProviderConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#schema_name DataDatabricksLakewatchDatasources#schema_name}
  */
  readonly schemaName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#view DataDatabricksLakewatchDatasources#view}
  */
  readonly view?: string;
}
export interface DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#catalog_name DataDatabricksLakewatchDatasources#catalog_name}
  */
  readonly catalogName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#schema_name DataDatabricksLakewatchDatasources#schema_name}
  */
  readonly schemaName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#table_name DataDatabricksLakewatchDatasources#table_name}
  */
  readonly tableName: string;
}

export function dataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableToTerraform(struct?: DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    catalog_name: cdktn.stringToTerraform(struct!.catalogName),
    schema_name: cdktn.stringToTerraform(struct!.schemaName),
    table_name: cdktn.stringToTerraform(struct!.tableName),
  }
}


export function dataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableToHclTerraform(struct?: DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    catalog_name: {
      value: cdktn.stringToHclTerraform(struct!.catalogName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_name: {
      value: cdktn.stringToHclTerraform(struct!.schemaName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_name: {
      value: cdktn.stringToHclTerraform(struct!.tableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalogName !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogName = this._catalogName;
    }
    if (this._schemaName !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaName = this._schemaName;
    }
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._catalogName = undefined;
      this._schemaName = undefined;
      this._tableName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._catalogName = value.catalogName;
      this._schemaName = value.schemaName;
      this._tableName = value.tableName;
    }
  }

  // catalog_name - computed: true, optional: true, required: false
  private _catalogName?: string; 
  public get catalogName() {
    return this.getStringAttribute('catalog_name');
  }
  public set catalogName(value: string) {
    this._catalogName = value;
  }
  public resetCatalogName() {
    this._catalogName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogNameInput() {
    return this._catalogName;
  }

  // schema_name - computed: true, optional: true, required: false
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

  // table_name - computed: true, optional: false, required: true
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }
}
export interface DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#header_retention DataDatabricksLakewatchDatasources#header_retention}
  */
  readonly headerRetention?: boolean | cdktn.IResolvable;
}

export function dataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsToTerraform(struct?: DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    header_retention: cdktn.booleanToTerraform(struct!.headerRetention),
  }
}


export function dataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsToHclTerraform(struct?: DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    header_retention: {
      value: cdktn.booleanToHclTerraform(struct!.headerRetention),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerRetention !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerRetention = this._headerRetention;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerRetention = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerRetention = value.headerRetention;
    }
  }

  // header_retention - computed: true, optional: true, required: false
  private _headerRetention?: boolean | cdktn.IResolvable; 
  public get headerRetention() {
    return this.getBooleanAttribute('header_retention');
  }
  public set headerRetention(value: boolean | cdktn.IResolvable) {
    this._headerRetention = value;
  }
  public resetHeaderRetention() {
    this._headerRetention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerRetentionInput() {
    return this._headerRetention;
  }
}
export interface DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#path DataDatabricksLakewatchDatasources#path}
  */
  readonly path: string;
}

export function dataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayToTerraform(struct?: DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    path: cdktn.stringToTerraform(struct!.path),
  }
}


export function dataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayToHclTerraform(struct?: DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
    }
  }

  // path - computed: true, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#cloud_watch_logs DataDatabricksLakewatchDatasources#cloud_watch_logs}
  */
  readonly cloudWatchLogs?: DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#json_array DataDatabricksLakewatchDatasources#json_array}
  */
  readonly jsonArray?: DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray;
}

export function dataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeToTerraform(struct?: DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cloud_watch_logs: dataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsToTerraform(struct!.cloudWatchLogs),
    json_array: dataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayToTerraform(struct!.jsonArray),
  }
}


export function dataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeToHclTerraform(struct?: DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cloud_watch_logs: {
      value: dataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsToHclTerraform(struct!.cloudWatchLogs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs",
    },
    json_array: {
      value: dataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayToHclTerraform(struct!.jsonArray),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudWatchLogs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudWatchLogs = this._cloudWatchLogs?.internalValue;
    }
    if (this._jsonArray?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonArray = this._jsonArray?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudWatchLogs.internalValue = undefined;
      this._jsonArray.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudWatchLogs.internalValue = value.cloudWatchLogs;
      this._jsonArray.internalValue = value.jsonArray;
    }
  }

  // cloud_watch_logs - computed: true, optional: true, required: false
  private _cloudWatchLogs = new DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference(this, "cloud_watch_logs");
  public get cloudWatchLogs() {
    return this._cloudWatchLogs;
  }
  public putCloudWatchLogs(value: DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs) {
    this._cloudWatchLogs.internalValue = value;
  }
  public resetCloudWatchLogs() {
    this._cloudWatchLogs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudWatchLogsInput() {
    return this._cloudWatchLogs.internalValue;
  }

  // json_array - computed: true, optional: true, required: false
  private _jsonArray = new DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference(this, "json_array");
  public get jsonArray() {
    return this._jsonArray;
  }
  public putJsonArray(value: DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray) {
    this._jsonArray.internalValue = value;
  }
  public resetJsonArray() {
    this._jsonArray.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonArrayInput() {
    return this._jsonArray.internalValue;
  }
}
export interface DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#catalog_name DataDatabricksLakewatchDatasources#catalog_name}
  */
  readonly catalogName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#schema_name DataDatabricksLakewatchDatasources#schema_name}
  */
  readonly schemaName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#table_name DataDatabricksLakewatchDatasources#table_name}
  */
  readonly tableName: string;
}

export function dataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableToTerraform(struct?: DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    catalog_name: cdktn.stringToTerraform(struct!.catalogName),
    schema_name: cdktn.stringToTerraform(struct!.schemaName),
    table_name: cdktn.stringToTerraform(struct!.tableName),
  }
}


export function dataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableToHclTerraform(struct?: DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    catalog_name: {
      value: cdktn.stringToHclTerraform(struct!.catalogName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_name: {
      value: cdktn.stringToHclTerraform(struct!.schemaName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_name: {
      value: cdktn.stringToHclTerraform(struct!.tableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalogName !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogName = this._catalogName;
    }
    if (this._schemaName !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaName = this._schemaName;
    }
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._catalogName = undefined;
      this._schemaName = undefined;
      this._tableName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._catalogName = value.catalogName;
      this._schemaName = value.schemaName;
      this._tableName = value.tableName;
    }
  }

  // catalog_name - computed: true, optional: true, required: false
  private _catalogName?: string; 
  public get catalogName() {
    return this.getStringAttribute('catalog_name');
  }
  public set catalogName(value: string) {
    this._catalogName = value;
  }
  public resetCatalogName() {
    this._catalogName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogNameInput() {
    return this._catalogName;
  }

  // schema_name - computed: true, optional: true, required: false
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

  // table_name - computed: true, optional: false, required: true
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }
}
export interface DataDatabricksLakewatchDatasourcesDatasourcesAutoloader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#aws_secret_scope DataDatabricksLakewatchDatasources#aws_secret_scope}
  */
  readonly awsSecretScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#envelope DataDatabricksLakewatchDatasources#envelope}
  */
  readonly envelope?: DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#format DataDatabricksLakewatchDatasources#format}
  */
  readonly format: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#format_options DataDatabricksLakewatchDatasources#format_options}
  */
  readonly formatOptions?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#include_existing_files DataDatabricksLakewatchDatasources#include_existing_files}
  */
  readonly includeExistingFiles?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#location DataDatabricksLakewatchDatasources#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#override_partition_columns DataDatabricksLakewatchDatasources#override_partition_columns}
  */
  readonly overridePartitionColumns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#queue_url DataDatabricksLakewatchDatasources#queue_url}
  */
  readonly queueUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#raw_table DataDatabricksLakewatchDatasources#raw_table}
  */
  readonly rawTable: DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#service_credentials DataDatabricksLakewatchDatasources#service_credentials}
  */
  readonly serviceCredentials?: string;
}

export function dataDatabricksLakewatchDatasourcesDatasourcesAutoloaderToTerraform(struct?: DataDatabricksLakewatchDatasourcesDatasourcesAutoloader): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aws_secret_scope: cdktn.stringToTerraform(struct!.awsSecretScope),
    envelope: dataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeToTerraform(struct!.envelope),
    format: cdktn.stringToTerraform(struct!.format),
    format_options: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.formatOptions),
    include_existing_files: cdktn.booleanToTerraform(struct!.includeExistingFiles),
    location: cdktn.stringToTerraform(struct!.location),
    override_partition_columns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.overridePartitionColumns),
    queue_url: cdktn.stringToTerraform(struct!.queueUrl),
    raw_table: dataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableToTerraform(struct!.rawTable),
    service_credentials: cdktn.stringToTerraform(struct!.serviceCredentials),
  }
}


export function dataDatabricksLakewatchDatasourcesDatasourcesAutoloaderToHclTerraform(struct?: DataDatabricksLakewatchDatasourcesDatasourcesAutoloader): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    aws_secret_scope: {
      value: cdktn.stringToHclTerraform(struct!.awsSecretScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    envelope: {
      value: dataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeToHclTerraform(struct!.envelope),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope",
    },
    format: {
      value: cdktn.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format_options: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.formatOptions),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    include_existing_files: {
      value: cdktn.booleanToHclTerraform(struct!.includeExistingFiles),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    location: {
      value: cdktn.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override_partition_columns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.overridePartitionColumns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    queue_url: {
      value: cdktn.stringToHclTerraform(struct!.queueUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    raw_table: {
      value: dataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableToHclTerraform(struct!.rawTable),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable",
    },
    service_credentials: {
      value: cdktn.stringToHclTerraform(struct!.serviceCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksLakewatchDatasourcesDatasourcesAutoloader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsSecretScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsSecretScope = this._awsSecretScope;
    }
    if (this._envelope?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.envelope = this._envelope?.internalValue;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._formatOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.formatOptions = this._formatOptions;
    }
    if (this._includeExistingFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeExistingFiles = this._includeExistingFiles;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._overridePartitionColumns !== undefined) {
      hasAnyValues = true;
      internalValueResult.overridePartitionColumns = this._overridePartitionColumns;
    }
    if (this._queueUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueUrl = this._queueUrl;
    }
    if (this._rawTable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rawTable = this._rawTable?.internalValue;
    }
    if (this._serviceCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceCredentials = this._serviceCredentials;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksLakewatchDatasourcesDatasourcesAutoloader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsSecretScope = undefined;
      this._envelope.internalValue = undefined;
      this._format = undefined;
      this._formatOptions = undefined;
      this._includeExistingFiles = undefined;
      this._location = undefined;
      this._overridePartitionColumns = undefined;
      this._queueUrl = undefined;
      this._rawTable.internalValue = undefined;
      this._serviceCredentials = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsSecretScope = value.awsSecretScope;
      this._envelope.internalValue = value.envelope;
      this._format = value.format;
      this._formatOptions = value.formatOptions;
      this._includeExistingFiles = value.includeExistingFiles;
      this._location = value.location;
      this._overridePartitionColumns = value.overridePartitionColumns;
      this._queueUrl = value.queueUrl;
      this._rawTable.internalValue = value.rawTable;
      this._serviceCredentials = value.serviceCredentials;
    }
  }

  // aws_secret_scope - computed: true, optional: true, required: false
  private _awsSecretScope?: string; 
  public get awsSecretScope() {
    return this.getStringAttribute('aws_secret_scope');
  }
  public set awsSecretScope(value: string) {
    this._awsSecretScope = value;
  }
  public resetAwsSecretScope() {
    this._awsSecretScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSecretScopeInput() {
    return this._awsSecretScope;
  }

  // effective_include_existing_files - computed: true, optional: false, required: false
  public get effectiveIncludeExistingFiles() {
    return this.getBooleanAttribute('effective_include_existing_files');
  }

  // effective_raw_table - computed: true, optional: false, required: false
  private _effectiveRawTable = new DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference(this, "effective_raw_table");
  public get effectiveRawTable() {
    return this._effectiveRawTable;
  }

  // envelope - computed: true, optional: true, required: false
  private _envelope = new DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference(this, "envelope");
  public get envelope() {
    return this._envelope;
  }
  public putEnvelope(value: DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope) {
    this._envelope.internalValue = value;
  }
  public resetEnvelope() {
    this._envelope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envelopeInput() {
    return this._envelope.internalValue;
  }

  // format - computed: true, optional: false, required: true
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // format_options - computed: true, optional: true, required: false
  private _formatOptions?: { [key: string]: string }; 
  public get formatOptions() {
    return this.getStringMapAttribute('format_options');
  }
  public set formatOptions(value: { [key: string]: string }) {
    this._formatOptions = value;
  }
  public resetFormatOptions() {
    this._formatOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatOptionsInput() {
    return this._formatOptions;
  }

  // include_existing_files - computed: true, optional: true, required: false
  private _includeExistingFiles?: boolean | cdktn.IResolvable; 
  public get includeExistingFiles() {
    return this.getBooleanAttribute('include_existing_files');
  }
  public set includeExistingFiles(value: boolean | cdktn.IResolvable) {
    this._includeExistingFiles = value;
  }
  public resetIncludeExistingFiles() {
    this._includeExistingFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeExistingFilesInput() {
    return this._includeExistingFiles;
  }

  // location - computed: true, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // override_partition_columns - computed: true, optional: true, required: false
  private _overridePartitionColumns?: string[]; 
  public get overridePartitionColumns() {
    return this.getListAttribute('override_partition_columns');
  }
  public set overridePartitionColumns(value: string[]) {
    this._overridePartitionColumns = value;
  }
  public resetOverridePartitionColumns() {
    this._overridePartitionColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overridePartitionColumnsInput() {
    return this._overridePartitionColumns;
  }

  // queue_url - computed: true, optional: true, required: false
  private _queueUrl?: string; 
  public get queueUrl() {
    return this.getStringAttribute('queue_url');
  }
  public set queueUrl(value: string) {
    this._queueUrl = value;
  }
  public resetQueueUrl() {
    this._queueUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueUrlInput() {
    return this._queueUrl;
  }

  // raw_table - computed: true, optional: false, required: true
  private _rawTable = new DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference(this, "raw_table");
  public get rawTable() {
    return this._rawTable;
  }
  public putRawTable(value: DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable) {
    this._rawTable.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rawTableInput() {
    return this._rawTable.internalValue;
  }

  // service_credentials - computed: true, optional: true, required: false
  private _serviceCredentials?: string; 
  public get serviceCredentials() {
    return this.getStringAttribute('service_credentials');
  }
  public set serviceCredentials(value: string) {
    this._serviceCredentials = value;
  }
  public resetServiceCredentials() {
    this._serviceCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceCredentialsInput() {
    return this._serviceCredentials;
  }
}
export interface DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#display_name DataDatabricksLakewatchDatasources#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#email DataDatabricksLakewatchDatasources#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#id DataDatabricksLakewatchDatasources#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#principal_type DataDatabricksLakewatchDatasources#principal_type}
  */
  readonly principalType?: string;
}

export function dataDatabricksLakewatchDatasourcesDatasourcesCreatedByToTerraform(struct?: DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy): any {
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


export function dataDatabricksLakewatchDatasourcesDatasourcesCreatedByToHclTerraform(struct?: DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy): any {
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

export class DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy | undefined {
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

  public set internalValue(value: DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy | undefined) {
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
export interface DataDatabricksLakewatchDatasourcesDatasourcesExistingTable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#catalog DataDatabricksLakewatchDatasources#catalog}
  */
  readonly catalog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#include_existing_rows DataDatabricksLakewatchDatasources#include_existing_rows}
  */
  readonly includeExistingRows?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#name DataDatabricksLakewatchDatasources#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#schema DataDatabricksLakewatchDatasources#schema}
  */
  readonly schema?: string;
}

export function dataDatabricksLakewatchDatasourcesDatasourcesExistingTableToTerraform(struct?: DataDatabricksLakewatchDatasourcesDatasourcesExistingTable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    catalog: cdktn.stringToTerraform(struct!.catalog),
    include_existing_rows: cdktn.booleanToTerraform(struct!.includeExistingRows),
    name: cdktn.stringToTerraform(struct!.name),
    schema: cdktn.stringToTerraform(struct!.schema),
  }
}


export function dataDatabricksLakewatchDatasourcesDatasourcesExistingTableToHclTerraform(struct?: DataDatabricksLakewatchDatasourcesDatasourcesExistingTable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    catalog: {
      value: cdktn.stringToHclTerraform(struct!.catalog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_existing_rows: {
      value: cdktn.booleanToHclTerraform(struct!.includeExistingRows),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema: {
      value: cdktn.stringToHclTerraform(struct!.schema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksLakewatchDatasourcesDatasourcesExistingTable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalog !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalog = this._catalog;
    }
    if (this._includeExistingRows !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeExistingRows = this._includeExistingRows;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksLakewatchDatasourcesDatasourcesExistingTable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._catalog = undefined;
      this._includeExistingRows = undefined;
      this._name = undefined;
      this._schema = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._catalog = value.catalog;
      this._includeExistingRows = value.includeExistingRows;
      this._name = value.name;
      this._schema = value.schema;
    }
  }

  // catalog - computed: true, optional: true, required: false
  private _catalog?: string; 
  public get catalog() {
    return this.getStringAttribute('catalog');
  }
  public set catalog(value: string) {
    this._catalog = value;
  }
  public resetCatalog() {
    this._catalog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog;
  }

  // effective_catalog - computed: true, optional: false, required: false
  public get effectiveCatalog() {
    return this.getStringAttribute('effective_catalog');
  }

  // effective_name - computed: true, optional: false, required: false
  public get effectiveName() {
    return this.getStringAttribute('effective_name');
  }

  // effective_schema - computed: true, optional: false, required: false
  public get effectiveSchema() {
    return this.getStringAttribute('effective_schema');
  }

  // include_existing_rows - computed: true, optional: true, required: false
  private _includeExistingRows?: boolean | cdktn.IResolvable; 
  public get includeExistingRows() {
    return this.getBooleanAttribute('include_existing_rows');
  }
  public set includeExistingRows(value: boolean | cdktn.IResolvable) {
    this._includeExistingRows = value;
  }
  public resetIncludeExistingRows() {
    this._includeExistingRows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeExistingRowsInput() {
    return this._includeExistingRows;
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

  // schema - computed: true, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }
}
export interface DataDatabricksLakewatchDatasourcesDatasourcesOwner {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#display_name DataDatabricksLakewatchDatasources#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#email DataDatabricksLakewatchDatasources#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#id DataDatabricksLakewatchDatasources#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#principal_type DataDatabricksLakewatchDatasources#principal_type}
  */
  readonly principalType?: string;
}

export function dataDatabricksLakewatchDatasourcesDatasourcesOwnerToTerraform(struct?: DataDatabricksLakewatchDatasourcesDatasourcesOwner): any {
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


export function dataDatabricksLakewatchDatasourcesDatasourcesOwnerToHclTerraform(struct?: DataDatabricksLakewatchDatasourcesDatasourcesOwner): any {
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

export class DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksLakewatchDatasourcesDatasourcesOwner | undefined {
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

  public set internalValue(value: DataDatabricksLakewatchDatasourcesDatasourcesOwner | undefined) {
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
export interface DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#catalog_name DataDatabricksLakewatchDatasources#catalog_name}
  */
  readonly catalogName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#schema_name DataDatabricksLakewatchDatasources#schema_name}
  */
  readonly schemaName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#table_name DataDatabricksLakewatchDatasources#table_name}
  */
  readonly tableName: string;
}

export function dataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableToTerraform(struct?: DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    catalog_name: cdktn.stringToTerraform(struct!.catalogName),
    schema_name: cdktn.stringToTerraform(struct!.schemaName),
    table_name: cdktn.stringToTerraform(struct!.tableName),
  }
}


export function dataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableToHclTerraform(struct?: DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    catalog_name: {
      value: cdktn.stringToHclTerraform(struct!.catalogName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_name: {
      value: cdktn.stringToHclTerraform(struct!.schemaName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_name: {
      value: cdktn.stringToHclTerraform(struct!.tableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalogName !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogName = this._catalogName;
    }
    if (this._schemaName !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaName = this._schemaName;
    }
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._catalogName = undefined;
      this._schemaName = undefined;
      this._tableName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._catalogName = value.catalogName;
      this._schemaName = value.schemaName;
      this._tableName = value.tableName;
    }
  }

  // catalog_name - computed: true, optional: true, required: false
  private _catalogName?: string; 
  public get catalogName() {
    return this.getStringAttribute('catalog_name');
  }
  public set catalogName(value: string) {
    this._catalogName = value;
  }
  public resetCatalogName() {
    this._catalogName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogNameInput() {
    return this._catalogName;
  }

  // schema_name - computed: true, optional: true, required: false
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

  // table_name - computed: true, optional: false, required: true
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }
}
export interface DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#catalog_name DataDatabricksLakewatchDatasources#catalog_name}
  */
  readonly catalogName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#schema_name DataDatabricksLakewatchDatasources#schema_name}
  */
  readonly schemaName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#table_name DataDatabricksLakewatchDatasources#table_name}
  */
  readonly tableName: string;
}

export function dataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableToTerraform(struct?: DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    catalog_name: cdktn.stringToTerraform(struct!.catalogName),
    schema_name: cdktn.stringToTerraform(struct!.schemaName),
    table_name: cdktn.stringToTerraform(struct!.tableName),
  }
}


export function dataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableToHclTerraform(struct?: DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    catalog_name: {
      value: cdktn.stringToHclTerraform(struct!.catalogName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_name: {
      value: cdktn.stringToHclTerraform(struct!.schemaName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_name: {
      value: cdktn.stringToHclTerraform(struct!.tableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalogName !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogName = this._catalogName;
    }
    if (this._schemaName !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaName = this._schemaName;
    }
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._catalogName = undefined;
      this._schemaName = undefined;
      this._tableName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._catalogName = value.catalogName;
      this._schemaName = value.schemaName;
      this._tableName = value.tableName;
    }
  }

  // catalog_name - computed: true, optional: true, required: false
  private _catalogName?: string; 
  public get catalogName() {
    return this.getStringAttribute('catalog_name');
  }
  public set catalogName(value: string) {
    this._catalogName = value;
  }
  public resetCatalogName() {
    this._catalogName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogNameInput() {
    return this._catalogName;
  }

  // schema_name - computed: true, optional: true, required: false
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

  // table_name - computed: true, optional: false, required: true
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }
}
export interface DataDatabricksLakewatchDatasourcesDatasourcesParsers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#id DataDatabricksLakewatchDatasources#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#target_table DataDatabricksLakewatchDatasources#target_table}
  */
  readonly targetTable?: DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#version DataDatabricksLakewatchDatasources#version}
  */
  readonly version: string;
}

export function dataDatabricksLakewatchDatasourcesDatasourcesParsersToTerraform(struct?: DataDatabricksLakewatchDatasourcesDatasourcesParsers): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
    target_table: dataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableToTerraform(struct!.targetTable),
    version: cdktn.stringToTerraform(struct!.version),
  }
}


export function dataDatabricksLakewatchDatasourcesDatasourcesParsersToHclTerraform(struct?: DataDatabricksLakewatchDatasourcesDatasourcesParsers): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_table: {
      value: dataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableToHclTerraform(struct!.targetTable),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable",
    },
    version: {
      value: cdktn.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksLakewatchDatasourcesDatasourcesParsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._targetTable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetTable = this._targetTable?.internalValue;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksLakewatchDatasourcesDatasourcesParsers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._targetTable.internalValue = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._targetTable.internalValue = value.targetTable;
      this._version = value.version;
    }
  }

  // effective_target_table - computed: true, optional: false, required: false
  private _effectiveTargetTable = new DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference(this, "effective_target_table");
  public get effectiveTargetTable() {
    return this._effectiveTargetTable;
  }

  // id - computed: true, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // target_table - computed: true, optional: true, required: false
  private _targetTable = new DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference(this, "target_table");
  public get targetTable() {
    return this._targetTable;
  }
  public putTargetTable(value: DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable) {
    this._targetTable.internalValue = value;
  }
  public resetTargetTable() {
    this._targetTable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTableInput() {
    return this._targetTable.internalValue;
  }

  // version - computed: true, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class DataDatabricksLakewatchDatasourcesDatasourcesParsersList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksLakewatchDatasourcesDatasourcesParsers[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference {
    return new DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#workspace_id DataDatabricksLakewatchDatasources#workspace_id}
  */
  readonly workspaceId?: string;
}

export function dataDatabricksLakewatchDatasourcesDatasourcesProviderConfigToTerraform(struct?: DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function dataDatabricksLakewatchDatasourcesDatasourcesProviderConfigToHclTerraform(struct?: DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig | cdktn.IResolvable): any {
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

export class DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksLakewatchDatasourcesDatasourcesSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#at_least_every DataDatabricksLakewatchDatasources#at_least_every}
  */
  readonly atLeastEvery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#compute_group DataDatabricksLakewatchDatasources#compute_group}
  */
  readonly computeGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#continuous DataDatabricksLakewatchDatasources#continuous}
  */
  readonly continuous?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#cron_expression DataDatabricksLakewatchDatasources#cron_expression}
  */
  readonly cronExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#enabled DataDatabricksLakewatchDatasources#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function dataDatabricksLakewatchDatasourcesDatasourcesScheduleToTerraform(struct?: DataDatabricksLakewatchDatasourcesDatasourcesSchedule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    at_least_every: cdktn.stringToTerraform(struct!.atLeastEvery),
    compute_group: cdktn.stringToTerraform(struct!.computeGroup),
    continuous: cdktn.booleanToTerraform(struct!.continuous),
    cron_expression: cdktn.stringToTerraform(struct!.cronExpression),
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function dataDatabricksLakewatchDatasourcesDatasourcesScheduleToHclTerraform(struct?: DataDatabricksLakewatchDatasourcesDatasourcesSchedule): any {
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
    compute_group: {
      value: cdktn.stringToHclTerraform(struct!.computeGroup),
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

export class DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksLakewatchDatasourcesDatasourcesSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._atLeastEvery !== undefined) {
      hasAnyValues = true;
      internalValueResult.atLeastEvery = this._atLeastEvery;
    }
    if (this._computeGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeGroup = this._computeGroup;
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

  public set internalValue(value: DataDatabricksLakewatchDatasourcesDatasourcesSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._atLeastEvery = undefined;
      this._computeGroup = undefined;
      this._continuous = undefined;
      this._cronExpression = undefined;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._atLeastEvery = value.atLeastEvery;
      this._computeGroup = value.computeGroup;
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

  // compute_group - computed: true, optional: true, required: false
  private _computeGroup?: string; 
  public get computeGroup() {
    return this.getStringAttribute('compute_group');
  }
  public set computeGroup(value: string) {
    this._computeGroup = value;
  }
  public resetComputeGroup() {
    this._computeGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeGroupInput() {
    return this._computeGroup;
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
export interface DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJob {
}

export function dataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobToTerraform(struct?: DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJob): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobToHclTerraform(struct?: DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJob): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJob | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJob | undefined) {
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
export interface DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipeline {
}

export function dataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineToTerraform(struct?: DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipeline): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineToHclTerraform(struct?: DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipeline): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipeline | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipeline | undefined) {
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
export interface DataDatabricksLakewatchDatasourcesDatasourcesStatus {
}

export function dataDatabricksLakewatchDatasourcesDatasourcesStatusToTerraform(struct?: DataDatabricksLakewatchDatasourcesDatasourcesStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataDatabricksLakewatchDatasourcesDatasourcesStatusToHclTerraform(struct?: DataDatabricksLakewatchDatasourcesDatasourcesStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksLakewatchDatasourcesDatasourcesStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksLakewatchDatasourcesDatasourcesStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ingestion_job - computed: true, optional: false, required: false
  private _ingestionJob = new DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference(this, "ingestion_job");
  public get ingestionJob() {
    return this._ingestionJob;
  }

  // ingestion_pipeline - computed: true, optional: false, required: false
  private _ingestionPipeline = new DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference(this, "ingestion_pipeline");
  public get ingestionPipeline() {
    return this._ingestionPipeline;
  }
}
export interface DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#configuration DataDatabricksLakewatchDatasources#configuration}
  */
  readonly configuration?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#connection_name DataDatabricksLakewatchDatasources#connection_name}
  */
  readonly connectionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#start_time DataDatabricksLakewatchDatasources#start_time}
  */
  readonly startTime?: string;
}

export function dataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionToTerraform(struct?: DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnection): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    configuration: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.configuration),
    connection_name: cdktn.stringToTerraform(struct!.connectionName),
    start_time: cdktn.stringToTerraform(struct!.startTime),
  }
}


export function dataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionToHclTerraform(struct?: DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnection): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    configuration: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.configuration),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    connection_name: {
      value: cdktn.stringToHclTerraform(struct!.connectionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktn.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._connectionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionName = this._connectionName;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configuration = undefined;
      this._connectionName = undefined;
      this._startTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configuration = value.configuration;
      this._connectionName = value.connectionName;
      this._startTime = value.startTime;
    }
  }

  // configuration - computed: true, optional: true, required: false
  private _configuration?: { [key: string]: string }; 
  public get configuration() {
    return this.getStringMapAttribute('configuration');
  }
  public set configuration(value: { [key: string]: string }) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
  }

  // connection_name - computed: true, optional: false, required: true
  private _connectionName?: string; 
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }
  public set connectionName(value: string) {
    this._connectionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionNameInput() {
    return this._connectionName;
  }

  // connector - computed: true, optional: false, required: false
  public get connector() {
    return this.getStringAttribute('connector');
  }

  // effective_start_time - computed: true, optional: false, required: false
  public get effectiveStartTime() {
    return this.getStringAttribute('effective_start_time');
  }

  // start_time - computed: true, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}
export interface DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#display_name DataDatabricksLakewatchDatasources#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#email DataDatabricksLakewatchDatasources#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#id DataDatabricksLakewatchDatasources#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#principal_type DataDatabricksLakewatchDatasources#principal_type}
  */
  readonly principalType?: string;
}

export function dataDatabricksLakewatchDatasourcesDatasourcesUpdatedByToTerraform(struct?: DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy): any {
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


export function dataDatabricksLakewatchDatasourcesDatasourcesUpdatedByToHclTerraform(struct?: DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy): any {
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

export class DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy | undefined {
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

  public set internalValue(value: DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy | undefined) {
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
export interface DataDatabricksLakewatchDatasourcesDatasources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#name DataDatabricksLakewatchDatasources#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#provider_config DataDatabricksLakewatchDatasources#provider_config}
  */
  readonly providerConfig?: DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig;
}

export function dataDatabricksLakewatchDatasourcesDatasourcesToTerraform(struct?: DataDatabricksLakewatchDatasourcesDatasources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    provider_config: dataDatabricksLakewatchDatasourcesDatasourcesProviderConfigToTerraform(struct!.providerConfig),
  }
}


export function dataDatabricksLakewatchDatasourcesDatasourcesToHclTerraform(struct?: DataDatabricksLakewatchDatasourcesDatasources): any {
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
      value: dataDatabricksLakewatchDatasourcesDatasourcesProviderConfigToHclTerraform(struct!.providerConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksLakewatchDatasourcesDatasourcesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksLakewatchDatasourcesDatasources | undefined {
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

  public set internalValue(value: DataDatabricksLakewatchDatasourcesDatasources | undefined) {
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

  // autoloader - computed: true, optional: false, required: false
  private _autoloader = new DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference(this, "autoloader");
  public get autoloader() {
    return this._autoloader;
  }

  // catalog_name - computed: true, optional: false, required: false
  public get catalogName() {
    return this.getStringAttribute('catalog_name');
  }

  // compute_mode - computed: true, optional: false, required: false
  public get computeMode() {
    return this.getStringAttribute('compute_mode');
  }

  // compute_workspace_id - computed: true, optional: false, required: false
  public get computeWorkspaceId() {
    return this.getStringAttribute('compute_workspace_id');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // created_by - computed: true, optional: false, required: false
  private _createdBy = new DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference(this, "created_by");
  public get createdBy() {
    return this._createdBy;
  }

  // datasource_id - computed: true, optional: false, required: false
  public get datasourceId() {
    return this.getStringAttribute('datasource_id');
  }

  // datasource_name - computed: true, optional: false, required: false
  public get datasourceName() {
    return this.getStringAttribute('datasource_name');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // effective_catalog_name - computed: true, optional: false, required: false
  public get effectiveCatalogName() {
    return this.getStringAttribute('effective_catalog_name');
  }

  // effective_datasource_name - computed: true, optional: false, required: false
  public get effectiveDatasourceName() {
    return this.getStringAttribute('effective_datasource_name');
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

  // existing_table - computed: true, optional: false, required: false
  private _existingTable = new DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference(this, "existing_table");
  public get existingTable() {
    return this._existingTable;
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

  // owner - computed: true, optional: false, required: false
  private _owner = new DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference(this, "owner");
  public get owner() {
    return this._owner;
  }

  // parsers - computed: true, optional: false, required: false
  private _parsers = new DataDatabricksLakewatchDatasourcesDatasourcesParsersList(this, "parsers", false);
  public get parsers() {
    return this._parsers;
  }

  // provider_config - computed: true, optional: true, required: false
  private _providerConfig = new DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // run_as_principal - computed: true, optional: false, required: false
  public get runAsPrincipal() {
    return this.getStringAttribute('run_as_principal');
  }

  // schedule - computed: true, optional: false, required: false
  private _schedule = new DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }

  // schema_name - computed: true, optional: false, required: false
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }

  // status - computed: true, optional: false, required: false
  private _status = new DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }

  // unity_catalog_connection - computed: true, optional: false, required: false
  private _unityCatalogConnection = new DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference(this, "unity_catalog_connection");
  public get unityCatalogConnection() {
    return this._unityCatalogConnection;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // updated_by - computed: true, optional: false, required: false
  private _updatedBy = new DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference(this, "updated_by");
  public get updatedBy() {
    return this._updatedBy;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // warehouse_id - computed: true, optional: false, required: false
  public get warehouseId() {
    return this.getStringAttribute('warehouse_id');
  }
}

export class DataDatabricksLakewatchDatasourcesDatasourcesList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksLakewatchDatasourcesDatasources[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksLakewatchDatasourcesDatasourcesOutputReference {
    return new DataDatabricksLakewatchDatasourcesDatasourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksLakewatchDatasourcesProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#workspace_id DataDatabricksLakewatchDatasources#workspace_id}
  */
  readonly workspaceId?: string;
}

export function dataDatabricksLakewatchDatasourcesProviderConfigToTerraform(struct?: DataDatabricksLakewatchDatasourcesProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function dataDatabricksLakewatchDatasourcesProviderConfigToHclTerraform(struct?: DataDatabricksLakewatchDatasourcesProviderConfig | cdktn.IResolvable): any {
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

export class DataDatabricksLakewatchDatasourcesProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksLakewatchDatasourcesProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksLakewatchDatasourcesProviderConfig | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources databricks_lakewatch_datasources}
*/
export class DataDatabricksLakewatchDatasources extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_lakewatch_datasources";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataDatabricksLakewatchDatasources resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksLakewatchDatasources to import
  * @param importFromId The id of the existing DataDatabricksLakewatchDatasources that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksLakewatchDatasources to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_lakewatch_datasources", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources databricks_lakewatch_datasources} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksLakewatchDatasourcesConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksLakewatchDatasourcesConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_lakewatch_datasources',
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

  // datasources - computed: true, optional: false, required: false
  private _datasources = new DataDatabricksLakewatchDatasourcesDatasourcesList(this, "datasources", false);
  public get datasources() {
    return this._datasources;
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
  private _providerConfig = new DataDatabricksLakewatchDatasourcesProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataDatabricksLakewatchDatasourcesProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
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
      provider_config: dataDatabricksLakewatchDatasourcesProviderConfigToTerraform(this._providerConfig.internalValue),
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
        value: dataDatabricksLakewatchDatasourcesProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataDatabricksLakewatchDatasourcesProviderConfig",
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
