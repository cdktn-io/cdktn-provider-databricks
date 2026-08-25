/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataDatabricksAiGatewayModelServiceConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_service#name DataDatabricksAiGatewayModelService#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_service#provider_config DataDatabricksAiGatewayModelService#provider_config}
  */
  readonly providerConfig?: DataDatabricksAiGatewayModelServiceProviderConfig;
}
export interface DataDatabricksAiGatewayModelServiceConfigInferenceTable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_service#disabled DataDatabricksAiGatewayModelService#disabled}
  */
  readonly disabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_service#parent DataDatabricksAiGatewayModelService#parent}
  */
  readonly parent: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_service#table_name_prefix DataDatabricksAiGatewayModelService#table_name_prefix}
  */
  readonly tableNamePrefix?: string;
}

export function dataDatabricksAiGatewayModelServiceConfigInferenceTableToTerraform(struct?: DataDatabricksAiGatewayModelServiceConfigInferenceTable | cdktn.IResolvable): any {
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


export function dataDatabricksAiGatewayModelServiceConfigInferenceTableToHclTerraform(struct?: DataDatabricksAiGatewayModelServiceConfigInferenceTable | cdktn.IResolvable): any {
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

export class DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelServiceConfigInferenceTable | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelServiceConfigInferenceTable | cdktn.IResolvable | undefined) {
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

  // disabled - computed: true, optional: true, required: false
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

  // parent - computed: true, optional: false, required: true
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

  // table_name_prefix - computed: true, optional: true, required: false
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
export interface DataDatabricksAiGatewayModelServiceConfigRateLimits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_service#key DataDatabricksAiGatewayModelService#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_service#principal DataDatabricksAiGatewayModelService#principal}
  */
  readonly principal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_service#renewal_period DataDatabricksAiGatewayModelService#renewal_period}
  */
  readonly renewalPeriod: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_service#request_tag_key DataDatabricksAiGatewayModelService#request_tag_key}
  */
  readonly requestTagKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_service#request_tag_value DataDatabricksAiGatewayModelService#request_tag_value}
  */
  readonly requestTagValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_service#requests DataDatabricksAiGatewayModelService#requests}
  */
  readonly requests?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_service#tokens DataDatabricksAiGatewayModelService#tokens}
  */
  readonly tokens?: number;
}

export function dataDatabricksAiGatewayModelServiceConfigRateLimitsToTerraform(struct?: DataDatabricksAiGatewayModelServiceConfigRateLimits | cdktn.IResolvable): any {
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


export function dataDatabricksAiGatewayModelServiceConfigRateLimitsToHclTerraform(struct?: DataDatabricksAiGatewayModelServiceConfigRateLimits | cdktn.IResolvable): any {
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

export class DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksAiGatewayModelServiceConfigRateLimits | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelServiceConfigRateLimits | cdktn.IResolvable | undefined) {
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

export class DataDatabricksAiGatewayModelServiceConfigRateLimitsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksAiGatewayModelServiceConfigRateLimits[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference {
    return new DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_service#model DataDatabricksAiGatewayModelService#model}
  */
  readonly model: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_service#native_api_types DataDatabricksAiGatewayModelService#native_api_types}
  */
  readonly nativeApiTypes?: string[];
}

export function dataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetToTerraform(struct?: DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    model: cdktn.stringToTerraform(struct!.model),
    native_api_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.nativeApiTypes),
  }
}


export function dataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetToHclTerraform(struct?: DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget): any {
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

export class DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._model = undefined;
      this._nativeApiTypes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._model = value.model;
      this._nativeApiTypes = value.nativeApiTypes;
    }
  }

  // model - computed: true, optional: false, required: true
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

  // native_api_types - computed: true, optional: true, required: false
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
export interface DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_service#model_provider_service DataDatabricksAiGatewayModelService#model_provider_service}
  */
  readonly modelProviderService: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_service#target DataDatabricksAiGatewayModelService#target}
  */
  readonly target: DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget;
}

export function dataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigToTerraform(struct?: DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    model_provider_service: cdktn.stringToTerraform(struct!.modelProviderService),
    target: dataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetToTerraform(struct!.target),
  }
}


export function dataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigToHclTerraform(struct?: DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig | cdktn.IResolvable): any {
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
      value: dataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig | cdktn.IResolvable | undefined) {
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

  // model_provider_service - computed: true, optional: false, required: true
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

  // target - computed: true, optional: false, required: true
  private _target = new DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}
export interface DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_service#model DataDatabricksAiGatewayModelService#model}
  */
  readonly model: string;
}

export function dataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigToTerraform(struct?: DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    model: cdktn.stringToTerraform(struct!.model),
  }
}


export function dataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigToHclTerraform(struct?: DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig | cdktn.IResolvable): any {
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

export class DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig | cdktn.IResolvable | undefined) {
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

  // model - computed: true, optional: false, required: true
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
export interface DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_service#model_serving_endpoint DataDatabricksAiGatewayModelService#model_serving_endpoint}
  */
  readonly modelServingEndpoint: string;
}

export function dataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigToTerraform(struct?: DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    model_serving_endpoint: cdktn.stringToTerraform(struct!.modelServingEndpoint),
  }
}


export function dataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigToHclTerraform(struct?: DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig | cdktn.IResolvable): any {
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

export class DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig | cdktn.IResolvable | undefined) {
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

  // model_serving_endpoint - computed: true, optional: false, required: true
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
export interface DataDatabricksAiGatewayModelServiceConfigRoutingDestinations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_service#destination_type DataDatabricksAiGatewayModelService#destination_type}
  */
  readonly destinationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_service#external_model_config DataDatabricksAiGatewayModelService#external_model_config}
  */
  readonly externalModelConfig?: DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_service#name DataDatabricksAiGatewayModelService#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_service#pay_per_token_config DataDatabricksAiGatewayModelService#pay_per_token_config}
  */
  readonly payPerTokenConfig?: DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_service#provisioned_throughput_config DataDatabricksAiGatewayModelService#provisioned_throughput_config}
  */
  readonly provisionedThroughputConfig?: DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_service#traffic_percentage DataDatabricksAiGatewayModelService#traffic_percentage}
  */
  readonly trafficPercentage?: number;
}

export function dataDatabricksAiGatewayModelServiceConfigRoutingDestinationsToTerraform(struct?: DataDatabricksAiGatewayModelServiceConfigRoutingDestinations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination_type: cdktn.stringToTerraform(struct!.destinationType),
    external_model_config: dataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigToTerraform(struct!.externalModelConfig),
    name: cdktn.stringToTerraform(struct!.name),
    pay_per_token_config: dataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigToTerraform(struct!.payPerTokenConfig),
    provisioned_throughput_config: dataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigToTerraform(struct!.provisionedThroughputConfig),
    traffic_percentage: cdktn.numberToTerraform(struct!.trafficPercentage),
  }
}


export function dataDatabricksAiGatewayModelServiceConfigRoutingDestinationsToHclTerraform(struct?: DataDatabricksAiGatewayModelServiceConfigRoutingDestinations | cdktn.IResolvable): any {
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
      value: dataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigToHclTerraform(struct!.externalModelConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pay_per_token_config: {
      value: dataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigToHclTerraform(struct!.payPerTokenConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig",
    },
    provisioned_throughput_config: {
      value: dataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigToHclTerraform(struct!.provisionedThroughputConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig",
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

export class DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksAiGatewayModelServiceConfigRoutingDestinations | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelServiceConfigRoutingDestinations | cdktn.IResolvable | undefined) {
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

  // destination_type - computed: true, optional: false, required: true
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

  // external_model_config - computed: true, optional: true, required: false
  private _externalModelConfig = new DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference(this, "external_model_config");
  public get externalModelConfig() {
    return this._externalModelConfig;
  }
  public putExternalModelConfig(value: DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig) {
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

  // pay_per_token_config - computed: true, optional: true, required: false
  private _payPerTokenConfig = new DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference(this, "pay_per_token_config");
  public get payPerTokenConfig() {
    return this._payPerTokenConfig;
  }
  public putPayPerTokenConfig(value: DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig) {
    this._payPerTokenConfig.internalValue = value;
  }
  public resetPayPerTokenConfig() {
    this._payPerTokenConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payPerTokenConfigInput() {
    return this._payPerTokenConfig.internalValue;
  }

  // provisioned_throughput_config - computed: true, optional: true, required: false
  private _provisionedThroughputConfig = new DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference(this, "provisioned_throughput_config");
  public get provisionedThroughputConfig() {
    return this._provisionedThroughputConfig;
  }
  public putProvisionedThroughputConfig(value: DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig) {
    this._provisionedThroughputConfig.internalValue = value;
  }
  public resetProvisionedThroughputConfig() {
    this._provisionedThroughputConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedThroughputConfigInput() {
    return this._provisionedThroughputConfig.internalValue;
  }

  // traffic_percentage - computed: true, optional: true, required: false
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

export class DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksAiGatewayModelServiceConfigRoutingDestinations[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference {
    return new DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_service#model DataDatabricksAiGatewayModelService#model}
  */
  readonly model: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_service#native_api_types DataDatabricksAiGatewayModelService#native_api_types}
  */
  readonly nativeApiTypes?: string[];
}

export function dataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetToTerraform(struct?: DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    model: cdktn.stringToTerraform(struct!.model),
    native_api_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.nativeApiTypes),
  }
}


export function dataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetToHclTerraform(struct?: DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget): any {
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

export class DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._model = undefined;
      this._nativeApiTypes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._model = value.model;
      this._nativeApiTypes = value.nativeApiTypes;
    }
  }

  // model - computed: true, optional: false, required: true
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

  // native_api_types - computed: true, optional: true, required: false
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
export interface DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_service#model_provider_service DataDatabricksAiGatewayModelService#model_provider_service}
  */
  readonly modelProviderService: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_service#target DataDatabricksAiGatewayModelService#target}
  */
  readonly target: DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget;
}

export function dataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigToTerraform(struct?: DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    model_provider_service: cdktn.stringToTerraform(struct!.modelProviderService),
    target: dataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetToTerraform(struct!.target),
  }
}


export function dataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigToHclTerraform(struct?: DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig | cdktn.IResolvable): any {
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
      value: dataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig | cdktn.IResolvable | undefined) {
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

  // model_provider_service - computed: true, optional: false, required: true
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

  // target - computed: true, optional: false, required: true
  private _target = new DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}
export interface DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_service#model DataDatabricksAiGatewayModelService#model}
  */
  readonly model: string;
}

export function dataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigToTerraform(struct?: DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    model: cdktn.stringToTerraform(struct!.model),
  }
}


export function dataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigToHclTerraform(struct?: DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig | cdktn.IResolvable): any {
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

export class DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig | cdktn.IResolvable | undefined) {
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

  // model - computed: true, optional: false, required: true
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
export interface DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_service#model_serving_endpoint DataDatabricksAiGatewayModelService#model_serving_endpoint}
  */
  readonly modelServingEndpoint: string;
}

export function dataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigToTerraform(struct?: DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    model_serving_endpoint: cdktn.stringToTerraform(struct!.modelServingEndpoint),
  }
}


export function dataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigToHclTerraform(struct?: DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig | cdktn.IResolvable): any {
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

export class DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig | cdktn.IResolvable | undefined) {
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

  // model_serving_endpoint - computed: true, optional: false, required: true
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
export interface DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_service#destination_type DataDatabricksAiGatewayModelService#destination_type}
  */
  readonly destinationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_service#external_model_config DataDatabricksAiGatewayModelService#external_model_config}
  */
  readonly externalModelConfig?: DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_service#name DataDatabricksAiGatewayModelService#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_service#pay_per_token_config DataDatabricksAiGatewayModelService#pay_per_token_config}
  */
  readonly payPerTokenConfig?: DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_service#provisioned_throughput_config DataDatabricksAiGatewayModelService#provisioned_throughput_config}
  */
  readonly provisionedThroughputConfig?: DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_service#traffic_percentage DataDatabricksAiGatewayModelService#traffic_percentage}
  */
  readonly trafficPercentage?: number;
}

export function dataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsToTerraform(struct?: DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination_type: cdktn.stringToTerraform(struct!.destinationType),
    external_model_config: dataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigToTerraform(struct!.externalModelConfig),
    name: cdktn.stringToTerraform(struct!.name),
    pay_per_token_config: dataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigToTerraform(struct!.payPerTokenConfig),
    provisioned_throughput_config: dataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigToTerraform(struct!.provisionedThroughputConfig),
    traffic_percentage: cdktn.numberToTerraform(struct!.trafficPercentage),
  }
}


export function dataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsToHclTerraform(struct?: DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinations | cdktn.IResolvable): any {
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
      value: dataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigToHclTerraform(struct!.externalModelConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pay_per_token_config: {
      value: dataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigToHclTerraform(struct!.payPerTokenConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig",
    },
    provisioned_throughput_config: {
      value: dataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigToHclTerraform(struct!.provisionedThroughputConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig",
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

export class DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinations | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinations | cdktn.IResolvable | undefined) {
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

  // destination_type - computed: true, optional: false, required: true
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

  // external_model_config - computed: true, optional: true, required: false
  private _externalModelConfig = new DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference(this, "external_model_config");
  public get externalModelConfig() {
    return this._externalModelConfig;
  }
  public putExternalModelConfig(value: DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig) {
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

  // pay_per_token_config - computed: true, optional: true, required: false
  private _payPerTokenConfig = new DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference(this, "pay_per_token_config");
  public get payPerTokenConfig() {
    return this._payPerTokenConfig;
  }
  public putPayPerTokenConfig(value: DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig) {
    this._payPerTokenConfig.internalValue = value;
  }
  public resetPayPerTokenConfig() {
    this._payPerTokenConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payPerTokenConfigInput() {
    return this._payPerTokenConfig.internalValue;
  }

  // provisioned_throughput_config - computed: true, optional: true, required: false
  private _provisionedThroughputConfig = new DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference(this, "provisioned_throughput_config");
  public get provisionedThroughputConfig() {
    return this._provisionedThroughputConfig;
  }
  public putProvisionedThroughputConfig(value: DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig) {
    this._provisionedThroughputConfig.internalValue = value;
  }
  public resetProvisionedThroughputConfig() {
    this._provisionedThroughputConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedThroughputConfigInput() {
    return this._provisionedThroughputConfig.internalValue;
  }

  // traffic_percentage - computed: true, optional: true, required: false
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

export class DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinations[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference {
    return new DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksAiGatewayModelServiceConfigRoutingFallback {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_service#destinations DataDatabricksAiGatewayModelService#destinations}
  */
  readonly destinations?: DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinations[] | cdktn.IResolvable;
}

export function dataDatabricksAiGatewayModelServiceConfigRoutingFallbackToTerraform(struct?: DataDatabricksAiGatewayModelServiceConfigRoutingFallback | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destinations: cdktn.listMapper(dataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsToTerraform, false)(struct!.destinations),
  }
}


export function dataDatabricksAiGatewayModelServiceConfigRoutingFallbackToHclTerraform(struct?: DataDatabricksAiGatewayModelServiceConfigRoutingFallback | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destinations: {
      value: cdktn.listMapperHcl(dataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsToHclTerraform, false)(struct!.destinations),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAiGatewayModelServiceConfigRoutingFallbackOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelServiceConfigRoutingFallback | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelServiceConfigRoutingFallback | cdktn.IResolvable | undefined) {
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

  // destinations - computed: true, optional: true, required: false
  private _destinations = new DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsList(this, "destinations", false);
  public get destinations() {
    return this._destinations;
  }
  public putDestinations(value: DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinations[] | cdktn.IResolvable) {
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
export interface DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplitting {
}

export function dataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplittingToTerraform(struct?: DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplitting | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplittingToHclTerraform(struct?: DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplitting | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplitting | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplitting | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAiGatewayModelServiceConfigRouting {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_service#destinations DataDatabricksAiGatewayModelService#destinations}
  */
  readonly destinations?: DataDatabricksAiGatewayModelServiceConfigRoutingDestinations[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_service#fallback DataDatabricksAiGatewayModelService#fallback}
  */
  readonly fallback?: DataDatabricksAiGatewayModelServiceConfigRoutingFallback;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_service#first_token_timeout DataDatabricksAiGatewayModelService#first_token_timeout}
  */
  readonly firstTokenTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_service#traffic_splitting DataDatabricksAiGatewayModelService#traffic_splitting}
  */
  readonly trafficSplitting?: DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplitting;
}

export function dataDatabricksAiGatewayModelServiceConfigRoutingToTerraform(struct?: DataDatabricksAiGatewayModelServiceConfigRouting | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destinations: cdktn.listMapper(dataDatabricksAiGatewayModelServiceConfigRoutingDestinationsToTerraform, false)(struct!.destinations),
    fallback: dataDatabricksAiGatewayModelServiceConfigRoutingFallbackToTerraform(struct!.fallback),
    first_token_timeout: cdktn.stringToTerraform(struct!.firstTokenTimeout),
    traffic_splitting: dataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplittingToTerraform(struct!.trafficSplitting),
  }
}


export function dataDatabricksAiGatewayModelServiceConfigRoutingToHclTerraform(struct?: DataDatabricksAiGatewayModelServiceConfigRouting | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destinations: {
      value: cdktn.listMapperHcl(dataDatabricksAiGatewayModelServiceConfigRoutingDestinationsToHclTerraform, false)(struct!.destinations),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsList",
    },
    fallback: {
      value: dataDatabricksAiGatewayModelServiceConfigRoutingFallbackToHclTerraform(struct!.fallback),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelServiceConfigRoutingFallback",
    },
    first_token_timeout: {
      value: cdktn.stringToHclTerraform(struct!.firstTokenTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    traffic_splitting: {
      value: dataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplittingToHclTerraform(struct!.trafficSplitting),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplitting",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelServiceConfigRouting | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelServiceConfigRouting | cdktn.IResolvable | undefined) {
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

  // destinations - computed: true, optional: true, required: false
  private _destinations = new DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsList(this, "destinations", false);
  public get destinations() {
    return this._destinations;
  }
  public putDestinations(value: DataDatabricksAiGatewayModelServiceConfigRoutingDestinations[] | cdktn.IResolvable) {
    this._destinations.internalValue = value;
  }
  public resetDestinations() {
    this._destinations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationsInput() {
    return this._destinations.internalValue;
  }

  // fallback - computed: true, optional: true, required: false
  private _fallback = new DataDatabricksAiGatewayModelServiceConfigRoutingFallbackOutputReference(this, "fallback");
  public get fallback() {
    return this._fallback;
  }
  public putFallback(value: DataDatabricksAiGatewayModelServiceConfigRoutingFallback) {
    this._fallback.internalValue = value;
  }
  public resetFallback() {
    this._fallback.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackInput() {
    return this._fallback.internalValue;
  }

  // first_token_timeout - computed: true, optional: true, required: false
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

  // traffic_splitting - computed: true, optional: true, required: false
  private _trafficSplitting = new DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference(this, "traffic_splitting");
  public get trafficSplitting() {
    return this._trafficSplitting;
  }
  public putTrafficSplitting(value: DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplitting) {
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
export interface DataDatabricksAiGatewayModelServiceConfigA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_service#inference_table DataDatabricksAiGatewayModelService#inference_table}
  */
  readonly inferenceTable?: DataDatabricksAiGatewayModelServiceConfigInferenceTable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_service#rate_limits DataDatabricksAiGatewayModelService#rate_limits}
  */
  readonly rateLimits?: DataDatabricksAiGatewayModelServiceConfigRateLimits[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_service#routing DataDatabricksAiGatewayModelService#routing}
  */
  readonly routing?: DataDatabricksAiGatewayModelServiceConfigRouting;
}

export function dataDatabricksAiGatewayModelServiceConfigAToTerraform(struct?: DataDatabricksAiGatewayModelServiceConfigA): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    inference_table: dataDatabricksAiGatewayModelServiceConfigInferenceTableToTerraform(struct!.inferenceTable),
    rate_limits: cdktn.listMapper(dataDatabricksAiGatewayModelServiceConfigRateLimitsToTerraform, false)(struct!.rateLimits),
    routing: dataDatabricksAiGatewayModelServiceConfigRoutingToTerraform(struct!.routing),
  }
}


export function dataDatabricksAiGatewayModelServiceConfigAToHclTerraform(struct?: DataDatabricksAiGatewayModelServiceConfigA): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    inference_table: {
      value: dataDatabricksAiGatewayModelServiceConfigInferenceTableToHclTerraform(struct!.inferenceTable),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelServiceConfigInferenceTable",
    },
    rate_limits: {
      value: cdktn.listMapperHcl(dataDatabricksAiGatewayModelServiceConfigRateLimitsToHclTerraform, false)(struct!.rateLimits),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksAiGatewayModelServiceConfigRateLimitsList",
    },
    routing: {
      value: dataDatabricksAiGatewayModelServiceConfigRoutingToHclTerraform(struct!.routing),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelServiceConfigRouting",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAiGatewayModelServiceConfigAOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelServiceConfigA | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelServiceConfigA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inferenceTable.internalValue = undefined;
      this._rateLimits.internalValue = undefined;
      this._routing.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inferenceTable.internalValue = value.inferenceTable;
      this._rateLimits.internalValue = value.rateLimits;
      this._routing.internalValue = value.routing;
    }
  }

  // inference_table - computed: true, optional: true, required: false
  private _inferenceTable = new DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference(this, "inference_table");
  public get inferenceTable() {
    return this._inferenceTable;
  }
  public putInferenceTable(value: DataDatabricksAiGatewayModelServiceConfigInferenceTable) {
    this._inferenceTable.internalValue = value;
  }
  public resetInferenceTable() {
    this._inferenceTable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inferenceTableInput() {
    return this._inferenceTable.internalValue;
  }

  // rate_limits - computed: true, optional: true, required: false
  private _rateLimits = new DataDatabricksAiGatewayModelServiceConfigRateLimitsList(this, "rate_limits", false);
  public get rateLimits() {
    return this._rateLimits;
  }
  public putRateLimits(value: DataDatabricksAiGatewayModelServiceConfigRateLimits[] | cdktn.IResolvable) {
    this._rateLimits.internalValue = value;
  }
  public resetRateLimits() {
    this._rateLimits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitsInput() {
    return this._rateLimits.internalValue;
  }

  // routing - computed: true, optional: true, required: false
  private _routing = new DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference(this, "routing");
  public get routing() {
    return this._routing;
  }
  public putRouting(value: DataDatabricksAiGatewayModelServiceConfigRouting) {
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
export interface DataDatabricksAiGatewayModelServiceProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_service#workspace_id DataDatabricksAiGatewayModelService#workspace_id}
  */
  readonly workspaceId?: string;
}

export function dataDatabricksAiGatewayModelServiceProviderConfigToTerraform(struct?: DataDatabricksAiGatewayModelServiceProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function dataDatabricksAiGatewayModelServiceProviderConfigToHclTerraform(struct?: DataDatabricksAiGatewayModelServiceProviderConfig | cdktn.IResolvable): any {
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

export class DataDatabricksAiGatewayModelServiceProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelServiceProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelServiceProviderConfig | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_service databricks_ai_gateway_model_service}
*/
export class DataDatabricksAiGatewayModelService extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_ai_gateway_model_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataDatabricksAiGatewayModelService resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksAiGatewayModelService to import
  * @param importFromId The id of the existing DataDatabricksAiGatewayModelService that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksAiGatewayModelService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_ai_gateway_model_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_gateway_model_service databricks_ai_gateway_model_service} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksAiGatewayModelServiceConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksAiGatewayModelServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_ai_gateway_model_service',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.129.0',
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

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // config - computed: true, optional: false, required: false
  private _config = new DataDatabricksAiGatewayModelServiceConfigAOutputReference(this, "config");
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
  private _providerConfig = new DataDatabricksAiGatewayModelServiceProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataDatabricksAiGatewayModelServiceProviderConfig) {
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
      name: cdktn.stringToTerraform(this._name),
      provider_config: dataDatabricksAiGatewayModelServiceProviderConfigToTerraform(this._providerConfig.internalValue),
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
        value: dataDatabricksAiGatewayModelServiceProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataDatabricksAiGatewayModelServiceProviderConfig",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
