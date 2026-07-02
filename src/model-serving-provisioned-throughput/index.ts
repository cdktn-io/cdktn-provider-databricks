/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/model_serving_provisioned_throughput
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ModelServingProvisionedThroughputConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/model_serving_provisioned_throughput#budget_policy_id ModelServingProvisionedThroughput#budget_policy_id}
  */
  readonly budgetPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/model_serving_provisioned_throughput#id ModelServingProvisionedThroughput#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/model_serving_provisioned_throughput#name ModelServingProvisionedThroughput#name}
  */
  readonly name: string;
  /**
  * ai_gateway block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/model_serving_provisioned_throughput#ai_gateway ModelServingProvisionedThroughput#ai_gateway}
  */
  readonly aiGateway?: ModelServingProvisionedThroughputAiGateway;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/model_serving_provisioned_throughput#config ModelServingProvisionedThroughput#config}
  */
  readonly config: ModelServingProvisionedThroughputConfigA;
  /**
  * email_notifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/model_serving_provisioned_throughput#email_notifications ModelServingProvisionedThroughput#email_notifications}
  */
  readonly emailNotifications?: ModelServingProvisionedThroughputEmailNotifications;
  /**
  * provider_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/model_serving_provisioned_throughput#provider_config ModelServingProvisionedThroughput#provider_config}
  */
  readonly providerConfig?: ModelServingProvisionedThroughputProviderConfig;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/model_serving_provisioned_throughput#tags ModelServingProvisionedThroughput#tags}
  */
  readonly tags?: ModelServingProvisionedThroughputTags[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/model_serving_provisioned_throughput#timeouts ModelServingProvisionedThroughput#timeouts}
  */
  readonly timeouts?: ModelServingProvisionedThroughputTimeouts;
}
export interface ModelServingProvisionedThroughputAiGatewayFallbackConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/model_serving_provisioned_throughput#enabled ModelServingProvisionedThroughput#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
}

export function modelServingProvisionedThroughputAiGatewayFallbackConfigToTerraform(struct?: ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference | ModelServingProvisionedThroughputAiGatewayFallbackConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function modelServingProvisionedThroughputAiGatewayFallbackConfigToHclTerraform(struct?: ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference | ModelServingProvisionedThroughputAiGatewayFallbackConfig): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ModelServingProvisionedThroughputAiGatewayFallbackConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ModelServingProvisionedThroughputAiGatewayFallbackConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface ModelServingProvisionedThroughputAiGatewayGuardrailsInputPii {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/model_serving_provisioned_throughput#behavior ModelServingProvisionedThroughput#behavior}
  */
  readonly behavior?: string;
}

export function modelServingProvisionedThroughputAiGatewayGuardrailsInputPiiToTerraform(struct?: ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference | ModelServingProvisionedThroughputAiGatewayGuardrailsInputPii): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    behavior: cdktn.stringToTerraform(struct!.behavior),
  }
}


export function modelServingProvisionedThroughputAiGatewayGuardrailsInputPiiToHclTerraform(struct?: ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference | ModelServingProvisionedThroughputAiGatewayGuardrailsInputPii): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    behavior: {
      value: cdktn.stringToHclTerraform(struct!.behavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ModelServingProvisionedThroughputAiGatewayGuardrailsInputPii | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._behavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.behavior = this._behavior;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ModelServingProvisionedThroughputAiGatewayGuardrailsInputPii | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._behavior = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._behavior = value.behavior;
    }
  }

  // behavior - computed: true, optional: true, required: false
  private _behavior?: string; 
  public get behavior() {
    return this.getStringAttribute('behavior');
  }
  public set behavior(value: string) {
    this._behavior = value;
  }
  public resetBehavior() {
    this._behavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviorInput() {
    return this._behavior;
  }
}
export interface ModelServingProvisionedThroughputAiGatewayGuardrailsInput {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/model_serving_provisioned_throughput#invalid_keywords ModelServingProvisionedThroughput#invalid_keywords}
  */
  readonly invalidKeywords?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/model_serving_provisioned_throughput#safety ModelServingProvisionedThroughput#safety}
  */
  readonly safety?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/model_serving_provisioned_throughput#valid_topics ModelServingProvisionedThroughput#valid_topics}
  */
  readonly validTopics?: string[];
  /**
  * pii block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/model_serving_provisioned_throughput#pii ModelServingProvisionedThroughput#pii}
  */
  readonly pii?: ModelServingProvisionedThroughputAiGatewayGuardrailsInputPii;
}

export function modelServingProvisionedThroughputAiGatewayGuardrailsInputToTerraform(struct?: ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference | ModelServingProvisionedThroughputAiGatewayGuardrailsInput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    invalid_keywords: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.invalidKeywords),
    safety: cdktn.booleanToTerraform(struct!.safety),
    valid_topics: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.validTopics),
    pii: modelServingProvisionedThroughputAiGatewayGuardrailsInputPiiToTerraform(struct!.pii),
  }
}


export function modelServingProvisionedThroughputAiGatewayGuardrailsInputToHclTerraform(struct?: ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference | ModelServingProvisionedThroughputAiGatewayGuardrailsInput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    invalid_keywords: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.invalidKeywords),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    safety: {
      value: cdktn.booleanToHclTerraform(struct!.safety),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    valid_topics: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.validTopics),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    pii: {
      value: modelServingProvisionedThroughputAiGatewayGuardrailsInputPiiToHclTerraform(struct!.pii),
      isBlock: true,
      type: "list",
      storageClassType: "ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ModelServingProvisionedThroughputAiGatewayGuardrailsInput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invalidKeywords !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidKeywords = this._invalidKeywords;
    }
    if (this._safety !== undefined) {
      hasAnyValues = true;
      internalValueResult.safety = this._safety;
    }
    if (this._validTopics !== undefined) {
      hasAnyValues = true;
      internalValueResult.validTopics = this._validTopics;
    }
    if (this._pii?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pii = this._pii?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ModelServingProvisionedThroughputAiGatewayGuardrailsInput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._invalidKeywords = undefined;
      this._safety = undefined;
      this._validTopics = undefined;
      this._pii.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._invalidKeywords = value.invalidKeywords;
      this._safety = value.safety;
      this._validTopics = value.validTopics;
      this._pii.internalValue = value.pii;
    }
  }

  // invalid_keywords - computed: false, optional: true, required: false
  private _invalidKeywords?: string[]; 
  public get invalidKeywords() {
    return this.getListAttribute('invalid_keywords');
  }
  public set invalidKeywords(value: string[]) {
    this._invalidKeywords = value;
  }
  public resetInvalidKeywords() {
    this._invalidKeywords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidKeywordsInput() {
    return this._invalidKeywords;
  }

  // safety - computed: false, optional: true, required: false
  private _safety?: boolean | cdktn.IResolvable; 
  public get safety() {
    return this.getBooleanAttribute('safety');
  }
  public set safety(value: boolean | cdktn.IResolvable) {
    this._safety = value;
  }
  public resetSafety() {
    this._safety = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get safetyInput() {
    return this._safety;
  }

  // valid_topics - computed: false, optional: true, required: false
  private _validTopics?: string[]; 
  public get validTopics() {
    return this.getListAttribute('valid_topics');
  }
  public set validTopics(value: string[]) {
    this._validTopics = value;
  }
  public resetValidTopics() {
    this._validTopics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validTopicsInput() {
    return this._validTopics;
  }

  // pii - computed: false, optional: true, required: false
  private _pii = new ModelServingProvisionedThroughputAiGatewayGuardrailsInputPiiOutputReference(this, "pii");
  public get pii() {
    return this._pii;
  }
  public putPii(value: ModelServingProvisionedThroughputAiGatewayGuardrailsInputPii) {
    this._pii.internalValue = value;
  }
  public resetPii() {
    this._pii.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get piiInput() {
    return this._pii.internalValue;
  }
}
export interface ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPii {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/model_serving_provisioned_throughput#behavior ModelServingProvisionedThroughput#behavior}
  */
  readonly behavior?: string;
}

export function modelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiToTerraform(struct?: ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference | ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPii): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    behavior: cdktn.stringToTerraform(struct!.behavior),
  }
}


export function modelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiToHclTerraform(struct?: ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference | ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPii): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    behavior: {
      value: cdktn.stringToHclTerraform(struct!.behavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPii | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._behavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.behavior = this._behavior;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPii | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._behavior = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._behavior = value.behavior;
    }
  }

  // behavior - computed: false, optional: true, required: false
  private _behavior?: string; 
  public get behavior() {
    return this.getStringAttribute('behavior');
  }
  public set behavior(value: string) {
    this._behavior = value;
  }
  public resetBehavior() {
    this._behavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviorInput() {
    return this._behavior;
  }
}
export interface ModelServingProvisionedThroughputAiGatewayGuardrailsOutput {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/model_serving_provisioned_throughput#invalid_keywords ModelServingProvisionedThroughput#invalid_keywords}
  */
  readonly invalidKeywords?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/model_serving_provisioned_throughput#safety ModelServingProvisionedThroughput#safety}
  */
  readonly safety?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/model_serving_provisioned_throughput#valid_topics ModelServingProvisionedThroughput#valid_topics}
  */
  readonly validTopics?: string[];
  /**
  * pii block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/model_serving_provisioned_throughput#pii ModelServingProvisionedThroughput#pii}
  */
  readonly pii?: ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPii;
}

export function modelServingProvisionedThroughputAiGatewayGuardrailsOutputToTerraform(struct?: ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference | ModelServingProvisionedThroughputAiGatewayGuardrailsOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    invalid_keywords: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.invalidKeywords),
    safety: cdktn.booleanToTerraform(struct!.safety),
    valid_topics: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.validTopics),
    pii: modelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiToTerraform(struct!.pii),
  }
}


export function modelServingProvisionedThroughputAiGatewayGuardrailsOutputToHclTerraform(struct?: ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference | ModelServingProvisionedThroughputAiGatewayGuardrailsOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    invalid_keywords: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.invalidKeywords),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    safety: {
      value: cdktn.booleanToHclTerraform(struct!.safety),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    valid_topics: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.validTopics),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    pii: {
      value: modelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiToHclTerraform(struct!.pii),
      isBlock: true,
      type: "list",
      storageClassType: "ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ModelServingProvisionedThroughputAiGatewayGuardrailsOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invalidKeywords !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidKeywords = this._invalidKeywords;
    }
    if (this._safety !== undefined) {
      hasAnyValues = true;
      internalValueResult.safety = this._safety;
    }
    if (this._validTopics !== undefined) {
      hasAnyValues = true;
      internalValueResult.validTopics = this._validTopics;
    }
    if (this._pii?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pii = this._pii?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ModelServingProvisionedThroughputAiGatewayGuardrailsOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._invalidKeywords = undefined;
      this._safety = undefined;
      this._validTopics = undefined;
      this._pii.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._invalidKeywords = value.invalidKeywords;
      this._safety = value.safety;
      this._validTopics = value.validTopics;
      this._pii.internalValue = value.pii;
    }
  }

  // invalid_keywords - computed: false, optional: true, required: false
  private _invalidKeywords?: string[]; 
  public get invalidKeywords() {
    return this.getListAttribute('invalid_keywords');
  }
  public set invalidKeywords(value: string[]) {
    this._invalidKeywords = value;
  }
  public resetInvalidKeywords() {
    this._invalidKeywords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidKeywordsInput() {
    return this._invalidKeywords;
  }

  // safety - computed: false, optional: true, required: false
  private _safety?: boolean | cdktn.IResolvable; 
  public get safety() {
    return this.getBooleanAttribute('safety');
  }
  public set safety(value: boolean | cdktn.IResolvable) {
    this._safety = value;
  }
  public resetSafety() {
    this._safety = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get safetyInput() {
    return this._safety;
  }

  // valid_topics - computed: false, optional: true, required: false
  private _validTopics?: string[]; 
  public get validTopics() {
    return this.getListAttribute('valid_topics');
  }
  public set validTopics(value: string[]) {
    this._validTopics = value;
  }
  public resetValidTopics() {
    this._validTopics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validTopicsInput() {
    return this._validTopics;
  }

  // pii - computed: false, optional: true, required: false
  private _pii = new ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPiiOutputReference(this, "pii");
  public get pii() {
    return this._pii;
  }
  public putPii(value: ModelServingProvisionedThroughputAiGatewayGuardrailsOutputPii) {
    this._pii.internalValue = value;
  }
  public resetPii() {
    this._pii.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get piiInput() {
    return this._pii.internalValue;
  }
}
export interface ModelServingProvisionedThroughputAiGatewayGuardrails {
  /**
  * input block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/model_serving_provisioned_throughput#input ModelServingProvisionedThroughput#input}
  */
  readonly input?: ModelServingProvisionedThroughputAiGatewayGuardrailsInput;
  /**
  * output block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/model_serving_provisioned_throughput#output ModelServingProvisionedThroughput#output}
  */
  readonly output?: ModelServingProvisionedThroughputAiGatewayGuardrailsOutput;
}

export function modelServingProvisionedThroughputAiGatewayGuardrailsToTerraform(struct?: ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference | ModelServingProvisionedThroughputAiGatewayGuardrails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    input: modelServingProvisionedThroughputAiGatewayGuardrailsInputToTerraform(struct!.input),
    output: modelServingProvisionedThroughputAiGatewayGuardrailsOutputToTerraform(struct!.output),
  }
}


export function modelServingProvisionedThroughputAiGatewayGuardrailsToHclTerraform(struct?: ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference | ModelServingProvisionedThroughputAiGatewayGuardrails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    input: {
      value: modelServingProvisionedThroughputAiGatewayGuardrailsInputToHclTerraform(struct!.input),
      isBlock: true,
      type: "list",
      storageClassType: "ModelServingProvisionedThroughputAiGatewayGuardrailsInputList",
    },
    output: {
      value: modelServingProvisionedThroughputAiGatewayGuardrailsOutputToHclTerraform(struct!.output),
      isBlock: true,
      type: "list",
      storageClassType: "ModelServingProvisionedThroughputAiGatewayGuardrailsOutputList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ModelServingProvisionedThroughputAiGatewayGuardrails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._input?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.input = this._input?.internalValue;
    }
    if (this._output?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.output = this._output?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ModelServingProvisionedThroughputAiGatewayGuardrails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._input.internalValue = undefined;
      this._output.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._input.internalValue = value.input;
      this._output.internalValue = value.output;
    }
  }

  // input - computed: false, optional: true, required: false
  private _input = new ModelServingProvisionedThroughputAiGatewayGuardrailsInputOutputReference(this, "input");
  public get input() {
    return this._input;
  }
  public putInput(value: ModelServingProvisionedThroughputAiGatewayGuardrailsInput) {
    this._input.internalValue = value;
  }
  public resetInput() {
    this._input.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input.internalValue;
  }

  // output - computed: false, optional: true, required: false
  private _output = new ModelServingProvisionedThroughputAiGatewayGuardrailsOutputOutputReference(this, "output");
  public get output() {
    return this._output;
  }
  public putOutput(value: ModelServingProvisionedThroughputAiGatewayGuardrailsOutput) {
    this._output.internalValue = value;
  }
  public resetOutput() {
    this._output.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputInput() {
    return this._output.internalValue;
  }
}
export interface ModelServingProvisionedThroughputAiGatewayInferenceTableConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/model_serving_provisioned_throughput#catalog_name ModelServingProvisionedThroughput#catalog_name}
  */
  readonly catalogName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/model_serving_provisioned_throughput#enabled ModelServingProvisionedThroughput#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/model_serving_provisioned_throughput#schema_name ModelServingProvisionedThroughput#schema_name}
  */
  readonly schemaName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/model_serving_provisioned_throughput#table_name_prefix ModelServingProvisionedThroughput#table_name_prefix}
  */
  readonly tableNamePrefix?: string;
}

export function modelServingProvisionedThroughputAiGatewayInferenceTableConfigToTerraform(struct?: ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference | ModelServingProvisionedThroughputAiGatewayInferenceTableConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    catalog_name: cdktn.stringToTerraform(struct!.catalogName),
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    schema_name: cdktn.stringToTerraform(struct!.schemaName),
    table_name_prefix: cdktn.stringToTerraform(struct!.tableNamePrefix),
  }
}


export function modelServingProvisionedThroughputAiGatewayInferenceTableConfigToHclTerraform(struct?: ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference | ModelServingProvisionedThroughputAiGatewayInferenceTableConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    catalog_name: {
      value: cdktn.stringToHclTerraform(struct!.catalogName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    schema_name: {
      value: cdktn.stringToHclTerraform(struct!.schemaName),
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

export class ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ModelServingProvisionedThroughputAiGatewayInferenceTableConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalogName !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogName = this._catalogName;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._schemaName !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaName = this._schemaName;
    }
    if (this._tableNamePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableNamePrefix = this._tableNamePrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ModelServingProvisionedThroughputAiGatewayInferenceTableConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._catalogName = undefined;
      this._enabled = undefined;
      this._schemaName = undefined;
      this._tableNamePrefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._catalogName = value.catalogName;
      this._enabled = value.enabled;
      this._schemaName = value.schemaName;
      this._tableNamePrefix = value.tableNamePrefix;
    }
  }

  // catalog_name - computed: false, optional: true, required: false
  private _catalogName?: string; 
  public get catalogName() {
    return this.getStringAttribute('catalog_name');
  }
  public set catalogName(value: string) {
    this._catalogName = value;
  }
  public resetCatalogName() {
    this._catalogName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogNameInput() {
    return this._catalogName;
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

  // schema_name - computed: false, optional: true, required: false
  private _schemaName?: string; 
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
  public set schemaName(value: string) {
    this._schemaName = value;
  }
  public resetSchemaName() {
    this._schemaName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaNameInput() {
    return this._schemaName;
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
export interface ModelServingProvisionedThroughputAiGatewayRateLimits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/model_serving_provisioned_throughput#calls ModelServingProvisionedThroughput#calls}
  */
  readonly calls?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/model_serving_provisioned_throughput#key ModelServingProvisionedThroughput#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/model_serving_provisioned_throughput#principal ModelServingProvisionedThroughput#principal}
  */
  readonly principal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/model_serving_provisioned_throughput#renewal_period ModelServingProvisionedThroughput#renewal_period}
  */
  readonly renewalPeriod: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/model_serving_provisioned_throughput#tokens ModelServingProvisionedThroughput#tokens}
  */
  readonly tokens?: number;
}

export function modelServingProvisionedThroughputAiGatewayRateLimitsToTerraform(struct?: ModelServingProvisionedThroughputAiGatewayRateLimits | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    calls: cdktn.numberToTerraform(struct!.calls),
    key: cdktn.stringToTerraform(struct!.key),
    principal: cdktn.stringToTerraform(struct!.principal),
    renewal_period: cdktn.stringToTerraform(struct!.renewalPeriod),
    tokens: cdktn.numberToTerraform(struct!.tokens),
  }
}


export function modelServingProvisionedThroughputAiGatewayRateLimitsToHclTerraform(struct?: ModelServingProvisionedThroughputAiGatewayRateLimits | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    calls: {
      value: cdktn.numberToHclTerraform(struct!.calls),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
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

export class ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ModelServingProvisionedThroughputAiGatewayRateLimits | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._calls !== undefined) {
      hasAnyValues = true;
      internalValueResult.calls = this._calls;
    }
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
    if (this._tokens !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokens = this._tokens;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ModelServingProvisionedThroughputAiGatewayRateLimits | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._calls = undefined;
      this._key = undefined;
      this._principal = undefined;
      this._renewalPeriod = undefined;
      this._tokens = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._calls = value.calls;
      this._key = value.key;
      this._principal = value.principal;
      this._renewalPeriod = value.renewalPeriod;
      this._tokens = value.tokens;
    }
  }

  // calls - computed: false, optional: true, required: false
  private _calls?: number; 
  public get calls() {
    return this.getNumberAttribute('calls');
  }
  public set calls(value: number) {
    this._calls = value;
  }
  public resetCalls() {
    this._calls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callsInput() {
    return this._calls;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
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

export class ModelServingProvisionedThroughputAiGatewayRateLimitsList extends cdktn.ComplexList {
  public internalValue? : ModelServingProvisionedThroughputAiGatewayRateLimits[] | cdktn.IResolvable

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
  public get(index: number): ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference {
    return new ModelServingProvisionedThroughputAiGatewayRateLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ModelServingProvisionedThroughputAiGatewayUsageTrackingConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/model_serving_provisioned_throughput#enabled ModelServingProvisionedThroughput#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function modelServingProvisionedThroughputAiGatewayUsageTrackingConfigToTerraform(struct?: ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference | ModelServingProvisionedThroughputAiGatewayUsageTrackingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function modelServingProvisionedThroughputAiGatewayUsageTrackingConfigToHclTerraform(struct?: ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference | ModelServingProvisionedThroughputAiGatewayUsageTrackingConfig): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ModelServingProvisionedThroughputAiGatewayUsageTrackingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ModelServingProvisionedThroughputAiGatewayUsageTrackingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
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
}
export interface ModelServingProvisionedThroughputAiGateway {
  /**
  * fallback_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/model_serving_provisioned_throughput#fallback_config ModelServingProvisionedThroughput#fallback_config}
  */
  readonly fallbackConfig?: ModelServingProvisionedThroughputAiGatewayFallbackConfig;
  /**
  * guardrails block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/model_serving_provisioned_throughput#guardrails ModelServingProvisionedThroughput#guardrails}
  */
  readonly guardrails?: ModelServingProvisionedThroughputAiGatewayGuardrails;
  /**
  * inference_table_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/model_serving_provisioned_throughput#inference_table_config ModelServingProvisionedThroughput#inference_table_config}
  */
  readonly inferenceTableConfig?: ModelServingProvisionedThroughputAiGatewayInferenceTableConfig;
  /**
  * rate_limits block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/model_serving_provisioned_throughput#rate_limits ModelServingProvisionedThroughput#rate_limits}
  */
  readonly rateLimits?: ModelServingProvisionedThroughputAiGatewayRateLimits[] | cdktn.IResolvable;
  /**
  * usage_tracking_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/model_serving_provisioned_throughput#usage_tracking_config ModelServingProvisionedThroughput#usage_tracking_config}
  */
  readonly usageTrackingConfig?: ModelServingProvisionedThroughputAiGatewayUsageTrackingConfig;
}

export function modelServingProvisionedThroughputAiGatewayToTerraform(struct?: ModelServingProvisionedThroughputAiGatewayOutputReference | ModelServingProvisionedThroughputAiGateway): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fallback_config: modelServingProvisionedThroughputAiGatewayFallbackConfigToTerraform(struct!.fallbackConfig),
    guardrails: modelServingProvisionedThroughputAiGatewayGuardrailsToTerraform(struct!.guardrails),
    inference_table_config: modelServingProvisionedThroughputAiGatewayInferenceTableConfigToTerraform(struct!.inferenceTableConfig),
    rate_limits: cdktn.listMapper(modelServingProvisionedThroughputAiGatewayRateLimitsToTerraform, true)(struct!.rateLimits),
    usage_tracking_config: modelServingProvisionedThroughputAiGatewayUsageTrackingConfigToTerraform(struct!.usageTrackingConfig),
  }
}


export function modelServingProvisionedThroughputAiGatewayToHclTerraform(struct?: ModelServingProvisionedThroughputAiGatewayOutputReference | ModelServingProvisionedThroughputAiGateway): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    fallback_config: {
      value: modelServingProvisionedThroughputAiGatewayFallbackConfigToHclTerraform(struct!.fallbackConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ModelServingProvisionedThroughputAiGatewayFallbackConfigList",
    },
    guardrails: {
      value: modelServingProvisionedThroughputAiGatewayGuardrailsToHclTerraform(struct!.guardrails),
      isBlock: true,
      type: "list",
      storageClassType: "ModelServingProvisionedThroughputAiGatewayGuardrailsList",
    },
    inference_table_config: {
      value: modelServingProvisionedThroughputAiGatewayInferenceTableConfigToHclTerraform(struct!.inferenceTableConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ModelServingProvisionedThroughputAiGatewayInferenceTableConfigList",
    },
    rate_limits: {
      value: cdktn.listMapperHcl(modelServingProvisionedThroughputAiGatewayRateLimitsToHclTerraform, true)(struct!.rateLimits),
      isBlock: true,
      type: "list",
      storageClassType: "ModelServingProvisionedThroughputAiGatewayRateLimitsList",
    },
    usage_tracking_config: {
      value: modelServingProvisionedThroughputAiGatewayUsageTrackingConfigToHclTerraform(struct!.usageTrackingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ModelServingProvisionedThroughputAiGatewayOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ModelServingProvisionedThroughputAiGateway | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fallbackConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackConfig = this._fallbackConfig?.internalValue;
    }
    if (this._guardrails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.guardrails = this._guardrails?.internalValue;
    }
    if (this._inferenceTableConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inferenceTableConfig = this._inferenceTableConfig?.internalValue;
    }
    if (this._rateLimits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimits = this._rateLimits?.internalValue;
    }
    if (this._usageTrackingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.usageTrackingConfig = this._usageTrackingConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ModelServingProvisionedThroughputAiGateway | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fallbackConfig.internalValue = undefined;
      this._guardrails.internalValue = undefined;
      this._inferenceTableConfig.internalValue = undefined;
      this._rateLimits.internalValue = undefined;
      this._usageTrackingConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fallbackConfig.internalValue = value.fallbackConfig;
      this._guardrails.internalValue = value.guardrails;
      this._inferenceTableConfig.internalValue = value.inferenceTableConfig;
      this._rateLimits.internalValue = value.rateLimits;
      this._usageTrackingConfig.internalValue = value.usageTrackingConfig;
    }
  }

  // fallback_config - computed: false, optional: true, required: false
  private _fallbackConfig = new ModelServingProvisionedThroughputAiGatewayFallbackConfigOutputReference(this, "fallback_config");
  public get fallbackConfig() {
    return this._fallbackConfig;
  }
  public putFallbackConfig(value: ModelServingProvisionedThroughputAiGatewayFallbackConfig) {
    this._fallbackConfig.internalValue = value;
  }
  public resetFallbackConfig() {
    this._fallbackConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackConfigInput() {
    return this._fallbackConfig.internalValue;
  }

  // guardrails - computed: false, optional: true, required: false
  private _guardrails = new ModelServingProvisionedThroughputAiGatewayGuardrailsOutputReference(this, "guardrails");
  public get guardrails() {
    return this._guardrails;
  }
  public putGuardrails(value: ModelServingProvisionedThroughputAiGatewayGuardrails) {
    this._guardrails.internalValue = value;
  }
  public resetGuardrails() {
    this._guardrails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guardrailsInput() {
    return this._guardrails.internalValue;
  }

  // inference_table_config - computed: false, optional: true, required: false
  private _inferenceTableConfig = new ModelServingProvisionedThroughputAiGatewayInferenceTableConfigOutputReference(this, "inference_table_config");
  public get inferenceTableConfig() {
    return this._inferenceTableConfig;
  }
  public putInferenceTableConfig(value: ModelServingProvisionedThroughputAiGatewayInferenceTableConfig) {
    this._inferenceTableConfig.internalValue = value;
  }
  public resetInferenceTableConfig() {
    this._inferenceTableConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inferenceTableConfigInput() {
    return this._inferenceTableConfig.internalValue;
  }

  // rate_limits - computed: false, optional: true, required: false
  private _rateLimits = new ModelServingProvisionedThroughputAiGatewayRateLimitsList(this, "rate_limits", false);
  public get rateLimits() {
    return this._rateLimits;
  }
  public putRateLimits(value: ModelServingProvisionedThroughputAiGatewayRateLimits[] | cdktn.IResolvable) {
    this._rateLimits.internalValue = value;
  }
  public resetRateLimits() {
    this._rateLimits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitsInput() {
    return this._rateLimits.internalValue;
  }

  // usage_tracking_config - computed: false, optional: true, required: false
  private _usageTrackingConfig = new ModelServingProvisionedThroughputAiGatewayUsageTrackingConfigOutputReference(this, "usage_tracking_config");
  public get usageTrackingConfig() {
    return this._usageTrackingConfig;
  }
  public putUsageTrackingConfig(value: ModelServingProvisionedThroughputAiGatewayUsageTrackingConfig) {
    this._usageTrackingConfig.internalValue = value;
  }
  public resetUsageTrackingConfig() {
    this._usageTrackingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usageTrackingConfigInput() {
    return this._usageTrackingConfig.internalValue;
  }
}
export interface ModelServingProvisionedThroughputConfigServedEntities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/model_serving_provisioned_throughput#burst_scaling_enabled ModelServingProvisionedThroughput#burst_scaling_enabled}
  */
  readonly burstScalingEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/model_serving_provisioned_throughput#entity_name ModelServingProvisionedThroughput#entity_name}
  */
  readonly entityName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/model_serving_provisioned_throughput#entity_version ModelServingProvisionedThroughput#entity_version}
  */
  readonly entityVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/model_serving_provisioned_throughput#name ModelServingProvisionedThroughput#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/model_serving_provisioned_throughput#provisioned_model_units ModelServingProvisionedThroughput#provisioned_model_units}
  */
  readonly provisionedModelUnits: number;
}

export function modelServingProvisionedThroughputConfigServedEntitiesToTerraform(struct?: ModelServingProvisionedThroughputConfigServedEntities | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    burst_scaling_enabled: cdktn.booleanToTerraform(struct!.burstScalingEnabled),
    entity_name: cdktn.stringToTerraform(struct!.entityName),
    entity_version: cdktn.stringToTerraform(struct!.entityVersion),
    name: cdktn.stringToTerraform(struct!.name),
    provisioned_model_units: cdktn.numberToTerraform(struct!.provisionedModelUnits),
  }
}


export function modelServingProvisionedThroughputConfigServedEntitiesToHclTerraform(struct?: ModelServingProvisionedThroughputConfigServedEntities | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    burst_scaling_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.burstScalingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    entity_name: {
      value: cdktn.stringToHclTerraform(struct!.entityName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entity_version: {
      value: cdktn.stringToHclTerraform(struct!.entityVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provisioned_model_units: {
      value: cdktn.numberToHclTerraform(struct!.provisionedModelUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ModelServingProvisionedThroughputConfigServedEntitiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ModelServingProvisionedThroughputConfigServedEntities | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._burstScalingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.burstScalingEnabled = this._burstScalingEnabled;
    }
    if (this._entityName !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityName = this._entityName;
    }
    if (this._entityVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityVersion = this._entityVersion;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._provisionedModelUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionedModelUnits = this._provisionedModelUnits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ModelServingProvisionedThroughputConfigServedEntities | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._burstScalingEnabled = undefined;
      this._entityName = undefined;
      this._entityVersion = undefined;
      this._name = undefined;
      this._provisionedModelUnits = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._burstScalingEnabled = value.burstScalingEnabled;
      this._entityName = value.entityName;
      this._entityVersion = value.entityVersion;
      this._name = value.name;
      this._provisionedModelUnits = value.provisionedModelUnits;
    }
  }

  // burst_scaling_enabled - computed: false, optional: true, required: false
  private _burstScalingEnabled?: boolean | cdktn.IResolvable; 
  public get burstScalingEnabled() {
    return this.getBooleanAttribute('burst_scaling_enabled');
  }
  public set burstScalingEnabled(value: boolean | cdktn.IResolvable) {
    this._burstScalingEnabled = value;
  }
  public resetBurstScalingEnabled() {
    this._burstScalingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstScalingEnabledInput() {
    return this._burstScalingEnabled;
  }

  // entity_name - computed: false, optional: false, required: true
  private _entityName?: string; 
  public get entityName() {
    return this.getStringAttribute('entity_name');
  }
  public set entityName(value: string) {
    this._entityName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityNameInput() {
    return this._entityName;
  }

  // entity_version - computed: false, optional: false, required: true
  private _entityVersion?: string; 
  public get entityVersion() {
    return this.getStringAttribute('entity_version');
  }
  public set entityVersion(value: string) {
    this._entityVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityVersionInput() {
    return this._entityVersion;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // provisioned_model_units - computed: false, optional: false, required: true
  private _provisionedModelUnits?: number; 
  public get provisionedModelUnits() {
    return this.getNumberAttribute('provisioned_model_units');
  }
  public set provisionedModelUnits(value: number) {
    this._provisionedModelUnits = value;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedModelUnitsInput() {
    return this._provisionedModelUnits;
  }
}

export class ModelServingProvisionedThroughputConfigServedEntitiesList extends cdktn.ComplexList {
  public internalValue? : ModelServingProvisionedThroughputConfigServedEntities[] | cdktn.IResolvable

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
  public get(index: number): ModelServingProvisionedThroughputConfigServedEntitiesOutputReference {
    return new ModelServingProvisionedThroughputConfigServedEntitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ModelServingProvisionedThroughputConfigTrafficConfigRoutes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/model_serving_provisioned_throughput#served_entity_name ModelServingProvisionedThroughput#served_entity_name}
  */
  readonly servedEntityName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/model_serving_provisioned_throughput#served_model_name ModelServingProvisionedThroughput#served_model_name}
  */
  readonly servedModelName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/model_serving_provisioned_throughput#traffic_percentage ModelServingProvisionedThroughput#traffic_percentage}
  */
  readonly trafficPercentage: number;
}

export function modelServingProvisionedThroughputConfigTrafficConfigRoutesToTerraform(struct?: ModelServingProvisionedThroughputConfigTrafficConfigRoutes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    served_entity_name: cdktn.stringToTerraform(struct!.servedEntityName),
    served_model_name: cdktn.stringToTerraform(struct!.servedModelName),
    traffic_percentage: cdktn.numberToTerraform(struct!.trafficPercentage),
  }
}


export function modelServingProvisionedThroughputConfigTrafficConfigRoutesToHclTerraform(struct?: ModelServingProvisionedThroughputConfigTrafficConfigRoutes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    served_entity_name: {
      value: cdktn.stringToHclTerraform(struct!.servedEntityName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    served_model_name: {
      value: cdktn.stringToHclTerraform(struct!.servedModelName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ModelServingProvisionedThroughputConfigTrafficConfigRoutes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._servedEntityName !== undefined) {
      hasAnyValues = true;
      internalValueResult.servedEntityName = this._servedEntityName;
    }
    if (this._servedModelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.servedModelName = this._servedModelName;
    }
    if (this._trafficPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficPercentage = this._trafficPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ModelServingProvisionedThroughputConfigTrafficConfigRoutes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._servedEntityName = undefined;
      this._servedModelName = undefined;
      this._trafficPercentage = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._servedEntityName = value.servedEntityName;
      this._servedModelName = value.servedModelName;
      this._trafficPercentage = value.trafficPercentage;
    }
  }

  // served_entity_name - computed: false, optional: true, required: false
  private _servedEntityName?: string; 
  public get servedEntityName() {
    return this.getStringAttribute('served_entity_name');
  }
  public set servedEntityName(value: string) {
    this._servedEntityName = value;
  }
  public resetServedEntityName() {
    this._servedEntityName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servedEntityNameInput() {
    return this._servedEntityName;
  }

  // served_model_name - computed: false, optional: true, required: false
  private _servedModelName?: string; 
  public get servedModelName() {
    return this.getStringAttribute('served_model_name');
  }
  public set servedModelName(value: string) {
    this._servedModelName = value;
  }
  public resetServedModelName() {
    this._servedModelName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servedModelNameInput() {
    return this._servedModelName;
  }

  // traffic_percentage - computed: false, optional: false, required: true
  private _trafficPercentage?: number; 
  public get trafficPercentage() {
    return this.getNumberAttribute('traffic_percentage');
  }
  public set trafficPercentage(value: number) {
    this._trafficPercentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficPercentageInput() {
    return this._trafficPercentage;
  }
}

export class ModelServingProvisionedThroughputConfigTrafficConfigRoutesList extends cdktn.ComplexList {
  public internalValue? : ModelServingProvisionedThroughputConfigTrafficConfigRoutes[] | cdktn.IResolvable

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
  public get(index: number): ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference {
    return new ModelServingProvisionedThroughputConfigTrafficConfigRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ModelServingProvisionedThroughputConfigTrafficConfig {
  /**
  * routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/model_serving_provisioned_throughput#routes ModelServingProvisionedThroughput#routes}
  */
  readonly routes?: ModelServingProvisionedThroughputConfigTrafficConfigRoutes[] | cdktn.IResolvable;
}

export function modelServingProvisionedThroughputConfigTrafficConfigToTerraform(struct?: ModelServingProvisionedThroughputConfigTrafficConfigOutputReference | ModelServingProvisionedThroughputConfigTrafficConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    routes: cdktn.listMapper(modelServingProvisionedThroughputConfigTrafficConfigRoutesToTerraform, true)(struct!.routes),
  }
}


export function modelServingProvisionedThroughputConfigTrafficConfigToHclTerraform(struct?: ModelServingProvisionedThroughputConfigTrafficConfigOutputReference | ModelServingProvisionedThroughputConfigTrafficConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    routes: {
      value: cdktn.listMapperHcl(modelServingProvisionedThroughputConfigTrafficConfigRoutesToHclTerraform, true)(struct!.routes),
      isBlock: true,
      type: "list",
      storageClassType: "ModelServingProvisionedThroughputConfigTrafficConfigRoutesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ModelServingProvisionedThroughputConfigTrafficConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ModelServingProvisionedThroughputConfigTrafficConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routes = this._routes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ModelServingProvisionedThroughputConfigTrafficConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._routes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._routes.internalValue = value.routes;
    }
  }

  // routes - computed: false, optional: true, required: false
  private _routes = new ModelServingProvisionedThroughputConfigTrafficConfigRoutesList(this, "routes", false);
  public get routes() {
    return this._routes;
  }
  public putRoutes(value: ModelServingProvisionedThroughputConfigTrafficConfigRoutes[] | cdktn.IResolvable) {
    this._routes.internalValue = value;
  }
  public resetRoutes() {
    this._routes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routesInput() {
    return this._routes.internalValue;
  }
}
export interface ModelServingProvisionedThroughputConfigA {
  /**
  * served_entities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/model_serving_provisioned_throughput#served_entities ModelServingProvisionedThroughput#served_entities}
  */
  readonly servedEntities?: ModelServingProvisionedThroughputConfigServedEntities[] | cdktn.IResolvable;
  /**
  * traffic_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/model_serving_provisioned_throughput#traffic_config ModelServingProvisionedThroughput#traffic_config}
  */
  readonly trafficConfig?: ModelServingProvisionedThroughputConfigTrafficConfig;
}

export function modelServingProvisionedThroughputConfigAToTerraform(struct?: ModelServingProvisionedThroughputConfigAOutputReference | ModelServingProvisionedThroughputConfigA): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    served_entities: cdktn.listMapper(modelServingProvisionedThroughputConfigServedEntitiesToTerraform, true)(struct!.servedEntities),
    traffic_config: modelServingProvisionedThroughputConfigTrafficConfigToTerraform(struct!.trafficConfig),
  }
}


export function modelServingProvisionedThroughputConfigAToHclTerraform(struct?: ModelServingProvisionedThroughputConfigAOutputReference | ModelServingProvisionedThroughputConfigA): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    served_entities: {
      value: cdktn.listMapperHcl(modelServingProvisionedThroughputConfigServedEntitiesToHclTerraform, true)(struct!.servedEntities),
      isBlock: true,
      type: "list",
      storageClassType: "ModelServingProvisionedThroughputConfigServedEntitiesList",
    },
    traffic_config: {
      value: modelServingProvisionedThroughputConfigTrafficConfigToHclTerraform(struct!.trafficConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ModelServingProvisionedThroughputConfigTrafficConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ModelServingProvisionedThroughputConfigAOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ModelServingProvisionedThroughputConfigA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._servedEntities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.servedEntities = this._servedEntities?.internalValue;
    }
    if (this._trafficConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficConfig = this._trafficConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ModelServingProvisionedThroughputConfigA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._servedEntities.internalValue = undefined;
      this._trafficConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._servedEntities.internalValue = value.servedEntities;
      this._trafficConfig.internalValue = value.trafficConfig;
    }
  }

  // served_entities - computed: false, optional: true, required: false
  private _servedEntities = new ModelServingProvisionedThroughputConfigServedEntitiesList(this, "served_entities", false);
  public get servedEntities() {
    return this._servedEntities;
  }
  public putServedEntities(value: ModelServingProvisionedThroughputConfigServedEntities[] | cdktn.IResolvable) {
    this._servedEntities.internalValue = value;
  }
  public resetServedEntities() {
    this._servedEntities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servedEntitiesInput() {
    return this._servedEntities.internalValue;
  }

  // traffic_config - computed: false, optional: true, required: false
  private _trafficConfig = new ModelServingProvisionedThroughputConfigTrafficConfigOutputReference(this, "traffic_config");
  public get trafficConfig() {
    return this._trafficConfig;
  }
  public putTrafficConfig(value: ModelServingProvisionedThroughputConfigTrafficConfig) {
    this._trafficConfig.internalValue = value;
  }
  public resetTrafficConfig() {
    this._trafficConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficConfigInput() {
    return this._trafficConfig.internalValue;
  }
}
export interface ModelServingProvisionedThroughputEmailNotifications {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/model_serving_provisioned_throughput#on_update_failure ModelServingProvisionedThroughput#on_update_failure}
  */
  readonly onUpdateFailure?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/model_serving_provisioned_throughput#on_update_success ModelServingProvisionedThroughput#on_update_success}
  */
  readonly onUpdateSuccess?: string[];
}

export function modelServingProvisionedThroughputEmailNotificationsToTerraform(struct?: ModelServingProvisionedThroughputEmailNotificationsOutputReference | ModelServingProvisionedThroughputEmailNotifications): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    on_update_failure: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.onUpdateFailure),
    on_update_success: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.onUpdateSuccess),
  }
}


export function modelServingProvisionedThroughputEmailNotificationsToHclTerraform(struct?: ModelServingProvisionedThroughputEmailNotificationsOutputReference | ModelServingProvisionedThroughputEmailNotifications): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    on_update_failure: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.onUpdateFailure),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    on_update_success: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.onUpdateSuccess),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ModelServingProvisionedThroughputEmailNotificationsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ModelServingProvisionedThroughputEmailNotifications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._onUpdateFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.onUpdateFailure = this._onUpdateFailure;
    }
    if (this._onUpdateSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.onUpdateSuccess = this._onUpdateSuccess;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ModelServingProvisionedThroughputEmailNotifications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._onUpdateFailure = undefined;
      this._onUpdateSuccess = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._onUpdateFailure = value.onUpdateFailure;
      this._onUpdateSuccess = value.onUpdateSuccess;
    }
  }

  // on_update_failure - computed: false, optional: true, required: false
  private _onUpdateFailure?: string[]; 
  public get onUpdateFailure() {
    return this.getListAttribute('on_update_failure');
  }
  public set onUpdateFailure(value: string[]) {
    this._onUpdateFailure = value;
  }
  public resetOnUpdateFailure() {
    this._onUpdateFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onUpdateFailureInput() {
    return this._onUpdateFailure;
  }

  // on_update_success - computed: false, optional: true, required: false
  private _onUpdateSuccess?: string[]; 
  public get onUpdateSuccess() {
    return this.getListAttribute('on_update_success');
  }
  public set onUpdateSuccess(value: string[]) {
    this._onUpdateSuccess = value;
  }
  public resetOnUpdateSuccess() {
    this._onUpdateSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onUpdateSuccessInput() {
    return this._onUpdateSuccess;
  }
}
export interface ModelServingProvisionedThroughputProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/model_serving_provisioned_throughput#workspace_id ModelServingProvisionedThroughput#workspace_id}
  */
  readonly workspaceId?: string;
}

export function modelServingProvisionedThroughputProviderConfigToTerraform(struct?: ModelServingProvisionedThroughputProviderConfigOutputReference | ModelServingProvisionedThroughputProviderConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function modelServingProvisionedThroughputProviderConfigToHclTerraform(struct?: ModelServingProvisionedThroughputProviderConfigOutputReference | ModelServingProvisionedThroughputProviderConfig): any {
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

export class ModelServingProvisionedThroughputProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ModelServingProvisionedThroughputProviderConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceId = this._workspaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ModelServingProvisionedThroughputProviderConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._workspaceId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface ModelServingProvisionedThroughputTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/model_serving_provisioned_throughput#key ModelServingProvisionedThroughput#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/model_serving_provisioned_throughput#value ModelServingProvisionedThroughput#value}
  */
  readonly value?: string;
}

export function modelServingProvisionedThroughputTagsToTerraform(struct?: ModelServingProvisionedThroughputTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function modelServingProvisionedThroughputTagsToHclTerraform(struct?: ModelServingProvisionedThroughputTags | cdktn.IResolvable): any {
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

export class ModelServingProvisionedThroughputTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ModelServingProvisionedThroughputTags | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: ModelServingProvisionedThroughputTags | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
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

  // value - computed: false, optional: true, required: false
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

export class ModelServingProvisionedThroughputTagsList extends cdktn.ComplexList {
  public internalValue? : ModelServingProvisionedThroughputTags[] | cdktn.IResolvable

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
  public get(index: number): ModelServingProvisionedThroughputTagsOutputReference {
    return new ModelServingProvisionedThroughputTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ModelServingProvisionedThroughputTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/model_serving_provisioned_throughput#create ModelServingProvisionedThroughput#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/model_serving_provisioned_throughput#update ModelServingProvisionedThroughput#update}
  */
  readonly update?: string;
}

export function modelServingProvisionedThroughputTimeoutsToTerraform(struct?: ModelServingProvisionedThroughputTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function modelServingProvisionedThroughputTimeoutsToHclTerraform(struct?: ModelServingProvisionedThroughputTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    create: {
      value: cdktn.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktn.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ModelServingProvisionedThroughputTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ModelServingProvisionedThroughputTimeouts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ModelServingProvisionedThroughputTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._update = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/model_serving_provisioned_throughput databricks_model_serving_provisioned_throughput}
*/
export class ModelServingProvisionedThroughput extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_model_serving_provisioned_throughput";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ModelServingProvisionedThroughput resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ModelServingProvisionedThroughput to import
  * @param importFromId The id of the existing ModelServingProvisionedThroughput that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/model_serving_provisioned_throughput#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ModelServingProvisionedThroughput to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_model_serving_provisioned_throughput", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/model_serving_provisioned_throughput databricks_model_serving_provisioned_throughput} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ModelServingProvisionedThroughputConfig
  */
  public constructor(scope: Construct, id: string, config: ModelServingProvisionedThroughputConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_model_serving_provisioned_throughput',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.120.0',
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
    this._budgetPolicyId = config.budgetPolicyId;
    this._id = config.id;
    this._name = config.name;
    this._aiGateway.internalValue = config.aiGateway;
    this._config.internalValue = config.config;
    this._emailNotifications.internalValue = config.emailNotifications;
    this._providerConfig.internalValue = config.providerConfig;
    this._tags.internalValue = config.tags;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // budget_policy_id - computed: false, optional: true, required: false
  private _budgetPolicyId?: string; 
  public get budgetPolicyId() {
    return this.getStringAttribute('budget_policy_id');
  }
  public set budgetPolicyId(value: string) {
    this._budgetPolicyId = value;
  }
  public resetBudgetPolicyId() {
    this._budgetPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get budgetPolicyIdInput() {
    return this._budgetPolicyId;
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

  // serving_endpoint_id - computed: true, optional: false, required: false
  public get servingEndpointId() {
    return this.getStringAttribute('serving_endpoint_id');
  }

  // ai_gateway - computed: false, optional: true, required: false
  private _aiGateway = new ModelServingProvisionedThroughputAiGatewayOutputReference(this, "ai_gateway");
  public get aiGateway() {
    return this._aiGateway;
  }
  public putAiGateway(value: ModelServingProvisionedThroughputAiGateway) {
    this._aiGateway.internalValue = value;
  }
  public resetAiGateway() {
    this._aiGateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aiGatewayInput() {
    return this._aiGateway.internalValue;
  }

  // config - computed: false, optional: false, required: true
  private _config = new ModelServingProvisionedThroughputConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: ModelServingProvisionedThroughputConfigA) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // email_notifications - computed: false, optional: true, required: false
  private _emailNotifications = new ModelServingProvisionedThroughputEmailNotificationsOutputReference(this, "email_notifications");
  public get emailNotifications() {
    return this._emailNotifications;
  }
  public putEmailNotifications(value: ModelServingProvisionedThroughputEmailNotifications) {
    this._emailNotifications.internalValue = value;
  }
  public resetEmailNotifications() {
    this._emailNotifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailNotificationsInput() {
    return this._emailNotifications.internalValue;
  }

  // provider_config - computed: false, optional: true, required: false
  private _providerConfig = new ModelServingProvisionedThroughputProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: ModelServingProvisionedThroughputProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new ModelServingProvisionedThroughputTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ModelServingProvisionedThroughputTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ModelServingProvisionedThroughputTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ModelServingProvisionedThroughputTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      budget_policy_id: cdktn.stringToTerraform(this._budgetPolicyId),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      ai_gateway: modelServingProvisionedThroughputAiGatewayToTerraform(this._aiGateway.internalValue),
      config: modelServingProvisionedThroughputConfigAToTerraform(this._config.internalValue),
      email_notifications: modelServingProvisionedThroughputEmailNotificationsToTerraform(this._emailNotifications.internalValue),
      provider_config: modelServingProvisionedThroughputProviderConfigToTerraform(this._providerConfig.internalValue),
      tags: cdktn.listMapper(modelServingProvisionedThroughputTagsToTerraform, true)(this._tags.internalValue),
      timeouts: modelServingProvisionedThroughputTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      budget_policy_id: {
        value: cdktn.stringToHclTerraform(this._budgetPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ai_gateway: {
        value: modelServingProvisionedThroughputAiGatewayToHclTerraform(this._aiGateway.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ModelServingProvisionedThroughputAiGatewayList",
      },
      config: {
        value: modelServingProvisionedThroughputConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ModelServingProvisionedThroughputConfigAList",
      },
      email_notifications: {
        value: modelServingProvisionedThroughputEmailNotificationsToHclTerraform(this._emailNotifications.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ModelServingProvisionedThroughputEmailNotificationsList",
      },
      provider_config: {
        value: modelServingProvisionedThroughputProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ModelServingProvisionedThroughputProviderConfigList",
      },
      tags: {
        value: cdktn.listMapperHcl(modelServingProvisionedThroughputTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ModelServingProvisionedThroughputTagsList",
      },
      timeouts: {
        value: modelServingProvisionedThroughputTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ModelServingProvisionedThroughputTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
