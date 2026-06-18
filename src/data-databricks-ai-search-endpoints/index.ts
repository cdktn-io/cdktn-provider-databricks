/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/ai_search_endpoints
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataDatabricksAiSearchEndpointsConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/ai_search_endpoints#page_size DataDatabricksAiSearchEndpoints#page_size}
  */
  readonly pageSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/ai_search_endpoints#parent DataDatabricksAiSearchEndpoints#parent}
  */
  readonly parent: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/ai_search_endpoints#provider_config DataDatabricksAiSearchEndpoints#provider_config}
  */
  readonly providerConfig?: DataDatabricksAiSearchEndpointsProviderConfig;
}
export interface DataDatabricksAiSearchEndpointsEndpointsCustomTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/ai_search_endpoints#key DataDatabricksAiSearchEndpoints#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/ai_search_endpoints#value DataDatabricksAiSearchEndpoints#value}
  */
  readonly value?: string;
}

export function dataDatabricksAiSearchEndpointsEndpointsCustomTagsToTerraform(struct?: DataDatabricksAiSearchEndpointsEndpointsCustomTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function dataDatabricksAiSearchEndpointsEndpointsCustomTagsToHclTerraform(struct?: DataDatabricksAiSearchEndpointsEndpointsCustomTags): any {
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
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksAiSearchEndpointsEndpointsCustomTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAiSearchEndpointsEndpointsCustomTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._value = value.value;
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataDatabricksAiSearchEndpointsEndpointsCustomTagsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksAiSearchEndpointsEndpointsCustomTags[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference {
    return new DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksAiSearchEndpointsEndpointsEndpointStatus {
}

export function dataDatabricksAiSearchEndpointsEndpointsEndpointStatusToTerraform(struct?: DataDatabricksAiSearchEndpointsEndpointsEndpointStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataDatabricksAiSearchEndpointsEndpointsEndpointStatusToHclTerraform(struct?: DataDatabricksAiSearchEndpointsEndpointsEndpointStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiSearchEndpointsEndpointsEndpointStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAiSearchEndpointsEndpointsEndpointStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}
export interface DataDatabricksAiSearchEndpointsEndpointsProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/ai_search_endpoints#workspace_id DataDatabricksAiSearchEndpoints#workspace_id}
  */
  readonly workspaceId?: string;
}

export function dataDatabricksAiSearchEndpointsEndpointsProviderConfigToTerraform(struct?: DataDatabricksAiSearchEndpointsEndpointsProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function dataDatabricksAiSearchEndpointsEndpointsProviderConfigToHclTerraform(struct?: DataDatabricksAiSearchEndpointsEndpointsProviderConfig | cdktn.IResolvable): any {
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

export class DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiSearchEndpointsEndpointsProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiSearchEndpointsEndpointsProviderConfig | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAiSearchEndpointsEndpointsScalingInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/ai_search_endpoints#requested_target_qps DataDatabricksAiSearchEndpoints#requested_target_qps}
  */
  readonly requestedTargetQps?: number;
}

export function dataDatabricksAiSearchEndpointsEndpointsScalingInfoToTerraform(struct?: DataDatabricksAiSearchEndpointsEndpointsScalingInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    requested_target_qps: cdktn.numberToTerraform(struct!.requestedTargetQps),
  }
}


export function dataDatabricksAiSearchEndpointsEndpointsScalingInfoToHclTerraform(struct?: DataDatabricksAiSearchEndpointsEndpointsScalingInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    requested_target_qps: {
      value: cdktn.numberToHclTerraform(struct!.requestedTargetQps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiSearchEndpointsEndpointsScalingInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requestedTargetQps !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestedTargetQps = this._requestedTargetQps;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAiSearchEndpointsEndpointsScalingInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._requestedTargetQps = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._requestedTargetQps = value.requestedTargetQps;
    }
  }

  // requested_target_qps - computed: true, optional: true, required: false
  private _requestedTargetQps?: number; 
  public get requestedTargetQps() {
    return this.getNumberAttribute('requested_target_qps');
  }
  public set requestedTargetQps(value: number) {
    this._requestedTargetQps = value;
  }
  public resetRequestedTargetQps() {
    this._requestedTargetQps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestedTargetQpsInput() {
    return this._requestedTargetQps;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}
export interface DataDatabricksAiSearchEndpointsEndpointsThroughputInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/ai_search_endpoints#maximum_concurrency_allowed DataDatabricksAiSearchEndpoints#maximum_concurrency_allowed}
  */
  readonly maximumConcurrencyAllowed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/ai_search_endpoints#minimal_concurrency_allowed DataDatabricksAiSearchEndpoints#minimal_concurrency_allowed}
  */
  readonly minimalConcurrencyAllowed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/ai_search_endpoints#requested_concurrency DataDatabricksAiSearchEndpoints#requested_concurrency}
  */
  readonly requestedConcurrency?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/ai_search_endpoints#requested_num_replicas DataDatabricksAiSearchEndpoints#requested_num_replicas}
  */
  readonly requestedNumReplicas?: number;
}

export function dataDatabricksAiSearchEndpointsEndpointsThroughputInfoToTerraform(struct?: DataDatabricksAiSearchEndpointsEndpointsThroughputInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    maximum_concurrency_allowed: cdktn.numberToTerraform(struct!.maximumConcurrencyAllowed),
    minimal_concurrency_allowed: cdktn.numberToTerraform(struct!.minimalConcurrencyAllowed),
    requested_concurrency: cdktn.numberToTerraform(struct!.requestedConcurrency),
    requested_num_replicas: cdktn.numberToTerraform(struct!.requestedNumReplicas),
  }
}


export function dataDatabricksAiSearchEndpointsEndpointsThroughputInfoToHclTerraform(struct?: DataDatabricksAiSearchEndpointsEndpointsThroughputInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    maximum_concurrency_allowed: {
      value: cdktn.numberToHclTerraform(struct!.maximumConcurrencyAllowed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimal_concurrency_allowed: {
      value: cdktn.numberToHclTerraform(struct!.minimalConcurrencyAllowed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    requested_concurrency: {
      value: cdktn.numberToHclTerraform(struct!.requestedConcurrency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    requested_num_replicas: {
      value: cdktn.numberToHclTerraform(struct!.requestedNumReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiSearchEndpointsEndpointsThroughputInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximumConcurrencyAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumConcurrencyAllowed = this._maximumConcurrencyAllowed;
    }
    if (this._minimalConcurrencyAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimalConcurrencyAllowed = this._minimalConcurrencyAllowed;
    }
    if (this._requestedConcurrency !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestedConcurrency = this._requestedConcurrency;
    }
    if (this._requestedNumReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestedNumReplicas = this._requestedNumReplicas;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAiSearchEndpointsEndpointsThroughputInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maximumConcurrencyAllowed = undefined;
      this._minimalConcurrencyAllowed = undefined;
      this._requestedConcurrency = undefined;
      this._requestedNumReplicas = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maximumConcurrencyAllowed = value.maximumConcurrencyAllowed;
      this._minimalConcurrencyAllowed = value.minimalConcurrencyAllowed;
      this._requestedConcurrency = value.requestedConcurrency;
      this._requestedNumReplicas = value.requestedNumReplicas;
    }
  }

  // change_request_message - computed: true, optional: false, required: false
  public get changeRequestMessage() {
    return this.getStringAttribute('change_request_message');
  }

  // change_request_state - computed: true, optional: false, required: false
  public get changeRequestState() {
    return this.getStringAttribute('change_request_state');
  }

  // current_concurrency - computed: true, optional: false, required: false
  public get currentConcurrency() {
    return this.getNumberAttribute('current_concurrency');
  }

  // current_concurrency_utilization_percentage - computed: true, optional: false, required: false
  public get currentConcurrencyUtilizationPercentage() {
    return this.getNumberAttribute('current_concurrency_utilization_percentage');
  }

  // current_num_replicas - computed: true, optional: false, required: false
  public get currentNumReplicas() {
    return this.getNumberAttribute('current_num_replicas');
  }

  // maximum_concurrency_allowed - computed: true, optional: true, required: false
  private _maximumConcurrencyAllowed?: number; 
  public get maximumConcurrencyAllowed() {
    return this.getNumberAttribute('maximum_concurrency_allowed');
  }
  public set maximumConcurrencyAllowed(value: number) {
    this._maximumConcurrencyAllowed = value;
  }
  public resetMaximumConcurrencyAllowed() {
    this._maximumConcurrencyAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumConcurrencyAllowedInput() {
    return this._maximumConcurrencyAllowed;
  }

  // minimal_concurrency_allowed - computed: true, optional: true, required: false
  private _minimalConcurrencyAllowed?: number; 
  public get minimalConcurrencyAllowed() {
    return this.getNumberAttribute('minimal_concurrency_allowed');
  }
  public set minimalConcurrencyAllowed(value: number) {
    this._minimalConcurrencyAllowed = value;
  }
  public resetMinimalConcurrencyAllowed() {
    this._minimalConcurrencyAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimalConcurrencyAllowedInput() {
    return this._minimalConcurrencyAllowed;
  }

  // requested_concurrency - computed: true, optional: true, required: false
  private _requestedConcurrency?: number; 
  public get requestedConcurrency() {
    return this.getNumberAttribute('requested_concurrency');
  }
  public set requestedConcurrency(value: number) {
    this._requestedConcurrency = value;
  }
  public resetRequestedConcurrency() {
    this._requestedConcurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestedConcurrencyInput() {
    return this._requestedConcurrency;
  }

  // requested_num_replicas - computed: true, optional: true, required: false
  private _requestedNumReplicas?: number; 
  public get requestedNumReplicas() {
    return this.getNumberAttribute('requested_num_replicas');
  }
  public set requestedNumReplicas(value: number) {
    this._requestedNumReplicas = value;
  }
  public resetRequestedNumReplicas() {
    this._requestedNumReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestedNumReplicasInput() {
    return this._requestedNumReplicas;
  }
}
export interface DataDatabricksAiSearchEndpointsEndpoints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/ai_search_endpoints#name DataDatabricksAiSearchEndpoints#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/ai_search_endpoints#provider_config DataDatabricksAiSearchEndpoints#provider_config}
  */
  readonly providerConfig?: DataDatabricksAiSearchEndpointsEndpointsProviderConfig;
}

export function dataDatabricksAiSearchEndpointsEndpointsToTerraform(struct?: DataDatabricksAiSearchEndpointsEndpoints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    provider_config: dataDatabricksAiSearchEndpointsEndpointsProviderConfigToTerraform(struct!.providerConfig),
  }
}


export function dataDatabricksAiSearchEndpointsEndpointsToHclTerraform(struct?: DataDatabricksAiSearchEndpointsEndpoints): any {
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
      value: dataDatabricksAiSearchEndpointsEndpointsProviderConfigToHclTerraform(struct!.providerConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiSearchEndpointsEndpointsProviderConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAiSearchEndpointsEndpointsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksAiSearchEndpointsEndpoints | undefined {
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

  public set internalValue(value: DataDatabricksAiSearchEndpointsEndpoints | undefined) {
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

  // budget_policy_id - computed: true, optional: false, required: false
  public get budgetPolicyId() {
    return this.getStringAttribute('budget_policy_id');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // creator - computed: true, optional: false, required: false
  public get creator() {
    return this.getStringAttribute('creator');
  }

  // custom_tags - computed: true, optional: false, required: false
  private _customTags = new DataDatabricksAiSearchEndpointsEndpointsCustomTagsList(this, "custom_tags", false);
  public get customTags() {
    return this._customTags;
  }

  // effective_budget_policy_id - computed: true, optional: false, required: false
  public get effectiveBudgetPolicyId() {
    return this.getStringAttribute('effective_budget_policy_id');
  }

  // endpoint_status - computed: true, optional: false, required: false
  private _endpointStatus = new DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference(this, "endpoint_status");
  public get endpointStatus() {
    return this._endpointStatus;
  }

  // endpoint_type - computed: true, optional: false, required: false
  public get endpointType() {
    return this.getStringAttribute('endpoint_type');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // index_count - computed: true, optional: false, required: false
  public get indexCount() {
    return this.getNumberAttribute('index_count');
  }

  // last_updated_user - computed: true, optional: false, required: false
  public get lastUpdatedUser() {
    return this.getStringAttribute('last_updated_user');
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

  // provider_config - computed: true, optional: true, required: false
  private _providerConfig = new DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataDatabricksAiSearchEndpointsEndpointsProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // replica_count - computed: true, optional: false, required: false
  public get replicaCount() {
    return this.getNumberAttribute('replica_count');
  }

  // scaling_info - computed: true, optional: false, required: false
  private _scalingInfo = new DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference(this, "scaling_info");
  public get scalingInfo() {
    return this._scalingInfo;
  }

  // target_qps - computed: true, optional: false, required: false
  public get targetQps() {
    return this.getNumberAttribute('target_qps');
  }

  // throughput_info - computed: true, optional: false, required: false
  private _throughputInfo = new DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference(this, "throughput_info");
  public get throughputInfo() {
    return this._throughputInfo;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // usage_policy_id - computed: true, optional: false, required: false
  public get usagePolicyId() {
    return this.getStringAttribute('usage_policy_id');
  }
}

export class DataDatabricksAiSearchEndpointsEndpointsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksAiSearchEndpointsEndpoints[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksAiSearchEndpointsEndpointsOutputReference {
    return new DataDatabricksAiSearchEndpointsEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksAiSearchEndpointsProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/ai_search_endpoints#workspace_id DataDatabricksAiSearchEndpoints#workspace_id}
  */
  readonly workspaceId?: string;
}

export function dataDatabricksAiSearchEndpointsProviderConfigToTerraform(struct?: DataDatabricksAiSearchEndpointsProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function dataDatabricksAiSearchEndpointsProviderConfigToHclTerraform(struct?: DataDatabricksAiSearchEndpointsProviderConfig | cdktn.IResolvable): any {
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

export class DataDatabricksAiSearchEndpointsProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiSearchEndpointsProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiSearchEndpointsProviderConfig | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/ai_search_endpoints databricks_ai_search_endpoints}
*/
export class DataDatabricksAiSearchEndpoints extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_ai_search_endpoints";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataDatabricksAiSearchEndpoints resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksAiSearchEndpoints to import
  * @param importFromId The id of the existing DataDatabricksAiSearchEndpoints that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/ai_search_endpoints#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksAiSearchEndpoints to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_ai_search_endpoints", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/ai_search_endpoints databricks_ai_search_endpoints} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksAiSearchEndpointsConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksAiSearchEndpointsConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_ai_search_endpoints',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.118.0',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // endpoints - computed: true, optional: false, required: false
  private _endpoints = new DataDatabricksAiSearchEndpointsEndpointsList(this, "endpoints", false);
  public get endpoints() {
    return this._endpoints;
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

  // provider_config - computed: false, optional: true, required: false
  private _providerConfig = new DataDatabricksAiSearchEndpointsProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataDatabricksAiSearchEndpointsProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      page_size: cdktn.numberToTerraform(this._pageSize),
      parent: cdktn.stringToTerraform(this._parent),
      provider_config: dataDatabricksAiSearchEndpointsProviderConfigToTerraform(this._providerConfig.internalValue),
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
        value: dataDatabricksAiSearchEndpointsProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataDatabricksAiSearchEndpointsProviderConfig",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
