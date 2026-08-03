/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataDatabricksAiGatewayModelProviderServiceConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#name DataDatabricksAiGatewayModelProviderService#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#provider_config DataDatabricksAiGatewayModelProviderService#provider_config}
  */
  readonly providerConfig?: DataDatabricksAiGatewayModelProviderServiceProviderConfig;
}
export interface DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#plaintext DataDatabricksAiGatewayModelProviderService#plaintext}
  */
  readonly plaintext?: string;
}

export function dataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKeyToTerraform(struct?: DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    plaintext: cdktn.stringToTerraform(struct!.plaintext),
  }
}


export function dataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKeyToHclTerraform(struct?: DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKey | cdktn.IResolvable): any {
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

export class DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKey | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKey | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#name DataDatabricksAiGatewayModelProviderService#name}
  */
  readonly name: string;
}

export function dataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialToTerraform(struct?: DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function dataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialToHclTerraform(struct?: DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential | cdktn.IResolvable): any {
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

export class DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#aws_access_key_id DataDatabricksAiGatewayModelProviderService#aws_access_key_id}
  */
  readonly awsAccessKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#aws_secret_access_key DataDatabricksAiGatewayModelProviderService#aws_secret_access_key}
  */
  readonly awsSecretAccessKey?: DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKey;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#region DataDatabricksAiGatewayModelProviderService#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#service_credential DataDatabricksAiGatewayModelProviderService#service_credential}
  */
  readonly serviceCredential?: DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential;
}

export function dataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectToTerraform(struct?: DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aws_access_key_id: cdktn.stringToTerraform(struct!.awsAccessKeyId),
    aws_secret_access_key: dataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKeyToTerraform(struct!.awsSecretAccessKey),
    region: cdktn.stringToTerraform(struct!.region),
    service_credential: dataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialToTerraform(struct!.serviceCredential),
  }
}


export function dataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectToHclTerraform(struct?: DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    aws_access_key_id: {
      value: cdktn.stringToHclTerraform(struct!.awsAccessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_secret_access_key: {
      value: dataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKeyToHclTerraform(struct!.awsSecretAccessKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKey",
    },
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_credential: {
      value: dataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialToHclTerraform(struct!.serviceCredential),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsAccessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAccessKeyId = this._awsAccessKeyId;
    }
    if (this._awsSecretAccessKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsSecretAccessKey = this._awsSecretAccessKey?.internalValue;
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

  public set internalValue(value: DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsAccessKeyId = undefined;
      this._awsSecretAccessKey.internalValue = undefined;
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
      this._awsAccessKeyId = value.awsAccessKeyId;
      this._awsSecretAccessKey.internalValue = value.awsSecretAccessKey;
      this._region = value.region;
      this._serviceCredential.internalValue = value.serviceCredential;
    }
  }

  // aws_access_key_id - computed: true, optional: true, required: false
  private _awsAccessKeyId?: string; 
  public get awsAccessKeyId() {
    return this.getStringAttribute('aws_access_key_id');
  }
  public set awsAccessKeyId(value: string) {
    this._awsAccessKeyId = value;
  }
  public resetAwsAccessKeyId() {
    this._awsAccessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccessKeyIdInput() {
    return this._awsAccessKeyId;
  }

  // aws_secret_access_key - computed: true, optional: true, required: false
  private _awsSecretAccessKey = new DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKeyOutputReference(this, "aws_secret_access_key");
  public get awsSecretAccessKey() {
    return this._awsSecretAccessKey;
  }
  public putAwsSecretAccessKey(value: DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKey) {
    this._awsSecretAccessKey.internalValue = value;
  }
  public resetAwsSecretAccessKey() {
    this._awsSecretAccessKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSecretAccessKeyInput() {
    return this._awsSecretAccessKey.internalValue;
  }

  // region - computed: true, optional: true, required: false
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

  // service_credential - computed: true, optional: true, required: false
  private _serviceCredential = new DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference(this, "service_credential");
  public get serviceCredential() {
    return this._serviceCredential;
  }
  public putServiceCredential(value: DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential) {
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
export interface DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrock {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#direct DataDatabricksAiGatewayModelProviderService#direct}
  */
  readonly direct?: DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect;
}

export function dataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockToTerraform(struct?: DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrock | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    direct: dataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectToTerraform(struct!.direct),
  }
}


export function dataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockToHclTerraform(struct?: DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrock | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    direct: {
      value: dataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectToHclTerraform(struct!.direct),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrock | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrock | cdktn.IResolvable | undefined) {
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

  // direct - computed: true, optional: true, required: false
  private _direct = new DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference(this, "direct");
  public get direct() {
    return this._direct;
  }
  public putDirect(value: DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect) {
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
export interface DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#plaintext DataDatabricksAiGatewayModelProviderService#plaintext}
  */
  readonly plaintext?: string;
}

export function dataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyToTerraform(struct?: DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    plaintext: cdktn.stringToTerraform(struct!.plaintext),
  }
}


export function dataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyToHclTerraform(struct?: DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKey | cdktn.IResolvable): any {
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

export class DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKey | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKey | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#api_key DataDatabricksAiGatewayModelProviderService#api_key}
  */
  readonly apiKey?: DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKey;
}

export function dataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectToTerraform(struct?: DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirect | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key: dataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyToTerraform(struct!.apiKey),
  }
}


export function dataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectToHclTerraform(struct?: DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirect | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key: {
      value: dataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyToHclTerraform(struct!.apiKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirect | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirect | cdktn.IResolvable | undefined) {
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

  // api_key - computed: true, optional: true, required: false
  private _apiKey = new DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference(this, "api_key");
  public get apiKey() {
    return this._apiKey;
  }
  public putApiKey(value: DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKey) {
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
export interface DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayed {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#plan_type DataDatabricksAiGatewayModelProviderService#plan_type}
  */
  readonly planType?: string;
}

export function dataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedToTerraform(struct?: DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayed | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    plan_type: cdktn.stringToTerraform(struct!.planType),
  }
}


export function dataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedToHclTerraform(struct?: DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayed | cdktn.IResolvable): any {
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

export class DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayed | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayed | cdktn.IResolvable | undefined) {
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

  // plan_type - computed: true, optional: true, required: false
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
export interface DataDatabricksAiGatewayModelProviderServiceConfigAnthropic {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#direct DataDatabricksAiGatewayModelProviderService#direct}
  */
  readonly direct?: DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirect;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#relayed DataDatabricksAiGatewayModelProviderService#relayed}
  */
  readonly relayed?: DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayed;
}

export function dataDatabricksAiGatewayModelProviderServiceConfigAnthropicToTerraform(struct?: DataDatabricksAiGatewayModelProviderServiceConfigAnthropic | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    direct: dataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectToTerraform(struct!.direct),
    relayed: dataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedToTerraform(struct!.relayed),
  }
}


export function dataDatabricksAiGatewayModelProviderServiceConfigAnthropicToHclTerraform(struct?: DataDatabricksAiGatewayModelProviderServiceConfigAnthropic | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    direct: {
      value: dataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectToHclTerraform(struct!.direct),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirect",
    },
    relayed: {
      value: dataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedToHclTerraform(struct!.relayed),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayed",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelProviderServiceConfigAnthropic | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelProviderServiceConfigAnthropic | cdktn.IResolvable | undefined) {
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

  // direct - computed: true, optional: true, required: false
  private _direct = new DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference(this, "direct");
  public get direct() {
    return this._direct;
  }
  public putDirect(value: DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirect) {
    this._direct.internalValue = value;
  }
  public resetDirect() {
    this._direct.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directInput() {
    return this._direct.internalValue;
  }

  // relayed - computed: true, optional: true, required: false
  private _relayed = new DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference(this, "relayed");
  public get relayed() {
    return this._relayed;
  }
  public putRelayed(value: DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayed) {
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
export interface DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#plaintext DataDatabricksAiGatewayModelProviderService#plaintext}
  */
  readonly plaintext?: string;
}

export function dataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyToTerraform(struct?: DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    plaintext: cdktn.stringToTerraform(struct!.plaintext),
  }
}


export function dataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyToHclTerraform(struct?: DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey | cdktn.IResolvable): any {
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

export class DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecret {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#plaintext DataDatabricksAiGatewayModelProviderService#plaintext}
  */
  readonly plaintext?: string;
}

export function dataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecretToTerraform(struct?: DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecret | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    plaintext: cdktn.stringToTerraform(struct!.plaintext),
  }
}


export function dataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecretToHclTerraform(struct?: DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecret | cdktn.IResolvable): any {
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

export class DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecretOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecret | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecret | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#name DataDatabricksAiGatewayModelProviderService#name}
  */
  readonly name: string;
}

export function dataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialToTerraform(struct?: DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function dataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialToHclTerraform(struct?: DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential | cdktn.IResolvable): any {
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

export class DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#api_key DataDatabricksAiGatewayModelProviderService#api_key}
  */
  readonly apiKey?: DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#base_url DataDatabricksAiGatewayModelProviderService#base_url}
  */
  readonly baseUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#client_id DataDatabricksAiGatewayModelProviderService#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#client_secret DataDatabricksAiGatewayModelProviderService#client_secret}
  */
  readonly clientSecret?: DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecret;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#service_credential DataDatabricksAiGatewayModelProviderService#service_credential}
  */
  readonly serviceCredential?: DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#tenant_id DataDatabricksAiGatewayModelProviderService#tenant_id}
  */
  readonly tenantId?: string;
}

export function dataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectToTerraform(struct?: DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key: dataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyToTerraform(struct!.apiKey),
    base_url: cdktn.stringToTerraform(struct!.baseUrl),
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret: dataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecretToTerraform(struct!.clientSecret),
    service_credential: dataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialToTerraform(struct!.serviceCredential),
    tenant_id: cdktn.stringToTerraform(struct!.tenantId),
  }
}


export function dataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectToHclTerraform(struct?: DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key: {
      value: dataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyToHclTerraform(struct!.apiKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey",
    },
    base_url: {
      value: cdktn.stringToHclTerraform(struct!.baseUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id: {
      value: cdktn.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: dataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecretToHclTerraform(struct!.clientSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecret",
    },
    service_credential: {
      value: dataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialToHclTerraform(struct!.serviceCredential),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential",
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

export class DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect | cdktn.IResolvable | undefined {
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
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret?.internalValue;
    }
    if (this._serviceCredential?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceCredential = this._serviceCredential?.internalValue;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey.internalValue = undefined;
      this._baseUrl = undefined;
      this._clientId = undefined;
      this._clientSecret.internalValue = undefined;
      this._serviceCredential.internalValue = undefined;
      this._tenantId = undefined;
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
      this._clientId = value.clientId;
      this._clientSecret.internalValue = value.clientSecret;
      this._serviceCredential.internalValue = value.serviceCredential;
      this._tenantId = value.tenantId;
    }
  }

  // api_key - computed: true, optional: true, required: false
  private _apiKey = new DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference(this, "api_key");
  public get apiKey() {
    return this._apiKey;
  }
  public putApiKey(value: DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey) {
    this._apiKey.internalValue = value;
  }
  public resetApiKey() {
    this._apiKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey.internalValue;
  }

  // base_url - computed: true, optional: true, required: false
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

  // client_id - computed: true, optional: true, required: false
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

  // client_secret - computed: true, optional: true, required: false
  private _clientSecret = new DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecretOutputReference(this, "client_secret");
  public get clientSecret() {
    return this._clientSecret;
  }
  public putClientSecret(value: DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecret) {
    this._clientSecret.internalValue = value;
  }
  public resetClientSecret() {
    this._clientSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret.internalValue;
  }

  // service_credential - computed: true, optional: true, required: false
  private _serviceCredential = new DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference(this, "service_credential");
  public get serviceCredential() {
    return this._serviceCredential;
  }
  public putServiceCredential(value: DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential) {
    this._serviceCredential.internalValue = value;
  }
  public resetServiceCredential() {
    this._serviceCredential.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceCredentialInput() {
    return this._serviceCredential.internalValue;
  }

  // tenant_id - computed: true, optional: true, required: false
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
export interface DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenai {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#direct DataDatabricksAiGatewayModelProviderService#direct}
  */
  readonly direct?: DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect;
}

export function dataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiToTerraform(struct?: DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenai | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    direct: dataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectToTerraform(struct!.direct),
  }
}


export function dataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiToHclTerraform(struct?: DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenai | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    direct: {
      value: dataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectToHclTerraform(struct!.direct),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenai | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenai | cdktn.IResolvable | undefined) {
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

  // direct - computed: true, optional: true, required: false
  private _direct = new DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference(this, "direct");
  public get direct() {
    return this._direct;
  }
  public putDirect(value: DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect) {
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
export interface DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#plaintext DataDatabricksAiGatewayModelProviderService#plaintext}
  */
  readonly plaintext?: string;
}

export function dataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyToTerraform(struct?: DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    plaintext: cdktn.stringToTerraform(struct!.plaintext),
  }
}


export function dataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyToHclTerraform(struct?: DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKey | cdktn.IResolvable): any {
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

export class DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKey | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKey | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#api_key DataDatabricksAiGatewayModelProviderService#api_key}
  */
  readonly apiKey?: DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKey;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#base_url DataDatabricksAiGatewayModelProviderService#base_url}
  */
  readonly baseUrl?: string;
}

export function dataDatabricksAiGatewayModelProviderServiceConfigCustomDirectToTerraform(struct?: DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key: dataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyToTerraform(struct!.apiKey),
    base_url: cdktn.stringToTerraform(struct!.baseUrl),
  }
}


export function dataDatabricksAiGatewayModelProviderServiceConfigCustomDirectToHclTerraform(struct?: DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key: {
      value: dataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyToHclTerraform(struct!.apiKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKey",
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

export class DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect | cdktn.IResolvable | undefined) {
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

  // api_key - computed: true, optional: true, required: false
  private _apiKey = new DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference(this, "api_key");
  public get apiKey() {
    return this._apiKey;
  }
  public putApiKey(value: DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKey) {
    this._apiKey.internalValue = value;
  }
  public resetApiKey() {
    this._apiKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey.internalValue;
  }

  // base_url - computed: true, optional: true, required: false
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
export interface DataDatabricksAiGatewayModelProviderServiceConfigCustom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#direct DataDatabricksAiGatewayModelProviderService#direct}
  */
  readonly direct?: DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect;
}

export function dataDatabricksAiGatewayModelProviderServiceConfigCustomToTerraform(struct?: DataDatabricksAiGatewayModelProviderServiceConfigCustom | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    direct: dataDatabricksAiGatewayModelProviderServiceConfigCustomDirectToTerraform(struct!.direct),
  }
}


export function dataDatabricksAiGatewayModelProviderServiceConfigCustomToHclTerraform(struct?: DataDatabricksAiGatewayModelProviderServiceConfigCustom | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    direct: {
      value: dataDatabricksAiGatewayModelProviderServiceConfigCustomDirectToHclTerraform(struct!.direct),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelProviderServiceConfigCustom | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelProviderServiceConfigCustom | cdktn.IResolvable | undefined) {
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

  // direct - computed: true, optional: true, required: false
  private _direct = new DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference(this, "direct");
  public get direct() {
    return this._direct;
  }
  public putDirect(value: DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect) {
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
export interface DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#plaintext DataDatabricksAiGatewayModelProviderService#plaintext}
  */
  readonly plaintext?: string;
}

export function dataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyToTerraform(struct?: DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    plaintext: cdktn.stringToTerraform(struct!.plaintext),
  }
}


export function dataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyToHclTerraform(struct?: DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey | cdktn.IResolvable): any {
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

export class DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#api_key DataDatabricksAiGatewayModelProviderService#api_key}
  */
  readonly apiKey?: DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#project_id DataDatabricksAiGatewayModelProviderService#project_id}
  */
  readonly projectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#region DataDatabricksAiGatewayModelProviderService#region}
  */
  readonly region?: string;
}

export function dataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectToTerraform(struct?: DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key: dataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyToTerraform(struct!.apiKey),
    project_id: cdktn.stringToTerraform(struct!.projectId),
    region: cdktn.stringToTerraform(struct!.region),
  }
}


export function dataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectToHclTerraform(struct?: DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key: {
      value: dataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyToHclTerraform(struct!.apiKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey",
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

export class DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect | cdktn.IResolvable | undefined) {
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

  // api_key - computed: true, optional: true, required: false
  private _apiKey = new DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference(this, "api_key");
  public get apiKey() {
    return this._apiKey;
  }
  public putApiKey(value: DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey) {
    this._apiKey.internalValue = value;
  }
  public resetApiKey() {
    this._apiKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey.internalValue;
  }

  // project_id - computed: true, optional: true, required: false
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

  // region - computed: true, optional: true, required: false
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
export interface DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterprise {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#direct DataDatabricksAiGatewayModelProviderService#direct}
  */
  readonly direct?: DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect;
}

export function dataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseToTerraform(struct?: DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterprise | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    direct: dataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectToTerraform(struct!.direct),
  }
}


export function dataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseToHclTerraform(struct?: DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterprise | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    direct: {
      value: dataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectToHclTerraform(struct!.direct),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterprise | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterprise | cdktn.IResolvable | undefined) {
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

  // direct - computed: true, optional: true, required: false
  private _direct = new DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference(this, "direct");
  public get direct() {
    return this._direct;
  }
  public putDirect(value: DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect) {
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
export interface DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#disabled DataDatabricksAiGatewayModelProviderService#disabled}
  */
  readonly disabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#parent DataDatabricksAiGatewayModelProviderService#parent}
  */
  readonly parent: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#table_name_prefix DataDatabricksAiGatewayModelProviderService#table_name_prefix}
  */
  readonly tableNamePrefix?: string;
}

export function dataDatabricksAiGatewayModelProviderServiceConfigInferenceTableToTerraform(struct?: DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable | cdktn.IResolvable): any {
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


export function dataDatabricksAiGatewayModelProviderServiceConfigInferenceTableToHclTerraform(struct?: DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable | cdktn.IResolvable): any {
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

export class DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#plaintext DataDatabricksAiGatewayModelProviderService#plaintext}
  */
  readonly plaintext?: string;
}

export function dataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyToTerraform(struct?: DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    plaintext: cdktn.stringToTerraform(struct!.plaintext),
  }
}


export function dataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyToHclTerraform(struct?: DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey | cdktn.IResolvable): any {
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

export class DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecret {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#plaintext DataDatabricksAiGatewayModelProviderService#plaintext}
  */
  readonly plaintext?: string;
}

export function dataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecretToTerraform(struct?: DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecret | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    plaintext: cdktn.stringToTerraform(struct!.plaintext),
  }
}


export function dataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecretToHclTerraform(struct?: DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecret | cdktn.IResolvable): any {
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

export class DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecretOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecret | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecret | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#name DataDatabricksAiGatewayModelProviderService#name}
  */
  readonly name: string;
}

export function dataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialToTerraform(struct?: DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function dataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialToHclTerraform(struct?: DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential | cdktn.IResolvable): any {
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

export class DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#api_key DataDatabricksAiGatewayModelProviderService#api_key}
  */
  readonly apiKey?: DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#base_url DataDatabricksAiGatewayModelProviderService#base_url}
  */
  readonly baseUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#client_id DataDatabricksAiGatewayModelProviderService#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#client_secret DataDatabricksAiGatewayModelProviderService#client_secret}
  */
  readonly clientSecret?: DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecret;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#service_credential DataDatabricksAiGatewayModelProviderService#service_credential}
  */
  readonly serviceCredential?: DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#tenant_id DataDatabricksAiGatewayModelProviderService#tenant_id}
  */
  readonly tenantId?: string;
}

export function dataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectToTerraform(struct?: DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key: dataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyToTerraform(struct!.apiKey),
    base_url: cdktn.stringToTerraform(struct!.baseUrl),
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret: dataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecretToTerraform(struct!.clientSecret),
    service_credential: dataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialToTerraform(struct!.serviceCredential),
    tenant_id: cdktn.stringToTerraform(struct!.tenantId),
  }
}


export function dataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectToHclTerraform(struct?: DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key: {
      value: dataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyToHclTerraform(struct!.apiKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey",
    },
    base_url: {
      value: cdktn.stringToHclTerraform(struct!.baseUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id: {
      value: cdktn.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: dataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecretToHclTerraform(struct!.clientSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecret",
    },
    service_credential: {
      value: dataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialToHclTerraform(struct!.serviceCredential),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential",
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

export class DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect | cdktn.IResolvable | undefined {
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
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret?.internalValue;
    }
    if (this._serviceCredential?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceCredential = this._serviceCredential?.internalValue;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey.internalValue = undefined;
      this._baseUrl = undefined;
      this._clientId = undefined;
      this._clientSecret.internalValue = undefined;
      this._serviceCredential.internalValue = undefined;
      this._tenantId = undefined;
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
      this._clientId = value.clientId;
      this._clientSecret.internalValue = value.clientSecret;
      this._serviceCredential.internalValue = value.serviceCredential;
      this._tenantId = value.tenantId;
    }
  }

  // api_key - computed: true, optional: true, required: false
  private _apiKey = new DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference(this, "api_key");
  public get apiKey() {
    return this._apiKey;
  }
  public putApiKey(value: DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey) {
    this._apiKey.internalValue = value;
  }
  public resetApiKey() {
    this._apiKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey.internalValue;
  }

  // base_url - computed: true, optional: true, required: false
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

  // client_id - computed: true, optional: true, required: false
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

  // client_secret - computed: true, optional: true, required: false
  private _clientSecret = new DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecretOutputReference(this, "client_secret");
  public get clientSecret() {
    return this._clientSecret;
  }
  public putClientSecret(value: DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecret) {
    this._clientSecret.internalValue = value;
  }
  public resetClientSecret() {
    this._clientSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret.internalValue;
  }

  // service_credential - computed: true, optional: true, required: false
  private _serviceCredential = new DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference(this, "service_credential");
  public get serviceCredential() {
    return this._serviceCredential;
  }
  public putServiceCredential(value: DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential) {
    this._serviceCredential.internalValue = value;
  }
  public resetServiceCredential() {
    this._serviceCredential.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceCredentialInput() {
    return this._serviceCredential.internalValue;
  }

  // tenant_id - computed: true, optional: true, required: false
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
export interface DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundry {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#direct DataDatabricksAiGatewayModelProviderService#direct}
  */
  readonly direct?: DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect;
}

export function dataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryToTerraform(struct?: DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundry | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    direct: dataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectToTerraform(struct!.direct),
  }
}


export function dataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryToHclTerraform(struct?: DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundry | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    direct: {
      value: dataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectToHclTerraform(struct!.direct),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundry | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundry | cdktn.IResolvable | undefined) {
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

  // direct - computed: true, optional: true, required: false
  private _direct = new DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference(this, "direct");
  public get direct() {
    return this._direct;
  }
  public putDirect(value: DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect) {
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
export interface DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#plaintext DataDatabricksAiGatewayModelProviderService#plaintext}
  */
  readonly plaintext?: string;
}

export function dataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyToTerraform(struct?: DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    plaintext: cdktn.stringToTerraform(struct!.plaintext),
  }
}


export function dataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyToHclTerraform(struct?: DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKey | cdktn.IResolvable): any {
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

export class DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKey | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKey | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#api_key DataDatabricksAiGatewayModelProviderService#api_key}
  */
  readonly apiKey?: DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKey;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#base_url DataDatabricksAiGatewayModelProviderService#base_url}
  */
  readonly baseUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#organization DataDatabricksAiGatewayModelProviderService#organization}
  */
  readonly organization?: string;
}

export function dataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectToTerraform(struct?: DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key: dataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyToTerraform(struct!.apiKey),
    base_url: cdktn.stringToTerraform(struct!.baseUrl),
    organization: cdktn.stringToTerraform(struct!.organization),
  }
}


export function dataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectToHclTerraform(struct?: DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key: {
      value: dataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyToHclTerraform(struct!.apiKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKey",
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

export class DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect | cdktn.IResolvable | undefined) {
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

  // api_key - computed: true, optional: true, required: false
  private _apiKey = new DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference(this, "api_key");
  public get apiKey() {
    return this._apiKey;
  }
  public putApiKey(value: DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKey) {
    this._apiKey.internalValue = value;
  }
  public resetApiKey() {
    this._apiKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey.internalValue;
  }

  // base_url - computed: true, optional: true, required: false
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

  // organization - computed: true, optional: true, required: false
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
export interface DataDatabricksAiGatewayModelProviderServiceConfigOpenai {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#direct DataDatabricksAiGatewayModelProviderService#direct}
  */
  readonly direct?: DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect;
}

export function dataDatabricksAiGatewayModelProviderServiceConfigOpenaiToTerraform(struct?: DataDatabricksAiGatewayModelProviderServiceConfigOpenai | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    direct: dataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectToTerraform(struct!.direct),
  }
}


export function dataDatabricksAiGatewayModelProviderServiceConfigOpenaiToHclTerraform(struct?: DataDatabricksAiGatewayModelProviderServiceConfigOpenai | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    direct: {
      value: dataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectToHclTerraform(struct!.direct),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelProviderServiceConfigOpenai | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelProviderServiceConfigOpenai | cdktn.IResolvable | undefined) {
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

  // direct - computed: true, optional: true, required: false
  private _direct = new DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference(this, "direct");
  public get direct() {
    return this._direct;
  }
  public putDirect(value: DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect) {
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
export interface DataDatabricksAiGatewayModelProviderServiceConfigRateLimits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#key DataDatabricksAiGatewayModelProviderService#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#principal DataDatabricksAiGatewayModelProviderService#principal}
  */
  readonly principal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#renewal_period DataDatabricksAiGatewayModelProviderService#renewal_period}
  */
  readonly renewalPeriod: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#request_tag_key DataDatabricksAiGatewayModelProviderService#request_tag_key}
  */
  readonly requestTagKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#request_tag_value DataDatabricksAiGatewayModelProviderService#request_tag_value}
  */
  readonly requestTagValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#requests DataDatabricksAiGatewayModelProviderService#requests}
  */
  readonly requests?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#tokens DataDatabricksAiGatewayModelProviderService#tokens}
  */
  readonly tokens?: number;
}

export function dataDatabricksAiGatewayModelProviderServiceConfigRateLimitsToTerraform(struct?: DataDatabricksAiGatewayModelProviderServiceConfigRateLimits | cdktn.IResolvable): any {
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


export function dataDatabricksAiGatewayModelProviderServiceConfigRateLimitsToHclTerraform(struct?: DataDatabricksAiGatewayModelProviderServiceConfigRateLimits | cdktn.IResolvable): any {
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

export class DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksAiGatewayModelProviderServiceConfigRateLimits | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelProviderServiceConfigRateLimits | cdktn.IResolvable | undefined) {
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

export class DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksAiGatewayModelProviderServiceConfigRateLimits[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference {
    return new DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksAiGatewayModelProviderServiceConfigTargets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#model DataDatabricksAiGatewayModelProviderService#model}
  */
  readonly model: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#native_api_types DataDatabricksAiGatewayModelProviderService#native_api_types}
  */
  readonly nativeApiTypes?: string[];
}

export function dataDatabricksAiGatewayModelProviderServiceConfigTargetsToTerraform(struct?: DataDatabricksAiGatewayModelProviderServiceConfigTargets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    model: cdktn.stringToTerraform(struct!.model),
    native_api_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.nativeApiTypes),
  }
}


export function dataDatabricksAiGatewayModelProviderServiceConfigTargetsToHclTerraform(struct?: DataDatabricksAiGatewayModelProviderServiceConfigTargets | cdktn.IResolvable): any {
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

export class DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksAiGatewayModelProviderServiceConfigTargets | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelProviderServiceConfigTargets | cdktn.IResolvable | undefined) {
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

export class DataDatabricksAiGatewayModelProviderServiceConfigTargetsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksAiGatewayModelProviderServiceConfigTargets[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference {
    return new DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksAiGatewayModelProviderServiceConfigA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#allow_all_targets DataDatabricksAiGatewayModelProviderService#allow_all_targets}
  */
  readonly allowAllTargets?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#amazon_bedrock DataDatabricksAiGatewayModelProviderService#amazon_bedrock}
  */
  readonly amazonBedrock?: DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrock;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#anthropic DataDatabricksAiGatewayModelProviderService#anthropic}
  */
  readonly anthropic?: DataDatabricksAiGatewayModelProviderServiceConfigAnthropic;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#azure_openai DataDatabricksAiGatewayModelProviderService#azure_openai}
  */
  readonly azureOpenai?: DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenai;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#custom DataDatabricksAiGatewayModelProviderService#custom}
  */
  readonly custom?: DataDatabricksAiGatewayModelProviderServiceConfigCustom;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#forward_headers DataDatabricksAiGatewayModelProviderService#forward_headers}
  */
  readonly forwardHeaders?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#forward_query_parameters DataDatabricksAiGatewayModelProviderService#forward_query_parameters}
  */
  readonly forwardQueryParameters?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#forward_unmanaged_paths DataDatabricksAiGatewayModelProviderService#forward_unmanaged_paths}
  */
  readonly forwardUnmanagedPaths?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#gemini_enterprise DataDatabricksAiGatewayModelProviderService#gemini_enterprise}
  */
  readonly geminiEnterprise?: DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterprise;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#inference_table DataDatabricksAiGatewayModelProviderService#inference_table}
  */
  readonly inferenceTable?: DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#microsoft_foundry DataDatabricksAiGatewayModelProviderService#microsoft_foundry}
  */
  readonly microsoftFoundry?: DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundry;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#openai DataDatabricksAiGatewayModelProviderService#openai}
  */
  readonly openai?: DataDatabricksAiGatewayModelProviderServiceConfigOpenai;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#provider_type DataDatabricksAiGatewayModelProviderService#provider_type}
  */
  readonly providerType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#rate_limits DataDatabricksAiGatewayModelProviderService#rate_limits}
  */
  readonly rateLimits?: DataDatabricksAiGatewayModelProviderServiceConfigRateLimits[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#targets DataDatabricksAiGatewayModelProviderService#targets}
  */
  readonly targets?: DataDatabricksAiGatewayModelProviderServiceConfigTargets[] | cdktn.IResolvable;
}

export function dataDatabricksAiGatewayModelProviderServiceConfigAToTerraform(struct?: DataDatabricksAiGatewayModelProviderServiceConfigA): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allow_all_targets: cdktn.booleanToTerraform(struct!.allowAllTargets),
    amazon_bedrock: dataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockToTerraform(struct!.amazonBedrock),
    anthropic: dataDatabricksAiGatewayModelProviderServiceConfigAnthropicToTerraform(struct!.anthropic),
    azure_openai: dataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiToTerraform(struct!.azureOpenai),
    custom: dataDatabricksAiGatewayModelProviderServiceConfigCustomToTerraform(struct!.custom),
    forward_headers: cdktn.booleanToTerraform(struct!.forwardHeaders),
    forward_query_parameters: cdktn.booleanToTerraform(struct!.forwardQueryParameters),
    forward_unmanaged_paths: cdktn.booleanToTerraform(struct!.forwardUnmanagedPaths),
    gemini_enterprise: dataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseToTerraform(struct!.geminiEnterprise),
    inference_table: dataDatabricksAiGatewayModelProviderServiceConfigInferenceTableToTerraform(struct!.inferenceTable),
    microsoft_foundry: dataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryToTerraform(struct!.microsoftFoundry),
    openai: dataDatabricksAiGatewayModelProviderServiceConfigOpenaiToTerraform(struct!.openai),
    provider_type: cdktn.stringToTerraform(struct!.providerType),
    rate_limits: cdktn.listMapper(dataDatabricksAiGatewayModelProviderServiceConfigRateLimitsToTerraform, false)(struct!.rateLimits),
    targets: cdktn.listMapper(dataDatabricksAiGatewayModelProviderServiceConfigTargetsToTerraform, false)(struct!.targets),
  }
}


export function dataDatabricksAiGatewayModelProviderServiceConfigAToHclTerraform(struct?: DataDatabricksAiGatewayModelProviderServiceConfigA): any {
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
      value: dataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockToHclTerraform(struct!.amazonBedrock),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrock",
    },
    anthropic: {
      value: dataDatabricksAiGatewayModelProviderServiceConfigAnthropicToHclTerraform(struct!.anthropic),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelProviderServiceConfigAnthropic",
    },
    azure_openai: {
      value: dataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiToHclTerraform(struct!.azureOpenai),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenai",
    },
    custom: {
      value: dataDatabricksAiGatewayModelProviderServiceConfigCustomToHclTerraform(struct!.custom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelProviderServiceConfigCustom",
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
      value: dataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseToHclTerraform(struct!.geminiEnterprise),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterprise",
    },
    inference_table: {
      value: dataDatabricksAiGatewayModelProviderServiceConfigInferenceTableToHclTerraform(struct!.inferenceTable),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable",
    },
    microsoft_foundry: {
      value: dataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryToHclTerraform(struct!.microsoftFoundry),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundry",
    },
    openai: {
      value: dataDatabricksAiGatewayModelProviderServiceConfigOpenaiToHclTerraform(struct!.openai),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelProviderServiceConfigOpenai",
    },
    provider_type: {
      value: cdktn.stringToHclTerraform(struct!.providerType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rate_limits: {
      value: cdktn.listMapperHcl(dataDatabricksAiGatewayModelProviderServiceConfigRateLimitsToHclTerraform, false)(struct!.rateLimits),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList",
    },
    targets: {
      value: cdktn.listMapperHcl(dataDatabricksAiGatewayModelProviderServiceConfigTargetsToHclTerraform, false)(struct!.targets),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksAiGatewayModelProviderServiceConfigTargetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelProviderServiceConfigA | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelProviderServiceConfigA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
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
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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

  // allow_all_targets - computed: true, optional: true, required: false
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

  // amazon_bedrock - computed: true, optional: true, required: false
  private _amazonBedrock = new DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference(this, "amazon_bedrock");
  public get amazonBedrock() {
    return this._amazonBedrock;
  }
  public putAmazonBedrock(value: DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrock) {
    this._amazonBedrock.internalValue = value;
  }
  public resetAmazonBedrock() {
    this._amazonBedrock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonBedrockInput() {
    return this._amazonBedrock.internalValue;
  }

  // anthropic - computed: true, optional: true, required: false
  private _anthropic = new DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference(this, "anthropic");
  public get anthropic() {
    return this._anthropic;
  }
  public putAnthropic(value: DataDatabricksAiGatewayModelProviderServiceConfigAnthropic) {
    this._anthropic.internalValue = value;
  }
  public resetAnthropic() {
    this._anthropic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anthropicInput() {
    return this._anthropic.internalValue;
  }

  // azure_openai - computed: true, optional: true, required: false
  private _azureOpenai = new DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference(this, "azure_openai");
  public get azureOpenai() {
    return this._azureOpenai;
  }
  public putAzureOpenai(value: DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenai) {
    this._azureOpenai.internalValue = value;
  }
  public resetAzureOpenai() {
    this._azureOpenai.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureOpenaiInput() {
    return this._azureOpenai.internalValue;
  }

  // custom - computed: true, optional: true, required: false
  private _custom = new DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: DataDatabricksAiGatewayModelProviderServiceConfigCustom) {
    this._custom.internalValue = value;
  }
  public resetCustom() {
    this._custom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom.internalValue;
  }

  // forward_headers - computed: true, optional: true, required: false
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

  // forward_query_parameters - computed: true, optional: true, required: false
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

  // forward_unmanaged_paths - computed: true, optional: true, required: false
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

  // gemini_enterprise - computed: true, optional: true, required: false
  private _geminiEnterprise = new DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference(this, "gemini_enterprise");
  public get geminiEnterprise() {
    return this._geminiEnterprise;
  }
  public putGeminiEnterprise(value: DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterprise) {
    this._geminiEnterprise.internalValue = value;
  }
  public resetGeminiEnterprise() {
    this._geminiEnterprise.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geminiEnterpriseInput() {
    return this._geminiEnterprise.internalValue;
  }

  // inference_table - computed: true, optional: true, required: false
  private _inferenceTable = new DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference(this, "inference_table");
  public get inferenceTable() {
    return this._inferenceTable;
  }
  public putInferenceTable(value: DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable) {
    this._inferenceTable.internalValue = value;
  }
  public resetInferenceTable() {
    this._inferenceTable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inferenceTableInput() {
    return this._inferenceTable.internalValue;
  }

  // microsoft_foundry - computed: true, optional: true, required: false
  private _microsoftFoundry = new DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference(this, "microsoft_foundry");
  public get microsoftFoundry() {
    return this._microsoftFoundry;
  }
  public putMicrosoftFoundry(value: DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundry) {
    this._microsoftFoundry.internalValue = value;
  }
  public resetMicrosoftFoundry() {
    this._microsoftFoundry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microsoftFoundryInput() {
    return this._microsoftFoundry.internalValue;
  }

  // openai - computed: true, optional: true, required: false
  private _openai = new DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference(this, "openai");
  public get openai() {
    return this._openai;
  }
  public putOpenai(value: DataDatabricksAiGatewayModelProviderServiceConfigOpenai) {
    this._openai.internalValue = value;
  }
  public resetOpenai() {
    this._openai.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openaiInput() {
    return this._openai.internalValue;
  }

  // provider_type - computed: true, optional: true, required: false
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

  // rate_limits - computed: true, optional: true, required: false
  private _rateLimits = new DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList(this, "rate_limits", false);
  public get rateLimits() {
    return this._rateLimits;
  }
  public putRateLimits(value: DataDatabricksAiGatewayModelProviderServiceConfigRateLimits[] | cdktn.IResolvable) {
    this._rateLimits.internalValue = value;
  }
  public resetRateLimits() {
    this._rateLimits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitsInput() {
    return this._rateLimits.internalValue;
  }

  // targets - computed: true, optional: true, required: false
  private _targets = new DataDatabricksAiGatewayModelProviderServiceConfigTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }
  public putTargets(value: DataDatabricksAiGatewayModelProviderServiceConfigTargets[] | cdktn.IResolvable) {
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
export interface DataDatabricksAiGatewayModelProviderServiceProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#workspace_id DataDatabricksAiGatewayModelProviderService#workspace_id}
  */
  readonly workspaceId?: string;
}

export function dataDatabricksAiGatewayModelProviderServiceProviderConfigToTerraform(struct?: DataDatabricksAiGatewayModelProviderServiceProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function dataDatabricksAiGatewayModelProviderServiceProviderConfigToHclTerraform(struct?: DataDatabricksAiGatewayModelProviderServiceProviderConfig | cdktn.IResolvable): any {
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

export class DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelProviderServiceProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelProviderServiceProviderConfig | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service databricks_ai_gateway_model_provider_service}
*/
export class DataDatabricksAiGatewayModelProviderService extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_ai_gateway_model_provider_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataDatabricksAiGatewayModelProviderService resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksAiGatewayModelProviderService to import
  * @param importFromId The id of the existing DataDatabricksAiGatewayModelProviderService that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksAiGatewayModelProviderService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_ai_gateway_model_provider_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/ai_gateway_model_provider_service databricks_ai_gateway_model_provider_service} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksAiGatewayModelProviderServiceConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksAiGatewayModelProviderServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_ai_gateway_model_provider_service',
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

  // browse_only - computed: true, optional: false, required: false
  public get browseOnly() {
    return this.getBooleanAttribute('browse_only');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // config - computed: true, optional: false, required: false
  private _config = new DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference(this, "config");
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
  private _providerConfig = new DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataDatabricksAiGatewayModelProviderServiceProviderConfig) {
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
      provider_config: dataDatabricksAiGatewayModelProviderServiceProviderConfigToTerraform(this._providerConfig.internalValue),
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
        value: dataDatabricksAiGatewayModelProviderServiceProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataDatabricksAiGatewayModelProviderServiceProviderConfig",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
