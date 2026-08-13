/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/ai_gateway_model_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface AiGatewayModelServiceConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/ai_gateway_model_service#comment AiGatewayModelService#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/ai_gateway_model_service#config AiGatewayModelService#config}
  */
  readonly config?: AiGatewayModelServiceConfigA;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/ai_gateway_model_service#model_service_id AiGatewayModelService#model_service_id}
  */
  readonly modelServiceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/ai_gateway_model_service#owner AiGatewayModelService#owner}
  */
  readonly owner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/ai_gateway_model_service#parent AiGatewayModelService#parent}
  */
  readonly parent: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/ai_gateway_model_service#provider_config AiGatewayModelService#provider_config}
  */
  readonly providerConfig?: AiGatewayModelServiceProviderConfig;
}
export interface AiGatewayModelServiceConfigInferenceTable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/ai_gateway_model_service#disabled AiGatewayModelService#disabled}
  */
  readonly disabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/ai_gateway_model_service#parent AiGatewayModelService#parent}
  */
  readonly parent: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/ai_gateway_model_service#table_name_prefix AiGatewayModelService#table_name_prefix}
  */
  readonly tableNamePrefix?: string;
}

export function aiGatewayModelServiceConfigInferenceTableToTerraform(struct?: AiGatewayModelServiceConfigInferenceTable | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    disabled: cdktn.booleanToTerraform(struct!.disabled),
    parent: cdktn.stringToTerraform(struct!.parent),
    table_name_prefix: cdktn.stringToTerraform(struct!.tableNamePrefix),
  }
}


export function aiGatewayModelServiceConfigInferenceTableToHclTerraform(struct?: AiGatewayModelServiceConfigInferenceTable | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    disabled: {
      value: cdktn.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    parent: {
      value: cdktn.stringToHclTerraform(struct!.parent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_name_prefix: {
      value: cdktn.stringToHclTerraform(struct!.tableNamePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiGatewayModelServiceConfigInferenceTableOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiGatewayModelServiceConfigInferenceTable | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._parent !== undefined) {
      hasAnyValues = true;
      internalValueResult.parent = this._parent;
    }
    if (this._tableNamePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableNamePrefix = this._tableNamePrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewayModelServiceConfigInferenceTable | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disabled = undefined;
      this._parent = undefined;
      this._tableNamePrefix = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disabled = value.disabled;
      this._parent = value.parent;
      this._tableNamePrefix = value.tableNamePrefix;
    }
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktn.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktn.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // is_deleted - computed: true, optional: false, required: false
  public get isDeleted() {
    return this.getBooleanAttribute('is_deleted');
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

  // table - computed: true, optional: false, required: false
  public get table() {
    return this.getStringAttribute('table');
  }

  // table_name_prefix - computed: false, optional: true, required: false
  private _tableNamePrefix?: string; 
  public get tableNamePrefix() {
    return this.getStringAttribute('table_name_prefix');
  }
  public set tableNamePrefix(value: string) {
    this._tableNamePrefix = value;
  }
  public resetTableNamePrefix() {
    this._tableNamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNamePrefixInput() {
    return this._tableNamePrefix;
  }
}
export interface AiGatewayModelServiceConfigRateLimits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/ai_gateway_model_service#key AiGatewayModelService#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/ai_gateway_model_service#principal AiGatewayModelService#principal}
  */
  readonly principal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/ai_gateway_model_service#renewal_period AiGatewayModelService#renewal_period}
  */
  readonly renewalPeriod: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/ai_gateway_model_service#request_tag_key AiGatewayModelService#request_tag_key}
  */
  readonly requestTagKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/ai_gateway_model_service#request_tag_value AiGatewayModelService#request_tag_value}
  */
  readonly requestTagValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/ai_gateway_model_service#requests AiGatewayModelService#requests}
  */
  readonly requests?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/ai_gateway_model_service#tokens AiGatewayModelService#tokens}
  */
  readonly tokens?: number;
}

export function aiGatewayModelServiceConfigRateLimitsToTerraform(struct?: AiGatewayModelServiceConfigRateLimits | cdktn.IResolvable): any {
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


export function aiGatewayModelServiceConfigRateLimitsToHclTerraform(struct?: AiGatewayModelServiceConfigRateLimits | cdktn.IResolvable): any {
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

export class AiGatewayModelServiceConfigRateLimitsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AiGatewayModelServiceConfigRateLimits | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AiGatewayModelServiceConfigRateLimits | cdktn.IResolvable | undefined) {
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

  // key - computed: false, optional: false, required: true
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

  // principal - computed: false, optional: true, required: false
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

  // renewal_period - computed: false, optional: false, required: true
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

  // request_tag_key - computed: false, optional: true, required: false
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

  // request_tag_value - computed: false, optional: true, required: false
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

  // requests - computed: false, optional: true, required: false
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

  // tokens - computed: false, optional: true, required: false
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

export class AiGatewayModelServiceConfigRateLimitsList extends cdktn.ComplexList {
  public internalValue? : AiGatewayModelServiceConfigRateLimits[] | cdktn.IResolvable

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
  public get(index: number): AiGatewayModelServiceConfigRateLimitsOutputReference {
    return new AiGatewayModelServiceConfigRateLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/ai_gateway_model_service#model AiGatewayModelService#model}
  */
  readonly model: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/ai_gateway_model_service#native_api_types AiGatewayModelService#native_api_types}
  */
  readonly nativeApiTypes?: string[];
}

export function aiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetToTerraform(struct?: AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    model: cdktn.stringToTerraform(struct!.model),
    native_api_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.nativeApiTypes),
  }
}


export function aiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetToHclTerraform(struct?: AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    model: {
      value: cdktn.stringToHclTerraform(struct!.model),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    native_api_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.nativeApiTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    if (this._nativeApiTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.nativeApiTypes = this._nativeApiTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._model = undefined;
      this._nativeApiTypes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._model = value.model;
      this._nativeApiTypes = value.nativeApiTypes;
    }
  }

  // model - computed: false, optional: false, required: true
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }

  // native_api_types - computed: false, optional: true, required: false
  private _nativeApiTypes?: string[]; 
  public get nativeApiTypes() {
    return this.getListAttribute('native_api_types');
  }
  public set nativeApiTypes(value: string[]) {
    this._nativeApiTypes = value;
  }
  public resetNativeApiTypes() {
    this._nativeApiTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nativeApiTypesInput() {
    return this._nativeApiTypes;
  }
}
export interface AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/ai_gateway_model_service#model_provider_service AiGatewayModelService#model_provider_service}
  */
  readonly modelProviderService: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/ai_gateway_model_service#target AiGatewayModelService#target}
  */
  readonly target: AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget;
}

export function aiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigToTerraform(struct?: AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    model_provider_service: cdktn.stringToTerraform(struct!.modelProviderService),
    target: aiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetToTerraform(struct!.target),
  }
}


export function aiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigToHclTerraform(struct?: AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    model_provider_service: {
      value: cdktn.stringToHclTerraform(struct!.modelProviderService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: aiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._modelProviderService !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelProviderService = this._modelProviderService;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._modelProviderService = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._modelProviderService = value.modelProviderService;
      this._target.internalValue = value.target;
    }
  }

  // model_provider_service - computed: false, optional: false, required: true
  private _modelProviderService?: string; 
  public get modelProviderService() {
    return this.getStringAttribute('model_provider_service');
  }
  public set modelProviderService(value: string) {
    this._modelProviderService = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelProviderServiceInput() {
    return this._modelProviderService;
  }

  // target - computed: false, optional: false, required: true
  private _target = new AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}
export interface AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/ai_gateway_model_service#model AiGatewayModelService#model}
  */
  readonly model: string;
}

export function aiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigToTerraform(struct?: AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    model: cdktn.stringToTerraform(struct!.model),
  }
}


export function aiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigToHclTerraform(struct?: AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    model: {
      value: cdktn.stringToHclTerraform(struct!.model),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._model = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._model = value.model;
    }
  }

  // model - computed: false, optional: false, required: true
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }
}
export interface AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/ai_gateway_model_service#model_serving_endpoint AiGatewayModelService#model_serving_endpoint}
  */
  readonly modelServingEndpoint: string;
}

export function aiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigToTerraform(struct?: AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    model_serving_endpoint: cdktn.stringToTerraform(struct!.modelServingEndpoint),
  }
}


export function aiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigToHclTerraform(struct?: AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    model_serving_endpoint: {
      value: cdktn.stringToHclTerraform(struct!.modelServingEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._modelServingEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelServingEndpoint = this._modelServingEndpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._modelServingEndpoint = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._modelServingEndpoint = value.modelServingEndpoint;
    }
  }

  // model - computed: true, optional: false, required: false
  public get model() {
    return this.getStringAttribute('model');
  }

  // model_serving_endpoint - computed: false, optional: false, required: true
  private _modelServingEndpoint?: string; 
  public get modelServingEndpoint() {
    return this.getStringAttribute('model_serving_endpoint');
  }
  public set modelServingEndpoint(value: string) {
    this._modelServingEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelServingEndpointInput() {
    return this._modelServingEndpoint;
  }
}
export interface AiGatewayModelServiceConfigRoutingDestinations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/ai_gateway_model_service#destination_type AiGatewayModelService#destination_type}
  */
  readonly destinationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/ai_gateway_model_service#external_model_config AiGatewayModelService#external_model_config}
  */
  readonly externalModelConfig?: AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/ai_gateway_model_service#name AiGatewayModelService#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/ai_gateway_model_service#pay_per_token_config AiGatewayModelService#pay_per_token_config}
  */
  readonly payPerTokenConfig?: AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/ai_gateway_model_service#provisioned_throughput_config AiGatewayModelService#provisioned_throughput_config}
  */
  readonly provisionedThroughputConfig?: AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/ai_gateway_model_service#traffic_percentage AiGatewayModelService#traffic_percentage}
  */
  readonly trafficPercentage?: number;
}

export function aiGatewayModelServiceConfigRoutingDestinationsToTerraform(struct?: AiGatewayModelServiceConfigRoutingDestinations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination_type: cdktn.stringToTerraform(struct!.destinationType),
    external_model_config: aiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigToTerraform(struct!.externalModelConfig),
    name: cdktn.stringToTerraform(struct!.name),
    pay_per_token_config: aiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigToTerraform(struct!.payPerTokenConfig),
    provisioned_throughput_config: aiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigToTerraform(struct!.provisionedThroughputConfig),
    traffic_percentage: cdktn.numberToTerraform(struct!.trafficPercentage),
  }
}


export function aiGatewayModelServiceConfigRoutingDestinationsToHclTerraform(struct?: AiGatewayModelServiceConfigRoutingDestinations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination_type: {
      value: cdktn.stringToHclTerraform(struct!.destinationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_model_config: {
      value: aiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigToHclTerraform(struct!.externalModelConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pay_per_token_config: {
      value: aiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigToHclTerraform(struct!.payPerTokenConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig",
    },
    provisioned_throughput_config: {
      value: aiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigToHclTerraform(struct!.provisionedThroughputConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig",
    },
    traffic_percentage: {
      value: cdktn.numberToHclTerraform(struct!.trafficPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiGatewayModelServiceConfigRoutingDestinationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AiGatewayModelServiceConfigRoutingDestinations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationType = this._destinationType;
    }
    if (this._externalModelConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalModelConfig = this._externalModelConfig?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._payPerTokenConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.payPerTokenConfig = this._payPerTokenConfig?.internalValue;
    }
    if (this._provisionedThroughputConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionedThroughputConfig = this._provisionedThroughputConfig?.internalValue;
    }
    if (this._trafficPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficPercentage = this._trafficPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewayModelServiceConfigRoutingDestinations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationType = undefined;
      this._externalModelConfig.internalValue = undefined;
      this._name = undefined;
      this._payPerTokenConfig.internalValue = undefined;
      this._provisionedThroughputConfig.internalValue = undefined;
      this._trafficPercentage = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationType = value.destinationType;
      this._externalModelConfig.internalValue = value.externalModelConfig;
      this._name = value.name;
      this._payPerTokenConfig.internalValue = value.payPerTokenConfig;
      this._provisionedThroughputConfig.internalValue = value.provisionedThroughputConfig;
      this._trafficPercentage = value.trafficPercentage;
    }
  }

  // destination_type - computed: false, optional: false, required: true
  private _destinationType?: string; 
  public get destinationType() {
    return this.getStringAttribute('destination_type');
  }
  public set destinationType(value: string) {
    this._destinationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationTypeInput() {
    return this._destinationType;
  }

  // external_model_config - computed: false, optional: true, required: false
  private _externalModelConfig = new AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference(this, "external_model_config");
  public get externalModelConfig() {
    return this._externalModelConfig;
  }
  public putExternalModelConfig(value: AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig) {
    this._externalModelConfig.internalValue = value;
  }
  public resetExternalModelConfig() {
    this._externalModelConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalModelConfigInput() {
    return this._externalModelConfig.internalValue;
  }

  // is_deleted - computed: true, optional: false, required: false
  public get isDeleted() {
    return this.getBooleanAttribute('is_deleted');
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

  // pay_per_token_config - computed: false, optional: true, required: false
  private _payPerTokenConfig = new AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference(this, "pay_per_token_config");
  public get payPerTokenConfig() {
    return this._payPerTokenConfig;
  }
  public putPayPerTokenConfig(value: AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig) {
    this._payPerTokenConfig.internalValue = value;
  }
  public resetPayPerTokenConfig() {
    this._payPerTokenConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payPerTokenConfigInput() {
    return this._payPerTokenConfig.internalValue;
  }

  // provisioned_throughput_config - computed: false, optional: true, required: false
  private _provisionedThroughputConfig = new AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference(this, "provisioned_throughput_config");
  public get provisionedThroughputConfig() {
    return this._provisionedThroughputConfig;
  }
  public putProvisionedThroughputConfig(value: AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig) {
    this._provisionedThroughputConfig.internalValue = value;
  }
  public resetProvisionedThroughputConfig() {
    this._provisionedThroughputConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedThroughputConfigInput() {
    return this._provisionedThroughputConfig.internalValue;
  }

  // traffic_percentage - computed: false, optional: true, required: false
  private _trafficPercentage?: number; 
  public get trafficPercentage() {
    return this.getNumberAttribute('traffic_percentage');
  }
  public set trafficPercentage(value: number) {
    this._trafficPercentage = value;
  }
  public resetTrafficPercentage() {
    this._trafficPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficPercentageInput() {
    return this._trafficPercentage;
  }
}

export class AiGatewayModelServiceConfigRoutingDestinationsList extends cdktn.ComplexList {
  public internalValue? : AiGatewayModelServiceConfigRoutingDestinations[] | cdktn.IResolvable

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
  public get(index: number): AiGatewayModelServiceConfigRoutingDestinationsOutputReference {
    return new AiGatewayModelServiceConfigRoutingDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/ai_gateway_model_service#model AiGatewayModelService#model}
  */
  readonly model: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/ai_gateway_model_service#native_api_types AiGatewayModelService#native_api_types}
  */
  readonly nativeApiTypes?: string[];
}

export function aiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetToTerraform(struct?: AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    model: cdktn.stringToTerraform(struct!.model),
    native_api_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.nativeApiTypes),
  }
}


export function aiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetToHclTerraform(struct?: AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    model: {
      value: cdktn.stringToHclTerraform(struct!.model),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    native_api_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.nativeApiTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    if (this._nativeApiTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.nativeApiTypes = this._nativeApiTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._model = undefined;
      this._nativeApiTypes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._model = value.model;
      this._nativeApiTypes = value.nativeApiTypes;
    }
  }

  // model - computed: false, optional: false, required: true
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }

  // native_api_types - computed: false, optional: true, required: false
  private _nativeApiTypes?: string[]; 
  public get nativeApiTypes() {
    return this.getListAttribute('native_api_types');
  }
  public set nativeApiTypes(value: string[]) {
    this._nativeApiTypes = value;
  }
  public resetNativeApiTypes() {
    this._nativeApiTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nativeApiTypesInput() {
    return this._nativeApiTypes;
  }
}
export interface AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/ai_gateway_model_service#model_provider_service AiGatewayModelService#model_provider_service}
  */
  readonly modelProviderService: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/ai_gateway_model_service#target AiGatewayModelService#target}
  */
  readonly target: AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget;
}

export function aiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigToTerraform(struct?: AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    model_provider_service: cdktn.stringToTerraform(struct!.modelProviderService),
    target: aiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetToTerraform(struct!.target),
  }
}


export function aiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigToHclTerraform(struct?: AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    model_provider_service: {
      value: cdktn.stringToHclTerraform(struct!.modelProviderService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: aiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._modelProviderService !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelProviderService = this._modelProviderService;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._modelProviderService = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._modelProviderService = value.modelProviderService;
      this._target.internalValue = value.target;
    }
  }

  // model_provider_service - computed: false, optional: false, required: true
  private _modelProviderService?: string; 
  public get modelProviderService() {
    return this.getStringAttribute('model_provider_service');
  }
  public set modelProviderService(value: string) {
    this._modelProviderService = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelProviderServiceInput() {
    return this._modelProviderService;
  }

  // target - computed: false, optional: false, required: true
  private _target = new AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}
export interface AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/ai_gateway_model_service#model AiGatewayModelService#model}
  */
  readonly model: string;
}

export function aiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigToTerraform(struct?: AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    model: cdktn.stringToTerraform(struct!.model),
  }
}


export function aiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigToHclTerraform(struct?: AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    model: {
      value: cdktn.stringToHclTerraform(struct!.model),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._model = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._model = value.model;
    }
  }

  // model - computed: false, optional: false, required: true
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }
}
export interface AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/ai_gateway_model_service#model_serving_endpoint AiGatewayModelService#model_serving_endpoint}
  */
  readonly modelServingEndpoint: string;
}

export function aiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigToTerraform(struct?: AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    model_serving_endpoint: cdktn.stringToTerraform(struct!.modelServingEndpoint),
  }
}


export function aiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigToHclTerraform(struct?: AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    model_serving_endpoint: {
      value: cdktn.stringToHclTerraform(struct!.modelServingEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._modelServingEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelServingEndpoint = this._modelServingEndpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._modelServingEndpoint = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._modelServingEndpoint = value.modelServingEndpoint;
    }
  }

  // model - computed: true, optional: false, required: false
  public get model() {
    return this.getStringAttribute('model');
  }

  // model_serving_endpoint - computed: false, optional: false, required: true
  private _modelServingEndpoint?: string; 
  public get modelServingEndpoint() {
    return this.getStringAttribute('model_serving_endpoint');
  }
  public set modelServingEndpoint(value: string) {
    this._modelServingEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelServingEndpointInput() {
    return this._modelServingEndpoint;
  }
}
export interface AiGatewayModelServiceConfigRoutingFallbackDestinations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/ai_gateway_model_service#destination_type AiGatewayModelService#destination_type}
  */
  readonly destinationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/ai_gateway_model_service#external_model_config AiGatewayModelService#external_model_config}
  */
  readonly externalModelConfig?: AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/ai_gateway_model_service#name AiGatewayModelService#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/ai_gateway_model_service#pay_per_token_config AiGatewayModelService#pay_per_token_config}
  */
  readonly payPerTokenConfig?: AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/ai_gateway_model_service#provisioned_throughput_config AiGatewayModelService#provisioned_throughput_config}
  */
  readonly provisionedThroughputConfig?: AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/ai_gateway_model_service#traffic_percentage AiGatewayModelService#traffic_percentage}
  */
  readonly trafficPercentage?: number;
}

export function aiGatewayModelServiceConfigRoutingFallbackDestinationsToTerraform(struct?: AiGatewayModelServiceConfigRoutingFallbackDestinations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination_type: cdktn.stringToTerraform(struct!.destinationType),
    external_model_config: aiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigToTerraform(struct!.externalModelConfig),
    name: cdktn.stringToTerraform(struct!.name),
    pay_per_token_config: aiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigToTerraform(struct!.payPerTokenConfig),
    provisioned_throughput_config: aiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigToTerraform(struct!.provisionedThroughputConfig),
    traffic_percentage: cdktn.numberToTerraform(struct!.trafficPercentage),
  }
}


export function aiGatewayModelServiceConfigRoutingFallbackDestinationsToHclTerraform(struct?: AiGatewayModelServiceConfigRoutingFallbackDestinations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination_type: {
      value: cdktn.stringToHclTerraform(struct!.destinationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_model_config: {
      value: aiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigToHclTerraform(struct!.externalModelConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pay_per_token_config: {
      value: aiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigToHclTerraform(struct!.payPerTokenConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig",
    },
    provisioned_throughput_config: {
      value: aiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigToHclTerraform(struct!.provisionedThroughputConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig",
    },
    traffic_percentage: {
      value: cdktn.numberToHclTerraform(struct!.trafficPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AiGatewayModelServiceConfigRoutingFallbackDestinations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationType = this._destinationType;
    }
    if (this._externalModelConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalModelConfig = this._externalModelConfig?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._payPerTokenConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.payPerTokenConfig = this._payPerTokenConfig?.internalValue;
    }
    if (this._provisionedThroughputConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionedThroughputConfig = this._provisionedThroughputConfig?.internalValue;
    }
    if (this._trafficPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficPercentage = this._trafficPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewayModelServiceConfigRoutingFallbackDestinations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationType = undefined;
      this._externalModelConfig.internalValue = undefined;
      this._name = undefined;
      this._payPerTokenConfig.internalValue = undefined;
      this._provisionedThroughputConfig.internalValue = undefined;
      this._trafficPercentage = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationType = value.destinationType;
      this._externalModelConfig.internalValue = value.externalModelConfig;
      this._name = value.name;
      this._payPerTokenConfig.internalValue = value.payPerTokenConfig;
      this._provisionedThroughputConfig.internalValue = value.provisionedThroughputConfig;
      this._trafficPercentage = value.trafficPercentage;
    }
  }

  // destination_type - computed: false, optional: false, required: true
  private _destinationType?: string; 
  public get destinationType() {
    return this.getStringAttribute('destination_type');
  }
  public set destinationType(value: string) {
    this._destinationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationTypeInput() {
    return this._destinationType;
  }

  // external_model_config - computed: false, optional: true, required: false
  private _externalModelConfig = new AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference(this, "external_model_config");
  public get externalModelConfig() {
    return this._externalModelConfig;
  }
  public putExternalModelConfig(value: AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig) {
    this._externalModelConfig.internalValue = value;
  }
  public resetExternalModelConfig() {
    this._externalModelConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalModelConfigInput() {
    return this._externalModelConfig.internalValue;
  }

  // is_deleted - computed: true, optional: false, required: false
  public get isDeleted() {
    return this.getBooleanAttribute('is_deleted');
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

  // pay_per_token_config - computed: false, optional: true, required: false
  private _payPerTokenConfig = new AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference(this, "pay_per_token_config");
  public get payPerTokenConfig() {
    return this._payPerTokenConfig;
  }
  public putPayPerTokenConfig(value: AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig) {
    this._payPerTokenConfig.internalValue = value;
  }
  public resetPayPerTokenConfig() {
    this._payPerTokenConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payPerTokenConfigInput() {
    return this._payPerTokenConfig.internalValue;
  }

  // provisioned_throughput_config - computed: false, optional: true, required: false
  private _provisionedThroughputConfig = new AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference(this, "provisioned_throughput_config");
  public get provisionedThroughputConfig() {
    return this._provisionedThroughputConfig;
  }
  public putProvisionedThroughputConfig(value: AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig) {
    this._provisionedThroughputConfig.internalValue = value;
  }
  public resetProvisionedThroughputConfig() {
    this._provisionedThroughputConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedThroughputConfigInput() {
    return this._provisionedThroughputConfig.internalValue;
  }

  // traffic_percentage - computed: false, optional: true, required: false
  private _trafficPercentage?: number; 
  public get trafficPercentage() {
    return this.getNumberAttribute('traffic_percentage');
  }
  public set trafficPercentage(value: number) {
    this._trafficPercentage = value;
  }
  public resetTrafficPercentage() {
    this._trafficPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficPercentageInput() {
    return this._trafficPercentage;
  }
}

export class AiGatewayModelServiceConfigRoutingFallbackDestinationsList extends cdktn.ComplexList {
  public internalValue? : AiGatewayModelServiceConfigRoutingFallbackDestinations[] | cdktn.IResolvable

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
  public get(index: number): AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference {
    return new AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AiGatewayModelServiceConfigRoutingFallback {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/ai_gateway_model_service#destinations AiGatewayModelService#destinations}
  */
  readonly destinations?: AiGatewayModelServiceConfigRoutingFallbackDestinations[] | cdktn.IResolvable;
}

export function aiGatewayModelServiceConfigRoutingFallbackToTerraform(struct?: AiGatewayModelServiceConfigRoutingFallback | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destinations: cdktn.listMapper(aiGatewayModelServiceConfigRoutingFallbackDestinationsToTerraform, false)(struct!.destinations),
  }
}


export function aiGatewayModelServiceConfigRoutingFallbackToHclTerraform(struct?: AiGatewayModelServiceConfigRoutingFallback | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destinations: {
      value: cdktn.listMapperHcl(aiGatewayModelServiceConfigRoutingFallbackDestinationsToHclTerraform, false)(struct!.destinations),
      isBlock: true,
      type: "list",
      storageClassType: "AiGatewayModelServiceConfigRoutingFallbackDestinationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiGatewayModelServiceConfigRoutingFallbackOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiGatewayModelServiceConfigRoutingFallback | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinations = this._destinations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewayModelServiceConfigRoutingFallback | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinations.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinations.internalValue = value.destinations;
    }
  }

  // destinations - computed: false, optional: true, required: false
  private _destinations = new AiGatewayModelServiceConfigRoutingFallbackDestinationsList(this, "destinations", false);
  public get destinations() {
    return this._destinations;
  }
  public putDestinations(value: AiGatewayModelServiceConfigRoutingFallbackDestinations[] | cdktn.IResolvable) {
    this._destinations.internalValue = value;
  }
  public resetDestinations() {
    this._destinations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationsInput() {
    return this._destinations.internalValue;
  }
}
export interface AiGatewayModelServiceConfigRoutingTrafficSplitting {
}

export function aiGatewayModelServiceConfigRoutingTrafficSplittingToTerraform(struct?: AiGatewayModelServiceConfigRoutingTrafficSplitting | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function aiGatewayModelServiceConfigRoutingTrafficSplittingToHclTerraform(struct?: AiGatewayModelServiceConfigRoutingTrafficSplitting | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiGatewayModelServiceConfigRoutingTrafficSplitting | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewayModelServiceConfigRoutingTrafficSplitting | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface AiGatewayModelServiceConfigRouting {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/ai_gateway_model_service#destinations AiGatewayModelService#destinations}
  */
  readonly destinations?: AiGatewayModelServiceConfigRoutingDestinations[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/ai_gateway_model_service#fallback AiGatewayModelService#fallback}
  */
  readonly fallback?: AiGatewayModelServiceConfigRoutingFallback;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/ai_gateway_model_service#first_token_timeout AiGatewayModelService#first_token_timeout}
  */
  readonly firstTokenTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/ai_gateway_model_service#traffic_splitting AiGatewayModelService#traffic_splitting}
  */
  readonly trafficSplitting?: AiGatewayModelServiceConfigRoutingTrafficSplitting;
}

export function aiGatewayModelServiceConfigRoutingToTerraform(struct?: AiGatewayModelServiceConfigRouting | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destinations: cdktn.listMapper(aiGatewayModelServiceConfigRoutingDestinationsToTerraform, false)(struct!.destinations),
    fallback: aiGatewayModelServiceConfigRoutingFallbackToTerraform(struct!.fallback),
    first_token_timeout: cdktn.stringToTerraform(struct!.firstTokenTimeout),
    traffic_splitting: aiGatewayModelServiceConfigRoutingTrafficSplittingToTerraform(struct!.trafficSplitting),
  }
}


export function aiGatewayModelServiceConfigRoutingToHclTerraform(struct?: AiGatewayModelServiceConfigRouting | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destinations: {
      value: cdktn.listMapperHcl(aiGatewayModelServiceConfigRoutingDestinationsToHclTerraform, false)(struct!.destinations),
      isBlock: true,
      type: "list",
      storageClassType: "AiGatewayModelServiceConfigRoutingDestinationsList",
    },
    fallback: {
      value: aiGatewayModelServiceConfigRoutingFallbackToHclTerraform(struct!.fallback),
      isBlock: true,
      type: "struct",
      storageClassType: "AiGatewayModelServiceConfigRoutingFallback",
    },
    first_token_timeout: {
      value: cdktn.stringToHclTerraform(struct!.firstTokenTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    traffic_splitting: {
      value: aiGatewayModelServiceConfigRoutingTrafficSplittingToHclTerraform(struct!.trafficSplitting),
      isBlock: true,
      type: "struct",
      storageClassType: "AiGatewayModelServiceConfigRoutingTrafficSplitting",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiGatewayModelServiceConfigRoutingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiGatewayModelServiceConfigRouting | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinations = this._destinations?.internalValue;
    }
    if (this._fallback?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallback = this._fallback?.internalValue;
    }
    if (this._firstTokenTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstTokenTimeout = this._firstTokenTimeout;
    }
    if (this._trafficSplitting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficSplitting = this._trafficSplitting?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewayModelServiceConfigRouting | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinations.internalValue = undefined;
      this._fallback.internalValue = undefined;
      this._firstTokenTimeout = undefined;
      this._trafficSplitting.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinations.internalValue = value.destinations;
      this._fallback.internalValue = value.fallback;
      this._firstTokenTimeout = value.firstTokenTimeout;
      this._trafficSplitting.internalValue = value.trafficSplitting;
    }
  }

  // destinations - computed: false, optional: true, required: false
  private _destinations = new AiGatewayModelServiceConfigRoutingDestinationsList(this, "destinations", false);
  public get destinations() {
    return this._destinations;
  }
  public putDestinations(value: AiGatewayModelServiceConfigRoutingDestinations[] | cdktn.IResolvable) {
    this._destinations.internalValue = value;
  }
  public resetDestinations() {
    this._destinations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationsInput() {
    return this._destinations.internalValue;
  }

  // fallback - computed: false, optional: true, required: false
  private _fallback = new AiGatewayModelServiceConfigRoutingFallbackOutputReference(this, "fallback");
  public get fallback() {
    return this._fallback;
  }
  public putFallback(value: AiGatewayModelServiceConfigRoutingFallback) {
    this._fallback.internalValue = value;
  }
  public resetFallback() {
    this._fallback.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackInput() {
    return this._fallback.internalValue;
  }

  // first_token_timeout - computed: false, optional: true, required: false
  private _firstTokenTimeout?: string; 
  public get firstTokenTimeout() {
    return this.getStringAttribute('first_token_timeout');
  }
  public set firstTokenTimeout(value: string) {
    this._firstTokenTimeout = value;
  }
  public resetFirstTokenTimeout() {
    this._firstTokenTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstTokenTimeoutInput() {
    return this._firstTokenTimeout;
  }

  // traffic_splitting - computed: false, optional: true, required: false
  private _trafficSplitting = new AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference(this, "traffic_splitting");
  public get trafficSplitting() {
    return this._trafficSplitting;
  }
  public putTrafficSplitting(value: AiGatewayModelServiceConfigRoutingTrafficSplitting) {
    this._trafficSplitting.internalValue = value;
  }
  public resetTrafficSplitting() {
    this._trafficSplitting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficSplittingInput() {
    return this._trafficSplitting.internalValue;
  }
}
export interface AiGatewayModelServiceConfigA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/ai_gateway_model_service#inference_table AiGatewayModelService#inference_table}
  */
  readonly inferenceTable?: AiGatewayModelServiceConfigInferenceTable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/ai_gateway_model_service#rate_limits AiGatewayModelService#rate_limits}
  */
  readonly rateLimits?: AiGatewayModelServiceConfigRateLimits[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/ai_gateway_model_service#routing AiGatewayModelService#routing}
  */
  readonly routing?: AiGatewayModelServiceConfigRouting;
}

export function aiGatewayModelServiceConfigAToTerraform(struct?: AiGatewayModelServiceConfigA | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    inference_table: aiGatewayModelServiceConfigInferenceTableToTerraform(struct!.inferenceTable),
    rate_limits: cdktn.listMapper(aiGatewayModelServiceConfigRateLimitsToTerraform, false)(struct!.rateLimits),
    routing: aiGatewayModelServiceConfigRoutingToTerraform(struct!.routing),
  }
}


export function aiGatewayModelServiceConfigAToHclTerraform(struct?: AiGatewayModelServiceConfigA | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    inference_table: {
      value: aiGatewayModelServiceConfigInferenceTableToHclTerraform(struct!.inferenceTable),
      isBlock: true,
      type: "struct",
      storageClassType: "AiGatewayModelServiceConfigInferenceTable",
    },
    rate_limits: {
      value: cdktn.listMapperHcl(aiGatewayModelServiceConfigRateLimitsToHclTerraform, false)(struct!.rateLimits),
      isBlock: true,
      type: "list",
      storageClassType: "AiGatewayModelServiceConfigRateLimitsList",
    },
    routing: {
      value: aiGatewayModelServiceConfigRoutingToHclTerraform(struct!.routing),
      isBlock: true,
      type: "struct",
      storageClassType: "AiGatewayModelServiceConfigRouting",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiGatewayModelServiceConfigAOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiGatewayModelServiceConfigA | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inferenceTable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inferenceTable = this._inferenceTable?.internalValue;
    }
    if (this._rateLimits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimits = this._rateLimits?.internalValue;
    }
    if (this._routing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routing = this._routing?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewayModelServiceConfigA | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inferenceTable.internalValue = undefined;
      this._rateLimits.internalValue = undefined;
      this._routing.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inferenceTable.internalValue = value.inferenceTable;
      this._rateLimits.internalValue = value.rateLimits;
      this._routing.internalValue = value.routing;
    }
  }

  // inference_table - computed: false, optional: true, required: false
  private _inferenceTable = new AiGatewayModelServiceConfigInferenceTableOutputReference(this, "inference_table");
  public get inferenceTable() {
    return this._inferenceTable;
  }
  public putInferenceTable(value: AiGatewayModelServiceConfigInferenceTable) {
    this._inferenceTable.internalValue = value;
  }
  public resetInferenceTable() {
    this._inferenceTable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inferenceTableInput() {
    return this._inferenceTable.internalValue;
  }

  // rate_limits - computed: false, optional: true, required: false
  private _rateLimits = new AiGatewayModelServiceConfigRateLimitsList(this, "rate_limits", false);
  public get rateLimits() {
    return this._rateLimits;
  }
  public putRateLimits(value: AiGatewayModelServiceConfigRateLimits[] | cdktn.IResolvable) {
    this._rateLimits.internalValue = value;
  }
  public resetRateLimits() {
    this._rateLimits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitsInput() {
    return this._rateLimits.internalValue;
  }

  // routing - computed: false, optional: true, required: false
  private _routing = new AiGatewayModelServiceConfigRoutingOutputReference(this, "routing");
  public get routing() {
    return this._routing;
  }
  public putRouting(value: AiGatewayModelServiceConfigRouting) {
    this._routing.internalValue = value;
  }
  public resetRouting() {
    this._routing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInput() {
    return this._routing.internalValue;
  }
}
export interface AiGatewayModelServiceProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/ai_gateway_model_service#workspace_id AiGatewayModelService#workspace_id}
  */
  readonly workspaceId?: string;
}

export function aiGatewayModelServiceProviderConfigToTerraform(struct?: AiGatewayModelServiceProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function aiGatewayModelServiceProviderConfigToHclTerraform(struct?: AiGatewayModelServiceProviderConfig | cdktn.IResolvable): any {
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

export class AiGatewayModelServiceProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiGatewayModelServiceProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AiGatewayModelServiceProviderConfig | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/ai_gateway_model_service databricks_ai_gateway_model_service}
*/
export class AiGatewayModelService extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_ai_gateway_model_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AiGatewayModelService resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AiGatewayModelService to import
  * @param importFromId The id of the existing AiGatewayModelService that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/ai_gateway_model_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AiGatewayModelService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_ai_gateway_model_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/ai_gateway_model_service databricks_ai_gateway_model_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AiGatewayModelServiceConfig
  */
  public constructor(scope: Construct, id: string, config: AiGatewayModelServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_ai_gateway_model_service',
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
    this._comment = config.comment;
    this._config.internalValue = config.config;
    this._modelServiceId = config.modelServiceId;
    this._owner = config.owner;
    this._parent = config.parent;
    this._providerConfig.internalValue = config.providerConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // browse_only - computed: true, optional: false, required: false
  public get browseOnly() {
    return this.getBooleanAttribute('browse_only');
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // config - computed: false, optional: true, required: false
  private _config = new AiGatewayModelServiceConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: AiGatewayModelServiceConfigA) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
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

  // model_service_id - computed: false, optional: false, required: true
  private _modelServiceId?: string; 
  public get modelServiceId() {
    return this.getStringAttribute('model_service_id');
  }
  public set modelServiceId(value: string) {
    this._modelServiceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelServiceIdInput() {
    return this._modelServiceId;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // owner - computed: true, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
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
  private _providerConfig = new AiGatewayModelServiceProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: AiGatewayModelServiceProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // supported_api_types - computed: true, optional: false, required: false
  public get supportedApiTypes() {
    return cdktn.Fn.tolist(this.getListAttribute('supported_api_types'));
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
      comment: cdktn.stringToTerraform(this._comment),
      config: aiGatewayModelServiceConfigAToTerraform(this._config.internalValue),
      model_service_id: cdktn.stringToTerraform(this._modelServiceId),
      owner: cdktn.stringToTerraform(this._owner),
      parent: cdktn.stringToTerraform(this._parent),
      provider_config: aiGatewayModelServiceProviderConfigToTerraform(this._providerConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktn.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config: {
        value: aiGatewayModelServiceConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AiGatewayModelServiceConfigA",
      },
      model_service_id: {
        value: cdktn.stringToHclTerraform(this._modelServiceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner: {
        value: cdktn.stringToHclTerraform(this._owner),
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
        value: aiGatewayModelServiceProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AiGatewayModelServiceProviderConfig",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
