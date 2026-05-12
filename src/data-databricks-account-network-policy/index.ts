/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataDatabricksAccountNetworkPolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#network_policy_id DataDatabricksAccountNetworkPolicy#network_policy_id}
  */
  readonly networkPolicyId: string;
}
export interface DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#destination DataDatabricksAccountNetworkPolicy#destination}
  */
  readonly destination?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#internet_destination_type DataDatabricksAccountNetworkPolicy#internet_destination_type}
  */
  readonly internetDestinationType?: string;
}

export function dataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsToTerraform(struct?: DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktn.stringToTerraform(struct!.destination),
    internet_destination_type: cdktn.stringToTerraform(struct!.internetDestinationType),
  }
}


export function dataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations | cdktn.IResolvable | undefined) {
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

export class DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference {
    return new DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#azure_storage_account DataDatabricksAccountNetworkPolicy#azure_storage_account}
  */
  readonly azureStorageAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#azure_storage_service DataDatabricksAccountNetworkPolicy#azure_storage_service}
  */
  readonly azureStorageService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#bucket_name DataDatabricksAccountNetworkPolicy#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#region DataDatabricksAccountNetworkPolicy#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#storage_destination_type DataDatabricksAccountNetworkPolicy#storage_destination_type}
  */
  readonly storageDestinationType?: string;
}

export function dataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsToTerraform(struct?: DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations | cdktn.IResolvable): any {
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


export function dataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations | cdktn.IResolvable | undefined) {
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

export class DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference {
    return new DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksAccountNetworkPolicyEgressNetworkAccessBlockedInternetDestinations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#destination DataDatabricksAccountNetworkPolicy#destination}
  */
  readonly destination?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#internet_destination_type DataDatabricksAccountNetworkPolicy#internet_destination_type}
  */
  readonly internetDestinationType?: string;
}

export function dataDatabricksAccountNetworkPolicyEgressNetworkAccessBlockedInternetDestinationsToTerraform(struct?: DataDatabricksAccountNetworkPolicyEgressNetworkAccessBlockedInternetDestinations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktn.stringToTerraform(struct!.destination),
    internet_destination_type: cdktn.stringToTerraform(struct!.internetDestinationType),
  }
}


export function dataDatabricksAccountNetworkPolicyEgressNetworkAccessBlockedInternetDestinationsToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyEgressNetworkAccessBlockedInternetDestinations | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyEgressNetworkAccessBlockedInternetDestinationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksAccountNetworkPolicyEgressNetworkAccessBlockedInternetDestinations | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyEgressNetworkAccessBlockedInternetDestinations | cdktn.IResolvable | undefined) {
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

export class DataDatabricksAccountNetworkPolicyEgressNetworkAccessBlockedInternetDestinationsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksAccountNetworkPolicyEgressNetworkAccessBlockedInternetDestinations[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksAccountNetworkPolicyEgressNetworkAccessBlockedInternetDestinationsOutputReference {
    return new DataDatabricksAccountNetworkPolicyEgressNetworkAccessBlockedInternetDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#dry_run_mode_product_filter DataDatabricksAccountNetworkPolicy#dry_run_mode_product_filter}
  */
  readonly dryRunModeProductFilter?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#enforcement_mode DataDatabricksAccountNetworkPolicy#enforcement_mode}
  */
  readonly enforcementMode?: string;
}

export function dataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcementToTerraform(struct?: DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dry_run_mode_product_filter: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.dryRunModeProductFilter),
    enforcement_mode: cdktn.stringToTerraform(struct!.enforcementMode),
  }
}


export function dataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcementToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcement | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcement | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcement | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountNetworkPolicyEgressNetworkAccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#allowed_internet_destinations DataDatabricksAccountNetworkPolicy#allowed_internet_destinations}
  */
  readonly allowedInternetDestinations?: DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#allowed_storage_destinations DataDatabricksAccountNetworkPolicy#allowed_storage_destinations}
  */
  readonly allowedStorageDestinations?: DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#blocked_internet_destinations DataDatabricksAccountNetworkPolicy#blocked_internet_destinations}
  */
  readonly blockedInternetDestinations?: DataDatabricksAccountNetworkPolicyEgressNetworkAccessBlockedInternetDestinations[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#policy_enforcement DataDatabricksAccountNetworkPolicy#policy_enforcement}
  */
  readonly policyEnforcement?: DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcement;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#restriction_mode DataDatabricksAccountNetworkPolicy#restriction_mode}
  */
  readonly restrictionMode: string;
}

export function dataDatabricksAccountNetworkPolicyEgressNetworkAccessToTerraform(struct?: DataDatabricksAccountNetworkPolicyEgressNetworkAccess | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_internet_destinations: cdktn.listMapper(dataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsToTerraform, false)(struct!.allowedInternetDestinations),
    allowed_storage_destinations: cdktn.listMapper(dataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsToTerraform, false)(struct!.allowedStorageDestinations),
    blocked_internet_destinations: cdktn.listMapper(dataDatabricksAccountNetworkPolicyEgressNetworkAccessBlockedInternetDestinationsToTerraform, false)(struct!.blockedInternetDestinations),
    policy_enforcement: dataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcementToTerraform(struct!.policyEnforcement),
    restriction_mode: cdktn.stringToTerraform(struct!.restrictionMode),
  }
}


export function dataDatabricksAccountNetworkPolicyEgressNetworkAccessToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyEgressNetworkAccess | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_internet_destinations: {
      value: cdktn.listMapperHcl(dataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsToHclTerraform, false)(struct!.allowedInternetDestinations),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList",
    },
    allowed_storage_destinations: {
      value: cdktn.listMapperHcl(dataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsToHclTerraform, false)(struct!.allowedStorageDestinations),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList",
    },
    blocked_internet_destinations: {
      value: cdktn.listMapperHcl(dataDatabricksAccountNetworkPolicyEgressNetworkAccessBlockedInternetDestinationsToHclTerraform, false)(struct!.blockedInternetDestinations),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksAccountNetworkPolicyEgressNetworkAccessBlockedInternetDestinationsList",
    },
    policy_enforcement: {
      value: dataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcementToHclTerraform(struct!.policyEnforcement),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcement",
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

export class DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyEgressNetworkAccess | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyEgressNetworkAccess | cdktn.IResolvable | undefined) {
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
  private _allowedInternetDestinations = new DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList(this, "allowed_internet_destinations", false);
  public get allowedInternetDestinations() {
    return this._allowedInternetDestinations;
  }
  public putAllowedInternetDestinations(value: DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations[] | cdktn.IResolvable) {
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
  private _allowedStorageDestinations = new DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList(this, "allowed_storage_destinations", false);
  public get allowedStorageDestinations() {
    return this._allowedStorageDestinations;
  }
  public putAllowedStorageDestinations(value: DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations[] | cdktn.IResolvable) {
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
  private _blockedInternetDestinations = new DataDatabricksAccountNetworkPolicyEgressNetworkAccessBlockedInternetDestinationsList(this, "blocked_internet_destinations", false);
  public get blockedInternetDestinations() {
    return this._blockedInternetDestinations;
  }
  public putBlockedInternetDestinations(value: DataDatabricksAccountNetworkPolicyEgressNetworkAccessBlockedInternetDestinations[] | cdktn.IResolvable) {
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
  private _policyEnforcement = new DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference(this, "policy_enforcement");
  public get policyEnforcement() {
    return this._policyEnforcement;
  }
  public putPolicyEnforcement(value: DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcement) {
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
export interface DataDatabricksAccountNetworkPolicyEgress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#network_access DataDatabricksAccountNetworkPolicy#network_access}
  */
  readonly networkAccess?: DataDatabricksAccountNetworkPolicyEgressNetworkAccess;
}

export function dataDatabricksAccountNetworkPolicyEgressToTerraform(struct?: DataDatabricksAccountNetworkPolicyEgress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_access: dataDatabricksAccountNetworkPolicyEgressNetworkAccessToTerraform(struct!.networkAccess),
  }
}


export function dataDatabricksAccountNetworkPolicyEgressToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyEgress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_access: {
      value: dataDatabricksAccountNetworkPolicyEgressNetworkAccessToHclTerraform(struct!.networkAccess),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyEgressNetworkAccess",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPolicyEgressOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyEgress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkAccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkAccess = this._networkAccess?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPolicyEgress | undefined) {
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
  private _networkAccess = new DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference(this, "network_access");
  public get networkAccess() {
    return this._networkAccess;
  }
  public putNetworkAccess(value: DataDatabricksAccountNetworkPolicyEgressNetworkAccess) {
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
export interface DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesAuthenticationIdentities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#principal_id DataDatabricksAccountNetworkPolicy#principal_id}
  */
  readonly principalId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#principal_type DataDatabricksAccountNetworkPolicy#principal_type}
  */
  readonly principalType?: string;
}

export function dataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesAuthenticationIdentitiesToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesAuthenticationIdentities | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    principal_id: cdktn.numberToTerraform(struct!.principalId),
    principal_type: cdktn.stringToTerraform(struct!.principalType),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesAuthenticationIdentitiesToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesAuthenticationIdentities | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesAuthenticationIdentitiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesAuthenticationIdentities | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesAuthenticationIdentities | cdktn.IResolvable | undefined) {
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

export class DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesAuthenticationIdentitiesList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesAuthenticationIdentities[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesAuthenticationIdentitiesOutputReference {
    return new DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesAuthenticationIdentitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#identities DataDatabricksAccountNetworkPolicy#identities}
  */
  readonly identities?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesAuthenticationIdentities[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#identity_type DataDatabricksAccountNetworkPolicy#identity_type}
  */
  readonly identityType?: string;
}

export function dataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesAuthenticationToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesAuthentication | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identities: cdktn.listMapper(dataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesAuthenticationIdentitiesToTerraform, false)(struct!.identities),
    identity_type: cdktn.stringToTerraform(struct!.identityType),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesAuthenticationToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesAuthentication | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identities: {
      value: cdktn.listMapperHcl(dataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesAuthenticationIdentitiesToHclTerraform, false)(struct!.identities),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesAuthenticationIdentitiesList",
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

export class DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesAuthentication | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesAuthentication | cdktn.IResolvable | undefined) {
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
  private _identities = new DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesAuthenticationIdentitiesList(this, "identities", false);
  public get identities() {
    return this._identities;
  }
  public putIdentities(value: DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesAuthenticationIdentities[] | cdktn.IResolvable) {
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
export interface DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountApi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#scope_qualifier DataDatabricksAccountNetworkPolicy#scope_qualifier}
  */
  readonly scopeQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#scopes DataDatabricksAccountNetworkPolicy#scopes}
  */
  readonly scopes?: string[];
}

export function dataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountApiToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope_qualifier: cdktn.stringToTerraform(struct!.scopeQualifier),
    scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountApiToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountApi | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountApiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountApi | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountApi | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountDatabricksOne {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#all_destinations DataDatabricksAccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountDatabricksOneToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountDatabricksOne | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountDatabricksOneToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountDatabricksOne | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountDatabricksOneOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountDatabricksOne | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountDatabricksOne | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountUi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#all_destinations DataDatabricksAccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountUiToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountUi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountUiToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountUi | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountUiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountUi | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountUi | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAppsRuntime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#all_destinations DataDatabricksAccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAppsRuntimeToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAppsRuntime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAppsRuntimeToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAppsRuntime | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAppsRuntimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAppsRuntime | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAppsRuntime | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationLakebaseRuntime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#all_destinations DataDatabricksAccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationLakebaseRuntimeToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationLakebaseRuntime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationLakebaseRuntimeToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationLakebaseRuntime | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationLakebaseRuntimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationLakebaseRuntime | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationLakebaseRuntime | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationWorkspaceApi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#scope_qualifier DataDatabricksAccountNetworkPolicy#scope_qualifier}
  */
  readonly scopeQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#scopes DataDatabricksAccountNetworkPolicy#scopes}
  */
  readonly scopes?: string[];
}

export function dataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationWorkspaceApiToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationWorkspaceApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope_qualifier: cdktn.stringToTerraform(struct!.scopeQualifier),
    scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationWorkspaceApiToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationWorkspaceApi | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationWorkspaceApiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationWorkspaceApi | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationWorkspaceApi | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationWorkspaceUi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#all_destinations DataDatabricksAccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationWorkspaceUiToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationWorkspaceUi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationWorkspaceUiToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationWorkspaceUi | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationWorkspaceUiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationWorkspaceUi | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationWorkspaceUi | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestination {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#account_api DataDatabricksAccountNetworkPolicy#account_api}
  */
  readonly accountApi?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountApi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#account_databricks_one DataDatabricksAccountNetworkPolicy#account_databricks_one}
  */
  readonly accountDatabricksOne?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountDatabricksOne;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#account_ui DataDatabricksAccountNetworkPolicy#account_ui}
  */
  readonly accountUi?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountUi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#all_destinations DataDatabricksAccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#apps_runtime DataDatabricksAccountNetworkPolicy#apps_runtime}
  */
  readonly appsRuntime?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAppsRuntime;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#lakebase_runtime DataDatabricksAccountNetworkPolicy#lakebase_runtime}
  */
  readonly lakebaseRuntime?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationLakebaseRuntime;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#workspace_api DataDatabricksAccountNetworkPolicy#workspace_api}
  */
  readonly workspaceApi?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationWorkspaceApi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#workspace_ui DataDatabricksAccountNetworkPolicy#workspace_ui}
  */
  readonly workspaceUi?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationWorkspaceUi;
}

export function dataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_api: dataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountApiToTerraform(struct!.accountApi),
    account_databricks_one: dataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountDatabricksOneToTerraform(struct!.accountDatabricksOne),
    account_ui: dataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountUiToTerraform(struct!.accountUi),
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
    apps_runtime: dataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAppsRuntimeToTerraform(struct!.appsRuntime),
    lakebase_runtime: dataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationLakebaseRuntimeToTerraform(struct!.lakebaseRuntime),
    workspace_api: dataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationWorkspaceApiToTerraform(struct!.workspaceApi),
    workspace_ui: dataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationWorkspaceUiToTerraform(struct!.workspaceUi),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_api: {
      value: dataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountApiToHclTerraform(struct!.accountApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountApi",
    },
    account_databricks_one: {
      value: dataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountDatabricksOneToHclTerraform(struct!.accountDatabricksOne),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountDatabricksOne",
    },
    account_ui: {
      value: dataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountUiToHclTerraform(struct!.accountUi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountUi",
    },
    all_destinations: {
      value: cdktn.booleanToHclTerraform(struct!.allDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    apps_runtime: {
      value: dataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAppsRuntimeToHclTerraform(struct!.appsRuntime),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAppsRuntime",
    },
    lakebase_runtime: {
      value: dataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationLakebaseRuntimeToHclTerraform(struct!.lakebaseRuntime),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationLakebaseRuntime",
    },
    workspace_api: {
      value: dataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationWorkspaceApiToHclTerraform(struct!.workspaceApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationWorkspaceApi",
    },
    workspace_ui: {
      value: dataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationWorkspaceUiToHclTerraform(struct!.workspaceUi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationWorkspaceUi",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestination | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestination | cdktn.IResolvable | undefined) {
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
  private _accountApi = new DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountApiOutputReference(this, "account_api");
  public get accountApi() {
    return this._accountApi;
  }
  public putAccountApi(value: DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountApi) {
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
  private _accountDatabricksOne = new DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountDatabricksOneOutputReference(this, "account_databricks_one");
  public get accountDatabricksOne() {
    return this._accountDatabricksOne;
  }
  public putAccountDatabricksOne(value: DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountDatabricksOne) {
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
  private _accountUi = new DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountUiOutputReference(this, "account_ui");
  public get accountUi() {
    return this._accountUi;
  }
  public putAccountUi(value: DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountUi) {
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
  private _appsRuntime = new DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAppsRuntimeOutputReference(this, "apps_runtime");
  public get appsRuntime() {
    return this._appsRuntime;
  }
  public putAppsRuntime(value: DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAppsRuntime) {
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
  private _lakebaseRuntime = new DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationLakebaseRuntimeOutputReference(this, "lakebase_runtime");
  public get lakebaseRuntime() {
    return this._lakebaseRuntime;
  }
  public putLakebaseRuntime(value: DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationLakebaseRuntime) {
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
  private _workspaceApi = new DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationWorkspaceApiOutputReference(this, "workspace_api");
  public get workspaceApi() {
    return this._workspaceApi;
  }
  public putWorkspaceApi(value: DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationWorkspaceApi) {
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
  private _workspaceUi = new DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationWorkspaceUiOutputReference(this, "workspace_ui");
  public get workspaceUi() {
    return this._workspaceUi;
  }
  public putWorkspaceUi(value: DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationWorkspaceUi) {
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
export interface DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesOriginEndpoints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#endpoint_ids DataDatabricksAccountNetworkPolicy#endpoint_ids}
  */
  readonly endpointIds?: string[];
}

export function dataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesOriginEndpointsToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesOriginEndpoints | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.endpointIds),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesOriginEndpointsToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesOriginEndpoints | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesOriginEndpointsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesOriginEndpoints | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesOriginEndpoints | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesOrigin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#all_private_access DataDatabricksAccountNetworkPolicy#all_private_access}
  */
  readonly allPrivateAccess?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#all_registered_endpoints DataDatabricksAccountNetworkPolicy#all_registered_endpoints}
  */
  readonly allRegisteredEndpoints?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#azure_workspace_private_link DataDatabricksAccountNetworkPolicy#azure_workspace_private_link}
  */
  readonly azureWorkspacePrivateLink?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#endpoints DataDatabricksAccountNetworkPolicy#endpoints}
  */
  readonly endpoints?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesOriginEndpoints;
}

export function dataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesOriginToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesOrigin | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_private_access: cdktn.booleanToTerraform(struct!.allPrivateAccess),
    all_registered_endpoints: cdktn.booleanToTerraform(struct!.allRegisteredEndpoints),
    azure_workspace_private_link: cdktn.booleanToTerraform(struct!.azureWorkspacePrivateLink),
    endpoints: dataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesOriginEndpointsToTerraform(struct!.endpoints),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesOriginToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesOrigin | cdktn.IResolvable): any {
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
      value: dataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesOriginEndpointsToHclTerraform(struct!.endpoints),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesOriginEndpoints",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesOriginOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesOrigin | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesOrigin | cdktn.IResolvable | undefined) {
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
  private _endpoints = new DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesOriginEndpointsOutputReference(this, "endpoints");
  public get endpoints() {
    return this._endpoints;
  }
  public putEndpoints(value: DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesOriginEndpoints) {
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
export interface DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#authentication DataDatabricksAccountNetworkPolicy#authentication}
  */
  readonly authentication?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesAuthentication;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#destination DataDatabricksAccountNetworkPolicy#destination}
  */
  readonly destination?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestination;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#label DataDatabricksAccountNetworkPolicy#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#origin DataDatabricksAccountNetworkPolicy#origin}
  */
  readonly origin?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesOrigin;
}

export function dataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: dataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesAuthenticationToTerraform(struct!.authentication),
    destination: dataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationToTerraform(struct!.destination),
    label: cdktn.stringToTerraform(struct!.label),
    origin: dataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesOriginToTerraform(struct!.origin),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: dataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesAuthentication",
    },
    destination: {
      value: dataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestination",
    },
    label: {
      value: cdktn.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin: {
      value: dataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesOriginToHclTerraform(struct!.origin),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesOrigin",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRules | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRules | cdktn.IResolvable | undefined) {
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
  private _authentication = new DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesAuthentication) {
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
  private _destination = new DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesDestination) {
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
  private _origin = new DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesOriginOutputReference(this, "origin");
  public get origin() {
    return this._origin;
  }
  public putOrigin(value: DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesOrigin) {
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

export class DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRules[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesOutputReference {
    return new DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesAuthenticationIdentities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#principal_id DataDatabricksAccountNetworkPolicy#principal_id}
  */
  readonly principalId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#principal_type DataDatabricksAccountNetworkPolicy#principal_type}
  */
  readonly principalType?: string;
}

export function dataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesAuthenticationIdentitiesToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesAuthenticationIdentities | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    principal_id: cdktn.numberToTerraform(struct!.principalId),
    principal_type: cdktn.stringToTerraform(struct!.principalType),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesAuthenticationIdentitiesToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesAuthenticationIdentities | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesAuthenticationIdentitiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesAuthenticationIdentities | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesAuthenticationIdentities | cdktn.IResolvable | undefined) {
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

export class DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesAuthenticationIdentitiesList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesAuthenticationIdentities[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesAuthenticationIdentitiesOutputReference {
    return new DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesAuthenticationIdentitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#identities DataDatabricksAccountNetworkPolicy#identities}
  */
  readonly identities?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesAuthenticationIdentities[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#identity_type DataDatabricksAccountNetworkPolicy#identity_type}
  */
  readonly identityType?: string;
}

export function dataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesAuthenticationToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesAuthentication | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identities: cdktn.listMapper(dataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesAuthenticationIdentitiesToTerraform, false)(struct!.identities),
    identity_type: cdktn.stringToTerraform(struct!.identityType),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesAuthenticationToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesAuthentication | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identities: {
      value: cdktn.listMapperHcl(dataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesAuthenticationIdentitiesToHclTerraform, false)(struct!.identities),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesAuthenticationIdentitiesList",
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

export class DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesAuthentication | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesAuthentication | cdktn.IResolvable | undefined) {
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
  private _identities = new DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesAuthenticationIdentitiesList(this, "identities", false);
  public get identities() {
    return this._identities;
  }
  public putIdentities(value: DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesAuthenticationIdentities[] | cdktn.IResolvable) {
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
export interface DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountApi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#scope_qualifier DataDatabricksAccountNetworkPolicy#scope_qualifier}
  */
  readonly scopeQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#scopes DataDatabricksAccountNetworkPolicy#scopes}
  */
  readonly scopes?: string[];
}

export function dataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountApiToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope_qualifier: cdktn.stringToTerraform(struct!.scopeQualifier),
    scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountApiToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountApi | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountApiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountApi | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountApi | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountDatabricksOne {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#all_destinations DataDatabricksAccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountDatabricksOneToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountDatabricksOne | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountDatabricksOneToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountDatabricksOne | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountDatabricksOneOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountDatabricksOne | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountDatabricksOne | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountUi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#all_destinations DataDatabricksAccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountUiToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountUi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountUiToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountUi | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountUiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountUi | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountUi | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAppsRuntime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#all_destinations DataDatabricksAccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAppsRuntimeToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAppsRuntime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAppsRuntimeToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAppsRuntime | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAppsRuntimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAppsRuntime | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAppsRuntime | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationLakebaseRuntime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#all_destinations DataDatabricksAccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationLakebaseRuntimeToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationLakebaseRuntime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationLakebaseRuntimeToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationLakebaseRuntime | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationLakebaseRuntimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationLakebaseRuntime | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationLakebaseRuntime | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationWorkspaceApi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#scope_qualifier DataDatabricksAccountNetworkPolicy#scope_qualifier}
  */
  readonly scopeQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#scopes DataDatabricksAccountNetworkPolicy#scopes}
  */
  readonly scopes?: string[];
}

export function dataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationWorkspaceApiToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationWorkspaceApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope_qualifier: cdktn.stringToTerraform(struct!.scopeQualifier),
    scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationWorkspaceApiToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationWorkspaceApi | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationWorkspaceApiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationWorkspaceApi | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationWorkspaceApi | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationWorkspaceUi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#all_destinations DataDatabricksAccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationWorkspaceUiToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationWorkspaceUi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationWorkspaceUiToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationWorkspaceUi | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationWorkspaceUiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationWorkspaceUi | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationWorkspaceUi | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestination {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#account_api DataDatabricksAccountNetworkPolicy#account_api}
  */
  readonly accountApi?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountApi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#account_databricks_one DataDatabricksAccountNetworkPolicy#account_databricks_one}
  */
  readonly accountDatabricksOne?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountDatabricksOne;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#account_ui DataDatabricksAccountNetworkPolicy#account_ui}
  */
  readonly accountUi?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountUi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#all_destinations DataDatabricksAccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#apps_runtime DataDatabricksAccountNetworkPolicy#apps_runtime}
  */
  readonly appsRuntime?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAppsRuntime;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#lakebase_runtime DataDatabricksAccountNetworkPolicy#lakebase_runtime}
  */
  readonly lakebaseRuntime?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationLakebaseRuntime;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#workspace_api DataDatabricksAccountNetworkPolicy#workspace_api}
  */
  readonly workspaceApi?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationWorkspaceApi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#workspace_ui DataDatabricksAccountNetworkPolicy#workspace_ui}
  */
  readonly workspaceUi?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationWorkspaceUi;
}

export function dataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_api: dataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountApiToTerraform(struct!.accountApi),
    account_databricks_one: dataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountDatabricksOneToTerraform(struct!.accountDatabricksOne),
    account_ui: dataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountUiToTerraform(struct!.accountUi),
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
    apps_runtime: dataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAppsRuntimeToTerraform(struct!.appsRuntime),
    lakebase_runtime: dataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationLakebaseRuntimeToTerraform(struct!.lakebaseRuntime),
    workspace_api: dataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationWorkspaceApiToTerraform(struct!.workspaceApi),
    workspace_ui: dataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationWorkspaceUiToTerraform(struct!.workspaceUi),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_api: {
      value: dataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountApiToHclTerraform(struct!.accountApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountApi",
    },
    account_databricks_one: {
      value: dataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountDatabricksOneToHclTerraform(struct!.accountDatabricksOne),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountDatabricksOne",
    },
    account_ui: {
      value: dataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountUiToHclTerraform(struct!.accountUi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountUi",
    },
    all_destinations: {
      value: cdktn.booleanToHclTerraform(struct!.allDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    apps_runtime: {
      value: dataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAppsRuntimeToHclTerraform(struct!.appsRuntime),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAppsRuntime",
    },
    lakebase_runtime: {
      value: dataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationLakebaseRuntimeToHclTerraform(struct!.lakebaseRuntime),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationLakebaseRuntime",
    },
    workspace_api: {
      value: dataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationWorkspaceApiToHclTerraform(struct!.workspaceApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationWorkspaceApi",
    },
    workspace_ui: {
      value: dataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationWorkspaceUiToHclTerraform(struct!.workspaceUi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationWorkspaceUi",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestination | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestination | cdktn.IResolvable | undefined) {
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
  private _accountApi = new DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountApiOutputReference(this, "account_api");
  public get accountApi() {
    return this._accountApi;
  }
  public putAccountApi(value: DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountApi) {
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
  private _accountDatabricksOne = new DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountDatabricksOneOutputReference(this, "account_databricks_one");
  public get accountDatabricksOne() {
    return this._accountDatabricksOne;
  }
  public putAccountDatabricksOne(value: DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountDatabricksOne) {
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
  private _accountUi = new DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountUiOutputReference(this, "account_ui");
  public get accountUi() {
    return this._accountUi;
  }
  public putAccountUi(value: DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountUi) {
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
  private _appsRuntime = new DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAppsRuntimeOutputReference(this, "apps_runtime");
  public get appsRuntime() {
    return this._appsRuntime;
  }
  public putAppsRuntime(value: DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAppsRuntime) {
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
  private _lakebaseRuntime = new DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationLakebaseRuntimeOutputReference(this, "lakebase_runtime");
  public get lakebaseRuntime() {
    return this._lakebaseRuntime;
  }
  public putLakebaseRuntime(value: DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationLakebaseRuntime) {
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
  private _workspaceApi = new DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationWorkspaceApiOutputReference(this, "workspace_api");
  public get workspaceApi() {
    return this._workspaceApi;
  }
  public putWorkspaceApi(value: DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationWorkspaceApi) {
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
  private _workspaceUi = new DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationWorkspaceUiOutputReference(this, "workspace_ui");
  public get workspaceUi() {
    return this._workspaceUi;
  }
  public putWorkspaceUi(value: DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationWorkspaceUi) {
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
export interface DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesOriginEndpoints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#endpoint_ids DataDatabricksAccountNetworkPolicy#endpoint_ids}
  */
  readonly endpointIds?: string[];
}

export function dataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesOriginEndpointsToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesOriginEndpoints | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.endpointIds),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesOriginEndpointsToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesOriginEndpoints | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesOriginEndpointsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesOriginEndpoints | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesOriginEndpoints | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesOrigin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#all_private_access DataDatabricksAccountNetworkPolicy#all_private_access}
  */
  readonly allPrivateAccess?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#all_registered_endpoints DataDatabricksAccountNetworkPolicy#all_registered_endpoints}
  */
  readonly allRegisteredEndpoints?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#azure_workspace_private_link DataDatabricksAccountNetworkPolicy#azure_workspace_private_link}
  */
  readonly azureWorkspacePrivateLink?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#endpoints DataDatabricksAccountNetworkPolicy#endpoints}
  */
  readonly endpoints?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesOriginEndpoints;
}

export function dataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesOriginToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesOrigin | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_private_access: cdktn.booleanToTerraform(struct!.allPrivateAccess),
    all_registered_endpoints: cdktn.booleanToTerraform(struct!.allRegisteredEndpoints),
    azure_workspace_private_link: cdktn.booleanToTerraform(struct!.azureWorkspacePrivateLink),
    endpoints: dataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesOriginEndpointsToTerraform(struct!.endpoints),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesOriginToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesOrigin | cdktn.IResolvable): any {
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
      value: dataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesOriginEndpointsToHclTerraform(struct!.endpoints),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesOriginEndpoints",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesOriginOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesOrigin | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesOrigin | cdktn.IResolvable | undefined) {
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
  private _endpoints = new DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesOriginEndpointsOutputReference(this, "endpoints");
  public get endpoints() {
    return this._endpoints;
  }
  public putEndpoints(value: DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesOriginEndpoints) {
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
export interface DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#authentication DataDatabricksAccountNetworkPolicy#authentication}
  */
  readonly authentication?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesAuthentication;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#destination DataDatabricksAccountNetworkPolicy#destination}
  */
  readonly destination?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestination;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#label DataDatabricksAccountNetworkPolicy#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#origin DataDatabricksAccountNetworkPolicy#origin}
  */
  readonly origin?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesOrigin;
}

export function dataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: dataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesAuthenticationToTerraform(struct!.authentication),
    destination: dataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationToTerraform(struct!.destination),
    label: cdktn.stringToTerraform(struct!.label),
    origin: dataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesOriginToTerraform(struct!.origin),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: dataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesAuthentication",
    },
    destination: {
      value: dataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestination",
    },
    label: {
      value: cdktn.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin: {
      value: dataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesOriginToHclTerraform(struct!.origin),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesOrigin",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRules | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRules | cdktn.IResolvable | undefined) {
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
  private _authentication = new DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesAuthentication) {
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
  private _destination = new DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesDestination) {
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
  private _origin = new DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesOriginOutputReference(this, "origin");
  public get origin() {
    return this._origin;
  }
  public putOrigin(value: DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesOrigin) {
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

export class DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRules[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesOutputReference {
    return new DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksAccountNetworkPolicyIngressPrivateAccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#allow_rules DataDatabricksAccountNetworkPolicy#allow_rules}
  */
  readonly allowRules?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRules[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#deny_rules DataDatabricksAccountNetworkPolicy#deny_rules}
  */
  readonly denyRules?: DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRules[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#restriction_mode DataDatabricksAccountNetworkPolicy#restriction_mode}
  */
  readonly restrictionMode: string;
}

export function dataDatabricksAccountNetworkPolicyIngressPrivateAccessToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPrivateAccess | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_rules: cdktn.listMapper(dataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesToTerraform, false)(struct!.allowRules),
    deny_rules: cdktn.listMapper(dataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesToTerraform, false)(struct!.denyRules),
    restriction_mode: cdktn.stringToTerraform(struct!.restrictionMode),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressPrivateAccessToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPrivateAccess | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_rules: {
      value: cdktn.listMapperHcl(dataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesToHclTerraform, false)(struct!.allowRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesList",
    },
    deny_rules: {
      value: cdktn.listMapperHcl(dataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesToHclTerraform, false)(struct!.denyRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesList",
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

export class DataDatabricksAccountNetworkPolicyIngressPrivateAccessOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressPrivateAccess | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressPrivateAccess | cdktn.IResolvable | undefined) {
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
  private _allowRules = new DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRulesList(this, "allow_rules", false);
  public get allowRules() {
    return this._allowRules;
  }
  public putAllowRules(value: DataDatabricksAccountNetworkPolicyIngressPrivateAccessAllowRules[] | cdktn.IResolvable) {
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
  private _denyRules = new DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRulesList(this, "deny_rules", false);
  public get denyRules() {
    return this._denyRules;
  }
  public putDenyRules(value: DataDatabricksAccountNetworkPolicyIngressPrivateAccessDenyRules[] | cdktn.IResolvable) {
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
export interface DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesAuthenticationIdentities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#principal_id DataDatabricksAccountNetworkPolicy#principal_id}
  */
  readonly principalId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#principal_type DataDatabricksAccountNetworkPolicy#principal_type}
  */
  readonly principalType?: string;
}

export function dataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesAuthenticationIdentitiesToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesAuthenticationIdentities | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    principal_id: cdktn.numberToTerraform(struct!.principalId),
    principal_type: cdktn.stringToTerraform(struct!.principalType),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesAuthenticationIdentitiesToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesAuthenticationIdentities | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesAuthenticationIdentitiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesAuthenticationIdentities | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesAuthenticationIdentities | cdktn.IResolvable | undefined) {
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

export class DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesAuthenticationIdentitiesList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesAuthenticationIdentities[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesAuthenticationIdentitiesOutputReference {
    return new DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesAuthenticationIdentitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#identities DataDatabricksAccountNetworkPolicy#identities}
  */
  readonly identities?: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesAuthenticationIdentities[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#identity_type DataDatabricksAccountNetworkPolicy#identity_type}
  */
  readonly identityType?: string;
}

export function dataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesAuthenticationToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesAuthentication | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identities: cdktn.listMapper(dataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesAuthenticationIdentitiesToTerraform, false)(struct!.identities),
    identity_type: cdktn.stringToTerraform(struct!.identityType),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesAuthenticationToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesAuthentication | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identities: {
      value: cdktn.listMapperHcl(dataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesAuthenticationIdentitiesToHclTerraform, false)(struct!.identities),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesAuthenticationIdentitiesList",
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

export class DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesAuthentication | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesAuthentication | cdktn.IResolvable | undefined) {
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
  private _identities = new DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesAuthenticationIdentitiesList(this, "identities", false);
  public get identities() {
    return this._identities;
  }
  public putIdentities(value: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesAuthenticationIdentities[] | cdktn.IResolvable) {
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
export interface DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountApi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#scope_qualifier DataDatabricksAccountNetworkPolicy#scope_qualifier}
  */
  readonly scopeQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#scopes DataDatabricksAccountNetworkPolicy#scopes}
  */
  readonly scopes?: string[];
}

export function dataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountApiToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope_qualifier: cdktn.stringToTerraform(struct!.scopeQualifier),
    scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountApiToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountApi | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountApiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountApi | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountApi | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountDatabricksOne {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#all_destinations DataDatabricksAccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountDatabricksOneToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountDatabricksOne | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountDatabricksOneToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountDatabricksOne | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountDatabricksOneOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountDatabricksOne | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountDatabricksOne | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountUi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#all_destinations DataDatabricksAccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountUiToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountUi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountUiToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountUi | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountUiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountUi | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountUi | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAppsRuntime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#all_destinations DataDatabricksAccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAppsRuntimeToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAppsRuntime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAppsRuntimeToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAppsRuntime | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAppsRuntimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAppsRuntime | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAppsRuntime | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationLakebaseRuntime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#all_destinations DataDatabricksAccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationLakebaseRuntimeToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationLakebaseRuntime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationLakebaseRuntimeToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationLakebaseRuntime | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationLakebaseRuntimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationLakebaseRuntime | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationLakebaseRuntime | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationWorkspaceApi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#scope_qualifier DataDatabricksAccountNetworkPolicy#scope_qualifier}
  */
  readonly scopeQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#scopes DataDatabricksAccountNetworkPolicy#scopes}
  */
  readonly scopes?: string[];
}

export function dataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationWorkspaceApiToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationWorkspaceApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope_qualifier: cdktn.stringToTerraform(struct!.scopeQualifier),
    scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationWorkspaceApiToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationWorkspaceApi | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationWorkspaceApiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationWorkspaceApi | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationWorkspaceApi | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationWorkspaceUi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#all_destinations DataDatabricksAccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationWorkspaceUiToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationWorkspaceUi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationWorkspaceUiToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationWorkspaceUi | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationWorkspaceUiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationWorkspaceUi | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationWorkspaceUi | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestination {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#account_api DataDatabricksAccountNetworkPolicy#account_api}
  */
  readonly accountApi?: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountApi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#account_databricks_one DataDatabricksAccountNetworkPolicy#account_databricks_one}
  */
  readonly accountDatabricksOne?: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountDatabricksOne;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#account_ui DataDatabricksAccountNetworkPolicy#account_ui}
  */
  readonly accountUi?: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountUi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#all_destinations DataDatabricksAccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#apps_runtime DataDatabricksAccountNetworkPolicy#apps_runtime}
  */
  readonly appsRuntime?: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAppsRuntime;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#lakebase_runtime DataDatabricksAccountNetworkPolicy#lakebase_runtime}
  */
  readonly lakebaseRuntime?: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationLakebaseRuntime;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#workspace_api DataDatabricksAccountNetworkPolicy#workspace_api}
  */
  readonly workspaceApi?: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationWorkspaceApi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#workspace_ui DataDatabricksAccountNetworkPolicy#workspace_ui}
  */
  readonly workspaceUi?: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationWorkspaceUi;
}

export function dataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_api: dataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountApiToTerraform(struct!.accountApi),
    account_databricks_one: dataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountDatabricksOneToTerraform(struct!.accountDatabricksOne),
    account_ui: dataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountUiToTerraform(struct!.accountUi),
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
    apps_runtime: dataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAppsRuntimeToTerraform(struct!.appsRuntime),
    lakebase_runtime: dataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationLakebaseRuntimeToTerraform(struct!.lakebaseRuntime),
    workspace_api: dataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationWorkspaceApiToTerraform(struct!.workspaceApi),
    workspace_ui: dataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationWorkspaceUiToTerraform(struct!.workspaceUi),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_api: {
      value: dataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountApiToHclTerraform(struct!.accountApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountApi",
    },
    account_databricks_one: {
      value: dataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountDatabricksOneToHclTerraform(struct!.accountDatabricksOne),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountDatabricksOne",
    },
    account_ui: {
      value: dataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountUiToHclTerraform(struct!.accountUi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountUi",
    },
    all_destinations: {
      value: cdktn.booleanToHclTerraform(struct!.allDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    apps_runtime: {
      value: dataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAppsRuntimeToHclTerraform(struct!.appsRuntime),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAppsRuntime",
    },
    lakebase_runtime: {
      value: dataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationLakebaseRuntimeToHclTerraform(struct!.lakebaseRuntime),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationLakebaseRuntime",
    },
    workspace_api: {
      value: dataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationWorkspaceApiToHclTerraform(struct!.workspaceApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationWorkspaceApi",
    },
    workspace_ui: {
      value: dataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationWorkspaceUiToHclTerraform(struct!.workspaceUi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationWorkspaceUi",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestination | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestination | cdktn.IResolvable | undefined) {
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
  private _accountApi = new DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountApiOutputReference(this, "account_api");
  public get accountApi() {
    return this._accountApi;
  }
  public putAccountApi(value: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountApi) {
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
  private _accountDatabricksOne = new DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountDatabricksOneOutputReference(this, "account_databricks_one");
  public get accountDatabricksOne() {
    return this._accountDatabricksOne;
  }
  public putAccountDatabricksOne(value: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountDatabricksOne) {
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
  private _accountUi = new DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountUiOutputReference(this, "account_ui");
  public get accountUi() {
    return this._accountUi;
  }
  public putAccountUi(value: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountUi) {
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
  private _appsRuntime = new DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAppsRuntimeOutputReference(this, "apps_runtime");
  public get appsRuntime() {
    return this._appsRuntime;
  }
  public putAppsRuntime(value: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAppsRuntime) {
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
  private _lakebaseRuntime = new DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationLakebaseRuntimeOutputReference(this, "lakebase_runtime");
  public get lakebaseRuntime() {
    return this._lakebaseRuntime;
  }
  public putLakebaseRuntime(value: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationLakebaseRuntime) {
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
  private _workspaceApi = new DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationWorkspaceApiOutputReference(this, "workspace_api");
  public get workspaceApi() {
    return this._workspaceApi;
  }
  public putWorkspaceApi(value: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationWorkspaceApi) {
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
  private _workspaceUi = new DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationWorkspaceUiOutputReference(this, "workspace_ui");
  public get workspaceUi() {
    return this._workspaceUi;
  }
  public putWorkspaceUi(value: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationWorkspaceUi) {
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
export interface DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesOriginExcludedIpRanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#ip_ranges DataDatabricksAccountNetworkPolicy#ip_ranges}
  */
  readonly ipRanges?: string[];
}

export function dataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesOriginExcludedIpRangesToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesOriginExcludedIpRanges | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_ranges: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.ipRanges),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesOriginExcludedIpRangesToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesOriginExcludedIpRanges | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesOriginExcludedIpRangesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesOriginExcludedIpRanges | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesOriginExcludedIpRanges | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesOriginIncludedIpRanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#ip_ranges DataDatabricksAccountNetworkPolicy#ip_ranges}
  */
  readonly ipRanges?: string[];
}

export function dataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesOriginIncludedIpRangesToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesOriginIncludedIpRanges | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_ranges: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.ipRanges),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesOriginIncludedIpRangesToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesOriginIncludedIpRanges | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesOriginIncludedIpRangesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesOriginIncludedIpRanges | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesOriginIncludedIpRanges | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesOrigin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#all_ip_ranges DataDatabricksAccountNetworkPolicy#all_ip_ranges}
  */
  readonly allIpRanges?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#excluded_ip_ranges DataDatabricksAccountNetworkPolicy#excluded_ip_ranges}
  */
  readonly excludedIpRanges?: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesOriginExcludedIpRanges;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#included_ip_ranges DataDatabricksAccountNetworkPolicy#included_ip_ranges}
  */
  readonly includedIpRanges?: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesOriginIncludedIpRanges;
}

export function dataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesOriginToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesOrigin | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_ip_ranges: cdktn.booleanToTerraform(struct!.allIpRanges),
    excluded_ip_ranges: dataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesOriginExcludedIpRangesToTerraform(struct!.excludedIpRanges),
    included_ip_ranges: dataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesOriginIncludedIpRangesToTerraform(struct!.includedIpRanges),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesOriginToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesOrigin | cdktn.IResolvable): any {
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
      value: dataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesOriginExcludedIpRangesToHclTerraform(struct!.excludedIpRanges),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesOriginExcludedIpRanges",
    },
    included_ip_ranges: {
      value: dataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesOriginIncludedIpRangesToHclTerraform(struct!.includedIpRanges),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesOriginIncludedIpRanges",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesOriginOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesOrigin | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesOrigin | cdktn.IResolvable | undefined) {
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
  private _excludedIpRanges = new DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesOriginExcludedIpRangesOutputReference(this, "excluded_ip_ranges");
  public get excludedIpRanges() {
    return this._excludedIpRanges;
  }
  public putExcludedIpRanges(value: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesOriginExcludedIpRanges) {
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
  private _includedIpRanges = new DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesOriginIncludedIpRangesOutputReference(this, "included_ip_ranges");
  public get includedIpRanges() {
    return this._includedIpRanges;
  }
  public putIncludedIpRanges(value: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesOriginIncludedIpRanges) {
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
export interface DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#authentication DataDatabricksAccountNetworkPolicy#authentication}
  */
  readonly authentication?: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesAuthentication;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#destination DataDatabricksAccountNetworkPolicy#destination}
  */
  readonly destination?: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestination;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#label DataDatabricksAccountNetworkPolicy#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#origin DataDatabricksAccountNetworkPolicy#origin}
  */
  readonly origin?: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesOrigin;
}

export function dataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: dataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesAuthenticationToTerraform(struct!.authentication),
    destination: dataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationToTerraform(struct!.destination),
    label: cdktn.stringToTerraform(struct!.label),
    origin: dataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesOriginToTerraform(struct!.origin),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: dataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesAuthentication",
    },
    destination: {
      value: dataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestination",
    },
    label: {
      value: cdktn.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin: {
      value: dataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesOriginToHclTerraform(struct!.origin),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesOrigin",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRules | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRules | cdktn.IResolvable | undefined) {
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
  private _authentication = new DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesAuthentication) {
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
  private _destination = new DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestination) {
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
  private _origin = new DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesOriginOutputReference(this, "origin");
  public get origin() {
    return this._origin;
  }
  public putOrigin(value: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesOrigin) {
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

export class DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRules[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesOutputReference {
    return new DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesAuthenticationIdentities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#principal_id DataDatabricksAccountNetworkPolicy#principal_id}
  */
  readonly principalId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#principal_type DataDatabricksAccountNetworkPolicy#principal_type}
  */
  readonly principalType?: string;
}

export function dataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesAuthenticationIdentitiesToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesAuthenticationIdentities | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    principal_id: cdktn.numberToTerraform(struct!.principalId),
    principal_type: cdktn.stringToTerraform(struct!.principalType),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesAuthenticationIdentitiesToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesAuthenticationIdentities | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesAuthenticationIdentitiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesAuthenticationIdentities | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesAuthenticationIdentities | cdktn.IResolvable | undefined) {
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

export class DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesAuthenticationIdentitiesList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesAuthenticationIdentities[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesAuthenticationIdentitiesOutputReference {
    return new DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesAuthenticationIdentitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#identities DataDatabricksAccountNetworkPolicy#identities}
  */
  readonly identities?: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesAuthenticationIdentities[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#identity_type DataDatabricksAccountNetworkPolicy#identity_type}
  */
  readonly identityType?: string;
}

export function dataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesAuthenticationToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesAuthentication | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identities: cdktn.listMapper(dataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesAuthenticationIdentitiesToTerraform, false)(struct!.identities),
    identity_type: cdktn.stringToTerraform(struct!.identityType),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesAuthenticationToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesAuthentication | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identities: {
      value: cdktn.listMapperHcl(dataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesAuthenticationIdentitiesToHclTerraform, false)(struct!.identities),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesAuthenticationIdentitiesList",
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

export class DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesAuthentication | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesAuthentication | cdktn.IResolvable | undefined) {
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
  private _identities = new DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesAuthenticationIdentitiesList(this, "identities", false);
  public get identities() {
    return this._identities;
  }
  public putIdentities(value: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesAuthenticationIdentities[] | cdktn.IResolvable) {
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
export interface DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountApi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#scope_qualifier DataDatabricksAccountNetworkPolicy#scope_qualifier}
  */
  readonly scopeQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#scopes DataDatabricksAccountNetworkPolicy#scopes}
  */
  readonly scopes?: string[];
}

export function dataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountApiToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope_qualifier: cdktn.stringToTerraform(struct!.scopeQualifier),
    scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountApiToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountApi | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountApiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountApi | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountApi | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountDatabricksOne {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#all_destinations DataDatabricksAccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountDatabricksOneToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountDatabricksOne | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountDatabricksOneToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountDatabricksOne | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountDatabricksOneOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountDatabricksOne | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountDatabricksOne | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountUi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#all_destinations DataDatabricksAccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountUiToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountUi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountUiToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountUi | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountUiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountUi | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountUi | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAppsRuntime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#all_destinations DataDatabricksAccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAppsRuntimeToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAppsRuntime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAppsRuntimeToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAppsRuntime | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAppsRuntimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAppsRuntime | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAppsRuntime | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationLakebaseRuntime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#all_destinations DataDatabricksAccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationLakebaseRuntimeToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationLakebaseRuntime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationLakebaseRuntimeToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationLakebaseRuntime | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationLakebaseRuntimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationLakebaseRuntime | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationLakebaseRuntime | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationWorkspaceApi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#scope_qualifier DataDatabricksAccountNetworkPolicy#scope_qualifier}
  */
  readonly scopeQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#scopes DataDatabricksAccountNetworkPolicy#scopes}
  */
  readonly scopes?: string[];
}

export function dataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationWorkspaceApiToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationWorkspaceApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope_qualifier: cdktn.stringToTerraform(struct!.scopeQualifier),
    scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationWorkspaceApiToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationWorkspaceApi | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationWorkspaceApiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationWorkspaceApi | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationWorkspaceApi | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationWorkspaceUi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#all_destinations DataDatabricksAccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationWorkspaceUiToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationWorkspaceUi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationWorkspaceUiToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationWorkspaceUi | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationWorkspaceUiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationWorkspaceUi | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationWorkspaceUi | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestination {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#account_api DataDatabricksAccountNetworkPolicy#account_api}
  */
  readonly accountApi?: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountApi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#account_databricks_one DataDatabricksAccountNetworkPolicy#account_databricks_one}
  */
  readonly accountDatabricksOne?: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountDatabricksOne;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#account_ui DataDatabricksAccountNetworkPolicy#account_ui}
  */
  readonly accountUi?: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountUi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#all_destinations DataDatabricksAccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#apps_runtime DataDatabricksAccountNetworkPolicy#apps_runtime}
  */
  readonly appsRuntime?: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAppsRuntime;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#lakebase_runtime DataDatabricksAccountNetworkPolicy#lakebase_runtime}
  */
  readonly lakebaseRuntime?: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationLakebaseRuntime;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#workspace_api DataDatabricksAccountNetworkPolicy#workspace_api}
  */
  readonly workspaceApi?: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationWorkspaceApi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#workspace_ui DataDatabricksAccountNetworkPolicy#workspace_ui}
  */
  readonly workspaceUi?: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationWorkspaceUi;
}

export function dataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_api: dataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountApiToTerraform(struct!.accountApi),
    account_databricks_one: dataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountDatabricksOneToTerraform(struct!.accountDatabricksOne),
    account_ui: dataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountUiToTerraform(struct!.accountUi),
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
    apps_runtime: dataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAppsRuntimeToTerraform(struct!.appsRuntime),
    lakebase_runtime: dataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationLakebaseRuntimeToTerraform(struct!.lakebaseRuntime),
    workspace_api: dataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationWorkspaceApiToTerraform(struct!.workspaceApi),
    workspace_ui: dataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationWorkspaceUiToTerraform(struct!.workspaceUi),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_api: {
      value: dataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountApiToHclTerraform(struct!.accountApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountApi",
    },
    account_databricks_one: {
      value: dataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountDatabricksOneToHclTerraform(struct!.accountDatabricksOne),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountDatabricksOne",
    },
    account_ui: {
      value: dataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountUiToHclTerraform(struct!.accountUi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountUi",
    },
    all_destinations: {
      value: cdktn.booleanToHclTerraform(struct!.allDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    apps_runtime: {
      value: dataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAppsRuntimeToHclTerraform(struct!.appsRuntime),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAppsRuntime",
    },
    lakebase_runtime: {
      value: dataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationLakebaseRuntimeToHclTerraform(struct!.lakebaseRuntime),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationLakebaseRuntime",
    },
    workspace_api: {
      value: dataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationWorkspaceApiToHclTerraform(struct!.workspaceApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationWorkspaceApi",
    },
    workspace_ui: {
      value: dataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationWorkspaceUiToHclTerraform(struct!.workspaceUi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationWorkspaceUi",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestination | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestination | cdktn.IResolvable | undefined) {
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
  private _accountApi = new DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountApiOutputReference(this, "account_api");
  public get accountApi() {
    return this._accountApi;
  }
  public putAccountApi(value: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountApi) {
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
  private _accountDatabricksOne = new DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountDatabricksOneOutputReference(this, "account_databricks_one");
  public get accountDatabricksOne() {
    return this._accountDatabricksOne;
  }
  public putAccountDatabricksOne(value: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountDatabricksOne) {
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
  private _accountUi = new DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountUiOutputReference(this, "account_ui");
  public get accountUi() {
    return this._accountUi;
  }
  public putAccountUi(value: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountUi) {
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
  private _appsRuntime = new DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAppsRuntimeOutputReference(this, "apps_runtime");
  public get appsRuntime() {
    return this._appsRuntime;
  }
  public putAppsRuntime(value: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAppsRuntime) {
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
  private _lakebaseRuntime = new DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationLakebaseRuntimeOutputReference(this, "lakebase_runtime");
  public get lakebaseRuntime() {
    return this._lakebaseRuntime;
  }
  public putLakebaseRuntime(value: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationLakebaseRuntime) {
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
  private _workspaceApi = new DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationWorkspaceApiOutputReference(this, "workspace_api");
  public get workspaceApi() {
    return this._workspaceApi;
  }
  public putWorkspaceApi(value: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationWorkspaceApi) {
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
  private _workspaceUi = new DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationWorkspaceUiOutputReference(this, "workspace_ui");
  public get workspaceUi() {
    return this._workspaceUi;
  }
  public putWorkspaceUi(value: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationWorkspaceUi) {
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
export interface DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesOriginExcludedIpRanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#ip_ranges DataDatabricksAccountNetworkPolicy#ip_ranges}
  */
  readonly ipRanges?: string[];
}

export function dataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesOriginExcludedIpRangesToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesOriginExcludedIpRanges | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_ranges: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.ipRanges),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesOriginExcludedIpRangesToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesOriginExcludedIpRanges | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesOriginExcludedIpRangesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesOriginExcludedIpRanges | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesOriginExcludedIpRanges | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesOriginIncludedIpRanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#ip_ranges DataDatabricksAccountNetworkPolicy#ip_ranges}
  */
  readonly ipRanges?: string[];
}

export function dataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesOriginIncludedIpRangesToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesOriginIncludedIpRanges | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_ranges: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.ipRanges),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesOriginIncludedIpRangesToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesOriginIncludedIpRanges | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesOriginIncludedIpRangesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesOriginIncludedIpRanges | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesOriginIncludedIpRanges | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesOrigin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#all_ip_ranges DataDatabricksAccountNetworkPolicy#all_ip_ranges}
  */
  readonly allIpRanges?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#excluded_ip_ranges DataDatabricksAccountNetworkPolicy#excluded_ip_ranges}
  */
  readonly excludedIpRanges?: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesOriginExcludedIpRanges;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#included_ip_ranges DataDatabricksAccountNetworkPolicy#included_ip_ranges}
  */
  readonly includedIpRanges?: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesOriginIncludedIpRanges;
}

export function dataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesOriginToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesOrigin | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_ip_ranges: cdktn.booleanToTerraform(struct!.allIpRanges),
    excluded_ip_ranges: dataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesOriginExcludedIpRangesToTerraform(struct!.excludedIpRanges),
    included_ip_ranges: dataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesOriginIncludedIpRangesToTerraform(struct!.includedIpRanges),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesOriginToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesOrigin | cdktn.IResolvable): any {
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
      value: dataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesOriginExcludedIpRangesToHclTerraform(struct!.excludedIpRanges),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesOriginExcludedIpRanges",
    },
    included_ip_ranges: {
      value: dataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesOriginIncludedIpRangesToHclTerraform(struct!.includedIpRanges),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesOriginIncludedIpRanges",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesOriginOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesOrigin | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesOrigin | cdktn.IResolvable | undefined) {
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
  private _excludedIpRanges = new DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesOriginExcludedIpRangesOutputReference(this, "excluded_ip_ranges");
  public get excludedIpRanges() {
    return this._excludedIpRanges;
  }
  public putExcludedIpRanges(value: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesOriginExcludedIpRanges) {
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
  private _includedIpRanges = new DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesOriginIncludedIpRangesOutputReference(this, "included_ip_ranges");
  public get includedIpRanges() {
    return this._includedIpRanges;
  }
  public putIncludedIpRanges(value: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesOriginIncludedIpRanges) {
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
export interface DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#authentication DataDatabricksAccountNetworkPolicy#authentication}
  */
  readonly authentication?: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesAuthentication;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#destination DataDatabricksAccountNetworkPolicy#destination}
  */
  readonly destination?: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestination;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#label DataDatabricksAccountNetworkPolicy#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#origin DataDatabricksAccountNetworkPolicy#origin}
  */
  readonly origin?: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesOrigin;
}

export function dataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: dataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesAuthenticationToTerraform(struct!.authentication),
    destination: dataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationToTerraform(struct!.destination),
    label: cdktn.stringToTerraform(struct!.label),
    origin: dataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesOriginToTerraform(struct!.origin),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: dataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesAuthentication",
    },
    destination: {
      value: dataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestination",
    },
    label: {
      value: cdktn.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin: {
      value: dataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesOriginToHclTerraform(struct!.origin),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesOrigin",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRules | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRules | cdktn.IResolvable | undefined) {
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
  private _authentication = new DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesAuthentication) {
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
  private _destination = new DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestination) {
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
  private _origin = new DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesOriginOutputReference(this, "origin");
  public get origin() {
    return this._origin;
  }
  public putOrigin(value: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesOrigin) {
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

export class DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRules[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesOutputReference {
    return new DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksAccountNetworkPolicyIngressPublicAccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#allow_rules DataDatabricksAccountNetworkPolicy#allow_rules}
  */
  readonly allowRules?: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRules[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#deny_rules DataDatabricksAccountNetworkPolicy#deny_rules}
  */
  readonly denyRules?: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRules[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#restriction_mode DataDatabricksAccountNetworkPolicy#restriction_mode}
  */
  readonly restrictionMode: string;
}

export function dataDatabricksAccountNetworkPolicyIngressPublicAccessToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPublicAccess | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_rules: cdktn.listMapper(dataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesToTerraform, false)(struct!.allowRules),
    deny_rules: cdktn.listMapper(dataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesToTerraform, false)(struct!.denyRules),
    restriction_mode: cdktn.stringToTerraform(struct!.restrictionMode),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressPublicAccessToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPublicAccess | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_rules: {
      value: cdktn.listMapperHcl(dataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesToHclTerraform, false)(struct!.allowRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesList",
    },
    deny_rules: {
      value: cdktn.listMapperHcl(dataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesToHclTerraform, false)(struct!.denyRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesList",
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

export class DataDatabricksAccountNetworkPolicyIngressPublicAccessOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressPublicAccess | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressPublicAccess | cdktn.IResolvable | undefined) {
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
  private _allowRules = new DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesList(this, "allow_rules", false);
  public get allowRules() {
    return this._allowRules;
  }
  public putAllowRules(value: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRules[] | cdktn.IResolvable) {
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
  private _denyRules = new DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesList(this, "deny_rules", false);
  public get denyRules() {
    return this._denyRules;
  }
  public putDenyRules(value: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRules[] | cdktn.IResolvable) {
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
export interface DataDatabricksAccountNetworkPolicyIngress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#private_access DataDatabricksAccountNetworkPolicy#private_access}
  */
  readonly privateAccess?: DataDatabricksAccountNetworkPolicyIngressPrivateAccess;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#public_access DataDatabricksAccountNetworkPolicy#public_access}
  */
  readonly publicAccess?: DataDatabricksAccountNetworkPolicyIngressPublicAccess;
}

export function dataDatabricksAccountNetworkPolicyIngressToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    private_access: dataDatabricksAccountNetworkPolicyIngressPrivateAccessToTerraform(struct!.privateAccess),
    public_access: dataDatabricksAccountNetworkPolicyIngressPublicAccessToTerraform(struct!.publicAccess),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    private_access: {
      value: dataDatabricksAccountNetworkPolicyIngressPrivateAccessToHclTerraform(struct!.privateAccess),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressPrivateAccess",
    },
    public_access: {
      value: dataDatabricksAccountNetworkPolicyIngressPublicAccessToHclTerraform(struct!.publicAccess),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressPublicAccess",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPolicyIngressOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngress | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngress | undefined) {
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
  private _privateAccess = new DataDatabricksAccountNetworkPolicyIngressPrivateAccessOutputReference(this, "private_access");
  public get privateAccess() {
    return this._privateAccess;
  }
  public putPrivateAccess(value: DataDatabricksAccountNetworkPolicyIngressPrivateAccess) {
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
  private _publicAccess = new DataDatabricksAccountNetworkPolicyIngressPublicAccessOutputReference(this, "public_access");
  public get publicAccess() {
    return this._publicAccess;
  }
  public putPublicAccess(value: DataDatabricksAccountNetworkPolicyIngressPublicAccess) {
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
export interface DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesAuthenticationIdentities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#principal_id DataDatabricksAccountNetworkPolicy#principal_id}
  */
  readonly principalId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#principal_type DataDatabricksAccountNetworkPolicy#principal_type}
  */
  readonly principalType?: string;
}

export function dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesAuthenticationIdentitiesToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesAuthenticationIdentities | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    principal_id: cdktn.numberToTerraform(struct!.principalId),
    principal_type: cdktn.stringToTerraform(struct!.principalType),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesAuthenticationIdentitiesToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesAuthenticationIdentities | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesAuthenticationIdentitiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesAuthenticationIdentities | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesAuthenticationIdentities | cdktn.IResolvable | undefined) {
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

export class DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesAuthenticationIdentitiesList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesAuthenticationIdentities[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesAuthenticationIdentitiesOutputReference {
    return new DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesAuthenticationIdentitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#identities DataDatabricksAccountNetworkPolicy#identities}
  */
  readonly identities?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesAuthenticationIdentities[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#identity_type DataDatabricksAccountNetworkPolicy#identity_type}
  */
  readonly identityType?: string;
}

export function dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesAuthenticationToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesAuthentication | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identities: cdktn.listMapper(dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesAuthenticationIdentitiesToTerraform, false)(struct!.identities),
    identity_type: cdktn.stringToTerraform(struct!.identityType),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesAuthenticationToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesAuthentication | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identities: {
      value: cdktn.listMapperHcl(dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesAuthenticationIdentitiesToHclTerraform, false)(struct!.identities),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesAuthenticationIdentitiesList",
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

export class DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesAuthentication | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesAuthentication | cdktn.IResolvable | undefined) {
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
  private _identities = new DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesAuthenticationIdentitiesList(this, "identities", false);
  public get identities() {
    return this._identities;
  }
  public putIdentities(value: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesAuthenticationIdentities[] | cdktn.IResolvable) {
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
export interface DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountApi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#scope_qualifier DataDatabricksAccountNetworkPolicy#scope_qualifier}
  */
  readonly scopeQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#scopes DataDatabricksAccountNetworkPolicy#scopes}
  */
  readonly scopes?: string[];
}

export function dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountApiToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope_qualifier: cdktn.stringToTerraform(struct!.scopeQualifier),
    scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountApiToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountApi | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountApiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountApi | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountApi | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountDatabricksOne {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#all_destinations DataDatabricksAccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountDatabricksOneToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountDatabricksOne | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountDatabricksOneToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountDatabricksOne | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountDatabricksOneOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountDatabricksOne | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountDatabricksOne | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountUi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#all_destinations DataDatabricksAccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountUiToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountUi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountUiToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountUi | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountUiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountUi | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountUi | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAppsRuntime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#all_destinations DataDatabricksAccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAppsRuntimeToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAppsRuntime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAppsRuntimeToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAppsRuntime | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAppsRuntimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAppsRuntime | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAppsRuntime | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationLakebaseRuntime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#all_destinations DataDatabricksAccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationLakebaseRuntimeToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationLakebaseRuntime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationLakebaseRuntimeToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationLakebaseRuntime | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationLakebaseRuntimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationLakebaseRuntime | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationLakebaseRuntime | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceApi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#scope_qualifier DataDatabricksAccountNetworkPolicy#scope_qualifier}
  */
  readonly scopeQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#scopes DataDatabricksAccountNetworkPolicy#scopes}
  */
  readonly scopes?: string[];
}

export function dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceApiToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope_qualifier: cdktn.stringToTerraform(struct!.scopeQualifier),
    scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceApiToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceApi | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceApiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceApi | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceApi | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceUi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#all_destinations DataDatabricksAccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceUiToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceUi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceUiToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceUi | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceUiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceUi | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceUi | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestination {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#account_api DataDatabricksAccountNetworkPolicy#account_api}
  */
  readonly accountApi?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountApi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#account_databricks_one DataDatabricksAccountNetworkPolicy#account_databricks_one}
  */
  readonly accountDatabricksOne?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountDatabricksOne;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#account_ui DataDatabricksAccountNetworkPolicy#account_ui}
  */
  readonly accountUi?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountUi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#all_destinations DataDatabricksAccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#apps_runtime DataDatabricksAccountNetworkPolicy#apps_runtime}
  */
  readonly appsRuntime?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAppsRuntime;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#lakebase_runtime DataDatabricksAccountNetworkPolicy#lakebase_runtime}
  */
  readonly lakebaseRuntime?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationLakebaseRuntime;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#workspace_api DataDatabricksAccountNetworkPolicy#workspace_api}
  */
  readonly workspaceApi?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceApi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#workspace_ui DataDatabricksAccountNetworkPolicy#workspace_ui}
  */
  readonly workspaceUi?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceUi;
}

export function dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_api: dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountApiToTerraform(struct!.accountApi),
    account_databricks_one: dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountDatabricksOneToTerraform(struct!.accountDatabricksOne),
    account_ui: dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountUiToTerraform(struct!.accountUi),
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
    apps_runtime: dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAppsRuntimeToTerraform(struct!.appsRuntime),
    lakebase_runtime: dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationLakebaseRuntimeToTerraform(struct!.lakebaseRuntime),
    workspace_api: dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceApiToTerraform(struct!.workspaceApi),
    workspace_ui: dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceUiToTerraform(struct!.workspaceUi),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_api: {
      value: dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountApiToHclTerraform(struct!.accountApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountApi",
    },
    account_databricks_one: {
      value: dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountDatabricksOneToHclTerraform(struct!.accountDatabricksOne),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountDatabricksOne",
    },
    account_ui: {
      value: dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountUiToHclTerraform(struct!.accountUi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountUi",
    },
    all_destinations: {
      value: cdktn.booleanToHclTerraform(struct!.allDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    apps_runtime: {
      value: dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAppsRuntimeToHclTerraform(struct!.appsRuntime),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAppsRuntime",
    },
    lakebase_runtime: {
      value: dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationLakebaseRuntimeToHclTerraform(struct!.lakebaseRuntime),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationLakebaseRuntime",
    },
    workspace_api: {
      value: dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceApiToHclTerraform(struct!.workspaceApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceApi",
    },
    workspace_ui: {
      value: dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceUiToHclTerraform(struct!.workspaceUi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceUi",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestination | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestination | cdktn.IResolvable | undefined) {
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
  private _accountApi = new DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountApiOutputReference(this, "account_api");
  public get accountApi() {
    return this._accountApi;
  }
  public putAccountApi(value: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountApi) {
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
  private _accountDatabricksOne = new DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountDatabricksOneOutputReference(this, "account_databricks_one");
  public get accountDatabricksOne() {
    return this._accountDatabricksOne;
  }
  public putAccountDatabricksOne(value: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountDatabricksOne) {
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
  private _accountUi = new DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountUiOutputReference(this, "account_ui");
  public get accountUi() {
    return this._accountUi;
  }
  public putAccountUi(value: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountUi) {
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
  private _appsRuntime = new DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAppsRuntimeOutputReference(this, "apps_runtime");
  public get appsRuntime() {
    return this._appsRuntime;
  }
  public putAppsRuntime(value: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAppsRuntime) {
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
  private _lakebaseRuntime = new DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationLakebaseRuntimeOutputReference(this, "lakebase_runtime");
  public get lakebaseRuntime() {
    return this._lakebaseRuntime;
  }
  public putLakebaseRuntime(value: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationLakebaseRuntime) {
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
  private _workspaceApi = new DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceApiOutputReference(this, "workspace_api");
  public get workspaceApi() {
    return this._workspaceApi;
  }
  public putWorkspaceApi(value: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceApi) {
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
  private _workspaceUi = new DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceUiOutputReference(this, "workspace_ui");
  public get workspaceUi() {
    return this._workspaceUi;
  }
  public putWorkspaceUi(value: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceUi) {
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
export interface DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesOriginEndpoints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#endpoint_ids DataDatabricksAccountNetworkPolicy#endpoint_ids}
  */
  readonly endpointIds?: string[];
}

export function dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesOriginEndpointsToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesOriginEndpoints | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.endpointIds),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesOriginEndpointsToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesOriginEndpoints | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesOriginEndpointsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesOriginEndpoints | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesOriginEndpoints | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesOrigin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#all_private_access DataDatabricksAccountNetworkPolicy#all_private_access}
  */
  readonly allPrivateAccess?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#all_registered_endpoints DataDatabricksAccountNetworkPolicy#all_registered_endpoints}
  */
  readonly allRegisteredEndpoints?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#azure_workspace_private_link DataDatabricksAccountNetworkPolicy#azure_workspace_private_link}
  */
  readonly azureWorkspacePrivateLink?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#endpoints DataDatabricksAccountNetworkPolicy#endpoints}
  */
  readonly endpoints?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesOriginEndpoints;
}

export function dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesOriginToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesOrigin | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_private_access: cdktn.booleanToTerraform(struct!.allPrivateAccess),
    all_registered_endpoints: cdktn.booleanToTerraform(struct!.allRegisteredEndpoints),
    azure_workspace_private_link: cdktn.booleanToTerraform(struct!.azureWorkspacePrivateLink),
    endpoints: dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesOriginEndpointsToTerraform(struct!.endpoints),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesOriginToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesOrigin | cdktn.IResolvable): any {
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
      value: dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesOriginEndpointsToHclTerraform(struct!.endpoints),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesOriginEndpoints",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesOriginOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesOrigin | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesOrigin | cdktn.IResolvable | undefined) {
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
  private _endpoints = new DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesOriginEndpointsOutputReference(this, "endpoints");
  public get endpoints() {
    return this._endpoints;
  }
  public putEndpoints(value: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesOriginEndpoints) {
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
export interface DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#authentication DataDatabricksAccountNetworkPolicy#authentication}
  */
  readonly authentication?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesAuthentication;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#destination DataDatabricksAccountNetworkPolicy#destination}
  */
  readonly destination?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestination;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#label DataDatabricksAccountNetworkPolicy#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#origin DataDatabricksAccountNetworkPolicy#origin}
  */
  readonly origin?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesOrigin;
}

export function dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesAuthenticationToTerraform(struct!.authentication),
    destination: dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationToTerraform(struct!.destination),
    label: cdktn.stringToTerraform(struct!.label),
    origin: dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesOriginToTerraform(struct!.origin),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesAuthentication",
    },
    destination: {
      value: dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestination",
    },
    label: {
      value: cdktn.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin: {
      value: dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesOriginToHclTerraform(struct!.origin),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesOrigin",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRules | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRules | cdktn.IResolvable | undefined) {
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
  private _authentication = new DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesAuthentication) {
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
  private _destination = new DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestination) {
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
  private _origin = new DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesOriginOutputReference(this, "origin");
  public get origin() {
    return this._origin;
  }
  public putOrigin(value: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesOrigin) {
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

export class DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRules[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesOutputReference {
    return new DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesAuthenticationIdentities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#principal_id DataDatabricksAccountNetworkPolicy#principal_id}
  */
  readonly principalId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#principal_type DataDatabricksAccountNetworkPolicy#principal_type}
  */
  readonly principalType?: string;
}

export function dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesAuthenticationIdentitiesToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesAuthenticationIdentities | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    principal_id: cdktn.numberToTerraform(struct!.principalId),
    principal_type: cdktn.stringToTerraform(struct!.principalType),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesAuthenticationIdentitiesToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesAuthenticationIdentities | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesAuthenticationIdentitiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesAuthenticationIdentities | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesAuthenticationIdentities | cdktn.IResolvable | undefined) {
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

export class DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesAuthenticationIdentitiesList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesAuthenticationIdentities[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesAuthenticationIdentitiesOutputReference {
    return new DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesAuthenticationIdentitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#identities DataDatabricksAccountNetworkPolicy#identities}
  */
  readonly identities?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesAuthenticationIdentities[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#identity_type DataDatabricksAccountNetworkPolicy#identity_type}
  */
  readonly identityType?: string;
}

export function dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesAuthenticationToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesAuthentication | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identities: cdktn.listMapper(dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesAuthenticationIdentitiesToTerraform, false)(struct!.identities),
    identity_type: cdktn.stringToTerraform(struct!.identityType),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesAuthenticationToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesAuthentication | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identities: {
      value: cdktn.listMapperHcl(dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesAuthenticationIdentitiesToHclTerraform, false)(struct!.identities),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesAuthenticationIdentitiesList",
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

export class DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesAuthentication | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesAuthentication | cdktn.IResolvable | undefined) {
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
  private _identities = new DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesAuthenticationIdentitiesList(this, "identities", false);
  public get identities() {
    return this._identities;
  }
  public putIdentities(value: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesAuthenticationIdentities[] | cdktn.IResolvable) {
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
export interface DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountApi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#scope_qualifier DataDatabricksAccountNetworkPolicy#scope_qualifier}
  */
  readonly scopeQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#scopes DataDatabricksAccountNetworkPolicy#scopes}
  */
  readonly scopes?: string[];
}

export function dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountApiToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope_qualifier: cdktn.stringToTerraform(struct!.scopeQualifier),
    scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountApiToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountApi | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountApiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountApi | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountApi | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountDatabricksOne {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#all_destinations DataDatabricksAccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountDatabricksOneToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountDatabricksOne | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountDatabricksOneToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountDatabricksOne | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountDatabricksOneOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountDatabricksOne | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountDatabricksOne | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountUi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#all_destinations DataDatabricksAccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountUiToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountUi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountUiToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountUi | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountUiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountUi | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountUi | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAppsRuntime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#all_destinations DataDatabricksAccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAppsRuntimeToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAppsRuntime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAppsRuntimeToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAppsRuntime | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAppsRuntimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAppsRuntime | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAppsRuntime | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationLakebaseRuntime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#all_destinations DataDatabricksAccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationLakebaseRuntimeToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationLakebaseRuntime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationLakebaseRuntimeToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationLakebaseRuntime | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationLakebaseRuntimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationLakebaseRuntime | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationLakebaseRuntime | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceApi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#scope_qualifier DataDatabricksAccountNetworkPolicy#scope_qualifier}
  */
  readonly scopeQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#scopes DataDatabricksAccountNetworkPolicy#scopes}
  */
  readonly scopes?: string[];
}

export function dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceApiToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope_qualifier: cdktn.stringToTerraform(struct!.scopeQualifier),
    scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceApiToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceApi | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceApiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceApi | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceApi | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceUi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#all_destinations DataDatabricksAccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceUiToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceUi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceUiToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceUi | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceUiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceUi | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceUi | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestination {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#account_api DataDatabricksAccountNetworkPolicy#account_api}
  */
  readonly accountApi?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountApi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#account_databricks_one DataDatabricksAccountNetworkPolicy#account_databricks_one}
  */
  readonly accountDatabricksOne?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountDatabricksOne;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#account_ui DataDatabricksAccountNetworkPolicy#account_ui}
  */
  readonly accountUi?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountUi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#all_destinations DataDatabricksAccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#apps_runtime DataDatabricksAccountNetworkPolicy#apps_runtime}
  */
  readonly appsRuntime?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAppsRuntime;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#lakebase_runtime DataDatabricksAccountNetworkPolicy#lakebase_runtime}
  */
  readonly lakebaseRuntime?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationLakebaseRuntime;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#workspace_api DataDatabricksAccountNetworkPolicy#workspace_api}
  */
  readonly workspaceApi?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceApi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#workspace_ui DataDatabricksAccountNetworkPolicy#workspace_ui}
  */
  readonly workspaceUi?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceUi;
}

export function dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_api: dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountApiToTerraform(struct!.accountApi),
    account_databricks_one: dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountDatabricksOneToTerraform(struct!.accountDatabricksOne),
    account_ui: dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountUiToTerraform(struct!.accountUi),
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
    apps_runtime: dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAppsRuntimeToTerraform(struct!.appsRuntime),
    lakebase_runtime: dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationLakebaseRuntimeToTerraform(struct!.lakebaseRuntime),
    workspace_api: dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceApiToTerraform(struct!.workspaceApi),
    workspace_ui: dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceUiToTerraform(struct!.workspaceUi),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_api: {
      value: dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountApiToHclTerraform(struct!.accountApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountApi",
    },
    account_databricks_one: {
      value: dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountDatabricksOneToHclTerraform(struct!.accountDatabricksOne),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountDatabricksOne",
    },
    account_ui: {
      value: dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountUiToHclTerraform(struct!.accountUi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountUi",
    },
    all_destinations: {
      value: cdktn.booleanToHclTerraform(struct!.allDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    apps_runtime: {
      value: dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAppsRuntimeToHclTerraform(struct!.appsRuntime),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAppsRuntime",
    },
    lakebase_runtime: {
      value: dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationLakebaseRuntimeToHclTerraform(struct!.lakebaseRuntime),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationLakebaseRuntime",
    },
    workspace_api: {
      value: dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceApiToHclTerraform(struct!.workspaceApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceApi",
    },
    workspace_ui: {
      value: dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceUiToHclTerraform(struct!.workspaceUi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceUi",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestination | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestination | cdktn.IResolvable | undefined) {
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
  private _accountApi = new DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountApiOutputReference(this, "account_api");
  public get accountApi() {
    return this._accountApi;
  }
  public putAccountApi(value: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountApi) {
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
  private _accountDatabricksOne = new DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountDatabricksOneOutputReference(this, "account_databricks_one");
  public get accountDatabricksOne() {
    return this._accountDatabricksOne;
  }
  public putAccountDatabricksOne(value: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountDatabricksOne) {
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
  private _accountUi = new DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountUiOutputReference(this, "account_ui");
  public get accountUi() {
    return this._accountUi;
  }
  public putAccountUi(value: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountUi) {
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
  private _appsRuntime = new DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAppsRuntimeOutputReference(this, "apps_runtime");
  public get appsRuntime() {
    return this._appsRuntime;
  }
  public putAppsRuntime(value: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAppsRuntime) {
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
  private _lakebaseRuntime = new DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationLakebaseRuntimeOutputReference(this, "lakebase_runtime");
  public get lakebaseRuntime() {
    return this._lakebaseRuntime;
  }
  public putLakebaseRuntime(value: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationLakebaseRuntime) {
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
  private _workspaceApi = new DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceApiOutputReference(this, "workspace_api");
  public get workspaceApi() {
    return this._workspaceApi;
  }
  public putWorkspaceApi(value: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceApi) {
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
  private _workspaceUi = new DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceUiOutputReference(this, "workspace_ui");
  public get workspaceUi() {
    return this._workspaceUi;
  }
  public putWorkspaceUi(value: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceUi) {
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
export interface DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesOriginEndpoints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#endpoint_ids DataDatabricksAccountNetworkPolicy#endpoint_ids}
  */
  readonly endpointIds?: string[];
}

export function dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesOriginEndpointsToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesOriginEndpoints | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.endpointIds),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesOriginEndpointsToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesOriginEndpoints | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesOriginEndpointsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesOriginEndpoints | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesOriginEndpoints | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesOrigin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#all_private_access DataDatabricksAccountNetworkPolicy#all_private_access}
  */
  readonly allPrivateAccess?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#all_registered_endpoints DataDatabricksAccountNetworkPolicy#all_registered_endpoints}
  */
  readonly allRegisteredEndpoints?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#azure_workspace_private_link DataDatabricksAccountNetworkPolicy#azure_workspace_private_link}
  */
  readonly azureWorkspacePrivateLink?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#endpoints DataDatabricksAccountNetworkPolicy#endpoints}
  */
  readonly endpoints?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesOriginEndpoints;
}

export function dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesOriginToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesOrigin | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_private_access: cdktn.booleanToTerraform(struct!.allPrivateAccess),
    all_registered_endpoints: cdktn.booleanToTerraform(struct!.allRegisteredEndpoints),
    azure_workspace_private_link: cdktn.booleanToTerraform(struct!.azureWorkspacePrivateLink),
    endpoints: dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesOriginEndpointsToTerraform(struct!.endpoints),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesOriginToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesOrigin | cdktn.IResolvable): any {
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
      value: dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesOriginEndpointsToHclTerraform(struct!.endpoints),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesOriginEndpoints",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesOriginOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesOrigin | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesOrigin | cdktn.IResolvable | undefined) {
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
  private _endpoints = new DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesOriginEndpointsOutputReference(this, "endpoints");
  public get endpoints() {
    return this._endpoints;
  }
  public putEndpoints(value: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesOriginEndpoints) {
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
export interface DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#authentication DataDatabricksAccountNetworkPolicy#authentication}
  */
  readonly authentication?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesAuthentication;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#destination DataDatabricksAccountNetworkPolicy#destination}
  */
  readonly destination?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestination;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#label DataDatabricksAccountNetworkPolicy#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#origin DataDatabricksAccountNetworkPolicy#origin}
  */
  readonly origin?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesOrigin;
}

export function dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesAuthenticationToTerraform(struct!.authentication),
    destination: dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationToTerraform(struct!.destination),
    label: cdktn.stringToTerraform(struct!.label),
    origin: dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesOriginToTerraform(struct!.origin),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesAuthentication",
    },
    destination: {
      value: dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestination",
    },
    label: {
      value: cdktn.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin: {
      value: dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesOriginToHclTerraform(struct!.origin),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesOrigin",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRules | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRules | cdktn.IResolvable | undefined) {
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
  private _authentication = new DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesAuthentication) {
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
  private _destination = new DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestination) {
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
  private _origin = new DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesOriginOutputReference(this, "origin");
  public get origin() {
    return this._origin;
  }
  public putOrigin(value: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesOrigin) {
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

export class DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRules[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesOutputReference {
    return new DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#allow_rules DataDatabricksAccountNetworkPolicy#allow_rules}
  */
  readonly allowRules?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRules[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#deny_rules DataDatabricksAccountNetworkPolicy#deny_rules}
  */
  readonly denyRules?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRules[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#restriction_mode DataDatabricksAccountNetworkPolicy#restriction_mode}
  */
  readonly restrictionMode: string;
}

export function dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccess | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_rules: cdktn.listMapper(dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesToTerraform, false)(struct!.allowRules),
    deny_rules: cdktn.listMapper(dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesToTerraform, false)(struct!.denyRules),
    restriction_mode: cdktn.stringToTerraform(struct!.restrictionMode),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccess | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_rules: {
      value: cdktn.listMapperHcl(dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesToHclTerraform, false)(struct!.allowRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesList",
    },
    deny_rules: {
      value: cdktn.listMapperHcl(dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesToHclTerraform, false)(struct!.denyRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesList",
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

export class DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccess | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccess | cdktn.IResolvable | undefined) {
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
  private _allowRules = new DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesList(this, "allow_rules", false);
  public get allowRules() {
    return this._allowRules;
  }
  public putAllowRules(value: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessAllowRules[] | cdktn.IResolvable) {
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
  private _denyRules = new DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesList(this, "deny_rules", false);
  public get denyRules() {
    return this._denyRules;
  }
  public putDenyRules(value: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessDenyRules[] | cdktn.IResolvable) {
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
export interface DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesAuthenticationIdentities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#principal_id DataDatabricksAccountNetworkPolicy#principal_id}
  */
  readonly principalId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#principal_type DataDatabricksAccountNetworkPolicy#principal_type}
  */
  readonly principalType?: string;
}

export function dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesAuthenticationIdentitiesToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesAuthenticationIdentities | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    principal_id: cdktn.numberToTerraform(struct!.principalId),
    principal_type: cdktn.stringToTerraform(struct!.principalType),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesAuthenticationIdentitiesToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesAuthenticationIdentities | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesAuthenticationIdentitiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesAuthenticationIdentities | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesAuthenticationIdentities | cdktn.IResolvable | undefined) {
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

export class DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesAuthenticationIdentitiesList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesAuthenticationIdentities[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesAuthenticationIdentitiesOutputReference {
    return new DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesAuthenticationIdentitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#identities DataDatabricksAccountNetworkPolicy#identities}
  */
  readonly identities?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesAuthenticationIdentities[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#identity_type DataDatabricksAccountNetworkPolicy#identity_type}
  */
  readonly identityType?: string;
}

export function dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesAuthenticationToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesAuthentication | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identities: cdktn.listMapper(dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesAuthenticationIdentitiesToTerraform, false)(struct!.identities),
    identity_type: cdktn.stringToTerraform(struct!.identityType),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesAuthenticationToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesAuthentication | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identities: {
      value: cdktn.listMapperHcl(dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesAuthenticationIdentitiesToHclTerraform, false)(struct!.identities),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesAuthenticationIdentitiesList",
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

export class DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesAuthentication | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesAuthentication | cdktn.IResolvable | undefined) {
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
  private _identities = new DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesAuthenticationIdentitiesList(this, "identities", false);
  public get identities() {
    return this._identities;
  }
  public putIdentities(value: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesAuthenticationIdentities[] | cdktn.IResolvable) {
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
export interface DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountApi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#scope_qualifier DataDatabricksAccountNetworkPolicy#scope_qualifier}
  */
  readonly scopeQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#scopes DataDatabricksAccountNetworkPolicy#scopes}
  */
  readonly scopes?: string[];
}

export function dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountApiToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope_qualifier: cdktn.stringToTerraform(struct!.scopeQualifier),
    scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountApiToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountApi | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountApiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountApi | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountApi | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountDatabricksOne {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#all_destinations DataDatabricksAccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountDatabricksOneToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountDatabricksOne | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountDatabricksOneToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountDatabricksOne | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountDatabricksOneOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountDatabricksOne | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountDatabricksOne | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountUi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#all_destinations DataDatabricksAccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountUiToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountUi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountUiToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountUi | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountUiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountUi | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountUi | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAppsRuntime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#all_destinations DataDatabricksAccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAppsRuntimeToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAppsRuntime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAppsRuntimeToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAppsRuntime | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAppsRuntimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAppsRuntime | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAppsRuntime | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationLakebaseRuntime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#all_destinations DataDatabricksAccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationLakebaseRuntimeToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationLakebaseRuntime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationLakebaseRuntimeToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationLakebaseRuntime | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationLakebaseRuntimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationLakebaseRuntime | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationLakebaseRuntime | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationWorkspaceApi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#scope_qualifier DataDatabricksAccountNetworkPolicy#scope_qualifier}
  */
  readonly scopeQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#scopes DataDatabricksAccountNetworkPolicy#scopes}
  */
  readonly scopes?: string[];
}

export function dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationWorkspaceApiToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationWorkspaceApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope_qualifier: cdktn.stringToTerraform(struct!.scopeQualifier),
    scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationWorkspaceApiToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationWorkspaceApi | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationWorkspaceApiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationWorkspaceApi | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationWorkspaceApi | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationWorkspaceUi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#all_destinations DataDatabricksAccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationWorkspaceUiToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationWorkspaceUi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationWorkspaceUiToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationWorkspaceUi | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationWorkspaceUiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationWorkspaceUi | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationWorkspaceUi | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestination {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#account_api DataDatabricksAccountNetworkPolicy#account_api}
  */
  readonly accountApi?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountApi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#account_databricks_one DataDatabricksAccountNetworkPolicy#account_databricks_one}
  */
  readonly accountDatabricksOne?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountDatabricksOne;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#account_ui DataDatabricksAccountNetworkPolicy#account_ui}
  */
  readonly accountUi?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountUi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#all_destinations DataDatabricksAccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#apps_runtime DataDatabricksAccountNetworkPolicy#apps_runtime}
  */
  readonly appsRuntime?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAppsRuntime;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#lakebase_runtime DataDatabricksAccountNetworkPolicy#lakebase_runtime}
  */
  readonly lakebaseRuntime?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationLakebaseRuntime;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#workspace_api DataDatabricksAccountNetworkPolicy#workspace_api}
  */
  readonly workspaceApi?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationWorkspaceApi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#workspace_ui DataDatabricksAccountNetworkPolicy#workspace_ui}
  */
  readonly workspaceUi?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationWorkspaceUi;
}

export function dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_api: dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountApiToTerraform(struct!.accountApi),
    account_databricks_one: dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountDatabricksOneToTerraform(struct!.accountDatabricksOne),
    account_ui: dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountUiToTerraform(struct!.accountUi),
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
    apps_runtime: dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAppsRuntimeToTerraform(struct!.appsRuntime),
    lakebase_runtime: dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationLakebaseRuntimeToTerraform(struct!.lakebaseRuntime),
    workspace_api: dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationWorkspaceApiToTerraform(struct!.workspaceApi),
    workspace_ui: dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationWorkspaceUiToTerraform(struct!.workspaceUi),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_api: {
      value: dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountApiToHclTerraform(struct!.accountApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountApi",
    },
    account_databricks_one: {
      value: dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountDatabricksOneToHclTerraform(struct!.accountDatabricksOne),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountDatabricksOne",
    },
    account_ui: {
      value: dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountUiToHclTerraform(struct!.accountUi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountUi",
    },
    all_destinations: {
      value: cdktn.booleanToHclTerraform(struct!.allDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    apps_runtime: {
      value: dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAppsRuntimeToHclTerraform(struct!.appsRuntime),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAppsRuntime",
    },
    lakebase_runtime: {
      value: dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationLakebaseRuntimeToHclTerraform(struct!.lakebaseRuntime),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationLakebaseRuntime",
    },
    workspace_api: {
      value: dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationWorkspaceApiToHclTerraform(struct!.workspaceApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationWorkspaceApi",
    },
    workspace_ui: {
      value: dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationWorkspaceUiToHclTerraform(struct!.workspaceUi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationWorkspaceUi",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestination | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestination | cdktn.IResolvable | undefined) {
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
  private _accountApi = new DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountApiOutputReference(this, "account_api");
  public get accountApi() {
    return this._accountApi;
  }
  public putAccountApi(value: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountApi) {
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
  private _accountDatabricksOne = new DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountDatabricksOneOutputReference(this, "account_databricks_one");
  public get accountDatabricksOne() {
    return this._accountDatabricksOne;
  }
  public putAccountDatabricksOne(value: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountDatabricksOne) {
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
  private _accountUi = new DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountUiOutputReference(this, "account_ui");
  public get accountUi() {
    return this._accountUi;
  }
  public putAccountUi(value: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountUi) {
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
  private _appsRuntime = new DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAppsRuntimeOutputReference(this, "apps_runtime");
  public get appsRuntime() {
    return this._appsRuntime;
  }
  public putAppsRuntime(value: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAppsRuntime) {
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
  private _lakebaseRuntime = new DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationLakebaseRuntimeOutputReference(this, "lakebase_runtime");
  public get lakebaseRuntime() {
    return this._lakebaseRuntime;
  }
  public putLakebaseRuntime(value: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationLakebaseRuntime) {
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
  private _workspaceApi = new DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationWorkspaceApiOutputReference(this, "workspace_api");
  public get workspaceApi() {
    return this._workspaceApi;
  }
  public putWorkspaceApi(value: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationWorkspaceApi) {
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
  private _workspaceUi = new DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationWorkspaceUiOutputReference(this, "workspace_ui");
  public get workspaceUi() {
    return this._workspaceUi;
  }
  public putWorkspaceUi(value: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationWorkspaceUi) {
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
export interface DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOriginExcludedIpRanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#ip_ranges DataDatabricksAccountNetworkPolicy#ip_ranges}
  */
  readonly ipRanges?: string[];
}

export function dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOriginExcludedIpRangesToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOriginExcludedIpRanges | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_ranges: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.ipRanges),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOriginExcludedIpRangesToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOriginExcludedIpRanges | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOriginExcludedIpRangesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOriginExcludedIpRanges | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOriginExcludedIpRanges | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOriginIncludedIpRanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#ip_ranges DataDatabricksAccountNetworkPolicy#ip_ranges}
  */
  readonly ipRanges?: string[];
}

export function dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOriginIncludedIpRangesToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOriginIncludedIpRanges | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_ranges: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.ipRanges),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOriginIncludedIpRangesToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOriginIncludedIpRanges | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOriginIncludedIpRangesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOriginIncludedIpRanges | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOriginIncludedIpRanges | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOrigin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#all_ip_ranges DataDatabricksAccountNetworkPolicy#all_ip_ranges}
  */
  readonly allIpRanges?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#excluded_ip_ranges DataDatabricksAccountNetworkPolicy#excluded_ip_ranges}
  */
  readonly excludedIpRanges?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOriginExcludedIpRanges;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#included_ip_ranges DataDatabricksAccountNetworkPolicy#included_ip_ranges}
  */
  readonly includedIpRanges?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOriginIncludedIpRanges;
}

export function dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOriginToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOrigin | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_ip_ranges: cdktn.booleanToTerraform(struct!.allIpRanges),
    excluded_ip_ranges: dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOriginExcludedIpRangesToTerraform(struct!.excludedIpRanges),
    included_ip_ranges: dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOriginIncludedIpRangesToTerraform(struct!.includedIpRanges),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOriginToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOrigin | cdktn.IResolvable): any {
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
      value: dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOriginExcludedIpRangesToHclTerraform(struct!.excludedIpRanges),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOriginExcludedIpRanges",
    },
    included_ip_ranges: {
      value: dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOriginIncludedIpRangesToHclTerraform(struct!.includedIpRanges),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOriginIncludedIpRanges",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOriginOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOrigin | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOrigin | cdktn.IResolvable | undefined) {
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
  private _excludedIpRanges = new DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOriginExcludedIpRangesOutputReference(this, "excluded_ip_ranges");
  public get excludedIpRanges() {
    return this._excludedIpRanges;
  }
  public putExcludedIpRanges(value: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOriginExcludedIpRanges) {
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
  private _includedIpRanges = new DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOriginIncludedIpRangesOutputReference(this, "included_ip_ranges");
  public get includedIpRanges() {
    return this._includedIpRanges;
  }
  public putIncludedIpRanges(value: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOriginIncludedIpRanges) {
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
export interface DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#authentication DataDatabricksAccountNetworkPolicy#authentication}
  */
  readonly authentication?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesAuthentication;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#destination DataDatabricksAccountNetworkPolicy#destination}
  */
  readonly destination?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestination;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#label DataDatabricksAccountNetworkPolicy#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#origin DataDatabricksAccountNetworkPolicy#origin}
  */
  readonly origin?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOrigin;
}

export function dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesAuthenticationToTerraform(struct!.authentication),
    destination: dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationToTerraform(struct!.destination),
    label: cdktn.stringToTerraform(struct!.label),
    origin: dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOriginToTerraform(struct!.origin),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesAuthentication",
    },
    destination: {
      value: dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestination",
    },
    label: {
      value: cdktn.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin: {
      value: dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOriginToHclTerraform(struct!.origin),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOrigin",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRules | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRules | cdktn.IResolvable | undefined) {
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
  private _authentication = new DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesAuthentication) {
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
  private _destination = new DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestination) {
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
  private _origin = new DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOriginOutputReference(this, "origin");
  public get origin() {
    return this._origin;
  }
  public putOrigin(value: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOrigin) {
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

export class DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRules[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOutputReference {
    return new DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthenticationIdentities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#principal_id DataDatabricksAccountNetworkPolicy#principal_id}
  */
  readonly principalId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#principal_type DataDatabricksAccountNetworkPolicy#principal_type}
  */
  readonly principalType?: string;
}

export function dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthenticationIdentitiesToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthenticationIdentities | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    principal_id: cdktn.numberToTerraform(struct!.principalId),
    principal_type: cdktn.stringToTerraform(struct!.principalType),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthenticationIdentitiesToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthenticationIdentities | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthenticationIdentitiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthenticationIdentities | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthenticationIdentities | cdktn.IResolvable | undefined) {
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

export class DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthenticationIdentitiesList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthenticationIdentities[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthenticationIdentitiesOutputReference {
    return new DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthenticationIdentitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#identities DataDatabricksAccountNetworkPolicy#identities}
  */
  readonly identities?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthenticationIdentities[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#identity_type DataDatabricksAccountNetworkPolicy#identity_type}
  */
  readonly identityType?: string;
}

export function dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthenticationToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthentication | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identities: cdktn.listMapper(dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthenticationIdentitiesToTerraform, false)(struct!.identities),
    identity_type: cdktn.stringToTerraform(struct!.identityType),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthenticationToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthentication | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identities: {
      value: cdktn.listMapperHcl(dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthenticationIdentitiesToHclTerraform, false)(struct!.identities),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthenticationIdentitiesList",
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

export class DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthentication | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthentication | cdktn.IResolvable | undefined) {
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
  private _identities = new DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthenticationIdentitiesList(this, "identities", false);
  public get identities() {
    return this._identities;
  }
  public putIdentities(value: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthenticationIdentities[] | cdktn.IResolvable) {
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
export interface DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountApi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#scope_qualifier DataDatabricksAccountNetworkPolicy#scope_qualifier}
  */
  readonly scopeQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#scopes DataDatabricksAccountNetworkPolicy#scopes}
  */
  readonly scopes?: string[];
}

export function dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountApiToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope_qualifier: cdktn.stringToTerraform(struct!.scopeQualifier),
    scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountApiToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountApi | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountApiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountApi | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountApi | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountDatabricksOne {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#all_destinations DataDatabricksAccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountDatabricksOneToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountDatabricksOne | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountDatabricksOneToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountDatabricksOne | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountDatabricksOneOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountDatabricksOne | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountDatabricksOne | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountUi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#all_destinations DataDatabricksAccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountUiToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountUi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountUiToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountUi | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountUiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountUi | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountUi | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAppsRuntime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#all_destinations DataDatabricksAccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAppsRuntimeToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAppsRuntime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAppsRuntimeToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAppsRuntime | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAppsRuntimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAppsRuntime | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAppsRuntime | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationLakebaseRuntime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#all_destinations DataDatabricksAccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationLakebaseRuntimeToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationLakebaseRuntime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationLakebaseRuntimeToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationLakebaseRuntime | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationLakebaseRuntimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationLakebaseRuntime | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationLakebaseRuntime | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationWorkspaceApi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#scope_qualifier DataDatabricksAccountNetworkPolicy#scope_qualifier}
  */
  readonly scopeQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#scopes DataDatabricksAccountNetworkPolicy#scopes}
  */
  readonly scopes?: string[];
}

export function dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationWorkspaceApiToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationWorkspaceApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope_qualifier: cdktn.stringToTerraform(struct!.scopeQualifier),
    scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationWorkspaceApiToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationWorkspaceApi | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationWorkspaceApiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationWorkspaceApi | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationWorkspaceApi | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationWorkspaceUi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#all_destinations DataDatabricksAccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationWorkspaceUiToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationWorkspaceUi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationWorkspaceUiToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationWorkspaceUi | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationWorkspaceUiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationWorkspaceUi | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationWorkspaceUi | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestination {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#account_api DataDatabricksAccountNetworkPolicy#account_api}
  */
  readonly accountApi?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountApi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#account_databricks_one DataDatabricksAccountNetworkPolicy#account_databricks_one}
  */
  readonly accountDatabricksOne?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountDatabricksOne;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#account_ui DataDatabricksAccountNetworkPolicy#account_ui}
  */
  readonly accountUi?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountUi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#all_destinations DataDatabricksAccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#apps_runtime DataDatabricksAccountNetworkPolicy#apps_runtime}
  */
  readonly appsRuntime?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAppsRuntime;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#lakebase_runtime DataDatabricksAccountNetworkPolicy#lakebase_runtime}
  */
  readonly lakebaseRuntime?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationLakebaseRuntime;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#workspace_api DataDatabricksAccountNetworkPolicy#workspace_api}
  */
  readonly workspaceApi?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationWorkspaceApi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#workspace_ui DataDatabricksAccountNetworkPolicy#workspace_ui}
  */
  readonly workspaceUi?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationWorkspaceUi;
}

export function dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_api: dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountApiToTerraform(struct!.accountApi),
    account_databricks_one: dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountDatabricksOneToTerraform(struct!.accountDatabricksOne),
    account_ui: dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountUiToTerraform(struct!.accountUi),
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
    apps_runtime: dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAppsRuntimeToTerraform(struct!.appsRuntime),
    lakebase_runtime: dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationLakebaseRuntimeToTerraform(struct!.lakebaseRuntime),
    workspace_api: dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationWorkspaceApiToTerraform(struct!.workspaceApi),
    workspace_ui: dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationWorkspaceUiToTerraform(struct!.workspaceUi),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_api: {
      value: dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountApiToHclTerraform(struct!.accountApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountApi",
    },
    account_databricks_one: {
      value: dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountDatabricksOneToHclTerraform(struct!.accountDatabricksOne),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountDatabricksOne",
    },
    account_ui: {
      value: dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountUiToHclTerraform(struct!.accountUi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountUi",
    },
    all_destinations: {
      value: cdktn.booleanToHclTerraform(struct!.allDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    apps_runtime: {
      value: dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAppsRuntimeToHclTerraform(struct!.appsRuntime),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAppsRuntime",
    },
    lakebase_runtime: {
      value: dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationLakebaseRuntimeToHclTerraform(struct!.lakebaseRuntime),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationLakebaseRuntime",
    },
    workspace_api: {
      value: dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationWorkspaceApiToHclTerraform(struct!.workspaceApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationWorkspaceApi",
    },
    workspace_ui: {
      value: dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationWorkspaceUiToHclTerraform(struct!.workspaceUi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationWorkspaceUi",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestination | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestination | cdktn.IResolvable | undefined) {
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
  private _accountApi = new DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountApiOutputReference(this, "account_api");
  public get accountApi() {
    return this._accountApi;
  }
  public putAccountApi(value: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountApi) {
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
  private _accountDatabricksOne = new DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountDatabricksOneOutputReference(this, "account_databricks_one");
  public get accountDatabricksOne() {
    return this._accountDatabricksOne;
  }
  public putAccountDatabricksOne(value: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountDatabricksOne) {
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
  private _accountUi = new DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountUiOutputReference(this, "account_ui");
  public get accountUi() {
    return this._accountUi;
  }
  public putAccountUi(value: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountUi) {
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
  private _appsRuntime = new DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAppsRuntimeOutputReference(this, "apps_runtime");
  public get appsRuntime() {
    return this._appsRuntime;
  }
  public putAppsRuntime(value: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAppsRuntime) {
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
  private _lakebaseRuntime = new DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationLakebaseRuntimeOutputReference(this, "lakebase_runtime");
  public get lakebaseRuntime() {
    return this._lakebaseRuntime;
  }
  public putLakebaseRuntime(value: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationLakebaseRuntime) {
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
  private _workspaceApi = new DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationWorkspaceApiOutputReference(this, "workspace_api");
  public get workspaceApi() {
    return this._workspaceApi;
  }
  public putWorkspaceApi(value: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationWorkspaceApi) {
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
  private _workspaceUi = new DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationWorkspaceUiOutputReference(this, "workspace_ui");
  public get workspaceUi() {
    return this._workspaceUi;
  }
  public putWorkspaceUi(value: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationWorkspaceUi) {
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
export interface DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginExcludedIpRanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#ip_ranges DataDatabricksAccountNetworkPolicy#ip_ranges}
  */
  readonly ipRanges?: string[];
}

export function dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginExcludedIpRangesToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginExcludedIpRanges | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_ranges: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.ipRanges),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginExcludedIpRangesToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginExcludedIpRanges | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginExcludedIpRangesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginExcludedIpRanges | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginExcludedIpRanges | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginIncludedIpRanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#ip_ranges DataDatabricksAccountNetworkPolicy#ip_ranges}
  */
  readonly ipRanges?: string[];
}

export function dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginIncludedIpRangesToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginIncludedIpRanges | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_ranges: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.ipRanges),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginIncludedIpRangesToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginIncludedIpRanges | cdktn.IResolvable): any {
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

export class DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginIncludedIpRangesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginIncludedIpRanges | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginIncludedIpRanges | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOrigin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#all_ip_ranges DataDatabricksAccountNetworkPolicy#all_ip_ranges}
  */
  readonly allIpRanges?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#excluded_ip_ranges DataDatabricksAccountNetworkPolicy#excluded_ip_ranges}
  */
  readonly excludedIpRanges?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginExcludedIpRanges;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#included_ip_ranges DataDatabricksAccountNetworkPolicy#included_ip_ranges}
  */
  readonly includedIpRanges?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginIncludedIpRanges;
}

export function dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOrigin | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_ip_ranges: cdktn.booleanToTerraform(struct!.allIpRanges),
    excluded_ip_ranges: dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginExcludedIpRangesToTerraform(struct!.excludedIpRanges),
    included_ip_ranges: dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginIncludedIpRangesToTerraform(struct!.includedIpRanges),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOrigin | cdktn.IResolvable): any {
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
      value: dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginExcludedIpRangesToHclTerraform(struct!.excludedIpRanges),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginExcludedIpRanges",
    },
    included_ip_ranges: {
      value: dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginIncludedIpRangesToHclTerraform(struct!.includedIpRanges),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginIncludedIpRanges",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOrigin | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOrigin | cdktn.IResolvable | undefined) {
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
  private _excludedIpRanges = new DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginExcludedIpRangesOutputReference(this, "excluded_ip_ranges");
  public get excludedIpRanges() {
    return this._excludedIpRanges;
  }
  public putExcludedIpRanges(value: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginExcludedIpRanges) {
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
  private _includedIpRanges = new DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginIncludedIpRangesOutputReference(this, "included_ip_ranges");
  public get includedIpRanges() {
    return this._includedIpRanges;
  }
  public putIncludedIpRanges(value: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginIncludedIpRanges) {
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
export interface DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#authentication DataDatabricksAccountNetworkPolicy#authentication}
  */
  readonly authentication?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthentication;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#destination DataDatabricksAccountNetworkPolicy#destination}
  */
  readonly destination?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestination;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#label DataDatabricksAccountNetworkPolicy#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#origin DataDatabricksAccountNetworkPolicy#origin}
  */
  readonly origin?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOrigin;
}

export function dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthenticationToTerraform(struct!.authentication),
    destination: dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationToTerraform(struct!.destination),
    label: cdktn.stringToTerraform(struct!.label),
    origin: dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginToTerraform(struct!.origin),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthentication",
    },
    destination: {
      value: dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestination",
    },
    label: {
      value: cdktn.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin: {
      value: dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginToHclTerraform(struct!.origin),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOrigin",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRules | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRules | cdktn.IResolvable | undefined) {
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
  private _authentication = new DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthentication) {
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
  private _destination = new DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestination) {
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
  private _origin = new DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginOutputReference(this, "origin");
  public get origin() {
    return this._origin;
  }
  public putOrigin(value: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOrigin) {
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

export class DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRules[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOutputReference {
    return new DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#allow_rules DataDatabricksAccountNetworkPolicy#allow_rules}
  */
  readonly allowRules?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRules[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#deny_rules DataDatabricksAccountNetworkPolicy#deny_rules}
  */
  readonly denyRules?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRules[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#restriction_mode DataDatabricksAccountNetworkPolicy#restriction_mode}
  */
  readonly restrictionMode: string;
}

export function dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccess | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_rules: cdktn.listMapper(dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesToTerraform, false)(struct!.allowRules),
    deny_rules: cdktn.listMapper(dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesToTerraform, false)(struct!.denyRules),
    restriction_mode: cdktn.stringToTerraform(struct!.restrictionMode),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccess | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_rules: {
      value: cdktn.listMapperHcl(dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesToHclTerraform, false)(struct!.allowRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesList",
    },
    deny_rules: {
      value: cdktn.listMapperHcl(dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesToHclTerraform, false)(struct!.denyRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesList",
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

export class DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccess | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccess | cdktn.IResolvable | undefined) {
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
  private _allowRules = new DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesList(this, "allow_rules", false);
  public get allowRules() {
    return this._allowRules;
  }
  public putAllowRules(value: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRules[] | cdktn.IResolvable) {
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
  private _denyRules = new DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesList(this, "deny_rules", false);
  public get denyRules() {
    return this._denyRules;
  }
  public putDenyRules(value: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRules[] | cdktn.IResolvable) {
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
export interface DataDatabricksAccountNetworkPolicyIngressDryRun {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#private_access DataDatabricksAccountNetworkPolicy#private_access}
  */
  readonly privateAccess?: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccess;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#public_access DataDatabricksAccountNetworkPolicy#public_access}
  */
  readonly publicAccess?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccess;
}

export function dataDatabricksAccountNetworkPolicyIngressDryRunToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRun): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    private_access: dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessToTerraform(struct!.privateAccess),
    public_access: dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessToTerraform(struct!.publicAccess),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressDryRunToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRun): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    private_access: {
      value: dataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessToHclTerraform(struct!.privateAccess),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccess",
    },
    public_access: {
      value: dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessToHclTerraform(struct!.publicAccess),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccess",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPolicyIngressDryRunOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPolicyIngressDryRun | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressDryRun | undefined) {
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
  private _privateAccess = new DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccessOutputReference(this, "private_access");
  public get privateAccess() {
    return this._privateAccess;
  }
  public putPrivateAccess(value: DataDatabricksAccountNetworkPolicyIngressDryRunPrivateAccess) {
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
  private _publicAccess = new DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessOutputReference(this, "public_access");
  public get publicAccess() {
    return this._publicAccess;
  }
  public putPublicAccess(value: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccess) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy databricks_account_network_policy}
*/
export class DataDatabricksAccountNetworkPolicy extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_account_network_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataDatabricksAccountNetworkPolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksAccountNetworkPolicy to import
  * @param importFromId The id of the existing DataDatabricksAccountNetworkPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksAccountNetworkPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_account_network_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/account_network_policy databricks_account_network_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksAccountNetworkPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksAccountNetworkPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_account_network_policy',
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
    this._networkPolicyId = config.networkPolicyId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // egress - computed: true, optional: false, required: false
  private _egress = new DataDatabricksAccountNetworkPolicyEgressOutputReference(this, "egress");
  public get egress() {
    return this._egress;
  }

  // ingress - computed: true, optional: false, required: false
  private _ingress = new DataDatabricksAccountNetworkPolicyIngressOutputReference(this, "ingress");
  public get ingress() {
    return this._ingress;
  }

  // ingress_dry_run - computed: true, optional: false, required: false
  private _ingressDryRun = new DataDatabricksAccountNetworkPolicyIngressDryRunOutputReference(this, "ingress_dry_run");
  public get ingressDryRun() {
    return this._ingressDryRun;
  }

  // network_policy_id - computed: false, optional: false, required: true
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      network_policy_id: cdktn.stringToTerraform(this._networkPolicyId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      network_policy_id: {
        value: cdktn.stringToHclTerraform(this._networkPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
