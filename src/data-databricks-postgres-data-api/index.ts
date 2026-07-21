/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_data_api
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataDatabricksPostgresDataApiConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_data_api#name DataDatabricksPostgresDataApi#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_data_api#provider_config DataDatabricksPostgresDataApi#provider_config}
  */
  readonly providerConfig?: DataDatabricksPostgresDataApiProviderConfig;
}
export interface DataDatabricksPostgresDataApiProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_data_api#workspace_id DataDatabricksPostgresDataApi#workspace_id}
  */
  readonly workspaceId?: string;
}

export function dataDatabricksPostgresDataApiProviderConfigToTerraform(struct?: DataDatabricksPostgresDataApiProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function dataDatabricksPostgresDataApiProviderConfigToHclTerraform(struct?: DataDatabricksPostgresDataApiProviderConfig | cdktn.IResolvable): any {
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

export class DataDatabricksPostgresDataApiProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksPostgresDataApiProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksPostgresDataApiProviderConfig | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksPostgresDataApiSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_data_api#db_aggregates_enabled DataDatabricksPostgresDataApi#db_aggregates_enabled}
  */
  readonly dbAggregatesEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_data_api#db_extra_search_path DataDatabricksPostgresDataApi#db_extra_search_path}
  */
  readonly dbExtraSearchPath?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_data_api#db_max_rows DataDatabricksPostgresDataApi#db_max_rows}
  */
  readonly dbMaxRows?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_data_api#db_schemas DataDatabricksPostgresDataApi#db_schemas}
  */
  readonly dbSchemas?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_data_api#jwt_cache_max_lifetime DataDatabricksPostgresDataApi#jwt_cache_max_lifetime}
  */
  readonly jwtCacheMaxLifetime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_data_api#jwt_role_claim_key DataDatabricksPostgresDataApi#jwt_role_claim_key}
  */
  readonly jwtRoleClaimKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_data_api#openapi_mode DataDatabricksPostgresDataApi#openapi_mode}
  */
  readonly openapiMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_data_api#server_cors_allowed_origins DataDatabricksPostgresDataApi#server_cors_allowed_origins}
  */
  readonly serverCorsAllowedOrigins?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_data_api#server_timing_enabled DataDatabricksPostgresDataApi#server_timing_enabled}
  */
  readonly serverTimingEnabled?: boolean | cdktn.IResolvable;
}

export function dataDatabricksPostgresDataApiSpecToTerraform(struct?: DataDatabricksPostgresDataApiSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    db_aggregates_enabled: cdktn.booleanToTerraform(struct!.dbAggregatesEnabled),
    db_extra_search_path: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.dbExtraSearchPath),
    db_max_rows: cdktn.numberToTerraform(struct!.dbMaxRows),
    db_schemas: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.dbSchemas),
    jwt_cache_max_lifetime: cdktn.stringToTerraform(struct!.jwtCacheMaxLifetime),
    jwt_role_claim_key: cdktn.stringToTerraform(struct!.jwtRoleClaimKey),
    openapi_mode: cdktn.stringToTerraform(struct!.openapiMode),
    server_cors_allowed_origins: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.serverCorsAllowedOrigins),
    server_timing_enabled: cdktn.booleanToTerraform(struct!.serverTimingEnabled),
  }
}


export function dataDatabricksPostgresDataApiSpecToHclTerraform(struct?: DataDatabricksPostgresDataApiSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    db_aggregates_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.dbAggregatesEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    db_extra_search_path: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.dbExtraSearchPath),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    db_max_rows: {
      value: cdktn.numberToHclTerraform(struct!.dbMaxRows),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    db_schemas: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.dbSchemas),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    jwt_cache_max_lifetime: {
      value: cdktn.stringToHclTerraform(struct!.jwtCacheMaxLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jwt_role_claim_key: {
      value: cdktn.stringToHclTerraform(struct!.jwtRoleClaimKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    openapi_mode: {
      value: cdktn.stringToHclTerraform(struct!.openapiMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_cors_allowed_origins: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.serverCorsAllowedOrigins),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    server_timing_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.serverTimingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksPostgresDataApiSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksPostgresDataApiSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dbAggregatesEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbAggregatesEnabled = this._dbAggregatesEnabled;
    }
    if (this._dbExtraSearchPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbExtraSearchPath = this._dbExtraSearchPath;
    }
    if (this._dbMaxRows !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbMaxRows = this._dbMaxRows;
    }
    if (this._dbSchemas !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbSchemas = this._dbSchemas;
    }
    if (this._jwtCacheMaxLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtCacheMaxLifetime = this._jwtCacheMaxLifetime;
    }
    if (this._jwtRoleClaimKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtRoleClaimKey = this._jwtRoleClaimKey;
    }
    if (this._openapiMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.openapiMode = this._openapiMode;
    }
    if (this._serverCorsAllowedOrigins !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverCorsAllowedOrigins = this._serverCorsAllowedOrigins;
    }
    if (this._serverTimingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverTimingEnabled = this._serverTimingEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksPostgresDataApiSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dbAggregatesEnabled = undefined;
      this._dbExtraSearchPath = undefined;
      this._dbMaxRows = undefined;
      this._dbSchemas = undefined;
      this._jwtCacheMaxLifetime = undefined;
      this._jwtRoleClaimKey = undefined;
      this._openapiMode = undefined;
      this._serverCorsAllowedOrigins = undefined;
      this._serverTimingEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dbAggregatesEnabled = value.dbAggregatesEnabled;
      this._dbExtraSearchPath = value.dbExtraSearchPath;
      this._dbMaxRows = value.dbMaxRows;
      this._dbSchemas = value.dbSchemas;
      this._jwtCacheMaxLifetime = value.jwtCacheMaxLifetime;
      this._jwtRoleClaimKey = value.jwtRoleClaimKey;
      this._openapiMode = value.openapiMode;
      this._serverCorsAllowedOrigins = value.serverCorsAllowedOrigins;
      this._serverTimingEnabled = value.serverTimingEnabled;
    }
  }

  // db_aggregates_enabled - computed: true, optional: true, required: false
  private _dbAggregatesEnabled?: boolean | cdktn.IResolvable; 
  public get dbAggregatesEnabled() {
    return this.getBooleanAttribute('db_aggregates_enabled');
  }
  public set dbAggregatesEnabled(value: boolean | cdktn.IResolvable) {
    this._dbAggregatesEnabled = value;
  }
  public resetDbAggregatesEnabled() {
    this._dbAggregatesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbAggregatesEnabledInput() {
    return this._dbAggregatesEnabled;
  }

  // db_extra_search_path - computed: true, optional: true, required: false
  private _dbExtraSearchPath?: string[]; 
  public get dbExtraSearchPath() {
    return this.getListAttribute('db_extra_search_path');
  }
  public set dbExtraSearchPath(value: string[]) {
    this._dbExtraSearchPath = value;
  }
  public resetDbExtraSearchPath() {
    this._dbExtraSearchPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbExtraSearchPathInput() {
    return this._dbExtraSearchPath;
  }

  // db_max_rows - computed: true, optional: true, required: false
  private _dbMaxRows?: number; 
  public get dbMaxRows() {
    return this.getNumberAttribute('db_max_rows');
  }
  public set dbMaxRows(value: number) {
    this._dbMaxRows = value;
  }
  public resetDbMaxRows() {
    this._dbMaxRows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbMaxRowsInput() {
    return this._dbMaxRows;
  }

  // db_schemas - computed: true, optional: true, required: false
  private _dbSchemas?: string[]; 
  public get dbSchemas() {
    return this.getListAttribute('db_schemas');
  }
  public set dbSchemas(value: string[]) {
    this._dbSchemas = value;
  }
  public resetDbSchemas() {
    this._dbSchemas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbSchemasInput() {
    return this._dbSchemas;
  }

  // jwt_cache_max_lifetime - computed: true, optional: true, required: false
  private _jwtCacheMaxLifetime?: string; 
  public get jwtCacheMaxLifetime() {
    return this.getStringAttribute('jwt_cache_max_lifetime');
  }
  public set jwtCacheMaxLifetime(value: string) {
    this._jwtCacheMaxLifetime = value;
  }
  public resetJwtCacheMaxLifetime() {
    this._jwtCacheMaxLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtCacheMaxLifetimeInput() {
    return this._jwtCacheMaxLifetime;
  }

  // jwt_role_claim_key - computed: true, optional: true, required: false
  private _jwtRoleClaimKey?: string; 
  public get jwtRoleClaimKey() {
    return this.getStringAttribute('jwt_role_claim_key');
  }
  public set jwtRoleClaimKey(value: string) {
    this._jwtRoleClaimKey = value;
  }
  public resetJwtRoleClaimKey() {
    this._jwtRoleClaimKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtRoleClaimKeyInput() {
    return this._jwtRoleClaimKey;
  }

  // openapi_mode - computed: true, optional: true, required: false
  private _openapiMode?: string; 
  public get openapiMode() {
    return this.getStringAttribute('openapi_mode');
  }
  public set openapiMode(value: string) {
    this._openapiMode = value;
  }
  public resetOpenapiMode() {
    this._openapiMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openapiModeInput() {
    return this._openapiMode;
  }

  // server_cors_allowed_origins - computed: true, optional: true, required: false
  private _serverCorsAllowedOrigins?: string[]; 
  public get serverCorsAllowedOrigins() {
    return this.getListAttribute('server_cors_allowed_origins');
  }
  public set serverCorsAllowedOrigins(value: string[]) {
    this._serverCorsAllowedOrigins = value;
  }
  public resetServerCorsAllowedOrigins() {
    this._serverCorsAllowedOrigins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCorsAllowedOriginsInput() {
    return this._serverCorsAllowedOrigins;
  }

  // server_timing_enabled - computed: true, optional: true, required: false
  private _serverTimingEnabled?: boolean | cdktn.IResolvable; 
  public get serverTimingEnabled() {
    return this.getBooleanAttribute('server_timing_enabled');
  }
  public set serverTimingEnabled(value: boolean | cdktn.IResolvable) {
    this._serverTimingEnabled = value;
  }
  public resetServerTimingEnabled() {
    this._serverTimingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverTimingEnabledInput() {
    return this._serverTimingEnabled;
  }
}
export interface DataDatabricksPostgresDataApiStatus {
}

export function dataDatabricksPostgresDataApiStatusToTerraform(struct?: DataDatabricksPostgresDataApiStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataDatabricksPostgresDataApiStatusToHclTerraform(struct?: DataDatabricksPostgresDataApiStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatabricksPostgresDataApiStatusOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksPostgresDataApiStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksPostgresDataApiStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // available_schemas - computed: true, optional: false, required: false
  public get availableSchemas() {
    return this.getListAttribute('available_schemas');
  }

  // db_aggregates_enabled - computed: true, optional: false, required: false
  public get dbAggregatesEnabled() {
    return this.getBooleanAttribute('db_aggregates_enabled');
  }

  // db_extra_search_path - computed: true, optional: false, required: false
  public get dbExtraSearchPath() {
    return this.getListAttribute('db_extra_search_path');
  }

  // db_max_rows - computed: true, optional: false, required: false
  public get dbMaxRows() {
    return this.getNumberAttribute('db_max_rows');
  }

  // db_schemas - computed: true, optional: false, required: false
  public get dbSchemas() {
    return this.getListAttribute('db_schemas');
  }

  // jwt_cache_max_lifetime - computed: true, optional: false, required: false
  public get jwtCacheMaxLifetime() {
    return this.getStringAttribute('jwt_cache_max_lifetime');
  }

  // jwt_role_claim_key - computed: true, optional: false, required: false
  public get jwtRoleClaimKey() {
    return this.getStringAttribute('jwt_role_claim_key');
  }

  // openapi_mode - computed: true, optional: false, required: false
  public get openapiMode() {
    return this.getStringAttribute('openapi_mode');
  }

  // server_cors_allowed_origins - computed: true, optional: false, required: false
  public get serverCorsAllowedOrigins() {
    return this.getListAttribute('server_cors_allowed_origins');
  }

  // server_timing_enabled - computed: true, optional: false, required: false
  public get serverTimingEnabled() {
    return this.getBooleanAttribute('server_timing_enabled');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_data_api databricks_postgres_data_api}
*/
export class DataDatabricksPostgresDataApi extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_postgres_data_api";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataDatabricksPostgresDataApi resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksPostgresDataApi to import
  * @param importFromId The id of the existing DataDatabricksPostgresDataApi that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_data_api#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksPostgresDataApi to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_postgres_data_api", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_data_api databricks_postgres_data_api} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksPostgresDataApiConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksPostgresDataApiConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_postgres_data_api',
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
    this._name = config.name;
    this._providerConfig.internalValue = config.providerConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // provider_config - computed: false, optional: true, required: false
  private _providerConfig = new DataDatabricksPostgresDataApiProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataDatabricksPostgresDataApiProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // spec - computed: true, optional: false, required: false
  private _spec = new DataDatabricksPostgresDataApiSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }

  // status - computed: true, optional: false, required: false
  private _status = new DataDatabricksPostgresDataApiStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktn.stringToTerraform(this._name),
      provider_config: dataDatabricksPostgresDataApiProviderConfigToTerraform(this._providerConfig.internalValue),
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
      provider_config: {
        value: dataDatabricksPostgresDataApiProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataDatabricksPostgresDataApiProviderConfig",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
