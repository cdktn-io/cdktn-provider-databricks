/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface AccountNetworkPolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#account_id AccountNetworkPolicy#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#egress AccountNetworkPolicy#egress}
  */
  readonly egress?: AccountNetworkPolicyEgress;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#ingress AccountNetworkPolicy#ingress}
  */
  readonly ingress?: AccountNetworkPolicyIngress;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#ingress_dry_run AccountNetworkPolicy#ingress_dry_run}
  */
  readonly ingressDryRun?: AccountNetworkPolicyIngressDryRun;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#network_policy_id AccountNetworkPolicy#network_policy_id}
  */
  readonly networkPolicyId?: string;
}
export interface AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#destination AccountNetworkPolicy#destination}
  */
  readonly destination?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#internet_destination_type AccountNetworkPolicy#internet_destination_type}
  */
  readonly internetDestinationType?: string;
}

export function accountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsToTerraform(struct?: AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktn.stringToTerraform(struct!.destination),
    internet_destination_type: cdktn.stringToTerraform(struct!.internetDestinationType),
  }
}


export function accountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsToHclTerraform(struct?: AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations | cdktn.IResolvable | undefined) {
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

  // destination - computed: false, optional: true, required: false
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

  // internet_destination_type - computed: false, optional: true, required: false
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

export class AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList extends cdktn.ComplexList {
  public internalValue? : AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations[] | cdktn.IResolvable

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
  public get(index: number): AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference {
    return new AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#azure_storage_account AccountNetworkPolicy#azure_storage_account}
  */
  readonly azureStorageAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#azure_storage_service AccountNetworkPolicy#azure_storage_service}
  */
  readonly azureStorageService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#bucket_name AccountNetworkPolicy#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#region AccountNetworkPolicy#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#storage_destination_type AccountNetworkPolicy#storage_destination_type}
  */
  readonly storageDestinationType?: string;
}

export function accountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsToTerraform(struct?: AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations | cdktn.IResolvable): any {
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


export function accountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsToHclTerraform(struct?: AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations | cdktn.IResolvable | undefined) {
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

  // azure_storage_account - computed: false, optional: true, required: false
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

  // azure_storage_service - computed: false, optional: true, required: false
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

  // bucket_name - computed: false, optional: true, required: false
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

  // storage_destination_type - computed: false, optional: true, required: false
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

export class AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList extends cdktn.ComplexList {
  public internalValue? : AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations[] | cdktn.IResolvable

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
  public get(index: number): AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference {
    return new AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccountNetworkPolicyEgressNetworkAccessBlockedInternetDestinations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#destination AccountNetworkPolicy#destination}
  */
  readonly destination?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#internet_destination_type AccountNetworkPolicy#internet_destination_type}
  */
  readonly internetDestinationType?: string;
}

export function accountNetworkPolicyEgressNetworkAccessBlockedInternetDestinationsToTerraform(struct?: AccountNetworkPolicyEgressNetworkAccessBlockedInternetDestinations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktn.stringToTerraform(struct!.destination),
    internet_destination_type: cdktn.stringToTerraform(struct!.internetDestinationType),
  }
}


export function accountNetworkPolicyEgressNetworkAccessBlockedInternetDestinationsToHclTerraform(struct?: AccountNetworkPolicyEgressNetworkAccessBlockedInternetDestinations | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyEgressNetworkAccessBlockedInternetDestinationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AccountNetworkPolicyEgressNetworkAccessBlockedInternetDestinations | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyEgressNetworkAccessBlockedInternetDestinations | cdktn.IResolvable | undefined) {
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

  // destination - computed: false, optional: true, required: false
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

  // internet_destination_type - computed: false, optional: true, required: false
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

export class AccountNetworkPolicyEgressNetworkAccessBlockedInternetDestinationsList extends cdktn.ComplexList {
  public internalValue? : AccountNetworkPolicyEgressNetworkAccessBlockedInternetDestinations[] | cdktn.IResolvable

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
  public get(index: number): AccountNetworkPolicyEgressNetworkAccessBlockedInternetDestinationsOutputReference {
    return new AccountNetworkPolicyEgressNetworkAccessBlockedInternetDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#dry_run_mode_product_filter AccountNetworkPolicy#dry_run_mode_product_filter}
  */
  readonly dryRunModeProductFilter?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#enforcement_mode AccountNetworkPolicy#enforcement_mode}
  */
  readonly enforcementMode?: string;
}

export function accountNetworkPolicyEgressNetworkAccessPolicyEnforcementToTerraform(struct?: AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dry_run_mode_product_filter: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.dryRunModeProductFilter),
    enforcement_mode: cdktn.stringToTerraform(struct!.enforcementMode),
  }
}


export function accountNetworkPolicyEgressNetworkAccessPolicyEnforcementToHclTerraform(struct?: AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement | cdktn.IResolvable | undefined) {
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

  // dry_run_mode_product_filter - computed: false, optional: true, required: false
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

  // enforcement_mode - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyEgressNetworkAccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#allowed_internet_destinations AccountNetworkPolicy#allowed_internet_destinations}
  */
  readonly allowedInternetDestinations?: AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#allowed_storage_destinations AccountNetworkPolicy#allowed_storage_destinations}
  */
  readonly allowedStorageDestinations?: AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#blocked_internet_destinations AccountNetworkPolicy#blocked_internet_destinations}
  */
  readonly blockedInternetDestinations?: AccountNetworkPolicyEgressNetworkAccessBlockedInternetDestinations[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#policy_enforcement AccountNetworkPolicy#policy_enforcement}
  */
  readonly policyEnforcement?: AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#restriction_mode AccountNetworkPolicy#restriction_mode}
  */
  readonly restrictionMode: string;
}

export function accountNetworkPolicyEgressNetworkAccessToTerraform(struct?: AccountNetworkPolicyEgressNetworkAccess | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_internet_destinations: cdktn.listMapper(accountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsToTerraform, false)(struct!.allowedInternetDestinations),
    allowed_storage_destinations: cdktn.listMapper(accountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsToTerraform, false)(struct!.allowedStorageDestinations),
    blocked_internet_destinations: cdktn.listMapper(accountNetworkPolicyEgressNetworkAccessBlockedInternetDestinationsToTerraform, false)(struct!.blockedInternetDestinations),
    policy_enforcement: accountNetworkPolicyEgressNetworkAccessPolicyEnforcementToTerraform(struct!.policyEnforcement),
    restriction_mode: cdktn.stringToTerraform(struct!.restrictionMode),
  }
}


export function accountNetworkPolicyEgressNetworkAccessToHclTerraform(struct?: AccountNetworkPolicyEgressNetworkAccess | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_internet_destinations: {
      value: cdktn.listMapperHcl(accountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsToHclTerraform, false)(struct!.allowedInternetDestinations),
      isBlock: true,
      type: "list",
      storageClassType: "AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList",
    },
    allowed_storage_destinations: {
      value: cdktn.listMapperHcl(accountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsToHclTerraform, false)(struct!.allowedStorageDestinations),
      isBlock: true,
      type: "list",
      storageClassType: "AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList",
    },
    blocked_internet_destinations: {
      value: cdktn.listMapperHcl(accountNetworkPolicyEgressNetworkAccessBlockedInternetDestinationsToHclTerraform, false)(struct!.blockedInternetDestinations),
      isBlock: true,
      type: "list",
      storageClassType: "AccountNetworkPolicyEgressNetworkAccessBlockedInternetDestinationsList",
    },
    policy_enforcement: {
      value: accountNetworkPolicyEgressNetworkAccessPolicyEnforcementToHclTerraform(struct!.policyEnforcement),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement",
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

export class AccountNetworkPolicyEgressNetworkAccessOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyEgressNetworkAccess | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyEgressNetworkAccess | cdktn.IResolvable | undefined) {
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

  // allowed_internet_destinations - computed: false, optional: true, required: false
  private _allowedInternetDestinations = new AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList(this, "allowed_internet_destinations", false);
  public get allowedInternetDestinations() {
    return this._allowedInternetDestinations;
  }
  public putAllowedInternetDestinations(value: AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations[] | cdktn.IResolvable) {
    this._allowedInternetDestinations.internalValue = value;
  }
  public resetAllowedInternetDestinations() {
    this._allowedInternetDestinations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedInternetDestinationsInput() {
    return this._allowedInternetDestinations.internalValue;
  }

  // allowed_storage_destinations - computed: false, optional: true, required: false
  private _allowedStorageDestinations = new AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList(this, "allowed_storage_destinations", false);
  public get allowedStorageDestinations() {
    return this._allowedStorageDestinations;
  }
  public putAllowedStorageDestinations(value: AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations[] | cdktn.IResolvable) {
    this._allowedStorageDestinations.internalValue = value;
  }
  public resetAllowedStorageDestinations() {
    this._allowedStorageDestinations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedStorageDestinationsInput() {
    return this._allowedStorageDestinations.internalValue;
  }

  // blocked_internet_destinations - computed: false, optional: true, required: false
  private _blockedInternetDestinations = new AccountNetworkPolicyEgressNetworkAccessBlockedInternetDestinationsList(this, "blocked_internet_destinations", false);
  public get blockedInternetDestinations() {
    return this._blockedInternetDestinations;
  }
  public putBlockedInternetDestinations(value: AccountNetworkPolicyEgressNetworkAccessBlockedInternetDestinations[] | cdktn.IResolvable) {
    this._blockedInternetDestinations.internalValue = value;
  }
  public resetBlockedInternetDestinations() {
    this._blockedInternetDestinations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedInternetDestinationsInput() {
    return this._blockedInternetDestinations.internalValue;
  }

  // policy_enforcement - computed: false, optional: true, required: false
  private _policyEnforcement = new AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference(this, "policy_enforcement");
  public get policyEnforcement() {
    return this._policyEnforcement;
  }
  public putPolicyEnforcement(value: AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement) {
    this._policyEnforcement.internalValue = value;
  }
  public resetPolicyEnforcement() {
    this._policyEnforcement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyEnforcementInput() {
    return this._policyEnforcement.internalValue;
  }

  // restriction_mode - computed: false, optional: false, required: true
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
export interface AccountNetworkPolicyEgress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#network_access AccountNetworkPolicy#network_access}
  */
  readonly networkAccess?: AccountNetworkPolicyEgressNetworkAccess;
}

export function accountNetworkPolicyEgressToTerraform(struct?: AccountNetworkPolicyEgress | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_access: accountNetworkPolicyEgressNetworkAccessToTerraform(struct!.networkAccess),
  }
}


export function accountNetworkPolicyEgressToHclTerraform(struct?: AccountNetworkPolicyEgress | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_access: {
      value: accountNetworkPolicyEgressNetworkAccessToHclTerraform(struct!.networkAccess),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyEgressNetworkAccess",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountNetworkPolicyEgressOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyEgress | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkAccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkAccess = this._networkAccess?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountNetworkPolicyEgress | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._networkAccess.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._networkAccess.internalValue = value.networkAccess;
    }
  }

  // network_access - computed: false, optional: true, required: false
  private _networkAccess = new AccountNetworkPolicyEgressNetworkAccessOutputReference(this, "network_access");
  public get networkAccess() {
    return this._networkAccess;
  }
  public putNetworkAccess(value: AccountNetworkPolicyEgressNetworkAccess) {
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
export interface AccountNetworkPolicyIngressPrivateAccessAllowRulesAuthenticationIdentities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#principal_id AccountNetworkPolicy#principal_id}
  */
  readonly principalId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#principal_type AccountNetworkPolicy#principal_type}
  */
  readonly principalType?: string;
}

export function accountNetworkPolicyIngressPrivateAccessAllowRulesAuthenticationIdentitiesToTerraform(struct?: AccountNetworkPolicyIngressPrivateAccessAllowRulesAuthenticationIdentities | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    principal_id: cdktn.numberToTerraform(struct!.principalId),
    principal_type: cdktn.stringToTerraform(struct!.principalType),
  }
}


export function accountNetworkPolicyIngressPrivateAccessAllowRulesAuthenticationIdentitiesToHclTerraform(struct?: AccountNetworkPolicyIngressPrivateAccessAllowRulesAuthenticationIdentities | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyIngressPrivateAccessAllowRulesAuthenticationIdentitiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AccountNetworkPolicyIngressPrivateAccessAllowRulesAuthenticationIdentities | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressPrivateAccessAllowRulesAuthenticationIdentities | cdktn.IResolvable | undefined) {
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

  // principal_id - computed: false, optional: true, required: false
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

  // principal_type - computed: false, optional: true, required: false
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

export class AccountNetworkPolicyIngressPrivateAccessAllowRulesAuthenticationIdentitiesList extends cdktn.ComplexList {
  public internalValue? : AccountNetworkPolicyIngressPrivateAccessAllowRulesAuthenticationIdentities[] | cdktn.IResolvable

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
  public get(index: number): AccountNetworkPolicyIngressPrivateAccessAllowRulesAuthenticationIdentitiesOutputReference {
    return new AccountNetworkPolicyIngressPrivateAccessAllowRulesAuthenticationIdentitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccountNetworkPolicyIngressPrivateAccessAllowRulesAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#identities AccountNetworkPolicy#identities}
  */
  readonly identities?: AccountNetworkPolicyIngressPrivateAccessAllowRulesAuthenticationIdentities[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#identity_type AccountNetworkPolicy#identity_type}
  */
  readonly identityType?: string;
}

export function accountNetworkPolicyIngressPrivateAccessAllowRulesAuthenticationToTerraform(struct?: AccountNetworkPolicyIngressPrivateAccessAllowRulesAuthentication | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identities: cdktn.listMapper(accountNetworkPolicyIngressPrivateAccessAllowRulesAuthenticationIdentitiesToTerraform, false)(struct!.identities),
    identity_type: cdktn.stringToTerraform(struct!.identityType),
  }
}


export function accountNetworkPolicyIngressPrivateAccessAllowRulesAuthenticationToHclTerraform(struct?: AccountNetworkPolicyIngressPrivateAccessAllowRulesAuthentication | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identities: {
      value: cdktn.listMapperHcl(accountNetworkPolicyIngressPrivateAccessAllowRulesAuthenticationIdentitiesToHclTerraform, false)(struct!.identities),
      isBlock: true,
      type: "list",
      storageClassType: "AccountNetworkPolicyIngressPrivateAccessAllowRulesAuthenticationIdentitiesList",
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

export class AccountNetworkPolicyIngressPrivateAccessAllowRulesAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressPrivateAccessAllowRulesAuthentication | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressPrivateAccessAllowRulesAuthentication | cdktn.IResolvable | undefined) {
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

  // identities - computed: false, optional: true, required: false
  private _identities = new AccountNetworkPolicyIngressPrivateAccessAllowRulesAuthenticationIdentitiesList(this, "identities", false);
  public get identities() {
    return this._identities;
  }
  public putIdentities(value: AccountNetworkPolicyIngressPrivateAccessAllowRulesAuthenticationIdentities[] | cdktn.IResolvable) {
    this._identities.internalValue = value;
  }
  public resetIdentities() {
    this._identities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identitiesInput() {
    return this._identities.internalValue;
  }

  // identity_type - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountApi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#scope_qualifier AccountNetworkPolicy#scope_qualifier}
  */
  readonly scopeQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#scopes AccountNetworkPolicy#scopes}
  */
  readonly scopes?: string[];
}

export function accountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountApiToTerraform(struct?: AccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope_qualifier: cdktn.stringToTerraform(struct!.scopeQualifier),
    scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
  }
}


export function accountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountApiToHclTerraform(struct?: AccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountApi | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountApiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountApi | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountApi | cdktn.IResolvable | undefined) {
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

  // scope_qualifier - computed: false, optional: true, required: false
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

  // scopes - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountDatabricksOne {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#all_destinations AccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function accountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountDatabricksOneToTerraform(struct?: AccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountDatabricksOne | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function accountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountDatabricksOneToHclTerraform(struct?: AccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountDatabricksOne | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountDatabricksOneOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountDatabricksOne | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountDatabricksOne | cdktn.IResolvable | undefined) {
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

  // all_destinations - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountUi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#all_destinations AccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function accountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountUiToTerraform(struct?: AccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountUi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function accountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountUiToHclTerraform(struct?: AccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountUi | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountUiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountUi | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountUi | cdktn.IResolvable | undefined) {
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

  // all_destinations - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAppsRuntime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#all_destinations AccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function accountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAppsRuntimeToTerraform(struct?: AccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAppsRuntime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function accountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAppsRuntimeToHclTerraform(struct?: AccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAppsRuntime | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAppsRuntimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAppsRuntime | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAppsRuntime | cdktn.IResolvable | undefined) {
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

  // all_destinations - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationLakebaseRuntime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#all_destinations AccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function accountNetworkPolicyIngressPrivateAccessAllowRulesDestinationLakebaseRuntimeToTerraform(struct?: AccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationLakebaseRuntime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function accountNetworkPolicyIngressPrivateAccessAllowRulesDestinationLakebaseRuntimeToHclTerraform(struct?: AccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationLakebaseRuntime | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationLakebaseRuntimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationLakebaseRuntime | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationLakebaseRuntime | cdktn.IResolvable | undefined) {
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

  // all_destinations - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationWorkspaceApi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#scope_qualifier AccountNetworkPolicy#scope_qualifier}
  */
  readonly scopeQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#scopes AccountNetworkPolicy#scopes}
  */
  readonly scopes?: string[];
}

export function accountNetworkPolicyIngressPrivateAccessAllowRulesDestinationWorkspaceApiToTerraform(struct?: AccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationWorkspaceApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope_qualifier: cdktn.stringToTerraform(struct!.scopeQualifier),
    scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
  }
}


export function accountNetworkPolicyIngressPrivateAccessAllowRulesDestinationWorkspaceApiToHclTerraform(struct?: AccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationWorkspaceApi | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationWorkspaceApiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationWorkspaceApi | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationWorkspaceApi | cdktn.IResolvable | undefined) {
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

  // scope_qualifier - computed: false, optional: true, required: false
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

  // scopes - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationWorkspaceUi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#all_destinations AccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function accountNetworkPolicyIngressPrivateAccessAllowRulesDestinationWorkspaceUiToTerraform(struct?: AccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationWorkspaceUi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function accountNetworkPolicyIngressPrivateAccessAllowRulesDestinationWorkspaceUiToHclTerraform(struct?: AccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationWorkspaceUi | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationWorkspaceUiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationWorkspaceUi | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationWorkspaceUi | cdktn.IResolvable | undefined) {
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

  // all_destinations - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyIngressPrivateAccessAllowRulesDestination {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#account_api AccountNetworkPolicy#account_api}
  */
  readonly accountApi?: AccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountApi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#account_databricks_one AccountNetworkPolicy#account_databricks_one}
  */
  readonly accountDatabricksOne?: AccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountDatabricksOne;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#account_ui AccountNetworkPolicy#account_ui}
  */
  readonly accountUi?: AccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountUi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#all_destinations AccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#apps_runtime AccountNetworkPolicy#apps_runtime}
  */
  readonly appsRuntime?: AccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAppsRuntime;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#lakebase_runtime AccountNetworkPolicy#lakebase_runtime}
  */
  readonly lakebaseRuntime?: AccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationLakebaseRuntime;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#workspace_api AccountNetworkPolicy#workspace_api}
  */
  readonly workspaceApi?: AccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationWorkspaceApi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#workspace_ui AccountNetworkPolicy#workspace_ui}
  */
  readonly workspaceUi?: AccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationWorkspaceUi;
}

export function accountNetworkPolicyIngressPrivateAccessAllowRulesDestinationToTerraform(struct?: AccountNetworkPolicyIngressPrivateAccessAllowRulesDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_api: accountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountApiToTerraform(struct!.accountApi),
    account_databricks_one: accountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountDatabricksOneToTerraform(struct!.accountDatabricksOne),
    account_ui: accountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountUiToTerraform(struct!.accountUi),
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
    apps_runtime: accountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAppsRuntimeToTerraform(struct!.appsRuntime),
    lakebase_runtime: accountNetworkPolicyIngressPrivateAccessAllowRulesDestinationLakebaseRuntimeToTerraform(struct!.lakebaseRuntime),
    workspace_api: accountNetworkPolicyIngressPrivateAccessAllowRulesDestinationWorkspaceApiToTerraform(struct!.workspaceApi),
    workspace_ui: accountNetworkPolicyIngressPrivateAccessAllowRulesDestinationWorkspaceUiToTerraform(struct!.workspaceUi),
  }
}


export function accountNetworkPolicyIngressPrivateAccessAllowRulesDestinationToHclTerraform(struct?: AccountNetworkPolicyIngressPrivateAccessAllowRulesDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_api: {
      value: accountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountApiToHclTerraform(struct!.accountApi),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountApi",
    },
    account_databricks_one: {
      value: accountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountDatabricksOneToHclTerraform(struct!.accountDatabricksOne),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountDatabricksOne",
    },
    account_ui: {
      value: accountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountUiToHclTerraform(struct!.accountUi),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountUi",
    },
    all_destinations: {
      value: cdktn.booleanToHclTerraform(struct!.allDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    apps_runtime: {
      value: accountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAppsRuntimeToHclTerraform(struct!.appsRuntime),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAppsRuntime",
    },
    lakebase_runtime: {
      value: accountNetworkPolicyIngressPrivateAccessAllowRulesDestinationLakebaseRuntimeToHclTerraform(struct!.lakebaseRuntime),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationLakebaseRuntime",
    },
    workspace_api: {
      value: accountNetworkPolicyIngressPrivateAccessAllowRulesDestinationWorkspaceApiToHclTerraform(struct!.workspaceApi),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationWorkspaceApi",
    },
    workspace_ui: {
      value: accountNetworkPolicyIngressPrivateAccessAllowRulesDestinationWorkspaceUiToHclTerraform(struct!.workspaceUi),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationWorkspaceUi",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressPrivateAccessAllowRulesDestination | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressPrivateAccessAllowRulesDestination | cdktn.IResolvable | undefined) {
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

  // account_api - computed: false, optional: true, required: false
  private _accountApi = new AccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountApiOutputReference(this, "account_api");
  public get accountApi() {
    return this._accountApi;
  }
  public putAccountApi(value: AccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountApi) {
    this._accountApi.internalValue = value;
  }
  public resetAccountApi() {
    this._accountApi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountApiInput() {
    return this._accountApi.internalValue;
  }

  // account_databricks_one - computed: false, optional: true, required: false
  private _accountDatabricksOne = new AccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountDatabricksOneOutputReference(this, "account_databricks_one");
  public get accountDatabricksOne() {
    return this._accountDatabricksOne;
  }
  public putAccountDatabricksOne(value: AccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountDatabricksOne) {
    this._accountDatabricksOne.internalValue = value;
  }
  public resetAccountDatabricksOne() {
    this._accountDatabricksOne.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountDatabricksOneInput() {
    return this._accountDatabricksOne.internalValue;
  }

  // account_ui - computed: false, optional: true, required: false
  private _accountUi = new AccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountUiOutputReference(this, "account_ui");
  public get accountUi() {
    return this._accountUi;
  }
  public putAccountUi(value: AccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAccountUi) {
    this._accountUi.internalValue = value;
  }
  public resetAccountUi() {
    this._accountUi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountUiInput() {
    return this._accountUi.internalValue;
  }

  // all_destinations - computed: false, optional: true, required: false
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

  // apps_runtime - computed: false, optional: true, required: false
  private _appsRuntime = new AccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAppsRuntimeOutputReference(this, "apps_runtime");
  public get appsRuntime() {
    return this._appsRuntime;
  }
  public putAppsRuntime(value: AccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationAppsRuntime) {
    this._appsRuntime.internalValue = value;
  }
  public resetAppsRuntime() {
    this._appsRuntime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appsRuntimeInput() {
    return this._appsRuntime.internalValue;
  }

  // lakebase_runtime - computed: false, optional: true, required: false
  private _lakebaseRuntime = new AccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationLakebaseRuntimeOutputReference(this, "lakebase_runtime");
  public get lakebaseRuntime() {
    return this._lakebaseRuntime;
  }
  public putLakebaseRuntime(value: AccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationLakebaseRuntime) {
    this._lakebaseRuntime.internalValue = value;
  }
  public resetLakebaseRuntime() {
    this._lakebaseRuntime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lakebaseRuntimeInput() {
    return this._lakebaseRuntime.internalValue;
  }

  // workspace_api - computed: false, optional: true, required: false
  private _workspaceApi = new AccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationWorkspaceApiOutputReference(this, "workspace_api");
  public get workspaceApi() {
    return this._workspaceApi;
  }
  public putWorkspaceApi(value: AccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationWorkspaceApi) {
    this._workspaceApi.internalValue = value;
  }
  public resetWorkspaceApi() {
    this._workspaceApi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceApiInput() {
    return this._workspaceApi.internalValue;
  }

  // workspace_ui - computed: false, optional: true, required: false
  private _workspaceUi = new AccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationWorkspaceUiOutputReference(this, "workspace_ui");
  public get workspaceUi() {
    return this._workspaceUi;
  }
  public putWorkspaceUi(value: AccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationWorkspaceUi) {
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
export interface AccountNetworkPolicyIngressPrivateAccessAllowRulesOriginEndpoints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#endpoint_ids AccountNetworkPolicy#endpoint_ids}
  */
  readonly endpointIds?: string[];
}

export function accountNetworkPolicyIngressPrivateAccessAllowRulesOriginEndpointsToTerraform(struct?: AccountNetworkPolicyIngressPrivateAccessAllowRulesOriginEndpoints | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.endpointIds),
  }
}


export function accountNetworkPolicyIngressPrivateAccessAllowRulesOriginEndpointsToHclTerraform(struct?: AccountNetworkPolicyIngressPrivateAccessAllowRulesOriginEndpoints | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyIngressPrivateAccessAllowRulesOriginEndpointsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressPrivateAccessAllowRulesOriginEndpoints | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressPrivateAccessAllowRulesOriginEndpoints | cdktn.IResolvable | undefined) {
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

  // endpoint_ids - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyIngressPrivateAccessAllowRulesOrigin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#all_private_access AccountNetworkPolicy#all_private_access}
  */
  readonly allPrivateAccess?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#all_registered_endpoints AccountNetworkPolicy#all_registered_endpoints}
  */
  readonly allRegisteredEndpoints?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#azure_workspace_private_link AccountNetworkPolicy#azure_workspace_private_link}
  */
  readonly azureWorkspacePrivateLink?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#endpoints AccountNetworkPolicy#endpoints}
  */
  readonly endpoints?: AccountNetworkPolicyIngressPrivateAccessAllowRulesOriginEndpoints;
}

export function accountNetworkPolicyIngressPrivateAccessAllowRulesOriginToTerraform(struct?: AccountNetworkPolicyIngressPrivateAccessAllowRulesOrigin | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_private_access: cdktn.booleanToTerraform(struct!.allPrivateAccess),
    all_registered_endpoints: cdktn.booleanToTerraform(struct!.allRegisteredEndpoints),
    azure_workspace_private_link: cdktn.booleanToTerraform(struct!.azureWorkspacePrivateLink),
    endpoints: accountNetworkPolicyIngressPrivateAccessAllowRulesOriginEndpointsToTerraform(struct!.endpoints),
  }
}


export function accountNetworkPolicyIngressPrivateAccessAllowRulesOriginToHclTerraform(struct?: AccountNetworkPolicyIngressPrivateAccessAllowRulesOrigin | cdktn.IResolvable): any {
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
      value: accountNetworkPolicyIngressPrivateAccessAllowRulesOriginEndpointsToHclTerraform(struct!.endpoints),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressPrivateAccessAllowRulesOriginEndpoints",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountNetworkPolicyIngressPrivateAccessAllowRulesOriginOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressPrivateAccessAllowRulesOrigin | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressPrivateAccessAllowRulesOrigin | cdktn.IResolvable | undefined) {
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

  // all_private_access - computed: false, optional: true, required: false
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

  // all_registered_endpoints - computed: false, optional: true, required: false
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

  // azure_workspace_private_link - computed: false, optional: true, required: false
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

  // endpoints - computed: false, optional: true, required: false
  private _endpoints = new AccountNetworkPolicyIngressPrivateAccessAllowRulesOriginEndpointsOutputReference(this, "endpoints");
  public get endpoints() {
    return this._endpoints;
  }
  public putEndpoints(value: AccountNetworkPolicyIngressPrivateAccessAllowRulesOriginEndpoints) {
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
export interface AccountNetworkPolicyIngressPrivateAccessAllowRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#authentication AccountNetworkPolicy#authentication}
  */
  readonly authentication?: AccountNetworkPolicyIngressPrivateAccessAllowRulesAuthentication;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#destination AccountNetworkPolicy#destination}
  */
  readonly destination?: AccountNetworkPolicyIngressPrivateAccessAllowRulesDestination;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#label AccountNetworkPolicy#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#origin AccountNetworkPolicy#origin}
  */
  readonly origin?: AccountNetworkPolicyIngressPrivateAccessAllowRulesOrigin;
}

export function accountNetworkPolicyIngressPrivateAccessAllowRulesToTerraform(struct?: AccountNetworkPolicyIngressPrivateAccessAllowRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: accountNetworkPolicyIngressPrivateAccessAllowRulesAuthenticationToTerraform(struct!.authentication),
    destination: accountNetworkPolicyIngressPrivateAccessAllowRulesDestinationToTerraform(struct!.destination),
    label: cdktn.stringToTerraform(struct!.label),
    origin: accountNetworkPolicyIngressPrivateAccessAllowRulesOriginToTerraform(struct!.origin),
  }
}


export function accountNetworkPolicyIngressPrivateAccessAllowRulesToHclTerraform(struct?: AccountNetworkPolicyIngressPrivateAccessAllowRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: accountNetworkPolicyIngressPrivateAccessAllowRulesAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressPrivateAccessAllowRulesAuthentication",
    },
    destination: {
      value: accountNetworkPolicyIngressPrivateAccessAllowRulesDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressPrivateAccessAllowRulesDestination",
    },
    label: {
      value: cdktn.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin: {
      value: accountNetworkPolicyIngressPrivateAccessAllowRulesOriginToHclTerraform(struct!.origin),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressPrivateAccessAllowRulesOrigin",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountNetworkPolicyIngressPrivateAccessAllowRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AccountNetworkPolicyIngressPrivateAccessAllowRules | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressPrivateAccessAllowRules | cdktn.IResolvable | undefined) {
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

  // authentication - computed: false, optional: true, required: false
  private _authentication = new AccountNetworkPolicyIngressPrivateAccessAllowRulesAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: AccountNetworkPolicyIngressPrivateAccessAllowRulesAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // destination - computed: false, optional: true, required: false
  private _destination = new AccountNetworkPolicyIngressPrivateAccessAllowRulesDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: AccountNetworkPolicyIngressPrivateAccessAllowRulesDestination) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // label - computed: false, optional: true, required: false
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

  // origin - computed: false, optional: true, required: false
  private _origin = new AccountNetworkPolicyIngressPrivateAccessAllowRulesOriginOutputReference(this, "origin");
  public get origin() {
    return this._origin;
  }
  public putOrigin(value: AccountNetworkPolicyIngressPrivateAccessAllowRulesOrigin) {
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

export class AccountNetworkPolicyIngressPrivateAccessAllowRulesList extends cdktn.ComplexList {
  public internalValue? : AccountNetworkPolicyIngressPrivateAccessAllowRules[] | cdktn.IResolvable

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
  public get(index: number): AccountNetworkPolicyIngressPrivateAccessAllowRulesOutputReference {
    return new AccountNetworkPolicyIngressPrivateAccessAllowRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccountNetworkPolicyIngressPrivateAccessDenyRulesAuthenticationIdentities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#principal_id AccountNetworkPolicy#principal_id}
  */
  readonly principalId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#principal_type AccountNetworkPolicy#principal_type}
  */
  readonly principalType?: string;
}

export function accountNetworkPolicyIngressPrivateAccessDenyRulesAuthenticationIdentitiesToTerraform(struct?: AccountNetworkPolicyIngressPrivateAccessDenyRulesAuthenticationIdentities | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    principal_id: cdktn.numberToTerraform(struct!.principalId),
    principal_type: cdktn.stringToTerraform(struct!.principalType),
  }
}


export function accountNetworkPolicyIngressPrivateAccessDenyRulesAuthenticationIdentitiesToHclTerraform(struct?: AccountNetworkPolicyIngressPrivateAccessDenyRulesAuthenticationIdentities | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyIngressPrivateAccessDenyRulesAuthenticationIdentitiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AccountNetworkPolicyIngressPrivateAccessDenyRulesAuthenticationIdentities | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressPrivateAccessDenyRulesAuthenticationIdentities | cdktn.IResolvable | undefined) {
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

  // principal_id - computed: false, optional: true, required: false
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

  // principal_type - computed: false, optional: true, required: false
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

export class AccountNetworkPolicyIngressPrivateAccessDenyRulesAuthenticationIdentitiesList extends cdktn.ComplexList {
  public internalValue? : AccountNetworkPolicyIngressPrivateAccessDenyRulesAuthenticationIdentities[] | cdktn.IResolvable

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
  public get(index: number): AccountNetworkPolicyIngressPrivateAccessDenyRulesAuthenticationIdentitiesOutputReference {
    return new AccountNetworkPolicyIngressPrivateAccessDenyRulesAuthenticationIdentitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccountNetworkPolicyIngressPrivateAccessDenyRulesAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#identities AccountNetworkPolicy#identities}
  */
  readonly identities?: AccountNetworkPolicyIngressPrivateAccessDenyRulesAuthenticationIdentities[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#identity_type AccountNetworkPolicy#identity_type}
  */
  readonly identityType?: string;
}

export function accountNetworkPolicyIngressPrivateAccessDenyRulesAuthenticationToTerraform(struct?: AccountNetworkPolicyIngressPrivateAccessDenyRulesAuthentication | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identities: cdktn.listMapper(accountNetworkPolicyIngressPrivateAccessDenyRulesAuthenticationIdentitiesToTerraform, false)(struct!.identities),
    identity_type: cdktn.stringToTerraform(struct!.identityType),
  }
}


export function accountNetworkPolicyIngressPrivateAccessDenyRulesAuthenticationToHclTerraform(struct?: AccountNetworkPolicyIngressPrivateAccessDenyRulesAuthentication | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identities: {
      value: cdktn.listMapperHcl(accountNetworkPolicyIngressPrivateAccessDenyRulesAuthenticationIdentitiesToHclTerraform, false)(struct!.identities),
      isBlock: true,
      type: "list",
      storageClassType: "AccountNetworkPolicyIngressPrivateAccessDenyRulesAuthenticationIdentitiesList",
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

export class AccountNetworkPolicyIngressPrivateAccessDenyRulesAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressPrivateAccessDenyRulesAuthentication | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressPrivateAccessDenyRulesAuthentication | cdktn.IResolvable | undefined) {
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

  // identities - computed: false, optional: true, required: false
  private _identities = new AccountNetworkPolicyIngressPrivateAccessDenyRulesAuthenticationIdentitiesList(this, "identities", false);
  public get identities() {
    return this._identities;
  }
  public putIdentities(value: AccountNetworkPolicyIngressPrivateAccessDenyRulesAuthenticationIdentities[] | cdktn.IResolvable) {
    this._identities.internalValue = value;
  }
  public resetIdentities() {
    this._identities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identitiesInput() {
    return this._identities.internalValue;
  }

  // identity_type - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountApi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#scope_qualifier AccountNetworkPolicy#scope_qualifier}
  */
  readonly scopeQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#scopes AccountNetworkPolicy#scopes}
  */
  readonly scopes?: string[];
}

export function accountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountApiToTerraform(struct?: AccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope_qualifier: cdktn.stringToTerraform(struct!.scopeQualifier),
    scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
  }
}


export function accountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountApiToHclTerraform(struct?: AccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountApi | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountApiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountApi | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountApi | cdktn.IResolvable | undefined) {
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

  // scope_qualifier - computed: false, optional: true, required: false
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

  // scopes - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountDatabricksOne {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#all_destinations AccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function accountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountDatabricksOneToTerraform(struct?: AccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountDatabricksOne | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function accountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountDatabricksOneToHclTerraform(struct?: AccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountDatabricksOne | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountDatabricksOneOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountDatabricksOne | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountDatabricksOne | cdktn.IResolvable | undefined) {
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

  // all_destinations - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountUi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#all_destinations AccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function accountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountUiToTerraform(struct?: AccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountUi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function accountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountUiToHclTerraform(struct?: AccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountUi | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountUiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountUi | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountUi | cdktn.IResolvable | undefined) {
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

  // all_destinations - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAppsRuntime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#all_destinations AccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function accountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAppsRuntimeToTerraform(struct?: AccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAppsRuntime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function accountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAppsRuntimeToHclTerraform(struct?: AccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAppsRuntime | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAppsRuntimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAppsRuntime | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAppsRuntime | cdktn.IResolvable | undefined) {
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

  // all_destinations - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationLakebaseRuntime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#all_destinations AccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function accountNetworkPolicyIngressPrivateAccessDenyRulesDestinationLakebaseRuntimeToTerraform(struct?: AccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationLakebaseRuntime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function accountNetworkPolicyIngressPrivateAccessDenyRulesDestinationLakebaseRuntimeToHclTerraform(struct?: AccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationLakebaseRuntime | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationLakebaseRuntimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationLakebaseRuntime | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationLakebaseRuntime | cdktn.IResolvable | undefined) {
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

  // all_destinations - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationWorkspaceApi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#scope_qualifier AccountNetworkPolicy#scope_qualifier}
  */
  readonly scopeQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#scopes AccountNetworkPolicy#scopes}
  */
  readonly scopes?: string[];
}

export function accountNetworkPolicyIngressPrivateAccessDenyRulesDestinationWorkspaceApiToTerraform(struct?: AccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationWorkspaceApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope_qualifier: cdktn.stringToTerraform(struct!.scopeQualifier),
    scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
  }
}


export function accountNetworkPolicyIngressPrivateAccessDenyRulesDestinationWorkspaceApiToHclTerraform(struct?: AccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationWorkspaceApi | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationWorkspaceApiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationWorkspaceApi | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationWorkspaceApi | cdktn.IResolvable | undefined) {
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

  // scope_qualifier - computed: false, optional: true, required: false
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

  // scopes - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationWorkspaceUi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#all_destinations AccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function accountNetworkPolicyIngressPrivateAccessDenyRulesDestinationWorkspaceUiToTerraform(struct?: AccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationWorkspaceUi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function accountNetworkPolicyIngressPrivateAccessDenyRulesDestinationWorkspaceUiToHclTerraform(struct?: AccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationWorkspaceUi | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationWorkspaceUiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationWorkspaceUi | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationWorkspaceUi | cdktn.IResolvable | undefined) {
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

  // all_destinations - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyIngressPrivateAccessDenyRulesDestination {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#account_api AccountNetworkPolicy#account_api}
  */
  readonly accountApi?: AccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountApi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#account_databricks_one AccountNetworkPolicy#account_databricks_one}
  */
  readonly accountDatabricksOne?: AccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountDatabricksOne;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#account_ui AccountNetworkPolicy#account_ui}
  */
  readonly accountUi?: AccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountUi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#all_destinations AccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#apps_runtime AccountNetworkPolicy#apps_runtime}
  */
  readonly appsRuntime?: AccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAppsRuntime;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#lakebase_runtime AccountNetworkPolicy#lakebase_runtime}
  */
  readonly lakebaseRuntime?: AccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationLakebaseRuntime;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#workspace_api AccountNetworkPolicy#workspace_api}
  */
  readonly workspaceApi?: AccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationWorkspaceApi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#workspace_ui AccountNetworkPolicy#workspace_ui}
  */
  readonly workspaceUi?: AccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationWorkspaceUi;
}

export function accountNetworkPolicyIngressPrivateAccessDenyRulesDestinationToTerraform(struct?: AccountNetworkPolicyIngressPrivateAccessDenyRulesDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_api: accountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountApiToTerraform(struct!.accountApi),
    account_databricks_one: accountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountDatabricksOneToTerraform(struct!.accountDatabricksOne),
    account_ui: accountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountUiToTerraform(struct!.accountUi),
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
    apps_runtime: accountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAppsRuntimeToTerraform(struct!.appsRuntime),
    lakebase_runtime: accountNetworkPolicyIngressPrivateAccessDenyRulesDestinationLakebaseRuntimeToTerraform(struct!.lakebaseRuntime),
    workspace_api: accountNetworkPolicyIngressPrivateAccessDenyRulesDestinationWorkspaceApiToTerraform(struct!.workspaceApi),
    workspace_ui: accountNetworkPolicyIngressPrivateAccessDenyRulesDestinationWorkspaceUiToTerraform(struct!.workspaceUi),
  }
}


export function accountNetworkPolicyIngressPrivateAccessDenyRulesDestinationToHclTerraform(struct?: AccountNetworkPolicyIngressPrivateAccessDenyRulesDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_api: {
      value: accountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountApiToHclTerraform(struct!.accountApi),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountApi",
    },
    account_databricks_one: {
      value: accountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountDatabricksOneToHclTerraform(struct!.accountDatabricksOne),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountDatabricksOne",
    },
    account_ui: {
      value: accountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountUiToHclTerraform(struct!.accountUi),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountUi",
    },
    all_destinations: {
      value: cdktn.booleanToHclTerraform(struct!.allDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    apps_runtime: {
      value: accountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAppsRuntimeToHclTerraform(struct!.appsRuntime),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAppsRuntime",
    },
    lakebase_runtime: {
      value: accountNetworkPolicyIngressPrivateAccessDenyRulesDestinationLakebaseRuntimeToHclTerraform(struct!.lakebaseRuntime),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationLakebaseRuntime",
    },
    workspace_api: {
      value: accountNetworkPolicyIngressPrivateAccessDenyRulesDestinationWorkspaceApiToHclTerraform(struct!.workspaceApi),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationWorkspaceApi",
    },
    workspace_ui: {
      value: accountNetworkPolicyIngressPrivateAccessDenyRulesDestinationWorkspaceUiToHclTerraform(struct!.workspaceUi),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationWorkspaceUi",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressPrivateAccessDenyRulesDestination | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressPrivateAccessDenyRulesDestination | cdktn.IResolvable | undefined) {
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

  // account_api - computed: false, optional: true, required: false
  private _accountApi = new AccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountApiOutputReference(this, "account_api");
  public get accountApi() {
    return this._accountApi;
  }
  public putAccountApi(value: AccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountApi) {
    this._accountApi.internalValue = value;
  }
  public resetAccountApi() {
    this._accountApi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountApiInput() {
    return this._accountApi.internalValue;
  }

  // account_databricks_one - computed: false, optional: true, required: false
  private _accountDatabricksOne = new AccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountDatabricksOneOutputReference(this, "account_databricks_one");
  public get accountDatabricksOne() {
    return this._accountDatabricksOne;
  }
  public putAccountDatabricksOne(value: AccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountDatabricksOne) {
    this._accountDatabricksOne.internalValue = value;
  }
  public resetAccountDatabricksOne() {
    this._accountDatabricksOne.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountDatabricksOneInput() {
    return this._accountDatabricksOne.internalValue;
  }

  // account_ui - computed: false, optional: true, required: false
  private _accountUi = new AccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountUiOutputReference(this, "account_ui");
  public get accountUi() {
    return this._accountUi;
  }
  public putAccountUi(value: AccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAccountUi) {
    this._accountUi.internalValue = value;
  }
  public resetAccountUi() {
    this._accountUi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountUiInput() {
    return this._accountUi.internalValue;
  }

  // all_destinations - computed: false, optional: true, required: false
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

  // apps_runtime - computed: false, optional: true, required: false
  private _appsRuntime = new AccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAppsRuntimeOutputReference(this, "apps_runtime");
  public get appsRuntime() {
    return this._appsRuntime;
  }
  public putAppsRuntime(value: AccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationAppsRuntime) {
    this._appsRuntime.internalValue = value;
  }
  public resetAppsRuntime() {
    this._appsRuntime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appsRuntimeInput() {
    return this._appsRuntime.internalValue;
  }

  // lakebase_runtime - computed: false, optional: true, required: false
  private _lakebaseRuntime = new AccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationLakebaseRuntimeOutputReference(this, "lakebase_runtime");
  public get lakebaseRuntime() {
    return this._lakebaseRuntime;
  }
  public putLakebaseRuntime(value: AccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationLakebaseRuntime) {
    this._lakebaseRuntime.internalValue = value;
  }
  public resetLakebaseRuntime() {
    this._lakebaseRuntime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lakebaseRuntimeInput() {
    return this._lakebaseRuntime.internalValue;
  }

  // workspace_api - computed: false, optional: true, required: false
  private _workspaceApi = new AccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationWorkspaceApiOutputReference(this, "workspace_api");
  public get workspaceApi() {
    return this._workspaceApi;
  }
  public putWorkspaceApi(value: AccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationWorkspaceApi) {
    this._workspaceApi.internalValue = value;
  }
  public resetWorkspaceApi() {
    this._workspaceApi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceApiInput() {
    return this._workspaceApi.internalValue;
  }

  // workspace_ui - computed: false, optional: true, required: false
  private _workspaceUi = new AccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationWorkspaceUiOutputReference(this, "workspace_ui");
  public get workspaceUi() {
    return this._workspaceUi;
  }
  public putWorkspaceUi(value: AccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationWorkspaceUi) {
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
export interface AccountNetworkPolicyIngressPrivateAccessDenyRulesOriginEndpoints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#endpoint_ids AccountNetworkPolicy#endpoint_ids}
  */
  readonly endpointIds?: string[];
}

export function accountNetworkPolicyIngressPrivateAccessDenyRulesOriginEndpointsToTerraform(struct?: AccountNetworkPolicyIngressPrivateAccessDenyRulesOriginEndpoints | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.endpointIds),
  }
}


export function accountNetworkPolicyIngressPrivateAccessDenyRulesOriginEndpointsToHclTerraform(struct?: AccountNetworkPolicyIngressPrivateAccessDenyRulesOriginEndpoints | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyIngressPrivateAccessDenyRulesOriginEndpointsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressPrivateAccessDenyRulesOriginEndpoints | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressPrivateAccessDenyRulesOriginEndpoints | cdktn.IResolvable | undefined) {
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

  // endpoint_ids - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyIngressPrivateAccessDenyRulesOrigin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#all_private_access AccountNetworkPolicy#all_private_access}
  */
  readonly allPrivateAccess?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#all_registered_endpoints AccountNetworkPolicy#all_registered_endpoints}
  */
  readonly allRegisteredEndpoints?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#azure_workspace_private_link AccountNetworkPolicy#azure_workspace_private_link}
  */
  readonly azureWorkspacePrivateLink?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#endpoints AccountNetworkPolicy#endpoints}
  */
  readonly endpoints?: AccountNetworkPolicyIngressPrivateAccessDenyRulesOriginEndpoints;
}

export function accountNetworkPolicyIngressPrivateAccessDenyRulesOriginToTerraform(struct?: AccountNetworkPolicyIngressPrivateAccessDenyRulesOrigin | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_private_access: cdktn.booleanToTerraform(struct!.allPrivateAccess),
    all_registered_endpoints: cdktn.booleanToTerraform(struct!.allRegisteredEndpoints),
    azure_workspace_private_link: cdktn.booleanToTerraform(struct!.azureWorkspacePrivateLink),
    endpoints: accountNetworkPolicyIngressPrivateAccessDenyRulesOriginEndpointsToTerraform(struct!.endpoints),
  }
}


export function accountNetworkPolicyIngressPrivateAccessDenyRulesOriginToHclTerraform(struct?: AccountNetworkPolicyIngressPrivateAccessDenyRulesOrigin | cdktn.IResolvable): any {
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
      value: accountNetworkPolicyIngressPrivateAccessDenyRulesOriginEndpointsToHclTerraform(struct!.endpoints),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressPrivateAccessDenyRulesOriginEndpoints",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountNetworkPolicyIngressPrivateAccessDenyRulesOriginOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressPrivateAccessDenyRulesOrigin | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressPrivateAccessDenyRulesOrigin | cdktn.IResolvable | undefined) {
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

  // all_private_access - computed: false, optional: true, required: false
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

  // all_registered_endpoints - computed: false, optional: true, required: false
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

  // azure_workspace_private_link - computed: false, optional: true, required: false
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

  // endpoints - computed: false, optional: true, required: false
  private _endpoints = new AccountNetworkPolicyIngressPrivateAccessDenyRulesOriginEndpointsOutputReference(this, "endpoints");
  public get endpoints() {
    return this._endpoints;
  }
  public putEndpoints(value: AccountNetworkPolicyIngressPrivateAccessDenyRulesOriginEndpoints) {
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
export interface AccountNetworkPolicyIngressPrivateAccessDenyRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#authentication AccountNetworkPolicy#authentication}
  */
  readonly authentication?: AccountNetworkPolicyIngressPrivateAccessDenyRulesAuthentication;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#destination AccountNetworkPolicy#destination}
  */
  readonly destination?: AccountNetworkPolicyIngressPrivateAccessDenyRulesDestination;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#label AccountNetworkPolicy#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#origin AccountNetworkPolicy#origin}
  */
  readonly origin?: AccountNetworkPolicyIngressPrivateAccessDenyRulesOrigin;
}

export function accountNetworkPolicyIngressPrivateAccessDenyRulesToTerraform(struct?: AccountNetworkPolicyIngressPrivateAccessDenyRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: accountNetworkPolicyIngressPrivateAccessDenyRulesAuthenticationToTerraform(struct!.authentication),
    destination: accountNetworkPolicyIngressPrivateAccessDenyRulesDestinationToTerraform(struct!.destination),
    label: cdktn.stringToTerraform(struct!.label),
    origin: accountNetworkPolicyIngressPrivateAccessDenyRulesOriginToTerraform(struct!.origin),
  }
}


export function accountNetworkPolicyIngressPrivateAccessDenyRulesToHclTerraform(struct?: AccountNetworkPolicyIngressPrivateAccessDenyRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: accountNetworkPolicyIngressPrivateAccessDenyRulesAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressPrivateAccessDenyRulesAuthentication",
    },
    destination: {
      value: accountNetworkPolicyIngressPrivateAccessDenyRulesDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressPrivateAccessDenyRulesDestination",
    },
    label: {
      value: cdktn.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin: {
      value: accountNetworkPolicyIngressPrivateAccessDenyRulesOriginToHclTerraform(struct!.origin),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressPrivateAccessDenyRulesOrigin",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountNetworkPolicyIngressPrivateAccessDenyRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AccountNetworkPolicyIngressPrivateAccessDenyRules | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressPrivateAccessDenyRules | cdktn.IResolvable | undefined) {
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

  // authentication - computed: false, optional: true, required: false
  private _authentication = new AccountNetworkPolicyIngressPrivateAccessDenyRulesAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: AccountNetworkPolicyIngressPrivateAccessDenyRulesAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // destination - computed: false, optional: true, required: false
  private _destination = new AccountNetworkPolicyIngressPrivateAccessDenyRulesDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: AccountNetworkPolicyIngressPrivateAccessDenyRulesDestination) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // label - computed: false, optional: true, required: false
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

  // origin - computed: false, optional: true, required: false
  private _origin = new AccountNetworkPolicyIngressPrivateAccessDenyRulesOriginOutputReference(this, "origin");
  public get origin() {
    return this._origin;
  }
  public putOrigin(value: AccountNetworkPolicyIngressPrivateAccessDenyRulesOrigin) {
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

export class AccountNetworkPolicyIngressPrivateAccessDenyRulesList extends cdktn.ComplexList {
  public internalValue? : AccountNetworkPolicyIngressPrivateAccessDenyRules[] | cdktn.IResolvable

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
  public get(index: number): AccountNetworkPolicyIngressPrivateAccessDenyRulesOutputReference {
    return new AccountNetworkPolicyIngressPrivateAccessDenyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccountNetworkPolicyIngressPrivateAccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#allow_rules AccountNetworkPolicy#allow_rules}
  */
  readonly allowRules?: AccountNetworkPolicyIngressPrivateAccessAllowRules[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#deny_rules AccountNetworkPolicy#deny_rules}
  */
  readonly denyRules?: AccountNetworkPolicyIngressPrivateAccessDenyRules[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#restriction_mode AccountNetworkPolicy#restriction_mode}
  */
  readonly restrictionMode: string;
}

export function accountNetworkPolicyIngressPrivateAccessToTerraform(struct?: AccountNetworkPolicyIngressPrivateAccess | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_rules: cdktn.listMapper(accountNetworkPolicyIngressPrivateAccessAllowRulesToTerraform, false)(struct!.allowRules),
    deny_rules: cdktn.listMapper(accountNetworkPolicyIngressPrivateAccessDenyRulesToTerraform, false)(struct!.denyRules),
    restriction_mode: cdktn.stringToTerraform(struct!.restrictionMode),
  }
}


export function accountNetworkPolicyIngressPrivateAccessToHclTerraform(struct?: AccountNetworkPolicyIngressPrivateAccess | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_rules: {
      value: cdktn.listMapperHcl(accountNetworkPolicyIngressPrivateAccessAllowRulesToHclTerraform, false)(struct!.allowRules),
      isBlock: true,
      type: "list",
      storageClassType: "AccountNetworkPolicyIngressPrivateAccessAllowRulesList",
    },
    deny_rules: {
      value: cdktn.listMapperHcl(accountNetworkPolicyIngressPrivateAccessDenyRulesToHclTerraform, false)(struct!.denyRules),
      isBlock: true,
      type: "list",
      storageClassType: "AccountNetworkPolicyIngressPrivateAccessDenyRulesList",
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

export class AccountNetworkPolicyIngressPrivateAccessOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressPrivateAccess | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressPrivateAccess | cdktn.IResolvable | undefined) {
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

  // allow_rules - computed: false, optional: true, required: false
  private _allowRules = new AccountNetworkPolicyIngressPrivateAccessAllowRulesList(this, "allow_rules", false);
  public get allowRules() {
    return this._allowRules;
  }
  public putAllowRules(value: AccountNetworkPolicyIngressPrivateAccessAllowRules[] | cdktn.IResolvable) {
    this._allowRules.internalValue = value;
  }
  public resetAllowRules() {
    this._allowRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRulesInput() {
    return this._allowRules.internalValue;
  }

  // deny_rules - computed: false, optional: true, required: false
  private _denyRules = new AccountNetworkPolicyIngressPrivateAccessDenyRulesList(this, "deny_rules", false);
  public get denyRules() {
    return this._denyRules;
  }
  public putDenyRules(value: AccountNetworkPolicyIngressPrivateAccessDenyRules[] | cdktn.IResolvable) {
    this._denyRules.internalValue = value;
  }
  public resetDenyRules() {
    this._denyRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyRulesInput() {
    return this._denyRules.internalValue;
  }

  // restriction_mode - computed: false, optional: false, required: true
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
export interface AccountNetworkPolicyIngressPublicAccessAllowRulesAuthenticationIdentities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#principal_id AccountNetworkPolicy#principal_id}
  */
  readonly principalId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#principal_type AccountNetworkPolicy#principal_type}
  */
  readonly principalType?: string;
}

export function accountNetworkPolicyIngressPublicAccessAllowRulesAuthenticationIdentitiesToTerraform(struct?: AccountNetworkPolicyIngressPublicAccessAllowRulesAuthenticationIdentities | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    principal_id: cdktn.numberToTerraform(struct!.principalId),
    principal_type: cdktn.stringToTerraform(struct!.principalType),
  }
}


export function accountNetworkPolicyIngressPublicAccessAllowRulesAuthenticationIdentitiesToHclTerraform(struct?: AccountNetworkPolicyIngressPublicAccessAllowRulesAuthenticationIdentities | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyIngressPublicAccessAllowRulesAuthenticationIdentitiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AccountNetworkPolicyIngressPublicAccessAllowRulesAuthenticationIdentities | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressPublicAccessAllowRulesAuthenticationIdentities | cdktn.IResolvable | undefined) {
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

  // principal_id - computed: false, optional: true, required: false
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

  // principal_type - computed: false, optional: true, required: false
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

export class AccountNetworkPolicyIngressPublicAccessAllowRulesAuthenticationIdentitiesList extends cdktn.ComplexList {
  public internalValue? : AccountNetworkPolicyIngressPublicAccessAllowRulesAuthenticationIdentities[] | cdktn.IResolvable

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
  public get(index: number): AccountNetworkPolicyIngressPublicAccessAllowRulesAuthenticationIdentitiesOutputReference {
    return new AccountNetworkPolicyIngressPublicAccessAllowRulesAuthenticationIdentitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccountNetworkPolicyIngressPublicAccessAllowRulesAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#identities AccountNetworkPolicy#identities}
  */
  readonly identities?: AccountNetworkPolicyIngressPublicAccessAllowRulesAuthenticationIdentities[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#identity_type AccountNetworkPolicy#identity_type}
  */
  readonly identityType?: string;
}

export function accountNetworkPolicyIngressPublicAccessAllowRulesAuthenticationToTerraform(struct?: AccountNetworkPolicyIngressPublicAccessAllowRulesAuthentication | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identities: cdktn.listMapper(accountNetworkPolicyIngressPublicAccessAllowRulesAuthenticationIdentitiesToTerraform, false)(struct!.identities),
    identity_type: cdktn.stringToTerraform(struct!.identityType),
  }
}


export function accountNetworkPolicyIngressPublicAccessAllowRulesAuthenticationToHclTerraform(struct?: AccountNetworkPolicyIngressPublicAccessAllowRulesAuthentication | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identities: {
      value: cdktn.listMapperHcl(accountNetworkPolicyIngressPublicAccessAllowRulesAuthenticationIdentitiesToHclTerraform, false)(struct!.identities),
      isBlock: true,
      type: "list",
      storageClassType: "AccountNetworkPolicyIngressPublicAccessAllowRulesAuthenticationIdentitiesList",
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

export class AccountNetworkPolicyIngressPublicAccessAllowRulesAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressPublicAccessAllowRulesAuthentication | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressPublicAccessAllowRulesAuthentication | cdktn.IResolvable | undefined) {
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

  // identities - computed: false, optional: true, required: false
  private _identities = new AccountNetworkPolicyIngressPublicAccessAllowRulesAuthenticationIdentitiesList(this, "identities", false);
  public get identities() {
    return this._identities;
  }
  public putIdentities(value: AccountNetworkPolicyIngressPublicAccessAllowRulesAuthenticationIdentities[] | cdktn.IResolvable) {
    this._identities.internalValue = value;
  }
  public resetIdentities() {
    this._identities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identitiesInput() {
    return this._identities.internalValue;
  }

  // identity_type - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountApi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#scope_qualifier AccountNetworkPolicy#scope_qualifier}
  */
  readonly scopeQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#scopes AccountNetworkPolicy#scopes}
  */
  readonly scopes?: string[];
}

export function accountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountApiToTerraform(struct?: AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope_qualifier: cdktn.stringToTerraform(struct!.scopeQualifier),
    scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
  }
}


export function accountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountApiToHclTerraform(struct?: AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountApi | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountApiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountApi | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountApi | cdktn.IResolvable | undefined) {
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

  // scope_qualifier - computed: false, optional: true, required: false
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

  // scopes - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountDatabricksOne {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#all_destinations AccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function accountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountDatabricksOneToTerraform(struct?: AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountDatabricksOne | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function accountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountDatabricksOneToHclTerraform(struct?: AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountDatabricksOne | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountDatabricksOneOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountDatabricksOne | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountDatabricksOne | cdktn.IResolvable | undefined) {
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

  // all_destinations - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountUi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#all_destinations AccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function accountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountUiToTerraform(struct?: AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountUi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function accountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountUiToHclTerraform(struct?: AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountUi | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountUiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountUi | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountUi | cdktn.IResolvable | undefined) {
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

  // all_destinations - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAppsRuntime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#all_destinations AccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function accountNetworkPolicyIngressPublicAccessAllowRulesDestinationAppsRuntimeToTerraform(struct?: AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAppsRuntime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function accountNetworkPolicyIngressPublicAccessAllowRulesDestinationAppsRuntimeToHclTerraform(struct?: AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAppsRuntime | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAppsRuntimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAppsRuntime | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAppsRuntime | cdktn.IResolvable | undefined) {
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

  // all_destinations - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationLakebaseRuntime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#all_destinations AccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function accountNetworkPolicyIngressPublicAccessAllowRulesDestinationLakebaseRuntimeToTerraform(struct?: AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationLakebaseRuntime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function accountNetworkPolicyIngressPublicAccessAllowRulesDestinationLakebaseRuntimeToHclTerraform(struct?: AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationLakebaseRuntime | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationLakebaseRuntimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationLakebaseRuntime | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationLakebaseRuntime | cdktn.IResolvable | undefined) {
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

  // all_destinations - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationWorkspaceApi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#scope_qualifier AccountNetworkPolicy#scope_qualifier}
  */
  readonly scopeQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#scopes AccountNetworkPolicy#scopes}
  */
  readonly scopes?: string[];
}

export function accountNetworkPolicyIngressPublicAccessAllowRulesDestinationWorkspaceApiToTerraform(struct?: AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationWorkspaceApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope_qualifier: cdktn.stringToTerraform(struct!.scopeQualifier),
    scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
  }
}


export function accountNetworkPolicyIngressPublicAccessAllowRulesDestinationWorkspaceApiToHclTerraform(struct?: AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationWorkspaceApi | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationWorkspaceApiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationWorkspaceApi | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationWorkspaceApi | cdktn.IResolvable | undefined) {
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

  // scope_qualifier - computed: false, optional: true, required: false
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

  // scopes - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationWorkspaceUi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#all_destinations AccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function accountNetworkPolicyIngressPublicAccessAllowRulesDestinationWorkspaceUiToTerraform(struct?: AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationWorkspaceUi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function accountNetworkPolicyIngressPublicAccessAllowRulesDestinationWorkspaceUiToHclTerraform(struct?: AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationWorkspaceUi | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationWorkspaceUiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationWorkspaceUi | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationWorkspaceUi | cdktn.IResolvable | undefined) {
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

  // all_destinations - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyIngressPublicAccessAllowRulesDestination {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#account_api AccountNetworkPolicy#account_api}
  */
  readonly accountApi?: AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountApi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#account_databricks_one AccountNetworkPolicy#account_databricks_one}
  */
  readonly accountDatabricksOne?: AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountDatabricksOne;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#account_ui AccountNetworkPolicy#account_ui}
  */
  readonly accountUi?: AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountUi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#all_destinations AccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#apps_runtime AccountNetworkPolicy#apps_runtime}
  */
  readonly appsRuntime?: AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAppsRuntime;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#lakebase_runtime AccountNetworkPolicy#lakebase_runtime}
  */
  readonly lakebaseRuntime?: AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationLakebaseRuntime;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#workspace_api AccountNetworkPolicy#workspace_api}
  */
  readonly workspaceApi?: AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationWorkspaceApi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#workspace_ui AccountNetworkPolicy#workspace_ui}
  */
  readonly workspaceUi?: AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationWorkspaceUi;
}

export function accountNetworkPolicyIngressPublicAccessAllowRulesDestinationToTerraform(struct?: AccountNetworkPolicyIngressPublicAccessAllowRulesDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_api: accountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountApiToTerraform(struct!.accountApi),
    account_databricks_one: accountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountDatabricksOneToTerraform(struct!.accountDatabricksOne),
    account_ui: accountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountUiToTerraform(struct!.accountUi),
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
    apps_runtime: accountNetworkPolicyIngressPublicAccessAllowRulesDestinationAppsRuntimeToTerraform(struct!.appsRuntime),
    lakebase_runtime: accountNetworkPolicyIngressPublicAccessAllowRulesDestinationLakebaseRuntimeToTerraform(struct!.lakebaseRuntime),
    workspace_api: accountNetworkPolicyIngressPublicAccessAllowRulesDestinationWorkspaceApiToTerraform(struct!.workspaceApi),
    workspace_ui: accountNetworkPolicyIngressPublicAccessAllowRulesDestinationWorkspaceUiToTerraform(struct!.workspaceUi),
  }
}


export function accountNetworkPolicyIngressPublicAccessAllowRulesDestinationToHclTerraform(struct?: AccountNetworkPolicyIngressPublicAccessAllowRulesDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_api: {
      value: accountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountApiToHclTerraform(struct!.accountApi),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountApi",
    },
    account_databricks_one: {
      value: accountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountDatabricksOneToHclTerraform(struct!.accountDatabricksOne),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountDatabricksOne",
    },
    account_ui: {
      value: accountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountUiToHclTerraform(struct!.accountUi),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountUi",
    },
    all_destinations: {
      value: cdktn.booleanToHclTerraform(struct!.allDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    apps_runtime: {
      value: accountNetworkPolicyIngressPublicAccessAllowRulesDestinationAppsRuntimeToHclTerraform(struct!.appsRuntime),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAppsRuntime",
    },
    lakebase_runtime: {
      value: accountNetworkPolicyIngressPublicAccessAllowRulesDestinationLakebaseRuntimeToHclTerraform(struct!.lakebaseRuntime),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationLakebaseRuntime",
    },
    workspace_api: {
      value: accountNetworkPolicyIngressPublicAccessAllowRulesDestinationWorkspaceApiToHclTerraform(struct!.workspaceApi),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationWorkspaceApi",
    },
    workspace_ui: {
      value: accountNetworkPolicyIngressPublicAccessAllowRulesDestinationWorkspaceUiToHclTerraform(struct!.workspaceUi),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationWorkspaceUi",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressPublicAccessAllowRulesDestination | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressPublicAccessAllowRulesDestination | cdktn.IResolvable | undefined) {
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

  // account_api - computed: false, optional: true, required: false
  private _accountApi = new AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountApiOutputReference(this, "account_api");
  public get accountApi() {
    return this._accountApi;
  }
  public putAccountApi(value: AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountApi) {
    this._accountApi.internalValue = value;
  }
  public resetAccountApi() {
    this._accountApi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountApiInput() {
    return this._accountApi.internalValue;
  }

  // account_databricks_one - computed: false, optional: true, required: false
  private _accountDatabricksOne = new AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountDatabricksOneOutputReference(this, "account_databricks_one");
  public get accountDatabricksOne() {
    return this._accountDatabricksOne;
  }
  public putAccountDatabricksOne(value: AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountDatabricksOne) {
    this._accountDatabricksOne.internalValue = value;
  }
  public resetAccountDatabricksOne() {
    this._accountDatabricksOne.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountDatabricksOneInput() {
    return this._accountDatabricksOne.internalValue;
  }

  // account_ui - computed: false, optional: true, required: false
  private _accountUi = new AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountUiOutputReference(this, "account_ui");
  public get accountUi() {
    return this._accountUi;
  }
  public putAccountUi(value: AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAccountUi) {
    this._accountUi.internalValue = value;
  }
  public resetAccountUi() {
    this._accountUi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountUiInput() {
    return this._accountUi.internalValue;
  }

  // all_destinations - computed: false, optional: true, required: false
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

  // apps_runtime - computed: false, optional: true, required: false
  private _appsRuntime = new AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAppsRuntimeOutputReference(this, "apps_runtime");
  public get appsRuntime() {
    return this._appsRuntime;
  }
  public putAppsRuntime(value: AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationAppsRuntime) {
    this._appsRuntime.internalValue = value;
  }
  public resetAppsRuntime() {
    this._appsRuntime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appsRuntimeInput() {
    return this._appsRuntime.internalValue;
  }

  // lakebase_runtime - computed: false, optional: true, required: false
  private _lakebaseRuntime = new AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationLakebaseRuntimeOutputReference(this, "lakebase_runtime");
  public get lakebaseRuntime() {
    return this._lakebaseRuntime;
  }
  public putLakebaseRuntime(value: AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationLakebaseRuntime) {
    this._lakebaseRuntime.internalValue = value;
  }
  public resetLakebaseRuntime() {
    this._lakebaseRuntime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lakebaseRuntimeInput() {
    return this._lakebaseRuntime.internalValue;
  }

  // workspace_api - computed: false, optional: true, required: false
  private _workspaceApi = new AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationWorkspaceApiOutputReference(this, "workspace_api");
  public get workspaceApi() {
    return this._workspaceApi;
  }
  public putWorkspaceApi(value: AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationWorkspaceApi) {
    this._workspaceApi.internalValue = value;
  }
  public resetWorkspaceApi() {
    this._workspaceApi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceApiInput() {
    return this._workspaceApi.internalValue;
  }

  // workspace_ui - computed: false, optional: true, required: false
  private _workspaceUi = new AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationWorkspaceUiOutputReference(this, "workspace_ui");
  public get workspaceUi() {
    return this._workspaceUi;
  }
  public putWorkspaceUi(value: AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationWorkspaceUi) {
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
export interface AccountNetworkPolicyIngressPublicAccessAllowRulesOriginExcludedIpRanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#ip_ranges AccountNetworkPolicy#ip_ranges}
  */
  readonly ipRanges?: string[];
}

export function accountNetworkPolicyIngressPublicAccessAllowRulesOriginExcludedIpRangesToTerraform(struct?: AccountNetworkPolicyIngressPublicAccessAllowRulesOriginExcludedIpRanges | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_ranges: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.ipRanges),
  }
}


export function accountNetworkPolicyIngressPublicAccessAllowRulesOriginExcludedIpRangesToHclTerraform(struct?: AccountNetworkPolicyIngressPublicAccessAllowRulesOriginExcludedIpRanges | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyIngressPublicAccessAllowRulesOriginExcludedIpRangesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressPublicAccessAllowRulesOriginExcludedIpRanges | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressPublicAccessAllowRulesOriginExcludedIpRanges | cdktn.IResolvable | undefined) {
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

  // ip_ranges - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyIngressPublicAccessAllowRulesOriginIncludedIpRanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#ip_ranges AccountNetworkPolicy#ip_ranges}
  */
  readonly ipRanges?: string[];
}

export function accountNetworkPolicyIngressPublicAccessAllowRulesOriginIncludedIpRangesToTerraform(struct?: AccountNetworkPolicyIngressPublicAccessAllowRulesOriginIncludedIpRanges | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_ranges: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.ipRanges),
  }
}


export function accountNetworkPolicyIngressPublicAccessAllowRulesOriginIncludedIpRangesToHclTerraform(struct?: AccountNetworkPolicyIngressPublicAccessAllowRulesOriginIncludedIpRanges | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyIngressPublicAccessAllowRulesOriginIncludedIpRangesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressPublicAccessAllowRulesOriginIncludedIpRanges | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressPublicAccessAllowRulesOriginIncludedIpRanges | cdktn.IResolvable | undefined) {
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

  // ip_ranges - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyIngressPublicAccessAllowRulesOrigin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#all_ip_ranges AccountNetworkPolicy#all_ip_ranges}
  */
  readonly allIpRanges?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#excluded_ip_ranges AccountNetworkPolicy#excluded_ip_ranges}
  */
  readonly excludedIpRanges?: AccountNetworkPolicyIngressPublicAccessAllowRulesOriginExcludedIpRanges;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#included_ip_ranges AccountNetworkPolicy#included_ip_ranges}
  */
  readonly includedIpRanges?: AccountNetworkPolicyIngressPublicAccessAllowRulesOriginIncludedIpRanges;
}

export function accountNetworkPolicyIngressPublicAccessAllowRulesOriginToTerraform(struct?: AccountNetworkPolicyIngressPublicAccessAllowRulesOrigin | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_ip_ranges: cdktn.booleanToTerraform(struct!.allIpRanges),
    excluded_ip_ranges: accountNetworkPolicyIngressPublicAccessAllowRulesOriginExcludedIpRangesToTerraform(struct!.excludedIpRanges),
    included_ip_ranges: accountNetworkPolicyIngressPublicAccessAllowRulesOriginIncludedIpRangesToTerraform(struct!.includedIpRanges),
  }
}


export function accountNetworkPolicyIngressPublicAccessAllowRulesOriginToHclTerraform(struct?: AccountNetworkPolicyIngressPublicAccessAllowRulesOrigin | cdktn.IResolvable): any {
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
      value: accountNetworkPolicyIngressPublicAccessAllowRulesOriginExcludedIpRangesToHclTerraform(struct!.excludedIpRanges),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressPublicAccessAllowRulesOriginExcludedIpRanges",
    },
    included_ip_ranges: {
      value: accountNetworkPolicyIngressPublicAccessAllowRulesOriginIncludedIpRangesToHclTerraform(struct!.includedIpRanges),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressPublicAccessAllowRulesOriginIncludedIpRanges",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountNetworkPolicyIngressPublicAccessAllowRulesOriginOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressPublicAccessAllowRulesOrigin | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressPublicAccessAllowRulesOrigin | cdktn.IResolvable | undefined) {
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

  // all_ip_ranges - computed: false, optional: true, required: false
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

  // excluded_ip_ranges - computed: false, optional: true, required: false
  private _excludedIpRanges = new AccountNetworkPolicyIngressPublicAccessAllowRulesOriginExcludedIpRangesOutputReference(this, "excluded_ip_ranges");
  public get excludedIpRanges() {
    return this._excludedIpRanges;
  }
  public putExcludedIpRanges(value: AccountNetworkPolicyIngressPublicAccessAllowRulesOriginExcludedIpRanges) {
    this._excludedIpRanges.internalValue = value;
  }
  public resetExcludedIpRanges() {
    this._excludedIpRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedIpRangesInput() {
    return this._excludedIpRanges.internalValue;
  }

  // included_ip_ranges - computed: false, optional: true, required: false
  private _includedIpRanges = new AccountNetworkPolicyIngressPublicAccessAllowRulesOriginIncludedIpRangesOutputReference(this, "included_ip_ranges");
  public get includedIpRanges() {
    return this._includedIpRanges;
  }
  public putIncludedIpRanges(value: AccountNetworkPolicyIngressPublicAccessAllowRulesOriginIncludedIpRanges) {
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
export interface AccountNetworkPolicyIngressPublicAccessAllowRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#authentication AccountNetworkPolicy#authentication}
  */
  readonly authentication?: AccountNetworkPolicyIngressPublicAccessAllowRulesAuthentication;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#destination AccountNetworkPolicy#destination}
  */
  readonly destination?: AccountNetworkPolicyIngressPublicAccessAllowRulesDestination;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#label AccountNetworkPolicy#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#origin AccountNetworkPolicy#origin}
  */
  readonly origin?: AccountNetworkPolicyIngressPublicAccessAllowRulesOrigin;
}

export function accountNetworkPolicyIngressPublicAccessAllowRulesToTerraform(struct?: AccountNetworkPolicyIngressPublicAccessAllowRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: accountNetworkPolicyIngressPublicAccessAllowRulesAuthenticationToTerraform(struct!.authentication),
    destination: accountNetworkPolicyIngressPublicAccessAllowRulesDestinationToTerraform(struct!.destination),
    label: cdktn.stringToTerraform(struct!.label),
    origin: accountNetworkPolicyIngressPublicAccessAllowRulesOriginToTerraform(struct!.origin),
  }
}


export function accountNetworkPolicyIngressPublicAccessAllowRulesToHclTerraform(struct?: AccountNetworkPolicyIngressPublicAccessAllowRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: accountNetworkPolicyIngressPublicAccessAllowRulesAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressPublicAccessAllowRulesAuthentication",
    },
    destination: {
      value: accountNetworkPolicyIngressPublicAccessAllowRulesDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressPublicAccessAllowRulesDestination",
    },
    label: {
      value: cdktn.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin: {
      value: accountNetworkPolicyIngressPublicAccessAllowRulesOriginToHclTerraform(struct!.origin),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressPublicAccessAllowRulesOrigin",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountNetworkPolicyIngressPublicAccessAllowRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AccountNetworkPolicyIngressPublicAccessAllowRules | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressPublicAccessAllowRules | cdktn.IResolvable | undefined) {
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

  // authentication - computed: false, optional: true, required: false
  private _authentication = new AccountNetworkPolicyIngressPublicAccessAllowRulesAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: AccountNetworkPolicyIngressPublicAccessAllowRulesAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // destination - computed: false, optional: true, required: false
  private _destination = new AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: AccountNetworkPolicyIngressPublicAccessAllowRulesDestination) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // label - computed: false, optional: true, required: false
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

  // origin - computed: false, optional: true, required: false
  private _origin = new AccountNetworkPolicyIngressPublicAccessAllowRulesOriginOutputReference(this, "origin");
  public get origin() {
    return this._origin;
  }
  public putOrigin(value: AccountNetworkPolicyIngressPublicAccessAllowRulesOrigin) {
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

export class AccountNetworkPolicyIngressPublicAccessAllowRulesList extends cdktn.ComplexList {
  public internalValue? : AccountNetworkPolicyIngressPublicAccessAllowRules[] | cdktn.IResolvable

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
  public get(index: number): AccountNetworkPolicyIngressPublicAccessAllowRulesOutputReference {
    return new AccountNetworkPolicyIngressPublicAccessAllowRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccountNetworkPolicyIngressPublicAccessDenyRulesAuthenticationIdentities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#principal_id AccountNetworkPolicy#principal_id}
  */
  readonly principalId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#principal_type AccountNetworkPolicy#principal_type}
  */
  readonly principalType?: string;
}

export function accountNetworkPolicyIngressPublicAccessDenyRulesAuthenticationIdentitiesToTerraform(struct?: AccountNetworkPolicyIngressPublicAccessDenyRulesAuthenticationIdentities | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    principal_id: cdktn.numberToTerraform(struct!.principalId),
    principal_type: cdktn.stringToTerraform(struct!.principalType),
  }
}


export function accountNetworkPolicyIngressPublicAccessDenyRulesAuthenticationIdentitiesToHclTerraform(struct?: AccountNetworkPolicyIngressPublicAccessDenyRulesAuthenticationIdentities | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyIngressPublicAccessDenyRulesAuthenticationIdentitiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AccountNetworkPolicyIngressPublicAccessDenyRulesAuthenticationIdentities | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressPublicAccessDenyRulesAuthenticationIdentities | cdktn.IResolvable | undefined) {
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

  // principal_id - computed: false, optional: true, required: false
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

  // principal_type - computed: false, optional: true, required: false
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

export class AccountNetworkPolicyIngressPublicAccessDenyRulesAuthenticationIdentitiesList extends cdktn.ComplexList {
  public internalValue? : AccountNetworkPolicyIngressPublicAccessDenyRulesAuthenticationIdentities[] | cdktn.IResolvable

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
  public get(index: number): AccountNetworkPolicyIngressPublicAccessDenyRulesAuthenticationIdentitiesOutputReference {
    return new AccountNetworkPolicyIngressPublicAccessDenyRulesAuthenticationIdentitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccountNetworkPolicyIngressPublicAccessDenyRulesAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#identities AccountNetworkPolicy#identities}
  */
  readonly identities?: AccountNetworkPolicyIngressPublicAccessDenyRulesAuthenticationIdentities[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#identity_type AccountNetworkPolicy#identity_type}
  */
  readonly identityType?: string;
}

export function accountNetworkPolicyIngressPublicAccessDenyRulesAuthenticationToTerraform(struct?: AccountNetworkPolicyIngressPublicAccessDenyRulesAuthentication | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identities: cdktn.listMapper(accountNetworkPolicyIngressPublicAccessDenyRulesAuthenticationIdentitiesToTerraform, false)(struct!.identities),
    identity_type: cdktn.stringToTerraform(struct!.identityType),
  }
}


export function accountNetworkPolicyIngressPublicAccessDenyRulesAuthenticationToHclTerraform(struct?: AccountNetworkPolicyIngressPublicAccessDenyRulesAuthentication | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identities: {
      value: cdktn.listMapperHcl(accountNetworkPolicyIngressPublicAccessDenyRulesAuthenticationIdentitiesToHclTerraform, false)(struct!.identities),
      isBlock: true,
      type: "list",
      storageClassType: "AccountNetworkPolicyIngressPublicAccessDenyRulesAuthenticationIdentitiesList",
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

export class AccountNetworkPolicyIngressPublicAccessDenyRulesAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressPublicAccessDenyRulesAuthentication | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressPublicAccessDenyRulesAuthentication | cdktn.IResolvable | undefined) {
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

  // identities - computed: false, optional: true, required: false
  private _identities = new AccountNetworkPolicyIngressPublicAccessDenyRulesAuthenticationIdentitiesList(this, "identities", false);
  public get identities() {
    return this._identities;
  }
  public putIdentities(value: AccountNetworkPolicyIngressPublicAccessDenyRulesAuthenticationIdentities[] | cdktn.IResolvable) {
    this._identities.internalValue = value;
  }
  public resetIdentities() {
    this._identities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identitiesInput() {
    return this._identities.internalValue;
  }

  // identity_type - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountApi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#scope_qualifier AccountNetworkPolicy#scope_qualifier}
  */
  readonly scopeQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#scopes AccountNetworkPolicy#scopes}
  */
  readonly scopes?: string[];
}

export function accountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountApiToTerraform(struct?: AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope_qualifier: cdktn.stringToTerraform(struct!.scopeQualifier),
    scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
  }
}


export function accountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountApiToHclTerraform(struct?: AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountApi | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountApiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountApi | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountApi | cdktn.IResolvable | undefined) {
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

  // scope_qualifier - computed: false, optional: true, required: false
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

  // scopes - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountDatabricksOne {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#all_destinations AccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function accountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountDatabricksOneToTerraform(struct?: AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountDatabricksOne | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function accountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountDatabricksOneToHclTerraform(struct?: AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountDatabricksOne | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountDatabricksOneOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountDatabricksOne | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountDatabricksOne | cdktn.IResolvable | undefined) {
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

  // all_destinations - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountUi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#all_destinations AccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function accountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountUiToTerraform(struct?: AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountUi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function accountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountUiToHclTerraform(struct?: AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountUi | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountUiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountUi | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountUi | cdktn.IResolvable | undefined) {
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

  // all_destinations - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAppsRuntime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#all_destinations AccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function accountNetworkPolicyIngressPublicAccessDenyRulesDestinationAppsRuntimeToTerraform(struct?: AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAppsRuntime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function accountNetworkPolicyIngressPublicAccessDenyRulesDestinationAppsRuntimeToHclTerraform(struct?: AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAppsRuntime | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAppsRuntimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAppsRuntime | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAppsRuntime | cdktn.IResolvable | undefined) {
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

  // all_destinations - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationLakebaseRuntime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#all_destinations AccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function accountNetworkPolicyIngressPublicAccessDenyRulesDestinationLakebaseRuntimeToTerraform(struct?: AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationLakebaseRuntime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function accountNetworkPolicyIngressPublicAccessDenyRulesDestinationLakebaseRuntimeToHclTerraform(struct?: AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationLakebaseRuntime | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationLakebaseRuntimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationLakebaseRuntime | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationLakebaseRuntime | cdktn.IResolvable | undefined) {
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

  // all_destinations - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationWorkspaceApi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#scope_qualifier AccountNetworkPolicy#scope_qualifier}
  */
  readonly scopeQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#scopes AccountNetworkPolicy#scopes}
  */
  readonly scopes?: string[];
}

export function accountNetworkPolicyIngressPublicAccessDenyRulesDestinationWorkspaceApiToTerraform(struct?: AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationWorkspaceApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope_qualifier: cdktn.stringToTerraform(struct!.scopeQualifier),
    scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
  }
}


export function accountNetworkPolicyIngressPublicAccessDenyRulesDestinationWorkspaceApiToHclTerraform(struct?: AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationWorkspaceApi | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationWorkspaceApiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationWorkspaceApi | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationWorkspaceApi | cdktn.IResolvable | undefined) {
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

  // scope_qualifier - computed: false, optional: true, required: false
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

  // scopes - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationWorkspaceUi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#all_destinations AccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function accountNetworkPolicyIngressPublicAccessDenyRulesDestinationWorkspaceUiToTerraform(struct?: AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationWorkspaceUi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function accountNetworkPolicyIngressPublicAccessDenyRulesDestinationWorkspaceUiToHclTerraform(struct?: AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationWorkspaceUi | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationWorkspaceUiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationWorkspaceUi | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationWorkspaceUi | cdktn.IResolvable | undefined) {
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

  // all_destinations - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyIngressPublicAccessDenyRulesDestination {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#account_api AccountNetworkPolicy#account_api}
  */
  readonly accountApi?: AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountApi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#account_databricks_one AccountNetworkPolicy#account_databricks_one}
  */
  readonly accountDatabricksOne?: AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountDatabricksOne;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#account_ui AccountNetworkPolicy#account_ui}
  */
  readonly accountUi?: AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountUi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#all_destinations AccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#apps_runtime AccountNetworkPolicy#apps_runtime}
  */
  readonly appsRuntime?: AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAppsRuntime;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#lakebase_runtime AccountNetworkPolicy#lakebase_runtime}
  */
  readonly lakebaseRuntime?: AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationLakebaseRuntime;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#workspace_api AccountNetworkPolicy#workspace_api}
  */
  readonly workspaceApi?: AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationWorkspaceApi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#workspace_ui AccountNetworkPolicy#workspace_ui}
  */
  readonly workspaceUi?: AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationWorkspaceUi;
}

export function accountNetworkPolicyIngressPublicAccessDenyRulesDestinationToTerraform(struct?: AccountNetworkPolicyIngressPublicAccessDenyRulesDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_api: accountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountApiToTerraform(struct!.accountApi),
    account_databricks_one: accountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountDatabricksOneToTerraform(struct!.accountDatabricksOne),
    account_ui: accountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountUiToTerraform(struct!.accountUi),
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
    apps_runtime: accountNetworkPolicyIngressPublicAccessDenyRulesDestinationAppsRuntimeToTerraform(struct!.appsRuntime),
    lakebase_runtime: accountNetworkPolicyIngressPublicAccessDenyRulesDestinationLakebaseRuntimeToTerraform(struct!.lakebaseRuntime),
    workspace_api: accountNetworkPolicyIngressPublicAccessDenyRulesDestinationWorkspaceApiToTerraform(struct!.workspaceApi),
    workspace_ui: accountNetworkPolicyIngressPublicAccessDenyRulesDestinationWorkspaceUiToTerraform(struct!.workspaceUi),
  }
}


export function accountNetworkPolicyIngressPublicAccessDenyRulesDestinationToHclTerraform(struct?: AccountNetworkPolicyIngressPublicAccessDenyRulesDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_api: {
      value: accountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountApiToHclTerraform(struct!.accountApi),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountApi",
    },
    account_databricks_one: {
      value: accountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountDatabricksOneToHclTerraform(struct!.accountDatabricksOne),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountDatabricksOne",
    },
    account_ui: {
      value: accountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountUiToHclTerraform(struct!.accountUi),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountUi",
    },
    all_destinations: {
      value: cdktn.booleanToHclTerraform(struct!.allDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    apps_runtime: {
      value: accountNetworkPolicyIngressPublicAccessDenyRulesDestinationAppsRuntimeToHclTerraform(struct!.appsRuntime),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAppsRuntime",
    },
    lakebase_runtime: {
      value: accountNetworkPolicyIngressPublicAccessDenyRulesDestinationLakebaseRuntimeToHclTerraform(struct!.lakebaseRuntime),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationLakebaseRuntime",
    },
    workspace_api: {
      value: accountNetworkPolicyIngressPublicAccessDenyRulesDestinationWorkspaceApiToHclTerraform(struct!.workspaceApi),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationWorkspaceApi",
    },
    workspace_ui: {
      value: accountNetworkPolicyIngressPublicAccessDenyRulesDestinationWorkspaceUiToHclTerraform(struct!.workspaceUi),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationWorkspaceUi",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressPublicAccessDenyRulesDestination | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressPublicAccessDenyRulesDestination | cdktn.IResolvable | undefined) {
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

  // account_api - computed: false, optional: true, required: false
  private _accountApi = new AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountApiOutputReference(this, "account_api");
  public get accountApi() {
    return this._accountApi;
  }
  public putAccountApi(value: AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountApi) {
    this._accountApi.internalValue = value;
  }
  public resetAccountApi() {
    this._accountApi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountApiInput() {
    return this._accountApi.internalValue;
  }

  // account_databricks_one - computed: false, optional: true, required: false
  private _accountDatabricksOne = new AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountDatabricksOneOutputReference(this, "account_databricks_one");
  public get accountDatabricksOne() {
    return this._accountDatabricksOne;
  }
  public putAccountDatabricksOne(value: AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountDatabricksOne) {
    this._accountDatabricksOne.internalValue = value;
  }
  public resetAccountDatabricksOne() {
    this._accountDatabricksOne.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountDatabricksOneInput() {
    return this._accountDatabricksOne.internalValue;
  }

  // account_ui - computed: false, optional: true, required: false
  private _accountUi = new AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountUiOutputReference(this, "account_ui");
  public get accountUi() {
    return this._accountUi;
  }
  public putAccountUi(value: AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAccountUi) {
    this._accountUi.internalValue = value;
  }
  public resetAccountUi() {
    this._accountUi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountUiInput() {
    return this._accountUi.internalValue;
  }

  // all_destinations - computed: false, optional: true, required: false
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

  // apps_runtime - computed: false, optional: true, required: false
  private _appsRuntime = new AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAppsRuntimeOutputReference(this, "apps_runtime");
  public get appsRuntime() {
    return this._appsRuntime;
  }
  public putAppsRuntime(value: AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationAppsRuntime) {
    this._appsRuntime.internalValue = value;
  }
  public resetAppsRuntime() {
    this._appsRuntime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appsRuntimeInput() {
    return this._appsRuntime.internalValue;
  }

  // lakebase_runtime - computed: false, optional: true, required: false
  private _lakebaseRuntime = new AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationLakebaseRuntimeOutputReference(this, "lakebase_runtime");
  public get lakebaseRuntime() {
    return this._lakebaseRuntime;
  }
  public putLakebaseRuntime(value: AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationLakebaseRuntime) {
    this._lakebaseRuntime.internalValue = value;
  }
  public resetLakebaseRuntime() {
    this._lakebaseRuntime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lakebaseRuntimeInput() {
    return this._lakebaseRuntime.internalValue;
  }

  // workspace_api - computed: false, optional: true, required: false
  private _workspaceApi = new AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationWorkspaceApiOutputReference(this, "workspace_api");
  public get workspaceApi() {
    return this._workspaceApi;
  }
  public putWorkspaceApi(value: AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationWorkspaceApi) {
    this._workspaceApi.internalValue = value;
  }
  public resetWorkspaceApi() {
    this._workspaceApi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceApiInput() {
    return this._workspaceApi.internalValue;
  }

  // workspace_ui - computed: false, optional: true, required: false
  private _workspaceUi = new AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationWorkspaceUiOutputReference(this, "workspace_ui");
  public get workspaceUi() {
    return this._workspaceUi;
  }
  public putWorkspaceUi(value: AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationWorkspaceUi) {
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
export interface AccountNetworkPolicyIngressPublicAccessDenyRulesOriginExcludedIpRanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#ip_ranges AccountNetworkPolicy#ip_ranges}
  */
  readonly ipRanges?: string[];
}

export function accountNetworkPolicyIngressPublicAccessDenyRulesOriginExcludedIpRangesToTerraform(struct?: AccountNetworkPolicyIngressPublicAccessDenyRulesOriginExcludedIpRanges | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_ranges: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.ipRanges),
  }
}


export function accountNetworkPolicyIngressPublicAccessDenyRulesOriginExcludedIpRangesToHclTerraform(struct?: AccountNetworkPolicyIngressPublicAccessDenyRulesOriginExcludedIpRanges | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyIngressPublicAccessDenyRulesOriginExcludedIpRangesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressPublicAccessDenyRulesOriginExcludedIpRanges | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressPublicAccessDenyRulesOriginExcludedIpRanges | cdktn.IResolvable | undefined) {
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

  // ip_ranges - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyIngressPublicAccessDenyRulesOriginIncludedIpRanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#ip_ranges AccountNetworkPolicy#ip_ranges}
  */
  readonly ipRanges?: string[];
}

export function accountNetworkPolicyIngressPublicAccessDenyRulesOriginIncludedIpRangesToTerraform(struct?: AccountNetworkPolicyIngressPublicAccessDenyRulesOriginIncludedIpRanges | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_ranges: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.ipRanges),
  }
}


export function accountNetworkPolicyIngressPublicAccessDenyRulesOriginIncludedIpRangesToHclTerraform(struct?: AccountNetworkPolicyIngressPublicAccessDenyRulesOriginIncludedIpRanges | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyIngressPublicAccessDenyRulesOriginIncludedIpRangesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressPublicAccessDenyRulesOriginIncludedIpRanges | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressPublicAccessDenyRulesOriginIncludedIpRanges | cdktn.IResolvable | undefined) {
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

  // ip_ranges - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyIngressPublicAccessDenyRulesOrigin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#all_ip_ranges AccountNetworkPolicy#all_ip_ranges}
  */
  readonly allIpRanges?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#excluded_ip_ranges AccountNetworkPolicy#excluded_ip_ranges}
  */
  readonly excludedIpRanges?: AccountNetworkPolicyIngressPublicAccessDenyRulesOriginExcludedIpRanges;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#included_ip_ranges AccountNetworkPolicy#included_ip_ranges}
  */
  readonly includedIpRanges?: AccountNetworkPolicyIngressPublicAccessDenyRulesOriginIncludedIpRanges;
}

export function accountNetworkPolicyIngressPublicAccessDenyRulesOriginToTerraform(struct?: AccountNetworkPolicyIngressPublicAccessDenyRulesOrigin | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_ip_ranges: cdktn.booleanToTerraform(struct!.allIpRanges),
    excluded_ip_ranges: accountNetworkPolicyIngressPublicAccessDenyRulesOriginExcludedIpRangesToTerraform(struct!.excludedIpRanges),
    included_ip_ranges: accountNetworkPolicyIngressPublicAccessDenyRulesOriginIncludedIpRangesToTerraform(struct!.includedIpRanges),
  }
}


export function accountNetworkPolicyIngressPublicAccessDenyRulesOriginToHclTerraform(struct?: AccountNetworkPolicyIngressPublicAccessDenyRulesOrigin | cdktn.IResolvable): any {
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
      value: accountNetworkPolicyIngressPublicAccessDenyRulesOriginExcludedIpRangesToHclTerraform(struct!.excludedIpRanges),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressPublicAccessDenyRulesOriginExcludedIpRanges",
    },
    included_ip_ranges: {
      value: accountNetworkPolicyIngressPublicAccessDenyRulesOriginIncludedIpRangesToHclTerraform(struct!.includedIpRanges),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressPublicAccessDenyRulesOriginIncludedIpRanges",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountNetworkPolicyIngressPublicAccessDenyRulesOriginOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressPublicAccessDenyRulesOrigin | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressPublicAccessDenyRulesOrigin | cdktn.IResolvable | undefined) {
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

  // all_ip_ranges - computed: false, optional: true, required: false
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

  // excluded_ip_ranges - computed: false, optional: true, required: false
  private _excludedIpRanges = new AccountNetworkPolicyIngressPublicAccessDenyRulesOriginExcludedIpRangesOutputReference(this, "excluded_ip_ranges");
  public get excludedIpRanges() {
    return this._excludedIpRanges;
  }
  public putExcludedIpRanges(value: AccountNetworkPolicyIngressPublicAccessDenyRulesOriginExcludedIpRanges) {
    this._excludedIpRanges.internalValue = value;
  }
  public resetExcludedIpRanges() {
    this._excludedIpRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedIpRangesInput() {
    return this._excludedIpRanges.internalValue;
  }

  // included_ip_ranges - computed: false, optional: true, required: false
  private _includedIpRanges = new AccountNetworkPolicyIngressPublicAccessDenyRulesOriginIncludedIpRangesOutputReference(this, "included_ip_ranges");
  public get includedIpRanges() {
    return this._includedIpRanges;
  }
  public putIncludedIpRanges(value: AccountNetworkPolicyIngressPublicAccessDenyRulesOriginIncludedIpRanges) {
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
export interface AccountNetworkPolicyIngressPublicAccessDenyRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#authentication AccountNetworkPolicy#authentication}
  */
  readonly authentication?: AccountNetworkPolicyIngressPublicAccessDenyRulesAuthentication;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#destination AccountNetworkPolicy#destination}
  */
  readonly destination?: AccountNetworkPolicyIngressPublicAccessDenyRulesDestination;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#label AccountNetworkPolicy#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#origin AccountNetworkPolicy#origin}
  */
  readonly origin?: AccountNetworkPolicyIngressPublicAccessDenyRulesOrigin;
}

export function accountNetworkPolicyIngressPublicAccessDenyRulesToTerraform(struct?: AccountNetworkPolicyIngressPublicAccessDenyRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: accountNetworkPolicyIngressPublicAccessDenyRulesAuthenticationToTerraform(struct!.authentication),
    destination: accountNetworkPolicyIngressPublicAccessDenyRulesDestinationToTerraform(struct!.destination),
    label: cdktn.stringToTerraform(struct!.label),
    origin: accountNetworkPolicyIngressPublicAccessDenyRulesOriginToTerraform(struct!.origin),
  }
}


export function accountNetworkPolicyIngressPublicAccessDenyRulesToHclTerraform(struct?: AccountNetworkPolicyIngressPublicAccessDenyRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: accountNetworkPolicyIngressPublicAccessDenyRulesAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressPublicAccessDenyRulesAuthentication",
    },
    destination: {
      value: accountNetworkPolicyIngressPublicAccessDenyRulesDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressPublicAccessDenyRulesDestination",
    },
    label: {
      value: cdktn.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin: {
      value: accountNetworkPolicyIngressPublicAccessDenyRulesOriginToHclTerraform(struct!.origin),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressPublicAccessDenyRulesOrigin",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountNetworkPolicyIngressPublicAccessDenyRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AccountNetworkPolicyIngressPublicAccessDenyRules | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressPublicAccessDenyRules | cdktn.IResolvable | undefined) {
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

  // authentication - computed: false, optional: true, required: false
  private _authentication = new AccountNetworkPolicyIngressPublicAccessDenyRulesAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: AccountNetworkPolicyIngressPublicAccessDenyRulesAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // destination - computed: false, optional: true, required: false
  private _destination = new AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: AccountNetworkPolicyIngressPublicAccessDenyRulesDestination) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // label - computed: false, optional: true, required: false
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

  // origin - computed: false, optional: true, required: false
  private _origin = new AccountNetworkPolicyIngressPublicAccessDenyRulesOriginOutputReference(this, "origin");
  public get origin() {
    return this._origin;
  }
  public putOrigin(value: AccountNetworkPolicyIngressPublicAccessDenyRulesOrigin) {
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

export class AccountNetworkPolicyIngressPublicAccessDenyRulesList extends cdktn.ComplexList {
  public internalValue? : AccountNetworkPolicyIngressPublicAccessDenyRules[] | cdktn.IResolvable

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
  public get(index: number): AccountNetworkPolicyIngressPublicAccessDenyRulesOutputReference {
    return new AccountNetworkPolicyIngressPublicAccessDenyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccountNetworkPolicyIngressPublicAccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#allow_rules AccountNetworkPolicy#allow_rules}
  */
  readonly allowRules?: AccountNetworkPolicyIngressPublicAccessAllowRules[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#deny_rules AccountNetworkPolicy#deny_rules}
  */
  readonly denyRules?: AccountNetworkPolicyIngressPublicAccessDenyRules[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#restriction_mode AccountNetworkPolicy#restriction_mode}
  */
  readonly restrictionMode: string;
}

export function accountNetworkPolicyIngressPublicAccessToTerraform(struct?: AccountNetworkPolicyIngressPublicAccess | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_rules: cdktn.listMapper(accountNetworkPolicyIngressPublicAccessAllowRulesToTerraform, false)(struct!.allowRules),
    deny_rules: cdktn.listMapper(accountNetworkPolicyIngressPublicAccessDenyRulesToTerraform, false)(struct!.denyRules),
    restriction_mode: cdktn.stringToTerraform(struct!.restrictionMode),
  }
}


export function accountNetworkPolicyIngressPublicAccessToHclTerraform(struct?: AccountNetworkPolicyIngressPublicAccess | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_rules: {
      value: cdktn.listMapperHcl(accountNetworkPolicyIngressPublicAccessAllowRulesToHclTerraform, false)(struct!.allowRules),
      isBlock: true,
      type: "list",
      storageClassType: "AccountNetworkPolicyIngressPublicAccessAllowRulesList",
    },
    deny_rules: {
      value: cdktn.listMapperHcl(accountNetworkPolicyIngressPublicAccessDenyRulesToHclTerraform, false)(struct!.denyRules),
      isBlock: true,
      type: "list",
      storageClassType: "AccountNetworkPolicyIngressPublicAccessDenyRulesList",
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

export class AccountNetworkPolicyIngressPublicAccessOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressPublicAccess | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressPublicAccess | cdktn.IResolvable | undefined) {
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

  // allow_rules - computed: false, optional: true, required: false
  private _allowRules = new AccountNetworkPolicyIngressPublicAccessAllowRulesList(this, "allow_rules", false);
  public get allowRules() {
    return this._allowRules;
  }
  public putAllowRules(value: AccountNetworkPolicyIngressPublicAccessAllowRules[] | cdktn.IResolvable) {
    this._allowRules.internalValue = value;
  }
  public resetAllowRules() {
    this._allowRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRulesInput() {
    return this._allowRules.internalValue;
  }

  // deny_rules - computed: false, optional: true, required: false
  private _denyRules = new AccountNetworkPolicyIngressPublicAccessDenyRulesList(this, "deny_rules", false);
  public get denyRules() {
    return this._denyRules;
  }
  public putDenyRules(value: AccountNetworkPolicyIngressPublicAccessDenyRules[] | cdktn.IResolvable) {
    this._denyRules.internalValue = value;
  }
  public resetDenyRules() {
    this._denyRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyRulesInput() {
    return this._denyRules.internalValue;
  }

  // restriction_mode - computed: false, optional: false, required: true
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
export interface AccountNetworkPolicyIngress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#private_access AccountNetworkPolicy#private_access}
  */
  readonly privateAccess?: AccountNetworkPolicyIngressPrivateAccess;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#public_access AccountNetworkPolicy#public_access}
  */
  readonly publicAccess?: AccountNetworkPolicyIngressPublicAccess;
}

export function accountNetworkPolicyIngressToTerraform(struct?: AccountNetworkPolicyIngress | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    private_access: accountNetworkPolicyIngressPrivateAccessToTerraform(struct!.privateAccess),
    public_access: accountNetworkPolicyIngressPublicAccessToTerraform(struct!.publicAccess),
  }
}


export function accountNetworkPolicyIngressToHclTerraform(struct?: AccountNetworkPolicyIngress | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    private_access: {
      value: accountNetworkPolicyIngressPrivateAccessToHclTerraform(struct!.privateAccess),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressPrivateAccess",
    },
    public_access: {
      value: accountNetworkPolicyIngressPublicAccessToHclTerraform(struct!.publicAccess),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressPublicAccess",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountNetworkPolicyIngressOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngress | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: AccountNetworkPolicyIngress | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._privateAccess.internalValue = undefined;
      this._publicAccess.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._privateAccess.internalValue = value.privateAccess;
      this._publicAccess.internalValue = value.publicAccess;
    }
  }

  // private_access - computed: false, optional: true, required: false
  private _privateAccess = new AccountNetworkPolicyIngressPrivateAccessOutputReference(this, "private_access");
  public get privateAccess() {
    return this._privateAccess;
  }
  public putPrivateAccess(value: AccountNetworkPolicyIngressPrivateAccess) {
    this._privateAccess.internalValue = value;
  }
  public resetPrivateAccess() {
    this._privateAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateAccessInput() {
    return this._privateAccess.internalValue;
  }

  // public_access - computed: false, optional: true, required: false
  private _publicAccess = new AccountNetworkPolicyIngressPublicAccessOutputReference(this, "public_access");
  public get publicAccess() {
    return this._publicAccess;
  }
  public putPublicAccess(value: AccountNetworkPolicyIngressPublicAccess) {
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
export interface AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesAuthenticationIdentities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#principal_id AccountNetworkPolicy#principal_id}
  */
  readonly principalId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#principal_type AccountNetworkPolicy#principal_type}
  */
  readonly principalType?: string;
}

export function accountNetworkPolicyIngressDryRunPrivateAccessAllowRulesAuthenticationIdentitiesToTerraform(struct?: AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesAuthenticationIdentities | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    principal_id: cdktn.numberToTerraform(struct!.principalId),
    principal_type: cdktn.stringToTerraform(struct!.principalType),
  }
}


export function accountNetworkPolicyIngressDryRunPrivateAccessAllowRulesAuthenticationIdentitiesToHclTerraform(struct?: AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesAuthenticationIdentities | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesAuthenticationIdentitiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesAuthenticationIdentities | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesAuthenticationIdentities | cdktn.IResolvable | undefined) {
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

  // principal_id - computed: false, optional: true, required: false
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

  // principal_type - computed: false, optional: true, required: false
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

export class AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesAuthenticationIdentitiesList extends cdktn.ComplexList {
  public internalValue? : AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesAuthenticationIdentities[] | cdktn.IResolvable

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
  public get(index: number): AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesAuthenticationIdentitiesOutputReference {
    return new AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesAuthenticationIdentitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#identities AccountNetworkPolicy#identities}
  */
  readonly identities?: AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesAuthenticationIdentities[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#identity_type AccountNetworkPolicy#identity_type}
  */
  readonly identityType?: string;
}

export function accountNetworkPolicyIngressDryRunPrivateAccessAllowRulesAuthenticationToTerraform(struct?: AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesAuthentication | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identities: cdktn.listMapper(accountNetworkPolicyIngressDryRunPrivateAccessAllowRulesAuthenticationIdentitiesToTerraform, false)(struct!.identities),
    identity_type: cdktn.stringToTerraform(struct!.identityType),
  }
}


export function accountNetworkPolicyIngressDryRunPrivateAccessAllowRulesAuthenticationToHclTerraform(struct?: AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesAuthentication | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identities: {
      value: cdktn.listMapperHcl(accountNetworkPolicyIngressDryRunPrivateAccessAllowRulesAuthenticationIdentitiesToHclTerraform, false)(struct!.identities),
      isBlock: true,
      type: "list",
      storageClassType: "AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesAuthenticationIdentitiesList",
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

export class AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesAuthentication | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesAuthentication | cdktn.IResolvable | undefined) {
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

  // identities - computed: false, optional: true, required: false
  private _identities = new AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesAuthenticationIdentitiesList(this, "identities", false);
  public get identities() {
    return this._identities;
  }
  public putIdentities(value: AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesAuthenticationIdentities[] | cdktn.IResolvable) {
    this._identities.internalValue = value;
  }
  public resetIdentities() {
    this._identities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identitiesInput() {
    return this._identities.internalValue;
  }

  // identity_type - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountApi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#scope_qualifier AccountNetworkPolicy#scope_qualifier}
  */
  readonly scopeQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#scopes AccountNetworkPolicy#scopes}
  */
  readonly scopes?: string[];
}

export function accountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountApiToTerraform(struct?: AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope_qualifier: cdktn.stringToTerraform(struct!.scopeQualifier),
    scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
  }
}


export function accountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountApiToHclTerraform(struct?: AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountApi | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountApiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountApi | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountApi | cdktn.IResolvable | undefined) {
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

  // scope_qualifier - computed: false, optional: true, required: false
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

  // scopes - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountDatabricksOne {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#all_destinations AccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function accountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountDatabricksOneToTerraform(struct?: AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountDatabricksOne | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function accountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountDatabricksOneToHclTerraform(struct?: AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountDatabricksOne | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountDatabricksOneOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountDatabricksOne | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountDatabricksOne | cdktn.IResolvable | undefined) {
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

  // all_destinations - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountUi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#all_destinations AccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function accountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountUiToTerraform(struct?: AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountUi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function accountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountUiToHclTerraform(struct?: AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountUi | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountUiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountUi | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountUi | cdktn.IResolvable | undefined) {
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

  // all_destinations - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAppsRuntime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#all_destinations AccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function accountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAppsRuntimeToTerraform(struct?: AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAppsRuntime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function accountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAppsRuntimeToHclTerraform(struct?: AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAppsRuntime | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAppsRuntimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAppsRuntime | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAppsRuntime | cdktn.IResolvable | undefined) {
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

  // all_destinations - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationLakebaseRuntime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#all_destinations AccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function accountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationLakebaseRuntimeToTerraform(struct?: AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationLakebaseRuntime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function accountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationLakebaseRuntimeToHclTerraform(struct?: AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationLakebaseRuntime | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationLakebaseRuntimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationLakebaseRuntime | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationLakebaseRuntime | cdktn.IResolvable | undefined) {
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

  // all_destinations - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceApi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#scope_qualifier AccountNetworkPolicy#scope_qualifier}
  */
  readonly scopeQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#scopes AccountNetworkPolicy#scopes}
  */
  readonly scopes?: string[];
}

export function accountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceApiToTerraform(struct?: AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope_qualifier: cdktn.stringToTerraform(struct!.scopeQualifier),
    scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
  }
}


export function accountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceApiToHclTerraform(struct?: AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceApi | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceApiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceApi | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceApi | cdktn.IResolvable | undefined) {
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

  // scope_qualifier - computed: false, optional: true, required: false
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

  // scopes - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceUi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#all_destinations AccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function accountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceUiToTerraform(struct?: AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceUi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function accountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceUiToHclTerraform(struct?: AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceUi | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceUiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceUi | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceUi | cdktn.IResolvable | undefined) {
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

  // all_destinations - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestination {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#account_api AccountNetworkPolicy#account_api}
  */
  readonly accountApi?: AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountApi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#account_databricks_one AccountNetworkPolicy#account_databricks_one}
  */
  readonly accountDatabricksOne?: AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountDatabricksOne;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#account_ui AccountNetworkPolicy#account_ui}
  */
  readonly accountUi?: AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountUi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#all_destinations AccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#apps_runtime AccountNetworkPolicy#apps_runtime}
  */
  readonly appsRuntime?: AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAppsRuntime;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#lakebase_runtime AccountNetworkPolicy#lakebase_runtime}
  */
  readonly lakebaseRuntime?: AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationLakebaseRuntime;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#workspace_api AccountNetworkPolicy#workspace_api}
  */
  readonly workspaceApi?: AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceApi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#workspace_ui AccountNetworkPolicy#workspace_ui}
  */
  readonly workspaceUi?: AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceUi;
}

export function accountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationToTerraform(struct?: AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_api: accountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountApiToTerraform(struct!.accountApi),
    account_databricks_one: accountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountDatabricksOneToTerraform(struct!.accountDatabricksOne),
    account_ui: accountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountUiToTerraform(struct!.accountUi),
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
    apps_runtime: accountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAppsRuntimeToTerraform(struct!.appsRuntime),
    lakebase_runtime: accountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationLakebaseRuntimeToTerraform(struct!.lakebaseRuntime),
    workspace_api: accountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceApiToTerraform(struct!.workspaceApi),
    workspace_ui: accountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceUiToTerraform(struct!.workspaceUi),
  }
}


export function accountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationToHclTerraform(struct?: AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_api: {
      value: accountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountApiToHclTerraform(struct!.accountApi),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountApi",
    },
    account_databricks_one: {
      value: accountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountDatabricksOneToHclTerraform(struct!.accountDatabricksOne),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountDatabricksOne",
    },
    account_ui: {
      value: accountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountUiToHclTerraform(struct!.accountUi),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountUi",
    },
    all_destinations: {
      value: cdktn.booleanToHclTerraform(struct!.allDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    apps_runtime: {
      value: accountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAppsRuntimeToHclTerraform(struct!.appsRuntime),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAppsRuntime",
    },
    lakebase_runtime: {
      value: accountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationLakebaseRuntimeToHclTerraform(struct!.lakebaseRuntime),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationLakebaseRuntime",
    },
    workspace_api: {
      value: accountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceApiToHclTerraform(struct!.workspaceApi),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceApi",
    },
    workspace_ui: {
      value: accountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceUiToHclTerraform(struct!.workspaceUi),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceUi",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestination | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestination | cdktn.IResolvable | undefined) {
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

  // account_api - computed: false, optional: true, required: false
  private _accountApi = new AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountApiOutputReference(this, "account_api");
  public get accountApi() {
    return this._accountApi;
  }
  public putAccountApi(value: AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountApi) {
    this._accountApi.internalValue = value;
  }
  public resetAccountApi() {
    this._accountApi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountApiInput() {
    return this._accountApi.internalValue;
  }

  // account_databricks_one - computed: false, optional: true, required: false
  private _accountDatabricksOne = new AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountDatabricksOneOutputReference(this, "account_databricks_one");
  public get accountDatabricksOne() {
    return this._accountDatabricksOne;
  }
  public putAccountDatabricksOne(value: AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountDatabricksOne) {
    this._accountDatabricksOne.internalValue = value;
  }
  public resetAccountDatabricksOne() {
    this._accountDatabricksOne.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountDatabricksOneInput() {
    return this._accountDatabricksOne.internalValue;
  }

  // account_ui - computed: false, optional: true, required: false
  private _accountUi = new AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountUiOutputReference(this, "account_ui");
  public get accountUi() {
    return this._accountUi;
  }
  public putAccountUi(value: AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAccountUi) {
    this._accountUi.internalValue = value;
  }
  public resetAccountUi() {
    this._accountUi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountUiInput() {
    return this._accountUi.internalValue;
  }

  // all_destinations - computed: false, optional: true, required: false
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

  // apps_runtime - computed: false, optional: true, required: false
  private _appsRuntime = new AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAppsRuntimeOutputReference(this, "apps_runtime");
  public get appsRuntime() {
    return this._appsRuntime;
  }
  public putAppsRuntime(value: AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationAppsRuntime) {
    this._appsRuntime.internalValue = value;
  }
  public resetAppsRuntime() {
    this._appsRuntime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appsRuntimeInput() {
    return this._appsRuntime.internalValue;
  }

  // lakebase_runtime - computed: false, optional: true, required: false
  private _lakebaseRuntime = new AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationLakebaseRuntimeOutputReference(this, "lakebase_runtime");
  public get lakebaseRuntime() {
    return this._lakebaseRuntime;
  }
  public putLakebaseRuntime(value: AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationLakebaseRuntime) {
    this._lakebaseRuntime.internalValue = value;
  }
  public resetLakebaseRuntime() {
    this._lakebaseRuntime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lakebaseRuntimeInput() {
    return this._lakebaseRuntime.internalValue;
  }

  // workspace_api - computed: false, optional: true, required: false
  private _workspaceApi = new AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceApiOutputReference(this, "workspace_api");
  public get workspaceApi() {
    return this._workspaceApi;
  }
  public putWorkspaceApi(value: AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceApi) {
    this._workspaceApi.internalValue = value;
  }
  public resetWorkspaceApi() {
    this._workspaceApi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceApiInput() {
    return this._workspaceApi.internalValue;
  }

  // workspace_ui - computed: false, optional: true, required: false
  private _workspaceUi = new AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceUiOutputReference(this, "workspace_ui");
  public get workspaceUi() {
    return this._workspaceUi;
  }
  public putWorkspaceUi(value: AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationWorkspaceUi) {
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
export interface AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesOriginEndpoints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#endpoint_ids AccountNetworkPolicy#endpoint_ids}
  */
  readonly endpointIds?: string[];
}

export function accountNetworkPolicyIngressDryRunPrivateAccessAllowRulesOriginEndpointsToTerraform(struct?: AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesOriginEndpoints | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.endpointIds),
  }
}


export function accountNetworkPolicyIngressDryRunPrivateAccessAllowRulesOriginEndpointsToHclTerraform(struct?: AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesOriginEndpoints | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesOriginEndpointsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesOriginEndpoints | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesOriginEndpoints | cdktn.IResolvable | undefined) {
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

  // endpoint_ids - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesOrigin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#all_private_access AccountNetworkPolicy#all_private_access}
  */
  readonly allPrivateAccess?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#all_registered_endpoints AccountNetworkPolicy#all_registered_endpoints}
  */
  readonly allRegisteredEndpoints?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#azure_workspace_private_link AccountNetworkPolicy#azure_workspace_private_link}
  */
  readonly azureWorkspacePrivateLink?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#endpoints AccountNetworkPolicy#endpoints}
  */
  readonly endpoints?: AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesOriginEndpoints;
}

export function accountNetworkPolicyIngressDryRunPrivateAccessAllowRulesOriginToTerraform(struct?: AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesOrigin | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_private_access: cdktn.booleanToTerraform(struct!.allPrivateAccess),
    all_registered_endpoints: cdktn.booleanToTerraform(struct!.allRegisteredEndpoints),
    azure_workspace_private_link: cdktn.booleanToTerraform(struct!.azureWorkspacePrivateLink),
    endpoints: accountNetworkPolicyIngressDryRunPrivateAccessAllowRulesOriginEndpointsToTerraform(struct!.endpoints),
  }
}


export function accountNetworkPolicyIngressDryRunPrivateAccessAllowRulesOriginToHclTerraform(struct?: AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesOrigin | cdktn.IResolvable): any {
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
      value: accountNetworkPolicyIngressDryRunPrivateAccessAllowRulesOriginEndpointsToHclTerraform(struct!.endpoints),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesOriginEndpoints",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesOriginOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesOrigin | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesOrigin | cdktn.IResolvable | undefined) {
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

  // all_private_access - computed: false, optional: true, required: false
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

  // all_registered_endpoints - computed: false, optional: true, required: false
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

  // azure_workspace_private_link - computed: false, optional: true, required: false
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

  // endpoints - computed: false, optional: true, required: false
  private _endpoints = new AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesOriginEndpointsOutputReference(this, "endpoints");
  public get endpoints() {
    return this._endpoints;
  }
  public putEndpoints(value: AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesOriginEndpoints) {
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
export interface AccountNetworkPolicyIngressDryRunPrivateAccessAllowRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#authentication AccountNetworkPolicy#authentication}
  */
  readonly authentication?: AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesAuthentication;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#destination AccountNetworkPolicy#destination}
  */
  readonly destination?: AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestination;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#label AccountNetworkPolicy#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#origin AccountNetworkPolicy#origin}
  */
  readonly origin?: AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesOrigin;
}

export function accountNetworkPolicyIngressDryRunPrivateAccessAllowRulesToTerraform(struct?: AccountNetworkPolicyIngressDryRunPrivateAccessAllowRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: accountNetworkPolicyIngressDryRunPrivateAccessAllowRulesAuthenticationToTerraform(struct!.authentication),
    destination: accountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationToTerraform(struct!.destination),
    label: cdktn.stringToTerraform(struct!.label),
    origin: accountNetworkPolicyIngressDryRunPrivateAccessAllowRulesOriginToTerraform(struct!.origin),
  }
}


export function accountNetworkPolicyIngressDryRunPrivateAccessAllowRulesToHclTerraform(struct?: AccountNetworkPolicyIngressDryRunPrivateAccessAllowRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: accountNetworkPolicyIngressDryRunPrivateAccessAllowRulesAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesAuthentication",
    },
    destination: {
      value: accountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestination",
    },
    label: {
      value: cdktn.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin: {
      value: accountNetworkPolicyIngressDryRunPrivateAccessAllowRulesOriginToHclTerraform(struct!.origin),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesOrigin",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AccountNetworkPolicyIngressDryRunPrivateAccessAllowRules | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressDryRunPrivateAccessAllowRules | cdktn.IResolvable | undefined) {
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

  // authentication - computed: false, optional: true, required: false
  private _authentication = new AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // destination - computed: false, optional: true, required: false
  private _destination = new AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesDestination) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // label - computed: false, optional: true, required: false
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

  // origin - computed: false, optional: true, required: false
  private _origin = new AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesOriginOutputReference(this, "origin");
  public get origin() {
    return this._origin;
  }
  public putOrigin(value: AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesOrigin) {
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

export class AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesList extends cdktn.ComplexList {
  public internalValue? : AccountNetworkPolicyIngressDryRunPrivateAccessAllowRules[] | cdktn.IResolvable

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
  public get(index: number): AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesOutputReference {
    return new AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesAuthenticationIdentities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#principal_id AccountNetworkPolicy#principal_id}
  */
  readonly principalId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#principal_type AccountNetworkPolicy#principal_type}
  */
  readonly principalType?: string;
}

export function accountNetworkPolicyIngressDryRunPrivateAccessDenyRulesAuthenticationIdentitiesToTerraform(struct?: AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesAuthenticationIdentities | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    principal_id: cdktn.numberToTerraform(struct!.principalId),
    principal_type: cdktn.stringToTerraform(struct!.principalType),
  }
}


export function accountNetworkPolicyIngressDryRunPrivateAccessDenyRulesAuthenticationIdentitiesToHclTerraform(struct?: AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesAuthenticationIdentities | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesAuthenticationIdentitiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesAuthenticationIdentities | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesAuthenticationIdentities | cdktn.IResolvable | undefined) {
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

  // principal_id - computed: false, optional: true, required: false
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

  // principal_type - computed: false, optional: true, required: false
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

export class AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesAuthenticationIdentitiesList extends cdktn.ComplexList {
  public internalValue? : AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesAuthenticationIdentities[] | cdktn.IResolvable

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
  public get(index: number): AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesAuthenticationIdentitiesOutputReference {
    return new AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesAuthenticationIdentitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#identities AccountNetworkPolicy#identities}
  */
  readonly identities?: AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesAuthenticationIdentities[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#identity_type AccountNetworkPolicy#identity_type}
  */
  readonly identityType?: string;
}

export function accountNetworkPolicyIngressDryRunPrivateAccessDenyRulesAuthenticationToTerraform(struct?: AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesAuthentication | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identities: cdktn.listMapper(accountNetworkPolicyIngressDryRunPrivateAccessDenyRulesAuthenticationIdentitiesToTerraform, false)(struct!.identities),
    identity_type: cdktn.stringToTerraform(struct!.identityType),
  }
}


export function accountNetworkPolicyIngressDryRunPrivateAccessDenyRulesAuthenticationToHclTerraform(struct?: AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesAuthentication | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identities: {
      value: cdktn.listMapperHcl(accountNetworkPolicyIngressDryRunPrivateAccessDenyRulesAuthenticationIdentitiesToHclTerraform, false)(struct!.identities),
      isBlock: true,
      type: "list",
      storageClassType: "AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesAuthenticationIdentitiesList",
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

export class AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesAuthentication | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesAuthentication | cdktn.IResolvable | undefined) {
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

  // identities - computed: false, optional: true, required: false
  private _identities = new AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesAuthenticationIdentitiesList(this, "identities", false);
  public get identities() {
    return this._identities;
  }
  public putIdentities(value: AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesAuthenticationIdentities[] | cdktn.IResolvable) {
    this._identities.internalValue = value;
  }
  public resetIdentities() {
    this._identities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identitiesInput() {
    return this._identities.internalValue;
  }

  // identity_type - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountApi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#scope_qualifier AccountNetworkPolicy#scope_qualifier}
  */
  readonly scopeQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#scopes AccountNetworkPolicy#scopes}
  */
  readonly scopes?: string[];
}

export function accountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountApiToTerraform(struct?: AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope_qualifier: cdktn.stringToTerraform(struct!.scopeQualifier),
    scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
  }
}


export function accountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountApiToHclTerraform(struct?: AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountApi | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountApiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountApi | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountApi | cdktn.IResolvable | undefined) {
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

  // scope_qualifier - computed: false, optional: true, required: false
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

  // scopes - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountDatabricksOne {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#all_destinations AccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function accountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountDatabricksOneToTerraform(struct?: AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountDatabricksOne | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function accountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountDatabricksOneToHclTerraform(struct?: AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountDatabricksOne | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountDatabricksOneOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountDatabricksOne | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountDatabricksOne | cdktn.IResolvable | undefined) {
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

  // all_destinations - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountUi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#all_destinations AccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function accountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountUiToTerraform(struct?: AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountUi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function accountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountUiToHclTerraform(struct?: AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountUi | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountUiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountUi | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountUi | cdktn.IResolvable | undefined) {
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

  // all_destinations - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAppsRuntime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#all_destinations AccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function accountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAppsRuntimeToTerraform(struct?: AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAppsRuntime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function accountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAppsRuntimeToHclTerraform(struct?: AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAppsRuntime | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAppsRuntimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAppsRuntime | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAppsRuntime | cdktn.IResolvable | undefined) {
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

  // all_destinations - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationLakebaseRuntime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#all_destinations AccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function accountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationLakebaseRuntimeToTerraform(struct?: AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationLakebaseRuntime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function accountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationLakebaseRuntimeToHclTerraform(struct?: AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationLakebaseRuntime | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationLakebaseRuntimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationLakebaseRuntime | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationLakebaseRuntime | cdktn.IResolvable | undefined) {
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

  // all_destinations - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceApi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#scope_qualifier AccountNetworkPolicy#scope_qualifier}
  */
  readonly scopeQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#scopes AccountNetworkPolicy#scopes}
  */
  readonly scopes?: string[];
}

export function accountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceApiToTerraform(struct?: AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope_qualifier: cdktn.stringToTerraform(struct!.scopeQualifier),
    scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
  }
}


export function accountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceApiToHclTerraform(struct?: AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceApi | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceApiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceApi | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceApi | cdktn.IResolvable | undefined) {
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

  // scope_qualifier - computed: false, optional: true, required: false
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

  // scopes - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceUi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#all_destinations AccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function accountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceUiToTerraform(struct?: AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceUi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function accountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceUiToHclTerraform(struct?: AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceUi | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceUiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceUi | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceUi | cdktn.IResolvable | undefined) {
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

  // all_destinations - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestination {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#account_api AccountNetworkPolicy#account_api}
  */
  readonly accountApi?: AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountApi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#account_databricks_one AccountNetworkPolicy#account_databricks_one}
  */
  readonly accountDatabricksOne?: AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountDatabricksOne;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#account_ui AccountNetworkPolicy#account_ui}
  */
  readonly accountUi?: AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountUi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#all_destinations AccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#apps_runtime AccountNetworkPolicy#apps_runtime}
  */
  readonly appsRuntime?: AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAppsRuntime;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#lakebase_runtime AccountNetworkPolicy#lakebase_runtime}
  */
  readonly lakebaseRuntime?: AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationLakebaseRuntime;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#workspace_api AccountNetworkPolicy#workspace_api}
  */
  readonly workspaceApi?: AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceApi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#workspace_ui AccountNetworkPolicy#workspace_ui}
  */
  readonly workspaceUi?: AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceUi;
}

export function accountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationToTerraform(struct?: AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_api: accountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountApiToTerraform(struct!.accountApi),
    account_databricks_one: accountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountDatabricksOneToTerraform(struct!.accountDatabricksOne),
    account_ui: accountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountUiToTerraform(struct!.accountUi),
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
    apps_runtime: accountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAppsRuntimeToTerraform(struct!.appsRuntime),
    lakebase_runtime: accountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationLakebaseRuntimeToTerraform(struct!.lakebaseRuntime),
    workspace_api: accountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceApiToTerraform(struct!.workspaceApi),
    workspace_ui: accountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceUiToTerraform(struct!.workspaceUi),
  }
}


export function accountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationToHclTerraform(struct?: AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_api: {
      value: accountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountApiToHclTerraform(struct!.accountApi),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountApi",
    },
    account_databricks_one: {
      value: accountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountDatabricksOneToHclTerraform(struct!.accountDatabricksOne),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountDatabricksOne",
    },
    account_ui: {
      value: accountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountUiToHclTerraform(struct!.accountUi),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountUi",
    },
    all_destinations: {
      value: cdktn.booleanToHclTerraform(struct!.allDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    apps_runtime: {
      value: accountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAppsRuntimeToHclTerraform(struct!.appsRuntime),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAppsRuntime",
    },
    lakebase_runtime: {
      value: accountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationLakebaseRuntimeToHclTerraform(struct!.lakebaseRuntime),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationLakebaseRuntime",
    },
    workspace_api: {
      value: accountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceApiToHclTerraform(struct!.workspaceApi),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceApi",
    },
    workspace_ui: {
      value: accountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceUiToHclTerraform(struct!.workspaceUi),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceUi",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestination | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestination | cdktn.IResolvable | undefined) {
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

  // account_api - computed: false, optional: true, required: false
  private _accountApi = new AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountApiOutputReference(this, "account_api");
  public get accountApi() {
    return this._accountApi;
  }
  public putAccountApi(value: AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountApi) {
    this._accountApi.internalValue = value;
  }
  public resetAccountApi() {
    this._accountApi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountApiInput() {
    return this._accountApi.internalValue;
  }

  // account_databricks_one - computed: false, optional: true, required: false
  private _accountDatabricksOne = new AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountDatabricksOneOutputReference(this, "account_databricks_one");
  public get accountDatabricksOne() {
    return this._accountDatabricksOne;
  }
  public putAccountDatabricksOne(value: AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountDatabricksOne) {
    this._accountDatabricksOne.internalValue = value;
  }
  public resetAccountDatabricksOne() {
    this._accountDatabricksOne.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountDatabricksOneInput() {
    return this._accountDatabricksOne.internalValue;
  }

  // account_ui - computed: false, optional: true, required: false
  private _accountUi = new AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountUiOutputReference(this, "account_ui");
  public get accountUi() {
    return this._accountUi;
  }
  public putAccountUi(value: AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAccountUi) {
    this._accountUi.internalValue = value;
  }
  public resetAccountUi() {
    this._accountUi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountUiInput() {
    return this._accountUi.internalValue;
  }

  // all_destinations - computed: false, optional: true, required: false
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

  // apps_runtime - computed: false, optional: true, required: false
  private _appsRuntime = new AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAppsRuntimeOutputReference(this, "apps_runtime");
  public get appsRuntime() {
    return this._appsRuntime;
  }
  public putAppsRuntime(value: AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationAppsRuntime) {
    this._appsRuntime.internalValue = value;
  }
  public resetAppsRuntime() {
    this._appsRuntime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appsRuntimeInput() {
    return this._appsRuntime.internalValue;
  }

  // lakebase_runtime - computed: false, optional: true, required: false
  private _lakebaseRuntime = new AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationLakebaseRuntimeOutputReference(this, "lakebase_runtime");
  public get lakebaseRuntime() {
    return this._lakebaseRuntime;
  }
  public putLakebaseRuntime(value: AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationLakebaseRuntime) {
    this._lakebaseRuntime.internalValue = value;
  }
  public resetLakebaseRuntime() {
    this._lakebaseRuntime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lakebaseRuntimeInput() {
    return this._lakebaseRuntime.internalValue;
  }

  // workspace_api - computed: false, optional: true, required: false
  private _workspaceApi = new AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceApiOutputReference(this, "workspace_api");
  public get workspaceApi() {
    return this._workspaceApi;
  }
  public putWorkspaceApi(value: AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceApi) {
    this._workspaceApi.internalValue = value;
  }
  public resetWorkspaceApi() {
    this._workspaceApi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceApiInput() {
    return this._workspaceApi.internalValue;
  }

  // workspace_ui - computed: false, optional: true, required: false
  private _workspaceUi = new AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceUiOutputReference(this, "workspace_ui");
  public get workspaceUi() {
    return this._workspaceUi;
  }
  public putWorkspaceUi(value: AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationWorkspaceUi) {
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
export interface AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesOriginEndpoints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#endpoint_ids AccountNetworkPolicy#endpoint_ids}
  */
  readonly endpointIds?: string[];
}

export function accountNetworkPolicyIngressDryRunPrivateAccessDenyRulesOriginEndpointsToTerraform(struct?: AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesOriginEndpoints | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.endpointIds),
  }
}


export function accountNetworkPolicyIngressDryRunPrivateAccessDenyRulesOriginEndpointsToHclTerraform(struct?: AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesOriginEndpoints | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesOriginEndpointsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesOriginEndpoints | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesOriginEndpoints | cdktn.IResolvable | undefined) {
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

  // endpoint_ids - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesOrigin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#all_private_access AccountNetworkPolicy#all_private_access}
  */
  readonly allPrivateAccess?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#all_registered_endpoints AccountNetworkPolicy#all_registered_endpoints}
  */
  readonly allRegisteredEndpoints?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#azure_workspace_private_link AccountNetworkPolicy#azure_workspace_private_link}
  */
  readonly azureWorkspacePrivateLink?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#endpoints AccountNetworkPolicy#endpoints}
  */
  readonly endpoints?: AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesOriginEndpoints;
}

export function accountNetworkPolicyIngressDryRunPrivateAccessDenyRulesOriginToTerraform(struct?: AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesOrigin | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_private_access: cdktn.booleanToTerraform(struct!.allPrivateAccess),
    all_registered_endpoints: cdktn.booleanToTerraform(struct!.allRegisteredEndpoints),
    azure_workspace_private_link: cdktn.booleanToTerraform(struct!.azureWorkspacePrivateLink),
    endpoints: accountNetworkPolicyIngressDryRunPrivateAccessDenyRulesOriginEndpointsToTerraform(struct!.endpoints),
  }
}


export function accountNetworkPolicyIngressDryRunPrivateAccessDenyRulesOriginToHclTerraform(struct?: AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesOrigin | cdktn.IResolvable): any {
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
      value: accountNetworkPolicyIngressDryRunPrivateAccessDenyRulesOriginEndpointsToHclTerraform(struct!.endpoints),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesOriginEndpoints",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesOriginOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesOrigin | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesOrigin | cdktn.IResolvable | undefined) {
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

  // all_private_access - computed: false, optional: true, required: false
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

  // all_registered_endpoints - computed: false, optional: true, required: false
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

  // azure_workspace_private_link - computed: false, optional: true, required: false
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

  // endpoints - computed: false, optional: true, required: false
  private _endpoints = new AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesOriginEndpointsOutputReference(this, "endpoints");
  public get endpoints() {
    return this._endpoints;
  }
  public putEndpoints(value: AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesOriginEndpoints) {
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
export interface AccountNetworkPolicyIngressDryRunPrivateAccessDenyRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#authentication AccountNetworkPolicy#authentication}
  */
  readonly authentication?: AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesAuthentication;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#destination AccountNetworkPolicy#destination}
  */
  readonly destination?: AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestination;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#label AccountNetworkPolicy#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#origin AccountNetworkPolicy#origin}
  */
  readonly origin?: AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesOrigin;
}

export function accountNetworkPolicyIngressDryRunPrivateAccessDenyRulesToTerraform(struct?: AccountNetworkPolicyIngressDryRunPrivateAccessDenyRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: accountNetworkPolicyIngressDryRunPrivateAccessDenyRulesAuthenticationToTerraform(struct!.authentication),
    destination: accountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationToTerraform(struct!.destination),
    label: cdktn.stringToTerraform(struct!.label),
    origin: accountNetworkPolicyIngressDryRunPrivateAccessDenyRulesOriginToTerraform(struct!.origin),
  }
}


export function accountNetworkPolicyIngressDryRunPrivateAccessDenyRulesToHclTerraform(struct?: AccountNetworkPolicyIngressDryRunPrivateAccessDenyRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: accountNetworkPolicyIngressDryRunPrivateAccessDenyRulesAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesAuthentication",
    },
    destination: {
      value: accountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestination",
    },
    label: {
      value: cdktn.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin: {
      value: accountNetworkPolicyIngressDryRunPrivateAccessDenyRulesOriginToHclTerraform(struct!.origin),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesOrigin",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AccountNetworkPolicyIngressDryRunPrivateAccessDenyRules | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressDryRunPrivateAccessDenyRules | cdktn.IResolvable | undefined) {
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

  // authentication - computed: false, optional: true, required: false
  private _authentication = new AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // destination - computed: false, optional: true, required: false
  private _destination = new AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesDestination) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // label - computed: false, optional: true, required: false
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

  // origin - computed: false, optional: true, required: false
  private _origin = new AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesOriginOutputReference(this, "origin");
  public get origin() {
    return this._origin;
  }
  public putOrigin(value: AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesOrigin) {
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

export class AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesList extends cdktn.ComplexList {
  public internalValue? : AccountNetworkPolicyIngressDryRunPrivateAccessDenyRules[] | cdktn.IResolvable

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
  public get(index: number): AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesOutputReference {
    return new AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccountNetworkPolicyIngressDryRunPrivateAccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#allow_rules AccountNetworkPolicy#allow_rules}
  */
  readonly allowRules?: AccountNetworkPolicyIngressDryRunPrivateAccessAllowRules[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#deny_rules AccountNetworkPolicy#deny_rules}
  */
  readonly denyRules?: AccountNetworkPolicyIngressDryRunPrivateAccessDenyRules[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#restriction_mode AccountNetworkPolicy#restriction_mode}
  */
  readonly restrictionMode: string;
}

export function accountNetworkPolicyIngressDryRunPrivateAccessToTerraform(struct?: AccountNetworkPolicyIngressDryRunPrivateAccess | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_rules: cdktn.listMapper(accountNetworkPolicyIngressDryRunPrivateAccessAllowRulesToTerraform, false)(struct!.allowRules),
    deny_rules: cdktn.listMapper(accountNetworkPolicyIngressDryRunPrivateAccessDenyRulesToTerraform, false)(struct!.denyRules),
    restriction_mode: cdktn.stringToTerraform(struct!.restrictionMode),
  }
}


export function accountNetworkPolicyIngressDryRunPrivateAccessToHclTerraform(struct?: AccountNetworkPolicyIngressDryRunPrivateAccess | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_rules: {
      value: cdktn.listMapperHcl(accountNetworkPolicyIngressDryRunPrivateAccessAllowRulesToHclTerraform, false)(struct!.allowRules),
      isBlock: true,
      type: "list",
      storageClassType: "AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesList",
    },
    deny_rules: {
      value: cdktn.listMapperHcl(accountNetworkPolicyIngressDryRunPrivateAccessDenyRulesToHclTerraform, false)(struct!.denyRules),
      isBlock: true,
      type: "list",
      storageClassType: "AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesList",
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

export class AccountNetworkPolicyIngressDryRunPrivateAccessOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressDryRunPrivateAccess | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressDryRunPrivateAccess | cdktn.IResolvable | undefined) {
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

  // allow_rules - computed: false, optional: true, required: false
  private _allowRules = new AccountNetworkPolicyIngressDryRunPrivateAccessAllowRulesList(this, "allow_rules", false);
  public get allowRules() {
    return this._allowRules;
  }
  public putAllowRules(value: AccountNetworkPolicyIngressDryRunPrivateAccessAllowRules[] | cdktn.IResolvable) {
    this._allowRules.internalValue = value;
  }
  public resetAllowRules() {
    this._allowRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRulesInput() {
    return this._allowRules.internalValue;
  }

  // deny_rules - computed: false, optional: true, required: false
  private _denyRules = new AccountNetworkPolicyIngressDryRunPrivateAccessDenyRulesList(this, "deny_rules", false);
  public get denyRules() {
    return this._denyRules;
  }
  public putDenyRules(value: AccountNetworkPolicyIngressDryRunPrivateAccessDenyRules[] | cdktn.IResolvable) {
    this._denyRules.internalValue = value;
  }
  public resetDenyRules() {
    this._denyRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyRulesInput() {
    return this._denyRules.internalValue;
  }

  // restriction_mode - computed: false, optional: false, required: true
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
export interface AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesAuthenticationIdentities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#principal_id AccountNetworkPolicy#principal_id}
  */
  readonly principalId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#principal_type AccountNetworkPolicy#principal_type}
  */
  readonly principalType?: string;
}

export function accountNetworkPolicyIngressDryRunPublicAccessAllowRulesAuthenticationIdentitiesToTerraform(struct?: AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesAuthenticationIdentities | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    principal_id: cdktn.numberToTerraform(struct!.principalId),
    principal_type: cdktn.stringToTerraform(struct!.principalType),
  }
}


export function accountNetworkPolicyIngressDryRunPublicAccessAllowRulesAuthenticationIdentitiesToHclTerraform(struct?: AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesAuthenticationIdentities | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesAuthenticationIdentitiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesAuthenticationIdentities | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesAuthenticationIdentities | cdktn.IResolvable | undefined) {
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

  // principal_id - computed: false, optional: true, required: false
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

  // principal_type - computed: false, optional: true, required: false
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

export class AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesAuthenticationIdentitiesList extends cdktn.ComplexList {
  public internalValue? : AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesAuthenticationIdentities[] | cdktn.IResolvable

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
  public get(index: number): AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesAuthenticationIdentitiesOutputReference {
    return new AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesAuthenticationIdentitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#identities AccountNetworkPolicy#identities}
  */
  readonly identities?: AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesAuthenticationIdentities[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#identity_type AccountNetworkPolicy#identity_type}
  */
  readonly identityType?: string;
}

export function accountNetworkPolicyIngressDryRunPublicAccessAllowRulesAuthenticationToTerraform(struct?: AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesAuthentication | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identities: cdktn.listMapper(accountNetworkPolicyIngressDryRunPublicAccessAllowRulesAuthenticationIdentitiesToTerraform, false)(struct!.identities),
    identity_type: cdktn.stringToTerraform(struct!.identityType),
  }
}


export function accountNetworkPolicyIngressDryRunPublicAccessAllowRulesAuthenticationToHclTerraform(struct?: AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesAuthentication | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identities: {
      value: cdktn.listMapperHcl(accountNetworkPolicyIngressDryRunPublicAccessAllowRulesAuthenticationIdentitiesToHclTerraform, false)(struct!.identities),
      isBlock: true,
      type: "list",
      storageClassType: "AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesAuthenticationIdentitiesList",
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

export class AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesAuthentication | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesAuthentication | cdktn.IResolvable | undefined) {
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

  // identities - computed: false, optional: true, required: false
  private _identities = new AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesAuthenticationIdentitiesList(this, "identities", false);
  public get identities() {
    return this._identities;
  }
  public putIdentities(value: AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesAuthenticationIdentities[] | cdktn.IResolvable) {
    this._identities.internalValue = value;
  }
  public resetIdentities() {
    this._identities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identitiesInput() {
    return this._identities.internalValue;
  }

  // identity_type - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountApi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#scope_qualifier AccountNetworkPolicy#scope_qualifier}
  */
  readonly scopeQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#scopes AccountNetworkPolicy#scopes}
  */
  readonly scopes?: string[];
}

export function accountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountApiToTerraform(struct?: AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope_qualifier: cdktn.stringToTerraform(struct!.scopeQualifier),
    scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
  }
}


export function accountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountApiToHclTerraform(struct?: AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountApi | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountApiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountApi | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountApi | cdktn.IResolvable | undefined) {
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

  // scope_qualifier - computed: false, optional: true, required: false
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

  // scopes - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountDatabricksOne {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#all_destinations AccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function accountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountDatabricksOneToTerraform(struct?: AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountDatabricksOne | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function accountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountDatabricksOneToHclTerraform(struct?: AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountDatabricksOne | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountDatabricksOneOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountDatabricksOne | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountDatabricksOne | cdktn.IResolvable | undefined) {
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

  // all_destinations - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountUi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#all_destinations AccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function accountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountUiToTerraform(struct?: AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountUi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function accountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountUiToHclTerraform(struct?: AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountUi | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountUiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountUi | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountUi | cdktn.IResolvable | undefined) {
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

  // all_destinations - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAppsRuntime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#all_destinations AccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function accountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAppsRuntimeToTerraform(struct?: AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAppsRuntime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function accountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAppsRuntimeToHclTerraform(struct?: AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAppsRuntime | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAppsRuntimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAppsRuntime | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAppsRuntime | cdktn.IResolvable | undefined) {
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

  // all_destinations - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationLakebaseRuntime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#all_destinations AccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function accountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationLakebaseRuntimeToTerraform(struct?: AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationLakebaseRuntime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function accountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationLakebaseRuntimeToHclTerraform(struct?: AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationLakebaseRuntime | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationLakebaseRuntimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationLakebaseRuntime | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationLakebaseRuntime | cdktn.IResolvable | undefined) {
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

  // all_destinations - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationWorkspaceApi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#scope_qualifier AccountNetworkPolicy#scope_qualifier}
  */
  readonly scopeQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#scopes AccountNetworkPolicy#scopes}
  */
  readonly scopes?: string[];
}

export function accountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationWorkspaceApiToTerraform(struct?: AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationWorkspaceApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope_qualifier: cdktn.stringToTerraform(struct!.scopeQualifier),
    scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
  }
}


export function accountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationWorkspaceApiToHclTerraform(struct?: AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationWorkspaceApi | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationWorkspaceApiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationWorkspaceApi | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationWorkspaceApi | cdktn.IResolvable | undefined) {
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

  // scope_qualifier - computed: false, optional: true, required: false
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

  // scopes - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationWorkspaceUi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#all_destinations AccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function accountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationWorkspaceUiToTerraform(struct?: AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationWorkspaceUi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function accountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationWorkspaceUiToHclTerraform(struct?: AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationWorkspaceUi | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationWorkspaceUiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationWorkspaceUi | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationWorkspaceUi | cdktn.IResolvable | undefined) {
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

  // all_destinations - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestination {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#account_api AccountNetworkPolicy#account_api}
  */
  readonly accountApi?: AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountApi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#account_databricks_one AccountNetworkPolicy#account_databricks_one}
  */
  readonly accountDatabricksOne?: AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountDatabricksOne;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#account_ui AccountNetworkPolicy#account_ui}
  */
  readonly accountUi?: AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountUi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#all_destinations AccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#apps_runtime AccountNetworkPolicy#apps_runtime}
  */
  readonly appsRuntime?: AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAppsRuntime;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#lakebase_runtime AccountNetworkPolicy#lakebase_runtime}
  */
  readonly lakebaseRuntime?: AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationLakebaseRuntime;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#workspace_api AccountNetworkPolicy#workspace_api}
  */
  readonly workspaceApi?: AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationWorkspaceApi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#workspace_ui AccountNetworkPolicy#workspace_ui}
  */
  readonly workspaceUi?: AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationWorkspaceUi;
}

export function accountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationToTerraform(struct?: AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_api: accountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountApiToTerraform(struct!.accountApi),
    account_databricks_one: accountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountDatabricksOneToTerraform(struct!.accountDatabricksOne),
    account_ui: accountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountUiToTerraform(struct!.accountUi),
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
    apps_runtime: accountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAppsRuntimeToTerraform(struct!.appsRuntime),
    lakebase_runtime: accountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationLakebaseRuntimeToTerraform(struct!.lakebaseRuntime),
    workspace_api: accountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationWorkspaceApiToTerraform(struct!.workspaceApi),
    workspace_ui: accountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationWorkspaceUiToTerraform(struct!.workspaceUi),
  }
}


export function accountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationToHclTerraform(struct?: AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_api: {
      value: accountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountApiToHclTerraform(struct!.accountApi),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountApi",
    },
    account_databricks_one: {
      value: accountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountDatabricksOneToHclTerraform(struct!.accountDatabricksOne),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountDatabricksOne",
    },
    account_ui: {
      value: accountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountUiToHclTerraform(struct!.accountUi),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountUi",
    },
    all_destinations: {
      value: cdktn.booleanToHclTerraform(struct!.allDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    apps_runtime: {
      value: accountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAppsRuntimeToHclTerraform(struct!.appsRuntime),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAppsRuntime",
    },
    lakebase_runtime: {
      value: accountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationLakebaseRuntimeToHclTerraform(struct!.lakebaseRuntime),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationLakebaseRuntime",
    },
    workspace_api: {
      value: accountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationWorkspaceApiToHclTerraform(struct!.workspaceApi),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationWorkspaceApi",
    },
    workspace_ui: {
      value: accountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationWorkspaceUiToHclTerraform(struct!.workspaceUi),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationWorkspaceUi",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestination | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestination | cdktn.IResolvable | undefined) {
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

  // account_api - computed: false, optional: true, required: false
  private _accountApi = new AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountApiOutputReference(this, "account_api");
  public get accountApi() {
    return this._accountApi;
  }
  public putAccountApi(value: AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountApi) {
    this._accountApi.internalValue = value;
  }
  public resetAccountApi() {
    this._accountApi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountApiInput() {
    return this._accountApi.internalValue;
  }

  // account_databricks_one - computed: false, optional: true, required: false
  private _accountDatabricksOne = new AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountDatabricksOneOutputReference(this, "account_databricks_one");
  public get accountDatabricksOne() {
    return this._accountDatabricksOne;
  }
  public putAccountDatabricksOne(value: AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountDatabricksOne) {
    this._accountDatabricksOne.internalValue = value;
  }
  public resetAccountDatabricksOne() {
    this._accountDatabricksOne.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountDatabricksOneInput() {
    return this._accountDatabricksOne.internalValue;
  }

  // account_ui - computed: false, optional: true, required: false
  private _accountUi = new AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountUiOutputReference(this, "account_ui");
  public get accountUi() {
    return this._accountUi;
  }
  public putAccountUi(value: AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAccountUi) {
    this._accountUi.internalValue = value;
  }
  public resetAccountUi() {
    this._accountUi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountUiInput() {
    return this._accountUi.internalValue;
  }

  // all_destinations - computed: false, optional: true, required: false
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

  // apps_runtime - computed: false, optional: true, required: false
  private _appsRuntime = new AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAppsRuntimeOutputReference(this, "apps_runtime");
  public get appsRuntime() {
    return this._appsRuntime;
  }
  public putAppsRuntime(value: AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationAppsRuntime) {
    this._appsRuntime.internalValue = value;
  }
  public resetAppsRuntime() {
    this._appsRuntime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appsRuntimeInput() {
    return this._appsRuntime.internalValue;
  }

  // lakebase_runtime - computed: false, optional: true, required: false
  private _lakebaseRuntime = new AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationLakebaseRuntimeOutputReference(this, "lakebase_runtime");
  public get lakebaseRuntime() {
    return this._lakebaseRuntime;
  }
  public putLakebaseRuntime(value: AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationLakebaseRuntime) {
    this._lakebaseRuntime.internalValue = value;
  }
  public resetLakebaseRuntime() {
    this._lakebaseRuntime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lakebaseRuntimeInput() {
    return this._lakebaseRuntime.internalValue;
  }

  // workspace_api - computed: false, optional: true, required: false
  private _workspaceApi = new AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationWorkspaceApiOutputReference(this, "workspace_api");
  public get workspaceApi() {
    return this._workspaceApi;
  }
  public putWorkspaceApi(value: AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationWorkspaceApi) {
    this._workspaceApi.internalValue = value;
  }
  public resetWorkspaceApi() {
    this._workspaceApi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceApiInput() {
    return this._workspaceApi.internalValue;
  }

  // workspace_ui - computed: false, optional: true, required: false
  private _workspaceUi = new AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationWorkspaceUiOutputReference(this, "workspace_ui");
  public get workspaceUi() {
    return this._workspaceUi;
  }
  public putWorkspaceUi(value: AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationWorkspaceUi) {
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
export interface AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOriginExcludedIpRanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#ip_ranges AccountNetworkPolicy#ip_ranges}
  */
  readonly ipRanges?: string[];
}

export function accountNetworkPolicyIngressDryRunPublicAccessAllowRulesOriginExcludedIpRangesToTerraform(struct?: AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOriginExcludedIpRanges | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_ranges: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.ipRanges),
  }
}


export function accountNetworkPolicyIngressDryRunPublicAccessAllowRulesOriginExcludedIpRangesToHclTerraform(struct?: AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOriginExcludedIpRanges | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOriginExcludedIpRangesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOriginExcludedIpRanges | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOriginExcludedIpRanges | cdktn.IResolvable | undefined) {
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

  // ip_ranges - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOriginIncludedIpRanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#ip_ranges AccountNetworkPolicy#ip_ranges}
  */
  readonly ipRanges?: string[];
}

export function accountNetworkPolicyIngressDryRunPublicAccessAllowRulesOriginIncludedIpRangesToTerraform(struct?: AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOriginIncludedIpRanges | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_ranges: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.ipRanges),
  }
}


export function accountNetworkPolicyIngressDryRunPublicAccessAllowRulesOriginIncludedIpRangesToHclTerraform(struct?: AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOriginIncludedIpRanges | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOriginIncludedIpRangesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOriginIncludedIpRanges | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOriginIncludedIpRanges | cdktn.IResolvable | undefined) {
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

  // ip_ranges - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOrigin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#all_ip_ranges AccountNetworkPolicy#all_ip_ranges}
  */
  readonly allIpRanges?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#excluded_ip_ranges AccountNetworkPolicy#excluded_ip_ranges}
  */
  readonly excludedIpRanges?: AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOriginExcludedIpRanges;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#included_ip_ranges AccountNetworkPolicy#included_ip_ranges}
  */
  readonly includedIpRanges?: AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOriginIncludedIpRanges;
}

export function accountNetworkPolicyIngressDryRunPublicAccessAllowRulesOriginToTerraform(struct?: AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOrigin | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_ip_ranges: cdktn.booleanToTerraform(struct!.allIpRanges),
    excluded_ip_ranges: accountNetworkPolicyIngressDryRunPublicAccessAllowRulesOriginExcludedIpRangesToTerraform(struct!.excludedIpRanges),
    included_ip_ranges: accountNetworkPolicyIngressDryRunPublicAccessAllowRulesOriginIncludedIpRangesToTerraform(struct!.includedIpRanges),
  }
}


export function accountNetworkPolicyIngressDryRunPublicAccessAllowRulesOriginToHclTerraform(struct?: AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOrigin | cdktn.IResolvable): any {
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
      value: accountNetworkPolicyIngressDryRunPublicAccessAllowRulesOriginExcludedIpRangesToHclTerraform(struct!.excludedIpRanges),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOriginExcludedIpRanges",
    },
    included_ip_ranges: {
      value: accountNetworkPolicyIngressDryRunPublicAccessAllowRulesOriginIncludedIpRangesToHclTerraform(struct!.includedIpRanges),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOriginIncludedIpRanges",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOriginOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOrigin | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOrigin | cdktn.IResolvable | undefined) {
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

  // all_ip_ranges - computed: false, optional: true, required: false
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

  // excluded_ip_ranges - computed: false, optional: true, required: false
  private _excludedIpRanges = new AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOriginExcludedIpRangesOutputReference(this, "excluded_ip_ranges");
  public get excludedIpRanges() {
    return this._excludedIpRanges;
  }
  public putExcludedIpRanges(value: AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOriginExcludedIpRanges) {
    this._excludedIpRanges.internalValue = value;
  }
  public resetExcludedIpRanges() {
    this._excludedIpRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedIpRangesInput() {
    return this._excludedIpRanges.internalValue;
  }

  // included_ip_ranges - computed: false, optional: true, required: false
  private _includedIpRanges = new AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOriginIncludedIpRangesOutputReference(this, "included_ip_ranges");
  public get includedIpRanges() {
    return this._includedIpRanges;
  }
  public putIncludedIpRanges(value: AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOriginIncludedIpRanges) {
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
export interface AccountNetworkPolicyIngressDryRunPublicAccessAllowRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#authentication AccountNetworkPolicy#authentication}
  */
  readonly authentication?: AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesAuthentication;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#destination AccountNetworkPolicy#destination}
  */
  readonly destination?: AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestination;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#label AccountNetworkPolicy#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#origin AccountNetworkPolicy#origin}
  */
  readonly origin?: AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOrigin;
}

export function accountNetworkPolicyIngressDryRunPublicAccessAllowRulesToTerraform(struct?: AccountNetworkPolicyIngressDryRunPublicAccessAllowRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: accountNetworkPolicyIngressDryRunPublicAccessAllowRulesAuthenticationToTerraform(struct!.authentication),
    destination: accountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationToTerraform(struct!.destination),
    label: cdktn.stringToTerraform(struct!.label),
    origin: accountNetworkPolicyIngressDryRunPublicAccessAllowRulesOriginToTerraform(struct!.origin),
  }
}


export function accountNetworkPolicyIngressDryRunPublicAccessAllowRulesToHclTerraform(struct?: AccountNetworkPolicyIngressDryRunPublicAccessAllowRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: accountNetworkPolicyIngressDryRunPublicAccessAllowRulesAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesAuthentication",
    },
    destination: {
      value: accountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestination",
    },
    label: {
      value: cdktn.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin: {
      value: accountNetworkPolicyIngressDryRunPublicAccessAllowRulesOriginToHclTerraform(struct!.origin),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOrigin",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AccountNetworkPolicyIngressDryRunPublicAccessAllowRules | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressDryRunPublicAccessAllowRules | cdktn.IResolvable | undefined) {
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

  // authentication - computed: false, optional: true, required: false
  private _authentication = new AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // destination - computed: false, optional: true, required: false
  private _destination = new AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestination) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // label - computed: false, optional: true, required: false
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

  // origin - computed: false, optional: true, required: false
  private _origin = new AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOriginOutputReference(this, "origin");
  public get origin() {
    return this._origin;
  }
  public putOrigin(value: AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOrigin) {
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

export class AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesList extends cdktn.ComplexList {
  public internalValue? : AccountNetworkPolicyIngressDryRunPublicAccessAllowRules[] | cdktn.IResolvable

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
  public get(index: number): AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOutputReference {
    return new AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthenticationIdentities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#principal_id AccountNetworkPolicy#principal_id}
  */
  readonly principalId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#principal_type AccountNetworkPolicy#principal_type}
  */
  readonly principalType?: string;
}

export function accountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthenticationIdentitiesToTerraform(struct?: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthenticationIdentities | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    principal_id: cdktn.numberToTerraform(struct!.principalId),
    principal_type: cdktn.stringToTerraform(struct!.principalType),
  }
}


export function accountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthenticationIdentitiesToHclTerraform(struct?: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthenticationIdentities | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthenticationIdentitiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthenticationIdentities | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthenticationIdentities | cdktn.IResolvable | undefined) {
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

  // principal_id - computed: false, optional: true, required: false
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

  // principal_type - computed: false, optional: true, required: false
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

export class AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthenticationIdentitiesList extends cdktn.ComplexList {
  public internalValue? : AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthenticationIdentities[] | cdktn.IResolvable

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
  public get(index: number): AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthenticationIdentitiesOutputReference {
    return new AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthenticationIdentitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#identities AccountNetworkPolicy#identities}
  */
  readonly identities?: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthenticationIdentities[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#identity_type AccountNetworkPolicy#identity_type}
  */
  readonly identityType?: string;
}

export function accountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthenticationToTerraform(struct?: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthentication | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identities: cdktn.listMapper(accountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthenticationIdentitiesToTerraform, false)(struct!.identities),
    identity_type: cdktn.stringToTerraform(struct!.identityType),
  }
}


export function accountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthenticationToHclTerraform(struct?: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthentication | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identities: {
      value: cdktn.listMapperHcl(accountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthenticationIdentitiesToHclTerraform, false)(struct!.identities),
      isBlock: true,
      type: "list",
      storageClassType: "AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthenticationIdentitiesList",
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

export class AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthentication | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthentication | cdktn.IResolvable | undefined) {
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

  // identities - computed: false, optional: true, required: false
  private _identities = new AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthenticationIdentitiesList(this, "identities", false);
  public get identities() {
    return this._identities;
  }
  public putIdentities(value: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthenticationIdentities[] | cdktn.IResolvable) {
    this._identities.internalValue = value;
  }
  public resetIdentities() {
    this._identities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identitiesInput() {
    return this._identities.internalValue;
  }

  // identity_type - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountApi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#scope_qualifier AccountNetworkPolicy#scope_qualifier}
  */
  readonly scopeQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#scopes AccountNetworkPolicy#scopes}
  */
  readonly scopes?: string[];
}

export function accountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountApiToTerraform(struct?: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope_qualifier: cdktn.stringToTerraform(struct!.scopeQualifier),
    scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
  }
}


export function accountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountApiToHclTerraform(struct?: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountApi | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountApiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountApi | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountApi | cdktn.IResolvable | undefined) {
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

  // scope_qualifier - computed: false, optional: true, required: false
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

  // scopes - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountDatabricksOne {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#all_destinations AccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function accountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountDatabricksOneToTerraform(struct?: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountDatabricksOne | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function accountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountDatabricksOneToHclTerraform(struct?: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountDatabricksOne | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountDatabricksOneOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountDatabricksOne | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountDatabricksOne | cdktn.IResolvable | undefined) {
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

  // all_destinations - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountUi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#all_destinations AccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function accountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountUiToTerraform(struct?: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountUi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function accountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountUiToHclTerraform(struct?: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountUi | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountUiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountUi | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountUi | cdktn.IResolvable | undefined) {
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

  // all_destinations - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAppsRuntime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#all_destinations AccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function accountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAppsRuntimeToTerraform(struct?: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAppsRuntime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function accountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAppsRuntimeToHclTerraform(struct?: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAppsRuntime | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAppsRuntimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAppsRuntime | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAppsRuntime | cdktn.IResolvable | undefined) {
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

  // all_destinations - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationLakebaseRuntime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#all_destinations AccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function accountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationLakebaseRuntimeToTerraform(struct?: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationLakebaseRuntime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function accountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationLakebaseRuntimeToHclTerraform(struct?: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationLakebaseRuntime | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationLakebaseRuntimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationLakebaseRuntime | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationLakebaseRuntime | cdktn.IResolvable | undefined) {
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

  // all_destinations - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationWorkspaceApi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#scope_qualifier AccountNetworkPolicy#scope_qualifier}
  */
  readonly scopeQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#scopes AccountNetworkPolicy#scopes}
  */
  readonly scopes?: string[];
}

export function accountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationWorkspaceApiToTerraform(struct?: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationWorkspaceApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope_qualifier: cdktn.stringToTerraform(struct!.scopeQualifier),
    scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
  }
}


export function accountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationWorkspaceApiToHclTerraform(struct?: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationWorkspaceApi | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationWorkspaceApiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationWorkspaceApi | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationWorkspaceApi | cdktn.IResolvable | undefined) {
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

  // scope_qualifier - computed: false, optional: true, required: false
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

  // scopes - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationWorkspaceUi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#all_destinations AccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
}

export function accountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationWorkspaceUiToTerraform(struct?: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationWorkspaceUi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
  }
}


export function accountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationWorkspaceUiToHclTerraform(struct?: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationWorkspaceUi | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationWorkspaceUiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationWorkspaceUi | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationWorkspaceUi | cdktn.IResolvable | undefined) {
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

  // all_destinations - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestination {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#account_api AccountNetworkPolicy#account_api}
  */
  readonly accountApi?: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountApi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#account_databricks_one AccountNetworkPolicy#account_databricks_one}
  */
  readonly accountDatabricksOne?: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountDatabricksOne;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#account_ui AccountNetworkPolicy#account_ui}
  */
  readonly accountUi?: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountUi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#all_destinations AccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#apps_runtime AccountNetworkPolicy#apps_runtime}
  */
  readonly appsRuntime?: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAppsRuntime;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#lakebase_runtime AccountNetworkPolicy#lakebase_runtime}
  */
  readonly lakebaseRuntime?: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationLakebaseRuntime;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#workspace_api AccountNetworkPolicy#workspace_api}
  */
  readonly workspaceApi?: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationWorkspaceApi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#workspace_ui AccountNetworkPolicy#workspace_ui}
  */
  readonly workspaceUi?: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationWorkspaceUi;
}

export function accountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationToTerraform(struct?: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_api: accountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountApiToTerraform(struct!.accountApi),
    account_databricks_one: accountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountDatabricksOneToTerraform(struct!.accountDatabricksOne),
    account_ui: accountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountUiToTerraform(struct!.accountUi),
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
    apps_runtime: accountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAppsRuntimeToTerraform(struct!.appsRuntime),
    lakebase_runtime: accountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationLakebaseRuntimeToTerraform(struct!.lakebaseRuntime),
    workspace_api: accountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationWorkspaceApiToTerraform(struct!.workspaceApi),
    workspace_ui: accountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationWorkspaceUiToTerraform(struct!.workspaceUi),
  }
}


export function accountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationToHclTerraform(struct?: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_api: {
      value: accountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountApiToHclTerraform(struct!.accountApi),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountApi",
    },
    account_databricks_one: {
      value: accountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountDatabricksOneToHclTerraform(struct!.accountDatabricksOne),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountDatabricksOne",
    },
    account_ui: {
      value: accountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountUiToHclTerraform(struct!.accountUi),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountUi",
    },
    all_destinations: {
      value: cdktn.booleanToHclTerraform(struct!.allDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    apps_runtime: {
      value: accountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAppsRuntimeToHclTerraform(struct!.appsRuntime),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAppsRuntime",
    },
    lakebase_runtime: {
      value: accountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationLakebaseRuntimeToHclTerraform(struct!.lakebaseRuntime),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationLakebaseRuntime",
    },
    workspace_api: {
      value: accountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationWorkspaceApiToHclTerraform(struct!.workspaceApi),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationWorkspaceApi",
    },
    workspace_ui: {
      value: accountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationWorkspaceUiToHclTerraform(struct!.workspaceUi),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationWorkspaceUi",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestination | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestination | cdktn.IResolvable | undefined) {
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

  // account_api - computed: false, optional: true, required: false
  private _accountApi = new AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountApiOutputReference(this, "account_api");
  public get accountApi() {
    return this._accountApi;
  }
  public putAccountApi(value: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountApi) {
    this._accountApi.internalValue = value;
  }
  public resetAccountApi() {
    this._accountApi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountApiInput() {
    return this._accountApi.internalValue;
  }

  // account_databricks_one - computed: false, optional: true, required: false
  private _accountDatabricksOne = new AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountDatabricksOneOutputReference(this, "account_databricks_one");
  public get accountDatabricksOne() {
    return this._accountDatabricksOne;
  }
  public putAccountDatabricksOne(value: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountDatabricksOne) {
    this._accountDatabricksOne.internalValue = value;
  }
  public resetAccountDatabricksOne() {
    this._accountDatabricksOne.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountDatabricksOneInput() {
    return this._accountDatabricksOne.internalValue;
  }

  // account_ui - computed: false, optional: true, required: false
  private _accountUi = new AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountUiOutputReference(this, "account_ui");
  public get accountUi() {
    return this._accountUi;
  }
  public putAccountUi(value: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAccountUi) {
    this._accountUi.internalValue = value;
  }
  public resetAccountUi() {
    this._accountUi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountUiInput() {
    return this._accountUi.internalValue;
  }

  // all_destinations - computed: false, optional: true, required: false
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

  // apps_runtime - computed: false, optional: true, required: false
  private _appsRuntime = new AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAppsRuntimeOutputReference(this, "apps_runtime");
  public get appsRuntime() {
    return this._appsRuntime;
  }
  public putAppsRuntime(value: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationAppsRuntime) {
    this._appsRuntime.internalValue = value;
  }
  public resetAppsRuntime() {
    this._appsRuntime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appsRuntimeInput() {
    return this._appsRuntime.internalValue;
  }

  // lakebase_runtime - computed: false, optional: true, required: false
  private _lakebaseRuntime = new AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationLakebaseRuntimeOutputReference(this, "lakebase_runtime");
  public get lakebaseRuntime() {
    return this._lakebaseRuntime;
  }
  public putLakebaseRuntime(value: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationLakebaseRuntime) {
    this._lakebaseRuntime.internalValue = value;
  }
  public resetLakebaseRuntime() {
    this._lakebaseRuntime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lakebaseRuntimeInput() {
    return this._lakebaseRuntime.internalValue;
  }

  // workspace_api - computed: false, optional: true, required: false
  private _workspaceApi = new AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationWorkspaceApiOutputReference(this, "workspace_api");
  public get workspaceApi() {
    return this._workspaceApi;
  }
  public putWorkspaceApi(value: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationWorkspaceApi) {
    this._workspaceApi.internalValue = value;
  }
  public resetWorkspaceApi() {
    this._workspaceApi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceApiInput() {
    return this._workspaceApi.internalValue;
  }

  // workspace_ui - computed: false, optional: true, required: false
  private _workspaceUi = new AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationWorkspaceUiOutputReference(this, "workspace_ui");
  public get workspaceUi() {
    return this._workspaceUi;
  }
  public putWorkspaceUi(value: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationWorkspaceUi) {
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
export interface AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginExcludedIpRanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#ip_ranges AccountNetworkPolicy#ip_ranges}
  */
  readonly ipRanges?: string[];
}

export function accountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginExcludedIpRangesToTerraform(struct?: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginExcludedIpRanges | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_ranges: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.ipRanges),
  }
}


export function accountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginExcludedIpRangesToHclTerraform(struct?: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginExcludedIpRanges | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginExcludedIpRangesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginExcludedIpRanges | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginExcludedIpRanges | cdktn.IResolvable | undefined) {
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

  // ip_ranges - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginIncludedIpRanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#ip_ranges AccountNetworkPolicy#ip_ranges}
  */
  readonly ipRanges?: string[];
}

export function accountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginIncludedIpRangesToTerraform(struct?: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginIncludedIpRanges | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_ranges: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.ipRanges),
  }
}


export function accountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginIncludedIpRangesToHclTerraform(struct?: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginIncludedIpRanges | cdktn.IResolvable): any {
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

export class AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginIncludedIpRangesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginIncludedIpRanges | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginIncludedIpRanges | cdktn.IResolvable | undefined) {
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

  // ip_ranges - computed: false, optional: true, required: false
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
export interface AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOrigin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#all_ip_ranges AccountNetworkPolicy#all_ip_ranges}
  */
  readonly allIpRanges?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#excluded_ip_ranges AccountNetworkPolicy#excluded_ip_ranges}
  */
  readonly excludedIpRanges?: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginExcludedIpRanges;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#included_ip_ranges AccountNetworkPolicy#included_ip_ranges}
  */
  readonly includedIpRanges?: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginIncludedIpRanges;
}

export function accountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginToTerraform(struct?: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOrigin | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_ip_ranges: cdktn.booleanToTerraform(struct!.allIpRanges),
    excluded_ip_ranges: accountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginExcludedIpRangesToTerraform(struct!.excludedIpRanges),
    included_ip_ranges: accountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginIncludedIpRangesToTerraform(struct!.includedIpRanges),
  }
}


export function accountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginToHclTerraform(struct?: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOrigin | cdktn.IResolvable): any {
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
      value: accountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginExcludedIpRangesToHclTerraform(struct!.excludedIpRanges),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginExcludedIpRanges",
    },
    included_ip_ranges: {
      value: accountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginIncludedIpRangesToHclTerraform(struct!.includedIpRanges),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginIncludedIpRanges",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOrigin | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOrigin | cdktn.IResolvable | undefined) {
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

  // all_ip_ranges - computed: false, optional: true, required: false
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

  // excluded_ip_ranges - computed: false, optional: true, required: false
  private _excludedIpRanges = new AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginExcludedIpRangesOutputReference(this, "excluded_ip_ranges");
  public get excludedIpRanges() {
    return this._excludedIpRanges;
  }
  public putExcludedIpRanges(value: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginExcludedIpRanges) {
    this._excludedIpRanges.internalValue = value;
  }
  public resetExcludedIpRanges() {
    this._excludedIpRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedIpRangesInput() {
    return this._excludedIpRanges.internalValue;
  }

  // included_ip_ranges - computed: false, optional: true, required: false
  private _includedIpRanges = new AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginIncludedIpRangesOutputReference(this, "included_ip_ranges");
  public get includedIpRanges() {
    return this._includedIpRanges;
  }
  public putIncludedIpRanges(value: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginIncludedIpRanges) {
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
export interface AccountNetworkPolicyIngressDryRunPublicAccessDenyRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#authentication AccountNetworkPolicy#authentication}
  */
  readonly authentication?: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthentication;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#destination AccountNetworkPolicy#destination}
  */
  readonly destination?: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestination;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#label AccountNetworkPolicy#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#origin AccountNetworkPolicy#origin}
  */
  readonly origin?: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOrigin;
}

export function accountNetworkPolicyIngressDryRunPublicAccessDenyRulesToTerraform(struct?: AccountNetworkPolicyIngressDryRunPublicAccessDenyRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: accountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthenticationToTerraform(struct!.authentication),
    destination: accountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationToTerraform(struct!.destination),
    label: cdktn.stringToTerraform(struct!.label),
    origin: accountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginToTerraform(struct!.origin),
  }
}


export function accountNetworkPolicyIngressDryRunPublicAccessDenyRulesToHclTerraform(struct?: AccountNetworkPolicyIngressDryRunPublicAccessDenyRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: accountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthentication",
    },
    destination: {
      value: accountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestination",
    },
    label: {
      value: cdktn.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin: {
      value: accountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginToHclTerraform(struct!.origin),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOrigin",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AccountNetworkPolicyIngressDryRunPublicAccessDenyRules | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressDryRunPublicAccessDenyRules | cdktn.IResolvable | undefined) {
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

  // authentication - computed: false, optional: true, required: false
  private _authentication = new AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // destination - computed: false, optional: true, required: false
  private _destination = new AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestination) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // label - computed: false, optional: true, required: false
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

  // origin - computed: false, optional: true, required: false
  private _origin = new AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginOutputReference(this, "origin");
  public get origin() {
    return this._origin;
  }
  public putOrigin(value: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOrigin) {
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

export class AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesList extends cdktn.ComplexList {
  public internalValue? : AccountNetworkPolicyIngressDryRunPublicAccessDenyRules[] | cdktn.IResolvable

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
  public get(index: number): AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOutputReference {
    return new AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccountNetworkPolicyIngressDryRunPublicAccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#allow_rules AccountNetworkPolicy#allow_rules}
  */
  readonly allowRules?: AccountNetworkPolicyIngressDryRunPublicAccessAllowRules[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#deny_rules AccountNetworkPolicy#deny_rules}
  */
  readonly denyRules?: AccountNetworkPolicyIngressDryRunPublicAccessDenyRules[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#restriction_mode AccountNetworkPolicy#restriction_mode}
  */
  readonly restrictionMode: string;
}

export function accountNetworkPolicyIngressDryRunPublicAccessToTerraform(struct?: AccountNetworkPolicyIngressDryRunPublicAccess | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_rules: cdktn.listMapper(accountNetworkPolicyIngressDryRunPublicAccessAllowRulesToTerraform, false)(struct!.allowRules),
    deny_rules: cdktn.listMapper(accountNetworkPolicyIngressDryRunPublicAccessDenyRulesToTerraform, false)(struct!.denyRules),
    restriction_mode: cdktn.stringToTerraform(struct!.restrictionMode),
  }
}


export function accountNetworkPolicyIngressDryRunPublicAccessToHclTerraform(struct?: AccountNetworkPolicyIngressDryRunPublicAccess | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_rules: {
      value: cdktn.listMapperHcl(accountNetworkPolicyIngressDryRunPublicAccessAllowRulesToHclTerraform, false)(struct!.allowRules),
      isBlock: true,
      type: "list",
      storageClassType: "AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesList",
    },
    deny_rules: {
      value: cdktn.listMapperHcl(accountNetworkPolicyIngressDryRunPublicAccessDenyRulesToHclTerraform, false)(struct!.denyRules),
      isBlock: true,
      type: "list",
      storageClassType: "AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesList",
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

export class AccountNetworkPolicyIngressDryRunPublicAccessOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressDryRunPublicAccess | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountNetworkPolicyIngressDryRunPublicAccess | cdktn.IResolvable | undefined) {
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

  // allow_rules - computed: false, optional: true, required: false
  private _allowRules = new AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesList(this, "allow_rules", false);
  public get allowRules() {
    return this._allowRules;
  }
  public putAllowRules(value: AccountNetworkPolicyIngressDryRunPublicAccessAllowRules[] | cdktn.IResolvable) {
    this._allowRules.internalValue = value;
  }
  public resetAllowRules() {
    this._allowRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRulesInput() {
    return this._allowRules.internalValue;
  }

  // deny_rules - computed: false, optional: true, required: false
  private _denyRules = new AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesList(this, "deny_rules", false);
  public get denyRules() {
    return this._denyRules;
  }
  public putDenyRules(value: AccountNetworkPolicyIngressDryRunPublicAccessDenyRules[] | cdktn.IResolvable) {
    this._denyRules.internalValue = value;
  }
  public resetDenyRules() {
    this._denyRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyRulesInput() {
    return this._denyRules.internalValue;
  }

  // restriction_mode - computed: false, optional: false, required: true
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
export interface AccountNetworkPolicyIngressDryRun {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#private_access AccountNetworkPolicy#private_access}
  */
  readonly privateAccess?: AccountNetworkPolicyIngressDryRunPrivateAccess;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#public_access AccountNetworkPolicy#public_access}
  */
  readonly publicAccess?: AccountNetworkPolicyIngressDryRunPublicAccess;
}

export function accountNetworkPolicyIngressDryRunToTerraform(struct?: AccountNetworkPolicyIngressDryRun | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    private_access: accountNetworkPolicyIngressDryRunPrivateAccessToTerraform(struct!.privateAccess),
    public_access: accountNetworkPolicyIngressDryRunPublicAccessToTerraform(struct!.publicAccess),
  }
}


export function accountNetworkPolicyIngressDryRunToHclTerraform(struct?: AccountNetworkPolicyIngressDryRun | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    private_access: {
      value: accountNetworkPolicyIngressDryRunPrivateAccessToHclTerraform(struct!.privateAccess),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressDryRunPrivateAccess",
    },
    public_access: {
      value: accountNetworkPolicyIngressDryRunPublicAccessToHclTerraform(struct!.publicAccess),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressDryRunPublicAccess",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountNetworkPolicyIngressDryRunOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressDryRun | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: AccountNetworkPolicyIngressDryRun | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._privateAccess.internalValue = undefined;
      this._publicAccess.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._privateAccess.internalValue = value.privateAccess;
      this._publicAccess.internalValue = value.publicAccess;
    }
  }

  // private_access - computed: false, optional: true, required: false
  private _privateAccess = new AccountNetworkPolicyIngressDryRunPrivateAccessOutputReference(this, "private_access");
  public get privateAccess() {
    return this._privateAccess;
  }
  public putPrivateAccess(value: AccountNetworkPolicyIngressDryRunPrivateAccess) {
    this._privateAccess.internalValue = value;
  }
  public resetPrivateAccess() {
    this._privateAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateAccessInput() {
    return this._privateAccess.internalValue;
  }

  // public_access - computed: false, optional: true, required: false
  private _publicAccess = new AccountNetworkPolicyIngressDryRunPublicAccessOutputReference(this, "public_access");
  public get publicAccess() {
    return this._publicAccess;
  }
  public putPublicAccess(value: AccountNetworkPolicyIngressDryRunPublicAccess) {
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
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy databricks_account_network_policy}
*/
export class AccountNetworkPolicy extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_account_network_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AccountNetworkPolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AccountNetworkPolicy to import
  * @param importFromId The id of the existing AccountNetworkPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AccountNetworkPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_account_network_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/account_network_policy databricks_account_network_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccountNetworkPolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AccountNetworkPolicyConfig = {}) {
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
    this._accountId = config.accountId;
    this._egress.internalValue = config.egress;
    this._ingress.internalValue = config.ingress;
    this._ingressDryRun.internalValue = config.ingressDryRun;
    this._networkPolicyId = config.networkPolicyId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // egress - computed: false, optional: true, required: false
  private _egress = new AccountNetworkPolicyEgressOutputReference(this, "egress");
  public get egress() {
    return this._egress;
  }
  public putEgress(value: AccountNetworkPolicyEgress) {
    this._egress.internalValue = value;
  }
  public resetEgress() {
    this._egress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressInput() {
    return this._egress.internalValue;
  }

  // ingress - computed: false, optional: true, required: false
  private _ingress = new AccountNetworkPolicyIngressOutputReference(this, "ingress");
  public get ingress() {
    return this._ingress;
  }
  public putIngress(value: AccountNetworkPolicyIngress) {
    this._ingress.internalValue = value;
  }
  public resetIngress() {
    this._ingress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressInput() {
    return this._ingress.internalValue;
  }

  // ingress_dry_run - computed: false, optional: true, required: false
  private _ingressDryRun = new AccountNetworkPolicyIngressDryRunOutputReference(this, "ingress_dry_run");
  public get ingressDryRun() {
    return this._ingressDryRun;
  }
  public putIngressDryRun(value: AccountNetworkPolicyIngressDryRun) {
    this._ingressDryRun.internalValue = value;
  }
  public resetIngressDryRun() {
    this._ingressDryRun.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressDryRunInput() {
    return this._ingressDryRun.internalValue;
  }

  // network_policy_id - computed: false, optional: true, required: false
  private _networkPolicyId?: string; 
  public get networkPolicyId() {
    return this.getStringAttribute('network_policy_id');
  }
  public set networkPolicyId(value: string) {
    this._networkPolicyId = value;
  }
  public resetNetworkPolicyId() {
    this._networkPolicyId = undefined;
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
      account_id: cdktn.stringToTerraform(this._accountId),
      egress: accountNetworkPolicyEgressToTerraform(this._egress.internalValue),
      ingress: accountNetworkPolicyIngressToTerraform(this._ingress.internalValue),
      ingress_dry_run: accountNetworkPolicyIngressDryRunToTerraform(this._ingressDryRun.internalValue),
      network_policy_id: cdktn.stringToTerraform(this._networkPolicyId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktn.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      egress: {
        value: accountNetworkPolicyEgressToHclTerraform(this._egress.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AccountNetworkPolicyEgress",
      },
      ingress: {
        value: accountNetworkPolicyIngressToHclTerraform(this._ingress.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AccountNetworkPolicyIngress",
      },
      ingress_dry_run: {
        value: accountNetworkPolicyIngressDryRunToHclTerraform(this._ingressDryRun.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AccountNetworkPolicyIngressDryRun",
      },
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
