/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataDatabricksPrivateNetworkGatewayConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#name DataDatabricksPrivateNetworkGateway#name}
  */
  readonly name: string;
}
export interface DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#role_arn DataDatabricksPrivateNetworkGateway#role_arn}
  */
  readonly roleArn: string;
}

export function dataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleToTerraform(struct?: DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function dataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleToHclTerraform(struct?: DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole): any {
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

export class DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole | undefined) {
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
export interface DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#subnet_id DataDatabricksPrivateNetworkGateway#subnet_id}
  */
  readonly subnetId: string;
}

export function dataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsToTerraform(struct?: DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    subnet_id: cdktn.stringToTerraform(struct!.subnetId),
  }
}


export function dataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsToHclTerraform(struct?: DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets): any {
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

export class DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets | undefined) {
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

export class DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference {
    return new DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksPrivateNetworkGatewayAwsCloudConnection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#cross_account_role DataDatabricksPrivateNetworkGateway#cross_account_role}
  */
  readonly crossAccountRole: DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#gateway_subnets DataDatabricksPrivateNetworkGateway#gateway_subnets}
  */
  readonly gatewaySubnets: DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#security_group_ids DataDatabricksPrivateNetworkGateway#security_group_ids}
  */
  readonly securityGroupIds: string[];
}

export function dataDatabricksPrivateNetworkGatewayAwsCloudConnectionToTerraform(struct?: DataDatabricksPrivateNetworkGatewayAwsCloudConnection): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cross_account_role: dataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleToTerraform(struct!.crossAccountRole),
    gateway_subnets: cdktn.listMapper(dataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsToTerraform, false)(struct!.gatewaySubnets),
    security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
  }
}


export function dataDatabricksPrivateNetworkGatewayAwsCloudConnectionToHclTerraform(struct?: DataDatabricksPrivateNetworkGatewayAwsCloudConnection): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cross_account_role: {
      value: dataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleToHclTerraform(struct!.crossAccountRole),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole",
    },
    gateway_subnets: {
      value: cdktn.listMapperHcl(dataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsToHclTerraform, false)(struct!.gatewaySubnets),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList",
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

export class DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksPrivateNetworkGatewayAwsCloudConnection | undefined {
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

  public set internalValue(value: DataDatabricksPrivateNetworkGatewayAwsCloudConnection | undefined) {
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
  private _crossAccountRole = new DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference(this, "cross_account_role");
  public get crossAccountRole() {
    return this._crossAccountRole;
  }
  public putCrossAccountRole(value: DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole) {
    this._crossAccountRole.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountRoleInput() {
    return this._crossAccountRole.internalValue;
  }

  // gateway_subnets - computed: true, optional: false, required: true
  private _gatewaySubnets = new DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList(this, "gateway_subnets", false);
  public get gatewaySubnets() {
    return this._gatewaySubnets;
  }
  public putGatewaySubnets(value: DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets[] | cdktn.IResolvable) {
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
export interface DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#resource_id DataDatabricksPrivateNetworkGateway#resource_id}
  */
  readonly resourceId: string;
}

export function dataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetToTerraform(struct?: DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_id: cdktn.stringToTerraform(struct!.resourceId),
  }
}


export function dataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetToHclTerraform(struct?: DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet): any {
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

export class DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet | undefined) {
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
export interface DataDatabricksPrivateNetworkGatewayAzureCloudConnection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#gateway_subnet DataDatabricksPrivateNetworkGateway#gateway_subnet}
  */
  readonly gatewaySubnet: DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet;
}

export function dataDatabricksPrivateNetworkGatewayAzureCloudConnectionToTerraform(struct?: DataDatabricksPrivateNetworkGatewayAzureCloudConnection): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    gateway_subnet: dataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetToTerraform(struct!.gatewaySubnet),
  }
}


export function dataDatabricksPrivateNetworkGatewayAzureCloudConnectionToHclTerraform(struct?: DataDatabricksPrivateNetworkGatewayAzureCloudConnection): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    gateway_subnet: {
      value: dataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetToHclTerraform(struct!.gatewaySubnet),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksPrivateNetworkGatewayAzureCloudConnection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gatewaySubnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewaySubnet = this._gatewaySubnet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksPrivateNetworkGatewayAzureCloudConnection | undefined) {
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
  private _gatewaySubnet = new DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference(this, "gateway_subnet");
  public get gatewaySubnet() {
    return this._gatewaySubnet;
  }
  public putGatewaySubnet(value: DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet) {
    this._gatewaySubnet.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewaySubnetInput() {
    return this._gatewaySubnet.internalValue;
  }
}
export interface DataDatabricksPrivateNetworkGatewayDestinations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#destination_type DataDatabricksPrivateNetworkGateway#destination_type}
  */
  readonly destinationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#value DataDatabricksPrivateNetworkGateway#value}
  */
  readonly value: string;
}

export function dataDatabricksPrivateNetworkGatewayDestinationsToTerraform(struct?: DataDatabricksPrivateNetworkGatewayDestinations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination_type: cdktn.stringToTerraform(struct!.destinationType),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function dataDatabricksPrivateNetworkGatewayDestinationsToHclTerraform(struct?: DataDatabricksPrivateNetworkGatewayDestinations): any {
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

export class DataDatabricksPrivateNetworkGatewayDestinationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksPrivateNetworkGatewayDestinations | undefined {
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

  public set internalValue(value: DataDatabricksPrivateNetworkGatewayDestinations | undefined) {
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

export class DataDatabricksPrivateNetworkGatewayDestinationsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksPrivateNetworkGatewayDestinations[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksPrivateNetworkGatewayDestinationsOutputReference {
    return new DataDatabricksPrivateNetworkGatewayDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksPrivateNetworkGatewayPrivateDnsResolvers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#resolver_type DataDatabricksPrivateNetworkGateway#resolver_type}
  */
  readonly resolverType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#value DataDatabricksPrivateNetworkGateway#value}
  */
  readonly value: string;
}

export function dataDatabricksPrivateNetworkGatewayPrivateDnsResolversToTerraform(struct?: DataDatabricksPrivateNetworkGatewayPrivateDnsResolvers): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resolver_type: cdktn.stringToTerraform(struct!.resolverType),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function dataDatabricksPrivateNetworkGatewayPrivateDnsResolversToHclTerraform(struct?: DataDatabricksPrivateNetworkGatewayPrivateDnsResolvers): any {
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

export class DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksPrivateNetworkGatewayPrivateDnsResolvers | undefined {
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

  public set internalValue(value: DataDatabricksPrivateNetworkGatewayPrivateDnsResolvers | undefined) {
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

export class DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksPrivateNetworkGatewayPrivateDnsResolvers[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference {
    return new DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway databricks_private_network_gateway}
*/
export class DataDatabricksPrivateNetworkGateway extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_private_network_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataDatabricksPrivateNetworkGateway resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksPrivateNetworkGateway to import
  * @param importFromId The id of the existing DataDatabricksPrivateNetworkGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksPrivateNetworkGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_private_network_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway databricks_private_network_gateway} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksPrivateNetworkGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksPrivateNetworkGatewayConfig) {
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
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_cloud_connection - computed: true, optional: false, required: false
  private _awsCloudConnection = new DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference(this, "aws_cloud_connection");
  public get awsCloudConnection() {
    return this._awsCloudConnection;
  }

  // azure_cloud_connection - computed: true, optional: false, required: false
  private _azureCloudConnection = new DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference(this, "azure_cloud_connection");
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
  private _destinations = new DataDatabricksPrivateNetworkGatewayDestinationsList(this, "destinations", false);
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

  // name - computed: false, optional: false, required: true
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
  private _privateDnsResolvers = new DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList(this, "private_dns_resolvers", false);
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktn.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
