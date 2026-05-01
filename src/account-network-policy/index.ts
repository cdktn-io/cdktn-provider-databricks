/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface AccountNetworkPolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#account_id AccountNetworkPolicy#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#egress AccountNetworkPolicy#egress}
  */
  readonly egress?: AccountNetworkPolicyEgress;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#ingress AccountNetworkPolicy#ingress}
  */
  readonly ingress?: AccountNetworkPolicyIngress;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#ingress_dry_run AccountNetworkPolicy#ingress_dry_run}
  */
  readonly ingressDryRun?: AccountNetworkPolicyIngressDryRun;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#network_policy_id AccountNetworkPolicy#network_policy_id}
  */
  readonly networkPolicyId?: string;
}
export interface AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#destination AccountNetworkPolicy#destination}
  */
  readonly destination?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#internet_destination_type AccountNetworkPolicy#internet_destination_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#azure_storage_account AccountNetworkPolicy#azure_storage_account}
  */
  readonly azureStorageAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#azure_storage_service AccountNetworkPolicy#azure_storage_service}
  */
  readonly azureStorageService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#bucket_name AccountNetworkPolicy#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#region AccountNetworkPolicy#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#storage_destination_type AccountNetworkPolicy#storage_destination_type}
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
export interface AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#dry_run_mode_product_filter AccountNetworkPolicy#dry_run_mode_product_filter}
  */
  readonly dryRunModeProductFilter?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#enforcement_mode AccountNetworkPolicy#enforcement_mode}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#allowed_internet_destinations AccountNetworkPolicy#allowed_internet_destinations}
  */
  readonly allowedInternetDestinations?: AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#allowed_storage_destinations AccountNetworkPolicy#allowed_storage_destinations}
  */
  readonly allowedStorageDestinations?: AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#policy_enforcement AccountNetworkPolicy#policy_enforcement}
  */
  readonly policyEnforcement?: AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#restriction_mode AccountNetworkPolicy#restriction_mode}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#network_access AccountNetworkPolicy#network_access}
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
export interface AccountNetworkPolicyIngressPublicAccessAllowRulesAuthenticationIdentities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#principal_id AccountNetworkPolicy#principal_id}
  */
  readonly principalId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#principal_type AccountNetworkPolicy#principal_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#identities AccountNetworkPolicy#identities}
  */
  readonly identities?: AccountNetworkPolicyIngressPublicAccessAllowRulesAuthenticationIdentities[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#identity_type AccountNetworkPolicy#identity_type}
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
export interface AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationWorkspaceApi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#scopes AccountNetworkPolicy#scopes}
  */
  readonly scopes?: string[];
}

export function accountNetworkPolicyIngressPublicAccessAllowRulesDestinationWorkspaceApiToTerraform(struct?: AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationWorkspaceApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
  }
}


export function accountNetworkPolicyIngressPublicAccessAllowRulesDestinationWorkspaceApiToHclTerraform(struct?: AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationWorkspaceApi | cdktn.IResolvable): any {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#all_destinations AccountNetworkPolicy#all_destinations}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#all_destinations AccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#workspace_api AccountNetworkPolicy#workspace_api}
  */
  readonly workspaceApi?: AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationWorkspaceApi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#workspace_ui AccountNetworkPolicy#workspace_ui}
  */
  readonly workspaceUi?: AccountNetworkPolicyIngressPublicAccessAllowRulesDestinationWorkspaceUi;
}

export function accountNetworkPolicyIngressPublicAccessAllowRulesDestinationToTerraform(struct?: AccountNetworkPolicyIngressPublicAccessAllowRulesDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
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
    all_destinations: {
      value: cdktn.booleanToHclTerraform(struct!.allDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

  public set internalValue(value: AccountNetworkPolicyIngressPublicAccessAllowRulesDestination | cdktn.IResolvable | undefined) {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#ip_ranges AccountNetworkPolicy#ip_ranges}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#ip_ranges AccountNetworkPolicy#ip_ranges}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#all_ip_ranges AccountNetworkPolicy#all_ip_ranges}
  */
  readonly allIpRanges?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#excluded_ip_ranges AccountNetworkPolicy#excluded_ip_ranges}
  */
  readonly excludedIpRanges?: AccountNetworkPolicyIngressPublicAccessAllowRulesOriginExcludedIpRanges;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#included_ip_ranges AccountNetworkPolicy#included_ip_ranges}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#authentication AccountNetworkPolicy#authentication}
  */
  readonly authentication?: AccountNetworkPolicyIngressPublicAccessAllowRulesAuthentication;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#destination AccountNetworkPolicy#destination}
  */
  readonly destination?: AccountNetworkPolicyIngressPublicAccessAllowRulesDestination;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#label AccountNetworkPolicy#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#origin AccountNetworkPolicy#origin}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#principal_id AccountNetworkPolicy#principal_id}
  */
  readonly principalId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#principal_type AccountNetworkPolicy#principal_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#identities AccountNetworkPolicy#identities}
  */
  readonly identities?: AccountNetworkPolicyIngressPublicAccessDenyRulesAuthenticationIdentities[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#identity_type AccountNetworkPolicy#identity_type}
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
export interface AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationWorkspaceApi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#scopes AccountNetworkPolicy#scopes}
  */
  readonly scopes?: string[];
}

export function accountNetworkPolicyIngressPublicAccessDenyRulesDestinationWorkspaceApiToTerraform(struct?: AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationWorkspaceApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
  }
}


export function accountNetworkPolicyIngressPublicAccessDenyRulesDestinationWorkspaceApiToHclTerraform(struct?: AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationWorkspaceApi | cdktn.IResolvable): any {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#all_destinations AccountNetworkPolicy#all_destinations}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#all_destinations AccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#workspace_api AccountNetworkPolicy#workspace_api}
  */
  readonly workspaceApi?: AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationWorkspaceApi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#workspace_ui AccountNetworkPolicy#workspace_ui}
  */
  readonly workspaceUi?: AccountNetworkPolicyIngressPublicAccessDenyRulesDestinationWorkspaceUi;
}

export function accountNetworkPolicyIngressPublicAccessDenyRulesDestinationToTerraform(struct?: AccountNetworkPolicyIngressPublicAccessDenyRulesDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
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
    all_destinations: {
      value: cdktn.booleanToHclTerraform(struct!.allDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

  public set internalValue(value: AccountNetworkPolicyIngressPublicAccessDenyRulesDestination | cdktn.IResolvable | undefined) {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#ip_ranges AccountNetworkPolicy#ip_ranges}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#ip_ranges AccountNetworkPolicy#ip_ranges}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#all_ip_ranges AccountNetworkPolicy#all_ip_ranges}
  */
  readonly allIpRanges?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#excluded_ip_ranges AccountNetworkPolicy#excluded_ip_ranges}
  */
  readonly excludedIpRanges?: AccountNetworkPolicyIngressPublicAccessDenyRulesOriginExcludedIpRanges;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#included_ip_ranges AccountNetworkPolicy#included_ip_ranges}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#authentication AccountNetworkPolicy#authentication}
  */
  readonly authentication?: AccountNetworkPolicyIngressPublicAccessDenyRulesAuthentication;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#destination AccountNetworkPolicy#destination}
  */
  readonly destination?: AccountNetworkPolicyIngressPublicAccessDenyRulesDestination;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#label AccountNetworkPolicy#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#origin AccountNetworkPolicy#origin}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#allow_rules AccountNetworkPolicy#allow_rules}
  */
  readonly allowRules?: AccountNetworkPolicyIngressPublicAccessAllowRules[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#deny_rules AccountNetworkPolicy#deny_rules}
  */
  readonly denyRules?: AccountNetworkPolicyIngressPublicAccessDenyRules[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#restriction_mode AccountNetworkPolicy#restriction_mode}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#public_access AccountNetworkPolicy#public_access}
  */
  readonly publicAccess?: AccountNetworkPolicyIngressPublicAccess;
}

export function accountNetworkPolicyIngressToTerraform(struct?: AccountNetworkPolicyIngress | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    public_access: accountNetworkPolicyIngressPublicAccessToTerraform(struct!.publicAccess),
  }
}


export function accountNetworkPolicyIngressToHclTerraform(struct?: AccountNetworkPolicyIngress | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
      this._publicAccess.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._publicAccess.internalValue = value.publicAccess;
    }
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
export interface AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesAuthenticationIdentities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#principal_id AccountNetworkPolicy#principal_id}
  */
  readonly principalId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#principal_type AccountNetworkPolicy#principal_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#identities AccountNetworkPolicy#identities}
  */
  readonly identities?: AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesAuthenticationIdentities[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#identity_type AccountNetworkPolicy#identity_type}
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
export interface AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationWorkspaceApi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#scopes AccountNetworkPolicy#scopes}
  */
  readonly scopes?: string[];
}

export function accountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationWorkspaceApiToTerraform(struct?: AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationWorkspaceApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
  }
}


export function accountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationWorkspaceApiToHclTerraform(struct?: AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationWorkspaceApi | cdktn.IResolvable): any {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#all_destinations AccountNetworkPolicy#all_destinations}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#all_destinations AccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#workspace_api AccountNetworkPolicy#workspace_api}
  */
  readonly workspaceApi?: AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationWorkspaceApi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#workspace_ui AccountNetworkPolicy#workspace_ui}
  */
  readonly workspaceUi?: AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationWorkspaceUi;
}

export function accountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestinationToTerraform(struct?: AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
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
    all_destinations: {
      value: cdktn.booleanToHclTerraform(struct!.allDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

  public set internalValue(value: AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestination | cdktn.IResolvable | undefined) {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#ip_ranges AccountNetworkPolicy#ip_ranges}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#ip_ranges AccountNetworkPolicy#ip_ranges}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#all_ip_ranges AccountNetworkPolicy#all_ip_ranges}
  */
  readonly allIpRanges?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#excluded_ip_ranges AccountNetworkPolicy#excluded_ip_ranges}
  */
  readonly excludedIpRanges?: AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesOriginExcludedIpRanges;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#included_ip_ranges AccountNetworkPolicy#included_ip_ranges}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#authentication AccountNetworkPolicy#authentication}
  */
  readonly authentication?: AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesAuthentication;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#destination AccountNetworkPolicy#destination}
  */
  readonly destination?: AccountNetworkPolicyIngressDryRunPublicAccessAllowRulesDestination;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#label AccountNetworkPolicy#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#origin AccountNetworkPolicy#origin}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#principal_id AccountNetworkPolicy#principal_id}
  */
  readonly principalId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#principal_type AccountNetworkPolicy#principal_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#identities AccountNetworkPolicy#identities}
  */
  readonly identities?: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthenticationIdentities[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#identity_type AccountNetworkPolicy#identity_type}
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
export interface AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationWorkspaceApi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#scopes AccountNetworkPolicy#scopes}
  */
  readonly scopes?: string[];
}

export function accountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationWorkspaceApiToTerraform(struct?: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationWorkspaceApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
  }
}


export function accountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationWorkspaceApiToHclTerraform(struct?: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationWorkspaceApi | cdktn.IResolvable): any {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#all_destinations AccountNetworkPolicy#all_destinations}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#all_destinations AccountNetworkPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#workspace_api AccountNetworkPolicy#workspace_api}
  */
  readonly workspaceApi?: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationWorkspaceApi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#workspace_ui AccountNetworkPolicy#workspace_ui}
  */
  readonly workspaceUi?: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationWorkspaceUi;
}

export function accountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestinationToTerraform(struct?: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktn.booleanToTerraform(struct!.allDestinations),
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
    all_destinations: {
      value: cdktn.booleanToHclTerraform(struct!.allDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

  public set internalValue(value: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestination | cdktn.IResolvable | undefined) {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#ip_ranges AccountNetworkPolicy#ip_ranges}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#ip_ranges AccountNetworkPolicy#ip_ranges}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#all_ip_ranges AccountNetworkPolicy#all_ip_ranges}
  */
  readonly allIpRanges?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#excluded_ip_ranges AccountNetworkPolicy#excluded_ip_ranges}
  */
  readonly excludedIpRanges?: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesOriginExcludedIpRanges;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#included_ip_ranges AccountNetworkPolicy#included_ip_ranges}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#authentication AccountNetworkPolicy#authentication}
  */
  readonly authentication?: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesAuthentication;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#destination AccountNetworkPolicy#destination}
  */
  readonly destination?: AccountNetworkPolicyIngressDryRunPublicAccessDenyRulesDestination;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#label AccountNetworkPolicy#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#origin AccountNetworkPolicy#origin}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#allow_rules AccountNetworkPolicy#allow_rules}
  */
  readonly allowRules?: AccountNetworkPolicyIngressDryRunPublicAccessAllowRules[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#deny_rules AccountNetworkPolicy#deny_rules}
  */
  readonly denyRules?: AccountNetworkPolicyIngressDryRunPublicAccessDenyRules[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#restriction_mode AccountNetworkPolicy#restriction_mode}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#public_access AccountNetworkPolicy#public_access}
  */
  readonly publicAccess?: AccountNetworkPolicyIngressDryRunPublicAccess;
}

export function accountNetworkPolicyIngressDryRunToTerraform(struct?: AccountNetworkPolicyIngressDryRun | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    public_access: accountNetworkPolicyIngressDryRunPublicAccessToTerraform(struct!.publicAccess),
  }
}


export function accountNetworkPolicyIngressDryRunToHclTerraform(struct?: AccountNetworkPolicyIngressDryRun | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
      this._publicAccess.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._publicAccess.internalValue = value.publicAccess;
    }
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
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy databricks_account_network_policy}
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
  * @param importFromId The id of the existing AccountNetworkPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AccountNetworkPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_account_network_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/account_network_policy databricks_account_network_policy} Resource
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
        providerVersion: '1.114.2',
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
