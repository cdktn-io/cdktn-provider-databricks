/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_search_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataDatabricksAiSearchEndpointConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_search_endpoint#name DataDatabricksAiSearchEndpoint#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_search_endpoint#provider_config DataDatabricksAiSearchEndpoint#provider_config}
  */
  readonly providerConfig?: DataDatabricksAiSearchEndpointProviderConfig;
}
export interface DataDatabricksAiSearchEndpointCustomTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_search_endpoint#key DataDatabricksAiSearchEndpoint#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_search_endpoint#value DataDatabricksAiSearchEndpoint#value}
  */
  readonly value?: string;
}

export function dataDatabricksAiSearchEndpointCustomTagsToTerraform(struct?: DataDatabricksAiSearchEndpointCustomTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function dataDatabricksAiSearchEndpointCustomTagsToHclTerraform(struct?: DataDatabricksAiSearchEndpointCustomTags): any {
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

export class DataDatabricksAiSearchEndpointCustomTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksAiSearchEndpointCustomTags | undefined {
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

  public set internalValue(value: DataDatabricksAiSearchEndpointCustomTags | undefined) {
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

export class DataDatabricksAiSearchEndpointCustomTagsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksAiSearchEndpointCustomTags[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksAiSearchEndpointCustomTagsOutputReference {
    return new DataDatabricksAiSearchEndpointCustomTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksAiSearchEndpointEndpointStatus {
}

export function dataDatabricksAiSearchEndpointEndpointStatusToTerraform(struct?: DataDatabricksAiSearchEndpointEndpointStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataDatabricksAiSearchEndpointEndpointStatusToHclTerraform(struct?: DataDatabricksAiSearchEndpointEndpointStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatabricksAiSearchEndpointEndpointStatusOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiSearchEndpointEndpointStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAiSearchEndpointEndpointStatus | undefined) {
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
export interface DataDatabricksAiSearchEndpointProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_search_endpoint#workspace_id DataDatabricksAiSearchEndpoint#workspace_id}
  */
  readonly workspaceId?: string;
}

export function dataDatabricksAiSearchEndpointProviderConfigToTerraform(struct?: DataDatabricksAiSearchEndpointProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function dataDatabricksAiSearchEndpointProviderConfigToHclTerraform(struct?: DataDatabricksAiSearchEndpointProviderConfig | cdktn.IResolvable): any {
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

export class DataDatabricksAiSearchEndpointProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiSearchEndpointProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiSearchEndpointProviderConfig | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAiSearchEndpointScalingInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_search_endpoint#requested_target_qps DataDatabricksAiSearchEndpoint#requested_target_qps}
  */
  readonly requestedTargetQps?: number;
}

export function dataDatabricksAiSearchEndpointScalingInfoToTerraform(struct?: DataDatabricksAiSearchEndpointScalingInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    requested_target_qps: cdktn.numberToTerraform(struct!.requestedTargetQps),
  }
}


export function dataDatabricksAiSearchEndpointScalingInfoToHclTerraform(struct?: DataDatabricksAiSearchEndpointScalingInfo): any {
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

export class DataDatabricksAiSearchEndpointScalingInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiSearchEndpointScalingInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requestedTargetQps !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestedTargetQps = this._requestedTargetQps;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAiSearchEndpointScalingInfo | undefined) {
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
export interface DataDatabricksAiSearchEndpointThroughputInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_search_endpoint#maximum_concurrency_allowed DataDatabricksAiSearchEndpoint#maximum_concurrency_allowed}
  */
  readonly maximumConcurrencyAllowed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_search_endpoint#minimal_concurrency_allowed DataDatabricksAiSearchEndpoint#minimal_concurrency_allowed}
  */
  readonly minimalConcurrencyAllowed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_search_endpoint#requested_concurrency DataDatabricksAiSearchEndpoint#requested_concurrency}
  */
  readonly requestedConcurrency?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_search_endpoint#requested_num_replicas DataDatabricksAiSearchEndpoint#requested_num_replicas}
  */
  readonly requestedNumReplicas?: number;
}

export function dataDatabricksAiSearchEndpointThroughputInfoToTerraform(struct?: DataDatabricksAiSearchEndpointThroughputInfo): any {
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


export function dataDatabricksAiSearchEndpointThroughputInfoToHclTerraform(struct?: DataDatabricksAiSearchEndpointThroughputInfo): any {
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

export class DataDatabricksAiSearchEndpointThroughputInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiSearchEndpointThroughputInfo | undefined {
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

  public set internalValue(value: DataDatabricksAiSearchEndpointThroughputInfo | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_search_endpoint databricks_ai_search_endpoint}
*/
export class DataDatabricksAiSearchEndpoint extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_ai_search_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataDatabricksAiSearchEndpoint resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksAiSearchEndpoint to import
  * @param importFromId The id of the existing DataDatabricksAiSearchEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_search_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksAiSearchEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_ai_search_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_search_endpoint databricks_ai_search_endpoint} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksAiSearchEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksAiSearchEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_ai_search_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.124.0',
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
  private _customTags = new DataDatabricksAiSearchEndpointCustomTagsList(this, "custom_tags", false);
  public get customTags() {
    return this._customTags;
  }

  // effective_budget_policy_id - computed: true, optional: false, required: false
  public get effectiveBudgetPolicyId() {
    return this.getStringAttribute('effective_budget_policy_id');
  }

  // endpoint_status - computed: true, optional: false, required: false
  private _endpointStatus = new DataDatabricksAiSearchEndpointEndpointStatusOutputReference(this, "endpoint_status");
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
  private _providerConfig = new DataDatabricksAiSearchEndpointProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataDatabricksAiSearchEndpointProviderConfig) {
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
  private _scalingInfo = new DataDatabricksAiSearchEndpointScalingInfoOutputReference(this, "scaling_info");
  public get scalingInfo() {
    return this._scalingInfo;
  }

  // target_qps - computed: true, optional: false, required: false
  public get targetQps() {
    return this.getNumberAttribute('target_qps');
  }

  // throughput_info - computed: true, optional: false, required: false
  private _throughputInfo = new DataDatabricksAiSearchEndpointThroughputInfoOutputReference(this, "throughput_info");
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktn.stringToTerraform(this._name),
      provider_config: dataDatabricksAiSearchEndpointProviderConfigToTerraform(this._providerConfig.internalValue),
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
        value: dataDatabricksAiSearchEndpointProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataDatabricksAiSearchEndpointProviderConfig",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
