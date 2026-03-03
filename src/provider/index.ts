/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DatabricksProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs#account_id DatabricksProvider#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs#actions_id_token_request_token DatabricksProvider#actions_id_token_request_token}
  */
  readonly actionsIdTokenRequestToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs#actions_id_token_request_url DatabricksProvider#actions_id_token_request_url}
  */
  readonly actionsIdTokenRequestUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs#audience DatabricksProvider#audience}
  */
  readonly audience?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs#auth_type DatabricksProvider#auth_type}
  */
  readonly authType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs#azure_client_id DatabricksProvider#azure_client_id}
  */
  readonly azureClientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs#azure_client_secret DatabricksProvider#azure_client_secret}
  */
  readonly azureClientSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs#azure_environment DatabricksProvider#azure_environment}
  */
  readonly azureEnvironment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs#azure_login_app_id DatabricksProvider#azure_login_app_id}
  */
  readonly azureLoginAppId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs#azure_tenant_id DatabricksProvider#azure_tenant_id}
  */
  readonly azureTenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs#azure_use_msi DatabricksProvider#azure_use_msi}
  */
  readonly azureUseMsi?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs#azure_workspace_resource_id DatabricksProvider#azure_workspace_resource_id}
  */
  readonly azureWorkspaceResourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs#client_id DatabricksProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs#client_secret DatabricksProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs#cluster_id DatabricksProvider#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs#config_file DatabricksProvider#config_file}
  */
  readonly configFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs#databricks_cli_path DatabricksProvider#databricks_cli_path}
  */
  readonly databricksCliPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs#databricks_id_token_filepath DatabricksProvider#databricks_id_token_filepath}
  */
  readonly databricksIdTokenFilepath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs#debug_headers DatabricksProvider#debug_headers}
  */
  readonly debugHeaders?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs#debug_truncate_bytes DatabricksProvider#debug_truncate_bytes}
  */
  readonly debugTruncateBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs#disable_oauth_refresh_token DatabricksProvider#disable_oauth_refresh_token}
  */
  readonly disableOauthRefreshToken?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs#experimental_is_unified_host DatabricksProvider#experimental_is_unified_host}
  */
  readonly experimentalIsUnifiedHost?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs#google_credentials DatabricksProvider#google_credentials}
  */
  readonly googleCredentials?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs#google_service_account DatabricksProvider#google_service_account}
  */
  readonly googleServiceAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs#host DatabricksProvider#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs#http_timeout_seconds DatabricksProvider#http_timeout_seconds}
  */
  readonly httpTimeoutSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs#metadata_service_url DatabricksProvider#metadata_service_url}
  */
  readonly metadataServiceUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs#oauth_callback_port DatabricksProvider#oauth_callback_port}
  */
  readonly oauthCallbackPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs#oidc_token_env DatabricksProvider#oidc_token_env}
  */
  readonly oidcTokenEnv?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs#password DatabricksProvider#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs#profile DatabricksProvider#profile}
  */
  readonly profile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs#rate_limit DatabricksProvider#rate_limit}
  */
  readonly rateLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs#retry_timeout_seconds DatabricksProvider#retry_timeout_seconds}
  */
  readonly retryTimeoutSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs#scopes DatabricksProvider#scopes}
  */
  readonly scopes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs#serverless_compute_id DatabricksProvider#serverless_compute_id}
  */
  readonly serverlessComputeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs#skip_verify DatabricksProvider#skip_verify}
  */
  readonly skipVerify?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs#token DatabricksProvider#token}
  */
  readonly token?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs#username DatabricksProvider#username}
  */
  readonly username?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs#warehouse_id DatabricksProvider#warehouse_id}
  */
  readonly warehouseId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs#workspace_id DatabricksProvider#workspace_id}
  */
  readonly workspaceId?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs#alias DatabricksProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs databricks}
*/
export class DatabricksProvider extends cdktn.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DatabricksProvider resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabricksProvider to import
  * @param importFromId The id of the existing DatabricksProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabricksProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs databricks} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabricksProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DatabricksProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.110.0',
        providerVersionConstraint: '~> 1.0'
      },
      terraformProviderSource: 'databricks/databricks'
    });
    this._accountId = config.accountId;
    this._actionsIdTokenRequestToken = config.actionsIdTokenRequestToken;
    this._actionsIdTokenRequestUrl = config.actionsIdTokenRequestUrl;
    this._audience = config.audience;
    this._authType = config.authType;
    this._azureClientId = config.azureClientId;
    this._azureClientSecret = config.azureClientSecret;
    this._azureEnvironment = config.azureEnvironment;
    this._azureLoginAppId = config.azureLoginAppId;
    this._azureTenantId = config.azureTenantId;
    this._azureUseMsi = config.azureUseMsi;
    this._azureWorkspaceResourceId = config.azureWorkspaceResourceId;
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._clusterId = config.clusterId;
    this._configFile = config.configFile;
    this._databricksCliPath = config.databricksCliPath;
    this._databricksIdTokenFilepath = config.databricksIdTokenFilepath;
    this._debugHeaders = config.debugHeaders;
    this._debugTruncateBytes = config.debugTruncateBytes;
    this._disableOauthRefreshToken = config.disableOauthRefreshToken;
    this._experimentalIsUnifiedHost = config.experimentalIsUnifiedHost;
    this._googleCredentials = config.googleCredentials;
    this._googleServiceAccount = config.googleServiceAccount;
    this._host = config.host;
    this._httpTimeoutSeconds = config.httpTimeoutSeconds;
    this._metadataServiceUrl = config.metadataServiceUrl;
    this._oauthCallbackPort = config.oauthCallbackPort;
    this._oidcTokenEnv = config.oidcTokenEnv;
    this._password = config.password;
    this._profile = config.profile;
    this._rateLimit = config.rateLimit;
    this._retryTimeoutSeconds = config.retryTimeoutSeconds;
    this._scopes = config.scopes;
    this._serverlessComputeId = config.serverlessComputeId;
    this._skipVerify = config.skipVerify;
    this._token = config.token;
    this._username = config.username;
    this._warehouseId = config.warehouseId;
    this._workspaceId = config.workspaceId;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this._accountId;
  }
  public set accountId(value: string | undefined) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // actions_id_token_request_token - computed: false, optional: true, required: false
  private _actionsIdTokenRequestToken?: string; 
  public get actionsIdTokenRequestToken() {
    return this._actionsIdTokenRequestToken;
  }
  public set actionsIdTokenRequestToken(value: string | undefined) {
    this._actionsIdTokenRequestToken = value;
  }
  public resetActionsIdTokenRequestToken() {
    this._actionsIdTokenRequestToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsIdTokenRequestTokenInput() {
    return this._actionsIdTokenRequestToken;
  }

  // actions_id_token_request_url - computed: false, optional: true, required: false
  private _actionsIdTokenRequestUrl?: string; 
  public get actionsIdTokenRequestUrl() {
    return this._actionsIdTokenRequestUrl;
  }
  public set actionsIdTokenRequestUrl(value: string | undefined) {
    this._actionsIdTokenRequestUrl = value;
  }
  public resetActionsIdTokenRequestUrl() {
    this._actionsIdTokenRequestUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsIdTokenRequestUrlInput() {
    return this._actionsIdTokenRequestUrl;
  }

  // audience - computed: false, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this._audience;
  }
  public set audience(value: string | undefined) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // auth_type - computed: false, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this._authType;
  }
  public set authType(value: string | undefined) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // azure_client_id - computed: false, optional: true, required: false
  private _azureClientId?: string; 
  public get azureClientId() {
    return this._azureClientId;
  }
  public set azureClientId(value: string | undefined) {
    this._azureClientId = value;
  }
  public resetAzureClientId() {
    this._azureClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureClientIdInput() {
    return this._azureClientId;
  }

  // azure_client_secret - computed: false, optional: true, required: false
  private _azureClientSecret?: string; 
  public get azureClientSecret() {
    return this._azureClientSecret;
  }
  public set azureClientSecret(value: string | undefined) {
    this._azureClientSecret = value;
  }
  public resetAzureClientSecret() {
    this._azureClientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureClientSecretInput() {
    return this._azureClientSecret;
  }

  // azure_environment - computed: false, optional: true, required: false
  private _azureEnvironment?: string; 
  public get azureEnvironment() {
    return this._azureEnvironment;
  }
  public set azureEnvironment(value: string | undefined) {
    this._azureEnvironment = value;
  }
  public resetAzureEnvironment() {
    this._azureEnvironment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureEnvironmentInput() {
    return this._azureEnvironment;
  }

  // azure_login_app_id - computed: false, optional: true, required: false
  private _azureLoginAppId?: string; 
  public get azureLoginAppId() {
    return this._azureLoginAppId;
  }
  public set azureLoginAppId(value: string | undefined) {
    this._azureLoginAppId = value;
  }
  public resetAzureLoginAppId() {
    this._azureLoginAppId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureLoginAppIdInput() {
    return this._azureLoginAppId;
  }

  // azure_tenant_id - computed: false, optional: true, required: false
  private _azureTenantId?: string; 
  public get azureTenantId() {
    return this._azureTenantId;
  }
  public set azureTenantId(value: string | undefined) {
    this._azureTenantId = value;
  }
  public resetAzureTenantId() {
    this._azureTenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureTenantIdInput() {
    return this._azureTenantId;
  }

  // azure_use_msi - computed: false, optional: true, required: false
  private _azureUseMsi?: boolean | cdktn.IResolvable; 
  public get azureUseMsi() {
    return this._azureUseMsi;
  }
  public set azureUseMsi(value: boolean | cdktn.IResolvable | undefined) {
    this._azureUseMsi = value;
  }
  public resetAzureUseMsi() {
    this._azureUseMsi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureUseMsiInput() {
    return this._azureUseMsi;
  }

  // azure_workspace_resource_id - computed: false, optional: true, required: false
  private _azureWorkspaceResourceId?: string; 
  public get azureWorkspaceResourceId() {
    return this._azureWorkspaceResourceId;
  }
  public set azureWorkspaceResourceId(value: string | undefined) {
    this._azureWorkspaceResourceId = value;
  }
  public resetAzureWorkspaceResourceId() {
    this._azureWorkspaceResourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureWorkspaceResourceIdInput() {
    return this._azureWorkspaceResourceId;
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this._clientId;
  }
  public set clientId(value: string | undefined) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this._clientSecret;
  }
  public set clientSecret(value: string | undefined) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // cluster_id - computed: false, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this._clusterId;
  }
  public set clusterId(value: string | undefined) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // config_file - computed: false, optional: true, required: false
  private _configFile?: string; 
  public get configFile() {
    return this._configFile;
  }
  public set configFile(value: string | undefined) {
    this._configFile = value;
  }
  public resetConfigFile() {
    this._configFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configFileInput() {
    return this._configFile;
  }

  // databricks_cli_path - computed: false, optional: true, required: false
  private _databricksCliPath?: string; 
  public get databricksCliPath() {
    return this._databricksCliPath;
  }
  public set databricksCliPath(value: string | undefined) {
    this._databricksCliPath = value;
  }
  public resetDatabricksCliPath() {
    this._databricksCliPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databricksCliPathInput() {
    return this._databricksCliPath;
  }

  // databricks_id_token_filepath - computed: false, optional: true, required: false
  private _databricksIdTokenFilepath?: string; 
  public get databricksIdTokenFilepath() {
    return this._databricksIdTokenFilepath;
  }
  public set databricksIdTokenFilepath(value: string | undefined) {
    this._databricksIdTokenFilepath = value;
  }
  public resetDatabricksIdTokenFilepath() {
    this._databricksIdTokenFilepath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databricksIdTokenFilepathInput() {
    return this._databricksIdTokenFilepath;
  }

  // debug_headers - computed: false, optional: true, required: false
  private _debugHeaders?: boolean | cdktn.IResolvable; 
  public get debugHeaders() {
    return this._debugHeaders;
  }
  public set debugHeaders(value: boolean | cdktn.IResolvable | undefined) {
    this._debugHeaders = value;
  }
  public resetDebugHeaders() {
    this._debugHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugHeadersInput() {
    return this._debugHeaders;
  }

  // debug_truncate_bytes - computed: false, optional: true, required: false
  private _debugTruncateBytes?: number; 
  public get debugTruncateBytes() {
    return this._debugTruncateBytes;
  }
  public set debugTruncateBytes(value: number | undefined) {
    this._debugTruncateBytes = value;
  }
  public resetDebugTruncateBytes() {
    this._debugTruncateBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugTruncateBytesInput() {
    return this._debugTruncateBytes;
  }

  // disable_oauth_refresh_token - computed: false, optional: true, required: false
  private _disableOauthRefreshToken?: boolean | cdktn.IResolvable; 
  public get disableOauthRefreshToken() {
    return this._disableOauthRefreshToken;
  }
  public set disableOauthRefreshToken(value: boolean | cdktn.IResolvable | undefined) {
    this._disableOauthRefreshToken = value;
  }
  public resetDisableOauthRefreshToken() {
    this._disableOauthRefreshToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableOauthRefreshTokenInput() {
    return this._disableOauthRefreshToken;
  }

  // experimental_is_unified_host - computed: false, optional: true, required: false
  private _experimentalIsUnifiedHost?: boolean | cdktn.IResolvable; 
  public get experimentalIsUnifiedHost() {
    return this._experimentalIsUnifiedHost;
  }
  public set experimentalIsUnifiedHost(value: boolean | cdktn.IResolvable | undefined) {
    this._experimentalIsUnifiedHost = value;
  }
  public resetExperimentalIsUnifiedHost() {
    this._experimentalIsUnifiedHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get experimentalIsUnifiedHostInput() {
    return this._experimentalIsUnifiedHost;
  }

  // google_credentials - computed: false, optional: true, required: false
  private _googleCredentials?: string; 
  public get googleCredentials() {
    return this._googleCredentials;
  }
  public set googleCredentials(value: string | undefined) {
    this._googleCredentials = value;
  }
  public resetGoogleCredentials() {
    this._googleCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleCredentialsInput() {
    return this._googleCredentials;
  }

  // google_service_account - computed: false, optional: true, required: false
  private _googleServiceAccount?: string; 
  public get googleServiceAccount() {
    return this._googleServiceAccount;
  }
  public set googleServiceAccount(value: string | undefined) {
    this._googleServiceAccount = value;
  }
  public resetGoogleServiceAccount() {
    this._googleServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleServiceAccountInput() {
    return this._googleServiceAccount;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this._host;
  }
  public set host(value: string | undefined) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // http_timeout_seconds - computed: false, optional: true, required: false
  private _httpTimeoutSeconds?: number; 
  public get httpTimeoutSeconds() {
    return this._httpTimeoutSeconds;
  }
  public set httpTimeoutSeconds(value: number | undefined) {
    this._httpTimeoutSeconds = value;
  }
  public resetHttpTimeoutSeconds() {
    this._httpTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpTimeoutSecondsInput() {
    return this._httpTimeoutSeconds;
  }

  // metadata_service_url - computed: false, optional: true, required: false
  private _metadataServiceUrl?: string; 
  public get metadataServiceUrl() {
    return this._metadataServiceUrl;
  }
  public set metadataServiceUrl(value: string | undefined) {
    this._metadataServiceUrl = value;
  }
  public resetMetadataServiceUrl() {
    this._metadataServiceUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataServiceUrlInput() {
    return this._metadataServiceUrl;
  }

  // oauth_callback_port - computed: false, optional: true, required: false
  private _oauthCallbackPort?: number; 
  public get oauthCallbackPort() {
    return this._oauthCallbackPort;
  }
  public set oauthCallbackPort(value: number | undefined) {
    this._oauthCallbackPort = value;
  }
  public resetOauthCallbackPort() {
    this._oauthCallbackPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthCallbackPortInput() {
    return this._oauthCallbackPort;
  }

  // oidc_token_env - computed: false, optional: true, required: false
  private _oidcTokenEnv?: string; 
  public get oidcTokenEnv() {
    return this._oidcTokenEnv;
  }
  public set oidcTokenEnv(value: string | undefined) {
    this._oidcTokenEnv = value;
  }
  public resetOidcTokenEnv() {
    this._oidcTokenEnv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcTokenEnvInput() {
    return this._oidcTokenEnv;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this._password;
  }
  public set password(value: string | undefined) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // profile - computed: false, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this._profile;
  }
  public set profile(value: string | undefined) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // rate_limit - computed: false, optional: true, required: false
  private _rateLimit?: number; 
  public get rateLimit() {
    return this._rateLimit;
  }
  public set rateLimit(value: number | undefined) {
    this._rateLimit = value;
  }
  public resetRateLimit() {
    this._rateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitInput() {
    return this._rateLimit;
  }

  // retry_timeout_seconds - computed: false, optional: true, required: false
  private _retryTimeoutSeconds?: number; 
  public get retryTimeoutSeconds() {
    return this._retryTimeoutSeconds;
  }
  public set retryTimeoutSeconds(value: number | undefined) {
    this._retryTimeoutSeconds = value;
  }
  public resetRetryTimeoutSeconds() {
    this._retryTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryTimeoutSecondsInput() {
    return this._retryTimeoutSeconds;
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this._scopes;
  }
  public set scopes(value: string[] | undefined) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // serverless_compute_id - computed: false, optional: true, required: false
  private _serverlessComputeId?: string; 
  public get serverlessComputeId() {
    return this._serverlessComputeId;
  }
  public set serverlessComputeId(value: string | undefined) {
    this._serverlessComputeId = value;
  }
  public resetServerlessComputeId() {
    this._serverlessComputeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverlessComputeIdInput() {
    return this._serverlessComputeId;
  }

  // skip_verify - computed: false, optional: true, required: false
  private _skipVerify?: boolean | cdktn.IResolvable; 
  public get skipVerify() {
    return this._skipVerify;
  }
  public set skipVerify(value: boolean | cdktn.IResolvable | undefined) {
    this._skipVerify = value;
  }
  public resetSkipVerify() {
    this._skipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipVerifyInput() {
    return this._skipVerify;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this._token;
  }
  public set token(value: string | undefined) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this._username;
  }
  public set username(value: string | undefined) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // warehouse_id - computed: false, optional: true, required: false
  private _warehouseId?: string; 
  public get warehouseId() {
    return this._warehouseId;
  }
  public set warehouseId(value: string | undefined) {
    this._warehouseId = value;
  }
  public resetWarehouseId() {
    this._warehouseId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warehouseIdInput() {
    return this._warehouseId;
  }

  // workspace_id - computed: false, optional: true, required: false
  private _workspaceId?: string; 
  public get workspaceId() {
    return this._workspaceId;
  }
  public set workspaceId(value: string | undefined) {
    this._workspaceId = value;
  }
  public resetWorkspaceId() {
    this._workspaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktn.stringToTerraform(this._accountId),
      actions_id_token_request_token: cdktn.stringToTerraform(this._actionsIdTokenRequestToken),
      actions_id_token_request_url: cdktn.stringToTerraform(this._actionsIdTokenRequestUrl),
      audience: cdktn.stringToTerraform(this._audience),
      auth_type: cdktn.stringToTerraform(this._authType),
      azure_client_id: cdktn.stringToTerraform(this._azureClientId),
      azure_client_secret: cdktn.stringToTerraform(this._azureClientSecret),
      azure_environment: cdktn.stringToTerraform(this._azureEnvironment),
      azure_login_app_id: cdktn.stringToTerraform(this._azureLoginAppId),
      azure_tenant_id: cdktn.stringToTerraform(this._azureTenantId),
      azure_use_msi: cdktn.booleanToTerraform(this._azureUseMsi),
      azure_workspace_resource_id: cdktn.stringToTerraform(this._azureWorkspaceResourceId),
      client_id: cdktn.stringToTerraform(this._clientId),
      client_secret: cdktn.stringToTerraform(this._clientSecret),
      cluster_id: cdktn.stringToTerraform(this._clusterId),
      config_file: cdktn.stringToTerraform(this._configFile),
      databricks_cli_path: cdktn.stringToTerraform(this._databricksCliPath),
      databricks_id_token_filepath: cdktn.stringToTerraform(this._databricksIdTokenFilepath),
      debug_headers: cdktn.booleanToTerraform(this._debugHeaders),
      debug_truncate_bytes: cdktn.numberToTerraform(this._debugTruncateBytes),
      disable_oauth_refresh_token: cdktn.booleanToTerraform(this._disableOauthRefreshToken),
      experimental_is_unified_host: cdktn.booleanToTerraform(this._experimentalIsUnifiedHost),
      google_credentials: cdktn.stringToTerraform(this._googleCredentials),
      google_service_account: cdktn.stringToTerraform(this._googleServiceAccount),
      host: cdktn.stringToTerraform(this._host),
      http_timeout_seconds: cdktn.numberToTerraform(this._httpTimeoutSeconds),
      metadata_service_url: cdktn.stringToTerraform(this._metadataServiceUrl),
      oauth_callback_port: cdktn.numberToTerraform(this._oauthCallbackPort),
      oidc_token_env: cdktn.stringToTerraform(this._oidcTokenEnv),
      password: cdktn.stringToTerraform(this._password),
      profile: cdktn.stringToTerraform(this._profile),
      rate_limit: cdktn.numberToTerraform(this._rateLimit),
      retry_timeout_seconds: cdktn.numberToTerraform(this._retryTimeoutSeconds),
      scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(this._scopes),
      serverless_compute_id: cdktn.stringToTerraform(this._serverlessComputeId),
      skip_verify: cdktn.booleanToTerraform(this._skipVerify),
      token: cdktn.stringToTerraform(this._token),
      username: cdktn.stringToTerraform(this._username),
      warehouse_id: cdktn.stringToTerraform(this._warehouseId),
      workspace_id: cdktn.stringToTerraform(this._workspaceId),
      alias: cdktn.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktn.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      actions_id_token_request_token: {
        value: cdktn.stringToHclTerraform(this._actionsIdTokenRequestToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      actions_id_token_request_url: {
        value: cdktn.stringToHclTerraform(this._actionsIdTokenRequestUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      audience: {
        value: cdktn.stringToHclTerraform(this._audience),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_type: {
        value: cdktn.stringToHclTerraform(this._authType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_client_id: {
        value: cdktn.stringToHclTerraform(this._azureClientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_client_secret: {
        value: cdktn.stringToHclTerraform(this._azureClientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_environment: {
        value: cdktn.stringToHclTerraform(this._azureEnvironment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_login_app_id: {
        value: cdktn.stringToHclTerraform(this._azureLoginAppId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_tenant_id: {
        value: cdktn.stringToHclTerraform(this._azureTenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_use_msi: {
        value: cdktn.booleanToHclTerraform(this._azureUseMsi),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      azure_workspace_resource_id: {
        value: cdktn.stringToHclTerraform(this._azureWorkspaceResourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_id: {
        value: cdktn.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_secret: {
        value: cdktn.stringToHclTerraform(this._clientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_id: {
        value: cdktn.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_file: {
        value: cdktn.stringToHclTerraform(this._configFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      databricks_cli_path: {
        value: cdktn.stringToHclTerraform(this._databricksCliPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      databricks_id_token_filepath: {
        value: cdktn.stringToHclTerraform(this._databricksIdTokenFilepath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      debug_headers: {
        value: cdktn.booleanToHclTerraform(this._debugHeaders),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      debug_truncate_bytes: {
        value: cdktn.numberToHclTerraform(this._debugTruncateBytes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disable_oauth_refresh_token: {
        value: cdktn.booleanToHclTerraform(this._disableOauthRefreshToken),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      experimental_is_unified_host: {
        value: cdktn.booleanToHclTerraform(this._experimentalIsUnifiedHost),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      google_credentials: {
        value: cdktn.stringToHclTerraform(this._googleCredentials),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      google_service_account: {
        value: cdktn.stringToHclTerraform(this._googleServiceAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host: {
        value: cdktn.stringToHclTerraform(this._host),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_timeout_seconds: {
        value: cdktn.numberToHclTerraform(this._httpTimeoutSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      metadata_service_url: {
        value: cdktn.stringToHclTerraform(this._metadataServiceUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth_callback_port: {
        value: cdktn.numberToHclTerraform(this._oauthCallbackPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      oidc_token_env: {
        value: cdktn.stringToHclTerraform(this._oidcTokenEnv),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktn.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile: {
        value: cdktn.stringToHclTerraform(this._profile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rate_limit: {
        value: cdktn.numberToHclTerraform(this._rateLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retry_timeout_seconds: {
        value: cdktn.numberToHclTerraform(this._retryTimeoutSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scopes: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._scopes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      serverless_compute_id: {
        value: cdktn.stringToHclTerraform(this._serverlessComputeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_verify: {
        value: cdktn.booleanToHclTerraform(this._skipVerify),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      token: {
        value: cdktn.stringToHclTerraform(this._token),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktn.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      warehouse_id: {
        value: cdktn.stringToHclTerraform(this._warehouseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspace_id: {
        value: cdktn.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktn.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
