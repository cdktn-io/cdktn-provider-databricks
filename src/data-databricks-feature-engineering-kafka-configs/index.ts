/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataDatabricksFeatureEngineeringKafkaConfigsConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#page_size DataDatabricksFeatureEngineeringKafkaConfigs#page_size}
  */
  readonly pageSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#provider_config DataDatabricksFeatureEngineeringKafkaConfigs#provider_config}
  */
  readonly providerConfig?: DataDatabricksFeatureEngineeringKafkaConfigsProviderConfig;
}
export interface DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#key DataDatabricksFeatureEngineeringKafkaConfigs#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#scope DataDatabricksFeatureEngineeringKafkaConfigs#scope}
  */
  readonly scope: string;
}

export function dataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRefToTerraform(struct?: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRef): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    scope: cdktn.stringToTerraform(struct!.scope),
  }
}


export function dataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRefToHclTerraform(struct?: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRef): any {
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

export class DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRefOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRef | undefined {
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

  public set internalValue(value: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._scope = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._scope = value.scope;
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

  // scope - computed: true, optional: false, required: true
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
export interface DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#key DataDatabricksFeatureEngineeringKafkaConfigs#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#scope DataDatabricksFeatureEngineeringKafkaConfigs#scope}
  */
  readonly scope: string;
}

export function dataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRefToTerraform(struct?: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRef): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    scope: cdktn.stringToTerraform(struct!.scope),
  }
}


export function dataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRefToHclTerraform(struct?: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRef): any {
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

export class DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRefOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRef | undefined {
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

  public set internalValue(value: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._scope = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._scope = value.scope;
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

  // scope - computed: true, optional: false, required: true
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
export interface DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#key DataDatabricksFeatureEngineeringKafkaConfigs#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#scope DataDatabricksFeatureEngineeringKafkaConfigs#scope}
  */
  readonly scope: string;
}

export function dataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRefToTerraform(struct?: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRef): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    scope: cdktn.stringToTerraform(struct!.scope),
  }
}


export function dataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRefToHclTerraform(struct?: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRef): any {
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

export class DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRefOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRef | undefined {
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

  public set internalValue(value: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._scope = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._scope = value.scope;
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

  // scope - computed: true, optional: false, required: true
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
export interface DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#disable_hostname_verification DataDatabricksFeatureEngineeringKafkaConfigs#disable_hostname_verification}
  */
  readonly disableHostnameVerification?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#key_password_ref DataDatabricksFeatureEngineeringKafkaConfigs#key_password_ref}
  */
  readonly keyPasswordRef: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#keystore_location DataDatabricksFeatureEngineeringKafkaConfigs#keystore_location}
  */
  readonly keystoreLocation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#keystore_password_ref DataDatabricksFeatureEngineeringKafkaConfigs#keystore_password_ref}
  */
  readonly keystorePasswordRef: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#truststore_location DataDatabricksFeatureEngineeringKafkaConfigs#truststore_location}
  */
  readonly truststoreLocation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#truststore_password_ref DataDatabricksFeatureEngineeringKafkaConfigs#truststore_password_ref}
  */
  readonly truststorePasswordRef: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRef;
}

export function dataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigToTerraform(struct?: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    disable_hostname_verification: cdktn.booleanToTerraform(struct!.disableHostnameVerification),
    key_password_ref: dataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRefToTerraform(struct!.keyPasswordRef),
    keystore_location: cdktn.stringToTerraform(struct!.keystoreLocation),
    keystore_password_ref: dataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRefToTerraform(struct!.keystorePasswordRef),
    truststore_location: cdktn.stringToTerraform(struct!.truststoreLocation),
    truststore_password_ref: dataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRefToTerraform(struct!.truststorePasswordRef),
  }
}


export function dataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigToHclTerraform(struct?: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfig | cdktn.IResolvable): any {
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
      value: dataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRefToHclTerraform(struct!.keyPasswordRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRef",
    },
    keystore_location: {
      value: cdktn.stringToHclTerraform(struct!.keystoreLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keystore_password_ref: {
      value: dataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRefToHclTerraform(struct!.keystorePasswordRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRef",
    },
    truststore_location: {
      value: cdktn.stringToHclTerraform(struct!.truststoreLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    truststore_password_ref: {
      value: dataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRefToHclTerraform(struct!.truststorePasswordRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfig | cdktn.IResolvable | undefined) {
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

  // disable_hostname_verification - computed: true, optional: true, required: false
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

  // key_password_ref - computed: true, optional: false, required: true
  private _keyPasswordRef = new DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRefOutputReference(this, "key_password_ref");
  public get keyPasswordRef() {
    return this._keyPasswordRef;
  }
  public putKeyPasswordRef(value: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRef) {
    this._keyPasswordRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPasswordRefInput() {
    return this._keyPasswordRef.internalValue;
  }

  // keystore_location - computed: true, optional: false, required: true
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

  // keystore_password_ref - computed: true, optional: false, required: true
  private _keystorePasswordRef = new DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRefOutputReference(this, "keystore_password_ref");
  public get keystorePasswordRef() {
    return this._keystorePasswordRef;
  }
  public putKeystorePasswordRef(value: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRef) {
    this._keystorePasswordRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keystorePasswordRefInput() {
    return this._keystorePasswordRef.internalValue;
  }

  // truststore_location - computed: true, optional: false, required: true
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

  // truststore_password_ref - computed: true, optional: false, required: true
  private _truststorePasswordRef = new DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRefOutputReference(this, "truststore_password_ref");
  public get truststorePasswordRef() {
    return this._truststorePasswordRef;
  }
  public putTruststorePasswordRef(value: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRef) {
    this._truststorePasswordRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get truststorePasswordRefInput() {
    return this._truststorePasswordRef.internalValue;
  }
}
export interface DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#mtls_config DataDatabricksFeatureEngineeringKafkaConfigs#mtls_config}
  */
  readonly mtlsConfig?: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#uc_service_credential_name DataDatabricksFeatureEngineeringKafkaConfigs#uc_service_credential_name}
  */
  readonly ucServiceCredentialName?: string;
}

export function dataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigToTerraform(struct?: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mtls_config: dataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigToTerraform(struct!.mtlsConfig),
    uc_service_credential_name: cdktn.stringToTerraform(struct!.ucServiceCredentialName),
  }
}


export function dataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigToHclTerraform(struct?: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    mtls_config: {
      value: dataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigToHclTerraform(struct!.mtlsConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfig",
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

export class DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfig | undefined {
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

  public set internalValue(value: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mtlsConfig.internalValue = undefined;
      this._ucServiceCredentialName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mtlsConfig.internalValue = value.mtlsConfig;
      this._ucServiceCredentialName = value.ucServiceCredentialName;
    }
  }

  // mtls_config - computed: true, optional: true, required: false
  private _mtlsConfig = new DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference(this, "mtls_config");
  public get mtlsConfig() {
    return this._mtlsConfig;
  }
  public putMtlsConfig(value: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfig) {
    this._mtlsConfig.internalValue = value;
  }
  public resetMtlsConfig() {
    this._mtlsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtlsConfigInput() {
    return this._mtlsConfig.internalValue;
  }

  // uc_service_credential_name - computed: true, optional: true, required: false
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
export interface DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#dataframe_schema DataDatabricksFeatureEngineeringKafkaConfigs#dataframe_schema}
  */
  readonly dataframeSchema?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#entity_columns DataDatabricksFeatureEngineeringKafkaConfigs#entity_columns}
  */
  readonly entityColumns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#filter_condition DataDatabricksFeatureEngineeringKafkaConfigs#filter_condition}
  */
  readonly filterCondition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#full_name DataDatabricksFeatureEngineeringKafkaConfigs#full_name}
  */
  readonly fullName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#timeseries_column DataDatabricksFeatureEngineeringKafkaConfigs#timeseries_column}
  */
  readonly timeseriesColumn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#transformation_sql DataDatabricksFeatureEngineeringKafkaConfigs#transformation_sql}
  */
  readonly transformationSql?: string;
}

export function dataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceToTerraform(struct?: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSource | cdktn.IResolvable): any {
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


export function dataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceToHclTerraform(struct?: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSource | cdktn.IResolvable): any {
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

export class DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSource | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSource | cdktn.IResolvable | undefined) {
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

  // dataframe_schema - computed: true, optional: true, required: false
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

  // entity_columns - computed: true, optional: true, required: false
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

  // filter_condition - computed: true, optional: true, required: false
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

  // full_name - computed: true, optional: false, required: true
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

  // timeseries_column - computed: true, optional: true, required: false
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

  // transformation_sql - computed: true, optional: true, required: false
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
export interface DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#delta_table_name DataDatabricksFeatureEngineeringKafkaConfigs#delta_table_name}
  */
  readonly deltaTableName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#delta_table_source DataDatabricksFeatureEngineeringKafkaConfigs#delta_table_source}
  */
  readonly deltaTableSource?: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSource;
}

export function dataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceToTerraform(struct?: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    delta_table_name: cdktn.stringToTerraform(struct!.deltaTableName),
    delta_table_source: dataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceToTerraform(struct!.deltaTableSource),
  }
}


export function dataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceToHclTerraform(struct?: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSource): any {
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
      value: dataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceToHclTerraform(struct!.deltaTableSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSource | undefined {
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

  public set internalValue(value: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deltaTableName = undefined;
      this._deltaTableSource.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deltaTableName = value.deltaTableName;
      this._deltaTableSource.internalValue = value.deltaTableSource;
    }
  }

  // delta_table_name - computed: true, optional: true, required: false
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

  // delta_table_source - computed: true, optional: true, required: false
  private _deltaTableSource = new DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference(this, "delta_table_source");
  public get deltaTableSource() {
    return this._deltaTableSource;
  }
  public putDeltaTableSource(value: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSource) {
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
export interface DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#dataframe_schema DataDatabricksFeatureEngineeringKafkaConfigs#dataframe_schema}
  */
  readonly dataframeSchema?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#entity_columns DataDatabricksFeatureEngineeringKafkaConfigs#entity_columns}
  */
  readonly entityColumns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#filter_condition DataDatabricksFeatureEngineeringKafkaConfigs#filter_condition}
  */
  readonly filterCondition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#full_name DataDatabricksFeatureEngineeringKafkaConfigs#full_name}
  */
  readonly fullName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#timeseries_column DataDatabricksFeatureEngineeringKafkaConfigs#timeseries_column}
  */
  readonly timeseriesColumn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#transformation_sql DataDatabricksFeatureEngineeringKafkaConfigs#transformation_sql}
  */
  readonly transformationSql?: string;
}

export function dataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceToTerraform(struct?: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSource | cdktn.IResolvable): any {
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


export function dataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceToHclTerraform(struct?: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSource | cdktn.IResolvable): any {
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

export class DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSource | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSource | cdktn.IResolvable | undefined) {
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

  // dataframe_schema - computed: true, optional: true, required: false
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

  // entity_columns - computed: true, optional: true, required: false
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

  // filter_condition - computed: true, optional: true, required: false
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

  // full_name - computed: true, optional: false, required: true
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

  // timeseries_column - computed: true, optional: true, required: false
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

  // transformation_sql - computed: true, optional: true, required: false
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
export interface DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#delta_table_name DataDatabricksFeatureEngineeringKafkaConfigs#delta_table_name}
  */
  readonly deltaTableName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#delta_table_source DataDatabricksFeatureEngineeringKafkaConfigs#delta_table_source}
  */
  readonly deltaTableSource?: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSource;
}

export function dataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceToTerraform(struct?: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    delta_table_name: cdktn.stringToTerraform(struct!.deltaTableName),
    delta_table_source: dataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceToTerraform(struct!.deltaTableSource),
  }
}


export function dataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceToHclTerraform(struct?: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSource | cdktn.IResolvable): any {
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
      value: dataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceToHclTerraform(struct!.deltaTableSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSource | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSource | cdktn.IResolvable | undefined) {
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

  // delta_table_name - computed: true, optional: true, required: false
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

  // delta_table_source - computed: true, optional: true, required: false
  private _deltaTableSource = new DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference(this, "delta_table_source");
  public get deltaTableSource() {
    return this._deltaTableSource;
  }
  public putDeltaTableSource(value: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSource) {
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
export interface DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestination {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#delta_table_name DataDatabricksFeatureEngineeringKafkaConfigs#delta_table_name}
  */
  readonly deltaTableName?: string;
}

export function dataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestinationToTerraform(struct?: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    delta_table_name: cdktn.stringToTerraform(struct!.deltaTableName),
  }
}


export function dataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestinationToHclTerraform(struct?: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestination): any {
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

export class DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deltaTableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deltaTableName = this._deltaTableName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deltaTableName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deltaTableName = value.deltaTableName;
    }
  }

  // delta_table_name - computed: true, optional: true, required: false
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
export interface DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#backfill_source DataDatabricksFeatureEngineeringKafkaConfigs#backfill_source}
  */
  readonly backfillSource?: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSource;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#deduplication_columns DataDatabricksFeatureEngineeringKafkaConfigs#deduplication_columns}
  */
  readonly deduplicationColumns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#ingestion_destination DataDatabricksFeatureEngineeringKafkaConfigs#ingestion_destination}
  */
  readonly ingestionDestination: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestination;
}

export function dataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigToTerraform(struct?: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    backfill_source: dataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceToTerraform(struct!.backfillSource),
    deduplication_columns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.deduplicationColumns),
    ingestion_destination: dataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestinationToTerraform(struct!.ingestionDestination),
  }
}


export function dataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigToHclTerraform(struct?: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    backfill_source: {
      value: dataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceToHclTerraform(struct!.backfillSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSource",
    },
    deduplication_columns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.deduplicationColumns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ingestion_destination: {
      value: dataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestinationToHclTerraform(struct!.ingestionDestination),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestination",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfig | undefined {
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

  public set internalValue(value: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backfillSource.internalValue = undefined;
      this._deduplicationColumns = undefined;
      this._ingestionDestination.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backfillSource.internalValue = value.backfillSource;
      this._deduplicationColumns = value.deduplicationColumns;
      this._ingestionDestination.internalValue = value.ingestionDestination;
    }
  }

  // backfill_job_id - computed: true, optional: false, required: false
  public get backfillJobId() {
    return this.getNumberAttribute('backfill_job_id');
  }

  // backfill_source - computed: true, optional: true, required: false
  private _backfillSource = new DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference(this, "backfill_source");
  public get backfillSource() {
    return this._backfillSource;
  }
  public putBackfillSource(value: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSource) {
    this._backfillSource.internalValue = value;
  }
  public resetBackfillSource() {
    this._backfillSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backfillSourceInput() {
    return this._backfillSource.internalValue;
  }

  // deduplication_columns - computed: true, optional: true, required: false
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

  // ingestion_destination - computed: true, optional: false, required: true
  private _ingestionDestination = new DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestinationOutputReference(this, "ingestion_destination");
  public get ingestionDestination() {
    return this._ingestionDestination;
  }
  public putIngestionDestination(value: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestination) {
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
export interface DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchema {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#json_schema DataDatabricksFeatureEngineeringKafkaConfigs#json_schema}
  */
  readonly jsonSchema?: string;
}

export function dataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchemaToTerraform(struct?: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    json_schema: cdktn.stringToTerraform(struct!.jsonSchema),
  }
}


export function dataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchemaToHclTerraform(struct?: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    json_schema: {
      value: cdktn.stringToHclTerraform(struct!.jsonSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchemaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jsonSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonSchema = this._jsonSchema;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jsonSchema = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jsonSchema = value.jsonSchema;
    }
  }

  // json_schema - computed: true, optional: true, required: false
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
}
export interface DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#workspace_id DataDatabricksFeatureEngineeringKafkaConfigs#workspace_id}
  */
  readonly workspaceId?: string;
}

export function dataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfigToTerraform(struct?: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function dataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfigToHclTerraform(struct?: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfig | cdktn.IResolvable): any {
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

export class DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfig | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionMode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#assign DataDatabricksFeatureEngineeringKafkaConfigs#assign}
  */
  readonly assign?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#subscribe DataDatabricksFeatureEngineeringKafkaConfigs#subscribe}
  */
  readonly subscribe?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#subscribe_pattern DataDatabricksFeatureEngineeringKafkaConfigs#subscribe_pattern}
  */
  readonly subscribePattern?: string;
}

export function dataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeToTerraform(struct?: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionMode): any {
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


export function dataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeToHclTerraform(struct?: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionMode): any {
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

export class DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionMode | undefined {
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

  public set internalValue(value: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._assign = undefined;
      this._subscribe = undefined;
      this._subscribePattern = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._assign = value.assign;
      this._subscribe = value.subscribe;
      this._subscribePattern = value.subscribePattern;
    }
  }

  // assign - computed: true, optional: true, required: false
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

  // subscribe - computed: true, optional: true, required: false
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

  // subscribe_pattern - computed: true, optional: true, required: false
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
export interface DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchema {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#json_schema DataDatabricksFeatureEngineeringKafkaConfigs#json_schema}
  */
  readonly jsonSchema?: string;
}

export function dataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchemaToTerraform(struct?: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    json_schema: cdktn.stringToTerraform(struct!.jsonSchema),
  }
}


export function dataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchemaToHclTerraform(struct?: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    json_schema: {
      value: cdktn.stringToHclTerraform(struct!.jsonSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchemaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jsonSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonSchema = this._jsonSchema;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jsonSchema = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jsonSchema = value.jsonSchema;
    }
  }

  // json_schema - computed: true, optional: true, required: false
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
}
export interface DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#name DataDatabricksFeatureEngineeringKafkaConfigs#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#provider_config DataDatabricksFeatureEngineeringKafkaConfigs#provider_config}
  */
  readonly providerConfig?: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfig;
}

export function dataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsToTerraform(struct?: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    provider_config: dataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfigToTerraform(struct!.providerConfig),
  }
}


export function dataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsToHclTerraform(struct?: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigs): any {
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
      value: dataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfigToHclTerraform(struct!.providerConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigs | undefined {
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

  public set internalValue(value: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigs | undefined) {
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

  // auth_config - computed: true, optional: false, required: false
  private _authConfig = new DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference(this, "auth_config");
  public get authConfig() {
    return this._authConfig;
  }

  // backfill_source - computed: true, optional: false, required: false
  private _backfillSource = new DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference(this, "backfill_source");
  public get backfillSource() {
    return this._backfillSource;
  }

  // bootstrap_servers - computed: true, optional: false, required: false
  public get bootstrapServers() {
    return this.getStringAttribute('bootstrap_servers');
  }

  // extra_options - computed: true, optional: false, required: false
  private _extraOptions = new cdktn.StringMap(this, "extra_options");
  public get extraOptions() {
    return this._extraOptions;
  }

  // ingestion_config - computed: true, optional: false, required: false
  private _ingestionConfig = new DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference(this, "ingestion_config");
  public get ingestionConfig() {
    return this._ingestionConfig;
  }

  // key_schema - computed: true, optional: false, required: false
  private _keySchema = new DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchemaOutputReference(this, "key_schema");
  public get keySchema() {
    return this._keySchema;
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
  private _providerConfig = new DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // subscription_mode - computed: true, optional: false, required: false
  private _subscriptionMode = new DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference(this, "subscription_mode");
  public get subscriptionMode() {
    return this._subscriptionMode;
  }

  // value_schema - computed: true, optional: false, required: false
  private _valueSchema = new DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchemaOutputReference(this, "value_schema");
  public get valueSchema() {
    return this._valueSchema;
  }
}

export class DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigs[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference {
    return new DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksFeatureEngineeringKafkaConfigsProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#workspace_id DataDatabricksFeatureEngineeringKafkaConfigs#workspace_id}
  */
  readonly workspaceId?: string;
}

export function dataDatabricksFeatureEngineeringKafkaConfigsProviderConfigToTerraform(struct?: DataDatabricksFeatureEngineeringKafkaConfigsProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function dataDatabricksFeatureEngineeringKafkaConfigsProviderConfigToHclTerraform(struct?: DataDatabricksFeatureEngineeringKafkaConfigsProviderConfig | cdktn.IResolvable): any {
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

export class DataDatabricksFeatureEngineeringKafkaConfigsProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringKafkaConfigsProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksFeatureEngineeringKafkaConfigsProviderConfig | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs databricks_feature_engineering_kafka_configs}
*/
export class DataDatabricksFeatureEngineeringKafkaConfigs extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_feature_engineering_kafka_configs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataDatabricksFeatureEngineeringKafkaConfigs resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksFeatureEngineeringKafkaConfigs to import
  * @param importFromId The id of the existing DataDatabricksFeatureEngineeringKafkaConfigs that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksFeatureEngineeringKafkaConfigs to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_feature_engineering_kafka_configs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs databricks_feature_engineering_kafka_configs} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksFeatureEngineeringKafkaConfigsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksFeatureEngineeringKafkaConfigsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_feature_engineering_kafka_configs',
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
    this._providerConfig.internalValue = config.providerConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // kafka_configs - computed: true, optional: false, required: false
  private _kafkaConfigs = new DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsList(this, "kafka_configs", false);
  public get kafkaConfigs() {
    return this._kafkaConfigs;
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

  // provider_config - computed: false, optional: true, required: false
  private _providerConfig = new DataDatabricksFeatureEngineeringKafkaConfigsProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataDatabricksFeatureEngineeringKafkaConfigsProviderConfig) {
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
      provider_config: dataDatabricksFeatureEngineeringKafkaConfigsProviderConfigToTerraform(this._providerConfig.internalValue),
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
      provider_config: {
        value: dataDatabricksFeatureEngineeringKafkaConfigsProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataDatabricksFeatureEngineeringKafkaConfigsProviderConfig",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
