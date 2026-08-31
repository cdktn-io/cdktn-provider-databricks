/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_mcp_services
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataDatabricksAiGatewayMcpServicesConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_mcp_services#page_size DataDatabricksAiGatewayMcpServices#page_size}
  */
  readonly pageSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_mcp_services#parent DataDatabricksAiGatewayMcpServices#parent}
  */
  readonly parent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_mcp_services#provider_config DataDatabricksAiGatewayMcpServices#provider_config}
  */
  readonly providerConfig?: DataDatabricksAiGatewayMcpServicesProviderConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_mcp_services#view DataDatabricksAiGatewayMcpServices#view}
  */
  readonly view?: string;
}
export interface DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_mcp_services#key DataDatabricksAiGatewayMcpServices#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_mcp_services#principal DataDatabricksAiGatewayMcpServices#principal}
  */
  readonly principal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_mcp_services#renewal_period DataDatabricksAiGatewayMcpServices#renewal_period}
  */
  readonly renewalPeriod: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_mcp_services#request_tag_key DataDatabricksAiGatewayMcpServices#request_tag_key}
  */
  readonly requestTagKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_mcp_services#request_tag_value DataDatabricksAiGatewayMcpServices#request_tag_value}
  */
  readonly requestTagValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_mcp_services#requests DataDatabricksAiGatewayMcpServices#requests}
  */
  readonly requests?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_mcp_services#tokens DataDatabricksAiGatewayMcpServices#tokens}
  */
  readonly tokens?: number;
}

export function dataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsToTerraform(struct?: DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits | cdktn.IResolvable): any {
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


export function dataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsToHclTerraform(struct?: DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits | cdktn.IResolvable): any {
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

export class DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits | cdktn.IResolvable | undefined) {
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

export class DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference {
    return new DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_mcp_services#name DataDatabricksAiGatewayMcpServices#name}
  */
  readonly name: string;
}

export function dataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionToTerraform(struct?: DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnection | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function dataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionToHclTerraform(struct?: DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnection | cdktn.IResolvable): any {
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

export class DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnection | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnection | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAiGatewayMcpServicesMcpServicesConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_mcp_services#include_tool_selectors DataDatabricksAiGatewayMcpServices#include_tool_selectors}
  */
  readonly includeToolSelectors?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_mcp_services#rate_limits DataDatabricksAiGatewayMcpServices#rate_limits}
  */
  readonly rateLimits?: DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_mcp_services#source_connection DataDatabricksAiGatewayMcpServices#source_connection}
  */
  readonly sourceConnection?: DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnection;
}

export function dataDatabricksAiGatewayMcpServicesMcpServicesConfigToTerraform(struct?: DataDatabricksAiGatewayMcpServicesMcpServicesConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    include_tool_selectors: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includeToolSelectors),
    rate_limits: cdktn.listMapper(dataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsToTerraform, false)(struct!.rateLimits),
    source_connection: dataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionToTerraform(struct!.sourceConnection),
  }
}


export function dataDatabricksAiGatewayMcpServicesMcpServicesConfigToHclTerraform(struct?: DataDatabricksAiGatewayMcpServicesMcpServicesConfig): any {
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
      value: cdktn.listMapperHcl(dataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsToHclTerraform, false)(struct!.rateLimits),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsList",
    },
    source_connection: {
      value: dataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionToHclTerraform(struct!.sourceConnection),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnection",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayMcpServicesMcpServicesConfig | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayMcpServicesMcpServicesConfig | undefined) {
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
  private _rateLimits = new DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsList(this, "rate_limits", false);
  public get rateLimits() {
    return this._rateLimits;
  }
  public putRateLimits(value: DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits[] | cdktn.IResolvable) {
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
  private _sourceConnection = new DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference(this, "source_connection");
  public get sourceConnection() {
    return this._sourceConnection;
  }
  public putSourceConnection(value: DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnection) {
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
export interface DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_mcp_services#workspace_id DataDatabricksAiGatewayMcpServices#workspace_id}
  */
  readonly workspaceId?: string;
}

export function dataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigToTerraform(struct?: DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function dataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigToHclTerraform(struct?: DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfig | cdktn.IResolvable): any {
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

export class DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfig | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAiGatewayMcpServicesMcpServices {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_mcp_services#name DataDatabricksAiGatewayMcpServices#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_mcp_services#provider_config DataDatabricksAiGatewayMcpServices#provider_config}
  */
  readonly providerConfig?: DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfig;
}

export function dataDatabricksAiGatewayMcpServicesMcpServicesToTerraform(struct?: DataDatabricksAiGatewayMcpServicesMcpServices): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    provider_config: dataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigToTerraform(struct!.providerConfig),
  }
}


export function dataDatabricksAiGatewayMcpServicesMcpServicesToHclTerraform(struct?: DataDatabricksAiGatewayMcpServicesMcpServices): any {
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
      value: dataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigToHclTerraform(struct!.providerConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksAiGatewayMcpServicesMcpServices | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayMcpServicesMcpServices | undefined) {
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

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // config - computed: true, optional: false, required: false
  private _config = new DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference(this, "config");
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
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // provider_config - computed: true, optional: true, required: false
  private _providerConfig = new DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfig) {
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
}

export class DataDatabricksAiGatewayMcpServicesMcpServicesList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksAiGatewayMcpServicesMcpServices[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference {
    return new DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksAiGatewayMcpServicesProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_mcp_services#workspace_id DataDatabricksAiGatewayMcpServices#workspace_id}
  */
  readonly workspaceId?: string;
}

export function dataDatabricksAiGatewayMcpServicesProviderConfigToTerraform(struct?: DataDatabricksAiGatewayMcpServicesProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function dataDatabricksAiGatewayMcpServicesProviderConfigToHclTerraform(struct?: DataDatabricksAiGatewayMcpServicesProviderConfig | cdktn.IResolvable): any {
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

export class DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayMcpServicesProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayMcpServicesProviderConfig | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_mcp_services databricks_ai_gateway_mcp_services}
*/
export class DataDatabricksAiGatewayMcpServices extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_ai_gateway_mcp_services";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataDatabricksAiGatewayMcpServices resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksAiGatewayMcpServices to import
  * @param importFromId The id of the existing DataDatabricksAiGatewayMcpServices that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_mcp_services#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksAiGatewayMcpServices to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_ai_gateway_mcp_services", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_mcp_services databricks_ai_gateway_mcp_services} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksAiGatewayMcpServicesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksAiGatewayMcpServicesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_ai_gateway_mcp_services',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.130.0',
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
    this._pageSize = config.pageSize;
    this._parent = config.parent;
    this._providerConfig.internalValue = config.providerConfig;
    this._view = config.view;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // mcp_services - computed: true, optional: false, required: false
  private _mcpServices = new DataDatabricksAiGatewayMcpServicesMcpServicesList(this, "mcp_services", false);
  public get mcpServices() {
    return this._mcpServices;
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

  // parent - computed: false, optional: true, required: false
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  public resetParent() {
    this._parent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // provider_config - computed: false, optional: true, required: false
  private _providerConfig = new DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataDatabricksAiGatewayMcpServicesProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
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
      page_size: cdktn.numberToTerraform(this._pageSize),
      parent: cdktn.stringToTerraform(this._parent),
      provider_config: dataDatabricksAiGatewayMcpServicesProviderConfigToTerraform(this._providerConfig.internalValue),
      view: cdktn.stringToTerraform(this._view),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      page_size: {
        value: cdktn.numberToHclTerraform(this._pageSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      parent: {
        value: cdktn.stringToHclTerraform(this._parent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_config: {
        value: dataDatabricksAiGatewayMcpServicesProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataDatabricksAiGatewayMcpServicesProviderConfig",
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
