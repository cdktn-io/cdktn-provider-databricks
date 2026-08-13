/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_mcp_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataDatabricksAiGatewayMcpServiceConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_mcp_service#name DataDatabricksAiGatewayMcpService#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_mcp_service#provider_config DataDatabricksAiGatewayMcpService#provider_config}
  */
  readonly providerConfig?: DataDatabricksAiGatewayMcpServiceProviderConfig;
}
export interface DataDatabricksAiGatewayMcpServiceConfigRateLimits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_mcp_service#key DataDatabricksAiGatewayMcpService#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_mcp_service#principal DataDatabricksAiGatewayMcpService#principal}
  */
  readonly principal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_mcp_service#renewal_period DataDatabricksAiGatewayMcpService#renewal_period}
  */
  readonly renewalPeriod: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_mcp_service#request_tag_key DataDatabricksAiGatewayMcpService#request_tag_key}
  */
  readonly requestTagKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_mcp_service#request_tag_value DataDatabricksAiGatewayMcpService#request_tag_value}
  */
  readonly requestTagValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_mcp_service#requests DataDatabricksAiGatewayMcpService#requests}
  */
  readonly requests?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_mcp_service#tokens DataDatabricksAiGatewayMcpService#tokens}
  */
  readonly tokens?: number;
}

export function dataDatabricksAiGatewayMcpServiceConfigRateLimitsToTerraform(struct?: DataDatabricksAiGatewayMcpServiceConfigRateLimits | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    principal: cdktn.stringToTerraform(struct!.principal),
    renewal_period: cdktn.stringToTerraform(struct!.renewalPeriod),
    request_tag_key: cdktn.stringToTerraform(struct!.requestTagKey),
    request_tag_value: cdktn.stringToTerraform(struct!.requestTagValue),
    requests: cdktn.numberToTerraform(struct!.requests),
    tokens: cdktn.numberToTerraform(struct!.tokens),
  }
}


export function dataDatabricksAiGatewayMcpServiceConfigRateLimitsToHclTerraform(struct?: DataDatabricksAiGatewayMcpServiceConfigRateLimits | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    principal: {
      value: cdktn.stringToHclTerraform(struct!.principal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    renewal_period: {
      value: cdktn.stringToHclTerraform(struct!.renewalPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_tag_key: {
      value: cdktn.stringToHclTerraform(struct!.requestTagKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_tag_value: {
      value: cdktn.stringToHclTerraform(struct!.requestTagValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    requests: {
      value: cdktn.numberToHclTerraform(struct!.requests),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tokens: {
      value: cdktn.numberToHclTerraform(struct!.tokens),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksAiGatewayMcpServiceConfigRateLimits | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._principal !== undefined) {
      hasAnyValues = true;
      internalValueResult.principal = this._principal;
    }
    if (this._renewalPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.renewalPeriod = this._renewalPeriod;
    }
    if (this._requestTagKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestTagKey = this._requestTagKey;
    }
    if (this._requestTagValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestTagValue = this._requestTagValue;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    if (this._tokens !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokens = this._tokens;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAiGatewayMcpServiceConfigRateLimits | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._principal = undefined;
      this._renewalPeriod = undefined;
      this._requestTagKey = undefined;
      this._requestTagValue = undefined;
      this._requests = undefined;
      this._tokens = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._principal = value.principal;
      this._renewalPeriod = value.renewalPeriod;
      this._requestTagKey = value.requestTagKey;
      this._requestTagValue = value.requestTagValue;
      this._requests = value.requests;
      this._tokens = value.tokens;
    }
  }

  // key - computed: true, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // principal - computed: true, optional: true, required: false
  private _principal?: string; 
  public get principal() {
    return this.getStringAttribute('principal');
  }
  public set principal(value: string) {
    this._principal = value;
  }
  public resetPrincipal() {
    this._principal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal;
  }

  // renewal_period - computed: true, optional: false, required: true
  private _renewalPeriod?: string; 
  public get renewalPeriod() {
    return this.getStringAttribute('renewal_period');
  }
  public set renewalPeriod(value: string) {
    this._renewalPeriod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get renewalPeriodInput() {
    return this._renewalPeriod;
  }

  // request_tag_key - computed: true, optional: true, required: false
  private _requestTagKey?: string; 
  public get requestTagKey() {
    return this.getStringAttribute('request_tag_key');
  }
  public set requestTagKey(value: string) {
    this._requestTagKey = value;
  }
  public resetRequestTagKey() {
    this._requestTagKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTagKeyInput() {
    return this._requestTagKey;
  }

  // request_tag_value - computed: true, optional: true, required: false
  private _requestTagValue?: string; 
  public get requestTagValue() {
    return this.getStringAttribute('request_tag_value');
  }
  public set requestTagValue(value: string) {
    this._requestTagValue = value;
  }
  public resetRequestTagValue() {
    this._requestTagValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTagValueInput() {
    return this._requestTagValue;
  }

  // requests - computed: true, optional: true, required: false
  private _requests?: number; 
  public get requests() {
    return this.getNumberAttribute('requests');
  }
  public set requests(value: number) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }

  // tokens - computed: true, optional: true, required: false
  private _tokens?: number; 
  public get tokens() {
    return this.getNumberAttribute('tokens');
  }
  public set tokens(value: number) {
    this._tokens = value;
  }
  public resetTokens() {
    this._tokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokensInput() {
    return this._tokens;
  }
}

export class DataDatabricksAiGatewayMcpServiceConfigRateLimitsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksAiGatewayMcpServiceConfigRateLimits[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference {
    return new DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksAiGatewayMcpServiceConfigSourceConnection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_mcp_service#name DataDatabricksAiGatewayMcpService#name}
  */
  readonly name: string;
}

export function dataDatabricksAiGatewayMcpServiceConfigSourceConnectionToTerraform(struct?: DataDatabricksAiGatewayMcpServiceConfigSourceConnection | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function dataDatabricksAiGatewayMcpServiceConfigSourceConnectionToHclTerraform(struct?: DataDatabricksAiGatewayMcpServiceConfigSourceConnection | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayMcpServiceConfigSourceConnection | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAiGatewayMcpServiceConfigSourceConnection | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // is_deleted - computed: true, optional: false, required: false
  public get isDeleted() {
    return this.getBooleanAttribute('is_deleted');
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
}
export interface DataDatabricksAiGatewayMcpServiceConfigA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_mcp_service#include_tool_selectors DataDatabricksAiGatewayMcpService#include_tool_selectors}
  */
  readonly includeToolSelectors?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_mcp_service#rate_limits DataDatabricksAiGatewayMcpService#rate_limits}
  */
  readonly rateLimits?: DataDatabricksAiGatewayMcpServiceConfigRateLimits[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_mcp_service#source_connection DataDatabricksAiGatewayMcpService#source_connection}
  */
  readonly sourceConnection?: DataDatabricksAiGatewayMcpServiceConfigSourceConnection;
}

export function dataDatabricksAiGatewayMcpServiceConfigAToTerraform(struct?: DataDatabricksAiGatewayMcpServiceConfigA): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    include_tool_selectors: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includeToolSelectors),
    rate_limits: cdktn.listMapper(dataDatabricksAiGatewayMcpServiceConfigRateLimitsToTerraform, false)(struct!.rateLimits),
    source_connection: dataDatabricksAiGatewayMcpServiceConfigSourceConnectionToTerraform(struct!.sourceConnection),
  }
}


export function dataDatabricksAiGatewayMcpServiceConfigAToHclTerraform(struct?: DataDatabricksAiGatewayMcpServiceConfigA): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    include_tool_selectors: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includeToolSelectors),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    rate_limits: {
      value: cdktn.listMapperHcl(dataDatabricksAiGatewayMcpServiceConfigRateLimitsToHclTerraform, false)(struct!.rateLimits),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksAiGatewayMcpServiceConfigRateLimitsList",
    },
    source_connection: {
      value: dataDatabricksAiGatewayMcpServiceConfigSourceConnectionToHclTerraform(struct!.sourceConnection),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayMcpServiceConfigSourceConnection",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAiGatewayMcpServiceConfigAOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayMcpServiceConfigA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeToolSelectors !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeToolSelectors = this._includeToolSelectors;
    }
    if (this._rateLimits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimits = this._rateLimits?.internalValue;
    }
    if (this._sourceConnection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceConnection = this._sourceConnection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAiGatewayMcpServiceConfigA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._includeToolSelectors = undefined;
      this._rateLimits.internalValue = undefined;
      this._sourceConnection.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._includeToolSelectors = value.includeToolSelectors;
      this._rateLimits.internalValue = value.rateLimits;
      this._sourceConnection.internalValue = value.sourceConnection;
    }
  }

  // include_tool_selectors - computed: true, optional: true, required: false
  private _includeToolSelectors?: string[]; 
  public get includeToolSelectors() {
    return this.getListAttribute('include_tool_selectors');
  }
  public set includeToolSelectors(value: string[]) {
    this._includeToolSelectors = value;
  }
  public resetIncludeToolSelectors() {
    this._includeToolSelectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeToolSelectorsInput() {
    return this._includeToolSelectors;
  }

  // rate_limits - computed: true, optional: true, required: false
  private _rateLimits = new DataDatabricksAiGatewayMcpServiceConfigRateLimitsList(this, "rate_limits", false);
  public get rateLimits() {
    return this._rateLimits;
  }
  public putRateLimits(value: DataDatabricksAiGatewayMcpServiceConfigRateLimits[] | cdktn.IResolvable) {
    this._rateLimits.internalValue = value;
  }
  public resetRateLimits() {
    this._rateLimits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitsInput() {
    return this._rateLimits.internalValue;
  }

  // source_connection - computed: true, optional: true, required: false
  private _sourceConnection = new DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference(this, "source_connection");
  public get sourceConnection() {
    return this._sourceConnection;
  }
  public putSourceConnection(value: DataDatabricksAiGatewayMcpServiceConfigSourceConnection) {
    this._sourceConnection.internalValue = value;
  }
  public resetSourceConnection() {
    this._sourceConnection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceConnectionInput() {
    return this._sourceConnection.internalValue;
  }
}
export interface DataDatabricksAiGatewayMcpServiceProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_mcp_service#workspace_id DataDatabricksAiGatewayMcpService#workspace_id}
  */
  readonly workspaceId?: string;
}

export function dataDatabricksAiGatewayMcpServiceProviderConfigToTerraform(struct?: DataDatabricksAiGatewayMcpServiceProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function dataDatabricksAiGatewayMcpServiceProviderConfigToHclTerraform(struct?: DataDatabricksAiGatewayMcpServiceProviderConfig | cdktn.IResolvable): any {
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

export class DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayMcpServiceProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayMcpServiceProviderConfig | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_mcp_service databricks_ai_gateway_mcp_service}
*/
export class DataDatabricksAiGatewayMcpService extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_ai_gateway_mcp_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataDatabricksAiGatewayMcpService resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksAiGatewayMcpService to import
  * @param importFromId The id of the existing DataDatabricksAiGatewayMcpService that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_mcp_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksAiGatewayMcpService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_ai_gateway_mcp_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_mcp_service databricks_ai_gateway_mcp_service} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksAiGatewayMcpServiceConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksAiGatewayMcpServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_ai_gateway_mcp_service',
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
    this._name = config.name;
    this._providerConfig.internalValue = config.providerConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // browse_only - computed: true, optional: false, required: false
  public get browseOnly() {
    return this.getBooleanAttribute('browse_only');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // config - computed: true, optional: false, required: false
  private _config = new DataDatabricksAiGatewayMcpServiceConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // effective_owner - computed: true, optional: false, required: false
  public get effectiveOwner() {
    return this.getStringAttribute('effective_owner');
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // metastore_id - computed: true, optional: false, required: false
  public get metastoreId() {
    return this.getStringAttribute('metastore_id');
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

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // provider_config - computed: false, optional: true, required: false
  private _providerConfig = new DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataDatabricksAiGatewayMcpServiceProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktn.stringToTerraform(this._name),
      provider_config: dataDatabricksAiGatewayMcpServiceProviderConfigToTerraform(this._providerConfig.internalValue),
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
        value: dataDatabricksAiGatewayMcpServiceProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataDatabricksAiGatewayMcpServiceProviderConfig",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
