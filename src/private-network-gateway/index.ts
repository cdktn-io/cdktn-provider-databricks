/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface PrivateNetworkGatewayConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#aws_cloud_connection PrivateNetworkGateway#aws_cloud_connection}
  */
  readonly awsCloudConnection?: PrivateNetworkGatewayAwsCloudConnection;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#azure_cloud_connection PrivateNetworkGateway#azure_cloud_connection}
  */
  readonly azureCloudConnection?: PrivateNetworkGatewayAzureCloudConnection;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#bandwidth_tier_gigabits_per_second PrivateNetworkGateway#bandwidth_tier_gigabits_per_second}
  */
  readonly bandwidthTierGigabitsPerSecond?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#destinations PrivateNetworkGateway#destinations}
  */
  readonly destinations?: PrivateNetworkGatewayDestinations[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#display_name PrivateNetworkGateway#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#parent PrivateNetworkGateway#parent}
  */
  readonly parent: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#private_dns_resolvers PrivateNetworkGateway#private_dns_resolvers}
  */
  readonly privateDnsResolvers?: PrivateNetworkGatewayPrivateDnsResolvers[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#traffic_mode PrivateNetworkGateway#traffic_mode}
  */
  readonly trafficMode: string;
}
export interface PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#role_arn PrivateNetworkGateway#role_arn}
  */
  readonly roleArn: string;
}

export function privateNetworkGatewayAwsCloudConnectionCrossAccountRoleToTerraform(struct?: PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function privateNetworkGatewayAwsCloudConnectionCrossAccountRoleToHclTerraform(struct?: PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._roleArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._roleArn = value.roleArn;
    }
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}
export interface PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#subnet_id PrivateNetworkGateway#subnet_id}
  */
  readonly subnetId: string;
}

export function privateNetworkGatewayAwsCloudConnectionGatewaySubnetsToTerraform(struct?: PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    subnet_id: cdktn.stringToTerraform(struct!.subnetId),
  }
}


export function privateNetworkGatewayAwsCloudConnectionGatewaySubnetsToHclTerraform(struct?: PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    subnet_id: {
      value: cdktn.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._subnetId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._subnetId = value.subnetId;
    }
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }
}

export class PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList extends cdktn.ComplexList {
  public internalValue? : PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets[] | cdktn.IResolvable

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
  public get(index: number): PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference {
    return new PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PrivateNetworkGatewayAwsCloudConnection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#cross_account_role PrivateNetworkGateway#cross_account_role}
  */
  readonly crossAccountRole: PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#gateway_subnets PrivateNetworkGateway#gateway_subnets}
  */
  readonly gatewaySubnets: PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#security_group_ids PrivateNetworkGateway#security_group_ids}
  */
  readonly securityGroupIds: string[];
}

export function privateNetworkGatewayAwsCloudConnectionToTerraform(struct?: PrivateNetworkGatewayAwsCloudConnection | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cross_account_role: privateNetworkGatewayAwsCloudConnectionCrossAccountRoleToTerraform(struct!.crossAccountRole),
    gateway_subnets: cdktn.listMapper(privateNetworkGatewayAwsCloudConnectionGatewaySubnetsToTerraform, false)(struct!.gatewaySubnets),
    security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
  }
}


export function privateNetworkGatewayAwsCloudConnectionToHclTerraform(struct?: PrivateNetworkGatewayAwsCloudConnection | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cross_account_role: {
      value: privateNetworkGatewayAwsCloudConnectionCrossAccountRoleToHclTerraform(struct!.crossAccountRole),
      isBlock: true,
      type: "struct",
      storageClassType: "PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole",
    },
    gateway_subnets: {
      value: cdktn.listMapperHcl(privateNetworkGatewayAwsCloudConnectionGatewaySubnetsToHclTerraform, false)(struct!.gatewaySubnets),
      isBlock: true,
      type: "list",
      storageClassType: "PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList",
    },
    security_group_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivateNetworkGatewayAwsCloudConnectionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PrivateNetworkGatewayAwsCloudConnection | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crossAccountRole?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossAccountRole = this._crossAccountRole?.internalValue;
    }
    if (this._gatewaySubnets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewaySubnets = this._gatewaySubnets?.internalValue;
    }
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivateNetworkGatewayAwsCloudConnection | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._crossAccountRole.internalValue = undefined;
      this._gatewaySubnets.internalValue = undefined;
      this._securityGroupIds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._crossAccountRole.internalValue = value.crossAccountRole;
      this._gatewaySubnets.internalValue = value.gatewaySubnets;
      this._securityGroupIds = value.securityGroupIds;
    }
  }

  // cross_account_role - computed: false, optional: false, required: true
  private _crossAccountRole = new PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference(this, "cross_account_role");
  public get crossAccountRole() {
    return this._crossAccountRole;
  }
  public putCrossAccountRole(value: PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole) {
    this._crossAccountRole.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountRoleInput() {
    return this._crossAccountRole.internalValue;
  }

  // gateway_subnets - computed: false, optional: false, required: true
  private _gatewaySubnets = new PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList(this, "gateway_subnets", false);
  public get gatewaySubnets() {
    return this._gatewaySubnets;
  }
  public putGatewaySubnets(value: PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets[] | cdktn.IResolvable) {
    this._gatewaySubnets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewaySubnetsInput() {
    return this._gatewaySubnets.internalValue;
  }

  // security_group_ids - computed: false, optional: false, required: true
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }
}
export interface PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#resource_id PrivateNetworkGateway#resource_id}
  */
  readonly resourceId: string;
}

export function privateNetworkGatewayAzureCloudConnectionGatewaySubnetToTerraform(struct?: PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_id: cdktn.stringToTerraform(struct!.resourceId),
  }
}


export function privateNetworkGatewayAzureCloudConnectionGatewaySubnetToHclTerraform(struct?: PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource_id: {
      value: cdktn.stringToHclTerraform(struct!.resourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceId = value.resourceId;
    }
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }
}
export interface PrivateNetworkGatewayAzureCloudConnection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#gateway_subnet PrivateNetworkGateway#gateway_subnet}
  */
  readonly gatewaySubnet: PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet;
}

export function privateNetworkGatewayAzureCloudConnectionToTerraform(struct?: PrivateNetworkGatewayAzureCloudConnection | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    gateway_subnet: privateNetworkGatewayAzureCloudConnectionGatewaySubnetToTerraform(struct!.gatewaySubnet),
  }
}


export function privateNetworkGatewayAzureCloudConnectionToHclTerraform(struct?: PrivateNetworkGatewayAzureCloudConnection | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    gateway_subnet: {
      value: privateNetworkGatewayAzureCloudConnectionGatewaySubnetToHclTerraform(struct!.gatewaySubnet),
      isBlock: true,
      type: "struct",
      storageClassType: "PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivateNetworkGatewayAzureCloudConnectionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PrivateNetworkGatewayAzureCloudConnection | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gatewaySubnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewaySubnet = this._gatewaySubnet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivateNetworkGatewayAzureCloudConnection | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gatewaySubnet.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gatewaySubnet.internalValue = value.gatewaySubnet;
    }
  }

  // gateway_subnet - computed: false, optional: false, required: true
  private _gatewaySubnet = new PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference(this, "gateway_subnet");
  public get gatewaySubnet() {
    return this._gatewaySubnet;
  }
  public putGatewaySubnet(value: PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet) {
    this._gatewaySubnet.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewaySubnetInput() {
    return this._gatewaySubnet.internalValue;
  }
}
export interface PrivateNetworkGatewayDestinations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#destination_type PrivateNetworkGateway#destination_type}
  */
  readonly destinationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#value PrivateNetworkGateway#value}
  */
  readonly value: string;
}

export function privateNetworkGatewayDestinationsToTerraform(struct?: PrivateNetworkGatewayDestinations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination_type: cdktn.stringToTerraform(struct!.destinationType),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function privateNetworkGatewayDestinationsToHclTerraform(struct?: PrivateNetworkGatewayDestinations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination_type: {
      value: cdktn.stringToHclTerraform(struct!.destinationType),
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

export class PrivateNetworkGatewayDestinationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PrivateNetworkGatewayDestinations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationType = this._destinationType;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivateNetworkGatewayDestinations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationType = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationType = value.destinationType;
      this._value = value.value;
    }
  }

  // destination_type - computed: false, optional: false, required: true
  private _destinationType?: string; 
  public get destinationType() {
    return this.getStringAttribute('destination_type');
  }
  public set destinationType(value: string) {
    this._destinationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationTypeInput() {
    return this._destinationType;
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

export class PrivateNetworkGatewayDestinationsList extends cdktn.ComplexList {
  public internalValue? : PrivateNetworkGatewayDestinations[] | cdktn.IResolvable

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
  public get(index: number): PrivateNetworkGatewayDestinationsOutputReference {
    return new PrivateNetworkGatewayDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PrivateNetworkGatewayPrivateDnsResolvers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#resolver_type PrivateNetworkGateway#resolver_type}
  */
  readonly resolverType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#value PrivateNetworkGateway#value}
  */
  readonly value: string;
}

export function privateNetworkGatewayPrivateDnsResolversToTerraform(struct?: PrivateNetworkGatewayPrivateDnsResolvers | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resolver_type: cdktn.stringToTerraform(struct!.resolverType),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function privateNetworkGatewayPrivateDnsResolversToHclTerraform(struct?: PrivateNetworkGatewayPrivateDnsResolvers | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resolver_type: {
      value: cdktn.stringToHclTerraform(struct!.resolverType),
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

export class PrivateNetworkGatewayPrivateDnsResolversOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PrivateNetworkGatewayPrivateDnsResolvers | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resolverType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolverType = this._resolverType;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivateNetworkGatewayPrivateDnsResolvers | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resolverType = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resolverType = value.resolverType;
      this._value = value.value;
    }
  }

  // resolver_type - computed: false, optional: false, required: true
  private _resolverType?: string; 
  public get resolverType() {
    return this.getStringAttribute('resolver_type');
  }
  public set resolverType(value: string) {
    this._resolverType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resolverTypeInput() {
    return this._resolverType;
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

export class PrivateNetworkGatewayPrivateDnsResolversList extends cdktn.ComplexList {
  public internalValue? : PrivateNetworkGatewayPrivateDnsResolvers[] | cdktn.IResolvable

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
  public get(index: number): PrivateNetworkGatewayPrivateDnsResolversOutputReference {
    return new PrivateNetworkGatewayPrivateDnsResolversOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway databricks_private_network_gateway}
*/
export class PrivateNetworkGateway extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_private_network_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a PrivateNetworkGateway resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PrivateNetworkGateway to import
  * @param importFromId The id of the existing PrivateNetworkGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PrivateNetworkGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_private_network_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway databricks_private_network_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PrivateNetworkGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: PrivateNetworkGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_private_network_gateway',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.137.0',
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
    this._awsCloudConnection.internalValue = config.awsCloudConnection;
    this._azureCloudConnection.internalValue = config.azureCloudConnection;
    this._bandwidthTierGigabitsPerSecond = config.bandwidthTierGigabitsPerSecond;
    this._destinations.internalValue = config.destinations;
    this._displayName = config.displayName;
    this._parent = config.parent;
    this._privateDnsResolvers.internalValue = config.privateDnsResolvers;
    this._trafficMode = config.trafficMode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_cloud_connection - computed: false, optional: true, required: false
  private _awsCloudConnection = new PrivateNetworkGatewayAwsCloudConnectionOutputReference(this, "aws_cloud_connection");
  public get awsCloudConnection() {
    return this._awsCloudConnection;
  }
  public putAwsCloudConnection(value: PrivateNetworkGatewayAwsCloudConnection) {
    this._awsCloudConnection.internalValue = value;
  }
  public resetAwsCloudConnection() {
    this._awsCloudConnection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsCloudConnectionInput() {
    return this._awsCloudConnection.internalValue;
  }

  // azure_cloud_connection - computed: false, optional: true, required: false
  private _azureCloudConnection = new PrivateNetworkGatewayAzureCloudConnectionOutputReference(this, "azure_cloud_connection");
  public get azureCloudConnection() {
    return this._azureCloudConnection;
  }
  public putAzureCloudConnection(value: PrivateNetworkGatewayAzureCloudConnection) {
    this._azureCloudConnection.internalValue = value;
  }
  public resetAzureCloudConnection() {
    this._azureCloudConnection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureCloudConnectionInput() {
    return this._azureCloudConnection.internalValue;
  }

  // bandwidth_tier_gigabits_per_second - computed: false, optional: true, required: false
  private _bandwidthTierGigabitsPerSecond?: number; 
  public get bandwidthTierGigabitsPerSecond() {
    return this.getNumberAttribute('bandwidth_tier_gigabits_per_second');
  }
  public set bandwidthTierGigabitsPerSecond(value: number) {
    this._bandwidthTierGigabitsPerSecond = value;
  }
  public resetBandwidthTierGigabitsPerSecond() {
    this._bandwidthTierGigabitsPerSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthTierGigabitsPerSecondInput() {
    return this._bandwidthTierGigabitsPerSecond;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // destinations - computed: false, optional: true, required: false
  private _destinations = new PrivateNetworkGatewayDestinationsList(this, "destinations", false);
  public get destinations() {
    return this._destinations;
  }
  public putDestinations(value: PrivateNetworkGatewayDestinations[] | cdktn.IResolvable) {
    this._destinations.internalValue = value;
  }
  public resetDestinations() {
    this._destinations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationsInput() {
    return this._destinations.internalValue;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // error_message - computed: true, optional: false, required: false
  public get errorMessage() {
    return this.getStringAttribute('error_message');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent - computed: false, optional: false, required: true
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

  // private_dns_resolvers - computed: false, optional: true, required: false
  private _privateDnsResolvers = new PrivateNetworkGatewayPrivateDnsResolversList(this, "private_dns_resolvers", false);
  public get privateDnsResolvers() {
    return this._privateDnsResolvers;
  }
  public putPrivateDnsResolvers(value: PrivateNetworkGatewayPrivateDnsResolvers[] | cdktn.IResolvable) {
    this._privateDnsResolvers.internalValue = value;
  }
  public resetPrivateDnsResolvers() {
    this._privateDnsResolvers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateDnsResolversInput() {
    return this._privateDnsResolvers.internalValue;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // traffic_mode - computed: false, optional: false, required: true
  private _trafficMode?: string; 
  public get trafficMode() {
    return this.getStringAttribute('traffic_mode');
  }
  public set trafficMode(value: string) {
    this._trafficMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficModeInput() {
    return this._trafficMode;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_cloud_connection: privateNetworkGatewayAwsCloudConnectionToTerraform(this._awsCloudConnection.internalValue),
      azure_cloud_connection: privateNetworkGatewayAzureCloudConnectionToTerraform(this._azureCloudConnection.internalValue),
      bandwidth_tier_gigabits_per_second: cdktn.numberToTerraform(this._bandwidthTierGigabitsPerSecond),
      destinations: cdktn.listMapper(privateNetworkGatewayDestinationsToTerraform, false)(this._destinations.internalValue),
      display_name: cdktn.stringToTerraform(this._displayName),
      parent: cdktn.stringToTerraform(this._parent),
      private_dns_resolvers: cdktn.listMapper(privateNetworkGatewayPrivateDnsResolversToTerraform, false)(this._privateDnsResolvers.internalValue),
      traffic_mode: cdktn.stringToTerraform(this._trafficMode),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_cloud_connection: {
        value: privateNetworkGatewayAwsCloudConnectionToHclTerraform(this._awsCloudConnection.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PrivateNetworkGatewayAwsCloudConnection",
      },
      azure_cloud_connection: {
        value: privateNetworkGatewayAzureCloudConnectionToHclTerraform(this._azureCloudConnection.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PrivateNetworkGatewayAzureCloudConnection",
      },
      bandwidth_tier_gigabits_per_second: {
        value: cdktn.numberToHclTerraform(this._bandwidthTierGigabitsPerSecond),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      destinations: {
        value: cdktn.listMapperHcl(privateNetworkGatewayDestinationsToHclTerraform, false)(this._destinations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PrivateNetworkGatewayDestinationsList",
      },
      display_name: {
        value: cdktn.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent: {
        value: cdktn.stringToHclTerraform(this._parent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_dns_resolvers: {
        value: cdktn.listMapperHcl(privateNetworkGatewayPrivateDnsResolversToHclTerraform, false)(this._privateDnsResolvers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PrivateNetworkGatewayPrivateDnsResolversList",
      },
      traffic_mode: {
        value: cdktn.stringToHclTerraform(this._trafficMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
