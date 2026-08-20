/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface AiGatewayModelProviderServiceConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#comment AiGatewayModelProviderService#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#config AiGatewayModelProviderService#config}
  */
  readonly config?: AiGatewayModelProviderServiceConfigA;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#model_provider_service_id AiGatewayModelProviderService#model_provider_service_id}
  */
  readonly modelProviderServiceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#owner AiGatewayModelProviderService#owner}
  */
  readonly owner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#parent AiGatewayModelProviderService#parent}
  */
  readonly parent: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#provider_config AiGatewayModelProviderService#provider_config}
  */
  readonly providerConfig?: AiGatewayModelProviderServiceProviderConfig;
}
export interface AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}
  */
  readonly plaintext?: string;
}

export function aiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyToTerraform(struct?: AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    plaintext: cdktn.stringToTerraform(struct!.plaintext),
  }
}


export function aiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyToHclTerraform(struct?: AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    plaintext: {
      value: cdktn.stringToHclTerraform(struct!.plaintext),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._plaintext !== undefined) {
      hasAnyValues = true;
      internalValueResult.plaintext = this._plaintext;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._plaintext = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._plaintext = value.plaintext;
    }
  }

  // plaintext - computed: true, optional: true, required: false
  private _plaintext?: string; 
  public get plaintext() {
    return this.getStringAttribute('plaintext');
  }
  public set plaintext(value: string) {
    this._plaintext = value;
  }
  public resetPlaintext() {
    this._plaintext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plaintextInput() {
    return this._plaintext;
  }
}
export interface AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#access_key_id AiGatewayModelProviderService#access_key_id}
  */
  readonly accessKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#secret_access_key AiGatewayModelProviderService#secret_access_key}
  */
  readonly secretAccessKey?: AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey;
}

export function aiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyToTerraform(struct?: AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_key_id: cdktn.stringToTerraform(struct!.accessKeyId),
    secret_access_key: aiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyToTerraform(struct!.secretAccessKey),
  }
}


export function aiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyToHclTerraform(struct?: AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    access_key_id: {
      value: cdktn.stringToHclTerraform(struct!.accessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_access_key: {
      value: aiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyToHclTerraform(struct!.secretAccessKey),
      isBlock: true,
      type: "struct",
      storageClassType: "AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyId = this._accessKeyId;
    }
    if (this._secretAccessKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretAccessKey = this._secretAccessKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessKeyId = undefined;
      this._secretAccessKey.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessKeyId = value.accessKeyId;
      this._secretAccessKey.internalValue = value.secretAccessKey;
    }
  }

  // access_key_id - computed: false, optional: true, required: false
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }
  public set accessKeyId(value: string) {
    this._accessKeyId = value;
  }
  public resetAccessKeyId() {
    this._accessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
  }

  // secret_access_key - computed: false, optional: true, required: false
  private _secretAccessKey = new AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference(this, "secret_access_key");
  public get secretAccessKey() {
    return this._secretAccessKey;
  }
  public putSecretAccessKey(value: AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey) {
    this._secretAccessKey.internalValue = value;
  }
  public resetSecretAccessKey() {
    this._secretAccessKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeyInput() {
    return this._secretAccessKey.internalValue;
  }
}
export interface AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#name AiGatewayModelProviderService#name}
  */
  readonly name: string;
}

export function aiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialToTerraform(struct?: AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function aiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialToHclTerraform(struct?: AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential | cdktn.IResolvable): any {
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

export class AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential | cdktn.IResolvable | undefined) {
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
}
export interface AiGatewayModelProviderServiceConfigAmazonBedrockDirect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#aws_access_key AiGatewayModelProviderService#aws_access_key}
  */
  readonly awsAccessKey?: AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#region AiGatewayModelProviderService#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#service_credential AiGatewayModelProviderService#service_credential}
  */
  readonly serviceCredential?: AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential;
}

export function aiGatewayModelProviderServiceConfigAmazonBedrockDirectToTerraform(struct?: AiGatewayModelProviderServiceConfigAmazonBedrockDirect | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aws_access_key: aiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyToTerraform(struct!.awsAccessKey),
    region: cdktn.stringToTerraform(struct!.region),
    service_credential: aiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialToTerraform(struct!.serviceCredential),
  }
}


export function aiGatewayModelProviderServiceConfigAmazonBedrockDirectToHclTerraform(struct?: AiGatewayModelProviderServiceConfigAmazonBedrockDirect | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    aws_access_key: {
      value: aiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyToHclTerraform(struct!.awsAccessKey),
      isBlock: true,
      type: "struct",
      storageClassType: "AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey",
    },
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_credential: {
      value: aiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialToHclTerraform(struct!.serviceCredential),
      isBlock: true,
      type: "struct",
      storageClassType: "AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiGatewayModelProviderServiceConfigAmazonBedrockDirect | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsAccessKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAccessKey = this._awsAccessKey?.internalValue;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._serviceCredential?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceCredential = this._serviceCredential?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewayModelProviderServiceConfigAmazonBedrockDirect | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsAccessKey.internalValue = undefined;
      this._region = undefined;
      this._serviceCredential.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsAccessKey.internalValue = value.awsAccessKey;
      this._region = value.region;
      this._serviceCredential.internalValue = value.serviceCredential;
    }
  }

  // aws_access_key - computed: false, optional: true, required: false
  private _awsAccessKey = new AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference(this, "aws_access_key");
  public get awsAccessKey() {
    return this._awsAccessKey;
  }
  public putAwsAccessKey(value: AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey) {
    this._awsAccessKey.internalValue = value;
  }
  public resetAwsAccessKey() {
    this._awsAccessKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccessKeyInput() {
    return this._awsAccessKey.internalValue;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // service_credential - computed: false, optional: true, required: false
  private _serviceCredential = new AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference(this, "service_credential");
  public get serviceCredential() {
    return this._serviceCredential;
  }
  public putServiceCredential(value: AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential) {
    this._serviceCredential.internalValue = value;
  }
  public resetServiceCredential() {
    this._serviceCredential.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceCredentialInput() {
    return this._serviceCredential.internalValue;
  }
}
export interface AiGatewayModelProviderServiceConfigAmazonBedrock {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#direct AiGatewayModelProviderService#direct}
  */
  readonly direct?: AiGatewayModelProviderServiceConfigAmazonBedrockDirect;
}

export function aiGatewayModelProviderServiceConfigAmazonBedrockToTerraform(struct?: AiGatewayModelProviderServiceConfigAmazonBedrock | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    direct: aiGatewayModelProviderServiceConfigAmazonBedrockDirectToTerraform(struct!.direct),
  }
}


export function aiGatewayModelProviderServiceConfigAmazonBedrockToHclTerraform(struct?: AiGatewayModelProviderServiceConfigAmazonBedrock | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    direct: {
      value: aiGatewayModelProviderServiceConfigAmazonBedrockDirectToHclTerraform(struct!.direct),
      isBlock: true,
      type: "struct",
      storageClassType: "AiGatewayModelProviderServiceConfigAmazonBedrockDirect",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiGatewayModelProviderServiceConfigAmazonBedrock | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direct?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.direct = this._direct?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewayModelProviderServiceConfigAmazonBedrock | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._direct.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._direct.internalValue = value.direct;
    }
  }

  // direct - computed: false, optional: true, required: false
  private _direct = new AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference(this, "direct");
  public get direct() {
    return this._direct;
  }
  public putDirect(value: AiGatewayModelProviderServiceConfigAmazonBedrockDirect) {
    this._direct.internalValue = value;
  }
  public resetDirect() {
    this._direct.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directInput() {
    return this._direct.internalValue;
  }
}
export interface AiGatewayModelProviderServiceConfigAnthropicDirectApiKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}
  */
  readonly plaintext?: string;
}

export function aiGatewayModelProviderServiceConfigAnthropicDirectApiKeyToTerraform(struct?: AiGatewayModelProviderServiceConfigAnthropicDirectApiKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    plaintext: cdktn.stringToTerraform(struct!.plaintext),
  }
}


export function aiGatewayModelProviderServiceConfigAnthropicDirectApiKeyToHclTerraform(struct?: AiGatewayModelProviderServiceConfigAnthropicDirectApiKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    plaintext: {
      value: cdktn.stringToHclTerraform(struct!.plaintext),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiGatewayModelProviderServiceConfigAnthropicDirectApiKey | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._plaintext !== undefined) {
      hasAnyValues = true;
      internalValueResult.plaintext = this._plaintext;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewayModelProviderServiceConfigAnthropicDirectApiKey | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._plaintext = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._plaintext = value.plaintext;
    }
  }

  // plaintext - computed: true, optional: true, required: false
  private _plaintext?: string; 
  public get plaintext() {
    return this.getStringAttribute('plaintext');
  }
  public set plaintext(value: string) {
    this._plaintext = value;
  }
  public resetPlaintext() {
    this._plaintext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plaintextInput() {
    return this._plaintext;
  }
}
export interface AiGatewayModelProviderServiceConfigAnthropicDirect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#api_key AiGatewayModelProviderService#api_key}
  */
  readonly apiKey?: AiGatewayModelProviderServiceConfigAnthropicDirectApiKey;
}

export function aiGatewayModelProviderServiceConfigAnthropicDirectToTerraform(struct?: AiGatewayModelProviderServiceConfigAnthropicDirect | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key: aiGatewayModelProviderServiceConfigAnthropicDirectApiKeyToTerraform(struct!.apiKey),
  }
}


export function aiGatewayModelProviderServiceConfigAnthropicDirectToHclTerraform(struct?: AiGatewayModelProviderServiceConfigAnthropicDirect | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key: {
      value: aiGatewayModelProviderServiceConfigAnthropicDirectApiKeyToHclTerraform(struct!.apiKey),
      isBlock: true,
      type: "struct",
      storageClassType: "AiGatewayModelProviderServiceConfigAnthropicDirectApiKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiGatewayModelProviderServiceConfigAnthropicDirect | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewayModelProviderServiceConfigAnthropicDirect | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey.internalValue = value.apiKey;
    }
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey = new AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference(this, "api_key");
  public get apiKey() {
    return this._apiKey;
  }
  public putApiKey(value: AiGatewayModelProviderServiceConfigAnthropicDirectApiKey) {
    this._apiKey.internalValue = value;
  }
  public resetApiKey() {
    this._apiKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey.internalValue;
  }
}
export interface AiGatewayModelProviderServiceConfigAnthropicRelayed {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#plan_type AiGatewayModelProviderService#plan_type}
  */
  readonly planType?: string;
}

export function aiGatewayModelProviderServiceConfigAnthropicRelayedToTerraform(struct?: AiGatewayModelProviderServiceConfigAnthropicRelayed | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    plan_type: cdktn.stringToTerraform(struct!.planType),
  }
}


export function aiGatewayModelProviderServiceConfigAnthropicRelayedToHclTerraform(struct?: AiGatewayModelProviderServiceConfigAnthropicRelayed | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    plan_type: {
      value: cdktn.stringToHclTerraform(struct!.planType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiGatewayModelProviderServiceConfigAnthropicRelayed | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._planType !== undefined) {
      hasAnyValues = true;
      internalValueResult.planType = this._planType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewayModelProviderServiceConfigAnthropicRelayed | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._planType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._planType = value.planType;
    }
  }

  // plan_type - computed: false, optional: true, required: false
  private _planType?: string; 
  public get planType() {
    return this.getStringAttribute('plan_type');
  }
  public set planType(value: string) {
    this._planType = value;
  }
  public resetPlanType() {
    this._planType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planTypeInput() {
    return this._planType;
  }
}
export interface AiGatewayModelProviderServiceConfigAnthropic {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#direct AiGatewayModelProviderService#direct}
  */
  readonly direct?: AiGatewayModelProviderServiceConfigAnthropicDirect;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#relayed AiGatewayModelProviderService#relayed}
  */
  readonly relayed?: AiGatewayModelProviderServiceConfigAnthropicRelayed;
}

export function aiGatewayModelProviderServiceConfigAnthropicToTerraform(struct?: AiGatewayModelProviderServiceConfigAnthropic | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    direct: aiGatewayModelProviderServiceConfigAnthropicDirectToTerraform(struct!.direct),
    relayed: aiGatewayModelProviderServiceConfigAnthropicRelayedToTerraform(struct!.relayed),
  }
}


export function aiGatewayModelProviderServiceConfigAnthropicToHclTerraform(struct?: AiGatewayModelProviderServiceConfigAnthropic | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    direct: {
      value: aiGatewayModelProviderServiceConfigAnthropicDirectToHclTerraform(struct!.direct),
      isBlock: true,
      type: "struct",
      storageClassType: "AiGatewayModelProviderServiceConfigAnthropicDirect",
    },
    relayed: {
      value: aiGatewayModelProviderServiceConfigAnthropicRelayedToHclTerraform(struct!.relayed),
      isBlock: true,
      type: "struct",
      storageClassType: "AiGatewayModelProviderServiceConfigAnthropicRelayed",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiGatewayModelProviderServiceConfigAnthropicOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiGatewayModelProviderServiceConfigAnthropic | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direct?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.direct = this._direct?.internalValue;
    }
    if (this._relayed?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.relayed = this._relayed?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewayModelProviderServiceConfigAnthropic | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._direct.internalValue = undefined;
      this._relayed.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._direct.internalValue = value.direct;
      this._relayed.internalValue = value.relayed;
    }
  }

  // direct - computed: false, optional: true, required: false
  private _direct = new AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference(this, "direct");
  public get direct() {
    return this._direct;
  }
  public putDirect(value: AiGatewayModelProviderServiceConfigAnthropicDirect) {
    this._direct.internalValue = value;
  }
  public resetDirect() {
    this._direct.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directInput() {
    return this._direct.internalValue;
  }

  // relayed - computed: false, optional: true, required: false
  private _relayed = new AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference(this, "relayed");
  public get relayed() {
    return this._relayed;
  }
  public putRelayed(value: AiGatewayModelProviderServiceConfigAnthropicRelayed) {
    this._relayed.internalValue = value;
  }
  public resetRelayed() {
    this._relayed.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relayedInput() {
    return this._relayed.internalValue;
  }
}
export interface AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}
  */
  readonly plaintext?: string;
}

export function aiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyToTerraform(struct?: AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    plaintext: cdktn.stringToTerraform(struct!.plaintext),
  }
}


export function aiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyToHclTerraform(struct?: AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    plaintext: {
      value: cdktn.stringToHclTerraform(struct!.plaintext),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._plaintext !== undefined) {
      hasAnyValues = true;
      internalValueResult.plaintext = this._plaintext;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._plaintext = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._plaintext = value.plaintext;
    }
  }

  // plaintext - computed: true, optional: true, required: false
  private _plaintext?: string; 
  public get plaintext() {
    return this.getStringAttribute('plaintext');
  }
  public set plaintext(value: string) {
    this._plaintext = value;
  }
  public resetPlaintext() {
    this._plaintext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plaintextInput() {
    return this._plaintext;
  }
}
export interface AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}
  */
  readonly plaintext?: string;
}

export function aiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretToTerraform(struct?: AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    plaintext: cdktn.stringToTerraform(struct!.plaintext),
  }
}


export function aiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretToHclTerraform(struct?: AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    plaintext: {
      value: cdktn.stringToHclTerraform(struct!.plaintext),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._plaintext !== undefined) {
      hasAnyValues = true;
      internalValueResult.plaintext = this._plaintext;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._plaintext = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._plaintext = value.plaintext;
    }
  }

  // plaintext - computed: true, optional: true, required: false
  private _plaintext?: string; 
  public get plaintext() {
    return this.getStringAttribute('plaintext');
  }
  public set plaintext(value: string) {
    this._plaintext = value;
  }
  public resetPlaintext() {
    this._plaintext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plaintextInput() {
    return this._plaintext;
  }
}
export interface AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#client_id AiGatewayModelProviderService#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#client_secret AiGatewayModelProviderService#client_secret}
  */
  readonly clientSecret?: AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#tenant_id AiGatewayModelProviderService#tenant_id}
  */
  readonly tenantId?: string;
}

export function aiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalToTerraform(struct?: AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret: aiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretToTerraform(struct!.clientSecret),
    tenant_id: cdktn.stringToTerraform(struct!.tenantId),
  }
}


export function aiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalToHclTerraform(struct?: AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal | cdktn.IResolvable): any {
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
    client_secret: {
      value: aiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretToHclTerraform(struct!.clientSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret",
    },
    tenant_id: {
      value: cdktn.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret?.internalValue;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId = undefined;
      this._clientSecret.internalValue = undefined;
      this._tenantId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientId = value.clientId;
      this._clientSecret.internalValue = value.clientSecret;
      this._tenantId = value.tenantId;
    }
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
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
  private _clientSecret = new AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference(this, "client_secret");
  public get clientSecret() {
    return this._clientSecret;
  }
  public putClientSecret(value: AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret) {
    this._clientSecret.internalValue = value;
  }
  public resetClientSecret() {
    this._clientSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret.internalValue;
  }

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }
}
export interface AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#name AiGatewayModelProviderService#name}
  */
  readonly name: string;
}

export function aiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialToTerraform(struct?: AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function aiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialToHclTerraform(struct?: AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential | cdktn.IResolvable): any {
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

export class AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential | cdktn.IResolvable | undefined) {
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
}
export interface AiGatewayModelProviderServiceConfigAzureOpenaiDirect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#api_key AiGatewayModelProviderService#api_key}
  */
  readonly apiKey?: AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#base_url AiGatewayModelProviderService#base_url}
  */
  readonly baseUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#entra_service_principal AiGatewayModelProviderService#entra_service_principal}
  */
  readonly entraServicePrincipal?: AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#service_credential AiGatewayModelProviderService#service_credential}
  */
  readonly serviceCredential?: AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential;
}

export function aiGatewayModelProviderServiceConfigAzureOpenaiDirectToTerraform(struct?: AiGatewayModelProviderServiceConfigAzureOpenaiDirect | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key: aiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyToTerraform(struct!.apiKey),
    base_url: cdktn.stringToTerraform(struct!.baseUrl),
    entra_service_principal: aiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalToTerraform(struct!.entraServicePrincipal),
    service_credential: aiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialToTerraform(struct!.serviceCredential),
  }
}


export function aiGatewayModelProviderServiceConfigAzureOpenaiDirectToHclTerraform(struct?: AiGatewayModelProviderServiceConfigAzureOpenaiDirect | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key: {
      value: aiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyToHclTerraform(struct!.apiKey),
      isBlock: true,
      type: "struct",
      storageClassType: "AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey",
    },
    base_url: {
      value: cdktn.stringToHclTerraform(struct!.baseUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entra_service_principal: {
      value: aiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalToHclTerraform(struct!.entraServicePrincipal),
      isBlock: true,
      type: "struct",
      storageClassType: "AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal",
    },
    service_credential: {
      value: aiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialToHclTerraform(struct!.serviceCredential),
      isBlock: true,
      type: "struct",
      storageClassType: "AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiGatewayModelProviderServiceConfigAzureOpenaiDirect | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey?.internalValue;
    }
    if (this._baseUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseUrl = this._baseUrl;
    }
    if (this._entraServicePrincipal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entraServicePrincipal = this._entraServicePrincipal?.internalValue;
    }
    if (this._serviceCredential?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceCredential = this._serviceCredential?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewayModelProviderServiceConfigAzureOpenaiDirect | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey.internalValue = undefined;
      this._baseUrl = undefined;
      this._entraServicePrincipal.internalValue = undefined;
      this._serviceCredential.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey.internalValue = value.apiKey;
      this._baseUrl = value.baseUrl;
      this._entraServicePrincipal.internalValue = value.entraServicePrincipal;
      this._serviceCredential.internalValue = value.serviceCredential;
    }
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey = new AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference(this, "api_key");
  public get apiKey() {
    return this._apiKey;
  }
  public putApiKey(value: AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey) {
    this._apiKey.internalValue = value;
  }
  public resetApiKey() {
    this._apiKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey.internalValue;
  }

  // base_url - computed: false, optional: true, required: false
  private _baseUrl?: string; 
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }
  public set baseUrl(value: string) {
    this._baseUrl = value;
  }
  public resetBaseUrl() {
    this._baseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
  }

  // entra_service_principal - computed: false, optional: true, required: false
  private _entraServicePrincipal = new AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference(this, "entra_service_principal");
  public get entraServicePrincipal() {
    return this._entraServicePrincipal;
  }
  public putEntraServicePrincipal(value: AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal) {
    this._entraServicePrincipal.internalValue = value;
  }
  public resetEntraServicePrincipal() {
    this._entraServicePrincipal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entraServicePrincipalInput() {
    return this._entraServicePrincipal.internalValue;
  }

  // service_credential - computed: false, optional: true, required: false
  private _serviceCredential = new AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference(this, "service_credential");
  public get serviceCredential() {
    return this._serviceCredential;
  }
  public putServiceCredential(value: AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential) {
    this._serviceCredential.internalValue = value;
  }
  public resetServiceCredential() {
    this._serviceCredential.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceCredentialInput() {
    return this._serviceCredential.internalValue;
  }
}
export interface AiGatewayModelProviderServiceConfigAzureOpenai {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#direct AiGatewayModelProviderService#direct}
  */
  readonly direct?: AiGatewayModelProviderServiceConfigAzureOpenaiDirect;
}

export function aiGatewayModelProviderServiceConfigAzureOpenaiToTerraform(struct?: AiGatewayModelProviderServiceConfigAzureOpenai | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    direct: aiGatewayModelProviderServiceConfigAzureOpenaiDirectToTerraform(struct!.direct),
  }
}


export function aiGatewayModelProviderServiceConfigAzureOpenaiToHclTerraform(struct?: AiGatewayModelProviderServiceConfigAzureOpenai | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    direct: {
      value: aiGatewayModelProviderServiceConfigAzureOpenaiDirectToHclTerraform(struct!.direct),
      isBlock: true,
      type: "struct",
      storageClassType: "AiGatewayModelProviderServiceConfigAzureOpenaiDirect",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiGatewayModelProviderServiceConfigAzureOpenai | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direct?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.direct = this._direct?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewayModelProviderServiceConfigAzureOpenai | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._direct.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._direct.internalValue = value.direct;
    }
  }

  // direct - computed: false, optional: true, required: false
  private _direct = new AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference(this, "direct");
  public get direct() {
    return this._direct;
  }
  public putDirect(value: AiGatewayModelProviderServiceConfigAzureOpenaiDirect) {
    this._direct.internalValue = value;
  }
  public resetDirect() {
    this._direct.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directInput() {
    return this._direct.internalValue;
  }
}
export interface AiGatewayModelProviderServiceConfigCustomDirectApiKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}
  */
  readonly plaintext?: string;
}

export function aiGatewayModelProviderServiceConfigCustomDirectApiKeyToTerraform(struct?: AiGatewayModelProviderServiceConfigCustomDirectApiKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    plaintext: cdktn.stringToTerraform(struct!.plaintext),
  }
}


export function aiGatewayModelProviderServiceConfigCustomDirectApiKeyToHclTerraform(struct?: AiGatewayModelProviderServiceConfigCustomDirectApiKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    plaintext: {
      value: cdktn.stringToHclTerraform(struct!.plaintext),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiGatewayModelProviderServiceConfigCustomDirectApiKey | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._plaintext !== undefined) {
      hasAnyValues = true;
      internalValueResult.plaintext = this._plaintext;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewayModelProviderServiceConfigCustomDirectApiKey | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._plaintext = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._plaintext = value.plaintext;
    }
  }

  // plaintext - computed: true, optional: true, required: false
  private _plaintext?: string; 
  public get plaintext() {
    return this.getStringAttribute('plaintext');
  }
  public set plaintext(value: string) {
    this._plaintext = value;
  }
  public resetPlaintext() {
    this._plaintext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plaintextInput() {
    return this._plaintext;
  }
}
export interface AiGatewayModelProviderServiceConfigCustomDirect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#api_key AiGatewayModelProviderService#api_key}
  */
  readonly apiKey?: AiGatewayModelProviderServiceConfigCustomDirectApiKey;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#base_url AiGatewayModelProviderService#base_url}
  */
  readonly baseUrl?: string;
}

export function aiGatewayModelProviderServiceConfigCustomDirectToTerraform(struct?: AiGatewayModelProviderServiceConfigCustomDirect | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key: aiGatewayModelProviderServiceConfigCustomDirectApiKeyToTerraform(struct!.apiKey),
    base_url: cdktn.stringToTerraform(struct!.baseUrl),
  }
}


export function aiGatewayModelProviderServiceConfigCustomDirectToHclTerraform(struct?: AiGatewayModelProviderServiceConfigCustomDirect | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key: {
      value: aiGatewayModelProviderServiceConfigCustomDirectApiKeyToHclTerraform(struct!.apiKey),
      isBlock: true,
      type: "struct",
      storageClassType: "AiGatewayModelProviderServiceConfigCustomDirectApiKey",
    },
    base_url: {
      value: cdktn.stringToHclTerraform(struct!.baseUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiGatewayModelProviderServiceConfigCustomDirectOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiGatewayModelProviderServiceConfigCustomDirect | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey?.internalValue;
    }
    if (this._baseUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseUrl = this._baseUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewayModelProviderServiceConfigCustomDirect | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey.internalValue = undefined;
      this._baseUrl = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey.internalValue = value.apiKey;
      this._baseUrl = value.baseUrl;
    }
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey = new AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference(this, "api_key");
  public get apiKey() {
    return this._apiKey;
  }
  public putApiKey(value: AiGatewayModelProviderServiceConfigCustomDirectApiKey) {
    this._apiKey.internalValue = value;
  }
  public resetApiKey() {
    this._apiKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey.internalValue;
  }

  // base_url - computed: false, optional: true, required: false
  private _baseUrl?: string; 
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }
  public set baseUrl(value: string) {
    this._baseUrl = value;
  }
  public resetBaseUrl() {
    this._baseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
  }
}
export interface AiGatewayModelProviderServiceConfigCustom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#direct AiGatewayModelProviderService#direct}
  */
  readonly direct?: AiGatewayModelProviderServiceConfigCustomDirect;
}

export function aiGatewayModelProviderServiceConfigCustomToTerraform(struct?: AiGatewayModelProviderServiceConfigCustom | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    direct: aiGatewayModelProviderServiceConfigCustomDirectToTerraform(struct!.direct),
  }
}


export function aiGatewayModelProviderServiceConfigCustomToHclTerraform(struct?: AiGatewayModelProviderServiceConfigCustom | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    direct: {
      value: aiGatewayModelProviderServiceConfigCustomDirectToHclTerraform(struct!.direct),
      isBlock: true,
      type: "struct",
      storageClassType: "AiGatewayModelProviderServiceConfigCustomDirect",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiGatewayModelProviderServiceConfigCustomOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiGatewayModelProviderServiceConfigCustom | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direct?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.direct = this._direct?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewayModelProviderServiceConfigCustom | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._direct.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._direct.internalValue = value.direct;
    }
  }

  // direct - computed: false, optional: true, required: false
  private _direct = new AiGatewayModelProviderServiceConfigCustomDirectOutputReference(this, "direct");
  public get direct() {
    return this._direct;
  }
  public putDirect(value: AiGatewayModelProviderServiceConfigCustomDirect) {
    this._direct.internalValue = value;
  }
  public resetDirect() {
    this._direct.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directInput() {
    return this._direct.internalValue;
  }
}
export interface AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}
  */
  readonly plaintext?: string;
}

export function aiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyToTerraform(struct?: AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    plaintext: cdktn.stringToTerraform(struct!.plaintext),
  }
}


export function aiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyToHclTerraform(struct?: AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    plaintext: {
      value: cdktn.stringToHclTerraform(struct!.plaintext),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._plaintext !== undefined) {
      hasAnyValues = true;
      internalValueResult.plaintext = this._plaintext;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._plaintext = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._plaintext = value.plaintext;
    }
  }

  // plaintext - computed: true, optional: true, required: false
  private _plaintext?: string; 
  public get plaintext() {
    return this.getStringAttribute('plaintext');
  }
  public set plaintext(value: string) {
    this._plaintext = value;
  }
  public resetPlaintext() {
    this._plaintext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plaintextInput() {
    return this._plaintext;
  }
}
export interface AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#api_key AiGatewayModelProviderService#api_key}
  */
  readonly apiKey?: AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#project_id AiGatewayModelProviderService#project_id}
  */
  readonly projectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#region AiGatewayModelProviderService#region}
  */
  readonly region?: string;
}

export function aiGatewayModelProviderServiceConfigGeminiEnterpriseDirectToTerraform(struct?: AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key: aiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyToTerraform(struct!.apiKey),
    project_id: cdktn.stringToTerraform(struct!.projectId),
    region: cdktn.stringToTerraform(struct!.region),
  }
}


export function aiGatewayModelProviderServiceConfigGeminiEnterpriseDirectToHclTerraform(struct?: AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key: {
      value: aiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyToHclTerraform(struct!.apiKey),
      isBlock: true,
      type: "struct",
      storageClassType: "AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey",
    },
    project_id: {
      value: cdktn.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey?.internalValue;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey.internalValue = undefined;
      this._projectId = undefined;
      this._region = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey.internalValue = value.apiKey;
      this._projectId = value.projectId;
      this._region = value.region;
    }
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey = new AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference(this, "api_key");
  public get apiKey() {
    return this._apiKey;
  }
  public putApiKey(value: AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey) {
    this._apiKey.internalValue = value;
  }
  public resetApiKey() {
    this._apiKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey.internalValue;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface AiGatewayModelProviderServiceConfigGeminiEnterprise {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#direct AiGatewayModelProviderService#direct}
  */
  readonly direct?: AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect;
}

export function aiGatewayModelProviderServiceConfigGeminiEnterpriseToTerraform(struct?: AiGatewayModelProviderServiceConfigGeminiEnterprise | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    direct: aiGatewayModelProviderServiceConfigGeminiEnterpriseDirectToTerraform(struct!.direct),
  }
}


export function aiGatewayModelProviderServiceConfigGeminiEnterpriseToHclTerraform(struct?: AiGatewayModelProviderServiceConfigGeminiEnterprise | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    direct: {
      value: aiGatewayModelProviderServiceConfigGeminiEnterpriseDirectToHclTerraform(struct!.direct),
      isBlock: true,
      type: "struct",
      storageClassType: "AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiGatewayModelProviderServiceConfigGeminiEnterprise | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direct?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.direct = this._direct?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewayModelProviderServiceConfigGeminiEnterprise | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._direct.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._direct.internalValue = value.direct;
    }
  }

  // direct - computed: false, optional: true, required: false
  private _direct = new AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference(this, "direct");
  public get direct() {
    return this._direct;
  }
  public putDirect(value: AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect) {
    this._direct.internalValue = value;
  }
  public resetDirect() {
    this._direct.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directInput() {
    return this._direct.internalValue;
  }
}
export interface AiGatewayModelProviderServiceConfigInferenceTable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#disabled AiGatewayModelProviderService#disabled}
  */
  readonly disabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#parent AiGatewayModelProviderService#parent}
  */
  readonly parent: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#table_name_prefix AiGatewayModelProviderService#table_name_prefix}
  */
  readonly tableNamePrefix?: string;
}

export function aiGatewayModelProviderServiceConfigInferenceTableToTerraform(struct?: AiGatewayModelProviderServiceConfigInferenceTable | cdktn.IResolvable): any {
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


export function aiGatewayModelProviderServiceConfigInferenceTableToHclTerraform(struct?: AiGatewayModelProviderServiceConfigInferenceTable | cdktn.IResolvable): any {
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

export class AiGatewayModelProviderServiceConfigInferenceTableOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiGatewayModelProviderServiceConfigInferenceTable | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AiGatewayModelProviderServiceConfigInferenceTable | cdktn.IResolvable | undefined) {
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
export interface AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}
  */
  readonly plaintext?: string;
}

export function aiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyToTerraform(struct?: AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    plaintext: cdktn.stringToTerraform(struct!.plaintext),
  }
}


export function aiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyToHclTerraform(struct?: AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    plaintext: {
      value: cdktn.stringToHclTerraform(struct!.plaintext),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._plaintext !== undefined) {
      hasAnyValues = true;
      internalValueResult.plaintext = this._plaintext;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._plaintext = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._plaintext = value.plaintext;
    }
  }

  // plaintext - computed: true, optional: true, required: false
  private _plaintext?: string; 
  public get plaintext() {
    return this.getStringAttribute('plaintext');
  }
  public set plaintext(value: string) {
    this._plaintext = value;
  }
  public resetPlaintext() {
    this._plaintext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plaintextInput() {
    return this._plaintext;
  }
}
export interface AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}
  */
  readonly plaintext?: string;
}

export function aiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretToTerraform(struct?: AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    plaintext: cdktn.stringToTerraform(struct!.plaintext),
  }
}


export function aiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretToHclTerraform(struct?: AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    plaintext: {
      value: cdktn.stringToHclTerraform(struct!.plaintext),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._plaintext !== undefined) {
      hasAnyValues = true;
      internalValueResult.plaintext = this._plaintext;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._plaintext = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._plaintext = value.plaintext;
    }
  }

  // plaintext - computed: true, optional: true, required: false
  private _plaintext?: string; 
  public get plaintext() {
    return this.getStringAttribute('plaintext');
  }
  public set plaintext(value: string) {
    this._plaintext = value;
  }
  public resetPlaintext() {
    this._plaintext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plaintextInput() {
    return this._plaintext;
  }
}
export interface AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#client_id AiGatewayModelProviderService#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#client_secret AiGatewayModelProviderService#client_secret}
  */
  readonly clientSecret?: AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#tenant_id AiGatewayModelProviderService#tenant_id}
  */
  readonly tenantId?: string;
}

export function aiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalToTerraform(struct?: AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret: aiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretToTerraform(struct!.clientSecret),
    tenant_id: cdktn.stringToTerraform(struct!.tenantId),
  }
}


export function aiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalToHclTerraform(struct?: AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal | cdktn.IResolvable): any {
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
    client_secret: {
      value: aiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretToHclTerraform(struct!.clientSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret",
    },
    tenant_id: {
      value: cdktn.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret?.internalValue;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId = undefined;
      this._clientSecret.internalValue = undefined;
      this._tenantId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientId = value.clientId;
      this._clientSecret.internalValue = value.clientSecret;
      this._tenantId = value.tenantId;
    }
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
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
  private _clientSecret = new AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference(this, "client_secret");
  public get clientSecret() {
    return this._clientSecret;
  }
  public putClientSecret(value: AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret) {
    this._clientSecret.internalValue = value;
  }
  public resetClientSecret() {
    this._clientSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret.internalValue;
  }

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }
}
export interface AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#name AiGatewayModelProviderService#name}
  */
  readonly name: string;
}

export function aiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialToTerraform(struct?: AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function aiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialToHclTerraform(struct?: AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential | cdktn.IResolvable): any {
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

export class AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential | cdktn.IResolvable | undefined) {
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
}
export interface AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#api_key AiGatewayModelProviderService#api_key}
  */
  readonly apiKey?: AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#base_url AiGatewayModelProviderService#base_url}
  */
  readonly baseUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#entra_service_principal AiGatewayModelProviderService#entra_service_principal}
  */
  readonly entraServicePrincipal?: AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#service_credential AiGatewayModelProviderService#service_credential}
  */
  readonly serviceCredential?: AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential;
}

export function aiGatewayModelProviderServiceConfigMicrosoftFoundryDirectToTerraform(struct?: AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key: aiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyToTerraform(struct!.apiKey),
    base_url: cdktn.stringToTerraform(struct!.baseUrl),
    entra_service_principal: aiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalToTerraform(struct!.entraServicePrincipal),
    service_credential: aiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialToTerraform(struct!.serviceCredential),
  }
}


export function aiGatewayModelProviderServiceConfigMicrosoftFoundryDirectToHclTerraform(struct?: AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key: {
      value: aiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyToHclTerraform(struct!.apiKey),
      isBlock: true,
      type: "struct",
      storageClassType: "AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey",
    },
    base_url: {
      value: cdktn.stringToHclTerraform(struct!.baseUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entra_service_principal: {
      value: aiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalToHclTerraform(struct!.entraServicePrincipal),
      isBlock: true,
      type: "struct",
      storageClassType: "AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal",
    },
    service_credential: {
      value: aiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialToHclTerraform(struct!.serviceCredential),
      isBlock: true,
      type: "struct",
      storageClassType: "AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey?.internalValue;
    }
    if (this._baseUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseUrl = this._baseUrl;
    }
    if (this._entraServicePrincipal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entraServicePrincipal = this._entraServicePrincipal?.internalValue;
    }
    if (this._serviceCredential?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceCredential = this._serviceCredential?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey.internalValue = undefined;
      this._baseUrl = undefined;
      this._entraServicePrincipal.internalValue = undefined;
      this._serviceCredential.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey.internalValue = value.apiKey;
      this._baseUrl = value.baseUrl;
      this._entraServicePrincipal.internalValue = value.entraServicePrincipal;
      this._serviceCredential.internalValue = value.serviceCredential;
    }
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey = new AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference(this, "api_key");
  public get apiKey() {
    return this._apiKey;
  }
  public putApiKey(value: AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey) {
    this._apiKey.internalValue = value;
  }
  public resetApiKey() {
    this._apiKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey.internalValue;
  }

  // base_url - computed: false, optional: true, required: false
  private _baseUrl?: string; 
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }
  public set baseUrl(value: string) {
    this._baseUrl = value;
  }
  public resetBaseUrl() {
    this._baseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
  }

  // entra_service_principal - computed: false, optional: true, required: false
  private _entraServicePrincipal = new AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference(this, "entra_service_principal");
  public get entraServicePrincipal() {
    return this._entraServicePrincipal;
  }
  public putEntraServicePrincipal(value: AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal) {
    this._entraServicePrincipal.internalValue = value;
  }
  public resetEntraServicePrincipal() {
    this._entraServicePrincipal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entraServicePrincipalInput() {
    return this._entraServicePrincipal.internalValue;
  }

  // service_credential - computed: false, optional: true, required: false
  private _serviceCredential = new AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference(this, "service_credential");
  public get serviceCredential() {
    return this._serviceCredential;
  }
  public putServiceCredential(value: AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential) {
    this._serviceCredential.internalValue = value;
  }
  public resetServiceCredential() {
    this._serviceCredential.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceCredentialInput() {
    return this._serviceCredential.internalValue;
  }
}
export interface AiGatewayModelProviderServiceConfigMicrosoftFoundry {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#direct AiGatewayModelProviderService#direct}
  */
  readonly direct?: AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect;
}

export function aiGatewayModelProviderServiceConfigMicrosoftFoundryToTerraform(struct?: AiGatewayModelProviderServiceConfigMicrosoftFoundry | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    direct: aiGatewayModelProviderServiceConfigMicrosoftFoundryDirectToTerraform(struct!.direct),
  }
}


export function aiGatewayModelProviderServiceConfigMicrosoftFoundryToHclTerraform(struct?: AiGatewayModelProviderServiceConfigMicrosoftFoundry | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    direct: {
      value: aiGatewayModelProviderServiceConfigMicrosoftFoundryDirectToHclTerraform(struct!.direct),
      isBlock: true,
      type: "struct",
      storageClassType: "AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiGatewayModelProviderServiceConfigMicrosoftFoundry | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direct?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.direct = this._direct?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewayModelProviderServiceConfigMicrosoftFoundry | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._direct.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._direct.internalValue = value.direct;
    }
  }

  // direct - computed: false, optional: true, required: false
  private _direct = new AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference(this, "direct");
  public get direct() {
    return this._direct;
  }
  public putDirect(value: AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect) {
    this._direct.internalValue = value;
  }
  public resetDirect() {
    this._direct.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directInput() {
    return this._direct.internalValue;
  }
}
export interface AiGatewayModelProviderServiceConfigOpenaiDirectApiKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}
  */
  readonly plaintext?: string;
}

export function aiGatewayModelProviderServiceConfigOpenaiDirectApiKeyToTerraform(struct?: AiGatewayModelProviderServiceConfigOpenaiDirectApiKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    plaintext: cdktn.stringToTerraform(struct!.plaintext),
  }
}


export function aiGatewayModelProviderServiceConfigOpenaiDirectApiKeyToHclTerraform(struct?: AiGatewayModelProviderServiceConfigOpenaiDirectApiKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    plaintext: {
      value: cdktn.stringToHclTerraform(struct!.plaintext),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiGatewayModelProviderServiceConfigOpenaiDirectApiKey | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._plaintext !== undefined) {
      hasAnyValues = true;
      internalValueResult.plaintext = this._plaintext;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewayModelProviderServiceConfigOpenaiDirectApiKey | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._plaintext = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._plaintext = value.plaintext;
    }
  }

  // plaintext - computed: true, optional: true, required: false
  private _plaintext?: string; 
  public get plaintext() {
    return this.getStringAttribute('plaintext');
  }
  public set plaintext(value: string) {
    this._plaintext = value;
  }
  public resetPlaintext() {
    this._plaintext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plaintextInput() {
    return this._plaintext;
  }
}
export interface AiGatewayModelProviderServiceConfigOpenaiDirect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#api_key AiGatewayModelProviderService#api_key}
  */
  readonly apiKey?: AiGatewayModelProviderServiceConfigOpenaiDirectApiKey;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#base_url AiGatewayModelProviderService#base_url}
  */
  readonly baseUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#organization AiGatewayModelProviderService#organization}
  */
  readonly organization?: string;
}

export function aiGatewayModelProviderServiceConfigOpenaiDirectToTerraform(struct?: AiGatewayModelProviderServiceConfigOpenaiDirect | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key: aiGatewayModelProviderServiceConfigOpenaiDirectApiKeyToTerraform(struct!.apiKey),
    base_url: cdktn.stringToTerraform(struct!.baseUrl),
    organization: cdktn.stringToTerraform(struct!.organization),
  }
}


export function aiGatewayModelProviderServiceConfigOpenaiDirectToHclTerraform(struct?: AiGatewayModelProviderServiceConfigOpenaiDirect | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key: {
      value: aiGatewayModelProviderServiceConfigOpenaiDirectApiKeyToHclTerraform(struct!.apiKey),
      isBlock: true,
      type: "struct",
      storageClassType: "AiGatewayModelProviderServiceConfigOpenaiDirectApiKey",
    },
    base_url: {
      value: cdktn.stringToHclTerraform(struct!.baseUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organization: {
      value: cdktn.stringToHclTerraform(struct!.organization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiGatewayModelProviderServiceConfigOpenaiDirect | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey?.internalValue;
    }
    if (this._baseUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseUrl = this._baseUrl;
    }
    if (this._organization !== undefined) {
      hasAnyValues = true;
      internalValueResult.organization = this._organization;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewayModelProviderServiceConfigOpenaiDirect | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey.internalValue = undefined;
      this._baseUrl = undefined;
      this._organization = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey.internalValue = value.apiKey;
      this._baseUrl = value.baseUrl;
      this._organization = value.organization;
    }
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey = new AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference(this, "api_key");
  public get apiKey() {
    return this._apiKey;
  }
  public putApiKey(value: AiGatewayModelProviderServiceConfigOpenaiDirectApiKey) {
    this._apiKey.internalValue = value;
  }
  public resetApiKey() {
    this._apiKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey.internalValue;
  }

  // base_url - computed: false, optional: true, required: false
  private _baseUrl?: string; 
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }
  public set baseUrl(value: string) {
    this._baseUrl = value;
  }
  public resetBaseUrl() {
    this._baseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
  }

  // organization - computed: false, optional: true, required: false
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  public resetOrganization() {
    this._organization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }
}
export interface AiGatewayModelProviderServiceConfigOpenai {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#direct AiGatewayModelProviderService#direct}
  */
  readonly direct?: AiGatewayModelProviderServiceConfigOpenaiDirect;
}

export function aiGatewayModelProviderServiceConfigOpenaiToTerraform(struct?: AiGatewayModelProviderServiceConfigOpenai | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    direct: aiGatewayModelProviderServiceConfigOpenaiDirectToTerraform(struct!.direct),
  }
}


export function aiGatewayModelProviderServiceConfigOpenaiToHclTerraform(struct?: AiGatewayModelProviderServiceConfigOpenai | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    direct: {
      value: aiGatewayModelProviderServiceConfigOpenaiDirectToHclTerraform(struct!.direct),
      isBlock: true,
      type: "struct",
      storageClassType: "AiGatewayModelProviderServiceConfigOpenaiDirect",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiGatewayModelProviderServiceConfigOpenaiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiGatewayModelProviderServiceConfigOpenai | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direct?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.direct = this._direct?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewayModelProviderServiceConfigOpenai | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._direct.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._direct.internalValue = value.direct;
    }
  }

  // direct - computed: false, optional: true, required: false
  private _direct = new AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference(this, "direct");
  public get direct() {
    return this._direct;
  }
  public putDirect(value: AiGatewayModelProviderServiceConfigOpenaiDirect) {
    this._direct.internalValue = value;
  }
  public resetDirect() {
    this._direct.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directInput() {
    return this._direct.internalValue;
  }
}
export interface AiGatewayModelProviderServiceConfigRateLimits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#key AiGatewayModelProviderService#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#principal AiGatewayModelProviderService#principal}
  */
  readonly principal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#renewal_period AiGatewayModelProviderService#renewal_period}
  */
  readonly renewalPeriod: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#request_tag_key AiGatewayModelProviderService#request_tag_key}
  */
  readonly requestTagKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#request_tag_value AiGatewayModelProviderService#request_tag_value}
  */
  readonly requestTagValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#requests AiGatewayModelProviderService#requests}
  */
  readonly requests?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#tokens AiGatewayModelProviderService#tokens}
  */
  readonly tokens?: number;
}

export function aiGatewayModelProviderServiceConfigRateLimitsToTerraform(struct?: AiGatewayModelProviderServiceConfigRateLimits | cdktn.IResolvable): any {
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


export function aiGatewayModelProviderServiceConfigRateLimitsToHclTerraform(struct?: AiGatewayModelProviderServiceConfigRateLimits | cdktn.IResolvable): any {
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

export class AiGatewayModelProviderServiceConfigRateLimitsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AiGatewayModelProviderServiceConfigRateLimits | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AiGatewayModelProviderServiceConfigRateLimits | cdktn.IResolvable | undefined) {
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

export class AiGatewayModelProviderServiceConfigRateLimitsList extends cdktn.ComplexList {
  public internalValue? : AiGatewayModelProviderServiceConfigRateLimits[] | cdktn.IResolvable

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
  public get(index: number): AiGatewayModelProviderServiceConfigRateLimitsOutputReference {
    return new AiGatewayModelProviderServiceConfigRateLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AiGatewayModelProviderServiceConfigTargets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#model AiGatewayModelProviderService#model}
  */
  readonly model: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#native_api_types AiGatewayModelProviderService#native_api_types}
  */
  readonly nativeApiTypes?: string[];
}

export function aiGatewayModelProviderServiceConfigTargetsToTerraform(struct?: AiGatewayModelProviderServiceConfigTargets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    model: cdktn.stringToTerraform(struct!.model),
    native_api_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.nativeApiTypes),
  }
}


export function aiGatewayModelProviderServiceConfigTargetsToHclTerraform(struct?: AiGatewayModelProviderServiceConfigTargets | cdktn.IResolvable): any {
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

export class AiGatewayModelProviderServiceConfigTargetsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AiGatewayModelProviderServiceConfigTargets | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AiGatewayModelProviderServiceConfigTargets | cdktn.IResolvable | undefined) {
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

export class AiGatewayModelProviderServiceConfigTargetsList extends cdktn.ComplexList {
  public internalValue? : AiGatewayModelProviderServiceConfigTargets[] | cdktn.IResolvable

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
  public get(index: number): AiGatewayModelProviderServiceConfigTargetsOutputReference {
    return new AiGatewayModelProviderServiceConfigTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AiGatewayModelProviderServiceConfigA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#allow_all_targets AiGatewayModelProviderService#allow_all_targets}
  */
  readonly allowAllTargets?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#amazon_bedrock AiGatewayModelProviderService#amazon_bedrock}
  */
  readonly amazonBedrock?: AiGatewayModelProviderServiceConfigAmazonBedrock;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#anthropic AiGatewayModelProviderService#anthropic}
  */
  readonly anthropic?: AiGatewayModelProviderServiceConfigAnthropic;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#azure_openai AiGatewayModelProviderService#azure_openai}
  */
  readonly azureOpenai?: AiGatewayModelProviderServiceConfigAzureOpenai;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#custom AiGatewayModelProviderService#custom}
  */
  readonly custom?: AiGatewayModelProviderServiceConfigCustom;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#forward_headers AiGatewayModelProviderService#forward_headers}
  */
  readonly forwardHeaders?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#forward_query_parameters AiGatewayModelProviderService#forward_query_parameters}
  */
  readonly forwardQueryParameters?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#forward_unmanaged_paths AiGatewayModelProviderService#forward_unmanaged_paths}
  */
  readonly forwardUnmanagedPaths?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#gemini_enterprise AiGatewayModelProviderService#gemini_enterprise}
  */
  readonly geminiEnterprise?: AiGatewayModelProviderServiceConfigGeminiEnterprise;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#inference_table AiGatewayModelProviderService#inference_table}
  */
  readonly inferenceTable?: AiGatewayModelProviderServiceConfigInferenceTable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#microsoft_foundry AiGatewayModelProviderService#microsoft_foundry}
  */
  readonly microsoftFoundry?: AiGatewayModelProviderServiceConfigMicrosoftFoundry;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#openai AiGatewayModelProviderService#openai}
  */
  readonly openai?: AiGatewayModelProviderServiceConfigOpenai;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#provider_type AiGatewayModelProviderService#provider_type}
  */
  readonly providerType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#rate_limits AiGatewayModelProviderService#rate_limits}
  */
  readonly rateLimits?: AiGatewayModelProviderServiceConfigRateLimits[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#targets AiGatewayModelProviderService#targets}
  */
  readonly targets?: AiGatewayModelProviderServiceConfigTargets[] | cdktn.IResolvable;
}

export function aiGatewayModelProviderServiceConfigAToTerraform(struct?: AiGatewayModelProviderServiceConfigA | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allow_all_targets: cdktn.booleanToTerraform(struct!.allowAllTargets),
    amazon_bedrock: aiGatewayModelProviderServiceConfigAmazonBedrockToTerraform(struct!.amazonBedrock),
    anthropic: aiGatewayModelProviderServiceConfigAnthropicToTerraform(struct!.anthropic),
    azure_openai: aiGatewayModelProviderServiceConfigAzureOpenaiToTerraform(struct!.azureOpenai),
    custom: aiGatewayModelProviderServiceConfigCustomToTerraform(struct!.custom),
    forward_headers: cdktn.booleanToTerraform(struct!.forwardHeaders),
    forward_query_parameters: cdktn.booleanToTerraform(struct!.forwardQueryParameters),
    forward_unmanaged_paths: cdktn.booleanToTerraform(struct!.forwardUnmanagedPaths),
    gemini_enterprise: aiGatewayModelProviderServiceConfigGeminiEnterpriseToTerraform(struct!.geminiEnterprise),
    inference_table: aiGatewayModelProviderServiceConfigInferenceTableToTerraform(struct!.inferenceTable),
    microsoft_foundry: aiGatewayModelProviderServiceConfigMicrosoftFoundryToTerraform(struct!.microsoftFoundry),
    openai: aiGatewayModelProviderServiceConfigOpenaiToTerraform(struct!.openai),
    provider_type: cdktn.stringToTerraform(struct!.providerType),
    rate_limits: cdktn.listMapper(aiGatewayModelProviderServiceConfigRateLimitsToTerraform, false)(struct!.rateLimits),
    targets: cdktn.listMapper(aiGatewayModelProviderServiceConfigTargetsToTerraform, false)(struct!.targets),
  }
}


export function aiGatewayModelProviderServiceConfigAToHclTerraform(struct?: AiGatewayModelProviderServiceConfigA | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allow_all_targets: {
      value: cdktn.booleanToHclTerraform(struct!.allowAllTargets),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    amazon_bedrock: {
      value: aiGatewayModelProviderServiceConfigAmazonBedrockToHclTerraform(struct!.amazonBedrock),
      isBlock: true,
      type: "struct",
      storageClassType: "AiGatewayModelProviderServiceConfigAmazonBedrock",
    },
    anthropic: {
      value: aiGatewayModelProviderServiceConfigAnthropicToHclTerraform(struct!.anthropic),
      isBlock: true,
      type: "struct",
      storageClassType: "AiGatewayModelProviderServiceConfigAnthropic",
    },
    azure_openai: {
      value: aiGatewayModelProviderServiceConfigAzureOpenaiToHclTerraform(struct!.azureOpenai),
      isBlock: true,
      type: "struct",
      storageClassType: "AiGatewayModelProviderServiceConfigAzureOpenai",
    },
    custom: {
      value: aiGatewayModelProviderServiceConfigCustomToHclTerraform(struct!.custom),
      isBlock: true,
      type: "struct",
      storageClassType: "AiGatewayModelProviderServiceConfigCustom",
    },
    forward_headers: {
      value: cdktn.booleanToHclTerraform(struct!.forwardHeaders),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    forward_query_parameters: {
      value: cdktn.booleanToHclTerraform(struct!.forwardQueryParameters),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    forward_unmanaged_paths: {
      value: cdktn.booleanToHclTerraform(struct!.forwardUnmanagedPaths),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gemini_enterprise: {
      value: aiGatewayModelProviderServiceConfigGeminiEnterpriseToHclTerraform(struct!.geminiEnterprise),
      isBlock: true,
      type: "struct",
      storageClassType: "AiGatewayModelProviderServiceConfigGeminiEnterprise",
    },
    inference_table: {
      value: aiGatewayModelProviderServiceConfigInferenceTableToHclTerraform(struct!.inferenceTable),
      isBlock: true,
      type: "struct",
      storageClassType: "AiGatewayModelProviderServiceConfigInferenceTable",
    },
    microsoft_foundry: {
      value: aiGatewayModelProviderServiceConfigMicrosoftFoundryToHclTerraform(struct!.microsoftFoundry),
      isBlock: true,
      type: "struct",
      storageClassType: "AiGatewayModelProviderServiceConfigMicrosoftFoundry",
    },
    openai: {
      value: aiGatewayModelProviderServiceConfigOpenaiToHclTerraform(struct!.openai),
      isBlock: true,
      type: "struct",
      storageClassType: "AiGatewayModelProviderServiceConfigOpenai",
    },
    provider_type: {
      value: cdktn.stringToHclTerraform(struct!.providerType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rate_limits: {
      value: cdktn.listMapperHcl(aiGatewayModelProviderServiceConfigRateLimitsToHclTerraform, false)(struct!.rateLimits),
      isBlock: true,
      type: "list",
      storageClassType: "AiGatewayModelProviderServiceConfigRateLimitsList",
    },
    targets: {
      value: cdktn.listMapperHcl(aiGatewayModelProviderServiceConfigTargetsToHclTerraform, false)(struct!.targets),
      isBlock: true,
      type: "list",
      storageClassType: "AiGatewayModelProviderServiceConfigTargetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiGatewayModelProviderServiceConfigAOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiGatewayModelProviderServiceConfigA | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowAllTargets !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAllTargets = this._allowAllTargets;
    }
    if (this._amazonBedrock?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.amazonBedrock = this._amazonBedrock?.internalValue;
    }
    if (this._anthropic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.anthropic = this._anthropic?.internalValue;
    }
    if (this._azureOpenai?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureOpenai = this._azureOpenai?.internalValue;
    }
    if (this._custom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom = this._custom?.internalValue;
    }
    if (this._forwardHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardHeaders = this._forwardHeaders;
    }
    if (this._forwardQueryParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardQueryParameters = this._forwardQueryParameters;
    }
    if (this._forwardUnmanagedPaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardUnmanagedPaths = this._forwardUnmanagedPaths;
    }
    if (this._geminiEnterprise?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.geminiEnterprise = this._geminiEnterprise?.internalValue;
    }
    if (this._inferenceTable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inferenceTable = this._inferenceTable?.internalValue;
    }
    if (this._microsoftFoundry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.microsoftFoundry = this._microsoftFoundry?.internalValue;
    }
    if (this._openai?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openai = this._openai?.internalValue;
    }
    if (this._providerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerType = this._providerType;
    }
    if (this._rateLimits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimits = this._rateLimits?.internalValue;
    }
    if (this._targets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targets = this._targets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewayModelProviderServiceConfigA | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowAllTargets = undefined;
      this._amazonBedrock.internalValue = undefined;
      this._anthropic.internalValue = undefined;
      this._azureOpenai.internalValue = undefined;
      this._custom.internalValue = undefined;
      this._forwardHeaders = undefined;
      this._forwardQueryParameters = undefined;
      this._forwardUnmanagedPaths = undefined;
      this._geminiEnterprise.internalValue = undefined;
      this._inferenceTable.internalValue = undefined;
      this._microsoftFoundry.internalValue = undefined;
      this._openai.internalValue = undefined;
      this._providerType = undefined;
      this._rateLimits.internalValue = undefined;
      this._targets.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowAllTargets = value.allowAllTargets;
      this._amazonBedrock.internalValue = value.amazonBedrock;
      this._anthropic.internalValue = value.anthropic;
      this._azureOpenai.internalValue = value.azureOpenai;
      this._custom.internalValue = value.custom;
      this._forwardHeaders = value.forwardHeaders;
      this._forwardQueryParameters = value.forwardQueryParameters;
      this._forwardUnmanagedPaths = value.forwardUnmanagedPaths;
      this._geminiEnterprise.internalValue = value.geminiEnterprise;
      this._inferenceTable.internalValue = value.inferenceTable;
      this._microsoftFoundry.internalValue = value.microsoftFoundry;
      this._openai.internalValue = value.openai;
      this._providerType = value.providerType;
      this._rateLimits.internalValue = value.rateLimits;
      this._targets.internalValue = value.targets;
    }
  }

  // allow_all_targets - computed: false, optional: true, required: false
  private _allowAllTargets?: boolean | cdktn.IResolvable; 
  public get allowAllTargets() {
    return this.getBooleanAttribute('allow_all_targets');
  }
  public set allowAllTargets(value: boolean | cdktn.IResolvable) {
    this._allowAllTargets = value;
  }
  public resetAllowAllTargets() {
    this._allowAllTargets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAllTargetsInput() {
    return this._allowAllTargets;
  }

  // amazon_bedrock - computed: false, optional: true, required: false
  private _amazonBedrock = new AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference(this, "amazon_bedrock");
  public get amazonBedrock() {
    return this._amazonBedrock;
  }
  public putAmazonBedrock(value: AiGatewayModelProviderServiceConfigAmazonBedrock) {
    this._amazonBedrock.internalValue = value;
  }
  public resetAmazonBedrock() {
    this._amazonBedrock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonBedrockInput() {
    return this._amazonBedrock.internalValue;
  }

  // anthropic - computed: false, optional: true, required: false
  private _anthropic = new AiGatewayModelProviderServiceConfigAnthropicOutputReference(this, "anthropic");
  public get anthropic() {
    return this._anthropic;
  }
  public putAnthropic(value: AiGatewayModelProviderServiceConfigAnthropic) {
    this._anthropic.internalValue = value;
  }
  public resetAnthropic() {
    this._anthropic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anthropicInput() {
    return this._anthropic.internalValue;
  }

  // azure_openai - computed: false, optional: true, required: false
  private _azureOpenai = new AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference(this, "azure_openai");
  public get azureOpenai() {
    return this._azureOpenai;
  }
  public putAzureOpenai(value: AiGatewayModelProviderServiceConfigAzureOpenai) {
    this._azureOpenai.internalValue = value;
  }
  public resetAzureOpenai() {
    this._azureOpenai.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureOpenaiInput() {
    return this._azureOpenai.internalValue;
  }

  // custom - computed: false, optional: true, required: false
  private _custom = new AiGatewayModelProviderServiceConfigCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: AiGatewayModelProviderServiceConfigCustom) {
    this._custom.internalValue = value;
  }
  public resetCustom() {
    this._custom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom.internalValue;
  }

  // forward_headers - computed: false, optional: true, required: false
  private _forwardHeaders?: boolean | cdktn.IResolvable; 
  public get forwardHeaders() {
    return this.getBooleanAttribute('forward_headers');
  }
  public set forwardHeaders(value: boolean | cdktn.IResolvable) {
    this._forwardHeaders = value;
  }
  public resetForwardHeaders() {
    this._forwardHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardHeadersInput() {
    return this._forwardHeaders;
  }

  // forward_query_parameters - computed: false, optional: true, required: false
  private _forwardQueryParameters?: boolean | cdktn.IResolvable; 
  public get forwardQueryParameters() {
    return this.getBooleanAttribute('forward_query_parameters');
  }
  public set forwardQueryParameters(value: boolean | cdktn.IResolvable) {
    this._forwardQueryParameters = value;
  }
  public resetForwardQueryParameters() {
    this._forwardQueryParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardQueryParametersInput() {
    return this._forwardQueryParameters;
  }

  // forward_unmanaged_paths - computed: false, optional: true, required: false
  private _forwardUnmanagedPaths?: boolean | cdktn.IResolvable; 
  public get forwardUnmanagedPaths() {
    return this.getBooleanAttribute('forward_unmanaged_paths');
  }
  public set forwardUnmanagedPaths(value: boolean | cdktn.IResolvable) {
    this._forwardUnmanagedPaths = value;
  }
  public resetForwardUnmanagedPaths() {
    this._forwardUnmanagedPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardUnmanagedPathsInput() {
    return this._forwardUnmanagedPaths;
  }

  // gemini_enterprise - computed: false, optional: true, required: false
  private _geminiEnterprise = new AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference(this, "gemini_enterprise");
  public get geminiEnterprise() {
    return this._geminiEnterprise;
  }
  public putGeminiEnterprise(value: AiGatewayModelProviderServiceConfigGeminiEnterprise) {
    this._geminiEnterprise.internalValue = value;
  }
  public resetGeminiEnterprise() {
    this._geminiEnterprise.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geminiEnterpriseInput() {
    return this._geminiEnterprise.internalValue;
  }

  // inference_table - computed: false, optional: true, required: false
  private _inferenceTable = new AiGatewayModelProviderServiceConfigInferenceTableOutputReference(this, "inference_table");
  public get inferenceTable() {
    return this._inferenceTable;
  }
  public putInferenceTable(value: AiGatewayModelProviderServiceConfigInferenceTable) {
    this._inferenceTable.internalValue = value;
  }
  public resetInferenceTable() {
    this._inferenceTable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inferenceTableInput() {
    return this._inferenceTable.internalValue;
  }

  // microsoft_foundry - computed: false, optional: true, required: false
  private _microsoftFoundry = new AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference(this, "microsoft_foundry");
  public get microsoftFoundry() {
    return this._microsoftFoundry;
  }
  public putMicrosoftFoundry(value: AiGatewayModelProviderServiceConfigMicrosoftFoundry) {
    this._microsoftFoundry.internalValue = value;
  }
  public resetMicrosoftFoundry() {
    this._microsoftFoundry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microsoftFoundryInput() {
    return this._microsoftFoundry.internalValue;
  }

  // openai - computed: false, optional: true, required: false
  private _openai = new AiGatewayModelProviderServiceConfigOpenaiOutputReference(this, "openai");
  public get openai() {
    return this._openai;
  }
  public putOpenai(value: AiGatewayModelProviderServiceConfigOpenai) {
    this._openai.internalValue = value;
  }
  public resetOpenai() {
    this._openai.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openaiInput() {
    return this._openai.internalValue;
  }

  // provider_type - computed: false, optional: true, required: false
  private _providerType?: string; 
  public get providerType() {
    return this.getStringAttribute('provider_type');
  }
  public set providerType(value: string) {
    this._providerType = value;
  }
  public resetProviderType() {
    this._providerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerTypeInput() {
    return this._providerType;
  }

  // rate_limits - computed: false, optional: true, required: false
  private _rateLimits = new AiGatewayModelProviderServiceConfigRateLimitsList(this, "rate_limits", false);
  public get rateLimits() {
    return this._rateLimits;
  }
  public putRateLimits(value: AiGatewayModelProviderServiceConfigRateLimits[] | cdktn.IResolvable) {
    this._rateLimits.internalValue = value;
  }
  public resetRateLimits() {
    this._rateLimits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitsInput() {
    return this._rateLimits.internalValue;
  }

  // targets - computed: false, optional: true, required: false
  private _targets = new AiGatewayModelProviderServiceConfigTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }
  public putTargets(value: AiGatewayModelProviderServiceConfigTargets[] | cdktn.IResolvable) {
    this._targets.internalValue = value;
  }
  public resetTargets() {
    this._targets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets.internalValue;
  }
}
export interface AiGatewayModelProviderServiceProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#workspace_id AiGatewayModelProviderService#workspace_id}
  */
  readonly workspaceId?: string;
}

export function aiGatewayModelProviderServiceProviderConfigToTerraform(struct?: AiGatewayModelProviderServiceProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function aiGatewayModelProviderServiceProviderConfigToHclTerraform(struct?: AiGatewayModelProviderServiceProviderConfig | cdktn.IResolvable): any {
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

export class AiGatewayModelProviderServiceProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiGatewayModelProviderServiceProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AiGatewayModelProviderServiceProviderConfig | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service databricks_ai_gateway_model_provider_service}
*/
export class AiGatewayModelProviderService extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_ai_gateway_model_provider_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AiGatewayModelProviderService resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AiGatewayModelProviderService to import
  * @param importFromId The id of the existing AiGatewayModelProviderService that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AiGatewayModelProviderService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_ai_gateway_model_provider_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/ai_gateway_model_provider_service databricks_ai_gateway_model_provider_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AiGatewayModelProviderServiceConfig
  */
  public constructor(scope: Construct, id: string, config: AiGatewayModelProviderServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_ai_gateway_model_provider_service',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.128.0',
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
    this._modelProviderServiceId = config.modelProviderServiceId;
    this._owner = config.owner;
    this._parent = config.parent;
    this._providerConfig.internalValue = config.providerConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
  private _config = new AiGatewayModelProviderServiceConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: AiGatewayModelProviderServiceConfigA) {
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

  // model_provider_service_id - computed: false, optional: false, required: true
  private _modelProviderServiceId?: string; 
  public get modelProviderServiceId() {
    return this.getStringAttribute('model_provider_service_id');
  }
  public set modelProviderServiceId(value: string) {
    this._modelProviderServiceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelProviderServiceIdInput() {
    return this._modelProviderServiceId;
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
  private _providerConfig = new AiGatewayModelProviderServiceProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: AiGatewayModelProviderServiceProviderConfig) {
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
      comment: cdktn.stringToTerraform(this._comment),
      config: aiGatewayModelProviderServiceConfigAToTerraform(this._config.internalValue),
      model_provider_service_id: cdktn.stringToTerraform(this._modelProviderServiceId),
      owner: cdktn.stringToTerraform(this._owner),
      parent: cdktn.stringToTerraform(this._parent),
      provider_config: aiGatewayModelProviderServiceProviderConfigToTerraform(this._providerConfig.internalValue),
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
        value: aiGatewayModelProviderServiceConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AiGatewayModelProviderServiceConfigA",
      },
      model_provider_service_id: {
        value: cdktn.stringToHclTerraform(this._modelProviderServiceId),
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
        value: aiGatewayModelProviderServiceProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AiGatewayModelProviderServiceProviderConfig",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
