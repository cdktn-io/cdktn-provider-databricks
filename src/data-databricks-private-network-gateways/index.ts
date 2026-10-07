/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataDatabricksPrivateNetworkGatewaysConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#parent DataDatabricksPrivateNetworkGateways#parent}
  */
  readonly parent: string;
}
export interface DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#role_arn DataDatabricksPrivateNetworkGateways#role_arn}
  */
  readonly roleArn: string;
}

export function dataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleToTerraform(struct?: DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function dataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleToHclTerraform(struct?: DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole): any {
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

export class DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._roleArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._roleArn = value.roleArn;
    }
  }

  // role_arn - computed: true, optional: false, required: true
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
export interface DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#subnet_id DataDatabricksPrivateNetworkGateways#subnet_id}
  */
  readonly subnetId: string;
}

export function dataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsToTerraform(struct?: DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    subnet_id: cdktn.stringToTerraform(struct!.subnetId),
  }
}


export function dataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsToHclTerraform(struct?: DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets): any {
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

export class DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._subnetId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._subnetId = value.subnetId;
    }
  }

  // subnet_id - computed: true, optional: false, required: true
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

export class DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference {
    return new DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#cross_account_role DataDatabricksPrivateNetworkGateways#cross_account_role}
  */
  readonly crossAccountRole: DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#gateway_subnets DataDatabricksPrivateNetworkGateways#gateway_subnets}
  */
  readonly gatewaySubnets: DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#security_group_ids DataDatabricksPrivateNetworkGateways#security_group_ids}
  */
  readonly securityGroupIds: string[];
}

export function dataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionToTerraform(struct?: DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnection): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cross_account_role: dataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleToTerraform(struct!.crossAccountRole),
    gateway_subnets: cdktn.listMapper(dataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsToTerraform, false)(struct!.gatewaySubnets),
    security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
  }
}


export function dataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionToHclTerraform(struct?: DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnection): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cross_account_role: {
      value: dataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleToHclTerraform(struct!.crossAccountRole),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole",
    },
    gateway_subnets: {
      value: cdktn.listMapperHcl(dataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsToHclTerraform, false)(struct!.gatewaySubnets),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList",
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

export class DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnection | undefined {
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

  public set internalValue(value: DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._crossAccountRole.internalValue = undefined;
      this._gatewaySubnets.internalValue = undefined;
      this._securityGroupIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._crossAccountRole.internalValue = value.crossAccountRole;
      this._gatewaySubnets.internalValue = value.gatewaySubnets;
      this._securityGroupIds = value.securityGroupIds;
    }
  }

  // cross_account_role - computed: true, optional: false, required: true
  private _crossAccountRole = new DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference(this, "cross_account_role");
  public get crossAccountRole() {
    return this._crossAccountRole;
  }
  public putCrossAccountRole(value: DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole) {
    this._crossAccountRole.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountRoleInput() {
    return this._crossAccountRole.internalValue;
  }

  // gateway_subnets - computed: true, optional: false, required: true
  private _gatewaySubnets = new DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList(this, "gateway_subnets", false);
  public get gatewaySubnets() {
    return this._gatewaySubnets;
  }
  public putGatewaySubnets(value: DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets[] | cdktn.IResolvable) {
    this._gatewaySubnets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewaySubnetsInput() {
    return this._gatewaySubnets.internalValue;
  }

  // security_group_ids - computed: true, optional: false, required: true
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
export interface DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#resource_id DataDatabricksPrivateNetworkGateways#resource_id}
  */
  readonly resourceId: string;
}

export function dataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetToTerraform(struct?: DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_id: cdktn.stringToTerraform(struct!.resourceId),
  }
}


export function dataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetToHclTerraform(struct?: DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet): any {
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

export class DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceId = value.resourceId;
    }
  }

  // resource_id - computed: true, optional: false, required: true
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
export interface DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#gateway_subnet DataDatabricksPrivateNetworkGateways#gateway_subnet}
  */
  readonly gatewaySubnet: DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet;
}

export function dataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionToTerraform(struct?: DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnection): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    gateway_subnet: dataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetToTerraform(struct!.gatewaySubnet),
  }
}


export function dataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionToHclTerraform(struct?: DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnection): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    gateway_subnet: {
      value: dataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetToHclTerraform(struct!.gatewaySubnet),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gatewaySubnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewaySubnet = this._gatewaySubnet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gatewaySubnet.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gatewaySubnet.internalValue = value.gatewaySubnet;
    }
  }

  // gateway_subnet - computed: true, optional: false, required: true
  private _gatewaySubnet = new DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference(this, "gateway_subnet");
  public get gatewaySubnet() {
    return this._gatewaySubnet;
  }
  public putGatewaySubnet(value: DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet) {
    this._gatewaySubnet.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewaySubnetInput() {
    return this._gatewaySubnet.internalValue;
  }
}
export interface DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#destination_type DataDatabricksPrivateNetworkGateways#destination_type}
  */
  readonly destinationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#value DataDatabricksPrivateNetworkGateways#value}
  */
  readonly value: string;
}

export function dataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsToTerraform(struct?: DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination_type: cdktn.stringToTerraform(struct!.destinationType),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function dataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsToHclTerraform(struct?: DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations): any {
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

export class DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations | undefined {
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

  public set internalValue(value: DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destinationType = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destinationType = value.destinationType;
      this._value = value.value;
    }
  }

  // destination_type - computed: true, optional: false, required: true
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

  // value - computed: true, optional: false, required: true
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

export class DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference {
    return new DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#resolver_type DataDatabricksPrivateNetworkGateways#resolver_type}
  */
  readonly resolverType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#value DataDatabricksPrivateNetworkGateways#value}
  */
  readonly value: string;
}

export function dataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversToTerraform(struct?: DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resolver_type: cdktn.stringToTerraform(struct!.resolverType),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function dataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversToHclTerraform(struct?: DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers): any {
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

export class DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers | undefined {
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

  public set internalValue(value: DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resolverType = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resolverType = value.resolverType;
      this._value = value.value;
    }
  }

  // resolver_type - computed: true, optional: false, required: true
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

  // value - computed: true, optional: false, required: true
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

export class DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference {
    return new DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksPrivateNetworkGatewaysPrivateNetworkGateways {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#name DataDatabricksPrivateNetworkGateways#name}
  */
  readonly name: string;
}

export function dataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysToTerraform(struct?: DataDatabricksPrivateNetworkGatewaysPrivateNetworkGateways): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function dataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysToHclTerraform(struct?: DataDatabricksPrivateNetworkGatewaysPrivateNetworkGateways): any {
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

export class DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksPrivateNetworkGatewaysPrivateNetworkGateways | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksPrivateNetworkGatewaysPrivateNetworkGateways | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
  }

  // aws_cloud_connection - computed: true, optional: false, required: false
  private _awsCloudConnection = new DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference(this, "aws_cloud_connection");
  public get awsCloudConnection() {
    return this._awsCloudConnection;
  }

  // azure_cloud_connection - computed: true, optional: false, required: false
  private _azureCloudConnection = new DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference(this, "azure_cloud_connection");
  public get azureCloudConnection() {
    return this._azureCloudConnection;
  }

  // bandwidth_tier_gigabits_per_second - computed: true, optional: false, required: false
  public get bandwidthTierGigabitsPerSecond() {
    return this.getNumberAttribute('bandwidth_tier_gigabits_per_second');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // destinations - computed: true, optional: false, required: false
  private _destinations = new DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList(this, "destinations", false);
  public get destinations() {
    return this._destinations;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // error_message - computed: true, optional: false, required: false
  public get errorMessage() {
    return this.getStringAttribute('error_message');
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

  // private_dns_resolvers - computed: true, optional: false, required: false
  private _privateDnsResolvers = new DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList(this, "private_dns_resolvers", false);
  public get privateDnsResolvers() {
    return this._privateDnsResolvers;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // traffic_mode - computed: true, optional: false, required: false
  public get trafficMode() {
    return this.getStringAttribute('traffic_mode');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
}

export class DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksPrivateNetworkGatewaysPrivateNetworkGateways[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference {
    return new DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways databricks_private_network_gateways}
*/
export class DataDatabricksPrivateNetworkGateways extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_private_network_gateways";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataDatabricksPrivateNetworkGateways resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksPrivateNetworkGateways to import
  * @param importFromId The id of the existing DataDatabricksPrivateNetworkGateways that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksPrivateNetworkGateways to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_private_network_gateways", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways databricks_private_network_gateways} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksPrivateNetworkGatewaysConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksPrivateNetworkGatewaysConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_private_network_gateways',
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
    this._parent = config.parent;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // private_network_gateways - computed: true, optional: false, required: false
  private _privateNetworkGateways = new DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList(this, "private_network_gateways", false);
  public get privateNetworkGateways() {
    return this._privateNetworkGateways;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      parent: cdktn.stringToTerraform(this._parent),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      parent: {
        value: cdktn.stringToHclTerraform(this._parent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
