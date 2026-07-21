/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/feature_engineering_kafka_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface FeatureEngineeringKafkaConfigConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/feature_engineering_kafka_config#auth_config FeatureEngineeringKafkaConfig#auth_config}
  */
  readonly authConfig: FeatureEngineeringKafkaConfigAuthConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/feature_engineering_kafka_config#backfill_source FeatureEngineeringKafkaConfig#backfill_source}
  */
  readonly backfillSource?: FeatureEngineeringKafkaConfigBackfillSource;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/feature_engineering_kafka_config#bootstrap_servers FeatureEngineeringKafkaConfig#bootstrap_servers}
  */
  readonly bootstrapServers: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/feature_engineering_kafka_config#extra_options FeatureEngineeringKafkaConfig#extra_options}
  */
  readonly extraOptions?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/feature_engineering_kafka_config#ingestion_config FeatureEngineeringKafkaConfig#ingestion_config}
  */
  readonly ingestionConfig?: FeatureEngineeringKafkaConfigIngestionConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/feature_engineering_kafka_config#key_schema FeatureEngineeringKafkaConfig#key_schema}
  */
  readonly keySchema?: FeatureEngineeringKafkaConfigKeySchema;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/feature_engineering_kafka_config#provider_config FeatureEngineeringKafkaConfig#provider_config}
  */
  readonly providerConfig?: FeatureEngineeringKafkaConfigProviderConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/feature_engineering_kafka_config#subscription_mode FeatureEngineeringKafkaConfig#subscription_mode}
  */
  readonly subscriptionMode: FeatureEngineeringKafkaConfigSubscriptionMode;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/feature_engineering_kafka_config#value_schema FeatureEngineeringKafkaConfig#value_schema}
  */
  readonly valueSchema?: FeatureEngineeringKafkaConfigValueSchema;
}
export interface FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/feature_engineering_kafka_config#key FeatureEngineeringKafkaConfig#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/feature_engineering_kafka_config#scope FeatureEngineeringKafkaConfig#scope}
  */
  readonly scope: string;
}

export function featureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefToTerraform(struct?: FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    scope: cdktn.stringToTerraform(struct!.scope),
  }
}


export function featureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefToHclTerraform(struct?: FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef | cdktn.IResolvable): any {
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
    scope: {
      value: cdktn.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._scope = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._scope = value.scope;
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

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }
}
export interface FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/feature_engineering_kafka_config#key FeatureEngineeringKafkaConfig#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/feature_engineering_kafka_config#scope FeatureEngineeringKafkaConfig#scope}
  */
  readonly scope: string;
}

export function featureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefToTerraform(struct?: FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    scope: cdktn.stringToTerraform(struct!.scope),
  }
}


export function featureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefToHclTerraform(struct?: FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef | cdktn.IResolvable): any {
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
    scope: {
      value: cdktn.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._scope = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._scope = value.scope;
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

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }
}
export interface FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/feature_engineering_kafka_config#key FeatureEngineeringKafkaConfig#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/feature_engineering_kafka_config#scope FeatureEngineeringKafkaConfig#scope}
  */
  readonly scope: string;
}

export function featureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefToTerraform(struct?: FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    scope: cdktn.stringToTerraform(struct!.scope),
  }
}


export function featureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefToHclTerraform(struct?: FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef | cdktn.IResolvable): any {
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
    scope: {
      value: cdktn.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._scope = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._scope = value.scope;
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

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }
}
export interface FeatureEngineeringKafkaConfigAuthConfigMtlsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/feature_engineering_kafka_config#disable_hostname_verification FeatureEngineeringKafkaConfig#disable_hostname_verification}
  */
  readonly disableHostnameVerification?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/feature_engineering_kafka_config#key_password_ref FeatureEngineeringKafkaConfig#key_password_ref}
  */
  readonly keyPasswordRef: FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/feature_engineering_kafka_config#keystore_location FeatureEngineeringKafkaConfig#keystore_location}
  */
  readonly keystoreLocation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/feature_engineering_kafka_config#keystore_password_ref FeatureEngineeringKafkaConfig#keystore_password_ref}
  */
  readonly keystorePasswordRef: FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/feature_engineering_kafka_config#truststore_location FeatureEngineeringKafkaConfig#truststore_location}
  */
  readonly truststoreLocation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/feature_engineering_kafka_config#truststore_password_ref FeatureEngineeringKafkaConfig#truststore_password_ref}
  */
  readonly truststorePasswordRef: FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef;
}

export function featureEngineeringKafkaConfigAuthConfigMtlsConfigToTerraform(struct?: FeatureEngineeringKafkaConfigAuthConfigMtlsConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    disable_hostname_verification: cdktn.booleanToTerraform(struct!.disableHostnameVerification),
    key_password_ref: featureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefToTerraform(struct!.keyPasswordRef),
    keystore_location: cdktn.stringToTerraform(struct!.keystoreLocation),
    keystore_password_ref: featureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefToTerraform(struct!.keystorePasswordRef),
    truststore_location: cdktn.stringToTerraform(struct!.truststoreLocation),
    truststore_password_ref: featureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefToTerraform(struct!.truststorePasswordRef),
  }
}


export function featureEngineeringKafkaConfigAuthConfigMtlsConfigToHclTerraform(struct?: FeatureEngineeringKafkaConfigAuthConfigMtlsConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    disable_hostname_verification: {
      value: cdktn.booleanToHclTerraform(struct!.disableHostnameVerification),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_password_ref: {
      value: featureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefToHclTerraform(struct!.keyPasswordRef),
      isBlock: true,
      type: "struct",
      storageClassType: "FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef",
    },
    keystore_location: {
      value: cdktn.stringToHclTerraform(struct!.keystoreLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keystore_password_ref: {
      value: featureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefToHclTerraform(struct!.keystorePasswordRef),
      isBlock: true,
      type: "struct",
      storageClassType: "FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef",
    },
    truststore_location: {
      value: cdktn.stringToHclTerraform(struct!.truststoreLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    truststore_password_ref: {
      value: featureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefToHclTerraform(struct!.truststorePasswordRef),
      isBlock: true,
      type: "struct",
      storageClassType: "FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FeatureEngineeringKafkaConfigAuthConfigMtlsConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableHostnameVerification !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableHostnameVerification = this._disableHostnameVerification;
    }
    if (this._keyPasswordRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPasswordRef = this._keyPasswordRef?.internalValue;
    }
    if (this._keystoreLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.keystoreLocation = this._keystoreLocation;
    }
    if (this._keystorePasswordRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keystorePasswordRef = this._keystorePasswordRef?.internalValue;
    }
    if (this._truststoreLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.truststoreLocation = this._truststoreLocation;
    }
    if (this._truststorePasswordRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.truststorePasswordRef = this._truststorePasswordRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FeatureEngineeringKafkaConfigAuthConfigMtlsConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableHostnameVerification = undefined;
      this._keyPasswordRef.internalValue = undefined;
      this._keystoreLocation = undefined;
      this._keystorePasswordRef.internalValue = undefined;
      this._truststoreLocation = undefined;
      this._truststorePasswordRef.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableHostnameVerification = value.disableHostnameVerification;
      this._keyPasswordRef.internalValue = value.keyPasswordRef;
      this._keystoreLocation = value.keystoreLocation;
      this._keystorePasswordRef.internalValue = value.keystorePasswordRef;
      this._truststoreLocation = value.truststoreLocation;
      this._truststorePasswordRef.internalValue = value.truststorePasswordRef;
    }
  }

  // disable_hostname_verification - computed: false, optional: true, required: false
  private _disableHostnameVerification?: boolean | cdktn.IResolvable; 
  public get disableHostnameVerification() {
    return this.getBooleanAttribute('disable_hostname_verification');
  }
  public set disableHostnameVerification(value: boolean | cdktn.IResolvable) {
    this._disableHostnameVerification = value;
  }
  public resetDisableHostnameVerification() {
    this._disableHostnameVerification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableHostnameVerificationInput() {
    return this._disableHostnameVerification;
  }

  // key_password_ref - computed: false, optional: false, required: true
  private _keyPasswordRef = new FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference(this, "key_password_ref");
  public get keyPasswordRef() {
    return this._keyPasswordRef;
  }
  public putKeyPasswordRef(value: FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef) {
    this._keyPasswordRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPasswordRefInput() {
    return this._keyPasswordRef.internalValue;
  }

  // keystore_location - computed: false, optional: false, required: true
  private _keystoreLocation?: string; 
  public get keystoreLocation() {
    return this.getStringAttribute('keystore_location');
  }
  public set keystoreLocation(value: string) {
    this._keystoreLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keystoreLocationInput() {
    return this._keystoreLocation;
  }

  // keystore_password_ref - computed: false, optional: false, required: true
  private _keystorePasswordRef = new FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference(this, "keystore_password_ref");
  public get keystorePasswordRef() {
    return this._keystorePasswordRef;
  }
  public putKeystorePasswordRef(value: FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef) {
    this._keystorePasswordRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keystorePasswordRefInput() {
    return this._keystorePasswordRef.internalValue;
  }

  // truststore_location - computed: false, optional: false, required: true
  private _truststoreLocation?: string; 
  public get truststoreLocation() {
    return this.getStringAttribute('truststore_location');
  }
  public set truststoreLocation(value: string) {
    this._truststoreLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get truststoreLocationInput() {
    return this._truststoreLocation;
  }

  // truststore_password_ref - computed: false, optional: false, required: true
  private _truststorePasswordRef = new FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference(this, "truststore_password_ref");
  public get truststorePasswordRef() {
    return this._truststorePasswordRef;
  }
  public putTruststorePasswordRef(value: FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef) {
    this._truststorePasswordRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get truststorePasswordRefInput() {
    return this._truststorePasswordRef.internalValue;
  }
}
export interface FeatureEngineeringKafkaConfigAuthConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/feature_engineering_kafka_config#mtls_config FeatureEngineeringKafkaConfig#mtls_config}
  */
  readonly mtlsConfig?: FeatureEngineeringKafkaConfigAuthConfigMtlsConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/feature_engineering_kafka_config#uc_service_credential_name FeatureEngineeringKafkaConfig#uc_service_credential_name}
  */
  readonly ucServiceCredentialName?: string;
}

export function featureEngineeringKafkaConfigAuthConfigToTerraform(struct?: FeatureEngineeringKafkaConfigAuthConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mtls_config: featureEngineeringKafkaConfigAuthConfigMtlsConfigToTerraform(struct!.mtlsConfig),
    uc_service_credential_name: cdktn.stringToTerraform(struct!.ucServiceCredentialName),
  }
}


export function featureEngineeringKafkaConfigAuthConfigToHclTerraform(struct?: FeatureEngineeringKafkaConfigAuthConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    mtls_config: {
      value: featureEngineeringKafkaConfigAuthConfigMtlsConfigToHclTerraform(struct!.mtlsConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "FeatureEngineeringKafkaConfigAuthConfigMtlsConfig",
    },
    uc_service_credential_name: {
      value: cdktn.stringToHclTerraform(struct!.ucServiceCredentialName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FeatureEngineeringKafkaConfigAuthConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FeatureEngineeringKafkaConfigAuthConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mtlsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtlsConfig = this._mtlsConfig?.internalValue;
    }
    if (this._ucServiceCredentialName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ucServiceCredentialName = this._ucServiceCredentialName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FeatureEngineeringKafkaConfigAuthConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mtlsConfig.internalValue = undefined;
      this._ucServiceCredentialName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mtlsConfig.internalValue = value.mtlsConfig;
      this._ucServiceCredentialName = value.ucServiceCredentialName;
    }
  }

  // mtls_config - computed: false, optional: true, required: false
  private _mtlsConfig = new FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference(this, "mtls_config");
  public get mtlsConfig() {
    return this._mtlsConfig;
  }
  public putMtlsConfig(value: FeatureEngineeringKafkaConfigAuthConfigMtlsConfig) {
    this._mtlsConfig.internalValue = value;
  }
  public resetMtlsConfig() {
    this._mtlsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtlsConfigInput() {
    return this._mtlsConfig.internalValue;
  }

  // uc_service_credential_name - computed: false, optional: true, required: false
  private _ucServiceCredentialName?: string; 
  public get ucServiceCredentialName() {
    return this.getStringAttribute('uc_service_credential_name');
  }
  public set ucServiceCredentialName(value: string) {
    this._ucServiceCredentialName = value;
  }
  public resetUcServiceCredentialName() {
    this._ucServiceCredentialName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ucServiceCredentialNameInput() {
    return this._ucServiceCredentialName;
  }
}
export interface FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/feature_engineering_kafka_config#dataframe_schema FeatureEngineeringKafkaConfig#dataframe_schema}
  */
  readonly dataframeSchema?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/feature_engineering_kafka_config#entity_columns FeatureEngineeringKafkaConfig#entity_columns}
  */
  readonly entityColumns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/feature_engineering_kafka_config#filter_condition FeatureEngineeringKafkaConfig#filter_condition}
  */
  readonly filterCondition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/feature_engineering_kafka_config#full_name FeatureEngineeringKafkaConfig#full_name}
  */
  readonly fullName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/feature_engineering_kafka_config#timeseries_column FeatureEngineeringKafkaConfig#timeseries_column}
  */
  readonly timeseriesColumn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/feature_engineering_kafka_config#transformation_sql FeatureEngineeringKafkaConfig#transformation_sql}
  */
  readonly transformationSql?: string;
}

export function featureEngineeringKafkaConfigBackfillSourceDeltaTableSourceToTerraform(struct?: FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dataframe_schema: cdktn.stringToTerraform(struct!.dataframeSchema),
    entity_columns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.entityColumns),
    filter_condition: cdktn.stringToTerraform(struct!.filterCondition),
    full_name: cdktn.stringToTerraform(struct!.fullName),
    timeseries_column: cdktn.stringToTerraform(struct!.timeseriesColumn),
    transformation_sql: cdktn.stringToTerraform(struct!.transformationSql),
  }
}


export function featureEngineeringKafkaConfigBackfillSourceDeltaTableSourceToHclTerraform(struct?: FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dataframe_schema: {
      value: cdktn.stringToHclTerraform(struct!.dataframeSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entity_columns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.entityColumns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    filter_condition: {
      value: cdktn.stringToHclTerraform(struct!.filterCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    full_name: {
      value: cdktn.stringToHclTerraform(struct!.fullName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeseries_column: {
      value: cdktn.stringToHclTerraform(struct!.timeseriesColumn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transformation_sql: {
      value: cdktn.stringToHclTerraform(struct!.transformationSql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataframeSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataframeSchema = this._dataframeSchema;
    }
    if (this._entityColumns !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityColumns = this._entityColumns;
    }
    if (this._filterCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterCondition = this._filterCondition;
    }
    if (this._fullName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullName = this._fullName;
    }
    if (this._timeseriesColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeseriesColumn = this._timeseriesColumn;
    }
    if (this._transformationSql !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformationSql = this._transformationSql;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataframeSchema = undefined;
      this._entityColumns = undefined;
      this._filterCondition = undefined;
      this._fullName = undefined;
      this._timeseriesColumn = undefined;
      this._transformationSql = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataframeSchema = value.dataframeSchema;
      this._entityColumns = value.entityColumns;
      this._filterCondition = value.filterCondition;
      this._fullName = value.fullName;
      this._timeseriesColumn = value.timeseriesColumn;
      this._transformationSql = value.transformationSql;
    }
  }

  // dataframe_schema - computed: false, optional: true, required: false
  private _dataframeSchema?: string; 
  public get dataframeSchema() {
    return this.getStringAttribute('dataframe_schema');
  }
  public set dataframeSchema(value: string) {
    this._dataframeSchema = value;
  }
  public resetDataframeSchema() {
    this._dataframeSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataframeSchemaInput() {
    return this._dataframeSchema;
  }

  // entity_columns - computed: false, optional: true, required: false
  private _entityColumns?: string[]; 
  public get entityColumns() {
    return this.getListAttribute('entity_columns');
  }
  public set entityColumns(value: string[]) {
    this._entityColumns = value;
  }
  public resetEntityColumns() {
    this._entityColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityColumnsInput() {
    return this._entityColumns;
  }

  // filter_condition - computed: false, optional: true, required: false
  private _filterCondition?: string; 
  public get filterCondition() {
    return this.getStringAttribute('filter_condition');
  }
  public set filterCondition(value: string) {
    this._filterCondition = value;
  }
  public resetFilterCondition() {
    this._filterCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterConditionInput() {
    return this._filterCondition;
  }

  // full_name - computed: false, optional: false, required: true
  private _fullName?: string; 
  public get fullName() {
    return this.getStringAttribute('full_name');
  }
  public set fullName(value: string) {
    this._fullName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fullNameInput() {
    return this._fullName;
  }

  // timeseries_column - computed: false, optional: true, required: false
  private _timeseriesColumn?: string; 
  public get timeseriesColumn() {
    return this.getStringAttribute('timeseries_column');
  }
  public set timeseriesColumn(value: string) {
    this._timeseriesColumn = value;
  }
  public resetTimeseriesColumn() {
    this._timeseriesColumn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeseriesColumnInput() {
    return this._timeseriesColumn;
  }

  // transformation_sql - computed: false, optional: true, required: false
  private _transformationSql?: string; 
  public get transformationSql() {
    return this.getStringAttribute('transformation_sql');
  }
  public set transformationSql(value: string) {
    this._transformationSql = value;
  }
  public resetTransformationSql() {
    this._transformationSql = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformationSqlInput() {
    return this._transformationSql;
  }
}
export interface FeatureEngineeringKafkaConfigBackfillSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/feature_engineering_kafka_config#delta_table_name FeatureEngineeringKafkaConfig#delta_table_name}
  */
  readonly deltaTableName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/feature_engineering_kafka_config#delta_table_source FeatureEngineeringKafkaConfig#delta_table_source}
  */
  readonly deltaTableSource?: FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource;
}

export function featureEngineeringKafkaConfigBackfillSourceToTerraform(struct?: FeatureEngineeringKafkaConfigBackfillSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    delta_table_name: cdktn.stringToTerraform(struct!.deltaTableName),
    delta_table_source: featureEngineeringKafkaConfigBackfillSourceDeltaTableSourceToTerraform(struct!.deltaTableSource),
  }
}


export function featureEngineeringKafkaConfigBackfillSourceToHclTerraform(struct?: FeatureEngineeringKafkaConfigBackfillSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    delta_table_name: {
      value: cdktn.stringToHclTerraform(struct!.deltaTableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delta_table_source: {
      value: featureEngineeringKafkaConfigBackfillSourceDeltaTableSourceToHclTerraform(struct!.deltaTableSource),
      isBlock: true,
      type: "struct",
      storageClassType: "FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FeatureEngineeringKafkaConfigBackfillSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FeatureEngineeringKafkaConfigBackfillSource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deltaTableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deltaTableName = this._deltaTableName;
    }
    if (this._deltaTableSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deltaTableSource = this._deltaTableSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FeatureEngineeringKafkaConfigBackfillSource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deltaTableName = undefined;
      this._deltaTableSource.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deltaTableName = value.deltaTableName;
      this._deltaTableSource.internalValue = value.deltaTableSource;
    }
  }

  // delta_table_name - computed: false, optional: true, required: false
  private _deltaTableName?: string; 
  public get deltaTableName() {
    return this.getStringAttribute('delta_table_name');
  }
  public set deltaTableName(value: string) {
    this._deltaTableName = value;
  }
  public resetDeltaTableName() {
    this._deltaTableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deltaTableNameInput() {
    return this._deltaTableName;
  }

  // delta_table_source - computed: false, optional: true, required: false
  private _deltaTableSource = new FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference(this, "delta_table_source");
  public get deltaTableSource() {
    return this._deltaTableSource;
  }
  public putDeltaTableSource(value: FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource) {
    this._deltaTableSource.internalValue = value;
  }
  public resetDeltaTableSource() {
    this._deltaTableSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deltaTableSourceInput() {
    return this._deltaTableSource.internalValue;
  }
}
export interface FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/feature_engineering_kafka_config#dataframe_schema FeatureEngineeringKafkaConfig#dataframe_schema}
  */
  readonly dataframeSchema?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/feature_engineering_kafka_config#entity_columns FeatureEngineeringKafkaConfig#entity_columns}
  */
  readonly entityColumns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/feature_engineering_kafka_config#filter_condition FeatureEngineeringKafkaConfig#filter_condition}
  */
  readonly filterCondition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/feature_engineering_kafka_config#full_name FeatureEngineeringKafkaConfig#full_name}
  */
  readonly fullName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/feature_engineering_kafka_config#timeseries_column FeatureEngineeringKafkaConfig#timeseries_column}
  */
  readonly timeseriesColumn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/feature_engineering_kafka_config#transformation_sql FeatureEngineeringKafkaConfig#transformation_sql}
  */
  readonly transformationSql?: string;
}

export function featureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceToTerraform(struct?: FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dataframe_schema: cdktn.stringToTerraform(struct!.dataframeSchema),
    entity_columns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.entityColumns),
    filter_condition: cdktn.stringToTerraform(struct!.filterCondition),
    full_name: cdktn.stringToTerraform(struct!.fullName),
    timeseries_column: cdktn.stringToTerraform(struct!.timeseriesColumn),
    transformation_sql: cdktn.stringToTerraform(struct!.transformationSql),
  }
}


export function featureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceToHclTerraform(struct?: FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dataframe_schema: {
      value: cdktn.stringToHclTerraform(struct!.dataframeSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entity_columns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.entityColumns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    filter_condition: {
      value: cdktn.stringToHclTerraform(struct!.filterCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    full_name: {
      value: cdktn.stringToHclTerraform(struct!.fullName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeseries_column: {
      value: cdktn.stringToHclTerraform(struct!.timeseriesColumn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transformation_sql: {
      value: cdktn.stringToHclTerraform(struct!.transformationSql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataframeSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataframeSchema = this._dataframeSchema;
    }
    if (this._entityColumns !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityColumns = this._entityColumns;
    }
    if (this._filterCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterCondition = this._filterCondition;
    }
    if (this._fullName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullName = this._fullName;
    }
    if (this._timeseriesColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeseriesColumn = this._timeseriesColumn;
    }
    if (this._transformationSql !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformationSql = this._transformationSql;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataframeSchema = undefined;
      this._entityColumns = undefined;
      this._filterCondition = undefined;
      this._fullName = undefined;
      this._timeseriesColumn = undefined;
      this._transformationSql = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataframeSchema = value.dataframeSchema;
      this._entityColumns = value.entityColumns;
      this._filterCondition = value.filterCondition;
      this._fullName = value.fullName;
      this._timeseriesColumn = value.timeseriesColumn;
      this._transformationSql = value.transformationSql;
    }
  }

  // dataframe_schema - computed: false, optional: true, required: false
  private _dataframeSchema?: string; 
  public get dataframeSchema() {
    return this.getStringAttribute('dataframe_schema');
  }
  public set dataframeSchema(value: string) {
    this._dataframeSchema = value;
  }
  public resetDataframeSchema() {
    this._dataframeSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataframeSchemaInput() {
    return this._dataframeSchema;
  }

  // entity_columns - computed: false, optional: true, required: false
  private _entityColumns?: string[]; 
  public get entityColumns() {
    return this.getListAttribute('entity_columns');
  }
  public set entityColumns(value: string[]) {
    this._entityColumns = value;
  }
  public resetEntityColumns() {
    this._entityColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityColumnsInput() {
    return this._entityColumns;
  }

  // filter_condition - computed: false, optional: true, required: false
  private _filterCondition?: string; 
  public get filterCondition() {
    return this.getStringAttribute('filter_condition');
  }
  public set filterCondition(value: string) {
    this._filterCondition = value;
  }
  public resetFilterCondition() {
    this._filterCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterConditionInput() {
    return this._filterCondition;
  }

  // full_name - computed: false, optional: false, required: true
  private _fullName?: string; 
  public get fullName() {
    return this.getStringAttribute('full_name');
  }
  public set fullName(value: string) {
    this._fullName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fullNameInput() {
    return this._fullName;
  }

  // timeseries_column - computed: false, optional: true, required: false
  private _timeseriesColumn?: string; 
  public get timeseriesColumn() {
    return this.getStringAttribute('timeseries_column');
  }
  public set timeseriesColumn(value: string) {
    this._timeseriesColumn = value;
  }
  public resetTimeseriesColumn() {
    this._timeseriesColumn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeseriesColumnInput() {
    return this._timeseriesColumn;
  }

  // transformation_sql - computed: false, optional: true, required: false
  private _transformationSql?: string; 
  public get transformationSql() {
    return this.getStringAttribute('transformation_sql');
  }
  public set transformationSql(value: string) {
    this._transformationSql = value;
  }
  public resetTransformationSql() {
    this._transformationSql = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformationSqlInput() {
    return this._transformationSql;
  }
}
export interface FeatureEngineeringKafkaConfigIngestionConfigBackfillSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/feature_engineering_kafka_config#delta_table_name FeatureEngineeringKafkaConfig#delta_table_name}
  */
  readonly deltaTableName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/feature_engineering_kafka_config#delta_table_source FeatureEngineeringKafkaConfig#delta_table_source}
  */
  readonly deltaTableSource?: FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource;
}

export function featureEngineeringKafkaConfigIngestionConfigBackfillSourceToTerraform(struct?: FeatureEngineeringKafkaConfigIngestionConfigBackfillSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    delta_table_name: cdktn.stringToTerraform(struct!.deltaTableName),
    delta_table_source: featureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceToTerraform(struct!.deltaTableSource),
  }
}


export function featureEngineeringKafkaConfigIngestionConfigBackfillSourceToHclTerraform(struct?: FeatureEngineeringKafkaConfigIngestionConfigBackfillSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    delta_table_name: {
      value: cdktn.stringToHclTerraform(struct!.deltaTableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delta_table_source: {
      value: featureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceToHclTerraform(struct!.deltaTableSource),
      isBlock: true,
      type: "struct",
      storageClassType: "FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FeatureEngineeringKafkaConfigIngestionConfigBackfillSource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deltaTableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deltaTableName = this._deltaTableName;
    }
    if (this._deltaTableSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deltaTableSource = this._deltaTableSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FeatureEngineeringKafkaConfigIngestionConfigBackfillSource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deltaTableName = undefined;
      this._deltaTableSource.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deltaTableName = value.deltaTableName;
      this._deltaTableSource.internalValue = value.deltaTableSource;
    }
  }

  // delta_table_name - computed: false, optional: true, required: false
  private _deltaTableName?: string; 
  public get deltaTableName() {
    return this.getStringAttribute('delta_table_name');
  }
  public set deltaTableName(value: string) {
    this._deltaTableName = value;
  }
  public resetDeltaTableName() {
    this._deltaTableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deltaTableNameInput() {
    return this._deltaTableName;
  }

  // delta_table_source - computed: false, optional: true, required: false
  private _deltaTableSource = new FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference(this, "delta_table_source");
  public get deltaTableSource() {
    return this._deltaTableSource;
  }
  public putDeltaTableSource(value: FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource) {
    this._deltaTableSource.internalValue = value;
  }
  public resetDeltaTableSource() {
    this._deltaTableSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deltaTableSourceInput() {
    return this._deltaTableSource.internalValue;
  }
}
export interface FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/feature_engineering_kafka_config#delta_table_name FeatureEngineeringKafkaConfig#delta_table_name}
  */
  readonly deltaTableName?: string;
}

export function featureEngineeringKafkaConfigIngestionConfigIngestionDestinationToTerraform(struct?: FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    delta_table_name: cdktn.stringToTerraform(struct!.deltaTableName),
  }
}


export function featureEngineeringKafkaConfigIngestionConfigIngestionDestinationToHclTerraform(struct?: FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    delta_table_name: {
      value: cdktn.stringToHclTerraform(struct!.deltaTableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deltaTableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deltaTableName = this._deltaTableName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deltaTableName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deltaTableName = value.deltaTableName;
    }
  }

  // delta_table_name - computed: false, optional: true, required: false
  private _deltaTableName?: string; 
  public get deltaTableName() {
    return this.getStringAttribute('delta_table_name');
  }
  public set deltaTableName(value: string) {
    this._deltaTableName = value;
  }
  public resetDeltaTableName() {
    this._deltaTableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deltaTableNameInput() {
    return this._deltaTableName;
  }
}
export interface FeatureEngineeringKafkaConfigIngestionConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/feature_engineering_kafka_config#backfill_source FeatureEngineeringKafkaConfig#backfill_source}
  */
  readonly backfillSource?: FeatureEngineeringKafkaConfigIngestionConfigBackfillSource;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/feature_engineering_kafka_config#deduplication_columns FeatureEngineeringKafkaConfig#deduplication_columns}
  */
  readonly deduplicationColumns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/feature_engineering_kafka_config#ingestion_destination FeatureEngineeringKafkaConfig#ingestion_destination}
  */
  readonly ingestionDestination: FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination;
}

export function featureEngineeringKafkaConfigIngestionConfigToTerraform(struct?: FeatureEngineeringKafkaConfigIngestionConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    backfill_source: featureEngineeringKafkaConfigIngestionConfigBackfillSourceToTerraform(struct!.backfillSource),
    deduplication_columns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.deduplicationColumns),
    ingestion_destination: featureEngineeringKafkaConfigIngestionConfigIngestionDestinationToTerraform(struct!.ingestionDestination),
  }
}


export function featureEngineeringKafkaConfigIngestionConfigToHclTerraform(struct?: FeatureEngineeringKafkaConfigIngestionConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    backfill_source: {
      value: featureEngineeringKafkaConfigIngestionConfigBackfillSourceToHclTerraform(struct!.backfillSource),
      isBlock: true,
      type: "struct",
      storageClassType: "FeatureEngineeringKafkaConfigIngestionConfigBackfillSource",
    },
    deduplication_columns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.deduplicationColumns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ingestion_destination: {
      value: featureEngineeringKafkaConfigIngestionConfigIngestionDestinationToHclTerraform(struct!.ingestionDestination),
      isBlock: true,
      type: "struct",
      storageClassType: "FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FeatureEngineeringKafkaConfigIngestionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FeatureEngineeringKafkaConfigIngestionConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backfillSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backfillSource = this._backfillSource?.internalValue;
    }
    if (this._deduplicationColumns !== undefined) {
      hasAnyValues = true;
      internalValueResult.deduplicationColumns = this._deduplicationColumns;
    }
    if (this._ingestionDestination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingestionDestination = this._ingestionDestination?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FeatureEngineeringKafkaConfigIngestionConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backfillSource.internalValue = undefined;
      this._deduplicationColumns = undefined;
      this._ingestionDestination.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backfillSource.internalValue = value.backfillSource;
      this._deduplicationColumns = value.deduplicationColumns;
      this._ingestionDestination.internalValue = value.ingestionDestination;
    }
  }

  // backfill_job_id - computed: true, optional: false, required: false
  public get backfillJobId() {
    return this.getNumberAttribute('backfill_job_id');
  }

  // backfill_source - computed: false, optional: true, required: false
  private _backfillSource = new FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference(this, "backfill_source");
  public get backfillSource() {
    return this._backfillSource;
  }
  public putBackfillSource(value: FeatureEngineeringKafkaConfigIngestionConfigBackfillSource) {
    this._backfillSource.internalValue = value;
  }
  public resetBackfillSource() {
    this._backfillSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backfillSourceInput() {
    return this._backfillSource.internalValue;
  }

  // deduplication_columns - computed: false, optional: true, required: false
  private _deduplicationColumns?: string[]; 
  public get deduplicationColumns() {
    return this.getListAttribute('deduplication_columns');
  }
  public set deduplicationColumns(value: string[]) {
    this._deduplicationColumns = value;
  }
  public resetDeduplicationColumns() {
    this._deduplicationColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deduplicationColumnsInput() {
    return this._deduplicationColumns;
  }

  // ingestion_destination - computed: false, optional: false, required: true
  private _ingestionDestination = new FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference(this, "ingestion_destination");
  public get ingestionDestination() {
    return this._ingestionDestination;
  }
  public putIngestionDestination(value: FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination) {
    this._ingestionDestination.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ingestionDestinationInput() {
    return this._ingestionDestination.internalValue;
  }

  // ingestion_job_id - computed: true, optional: false, required: false
  public get ingestionJobId() {
    return this.getNumberAttribute('ingestion_job_id');
  }

  // ingestion_pipeline_id - computed: true, optional: false, required: false
  public get ingestionPipelineId() {
    return this.getStringAttribute('ingestion_pipeline_id');
  }
}
export interface FeatureEngineeringKafkaConfigKeySchemaProtoSchema {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/feature_engineering_kafka_config#message_name FeatureEngineeringKafkaConfig#message_name}
  */
  readonly messageName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/feature_engineering_kafka_config#schema_text FeatureEngineeringKafkaConfig#schema_text}
  */
  readonly schemaText: string;
}

export function featureEngineeringKafkaConfigKeySchemaProtoSchemaToTerraform(struct?: FeatureEngineeringKafkaConfigKeySchemaProtoSchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    message_name: cdktn.stringToTerraform(struct!.messageName),
    schema_text: cdktn.stringToTerraform(struct!.schemaText),
  }
}


export function featureEngineeringKafkaConfigKeySchemaProtoSchemaToHclTerraform(struct?: FeatureEngineeringKafkaConfigKeySchemaProtoSchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    message_name: {
      value: cdktn.stringToHclTerraform(struct!.messageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_text: {
      value: cdktn.stringToHclTerraform(struct!.schemaText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FeatureEngineeringKafkaConfigKeySchemaProtoSchema | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._messageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageName = this._messageName;
    }
    if (this._schemaText !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaText = this._schemaText;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FeatureEngineeringKafkaConfigKeySchemaProtoSchema | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._messageName = undefined;
      this._schemaText = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._messageName = value.messageName;
      this._schemaText = value.schemaText;
    }
  }

  // message_name - computed: false, optional: false, required: true
  private _messageName?: string; 
  public get messageName() {
    return this.getStringAttribute('message_name');
  }
  public set messageName(value: string) {
    this._messageName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get messageNameInput() {
    return this._messageName;
  }

  // schema_text - computed: false, optional: false, required: true
  private _schemaText?: string; 
  public get schemaText() {
    return this.getStringAttribute('schema_text');
  }
  public set schemaText(value: string) {
    this._schemaText = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaTextInput() {
    return this._schemaText;
  }
}
export interface FeatureEngineeringKafkaConfigKeySchema {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/feature_engineering_kafka_config#avro_schema FeatureEngineeringKafkaConfig#avro_schema}
  */
  readonly avroSchema?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/feature_engineering_kafka_config#json_schema FeatureEngineeringKafkaConfig#json_schema}
  */
  readonly jsonSchema?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/feature_engineering_kafka_config#proto_schema FeatureEngineeringKafkaConfig#proto_schema}
  */
  readonly protoSchema?: FeatureEngineeringKafkaConfigKeySchemaProtoSchema;
}

export function featureEngineeringKafkaConfigKeySchemaToTerraform(struct?: FeatureEngineeringKafkaConfigKeySchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    avro_schema: cdktn.stringToTerraform(struct!.avroSchema),
    json_schema: cdktn.stringToTerraform(struct!.jsonSchema),
    proto_schema: featureEngineeringKafkaConfigKeySchemaProtoSchemaToTerraform(struct!.protoSchema),
  }
}


export function featureEngineeringKafkaConfigKeySchemaToHclTerraform(struct?: FeatureEngineeringKafkaConfigKeySchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    avro_schema: {
      value: cdktn.stringToHclTerraform(struct!.avroSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    json_schema: {
      value: cdktn.stringToHclTerraform(struct!.jsonSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proto_schema: {
      value: featureEngineeringKafkaConfigKeySchemaProtoSchemaToHclTerraform(struct!.protoSchema),
      isBlock: true,
      type: "struct",
      storageClassType: "FeatureEngineeringKafkaConfigKeySchemaProtoSchema",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FeatureEngineeringKafkaConfigKeySchemaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FeatureEngineeringKafkaConfigKeySchema | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._avroSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.avroSchema = this._avroSchema;
    }
    if (this._jsonSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonSchema = this._jsonSchema;
    }
    if (this._protoSchema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protoSchema = this._protoSchema?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FeatureEngineeringKafkaConfigKeySchema | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._avroSchema = undefined;
      this._jsonSchema = undefined;
      this._protoSchema.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._avroSchema = value.avroSchema;
      this._jsonSchema = value.jsonSchema;
      this._protoSchema.internalValue = value.protoSchema;
    }
  }

  // avro_schema - computed: false, optional: true, required: false
  private _avroSchema?: string; 
  public get avroSchema() {
    return this.getStringAttribute('avro_schema');
  }
  public set avroSchema(value: string) {
    this._avroSchema = value;
  }
  public resetAvroSchema() {
    this._avroSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avroSchemaInput() {
    return this._avroSchema;
  }

  // json_schema - computed: false, optional: true, required: false
  private _jsonSchema?: string; 
  public get jsonSchema() {
    return this.getStringAttribute('json_schema');
  }
  public set jsonSchema(value: string) {
    this._jsonSchema = value;
  }
  public resetJsonSchema() {
    this._jsonSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonSchemaInput() {
    return this._jsonSchema;
  }

  // proto_schema - computed: false, optional: true, required: false
  private _protoSchema = new FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference(this, "proto_schema");
  public get protoSchema() {
    return this._protoSchema;
  }
  public putProtoSchema(value: FeatureEngineeringKafkaConfigKeySchemaProtoSchema) {
    this._protoSchema.internalValue = value;
  }
  public resetProtoSchema() {
    this._protoSchema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protoSchemaInput() {
    return this._protoSchema.internalValue;
  }
}
export interface FeatureEngineeringKafkaConfigProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/feature_engineering_kafka_config#workspace_id FeatureEngineeringKafkaConfig#workspace_id}
  */
  readonly workspaceId?: string;
}

export function featureEngineeringKafkaConfigProviderConfigToTerraform(struct?: FeatureEngineeringKafkaConfigProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function featureEngineeringKafkaConfigProviderConfigToHclTerraform(struct?: FeatureEngineeringKafkaConfigProviderConfig | cdktn.IResolvable): any {
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

export class FeatureEngineeringKafkaConfigProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FeatureEngineeringKafkaConfigProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: FeatureEngineeringKafkaConfigProviderConfig | cdktn.IResolvable | undefined) {
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
export interface FeatureEngineeringKafkaConfigSubscriptionMode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/feature_engineering_kafka_config#assign FeatureEngineeringKafkaConfig#assign}
  */
  readonly assign?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/feature_engineering_kafka_config#subscribe FeatureEngineeringKafkaConfig#subscribe}
  */
  readonly subscribe?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/feature_engineering_kafka_config#subscribe_pattern FeatureEngineeringKafkaConfig#subscribe_pattern}
  */
  readonly subscribePattern?: string;
}

export function featureEngineeringKafkaConfigSubscriptionModeToTerraform(struct?: FeatureEngineeringKafkaConfigSubscriptionMode | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    assign: cdktn.stringToTerraform(struct!.assign),
    subscribe: cdktn.stringToTerraform(struct!.subscribe),
    subscribe_pattern: cdktn.stringToTerraform(struct!.subscribePattern),
  }
}


export function featureEngineeringKafkaConfigSubscriptionModeToHclTerraform(struct?: FeatureEngineeringKafkaConfigSubscriptionMode | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    assign: {
      value: cdktn.stringToHclTerraform(struct!.assign),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subscribe: {
      value: cdktn.stringToHclTerraform(struct!.subscribe),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subscribe_pattern: {
      value: cdktn.stringToHclTerraform(struct!.subscribePattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FeatureEngineeringKafkaConfigSubscriptionModeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FeatureEngineeringKafkaConfigSubscriptionMode | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assign !== undefined) {
      hasAnyValues = true;
      internalValueResult.assign = this._assign;
    }
    if (this._subscribe !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscribe = this._subscribe;
    }
    if (this._subscribePattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscribePattern = this._subscribePattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FeatureEngineeringKafkaConfigSubscriptionMode | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assign = undefined;
      this._subscribe = undefined;
      this._subscribePattern = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assign = value.assign;
      this._subscribe = value.subscribe;
      this._subscribePattern = value.subscribePattern;
    }
  }

  // assign - computed: false, optional: true, required: false
  private _assign?: string; 
  public get assign() {
    return this.getStringAttribute('assign');
  }
  public set assign(value: string) {
    this._assign = value;
  }
  public resetAssign() {
    this._assign = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignInput() {
    return this._assign;
  }

  // subscribe - computed: false, optional: true, required: false
  private _subscribe?: string; 
  public get subscribe() {
    return this.getStringAttribute('subscribe');
  }
  public set subscribe(value: string) {
    this._subscribe = value;
  }
  public resetSubscribe() {
    this._subscribe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscribeInput() {
    return this._subscribe;
  }

  // subscribe_pattern - computed: false, optional: true, required: false
  private _subscribePattern?: string; 
  public get subscribePattern() {
    return this.getStringAttribute('subscribe_pattern');
  }
  public set subscribePattern(value: string) {
    this._subscribePattern = value;
  }
  public resetSubscribePattern() {
    this._subscribePattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscribePatternInput() {
    return this._subscribePattern;
  }
}
export interface FeatureEngineeringKafkaConfigValueSchemaProtoSchema {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/feature_engineering_kafka_config#message_name FeatureEngineeringKafkaConfig#message_name}
  */
  readonly messageName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/feature_engineering_kafka_config#schema_text FeatureEngineeringKafkaConfig#schema_text}
  */
  readonly schemaText: string;
}

export function featureEngineeringKafkaConfigValueSchemaProtoSchemaToTerraform(struct?: FeatureEngineeringKafkaConfigValueSchemaProtoSchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    message_name: cdktn.stringToTerraform(struct!.messageName),
    schema_text: cdktn.stringToTerraform(struct!.schemaText),
  }
}


export function featureEngineeringKafkaConfigValueSchemaProtoSchemaToHclTerraform(struct?: FeatureEngineeringKafkaConfigValueSchemaProtoSchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    message_name: {
      value: cdktn.stringToHclTerraform(struct!.messageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_text: {
      value: cdktn.stringToHclTerraform(struct!.schemaText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FeatureEngineeringKafkaConfigValueSchemaProtoSchema | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._messageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageName = this._messageName;
    }
    if (this._schemaText !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaText = this._schemaText;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FeatureEngineeringKafkaConfigValueSchemaProtoSchema | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._messageName = undefined;
      this._schemaText = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._messageName = value.messageName;
      this._schemaText = value.schemaText;
    }
  }

  // message_name - computed: false, optional: false, required: true
  private _messageName?: string; 
  public get messageName() {
    return this.getStringAttribute('message_name');
  }
  public set messageName(value: string) {
    this._messageName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get messageNameInput() {
    return this._messageName;
  }

  // schema_text - computed: false, optional: false, required: true
  private _schemaText?: string; 
  public get schemaText() {
    return this.getStringAttribute('schema_text');
  }
  public set schemaText(value: string) {
    this._schemaText = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaTextInput() {
    return this._schemaText;
  }
}
export interface FeatureEngineeringKafkaConfigValueSchema {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/feature_engineering_kafka_config#avro_schema FeatureEngineeringKafkaConfig#avro_schema}
  */
  readonly avroSchema?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/feature_engineering_kafka_config#json_schema FeatureEngineeringKafkaConfig#json_schema}
  */
  readonly jsonSchema?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/feature_engineering_kafka_config#proto_schema FeatureEngineeringKafkaConfig#proto_schema}
  */
  readonly protoSchema?: FeatureEngineeringKafkaConfigValueSchemaProtoSchema;
}

export function featureEngineeringKafkaConfigValueSchemaToTerraform(struct?: FeatureEngineeringKafkaConfigValueSchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    avro_schema: cdktn.stringToTerraform(struct!.avroSchema),
    json_schema: cdktn.stringToTerraform(struct!.jsonSchema),
    proto_schema: featureEngineeringKafkaConfigValueSchemaProtoSchemaToTerraform(struct!.protoSchema),
  }
}


export function featureEngineeringKafkaConfigValueSchemaToHclTerraform(struct?: FeatureEngineeringKafkaConfigValueSchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    avro_schema: {
      value: cdktn.stringToHclTerraform(struct!.avroSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    json_schema: {
      value: cdktn.stringToHclTerraform(struct!.jsonSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proto_schema: {
      value: featureEngineeringKafkaConfigValueSchemaProtoSchemaToHclTerraform(struct!.protoSchema),
      isBlock: true,
      type: "struct",
      storageClassType: "FeatureEngineeringKafkaConfigValueSchemaProtoSchema",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FeatureEngineeringKafkaConfigValueSchemaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FeatureEngineeringKafkaConfigValueSchema | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._avroSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.avroSchema = this._avroSchema;
    }
    if (this._jsonSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonSchema = this._jsonSchema;
    }
    if (this._protoSchema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protoSchema = this._protoSchema?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FeatureEngineeringKafkaConfigValueSchema | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._avroSchema = undefined;
      this._jsonSchema = undefined;
      this._protoSchema.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._avroSchema = value.avroSchema;
      this._jsonSchema = value.jsonSchema;
      this._protoSchema.internalValue = value.protoSchema;
    }
  }

  // avro_schema - computed: false, optional: true, required: false
  private _avroSchema?: string; 
  public get avroSchema() {
    return this.getStringAttribute('avro_schema');
  }
  public set avroSchema(value: string) {
    this._avroSchema = value;
  }
  public resetAvroSchema() {
    this._avroSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avroSchemaInput() {
    return this._avroSchema;
  }

  // json_schema - computed: false, optional: true, required: false
  private _jsonSchema?: string; 
  public get jsonSchema() {
    return this.getStringAttribute('json_schema');
  }
  public set jsonSchema(value: string) {
    this._jsonSchema = value;
  }
  public resetJsonSchema() {
    this._jsonSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonSchemaInput() {
    return this._jsonSchema;
  }

  // proto_schema - computed: false, optional: true, required: false
  private _protoSchema = new FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference(this, "proto_schema");
  public get protoSchema() {
    return this._protoSchema;
  }
  public putProtoSchema(value: FeatureEngineeringKafkaConfigValueSchemaProtoSchema) {
    this._protoSchema.internalValue = value;
  }
  public resetProtoSchema() {
    this._protoSchema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protoSchemaInput() {
    return this._protoSchema.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/feature_engineering_kafka_config databricks_feature_engineering_kafka_config}
*/
export class FeatureEngineeringKafkaConfig extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_feature_engineering_kafka_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a FeatureEngineeringKafkaConfig resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FeatureEngineeringKafkaConfig to import
  * @param importFromId The id of the existing FeatureEngineeringKafkaConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/feature_engineering_kafka_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FeatureEngineeringKafkaConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_feature_engineering_kafka_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/feature_engineering_kafka_config databricks_feature_engineering_kafka_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FeatureEngineeringKafkaConfigConfig
  */
  public constructor(scope: Construct, id: string, config: FeatureEngineeringKafkaConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_feature_engineering_kafka_config',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.122.0',
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
    this._authConfig.internalValue = config.authConfig;
    this._backfillSource.internalValue = config.backfillSource;
    this._bootstrapServers = config.bootstrapServers;
    this._extraOptions = config.extraOptions;
    this._ingestionConfig.internalValue = config.ingestionConfig;
    this._keySchema.internalValue = config.keySchema;
    this._providerConfig.internalValue = config.providerConfig;
    this._subscriptionMode.internalValue = config.subscriptionMode;
    this._valueSchema.internalValue = config.valueSchema;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_config - computed: false, optional: false, required: true
  private _authConfig = new FeatureEngineeringKafkaConfigAuthConfigOutputReference(this, "auth_config");
  public get authConfig() {
    return this._authConfig;
  }
  public putAuthConfig(value: FeatureEngineeringKafkaConfigAuthConfig) {
    this._authConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authConfigInput() {
    return this._authConfig.internalValue;
  }

  // backfill_source - computed: false, optional: true, required: false
  private _backfillSource = new FeatureEngineeringKafkaConfigBackfillSourceOutputReference(this, "backfill_source");
  public get backfillSource() {
    return this._backfillSource;
  }
  public putBackfillSource(value: FeatureEngineeringKafkaConfigBackfillSource) {
    this._backfillSource.internalValue = value;
  }
  public resetBackfillSource() {
    this._backfillSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backfillSourceInput() {
    return this._backfillSource.internalValue;
  }

  // bootstrap_servers - computed: false, optional: false, required: true
  private _bootstrapServers?: string; 
  public get bootstrapServers() {
    return this.getStringAttribute('bootstrap_servers');
  }
  public set bootstrapServers(value: string) {
    this._bootstrapServers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapServersInput() {
    return this._bootstrapServers;
  }

  // extra_options - computed: false, optional: true, required: false
  private _extraOptions?: { [key: string]: string }; 
  public get extraOptions() {
    return this.getStringMapAttribute('extra_options');
  }
  public set extraOptions(value: { [key: string]: string }) {
    this._extraOptions = value;
  }
  public resetExtraOptions() {
    this._extraOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraOptionsInput() {
    return this._extraOptions;
  }

  // ingestion_config - computed: false, optional: true, required: false
  private _ingestionConfig = new FeatureEngineeringKafkaConfigIngestionConfigOutputReference(this, "ingestion_config");
  public get ingestionConfig() {
    return this._ingestionConfig;
  }
  public putIngestionConfig(value: FeatureEngineeringKafkaConfigIngestionConfig) {
    this._ingestionConfig.internalValue = value;
  }
  public resetIngestionConfig() {
    this._ingestionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingestionConfigInput() {
    return this._ingestionConfig.internalValue;
  }

  // key_schema - computed: false, optional: true, required: false
  private _keySchema = new FeatureEngineeringKafkaConfigKeySchemaOutputReference(this, "key_schema");
  public get keySchema() {
    return this._keySchema;
  }
  public putKeySchema(value: FeatureEngineeringKafkaConfigKeySchema) {
    this._keySchema.internalValue = value;
  }
  public resetKeySchema() {
    this._keySchema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keySchemaInput() {
    return this._keySchema.internalValue;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // provider_config - computed: true, optional: true, required: false
  private _providerConfig = new FeatureEngineeringKafkaConfigProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: FeatureEngineeringKafkaConfigProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // subscription_mode - computed: false, optional: false, required: true
  private _subscriptionMode = new FeatureEngineeringKafkaConfigSubscriptionModeOutputReference(this, "subscription_mode");
  public get subscriptionMode() {
    return this._subscriptionMode;
  }
  public putSubscriptionMode(value: FeatureEngineeringKafkaConfigSubscriptionMode) {
    this._subscriptionMode.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionModeInput() {
    return this._subscriptionMode.internalValue;
  }

  // value_schema - computed: false, optional: true, required: false
  private _valueSchema = new FeatureEngineeringKafkaConfigValueSchemaOutputReference(this, "value_schema");
  public get valueSchema() {
    return this._valueSchema;
  }
  public putValueSchema(value: FeatureEngineeringKafkaConfigValueSchema) {
    this._valueSchema.internalValue = value;
  }
  public resetValueSchema() {
    this._valueSchema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueSchemaInput() {
    return this._valueSchema.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_config: featureEngineeringKafkaConfigAuthConfigToTerraform(this._authConfig.internalValue),
      backfill_source: featureEngineeringKafkaConfigBackfillSourceToTerraform(this._backfillSource.internalValue),
      bootstrap_servers: cdktn.stringToTerraform(this._bootstrapServers),
      extra_options: cdktn.hashMapper(cdktn.stringToTerraform)(this._extraOptions),
      ingestion_config: featureEngineeringKafkaConfigIngestionConfigToTerraform(this._ingestionConfig.internalValue),
      key_schema: featureEngineeringKafkaConfigKeySchemaToTerraform(this._keySchema.internalValue),
      provider_config: featureEngineeringKafkaConfigProviderConfigToTerraform(this._providerConfig.internalValue),
      subscription_mode: featureEngineeringKafkaConfigSubscriptionModeToTerraform(this._subscriptionMode.internalValue),
      value_schema: featureEngineeringKafkaConfigValueSchemaToTerraform(this._valueSchema.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_config: {
        value: featureEngineeringKafkaConfigAuthConfigToHclTerraform(this._authConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FeatureEngineeringKafkaConfigAuthConfig",
      },
      backfill_source: {
        value: featureEngineeringKafkaConfigBackfillSourceToHclTerraform(this._backfillSource.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FeatureEngineeringKafkaConfigBackfillSource",
      },
      bootstrap_servers: {
        value: cdktn.stringToHclTerraform(this._bootstrapServers),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extra_options: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._extraOptions),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      ingestion_config: {
        value: featureEngineeringKafkaConfigIngestionConfigToHclTerraform(this._ingestionConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FeatureEngineeringKafkaConfigIngestionConfig",
      },
      key_schema: {
        value: featureEngineeringKafkaConfigKeySchemaToHclTerraform(this._keySchema.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FeatureEngineeringKafkaConfigKeySchema",
      },
      provider_config: {
        value: featureEngineeringKafkaConfigProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FeatureEngineeringKafkaConfigProviderConfig",
      },
      subscription_mode: {
        value: featureEngineeringKafkaConfigSubscriptionModeToHclTerraform(this._subscriptionMode.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FeatureEngineeringKafkaConfigSubscriptionMode",
      },
      value_schema: {
        value: featureEngineeringKafkaConfigValueSchemaToHclTerraform(this._valueSchema.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FeatureEngineeringKafkaConfigValueSchema",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
