/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/catalog
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CatalogConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/catalog#browse_only Catalog#browse_only}
  */
  readonly browseOnly?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/catalog#comment Catalog#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/catalog#connection_name Catalog#connection_name}
  */
  readonly connectionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/catalog#custom_max_retention_hours Catalog#custom_max_retention_hours}
  */
  readonly customMaxRetentionHours?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/catalog#enable_predictive_optimization Catalog#enable_predictive_optimization}
  */
  readonly enablePredictiveOptimization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/catalog#force_destroy Catalog#force_destroy}
  */
  readonly forceDestroy?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/catalog#id Catalog#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/catalog#isolation_mode Catalog#isolation_mode}
  */
  readonly isolationMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/catalog#metastore_id Catalog#metastore_id}
  */
  readonly metastoreId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/catalog#name Catalog#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/catalog#options Catalog#options}
  */
  readonly options?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/catalog#owner Catalog#owner}
  */
  readonly owner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/catalog#properties Catalog#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/catalog#provider_name Catalog#provider_name}
  */
  readonly providerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/catalog#share_name Catalog#share_name}
  */
  readonly shareName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/catalog#storage_root Catalog#storage_root}
  */
  readonly storageRoot?: string;
  /**
  * effective_predictive_optimization_flag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/catalog#effective_predictive_optimization_flag Catalog#effective_predictive_optimization_flag}
  */
  readonly effectivePredictiveOptimizationFlag?: CatalogEffectivePredictiveOptimizationFlag;
  /**
  * managed_encryption_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/catalog#managed_encryption_settings Catalog#managed_encryption_settings}
  */
  readonly managedEncryptionSettings?: CatalogManagedEncryptionSettings;
  /**
  * provider_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/catalog#provider_config Catalog#provider_config}
  */
  readonly providerConfig?: CatalogProviderConfig;
  /**
  * provisioning_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/catalog#provisioning_info Catalog#provisioning_info}
  */
  readonly provisioningInfo?: CatalogProvisioningInfo;
}
export interface CatalogEffectivePredictiveOptimizationFlag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/catalog#inherited_from_name Catalog#inherited_from_name}
  */
  readonly inheritedFromName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/catalog#inherited_from_type Catalog#inherited_from_type}
  */
  readonly inheritedFromType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/catalog#value Catalog#value}
  */
  readonly value: string;
}

export function catalogEffectivePredictiveOptimizationFlagToTerraform(struct?: CatalogEffectivePredictiveOptimizationFlagOutputReference | CatalogEffectivePredictiveOptimizationFlag): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    inherited_from_name: cdktn.stringToTerraform(struct!.inheritedFromName),
    inherited_from_type: cdktn.stringToTerraform(struct!.inheritedFromType),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function catalogEffectivePredictiveOptimizationFlagToHclTerraform(struct?: CatalogEffectivePredictiveOptimizationFlagOutputReference | CatalogEffectivePredictiveOptimizationFlag): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    inherited_from_name: {
      value: cdktn.stringToHclTerraform(struct!.inheritedFromName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inherited_from_type: {
      value: cdktn.stringToHclTerraform(struct!.inheritedFromType),
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

export class CatalogEffectivePredictiveOptimizationFlagOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CatalogEffectivePredictiveOptimizationFlag | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inheritedFromName !== undefined) {
      hasAnyValues = true;
      internalValueResult.inheritedFromName = this._inheritedFromName;
    }
    if (this._inheritedFromType !== undefined) {
      hasAnyValues = true;
      internalValueResult.inheritedFromType = this._inheritedFromType;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CatalogEffectivePredictiveOptimizationFlag | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inheritedFromName = undefined;
      this._inheritedFromType = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inheritedFromName = value.inheritedFromName;
      this._inheritedFromType = value.inheritedFromType;
      this._value = value.value;
    }
  }

  // inherited_from_name - computed: false, optional: true, required: false
  private _inheritedFromName?: string; 
  public get inheritedFromName() {
    return this.getStringAttribute('inherited_from_name');
  }
  public set inheritedFromName(value: string) {
    this._inheritedFromName = value;
  }
  public resetInheritedFromName() {
    this._inheritedFromName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritedFromNameInput() {
    return this._inheritedFromName;
  }

  // inherited_from_type - computed: false, optional: true, required: false
  private _inheritedFromType?: string; 
  public get inheritedFromType() {
    return this.getStringAttribute('inherited_from_type');
  }
  public set inheritedFromType(value: string) {
    this._inheritedFromType = value;
  }
  public resetInheritedFromType() {
    this._inheritedFromType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritedFromTypeInput() {
    return this._inheritedFromType;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface CatalogManagedEncryptionSettingsAzureEncryptionSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/catalog#azure_cmk_access_connector_id Catalog#azure_cmk_access_connector_id}
  */
  readonly azureCmkAccessConnectorId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/catalog#azure_cmk_managed_identity_id Catalog#azure_cmk_managed_identity_id}
  */
  readonly azureCmkManagedIdentityId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/catalog#azure_tenant_id Catalog#azure_tenant_id}
  */
  readonly azureTenantId: string;
}

export function catalogManagedEncryptionSettingsAzureEncryptionSettingsToTerraform(struct?: CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference | CatalogManagedEncryptionSettingsAzureEncryptionSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    azure_cmk_access_connector_id: cdktn.stringToTerraform(struct!.azureCmkAccessConnectorId),
    azure_cmk_managed_identity_id: cdktn.stringToTerraform(struct!.azureCmkManagedIdentityId),
    azure_tenant_id: cdktn.stringToTerraform(struct!.azureTenantId),
  }
}


export function catalogManagedEncryptionSettingsAzureEncryptionSettingsToHclTerraform(struct?: CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference | CatalogManagedEncryptionSettingsAzureEncryptionSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    azure_cmk_access_connector_id: {
      value: cdktn.stringToHclTerraform(struct!.azureCmkAccessConnectorId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_cmk_managed_identity_id: {
      value: cdktn.stringToHclTerraform(struct!.azureCmkManagedIdentityId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_tenant_id: {
      value: cdktn.stringToHclTerraform(struct!.azureTenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CatalogManagedEncryptionSettingsAzureEncryptionSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azureCmkAccessConnectorId !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureCmkAccessConnectorId = this._azureCmkAccessConnectorId;
    }
    if (this._azureCmkManagedIdentityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureCmkManagedIdentityId = this._azureCmkManagedIdentityId;
    }
    if (this._azureTenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureTenantId = this._azureTenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CatalogManagedEncryptionSettingsAzureEncryptionSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._azureCmkAccessConnectorId = undefined;
      this._azureCmkManagedIdentityId = undefined;
      this._azureTenantId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._azureCmkAccessConnectorId = value.azureCmkAccessConnectorId;
      this._azureCmkManagedIdentityId = value.azureCmkManagedIdentityId;
      this._azureTenantId = value.azureTenantId;
    }
  }

  // azure_cmk_access_connector_id - computed: false, optional: true, required: false
  private _azureCmkAccessConnectorId?: string; 
  public get azureCmkAccessConnectorId() {
    return this.getStringAttribute('azure_cmk_access_connector_id');
  }
  public set azureCmkAccessConnectorId(value: string) {
    this._azureCmkAccessConnectorId = value;
  }
  public resetAzureCmkAccessConnectorId() {
    this._azureCmkAccessConnectorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureCmkAccessConnectorIdInput() {
    return this._azureCmkAccessConnectorId;
  }

  // azure_cmk_managed_identity_id - computed: false, optional: true, required: false
  private _azureCmkManagedIdentityId?: string; 
  public get azureCmkManagedIdentityId() {
    return this.getStringAttribute('azure_cmk_managed_identity_id');
  }
  public set azureCmkManagedIdentityId(value: string) {
    this._azureCmkManagedIdentityId = value;
  }
  public resetAzureCmkManagedIdentityId() {
    this._azureCmkManagedIdentityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureCmkManagedIdentityIdInput() {
    return this._azureCmkManagedIdentityId;
  }

  // azure_tenant_id - computed: false, optional: false, required: true
  private _azureTenantId?: string; 
  public get azureTenantId() {
    return this.getStringAttribute('azure_tenant_id');
  }
  public set azureTenantId(value: string) {
    this._azureTenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azureTenantIdInput() {
    return this._azureTenantId;
  }
}
export interface CatalogManagedEncryptionSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/catalog#azure_key_vault_key_id Catalog#azure_key_vault_key_id}
  */
  readonly azureKeyVaultKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/catalog#customer_managed_key_id Catalog#customer_managed_key_id}
  */
  readonly customerManagedKeyId?: string;
  /**
  * azure_encryption_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/catalog#azure_encryption_settings Catalog#azure_encryption_settings}
  */
  readonly azureEncryptionSettings?: CatalogManagedEncryptionSettingsAzureEncryptionSettings;
}

export function catalogManagedEncryptionSettingsToTerraform(struct?: CatalogManagedEncryptionSettingsOutputReference | CatalogManagedEncryptionSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    azure_key_vault_key_id: cdktn.stringToTerraform(struct!.azureKeyVaultKeyId),
    customer_managed_key_id: cdktn.stringToTerraform(struct!.customerManagedKeyId),
    azure_encryption_settings: catalogManagedEncryptionSettingsAzureEncryptionSettingsToTerraform(struct!.azureEncryptionSettings),
  }
}


export function catalogManagedEncryptionSettingsToHclTerraform(struct?: CatalogManagedEncryptionSettingsOutputReference | CatalogManagedEncryptionSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    azure_key_vault_key_id: {
      value: cdktn.stringToHclTerraform(struct!.azureKeyVaultKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    customer_managed_key_id: {
      value: cdktn.stringToHclTerraform(struct!.customerManagedKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_encryption_settings: {
      value: catalogManagedEncryptionSettingsAzureEncryptionSettingsToHclTerraform(struct!.azureEncryptionSettings),
      isBlock: true,
      type: "list",
      storageClassType: "CatalogManagedEncryptionSettingsAzureEncryptionSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CatalogManagedEncryptionSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CatalogManagedEncryptionSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azureKeyVaultKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureKeyVaultKeyId = this._azureKeyVaultKeyId;
    }
    if (this._customerManagedKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerManagedKeyId = this._customerManagedKeyId;
    }
    if (this._azureEncryptionSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureEncryptionSettings = this._azureEncryptionSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CatalogManagedEncryptionSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._azureKeyVaultKeyId = undefined;
      this._customerManagedKeyId = undefined;
      this._azureEncryptionSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._azureKeyVaultKeyId = value.azureKeyVaultKeyId;
      this._customerManagedKeyId = value.customerManagedKeyId;
      this._azureEncryptionSettings.internalValue = value.azureEncryptionSettings;
    }
  }

  // azure_key_vault_key_id - computed: false, optional: true, required: false
  private _azureKeyVaultKeyId?: string; 
  public get azureKeyVaultKeyId() {
    return this.getStringAttribute('azure_key_vault_key_id');
  }
  public set azureKeyVaultKeyId(value: string) {
    this._azureKeyVaultKeyId = value;
  }
  public resetAzureKeyVaultKeyId() {
    this._azureKeyVaultKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureKeyVaultKeyIdInput() {
    return this._azureKeyVaultKeyId;
  }

  // customer_managed_key_id - computed: false, optional: true, required: false
  private _customerManagedKeyId?: string; 
  public get customerManagedKeyId() {
    return this.getStringAttribute('customer_managed_key_id');
  }
  public set customerManagedKeyId(value: string) {
    this._customerManagedKeyId = value;
  }
  public resetCustomerManagedKeyId() {
    this._customerManagedKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerManagedKeyIdInput() {
    return this._customerManagedKeyId;
  }

  // azure_encryption_settings - computed: false, optional: true, required: false
  private _azureEncryptionSettings = new CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference(this, "azure_encryption_settings");
  public get azureEncryptionSettings() {
    return this._azureEncryptionSettings;
  }
  public putAzureEncryptionSettings(value: CatalogManagedEncryptionSettingsAzureEncryptionSettings) {
    this._azureEncryptionSettings.internalValue = value;
  }
  public resetAzureEncryptionSettings() {
    this._azureEncryptionSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureEncryptionSettingsInput() {
    return this._azureEncryptionSettings.internalValue;
  }
}
export interface CatalogProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/catalog#workspace_id Catalog#workspace_id}
  */
  readonly workspaceId?: string;
}

export function catalogProviderConfigToTerraform(struct?: CatalogProviderConfigOutputReference | CatalogProviderConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function catalogProviderConfigToHclTerraform(struct?: CatalogProviderConfigOutputReference | CatalogProviderConfig): any {
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

export class CatalogProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CatalogProviderConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceId = this._workspaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CatalogProviderConfig | undefined) {
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
export interface CatalogProvisioningInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/catalog#state Catalog#state}
  */
  readonly state?: string;
}

export function catalogProvisioningInfoToTerraform(struct?: CatalogProvisioningInfoOutputReference | CatalogProvisioningInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    state: cdktn.stringToTerraform(struct!.state),
  }
}


export function catalogProvisioningInfoToHclTerraform(struct?: CatalogProvisioningInfoOutputReference | CatalogProvisioningInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    state: {
      value: cdktn.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CatalogProvisioningInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CatalogProvisioningInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CatalogProvisioningInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._state = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._state = value.state;
    }
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/catalog databricks_catalog}
*/
export class Catalog extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_catalog";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Catalog resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Catalog to import
  * @param importFromId The id of the existing Catalog that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/catalog#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Catalog to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_catalog", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/catalog databricks_catalog} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CatalogConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CatalogConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_catalog',
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
    this._browseOnly = config.browseOnly;
    this._comment = config.comment;
    this._connectionName = config.connectionName;
    this._customMaxRetentionHours = config.customMaxRetentionHours;
    this._enablePredictiveOptimization = config.enablePredictiveOptimization;
    this._forceDestroy = config.forceDestroy;
    this._id = config.id;
    this._isolationMode = config.isolationMode;
    this._metastoreId = config.metastoreId;
    this._name = config.name;
    this._options = config.options;
    this._owner = config.owner;
    this._properties = config.properties;
    this._providerName = config.providerName;
    this._shareName = config.shareName;
    this._storageRoot = config.storageRoot;
    this._effectivePredictiveOptimizationFlag.internalValue = config.effectivePredictiveOptimizationFlag;
    this._managedEncryptionSettings.internalValue = config.managedEncryptionSettings;
    this._providerConfig.internalValue = config.providerConfig;
    this._provisioningInfo.internalValue = config.provisioningInfo;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // browse_only - computed: false, optional: true, required: false
  private _browseOnly?: boolean | cdktn.IResolvable; 
  public get browseOnly() {
    return this.getBooleanAttribute('browse_only');
  }
  public set browseOnly(value: boolean | cdktn.IResolvable) {
    this._browseOnly = value;
  }
  public resetBrowseOnly() {
    this._browseOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browseOnlyInput() {
    return this._browseOnly;
  }

  // catalog_type - computed: true, optional: false, required: false
  public get catalogType() {
    return this.getStringAttribute('catalog_type');
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

  // connection_name - computed: false, optional: true, required: false
  private _connectionName?: string; 
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }
  public set connectionName(value: string) {
    this._connectionName = value;
  }
  public resetConnectionName() {
    this._connectionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionNameInput() {
    return this._connectionName;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getNumberAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // custom_max_retention_hours - computed: false, optional: true, required: false
  private _customMaxRetentionHours?: number; 
  public get customMaxRetentionHours() {
    return this.getNumberAttribute('custom_max_retention_hours');
  }
  public set customMaxRetentionHours(value: number) {
    this._customMaxRetentionHours = value;
  }
  public resetCustomMaxRetentionHours() {
    this._customMaxRetentionHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customMaxRetentionHoursInput() {
    return this._customMaxRetentionHours;
  }

  // enable_predictive_optimization - computed: true, optional: true, required: false
  private _enablePredictiveOptimization?: string; 
  public get enablePredictiveOptimization() {
    return this.getStringAttribute('enable_predictive_optimization');
  }
  public set enablePredictiveOptimization(value: string) {
    this._enablePredictiveOptimization = value;
  }
  public resetEnablePredictiveOptimization() {
    this._enablePredictiveOptimization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePredictiveOptimizationInput() {
    return this._enablePredictiveOptimization;
  }

  // force_destroy - computed: false, optional: true, required: false
  private _forceDestroy?: boolean | cdktn.IResolvable; 
  public get forceDestroy() {
    return this.getBooleanAttribute('force_destroy');
  }
  public set forceDestroy(value: boolean | cdktn.IResolvable) {
    this._forceDestroy = value;
  }
  public resetForceDestroy() {
    this._forceDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDestroyInput() {
    return this._forceDestroy;
  }

  // full_name - computed: true, optional: false, required: false
  public get fullName() {
    return this.getStringAttribute('full_name');
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

  // isolation_mode - computed: true, optional: true, required: false
  private _isolationMode?: string; 
  public get isolationMode() {
    return this.getStringAttribute('isolation_mode');
  }
  public set isolationMode(value: string) {
    this._isolationMode = value;
  }
  public resetIsolationMode() {
    this._isolationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isolationModeInput() {
    return this._isolationMode;
  }

  // metastore_id - computed: true, optional: true, required: false
  private _metastoreId?: string; 
  public get metastoreId() {
    return this.getStringAttribute('metastore_id');
  }
  public set metastoreId(value: string) {
    this._metastoreId = value;
  }
  public resetMetastoreId() {
    this._metastoreId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metastoreIdInput() {
    return this._metastoreId;
  }

  // name - computed: false, optional: true, required: false
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

  // options - computed: false, optional: true, required: false
  private _options?: { [key: string]: string }; 
  public get options() {
    return this.getStringMapAttribute('options');
  }
  public set options(value: { [key: string]: string }) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
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

  // properties - computed: false, optional: true, required: false
  private _properties?: { [key: string]: string }; 
  public get properties() {
    return this.getStringMapAttribute('properties');
  }
  public set properties(value: { [key: string]: string }) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }

  // provider_name - computed: false, optional: true, required: false
  private _providerName?: string; 
  public get providerName() {
    return this.getStringAttribute('provider_name');
  }
  public set providerName(value: string) {
    this._providerName = value;
  }
  public resetProviderName() {
    this._providerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerNameInput() {
    return this._providerName;
  }

  // securable_type - computed: true, optional: false, required: false
  public get securableType() {
    return this.getStringAttribute('securable_type');
  }

  // share_name - computed: false, optional: true, required: false
  private _shareName?: string; 
  public get shareName() {
    return this.getStringAttribute('share_name');
  }
  public set shareName(value: string) {
    this._shareName = value;
  }
  public resetShareName() {
    this._shareName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareNameInput() {
    return this._shareName;
  }

  // storage_location - computed: true, optional: false, required: false
  public get storageLocation() {
    return this.getStringAttribute('storage_location');
  }

  // storage_root - computed: false, optional: true, required: false
  private _storageRoot?: string; 
  public get storageRoot() {
    return this.getStringAttribute('storage_root');
  }
  public set storageRoot(value: string) {
    this._storageRoot = value;
  }
  public resetStorageRoot() {
    this._storageRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageRootInput() {
    return this._storageRoot;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getNumberAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // effective_predictive_optimization_flag - computed: false, optional: true, required: false
  private _effectivePredictiveOptimizationFlag = new CatalogEffectivePredictiveOptimizationFlagOutputReference(this, "effective_predictive_optimization_flag");
  public get effectivePredictiveOptimizationFlag() {
    return this._effectivePredictiveOptimizationFlag;
  }
  public putEffectivePredictiveOptimizationFlag(value: CatalogEffectivePredictiveOptimizationFlag) {
    this._effectivePredictiveOptimizationFlag.internalValue = value;
  }
  public resetEffectivePredictiveOptimizationFlag() {
    this._effectivePredictiveOptimizationFlag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectivePredictiveOptimizationFlagInput() {
    return this._effectivePredictiveOptimizationFlag.internalValue;
  }

  // managed_encryption_settings - computed: false, optional: true, required: false
  private _managedEncryptionSettings = new CatalogManagedEncryptionSettingsOutputReference(this, "managed_encryption_settings");
  public get managedEncryptionSettings() {
    return this._managedEncryptionSettings;
  }
  public putManagedEncryptionSettings(value: CatalogManagedEncryptionSettings) {
    this._managedEncryptionSettings.internalValue = value;
  }
  public resetManagedEncryptionSettings() {
    this._managedEncryptionSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedEncryptionSettingsInput() {
    return this._managedEncryptionSettings.internalValue;
  }

  // provider_config - computed: false, optional: true, required: false
  private _providerConfig = new CatalogProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: CatalogProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // provisioning_info - computed: false, optional: true, required: false
  private _provisioningInfo = new CatalogProvisioningInfoOutputReference(this, "provisioning_info");
  public get provisioningInfo() {
    return this._provisioningInfo;
  }
  public putProvisioningInfo(value: CatalogProvisioningInfo) {
    this._provisioningInfo.internalValue = value;
  }
  public resetProvisioningInfo() {
    this._provisioningInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisioningInfoInput() {
    return this._provisioningInfo.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      browse_only: cdktn.booleanToTerraform(this._browseOnly),
      comment: cdktn.stringToTerraform(this._comment),
      connection_name: cdktn.stringToTerraform(this._connectionName),
      custom_max_retention_hours: cdktn.numberToTerraform(this._customMaxRetentionHours),
      enable_predictive_optimization: cdktn.stringToTerraform(this._enablePredictiveOptimization),
      force_destroy: cdktn.booleanToTerraform(this._forceDestroy),
      id: cdktn.stringToTerraform(this._id),
      isolation_mode: cdktn.stringToTerraform(this._isolationMode),
      metastore_id: cdktn.stringToTerraform(this._metastoreId),
      name: cdktn.stringToTerraform(this._name),
      options: cdktn.hashMapper(cdktn.stringToTerraform)(this._options),
      owner: cdktn.stringToTerraform(this._owner),
      properties: cdktn.hashMapper(cdktn.stringToTerraform)(this._properties),
      provider_name: cdktn.stringToTerraform(this._providerName),
      share_name: cdktn.stringToTerraform(this._shareName),
      storage_root: cdktn.stringToTerraform(this._storageRoot),
      effective_predictive_optimization_flag: catalogEffectivePredictiveOptimizationFlagToTerraform(this._effectivePredictiveOptimizationFlag.internalValue),
      managed_encryption_settings: catalogManagedEncryptionSettingsToTerraform(this._managedEncryptionSettings.internalValue),
      provider_config: catalogProviderConfigToTerraform(this._providerConfig.internalValue),
      provisioning_info: catalogProvisioningInfoToTerraform(this._provisioningInfo.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      browse_only: {
        value: cdktn.booleanToHclTerraform(this._browseOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      comment: {
        value: cdktn.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_name: {
        value: cdktn.stringToHclTerraform(this._connectionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_max_retention_hours: {
        value: cdktn.numberToHclTerraform(this._customMaxRetentionHours),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_predictive_optimization: {
        value: cdktn.stringToHclTerraform(this._enablePredictiveOptimization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_destroy: {
        value: cdktn.booleanToHclTerraform(this._forceDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      isolation_mode: {
        value: cdktn.stringToHclTerraform(this._isolationMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metastore_id: {
        value: cdktn.stringToHclTerraform(this._metastoreId),
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
      options: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._options),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      owner: {
        value: cdktn.stringToHclTerraform(this._owner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      properties: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._properties),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      provider_name: {
        value: cdktn.stringToHclTerraform(this._providerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      share_name: {
        value: cdktn.stringToHclTerraform(this._shareName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_root: {
        value: cdktn.stringToHclTerraform(this._storageRoot),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      effective_predictive_optimization_flag: {
        value: catalogEffectivePredictiveOptimizationFlagToHclTerraform(this._effectivePredictiveOptimizationFlag.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CatalogEffectivePredictiveOptimizationFlagList",
      },
      managed_encryption_settings: {
        value: catalogManagedEncryptionSettingsToHclTerraform(this._managedEncryptionSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CatalogManagedEncryptionSettingsList",
      },
      provider_config: {
        value: catalogProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CatalogProviderConfigList",
      },
      provisioning_info: {
        value: catalogProvisioningInfoToHclTerraform(this._provisioningInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CatalogProvisioningInfoList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
