/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataDatabricksAiGatewayModelProviderServicesConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#include_browse DataDatabricksAiGatewayModelProviderServices#include_browse}
  */
  readonly includeBrowse?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#page_size DataDatabricksAiGatewayModelProviderServices#page_size}
  */
  readonly pageSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#parent DataDatabricksAiGatewayModelProviderServices#parent}
  */
  readonly parent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#provider_config DataDatabricksAiGatewayModelProviderServices#provider_config}
  */
  readonly providerConfig?: DataDatabricksAiGatewayModelProviderServicesProviderConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#view DataDatabricksAiGatewayModelProviderServices#view}
  */
  readonly view?: string;
}
export interface DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#plaintext DataDatabricksAiGatewayModelProviderServices#plaintext}
  */
  readonly plaintext?: string;
}

export function dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyToTerraform(struct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    plaintext: cdktn.stringToTerraform(struct!.plaintext),
  }
}


export function dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyToHclTerraform(struct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey | cdktn.IResolvable): any {
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

export class DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAmazonBedrockDirectAwsAccessKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#access_key_id DataDatabricksAiGatewayModelProviderServices#access_key_id}
  */
  readonly accessKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#secret_access_key DataDatabricksAiGatewayModelProviderServices#secret_access_key}
  */
  readonly secretAccessKey?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey;
}

export function dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAmazonBedrockDirectAwsAccessKeyToTerraform(struct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAmazonBedrockDirectAwsAccessKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_key_id: cdktn.stringToTerraform(struct!.accessKeyId),
    secret_access_key: dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyToTerraform(struct!.secretAccessKey),
  }
}


export function dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAmazonBedrockDirectAwsAccessKeyToHclTerraform(struct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAmazonBedrockDirectAwsAccessKey | cdktn.IResolvable): any {
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
      value: dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyToHclTerraform(struct!.secretAccessKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAmazonBedrockDirectAwsAccessKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAmazonBedrockDirectAwsAccessKey | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAmazonBedrockDirectAwsAccessKey | cdktn.IResolvable | undefined) {
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

  // access_key_id - computed: true, optional: true, required: false
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

  // secret_access_key - computed: true, optional: true, required: false
  private _secretAccessKey = new DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference(this, "secret_access_key");
  public get secretAccessKey() {
    return this._secretAccessKey;
  }
  public putSecretAccessKey(value: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey) {
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
export interface DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAmazonBedrockDirectServiceCredential {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#name DataDatabricksAiGatewayModelProviderServices#name}
  */
  readonly name: string;
}

export function dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAmazonBedrockDirectServiceCredentialToTerraform(struct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAmazonBedrockDirectServiceCredential | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAmazonBedrockDirectServiceCredentialToHclTerraform(struct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAmazonBedrockDirectServiceCredential | cdktn.IResolvable): any {
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

export class DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAmazonBedrockDirectServiceCredentialOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAmazonBedrockDirectServiceCredential | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAmazonBedrockDirectServiceCredential | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAmazonBedrockDirect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#aws_access_key DataDatabricksAiGatewayModelProviderServices#aws_access_key}
  */
  readonly awsAccessKey?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAmazonBedrockDirectAwsAccessKey;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#region DataDatabricksAiGatewayModelProviderServices#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#service_credential DataDatabricksAiGatewayModelProviderServices#service_credential}
  */
  readonly serviceCredential?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAmazonBedrockDirectServiceCredential;
}

export function dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAmazonBedrockDirectToTerraform(struct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAmazonBedrockDirect | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aws_access_key: dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAmazonBedrockDirectAwsAccessKeyToTerraform(struct!.awsAccessKey),
    region: cdktn.stringToTerraform(struct!.region),
    service_credential: dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAmazonBedrockDirectServiceCredentialToTerraform(struct!.serviceCredential),
  }
}


export function dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAmazonBedrockDirectToHclTerraform(struct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAmazonBedrockDirect | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    aws_access_key: {
      value: dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAmazonBedrockDirectAwsAccessKeyToHclTerraform(struct!.awsAccessKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAmazonBedrockDirectAwsAccessKey",
    },
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_credential: {
      value: dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAmazonBedrockDirectServiceCredentialToHclTerraform(struct!.serviceCredential),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAmazonBedrockDirectServiceCredential",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAmazonBedrockDirectOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAmazonBedrockDirect | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAmazonBedrockDirect | cdktn.IResolvable | undefined) {
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

  // aws_access_key - computed: true, optional: true, required: false
  private _awsAccessKey = new DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAmazonBedrockDirectAwsAccessKeyOutputReference(this, "aws_access_key");
  public get awsAccessKey() {
    return this._awsAccessKey;
  }
  public putAwsAccessKey(value: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAmazonBedrockDirectAwsAccessKey) {
    this._awsAccessKey.internalValue = value;
  }
  public resetAwsAccessKey() {
    this._awsAccessKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccessKeyInput() {
    return this._awsAccessKey.internalValue;
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
  private _serviceCredential = new DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAmazonBedrockDirectServiceCredentialOutputReference(this, "service_credential");
  public get serviceCredential() {
    return this._serviceCredential;
  }
  public putServiceCredential(value: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAmazonBedrockDirectServiceCredential) {
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
export interface DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAmazonBedrock {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#direct DataDatabricksAiGatewayModelProviderServices#direct}
  */
  readonly direct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAmazonBedrockDirect;
}

export function dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAmazonBedrockToTerraform(struct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAmazonBedrock | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    direct: dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAmazonBedrockDirectToTerraform(struct!.direct),
  }
}


export function dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAmazonBedrockToHclTerraform(struct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAmazonBedrock | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    direct: {
      value: dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAmazonBedrockDirectToHclTerraform(struct!.direct),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAmazonBedrockDirect",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAmazonBedrockOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAmazonBedrock | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAmazonBedrock | cdktn.IResolvable | undefined) {
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
  private _direct = new DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAmazonBedrockDirectOutputReference(this, "direct");
  public get direct() {
    return this._direct;
  }
  public putDirect(value: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAmazonBedrockDirect) {
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
export interface DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAnthropicDirectApiKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#plaintext DataDatabricksAiGatewayModelProviderServices#plaintext}
  */
  readonly plaintext?: string;
}

export function dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAnthropicDirectApiKeyToTerraform(struct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAnthropicDirectApiKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    plaintext: cdktn.stringToTerraform(struct!.plaintext),
  }
}


export function dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAnthropicDirectApiKeyToHclTerraform(struct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAnthropicDirectApiKey | cdktn.IResolvable): any {
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

export class DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAnthropicDirectApiKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAnthropicDirectApiKey | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAnthropicDirectApiKey | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAnthropicDirect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#api_key DataDatabricksAiGatewayModelProviderServices#api_key}
  */
  readonly apiKey?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAnthropicDirectApiKey;
}

export function dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAnthropicDirectToTerraform(struct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAnthropicDirect | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key: dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAnthropicDirectApiKeyToTerraform(struct!.apiKey),
  }
}


export function dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAnthropicDirectToHclTerraform(struct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAnthropicDirect | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key: {
      value: dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAnthropicDirectApiKeyToHclTerraform(struct!.apiKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAnthropicDirectApiKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAnthropicDirectOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAnthropicDirect | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAnthropicDirect | cdktn.IResolvable | undefined) {
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
  private _apiKey = new DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAnthropicDirectApiKeyOutputReference(this, "api_key");
  public get apiKey() {
    return this._apiKey;
  }
  public putApiKey(value: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAnthropicDirectApiKey) {
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
export interface DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAnthropicRelayed {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#plan_type DataDatabricksAiGatewayModelProviderServices#plan_type}
  */
  readonly planType?: string;
}

export function dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAnthropicRelayedToTerraform(struct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAnthropicRelayed | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    plan_type: cdktn.stringToTerraform(struct!.planType),
  }
}


export function dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAnthropicRelayedToHclTerraform(struct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAnthropicRelayed | cdktn.IResolvable): any {
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

export class DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAnthropicRelayedOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAnthropicRelayed | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAnthropicRelayed | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAnthropic {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#direct DataDatabricksAiGatewayModelProviderServices#direct}
  */
  readonly direct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAnthropicDirect;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#relayed DataDatabricksAiGatewayModelProviderServices#relayed}
  */
  readonly relayed?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAnthropicRelayed;
}

export function dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAnthropicToTerraform(struct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAnthropic | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    direct: dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAnthropicDirectToTerraform(struct!.direct),
    relayed: dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAnthropicRelayedToTerraform(struct!.relayed),
  }
}


export function dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAnthropicToHclTerraform(struct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAnthropic | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    direct: {
      value: dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAnthropicDirectToHclTerraform(struct!.direct),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAnthropicDirect",
    },
    relayed: {
      value: dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAnthropicRelayedToHclTerraform(struct!.relayed),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAnthropicRelayed",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAnthropicOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAnthropic | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAnthropic | cdktn.IResolvable | undefined) {
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
  private _direct = new DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAnthropicDirectOutputReference(this, "direct");
  public get direct() {
    return this._direct;
  }
  public putDirect(value: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAnthropicDirect) {
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
  private _relayed = new DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAnthropicRelayedOutputReference(this, "relayed");
  public get relayed() {
    return this._relayed;
  }
  public putRelayed(value: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAnthropicRelayed) {
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
export interface DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenaiDirectApiKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#plaintext DataDatabricksAiGatewayModelProviderServices#plaintext}
  */
  readonly plaintext?: string;
}

export function dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenaiDirectApiKeyToTerraform(struct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenaiDirectApiKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    plaintext: cdktn.stringToTerraform(struct!.plaintext),
  }
}


export function dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenaiDirectApiKeyToHclTerraform(struct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenaiDirectApiKey | cdktn.IResolvable): any {
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

export class DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenaiDirectApiKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenaiDirectApiKey | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenaiDirectApiKey | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenaiDirectEntraServicePrincipalClientSecret {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#plaintext DataDatabricksAiGatewayModelProviderServices#plaintext}
  */
  readonly plaintext?: string;
}

export function dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenaiDirectEntraServicePrincipalClientSecretToTerraform(struct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenaiDirectEntraServicePrincipalClientSecret | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    plaintext: cdktn.stringToTerraform(struct!.plaintext),
  }
}


export function dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenaiDirectEntraServicePrincipalClientSecretToHclTerraform(struct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenaiDirectEntraServicePrincipalClientSecret | cdktn.IResolvable): any {
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

export class DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenaiDirectEntraServicePrincipalClientSecret | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenaiDirectEntraServicePrincipalClientSecret | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenaiDirectEntraServicePrincipal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#client_id DataDatabricksAiGatewayModelProviderServices#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#client_secret DataDatabricksAiGatewayModelProviderServices#client_secret}
  */
  readonly clientSecret?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenaiDirectEntraServicePrincipalClientSecret;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#tenant_id DataDatabricksAiGatewayModelProviderServices#tenant_id}
  */
  readonly tenantId?: string;
}

export function dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenaiDirectEntraServicePrincipalToTerraform(struct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenaiDirectEntraServicePrincipal | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret: dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenaiDirectEntraServicePrincipalClientSecretToTerraform(struct!.clientSecret),
    tenant_id: cdktn.stringToTerraform(struct!.tenantId),
  }
}


export function dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenaiDirectEntraServicePrincipalToHclTerraform(struct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenaiDirectEntraServicePrincipal | cdktn.IResolvable): any {
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
      value: dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenaiDirectEntraServicePrincipalClientSecretToHclTerraform(struct!.clientSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenaiDirectEntraServicePrincipalClientSecret",
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

export class DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenaiDirectEntraServicePrincipalOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenaiDirectEntraServicePrincipal | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenaiDirectEntraServicePrincipal | cdktn.IResolvable | undefined) {
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
  private _clientSecret = new DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference(this, "client_secret");
  public get clientSecret() {
    return this._clientSecret;
  }
  public putClientSecret(value: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenaiDirectEntraServicePrincipalClientSecret) {
    this._clientSecret.internalValue = value;
  }
  public resetClientSecret() {
    this._clientSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret.internalValue;
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
export interface DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenaiDirectServiceCredential {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#name DataDatabricksAiGatewayModelProviderServices#name}
  */
  readonly name: string;
}

export function dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenaiDirectServiceCredentialToTerraform(struct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenaiDirectServiceCredential | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenaiDirectServiceCredentialToHclTerraform(struct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenaiDirectServiceCredential | cdktn.IResolvable): any {
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

export class DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenaiDirectServiceCredentialOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenaiDirectServiceCredential | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenaiDirectServiceCredential | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenaiDirect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#api_key DataDatabricksAiGatewayModelProviderServices#api_key}
  */
  readonly apiKey?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenaiDirectApiKey;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#base_url DataDatabricksAiGatewayModelProviderServices#base_url}
  */
  readonly baseUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#entra_service_principal DataDatabricksAiGatewayModelProviderServices#entra_service_principal}
  */
  readonly entraServicePrincipal?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenaiDirectEntraServicePrincipal;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#service_credential DataDatabricksAiGatewayModelProviderServices#service_credential}
  */
  readonly serviceCredential?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenaiDirectServiceCredential;
}

export function dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenaiDirectToTerraform(struct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenaiDirect | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key: dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenaiDirectApiKeyToTerraform(struct!.apiKey),
    base_url: cdktn.stringToTerraform(struct!.baseUrl),
    entra_service_principal: dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenaiDirectEntraServicePrincipalToTerraform(struct!.entraServicePrincipal),
    service_credential: dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenaiDirectServiceCredentialToTerraform(struct!.serviceCredential),
  }
}


export function dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenaiDirectToHclTerraform(struct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenaiDirect | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key: {
      value: dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenaiDirectApiKeyToHclTerraform(struct!.apiKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenaiDirectApiKey",
    },
    base_url: {
      value: cdktn.stringToHclTerraform(struct!.baseUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entra_service_principal: {
      value: dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenaiDirectEntraServicePrincipalToHclTerraform(struct!.entraServicePrincipal),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenaiDirectEntraServicePrincipal",
    },
    service_credential: {
      value: dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenaiDirectServiceCredentialToHclTerraform(struct!.serviceCredential),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenaiDirectServiceCredential",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenaiDirectOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenaiDirect | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenaiDirect | cdktn.IResolvable | undefined) {
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

  // api_key - computed: true, optional: true, required: false
  private _apiKey = new DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenaiDirectApiKeyOutputReference(this, "api_key");
  public get apiKey() {
    return this._apiKey;
  }
  public putApiKey(value: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenaiDirectApiKey) {
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

  // entra_service_principal - computed: true, optional: true, required: false
  private _entraServicePrincipal = new DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenaiDirectEntraServicePrincipalOutputReference(this, "entra_service_principal");
  public get entraServicePrincipal() {
    return this._entraServicePrincipal;
  }
  public putEntraServicePrincipal(value: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenaiDirectEntraServicePrincipal) {
    this._entraServicePrincipal.internalValue = value;
  }
  public resetEntraServicePrincipal() {
    this._entraServicePrincipal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entraServicePrincipalInput() {
    return this._entraServicePrincipal.internalValue;
  }

  // service_credential - computed: true, optional: true, required: false
  private _serviceCredential = new DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenaiDirectServiceCredentialOutputReference(this, "service_credential");
  public get serviceCredential() {
    return this._serviceCredential;
  }
  public putServiceCredential(value: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenaiDirectServiceCredential) {
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
export interface DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenai {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#direct DataDatabricksAiGatewayModelProviderServices#direct}
  */
  readonly direct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenaiDirect;
}

export function dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenaiToTerraform(struct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenai | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    direct: dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenaiDirectToTerraform(struct!.direct),
  }
}


export function dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenaiToHclTerraform(struct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenai | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    direct: {
      value: dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenaiDirectToHclTerraform(struct!.direct),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenaiDirect",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenaiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenai | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenai | cdktn.IResolvable | undefined) {
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
  private _direct = new DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenaiDirectOutputReference(this, "direct");
  public get direct() {
    return this._direct;
  }
  public putDirect(value: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenaiDirect) {
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
export interface DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigCustomDirectApiKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#plaintext DataDatabricksAiGatewayModelProviderServices#plaintext}
  */
  readonly plaintext?: string;
}

export function dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigCustomDirectApiKeyToTerraform(struct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigCustomDirectApiKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    plaintext: cdktn.stringToTerraform(struct!.plaintext),
  }
}


export function dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigCustomDirectApiKeyToHclTerraform(struct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigCustomDirectApiKey | cdktn.IResolvable): any {
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

export class DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigCustomDirectApiKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigCustomDirectApiKey | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigCustomDirectApiKey | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigCustomDirect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#api_key DataDatabricksAiGatewayModelProviderServices#api_key}
  */
  readonly apiKey?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigCustomDirectApiKey;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#base_url DataDatabricksAiGatewayModelProviderServices#base_url}
  */
  readonly baseUrl?: string;
}

export function dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigCustomDirectToTerraform(struct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigCustomDirect | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key: dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigCustomDirectApiKeyToTerraform(struct!.apiKey),
    base_url: cdktn.stringToTerraform(struct!.baseUrl),
  }
}


export function dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigCustomDirectToHclTerraform(struct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigCustomDirect | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key: {
      value: dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigCustomDirectApiKeyToHclTerraform(struct!.apiKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigCustomDirectApiKey",
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

export class DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigCustomDirectOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigCustomDirect | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigCustomDirect | cdktn.IResolvable | undefined) {
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
  private _apiKey = new DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigCustomDirectApiKeyOutputReference(this, "api_key");
  public get apiKey() {
    return this._apiKey;
  }
  public putApiKey(value: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigCustomDirectApiKey) {
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
export interface DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigCustom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#direct DataDatabricksAiGatewayModelProviderServices#direct}
  */
  readonly direct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigCustomDirect;
}

export function dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigCustomToTerraform(struct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigCustom | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    direct: dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigCustomDirectToTerraform(struct!.direct),
  }
}


export function dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigCustomToHclTerraform(struct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigCustom | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    direct: {
      value: dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigCustomDirectToHclTerraform(struct!.direct),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigCustomDirect",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigCustomOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigCustom | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigCustom | cdktn.IResolvable | undefined) {
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
  private _direct = new DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigCustomDirectOutputReference(this, "direct");
  public get direct() {
    return this._direct;
  }
  public putDirect(value: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigCustomDirect) {
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
export interface DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigGeminiEnterpriseDirectApiKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#plaintext DataDatabricksAiGatewayModelProviderServices#plaintext}
  */
  readonly plaintext?: string;
}

export function dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigGeminiEnterpriseDirectApiKeyToTerraform(struct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigGeminiEnterpriseDirectApiKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    plaintext: cdktn.stringToTerraform(struct!.plaintext),
  }
}


export function dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigGeminiEnterpriseDirectApiKeyToHclTerraform(struct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigGeminiEnterpriseDirectApiKey | cdktn.IResolvable): any {
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

export class DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigGeminiEnterpriseDirectApiKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigGeminiEnterpriseDirectApiKey | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigGeminiEnterpriseDirectApiKey | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigGeminiEnterpriseDirect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#api_key DataDatabricksAiGatewayModelProviderServices#api_key}
  */
  readonly apiKey?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigGeminiEnterpriseDirectApiKey;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#project_id DataDatabricksAiGatewayModelProviderServices#project_id}
  */
  readonly projectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#region DataDatabricksAiGatewayModelProviderServices#region}
  */
  readonly region?: string;
}

export function dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigGeminiEnterpriseDirectToTerraform(struct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigGeminiEnterpriseDirect | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key: dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigGeminiEnterpriseDirectApiKeyToTerraform(struct!.apiKey),
    project_id: cdktn.stringToTerraform(struct!.projectId),
    region: cdktn.stringToTerraform(struct!.region),
  }
}


export function dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigGeminiEnterpriseDirectToHclTerraform(struct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigGeminiEnterpriseDirect | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key: {
      value: dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigGeminiEnterpriseDirectApiKeyToHclTerraform(struct!.apiKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigGeminiEnterpriseDirectApiKey",
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

export class DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigGeminiEnterpriseDirectOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigGeminiEnterpriseDirect | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigGeminiEnterpriseDirect | cdktn.IResolvable | undefined) {
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
  private _apiKey = new DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigGeminiEnterpriseDirectApiKeyOutputReference(this, "api_key");
  public get apiKey() {
    return this._apiKey;
  }
  public putApiKey(value: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigGeminiEnterpriseDirectApiKey) {
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
export interface DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigGeminiEnterprise {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#direct DataDatabricksAiGatewayModelProviderServices#direct}
  */
  readonly direct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigGeminiEnterpriseDirect;
}

export function dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigGeminiEnterpriseToTerraform(struct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigGeminiEnterprise | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    direct: dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigGeminiEnterpriseDirectToTerraform(struct!.direct),
  }
}


export function dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigGeminiEnterpriseToHclTerraform(struct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigGeminiEnterprise | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    direct: {
      value: dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigGeminiEnterpriseDirectToHclTerraform(struct!.direct),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigGeminiEnterpriseDirect",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigGeminiEnterpriseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigGeminiEnterprise | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigGeminiEnterprise | cdktn.IResolvable | undefined) {
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
  private _direct = new DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigGeminiEnterpriseDirectOutputReference(this, "direct");
  public get direct() {
    return this._direct;
  }
  public putDirect(value: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigGeminiEnterpriseDirect) {
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
export interface DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigInferenceTable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#disabled DataDatabricksAiGatewayModelProviderServices#disabled}
  */
  readonly disabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#parent DataDatabricksAiGatewayModelProviderServices#parent}
  */
  readonly parent: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#table_name_prefix DataDatabricksAiGatewayModelProviderServices#table_name_prefix}
  */
  readonly tableNamePrefix?: string;
}

export function dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigInferenceTableToTerraform(struct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigInferenceTable | cdktn.IResolvable): any {
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


export function dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigInferenceTableToHclTerraform(struct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigInferenceTable | cdktn.IResolvable): any {
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

export class DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigInferenceTableOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigInferenceTable | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigInferenceTable | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundryDirectApiKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#plaintext DataDatabricksAiGatewayModelProviderServices#plaintext}
  */
  readonly plaintext?: string;
}

export function dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundryDirectApiKeyToTerraform(struct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundryDirectApiKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    plaintext: cdktn.stringToTerraform(struct!.plaintext),
  }
}


export function dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundryDirectApiKeyToHclTerraform(struct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundryDirectApiKey | cdktn.IResolvable): any {
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

export class DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundryDirectApiKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundryDirectApiKey | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundryDirectApiKey | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#plaintext DataDatabricksAiGatewayModelProviderServices#plaintext}
  */
  readonly plaintext?: string;
}

export function dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretToTerraform(struct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    plaintext: cdktn.stringToTerraform(struct!.plaintext),
  }
}


export function dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretToHclTerraform(struct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret | cdktn.IResolvable): any {
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

export class DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundryDirectEntraServicePrincipal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#client_id DataDatabricksAiGatewayModelProviderServices#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#client_secret DataDatabricksAiGatewayModelProviderServices#client_secret}
  */
  readonly clientSecret?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#tenant_id DataDatabricksAiGatewayModelProviderServices#tenant_id}
  */
  readonly tenantId?: string;
}

export function dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundryDirectEntraServicePrincipalToTerraform(struct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundryDirectEntraServicePrincipal | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret: dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretToTerraform(struct!.clientSecret),
    tenant_id: cdktn.stringToTerraform(struct!.tenantId),
  }
}


export function dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundryDirectEntraServicePrincipalToHclTerraform(struct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundryDirectEntraServicePrincipal | cdktn.IResolvable): any {
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
      value: dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretToHclTerraform(struct!.clientSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret",
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

export class DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundryDirectEntraServicePrincipal | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundryDirectEntraServicePrincipal | cdktn.IResolvable | undefined) {
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
  private _clientSecret = new DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference(this, "client_secret");
  public get clientSecret() {
    return this._clientSecret;
  }
  public putClientSecret(value: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret) {
    this._clientSecret.internalValue = value;
  }
  public resetClientSecret() {
    this._clientSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret.internalValue;
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
export interface DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundryDirectServiceCredential {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#name DataDatabricksAiGatewayModelProviderServices#name}
  */
  readonly name: string;
}

export function dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundryDirectServiceCredentialToTerraform(struct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundryDirectServiceCredential | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundryDirectServiceCredentialToHclTerraform(struct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundryDirectServiceCredential | cdktn.IResolvable): any {
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

export class DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundryDirectServiceCredentialOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundryDirectServiceCredential | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundryDirectServiceCredential | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundryDirect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#api_key DataDatabricksAiGatewayModelProviderServices#api_key}
  */
  readonly apiKey?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundryDirectApiKey;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#base_url DataDatabricksAiGatewayModelProviderServices#base_url}
  */
  readonly baseUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#entra_service_principal DataDatabricksAiGatewayModelProviderServices#entra_service_principal}
  */
  readonly entraServicePrincipal?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundryDirectEntraServicePrincipal;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#service_credential DataDatabricksAiGatewayModelProviderServices#service_credential}
  */
  readonly serviceCredential?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundryDirectServiceCredential;
}

export function dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundryDirectToTerraform(struct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundryDirect | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key: dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundryDirectApiKeyToTerraform(struct!.apiKey),
    base_url: cdktn.stringToTerraform(struct!.baseUrl),
    entra_service_principal: dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundryDirectEntraServicePrincipalToTerraform(struct!.entraServicePrincipal),
    service_credential: dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundryDirectServiceCredentialToTerraform(struct!.serviceCredential),
  }
}


export function dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundryDirectToHclTerraform(struct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundryDirect | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key: {
      value: dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundryDirectApiKeyToHclTerraform(struct!.apiKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundryDirectApiKey",
    },
    base_url: {
      value: cdktn.stringToHclTerraform(struct!.baseUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entra_service_principal: {
      value: dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundryDirectEntraServicePrincipalToHclTerraform(struct!.entraServicePrincipal),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundryDirectEntraServicePrincipal",
    },
    service_credential: {
      value: dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundryDirectServiceCredentialToHclTerraform(struct!.serviceCredential),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundryDirectServiceCredential",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundryDirectOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundryDirect | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundryDirect | cdktn.IResolvable | undefined) {
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

  // api_key - computed: true, optional: true, required: false
  private _apiKey = new DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundryDirectApiKeyOutputReference(this, "api_key");
  public get apiKey() {
    return this._apiKey;
  }
  public putApiKey(value: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundryDirectApiKey) {
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

  // entra_service_principal - computed: true, optional: true, required: false
  private _entraServicePrincipal = new DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference(this, "entra_service_principal");
  public get entraServicePrincipal() {
    return this._entraServicePrincipal;
  }
  public putEntraServicePrincipal(value: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundryDirectEntraServicePrincipal) {
    this._entraServicePrincipal.internalValue = value;
  }
  public resetEntraServicePrincipal() {
    this._entraServicePrincipal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entraServicePrincipalInput() {
    return this._entraServicePrincipal.internalValue;
  }

  // service_credential - computed: true, optional: true, required: false
  private _serviceCredential = new DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundryDirectServiceCredentialOutputReference(this, "service_credential");
  public get serviceCredential() {
    return this._serviceCredential;
  }
  public putServiceCredential(value: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundryDirectServiceCredential) {
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
export interface DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundry {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#direct DataDatabricksAiGatewayModelProviderServices#direct}
  */
  readonly direct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundryDirect;
}

export function dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundryToTerraform(struct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundry | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    direct: dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundryDirectToTerraform(struct!.direct),
  }
}


export function dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundryToHclTerraform(struct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundry | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    direct: {
      value: dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundryDirectToHclTerraform(struct!.direct),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundryDirect",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundry | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundry | cdktn.IResolvable | undefined) {
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
  private _direct = new DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundryDirectOutputReference(this, "direct");
  public get direct() {
    return this._direct;
  }
  public putDirect(value: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundryDirect) {
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
export interface DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigOpenaiDirectApiKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#plaintext DataDatabricksAiGatewayModelProviderServices#plaintext}
  */
  readonly plaintext?: string;
}

export function dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigOpenaiDirectApiKeyToTerraform(struct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigOpenaiDirectApiKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    plaintext: cdktn.stringToTerraform(struct!.plaintext),
  }
}


export function dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigOpenaiDirectApiKeyToHclTerraform(struct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigOpenaiDirectApiKey | cdktn.IResolvable): any {
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

export class DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigOpenaiDirectApiKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigOpenaiDirectApiKey | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigOpenaiDirectApiKey | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigOpenaiDirect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#api_key DataDatabricksAiGatewayModelProviderServices#api_key}
  */
  readonly apiKey?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigOpenaiDirectApiKey;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#base_url DataDatabricksAiGatewayModelProviderServices#base_url}
  */
  readonly baseUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#organization DataDatabricksAiGatewayModelProviderServices#organization}
  */
  readonly organization?: string;
}

export function dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigOpenaiDirectToTerraform(struct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigOpenaiDirect | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key: dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigOpenaiDirectApiKeyToTerraform(struct!.apiKey),
    base_url: cdktn.stringToTerraform(struct!.baseUrl),
    organization: cdktn.stringToTerraform(struct!.organization),
  }
}


export function dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigOpenaiDirectToHclTerraform(struct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigOpenaiDirect | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key: {
      value: dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigOpenaiDirectApiKeyToHclTerraform(struct!.apiKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigOpenaiDirectApiKey",
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

export class DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigOpenaiDirectOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigOpenaiDirect | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigOpenaiDirect | cdktn.IResolvable | undefined) {
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
  private _apiKey = new DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigOpenaiDirectApiKeyOutputReference(this, "api_key");
  public get apiKey() {
    return this._apiKey;
  }
  public putApiKey(value: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigOpenaiDirectApiKey) {
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
export interface DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigOpenai {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#direct DataDatabricksAiGatewayModelProviderServices#direct}
  */
  readonly direct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigOpenaiDirect;
}

export function dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigOpenaiToTerraform(struct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigOpenai | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    direct: dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigOpenaiDirectToTerraform(struct!.direct),
  }
}


export function dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigOpenaiToHclTerraform(struct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigOpenai | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    direct: {
      value: dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigOpenaiDirectToHclTerraform(struct!.direct),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigOpenaiDirect",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigOpenaiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigOpenai | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigOpenai | cdktn.IResolvable | undefined) {
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
  private _direct = new DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigOpenaiDirectOutputReference(this, "direct");
  public get direct() {
    return this._direct;
  }
  public putDirect(value: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigOpenaiDirect) {
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
export interface DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigRateLimits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#key DataDatabricksAiGatewayModelProviderServices#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#principal DataDatabricksAiGatewayModelProviderServices#principal}
  */
  readonly principal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#renewal_period DataDatabricksAiGatewayModelProviderServices#renewal_period}
  */
  readonly renewalPeriod: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#request_tag_key DataDatabricksAiGatewayModelProviderServices#request_tag_key}
  */
  readonly requestTagKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#request_tag_value DataDatabricksAiGatewayModelProviderServices#request_tag_value}
  */
  readonly requestTagValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#requests DataDatabricksAiGatewayModelProviderServices#requests}
  */
  readonly requests?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#tokens DataDatabricksAiGatewayModelProviderServices#tokens}
  */
  readonly tokens?: number;
}

export function dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigRateLimitsToTerraform(struct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigRateLimits | cdktn.IResolvable): any {
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


export function dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigRateLimitsToHclTerraform(struct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigRateLimits | cdktn.IResolvable): any {
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

export class DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigRateLimitsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigRateLimits | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigRateLimits | cdktn.IResolvable | undefined) {
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

export class DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigRateLimitsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigRateLimits[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigRateLimitsOutputReference {
    return new DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigRateLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigTargets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#model DataDatabricksAiGatewayModelProviderServices#model}
  */
  readonly model: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#native_api_types DataDatabricksAiGatewayModelProviderServices#native_api_types}
  */
  readonly nativeApiTypes?: string[];
}

export function dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigTargetsToTerraform(struct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigTargets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    model: cdktn.stringToTerraform(struct!.model),
    native_api_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.nativeApiTypes),
  }
}


export function dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigTargetsToHclTerraform(struct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigTargets | cdktn.IResolvable): any {
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

export class DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigTargetsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigTargets | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigTargets | cdktn.IResolvable | undefined) {
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

export class DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigTargetsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigTargets[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigTargetsOutputReference {
    return new DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#allow_all_targets DataDatabricksAiGatewayModelProviderServices#allow_all_targets}
  */
  readonly allowAllTargets?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#amazon_bedrock DataDatabricksAiGatewayModelProviderServices#amazon_bedrock}
  */
  readonly amazonBedrock?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAmazonBedrock;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#anthropic DataDatabricksAiGatewayModelProviderServices#anthropic}
  */
  readonly anthropic?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAnthropic;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#azure_openai DataDatabricksAiGatewayModelProviderServices#azure_openai}
  */
  readonly azureOpenai?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenai;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#custom DataDatabricksAiGatewayModelProviderServices#custom}
  */
  readonly custom?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigCustom;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#forward_headers DataDatabricksAiGatewayModelProviderServices#forward_headers}
  */
  readonly forwardHeaders?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#forward_query_parameters DataDatabricksAiGatewayModelProviderServices#forward_query_parameters}
  */
  readonly forwardQueryParameters?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#forward_unmanaged_paths DataDatabricksAiGatewayModelProviderServices#forward_unmanaged_paths}
  */
  readonly forwardUnmanagedPaths?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#gemini_enterprise DataDatabricksAiGatewayModelProviderServices#gemini_enterprise}
  */
  readonly geminiEnterprise?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigGeminiEnterprise;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#inference_table DataDatabricksAiGatewayModelProviderServices#inference_table}
  */
  readonly inferenceTable?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigInferenceTable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#microsoft_foundry DataDatabricksAiGatewayModelProviderServices#microsoft_foundry}
  */
  readonly microsoftFoundry?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundry;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#openai DataDatabricksAiGatewayModelProviderServices#openai}
  */
  readonly openai?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigOpenai;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#provider_type DataDatabricksAiGatewayModelProviderServices#provider_type}
  */
  readonly providerType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#rate_limits DataDatabricksAiGatewayModelProviderServices#rate_limits}
  */
  readonly rateLimits?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigRateLimits[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#targets DataDatabricksAiGatewayModelProviderServices#targets}
  */
  readonly targets?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigTargets[] | cdktn.IResolvable;
}

export function dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigToTerraform(struct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allow_all_targets: cdktn.booleanToTerraform(struct!.allowAllTargets),
    amazon_bedrock: dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAmazonBedrockToTerraform(struct!.amazonBedrock),
    anthropic: dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAnthropicToTerraform(struct!.anthropic),
    azure_openai: dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenaiToTerraform(struct!.azureOpenai),
    custom: dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigCustomToTerraform(struct!.custom),
    forward_headers: cdktn.booleanToTerraform(struct!.forwardHeaders),
    forward_query_parameters: cdktn.booleanToTerraform(struct!.forwardQueryParameters),
    forward_unmanaged_paths: cdktn.booleanToTerraform(struct!.forwardUnmanagedPaths),
    gemini_enterprise: dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigGeminiEnterpriseToTerraform(struct!.geminiEnterprise),
    inference_table: dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigInferenceTableToTerraform(struct!.inferenceTable),
    microsoft_foundry: dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundryToTerraform(struct!.microsoftFoundry),
    openai: dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigOpenaiToTerraform(struct!.openai),
    provider_type: cdktn.stringToTerraform(struct!.providerType),
    rate_limits: cdktn.listMapper(dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigRateLimitsToTerraform, false)(struct!.rateLimits),
    targets: cdktn.listMapper(dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigTargetsToTerraform, false)(struct!.targets),
  }
}


export function dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigToHclTerraform(struct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfig): any {
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
      value: dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAmazonBedrockToHclTerraform(struct!.amazonBedrock),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAmazonBedrock",
    },
    anthropic: {
      value: dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAnthropicToHclTerraform(struct!.anthropic),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAnthropic",
    },
    azure_openai: {
      value: dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenaiToHclTerraform(struct!.azureOpenai),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenai",
    },
    custom: {
      value: dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigCustomToHclTerraform(struct!.custom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigCustom",
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
      value: dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigGeminiEnterpriseToHclTerraform(struct!.geminiEnterprise),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigGeminiEnterprise",
    },
    inference_table: {
      value: dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigInferenceTableToHclTerraform(struct!.inferenceTable),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigInferenceTable",
    },
    microsoft_foundry: {
      value: dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundryToHclTerraform(struct!.microsoftFoundry),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundry",
    },
    openai: {
      value: dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigOpenaiToHclTerraform(struct!.openai),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigOpenai",
    },
    provider_type: {
      value: cdktn.stringToHclTerraform(struct!.providerType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rate_limits: {
      value: cdktn.listMapperHcl(dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigRateLimitsToHclTerraform, false)(struct!.rateLimits),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigRateLimitsList",
    },
    targets: {
      value: cdktn.listMapperHcl(dataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigTargetsToHclTerraform, false)(struct!.targets),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigTargetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfig | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfig | undefined) {
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
  private _amazonBedrock = new DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAmazonBedrockOutputReference(this, "amazon_bedrock");
  public get amazonBedrock() {
    return this._amazonBedrock;
  }
  public putAmazonBedrock(value: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAmazonBedrock) {
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
  private _anthropic = new DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAnthropicOutputReference(this, "anthropic");
  public get anthropic() {
    return this._anthropic;
  }
  public putAnthropic(value: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAnthropic) {
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
  private _azureOpenai = new DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenaiOutputReference(this, "azure_openai");
  public get azureOpenai() {
    return this._azureOpenai;
  }
  public putAzureOpenai(value: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigAzureOpenai) {
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
  private _custom = new DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigCustom) {
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
  private _geminiEnterprise = new DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigGeminiEnterpriseOutputReference(this, "gemini_enterprise");
  public get geminiEnterprise() {
    return this._geminiEnterprise;
  }
  public putGeminiEnterprise(value: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigGeminiEnterprise) {
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
  private _inferenceTable = new DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigInferenceTableOutputReference(this, "inference_table");
  public get inferenceTable() {
    return this._inferenceTable;
  }
  public putInferenceTable(value: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigInferenceTable) {
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
  private _microsoftFoundry = new DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundryOutputReference(this, "microsoft_foundry");
  public get microsoftFoundry() {
    return this._microsoftFoundry;
  }
  public putMicrosoftFoundry(value: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigMicrosoftFoundry) {
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
  private _openai = new DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigOpenaiOutputReference(this, "openai");
  public get openai() {
    return this._openai;
  }
  public putOpenai(value: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigOpenai) {
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
  private _rateLimits = new DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigRateLimitsList(this, "rate_limits", false);
  public get rateLimits() {
    return this._rateLimits;
  }
  public putRateLimits(value: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigRateLimits[] | cdktn.IResolvable) {
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
  private _targets = new DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }
  public putTargets(value: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigTargets[] | cdktn.IResolvable) {
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
export interface DataDatabricksAiGatewayModelProviderServicesModelProviderServicesProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#workspace_id DataDatabricksAiGatewayModelProviderServices#workspace_id}
  */
  readonly workspaceId?: string;
}

export function dataDatabricksAiGatewayModelProviderServicesModelProviderServicesProviderConfigToTerraform(struct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function dataDatabricksAiGatewayModelProviderServicesModelProviderServicesProviderConfigToHclTerraform(struct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesProviderConfig | cdktn.IResolvable): any {
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

export class DataDatabricksAiGatewayModelProviderServicesModelProviderServicesProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelProviderServicesModelProviderServicesProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesProviderConfig | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAiGatewayModelProviderServicesModelProviderServices {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#name DataDatabricksAiGatewayModelProviderServices#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#provider_config DataDatabricksAiGatewayModelProviderServices#provider_config}
  */
  readonly providerConfig?: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesProviderConfig;
}

export function dataDatabricksAiGatewayModelProviderServicesModelProviderServicesToTerraform(struct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServices): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    provider_config: dataDatabricksAiGatewayModelProviderServicesModelProviderServicesProviderConfigToTerraform(struct!.providerConfig),
  }
}


export function dataDatabricksAiGatewayModelProviderServicesModelProviderServicesToHclTerraform(struct?: DataDatabricksAiGatewayModelProviderServicesModelProviderServices): any {
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
      value: dataDatabricksAiGatewayModelProviderServicesModelProviderServicesProviderConfigToHclTerraform(struct!.providerConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelProviderServicesModelProviderServicesProviderConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAiGatewayModelProviderServicesModelProviderServicesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksAiGatewayModelProviderServicesModelProviderServices | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelProviderServicesModelProviderServices | undefined) {
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

  // browse_only - computed: true, optional: false, required: false
  public get browseOnly() {
    return this.getBooleanAttribute('browse_only');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // config - computed: true, optional: false, required: false
  private _config = new DataDatabricksAiGatewayModelProviderServicesModelProviderServicesConfigOutputReference(this, "config");
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
  private _providerConfig = new DataDatabricksAiGatewayModelProviderServicesModelProviderServicesProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataDatabricksAiGatewayModelProviderServicesModelProviderServicesProviderConfig) {
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

export class DataDatabricksAiGatewayModelProviderServicesModelProviderServicesList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksAiGatewayModelProviderServicesModelProviderServices[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksAiGatewayModelProviderServicesModelProviderServicesOutputReference {
    return new DataDatabricksAiGatewayModelProviderServicesModelProviderServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksAiGatewayModelProviderServicesProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#workspace_id DataDatabricksAiGatewayModelProviderServices#workspace_id}
  */
  readonly workspaceId?: string;
}

export function dataDatabricksAiGatewayModelProviderServicesProviderConfigToTerraform(struct?: DataDatabricksAiGatewayModelProviderServicesProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function dataDatabricksAiGatewayModelProviderServicesProviderConfigToHclTerraform(struct?: DataDatabricksAiGatewayModelProviderServicesProviderConfig | cdktn.IResolvable): any {
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

export class DataDatabricksAiGatewayModelProviderServicesProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelProviderServicesProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelProviderServicesProviderConfig | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services databricks_ai_gateway_model_provider_services}
*/
export class DataDatabricksAiGatewayModelProviderServices extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_ai_gateway_model_provider_services";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataDatabricksAiGatewayModelProviderServices resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksAiGatewayModelProviderServices to import
  * @param importFromId The id of the existing DataDatabricksAiGatewayModelProviderServices that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksAiGatewayModelProviderServices to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_ai_gateway_model_provider_services", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_model_provider_services databricks_ai_gateway_model_provider_services} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksAiGatewayModelProviderServicesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksAiGatewayModelProviderServicesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_ai_gateway_model_provider_services',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.125.0',
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
    this._includeBrowse = config.includeBrowse;
    this._pageSize = config.pageSize;
    this._parent = config.parent;
    this._providerConfig.internalValue = config.providerConfig;
    this._view = config.view;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // include_browse - computed: false, optional: true, required: false
  private _includeBrowse?: boolean | cdktn.IResolvable; 
  public get includeBrowse() {
    return this.getBooleanAttribute('include_browse');
  }
  public set includeBrowse(value: boolean | cdktn.IResolvable) {
    this._includeBrowse = value;
  }
  public resetIncludeBrowse() {
    this._includeBrowse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeBrowseInput() {
    return this._includeBrowse;
  }

  // model_provider_services - computed: true, optional: false, required: false
  private _modelProviderServices = new DataDatabricksAiGatewayModelProviderServicesModelProviderServicesList(this, "model_provider_services", false);
  public get modelProviderServices() {
    return this._modelProviderServices;
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
  private _providerConfig = new DataDatabricksAiGatewayModelProviderServicesProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataDatabricksAiGatewayModelProviderServicesProviderConfig) {
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
      include_browse: cdktn.booleanToTerraform(this._includeBrowse),
      page_size: cdktn.numberToTerraform(this._pageSize),
      parent: cdktn.stringToTerraform(this._parent),
      provider_config: dataDatabricksAiGatewayModelProviderServicesProviderConfigToTerraform(this._providerConfig.internalValue),
      view: cdktn.stringToTerraform(this._view),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      include_browse: {
        value: cdktn.booleanToHclTerraform(this._includeBrowse),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
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
        value: dataDatabricksAiGatewayModelProviderServicesProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataDatabricksAiGatewayModelProviderServicesProviderConfig",
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
