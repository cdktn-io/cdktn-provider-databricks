/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataDatabricksAccountNetworkPoliciesConfig extends cdktn.TerraformMetaArguments {
}
export interface DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#destination DataDatabricksAccountNetworkPolicies#destination}
  */
  readonly destination?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#internet_destination_type DataDatabricksAccountNetworkPolicies#internet_destination_type}
  */
  readonly internetDestinationType?: string;
}

export function dataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktn.stringToTerraform(struct!.destination),
    internet_destination_type: cdktn.stringToTerraform(struct!.internetDestinationType),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: cdktn.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    internet_destination_type: {
      value: cdktn.stringToHclTerraform(struct!.internetDestinationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._internetDestinationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.internetDestinationType = this._internetDestinationType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination = undefined;
      this._internetDestinationType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination = value.destination;
      this._internetDestinationType = value.internetDestinationType;
    }
  }

  // destination - computed: true, optional: true, required: false
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // internet_destination_type - computed: true, optional: true, required: false
  private _internetDestinationType?: string; 
  public get internetDestinationType() {
    return this.getStringAttribute('internet_destination_type');
  }
  public set internetDestinationType(value: string) {
    this._internetDestinationType = value;
  }
  public resetInternetDestinationType() {
    this._internetDestinationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetDestinationTypeInput() {
    return this._internetDestinationType;
  }
}

export class DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinations[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsOutputReference {
    return new DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#azure_storage_account DataDatabricksAccountNetworkPolicies#azure_storage_account}
  */
  readonly azureStorageAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#azure_storage_service DataDatabricksAccountNetworkPolicies#azure_storage_service}
  */
  readonly azureStorageService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#bucket_name DataDatabricksAccountNetworkPolicies#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#region DataDatabricksAccountNetworkPolicies#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#storage_destination_type DataDatabricksAccountNetworkPolicies#storage_destination_type}
  */
  readonly storageDestinationType?: string;
}

export function dataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_storage_account: cdktn.stringToTerraform(struct!.azureStorageAccount),
    azure_storage_service: cdktn.stringToTerraform(struct!.azureStorageService),
    bucket_name: cdktn.stringToTerraform(struct!.bucketName),
    region: cdktn.stringToTerraform(struct!.region),
    storage_destination_type: cdktn.stringToTerraform(struct!.storageDestinationType),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure_storage_account: {
      value: cdktn.stringToHclTerraform(struct!.azureStorageAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_storage_service: {
      value: cdktn.stringToHclTerraform(struct!.azureStorageService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_name: {
      value: cdktn.stringToHclTerraform(struct!.bucketName),
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
    storage_destination_type: {
      value: cdktn.stringToHclTerraform(struct!.storageDestinationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azureStorageAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureStorageAccount = this._azureStorageAccount;
    }
    if (this._azureStorageService !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureStorageService = this._azureStorageService;
    }
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._storageDestinationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageDestinationType = this._storageDestinationType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._azureStorageAccount = undefined;
      this._azureStorageService = undefined;
      this._bucketName = undefined;
      this._region = undefined;
      this._storageDestinationType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._azureStorageAccount = value.azureStorageAccount;
      this._azureStorageService = value.azureStorageService;
      this._bucketName = value.bucketName;
      this._region = value.region;
      this._storageDestinationType = value.storageDestinationType;
    }
  }

  // azure_storage_account - computed: true, optional: true, required: false
  private _azureStorageAccount?: string; 
  public get azureStorageAccount() {
    return this.getStringAttribute('azure_storage_account');
  }
  public set azureStorageAccount(value: string) {
    this._azureStorageAccount = value;
  }
  public resetAzureStorageAccount() {
    this._azureStorageAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureStorageAccountInput() {
    return this._azureStorageAccount;
  }

  // azure_storage_service - computed: true, optional: true, required: false
  private _azureStorageService?: string; 
  public get azureStorageService() {
    return this.getStringAttribute('azure_storage_service');
  }
  public set azureStorageService(value: string) {
    this._azureStorageService = value;
  }
  public resetAzureStorageService() {
    this._azureStorageService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureStorageServiceInput() {
    return this._azureStorageService;
  }

  // bucket_name - computed: true, optional: true, required: false
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  public resetBucketName() {
    this._bucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
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

  // storage_destination_type - computed: true, optional: true, required: false
  private _storageDestinationType?: string; 
  public get storageDestinationType() {
    return this.getStringAttribute('storage_destination_type');
  }
  public set storageDestinationType(value: string) {
    this._storageDestinationType = value;
  }
  public resetStorageDestinationType() {
    this._storageDestinationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageDestinationTypeInput() {
    return this._storageDestinationType;
  }
}

export class DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinations[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference {
    return new DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessBlockedInternetDestinations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#destination DataDatabricksAccountNetworkPolicies#destination}
  */
  readonly destination?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#internet_destination_type DataDatabricksAccountNetworkPolicies#internet_destination_type}
  */
  readonly internetDestinationType?: string;
}

export function dataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessBlockedInternetDestinationsToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessBlockedInternetDestinations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktn.stringToTerraform(struct!.destination),
    internet_destination_type: cdktn.stringToTerraform(struct!.internetDestinationType),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessBlockedInternetDestinationsToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessBlockedInternetDestinations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: cdktn.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    internet_destination_type: {
      value: cdktn.stringToHclTerraform(struct!.internetDestinationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessBlockedInternetDestinationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessBlockedInternetDestinations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._internetDestinationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.internetDestinationType = this._internetDestinationType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessBlockedInternetDestinations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination = undefined;
      this._internetDestinationType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination = value.destination;
      this._internetDestinationType = value.internetDestinationType;
    }
  }

  // destination - computed: true, optional: true, required: false
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // internet_destination_type - computed: true, optional: true, required: false
  private _internetDestinationType?: string; 
  public get internetDestinationType() {
    return this.getStringAttribute('internet_destination_type');
  }
  public set internetDestinationType(value: string) {
    this._internetDestinationType = value;
  }
  public resetInternetDestinationType() {
    this._internetDestinationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetDestinationTypeInput() {
    return this._internetDestinationType;
  }
}

export class DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessBlockedInternetDestinationsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessBlockedInternetDestinations[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessBlockedInternetDestinationsOutputReference {
    return new DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessBlockedInternetDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#dry_run_mode_product_filter DataDatabricksAccountNetworkPolicies#dry_run_mode_product_filter}
  */
  readonly dryRunModeProductFilter?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#enforcement_mode DataDatabricksAccountNetworkPolicies#enforcement_mode}
  */
  readonly enforcementMode?: string;
}

export function dataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcementToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dry_run_mode_product_filter: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.dryRunModeProductFilter),
    enforcement_mode: cdktn.stringToTerraform(struct!.enforcementMode),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcementToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dry_run_mode_product_filter: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.dryRunModeProductFilter),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enforcement_mode: {
      value: cdktn.stringToHclTerraform(struct!.enforcementMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcementOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcement | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dryRunModeProductFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.dryRunModeProductFilter = this._dryRunModeProductFilter;
    }
    if (this._enforcementMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforcementMode = this._enforcementMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcement | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dryRunModeProductFilter = undefined;
      this._enforcementMode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dryRunModeProductFilter = value.dryRunModeProductFilter;
      this._enforcementMode = value.enforcementMode;
    }
  }

  // dry_run_mode_product_filter - computed: true, optional: true, required: false
  private _dryRunModeProductFilter?: string[]; 
  public get dryRunModeProductFilter() {
    return this.getListAttribute('dry_run_mode_product_filter');
  }
  public set dryRunModeProductFilter(value: string[]) {
    this._dryRunModeProductFilter = value;
  }
  public resetDryRunModeProductFilter() {
    this._dryRunModeProductFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dryRunModeProductFilterInput() {
    return this._dryRunModeProductFilter;
  }

  // enforcement_mode - computed: true, optional: true, required: false
  private _enforcementMode?: string; 
  public get enforcementMode() {
    return this.getStringAttribute('enforcement_mode');
  }
  public set enforcementMode(value: string) {
    this._enforcementMode = value;
  }
  public resetEnforcementMode() {
    this._enforcementMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcementModeInput() {
    return this._enforcementMode;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#allowed_internet_destinations DataDatabricksAccountNetworkPolicies#allowed_internet_destinations}
  */
  readonly allowedInternetDestinations?: DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinations[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#allowed_storage_destinations DataDatabricksAccountNetworkPolicies#allowed_storage_destinations}
  */
  readonly allowedStorageDestinations?: DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinations[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#blocked_internet_destinations DataDatabricksAccountNetworkPolicies#blocked_internet_destinations}
  */
  readonly blockedInternetDestinations?: DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessBlockedInternetDestinations[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#policy_enforcement DataDatabricksAccountNetworkPolicies#policy_enforcement}
  */
  readonly policyEnforcement?: DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcement;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#restriction_mode DataDatabricksAccountNetworkPolicies#restriction_mode}
  */
  readonly restrictionMode: string;
}

export function dataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccess | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_internet_destinations: cdktn.listMapper(dataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsToTerraform, false)(struct!.allowedInternetDestinations),
    allowed_storage_destinations: cdktn.listMapper(dataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsToTerraform, false)(struct!.allowedStorageDestinations),
    blocked_internet_destinations: cdktn.listMapper(dataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessBlockedInternetDestinationsToTerraform, false)(struct!.blockedInternetDestinations),
    policy_enforcement: dataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcementToTerraform(struct!.policyEnforcement),
    restriction_mode: cdktn.stringToTerraform(struct!.restrictionMode),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccess | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_internet_destinations: {
      value: cdktn.listMapperHcl(dataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsToHclTerraform, false)(struct!.allowedInternetDestinations),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsList",
    },
    allowed_storage_destinations: {
      value: cdktn.listMapperHcl(dataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsToHclTerraform, false)(struct!.allowedStorageDestinations),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsList",
    },
    blocked_internet_destinations: {
      value: cdktn.listMapperHcl(dataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessBlockedInternetDestinationsToHclTerraform, false)(struct!.blockedInternetDestinations),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessBlockedInternetDestinationsList",
    },
    policy_enforcement: {
      value: dataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcementToHclTerraform(struct!.policyEnforcement),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcement",
    },
    restriction_mode: {
      value: cdktn.stringToHclTerraform(struct!.restrictionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccess | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedInternetDestinations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedInternetDestinations = this._allowedInternetDestinations?.internalValue;
    }
    if (this._allowedStorageDestinations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedStorageDestinations = this._allowedStorageDestinations?.internalValue;
    }
    if (this._blockedInternetDestinations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockedInternetDestinations = this._blockedInternetDestinations?.internalValue;
    }
    if (this._policyEnforcement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyEnforcement = this._policyEnforcement?.internalValue;
    }
    if (this._restrictionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictionMode = this._restrictionMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccess | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedInternetDestinations.internalValue = undefined;
      this._allowedStorageDestinations.internalValue = undefined;
      this._blockedInternetDestinations.internalValue = undefined;
      this._policyEnforcement.internalValue = undefined;
      this._restrictionMode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedInternetDestinations.internalValue = value.allowedInternetDestinations;
      this._allowedStorageDestinations.internalValue = value.allowedStorageDestinations;
      this._blockedInternetDestinations.internalValue = value.blockedInternetDestinations;
      this._policyEnforcement.internalValue = value.policyEnforcement;
      this._restrictionMode = value.restrictionMode;
    }
  }

  // allowed_internet_destinations - computed: true, optional: true, required: false
  private _allowedInternetDestinations = new DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsList(this, "allowed_internet_destinations", false);
  public get allowedInternetDestinations() {
    return this._allowedInternetDestinations;
  }
  public putAllowedInternetDestinations(value: DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinations[] | cdktn.IResolvable) {
    this._allowedInternetDestinations.internalValue = value;
  }
  public resetAllowedInternetDestinations() {
    this._allowedInternetDestinations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedInternetDestinationsInput() {
    return this._allowedInternetDestinations.internalValue;
  }

  // allowed_storage_destinations - computed: true, optional: true, required: false
  private _allowedStorageDestinations = new DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsList(this, "allowed_storage_destinations", false);
  public get allowedStorageDestinations() {
    return this._allowedStorageDestinations;
  }
  public putAllowedStorageDestinations(value: DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinations[] | cdktn.IResolvable) {
    this._allowedStorageDestinations.internalValue = value;
  }
  public resetAllowedStorageDestinations() {
    this._allowedStorageDestinations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedStorageDestinationsInput() {
    return this._allowedStorageDestinations.internalValue;
  }

  // blocked_internet_destinations - computed: true, optional: true, required: false
  private _blockedInternetDestinations = new DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessBlockedInternetDestinationsList(this, "blocked_internet_destinations", false);
  public get blockedInternetDestinations() {
    return this._blockedInternetDestinations;
  }
  public putBlockedInternetDestinations(value: DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessBlockedInternetDestinations[] | cdktn.IResolvable) {
    this._blockedInternetDestinations.internalValue = value;
  }
  public resetBlockedInternetDestinations() {
    this._blockedInternetDestinations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedInternetDestinationsInput() {
    return this._blockedInternetDestinations.internalValue;
  }

  // policy_enforcement - computed: true, optional: true, required: false
  private _policyEnforcement = new DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcementOutputReference(this, "policy_enforcement");
  public get policyEnforcement() {
    return this._policyEnforcement;
  }
  public putPolicyEnforcement(value: DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcement) {
    this._policyEnforcement.internalValue = value;
  }
  public resetPolicyEnforcement() {
    this._policyEnforcement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyEnforcementInput() {
    return this._policyEnforcement.internalValue;
  }

  // restriction_mode - computed: true, optional: false, required: true
  private _restrictionMode?: string; 
  public get restrictionMode() {
    return this.getStringAttribute('restriction_mode');
  }
  public set restrictionMode(value: string) {
    this._restrictionMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictionModeInput() {
    return this._restrictionMode;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsEgress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#network_access DataDatabricksAccountNetworkPolicies#network_access}
  */
  readonly networkAccess?: DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccess;
}

export function dataDatabricksAccountNetworkPoliciesItemsEgressToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsEgress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_access: dataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessToTerraform(struct!.networkAccess),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsEgressToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsEgress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_access: {
      value: dataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessToHclTerraform(struct!.networkAccess),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccess",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsEgressOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsEgress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkAccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkAccess = this._networkAccess?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsEgress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkAccess.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkAccess.internalValue = value.networkAccess;
    }
  }

  // network_access - computed: true, optional: true, required: false
  private _networkAccess = new DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference(this, "network_access");
  public get networkAccess() {
    return this._networkAccess;
  }
  public putNetworkAccess(value: DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccess) {
    this._networkAccess.internalValue = value;
  }
  public resetNetworkAccess() {
    this._networkAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAccessInput() {
    return this._networkAccess.internalValue;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesAuthenticationIdentities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#principal_id DataDatabricksAccountNetworkPolicies#principal_id}
  */
  readonly principalId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#principal_type DataDatabricksAccountNetworkPolicies#principal_type}
  */
  readonly principalType?: string;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesAuthenticationIdentitiesToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesAuthenticationIdentities | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    principal_id: cdktn.numberToTerraform(struct!.principalId),
    principal_type: cdktn.stringToTerraform(struct!.principalType),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesAuthenticationIdentitiesToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesAuthenticationIdentities | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    principal_id: {
      value: cdktn.numberToHclTerraform(struct!.principalId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    principal_type: {
      value: cdktn.stringToHclTerraform(struct!.principalType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesAuthenticationIdentitiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesAuthenticationIdentities | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._principalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.principalId = this._principalId;
    }
    if (this._principalType !== undefined) {
      hasAnyValues = true;
      internalValueResult.principalType = this._principalType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesAuthenticationIdentities | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._principalId = undefined;
      this._principalType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._principalId = value.principalId;
      this._principalType = value.principalType;
    }
  }

  // principal_id - computed: true, optional: true, required: false
  private _principalId?: number; 
  public get principalId() {
    return this.getNumberAttribute('principal_id');
  }
  public set principalId(value: number) {
    this._principalId = value;
  }
  public resetPrincipalId() {
    this._principalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalIdInput() {
    return this._principalId;
  }

  // principal_type - computed: true, optional: true, required: false
  private _principalType?: string; 
  public get principalType() {
    return this.getStringAttribute('principal_type');
  }
  public set principalType(value: string) {
    this._principalType = value;
  }
  public resetPrincipalType() {
    this._principalType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalTypeInput() {
    return this._principalType;
  }
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesAuthenticationIdentitiesList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesAuthenticationIdentities[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesAuthenticationIdentitiesOutputReference {
    return new DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesAuthenticationIdentitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#identities DataDatabricksAccountNetworkPolicies#identities}
  */
  readonly identities?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesAuthenticationIdentities[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#identity_type DataDatabricksAccountNetworkPolicies#identity_type}
  */
  readonly identityType?: string;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesAuthenticationToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesAuthentication | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identities: cdktn.listMapper(dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesAuthenticationIdentitiesToTerraform, false)(struct!.identities),
    identity_type: cdktn.stringToTerraform(struct!.identityType),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesAuthenticationToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesAuthentication | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identities: {
      value: cdktn.listMapperHcl(dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesAuthenticationIdentitiesToHclTerraform, false)(struct!.identities),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesAuthenticationIdentitiesList",
    },
    identity_type: {
      value: cdktn.stringToHclTerraform(struct!.identityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesAuthentication | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identities = this._identities?.internalValue;
    }
    if (this._identityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityType = this._identityType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesAuthentication | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identities.internalValue = undefined;
      this._identityType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identities.internalValue = value.identities;
      this._identityType = value.identityType;
    }
  }

  // identities - computed: true, optional: true, required: false
  private _identities = new DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesAuthenticationIdentitiesList(this, "identities", false);
  public get identities() {
    return this._identities;
  }
  public putIdentities(value: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesAuthenticationIdentities[] | cdktn.IResolvable) {
    this._identities.internalValue = value;
  }
  public resetIdentities() {
    this._identities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identitiesInput() {
    return this._identities.internalValue;
  }

  // identity_type - computed: true, optional: true, required: false
  private _identityType?: string; 
  public get identityType() {
    return this.getStringAttribute('identity_type');
  }
  public set identityType(value: string) {
    this._identityType = value;
  }
  public resetIdentityType() {
    this._identityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityTypeInput() {
    return this._identityType;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationAccountApi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#scope_qualifier DataDatabricksAccountNetworkPolicies#scope_qualifier}
  */
  readonly scopeQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#scopes DataDatabricksAccountNetworkPolicies#scopes}
  */
  readonly scopes?: string[];
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationAccountApiToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationAccountApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope_qualifier: cdktn.stringToTerraform(struct!.scopeQualifier),
    scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationAccountApiToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationAccountApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope_qualifier: {
      value: cdktn.stringToHclTerraform(struct!.scopeQualifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scopes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationAccountApiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationAccountApi | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scopeQualifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopeQualifier = this._scopeQualifier;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationAccountApi | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scopeQualifier = undefined;
      this._scopes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scopeQualifier = value.scopeQualifier;
      this._scopes = value.scopes;
    }
  }

  // scope_qualifier - computed: true, optional: true, required: false
  private _scopeQualifier?: string; 
  public get scopeQualifier() {
    return this.getStringAttribute('scope_qualifier');
  }
  public set scopeQualifier(value: string) {
    this._scopeQualifier = value;
  }
  public resetScopeQualifier() {
    this._scopeQualifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeQualifierInput() {
    return this._scopeQualifier;
  }

  // scopes - computed: true, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationAccountDatabricksOne {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#all_destinations DataDatabricksAccountNetworkPolicies#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationAccountDatabricksOneToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationAccountDatabricksOne | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationAccountDatabricksOneToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationAccountDatabricksOne | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_destinations: {
      value: cdktn.booleanToHclTerraform(struct!.allDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationAccountDatabricksOneOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationAccountDatabricksOne | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allDestinations !== undefined) {
      hasAnyValues = true;
      internalValueResult.allDestinations = this._allDestinations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationAccountDatabricksOne | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allDestinations = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allDestinations = value.allDestinations;
    }
  }

  // all_destinations - computed: true, optional: true, required: false
  private _allDestinations?: boolean | cdktn.IResolvable; 
  public get allDestinations() {
    return this.getBooleanAttribute('all_destinations');
  }
  public set allDestinations(value: boolean | cdktn.IResolvable) {
    this._allDestinations = value;
  }
  public resetAllDestinations() {
    this._allDestinations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allDestinationsInput() {
    return this._allDestinations;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationAccountUi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#all_destinations DataDatabricksAccountNetworkPolicies#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationAccountUiToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationAccountUi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationAccountUiToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationAccountUi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_destinations: {
      value: cdktn.booleanToHclTerraform(struct!.allDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationAccountUiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationAccountUi | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allDestinations !== undefined) {
      hasAnyValues = true;
      internalValueResult.allDestinations = this._allDestinations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationAccountUi | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allDestinations = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allDestinations = value.allDestinations;
    }
  }

  // all_destinations - computed: true, optional: true, required: false
  private _allDestinations?: boolean | cdktn.IResolvable; 
  public get allDestinations() {
    return this.getBooleanAttribute('all_destinations');
  }
  public set allDestinations(value: boolean | cdktn.IResolvable) {
    this._allDestinations = value;
  }
  public resetAllDestinations() {
    this._allDestinations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allDestinationsInput() {
    return this._allDestinations;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationAppsRuntime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#all_destinations DataDatabricksAccountNetworkPolicies#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationAppsRuntimeToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationAppsRuntime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationAppsRuntimeToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationAppsRuntime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_destinations: {
      value: cdktn.booleanToHclTerraform(struct!.allDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationAppsRuntimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationAppsRuntime | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allDestinations !== undefined) {
      hasAnyValues = true;
      internalValueResult.allDestinations = this._allDestinations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationAppsRuntime | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allDestinations = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allDestinations = value.allDestinations;
    }
  }

  // all_destinations - computed: true, optional: true, required: false
  private _allDestinations?: boolean | cdktn.IResolvable; 
  public get allDestinations() {
    return this.getBooleanAttribute('all_destinations');
  }
  public set allDestinations(value: boolean | cdktn.IResolvable) {
    this._allDestinations = value;
  }
  public resetAllDestinations() {
    this._allDestinations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allDestinationsInput() {
    return this._allDestinations;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationLakebaseRuntime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#all_destinations DataDatabricksAccountNetworkPolicies#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationLakebaseRuntimeToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationLakebaseRuntime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationLakebaseRuntimeToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationLakebaseRuntime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_destinations: {
      value: cdktn.booleanToHclTerraform(struct!.allDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationLakebaseRuntimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationLakebaseRuntime | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allDestinations !== undefined) {
      hasAnyValues = true;
      internalValueResult.allDestinations = this._allDestinations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationLakebaseRuntime | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allDestinations = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allDestinations = value.allDestinations;
    }
  }

  // all_destinations - computed: true, optional: true, required: false
  private _allDestinations?: boolean | cdktn.IResolvable; 
  public get allDestinations() {
    return this.getBooleanAttribute('all_destinations');
  }
  public set allDestinations(value: boolean | cdktn.IResolvable) {
    this._allDestinations = value;
  }
  public resetAllDestinations() {
    this._allDestinations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allDestinationsInput() {
    return this._allDestinations;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationWorkspaceApi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#scope_qualifier DataDatabricksAccountNetworkPolicies#scope_qualifier}
  */
  readonly scopeQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#scopes DataDatabricksAccountNetworkPolicies#scopes}
  */
  readonly scopes?: string[];
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationWorkspaceApiToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationWorkspaceApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope_qualifier: cdktn.stringToTerraform(struct!.scopeQualifier),
    scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationWorkspaceApiToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationWorkspaceApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope_qualifier: {
      value: cdktn.stringToHclTerraform(struct!.scopeQualifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scopes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationWorkspaceApiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationWorkspaceApi | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scopeQualifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopeQualifier = this._scopeQualifier;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationWorkspaceApi | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scopeQualifier = undefined;
      this._scopes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scopeQualifier = value.scopeQualifier;
      this._scopes = value.scopes;
    }
  }

  // scope_qualifier - computed: true, optional: true, required: false
  private _scopeQualifier?: string; 
  public get scopeQualifier() {
    return this.getStringAttribute('scope_qualifier');
  }
  public set scopeQualifier(value: string) {
    this._scopeQualifier = value;
  }
  public resetScopeQualifier() {
    this._scopeQualifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeQualifierInput() {
    return this._scopeQualifier;
  }

  // scopes - computed: true, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationWorkspaceUi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#all_destinations DataDatabricksAccountNetworkPolicies#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationWorkspaceUiToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationWorkspaceUi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationWorkspaceUiToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationWorkspaceUi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_destinations: {
      value: cdktn.booleanToHclTerraform(struct!.allDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationWorkspaceUiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationWorkspaceUi | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allDestinations !== undefined) {
      hasAnyValues = true;
      internalValueResult.allDestinations = this._allDestinations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationWorkspaceUi | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allDestinations = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allDestinations = value.allDestinations;
    }
  }

  // all_destinations - computed: true, optional: true, required: false
  private _allDestinations?: boolean | cdktn.IResolvable; 
  public get allDestinations() {
    return this.getBooleanAttribute('all_destinations');
  }
  public set allDestinations(value: boolean | cdktn.IResolvable) {
    this._allDestinations = value;
  }
  public resetAllDestinations() {
    this._allDestinations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allDestinationsInput() {
    return this._allDestinations;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestination {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#account_api DataDatabricksAccountNetworkPolicies#account_api}
  */
  readonly accountApi?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationAccountApi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#account_databricks_one DataDatabricksAccountNetworkPolicies#account_databricks_one}
  */
  readonly accountDatabricksOne?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationAccountDatabricksOne;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#account_ui DataDatabricksAccountNetworkPolicies#account_ui}
  */
  readonly accountUi?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationAccountUi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#all_destinations DataDatabricksAccountNetworkPolicies#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#apps_runtime DataDatabricksAccountNetworkPolicies#apps_runtime}
  */
  readonly appsRuntime?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationAppsRuntime;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#lakebase_runtime DataDatabricksAccountNetworkPolicies#lakebase_runtime}
  */
  readonly lakebaseRuntime?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationLakebaseRuntime;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#workspace_api DataDatabricksAccountNetworkPolicies#workspace_api}
  */
  readonly workspaceApi?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationWorkspaceApi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#workspace_ui DataDatabricksAccountNetworkPolicies#workspace_ui}
  */
  readonly workspaceUi?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationWorkspaceUi;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_api: dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationAccountApiToTerraform(struct!.accountApi),
    account_databricks_one: dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationAccountDatabricksOneToTerraform(struct!.accountDatabricksOne),
    account_ui: dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationAccountUiToTerraform(struct!.accountUi),
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
    apps_runtime: dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationAppsRuntimeToTerraform(struct!.appsRuntime),
    lakebase_runtime: dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationLakebaseRuntimeToTerraform(struct!.lakebaseRuntime),
    workspace_api: dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationWorkspaceApiToTerraform(struct!.workspaceApi),
    workspace_ui: dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationWorkspaceUiToTerraform(struct!.workspaceUi),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_api: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationAccountApiToHclTerraform(struct!.accountApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationAccountApi",
    },
    account_databricks_one: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationAccountDatabricksOneToHclTerraform(struct!.accountDatabricksOne),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationAccountDatabricksOne",
    },
    account_ui: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationAccountUiToHclTerraform(struct!.accountUi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationAccountUi",
    },
    all_destinations: {
      value: cdktn.booleanToHclTerraform(struct!.allDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    apps_runtime: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationAppsRuntimeToHclTerraform(struct!.appsRuntime),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationAppsRuntime",
    },
    lakebase_runtime: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationLakebaseRuntimeToHclTerraform(struct!.lakebaseRuntime),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationLakebaseRuntime",
    },
    workspace_api: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationWorkspaceApiToHclTerraform(struct!.workspaceApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationWorkspaceApi",
    },
    workspace_ui: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationWorkspaceUiToHclTerraform(struct!.workspaceUi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationWorkspaceUi",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestination | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountApi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountApi = this._accountApi?.internalValue;
    }
    if (this._accountDatabricksOne?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountDatabricksOne = this._accountDatabricksOne?.internalValue;
    }
    if (this._accountUi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountUi = this._accountUi?.internalValue;
    }
    if (this._allDestinations !== undefined) {
      hasAnyValues = true;
      internalValueResult.allDestinations = this._allDestinations;
    }
    if (this._appsRuntime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appsRuntime = this._appsRuntime?.internalValue;
    }
    if (this._lakebaseRuntime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lakebaseRuntime = this._lakebaseRuntime?.internalValue;
    }
    if (this._workspaceApi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceApi = this._workspaceApi?.internalValue;
    }
    if (this._workspaceUi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceUi = this._workspaceUi?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestination | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountApi.internalValue = undefined;
      this._accountDatabricksOne.internalValue = undefined;
      this._accountUi.internalValue = undefined;
      this._allDestinations = undefined;
      this._appsRuntime.internalValue = undefined;
      this._lakebaseRuntime.internalValue = undefined;
      this._workspaceApi.internalValue = undefined;
      this._workspaceUi.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountApi.internalValue = value.accountApi;
      this._accountDatabricksOne.internalValue = value.accountDatabricksOne;
      this._accountUi.internalValue = value.accountUi;
      this._allDestinations = value.allDestinations;
      this._appsRuntime.internalValue = value.appsRuntime;
      this._lakebaseRuntime.internalValue = value.lakebaseRuntime;
      this._workspaceApi.internalValue = value.workspaceApi;
      this._workspaceUi.internalValue = value.workspaceUi;
    }
  }

  // account_api - computed: true, optional: true, required: false
  private _accountApi = new DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationAccountApiOutputReference(this, "account_api");
  public get accountApi() {
    return this._accountApi;
  }
  public putAccountApi(value: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationAccountApi) {
    this._accountApi.internalValue = value;
  }
  public resetAccountApi() {
    this._accountApi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountApiInput() {
    return this._accountApi.internalValue;
  }

  // account_databricks_one - computed: true, optional: true, required: false
  private _accountDatabricksOne = new DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationAccountDatabricksOneOutputReference(this, "account_databricks_one");
  public get accountDatabricksOne() {
    return this._accountDatabricksOne;
  }
  public putAccountDatabricksOne(value: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationAccountDatabricksOne) {
    this._accountDatabricksOne.internalValue = value;
  }
  public resetAccountDatabricksOne() {
    this._accountDatabricksOne.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountDatabricksOneInput() {
    return this._accountDatabricksOne.internalValue;
  }

  // account_ui - computed: true, optional: true, required: false
  private _accountUi = new DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationAccountUiOutputReference(this, "account_ui");
  public get accountUi() {
    return this._accountUi;
  }
  public putAccountUi(value: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationAccountUi) {
    this._accountUi.internalValue = value;
  }
  public resetAccountUi() {
    this._accountUi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountUiInput() {
    return this._accountUi.internalValue;
  }

  // all_destinations - computed: true, optional: true, required: false
  private _allDestinations?: boolean | cdktn.IResolvable; 
  public get allDestinations() {
    return this.getBooleanAttribute('all_destinations');
  }
  public set allDestinations(value: boolean | cdktn.IResolvable) {
    this._allDestinations = value;
  }
  public resetAllDestinations() {
    this._allDestinations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allDestinationsInput() {
    return this._allDestinations;
  }

  // apps_runtime - computed: true, optional: true, required: false
  private _appsRuntime = new DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationAppsRuntimeOutputReference(this, "apps_runtime");
  public get appsRuntime() {
    return this._appsRuntime;
  }
  public putAppsRuntime(value: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationAppsRuntime) {
    this._appsRuntime.internalValue = value;
  }
  public resetAppsRuntime() {
    this._appsRuntime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appsRuntimeInput() {
    return this._appsRuntime.internalValue;
  }

  // lakebase_runtime - computed: true, optional: true, required: false
  private _lakebaseRuntime = new DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationLakebaseRuntimeOutputReference(this, "lakebase_runtime");
  public get lakebaseRuntime() {
    return this._lakebaseRuntime;
  }
  public putLakebaseRuntime(value: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationLakebaseRuntime) {
    this._lakebaseRuntime.internalValue = value;
  }
  public resetLakebaseRuntime() {
    this._lakebaseRuntime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lakebaseRuntimeInput() {
    return this._lakebaseRuntime.internalValue;
  }

  // workspace_api - computed: true, optional: true, required: false
  private _workspaceApi = new DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationWorkspaceApiOutputReference(this, "workspace_api");
  public get workspaceApi() {
    return this._workspaceApi;
  }
  public putWorkspaceApi(value: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationWorkspaceApi) {
    this._workspaceApi.internalValue = value;
  }
  public resetWorkspaceApi() {
    this._workspaceApi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceApiInput() {
    return this._workspaceApi.internalValue;
  }

  // workspace_ui - computed: true, optional: true, required: false
  private _workspaceUi = new DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationWorkspaceUiOutputReference(this, "workspace_ui");
  public get workspaceUi() {
    return this._workspaceUi;
  }
  public putWorkspaceUi(value: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationWorkspaceUi) {
    this._workspaceUi.internalValue = value;
  }
  public resetWorkspaceUi() {
    this._workspaceUi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceUiInput() {
    return this._workspaceUi.internalValue;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesOriginEndpoints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#endpoint_ids DataDatabricksAccountNetworkPolicies#endpoint_ids}
  */
  readonly endpointIds?: string[];
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesOriginEndpointsToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesOriginEndpoints | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.endpointIds),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesOriginEndpointsToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesOriginEndpoints | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.endpointIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesOriginEndpointsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesOriginEndpoints | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpointIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointIds = this._endpointIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesOriginEndpoints | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpointIds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpointIds = value.endpointIds;
    }
  }

  // endpoint_ids - computed: true, optional: true, required: false
  private _endpointIds?: string[]; 
  public get endpointIds() {
    return this.getListAttribute('endpoint_ids');
  }
  public set endpointIds(value: string[]) {
    this._endpointIds = value;
  }
  public resetEndpointIds() {
    this._endpointIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointIdsInput() {
    return this._endpointIds;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesOrigin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#all_private_access DataDatabricksAccountNetworkPolicies#all_private_access}
  */
  readonly allPrivateAccess?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#all_registered_endpoints DataDatabricksAccountNetworkPolicies#all_registered_endpoints}
  */
  readonly allRegisteredEndpoints?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#azure_workspace_private_link DataDatabricksAccountNetworkPolicies#azure_workspace_private_link}
  */
  readonly azureWorkspacePrivateLink?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#endpoints DataDatabricksAccountNetworkPolicies#endpoints}
  */
  readonly endpoints?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesOriginEndpoints;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesOriginToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesOrigin | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_private_access: cdktn.booleanToTerraform(struct!.allPrivateAccess),
    all_registered_endpoints: cdktn.booleanToTerraform(struct!.allRegisteredEndpoints),
    azure_workspace_private_link: cdktn.booleanToTerraform(struct!.azureWorkspacePrivateLink),
    endpoints: dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesOriginEndpointsToTerraform(struct!.endpoints),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesOriginToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesOrigin | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_private_access: {
      value: cdktn.booleanToHclTerraform(struct!.allPrivateAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    all_registered_endpoints: {
      value: cdktn.booleanToHclTerraform(struct!.allRegisteredEndpoints),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    azure_workspace_private_link: {
      value: cdktn.booleanToHclTerraform(struct!.azureWorkspacePrivateLink),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    endpoints: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesOriginEndpointsToHclTerraform(struct!.endpoints),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesOriginEndpoints",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesOriginOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesOrigin | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allPrivateAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.allPrivateAccess = this._allPrivateAccess;
    }
    if (this._allRegisteredEndpoints !== undefined) {
      hasAnyValues = true;
      internalValueResult.allRegisteredEndpoints = this._allRegisteredEndpoints;
    }
    if (this._azureWorkspacePrivateLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureWorkspacePrivateLink = this._azureWorkspacePrivateLink;
    }
    if (this._endpoints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoints = this._endpoints?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesOrigin | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allPrivateAccess = undefined;
      this._allRegisteredEndpoints = undefined;
      this._azureWorkspacePrivateLink = undefined;
      this._endpoints.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allPrivateAccess = value.allPrivateAccess;
      this._allRegisteredEndpoints = value.allRegisteredEndpoints;
      this._azureWorkspacePrivateLink = value.azureWorkspacePrivateLink;
      this._endpoints.internalValue = value.endpoints;
    }
  }

  // all_private_access - computed: true, optional: true, required: false
  private _allPrivateAccess?: boolean | cdktn.IResolvable; 
  public get allPrivateAccess() {
    return this.getBooleanAttribute('all_private_access');
  }
  public set allPrivateAccess(value: boolean | cdktn.IResolvable) {
    this._allPrivateAccess = value;
  }
  public resetAllPrivateAccess() {
    this._allPrivateAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allPrivateAccessInput() {
    return this._allPrivateAccess;
  }

  // all_registered_endpoints - computed: true, optional: true, required: false
  private _allRegisteredEndpoints?: boolean | cdktn.IResolvable; 
  public get allRegisteredEndpoints() {
    return this.getBooleanAttribute('all_registered_endpoints');
  }
  public set allRegisteredEndpoints(value: boolean | cdktn.IResolvable) {
    this._allRegisteredEndpoints = value;
  }
  public resetAllRegisteredEndpoints() {
    this._allRegisteredEndpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allRegisteredEndpointsInput() {
    return this._allRegisteredEndpoints;
  }

  // azure_workspace_private_link - computed: true, optional: true, required: false
  private _azureWorkspacePrivateLink?: boolean | cdktn.IResolvable; 
  public get azureWorkspacePrivateLink() {
    return this.getBooleanAttribute('azure_workspace_private_link');
  }
  public set azureWorkspacePrivateLink(value: boolean | cdktn.IResolvable) {
    this._azureWorkspacePrivateLink = value;
  }
  public resetAzureWorkspacePrivateLink() {
    this._azureWorkspacePrivateLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureWorkspacePrivateLinkInput() {
    return this._azureWorkspacePrivateLink;
  }

  // endpoints - computed: true, optional: true, required: false
  private _endpoints = new DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesOriginEndpointsOutputReference(this, "endpoints");
  public get endpoints() {
    return this._endpoints;
  }
  public putEndpoints(value: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesOriginEndpoints) {
    this._endpoints.internalValue = value;
  }
  public resetEndpoints() {
    this._endpoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsInput() {
    return this._endpoints.internalValue;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#authentication DataDatabricksAccountNetworkPolicies#authentication}
  */
  readonly authentication?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesAuthentication;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#destination DataDatabricksAccountNetworkPolicies#destination}
  */
  readonly destination?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestination;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#label DataDatabricksAccountNetworkPolicies#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#origin DataDatabricksAccountNetworkPolicies#origin}
  */
  readonly origin?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesOrigin;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesAuthenticationToTerraform(struct!.authentication),
    destination: dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationToTerraform(struct!.destination),
    label: cdktn.stringToTerraform(struct!.label),
    origin: dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesOriginToTerraform(struct!.origin),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesAuthentication",
    },
    destination: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestination",
    },
    label: {
      value: cdktn.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesOriginToHclTerraform(struct!.origin),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesOrigin",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRules | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._origin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.origin = this._origin?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRules | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication.internalValue = undefined;
      this._destination.internalValue = undefined;
      this._label = undefined;
      this._origin.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authentication.internalValue = value.authentication;
      this._destination.internalValue = value.destination;
      this._label = value.label;
      this._origin.internalValue = value.origin;
    }
  }

  // authentication - computed: true, optional: true, required: false
  private _authentication = new DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // destination - computed: true, optional: true, required: false
  private _destination = new DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesDestination) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // label - computed: true, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // origin - computed: true, optional: true, required: false
  private _origin = new DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesOriginOutputReference(this, "origin");
  public get origin() {
    return this._origin;
  }
  public putOrigin(value: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesOrigin) {
    this._origin.internalValue = value;
  }
  public resetOrigin() {
    this._origin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin.internalValue;
  }
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRules[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesOutputReference {
    return new DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesAuthenticationIdentities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#principal_id DataDatabricksAccountNetworkPolicies#principal_id}
  */
  readonly principalId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#principal_type DataDatabricksAccountNetworkPolicies#principal_type}
  */
  readonly principalType?: string;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesAuthenticationIdentitiesToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesAuthenticationIdentities | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    principal_id: cdktn.numberToTerraform(struct!.principalId),
    principal_type: cdktn.stringToTerraform(struct!.principalType),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesAuthenticationIdentitiesToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesAuthenticationIdentities | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    principal_id: {
      value: cdktn.numberToHclTerraform(struct!.principalId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    principal_type: {
      value: cdktn.stringToHclTerraform(struct!.principalType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesAuthenticationIdentitiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesAuthenticationIdentities | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._principalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.principalId = this._principalId;
    }
    if (this._principalType !== undefined) {
      hasAnyValues = true;
      internalValueResult.principalType = this._principalType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesAuthenticationIdentities | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._principalId = undefined;
      this._principalType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._principalId = value.principalId;
      this._principalType = value.principalType;
    }
  }

  // principal_id - computed: true, optional: true, required: false
  private _principalId?: number; 
  public get principalId() {
    return this.getNumberAttribute('principal_id');
  }
  public set principalId(value: number) {
    this._principalId = value;
  }
  public resetPrincipalId() {
    this._principalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalIdInput() {
    return this._principalId;
  }

  // principal_type - computed: true, optional: true, required: false
  private _principalType?: string; 
  public get principalType() {
    return this.getStringAttribute('principal_type');
  }
  public set principalType(value: string) {
    this._principalType = value;
  }
  public resetPrincipalType() {
    this._principalType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalTypeInput() {
    return this._principalType;
  }
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesAuthenticationIdentitiesList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesAuthenticationIdentities[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesAuthenticationIdentitiesOutputReference {
    return new DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesAuthenticationIdentitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#identities DataDatabricksAccountNetworkPolicies#identities}
  */
  readonly identities?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesAuthenticationIdentities[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#identity_type DataDatabricksAccountNetworkPolicies#identity_type}
  */
  readonly identityType?: string;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesAuthenticationToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesAuthentication | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identities: cdktn.listMapper(dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesAuthenticationIdentitiesToTerraform, false)(struct!.identities),
    identity_type: cdktn.stringToTerraform(struct!.identityType),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesAuthenticationToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesAuthentication | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identities: {
      value: cdktn.listMapperHcl(dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesAuthenticationIdentitiesToHclTerraform, false)(struct!.identities),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesAuthenticationIdentitiesList",
    },
    identity_type: {
      value: cdktn.stringToHclTerraform(struct!.identityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesAuthentication | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identities = this._identities?.internalValue;
    }
    if (this._identityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityType = this._identityType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesAuthentication | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identities.internalValue = undefined;
      this._identityType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identities.internalValue = value.identities;
      this._identityType = value.identityType;
    }
  }

  // identities - computed: true, optional: true, required: false
  private _identities = new DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesAuthenticationIdentitiesList(this, "identities", false);
  public get identities() {
    return this._identities;
  }
  public putIdentities(value: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesAuthenticationIdentities[] | cdktn.IResolvable) {
    this._identities.internalValue = value;
  }
  public resetIdentities() {
    this._identities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identitiesInput() {
    return this._identities.internalValue;
  }

  // identity_type - computed: true, optional: true, required: false
  private _identityType?: string; 
  public get identityType() {
    return this.getStringAttribute('identity_type');
  }
  public set identityType(value: string) {
    this._identityType = value;
  }
  public resetIdentityType() {
    this._identityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityTypeInput() {
    return this._identityType;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationAccountApi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#scope_qualifier DataDatabricksAccountNetworkPolicies#scope_qualifier}
  */
  readonly scopeQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#scopes DataDatabricksAccountNetworkPolicies#scopes}
  */
  readonly scopes?: string[];
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationAccountApiToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationAccountApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope_qualifier: cdktn.stringToTerraform(struct!.scopeQualifier),
    scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationAccountApiToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationAccountApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope_qualifier: {
      value: cdktn.stringToHclTerraform(struct!.scopeQualifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scopes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationAccountApiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationAccountApi | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scopeQualifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopeQualifier = this._scopeQualifier;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationAccountApi | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scopeQualifier = undefined;
      this._scopes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scopeQualifier = value.scopeQualifier;
      this._scopes = value.scopes;
    }
  }

  // scope_qualifier - computed: true, optional: true, required: false
  private _scopeQualifier?: string; 
  public get scopeQualifier() {
    return this.getStringAttribute('scope_qualifier');
  }
  public set scopeQualifier(value: string) {
    this._scopeQualifier = value;
  }
  public resetScopeQualifier() {
    this._scopeQualifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeQualifierInput() {
    return this._scopeQualifier;
  }

  // scopes - computed: true, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationAccountDatabricksOne {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#all_destinations DataDatabricksAccountNetworkPolicies#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationAccountDatabricksOneToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationAccountDatabricksOne | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationAccountDatabricksOneToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationAccountDatabricksOne | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_destinations: {
      value: cdktn.booleanToHclTerraform(struct!.allDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationAccountDatabricksOneOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationAccountDatabricksOne | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allDestinations !== undefined) {
      hasAnyValues = true;
      internalValueResult.allDestinations = this._allDestinations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationAccountDatabricksOne | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allDestinations = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allDestinations = value.allDestinations;
    }
  }

  // all_destinations - computed: true, optional: true, required: false
  private _allDestinations?: boolean | cdktn.IResolvable; 
  public get allDestinations() {
    return this.getBooleanAttribute('all_destinations');
  }
  public set allDestinations(value: boolean | cdktn.IResolvable) {
    this._allDestinations = value;
  }
  public resetAllDestinations() {
    this._allDestinations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allDestinationsInput() {
    return this._allDestinations;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationAccountUi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#all_destinations DataDatabricksAccountNetworkPolicies#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationAccountUiToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationAccountUi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationAccountUiToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationAccountUi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_destinations: {
      value: cdktn.booleanToHclTerraform(struct!.allDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationAccountUiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationAccountUi | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allDestinations !== undefined) {
      hasAnyValues = true;
      internalValueResult.allDestinations = this._allDestinations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationAccountUi | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allDestinations = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allDestinations = value.allDestinations;
    }
  }

  // all_destinations - computed: true, optional: true, required: false
  private _allDestinations?: boolean | cdktn.IResolvable; 
  public get allDestinations() {
    return this.getBooleanAttribute('all_destinations');
  }
  public set allDestinations(value: boolean | cdktn.IResolvable) {
    this._allDestinations = value;
  }
  public resetAllDestinations() {
    this._allDestinations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allDestinationsInput() {
    return this._allDestinations;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationAppsRuntime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#all_destinations DataDatabricksAccountNetworkPolicies#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationAppsRuntimeToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationAppsRuntime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationAppsRuntimeToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationAppsRuntime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_destinations: {
      value: cdktn.booleanToHclTerraform(struct!.allDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationAppsRuntimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationAppsRuntime | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allDestinations !== undefined) {
      hasAnyValues = true;
      internalValueResult.allDestinations = this._allDestinations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationAppsRuntime | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allDestinations = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allDestinations = value.allDestinations;
    }
  }

  // all_destinations - computed: true, optional: true, required: false
  private _allDestinations?: boolean | cdktn.IResolvable; 
  public get allDestinations() {
    return this.getBooleanAttribute('all_destinations');
  }
  public set allDestinations(value: boolean | cdktn.IResolvable) {
    this._allDestinations = value;
  }
  public resetAllDestinations() {
    this._allDestinations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allDestinationsInput() {
    return this._allDestinations;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationLakebaseRuntime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#all_destinations DataDatabricksAccountNetworkPolicies#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationLakebaseRuntimeToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationLakebaseRuntime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationLakebaseRuntimeToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationLakebaseRuntime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_destinations: {
      value: cdktn.booleanToHclTerraform(struct!.allDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationLakebaseRuntimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationLakebaseRuntime | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allDestinations !== undefined) {
      hasAnyValues = true;
      internalValueResult.allDestinations = this._allDestinations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationLakebaseRuntime | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allDestinations = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allDestinations = value.allDestinations;
    }
  }

  // all_destinations - computed: true, optional: true, required: false
  private _allDestinations?: boolean | cdktn.IResolvable; 
  public get allDestinations() {
    return this.getBooleanAttribute('all_destinations');
  }
  public set allDestinations(value: boolean | cdktn.IResolvable) {
    this._allDestinations = value;
  }
  public resetAllDestinations() {
    this._allDestinations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allDestinationsInput() {
    return this._allDestinations;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationWorkspaceApi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#scope_qualifier DataDatabricksAccountNetworkPolicies#scope_qualifier}
  */
  readonly scopeQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#scopes DataDatabricksAccountNetworkPolicies#scopes}
  */
  readonly scopes?: string[];
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationWorkspaceApiToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationWorkspaceApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope_qualifier: cdktn.stringToTerraform(struct!.scopeQualifier),
    scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationWorkspaceApiToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationWorkspaceApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope_qualifier: {
      value: cdktn.stringToHclTerraform(struct!.scopeQualifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scopes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationWorkspaceApiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationWorkspaceApi | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scopeQualifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopeQualifier = this._scopeQualifier;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationWorkspaceApi | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scopeQualifier = undefined;
      this._scopes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scopeQualifier = value.scopeQualifier;
      this._scopes = value.scopes;
    }
  }

  // scope_qualifier - computed: true, optional: true, required: false
  private _scopeQualifier?: string; 
  public get scopeQualifier() {
    return this.getStringAttribute('scope_qualifier');
  }
  public set scopeQualifier(value: string) {
    this._scopeQualifier = value;
  }
  public resetScopeQualifier() {
    this._scopeQualifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeQualifierInput() {
    return this._scopeQualifier;
  }

  // scopes - computed: true, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationWorkspaceUi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#all_destinations DataDatabricksAccountNetworkPolicies#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationWorkspaceUiToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationWorkspaceUi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationWorkspaceUiToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationWorkspaceUi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_destinations: {
      value: cdktn.booleanToHclTerraform(struct!.allDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationWorkspaceUiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationWorkspaceUi | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allDestinations !== undefined) {
      hasAnyValues = true;
      internalValueResult.allDestinations = this._allDestinations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationWorkspaceUi | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allDestinations = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allDestinations = value.allDestinations;
    }
  }

  // all_destinations - computed: true, optional: true, required: false
  private _allDestinations?: boolean | cdktn.IResolvable; 
  public get allDestinations() {
    return this.getBooleanAttribute('all_destinations');
  }
  public set allDestinations(value: boolean | cdktn.IResolvable) {
    this._allDestinations = value;
  }
  public resetAllDestinations() {
    this._allDestinations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allDestinationsInput() {
    return this._allDestinations;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestination {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#account_api DataDatabricksAccountNetworkPolicies#account_api}
  */
  readonly accountApi?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationAccountApi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#account_databricks_one DataDatabricksAccountNetworkPolicies#account_databricks_one}
  */
  readonly accountDatabricksOne?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationAccountDatabricksOne;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#account_ui DataDatabricksAccountNetworkPolicies#account_ui}
  */
  readonly accountUi?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationAccountUi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#all_destinations DataDatabricksAccountNetworkPolicies#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#apps_runtime DataDatabricksAccountNetworkPolicies#apps_runtime}
  */
  readonly appsRuntime?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationAppsRuntime;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#lakebase_runtime DataDatabricksAccountNetworkPolicies#lakebase_runtime}
  */
  readonly lakebaseRuntime?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationLakebaseRuntime;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#workspace_api DataDatabricksAccountNetworkPolicies#workspace_api}
  */
  readonly workspaceApi?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationWorkspaceApi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#workspace_ui DataDatabricksAccountNetworkPolicies#workspace_ui}
  */
  readonly workspaceUi?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationWorkspaceUi;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_api: dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationAccountApiToTerraform(struct!.accountApi),
    account_databricks_one: dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationAccountDatabricksOneToTerraform(struct!.accountDatabricksOne),
    account_ui: dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationAccountUiToTerraform(struct!.accountUi),
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
    apps_runtime: dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationAppsRuntimeToTerraform(struct!.appsRuntime),
    lakebase_runtime: dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationLakebaseRuntimeToTerraform(struct!.lakebaseRuntime),
    workspace_api: dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationWorkspaceApiToTerraform(struct!.workspaceApi),
    workspace_ui: dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationWorkspaceUiToTerraform(struct!.workspaceUi),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_api: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationAccountApiToHclTerraform(struct!.accountApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationAccountApi",
    },
    account_databricks_one: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationAccountDatabricksOneToHclTerraform(struct!.accountDatabricksOne),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationAccountDatabricksOne",
    },
    account_ui: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationAccountUiToHclTerraform(struct!.accountUi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationAccountUi",
    },
    all_destinations: {
      value: cdktn.booleanToHclTerraform(struct!.allDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    apps_runtime: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationAppsRuntimeToHclTerraform(struct!.appsRuntime),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationAppsRuntime",
    },
    lakebase_runtime: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationLakebaseRuntimeToHclTerraform(struct!.lakebaseRuntime),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationLakebaseRuntime",
    },
    workspace_api: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationWorkspaceApiToHclTerraform(struct!.workspaceApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationWorkspaceApi",
    },
    workspace_ui: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationWorkspaceUiToHclTerraform(struct!.workspaceUi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationWorkspaceUi",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestination | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountApi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountApi = this._accountApi?.internalValue;
    }
    if (this._accountDatabricksOne?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountDatabricksOne = this._accountDatabricksOne?.internalValue;
    }
    if (this._accountUi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountUi = this._accountUi?.internalValue;
    }
    if (this._allDestinations !== undefined) {
      hasAnyValues = true;
      internalValueResult.allDestinations = this._allDestinations;
    }
    if (this._appsRuntime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appsRuntime = this._appsRuntime?.internalValue;
    }
    if (this._lakebaseRuntime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lakebaseRuntime = this._lakebaseRuntime?.internalValue;
    }
    if (this._workspaceApi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceApi = this._workspaceApi?.internalValue;
    }
    if (this._workspaceUi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceUi = this._workspaceUi?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestination | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountApi.internalValue = undefined;
      this._accountDatabricksOne.internalValue = undefined;
      this._accountUi.internalValue = undefined;
      this._allDestinations = undefined;
      this._appsRuntime.internalValue = undefined;
      this._lakebaseRuntime.internalValue = undefined;
      this._workspaceApi.internalValue = undefined;
      this._workspaceUi.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountApi.internalValue = value.accountApi;
      this._accountDatabricksOne.internalValue = value.accountDatabricksOne;
      this._accountUi.internalValue = value.accountUi;
      this._allDestinations = value.allDestinations;
      this._appsRuntime.internalValue = value.appsRuntime;
      this._lakebaseRuntime.internalValue = value.lakebaseRuntime;
      this._workspaceApi.internalValue = value.workspaceApi;
      this._workspaceUi.internalValue = value.workspaceUi;
    }
  }

  // account_api - computed: true, optional: true, required: false
  private _accountApi = new DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationAccountApiOutputReference(this, "account_api");
  public get accountApi() {
    return this._accountApi;
  }
  public putAccountApi(value: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationAccountApi) {
    this._accountApi.internalValue = value;
  }
  public resetAccountApi() {
    this._accountApi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountApiInput() {
    return this._accountApi.internalValue;
  }

  // account_databricks_one - computed: true, optional: true, required: false
  private _accountDatabricksOne = new DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationAccountDatabricksOneOutputReference(this, "account_databricks_one");
  public get accountDatabricksOne() {
    return this._accountDatabricksOne;
  }
  public putAccountDatabricksOne(value: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationAccountDatabricksOne) {
    this._accountDatabricksOne.internalValue = value;
  }
  public resetAccountDatabricksOne() {
    this._accountDatabricksOne.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountDatabricksOneInput() {
    return this._accountDatabricksOne.internalValue;
  }

  // account_ui - computed: true, optional: true, required: false
  private _accountUi = new DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationAccountUiOutputReference(this, "account_ui");
  public get accountUi() {
    return this._accountUi;
  }
  public putAccountUi(value: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationAccountUi) {
    this._accountUi.internalValue = value;
  }
  public resetAccountUi() {
    this._accountUi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountUiInput() {
    return this._accountUi.internalValue;
  }

  // all_destinations - computed: true, optional: true, required: false
  private _allDestinations?: boolean | cdktn.IResolvable; 
  public get allDestinations() {
    return this.getBooleanAttribute('all_destinations');
  }
  public set allDestinations(value: boolean | cdktn.IResolvable) {
    this._allDestinations = value;
  }
  public resetAllDestinations() {
    this._allDestinations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allDestinationsInput() {
    return this._allDestinations;
  }

  // apps_runtime - computed: true, optional: true, required: false
  private _appsRuntime = new DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationAppsRuntimeOutputReference(this, "apps_runtime");
  public get appsRuntime() {
    return this._appsRuntime;
  }
  public putAppsRuntime(value: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationAppsRuntime) {
    this._appsRuntime.internalValue = value;
  }
  public resetAppsRuntime() {
    this._appsRuntime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appsRuntimeInput() {
    return this._appsRuntime.internalValue;
  }

  // lakebase_runtime - computed: true, optional: true, required: false
  private _lakebaseRuntime = new DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationLakebaseRuntimeOutputReference(this, "lakebase_runtime");
  public get lakebaseRuntime() {
    return this._lakebaseRuntime;
  }
  public putLakebaseRuntime(value: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationLakebaseRuntime) {
    this._lakebaseRuntime.internalValue = value;
  }
  public resetLakebaseRuntime() {
    this._lakebaseRuntime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lakebaseRuntimeInput() {
    return this._lakebaseRuntime.internalValue;
  }

  // workspace_api - computed: true, optional: true, required: false
  private _workspaceApi = new DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationWorkspaceApiOutputReference(this, "workspace_api");
  public get workspaceApi() {
    return this._workspaceApi;
  }
  public putWorkspaceApi(value: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationWorkspaceApi) {
    this._workspaceApi.internalValue = value;
  }
  public resetWorkspaceApi() {
    this._workspaceApi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceApiInput() {
    return this._workspaceApi.internalValue;
  }

  // workspace_ui - computed: true, optional: true, required: false
  private _workspaceUi = new DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationWorkspaceUiOutputReference(this, "workspace_ui");
  public get workspaceUi() {
    return this._workspaceUi;
  }
  public putWorkspaceUi(value: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationWorkspaceUi) {
    this._workspaceUi.internalValue = value;
  }
  public resetWorkspaceUi() {
    this._workspaceUi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceUiInput() {
    return this._workspaceUi.internalValue;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesOriginEndpoints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#endpoint_ids DataDatabricksAccountNetworkPolicies#endpoint_ids}
  */
  readonly endpointIds?: string[];
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesOriginEndpointsToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesOriginEndpoints | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.endpointIds),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesOriginEndpointsToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesOriginEndpoints | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.endpointIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesOriginEndpointsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesOriginEndpoints | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpointIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointIds = this._endpointIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesOriginEndpoints | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpointIds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpointIds = value.endpointIds;
    }
  }

  // endpoint_ids - computed: true, optional: true, required: false
  private _endpointIds?: string[]; 
  public get endpointIds() {
    return this.getListAttribute('endpoint_ids');
  }
  public set endpointIds(value: string[]) {
    this._endpointIds = value;
  }
  public resetEndpointIds() {
    this._endpointIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointIdsInput() {
    return this._endpointIds;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesOrigin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#all_private_access DataDatabricksAccountNetworkPolicies#all_private_access}
  */
  readonly allPrivateAccess?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#all_registered_endpoints DataDatabricksAccountNetworkPolicies#all_registered_endpoints}
  */
  readonly allRegisteredEndpoints?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#azure_workspace_private_link DataDatabricksAccountNetworkPolicies#azure_workspace_private_link}
  */
  readonly azureWorkspacePrivateLink?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#endpoints DataDatabricksAccountNetworkPolicies#endpoints}
  */
  readonly endpoints?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesOriginEndpoints;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesOriginToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesOrigin | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_private_access: cdktn.booleanToTerraform(struct!.allPrivateAccess),
    all_registered_endpoints: cdktn.booleanToTerraform(struct!.allRegisteredEndpoints),
    azure_workspace_private_link: cdktn.booleanToTerraform(struct!.azureWorkspacePrivateLink),
    endpoints: dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesOriginEndpointsToTerraform(struct!.endpoints),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesOriginToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesOrigin | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_private_access: {
      value: cdktn.booleanToHclTerraform(struct!.allPrivateAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    all_registered_endpoints: {
      value: cdktn.booleanToHclTerraform(struct!.allRegisteredEndpoints),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    azure_workspace_private_link: {
      value: cdktn.booleanToHclTerraform(struct!.azureWorkspacePrivateLink),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    endpoints: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesOriginEndpointsToHclTerraform(struct!.endpoints),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesOriginEndpoints",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesOriginOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesOrigin | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allPrivateAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.allPrivateAccess = this._allPrivateAccess;
    }
    if (this._allRegisteredEndpoints !== undefined) {
      hasAnyValues = true;
      internalValueResult.allRegisteredEndpoints = this._allRegisteredEndpoints;
    }
    if (this._azureWorkspacePrivateLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureWorkspacePrivateLink = this._azureWorkspacePrivateLink;
    }
    if (this._endpoints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoints = this._endpoints?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesOrigin | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allPrivateAccess = undefined;
      this._allRegisteredEndpoints = undefined;
      this._azureWorkspacePrivateLink = undefined;
      this._endpoints.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allPrivateAccess = value.allPrivateAccess;
      this._allRegisteredEndpoints = value.allRegisteredEndpoints;
      this._azureWorkspacePrivateLink = value.azureWorkspacePrivateLink;
      this._endpoints.internalValue = value.endpoints;
    }
  }

  // all_private_access - computed: true, optional: true, required: false
  private _allPrivateAccess?: boolean | cdktn.IResolvable; 
  public get allPrivateAccess() {
    return this.getBooleanAttribute('all_private_access');
  }
  public set allPrivateAccess(value: boolean | cdktn.IResolvable) {
    this._allPrivateAccess = value;
  }
  public resetAllPrivateAccess() {
    this._allPrivateAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allPrivateAccessInput() {
    return this._allPrivateAccess;
  }

  // all_registered_endpoints - computed: true, optional: true, required: false
  private _allRegisteredEndpoints?: boolean | cdktn.IResolvable; 
  public get allRegisteredEndpoints() {
    return this.getBooleanAttribute('all_registered_endpoints');
  }
  public set allRegisteredEndpoints(value: boolean | cdktn.IResolvable) {
    this._allRegisteredEndpoints = value;
  }
  public resetAllRegisteredEndpoints() {
    this._allRegisteredEndpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allRegisteredEndpointsInput() {
    return this._allRegisteredEndpoints;
  }

  // azure_workspace_private_link - computed: true, optional: true, required: false
  private _azureWorkspacePrivateLink?: boolean | cdktn.IResolvable; 
  public get azureWorkspacePrivateLink() {
    return this.getBooleanAttribute('azure_workspace_private_link');
  }
  public set azureWorkspacePrivateLink(value: boolean | cdktn.IResolvable) {
    this._azureWorkspacePrivateLink = value;
  }
  public resetAzureWorkspacePrivateLink() {
    this._azureWorkspacePrivateLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureWorkspacePrivateLinkInput() {
    return this._azureWorkspacePrivateLink;
  }

  // endpoints - computed: true, optional: true, required: false
  private _endpoints = new DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesOriginEndpointsOutputReference(this, "endpoints");
  public get endpoints() {
    return this._endpoints;
  }
  public putEndpoints(value: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesOriginEndpoints) {
    this._endpoints.internalValue = value;
  }
  public resetEndpoints() {
    this._endpoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsInput() {
    return this._endpoints.internalValue;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#authentication DataDatabricksAccountNetworkPolicies#authentication}
  */
  readonly authentication?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesAuthentication;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#destination DataDatabricksAccountNetworkPolicies#destination}
  */
  readonly destination?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestination;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#label DataDatabricksAccountNetworkPolicies#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#origin DataDatabricksAccountNetworkPolicies#origin}
  */
  readonly origin?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesOrigin;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesAuthenticationToTerraform(struct!.authentication),
    destination: dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationToTerraform(struct!.destination),
    label: cdktn.stringToTerraform(struct!.label),
    origin: dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesOriginToTerraform(struct!.origin),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesAuthentication",
    },
    destination: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestination",
    },
    label: {
      value: cdktn.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesOriginToHclTerraform(struct!.origin),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesOrigin",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRules | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._origin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.origin = this._origin?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRules | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication.internalValue = undefined;
      this._destination.internalValue = undefined;
      this._label = undefined;
      this._origin.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authentication.internalValue = value.authentication;
      this._destination.internalValue = value.destination;
      this._label = value.label;
      this._origin.internalValue = value.origin;
    }
  }

  // authentication - computed: true, optional: true, required: false
  private _authentication = new DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // destination - computed: true, optional: true, required: false
  private _destination = new DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesDestination) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // label - computed: true, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // origin - computed: true, optional: true, required: false
  private _origin = new DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesOriginOutputReference(this, "origin");
  public get origin() {
    return this._origin;
  }
  public putOrigin(value: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesOrigin) {
    this._origin.internalValue = value;
  }
  public resetOrigin() {
    this._origin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin.internalValue;
  }
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRules[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesOutputReference {
    return new DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#allow_rules DataDatabricksAccountNetworkPolicies#allow_rules}
  */
  readonly allowRules?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRules[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#deny_rules DataDatabricksAccountNetworkPolicies#deny_rules}
  */
  readonly denyRules?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRules[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#restriction_mode DataDatabricksAccountNetworkPolicies#restriction_mode}
  */
  readonly restrictionMode: string;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccess | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_rules: cdktn.listMapper(dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesToTerraform, false)(struct!.allowRules),
    deny_rules: cdktn.listMapper(dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesToTerraform, false)(struct!.denyRules),
    restriction_mode: cdktn.stringToTerraform(struct!.restrictionMode),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccess | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_rules: {
      value: cdktn.listMapperHcl(dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesToHclTerraform, false)(struct!.allowRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesList",
    },
    deny_rules: {
      value: cdktn.listMapperHcl(dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesToHclTerraform, false)(struct!.denyRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesList",
    },
    restriction_mode: {
      value: cdktn.stringToHclTerraform(struct!.restrictionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccess | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowRules = this._allowRules?.internalValue;
    }
    if (this._denyRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyRules = this._denyRules?.internalValue;
    }
    if (this._restrictionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictionMode = this._restrictionMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccess | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowRules.internalValue = undefined;
      this._denyRules.internalValue = undefined;
      this._restrictionMode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowRules.internalValue = value.allowRules;
      this._denyRules.internalValue = value.denyRules;
      this._restrictionMode = value.restrictionMode;
    }
  }

  // allow_rules - computed: true, optional: true, required: false
  private _allowRules = new DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRulesList(this, "allow_rules", false);
  public get allowRules() {
    return this._allowRules;
  }
  public putAllowRules(value: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessAllowRules[] | cdktn.IResolvable) {
    this._allowRules.internalValue = value;
  }
  public resetAllowRules() {
    this._allowRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRulesInput() {
    return this._allowRules.internalValue;
  }

  // deny_rules - computed: true, optional: true, required: false
  private _denyRules = new DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRulesList(this, "deny_rules", false);
  public get denyRules() {
    return this._denyRules;
  }
  public putDenyRules(value: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessDenyRules[] | cdktn.IResolvable) {
    this._denyRules.internalValue = value;
  }
  public resetDenyRules() {
    this._denyRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyRulesInput() {
    return this._denyRules.internalValue;
  }

  // restriction_mode - computed: true, optional: false, required: true
  private _restrictionMode?: string; 
  public get restrictionMode() {
    return this.getStringAttribute('restriction_mode');
  }
  public set restrictionMode(value: string) {
    this._restrictionMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictionModeInput() {
    return this._restrictionMode;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesAuthenticationIdentities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#principal_id DataDatabricksAccountNetworkPolicies#principal_id}
  */
  readonly principalId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#principal_type DataDatabricksAccountNetworkPolicies#principal_type}
  */
  readonly principalType?: string;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesAuthenticationIdentitiesToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesAuthenticationIdentities | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    principal_id: cdktn.numberToTerraform(struct!.principalId),
    principal_type: cdktn.stringToTerraform(struct!.principalType),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesAuthenticationIdentitiesToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesAuthenticationIdentities | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    principal_id: {
      value: cdktn.numberToHclTerraform(struct!.principalId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    principal_type: {
      value: cdktn.stringToHclTerraform(struct!.principalType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesAuthenticationIdentitiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesAuthenticationIdentities | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._principalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.principalId = this._principalId;
    }
    if (this._principalType !== undefined) {
      hasAnyValues = true;
      internalValueResult.principalType = this._principalType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesAuthenticationIdentities | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._principalId = undefined;
      this._principalType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._principalId = value.principalId;
      this._principalType = value.principalType;
    }
  }

  // principal_id - computed: true, optional: true, required: false
  private _principalId?: number; 
  public get principalId() {
    return this.getNumberAttribute('principal_id');
  }
  public set principalId(value: number) {
    this._principalId = value;
  }
  public resetPrincipalId() {
    this._principalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalIdInput() {
    return this._principalId;
  }

  // principal_type - computed: true, optional: true, required: false
  private _principalType?: string; 
  public get principalType() {
    return this.getStringAttribute('principal_type');
  }
  public set principalType(value: string) {
    this._principalType = value;
  }
  public resetPrincipalType() {
    this._principalType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalTypeInput() {
    return this._principalType;
  }
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesAuthenticationIdentitiesList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesAuthenticationIdentities[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesAuthenticationIdentitiesOutputReference {
    return new DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesAuthenticationIdentitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#identities DataDatabricksAccountNetworkPolicies#identities}
  */
  readonly identities?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesAuthenticationIdentities[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#identity_type DataDatabricksAccountNetworkPolicies#identity_type}
  */
  readonly identityType?: string;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesAuthenticationToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesAuthentication | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identities: cdktn.listMapper(dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesAuthenticationIdentitiesToTerraform, false)(struct!.identities),
    identity_type: cdktn.stringToTerraform(struct!.identityType),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesAuthenticationToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesAuthentication | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identities: {
      value: cdktn.listMapperHcl(dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesAuthenticationIdentitiesToHclTerraform, false)(struct!.identities),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesAuthenticationIdentitiesList",
    },
    identity_type: {
      value: cdktn.stringToHclTerraform(struct!.identityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesAuthentication | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identities = this._identities?.internalValue;
    }
    if (this._identityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityType = this._identityType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesAuthentication | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identities.internalValue = undefined;
      this._identityType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identities.internalValue = value.identities;
      this._identityType = value.identityType;
    }
  }

  // identities - computed: true, optional: true, required: false
  private _identities = new DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesAuthenticationIdentitiesList(this, "identities", false);
  public get identities() {
    return this._identities;
  }
  public putIdentities(value: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesAuthenticationIdentities[] | cdktn.IResolvable) {
    this._identities.internalValue = value;
  }
  public resetIdentities() {
    this._identities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identitiesInput() {
    return this._identities.internalValue;
  }

  // identity_type - computed: true, optional: true, required: false
  private _identityType?: string; 
  public get identityType() {
    return this.getStringAttribute('identity_type');
  }
  public set identityType(value: string) {
    this._identityType = value;
  }
  public resetIdentityType() {
    this._identityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityTypeInput() {
    return this._identityType;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationAccountApi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#scope_qualifier DataDatabricksAccountNetworkPolicies#scope_qualifier}
  */
  readonly scopeQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#scopes DataDatabricksAccountNetworkPolicies#scopes}
  */
  readonly scopes?: string[];
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationAccountApiToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationAccountApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope_qualifier: cdktn.stringToTerraform(struct!.scopeQualifier),
    scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationAccountApiToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationAccountApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope_qualifier: {
      value: cdktn.stringToHclTerraform(struct!.scopeQualifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scopes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationAccountApiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationAccountApi | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scopeQualifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopeQualifier = this._scopeQualifier;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationAccountApi | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scopeQualifier = undefined;
      this._scopes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scopeQualifier = value.scopeQualifier;
      this._scopes = value.scopes;
    }
  }

  // scope_qualifier - computed: true, optional: true, required: false
  private _scopeQualifier?: string; 
  public get scopeQualifier() {
    return this.getStringAttribute('scope_qualifier');
  }
  public set scopeQualifier(value: string) {
    this._scopeQualifier = value;
  }
  public resetScopeQualifier() {
    this._scopeQualifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeQualifierInput() {
    return this._scopeQualifier;
  }

  // scopes - computed: true, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationAccountDatabricksOne {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#all_destinations DataDatabricksAccountNetworkPolicies#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationAccountDatabricksOneToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationAccountDatabricksOne | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationAccountDatabricksOneToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationAccountDatabricksOne | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_destinations: {
      value: cdktn.booleanToHclTerraform(struct!.allDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationAccountDatabricksOneOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationAccountDatabricksOne | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allDestinations !== undefined) {
      hasAnyValues = true;
      internalValueResult.allDestinations = this._allDestinations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationAccountDatabricksOne | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allDestinations = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allDestinations = value.allDestinations;
    }
  }

  // all_destinations - computed: true, optional: true, required: false
  private _allDestinations?: boolean | cdktn.IResolvable; 
  public get allDestinations() {
    return this.getBooleanAttribute('all_destinations');
  }
  public set allDestinations(value: boolean | cdktn.IResolvable) {
    this._allDestinations = value;
  }
  public resetAllDestinations() {
    this._allDestinations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allDestinationsInput() {
    return this._allDestinations;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationAccountUi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#all_destinations DataDatabricksAccountNetworkPolicies#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationAccountUiToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationAccountUi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationAccountUiToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationAccountUi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_destinations: {
      value: cdktn.booleanToHclTerraform(struct!.allDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationAccountUiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationAccountUi | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allDestinations !== undefined) {
      hasAnyValues = true;
      internalValueResult.allDestinations = this._allDestinations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationAccountUi | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allDestinations = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allDestinations = value.allDestinations;
    }
  }

  // all_destinations - computed: true, optional: true, required: false
  private _allDestinations?: boolean | cdktn.IResolvable; 
  public get allDestinations() {
    return this.getBooleanAttribute('all_destinations');
  }
  public set allDestinations(value: boolean | cdktn.IResolvable) {
    this._allDestinations = value;
  }
  public resetAllDestinations() {
    this._allDestinations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allDestinationsInput() {
    return this._allDestinations;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationAppsRuntime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#all_destinations DataDatabricksAccountNetworkPolicies#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationAppsRuntimeToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationAppsRuntime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationAppsRuntimeToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationAppsRuntime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_destinations: {
      value: cdktn.booleanToHclTerraform(struct!.allDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationAppsRuntimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationAppsRuntime | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allDestinations !== undefined) {
      hasAnyValues = true;
      internalValueResult.allDestinations = this._allDestinations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationAppsRuntime | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allDestinations = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allDestinations = value.allDestinations;
    }
  }

  // all_destinations - computed: true, optional: true, required: false
  private _allDestinations?: boolean | cdktn.IResolvable; 
  public get allDestinations() {
    return this.getBooleanAttribute('all_destinations');
  }
  public set allDestinations(value: boolean | cdktn.IResolvable) {
    this._allDestinations = value;
  }
  public resetAllDestinations() {
    this._allDestinations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allDestinationsInput() {
    return this._allDestinations;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationLakebaseRuntime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#all_destinations DataDatabricksAccountNetworkPolicies#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationLakebaseRuntimeToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationLakebaseRuntime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationLakebaseRuntimeToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationLakebaseRuntime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_destinations: {
      value: cdktn.booleanToHclTerraform(struct!.allDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationLakebaseRuntimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationLakebaseRuntime | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allDestinations !== undefined) {
      hasAnyValues = true;
      internalValueResult.allDestinations = this._allDestinations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationLakebaseRuntime | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allDestinations = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allDestinations = value.allDestinations;
    }
  }

  // all_destinations - computed: true, optional: true, required: false
  private _allDestinations?: boolean | cdktn.IResolvable; 
  public get allDestinations() {
    return this.getBooleanAttribute('all_destinations');
  }
  public set allDestinations(value: boolean | cdktn.IResolvable) {
    this._allDestinations = value;
  }
  public resetAllDestinations() {
    this._allDestinations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allDestinationsInput() {
    return this._allDestinations;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationWorkspaceApi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#scope_qualifier DataDatabricksAccountNetworkPolicies#scope_qualifier}
  */
  readonly scopeQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#scopes DataDatabricksAccountNetworkPolicies#scopes}
  */
  readonly scopes?: string[];
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationWorkspaceApiToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationWorkspaceApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope_qualifier: cdktn.stringToTerraform(struct!.scopeQualifier),
    scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationWorkspaceApiToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationWorkspaceApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope_qualifier: {
      value: cdktn.stringToHclTerraform(struct!.scopeQualifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scopes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationWorkspaceApiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationWorkspaceApi | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scopeQualifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopeQualifier = this._scopeQualifier;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationWorkspaceApi | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scopeQualifier = undefined;
      this._scopes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scopeQualifier = value.scopeQualifier;
      this._scopes = value.scopes;
    }
  }

  // scope_qualifier - computed: true, optional: true, required: false
  private _scopeQualifier?: string; 
  public get scopeQualifier() {
    return this.getStringAttribute('scope_qualifier');
  }
  public set scopeQualifier(value: string) {
    this._scopeQualifier = value;
  }
  public resetScopeQualifier() {
    this._scopeQualifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeQualifierInput() {
    return this._scopeQualifier;
  }

  // scopes - computed: true, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationWorkspaceUi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#all_destinations DataDatabricksAccountNetworkPolicies#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationWorkspaceUiToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationWorkspaceUi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationWorkspaceUiToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationWorkspaceUi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_destinations: {
      value: cdktn.booleanToHclTerraform(struct!.allDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationWorkspaceUiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationWorkspaceUi | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allDestinations !== undefined) {
      hasAnyValues = true;
      internalValueResult.allDestinations = this._allDestinations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationWorkspaceUi | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allDestinations = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allDestinations = value.allDestinations;
    }
  }

  // all_destinations - computed: true, optional: true, required: false
  private _allDestinations?: boolean | cdktn.IResolvable; 
  public get allDestinations() {
    return this.getBooleanAttribute('all_destinations');
  }
  public set allDestinations(value: boolean | cdktn.IResolvable) {
    this._allDestinations = value;
  }
  public resetAllDestinations() {
    this._allDestinations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allDestinationsInput() {
    return this._allDestinations;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestination {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#account_api DataDatabricksAccountNetworkPolicies#account_api}
  */
  readonly accountApi?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationAccountApi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#account_databricks_one DataDatabricksAccountNetworkPolicies#account_databricks_one}
  */
  readonly accountDatabricksOne?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationAccountDatabricksOne;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#account_ui DataDatabricksAccountNetworkPolicies#account_ui}
  */
  readonly accountUi?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationAccountUi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#all_destinations DataDatabricksAccountNetworkPolicies#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#apps_runtime DataDatabricksAccountNetworkPolicies#apps_runtime}
  */
  readonly appsRuntime?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationAppsRuntime;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#lakebase_runtime DataDatabricksAccountNetworkPolicies#lakebase_runtime}
  */
  readonly lakebaseRuntime?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationLakebaseRuntime;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#workspace_api DataDatabricksAccountNetworkPolicies#workspace_api}
  */
  readonly workspaceApi?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationWorkspaceApi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#workspace_ui DataDatabricksAccountNetworkPolicies#workspace_ui}
  */
  readonly workspaceUi?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationWorkspaceUi;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_api: dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationAccountApiToTerraform(struct!.accountApi),
    account_databricks_one: dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationAccountDatabricksOneToTerraform(struct!.accountDatabricksOne),
    account_ui: dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationAccountUiToTerraform(struct!.accountUi),
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
    apps_runtime: dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationAppsRuntimeToTerraform(struct!.appsRuntime),
    lakebase_runtime: dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationLakebaseRuntimeToTerraform(struct!.lakebaseRuntime),
    workspace_api: dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationWorkspaceApiToTerraform(struct!.workspaceApi),
    workspace_ui: dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationWorkspaceUiToTerraform(struct!.workspaceUi),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_api: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationAccountApiToHclTerraform(struct!.accountApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationAccountApi",
    },
    account_databricks_one: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationAccountDatabricksOneToHclTerraform(struct!.accountDatabricksOne),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationAccountDatabricksOne",
    },
    account_ui: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationAccountUiToHclTerraform(struct!.accountUi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationAccountUi",
    },
    all_destinations: {
      value: cdktn.booleanToHclTerraform(struct!.allDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    apps_runtime: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationAppsRuntimeToHclTerraform(struct!.appsRuntime),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationAppsRuntime",
    },
    lakebase_runtime: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationLakebaseRuntimeToHclTerraform(struct!.lakebaseRuntime),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationLakebaseRuntime",
    },
    workspace_api: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationWorkspaceApiToHclTerraform(struct!.workspaceApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationWorkspaceApi",
    },
    workspace_ui: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationWorkspaceUiToHclTerraform(struct!.workspaceUi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationWorkspaceUi",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestination | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountApi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountApi = this._accountApi?.internalValue;
    }
    if (this._accountDatabricksOne?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountDatabricksOne = this._accountDatabricksOne?.internalValue;
    }
    if (this._accountUi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountUi = this._accountUi?.internalValue;
    }
    if (this._allDestinations !== undefined) {
      hasAnyValues = true;
      internalValueResult.allDestinations = this._allDestinations;
    }
    if (this._appsRuntime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appsRuntime = this._appsRuntime?.internalValue;
    }
    if (this._lakebaseRuntime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lakebaseRuntime = this._lakebaseRuntime?.internalValue;
    }
    if (this._workspaceApi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceApi = this._workspaceApi?.internalValue;
    }
    if (this._workspaceUi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceUi = this._workspaceUi?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestination | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountApi.internalValue = undefined;
      this._accountDatabricksOne.internalValue = undefined;
      this._accountUi.internalValue = undefined;
      this._allDestinations = undefined;
      this._appsRuntime.internalValue = undefined;
      this._lakebaseRuntime.internalValue = undefined;
      this._workspaceApi.internalValue = undefined;
      this._workspaceUi.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountApi.internalValue = value.accountApi;
      this._accountDatabricksOne.internalValue = value.accountDatabricksOne;
      this._accountUi.internalValue = value.accountUi;
      this._allDestinations = value.allDestinations;
      this._appsRuntime.internalValue = value.appsRuntime;
      this._lakebaseRuntime.internalValue = value.lakebaseRuntime;
      this._workspaceApi.internalValue = value.workspaceApi;
      this._workspaceUi.internalValue = value.workspaceUi;
    }
  }

  // account_api - computed: true, optional: true, required: false
  private _accountApi = new DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationAccountApiOutputReference(this, "account_api");
  public get accountApi() {
    return this._accountApi;
  }
  public putAccountApi(value: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationAccountApi) {
    this._accountApi.internalValue = value;
  }
  public resetAccountApi() {
    this._accountApi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountApiInput() {
    return this._accountApi.internalValue;
  }

  // account_databricks_one - computed: true, optional: true, required: false
  private _accountDatabricksOne = new DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationAccountDatabricksOneOutputReference(this, "account_databricks_one");
  public get accountDatabricksOne() {
    return this._accountDatabricksOne;
  }
  public putAccountDatabricksOne(value: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationAccountDatabricksOne) {
    this._accountDatabricksOne.internalValue = value;
  }
  public resetAccountDatabricksOne() {
    this._accountDatabricksOne.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountDatabricksOneInput() {
    return this._accountDatabricksOne.internalValue;
  }

  // account_ui - computed: true, optional: true, required: false
  private _accountUi = new DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationAccountUiOutputReference(this, "account_ui");
  public get accountUi() {
    return this._accountUi;
  }
  public putAccountUi(value: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationAccountUi) {
    this._accountUi.internalValue = value;
  }
  public resetAccountUi() {
    this._accountUi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountUiInput() {
    return this._accountUi.internalValue;
  }

  // all_destinations - computed: true, optional: true, required: false
  private _allDestinations?: boolean | cdktn.IResolvable; 
  public get allDestinations() {
    return this.getBooleanAttribute('all_destinations');
  }
  public set allDestinations(value: boolean | cdktn.IResolvable) {
    this._allDestinations = value;
  }
  public resetAllDestinations() {
    this._allDestinations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allDestinationsInput() {
    return this._allDestinations;
  }

  // apps_runtime - computed: true, optional: true, required: false
  private _appsRuntime = new DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationAppsRuntimeOutputReference(this, "apps_runtime");
  public get appsRuntime() {
    return this._appsRuntime;
  }
  public putAppsRuntime(value: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationAppsRuntime) {
    this._appsRuntime.internalValue = value;
  }
  public resetAppsRuntime() {
    this._appsRuntime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appsRuntimeInput() {
    return this._appsRuntime.internalValue;
  }

  // lakebase_runtime - computed: true, optional: true, required: false
  private _lakebaseRuntime = new DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationLakebaseRuntimeOutputReference(this, "lakebase_runtime");
  public get lakebaseRuntime() {
    return this._lakebaseRuntime;
  }
  public putLakebaseRuntime(value: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationLakebaseRuntime) {
    this._lakebaseRuntime.internalValue = value;
  }
  public resetLakebaseRuntime() {
    this._lakebaseRuntime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lakebaseRuntimeInput() {
    return this._lakebaseRuntime.internalValue;
  }

  // workspace_api - computed: true, optional: true, required: false
  private _workspaceApi = new DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationWorkspaceApiOutputReference(this, "workspace_api");
  public get workspaceApi() {
    return this._workspaceApi;
  }
  public putWorkspaceApi(value: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationWorkspaceApi) {
    this._workspaceApi.internalValue = value;
  }
  public resetWorkspaceApi() {
    this._workspaceApi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceApiInput() {
    return this._workspaceApi.internalValue;
  }

  // workspace_ui - computed: true, optional: true, required: false
  private _workspaceUi = new DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationWorkspaceUiOutputReference(this, "workspace_ui");
  public get workspaceUi() {
    return this._workspaceUi;
  }
  public putWorkspaceUi(value: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationWorkspaceUi) {
    this._workspaceUi.internalValue = value;
  }
  public resetWorkspaceUi() {
    this._workspaceUi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceUiInput() {
    return this._workspaceUi.internalValue;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesOriginExcludedIpRanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#ip_ranges DataDatabricksAccountNetworkPolicies#ip_ranges}
  */
  readonly ipRanges?: string[];
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesOriginExcludedIpRangesToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesOriginExcludedIpRanges | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_ranges: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.ipRanges),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesOriginExcludedIpRangesToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesOriginExcludedIpRanges | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_ranges: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.ipRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesOriginExcludedIpRangesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesOriginExcludedIpRanges | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRanges = this._ipRanges;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesOriginExcludedIpRanges | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipRanges = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipRanges = value.ipRanges;
    }
  }

  // ip_ranges - computed: true, optional: true, required: false
  private _ipRanges?: string[]; 
  public get ipRanges() {
    return this.getListAttribute('ip_ranges');
  }
  public set ipRanges(value: string[]) {
    this._ipRanges = value;
  }
  public resetIpRanges() {
    this._ipRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangesInput() {
    return this._ipRanges;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesOriginIncludedIpRanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#ip_ranges DataDatabricksAccountNetworkPolicies#ip_ranges}
  */
  readonly ipRanges?: string[];
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesOriginIncludedIpRangesToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesOriginIncludedIpRanges | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_ranges: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.ipRanges),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesOriginIncludedIpRangesToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesOriginIncludedIpRanges | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_ranges: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.ipRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesOriginIncludedIpRangesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesOriginIncludedIpRanges | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRanges = this._ipRanges;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesOriginIncludedIpRanges | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipRanges = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipRanges = value.ipRanges;
    }
  }

  // ip_ranges - computed: true, optional: true, required: false
  private _ipRanges?: string[]; 
  public get ipRanges() {
    return this.getListAttribute('ip_ranges');
  }
  public set ipRanges(value: string[]) {
    this._ipRanges = value;
  }
  public resetIpRanges() {
    this._ipRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangesInput() {
    return this._ipRanges;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesOrigin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#all_ip_ranges DataDatabricksAccountNetworkPolicies#all_ip_ranges}
  */
  readonly allIpRanges?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#excluded_ip_ranges DataDatabricksAccountNetworkPolicies#excluded_ip_ranges}
  */
  readonly excludedIpRanges?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesOriginExcludedIpRanges;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#included_ip_ranges DataDatabricksAccountNetworkPolicies#included_ip_ranges}
  */
  readonly includedIpRanges?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesOriginIncludedIpRanges;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesOriginToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesOrigin | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_ip_ranges: cdktn.booleanToTerraform(struct!.allIpRanges),
    excluded_ip_ranges: dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesOriginExcludedIpRangesToTerraform(struct!.excludedIpRanges),
    included_ip_ranges: dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesOriginIncludedIpRangesToTerraform(struct!.includedIpRanges),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesOriginToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesOrigin | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_ip_ranges: {
      value: cdktn.booleanToHclTerraform(struct!.allIpRanges),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    excluded_ip_ranges: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesOriginExcludedIpRangesToHclTerraform(struct!.excludedIpRanges),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesOriginExcludedIpRanges",
    },
    included_ip_ranges: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesOriginIncludedIpRangesToHclTerraform(struct!.includedIpRanges),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesOriginIncludedIpRanges",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesOriginOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesOrigin | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allIpRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.allIpRanges = this._allIpRanges;
    }
    if (this._excludedIpRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedIpRanges = this._excludedIpRanges?.internalValue;
    }
    if (this._includedIpRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedIpRanges = this._includedIpRanges?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesOrigin | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allIpRanges = undefined;
      this._excludedIpRanges.internalValue = undefined;
      this._includedIpRanges.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allIpRanges = value.allIpRanges;
      this._excludedIpRanges.internalValue = value.excludedIpRanges;
      this._includedIpRanges.internalValue = value.includedIpRanges;
    }
  }

  // all_ip_ranges - computed: true, optional: true, required: false
  private _allIpRanges?: boolean | cdktn.IResolvable; 
  public get allIpRanges() {
    return this.getBooleanAttribute('all_ip_ranges');
  }
  public set allIpRanges(value: boolean | cdktn.IResolvable) {
    this._allIpRanges = value;
  }
  public resetAllIpRanges() {
    this._allIpRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allIpRangesInput() {
    return this._allIpRanges;
  }

  // excluded_ip_ranges - computed: true, optional: true, required: false
  private _excludedIpRanges = new DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesOriginExcludedIpRangesOutputReference(this, "excluded_ip_ranges");
  public get excludedIpRanges() {
    return this._excludedIpRanges;
  }
  public putExcludedIpRanges(value: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesOriginExcludedIpRanges) {
    this._excludedIpRanges.internalValue = value;
  }
  public resetExcludedIpRanges() {
    this._excludedIpRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedIpRangesInput() {
    return this._excludedIpRanges.internalValue;
  }

  // included_ip_ranges - computed: true, optional: true, required: false
  private _includedIpRanges = new DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesOriginIncludedIpRangesOutputReference(this, "included_ip_ranges");
  public get includedIpRanges() {
    return this._includedIpRanges;
  }
  public putIncludedIpRanges(value: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesOriginIncludedIpRanges) {
    this._includedIpRanges.internalValue = value;
  }
  public resetIncludedIpRanges() {
    this._includedIpRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedIpRangesInput() {
    return this._includedIpRanges.internalValue;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#authentication DataDatabricksAccountNetworkPolicies#authentication}
  */
  readonly authentication?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesAuthentication;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#destination DataDatabricksAccountNetworkPolicies#destination}
  */
  readonly destination?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestination;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#label DataDatabricksAccountNetworkPolicies#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#origin DataDatabricksAccountNetworkPolicies#origin}
  */
  readonly origin?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesOrigin;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesAuthenticationToTerraform(struct!.authentication),
    destination: dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationToTerraform(struct!.destination),
    label: cdktn.stringToTerraform(struct!.label),
    origin: dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesOriginToTerraform(struct!.origin),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesAuthentication",
    },
    destination: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestination",
    },
    label: {
      value: cdktn.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesOriginToHclTerraform(struct!.origin),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesOrigin",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRules | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._origin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.origin = this._origin?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRules | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication.internalValue = undefined;
      this._destination.internalValue = undefined;
      this._label = undefined;
      this._origin.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authentication.internalValue = value.authentication;
      this._destination.internalValue = value.destination;
      this._label = value.label;
      this._origin.internalValue = value.origin;
    }
  }

  // authentication - computed: true, optional: true, required: false
  private _authentication = new DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // destination - computed: true, optional: true, required: false
  private _destination = new DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesDestination) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // label - computed: true, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // origin - computed: true, optional: true, required: false
  private _origin = new DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesOriginOutputReference(this, "origin");
  public get origin() {
    return this._origin;
  }
  public putOrigin(value: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesOrigin) {
    this._origin.internalValue = value;
  }
  public resetOrigin() {
    this._origin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin.internalValue;
  }
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRules[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesOutputReference {
    return new DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesAuthenticationIdentities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#principal_id DataDatabricksAccountNetworkPolicies#principal_id}
  */
  readonly principalId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#principal_type DataDatabricksAccountNetworkPolicies#principal_type}
  */
  readonly principalType?: string;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesAuthenticationIdentitiesToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesAuthenticationIdentities | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    principal_id: cdktn.numberToTerraform(struct!.principalId),
    principal_type: cdktn.stringToTerraform(struct!.principalType),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesAuthenticationIdentitiesToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesAuthenticationIdentities | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    principal_id: {
      value: cdktn.numberToHclTerraform(struct!.principalId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    principal_type: {
      value: cdktn.stringToHclTerraform(struct!.principalType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesAuthenticationIdentitiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesAuthenticationIdentities | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._principalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.principalId = this._principalId;
    }
    if (this._principalType !== undefined) {
      hasAnyValues = true;
      internalValueResult.principalType = this._principalType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesAuthenticationIdentities | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._principalId = undefined;
      this._principalType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._principalId = value.principalId;
      this._principalType = value.principalType;
    }
  }

  // principal_id - computed: true, optional: true, required: false
  private _principalId?: number; 
  public get principalId() {
    return this.getNumberAttribute('principal_id');
  }
  public set principalId(value: number) {
    this._principalId = value;
  }
  public resetPrincipalId() {
    this._principalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalIdInput() {
    return this._principalId;
  }

  // principal_type - computed: true, optional: true, required: false
  private _principalType?: string; 
  public get principalType() {
    return this.getStringAttribute('principal_type');
  }
  public set principalType(value: string) {
    this._principalType = value;
  }
  public resetPrincipalType() {
    this._principalType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalTypeInput() {
    return this._principalType;
  }
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesAuthenticationIdentitiesList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesAuthenticationIdentities[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesAuthenticationIdentitiesOutputReference {
    return new DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesAuthenticationIdentitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#identities DataDatabricksAccountNetworkPolicies#identities}
  */
  readonly identities?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesAuthenticationIdentities[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#identity_type DataDatabricksAccountNetworkPolicies#identity_type}
  */
  readonly identityType?: string;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesAuthenticationToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesAuthentication | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identities: cdktn.listMapper(dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesAuthenticationIdentitiesToTerraform, false)(struct!.identities),
    identity_type: cdktn.stringToTerraform(struct!.identityType),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesAuthenticationToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesAuthentication | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identities: {
      value: cdktn.listMapperHcl(dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesAuthenticationIdentitiesToHclTerraform, false)(struct!.identities),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesAuthenticationIdentitiesList",
    },
    identity_type: {
      value: cdktn.stringToHclTerraform(struct!.identityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesAuthentication | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identities = this._identities?.internalValue;
    }
    if (this._identityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityType = this._identityType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesAuthentication | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identities.internalValue = undefined;
      this._identityType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identities.internalValue = value.identities;
      this._identityType = value.identityType;
    }
  }

  // identities - computed: true, optional: true, required: false
  private _identities = new DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesAuthenticationIdentitiesList(this, "identities", false);
  public get identities() {
    return this._identities;
  }
  public putIdentities(value: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesAuthenticationIdentities[] | cdktn.IResolvable) {
    this._identities.internalValue = value;
  }
  public resetIdentities() {
    this._identities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identitiesInput() {
    return this._identities.internalValue;
  }

  // identity_type - computed: true, optional: true, required: false
  private _identityType?: string; 
  public get identityType() {
    return this.getStringAttribute('identity_type');
  }
  public set identityType(value: string) {
    this._identityType = value;
  }
  public resetIdentityType() {
    this._identityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityTypeInput() {
    return this._identityType;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationAccountApi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#scope_qualifier DataDatabricksAccountNetworkPolicies#scope_qualifier}
  */
  readonly scopeQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#scopes DataDatabricksAccountNetworkPolicies#scopes}
  */
  readonly scopes?: string[];
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationAccountApiToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationAccountApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope_qualifier: cdktn.stringToTerraform(struct!.scopeQualifier),
    scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationAccountApiToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationAccountApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope_qualifier: {
      value: cdktn.stringToHclTerraform(struct!.scopeQualifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scopes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationAccountApiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationAccountApi | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scopeQualifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopeQualifier = this._scopeQualifier;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationAccountApi | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scopeQualifier = undefined;
      this._scopes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scopeQualifier = value.scopeQualifier;
      this._scopes = value.scopes;
    }
  }

  // scope_qualifier - computed: true, optional: true, required: false
  private _scopeQualifier?: string; 
  public get scopeQualifier() {
    return this.getStringAttribute('scope_qualifier');
  }
  public set scopeQualifier(value: string) {
    this._scopeQualifier = value;
  }
  public resetScopeQualifier() {
    this._scopeQualifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeQualifierInput() {
    return this._scopeQualifier;
  }

  // scopes - computed: true, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationAccountDatabricksOne {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#all_destinations DataDatabricksAccountNetworkPolicies#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationAccountDatabricksOneToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationAccountDatabricksOne | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationAccountDatabricksOneToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationAccountDatabricksOne | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_destinations: {
      value: cdktn.booleanToHclTerraform(struct!.allDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationAccountDatabricksOneOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationAccountDatabricksOne | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allDestinations !== undefined) {
      hasAnyValues = true;
      internalValueResult.allDestinations = this._allDestinations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationAccountDatabricksOne | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allDestinations = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allDestinations = value.allDestinations;
    }
  }

  // all_destinations - computed: true, optional: true, required: false
  private _allDestinations?: boolean | cdktn.IResolvable; 
  public get allDestinations() {
    return this.getBooleanAttribute('all_destinations');
  }
  public set allDestinations(value: boolean | cdktn.IResolvable) {
    this._allDestinations = value;
  }
  public resetAllDestinations() {
    this._allDestinations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allDestinationsInput() {
    return this._allDestinations;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationAccountUi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#all_destinations DataDatabricksAccountNetworkPolicies#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationAccountUiToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationAccountUi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationAccountUiToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationAccountUi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_destinations: {
      value: cdktn.booleanToHclTerraform(struct!.allDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationAccountUiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationAccountUi | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allDestinations !== undefined) {
      hasAnyValues = true;
      internalValueResult.allDestinations = this._allDestinations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationAccountUi | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allDestinations = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allDestinations = value.allDestinations;
    }
  }

  // all_destinations - computed: true, optional: true, required: false
  private _allDestinations?: boolean | cdktn.IResolvable; 
  public get allDestinations() {
    return this.getBooleanAttribute('all_destinations');
  }
  public set allDestinations(value: boolean | cdktn.IResolvable) {
    this._allDestinations = value;
  }
  public resetAllDestinations() {
    this._allDestinations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allDestinationsInput() {
    return this._allDestinations;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationAppsRuntime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#all_destinations DataDatabricksAccountNetworkPolicies#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationAppsRuntimeToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationAppsRuntime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationAppsRuntimeToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationAppsRuntime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_destinations: {
      value: cdktn.booleanToHclTerraform(struct!.allDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationAppsRuntimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationAppsRuntime | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allDestinations !== undefined) {
      hasAnyValues = true;
      internalValueResult.allDestinations = this._allDestinations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationAppsRuntime | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allDestinations = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allDestinations = value.allDestinations;
    }
  }

  // all_destinations - computed: true, optional: true, required: false
  private _allDestinations?: boolean | cdktn.IResolvable; 
  public get allDestinations() {
    return this.getBooleanAttribute('all_destinations');
  }
  public set allDestinations(value: boolean | cdktn.IResolvable) {
    this._allDestinations = value;
  }
  public resetAllDestinations() {
    this._allDestinations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allDestinationsInput() {
    return this._allDestinations;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationLakebaseRuntime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#all_destinations DataDatabricksAccountNetworkPolicies#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationLakebaseRuntimeToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationLakebaseRuntime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationLakebaseRuntimeToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationLakebaseRuntime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_destinations: {
      value: cdktn.booleanToHclTerraform(struct!.allDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationLakebaseRuntimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationLakebaseRuntime | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allDestinations !== undefined) {
      hasAnyValues = true;
      internalValueResult.allDestinations = this._allDestinations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationLakebaseRuntime | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allDestinations = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allDestinations = value.allDestinations;
    }
  }

  // all_destinations - computed: true, optional: true, required: false
  private _allDestinations?: boolean | cdktn.IResolvable; 
  public get allDestinations() {
    return this.getBooleanAttribute('all_destinations');
  }
  public set allDestinations(value: boolean | cdktn.IResolvable) {
    this._allDestinations = value;
  }
  public resetAllDestinations() {
    this._allDestinations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allDestinationsInput() {
    return this._allDestinations;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationWorkspaceApi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#scope_qualifier DataDatabricksAccountNetworkPolicies#scope_qualifier}
  */
  readonly scopeQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#scopes DataDatabricksAccountNetworkPolicies#scopes}
  */
  readonly scopes?: string[];
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationWorkspaceApiToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationWorkspaceApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope_qualifier: cdktn.stringToTerraform(struct!.scopeQualifier),
    scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationWorkspaceApiToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationWorkspaceApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope_qualifier: {
      value: cdktn.stringToHclTerraform(struct!.scopeQualifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scopes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationWorkspaceApiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationWorkspaceApi | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scopeQualifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopeQualifier = this._scopeQualifier;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationWorkspaceApi | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scopeQualifier = undefined;
      this._scopes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scopeQualifier = value.scopeQualifier;
      this._scopes = value.scopes;
    }
  }

  // scope_qualifier - computed: true, optional: true, required: false
  private _scopeQualifier?: string; 
  public get scopeQualifier() {
    return this.getStringAttribute('scope_qualifier');
  }
  public set scopeQualifier(value: string) {
    this._scopeQualifier = value;
  }
  public resetScopeQualifier() {
    this._scopeQualifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeQualifierInput() {
    return this._scopeQualifier;
  }

  // scopes - computed: true, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationWorkspaceUi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#all_destinations DataDatabricksAccountNetworkPolicies#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationWorkspaceUiToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationWorkspaceUi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationWorkspaceUiToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationWorkspaceUi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_destinations: {
      value: cdktn.booleanToHclTerraform(struct!.allDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationWorkspaceUiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationWorkspaceUi | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allDestinations !== undefined) {
      hasAnyValues = true;
      internalValueResult.allDestinations = this._allDestinations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationWorkspaceUi | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allDestinations = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allDestinations = value.allDestinations;
    }
  }

  // all_destinations - computed: true, optional: true, required: false
  private _allDestinations?: boolean | cdktn.IResolvable; 
  public get allDestinations() {
    return this.getBooleanAttribute('all_destinations');
  }
  public set allDestinations(value: boolean | cdktn.IResolvable) {
    this._allDestinations = value;
  }
  public resetAllDestinations() {
    this._allDestinations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allDestinationsInput() {
    return this._allDestinations;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestination {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#account_api DataDatabricksAccountNetworkPolicies#account_api}
  */
  readonly accountApi?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationAccountApi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#account_databricks_one DataDatabricksAccountNetworkPolicies#account_databricks_one}
  */
  readonly accountDatabricksOne?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationAccountDatabricksOne;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#account_ui DataDatabricksAccountNetworkPolicies#account_ui}
  */
  readonly accountUi?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationAccountUi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#all_destinations DataDatabricksAccountNetworkPolicies#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#apps_runtime DataDatabricksAccountNetworkPolicies#apps_runtime}
  */
  readonly appsRuntime?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationAppsRuntime;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#lakebase_runtime DataDatabricksAccountNetworkPolicies#lakebase_runtime}
  */
  readonly lakebaseRuntime?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationLakebaseRuntime;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#workspace_api DataDatabricksAccountNetworkPolicies#workspace_api}
  */
  readonly workspaceApi?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationWorkspaceApi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#workspace_ui DataDatabricksAccountNetworkPolicies#workspace_ui}
  */
  readonly workspaceUi?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationWorkspaceUi;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_api: dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationAccountApiToTerraform(struct!.accountApi),
    account_databricks_one: dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationAccountDatabricksOneToTerraform(struct!.accountDatabricksOne),
    account_ui: dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationAccountUiToTerraform(struct!.accountUi),
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
    apps_runtime: dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationAppsRuntimeToTerraform(struct!.appsRuntime),
    lakebase_runtime: dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationLakebaseRuntimeToTerraform(struct!.lakebaseRuntime),
    workspace_api: dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationWorkspaceApiToTerraform(struct!.workspaceApi),
    workspace_ui: dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationWorkspaceUiToTerraform(struct!.workspaceUi),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_api: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationAccountApiToHclTerraform(struct!.accountApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationAccountApi",
    },
    account_databricks_one: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationAccountDatabricksOneToHclTerraform(struct!.accountDatabricksOne),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationAccountDatabricksOne",
    },
    account_ui: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationAccountUiToHclTerraform(struct!.accountUi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationAccountUi",
    },
    all_destinations: {
      value: cdktn.booleanToHclTerraform(struct!.allDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    apps_runtime: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationAppsRuntimeToHclTerraform(struct!.appsRuntime),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationAppsRuntime",
    },
    lakebase_runtime: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationLakebaseRuntimeToHclTerraform(struct!.lakebaseRuntime),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationLakebaseRuntime",
    },
    workspace_api: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationWorkspaceApiToHclTerraform(struct!.workspaceApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationWorkspaceApi",
    },
    workspace_ui: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationWorkspaceUiToHclTerraform(struct!.workspaceUi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationWorkspaceUi",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestination | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountApi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountApi = this._accountApi?.internalValue;
    }
    if (this._accountDatabricksOne?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountDatabricksOne = this._accountDatabricksOne?.internalValue;
    }
    if (this._accountUi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountUi = this._accountUi?.internalValue;
    }
    if (this._allDestinations !== undefined) {
      hasAnyValues = true;
      internalValueResult.allDestinations = this._allDestinations;
    }
    if (this._appsRuntime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appsRuntime = this._appsRuntime?.internalValue;
    }
    if (this._lakebaseRuntime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lakebaseRuntime = this._lakebaseRuntime?.internalValue;
    }
    if (this._workspaceApi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceApi = this._workspaceApi?.internalValue;
    }
    if (this._workspaceUi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceUi = this._workspaceUi?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestination | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountApi.internalValue = undefined;
      this._accountDatabricksOne.internalValue = undefined;
      this._accountUi.internalValue = undefined;
      this._allDestinations = undefined;
      this._appsRuntime.internalValue = undefined;
      this._lakebaseRuntime.internalValue = undefined;
      this._workspaceApi.internalValue = undefined;
      this._workspaceUi.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountApi.internalValue = value.accountApi;
      this._accountDatabricksOne.internalValue = value.accountDatabricksOne;
      this._accountUi.internalValue = value.accountUi;
      this._allDestinations = value.allDestinations;
      this._appsRuntime.internalValue = value.appsRuntime;
      this._lakebaseRuntime.internalValue = value.lakebaseRuntime;
      this._workspaceApi.internalValue = value.workspaceApi;
      this._workspaceUi.internalValue = value.workspaceUi;
    }
  }

  // account_api - computed: true, optional: true, required: false
  private _accountApi = new DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationAccountApiOutputReference(this, "account_api");
  public get accountApi() {
    return this._accountApi;
  }
  public putAccountApi(value: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationAccountApi) {
    this._accountApi.internalValue = value;
  }
  public resetAccountApi() {
    this._accountApi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountApiInput() {
    return this._accountApi.internalValue;
  }

  // account_databricks_one - computed: true, optional: true, required: false
  private _accountDatabricksOne = new DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationAccountDatabricksOneOutputReference(this, "account_databricks_one");
  public get accountDatabricksOne() {
    return this._accountDatabricksOne;
  }
  public putAccountDatabricksOne(value: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationAccountDatabricksOne) {
    this._accountDatabricksOne.internalValue = value;
  }
  public resetAccountDatabricksOne() {
    this._accountDatabricksOne.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountDatabricksOneInput() {
    return this._accountDatabricksOne.internalValue;
  }

  // account_ui - computed: true, optional: true, required: false
  private _accountUi = new DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationAccountUiOutputReference(this, "account_ui");
  public get accountUi() {
    return this._accountUi;
  }
  public putAccountUi(value: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationAccountUi) {
    this._accountUi.internalValue = value;
  }
  public resetAccountUi() {
    this._accountUi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountUiInput() {
    return this._accountUi.internalValue;
  }

  // all_destinations - computed: true, optional: true, required: false
  private _allDestinations?: boolean | cdktn.IResolvable; 
  public get allDestinations() {
    return this.getBooleanAttribute('all_destinations');
  }
  public set allDestinations(value: boolean | cdktn.IResolvable) {
    this._allDestinations = value;
  }
  public resetAllDestinations() {
    this._allDestinations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allDestinationsInput() {
    return this._allDestinations;
  }

  // apps_runtime - computed: true, optional: true, required: false
  private _appsRuntime = new DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationAppsRuntimeOutputReference(this, "apps_runtime");
  public get appsRuntime() {
    return this._appsRuntime;
  }
  public putAppsRuntime(value: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationAppsRuntime) {
    this._appsRuntime.internalValue = value;
  }
  public resetAppsRuntime() {
    this._appsRuntime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appsRuntimeInput() {
    return this._appsRuntime.internalValue;
  }

  // lakebase_runtime - computed: true, optional: true, required: false
  private _lakebaseRuntime = new DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationLakebaseRuntimeOutputReference(this, "lakebase_runtime");
  public get lakebaseRuntime() {
    return this._lakebaseRuntime;
  }
  public putLakebaseRuntime(value: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationLakebaseRuntime) {
    this._lakebaseRuntime.internalValue = value;
  }
  public resetLakebaseRuntime() {
    this._lakebaseRuntime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lakebaseRuntimeInput() {
    return this._lakebaseRuntime.internalValue;
  }

  // workspace_api - computed: true, optional: true, required: false
  private _workspaceApi = new DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationWorkspaceApiOutputReference(this, "workspace_api");
  public get workspaceApi() {
    return this._workspaceApi;
  }
  public putWorkspaceApi(value: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationWorkspaceApi) {
    this._workspaceApi.internalValue = value;
  }
  public resetWorkspaceApi() {
    this._workspaceApi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceApiInput() {
    return this._workspaceApi.internalValue;
  }

  // workspace_ui - computed: true, optional: true, required: false
  private _workspaceUi = new DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationWorkspaceUiOutputReference(this, "workspace_ui");
  public get workspaceUi() {
    return this._workspaceUi;
  }
  public putWorkspaceUi(value: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationWorkspaceUi) {
    this._workspaceUi.internalValue = value;
  }
  public resetWorkspaceUi() {
    this._workspaceUi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceUiInput() {
    return this._workspaceUi.internalValue;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesOriginExcludedIpRanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#ip_ranges DataDatabricksAccountNetworkPolicies#ip_ranges}
  */
  readonly ipRanges?: string[];
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesOriginExcludedIpRangesToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesOriginExcludedIpRanges | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_ranges: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.ipRanges),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesOriginExcludedIpRangesToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesOriginExcludedIpRanges | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_ranges: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.ipRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesOriginExcludedIpRangesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesOriginExcludedIpRanges | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRanges = this._ipRanges;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesOriginExcludedIpRanges | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipRanges = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipRanges = value.ipRanges;
    }
  }

  // ip_ranges - computed: true, optional: true, required: false
  private _ipRanges?: string[]; 
  public get ipRanges() {
    return this.getListAttribute('ip_ranges');
  }
  public set ipRanges(value: string[]) {
    this._ipRanges = value;
  }
  public resetIpRanges() {
    this._ipRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangesInput() {
    return this._ipRanges;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesOriginIncludedIpRanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#ip_ranges DataDatabricksAccountNetworkPolicies#ip_ranges}
  */
  readonly ipRanges?: string[];
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesOriginIncludedIpRangesToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesOriginIncludedIpRanges | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_ranges: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.ipRanges),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesOriginIncludedIpRangesToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesOriginIncludedIpRanges | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_ranges: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.ipRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesOriginIncludedIpRangesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesOriginIncludedIpRanges | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRanges = this._ipRanges;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesOriginIncludedIpRanges | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipRanges = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipRanges = value.ipRanges;
    }
  }

  // ip_ranges - computed: true, optional: true, required: false
  private _ipRanges?: string[]; 
  public get ipRanges() {
    return this.getListAttribute('ip_ranges');
  }
  public set ipRanges(value: string[]) {
    this._ipRanges = value;
  }
  public resetIpRanges() {
    this._ipRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangesInput() {
    return this._ipRanges;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesOrigin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#all_ip_ranges DataDatabricksAccountNetworkPolicies#all_ip_ranges}
  */
  readonly allIpRanges?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#excluded_ip_ranges DataDatabricksAccountNetworkPolicies#excluded_ip_ranges}
  */
  readonly excludedIpRanges?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesOriginExcludedIpRanges;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#included_ip_ranges DataDatabricksAccountNetworkPolicies#included_ip_ranges}
  */
  readonly includedIpRanges?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesOriginIncludedIpRanges;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesOriginToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesOrigin | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_ip_ranges: cdktn.booleanToTerraform(struct!.allIpRanges),
    excluded_ip_ranges: dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesOriginExcludedIpRangesToTerraform(struct!.excludedIpRanges),
    included_ip_ranges: dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesOriginIncludedIpRangesToTerraform(struct!.includedIpRanges),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesOriginToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesOrigin | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_ip_ranges: {
      value: cdktn.booleanToHclTerraform(struct!.allIpRanges),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    excluded_ip_ranges: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesOriginExcludedIpRangesToHclTerraform(struct!.excludedIpRanges),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesOriginExcludedIpRanges",
    },
    included_ip_ranges: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesOriginIncludedIpRangesToHclTerraform(struct!.includedIpRanges),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesOriginIncludedIpRanges",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesOriginOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesOrigin | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allIpRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.allIpRanges = this._allIpRanges;
    }
    if (this._excludedIpRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedIpRanges = this._excludedIpRanges?.internalValue;
    }
    if (this._includedIpRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedIpRanges = this._includedIpRanges?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesOrigin | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allIpRanges = undefined;
      this._excludedIpRanges.internalValue = undefined;
      this._includedIpRanges.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allIpRanges = value.allIpRanges;
      this._excludedIpRanges.internalValue = value.excludedIpRanges;
      this._includedIpRanges.internalValue = value.includedIpRanges;
    }
  }

  // all_ip_ranges - computed: true, optional: true, required: false
  private _allIpRanges?: boolean | cdktn.IResolvable; 
  public get allIpRanges() {
    return this.getBooleanAttribute('all_ip_ranges');
  }
  public set allIpRanges(value: boolean | cdktn.IResolvable) {
    this._allIpRanges = value;
  }
  public resetAllIpRanges() {
    this._allIpRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allIpRangesInput() {
    return this._allIpRanges;
  }

  // excluded_ip_ranges - computed: true, optional: true, required: false
  private _excludedIpRanges = new DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesOriginExcludedIpRangesOutputReference(this, "excluded_ip_ranges");
  public get excludedIpRanges() {
    return this._excludedIpRanges;
  }
  public putExcludedIpRanges(value: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesOriginExcludedIpRanges) {
    this._excludedIpRanges.internalValue = value;
  }
  public resetExcludedIpRanges() {
    this._excludedIpRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedIpRangesInput() {
    return this._excludedIpRanges.internalValue;
  }

  // included_ip_ranges - computed: true, optional: true, required: false
  private _includedIpRanges = new DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesOriginIncludedIpRangesOutputReference(this, "included_ip_ranges");
  public get includedIpRanges() {
    return this._includedIpRanges;
  }
  public putIncludedIpRanges(value: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesOriginIncludedIpRanges) {
    this._includedIpRanges.internalValue = value;
  }
  public resetIncludedIpRanges() {
    this._includedIpRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedIpRangesInput() {
    return this._includedIpRanges.internalValue;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#authentication DataDatabricksAccountNetworkPolicies#authentication}
  */
  readonly authentication?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesAuthentication;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#destination DataDatabricksAccountNetworkPolicies#destination}
  */
  readonly destination?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestination;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#label DataDatabricksAccountNetworkPolicies#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#origin DataDatabricksAccountNetworkPolicies#origin}
  */
  readonly origin?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesOrigin;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesAuthenticationToTerraform(struct!.authentication),
    destination: dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationToTerraform(struct!.destination),
    label: cdktn.stringToTerraform(struct!.label),
    origin: dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesOriginToTerraform(struct!.origin),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesAuthentication",
    },
    destination: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestination",
    },
    label: {
      value: cdktn.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesOriginToHclTerraform(struct!.origin),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesOrigin",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRules | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._origin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.origin = this._origin?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRules | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication.internalValue = undefined;
      this._destination.internalValue = undefined;
      this._label = undefined;
      this._origin.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authentication.internalValue = value.authentication;
      this._destination.internalValue = value.destination;
      this._label = value.label;
      this._origin.internalValue = value.origin;
    }
  }

  // authentication - computed: true, optional: true, required: false
  private _authentication = new DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // destination - computed: true, optional: true, required: false
  private _destination = new DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesDestination) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // label - computed: true, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // origin - computed: true, optional: true, required: false
  private _origin = new DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesOriginOutputReference(this, "origin");
  public get origin() {
    return this._origin;
  }
  public putOrigin(value: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesOrigin) {
    this._origin.internalValue = value;
  }
  public resetOrigin() {
    this._origin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin.internalValue;
  }
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRules[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesOutputReference {
    return new DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#allow_rules DataDatabricksAccountNetworkPolicies#allow_rules}
  */
  readonly allowRules?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRules[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#deny_rules DataDatabricksAccountNetworkPolicies#deny_rules}
  */
  readonly denyRules?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRules[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#restriction_mode DataDatabricksAccountNetworkPolicies#restriction_mode}
  */
  readonly restrictionMode: string;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccess | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_rules: cdktn.listMapper(dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesToTerraform, false)(struct!.allowRules),
    deny_rules: cdktn.listMapper(dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesToTerraform, false)(struct!.denyRules),
    restriction_mode: cdktn.stringToTerraform(struct!.restrictionMode),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccess | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_rules: {
      value: cdktn.listMapperHcl(dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesToHclTerraform, false)(struct!.allowRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesList",
    },
    deny_rules: {
      value: cdktn.listMapperHcl(dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesToHclTerraform, false)(struct!.denyRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesList",
    },
    restriction_mode: {
      value: cdktn.stringToHclTerraform(struct!.restrictionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccess | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowRules = this._allowRules?.internalValue;
    }
    if (this._denyRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyRules = this._denyRules?.internalValue;
    }
    if (this._restrictionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictionMode = this._restrictionMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccess | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowRules.internalValue = undefined;
      this._denyRules.internalValue = undefined;
      this._restrictionMode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowRules.internalValue = value.allowRules;
      this._denyRules.internalValue = value.denyRules;
      this._restrictionMode = value.restrictionMode;
    }
  }

  // allow_rules - computed: true, optional: true, required: false
  private _allowRules = new DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRulesList(this, "allow_rules", false);
  public get allowRules() {
    return this._allowRules;
  }
  public putAllowRules(value: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessAllowRules[] | cdktn.IResolvable) {
    this._allowRules.internalValue = value;
  }
  public resetAllowRules() {
    this._allowRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRulesInput() {
    return this._allowRules.internalValue;
  }

  // deny_rules - computed: true, optional: true, required: false
  private _denyRules = new DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRulesList(this, "deny_rules", false);
  public get denyRules() {
    return this._denyRules;
  }
  public putDenyRules(value: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessDenyRules[] | cdktn.IResolvable) {
    this._denyRules.internalValue = value;
  }
  public resetDenyRules() {
    this._denyRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyRulesInput() {
    return this._denyRules.internalValue;
  }

  // restriction_mode - computed: true, optional: false, required: true
  private _restrictionMode?: string; 
  public get restrictionMode() {
    return this.getStringAttribute('restriction_mode');
  }
  public set restrictionMode(value: string) {
    this._restrictionMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictionModeInput() {
    return this._restrictionMode;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#private_access DataDatabricksAccountNetworkPolicies#private_access}
  */
  readonly privateAccess?: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccess;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#public_access DataDatabricksAccountNetworkPolicies#public_access}
  */
  readonly publicAccess?: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccess;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    private_access: dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessToTerraform(struct!.privateAccess),
    public_access: dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessToTerraform(struct!.publicAccess),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    private_access: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessToHclTerraform(struct!.privateAccess),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccess",
    },
    public_access: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessToHclTerraform(struct!.publicAccess),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccess",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._privateAccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateAccess = this._privateAccess?.internalValue;
    }
    if (this._publicAccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicAccess = this._publicAccess?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._privateAccess.internalValue = undefined;
      this._publicAccess.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._privateAccess.internalValue = value.privateAccess;
      this._publicAccess.internalValue = value.publicAccess;
    }
  }

  // private_access - computed: true, optional: true, required: false
  private _privateAccess = new DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccessOutputReference(this, "private_access");
  public get privateAccess() {
    return this._privateAccess;
  }
  public putPrivateAccess(value: DataDatabricksAccountNetworkPoliciesItemsIngressPrivateAccess) {
    this._privateAccess.internalValue = value;
  }
  public resetPrivateAccess() {
    this._privateAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateAccessInput() {
    return this._privateAccess.internalValue;
  }

  // public_access - computed: true, optional: true, required: false
  private _publicAccess = new DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccessOutputReference(this, "public_access");
  public get publicAccess() {
    return this._publicAccess;
  }
  public putPublicAccess(value: DataDatabricksAccountNetworkPoliciesItemsIngressPublicAccess) {
    this._publicAccess.internalValue = value;
  }
  public resetPublicAccess() {
    this._publicAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicAccessInput() {
    return this._publicAccess.internalValue;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesAuthenticationIdentities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#principal_id DataDatabricksAccountNetworkPolicies#principal_id}
  */
  readonly principalId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#principal_type DataDatabricksAccountNetworkPolicies#principal_type}
  */
  readonly principalType?: string;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesAuthenticationIdentitiesToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesAuthenticationIdentities | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    principal_id: cdktn.numberToTerraform(struct!.principalId),
    principal_type: cdktn.stringToTerraform(struct!.principalType),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesAuthenticationIdentitiesToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesAuthenticationIdentities | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    principal_id: {
      value: cdktn.numberToHclTerraform(struct!.principalId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    principal_type: {
      value: cdktn.stringToHclTerraform(struct!.principalType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesAuthenticationIdentitiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesAuthenticationIdentities | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._principalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.principalId = this._principalId;
    }
    if (this._principalType !== undefined) {
      hasAnyValues = true;
      internalValueResult.principalType = this._principalType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesAuthenticationIdentities | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._principalId = undefined;
      this._principalType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._principalId = value.principalId;
      this._principalType = value.principalType;
    }
  }

  // principal_id - computed: true, optional: true, required: false
  private _principalId?: number; 
  public get principalId() {
    return this.getNumberAttribute('principal_id');
  }
  public set principalId(value: number) {
    this._principalId = value;
  }
  public resetPrincipalId() {
    this._principalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalIdInput() {
    return this._principalId;
  }

  // principal_type - computed: true, optional: true, required: false
  private _principalType?: string; 
  public get principalType() {
    return this.getStringAttribute('principal_type');
  }
  public set principalType(value: string) {
    this._principalType = value;
  }
  public resetPrincipalType() {
    this._principalType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalTypeInput() {
    return this._principalType;
  }
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesAuthenticationIdentitiesList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesAuthenticationIdentities[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesAuthenticationIdentitiesOutputReference {
    return new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesAuthenticationIdentitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#identities DataDatabricksAccountNetworkPolicies#identities}
  */
  readonly identities?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesAuthenticationIdentities[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#identity_type DataDatabricksAccountNetworkPolicies#identity_type}
  */
  readonly identityType?: string;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesAuthenticationToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesAuthentication | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identities: cdktn.listMapper(dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesAuthenticationIdentitiesToTerraform, false)(struct!.identities),
    identity_type: cdktn.stringToTerraform(struct!.identityType),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesAuthenticationToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesAuthentication | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identities: {
      value: cdktn.listMapperHcl(dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesAuthenticationIdentitiesToHclTerraform, false)(struct!.identities),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesAuthenticationIdentitiesList",
    },
    identity_type: {
      value: cdktn.stringToHclTerraform(struct!.identityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesAuthentication | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identities = this._identities?.internalValue;
    }
    if (this._identityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityType = this._identityType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesAuthentication | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identities.internalValue = undefined;
      this._identityType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identities.internalValue = value.identities;
      this._identityType = value.identityType;
    }
  }

  // identities - computed: true, optional: true, required: false
  private _identities = new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesAuthenticationIdentitiesList(this, "identities", false);
  public get identities() {
    return this._identities;
  }
  public putIdentities(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesAuthenticationIdentities[] | cdktn.IResolvable) {
    this._identities.internalValue = value;
  }
  public resetIdentities() {
    this._identities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identitiesInput() {
    return this._identities.internalValue;
  }

  // identity_type - computed: true, optional: true, required: false
  private _identityType?: string; 
  public get identityType() {
    return this.getStringAttribute('identity_type');
  }
  public set identityType(value: string) {
    this._identityType = value;
  }
  public resetIdentityType() {
    this._identityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityTypeInput() {
    return this._identityType;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationAccountApi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#scope_qualifier DataDatabricksAccountNetworkPolicies#scope_qualifier}
  */
  readonly scopeQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#scopes DataDatabricksAccountNetworkPolicies#scopes}
  */
  readonly scopes?: string[];
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationAccountApiToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationAccountApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope_qualifier: cdktn.stringToTerraform(struct!.scopeQualifier),
    scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationAccountApiToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationAccountApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope_qualifier: {
      value: cdktn.stringToHclTerraform(struct!.scopeQualifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scopes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationAccountApiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationAccountApi | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scopeQualifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopeQualifier = this._scopeQualifier;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationAccountApi | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scopeQualifier = undefined;
      this._scopes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scopeQualifier = value.scopeQualifier;
      this._scopes = value.scopes;
    }
  }

  // scope_qualifier - computed: true, optional: true, required: false
  private _scopeQualifier?: string; 
  public get scopeQualifier() {
    return this.getStringAttribute('scope_qualifier');
  }
  public set scopeQualifier(value: string) {
    this._scopeQualifier = value;
  }
  public resetScopeQualifier() {
    this._scopeQualifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeQualifierInput() {
    return this._scopeQualifier;
  }

  // scopes - computed: true, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationAccountDatabricksOne {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#all_destinations DataDatabricksAccountNetworkPolicies#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationAccountDatabricksOneToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationAccountDatabricksOne | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationAccountDatabricksOneToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationAccountDatabricksOne | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_destinations: {
      value: cdktn.booleanToHclTerraform(struct!.allDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationAccountDatabricksOneOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationAccountDatabricksOne | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allDestinations !== undefined) {
      hasAnyValues = true;
      internalValueResult.allDestinations = this._allDestinations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationAccountDatabricksOne | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allDestinations = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allDestinations = value.allDestinations;
    }
  }

  // all_destinations - computed: true, optional: true, required: false
  private _allDestinations?: boolean | cdktn.IResolvable; 
  public get allDestinations() {
    return this.getBooleanAttribute('all_destinations');
  }
  public set allDestinations(value: boolean | cdktn.IResolvable) {
    this._allDestinations = value;
  }
  public resetAllDestinations() {
    this._allDestinations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allDestinationsInput() {
    return this._allDestinations;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationAccountUi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#all_destinations DataDatabricksAccountNetworkPolicies#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationAccountUiToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationAccountUi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationAccountUiToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationAccountUi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_destinations: {
      value: cdktn.booleanToHclTerraform(struct!.allDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationAccountUiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationAccountUi | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allDestinations !== undefined) {
      hasAnyValues = true;
      internalValueResult.allDestinations = this._allDestinations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationAccountUi | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allDestinations = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allDestinations = value.allDestinations;
    }
  }

  // all_destinations - computed: true, optional: true, required: false
  private _allDestinations?: boolean | cdktn.IResolvable; 
  public get allDestinations() {
    return this.getBooleanAttribute('all_destinations');
  }
  public set allDestinations(value: boolean | cdktn.IResolvable) {
    this._allDestinations = value;
  }
  public resetAllDestinations() {
    this._allDestinations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allDestinationsInput() {
    return this._allDestinations;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationAppsRuntime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#all_destinations DataDatabricksAccountNetworkPolicies#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationAppsRuntimeToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationAppsRuntime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationAppsRuntimeToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationAppsRuntime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_destinations: {
      value: cdktn.booleanToHclTerraform(struct!.allDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationAppsRuntimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationAppsRuntime | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allDestinations !== undefined) {
      hasAnyValues = true;
      internalValueResult.allDestinations = this._allDestinations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationAppsRuntime | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allDestinations = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allDestinations = value.allDestinations;
    }
  }

  // all_destinations - computed: true, optional: true, required: false
  private _allDestinations?: boolean | cdktn.IResolvable; 
  public get allDestinations() {
    return this.getBooleanAttribute('all_destinations');
  }
  public set allDestinations(value: boolean | cdktn.IResolvable) {
    this._allDestinations = value;
  }
  public resetAllDestinations() {
    this._allDestinations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allDestinationsInput() {
    return this._allDestinations;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationLakebaseRuntime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#all_destinations DataDatabricksAccountNetworkPolicies#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationLakebaseRuntimeToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationLakebaseRuntime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationLakebaseRuntimeToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationLakebaseRuntime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_destinations: {
      value: cdktn.booleanToHclTerraform(struct!.allDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationLakebaseRuntimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationLakebaseRuntime | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allDestinations !== undefined) {
      hasAnyValues = true;
      internalValueResult.allDestinations = this._allDestinations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationLakebaseRuntime | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allDestinations = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allDestinations = value.allDestinations;
    }
  }

  // all_destinations - computed: true, optional: true, required: false
  private _allDestinations?: boolean | cdktn.IResolvable; 
  public get allDestinations() {
    return this.getBooleanAttribute('all_destinations');
  }
  public set allDestinations(value: boolean | cdktn.IResolvable) {
    this._allDestinations = value;
  }
  public resetAllDestinations() {
    this._allDestinations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allDestinationsInput() {
    return this._allDestinations;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceApi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#scope_qualifier DataDatabricksAccountNetworkPolicies#scope_qualifier}
  */
  readonly scopeQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#scopes DataDatabricksAccountNetworkPolicies#scopes}
  */
  readonly scopes?: string[];
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceApiToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope_qualifier: cdktn.stringToTerraform(struct!.scopeQualifier),
    scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceApiToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope_qualifier: {
      value: cdktn.stringToHclTerraform(struct!.scopeQualifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scopes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceApiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceApi | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scopeQualifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopeQualifier = this._scopeQualifier;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceApi | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scopeQualifier = undefined;
      this._scopes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scopeQualifier = value.scopeQualifier;
      this._scopes = value.scopes;
    }
  }

  // scope_qualifier - computed: true, optional: true, required: false
  private _scopeQualifier?: string; 
  public get scopeQualifier() {
    return this.getStringAttribute('scope_qualifier');
  }
  public set scopeQualifier(value: string) {
    this._scopeQualifier = value;
  }
  public resetScopeQualifier() {
    this._scopeQualifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeQualifierInput() {
    return this._scopeQualifier;
  }

  // scopes - computed: true, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceUi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#all_destinations DataDatabricksAccountNetworkPolicies#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceUiToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceUi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceUiToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceUi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_destinations: {
      value: cdktn.booleanToHclTerraform(struct!.allDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceUiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceUi | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allDestinations !== undefined) {
      hasAnyValues = true;
      internalValueResult.allDestinations = this._allDestinations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceUi | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allDestinations = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allDestinations = value.allDestinations;
    }
  }

  // all_destinations - computed: true, optional: true, required: false
  private _allDestinations?: boolean | cdktn.IResolvable; 
  public get allDestinations() {
    return this.getBooleanAttribute('all_destinations');
  }
  public set allDestinations(value: boolean | cdktn.IResolvable) {
    this._allDestinations = value;
  }
  public resetAllDestinations() {
    this._allDestinations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allDestinationsInput() {
    return this._allDestinations;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestination {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#account_api DataDatabricksAccountNetworkPolicies#account_api}
  */
  readonly accountApi?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationAccountApi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#account_databricks_one DataDatabricksAccountNetworkPolicies#account_databricks_one}
  */
  readonly accountDatabricksOne?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationAccountDatabricksOne;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#account_ui DataDatabricksAccountNetworkPolicies#account_ui}
  */
  readonly accountUi?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationAccountUi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#all_destinations DataDatabricksAccountNetworkPolicies#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#apps_runtime DataDatabricksAccountNetworkPolicies#apps_runtime}
  */
  readonly appsRuntime?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationAppsRuntime;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#lakebase_runtime DataDatabricksAccountNetworkPolicies#lakebase_runtime}
  */
  readonly lakebaseRuntime?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationLakebaseRuntime;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#workspace_api DataDatabricksAccountNetworkPolicies#workspace_api}
  */
  readonly workspaceApi?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceApi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#workspace_ui DataDatabricksAccountNetworkPolicies#workspace_ui}
  */
  readonly workspaceUi?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceUi;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_api: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationAccountApiToTerraform(struct!.accountApi),
    account_databricks_one: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationAccountDatabricksOneToTerraform(struct!.accountDatabricksOne),
    account_ui: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationAccountUiToTerraform(struct!.accountUi),
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
    apps_runtime: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationAppsRuntimeToTerraform(struct!.appsRuntime),
    lakebase_runtime: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationLakebaseRuntimeToTerraform(struct!.lakebaseRuntime),
    workspace_api: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceApiToTerraform(struct!.workspaceApi),
    workspace_ui: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceUiToTerraform(struct!.workspaceUi),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_api: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationAccountApiToHclTerraform(struct!.accountApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationAccountApi",
    },
    account_databricks_one: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationAccountDatabricksOneToHclTerraform(struct!.accountDatabricksOne),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationAccountDatabricksOne",
    },
    account_ui: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationAccountUiToHclTerraform(struct!.accountUi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationAccountUi",
    },
    all_destinations: {
      value: cdktn.booleanToHclTerraform(struct!.allDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    apps_runtime: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationAppsRuntimeToHclTerraform(struct!.appsRuntime),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationAppsRuntime",
    },
    lakebase_runtime: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationLakebaseRuntimeToHclTerraform(struct!.lakebaseRuntime),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationLakebaseRuntime",
    },
    workspace_api: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceApiToHclTerraform(struct!.workspaceApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceApi",
    },
    workspace_ui: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceUiToHclTerraform(struct!.workspaceUi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceUi",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestination | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountApi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountApi = this._accountApi?.internalValue;
    }
    if (this._accountDatabricksOne?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountDatabricksOne = this._accountDatabricksOne?.internalValue;
    }
    if (this._accountUi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountUi = this._accountUi?.internalValue;
    }
    if (this._allDestinations !== undefined) {
      hasAnyValues = true;
      internalValueResult.allDestinations = this._allDestinations;
    }
    if (this._appsRuntime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appsRuntime = this._appsRuntime?.internalValue;
    }
    if (this._lakebaseRuntime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lakebaseRuntime = this._lakebaseRuntime?.internalValue;
    }
    if (this._workspaceApi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceApi = this._workspaceApi?.internalValue;
    }
    if (this._workspaceUi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceUi = this._workspaceUi?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestination | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountApi.internalValue = undefined;
      this._accountDatabricksOne.internalValue = undefined;
      this._accountUi.internalValue = undefined;
      this._allDestinations = undefined;
      this._appsRuntime.internalValue = undefined;
      this._lakebaseRuntime.internalValue = undefined;
      this._workspaceApi.internalValue = undefined;
      this._workspaceUi.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountApi.internalValue = value.accountApi;
      this._accountDatabricksOne.internalValue = value.accountDatabricksOne;
      this._accountUi.internalValue = value.accountUi;
      this._allDestinations = value.allDestinations;
      this._appsRuntime.internalValue = value.appsRuntime;
      this._lakebaseRuntime.internalValue = value.lakebaseRuntime;
      this._workspaceApi.internalValue = value.workspaceApi;
      this._workspaceUi.internalValue = value.workspaceUi;
    }
  }

  // account_api - computed: true, optional: true, required: false
  private _accountApi = new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationAccountApiOutputReference(this, "account_api");
  public get accountApi() {
    return this._accountApi;
  }
  public putAccountApi(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationAccountApi) {
    this._accountApi.internalValue = value;
  }
  public resetAccountApi() {
    this._accountApi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountApiInput() {
    return this._accountApi.internalValue;
  }

  // account_databricks_one - computed: true, optional: true, required: false
  private _accountDatabricksOne = new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationAccountDatabricksOneOutputReference(this, "account_databricks_one");
  public get accountDatabricksOne() {
    return this._accountDatabricksOne;
  }
  public putAccountDatabricksOne(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationAccountDatabricksOne) {
    this._accountDatabricksOne.internalValue = value;
  }
  public resetAccountDatabricksOne() {
    this._accountDatabricksOne.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountDatabricksOneInput() {
    return this._accountDatabricksOne.internalValue;
  }

  // account_ui - computed: true, optional: true, required: false
  private _accountUi = new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationAccountUiOutputReference(this, "account_ui");
  public get accountUi() {
    return this._accountUi;
  }
  public putAccountUi(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationAccountUi) {
    this._accountUi.internalValue = value;
  }
  public resetAccountUi() {
    this._accountUi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountUiInput() {
    return this._accountUi.internalValue;
  }

  // all_destinations - computed: true, optional: true, required: false
  private _allDestinations?: boolean | cdktn.IResolvable; 
  public get allDestinations() {
    return this.getBooleanAttribute('all_destinations');
  }
  public set allDestinations(value: boolean | cdktn.IResolvable) {
    this._allDestinations = value;
  }
  public resetAllDestinations() {
    this._allDestinations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allDestinationsInput() {
    return this._allDestinations;
  }

  // apps_runtime - computed: true, optional: true, required: false
  private _appsRuntime = new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationAppsRuntimeOutputReference(this, "apps_runtime");
  public get appsRuntime() {
    return this._appsRuntime;
  }
  public putAppsRuntime(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationAppsRuntime) {
    this._appsRuntime.internalValue = value;
  }
  public resetAppsRuntime() {
    this._appsRuntime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appsRuntimeInput() {
    return this._appsRuntime.internalValue;
  }

  // lakebase_runtime - computed: true, optional: true, required: false
  private _lakebaseRuntime = new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationLakebaseRuntimeOutputReference(this, "lakebase_runtime");
  public get lakebaseRuntime() {
    return this._lakebaseRuntime;
  }
  public putLakebaseRuntime(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationLakebaseRuntime) {
    this._lakebaseRuntime.internalValue = value;
  }
  public resetLakebaseRuntime() {
    this._lakebaseRuntime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lakebaseRuntimeInput() {
    return this._lakebaseRuntime.internalValue;
  }

  // workspace_api - computed: true, optional: true, required: false
  private _workspaceApi = new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceApiOutputReference(this, "workspace_api");
  public get workspaceApi() {
    return this._workspaceApi;
  }
  public putWorkspaceApi(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceApi) {
    this._workspaceApi.internalValue = value;
  }
  public resetWorkspaceApi() {
    this._workspaceApi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceApiInput() {
    return this._workspaceApi.internalValue;
  }

  // workspace_ui - computed: true, optional: true, required: false
  private _workspaceUi = new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceUiOutputReference(this, "workspace_ui");
  public get workspaceUi() {
    return this._workspaceUi;
  }
  public putWorkspaceUi(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceUi) {
    this._workspaceUi.internalValue = value;
  }
  public resetWorkspaceUi() {
    this._workspaceUi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceUiInput() {
    return this._workspaceUi.internalValue;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesOriginEndpoints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#endpoint_ids DataDatabricksAccountNetworkPolicies#endpoint_ids}
  */
  readonly endpointIds?: string[];
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesOriginEndpointsToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesOriginEndpoints | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.endpointIds),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesOriginEndpointsToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesOriginEndpoints | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.endpointIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesOriginEndpointsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesOriginEndpoints | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpointIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointIds = this._endpointIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesOriginEndpoints | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpointIds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpointIds = value.endpointIds;
    }
  }

  // endpoint_ids - computed: true, optional: true, required: false
  private _endpointIds?: string[]; 
  public get endpointIds() {
    return this.getListAttribute('endpoint_ids');
  }
  public set endpointIds(value: string[]) {
    this._endpointIds = value;
  }
  public resetEndpointIds() {
    this._endpointIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointIdsInput() {
    return this._endpointIds;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesOrigin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#all_private_access DataDatabricksAccountNetworkPolicies#all_private_access}
  */
  readonly allPrivateAccess?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#all_registered_endpoints DataDatabricksAccountNetworkPolicies#all_registered_endpoints}
  */
  readonly allRegisteredEndpoints?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#azure_workspace_private_link DataDatabricksAccountNetworkPolicies#azure_workspace_private_link}
  */
  readonly azureWorkspacePrivateLink?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#endpoints DataDatabricksAccountNetworkPolicies#endpoints}
  */
  readonly endpoints?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesOriginEndpoints;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesOriginToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesOrigin | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_private_access: cdktn.booleanToTerraform(struct!.allPrivateAccess),
    all_registered_endpoints: cdktn.booleanToTerraform(struct!.allRegisteredEndpoints),
    azure_workspace_private_link: cdktn.booleanToTerraform(struct!.azureWorkspacePrivateLink),
    endpoints: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesOriginEndpointsToTerraform(struct!.endpoints),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesOriginToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesOrigin | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_private_access: {
      value: cdktn.booleanToHclTerraform(struct!.allPrivateAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    all_registered_endpoints: {
      value: cdktn.booleanToHclTerraform(struct!.allRegisteredEndpoints),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    azure_workspace_private_link: {
      value: cdktn.booleanToHclTerraform(struct!.azureWorkspacePrivateLink),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    endpoints: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesOriginEndpointsToHclTerraform(struct!.endpoints),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesOriginEndpoints",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesOriginOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesOrigin | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allPrivateAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.allPrivateAccess = this._allPrivateAccess;
    }
    if (this._allRegisteredEndpoints !== undefined) {
      hasAnyValues = true;
      internalValueResult.allRegisteredEndpoints = this._allRegisteredEndpoints;
    }
    if (this._azureWorkspacePrivateLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureWorkspacePrivateLink = this._azureWorkspacePrivateLink;
    }
    if (this._endpoints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoints = this._endpoints?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesOrigin | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allPrivateAccess = undefined;
      this._allRegisteredEndpoints = undefined;
      this._azureWorkspacePrivateLink = undefined;
      this._endpoints.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allPrivateAccess = value.allPrivateAccess;
      this._allRegisteredEndpoints = value.allRegisteredEndpoints;
      this._azureWorkspacePrivateLink = value.azureWorkspacePrivateLink;
      this._endpoints.internalValue = value.endpoints;
    }
  }

  // all_private_access - computed: true, optional: true, required: false
  private _allPrivateAccess?: boolean | cdktn.IResolvable; 
  public get allPrivateAccess() {
    return this.getBooleanAttribute('all_private_access');
  }
  public set allPrivateAccess(value: boolean | cdktn.IResolvable) {
    this._allPrivateAccess = value;
  }
  public resetAllPrivateAccess() {
    this._allPrivateAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allPrivateAccessInput() {
    return this._allPrivateAccess;
  }

  // all_registered_endpoints - computed: true, optional: true, required: false
  private _allRegisteredEndpoints?: boolean | cdktn.IResolvable; 
  public get allRegisteredEndpoints() {
    return this.getBooleanAttribute('all_registered_endpoints');
  }
  public set allRegisteredEndpoints(value: boolean | cdktn.IResolvable) {
    this._allRegisteredEndpoints = value;
  }
  public resetAllRegisteredEndpoints() {
    this._allRegisteredEndpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allRegisteredEndpointsInput() {
    return this._allRegisteredEndpoints;
  }

  // azure_workspace_private_link - computed: true, optional: true, required: false
  private _azureWorkspacePrivateLink?: boolean | cdktn.IResolvable; 
  public get azureWorkspacePrivateLink() {
    return this.getBooleanAttribute('azure_workspace_private_link');
  }
  public set azureWorkspacePrivateLink(value: boolean | cdktn.IResolvable) {
    this._azureWorkspacePrivateLink = value;
  }
  public resetAzureWorkspacePrivateLink() {
    this._azureWorkspacePrivateLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureWorkspacePrivateLinkInput() {
    return this._azureWorkspacePrivateLink;
  }

  // endpoints - computed: true, optional: true, required: false
  private _endpoints = new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesOriginEndpointsOutputReference(this, "endpoints");
  public get endpoints() {
    return this._endpoints;
  }
  public putEndpoints(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesOriginEndpoints) {
    this._endpoints.internalValue = value;
  }
  public resetEndpoints() {
    this._endpoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsInput() {
    return this._endpoints.internalValue;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#authentication DataDatabricksAccountNetworkPolicies#authentication}
  */
  readonly authentication?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesAuthentication;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#destination DataDatabricksAccountNetworkPolicies#destination}
  */
  readonly destination?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestination;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#label DataDatabricksAccountNetworkPolicies#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#origin DataDatabricksAccountNetworkPolicies#origin}
  */
  readonly origin?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesOrigin;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesAuthenticationToTerraform(struct!.authentication),
    destination: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationToTerraform(struct!.destination),
    label: cdktn.stringToTerraform(struct!.label),
    origin: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesOriginToTerraform(struct!.origin),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesAuthentication",
    },
    destination: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestination",
    },
    label: {
      value: cdktn.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesOriginToHclTerraform(struct!.origin),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesOrigin",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRules | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._origin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.origin = this._origin?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRules | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication.internalValue = undefined;
      this._destination.internalValue = undefined;
      this._label = undefined;
      this._origin.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authentication.internalValue = value.authentication;
      this._destination.internalValue = value.destination;
      this._label = value.label;
      this._origin.internalValue = value.origin;
    }
  }

  // authentication - computed: true, optional: true, required: false
  private _authentication = new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // destination - computed: true, optional: true, required: false
  private _destination = new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesDestination) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // label - computed: true, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // origin - computed: true, optional: true, required: false
  private _origin = new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesOriginOutputReference(this, "origin");
  public get origin() {
    return this._origin;
  }
  public putOrigin(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesOrigin) {
    this._origin.internalValue = value;
  }
  public resetOrigin() {
    this._origin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin.internalValue;
  }
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRules[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesOutputReference {
    return new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesAuthenticationIdentities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#principal_id DataDatabricksAccountNetworkPolicies#principal_id}
  */
  readonly principalId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#principal_type DataDatabricksAccountNetworkPolicies#principal_type}
  */
  readonly principalType?: string;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesAuthenticationIdentitiesToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesAuthenticationIdentities | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    principal_id: cdktn.numberToTerraform(struct!.principalId),
    principal_type: cdktn.stringToTerraform(struct!.principalType),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesAuthenticationIdentitiesToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesAuthenticationIdentities | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    principal_id: {
      value: cdktn.numberToHclTerraform(struct!.principalId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    principal_type: {
      value: cdktn.stringToHclTerraform(struct!.principalType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesAuthenticationIdentitiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesAuthenticationIdentities | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._principalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.principalId = this._principalId;
    }
    if (this._principalType !== undefined) {
      hasAnyValues = true;
      internalValueResult.principalType = this._principalType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesAuthenticationIdentities | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._principalId = undefined;
      this._principalType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._principalId = value.principalId;
      this._principalType = value.principalType;
    }
  }

  // principal_id - computed: true, optional: true, required: false
  private _principalId?: number; 
  public get principalId() {
    return this.getNumberAttribute('principal_id');
  }
  public set principalId(value: number) {
    this._principalId = value;
  }
  public resetPrincipalId() {
    this._principalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalIdInput() {
    return this._principalId;
  }

  // principal_type - computed: true, optional: true, required: false
  private _principalType?: string; 
  public get principalType() {
    return this.getStringAttribute('principal_type');
  }
  public set principalType(value: string) {
    this._principalType = value;
  }
  public resetPrincipalType() {
    this._principalType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalTypeInput() {
    return this._principalType;
  }
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesAuthenticationIdentitiesList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesAuthenticationIdentities[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesAuthenticationIdentitiesOutputReference {
    return new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesAuthenticationIdentitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#identities DataDatabricksAccountNetworkPolicies#identities}
  */
  readonly identities?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesAuthenticationIdentities[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#identity_type DataDatabricksAccountNetworkPolicies#identity_type}
  */
  readonly identityType?: string;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesAuthenticationToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesAuthentication | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identities: cdktn.listMapper(dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesAuthenticationIdentitiesToTerraform, false)(struct!.identities),
    identity_type: cdktn.stringToTerraform(struct!.identityType),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesAuthenticationToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesAuthentication | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identities: {
      value: cdktn.listMapperHcl(dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesAuthenticationIdentitiesToHclTerraform, false)(struct!.identities),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesAuthenticationIdentitiesList",
    },
    identity_type: {
      value: cdktn.stringToHclTerraform(struct!.identityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesAuthentication | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identities = this._identities?.internalValue;
    }
    if (this._identityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityType = this._identityType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesAuthentication | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identities.internalValue = undefined;
      this._identityType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identities.internalValue = value.identities;
      this._identityType = value.identityType;
    }
  }

  // identities - computed: true, optional: true, required: false
  private _identities = new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesAuthenticationIdentitiesList(this, "identities", false);
  public get identities() {
    return this._identities;
  }
  public putIdentities(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesAuthenticationIdentities[] | cdktn.IResolvable) {
    this._identities.internalValue = value;
  }
  public resetIdentities() {
    this._identities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identitiesInput() {
    return this._identities.internalValue;
  }

  // identity_type - computed: true, optional: true, required: false
  private _identityType?: string; 
  public get identityType() {
    return this.getStringAttribute('identity_type');
  }
  public set identityType(value: string) {
    this._identityType = value;
  }
  public resetIdentityType() {
    this._identityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityTypeInput() {
    return this._identityType;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationAccountApi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#scope_qualifier DataDatabricksAccountNetworkPolicies#scope_qualifier}
  */
  readonly scopeQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#scopes DataDatabricksAccountNetworkPolicies#scopes}
  */
  readonly scopes?: string[];
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationAccountApiToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationAccountApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope_qualifier: cdktn.stringToTerraform(struct!.scopeQualifier),
    scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationAccountApiToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationAccountApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope_qualifier: {
      value: cdktn.stringToHclTerraform(struct!.scopeQualifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scopes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationAccountApiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationAccountApi | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scopeQualifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopeQualifier = this._scopeQualifier;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationAccountApi | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scopeQualifier = undefined;
      this._scopes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scopeQualifier = value.scopeQualifier;
      this._scopes = value.scopes;
    }
  }

  // scope_qualifier - computed: true, optional: true, required: false
  private _scopeQualifier?: string; 
  public get scopeQualifier() {
    return this.getStringAttribute('scope_qualifier');
  }
  public set scopeQualifier(value: string) {
    this._scopeQualifier = value;
  }
  public resetScopeQualifier() {
    this._scopeQualifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeQualifierInput() {
    return this._scopeQualifier;
  }

  // scopes - computed: true, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationAccountDatabricksOne {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#all_destinations DataDatabricksAccountNetworkPolicies#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationAccountDatabricksOneToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationAccountDatabricksOne | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationAccountDatabricksOneToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationAccountDatabricksOne | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_destinations: {
      value: cdktn.booleanToHclTerraform(struct!.allDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationAccountDatabricksOneOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationAccountDatabricksOne | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allDestinations !== undefined) {
      hasAnyValues = true;
      internalValueResult.allDestinations = this._allDestinations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationAccountDatabricksOne | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allDestinations = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allDestinations = value.allDestinations;
    }
  }

  // all_destinations - computed: true, optional: true, required: false
  private _allDestinations?: boolean | cdktn.IResolvable; 
  public get allDestinations() {
    return this.getBooleanAttribute('all_destinations');
  }
  public set allDestinations(value: boolean | cdktn.IResolvable) {
    this._allDestinations = value;
  }
  public resetAllDestinations() {
    this._allDestinations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allDestinationsInput() {
    return this._allDestinations;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationAccountUi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#all_destinations DataDatabricksAccountNetworkPolicies#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationAccountUiToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationAccountUi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationAccountUiToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationAccountUi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_destinations: {
      value: cdktn.booleanToHclTerraform(struct!.allDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationAccountUiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationAccountUi | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allDestinations !== undefined) {
      hasAnyValues = true;
      internalValueResult.allDestinations = this._allDestinations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationAccountUi | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allDestinations = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allDestinations = value.allDestinations;
    }
  }

  // all_destinations - computed: true, optional: true, required: false
  private _allDestinations?: boolean | cdktn.IResolvable; 
  public get allDestinations() {
    return this.getBooleanAttribute('all_destinations');
  }
  public set allDestinations(value: boolean | cdktn.IResolvable) {
    this._allDestinations = value;
  }
  public resetAllDestinations() {
    this._allDestinations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allDestinationsInput() {
    return this._allDestinations;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationAppsRuntime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#all_destinations DataDatabricksAccountNetworkPolicies#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationAppsRuntimeToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationAppsRuntime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationAppsRuntimeToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationAppsRuntime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_destinations: {
      value: cdktn.booleanToHclTerraform(struct!.allDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationAppsRuntimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationAppsRuntime | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allDestinations !== undefined) {
      hasAnyValues = true;
      internalValueResult.allDestinations = this._allDestinations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationAppsRuntime | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allDestinations = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allDestinations = value.allDestinations;
    }
  }

  // all_destinations - computed: true, optional: true, required: false
  private _allDestinations?: boolean | cdktn.IResolvable; 
  public get allDestinations() {
    return this.getBooleanAttribute('all_destinations');
  }
  public set allDestinations(value: boolean | cdktn.IResolvable) {
    this._allDestinations = value;
  }
  public resetAllDestinations() {
    this._allDestinations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allDestinationsInput() {
    return this._allDestinations;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationLakebaseRuntime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#all_destinations DataDatabricksAccountNetworkPolicies#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationLakebaseRuntimeToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationLakebaseRuntime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationLakebaseRuntimeToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationLakebaseRuntime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_destinations: {
      value: cdktn.booleanToHclTerraform(struct!.allDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationLakebaseRuntimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationLakebaseRuntime | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allDestinations !== undefined) {
      hasAnyValues = true;
      internalValueResult.allDestinations = this._allDestinations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationLakebaseRuntime | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allDestinations = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allDestinations = value.allDestinations;
    }
  }

  // all_destinations - computed: true, optional: true, required: false
  private _allDestinations?: boolean | cdktn.IResolvable; 
  public get allDestinations() {
    return this.getBooleanAttribute('all_destinations');
  }
  public set allDestinations(value: boolean | cdktn.IResolvable) {
    this._allDestinations = value;
  }
  public resetAllDestinations() {
    this._allDestinations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allDestinationsInput() {
    return this._allDestinations;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceApi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#scope_qualifier DataDatabricksAccountNetworkPolicies#scope_qualifier}
  */
  readonly scopeQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#scopes DataDatabricksAccountNetworkPolicies#scopes}
  */
  readonly scopes?: string[];
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceApiToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope_qualifier: cdktn.stringToTerraform(struct!.scopeQualifier),
    scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceApiToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope_qualifier: {
      value: cdktn.stringToHclTerraform(struct!.scopeQualifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scopes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceApiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceApi | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scopeQualifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopeQualifier = this._scopeQualifier;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceApi | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scopeQualifier = undefined;
      this._scopes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scopeQualifier = value.scopeQualifier;
      this._scopes = value.scopes;
    }
  }

  // scope_qualifier - computed: true, optional: true, required: false
  private _scopeQualifier?: string; 
  public get scopeQualifier() {
    return this.getStringAttribute('scope_qualifier');
  }
  public set scopeQualifier(value: string) {
    this._scopeQualifier = value;
  }
  public resetScopeQualifier() {
    this._scopeQualifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeQualifierInput() {
    return this._scopeQualifier;
  }

  // scopes - computed: true, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceUi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#all_destinations DataDatabricksAccountNetworkPolicies#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceUiToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceUi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceUiToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceUi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_destinations: {
      value: cdktn.booleanToHclTerraform(struct!.allDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceUiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceUi | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allDestinations !== undefined) {
      hasAnyValues = true;
      internalValueResult.allDestinations = this._allDestinations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceUi | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allDestinations = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allDestinations = value.allDestinations;
    }
  }

  // all_destinations - computed: true, optional: true, required: false
  private _allDestinations?: boolean | cdktn.IResolvable; 
  public get allDestinations() {
    return this.getBooleanAttribute('all_destinations');
  }
  public set allDestinations(value: boolean | cdktn.IResolvable) {
    this._allDestinations = value;
  }
  public resetAllDestinations() {
    this._allDestinations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allDestinationsInput() {
    return this._allDestinations;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestination {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#account_api DataDatabricksAccountNetworkPolicies#account_api}
  */
  readonly accountApi?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationAccountApi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#account_databricks_one DataDatabricksAccountNetworkPolicies#account_databricks_one}
  */
  readonly accountDatabricksOne?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationAccountDatabricksOne;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#account_ui DataDatabricksAccountNetworkPolicies#account_ui}
  */
  readonly accountUi?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationAccountUi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#all_destinations DataDatabricksAccountNetworkPolicies#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#apps_runtime DataDatabricksAccountNetworkPolicies#apps_runtime}
  */
  readonly appsRuntime?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationAppsRuntime;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#lakebase_runtime DataDatabricksAccountNetworkPolicies#lakebase_runtime}
  */
  readonly lakebaseRuntime?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationLakebaseRuntime;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#workspace_api DataDatabricksAccountNetworkPolicies#workspace_api}
  */
  readonly workspaceApi?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceApi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#workspace_ui DataDatabricksAccountNetworkPolicies#workspace_ui}
  */
  readonly workspaceUi?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceUi;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_api: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationAccountApiToTerraform(struct!.accountApi),
    account_databricks_one: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationAccountDatabricksOneToTerraform(struct!.accountDatabricksOne),
    account_ui: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationAccountUiToTerraform(struct!.accountUi),
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
    apps_runtime: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationAppsRuntimeToTerraform(struct!.appsRuntime),
    lakebase_runtime: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationLakebaseRuntimeToTerraform(struct!.lakebaseRuntime),
    workspace_api: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceApiToTerraform(struct!.workspaceApi),
    workspace_ui: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceUiToTerraform(struct!.workspaceUi),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_api: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationAccountApiToHclTerraform(struct!.accountApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationAccountApi",
    },
    account_databricks_one: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationAccountDatabricksOneToHclTerraform(struct!.accountDatabricksOne),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationAccountDatabricksOne",
    },
    account_ui: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationAccountUiToHclTerraform(struct!.accountUi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationAccountUi",
    },
    all_destinations: {
      value: cdktn.booleanToHclTerraform(struct!.allDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    apps_runtime: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationAppsRuntimeToHclTerraform(struct!.appsRuntime),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationAppsRuntime",
    },
    lakebase_runtime: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationLakebaseRuntimeToHclTerraform(struct!.lakebaseRuntime),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationLakebaseRuntime",
    },
    workspace_api: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceApiToHclTerraform(struct!.workspaceApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceApi",
    },
    workspace_ui: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceUiToHclTerraform(struct!.workspaceUi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceUi",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestination | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountApi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountApi = this._accountApi?.internalValue;
    }
    if (this._accountDatabricksOne?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountDatabricksOne = this._accountDatabricksOne?.internalValue;
    }
    if (this._accountUi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountUi = this._accountUi?.internalValue;
    }
    if (this._allDestinations !== undefined) {
      hasAnyValues = true;
      internalValueResult.allDestinations = this._allDestinations;
    }
    if (this._appsRuntime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appsRuntime = this._appsRuntime?.internalValue;
    }
    if (this._lakebaseRuntime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lakebaseRuntime = this._lakebaseRuntime?.internalValue;
    }
    if (this._workspaceApi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceApi = this._workspaceApi?.internalValue;
    }
    if (this._workspaceUi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceUi = this._workspaceUi?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestination | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountApi.internalValue = undefined;
      this._accountDatabricksOne.internalValue = undefined;
      this._accountUi.internalValue = undefined;
      this._allDestinations = undefined;
      this._appsRuntime.internalValue = undefined;
      this._lakebaseRuntime.internalValue = undefined;
      this._workspaceApi.internalValue = undefined;
      this._workspaceUi.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountApi.internalValue = value.accountApi;
      this._accountDatabricksOne.internalValue = value.accountDatabricksOne;
      this._accountUi.internalValue = value.accountUi;
      this._allDestinations = value.allDestinations;
      this._appsRuntime.internalValue = value.appsRuntime;
      this._lakebaseRuntime.internalValue = value.lakebaseRuntime;
      this._workspaceApi.internalValue = value.workspaceApi;
      this._workspaceUi.internalValue = value.workspaceUi;
    }
  }

  // account_api - computed: true, optional: true, required: false
  private _accountApi = new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationAccountApiOutputReference(this, "account_api");
  public get accountApi() {
    return this._accountApi;
  }
  public putAccountApi(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationAccountApi) {
    this._accountApi.internalValue = value;
  }
  public resetAccountApi() {
    this._accountApi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountApiInput() {
    return this._accountApi.internalValue;
  }

  // account_databricks_one - computed: true, optional: true, required: false
  private _accountDatabricksOne = new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationAccountDatabricksOneOutputReference(this, "account_databricks_one");
  public get accountDatabricksOne() {
    return this._accountDatabricksOne;
  }
  public putAccountDatabricksOne(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationAccountDatabricksOne) {
    this._accountDatabricksOne.internalValue = value;
  }
  public resetAccountDatabricksOne() {
    this._accountDatabricksOne.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountDatabricksOneInput() {
    return this._accountDatabricksOne.internalValue;
  }

  // account_ui - computed: true, optional: true, required: false
  private _accountUi = new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationAccountUiOutputReference(this, "account_ui");
  public get accountUi() {
    return this._accountUi;
  }
  public putAccountUi(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationAccountUi) {
    this._accountUi.internalValue = value;
  }
  public resetAccountUi() {
    this._accountUi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountUiInput() {
    return this._accountUi.internalValue;
  }

  // all_destinations - computed: true, optional: true, required: false
  private _allDestinations?: boolean | cdktn.IResolvable; 
  public get allDestinations() {
    return this.getBooleanAttribute('all_destinations');
  }
  public set allDestinations(value: boolean | cdktn.IResolvable) {
    this._allDestinations = value;
  }
  public resetAllDestinations() {
    this._allDestinations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allDestinationsInput() {
    return this._allDestinations;
  }

  // apps_runtime - computed: true, optional: true, required: false
  private _appsRuntime = new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationAppsRuntimeOutputReference(this, "apps_runtime");
  public get appsRuntime() {
    return this._appsRuntime;
  }
  public putAppsRuntime(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationAppsRuntime) {
    this._appsRuntime.internalValue = value;
  }
  public resetAppsRuntime() {
    this._appsRuntime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appsRuntimeInput() {
    return this._appsRuntime.internalValue;
  }

  // lakebase_runtime - computed: true, optional: true, required: false
  private _lakebaseRuntime = new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationLakebaseRuntimeOutputReference(this, "lakebase_runtime");
  public get lakebaseRuntime() {
    return this._lakebaseRuntime;
  }
  public putLakebaseRuntime(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationLakebaseRuntime) {
    this._lakebaseRuntime.internalValue = value;
  }
  public resetLakebaseRuntime() {
    this._lakebaseRuntime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lakebaseRuntimeInput() {
    return this._lakebaseRuntime.internalValue;
  }

  // workspace_api - computed: true, optional: true, required: false
  private _workspaceApi = new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceApiOutputReference(this, "workspace_api");
  public get workspaceApi() {
    return this._workspaceApi;
  }
  public putWorkspaceApi(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceApi) {
    this._workspaceApi.internalValue = value;
  }
  public resetWorkspaceApi() {
    this._workspaceApi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceApiInput() {
    return this._workspaceApi.internalValue;
  }

  // workspace_ui - computed: true, optional: true, required: false
  private _workspaceUi = new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceUiOutputReference(this, "workspace_ui");
  public get workspaceUi() {
    return this._workspaceUi;
  }
  public putWorkspaceUi(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceUi) {
    this._workspaceUi.internalValue = value;
  }
  public resetWorkspaceUi() {
    this._workspaceUi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceUiInput() {
    return this._workspaceUi.internalValue;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesOriginEndpoints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#endpoint_ids DataDatabricksAccountNetworkPolicies#endpoint_ids}
  */
  readonly endpointIds?: string[];
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesOriginEndpointsToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesOriginEndpoints | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.endpointIds),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesOriginEndpointsToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesOriginEndpoints | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.endpointIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesOriginEndpointsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesOriginEndpoints | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpointIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointIds = this._endpointIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesOriginEndpoints | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpointIds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpointIds = value.endpointIds;
    }
  }

  // endpoint_ids - computed: true, optional: true, required: false
  private _endpointIds?: string[]; 
  public get endpointIds() {
    return this.getListAttribute('endpoint_ids');
  }
  public set endpointIds(value: string[]) {
    this._endpointIds = value;
  }
  public resetEndpointIds() {
    this._endpointIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointIdsInput() {
    return this._endpointIds;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesOrigin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#all_private_access DataDatabricksAccountNetworkPolicies#all_private_access}
  */
  readonly allPrivateAccess?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#all_registered_endpoints DataDatabricksAccountNetworkPolicies#all_registered_endpoints}
  */
  readonly allRegisteredEndpoints?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#azure_workspace_private_link DataDatabricksAccountNetworkPolicies#azure_workspace_private_link}
  */
  readonly azureWorkspacePrivateLink?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#endpoints DataDatabricksAccountNetworkPolicies#endpoints}
  */
  readonly endpoints?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesOriginEndpoints;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesOriginToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesOrigin | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_private_access: cdktn.booleanToTerraform(struct!.allPrivateAccess),
    all_registered_endpoints: cdktn.booleanToTerraform(struct!.allRegisteredEndpoints),
    azure_workspace_private_link: cdktn.booleanToTerraform(struct!.azureWorkspacePrivateLink),
    endpoints: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesOriginEndpointsToTerraform(struct!.endpoints),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesOriginToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesOrigin | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_private_access: {
      value: cdktn.booleanToHclTerraform(struct!.allPrivateAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    all_registered_endpoints: {
      value: cdktn.booleanToHclTerraform(struct!.allRegisteredEndpoints),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    azure_workspace_private_link: {
      value: cdktn.booleanToHclTerraform(struct!.azureWorkspacePrivateLink),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    endpoints: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesOriginEndpointsToHclTerraform(struct!.endpoints),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesOriginEndpoints",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesOriginOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesOrigin | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allPrivateAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.allPrivateAccess = this._allPrivateAccess;
    }
    if (this._allRegisteredEndpoints !== undefined) {
      hasAnyValues = true;
      internalValueResult.allRegisteredEndpoints = this._allRegisteredEndpoints;
    }
    if (this._azureWorkspacePrivateLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureWorkspacePrivateLink = this._azureWorkspacePrivateLink;
    }
    if (this._endpoints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoints = this._endpoints?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesOrigin | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allPrivateAccess = undefined;
      this._allRegisteredEndpoints = undefined;
      this._azureWorkspacePrivateLink = undefined;
      this._endpoints.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allPrivateAccess = value.allPrivateAccess;
      this._allRegisteredEndpoints = value.allRegisteredEndpoints;
      this._azureWorkspacePrivateLink = value.azureWorkspacePrivateLink;
      this._endpoints.internalValue = value.endpoints;
    }
  }

  // all_private_access - computed: true, optional: true, required: false
  private _allPrivateAccess?: boolean | cdktn.IResolvable; 
  public get allPrivateAccess() {
    return this.getBooleanAttribute('all_private_access');
  }
  public set allPrivateAccess(value: boolean | cdktn.IResolvable) {
    this._allPrivateAccess = value;
  }
  public resetAllPrivateAccess() {
    this._allPrivateAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allPrivateAccessInput() {
    return this._allPrivateAccess;
  }

  // all_registered_endpoints - computed: true, optional: true, required: false
  private _allRegisteredEndpoints?: boolean | cdktn.IResolvable; 
  public get allRegisteredEndpoints() {
    return this.getBooleanAttribute('all_registered_endpoints');
  }
  public set allRegisteredEndpoints(value: boolean | cdktn.IResolvable) {
    this._allRegisteredEndpoints = value;
  }
  public resetAllRegisteredEndpoints() {
    this._allRegisteredEndpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allRegisteredEndpointsInput() {
    return this._allRegisteredEndpoints;
  }

  // azure_workspace_private_link - computed: true, optional: true, required: false
  private _azureWorkspacePrivateLink?: boolean | cdktn.IResolvable; 
  public get azureWorkspacePrivateLink() {
    return this.getBooleanAttribute('azure_workspace_private_link');
  }
  public set azureWorkspacePrivateLink(value: boolean | cdktn.IResolvable) {
    this._azureWorkspacePrivateLink = value;
  }
  public resetAzureWorkspacePrivateLink() {
    this._azureWorkspacePrivateLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureWorkspacePrivateLinkInput() {
    return this._azureWorkspacePrivateLink;
  }

  // endpoints - computed: true, optional: true, required: false
  private _endpoints = new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesOriginEndpointsOutputReference(this, "endpoints");
  public get endpoints() {
    return this._endpoints;
  }
  public putEndpoints(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesOriginEndpoints) {
    this._endpoints.internalValue = value;
  }
  public resetEndpoints() {
    this._endpoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsInput() {
    return this._endpoints.internalValue;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#authentication DataDatabricksAccountNetworkPolicies#authentication}
  */
  readonly authentication?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesAuthentication;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#destination DataDatabricksAccountNetworkPolicies#destination}
  */
  readonly destination?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestination;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#label DataDatabricksAccountNetworkPolicies#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#origin DataDatabricksAccountNetworkPolicies#origin}
  */
  readonly origin?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesOrigin;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesAuthenticationToTerraform(struct!.authentication),
    destination: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationToTerraform(struct!.destination),
    label: cdktn.stringToTerraform(struct!.label),
    origin: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesOriginToTerraform(struct!.origin),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesAuthentication",
    },
    destination: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestination",
    },
    label: {
      value: cdktn.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesOriginToHclTerraform(struct!.origin),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesOrigin",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRules | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._origin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.origin = this._origin?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRules | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication.internalValue = undefined;
      this._destination.internalValue = undefined;
      this._label = undefined;
      this._origin.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authentication.internalValue = value.authentication;
      this._destination.internalValue = value.destination;
      this._label = value.label;
      this._origin.internalValue = value.origin;
    }
  }

  // authentication - computed: true, optional: true, required: false
  private _authentication = new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // destination - computed: true, optional: true, required: false
  private _destination = new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesDestination) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // label - computed: true, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // origin - computed: true, optional: true, required: false
  private _origin = new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesOriginOutputReference(this, "origin");
  public get origin() {
    return this._origin;
  }
  public putOrigin(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesOrigin) {
    this._origin.internalValue = value;
  }
  public resetOrigin() {
    this._origin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin.internalValue;
  }
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRules[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesOutputReference {
    return new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#allow_rules DataDatabricksAccountNetworkPolicies#allow_rules}
  */
  readonly allowRules?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRules[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#deny_rules DataDatabricksAccountNetworkPolicies#deny_rules}
  */
  readonly denyRules?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRules[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#restriction_mode DataDatabricksAccountNetworkPolicies#restriction_mode}
  */
  readonly restrictionMode: string;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccess | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_rules: cdktn.listMapper(dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesToTerraform, false)(struct!.allowRules),
    deny_rules: cdktn.listMapper(dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesToTerraform, false)(struct!.denyRules),
    restriction_mode: cdktn.stringToTerraform(struct!.restrictionMode),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccess | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_rules: {
      value: cdktn.listMapperHcl(dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesToHclTerraform, false)(struct!.allowRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesList",
    },
    deny_rules: {
      value: cdktn.listMapperHcl(dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesToHclTerraform, false)(struct!.denyRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesList",
    },
    restriction_mode: {
      value: cdktn.stringToHclTerraform(struct!.restrictionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccess | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowRules = this._allowRules?.internalValue;
    }
    if (this._denyRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyRules = this._denyRules?.internalValue;
    }
    if (this._restrictionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictionMode = this._restrictionMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccess | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowRules.internalValue = undefined;
      this._denyRules.internalValue = undefined;
      this._restrictionMode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowRules.internalValue = value.allowRules;
      this._denyRules.internalValue = value.denyRules;
      this._restrictionMode = value.restrictionMode;
    }
  }

  // allow_rules - computed: true, optional: true, required: false
  private _allowRules = new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRulesList(this, "allow_rules", false);
  public get allowRules() {
    return this._allowRules;
  }
  public putAllowRules(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessAllowRules[] | cdktn.IResolvable) {
    this._allowRules.internalValue = value;
  }
  public resetAllowRules() {
    this._allowRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRulesInput() {
    return this._allowRules.internalValue;
  }

  // deny_rules - computed: true, optional: true, required: false
  private _denyRules = new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRulesList(this, "deny_rules", false);
  public get denyRules() {
    return this._denyRules;
  }
  public putDenyRules(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessDenyRules[] | cdktn.IResolvable) {
    this._denyRules.internalValue = value;
  }
  public resetDenyRules() {
    this._denyRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyRulesInput() {
    return this._denyRules.internalValue;
  }

  // restriction_mode - computed: true, optional: false, required: true
  private _restrictionMode?: string; 
  public get restrictionMode() {
    return this.getStringAttribute('restriction_mode');
  }
  public set restrictionMode(value: string) {
    this._restrictionMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictionModeInput() {
    return this._restrictionMode;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesAuthenticationIdentities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#principal_id DataDatabricksAccountNetworkPolicies#principal_id}
  */
  readonly principalId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#principal_type DataDatabricksAccountNetworkPolicies#principal_type}
  */
  readonly principalType?: string;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesAuthenticationIdentitiesToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesAuthenticationIdentities | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    principal_id: cdktn.numberToTerraform(struct!.principalId),
    principal_type: cdktn.stringToTerraform(struct!.principalType),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesAuthenticationIdentitiesToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesAuthenticationIdentities | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    principal_id: {
      value: cdktn.numberToHclTerraform(struct!.principalId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    principal_type: {
      value: cdktn.stringToHclTerraform(struct!.principalType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesAuthenticationIdentitiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesAuthenticationIdentities | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._principalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.principalId = this._principalId;
    }
    if (this._principalType !== undefined) {
      hasAnyValues = true;
      internalValueResult.principalType = this._principalType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesAuthenticationIdentities | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._principalId = undefined;
      this._principalType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._principalId = value.principalId;
      this._principalType = value.principalType;
    }
  }

  // principal_id - computed: true, optional: true, required: false
  private _principalId?: number; 
  public get principalId() {
    return this.getNumberAttribute('principal_id');
  }
  public set principalId(value: number) {
    this._principalId = value;
  }
  public resetPrincipalId() {
    this._principalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalIdInput() {
    return this._principalId;
  }

  // principal_type - computed: true, optional: true, required: false
  private _principalType?: string; 
  public get principalType() {
    return this.getStringAttribute('principal_type');
  }
  public set principalType(value: string) {
    this._principalType = value;
  }
  public resetPrincipalType() {
    this._principalType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalTypeInput() {
    return this._principalType;
  }
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesAuthenticationIdentitiesList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesAuthenticationIdentities[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesAuthenticationIdentitiesOutputReference {
    return new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesAuthenticationIdentitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#identities DataDatabricksAccountNetworkPolicies#identities}
  */
  readonly identities?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesAuthenticationIdentities[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#identity_type DataDatabricksAccountNetworkPolicies#identity_type}
  */
  readonly identityType?: string;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesAuthenticationToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesAuthentication | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identities: cdktn.listMapper(dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesAuthenticationIdentitiesToTerraform, false)(struct!.identities),
    identity_type: cdktn.stringToTerraform(struct!.identityType),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesAuthenticationToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesAuthentication | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identities: {
      value: cdktn.listMapperHcl(dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesAuthenticationIdentitiesToHclTerraform, false)(struct!.identities),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesAuthenticationIdentitiesList",
    },
    identity_type: {
      value: cdktn.stringToHclTerraform(struct!.identityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesAuthentication | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identities = this._identities?.internalValue;
    }
    if (this._identityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityType = this._identityType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesAuthentication | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identities.internalValue = undefined;
      this._identityType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identities.internalValue = value.identities;
      this._identityType = value.identityType;
    }
  }

  // identities - computed: true, optional: true, required: false
  private _identities = new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesAuthenticationIdentitiesList(this, "identities", false);
  public get identities() {
    return this._identities;
  }
  public putIdentities(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesAuthenticationIdentities[] | cdktn.IResolvable) {
    this._identities.internalValue = value;
  }
  public resetIdentities() {
    this._identities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identitiesInput() {
    return this._identities.internalValue;
  }

  // identity_type - computed: true, optional: true, required: false
  private _identityType?: string; 
  public get identityType() {
    return this.getStringAttribute('identity_type');
  }
  public set identityType(value: string) {
    this._identityType = value;
  }
  public resetIdentityType() {
    this._identityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityTypeInput() {
    return this._identityType;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationAccountApi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#scope_qualifier DataDatabricksAccountNetworkPolicies#scope_qualifier}
  */
  readonly scopeQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#scopes DataDatabricksAccountNetworkPolicies#scopes}
  */
  readonly scopes?: string[];
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationAccountApiToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationAccountApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope_qualifier: cdktn.stringToTerraform(struct!.scopeQualifier),
    scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationAccountApiToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationAccountApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope_qualifier: {
      value: cdktn.stringToHclTerraform(struct!.scopeQualifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scopes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationAccountApiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationAccountApi | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scopeQualifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopeQualifier = this._scopeQualifier;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationAccountApi | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scopeQualifier = undefined;
      this._scopes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scopeQualifier = value.scopeQualifier;
      this._scopes = value.scopes;
    }
  }

  // scope_qualifier - computed: true, optional: true, required: false
  private _scopeQualifier?: string; 
  public get scopeQualifier() {
    return this.getStringAttribute('scope_qualifier');
  }
  public set scopeQualifier(value: string) {
    this._scopeQualifier = value;
  }
  public resetScopeQualifier() {
    this._scopeQualifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeQualifierInput() {
    return this._scopeQualifier;
  }

  // scopes - computed: true, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationAccountDatabricksOne {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#all_destinations DataDatabricksAccountNetworkPolicies#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationAccountDatabricksOneToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationAccountDatabricksOne | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationAccountDatabricksOneToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationAccountDatabricksOne | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_destinations: {
      value: cdktn.booleanToHclTerraform(struct!.allDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationAccountDatabricksOneOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationAccountDatabricksOne | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allDestinations !== undefined) {
      hasAnyValues = true;
      internalValueResult.allDestinations = this._allDestinations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationAccountDatabricksOne | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allDestinations = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allDestinations = value.allDestinations;
    }
  }

  // all_destinations - computed: true, optional: true, required: false
  private _allDestinations?: boolean | cdktn.IResolvable; 
  public get allDestinations() {
    return this.getBooleanAttribute('all_destinations');
  }
  public set allDestinations(value: boolean | cdktn.IResolvable) {
    this._allDestinations = value;
  }
  public resetAllDestinations() {
    this._allDestinations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allDestinationsInput() {
    return this._allDestinations;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationAccountUi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#all_destinations DataDatabricksAccountNetworkPolicies#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationAccountUiToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationAccountUi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationAccountUiToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationAccountUi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_destinations: {
      value: cdktn.booleanToHclTerraform(struct!.allDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationAccountUiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationAccountUi | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allDestinations !== undefined) {
      hasAnyValues = true;
      internalValueResult.allDestinations = this._allDestinations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationAccountUi | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allDestinations = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allDestinations = value.allDestinations;
    }
  }

  // all_destinations - computed: true, optional: true, required: false
  private _allDestinations?: boolean | cdktn.IResolvable; 
  public get allDestinations() {
    return this.getBooleanAttribute('all_destinations');
  }
  public set allDestinations(value: boolean | cdktn.IResolvable) {
    this._allDestinations = value;
  }
  public resetAllDestinations() {
    this._allDestinations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allDestinationsInput() {
    return this._allDestinations;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationAppsRuntime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#all_destinations DataDatabricksAccountNetworkPolicies#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationAppsRuntimeToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationAppsRuntime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationAppsRuntimeToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationAppsRuntime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_destinations: {
      value: cdktn.booleanToHclTerraform(struct!.allDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationAppsRuntimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationAppsRuntime | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allDestinations !== undefined) {
      hasAnyValues = true;
      internalValueResult.allDestinations = this._allDestinations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationAppsRuntime | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allDestinations = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allDestinations = value.allDestinations;
    }
  }

  // all_destinations - computed: true, optional: true, required: false
  private _allDestinations?: boolean | cdktn.IResolvable; 
  public get allDestinations() {
    return this.getBooleanAttribute('all_destinations');
  }
  public set allDestinations(value: boolean | cdktn.IResolvable) {
    this._allDestinations = value;
  }
  public resetAllDestinations() {
    this._allDestinations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allDestinationsInput() {
    return this._allDestinations;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationLakebaseRuntime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#all_destinations DataDatabricksAccountNetworkPolicies#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationLakebaseRuntimeToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationLakebaseRuntime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationLakebaseRuntimeToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationLakebaseRuntime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_destinations: {
      value: cdktn.booleanToHclTerraform(struct!.allDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationLakebaseRuntimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationLakebaseRuntime | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allDestinations !== undefined) {
      hasAnyValues = true;
      internalValueResult.allDestinations = this._allDestinations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationLakebaseRuntime | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allDestinations = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allDestinations = value.allDestinations;
    }
  }

  // all_destinations - computed: true, optional: true, required: false
  private _allDestinations?: boolean | cdktn.IResolvable; 
  public get allDestinations() {
    return this.getBooleanAttribute('all_destinations');
  }
  public set allDestinations(value: boolean | cdktn.IResolvable) {
    this._allDestinations = value;
  }
  public resetAllDestinations() {
    this._allDestinations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allDestinationsInput() {
    return this._allDestinations;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationWorkspaceApi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#scope_qualifier DataDatabricksAccountNetworkPolicies#scope_qualifier}
  */
  readonly scopeQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#scopes DataDatabricksAccountNetworkPolicies#scopes}
  */
  readonly scopes?: string[];
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationWorkspaceApiToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationWorkspaceApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope_qualifier: cdktn.stringToTerraform(struct!.scopeQualifier),
    scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationWorkspaceApiToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationWorkspaceApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope_qualifier: {
      value: cdktn.stringToHclTerraform(struct!.scopeQualifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scopes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationWorkspaceApiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationWorkspaceApi | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scopeQualifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopeQualifier = this._scopeQualifier;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationWorkspaceApi | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scopeQualifier = undefined;
      this._scopes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scopeQualifier = value.scopeQualifier;
      this._scopes = value.scopes;
    }
  }

  // scope_qualifier - computed: true, optional: true, required: false
  private _scopeQualifier?: string; 
  public get scopeQualifier() {
    return this.getStringAttribute('scope_qualifier');
  }
  public set scopeQualifier(value: string) {
    this._scopeQualifier = value;
  }
  public resetScopeQualifier() {
    this._scopeQualifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeQualifierInput() {
    return this._scopeQualifier;
  }

  // scopes - computed: true, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationWorkspaceUi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#all_destinations DataDatabricksAccountNetworkPolicies#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationWorkspaceUiToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationWorkspaceUi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationWorkspaceUiToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationWorkspaceUi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_destinations: {
      value: cdktn.booleanToHclTerraform(struct!.allDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationWorkspaceUiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationWorkspaceUi | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allDestinations !== undefined) {
      hasAnyValues = true;
      internalValueResult.allDestinations = this._allDestinations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationWorkspaceUi | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allDestinations = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allDestinations = value.allDestinations;
    }
  }

  // all_destinations - computed: true, optional: true, required: false
  private _allDestinations?: boolean | cdktn.IResolvable; 
  public get allDestinations() {
    return this.getBooleanAttribute('all_destinations');
  }
  public set allDestinations(value: boolean | cdktn.IResolvable) {
    this._allDestinations = value;
  }
  public resetAllDestinations() {
    this._allDestinations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allDestinationsInput() {
    return this._allDestinations;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestination {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#account_api DataDatabricksAccountNetworkPolicies#account_api}
  */
  readonly accountApi?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationAccountApi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#account_databricks_one DataDatabricksAccountNetworkPolicies#account_databricks_one}
  */
  readonly accountDatabricksOne?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationAccountDatabricksOne;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#account_ui DataDatabricksAccountNetworkPolicies#account_ui}
  */
  readonly accountUi?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationAccountUi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#all_destinations DataDatabricksAccountNetworkPolicies#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#apps_runtime DataDatabricksAccountNetworkPolicies#apps_runtime}
  */
  readonly appsRuntime?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationAppsRuntime;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#lakebase_runtime DataDatabricksAccountNetworkPolicies#lakebase_runtime}
  */
  readonly lakebaseRuntime?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationLakebaseRuntime;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#workspace_api DataDatabricksAccountNetworkPolicies#workspace_api}
  */
  readonly workspaceApi?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationWorkspaceApi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#workspace_ui DataDatabricksAccountNetworkPolicies#workspace_ui}
  */
  readonly workspaceUi?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationWorkspaceUi;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_api: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationAccountApiToTerraform(struct!.accountApi),
    account_databricks_one: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationAccountDatabricksOneToTerraform(struct!.accountDatabricksOne),
    account_ui: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationAccountUiToTerraform(struct!.accountUi),
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
    apps_runtime: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationAppsRuntimeToTerraform(struct!.appsRuntime),
    lakebase_runtime: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationLakebaseRuntimeToTerraform(struct!.lakebaseRuntime),
    workspace_api: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationWorkspaceApiToTerraform(struct!.workspaceApi),
    workspace_ui: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationWorkspaceUiToTerraform(struct!.workspaceUi),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_api: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationAccountApiToHclTerraform(struct!.accountApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationAccountApi",
    },
    account_databricks_one: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationAccountDatabricksOneToHclTerraform(struct!.accountDatabricksOne),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationAccountDatabricksOne",
    },
    account_ui: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationAccountUiToHclTerraform(struct!.accountUi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationAccountUi",
    },
    all_destinations: {
      value: cdktn.booleanToHclTerraform(struct!.allDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    apps_runtime: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationAppsRuntimeToHclTerraform(struct!.appsRuntime),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationAppsRuntime",
    },
    lakebase_runtime: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationLakebaseRuntimeToHclTerraform(struct!.lakebaseRuntime),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationLakebaseRuntime",
    },
    workspace_api: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationWorkspaceApiToHclTerraform(struct!.workspaceApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationWorkspaceApi",
    },
    workspace_ui: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationWorkspaceUiToHclTerraform(struct!.workspaceUi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationWorkspaceUi",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestination | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountApi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountApi = this._accountApi?.internalValue;
    }
    if (this._accountDatabricksOne?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountDatabricksOne = this._accountDatabricksOne?.internalValue;
    }
    if (this._accountUi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountUi = this._accountUi?.internalValue;
    }
    if (this._allDestinations !== undefined) {
      hasAnyValues = true;
      internalValueResult.allDestinations = this._allDestinations;
    }
    if (this._appsRuntime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appsRuntime = this._appsRuntime?.internalValue;
    }
    if (this._lakebaseRuntime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lakebaseRuntime = this._lakebaseRuntime?.internalValue;
    }
    if (this._workspaceApi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceApi = this._workspaceApi?.internalValue;
    }
    if (this._workspaceUi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceUi = this._workspaceUi?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestination | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountApi.internalValue = undefined;
      this._accountDatabricksOne.internalValue = undefined;
      this._accountUi.internalValue = undefined;
      this._allDestinations = undefined;
      this._appsRuntime.internalValue = undefined;
      this._lakebaseRuntime.internalValue = undefined;
      this._workspaceApi.internalValue = undefined;
      this._workspaceUi.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountApi.internalValue = value.accountApi;
      this._accountDatabricksOne.internalValue = value.accountDatabricksOne;
      this._accountUi.internalValue = value.accountUi;
      this._allDestinations = value.allDestinations;
      this._appsRuntime.internalValue = value.appsRuntime;
      this._lakebaseRuntime.internalValue = value.lakebaseRuntime;
      this._workspaceApi.internalValue = value.workspaceApi;
      this._workspaceUi.internalValue = value.workspaceUi;
    }
  }

  // account_api - computed: true, optional: true, required: false
  private _accountApi = new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationAccountApiOutputReference(this, "account_api");
  public get accountApi() {
    return this._accountApi;
  }
  public putAccountApi(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationAccountApi) {
    this._accountApi.internalValue = value;
  }
  public resetAccountApi() {
    this._accountApi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountApiInput() {
    return this._accountApi.internalValue;
  }

  // account_databricks_one - computed: true, optional: true, required: false
  private _accountDatabricksOne = new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationAccountDatabricksOneOutputReference(this, "account_databricks_one");
  public get accountDatabricksOne() {
    return this._accountDatabricksOne;
  }
  public putAccountDatabricksOne(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationAccountDatabricksOne) {
    this._accountDatabricksOne.internalValue = value;
  }
  public resetAccountDatabricksOne() {
    this._accountDatabricksOne.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountDatabricksOneInput() {
    return this._accountDatabricksOne.internalValue;
  }

  // account_ui - computed: true, optional: true, required: false
  private _accountUi = new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationAccountUiOutputReference(this, "account_ui");
  public get accountUi() {
    return this._accountUi;
  }
  public putAccountUi(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationAccountUi) {
    this._accountUi.internalValue = value;
  }
  public resetAccountUi() {
    this._accountUi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountUiInput() {
    return this._accountUi.internalValue;
  }

  // all_destinations - computed: true, optional: true, required: false
  private _allDestinations?: boolean | cdktn.IResolvable; 
  public get allDestinations() {
    return this.getBooleanAttribute('all_destinations');
  }
  public set allDestinations(value: boolean | cdktn.IResolvable) {
    this._allDestinations = value;
  }
  public resetAllDestinations() {
    this._allDestinations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allDestinationsInput() {
    return this._allDestinations;
  }

  // apps_runtime - computed: true, optional: true, required: false
  private _appsRuntime = new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationAppsRuntimeOutputReference(this, "apps_runtime");
  public get appsRuntime() {
    return this._appsRuntime;
  }
  public putAppsRuntime(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationAppsRuntime) {
    this._appsRuntime.internalValue = value;
  }
  public resetAppsRuntime() {
    this._appsRuntime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appsRuntimeInput() {
    return this._appsRuntime.internalValue;
  }

  // lakebase_runtime - computed: true, optional: true, required: false
  private _lakebaseRuntime = new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationLakebaseRuntimeOutputReference(this, "lakebase_runtime");
  public get lakebaseRuntime() {
    return this._lakebaseRuntime;
  }
  public putLakebaseRuntime(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationLakebaseRuntime) {
    this._lakebaseRuntime.internalValue = value;
  }
  public resetLakebaseRuntime() {
    this._lakebaseRuntime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lakebaseRuntimeInput() {
    return this._lakebaseRuntime.internalValue;
  }

  // workspace_api - computed: true, optional: true, required: false
  private _workspaceApi = new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationWorkspaceApiOutputReference(this, "workspace_api");
  public get workspaceApi() {
    return this._workspaceApi;
  }
  public putWorkspaceApi(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationWorkspaceApi) {
    this._workspaceApi.internalValue = value;
  }
  public resetWorkspaceApi() {
    this._workspaceApi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceApiInput() {
    return this._workspaceApi.internalValue;
  }

  // workspace_ui - computed: true, optional: true, required: false
  private _workspaceUi = new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationWorkspaceUiOutputReference(this, "workspace_ui");
  public get workspaceUi() {
    return this._workspaceUi;
  }
  public putWorkspaceUi(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationWorkspaceUi) {
    this._workspaceUi.internalValue = value;
  }
  public resetWorkspaceUi() {
    this._workspaceUi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceUiInput() {
    return this._workspaceUi.internalValue;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesOriginExcludedIpRanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#ip_ranges DataDatabricksAccountNetworkPolicies#ip_ranges}
  */
  readonly ipRanges?: string[];
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesOriginExcludedIpRangesToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesOriginExcludedIpRanges | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_ranges: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.ipRanges),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesOriginExcludedIpRangesToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesOriginExcludedIpRanges | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_ranges: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.ipRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesOriginExcludedIpRangesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesOriginExcludedIpRanges | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRanges = this._ipRanges;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesOriginExcludedIpRanges | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipRanges = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipRanges = value.ipRanges;
    }
  }

  // ip_ranges - computed: true, optional: true, required: false
  private _ipRanges?: string[]; 
  public get ipRanges() {
    return this.getListAttribute('ip_ranges');
  }
  public set ipRanges(value: string[]) {
    this._ipRanges = value;
  }
  public resetIpRanges() {
    this._ipRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangesInput() {
    return this._ipRanges;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesOriginIncludedIpRanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#ip_ranges DataDatabricksAccountNetworkPolicies#ip_ranges}
  */
  readonly ipRanges?: string[];
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesOriginIncludedIpRangesToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesOriginIncludedIpRanges | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_ranges: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.ipRanges),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesOriginIncludedIpRangesToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesOriginIncludedIpRanges | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_ranges: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.ipRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesOriginIncludedIpRangesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesOriginIncludedIpRanges | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRanges = this._ipRanges;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesOriginIncludedIpRanges | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipRanges = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipRanges = value.ipRanges;
    }
  }

  // ip_ranges - computed: true, optional: true, required: false
  private _ipRanges?: string[]; 
  public get ipRanges() {
    return this.getListAttribute('ip_ranges');
  }
  public set ipRanges(value: string[]) {
    this._ipRanges = value;
  }
  public resetIpRanges() {
    this._ipRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangesInput() {
    return this._ipRanges;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesOrigin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#all_ip_ranges DataDatabricksAccountNetworkPolicies#all_ip_ranges}
  */
  readonly allIpRanges?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#excluded_ip_ranges DataDatabricksAccountNetworkPolicies#excluded_ip_ranges}
  */
  readonly excludedIpRanges?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesOriginExcludedIpRanges;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#included_ip_ranges DataDatabricksAccountNetworkPolicies#included_ip_ranges}
  */
  readonly includedIpRanges?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesOriginIncludedIpRanges;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesOriginToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesOrigin | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_ip_ranges: cdktn.booleanToTerraform(struct!.allIpRanges),
    excluded_ip_ranges: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesOriginExcludedIpRangesToTerraform(struct!.excludedIpRanges),
    included_ip_ranges: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesOriginIncludedIpRangesToTerraform(struct!.includedIpRanges),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesOriginToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesOrigin | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_ip_ranges: {
      value: cdktn.booleanToHclTerraform(struct!.allIpRanges),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    excluded_ip_ranges: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesOriginExcludedIpRangesToHclTerraform(struct!.excludedIpRanges),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesOriginExcludedIpRanges",
    },
    included_ip_ranges: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesOriginIncludedIpRangesToHclTerraform(struct!.includedIpRanges),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesOriginIncludedIpRanges",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesOriginOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesOrigin | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allIpRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.allIpRanges = this._allIpRanges;
    }
    if (this._excludedIpRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedIpRanges = this._excludedIpRanges?.internalValue;
    }
    if (this._includedIpRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedIpRanges = this._includedIpRanges?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesOrigin | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allIpRanges = undefined;
      this._excludedIpRanges.internalValue = undefined;
      this._includedIpRanges.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allIpRanges = value.allIpRanges;
      this._excludedIpRanges.internalValue = value.excludedIpRanges;
      this._includedIpRanges.internalValue = value.includedIpRanges;
    }
  }

  // all_ip_ranges - computed: true, optional: true, required: false
  private _allIpRanges?: boolean | cdktn.IResolvable; 
  public get allIpRanges() {
    return this.getBooleanAttribute('all_ip_ranges');
  }
  public set allIpRanges(value: boolean | cdktn.IResolvable) {
    this._allIpRanges = value;
  }
  public resetAllIpRanges() {
    this._allIpRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allIpRangesInput() {
    return this._allIpRanges;
  }

  // excluded_ip_ranges - computed: true, optional: true, required: false
  private _excludedIpRanges = new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesOriginExcludedIpRangesOutputReference(this, "excluded_ip_ranges");
  public get excludedIpRanges() {
    return this._excludedIpRanges;
  }
  public putExcludedIpRanges(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesOriginExcludedIpRanges) {
    this._excludedIpRanges.internalValue = value;
  }
  public resetExcludedIpRanges() {
    this._excludedIpRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedIpRangesInput() {
    return this._excludedIpRanges.internalValue;
  }

  // included_ip_ranges - computed: true, optional: true, required: false
  private _includedIpRanges = new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesOriginIncludedIpRangesOutputReference(this, "included_ip_ranges");
  public get includedIpRanges() {
    return this._includedIpRanges;
  }
  public putIncludedIpRanges(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesOriginIncludedIpRanges) {
    this._includedIpRanges.internalValue = value;
  }
  public resetIncludedIpRanges() {
    this._includedIpRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedIpRangesInput() {
    return this._includedIpRanges.internalValue;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#authentication DataDatabricksAccountNetworkPolicies#authentication}
  */
  readonly authentication?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesAuthentication;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#destination DataDatabricksAccountNetworkPolicies#destination}
  */
  readonly destination?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestination;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#label DataDatabricksAccountNetworkPolicies#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#origin DataDatabricksAccountNetworkPolicies#origin}
  */
  readonly origin?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesOrigin;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesAuthenticationToTerraform(struct!.authentication),
    destination: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationToTerraform(struct!.destination),
    label: cdktn.stringToTerraform(struct!.label),
    origin: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesOriginToTerraform(struct!.origin),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesAuthentication",
    },
    destination: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestination",
    },
    label: {
      value: cdktn.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesOriginToHclTerraform(struct!.origin),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesOrigin",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRules | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._origin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.origin = this._origin?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRules | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication.internalValue = undefined;
      this._destination.internalValue = undefined;
      this._label = undefined;
      this._origin.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authentication.internalValue = value.authentication;
      this._destination.internalValue = value.destination;
      this._label = value.label;
      this._origin.internalValue = value.origin;
    }
  }

  // authentication - computed: true, optional: true, required: false
  private _authentication = new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // destination - computed: true, optional: true, required: false
  private _destination = new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesDestination) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // label - computed: true, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // origin - computed: true, optional: true, required: false
  private _origin = new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesOriginOutputReference(this, "origin");
  public get origin() {
    return this._origin;
  }
  public putOrigin(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesOrigin) {
    this._origin.internalValue = value;
  }
  public resetOrigin() {
    this._origin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin.internalValue;
  }
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRules[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesOutputReference {
    return new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesAuthenticationIdentities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#principal_id DataDatabricksAccountNetworkPolicies#principal_id}
  */
  readonly principalId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#principal_type DataDatabricksAccountNetworkPolicies#principal_type}
  */
  readonly principalType?: string;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesAuthenticationIdentitiesToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesAuthenticationIdentities | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    principal_id: cdktn.numberToTerraform(struct!.principalId),
    principal_type: cdktn.stringToTerraform(struct!.principalType),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesAuthenticationIdentitiesToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesAuthenticationIdentities | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    principal_id: {
      value: cdktn.numberToHclTerraform(struct!.principalId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    principal_type: {
      value: cdktn.stringToHclTerraform(struct!.principalType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesAuthenticationIdentitiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesAuthenticationIdentities | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._principalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.principalId = this._principalId;
    }
    if (this._principalType !== undefined) {
      hasAnyValues = true;
      internalValueResult.principalType = this._principalType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesAuthenticationIdentities | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._principalId = undefined;
      this._principalType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._principalId = value.principalId;
      this._principalType = value.principalType;
    }
  }

  // principal_id - computed: true, optional: true, required: false
  private _principalId?: number; 
  public get principalId() {
    return this.getNumberAttribute('principal_id');
  }
  public set principalId(value: number) {
    this._principalId = value;
  }
  public resetPrincipalId() {
    this._principalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalIdInput() {
    return this._principalId;
  }

  // principal_type - computed: true, optional: true, required: false
  private _principalType?: string; 
  public get principalType() {
    return this.getStringAttribute('principal_type');
  }
  public set principalType(value: string) {
    this._principalType = value;
  }
  public resetPrincipalType() {
    this._principalType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalTypeInput() {
    return this._principalType;
  }
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesAuthenticationIdentitiesList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesAuthenticationIdentities[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesAuthenticationIdentitiesOutputReference {
    return new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesAuthenticationIdentitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#identities DataDatabricksAccountNetworkPolicies#identities}
  */
  readonly identities?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesAuthenticationIdentities[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#identity_type DataDatabricksAccountNetworkPolicies#identity_type}
  */
  readonly identityType?: string;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesAuthenticationToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesAuthentication | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identities: cdktn.listMapper(dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesAuthenticationIdentitiesToTerraform, false)(struct!.identities),
    identity_type: cdktn.stringToTerraform(struct!.identityType),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesAuthenticationToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesAuthentication | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identities: {
      value: cdktn.listMapperHcl(dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesAuthenticationIdentitiesToHclTerraform, false)(struct!.identities),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesAuthenticationIdentitiesList",
    },
    identity_type: {
      value: cdktn.stringToHclTerraform(struct!.identityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesAuthentication | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identities = this._identities?.internalValue;
    }
    if (this._identityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityType = this._identityType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesAuthentication | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identities.internalValue = undefined;
      this._identityType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identities.internalValue = value.identities;
      this._identityType = value.identityType;
    }
  }

  // identities - computed: true, optional: true, required: false
  private _identities = new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesAuthenticationIdentitiesList(this, "identities", false);
  public get identities() {
    return this._identities;
  }
  public putIdentities(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesAuthenticationIdentities[] | cdktn.IResolvable) {
    this._identities.internalValue = value;
  }
  public resetIdentities() {
    this._identities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identitiesInput() {
    return this._identities.internalValue;
  }

  // identity_type - computed: true, optional: true, required: false
  private _identityType?: string; 
  public get identityType() {
    return this.getStringAttribute('identity_type');
  }
  public set identityType(value: string) {
    this._identityType = value;
  }
  public resetIdentityType() {
    this._identityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityTypeInput() {
    return this._identityType;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationAccountApi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#scope_qualifier DataDatabricksAccountNetworkPolicies#scope_qualifier}
  */
  readonly scopeQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#scopes DataDatabricksAccountNetworkPolicies#scopes}
  */
  readonly scopes?: string[];
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationAccountApiToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationAccountApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope_qualifier: cdktn.stringToTerraform(struct!.scopeQualifier),
    scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationAccountApiToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationAccountApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope_qualifier: {
      value: cdktn.stringToHclTerraform(struct!.scopeQualifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scopes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationAccountApiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationAccountApi | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scopeQualifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopeQualifier = this._scopeQualifier;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationAccountApi | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scopeQualifier = undefined;
      this._scopes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scopeQualifier = value.scopeQualifier;
      this._scopes = value.scopes;
    }
  }

  // scope_qualifier - computed: true, optional: true, required: false
  private _scopeQualifier?: string; 
  public get scopeQualifier() {
    return this.getStringAttribute('scope_qualifier');
  }
  public set scopeQualifier(value: string) {
    this._scopeQualifier = value;
  }
  public resetScopeQualifier() {
    this._scopeQualifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeQualifierInput() {
    return this._scopeQualifier;
  }

  // scopes - computed: true, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationAccountDatabricksOne {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#all_destinations DataDatabricksAccountNetworkPolicies#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationAccountDatabricksOneToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationAccountDatabricksOne | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationAccountDatabricksOneToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationAccountDatabricksOne | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_destinations: {
      value: cdktn.booleanToHclTerraform(struct!.allDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationAccountDatabricksOneOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationAccountDatabricksOne | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allDestinations !== undefined) {
      hasAnyValues = true;
      internalValueResult.allDestinations = this._allDestinations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationAccountDatabricksOne | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allDestinations = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allDestinations = value.allDestinations;
    }
  }

  // all_destinations - computed: true, optional: true, required: false
  private _allDestinations?: boolean | cdktn.IResolvable; 
  public get allDestinations() {
    return this.getBooleanAttribute('all_destinations');
  }
  public set allDestinations(value: boolean | cdktn.IResolvable) {
    this._allDestinations = value;
  }
  public resetAllDestinations() {
    this._allDestinations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allDestinationsInput() {
    return this._allDestinations;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationAccountUi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#all_destinations DataDatabricksAccountNetworkPolicies#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationAccountUiToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationAccountUi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationAccountUiToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationAccountUi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_destinations: {
      value: cdktn.booleanToHclTerraform(struct!.allDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationAccountUiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationAccountUi | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allDestinations !== undefined) {
      hasAnyValues = true;
      internalValueResult.allDestinations = this._allDestinations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationAccountUi | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allDestinations = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allDestinations = value.allDestinations;
    }
  }

  // all_destinations - computed: true, optional: true, required: false
  private _allDestinations?: boolean | cdktn.IResolvable; 
  public get allDestinations() {
    return this.getBooleanAttribute('all_destinations');
  }
  public set allDestinations(value: boolean | cdktn.IResolvable) {
    this._allDestinations = value;
  }
  public resetAllDestinations() {
    this._allDestinations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allDestinationsInput() {
    return this._allDestinations;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationAppsRuntime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#all_destinations DataDatabricksAccountNetworkPolicies#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationAppsRuntimeToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationAppsRuntime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationAppsRuntimeToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationAppsRuntime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_destinations: {
      value: cdktn.booleanToHclTerraform(struct!.allDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationAppsRuntimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationAppsRuntime | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allDestinations !== undefined) {
      hasAnyValues = true;
      internalValueResult.allDestinations = this._allDestinations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationAppsRuntime | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allDestinations = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allDestinations = value.allDestinations;
    }
  }

  // all_destinations - computed: true, optional: true, required: false
  private _allDestinations?: boolean | cdktn.IResolvable; 
  public get allDestinations() {
    return this.getBooleanAttribute('all_destinations');
  }
  public set allDestinations(value: boolean | cdktn.IResolvable) {
    this._allDestinations = value;
  }
  public resetAllDestinations() {
    this._allDestinations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allDestinationsInput() {
    return this._allDestinations;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationLakebaseRuntime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#all_destinations DataDatabricksAccountNetworkPolicies#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationLakebaseRuntimeToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationLakebaseRuntime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationLakebaseRuntimeToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationLakebaseRuntime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_destinations: {
      value: cdktn.booleanToHclTerraform(struct!.allDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationLakebaseRuntimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationLakebaseRuntime | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allDestinations !== undefined) {
      hasAnyValues = true;
      internalValueResult.allDestinations = this._allDestinations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationLakebaseRuntime | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allDestinations = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allDestinations = value.allDestinations;
    }
  }

  // all_destinations - computed: true, optional: true, required: false
  private _allDestinations?: boolean | cdktn.IResolvable; 
  public get allDestinations() {
    return this.getBooleanAttribute('all_destinations');
  }
  public set allDestinations(value: boolean | cdktn.IResolvable) {
    this._allDestinations = value;
  }
  public resetAllDestinations() {
    this._allDestinations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allDestinationsInput() {
    return this._allDestinations;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationWorkspaceApi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#scope_qualifier DataDatabricksAccountNetworkPolicies#scope_qualifier}
  */
  readonly scopeQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#scopes DataDatabricksAccountNetworkPolicies#scopes}
  */
  readonly scopes?: string[];
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationWorkspaceApiToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationWorkspaceApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope_qualifier: cdktn.stringToTerraform(struct!.scopeQualifier),
    scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationWorkspaceApiToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationWorkspaceApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope_qualifier: {
      value: cdktn.stringToHclTerraform(struct!.scopeQualifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scopes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationWorkspaceApiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationWorkspaceApi | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scopeQualifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopeQualifier = this._scopeQualifier;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationWorkspaceApi | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scopeQualifier = undefined;
      this._scopes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scopeQualifier = value.scopeQualifier;
      this._scopes = value.scopes;
    }
  }

  // scope_qualifier - computed: true, optional: true, required: false
  private _scopeQualifier?: string; 
  public get scopeQualifier() {
    return this.getStringAttribute('scope_qualifier');
  }
  public set scopeQualifier(value: string) {
    this._scopeQualifier = value;
  }
  public resetScopeQualifier() {
    this._scopeQualifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeQualifierInput() {
    return this._scopeQualifier;
  }

  // scopes - computed: true, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationWorkspaceUi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#all_destinations DataDatabricksAccountNetworkPolicies#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationWorkspaceUiToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationWorkspaceUi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationWorkspaceUiToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationWorkspaceUi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_destinations: {
      value: cdktn.booleanToHclTerraform(struct!.allDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationWorkspaceUiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationWorkspaceUi | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allDestinations !== undefined) {
      hasAnyValues = true;
      internalValueResult.allDestinations = this._allDestinations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationWorkspaceUi | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allDestinations = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allDestinations = value.allDestinations;
    }
  }

  // all_destinations - computed: true, optional: true, required: false
  private _allDestinations?: boolean | cdktn.IResolvable; 
  public get allDestinations() {
    return this.getBooleanAttribute('all_destinations');
  }
  public set allDestinations(value: boolean | cdktn.IResolvable) {
    this._allDestinations = value;
  }
  public resetAllDestinations() {
    this._allDestinations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allDestinationsInput() {
    return this._allDestinations;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestination {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#account_api DataDatabricksAccountNetworkPolicies#account_api}
  */
  readonly accountApi?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationAccountApi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#account_databricks_one DataDatabricksAccountNetworkPolicies#account_databricks_one}
  */
  readonly accountDatabricksOne?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationAccountDatabricksOne;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#account_ui DataDatabricksAccountNetworkPolicies#account_ui}
  */
  readonly accountUi?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationAccountUi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#all_destinations DataDatabricksAccountNetworkPolicies#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#apps_runtime DataDatabricksAccountNetworkPolicies#apps_runtime}
  */
  readonly appsRuntime?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationAppsRuntime;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#lakebase_runtime DataDatabricksAccountNetworkPolicies#lakebase_runtime}
  */
  readonly lakebaseRuntime?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationLakebaseRuntime;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#workspace_api DataDatabricksAccountNetworkPolicies#workspace_api}
  */
  readonly workspaceApi?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationWorkspaceApi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#workspace_ui DataDatabricksAccountNetworkPolicies#workspace_ui}
  */
  readonly workspaceUi?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationWorkspaceUi;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_api: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationAccountApiToTerraform(struct!.accountApi),
    account_databricks_one: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationAccountDatabricksOneToTerraform(struct!.accountDatabricksOne),
    account_ui: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationAccountUiToTerraform(struct!.accountUi),
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
    apps_runtime: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationAppsRuntimeToTerraform(struct!.appsRuntime),
    lakebase_runtime: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationLakebaseRuntimeToTerraform(struct!.lakebaseRuntime),
    workspace_api: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationWorkspaceApiToTerraform(struct!.workspaceApi),
    workspace_ui: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationWorkspaceUiToTerraform(struct!.workspaceUi),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_api: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationAccountApiToHclTerraform(struct!.accountApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationAccountApi",
    },
    account_databricks_one: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationAccountDatabricksOneToHclTerraform(struct!.accountDatabricksOne),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationAccountDatabricksOne",
    },
    account_ui: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationAccountUiToHclTerraform(struct!.accountUi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationAccountUi",
    },
    all_destinations: {
      value: cdktn.booleanToHclTerraform(struct!.allDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    apps_runtime: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationAppsRuntimeToHclTerraform(struct!.appsRuntime),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationAppsRuntime",
    },
    lakebase_runtime: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationLakebaseRuntimeToHclTerraform(struct!.lakebaseRuntime),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationLakebaseRuntime",
    },
    workspace_api: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationWorkspaceApiToHclTerraform(struct!.workspaceApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationWorkspaceApi",
    },
    workspace_ui: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationWorkspaceUiToHclTerraform(struct!.workspaceUi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationWorkspaceUi",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestination | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountApi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountApi = this._accountApi?.internalValue;
    }
    if (this._accountDatabricksOne?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountDatabricksOne = this._accountDatabricksOne?.internalValue;
    }
    if (this._accountUi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountUi = this._accountUi?.internalValue;
    }
    if (this._allDestinations !== undefined) {
      hasAnyValues = true;
      internalValueResult.allDestinations = this._allDestinations;
    }
    if (this._appsRuntime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appsRuntime = this._appsRuntime?.internalValue;
    }
    if (this._lakebaseRuntime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lakebaseRuntime = this._lakebaseRuntime?.internalValue;
    }
    if (this._workspaceApi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceApi = this._workspaceApi?.internalValue;
    }
    if (this._workspaceUi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceUi = this._workspaceUi?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestination | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountApi.internalValue = undefined;
      this._accountDatabricksOne.internalValue = undefined;
      this._accountUi.internalValue = undefined;
      this._allDestinations = undefined;
      this._appsRuntime.internalValue = undefined;
      this._lakebaseRuntime.internalValue = undefined;
      this._workspaceApi.internalValue = undefined;
      this._workspaceUi.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountApi.internalValue = value.accountApi;
      this._accountDatabricksOne.internalValue = value.accountDatabricksOne;
      this._accountUi.internalValue = value.accountUi;
      this._allDestinations = value.allDestinations;
      this._appsRuntime.internalValue = value.appsRuntime;
      this._lakebaseRuntime.internalValue = value.lakebaseRuntime;
      this._workspaceApi.internalValue = value.workspaceApi;
      this._workspaceUi.internalValue = value.workspaceUi;
    }
  }

  // account_api - computed: true, optional: true, required: false
  private _accountApi = new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationAccountApiOutputReference(this, "account_api");
  public get accountApi() {
    return this._accountApi;
  }
  public putAccountApi(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationAccountApi) {
    this._accountApi.internalValue = value;
  }
  public resetAccountApi() {
    this._accountApi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountApiInput() {
    return this._accountApi.internalValue;
  }

  // account_databricks_one - computed: true, optional: true, required: false
  private _accountDatabricksOne = new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationAccountDatabricksOneOutputReference(this, "account_databricks_one");
  public get accountDatabricksOne() {
    return this._accountDatabricksOne;
  }
  public putAccountDatabricksOne(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationAccountDatabricksOne) {
    this._accountDatabricksOne.internalValue = value;
  }
  public resetAccountDatabricksOne() {
    this._accountDatabricksOne.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountDatabricksOneInput() {
    return this._accountDatabricksOne.internalValue;
  }

  // account_ui - computed: true, optional: true, required: false
  private _accountUi = new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationAccountUiOutputReference(this, "account_ui");
  public get accountUi() {
    return this._accountUi;
  }
  public putAccountUi(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationAccountUi) {
    this._accountUi.internalValue = value;
  }
  public resetAccountUi() {
    this._accountUi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountUiInput() {
    return this._accountUi.internalValue;
  }

  // all_destinations - computed: true, optional: true, required: false
  private _allDestinations?: boolean | cdktn.IResolvable; 
  public get allDestinations() {
    return this.getBooleanAttribute('all_destinations');
  }
  public set allDestinations(value: boolean | cdktn.IResolvable) {
    this._allDestinations = value;
  }
  public resetAllDestinations() {
    this._allDestinations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allDestinationsInput() {
    return this._allDestinations;
  }

  // apps_runtime - computed: true, optional: true, required: false
  private _appsRuntime = new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationAppsRuntimeOutputReference(this, "apps_runtime");
  public get appsRuntime() {
    return this._appsRuntime;
  }
  public putAppsRuntime(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationAppsRuntime) {
    this._appsRuntime.internalValue = value;
  }
  public resetAppsRuntime() {
    this._appsRuntime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appsRuntimeInput() {
    return this._appsRuntime.internalValue;
  }

  // lakebase_runtime - computed: true, optional: true, required: false
  private _lakebaseRuntime = new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationLakebaseRuntimeOutputReference(this, "lakebase_runtime");
  public get lakebaseRuntime() {
    return this._lakebaseRuntime;
  }
  public putLakebaseRuntime(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationLakebaseRuntime) {
    this._lakebaseRuntime.internalValue = value;
  }
  public resetLakebaseRuntime() {
    this._lakebaseRuntime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lakebaseRuntimeInput() {
    return this._lakebaseRuntime.internalValue;
  }

  // workspace_api - computed: true, optional: true, required: false
  private _workspaceApi = new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationWorkspaceApiOutputReference(this, "workspace_api");
  public get workspaceApi() {
    return this._workspaceApi;
  }
  public putWorkspaceApi(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationWorkspaceApi) {
    this._workspaceApi.internalValue = value;
  }
  public resetWorkspaceApi() {
    this._workspaceApi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceApiInput() {
    return this._workspaceApi.internalValue;
  }

  // workspace_ui - computed: true, optional: true, required: false
  private _workspaceUi = new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationWorkspaceUiOutputReference(this, "workspace_ui");
  public get workspaceUi() {
    return this._workspaceUi;
  }
  public putWorkspaceUi(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationWorkspaceUi) {
    this._workspaceUi.internalValue = value;
  }
  public resetWorkspaceUi() {
    this._workspaceUi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceUiInput() {
    return this._workspaceUi.internalValue;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesOriginExcludedIpRanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#ip_ranges DataDatabricksAccountNetworkPolicies#ip_ranges}
  */
  readonly ipRanges?: string[];
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesOriginExcludedIpRangesToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesOriginExcludedIpRanges | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_ranges: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.ipRanges),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesOriginExcludedIpRangesToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesOriginExcludedIpRanges | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_ranges: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.ipRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesOriginExcludedIpRangesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesOriginExcludedIpRanges | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRanges = this._ipRanges;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesOriginExcludedIpRanges | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipRanges = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipRanges = value.ipRanges;
    }
  }

  // ip_ranges - computed: true, optional: true, required: false
  private _ipRanges?: string[]; 
  public get ipRanges() {
    return this.getListAttribute('ip_ranges');
  }
  public set ipRanges(value: string[]) {
    this._ipRanges = value;
  }
  public resetIpRanges() {
    this._ipRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangesInput() {
    return this._ipRanges;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesOriginIncludedIpRanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#ip_ranges DataDatabricksAccountNetworkPolicies#ip_ranges}
  */
  readonly ipRanges?: string[];
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesOriginIncludedIpRangesToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesOriginIncludedIpRanges | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_ranges: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.ipRanges),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesOriginIncludedIpRangesToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesOriginIncludedIpRanges | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_ranges: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.ipRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesOriginIncludedIpRangesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesOriginIncludedIpRanges | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRanges = this._ipRanges;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesOriginIncludedIpRanges | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipRanges = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipRanges = value.ipRanges;
    }
  }

  // ip_ranges - computed: true, optional: true, required: false
  private _ipRanges?: string[]; 
  public get ipRanges() {
    return this.getListAttribute('ip_ranges');
  }
  public set ipRanges(value: string[]) {
    this._ipRanges = value;
  }
  public resetIpRanges() {
    this._ipRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangesInput() {
    return this._ipRanges;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesOrigin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#all_ip_ranges DataDatabricksAccountNetworkPolicies#all_ip_ranges}
  */
  readonly allIpRanges?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#excluded_ip_ranges DataDatabricksAccountNetworkPolicies#excluded_ip_ranges}
  */
  readonly excludedIpRanges?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesOriginExcludedIpRanges;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#included_ip_ranges DataDatabricksAccountNetworkPolicies#included_ip_ranges}
  */
  readonly includedIpRanges?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesOriginIncludedIpRanges;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesOriginToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesOrigin | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_ip_ranges: cdktn.booleanToTerraform(struct!.allIpRanges),
    excluded_ip_ranges: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesOriginExcludedIpRangesToTerraform(struct!.excludedIpRanges),
    included_ip_ranges: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesOriginIncludedIpRangesToTerraform(struct!.includedIpRanges),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesOriginToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesOrigin | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_ip_ranges: {
      value: cdktn.booleanToHclTerraform(struct!.allIpRanges),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    excluded_ip_ranges: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesOriginExcludedIpRangesToHclTerraform(struct!.excludedIpRanges),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesOriginExcludedIpRanges",
    },
    included_ip_ranges: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesOriginIncludedIpRangesToHclTerraform(struct!.includedIpRanges),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesOriginIncludedIpRanges",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesOriginOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesOrigin | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allIpRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.allIpRanges = this._allIpRanges;
    }
    if (this._excludedIpRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedIpRanges = this._excludedIpRanges?.internalValue;
    }
    if (this._includedIpRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedIpRanges = this._includedIpRanges?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesOrigin | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allIpRanges = undefined;
      this._excludedIpRanges.internalValue = undefined;
      this._includedIpRanges.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allIpRanges = value.allIpRanges;
      this._excludedIpRanges.internalValue = value.excludedIpRanges;
      this._includedIpRanges.internalValue = value.includedIpRanges;
    }
  }

  // all_ip_ranges - computed: true, optional: true, required: false
  private _allIpRanges?: boolean | cdktn.IResolvable; 
  public get allIpRanges() {
    return this.getBooleanAttribute('all_ip_ranges');
  }
  public set allIpRanges(value: boolean | cdktn.IResolvable) {
    this._allIpRanges = value;
  }
  public resetAllIpRanges() {
    this._allIpRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allIpRangesInput() {
    return this._allIpRanges;
  }

  // excluded_ip_ranges - computed: true, optional: true, required: false
  private _excludedIpRanges = new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesOriginExcludedIpRangesOutputReference(this, "excluded_ip_ranges");
  public get excludedIpRanges() {
    return this._excludedIpRanges;
  }
  public putExcludedIpRanges(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesOriginExcludedIpRanges) {
    this._excludedIpRanges.internalValue = value;
  }
  public resetExcludedIpRanges() {
    this._excludedIpRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedIpRangesInput() {
    return this._excludedIpRanges.internalValue;
  }

  // included_ip_ranges - computed: true, optional: true, required: false
  private _includedIpRanges = new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesOriginIncludedIpRangesOutputReference(this, "included_ip_ranges");
  public get includedIpRanges() {
    return this._includedIpRanges;
  }
  public putIncludedIpRanges(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesOriginIncludedIpRanges) {
    this._includedIpRanges.internalValue = value;
  }
  public resetIncludedIpRanges() {
    this._includedIpRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedIpRangesInput() {
    return this._includedIpRanges.internalValue;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#authentication DataDatabricksAccountNetworkPolicies#authentication}
  */
  readonly authentication?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesAuthentication;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#destination DataDatabricksAccountNetworkPolicies#destination}
  */
  readonly destination?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestination;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#label DataDatabricksAccountNetworkPolicies#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#origin DataDatabricksAccountNetworkPolicies#origin}
  */
  readonly origin?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesOrigin;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesAuthenticationToTerraform(struct!.authentication),
    destination: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationToTerraform(struct!.destination),
    label: cdktn.stringToTerraform(struct!.label),
    origin: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesOriginToTerraform(struct!.origin),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesAuthentication",
    },
    destination: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestination",
    },
    label: {
      value: cdktn.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesOriginToHclTerraform(struct!.origin),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesOrigin",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRules | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._origin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.origin = this._origin?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRules | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication.internalValue = undefined;
      this._destination.internalValue = undefined;
      this._label = undefined;
      this._origin.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authentication.internalValue = value.authentication;
      this._destination.internalValue = value.destination;
      this._label = value.label;
      this._origin.internalValue = value.origin;
    }
  }

  // authentication - computed: true, optional: true, required: false
  private _authentication = new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // destination - computed: true, optional: true, required: false
  private _destination = new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesDestination) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // label - computed: true, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // origin - computed: true, optional: true, required: false
  private _origin = new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesOriginOutputReference(this, "origin");
  public get origin() {
    return this._origin;
  }
  public putOrigin(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesOrigin) {
    this._origin.internalValue = value;
  }
  public resetOrigin() {
    this._origin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin.internalValue;
  }
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRules[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesOutputReference {
    return new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#allow_rules DataDatabricksAccountNetworkPolicies#allow_rules}
  */
  readonly allowRules?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRules[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#deny_rules DataDatabricksAccountNetworkPolicies#deny_rules}
  */
  readonly denyRules?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRules[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#restriction_mode DataDatabricksAccountNetworkPolicies#restriction_mode}
  */
  readonly restrictionMode: string;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccess | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_rules: cdktn.listMapper(dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesToTerraform, false)(struct!.allowRules),
    deny_rules: cdktn.listMapper(dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesToTerraform, false)(struct!.denyRules),
    restriction_mode: cdktn.stringToTerraform(struct!.restrictionMode),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccess | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_rules: {
      value: cdktn.listMapperHcl(dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesToHclTerraform, false)(struct!.allowRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesList",
    },
    deny_rules: {
      value: cdktn.listMapperHcl(dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesToHclTerraform, false)(struct!.denyRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesList",
    },
    restriction_mode: {
      value: cdktn.stringToHclTerraform(struct!.restrictionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccess | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowRules = this._allowRules?.internalValue;
    }
    if (this._denyRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyRules = this._denyRules?.internalValue;
    }
    if (this._restrictionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictionMode = this._restrictionMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccess | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowRules.internalValue = undefined;
      this._denyRules.internalValue = undefined;
      this._restrictionMode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowRules.internalValue = value.allowRules;
      this._denyRules.internalValue = value.denyRules;
      this._restrictionMode = value.restrictionMode;
    }
  }

  // allow_rules - computed: true, optional: true, required: false
  private _allowRules = new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRulesList(this, "allow_rules", false);
  public get allowRules() {
    return this._allowRules;
  }
  public putAllowRules(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessAllowRules[] | cdktn.IResolvable) {
    this._allowRules.internalValue = value;
  }
  public resetAllowRules() {
    this._allowRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRulesInput() {
    return this._allowRules.internalValue;
  }

  // deny_rules - computed: true, optional: true, required: false
  private _denyRules = new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRulesList(this, "deny_rules", false);
  public get denyRules() {
    return this._denyRules;
  }
  public putDenyRules(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessDenyRules[] | cdktn.IResolvable) {
    this._denyRules.internalValue = value;
  }
  public resetDenyRules() {
    this._denyRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyRulesInput() {
    return this._denyRules.internalValue;
  }

  // restriction_mode - computed: true, optional: false, required: true
  private _restrictionMode?: string; 
  public get restrictionMode() {
    return this.getStringAttribute('restriction_mode');
  }
  public set restrictionMode(value: string) {
    this._restrictionMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictionModeInput() {
    return this._restrictionMode;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItemsIngressDryRun {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#private_access DataDatabricksAccountNetworkPolicies#private_access}
  */
  readonly privateAccess?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccess;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#public_access DataDatabricksAccountNetworkPolicies#public_access}
  */
  readonly publicAccess?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccess;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRun): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    private_access: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessToTerraform(struct!.privateAccess),
    public_access: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessToTerraform(struct!.publicAccess),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRun): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    private_access: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessToHclTerraform(struct!.privateAccess),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccess",
    },
    public_access: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessToHclTerraform(struct!.publicAccess),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccess",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressDryRunOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressDryRun | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._privateAccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateAccess = this._privateAccess?.internalValue;
    }
    if (this._publicAccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicAccess = this._publicAccess?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRun | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._privateAccess.internalValue = undefined;
      this._publicAccess.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._privateAccess.internalValue = value.privateAccess;
      this._publicAccess.internalValue = value.publicAccess;
    }
  }

  // private_access - computed: true, optional: true, required: false
  private _privateAccess = new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessOutputReference(this, "private_access");
  public get privateAccess() {
    return this._privateAccess;
  }
  public putPrivateAccess(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccess) {
    this._privateAccess.internalValue = value;
  }
  public resetPrivateAccess() {
    this._privateAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateAccessInput() {
    return this._privateAccess.internalValue;
  }

  // public_access - computed: true, optional: true, required: false
  private _publicAccess = new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessOutputReference(this, "public_access");
  public get publicAccess() {
    return this._publicAccess;
  }
  public putPublicAccess(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccess) {
    this._publicAccess.internalValue = value;
  }
  public resetPublicAccess() {
    this._publicAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicAccessInput() {
    return this._publicAccess.internalValue;
  }
}
export interface DataDatabricksAccountNetworkPoliciesItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#network_policy_id DataDatabricksAccountNetworkPolicies#network_policy_id}
  */
  readonly networkPolicyId: string;
}

export function dataDatabricksAccountNetworkPoliciesItemsToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItems): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_policy_id: cdktn.stringToTerraform(struct!.networkPolicyId),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItems): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_policy_id: {
      value: cdktn.stringToHclTerraform(struct!.networkPolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkPolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPolicyId = this._networkPolicyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkPolicyId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkPolicyId = value.networkPolicyId;
    }
  }

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // egress - computed: true, optional: false, required: false
  private _egress = new DataDatabricksAccountNetworkPoliciesItemsEgressOutputReference(this, "egress");
  public get egress() {
    return this._egress;
  }

  // ingress - computed: true, optional: false, required: false
  private _ingress = new DataDatabricksAccountNetworkPoliciesItemsIngressOutputReference(this, "ingress");
  public get ingress() {
    return this._ingress;
  }

  // ingress_dry_run - computed: true, optional: false, required: false
  private _ingressDryRun = new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunOutputReference(this, "ingress_dry_run");
  public get ingressDryRun() {
    return this._ingressDryRun;
  }

  // network_policy_id - computed: true, optional: false, required: true
  private _networkPolicyId?: string; 
  public get networkPolicyId() {
    return this.getStringAttribute('network_policy_id');
  }
  public set networkPolicyId(value: string) {
    this._networkPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPolicyIdInput() {
    return this._networkPolicyId;
  }
}

export class DataDatabricksAccountNetworkPoliciesItemsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksAccountNetworkPoliciesItems[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatabricksAccountNetworkPoliciesItemsOutputReference {
    return new DataDatabricksAccountNetworkPoliciesItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies databricks_account_network_policies}
*/
export class DataDatabricksAccountNetworkPolicies extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_account_network_policies";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataDatabricksAccountNetworkPolicies resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksAccountNetworkPolicies to import
  * @param importFromId The id of the existing DataDatabricksAccountNetworkPolicies that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksAccountNetworkPolicies to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_account_network_policies", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policies databricks_account_network_policies} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksAccountNetworkPoliciesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksAccountNetworkPoliciesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_account_network_policies',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.115.0',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // items - computed: true, optional: false, required: false
  private _items = new DataDatabricksAccountNetworkPoliciesItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
