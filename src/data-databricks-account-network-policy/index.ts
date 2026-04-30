/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataDatabricksAccountNetworkPolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#network_policy_id DataDatabricksAccountNetworkPolicy#network_policy_id}
  */
  readonly networkPolicyId: string;
}
export interface DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#destination DataDatabricksAccountNetworkPolicy#destination}
  */
  readonly destination?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#internet_destination_type DataDatabricksAccountNetworkPolicy#internet_destination_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#azure_storage_account DataDatabricksAccountNetworkPolicy#azure_storage_account}
  */
  readonly azureStorageAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#azure_storage_service DataDatabricksAccountNetworkPolicy#azure_storage_service}
  */
  readonly azureStorageService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#bucket_name DataDatabricksAccountNetworkPolicy#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#region DataDatabricksAccountNetworkPolicy#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#storage_destination_type DataDatabricksAccountNetworkPolicy#storage_destination_type}
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
export interface DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#dry_run_mode_product_filter DataDatabricksAccountNetworkPolicy#dry_run_mode_product_filter}
  */
  readonly dryRunModeProductFilter?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#enforcement_mode DataDatabricksAccountNetworkPolicy#enforcement_mode}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#allowed_internet_destinations DataDatabricksAccountNetworkPolicy#allowed_internet_destinations}
  */
  readonly allowedInternetDestinations?: DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#allowed_storage_destinations DataDatabricksAccountNetworkPolicy#allowed_storage_destinations}
  */
  readonly allowedStorageDestinations?: DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#policy_enforcement DataDatabricksAccountNetworkPolicy#policy_enforcement}
  */
  readonly policyEnforcement?: DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcement;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#restriction_mode DataDatabricksAccountNetworkPolicy#restriction_mode}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#network_access DataDatabricksAccountNetworkPolicy#network_access}
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
export interface DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesAuthenticationIdentities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#principal_id DataDatabricksAccountNetworkPolicy#principal_id}
  */
  readonly principalId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#principal_type DataDatabricksAccountNetworkPolicy#principal_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#identities DataDatabricksAccountNetworkPolicy#identities}
  */
  readonly identities?: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesAuthenticationIdentities[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#identity_type DataDatabricksAccountNetworkPolicy#identity_type}
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
export interface DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationWorkspaceApi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#scopes DataDatabricksAccountNetworkPolicy#scopes}
  */
  readonly scopes?: string[];
}

export function dataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationWorkspaceApiToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationWorkspaceApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationWorkspaceApiToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationWorkspaceApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
      this._scopes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scopes = value.scopes;
    }
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#all_destinations DataDatabricksAccountNetworkPolicy#all_destinations}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#all_destinations DataDatabricksAccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#workspace_api DataDatabricksAccountNetworkPolicy#workspace_api}
  */
  readonly workspaceApi?: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationWorkspaceApi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#workspace_ui DataDatabricksAccountNetworkPolicy#workspace_ui}
  */
  readonly workspaceUi?: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationWorkspaceUi;
}

export function dataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestinationToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
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
    all_destinations: {
      value: cdktn.booleanToHclTerraform(struct!.allDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
    if (this._allDestinations !== undefined) {
      hasAnyValues = true;
      internalValueResult.allDestinations = this._allDestinations;
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
      this._allDestinations = undefined;
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
      this._allDestinations = value.allDestinations;
      this._workspaceApi.internalValue = value.workspaceApi;
      this._workspaceUi.internalValue = value.workspaceUi;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#ip_ranges DataDatabricksAccountNetworkPolicy#ip_ranges}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#ip_ranges DataDatabricksAccountNetworkPolicy#ip_ranges}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#all_ip_ranges DataDatabricksAccountNetworkPolicy#all_ip_ranges}
  */
  readonly allIpRanges?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#excluded_ip_ranges DataDatabricksAccountNetworkPolicy#excluded_ip_ranges}
  */
  readonly excludedIpRanges?: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesOriginExcludedIpRanges;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#included_ip_ranges DataDatabricksAccountNetworkPolicy#included_ip_ranges}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#authentication DataDatabricksAccountNetworkPolicy#authentication}
  */
  readonly authentication?: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesAuthentication;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#destination DataDatabricksAccountNetworkPolicy#destination}
  */
  readonly destination?: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRulesDestination;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#label DataDatabricksAccountNetworkPolicy#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#origin DataDatabricksAccountNetworkPolicy#origin}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#principal_id DataDatabricksAccountNetworkPolicy#principal_id}
  */
  readonly principalId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#principal_type DataDatabricksAccountNetworkPolicy#principal_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#identities DataDatabricksAccountNetworkPolicy#identities}
  */
  readonly identities?: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesAuthenticationIdentities[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#identity_type DataDatabricksAccountNetworkPolicy#identity_type}
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
export interface DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationWorkspaceApi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#scopes DataDatabricksAccountNetworkPolicy#scopes}
  */
  readonly scopes?: string[];
}

export function dataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationWorkspaceApiToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationWorkspaceApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationWorkspaceApiToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationWorkspaceApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
      this._scopes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scopes = value.scopes;
    }
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#all_destinations DataDatabricksAccountNetworkPolicy#all_destinations}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#all_destinations DataDatabricksAccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#workspace_api DataDatabricksAccountNetworkPolicy#workspace_api}
  */
  readonly workspaceApi?: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationWorkspaceApi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#workspace_ui DataDatabricksAccountNetworkPolicy#workspace_ui}
  */
  readonly workspaceUi?: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationWorkspaceUi;
}

export function dataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestinationToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
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
    all_destinations: {
      value: cdktn.booleanToHclTerraform(struct!.allDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
    if (this._allDestinations !== undefined) {
      hasAnyValues = true;
      internalValueResult.allDestinations = this._allDestinations;
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
      this._allDestinations = undefined;
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
      this._allDestinations = value.allDestinations;
      this._workspaceApi.internalValue = value.workspaceApi;
      this._workspaceUi.internalValue = value.workspaceUi;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#ip_ranges DataDatabricksAccountNetworkPolicy#ip_ranges}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#ip_ranges DataDatabricksAccountNetworkPolicy#ip_ranges}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#all_ip_ranges DataDatabricksAccountNetworkPolicy#all_ip_ranges}
  */
  readonly allIpRanges?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#excluded_ip_ranges DataDatabricksAccountNetworkPolicy#excluded_ip_ranges}
  */
  readonly excludedIpRanges?: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesOriginExcludedIpRanges;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#included_ip_ranges DataDatabricksAccountNetworkPolicy#included_ip_ranges}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#authentication DataDatabricksAccountNetworkPolicy#authentication}
  */
  readonly authentication?: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesAuthentication;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#destination DataDatabricksAccountNetworkPolicy#destination}
  */
  readonly destination?: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRulesDestination;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#label DataDatabricksAccountNetworkPolicy#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#origin DataDatabricksAccountNetworkPolicy#origin}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#allow_rules DataDatabricksAccountNetworkPolicy#allow_rules}
  */
  readonly allowRules?: DataDatabricksAccountNetworkPolicyIngressPublicAccessAllowRules[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#deny_rules DataDatabricksAccountNetworkPolicy#deny_rules}
  */
  readonly denyRules?: DataDatabricksAccountNetworkPolicyIngressPublicAccessDenyRules[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#restriction_mode DataDatabricksAccountNetworkPolicy#restriction_mode}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#public_access DataDatabricksAccountNetworkPolicy#public_access}
  */
  readonly publicAccess?: DataDatabricksAccountNetworkPolicyIngressPublicAccess;
}

export function dataDatabricksAccountNetworkPolicyIngressToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    public_access: dataDatabricksAccountNetworkPolicyIngressPublicAccessToTerraform(struct!.publicAccess),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    if (this._publicAccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicAccess = this._publicAccess?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._publicAccess.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._publicAccess.internalValue = value.publicAccess;
    }
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
export interface DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesAuthenticationIdentities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#principal_id DataDatabricksAccountNetworkPolicy#principal_id}
  */
  readonly principalId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#principal_type DataDatabricksAccountNetworkPolicy#principal_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#identities DataDatabricksAccountNetworkPolicy#identities}
  */
  readonly identities?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesAuthenticationIdentities[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#identity_type DataDatabricksAccountNetworkPolicy#identity_type}
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
export interface DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationWorkspaceApi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#scopes DataDatabricksAccountNetworkPolicy#scopes}
  */
  readonly scopes?: string[];
}

export function dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationWorkspaceApiToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationWorkspaceApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationWorkspaceApiToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationWorkspaceApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
      this._scopes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scopes = value.scopes;
    }
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#all_destinations DataDatabricksAccountNetworkPolicy#all_destinations}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#all_destinations DataDatabricksAccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#workspace_api DataDatabricksAccountNetworkPolicy#workspace_api}
  */
  readonly workspaceApi?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationWorkspaceApi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#workspace_ui DataDatabricksAccountNetworkPolicy#workspace_ui}
  */
  readonly workspaceUi?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationWorkspaceUi;
}

export function dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
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
    all_destinations: {
      value: cdktn.booleanToHclTerraform(struct!.allDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
    if (this._allDestinations !== undefined) {
      hasAnyValues = true;
      internalValueResult.allDestinations = this._allDestinations;
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
      this._allDestinations = undefined;
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
      this._allDestinations = value.allDestinations;
      this._workspaceApi.internalValue = value.workspaceApi;
      this._workspaceUi.internalValue = value.workspaceUi;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#ip_ranges DataDatabricksAccountNetworkPolicy#ip_ranges}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#ip_ranges DataDatabricksAccountNetworkPolicy#ip_ranges}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#all_ip_ranges DataDatabricksAccountNetworkPolicy#all_ip_ranges}
  */
  readonly allIpRanges?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#excluded_ip_ranges DataDatabricksAccountNetworkPolicy#excluded_ip_ranges}
  */
  readonly excludedIpRanges?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOriginExcludedIpRanges;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#included_ip_ranges DataDatabricksAccountNetworkPolicy#included_ip_ranges}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#authentication DataDatabricksAccountNetworkPolicy#authentication}
  */
  readonly authentication?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesAuthentication;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#destination DataDatabricksAccountNetworkPolicy#destination}
  */
  readonly destination?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestination;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#label DataDatabricksAccountNetworkPolicy#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#origin DataDatabricksAccountNetworkPolicy#origin}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#principal_id DataDatabricksAccountNetworkPolicy#principal_id}
  */
  readonly principalId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#principal_type DataDatabricksAccountNetworkPolicy#principal_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#identities DataDatabricksAccountNetworkPolicy#identities}
  */
  readonly identities?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthenticationIdentities[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#identity_type DataDatabricksAccountNetworkPolicy#identity_type}
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
export interface DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationWorkspaceApi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#scopes DataDatabricksAccountNetworkPolicy#scopes}
  */
  readonly scopes?: string[];
}

export function dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationWorkspaceApiToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationWorkspaceApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationWorkspaceApiToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationWorkspaceApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
      this._scopes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scopes = value.scopes;
    }
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#all_destinations DataDatabricksAccountNetworkPolicy#all_destinations}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#all_destinations DataDatabricksAccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#workspace_api DataDatabricksAccountNetworkPolicy#workspace_api}
  */
  readonly workspaceApi?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationWorkspaceApi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#workspace_ui DataDatabricksAccountNetworkPolicy#workspace_ui}
  */
  readonly workspaceUi?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationWorkspaceUi;
}

export function dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
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
    all_destinations: {
      value: cdktn.booleanToHclTerraform(struct!.allDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
    if (this._allDestinations !== undefined) {
      hasAnyValues = true;
      internalValueResult.allDestinations = this._allDestinations;
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
      this._allDestinations = undefined;
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
      this._allDestinations = value.allDestinations;
      this._workspaceApi.internalValue = value.workspaceApi;
      this._workspaceUi.internalValue = value.workspaceUi;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#ip_ranges DataDatabricksAccountNetworkPolicy#ip_ranges}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#ip_ranges DataDatabricksAccountNetworkPolicy#ip_ranges}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#all_ip_ranges DataDatabricksAccountNetworkPolicy#all_ip_ranges}
  */
  readonly allIpRanges?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#excluded_ip_ranges DataDatabricksAccountNetworkPolicy#excluded_ip_ranges}
  */
  readonly excludedIpRanges?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginExcludedIpRanges;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#included_ip_ranges DataDatabricksAccountNetworkPolicy#included_ip_ranges}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#authentication DataDatabricksAccountNetworkPolicy#authentication}
  */
  readonly authentication?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthentication;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#destination DataDatabricksAccountNetworkPolicy#destination}
  */
  readonly destination?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestination;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#label DataDatabricksAccountNetworkPolicy#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#origin DataDatabricksAccountNetworkPolicy#origin}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#allow_rules DataDatabricksAccountNetworkPolicy#allow_rules}
  */
  readonly allowRules?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessAllowRules[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#deny_rules DataDatabricksAccountNetworkPolicy#deny_rules}
  */
  readonly denyRules?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessDenyRules[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#restriction_mode DataDatabricksAccountNetworkPolicy#restriction_mode}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#public_access DataDatabricksAccountNetworkPolicy#public_access}
  */
  readonly publicAccess?: DataDatabricksAccountNetworkPolicyIngressDryRunPublicAccess;
}

export function dataDatabricksAccountNetworkPolicyIngressDryRunToTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRun): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    public_access: dataDatabricksAccountNetworkPolicyIngressDryRunPublicAccessToTerraform(struct!.publicAccess),
  }
}


export function dataDatabricksAccountNetworkPolicyIngressDryRunToHclTerraform(struct?: DataDatabricksAccountNetworkPolicyIngressDryRun): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    if (this._publicAccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicAccess = this._publicAccess?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPolicyIngressDryRun | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._publicAccess.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._publicAccess.internalValue = value.publicAccess;
    }
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
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy databricks_account_network_policy}
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
  * @param importFromId The id of the existing DataDatabricksAccountNetworkPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksAccountNetworkPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_account_network_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_network_policy databricks_account_network_policy} Data Source
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
        providerVersion: '1.114.1',
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
