/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataDatabricksLakewatchAlertConfigConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#name DataDatabricksLakewatchAlertConfig#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#provider_config DataDatabricksLakewatchAlertConfig#provider_config}
  */
  readonly providerConfig?: DataDatabricksLakewatchAlertConfigProviderConfig;
}
export interface DataDatabricksLakewatchAlertConfigProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#workspace_id DataDatabricksLakewatchAlertConfig#workspace_id}
  */
  readonly workspaceId?: string;
}

export function dataDatabricksLakewatchAlertConfigProviderConfigToTerraform(struct?: DataDatabricksLakewatchAlertConfigProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function dataDatabricksLakewatchAlertConfigProviderConfigToHclTerraform(struct?: DataDatabricksLakewatchAlertConfigProviderConfig | cdktn.IResolvable): any {
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

export class DataDatabricksLakewatchAlertConfigProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksLakewatchAlertConfigProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksLakewatchAlertConfigProviderConfig | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#api_token_uc_secret DataDatabricksLakewatchAlertConfig#api_token_uc_secret}
  */
  readonly apiTokenUcSecret: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#default_issue_type DataDatabricksLakewatchAlertConfig#default_issue_type}
  */
  readonly defaultIssueType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#instance_url DataDatabricksLakewatchAlertConfig#instance_url}
  */
  readonly instanceUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#project_key DataDatabricksLakewatchAlertConfig#project_key}
  */
  readonly projectKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#user_email DataDatabricksLakewatchAlertConfig#user_email}
  */
  readonly userEmail: string;
}

export function dataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraToTerraform(struct?: DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_token_uc_secret: cdktn.stringToTerraform(struct!.apiTokenUcSecret),
    default_issue_type: cdktn.stringToTerraform(struct!.defaultIssueType),
    instance_url: cdktn.stringToTerraform(struct!.instanceUrl),
    project_key: cdktn.stringToTerraform(struct!.projectKey),
    user_email: cdktn.stringToTerraform(struct!.userEmail),
  }
}


export function dataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraToHclTerraform(struct?: DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_token_uc_secret: {
      value: cdktn.stringToHclTerraform(struct!.apiTokenUcSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_issue_type: {
      value: cdktn.stringToHclTerraform(struct!.defaultIssueType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_url: {
      value: cdktn.stringToHclTerraform(struct!.instanceUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_key: {
      value: cdktn.stringToHclTerraform(struct!.projectKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_email: {
      value: cdktn.stringToHclTerraform(struct!.userEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiTokenUcSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiTokenUcSecret = this._apiTokenUcSecret;
    }
    if (this._defaultIssueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultIssueType = this._defaultIssueType;
    }
    if (this._instanceUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceUrl = this._instanceUrl;
    }
    if (this._projectKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectKey = this._projectKey;
    }
    if (this._userEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.userEmail = this._userEmail;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiTokenUcSecret = undefined;
      this._defaultIssueType = undefined;
      this._instanceUrl = undefined;
      this._projectKey = undefined;
      this._userEmail = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiTokenUcSecret = value.apiTokenUcSecret;
      this._defaultIssueType = value.defaultIssueType;
      this._instanceUrl = value.instanceUrl;
      this._projectKey = value.projectKey;
      this._userEmail = value.userEmail;
    }
  }

  // api_token_uc_secret - computed: true, optional: false, required: true
  private _apiTokenUcSecret?: string; 
  public get apiTokenUcSecret() {
    return this.getStringAttribute('api_token_uc_secret');
  }
  public set apiTokenUcSecret(value: string) {
    this._apiTokenUcSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenUcSecretInput() {
    return this._apiTokenUcSecret;
  }

  // default_issue_type - computed: true, optional: false, required: true
  private _defaultIssueType?: string; 
  public get defaultIssueType() {
    return this.getStringAttribute('default_issue_type');
  }
  public set defaultIssueType(value: string) {
    this._defaultIssueType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultIssueTypeInput() {
    return this._defaultIssueType;
  }

  // instance_url - computed: true, optional: false, required: true
  private _instanceUrl?: string; 
  public get instanceUrl() {
    return this.getStringAttribute('instance_url');
  }
  public set instanceUrl(value: string) {
    this._instanceUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceUrlInput() {
    return this._instanceUrl;
  }

  // project_key - computed: true, optional: false, required: true
  private _projectKey?: string; 
  public get projectKey() {
    return this.getStringAttribute('project_key');
  }
  public set projectKey(value: string) {
    this._projectKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectKeyInput() {
    return this._projectKey;
  }

  // user_email - computed: true, optional: false, required: true
  private _userEmail?: string; 
  public get userEmail() {
    return this.getStringAttribute('user_email');
  }
  public set userEmail(value: string) {
    this._userEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userEmailInput() {
    return this._userEmail;
  }
}
export interface DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#client_id DataDatabricksLakewatchAlertConfig#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#client_secret_uc_secret DataDatabricksLakewatchAlertConfig#client_secret_uc_secret}
  */
  readonly clientSecretUcSecret: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#instance_id DataDatabricksLakewatchAlertConfig#instance_id}
  */
  readonly instanceId: string;
}

export function dataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowToTerraform(struct?: DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret_uc_secret: cdktn.stringToTerraform(struct!.clientSecretUcSecret),
    instance_id: cdktn.stringToTerraform(struct!.instanceId),
  }
}


export function dataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowToHclTerraform(struct?: DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    client_id: {
      value: cdktn.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret_uc_secret: {
      value: cdktn.stringToHclTerraform(struct!.clientSecretUcSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_id: {
      value: cdktn.stringToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecretUcSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretUcSecret = this._clientSecretUcSecret;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId = undefined;
      this._clientSecretUcSecret = undefined;
      this._instanceId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientId = value.clientId;
      this._clientSecretUcSecret = value.clientSecretUcSecret;
      this._instanceId = value.instanceId;
    }
  }

  // client_id - computed: true, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret_uc_secret - computed: true, optional: false, required: true
  private _clientSecretUcSecret?: string; 
  public get clientSecretUcSecret() {
    return this.getStringAttribute('client_secret_uc_secret');
  }
  public set clientSecretUcSecret(value: string) {
    this._clientSecretUcSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretUcSecretInput() {
    return this._clientSecretUcSecret;
  }

  // instance_id - computed: true, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }
}
export interface DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#bot_token_uc_secret DataDatabricksLakewatchAlertConfig#bot_token_uc_secret}
  */
  readonly botTokenUcSecret: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#channel DataDatabricksLakewatchAlertConfig#channel}
  */
  readonly channel: string;
}

export function dataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackToTerraform(struct?: DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bot_token_uc_secret: cdktn.stringToTerraform(struct!.botTokenUcSecret),
    channel: cdktn.stringToTerraform(struct!.channel),
  }
}


export function dataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackToHclTerraform(struct?: DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bot_token_uc_secret: {
      value: cdktn.stringToHclTerraform(struct!.botTokenUcSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    channel: {
      value: cdktn.stringToHclTerraform(struct!.channel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._botTokenUcSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.botTokenUcSecret = this._botTokenUcSecret;
    }
    if (this._channel !== undefined) {
      hasAnyValues = true;
      internalValueResult.channel = this._channel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._botTokenUcSecret = undefined;
      this._channel = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._botTokenUcSecret = value.botTokenUcSecret;
      this._channel = value.channel;
    }
  }

  // bot_token_uc_secret - computed: true, optional: false, required: true
  private _botTokenUcSecret?: string; 
  public get botTokenUcSecret() {
    return this.getStringAttribute('bot_token_uc_secret');
  }
  public set botTokenUcSecret(value: string) {
    this._botTokenUcSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get botTokenUcSecretInput() {
    return this._botTokenUcSecret;
  }

  // channel - computed: true, optional: false, required: true
  private _channel?: string; 
  public get channel() {
    return this.getStringAttribute('channel');
  }
  public set channel(value: string) {
    this._channel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel;
  }
}
export interface DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#export_updates DataDatabricksLakewatchAlertConfig#export_updates}
  */
  readonly exportUpdates?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#webhook_secret_uc_secret DataDatabricksLakewatchAlertConfig#webhook_secret_uc_secret}
  */
  readonly webhookSecretUcSecret: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#webhook_uri DataDatabricksLakewatchAlertConfig#webhook_uri}
  */
  readonly webhookUri: string;
}

export function dataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesToTerraform(struct?: DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    export_updates: cdktn.booleanToTerraform(struct!.exportUpdates),
    webhook_secret_uc_secret: cdktn.stringToTerraform(struct!.webhookSecretUcSecret),
    webhook_uri: cdktn.stringToTerraform(struct!.webhookUri),
  }
}


export function dataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesToHclTerraform(struct?: DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    export_updates: {
      value: cdktn.booleanToHclTerraform(struct!.exportUpdates),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    webhook_secret_uc_secret: {
      value: cdktn.stringToHclTerraform(struct!.webhookSecretUcSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    webhook_uri: {
      value: cdktn.stringToHclTerraform(struct!.webhookUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exportUpdates !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportUpdates = this._exportUpdates;
    }
    if (this._webhookSecretUcSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhookSecretUcSecret = this._webhookSecretUcSecret;
    }
    if (this._webhookUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhookUri = this._webhookUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exportUpdates = undefined;
      this._webhookSecretUcSecret = undefined;
      this._webhookUri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exportUpdates = value.exportUpdates;
      this._webhookSecretUcSecret = value.webhookSecretUcSecret;
      this._webhookUri = value.webhookUri;
    }
  }

  // export_updates - computed: true, optional: true, required: false
  private _exportUpdates?: boolean | cdktn.IResolvable; 
  public get exportUpdates() {
    return this.getBooleanAttribute('export_updates');
  }
  public set exportUpdates(value: boolean | cdktn.IResolvable) {
    this._exportUpdates = value;
  }
  public resetExportUpdates() {
    this._exportUpdates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportUpdatesInput() {
    return this._exportUpdates;
  }

  // webhook_secret_uc_secret - computed: true, optional: false, required: true
  private _webhookSecretUcSecret?: string; 
  public get webhookSecretUcSecret() {
    return this.getStringAttribute('webhook_secret_uc_secret');
  }
  public set webhookSecretUcSecret(value: string) {
    this._webhookSecretUcSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookSecretUcSecretInput() {
    return this._webhookSecretUcSecret;
  }

  // webhook_uri - computed: true, optional: false, required: true
  private _webhookUri?: string; 
  public get webhookUri() {
    return this.getStringAttribute('webhook_uri');
  }
  public set webhookUri(value: string) {
    this._webhookUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookUriInput() {
    return this._webhookUri;
  }
}
export interface DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#export_updates DataDatabricksLakewatchAlertConfig#export_updates}
  */
  readonly exportUpdates?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#url DataDatabricksLakewatchAlertConfig#url}
  */
  readonly url?: string;
}

export function dataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookToTerraform(struct?: DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    export_updates: cdktn.booleanToTerraform(struct!.exportUpdates),
    url: cdktn.stringToTerraform(struct!.url),
  }
}


export function dataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookToHclTerraform(struct?: DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    export_updates: {
      value: cdktn.booleanToHclTerraform(struct!.exportUpdates),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    url: {
      value: cdktn.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exportUpdates !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportUpdates = this._exportUpdates;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exportUpdates = undefined;
      this._url = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exportUpdates = value.exportUpdates;
      this._url = value.url;
    }
  }

  // export_updates - computed: true, optional: true, required: false
  private _exportUpdates?: boolean | cdktn.IResolvable; 
  public get exportUpdates() {
    return this.getBooleanAttribute('export_updates');
  }
  public set exportUpdates(value: boolean | cdktn.IResolvable) {
    this._exportUpdates = value;
  }
  public resetExportUpdates() {
    this._exportUpdates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportUpdatesInput() {
    return this._exportUpdates;
  }

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#enabled DataDatabricksLakewatchAlertConfig#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#jira DataDatabricksLakewatchAlertConfig#jira}
  */
  readonly jira?: DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#service_now DataDatabricksLakewatchAlertConfig#service_now}
  */
  readonly serviceNow?: DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#slack DataDatabricksLakewatchAlertConfig#slack}
  */
  readonly slack?: DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#tines DataDatabricksLakewatchAlertConfig#tines}
  */
  readonly tines?: DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#webhook DataDatabricksLakewatchAlertConfig#webhook}
  */
  readonly webhook?: DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#workspace_id DataDatabricksLakewatchAlertConfig#workspace_id}
  */
  readonly workspaceId?: string;
}

export function dataDatabricksLakewatchAlertConfigSecurityAlertExportConfigToTerraform(struct?: DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    jira: dataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraToTerraform(struct!.jira),
    service_now: dataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowToTerraform(struct!.serviceNow),
    slack: dataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackToTerraform(struct!.slack),
    tines: dataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesToTerraform(struct!.tines),
    webhook: dataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookToTerraform(struct!.webhook),
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function dataDatabricksLakewatchAlertConfigSecurityAlertExportConfigToHclTerraform(struct?: DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    jira: {
      value: dataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraToHclTerraform(struct!.jira),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira",
    },
    service_now: {
      value: dataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowToHclTerraform(struct!.serviceNow),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow",
    },
    slack: {
      value: dataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackToHclTerraform(struct!.slack),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack",
    },
    tines: {
      value: dataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesToHclTerraform(struct!.tines),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines",
    },
    webhook: {
      value: dataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookToHclTerraform(struct!.webhook),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook",
    },
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

export class DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._jira?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jira = this._jira?.internalValue;
    }
    if (this._serviceNow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceNow = this._serviceNow?.internalValue;
    }
    if (this._slack?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slack = this._slack?.internalValue;
    }
    if (this._tines?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tines = this._tines?.internalValue;
    }
    if (this._webhook?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhook = this._webhook?.internalValue;
    }
    if (this._workspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceId = this._workspaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._jira.internalValue = undefined;
      this._serviceNow.internalValue = undefined;
      this._slack.internalValue = undefined;
      this._tines.internalValue = undefined;
      this._webhook.internalValue = undefined;
      this._workspaceId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._jira.internalValue = value.jira;
      this._serviceNow.internalValue = value.serviceNow;
      this._slack.internalValue = value.slack;
      this._tines.internalValue = value.tines;
      this._webhook.internalValue = value.webhook;
      this._workspaceId = value.workspaceId;
    }
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

  // jira - computed: true, optional: true, required: false
  private _jira = new DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference(this, "jira");
  public get jira() {
    return this._jira;
  }
  public putJira(value: DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira) {
    this._jira.internalValue = value;
  }
  public resetJira() {
    this._jira.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jiraInput() {
    return this._jira.internalValue;
  }

  // service_now - computed: true, optional: true, required: false
  private _serviceNow = new DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference(this, "service_now");
  public get serviceNow() {
    return this._serviceNow;
  }
  public putServiceNow(value: DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow) {
    this._serviceNow.internalValue = value;
  }
  public resetServiceNow() {
    this._serviceNow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNowInput() {
    return this._serviceNow.internalValue;
  }

  // slack - computed: true, optional: true, required: false
  private _slack = new DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference(this, "slack");
  public get slack() {
    return this._slack;
  }
  public putSlack(value: DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack) {
    this._slack.internalValue = value;
  }
  public resetSlack() {
    this._slack.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackInput() {
    return this._slack.internalValue;
  }

  // tines - computed: true, optional: true, required: false
  private _tines = new DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference(this, "tines");
  public get tines() {
    return this._tines;
  }
  public putTines(value: DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines) {
    this._tines.internalValue = value;
  }
  public resetTines() {
    this._tines.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tinesInput() {
    return this._tines.internalValue;
  }

  // webhook - computed: true, optional: true, required: false
  private _webhook = new DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference(this, "webhook");
  public get webhook() {
    return this._webhook;
  }
  public putWebhook(value: DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook) {
    this._webhook.internalValue = value;
  }
  public resetWebhook() {
    this._webhook.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookInput() {
    return this._webhook.internalValue;
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
export interface DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#api_token_uc_secret DataDatabricksLakewatchAlertConfig#api_token_uc_secret}
  */
  readonly apiTokenUcSecret: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#default_issue_type DataDatabricksLakewatchAlertConfig#default_issue_type}
  */
  readonly defaultIssueType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#instance_url DataDatabricksLakewatchAlertConfig#instance_url}
  */
  readonly instanceUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#project_key DataDatabricksLakewatchAlertConfig#project_key}
  */
  readonly projectKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#user_email DataDatabricksLakewatchAlertConfig#user_email}
  */
  readonly userEmail: string;
}

export function dataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraToTerraform(struct?: DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_token_uc_secret: cdktn.stringToTerraform(struct!.apiTokenUcSecret),
    default_issue_type: cdktn.stringToTerraform(struct!.defaultIssueType),
    instance_url: cdktn.stringToTerraform(struct!.instanceUrl),
    project_key: cdktn.stringToTerraform(struct!.projectKey),
    user_email: cdktn.stringToTerraform(struct!.userEmail),
  }
}


export function dataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraToHclTerraform(struct?: DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_token_uc_secret: {
      value: cdktn.stringToHclTerraform(struct!.apiTokenUcSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_issue_type: {
      value: cdktn.stringToHclTerraform(struct!.defaultIssueType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_url: {
      value: cdktn.stringToHclTerraform(struct!.instanceUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_key: {
      value: cdktn.stringToHclTerraform(struct!.projectKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_email: {
      value: cdktn.stringToHclTerraform(struct!.userEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiTokenUcSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiTokenUcSecret = this._apiTokenUcSecret;
    }
    if (this._defaultIssueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultIssueType = this._defaultIssueType;
    }
    if (this._instanceUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceUrl = this._instanceUrl;
    }
    if (this._projectKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectKey = this._projectKey;
    }
    if (this._userEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.userEmail = this._userEmail;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiTokenUcSecret = undefined;
      this._defaultIssueType = undefined;
      this._instanceUrl = undefined;
      this._projectKey = undefined;
      this._userEmail = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiTokenUcSecret = value.apiTokenUcSecret;
      this._defaultIssueType = value.defaultIssueType;
      this._instanceUrl = value.instanceUrl;
      this._projectKey = value.projectKey;
      this._userEmail = value.userEmail;
    }
  }

  // api_token_uc_secret - computed: true, optional: false, required: true
  private _apiTokenUcSecret?: string; 
  public get apiTokenUcSecret() {
    return this.getStringAttribute('api_token_uc_secret');
  }
  public set apiTokenUcSecret(value: string) {
    this._apiTokenUcSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenUcSecretInput() {
    return this._apiTokenUcSecret;
  }

  // default_issue_type - computed: true, optional: false, required: true
  private _defaultIssueType?: string; 
  public get defaultIssueType() {
    return this.getStringAttribute('default_issue_type');
  }
  public set defaultIssueType(value: string) {
    this._defaultIssueType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultIssueTypeInput() {
    return this._defaultIssueType;
  }

  // instance_url - computed: true, optional: false, required: true
  private _instanceUrl?: string; 
  public get instanceUrl() {
    return this.getStringAttribute('instance_url');
  }
  public set instanceUrl(value: string) {
    this._instanceUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceUrlInput() {
    return this._instanceUrl;
  }

  // project_key - computed: true, optional: false, required: true
  private _projectKey?: string; 
  public get projectKey() {
    return this.getStringAttribute('project_key');
  }
  public set projectKey(value: string) {
    this._projectKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectKeyInput() {
    return this._projectKey;
  }

  // user_email - computed: true, optional: false, required: true
  private _userEmail?: string; 
  public get userEmail() {
    return this.getStringAttribute('user_email');
  }
  public set userEmail(value: string) {
    this._userEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userEmailInput() {
    return this._userEmail;
  }
}
export interface DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#client_id DataDatabricksLakewatchAlertConfig#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#client_secret_uc_secret DataDatabricksLakewatchAlertConfig#client_secret_uc_secret}
  */
  readonly clientSecretUcSecret: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#instance_id DataDatabricksLakewatchAlertConfig#instance_id}
  */
  readonly instanceId: string;
}

export function dataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowToTerraform(struct?: DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret_uc_secret: cdktn.stringToTerraform(struct!.clientSecretUcSecret),
    instance_id: cdktn.stringToTerraform(struct!.instanceId),
  }
}


export function dataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowToHclTerraform(struct?: DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    client_id: {
      value: cdktn.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret_uc_secret: {
      value: cdktn.stringToHclTerraform(struct!.clientSecretUcSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_id: {
      value: cdktn.stringToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecretUcSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretUcSecret = this._clientSecretUcSecret;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId = undefined;
      this._clientSecretUcSecret = undefined;
      this._instanceId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientId = value.clientId;
      this._clientSecretUcSecret = value.clientSecretUcSecret;
      this._instanceId = value.instanceId;
    }
  }

  // client_id - computed: true, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret_uc_secret - computed: true, optional: false, required: true
  private _clientSecretUcSecret?: string; 
  public get clientSecretUcSecret() {
    return this.getStringAttribute('client_secret_uc_secret');
  }
  public set clientSecretUcSecret(value: string) {
    this._clientSecretUcSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretUcSecretInput() {
    return this._clientSecretUcSecret;
  }

  // instance_id - computed: true, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }
}
export interface DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#bot_token_uc_secret DataDatabricksLakewatchAlertConfig#bot_token_uc_secret}
  */
  readonly botTokenUcSecret: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#channel DataDatabricksLakewatchAlertConfig#channel}
  */
  readonly channel: string;
}

export function dataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackToTerraform(struct?: DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bot_token_uc_secret: cdktn.stringToTerraform(struct!.botTokenUcSecret),
    channel: cdktn.stringToTerraform(struct!.channel),
  }
}


export function dataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackToHclTerraform(struct?: DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bot_token_uc_secret: {
      value: cdktn.stringToHclTerraform(struct!.botTokenUcSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    channel: {
      value: cdktn.stringToHclTerraform(struct!.channel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._botTokenUcSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.botTokenUcSecret = this._botTokenUcSecret;
    }
    if (this._channel !== undefined) {
      hasAnyValues = true;
      internalValueResult.channel = this._channel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._botTokenUcSecret = undefined;
      this._channel = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._botTokenUcSecret = value.botTokenUcSecret;
      this._channel = value.channel;
    }
  }

  // bot_token_uc_secret - computed: true, optional: false, required: true
  private _botTokenUcSecret?: string; 
  public get botTokenUcSecret() {
    return this.getStringAttribute('bot_token_uc_secret');
  }
  public set botTokenUcSecret(value: string) {
    this._botTokenUcSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get botTokenUcSecretInput() {
    return this._botTokenUcSecret;
  }

  // channel - computed: true, optional: false, required: true
  private _channel?: string; 
  public get channel() {
    return this.getStringAttribute('channel');
  }
  public set channel(value: string) {
    this._channel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel;
  }
}
export interface DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#export_updates DataDatabricksLakewatchAlertConfig#export_updates}
  */
  readonly exportUpdates?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#webhook_secret_uc_secret DataDatabricksLakewatchAlertConfig#webhook_secret_uc_secret}
  */
  readonly webhookSecretUcSecret: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#webhook_uri DataDatabricksLakewatchAlertConfig#webhook_uri}
  */
  readonly webhookUri: string;
}

export function dataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesToTerraform(struct?: DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    export_updates: cdktn.booleanToTerraform(struct!.exportUpdates),
    webhook_secret_uc_secret: cdktn.stringToTerraform(struct!.webhookSecretUcSecret),
    webhook_uri: cdktn.stringToTerraform(struct!.webhookUri),
  }
}


export function dataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesToHclTerraform(struct?: DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    export_updates: {
      value: cdktn.booleanToHclTerraform(struct!.exportUpdates),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    webhook_secret_uc_secret: {
      value: cdktn.stringToHclTerraform(struct!.webhookSecretUcSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    webhook_uri: {
      value: cdktn.stringToHclTerraform(struct!.webhookUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exportUpdates !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportUpdates = this._exportUpdates;
    }
    if (this._webhookSecretUcSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhookSecretUcSecret = this._webhookSecretUcSecret;
    }
    if (this._webhookUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhookUri = this._webhookUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exportUpdates = undefined;
      this._webhookSecretUcSecret = undefined;
      this._webhookUri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exportUpdates = value.exportUpdates;
      this._webhookSecretUcSecret = value.webhookSecretUcSecret;
      this._webhookUri = value.webhookUri;
    }
  }

  // export_updates - computed: true, optional: true, required: false
  private _exportUpdates?: boolean | cdktn.IResolvable; 
  public get exportUpdates() {
    return this.getBooleanAttribute('export_updates');
  }
  public set exportUpdates(value: boolean | cdktn.IResolvable) {
    this._exportUpdates = value;
  }
  public resetExportUpdates() {
    this._exportUpdates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportUpdatesInput() {
    return this._exportUpdates;
  }

  // webhook_secret_uc_secret - computed: true, optional: false, required: true
  private _webhookSecretUcSecret?: string; 
  public get webhookSecretUcSecret() {
    return this.getStringAttribute('webhook_secret_uc_secret');
  }
  public set webhookSecretUcSecret(value: string) {
    this._webhookSecretUcSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookSecretUcSecretInput() {
    return this._webhookSecretUcSecret;
  }

  // webhook_uri - computed: true, optional: false, required: true
  private _webhookUri?: string; 
  public get webhookUri() {
    return this.getStringAttribute('webhook_uri');
  }
  public set webhookUri(value: string) {
    this._webhookUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookUriInput() {
    return this._webhookUri;
  }
}
export interface DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#export_updates DataDatabricksLakewatchAlertConfig#export_updates}
  */
  readonly exportUpdates?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#url DataDatabricksLakewatchAlertConfig#url}
  */
  readonly url?: string;
}

export function dataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookToTerraform(struct?: DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    export_updates: cdktn.booleanToTerraform(struct!.exportUpdates),
    url: cdktn.stringToTerraform(struct!.url),
  }
}


export function dataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookToHclTerraform(struct?: DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    export_updates: {
      value: cdktn.booleanToHclTerraform(struct!.exportUpdates),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    url: {
      value: cdktn.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exportUpdates !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportUpdates = this._exportUpdates;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exportUpdates = undefined;
      this._url = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exportUpdates = value.exportUpdates;
      this._url = value.url;
    }
  }

  // export_updates - computed: true, optional: true, required: false
  private _exportUpdates?: boolean | cdktn.IResolvable; 
  public get exportUpdates() {
    return this.getBooleanAttribute('export_updates');
  }
  public set exportUpdates(value: boolean | cdktn.IResolvable) {
    this._exportUpdates = value;
  }
  public resetExportUpdates() {
    this._exportUpdates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportUpdatesInput() {
    return this._exportUpdates;
  }

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface DataDatabricksLakewatchAlertConfigSystemAlertExportConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#enabled DataDatabricksLakewatchAlertConfig#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#jira DataDatabricksLakewatchAlertConfig#jira}
  */
  readonly jira?: DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#service_now DataDatabricksLakewatchAlertConfig#service_now}
  */
  readonly serviceNow?: DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#slack DataDatabricksLakewatchAlertConfig#slack}
  */
  readonly slack?: DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#tines DataDatabricksLakewatchAlertConfig#tines}
  */
  readonly tines?: DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#webhook DataDatabricksLakewatchAlertConfig#webhook}
  */
  readonly webhook?: DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#workspace_id DataDatabricksLakewatchAlertConfig#workspace_id}
  */
  readonly workspaceId?: string;
}

export function dataDatabricksLakewatchAlertConfigSystemAlertExportConfigToTerraform(struct?: DataDatabricksLakewatchAlertConfigSystemAlertExportConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    jira: dataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraToTerraform(struct!.jira),
    service_now: dataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowToTerraform(struct!.serviceNow),
    slack: dataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackToTerraform(struct!.slack),
    tines: dataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesToTerraform(struct!.tines),
    webhook: dataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookToTerraform(struct!.webhook),
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function dataDatabricksLakewatchAlertConfigSystemAlertExportConfigToHclTerraform(struct?: DataDatabricksLakewatchAlertConfigSystemAlertExportConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    jira: {
      value: dataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraToHclTerraform(struct!.jira),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira",
    },
    service_now: {
      value: dataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowToHclTerraform(struct!.serviceNow),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow",
    },
    slack: {
      value: dataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackToHclTerraform(struct!.slack),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack",
    },
    tines: {
      value: dataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesToHclTerraform(struct!.tines),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines",
    },
    webhook: {
      value: dataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookToHclTerraform(struct!.webhook),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook",
    },
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

export class DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksLakewatchAlertConfigSystemAlertExportConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._jira?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jira = this._jira?.internalValue;
    }
    if (this._serviceNow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceNow = this._serviceNow?.internalValue;
    }
    if (this._slack?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slack = this._slack?.internalValue;
    }
    if (this._tines?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tines = this._tines?.internalValue;
    }
    if (this._webhook?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhook = this._webhook?.internalValue;
    }
    if (this._workspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceId = this._workspaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksLakewatchAlertConfigSystemAlertExportConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._jira.internalValue = undefined;
      this._serviceNow.internalValue = undefined;
      this._slack.internalValue = undefined;
      this._tines.internalValue = undefined;
      this._webhook.internalValue = undefined;
      this._workspaceId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._jira.internalValue = value.jira;
      this._serviceNow.internalValue = value.serviceNow;
      this._slack.internalValue = value.slack;
      this._tines.internalValue = value.tines;
      this._webhook.internalValue = value.webhook;
      this._workspaceId = value.workspaceId;
    }
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

  // jira - computed: true, optional: true, required: false
  private _jira = new DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference(this, "jira");
  public get jira() {
    return this._jira;
  }
  public putJira(value: DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira) {
    this._jira.internalValue = value;
  }
  public resetJira() {
    this._jira.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jiraInput() {
    return this._jira.internalValue;
  }

  // service_now - computed: true, optional: true, required: false
  private _serviceNow = new DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference(this, "service_now");
  public get serviceNow() {
    return this._serviceNow;
  }
  public putServiceNow(value: DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow) {
    this._serviceNow.internalValue = value;
  }
  public resetServiceNow() {
    this._serviceNow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNowInput() {
    return this._serviceNow.internalValue;
  }

  // slack - computed: true, optional: true, required: false
  private _slack = new DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference(this, "slack");
  public get slack() {
    return this._slack;
  }
  public putSlack(value: DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack) {
    this._slack.internalValue = value;
  }
  public resetSlack() {
    this._slack.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackInput() {
    return this._slack.internalValue;
  }

  // tines - computed: true, optional: true, required: false
  private _tines = new DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference(this, "tines");
  public get tines() {
    return this._tines;
  }
  public putTines(value: DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines) {
    this._tines.internalValue = value;
  }
  public resetTines() {
    this._tines.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tinesInput() {
    return this._tines.internalValue;
  }

  // webhook - computed: true, optional: true, required: false
  private _webhook = new DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference(this, "webhook");
  public get webhook() {
    return this._webhook;
  }
  public putWebhook(value: DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook) {
    this._webhook.internalValue = value;
  }
  public resetWebhook() {
    this._webhook.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookInput() {
    return this._webhook.internalValue;
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
export interface DataDatabricksLakewatchAlertConfigUpdatedBy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#display_name DataDatabricksLakewatchAlertConfig#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#email DataDatabricksLakewatchAlertConfig#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#id DataDatabricksLakewatchAlertConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#principal_type DataDatabricksLakewatchAlertConfig#principal_type}
  */
  readonly principalType?: string;
}

export function dataDatabricksLakewatchAlertConfigUpdatedByToTerraform(struct?: DataDatabricksLakewatchAlertConfigUpdatedBy): any {
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


export function dataDatabricksLakewatchAlertConfigUpdatedByToHclTerraform(struct?: DataDatabricksLakewatchAlertConfigUpdatedBy): any {
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

export class DataDatabricksLakewatchAlertConfigUpdatedByOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksLakewatchAlertConfigUpdatedBy | undefined {
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

  public set internalValue(value: DataDatabricksLakewatchAlertConfigUpdatedBy | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config databricks_lakewatch_alert_config}
*/
export class DataDatabricksLakewatchAlertConfig extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_lakewatch_alert_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataDatabricksLakewatchAlertConfig resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksLakewatchAlertConfig to import
  * @param importFromId The id of the existing DataDatabricksLakewatchAlertConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksLakewatchAlertConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_lakewatch_alert_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config databricks_lakewatch_alert_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksLakewatchAlertConfigConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksLakewatchAlertConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_lakewatch_alert_config',
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
    this._name = config.name;
    this._providerConfig.internalValue = config.providerConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_security_alert_collation_window - computed: true, optional: false, required: false
  public get defaultSecurityAlertCollationWindow() {
    return this.getStringAttribute('default_security_alert_collation_window');
  }

  // default_system_alert_collation_window - computed: true, optional: false, required: false
  public get defaultSystemAlertCollationWindow() {
    return this.getStringAttribute('default_system_alert_collation_window');
  }

  // effective_default_security_alert_collation_window - computed: true, optional: false, required: false
  public get effectiveDefaultSecurityAlertCollationWindow() {
    return this.getStringAttribute('effective_default_security_alert_collation_window');
  }

  // effective_default_system_alert_collation_window - computed: true, optional: false, required: false
  public get effectiveDefaultSystemAlertCollationWindow() {
    return this.getStringAttribute('effective_default_system_alert_collation_window');
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
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

  // provider_config - computed: false, optional: true, required: false
  private _providerConfig = new DataDatabricksLakewatchAlertConfigProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataDatabricksLakewatchAlertConfigProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // security_alert_export_config - computed: true, optional: false, required: false
  private _securityAlertExportConfig = new DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference(this, "security_alert_export_config");
  public get securityAlertExportConfig() {
    return this._securityAlertExportConfig;
  }

  // system_alert_export_config - computed: true, optional: false, required: false
  private _systemAlertExportConfig = new DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference(this, "system_alert_export_config");
  public get systemAlertExportConfig() {
    return this._systemAlertExportConfig;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // updated_by - computed: true, optional: false, required: false
  private _updatedBy = new DataDatabricksLakewatchAlertConfigUpdatedByOutputReference(this, "updated_by");
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
      name: cdktn.stringToTerraform(this._name),
      provider_config: dataDatabricksLakewatchAlertConfigProviderConfigToTerraform(this._providerConfig.internalValue),
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
        value: dataDatabricksLakewatchAlertConfigProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataDatabricksLakewatchAlertConfigProviderConfig",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
