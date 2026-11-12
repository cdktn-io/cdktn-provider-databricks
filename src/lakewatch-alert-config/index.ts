/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface LakewatchAlertConfigConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#default_security_alert_collation_window LakewatchAlertConfig#default_security_alert_collation_window}
  */
  readonly defaultSecurityAlertCollationWindow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#default_system_alert_collation_window LakewatchAlertConfig#default_system_alert_collation_window}
  */
  readonly defaultSystemAlertCollationWindow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#parent LakewatchAlertConfig#parent}
  */
  readonly parent: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#provider_config LakewatchAlertConfig#provider_config}
  */
  readonly providerConfig?: LakewatchAlertConfigProviderConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#security_alert_export_config LakewatchAlertConfig#security_alert_export_config}
  */
  readonly securityAlertExportConfig?: LakewatchAlertConfigSecurityAlertExportConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#system_alert_export_config LakewatchAlertConfig#system_alert_export_config}
  */
  readonly systemAlertExportConfig?: LakewatchAlertConfigSystemAlertExportConfig;
}
export interface LakewatchAlertConfigProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#workspace_id LakewatchAlertConfig#workspace_id}
  */
  readonly workspaceId?: string;
}

export function lakewatchAlertConfigProviderConfigToTerraform(struct?: LakewatchAlertConfigProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function lakewatchAlertConfigProviderConfigToHclTerraform(struct?: LakewatchAlertConfigProviderConfig | cdktn.IResolvable): any {
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

export class LakewatchAlertConfigProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LakewatchAlertConfigProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: LakewatchAlertConfigProviderConfig | cdktn.IResolvable | undefined) {
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
export interface LakewatchAlertConfigSecurityAlertExportConfigJira {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#api_token_uc_secret LakewatchAlertConfig#api_token_uc_secret}
  */
  readonly apiTokenUcSecret: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#default_issue_type LakewatchAlertConfig#default_issue_type}
  */
  readonly defaultIssueType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#instance_url LakewatchAlertConfig#instance_url}
  */
  readonly instanceUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#project_key LakewatchAlertConfig#project_key}
  */
  readonly projectKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#user_email LakewatchAlertConfig#user_email}
  */
  readonly userEmail: string;
}

export function lakewatchAlertConfigSecurityAlertExportConfigJiraToTerraform(struct?: LakewatchAlertConfigSecurityAlertExportConfigJira | cdktn.IResolvable): any {
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


export function lakewatchAlertConfigSecurityAlertExportConfigJiraToHclTerraform(struct?: LakewatchAlertConfigSecurityAlertExportConfigJira | cdktn.IResolvable): any {
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

export class LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LakewatchAlertConfigSecurityAlertExportConfigJira | cdktn.IResolvable | undefined {
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

  public set internalValue(value: LakewatchAlertConfigSecurityAlertExportConfigJira | cdktn.IResolvable | undefined) {
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

  // api_token_uc_secret - computed: false, optional: false, required: true
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

  // default_issue_type - computed: false, optional: false, required: true
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

  // instance_url - computed: false, optional: false, required: true
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

  // project_key - computed: false, optional: false, required: true
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

  // user_email - computed: false, optional: false, required: true
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
export interface LakewatchAlertConfigSecurityAlertExportConfigServiceNow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#client_id LakewatchAlertConfig#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#client_secret_uc_secret LakewatchAlertConfig#client_secret_uc_secret}
  */
  readonly clientSecretUcSecret: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#instance_id LakewatchAlertConfig#instance_id}
  */
  readonly instanceId: string;
}

export function lakewatchAlertConfigSecurityAlertExportConfigServiceNowToTerraform(struct?: LakewatchAlertConfigSecurityAlertExportConfigServiceNow | cdktn.IResolvable): any {
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


export function lakewatchAlertConfigSecurityAlertExportConfigServiceNowToHclTerraform(struct?: LakewatchAlertConfigSecurityAlertExportConfigServiceNow | cdktn.IResolvable): any {
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

export class LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LakewatchAlertConfigSecurityAlertExportConfigServiceNow | cdktn.IResolvable | undefined {
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

  public set internalValue(value: LakewatchAlertConfigSecurityAlertExportConfigServiceNow | cdktn.IResolvable | undefined) {
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

  // client_id - computed: false, optional: false, required: true
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

  // client_secret_uc_secret - computed: false, optional: false, required: true
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

  // instance_id - computed: false, optional: false, required: true
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
export interface LakewatchAlertConfigSecurityAlertExportConfigSlack {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#bot_token_uc_secret LakewatchAlertConfig#bot_token_uc_secret}
  */
  readonly botTokenUcSecret: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#channel LakewatchAlertConfig#channel}
  */
  readonly channel: string;
}

export function lakewatchAlertConfigSecurityAlertExportConfigSlackToTerraform(struct?: LakewatchAlertConfigSecurityAlertExportConfigSlack | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bot_token_uc_secret: cdktn.stringToTerraform(struct!.botTokenUcSecret),
    channel: cdktn.stringToTerraform(struct!.channel),
  }
}


export function lakewatchAlertConfigSecurityAlertExportConfigSlackToHclTerraform(struct?: LakewatchAlertConfigSecurityAlertExportConfigSlack | cdktn.IResolvable): any {
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

export class LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LakewatchAlertConfigSecurityAlertExportConfigSlack | cdktn.IResolvable | undefined {
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

  public set internalValue(value: LakewatchAlertConfigSecurityAlertExportConfigSlack | cdktn.IResolvable | undefined) {
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

  // bot_token_uc_secret - computed: false, optional: false, required: true
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

  // channel - computed: false, optional: false, required: true
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
export interface LakewatchAlertConfigSecurityAlertExportConfigTines {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#export_updates LakewatchAlertConfig#export_updates}
  */
  readonly exportUpdates?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#webhook_secret_uc_secret LakewatchAlertConfig#webhook_secret_uc_secret}
  */
  readonly webhookSecretUcSecret: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#webhook_uri LakewatchAlertConfig#webhook_uri}
  */
  readonly webhookUri: string;
}

export function lakewatchAlertConfigSecurityAlertExportConfigTinesToTerraform(struct?: LakewatchAlertConfigSecurityAlertExportConfigTines | cdktn.IResolvable): any {
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


export function lakewatchAlertConfigSecurityAlertExportConfigTinesToHclTerraform(struct?: LakewatchAlertConfigSecurityAlertExportConfigTines | cdktn.IResolvable): any {
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

export class LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LakewatchAlertConfigSecurityAlertExportConfigTines | cdktn.IResolvable | undefined {
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

  public set internalValue(value: LakewatchAlertConfigSecurityAlertExportConfigTines | cdktn.IResolvable | undefined) {
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

  // export_updates - computed: false, optional: true, required: false
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

  // webhook_secret_uc_secret - computed: false, optional: false, required: true
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

  // webhook_uri - computed: false, optional: false, required: true
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
export interface LakewatchAlertConfigSecurityAlertExportConfigWebhook {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#export_updates LakewatchAlertConfig#export_updates}
  */
  readonly exportUpdates?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#url LakewatchAlertConfig#url}
  */
  readonly url?: string;
}

export function lakewatchAlertConfigSecurityAlertExportConfigWebhookToTerraform(struct?: LakewatchAlertConfigSecurityAlertExportConfigWebhook | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    export_updates: cdktn.booleanToTerraform(struct!.exportUpdates),
    url: cdktn.stringToTerraform(struct!.url),
  }
}


export function lakewatchAlertConfigSecurityAlertExportConfigWebhookToHclTerraform(struct?: LakewatchAlertConfigSecurityAlertExportConfigWebhook | cdktn.IResolvable): any {
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

export class LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LakewatchAlertConfigSecurityAlertExportConfigWebhook | cdktn.IResolvable | undefined {
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

  public set internalValue(value: LakewatchAlertConfigSecurityAlertExportConfigWebhook | cdktn.IResolvable | undefined) {
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

  // export_updates - computed: false, optional: true, required: false
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

  // url - computed: false, optional: true, required: false
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
export interface LakewatchAlertConfigSecurityAlertExportConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#enabled LakewatchAlertConfig#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#jira LakewatchAlertConfig#jira}
  */
  readonly jira?: LakewatchAlertConfigSecurityAlertExportConfigJira;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#service_now LakewatchAlertConfig#service_now}
  */
  readonly serviceNow?: LakewatchAlertConfigSecurityAlertExportConfigServiceNow;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#slack LakewatchAlertConfig#slack}
  */
  readonly slack?: LakewatchAlertConfigSecurityAlertExportConfigSlack;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#tines LakewatchAlertConfig#tines}
  */
  readonly tines?: LakewatchAlertConfigSecurityAlertExportConfigTines;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#webhook LakewatchAlertConfig#webhook}
  */
  readonly webhook?: LakewatchAlertConfigSecurityAlertExportConfigWebhook;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#workspace_id LakewatchAlertConfig#workspace_id}
  */
  readonly workspaceId?: string;
}

export function lakewatchAlertConfigSecurityAlertExportConfigToTerraform(struct?: LakewatchAlertConfigSecurityAlertExportConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    jira: lakewatchAlertConfigSecurityAlertExportConfigJiraToTerraform(struct!.jira),
    service_now: lakewatchAlertConfigSecurityAlertExportConfigServiceNowToTerraform(struct!.serviceNow),
    slack: lakewatchAlertConfigSecurityAlertExportConfigSlackToTerraform(struct!.slack),
    tines: lakewatchAlertConfigSecurityAlertExportConfigTinesToTerraform(struct!.tines),
    webhook: lakewatchAlertConfigSecurityAlertExportConfigWebhookToTerraform(struct!.webhook),
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function lakewatchAlertConfigSecurityAlertExportConfigToHclTerraform(struct?: LakewatchAlertConfigSecurityAlertExportConfig | cdktn.IResolvable): any {
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
      value: lakewatchAlertConfigSecurityAlertExportConfigJiraToHclTerraform(struct!.jira),
      isBlock: true,
      type: "struct",
      storageClassType: "LakewatchAlertConfigSecurityAlertExportConfigJira",
    },
    service_now: {
      value: lakewatchAlertConfigSecurityAlertExportConfigServiceNowToHclTerraform(struct!.serviceNow),
      isBlock: true,
      type: "struct",
      storageClassType: "LakewatchAlertConfigSecurityAlertExportConfigServiceNow",
    },
    slack: {
      value: lakewatchAlertConfigSecurityAlertExportConfigSlackToHclTerraform(struct!.slack),
      isBlock: true,
      type: "struct",
      storageClassType: "LakewatchAlertConfigSecurityAlertExportConfigSlack",
    },
    tines: {
      value: lakewatchAlertConfigSecurityAlertExportConfigTinesToHclTerraform(struct!.tines),
      isBlock: true,
      type: "struct",
      storageClassType: "LakewatchAlertConfigSecurityAlertExportConfigTines",
    },
    webhook: {
      value: lakewatchAlertConfigSecurityAlertExportConfigWebhookToHclTerraform(struct!.webhook),
      isBlock: true,
      type: "struct",
      storageClassType: "LakewatchAlertConfigSecurityAlertExportConfigWebhook",
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

export class LakewatchAlertConfigSecurityAlertExportConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LakewatchAlertConfigSecurityAlertExportConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: LakewatchAlertConfigSecurityAlertExportConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._jira.internalValue = undefined;
      this._serviceNow.internalValue = undefined;
      this._slack.internalValue = undefined;
      this._tines.internalValue = undefined;
      this._webhook.internalValue = undefined;
      this._workspaceId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._jira.internalValue = value.jira;
      this._serviceNow.internalValue = value.serviceNow;
      this._slack.internalValue = value.slack;
      this._tines.internalValue = value.tines;
      this._webhook.internalValue = value.webhook;
      this._workspaceId = value.workspaceId;
    }
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

  // jira - computed: false, optional: true, required: false
  private _jira = new LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference(this, "jira");
  public get jira() {
    return this._jira;
  }
  public putJira(value: LakewatchAlertConfigSecurityAlertExportConfigJira) {
    this._jira.internalValue = value;
  }
  public resetJira() {
    this._jira.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jiraInput() {
    return this._jira.internalValue;
  }

  // service_now - computed: false, optional: true, required: false
  private _serviceNow = new LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference(this, "service_now");
  public get serviceNow() {
    return this._serviceNow;
  }
  public putServiceNow(value: LakewatchAlertConfigSecurityAlertExportConfigServiceNow) {
    this._serviceNow.internalValue = value;
  }
  public resetServiceNow() {
    this._serviceNow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNowInput() {
    return this._serviceNow.internalValue;
  }

  // slack - computed: false, optional: true, required: false
  private _slack = new LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference(this, "slack");
  public get slack() {
    return this._slack;
  }
  public putSlack(value: LakewatchAlertConfigSecurityAlertExportConfigSlack) {
    this._slack.internalValue = value;
  }
  public resetSlack() {
    this._slack.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackInput() {
    return this._slack.internalValue;
  }

  // tines - computed: false, optional: true, required: false
  private _tines = new LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference(this, "tines");
  public get tines() {
    return this._tines;
  }
  public putTines(value: LakewatchAlertConfigSecurityAlertExportConfigTines) {
    this._tines.internalValue = value;
  }
  public resetTines() {
    this._tines.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tinesInput() {
    return this._tines.internalValue;
  }

  // webhook - computed: false, optional: true, required: false
  private _webhook = new LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference(this, "webhook");
  public get webhook() {
    return this._webhook;
  }
  public putWebhook(value: LakewatchAlertConfigSecurityAlertExportConfigWebhook) {
    this._webhook.internalValue = value;
  }
  public resetWebhook() {
    this._webhook.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookInput() {
    return this._webhook.internalValue;
  }

  // workspace_id - computed: false, optional: true, required: false
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
export interface LakewatchAlertConfigSystemAlertExportConfigJira {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#api_token_uc_secret LakewatchAlertConfig#api_token_uc_secret}
  */
  readonly apiTokenUcSecret: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#default_issue_type LakewatchAlertConfig#default_issue_type}
  */
  readonly defaultIssueType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#instance_url LakewatchAlertConfig#instance_url}
  */
  readonly instanceUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#project_key LakewatchAlertConfig#project_key}
  */
  readonly projectKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#user_email LakewatchAlertConfig#user_email}
  */
  readonly userEmail: string;
}

export function lakewatchAlertConfigSystemAlertExportConfigJiraToTerraform(struct?: LakewatchAlertConfigSystemAlertExportConfigJira | cdktn.IResolvable): any {
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


export function lakewatchAlertConfigSystemAlertExportConfigJiraToHclTerraform(struct?: LakewatchAlertConfigSystemAlertExportConfigJira | cdktn.IResolvable): any {
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

export class LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LakewatchAlertConfigSystemAlertExportConfigJira | cdktn.IResolvable | undefined {
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

  public set internalValue(value: LakewatchAlertConfigSystemAlertExportConfigJira | cdktn.IResolvable | undefined) {
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

  // api_token_uc_secret - computed: false, optional: false, required: true
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

  // default_issue_type - computed: false, optional: false, required: true
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

  // instance_url - computed: false, optional: false, required: true
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

  // project_key - computed: false, optional: false, required: true
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

  // user_email - computed: false, optional: false, required: true
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
export interface LakewatchAlertConfigSystemAlertExportConfigServiceNow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#client_id LakewatchAlertConfig#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#client_secret_uc_secret LakewatchAlertConfig#client_secret_uc_secret}
  */
  readonly clientSecretUcSecret: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#instance_id LakewatchAlertConfig#instance_id}
  */
  readonly instanceId: string;
}

export function lakewatchAlertConfigSystemAlertExportConfigServiceNowToTerraform(struct?: LakewatchAlertConfigSystemAlertExportConfigServiceNow | cdktn.IResolvable): any {
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


export function lakewatchAlertConfigSystemAlertExportConfigServiceNowToHclTerraform(struct?: LakewatchAlertConfigSystemAlertExportConfigServiceNow | cdktn.IResolvable): any {
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

export class LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LakewatchAlertConfigSystemAlertExportConfigServiceNow | cdktn.IResolvable | undefined {
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

  public set internalValue(value: LakewatchAlertConfigSystemAlertExportConfigServiceNow | cdktn.IResolvable | undefined) {
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

  // client_id - computed: false, optional: false, required: true
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

  // client_secret_uc_secret - computed: false, optional: false, required: true
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

  // instance_id - computed: false, optional: false, required: true
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
export interface LakewatchAlertConfigSystemAlertExportConfigSlack {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#bot_token_uc_secret LakewatchAlertConfig#bot_token_uc_secret}
  */
  readonly botTokenUcSecret: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#channel LakewatchAlertConfig#channel}
  */
  readonly channel: string;
}

export function lakewatchAlertConfigSystemAlertExportConfigSlackToTerraform(struct?: LakewatchAlertConfigSystemAlertExportConfigSlack | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bot_token_uc_secret: cdktn.stringToTerraform(struct!.botTokenUcSecret),
    channel: cdktn.stringToTerraform(struct!.channel),
  }
}


export function lakewatchAlertConfigSystemAlertExportConfigSlackToHclTerraform(struct?: LakewatchAlertConfigSystemAlertExportConfigSlack | cdktn.IResolvable): any {
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

export class LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LakewatchAlertConfigSystemAlertExportConfigSlack | cdktn.IResolvable | undefined {
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

  public set internalValue(value: LakewatchAlertConfigSystemAlertExportConfigSlack | cdktn.IResolvable | undefined) {
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

  // bot_token_uc_secret - computed: false, optional: false, required: true
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

  // channel - computed: false, optional: false, required: true
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
export interface LakewatchAlertConfigSystemAlertExportConfigTines {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#export_updates LakewatchAlertConfig#export_updates}
  */
  readonly exportUpdates?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#webhook_secret_uc_secret LakewatchAlertConfig#webhook_secret_uc_secret}
  */
  readonly webhookSecretUcSecret: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#webhook_uri LakewatchAlertConfig#webhook_uri}
  */
  readonly webhookUri: string;
}

export function lakewatchAlertConfigSystemAlertExportConfigTinesToTerraform(struct?: LakewatchAlertConfigSystemAlertExportConfigTines | cdktn.IResolvable): any {
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


export function lakewatchAlertConfigSystemAlertExportConfigTinesToHclTerraform(struct?: LakewatchAlertConfigSystemAlertExportConfigTines | cdktn.IResolvable): any {
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

export class LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LakewatchAlertConfigSystemAlertExportConfigTines | cdktn.IResolvable | undefined {
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

  public set internalValue(value: LakewatchAlertConfigSystemAlertExportConfigTines | cdktn.IResolvable | undefined) {
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

  // export_updates - computed: false, optional: true, required: false
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

  // webhook_secret_uc_secret - computed: false, optional: false, required: true
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

  // webhook_uri - computed: false, optional: false, required: true
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
export interface LakewatchAlertConfigSystemAlertExportConfigWebhook {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#export_updates LakewatchAlertConfig#export_updates}
  */
  readonly exportUpdates?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#url LakewatchAlertConfig#url}
  */
  readonly url?: string;
}

export function lakewatchAlertConfigSystemAlertExportConfigWebhookToTerraform(struct?: LakewatchAlertConfigSystemAlertExportConfigWebhook | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    export_updates: cdktn.booleanToTerraform(struct!.exportUpdates),
    url: cdktn.stringToTerraform(struct!.url),
  }
}


export function lakewatchAlertConfigSystemAlertExportConfigWebhookToHclTerraform(struct?: LakewatchAlertConfigSystemAlertExportConfigWebhook | cdktn.IResolvable): any {
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

export class LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LakewatchAlertConfigSystemAlertExportConfigWebhook | cdktn.IResolvable | undefined {
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

  public set internalValue(value: LakewatchAlertConfigSystemAlertExportConfigWebhook | cdktn.IResolvable | undefined) {
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

  // export_updates - computed: false, optional: true, required: false
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

  // url - computed: false, optional: true, required: false
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
export interface LakewatchAlertConfigSystemAlertExportConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#enabled LakewatchAlertConfig#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#jira LakewatchAlertConfig#jira}
  */
  readonly jira?: LakewatchAlertConfigSystemAlertExportConfigJira;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#service_now LakewatchAlertConfig#service_now}
  */
  readonly serviceNow?: LakewatchAlertConfigSystemAlertExportConfigServiceNow;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#slack LakewatchAlertConfig#slack}
  */
  readonly slack?: LakewatchAlertConfigSystemAlertExportConfigSlack;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#tines LakewatchAlertConfig#tines}
  */
  readonly tines?: LakewatchAlertConfigSystemAlertExportConfigTines;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#webhook LakewatchAlertConfig#webhook}
  */
  readonly webhook?: LakewatchAlertConfigSystemAlertExportConfigWebhook;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#workspace_id LakewatchAlertConfig#workspace_id}
  */
  readonly workspaceId?: string;
}

export function lakewatchAlertConfigSystemAlertExportConfigToTerraform(struct?: LakewatchAlertConfigSystemAlertExportConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    jira: lakewatchAlertConfigSystemAlertExportConfigJiraToTerraform(struct!.jira),
    service_now: lakewatchAlertConfigSystemAlertExportConfigServiceNowToTerraform(struct!.serviceNow),
    slack: lakewatchAlertConfigSystemAlertExportConfigSlackToTerraform(struct!.slack),
    tines: lakewatchAlertConfigSystemAlertExportConfigTinesToTerraform(struct!.tines),
    webhook: lakewatchAlertConfigSystemAlertExportConfigWebhookToTerraform(struct!.webhook),
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function lakewatchAlertConfigSystemAlertExportConfigToHclTerraform(struct?: LakewatchAlertConfigSystemAlertExportConfig | cdktn.IResolvable): any {
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
      value: lakewatchAlertConfigSystemAlertExportConfigJiraToHclTerraform(struct!.jira),
      isBlock: true,
      type: "struct",
      storageClassType: "LakewatchAlertConfigSystemAlertExportConfigJira",
    },
    service_now: {
      value: lakewatchAlertConfigSystemAlertExportConfigServiceNowToHclTerraform(struct!.serviceNow),
      isBlock: true,
      type: "struct",
      storageClassType: "LakewatchAlertConfigSystemAlertExportConfigServiceNow",
    },
    slack: {
      value: lakewatchAlertConfigSystemAlertExportConfigSlackToHclTerraform(struct!.slack),
      isBlock: true,
      type: "struct",
      storageClassType: "LakewatchAlertConfigSystemAlertExportConfigSlack",
    },
    tines: {
      value: lakewatchAlertConfigSystemAlertExportConfigTinesToHclTerraform(struct!.tines),
      isBlock: true,
      type: "struct",
      storageClassType: "LakewatchAlertConfigSystemAlertExportConfigTines",
    },
    webhook: {
      value: lakewatchAlertConfigSystemAlertExportConfigWebhookToHclTerraform(struct!.webhook),
      isBlock: true,
      type: "struct",
      storageClassType: "LakewatchAlertConfigSystemAlertExportConfigWebhook",
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

export class LakewatchAlertConfigSystemAlertExportConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LakewatchAlertConfigSystemAlertExportConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: LakewatchAlertConfigSystemAlertExportConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._jira.internalValue = undefined;
      this._serviceNow.internalValue = undefined;
      this._slack.internalValue = undefined;
      this._tines.internalValue = undefined;
      this._webhook.internalValue = undefined;
      this._workspaceId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._jira.internalValue = value.jira;
      this._serviceNow.internalValue = value.serviceNow;
      this._slack.internalValue = value.slack;
      this._tines.internalValue = value.tines;
      this._webhook.internalValue = value.webhook;
      this._workspaceId = value.workspaceId;
    }
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

  // jira - computed: false, optional: true, required: false
  private _jira = new LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference(this, "jira");
  public get jira() {
    return this._jira;
  }
  public putJira(value: LakewatchAlertConfigSystemAlertExportConfigJira) {
    this._jira.internalValue = value;
  }
  public resetJira() {
    this._jira.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jiraInput() {
    return this._jira.internalValue;
  }

  // service_now - computed: false, optional: true, required: false
  private _serviceNow = new LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference(this, "service_now");
  public get serviceNow() {
    return this._serviceNow;
  }
  public putServiceNow(value: LakewatchAlertConfigSystemAlertExportConfigServiceNow) {
    this._serviceNow.internalValue = value;
  }
  public resetServiceNow() {
    this._serviceNow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNowInput() {
    return this._serviceNow.internalValue;
  }

  // slack - computed: false, optional: true, required: false
  private _slack = new LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference(this, "slack");
  public get slack() {
    return this._slack;
  }
  public putSlack(value: LakewatchAlertConfigSystemAlertExportConfigSlack) {
    this._slack.internalValue = value;
  }
  public resetSlack() {
    this._slack.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackInput() {
    return this._slack.internalValue;
  }

  // tines - computed: false, optional: true, required: false
  private _tines = new LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference(this, "tines");
  public get tines() {
    return this._tines;
  }
  public putTines(value: LakewatchAlertConfigSystemAlertExportConfigTines) {
    this._tines.internalValue = value;
  }
  public resetTines() {
    this._tines.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tinesInput() {
    return this._tines.internalValue;
  }

  // webhook - computed: false, optional: true, required: false
  private _webhook = new LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference(this, "webhook");
  public get webhook() {
    return this._webhook;
  }
  public putWebhook(value: LakewatchAlertConfigSystemAlertExportConfigWebhook) {
    this._webhook.internalValue = value;
  }
  public resetWebhook() {
    this._webhook.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookInput() {
    return this._webhook.internalValue;
  }

  // workspace_id - computed: false, optional: true, required: false
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
export interface LakewatchAlertConfigUpdatedBy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#display_name LakewatchAlertConfig#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#email LakewatchAlertConfig#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#id LakewatchAlertConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#principal_type LakewatchAlertConfig#principal_type}
  */
  readonly principalType?: string;
}

export function lakewatchAlertConfigUpdatedByToTerraform(struct?: LakewatchAlertConfigUpdatedBy): any {
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


export function lakewatchAlertConfigUpdatedByToHclTerraform(struct?: LakewatchAlertConfigUpdatedBy): any {
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

export class LakewatchAlertConfigUpdatedByOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LakewatchAlertConfigUpdatedBy | undefined {
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

  public set internalValue(value: LakewatchAlertConfigUpdatedBy | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config databricks_lakewatch_alert_config}
*/
export class LakewatchAlertConfig extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_lakewatch_alert_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a LakewatchAlertConfig resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LakewatchAlertConfig to import
  * @param importFromId The id of the existing LakewatchAlertConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LakewatchAlertConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_lakewatch_alert_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config databricks_lakewatch_alert_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LakewatchAlertConfigConfig
  */
  public constructor(scope: Construct, id: string, config: LakewatchAlertConfigConfig) {
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
    this._defaultSecurityAlertCollationWindow = config.defaultSecurityAlertCollationWindow;
    this._defaultSystemAlertCollationWindow = config.defaultSystemAlertCollationWindow;
    this._parent = config.parent;
    this._providerConfig.internalValue = config.providerConfig;
    this._securityAlertExportConfig.internalValue = config.securityAlertExportConfig;
    this._systemAlertExportConfig.internalValue = config.systemAlertExportConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_security_alert_collation_window - computed: false, optional: true, required: false
  private _defaultSecurityAlertCollationWindow?: string; 
  public get defaultSecurityAlertCollationWindow() {
    return this.getStringAttribute('default_security_alert_collation_window');
  }
  public set defaultSecurityAlertCollationWindow(value: string) {
    this._defaultSecurityAlertCollationWindow = value;
  }
  public resetDefaultSecurityAlertCollationWindow() {
    this._defaultSecurityAlertCollationWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSecurityAlertCollationWindowInput() {
    return this._defaultSecurityAlertCollationWindow;
  }

  // default_system_alert_collation_window - computed: false, optional: true, required: false
  private _defaultSystemAlertCollationWindow?: string; 
  public get defaultSystemAlertCollationWindow() {
    return this.getStringAttribute('default_system_alert_collation_window');
  }
  public set defaultSystemAlertCollationWindow(value: string) {
    this._defaultSystemAlertCollationWindow = value;
  }
  public resetDefaultSystemAlertCollationWindow() {
    this._defaultSystemAlertCollationWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSystemAlertCollationWindowInput() {
    return this._defaultSystemAlertCollationWindow;
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
  private _providerConfig = new LakewatchAlertConfigProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: LakewatchAlertConfigProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // security_alert_export_config - computed: false, optional: true, required: false
  private _securityAlertExportConfig = new LakewatchAlertConfigSecurityAlertExportConfigOutputReference(this, "security_alert_export_config");
  public get securityAlertExportConfig() {
    return this._securityAlertExportConfig;
  }
  public putSecurityAlertExportConfig(value: LakewatchAlertConfigSecurityAlertExportConfig) {
    this._securityAlertExportConfig.internalValue = value;
  }
  public resetSecurityAlertExportConfig() {
    this._securityAlertExportConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityAlertExportConfigInput() {
    return this._securityAlertExportConfig.internalValue;
  }

  // system_alert_export_config - computed: false, optional: true, required: false
  private _systemAlertExportConfig = new LakewatchAlertConfigSystemAlertExportConfigOutputReference(this, "system_alert_export_config");
  public get systemAlertExportConfig() {
    return this._systemAlertExportConfig;
  }
  public putSystemAlertExportConfig(value: LakewatchAlertConfigSystemAlertExportConfig) {
    this._systemAlertExportConfig.internalValue = value;
  }
  public resetSystemAlertExportConfig() {
    this._systemAlertExportConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemAlertExportConfigInput() {
    return this._systemAlertExportConfig.internalValue;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // updated_by - computed: true, optional: false, required: false
  private _updatedBy = new LakewatchAlertConfigUpdatedByOutputReference(this, "updated_by");
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
      default_security_alert_collation_window: cdktn.stringToTerraform(this._defaultSecurityAlertCollationWindow),
      default_system_alert_collation_window: cdktn.stringToTerraform(this._defaultSystemAlertCollationWindow),
      parent: cdktn.stringToTerraform(this._parent),
      provider_config: lakewatchAlertConfigProviderConfigToTerraform(this._providerConfig.internalValue),
      security_alert_export_config: lakewatchAlertConfigSecurityAlertExportConfigToTerraform(this._securityAlertExportConfig.internalValue),
      system_alert_export_config: lakewatchAlertConfigSystemAlertExportConfigToTerraform(this._systemAlertExportConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_security_alert_collation_window: {
        value: cdktn.stringToHclTerraform(this._defaultSecurityAlertCollationWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_system_alert_collation_window: {
        value: cdktn.stringToHclTerraform(this._defaultSystemAlertCollationWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent: {
        value: cdktn.stringToHclTerraform(this._parent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_config: {
        value: lakewatchAlertConfigProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LakewatchAlertConfigProviderConfig",
      },
      security_alert_export_config: {
        value: lakewatchAlertConfigSecurityAlertExportConfigToHclTerraform(this._securityAlertExportConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LakewatchAlertConfigSecurityAlertExportConfig",
      },
      system_alert_export_config: {
        value: lakewatchAlertConfigSystemAlertExportConfigToHclTerraform(this._systemAlertExportConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LakewatchAlertConfigSystemAlertExportConfig",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
