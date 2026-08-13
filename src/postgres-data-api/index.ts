/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_data_api
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface PostgresDataApiConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_data_api#parent PostgresDataApi#parent}
  */
  readonly parent: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_data_api#provider_config PostgresDataApi#provider_config}
  */
  readonly providerConfig?: PostgresDataApiProviderConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_data_api#spec PostgresDataApi#spec}
  */
  readonly spec?: PostgresDataApiSpec;
}
export interface PostgresDataApiProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_data_api#workspace_id PostgresDataApi#workspace_id}
  */
  readonly workspaceId?: string;
}

export function postgresDataApiProviderConfigToTerraform(struct?: PostgresDataApiProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function postgresDataApiProviderConfigToHclTerraform(struct?: PostgresDataApiProviderConfig | cdktn.IResolvable): any {
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

export class PostgresDataApiProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PostgresDataApiProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PostgresDataApiProviderConfig | cdktn.IResolvable | undefined) {
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
export interface PostgresDataApiSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_data_api#db_aggregates_enabled PostgresDataApi#db_aggregates_enabled}
  */
  readonly dbAggregatesEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_data_api#db_extra_search_path PostgresDataApi#db_extra_search_path}
  */
  readonly dbExtraSearchPath?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_data_api#db_max_rows PostgresDataApi#db_max_rows}
  */
  readonly dbMaxRows?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_data_api#db_schemas PostgresDataApi#db_schemas}
  */
  readonly dbSchemas?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_data_api#jwt_cache_max_lifetime PostgresDataApi#jwt_cache_max_lifetime}
  */
  readonly jwtCacheMaxLifetime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_data_api#jwt_role_claim_key PostgresDataApi#jwt_role_claim_key}
  */
  readonly jwtRoleClaimKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_data_api#openapi_mode PostgresDataApi#openapi_mode}
  */
  readonly openapiMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_data_api#server_cors_allowed_origins PostgresDataApi#server_cors_allowed_origins}
  */
  readonly serverCorsAllowedOrigins?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_data_api#server_timing_enabled PostgresDataApi#server_timing_enabled}
  */
  readonly serverTimingEnabled?: boolean | cdktn.IResolvable;
}

export function postgresDataApiSpecToTerraform(struct?: PostgresDataApiSpec | cdktn.IResolvable): any {
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


export function postgresDataApiSpecToHclTerraform(struct?: PostgresDataApiSpec | cdktn.IResolvable): any {
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

export class PostgresDataApiSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PostgresDataApiSpec | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: PostgresDataApiSpec | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
export interface PostgresDataApiStatus {
}

export function postgresDataApiStatusToTerraform(struct?: PostgresDataApiStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function postgresDataApiStatusToHclTerraform(struct?: PostgresDataApiStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class PostgresDataApiStatusOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PostgresDataApiStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PostgresDataApiStatus | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_data_api databricks_postgres_data_api}
*/
export class PostgresDataApi extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_postgres_data_api";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a PostgresDataApi resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PostgresDataApi to import
  * @param importFromId The id of the existing PostgresDataApi that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_data_api#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PostgresDataApi to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_postgres_data_api", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_data_api databricks_postgres_data_api} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PostgresDataApiConfig
  */
  public constructor(scope: Construct, id: string, config: PostgresDataApiConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_postgres_data_api',
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
    this._parent = config.parent;
    this._providerConfig.internalValue = config.providerConfig;
    this._spec.internalValue = config.spec;
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

  // parent - computed: false, optional: false, required: true
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // provider_config - computed: true, optional: true, required: false
  private _providerConfig = new PostgresDataApiProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: PostgresDataApiProviderConfig) {
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
  private _spec = new PostgresDataApiSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: PostgresDataApiSpec) {
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
  private _status = new PostgresDataApiStatusOutputReference(this, "status");
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
      parent: cdktn.stringToTerraform(this._parent),
      provider_config: postgresDataApiProviderConfigToTerraform(this._providerConfig.internalValue),
      spec: postgresDataApiSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      parent: {
        value: cdktn.stringToHclTerraform(this._parent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_config: {
        value: postgresDataApiProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PostgresDataApiProviderConfig",
      },
      spec: {
        value: postgresDataApiSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PostgresDataApiSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
