/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/instance_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataDatabricksInstancePoolConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/instance_pool#id DataDatabricksInstancePool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/instance_pool#name DataDatabricksInstancePool#name}
  */
  readonly name: string;
  /**
  * pool_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/instance_pool#pool_info DataDatabricksInstancePool#pool_info}
  */
  readonly poolInfo?: DataDatabricksInstancePoolPoolInfo;
  /**
  * provider_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/instance_pool#provider_config DataDatabricksInstancePool#provider_config}
  */
  readonly providerConfig?: DataDatabricksInstancePoolProviderConfig;
}
export interface DataDatabricksInstancePoolPoolInfoAwsAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/instance_pool#availability DataDatabricksInstancePool#availability}
  */
  readonly availability?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/instance_pool#instance_profile_arn DataDatabricksInstancePool#instance_profile_arn}
  */
  readonly instanceProfileArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/instance_pool#spot_bid_price_percent DataDatabricksInstancePool#spot_bid_price_percent}
  */
  readonly spotBidPricePercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/instance_pool#zone_id DataDatabricksInstancePool#zone_id}
  */
  readonly zoneId?: string;
}

export function dataDatabricksInstancePoolPoolInfoAwsAttributesToTerraform(struct?: DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference | DataDatabricksInstancePoolPoolInfoAwsAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability: cdktn.stringToTerraform(struct!.availability),
    instance_profile_arn: cdktn.stringToTerraform(struct!.instanceProfileArn),
    spot_bid_price_percent: cdktn.numberToTerraform(struct!.spotBidPricePercent),
    zone_id: cdktn.stringToTerraform(struct!.zoneId),
  }
}


export function dataDatabricksInstancePoolPoolInfoAwsAttributesToHclTerraform(struct?: DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference | DataDatabricksInstancePoolPoolInfoAwsAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability: {
      value: cdktn.stringToHclTerraform(struct!.availability),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_profile_arn: {
      value: cdktn.stringToHclTerraform(struct!.instanceProfileArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spot_bid_price_percent: {
      value: cdktn.numberToHclTerraform(struct!.spotBidPricePercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_id: {
      value: cdktn.stringToHclTerraform(struct!.zoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksInstancePoolPoolInfoAwsAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availability !== undefined) {
      hasAnyValues = true;
      internalValueResult.availability = this._availability;
    }
    if (this._instanceProfileArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceProfileArn = this._instanceProfileArn;
    }
    if (this._spotBidPricePercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotBidPricePercent = this._spotBidPricePercent;
    }
    if (this._zoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneId = this._zoneId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksInstancePoolPoolInfoAwsAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availability = undefined;
      this._instanceProfileArn = undefined;
      this._spotBidPricePercent = undefined;
      this._zoneId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availability = value.availability;
      this._instanceProfileArn = value.instanceProfileArn;
      this._spotBidPricePercent = value.spotBidPricePercent;
      this._zoneId = value.zoneId;
    }
  }

  // availability - computed: false, optional: true, required: false
  private _availability?: string; 
  public get availability() {
    return this.getStringAttribute('availability');
  }
  public set availability(value: string) {
    this._availability = value;
  }
  public resetAvailability() {
    this._availability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityInput() {
    return this._availability;
  }

  // instance_profile_arn - computed: false, optional: true, required: false
  private _instanceProfileArn?: string; 
  public get instanceProfileArn() {
    return this.getStringAttribute('instance_profile_arn');
  }
  public set instanceProfileArn(value: string) {
    this._instanceProfileArn = value;
  }
  public resetInstanceProfileArn() {
    this._instanceProfileArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceProfileArnInput() {
    return this._instanceProfileArn;
  }

  // spot_bid_price_percent - computed: false, optional: true, required: false
  private _spotBidPricePercent?: number; 
  public get spotBidPricePercent() {
    return this.getNumberAttribute('spot_bid_price_percent');
  }
  public set spotBidPricePercent(value: number) {
    this._spotBidPricePercent = value;
  }
  public resetSpotBidPricePercent() {
    this._spotBidPricePercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotBidPricePercentInput() {
    return this._spotBidPricePercent;
  }

  // zone_id - computed: true, optional: true, required: false
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  public resetZoneId() {
    this._zoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }
}
export interface DataDatabricksInstancePoolPoolInfoAzureAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/instance_pool#availability DataDatabricksInstancePool#availability}
  */
  readonly availability?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/instance_pool#spot_bid_max_price DataDatabricksInstancePool#spot_bid_max_price}
  */
  readonly spotBidMaxPrice?: number;
}

export function dataDatabricksInstancePoolPoolInfoAzureAttributesToTerraform(struct?: DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference | DataDatabricksInstancePoolPoolInfoAzureAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability: cdktn.stringToTerraform(struct!.availability),
    spot_bid_max_price: cdktn.numberToTerraform(struct!.spotBidMaxPrice),
  }
}


export function dataDatabricksInstancePoolPoolInfoAzureAttributesToHclTerraform(struct?: DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference | DataDatabricksInstancePoolPoolInfoAzureAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability: {
      value: cdktn.stringToHclTerraform(struct!.availability),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spot_bid_max_price: {
      value: cdktn.numberToHclTerraform(struct!.spotBidMaxPrice),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksInstancePoolPoolInfoAzureAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availability !== undefined) {
      hasAnyValues = true;
      internalValueResult.availability = this._availability;
    }
    if (this._spotBidMaxPrice !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotBidMaxPrice = this._spotBidMaxPrice;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksInstancePoolPoolInfoAzureAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availability = undefined;
      this._spotBidMaxPrice = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availability = value.availability;
      this._spotBidMaxPrice = value.spotBidMaxPrice;
    }
  }

  // availability - computed: false, optional: true, required: false
  private _availability?: string; 
  public get availability() {
    return this.getStringAttribute('availability');
  }
  public set availability(value: string) {
    this._availability = value;
  }
  public resetAvailability() {
    this._availability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityInput() {
    return this._availability;
  }

  // spot_bid_max_price - computed: false, optional: true, required: false
  private _spotBidMaxPrice?: number; 
  public get spotBidMaxPrice() {
    return this.getNumberAttribute('spot_bid_max_price');
  }
  public set spotBidMaxPrice(value: number) {
    this._spotBidMaxPrice = value;
  }
  public resetSpotBidMaxPrice() {
    this._spotBidMaxPrice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotBidMaxPriceInput() {
    return this._spotBidMaxPrice;
  }
}
export interface DataDatabricksInstancePoolPoolInfoDiskSpecDiskType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/instance_pool#azure_disk_volume_type DataDatabricksInstancePool#azure_disk_volume_type}
  */
  readonly azureDiskVolumeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/instance_pool#ebs_volume_type DataDatabricksInstancePool#ebs_volume_type}
  */
  readonly ebsVolumeType?: string;
}

export function dataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeToTerraform(struct?: DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference | DataDatabricksInstancePoolPoolInfoDiskSpecDiskType): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_disk_volume_type: cdktn.stringToTerraform(struct!.azureDiskVolumeType),
    ebs_volume_type: cdktn.stringToTerraform(struct!.ebsVolumeType),
  }
}


export function dataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeToHclTerraform(struct?: DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference | DataDatabricksInstancePoolPoolInfoDiskSpecDiskType): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure_disk_volume_type: {
      value: cdktn.stringToHclTerraform(struct!.azureDiskVolumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ebs_volume_type: {
      value: cdktn.stringToHclTerraform(struct!.ebsVolumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksInstancePoolPoolInfoDiskSpecDiskType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azureDiskVolumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureDiskVolumeType = this._azureDiskVolumeType;
    }
    if (this._ebsVolumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsVolumeType = this._ebsVolumeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksInstancePoolPoolInfoDiskSpecDiskType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._azureDiskVolumeType = undefined;
      this._ebsVolumeType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._azureDiskVolumeType = value.azureDiskVolumeType;
      this._ebsVolumeType = value.ebsVolumeType;
    }
  }

  // azure_disk_volume_type - computed: false, optional: true, required: false
  private _azureDiskVolumeType?: string; 
  public get azureDiskVolumeType() {
    return this.getStringAttribute('azure_disk_volume_type');
  }
  public set azureDiskVolumeType(value: string) {
    this._azureDiskVolumeType = value;
  }
  public resetAzureDiskVolumeType() {
    this._azureDiskVolumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureDiskVolumeTypeInput() {
    return this._azureDiskVolumeType;
  }

  // ebs_volume_type - computed: false, optional: true, required: false
  private _ebsVolumeType?: string; 
  public get ebsVolumeType() {
    return this.getStringAttribute('ebs_volume_type');
  }
  public set ebsVolumeType(value: string) {
    this._ebsVolumeType = value;
  }
  public resetEbsVolumeType() {
    this._ebsVolumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsVolumeTypeInput() {
    return this._ebsVolumeType;
  }
}
export interface DataDatabricksInstancePoolPoolInfoDiskSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/instance_pool#disk_count DataDatabricksInstancePool#disk_count}
  */
  readonly diskCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/instance_pool#disk_size DataDatabricksInstancePool#disk_size}
  */
  readonly diskSize?: number;
  /**
  * disk_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/instance_pool#disk_type DataDatabricksInstancePool#disk_type}
  */
  readonly diskType?: DataDatabricksInstancePoolPoolInfoDiskSpecDiskType;
}

export function dataDatabricksInstancePoolPoolInfoDiskSpecToTerraform(struct?: DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference | DataDatabricksInstancePoolPoolInfoDiskSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_count: cdktn.numberToTerraform(struct!.diskCount),
    disk_size: cdktn.numberToTerraform(struct!.diskSize),
    disk_type: dataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeToTerraform(struct!.diskType),
  }
}


export function dataDatabricksInstancePoolPoolInfoDiskSpecToHclTerraform(struct?: DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference | DataDatabricksInstancePoolPoolInfoDiskSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_count: {
      value: cdktn.numberToHclTerraform(struct!.diskCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_size: {
      value: cdktn.numberToHclTerraform(struct!.diskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_type: {
      value: dataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeToHclTerraform(struct!.diskType),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksInstancePoolPoolInfoDiskSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskCount = this._diskCount;
    }
    if (this._diskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSize = this._diskSize;
    }
    if (this._diskType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksInstancePoolPoolInfoDiskSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskCount = undefined;
      this._diskSize = undefined;
      this._diskType.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskCount = value.diskCount;
      this._diskSize = value.diskSize;
      this._diskType.internalValue = value.diskType;
    }
  }

  // disk_count - computed: false, optional: true, required: false
  private _diskCount?: number; 
  public get diskCount() {
    return this.getNumberAttribute('disk_count');
  }
  public set diskCount(value: number) {
    this._diskCount = value;
  }
  public resetDiskCount() {
    this._diskCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskCountInput() {
    return this._diskCount;
  }

  // disk_size - computed: false, optional: true, required: false
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  public resetDiskSize() {
    this._diskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // disk_type - computed: false, optional: true, required: false
  private _diskType = new DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference(this, "disk_type");
  public get diskType() {
    return this._diskType;
  }
  public putDiskType(value: DataDatabricksInstancePoolPoolInfoDiskSpecDiskType) {
    this._diskType.internalValue = value;
  }
  public resetDiskType() {
    this._diskType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType.internalValue;
  }
}
export interface DataDatabricksInstancePoolPoolInfoGcpAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/instance_pool#gcp_availability DataDatabricksInstancePool#gcp_availability}
  */
  readonly gcpAvailability?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/instance_pool#local_ssd_count DataDatabricksInstancePool#local_ssd_count}
  */
  readonly localSsdCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/instance_pool#zone_id DataDatabricksInstancePool#zone_id}
  */
  readonly zoneId?: string;
}

export function dataDatabricksInstancePoolPoolInfoGcpAttributesToTerraform(struct?: DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference | DataDatabricksInstancePoolPoolInfoGcpAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gcp_availability: cdktn.stringToTerraform(struct!.gcpAvailability),
    local_ssd_count: cdktn.numberToTerraform(struct!.localSsdCount),
    zone_id: cdktn.stringToTerraform(struct!.zoneId),
  }
}


export function dataDatabricksInstancePoolPoolInfoGcpAttributesToHclTerraform(struct?: DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference | DataDatabricksInstancePoolPoolInfoGcpAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gcp_availability: {
      value: cdktn.stringToHclTerraform(struct!.gcpAvailability),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_ssd_count: {
      value: cdktn.numberToHclTerraform(struct!.localSsdCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_id: {
      value: cdktn.stringToHclTerraform(struct!.zoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksInstancePoolPoolInfoGcpAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gcpAvailability !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpAvailability = this._gcpAvailability;
    }
    if (this._localSsdCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSsdCount = this._localSsdCount;
    }
    if (this._zoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneId = this._zoneId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksInstancePoolPoolInfoGcpAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gcpAvailability = undefined;
      this._localSsdCount = undefined;
      this._zoneId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gcpAvailability = value.gcpAvailability;
      this._localSsdCount = value.localSsdCount;
      this._zoneId = value.zoneId;
    }
  }

  // gcp_availability - computed: false, optional: true, required: false
  private _gcpAvailability?: string; 
  public get gcpAvailability() {
    return this.getStringAttribute('gcp_availability');
  }
  public set gcpAvailability(value: string) {
    this._gcpAvailability = value;
  }
  public resetGcpAvailability() {
    this._gcpAvailability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpAvailabilityInput() {
    return this._gcpAvailability;
  }

  // local_ssd_count - computed: true, optional: true, required: false
  private _localSsdCount?: number; 
  public get localSsdCount() {
    return this.getNumberAttribute('local_ssd_count');
  }
  public set localSsdCount(value: number) {
    this._localSsdCount = value;
  }
  public resetLocalSsdCount() {
    this._localSsdCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localSsdCountInput() {
    return this._localSsdCount;
  }

  // zone_id - computed: true, optional: true, required: false
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  public resetZoneId() {
    this._zoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }
}
export interface DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/instance_pool#allocation_strategy DataDatabricksInstancePool#allocation_strategy}
  */
  readonly allocationStrategy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/instance_pool#instance_pools_to_use_count DataDatabricksInstancePool#instance_pools_to_use_count}
  */
  readonly instancePoolsToUseCount?: number;
}

export function dataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionToTerraform(struct?: DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference | DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOption): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocation_strategy: cdktn.stringToTerraform(struct!.allocationStrategy),
    instance_pools_to_use_count: cdktn.numberToTerraform(struct!.instancePoolsToUseCount),
  }
}


export function dataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionToHclTerraform(struct?: DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference | DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOption): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allocation_strategy: {
      value: cdktn.stringToHclTerraform(struct!.allocationStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_pools_to_use_count: {
      value: cdktn.numberToHclTerraform(struct!.instancePoolsToUseCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocationStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocationStrategy = this._allocationStrategy;
    }
    if (this._instancePoolsToUseCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.instancePoolsToUseCount = this._instancePoolsToUseCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allocationStrategy = undefined;
      this._instancePoolsToUseCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allocationStrategy = value.allocationStrategy;
      this._instancePoolsToUseCount = value.instancePoolsToUseCount;
    }
  }

  // allocation_strategy - computed: false, optional: false, required: true
  private _allocationStrategy?: string; 
  public get allocationStrategy() {
    return this.getStringAttribute('allocation_strategy');
  }
  public set allocationStrategy(value: string) {
    this._allocationStrategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationStrategyInput() {
    return this._allocationStrategy;
  }

  // instance_pools_to_use_count - computed: false, optional: true, required: false
  private _instancePoolsToUseCount?: number; 
  public get instancePoolsToUseCount() {
    return this.getNumberAttribute('instance_pools_to_use_count');
  }
  public set instancePoolsToUseCount(value: number) {
    this._instancePoolsToUseCount = value;
  }
  public resetInstancePoolsToUseCount() {
    this._instancePoolsToUseCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancePoolsToUseCountInput() {
    return this._instancePoolsToUseCount;
  }
}
export interface DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/instance_pool#allocation_strategy DataDatabricksInstancePool#allocation_strategy}
  */
  readonly allocationStrategy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/instance_pool#instance_pools_to_use_count DataDatabricksInstancePool#instance_pools_to_use_count}
  */
  readonly instancePoolsToUseCount?: number;
}

export function dataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionToTerraform(struct?: DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference | DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOption): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocation_strategy: cdktn.stringToTerraform(struct!.allocationStrategy),
    instance_pools_to_use_count: cdktn.numberToTerraform(struct!.instancePoolsToUseCount),
  }
}


export function dataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionToHclTerraform(struct?: DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference | DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOption): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allocation_strategy: {
      value: cdktn.stringToHclTerraform(struct!.allocationStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_pools_to_use_count: {
      value: cdktn.numberToHclTerraform(struct!.instancePoolsToUseCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocationStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocationStrategy = this._allocationStrategy;
    }
    if (this._instancePoolsToUseCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.instancePoolsToUseCount = this._instancePoolsToUseCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allocationStrategy = undefined;
      this._instancePoolsToUseCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allocationStrategy = value.allocationStrategy;
      this._instancePoolsToUseCount = value.instancePoolsToUseCount;
    }
  }

  // allocation_strategy - computed: false, optional: false, required: true
  private _allocationStrategy?: string; 
  public get allocationStrategy() {
    return this.getStringAttribute('allocation_strategy');
  }
  public set allocationStrategy(value: string) {
    this._allocationStrategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationStrategyInput() {
    return this._allocationStrategy;
  }

  // instance_pools_to_use_count - computed: false, optional: true, required: false
  private _instancePoolsToUseCount?: number; 
  public get instancePoolsToUseCount() {
    return this.getNumberAttribute('instance_pools_to_use_count');
  }
  public set instancePoolsToUseCount(value: number) {
    this._instancePoolsToUseCount = value;
  }
  public resetInstancePoolsToUseCount() {
    this._instancePoolsToUseCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancePoolsToUseCountInput() {
    return this._instancePoolsToUseCount;
  }
}
export interface DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverride {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/instance_pool#availability_zone DataDatabricksInstancePool#availability_zone}
  */
  readonly availabilityZone: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/instance_pool#instance_type DataDatabricksInstancePool#instance_type}
  */
  readonly instanceType: string;
}

export function dataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideToTerraform(struct?: DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverride | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_zone: cdktn.stringToTerraform(struct!.availabilityZone),
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
  }
}


export function dataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideToHclTerraform(struct?: DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverride | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability_zone: {
      value: cdktn.stringToHclTerraform(struct!.availabilityZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_type: {
      value: cdktn.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverride | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZone = this._availabilityZone;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverride | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availabilityZone = undefined;
      this._instanceType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availabilityZone = value.availabilityZone;
      this._instanceType = value.instanceType;
    }
  }

  // availability_zone - computed: false, optional: false, required: true
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // instance_type - computed: false, optional: false, required: true
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }
}

export class DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverride[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference {
    return new DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributes {
  /**
  * fleet_on_demand_option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/instance_pool#fleet_on_demand_option DataDatabricksInstancePool#fleet_on_demand_option}
  */
  readonly fleetOnDemandOption?: DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOption;
  /**
  * fleet_spot_option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/instance_pool#fleet_spot_option DataDatabricksInstancePool#fleet_spot_option}
  */
  readonly fleetSpotOption?: DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOption;
  /**
  * launch_template_override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/instance_pool#launch_template_override DataDatabricksInstancePool#launch_template_override}
  */
  readonly launchTemplateOverride: DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverride[] | cdktn.IResolvable;
}

export function dataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesToTerraform(struct?: DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fleet_on_demand_option: dataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionToTerraform(struct!.fleetOnDemandOption),
    fleet_spot_option: dataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionToTerraform(struct!.fleetSpotOption),
    launch_template_override: cdktn.listMapper(dataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideToTerraform, true)(struct!.launchTemplateOverride),
  }
}


export function dataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesToHclTerraform(struct?: DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fleet_on_demand_option: {
      value: dataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionToHclTerraform(struct!.fleetOnDemandOption),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionList",
    },
    fleet_spot_option: {
      value: dataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionToHclTerraform(struct!.fleetSpotOption),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionList",
    },
    launch_template_override: {
      value: cdktn.listMapperHcl(dataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideToHclTerraform, true)(struct!.launchTemplateOverride),
      isBlock: true,
      type: "set",
      storageClassType: "DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fleetOnDemandOption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fleetOnDemandOption = this._fleetOnDemandOption?.internalValue;
    }
    if (this._fleetSpotOption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fleetSpotOption = this._fleetSpotOption?.internalValue;
    }
    if (this._launchTemplateOverride?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchTemplateOverride = this._launchTemplateOverride?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fleetOnDemandOption.internalValue = undefined;
      this._fleetSpotOption.internalValue = undefined;
      this._launchTemplateOverride.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fleetOnDemandOption.internalValue = value.fleetOnDemandOption;
      this._fleetSpotOption.internalValue = value.fleetSpotOption;
      this._launchTemplateOverride.internalValue = value.launchTemplateOverride;
    }
  }

  // fleet_on_demand_option - computed: false, optional: true, required: false
  private _fleetOnDemandOption = new DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference(this, "fleet_on_demand_option");
  public get fleetOnDemandOption() {
    return this._fleetOnDemandOption;
  }
  public putFleetOnDemandOption(value: DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOption) {
    this._fleetOnDemandOption.internalValue = value;
  }
  public resetFleetOnDemandOption() {
    this._fleetOnDemandOption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetOnDemandOptionInput() {
    return this._fleetOnDemandOption.internalValue;
  }

  // fleet_spot_option - computed: false, optional: true, required: false
  private _fleetSpotOption = new DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference(this, "fleet_spot_option");
  public get fleetSpotOption() {
    return this._fleetSpotOption;
  }
  public putFleetSpotOption(value: DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOption) {
    this._fleetSpotOption.internalValue = value;
  }
  public resetFleetSpotOption() {
    this._fleetSpotOption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetSpotOptionInput() {
    return this._fleetSpotOption.internalValue;
  }

  // launch_template_override - computed: false, optional: false, required: true
  private _launchTemplateOverride = new DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideList(this, "launch_template_override", true);
  public get launchTemplateOverride() {
    return this._launchTemplateOverride;
  }
  public putLaunchTemplateOverride(value: DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverride[] | cdktn.IResolvable) {
    this._launchTemplateOverride.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateOverrideInput() {
    return this._launchTemplateOverride.internalValue;
  }
}

export class DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributes[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference {
    return new DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksInstancePoolPoolInfoNodeTypeFlexibility {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/instance_pool#alternate_node_type_ids DataDatabricksInstancePool#alternate_node_type_ids}
  */
  readonly alternateNodeTypeIds: string[];
}

export function dataDatabricksInstancePoolPoolInfoNodeTypeFlexibilityToTerraform(struct?: DataDatabricksInstancePoolPoolInfoNodeTypeFlexibilityOutputReference | DataDatabricksInstancePoolPoolInfoNodeTypeFlexibility): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alternate_node_type_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.alternateNodeTypeIds),
  }
}


export function dataDatabricksInstancePoolPoolInfoNodeTypeFlexibilityToHclTerraform(struct?: DataDatabricksInstancePoolPoolInfoNodeTypeFlexibilityOutputReference | DataDatabricksInstancePoolPoolInfoNodeTypeFlexibility): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alternate_node_type_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.alternateNodeTypeIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksInstancePoolPoolInfoNodeTypeFlexibilityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksInstancePoolPoolInfoNodeTypeFlexibility | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alternateNodeTypeIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.alternateNodeTypeIds = this._alternateNodeTypeIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksInstancePoolPoolInfoNodeTypeFlexibility | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alternateNodeTypeIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alternateNodeTypeIds = value.alternateNodeTypeIds;
    }
  }

  // alternate_node_type_ids - computed: false, optional: false, required: true
  private _alternateNodeTypeIds?: string[]; 
  public get alternateNodeTypeIds() {
    return this.getListAttribute('alternate_node_type_ids');
  }
  public set alternateNodeTypeIds(value: string[]) {
    this._alternateNodeTypeIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alternateNodeTypeIdsInput() {
    return this._alternateNodeTypeIds;
  }
}
export interface DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/instance_pool#password DataDatabricksInstancePool#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/instance_pool#username DataDatabricksInstancePool#username}
  */
  readonly username: string;
}

export function dataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthToTerraform(struct?: DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference | DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuth): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktn.stringToTerraform(struct!.password),
    username: cdktn.stringToTerraform(struct!.username),
  }
}


export function dataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthToHclTerraform(struct?: DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference | DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuth): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktn.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktn.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface DataDatabricksInstancePoolPoolInfoPreloadedDockerImage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/instance_pool#url DataDatabricksInstancePool#url}
  */
  readonly url: string;
  /**
  * basic_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/instance_pool#basic_auth DataDatabricksInstancePool#basic_auth}
  */
  readonly basicAuth?: DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuth;
}

export function dataDatabricksInstancePoolPoolInfoPreloadedDockerImageToTerraform(struct?: DataDatabricksInstancePoolPoolInfoPreloadedDockerImage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktn.stringToTerraform(struct!.url),
    basic_auth: dataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthToTerraform(struct!.basicAuth),
  }
}


export function dataDatabricksInstancePoolPoolInfoPreloadedDockerImageToHclTerraform(struct?: DataDatabricksInstancePoolPoolInfoPreloadedDockerImage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    url: {
      value: cdktn.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    basic_auth: {
      value: dataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthToHclTerraform(struct!.basicAuth),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksInstancePoolPoolInfoPreloadedDockerImage | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._basicAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuth = this._basicAuth?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksInstancePoolPoolInfoPreloadedDockerImage | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._url = undefined;
      this._basicAuth.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._url = value.url;
      this._basicAuth.internalValue = value.basicAuth;
    }
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // basic_auth - computed: false, optional: true, required: false
  private _basicAuth = new DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference(this, "basic_auth");
  public get basicAuth() {
    return this._basicAuth;
  }
  public putBasicAuth(value: DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuth) {
    this._basicAuth.internalValue = value;
  }
  public resetBasicAuth() {
    this._basicAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthInput() {
    return this._basicAuth.internalValue;
  }
}

export class DataDatabricksInstancePoolPoolInfoPreloadedDockerImageList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksInstancePoolPoolInfoPreloadedDockerImage[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference {
    return new DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksInstancePoolPoolInfoStats {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/instance_pool#idle_count DataDatabricksInstancePool#idle_count}
  */
  readonly idleCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/instance_pool#pending_idle_count DataDatabricksInstancePool#pending_idle_count}
  */
  readonly pendingIdleCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/instance_pool#pending_used_count DataDatabricksInstancePool#pending_used_count}
  */
  readonly pendingUsedCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/instance_pool#used_count DataDatabricksInstancePool#used_count}
  */
  readonly usedCount?: number;
}

export function dataDatabricksInstancePoolPoolInfoStatsToTerraform(struct?: DataDatabricksInstancePoolPoolInfoStatsOutputReference | DataDatabricksInstancePoolPoolInfoStats): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    idle_count: cdktn.numberToTerraform(struct!.idleCount),
    pending_idle_count: cdktn.numberToTerraform(struct!.pendingIdleCount),
    pending_used_count: cdktn.numberToTerraform(struct!.pendingUsedCount),
    used_count: cdktn.numberToTerraform(struct!.usedCount),
  }
}


export function dataDatabricksInstancePoolPoolInfoStatsToHclTerraform(struct?: DataDatabricksInstancePoolPoolInfoStatsOutputReference | DataDatabricksInstancePoolPoolInfoStats): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    idle_count: {
      value: cdktn.numberToHclTerraform(struct!.idleCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pending_idle_count: {
      value: cdktn.numberToHclTerraform(struct!.pendingIdleCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pending_used_count: {
      value: cdktn.numberToHclTerraform(struct!.pendingUsedCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    used_count: {
      value: cdktn.numberToHclTerraform(struct!.usedCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksInstancePoolPoolInfoStatsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksInstancePoolPoolInfoStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idleCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleCount = this._idleCount;
    }
    if (this._pendingIdleCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.pendingIdleCount = this._pendingIdleCount;
    }
    if (this._pendingUsedCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.pendingUsedCount = this._pendingUsedCount;
    }
    if (this._usedCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.usedCount = this._usedCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksInstancePoolPoolInfoStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._idleCount = undefined;
      this._pendingIdleCount = undefined;
      this._pendingUsedCount = undefined;
      this._usedCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._idleCount = value.idleCount;
      this._pendingIdleCount = value.pendingIdleCount;
      this._pendingUsedCount = value.pendingUsedCount;
      this._usedCount = value.usedCount;
    }
  }

  // idle_count - computed: false, optional: true, required: false
  private _idleCount?: number; 
  public get idleCount() {
    return this.getNumberAttribute('idle_count');
  }
  public set idleCount(value: number) {
    this._idleCount = value;
  }
  public resetIdleCount() {
    this._idleCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleCountInput() {
    return this._idleCount;
  }

  // pending_idle_count - computed: false, optional: true, required: false
  private _pendingIdleCount?: number; 
  public get pendingIdleCount() {
    return this.getNumberAttribute('pending_idle_count');
  }
  public set pendingIdleCount(value: number) {
    this._pendingIdleCount = value;
  }
  public resetPendingIdleCount() {
    this._pendingIdleCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pendingIdleCountInput() {
    return this._pendingIdleCount;
  }

  // pending_used_count - computed: false, optional: true, required: false
  private _pendingUsedCount?: number; 
  public get pendingUsedCount() {
    return this.getNumberAttribute('pending_used_count');
  }
  public set pendingUsedCount(value: number) {
    this._pendingUsedCount = value;
  }
  public resetPendingUsedCount() {
    this._pendingUsedCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pendingUsedCountInput() {
    return this._pendingUsedCount;
  }

  // used_count - computed: false, optional: true, required: false
  private _usedCount?: number; 
  public get usedCount() {
    return this.getNumberAttribute('used_count');
  }
  public set usedCount(value: number) {
    this._usedCount = value;
  }
  public resetUsedCount() {
    this._usedCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usedCountInput() {
    return this._usedCount;
  }
}
export interface DataDatabricksInstancePoolPoolInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/instance_pool#custom_tags DataDatabricksInstancePool#custom_tags}
  */
  readonly customTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/instance_pool#default_tags DataDatabricksInstancePool#default_tags}
  */
  readonly defaultTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/instance_pool#enable_elastic_disk DataDatabricksInstancePool#enable_elastic_disk}
  */
  readonly enableElasticDisk?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/instance_pool#idle_instance_autotermination_minutes DataDatabricksInstancePool#idle_instance_autotermination_minutes}
  */
  readonly idleInstanceAutoterminationMinutes: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/instance_pool#instance_pool_id DataDatabricksInstancePool#instance_pool_id}
  */
  readonly instancePoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/instance_pool#instance_pool_name DataDatabricksInstancePool#instance_pool_name}
  */
  readonly instancePoolName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/instance_pool#max_capacity DataDatabricksInstancePool#max_capacity}
  */
  readonly maxCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/instance_pool#min_idle_instances DataDatabricksInstancePool#min_idle_instances}
  */
  readonly minIdleInstances?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/instance_pool#node_type_id DataDatabricksInstancePool#node_type_id}
  */
  readonly nodeTypeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/instance_pool#preloaded_spark_versions DataDatabricksInstancePool#preloaded_spark_versions}
  */
  readonly preloadedSparkVersions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/instance_pool#state DataDatabricksInstancePool#state}
  */
  readonly state?: string;
  /**
  * aws_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/instance_pool#aws_attributes DataDatabricksInstancePool#aws_attributes}
  */
  readonly awsAttributes?: DataDatabricksInstancePoolPoolInfoAwsAttributes;
  /**
  * azure_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/instance_pool#azure_attributes DataDatabricksInstancePool#azure_attributes}
  */
  readonly azureAttributes?: DataDatabricksInstancePoolPoolInfoAzureAttributes;
  /**
  * disk_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/instance_pool#disk_spec DataDatabricksInstancePool#disk_spec}
  */
  readonly diskSpec?: DataDatabricksInstancePoolPoolInfoDiskSpec;
  /**
  * gcp_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/instance_pool#gcp_attributes DataDatabricksInstancePool#gcp_attributes}
  */
  readonly gcpAttributes?: DataDatabricksInstancePoolPoolInfoGcpAttributes;
  /**
  * instance_pool_fleet_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/instance_pool#instance_pool_fleet_attributes DataDatabricksInstancePool#instance_pool_fleet_attributes}
  */
  readonly instancePoolFleetAttributes?: DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributes[] | cdktn.IResolvable;
  /**
  * node_type_flexibility block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/instance_pool#node_type_flexibility DataDatabricksInstancePool#node_type_flexibility}
  */
  readonly nodeTypeFlexibility?: DataDatabricksInstancePoolPoolInfoNodeTypeFlexibility;
  /**
  * preloaded_docker_image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/instance_pool#preloaded_docker_image DataDatabricksInstancePool#preloaded_docker_image}
  */
  readonly preloadedDockerImage?: DataDatabricksInstancePoolPoolInfoPreloadedDockerImage[] | cdktn.IResolvable;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/instance_pool#stats DataDatabricksInstancePool#stats}
  */
  readonly stats?: DataDatabricksInstancePoolPoolInfoStats;
}

export function dataDatabricksInstancePoolPoolInfoToTerraform(struct?: DataDatabricksInstancePoolPoolInfoOutputReference | DataDatabricksInstancePoolPoolInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_tags: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.customTags),
    default_tags: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.defaultTags),
    enable_elastic_disk: cdktn.booleanToTerraform(struct!.enableElasticDisk),
    idle_instance_autotermination_minutes: cdktn.numberToTerraform(struct!.idleInstanceAutoterminationMinutes),
    instance_pool_id: cdktn.stringToTerraform(struct!.instancePoolId),
    instance_pool_name: cdktn.stringToTerraform(struct!.instancePoolName),
    max_capacity: cdktn.numberToTerraform(struct!.maxCapacity),
    min_idle_instances: cdktn.numberToTerraform(struct!.minIdleInstances),
    node_type_id: cdktn.stringToTerraform(struct!.nodeTypeId),
    preloaded_spark_versions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.preloadedSparkVersions),
    state: cdktn.stringToTerraform(struct!.state),
    aws_attributes: dataDatabricksInstancePoolPoolInfoAwsAttributesToTerraform(struct!.awsAttributes),
    azure_attributes: dataDatabricksInstancePoolPoolInfoAzureAttributesToTerraform(struct!.azureAttributes),
    disk_spec: dataDatabricksInstancePoolPoolInfoDiskSpecToTerraform(struct!.diskSpec),
    gcp_attributes: dataDatabricksInstancePoolPoolInfoGcpAttributesToTerraform(struct!.gcpAttributes),
    instance_pool_fleet_attributes: cdktn.listMapper(dataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesToTerraform, true)(struct!.instancePoolFleetAttributes),
    node_type_flexibility: dataDatabricksInstancePoolPoolInfoNodeTypeFlexibilityToTerraform(struct!.nodeTypeFlexibility),
    preloaded_docker_image: cdktn.listMapper(dataDatabricksInstancePoolPoolInfoPreloadedDockerImageToTerraform, true)(struct!.preloadedDockerImage),
    stats: dataDatabricksInstancePoolPoolInfoStatsToTerraform(struct!.stats),
  }
}


export function dataDatabricksInstancePoolPoolInfoToHclTerraform(struct?: DataDatabricksInstancePoolPoolInfoOutputReference | DataDatabricksInstancePoolPoolInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_tags: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.customTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    default_tags: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.defaultTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    enable_elastic_disk: {
      value: cdktn.booleanToHclTerraform(struct!.enableElasticDisk),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    idle_instance_autotermination_minutes: {
      value: cdktn.numberToHclTerraform(struct!.idleInstanceAutoterminationMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_pool_id: {
      value: cdktn.stringToHclTerraform(struct!.instancePoolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_pool_name: {
      value: cdktn.stringToHclTerraform(struct!.instancePoolName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_capacity: {
      value: cdktn.numberToHclTerraform(struct!.maxCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_idle_instances: {
      value: cdktn.numberToHclTerraform(struct!.minIdleInstances),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_type_id: {
      value: cdktn.stringToHclTerraform(struct!.nodeTypeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preloaded_spark_versions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.preloadedSparkVersions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    state: {
      value: cdktn.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_attributes: {
      value: dataDatabricksInstancePoolPoolInfoAwsAttributesToHclTerraform(struct!.awsAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksInstancePoolPoolInfoAwsAttributesList",
    },
    azure_attributes: {
      value: dataDatabricksInstancePoolPoolInfoAzureAttributesToHclTerraform(struct!.azureAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksInstancePoolPoolInfoAzureAttributesList",
    },
    disk_spec: {
      value: dataDatabricksInstancePoolPoolInfoDiskSpecToHclTerraform(struct!.diskSpec),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksInstancePoolPoolInfoDiskSpecList",
    },
    gcp_attributes: {
      value: dataDatabricksInstancePoolPoolInfoGcpAttributesToHclTerraform(struct!.gcpAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksInstancePoolPoolInfoGcpAttributesList",
    },
    instance_pool_fleet_attributes: {
      value: cdktn.listMapperHcl(dataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesToHclTerraform, true)(struct!.instancePoolFleetAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesList",
    },
    node_type_flexibility: {
      value: dataDatabricksInstancePoolPoolInfoNodeTypeFlexibilityToHclTerraform(struct!.nodeTypeFlexibility),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksInstancePoolPoolInfoNodeTypeFlexibilityList",
    },
    preloaded_docker_image: {
      value: cdktn.listMapperHcl(dataDatabricksInstancePoolPoolInfoPreloadedDockerImageToHclTerraform, true)(struct!.preloadedDockerImage),
      isBlock: true,
      type: "set",
      storageClassType: "DataDatabricksInstancePoolPoolInfoPreloadedDockerImageList",
    },
    stats: {
      value: dataDatabricksInstancePoolPoolInfoStatsToHclTerraform(struct!.stats),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksInstancePoolPoolInfoStatsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksInstancePoolPoolInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksInstancePoolPoolInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.customTags = this._customTags;
    }
    if (this._defaultTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultTags = this._defaultTags;
    }
    if (this._enableElasticDisk !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableElasticDisk = this._enableElasticDisk;
    }
    if (this._idleInstanceAutoterminationMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleInstanceAutoterminationMinutes = this._idleInstanceAutoterminationMinutes;
    }
    if (this._instancePoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instancePoolId = this._instancePoolId;
    }
    if (this._instancePoolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.instancePoolName = this._instancePoolName;
    }
    if (this._maxCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCapacity = this._maxCapacity;
    }
    if (this._minIdleInstances !== undefined) {
      hasAnyValues = true;
      internalValueResult.minIdleInstances = this._minIdleInstances;
    }
    if (this._nodeTypeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeTypeId = this._nodeTypeId;
    }
    if (this._preloadedSparkVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.preloadedSparkVersions = this._preloadedSparkVersions;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._awsAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAttributes = this._awsAttributes?.internalValue;
    }
    if (this._azureAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureAttributes = this._azureAttributes?.internalValue;
    }
    if (this._diskSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSpec = this._diskSpec?.internalValue;
    }
    if (this._gcpAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpAttributes = this._gcpAttributes?.internalValue;
    }
    if (this._instancePoolFleetAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instancePoolFleetAttributes = this._instancePoolFleetAttributes?.internalValue;
    }
    if (this._nodeTypeFlexibility?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeTypeFlexibility = this._nodeTypeFlexibility?.internalValue;
    }
    if (this._preloadedDockerImage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preloadedDockerImage = this._preloadedDockerImage?.internalValue;
    }
    if (this._stats?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stats = this._stats?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksInstancePoolPoolInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customTags = undefined;
      this._defaultTags = undefined;
      this._enableElasticDisk = undefined;
      this._idleInstanceAutoterminationMinutes = undefined;
      this._instancePoolId = undefined;
      this._instancePoolName = undefined;
      this._maxCapacity = undefined;
      this._minIdleInstances = undefined;
      this._nodeTypeId = undefined;
      this._preloadedSparkVersions = undefined;
      this._state = undefined;
      this._awsAttributes.internalValue = undefined;
      this._azureAttributes.internalValue = undefined;
      this._diskSpec.internalValue = undefined;
      this._gcpAttributes.internalValue = undefined;
      this._instancePoolFleetAttributes.internalValue = undefined;
      this._nodeTypeFlexibility.internalValue = undefined;
      this._preloadedDockerImage.internalValue = undefined;
      this._stats.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customTags = value.customTags;
      this._defaultTags = value.defaultTags;
      this._enableElasticDisk = value.enableElasticDisk;
      this._idleInstanceAutoterminationMinutes = value.idleInstanceAutoterminationMinutes;
      this._instancePoolId = value.instancePoolId;
      this._instancePoolName = value.instancePoolName;
      this._maxCapacity = value.maxCapacity;
      this._minIdleInstances = value.minIdleInstances;
      this._nodeTypeId = value.nodeTypeId;
      this._preloadedSparkVersions = value.preloadedSparkVersions;
      this._state = value.state;
      this._awsAttributes.internalValue = value.awsAttributes;
      this._azureAttributes.internalValue = value.azureAttributes;
      this._diskSpec.internalValue = value.diskSpec;
      this._gcpAttributes.internalValue = value.gcpAttributes;
      this._instancePoolFleetAttributes.internalValue = value.instancePoolFleetAttributes;
      this._nodeTypeFlexibility.internalValue = value.nodeTypeFlexibility;
      this._preloadedDockerImage.internalValue = value.preloadedDockerImage;
      this._stats.internalValue = value.stats;
    }
  }

  // custom_tags - computed: false, optional: true, required: false
  private _customTags?: { [key: string]: string }; 
  public get customTags() {
    return this.getStringMapAttribute('custom_tags');
  }
  public set customTags(value: { [key: string]: string }) {
    this._customTags = value;
  }
  public resetCustomTags() {
    this._customTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTagsInput() {
    return this._customTags;
  }

  // default_tags - computed: true, optional: true, required: false
  private _defaultTags?: { [key: string]: string }; 
  public get defaultTags() {
    return this.getStringMapAttribute('default_tags');
  }
  public set defaultTags(value: { [key: string]: string }) {
    this._defaultTags = value;
  }
  public resetDefaultTags() {
    this._defaultTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTagsInput() {
    return this._defaultTags;
  }

  // enable_elastic_disk - computed: false, optional: true, required: false
  private _enableElasticDisk?: boolean | cdktn.IResolvable; 
  public get enableElasticDisk() {
    return this.getBooleanAttribute('enable_elastic_disk');
  }
  public set enableElasticDisk(value: boolean | cdktn.IResolvable) {
    this._enableElasticDisk = value;
  }
  public resetEnableElasticDisk() {
    this._enableElasticDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableElasticDiskInput() {
    return this._enableElasticDisk;
  }

  // idle_instance_autotermination_minutes - computed: false, optional: false, required: true
  private _idleInstanceAutoterminationMinutes?: number; 
  public get idleInstanceAutoterminationMinutes() {
    return this.getNumberAttribute('idle_instance_autotermination_minutes');
  }
  public set idleInstanceAutoterminationMinutes(value: number) {
    this._idleInstanceAutoterminationMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idleInstanceAutoterminationMinutesInput() {
    return this._idleInstanceAutoterminationMinutes;
  }

  // instance_pool_id - computed: true, optional: true, required: false
  private _instancePoolId?: string; 
  public get instancePoolId() {
    return this.getStringAttribute('instance_pool_id');
  }
  public set instancePoolId(value: string) {
    this._instancePoolId = value;
  }
  public resetInstancePoolId() {
    this._instancePoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancePoolIdInput() {
    return this._instancePoolId;
  }

  // instance_pool_name - computed: false, optional: false, required: true
  private _instancePoolName?: string; 
  public get instancePoolName() {
    return this.getStringAttribute('instance_pool_name');
  }
  public set instancePoolName(value: string) {
    this._instancePoolName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instancePoolNameInput() {
    return this._instancePoolName;
  }

  // max_capacity - computed: false, optional: true, required: false
  private _maxCapacity?: number; 
  public get maxCapacity() {
    return this.getNumberAttribute('max_capacity');
  }
  public set maxCapacity(value: number) {
    this._maxCapacity = value;
  }
  public resetMaxCapacity() {
    this._maxCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCapacityInput() {
    return this._maxCapacity;
  }

  // min_idle_instances - computed: false, optional: true, required: false
  private _minIdleInstances?: number; 
  public get minIdleInstances() {
    return this.getNumberAttribute('min_idle_instances');
  }
  public set minIdleInstances(value: number) {
    this._minIdleInstances = value;
  }
  public resetMinIdleInstances() {
    this._minIdleInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minIdleInstancesInput() {
    return this._minIdleInstances;
  }

  // node_type_id - computed: false, optional: true, required: false
  private _nodeTypeId?: string; 
  public get nodeTypeId() {
    return this.getStringAttribute('node_type_id');
  }
  public set nodeTypeId(value: string) {
    this._nodeTypeId = value;
  }
  public resetNodeTypeId() {
    this._nodeTypeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeIdInput() {
    return this._nodeTypeId;
  }

  // preloaded_spark_versions - computed: false, optional: true, required: false
  private _preloadedSparkVersions?: string[]; 
  public get preloadedSparkVersions() {
    return this.getListAttribute('preloaded_spark_versions');
  }
  public set preloadedSparkVersions(value: string[]) {
    this._preloadedSparkVersions = value;
  }
  public resetPreloadedSparkVersions() {
    this._preloadedSparkVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preloadedSparkVersionsInput() {
    return this._preloadedSparkVersions;
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

  // aws_attributes - computed: false, optional: true, required: false
  private _awsAttributes = new DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference(this, "aws_attributes");
  public get awsAttributes() {
    return this._awsAttributes;
  }
  public putAwsAttributes(value: DataDatabricksInstancePoolPoolInfoAwsAttributes) {
    this._awsAttributes.internalValue = value;
  }
  public resetAwsAttributes() {
    this._awsAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAttributesInput() {
    return this._awsAttributes.internalValue;
  }

  // azure_attributes - computed: false, optional: true, required: false
  private _azureAttributes = new DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference(this, "azure_attributes");
  public get azureAttributes() {
    return this._azureAttributes;
  }
  public putAzureAttributes(value: DataDatabricksInstancePoolPoolInfoAzureAttributes) {
    this._azureAttributes.internalValue = value;
  }
  public resetAzureAttributes() {
    this._azureAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureAttributesInput() {
    return this._azureAttributes.internalValue;
  }

  // disk_spec - computed: false, optional: true, required: false
  private _diskSpec = new DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference(this, "disk_spec");
  public get diskSpec() {
    return this._diskSpec;
  }
  public putDiskSpec(value: DataDatabricksInstancePoolPoolInfoDiskSpec) {
    this._diskSpec.internalValue = value;
  }
  public resetDiskSpec() {
    this._diskSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSpecInput() {
    return this._diskSpec.internalValue;
  }

  // gcp_attributes - computed: false, optional: true, required: false
  private _gcpAttributes = new DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference(this, "gcp_attributes");
  public get gcpAttributes() {
    return this._gcpAttributes;
  }
  public putGcpAttributes(value: DataDatabricksInstancePoolPoolInfoGcpAttributes) {
    this._gcpAttributes.internalValue = value;
  }
  public resetGcpAttributes() {
    this._gcpAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpAttributesInput() {
    return this._gcpAttributes.internalValue;
  }

  // instance_pool_fleet_attributes - computed: false, optional: true, required: false
  private _instancePoolFleetAttributes = new DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesList(this, "instance_pool_fleet_attributes", false);
  public get instancePoolFleetAttributes() {
    return this._instancePoolFleetAttributes;
  }
  public putInstancePoolFleetAttributes(value: DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributes[] | cdktn.IResolvable) {
    this._instancePoolFleetAttributes.internalValue = value;
  }
  public resetInstancePoolFleetAttributes() {
    this._instancePoolFleetAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancePoolFleetAttributesInput() {
    return this._instancePoolFleetAttributes.internalValue;
  }

  // node_type_flexibility - computed: false, optional: true, required: false
  private _nodeTypeFlexibility = new DataDatabricksInstancePoolPoolInfoNodeTypeFlexibilityOutputReference(this, "node_type_flexibility");
  public get nodeTypeFlexibility() {
    return this._nodeTypeFlexibility;
  }
  public putNodeTypeFlexibility(value: DataDatabricksInstancePoolPoolInfoNodeTypeFlexibility) {
    this._nodeTypeFlexibility.internalValue = value;
  }
  public resetNodeTypeFlexibility() {
    this._nodeTypeFlexibility.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeFlexibilityInput() {
    return this._nodeTypeFlexibility.internalValue;
  }

  // preloaded_docker_image - computed: false, optional: true, required: false
  private _preloadedDockerImage = new DataDatabricksInstancePoolPoolInfoPreloadedDockerImageList(this, "preloaded_docker_image", true);
  public get preloadedDockerImage() {
    return this._preloadedDockerImage;
  }
  public putPreloadedDockerImage(value: DataDatabricksInstancePoolPoolInfoPreloadedDockerImage[] | cdktn.IResolvable) {
    this._preloadedDockerImage.internalValue = value;
  }
  public resetPreloadedDockerImage() {
    this._preloadedDockerImage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preloadedDockerImageInput() {
    return this._preloadedDockerImage.internalValue;
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataDatabricksInstancePoolPoolInfoStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataDatabricksInstancePoolPoolInfoStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }
}
export interface DataDatabricksInstancePoolProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/instance_pool#workspace_id DataDatabricksInstancePool#workspace_id}
  */
  readonly workspaceId?: string;
}

export function dataDatabricksInstancePoolProviderConfigToTerraform(struct?: DataDatabricksInstancePoolProviderConfigOutputReference | DataDatabricksInstancePoolProviderConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function dataDatabricksInstancePoolProviderConfigToHclTerraform(struct?: DataDatabricksInstancePoolProviderConfigOutputReference | DataDatabricksInstancePoolProviderConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class DataDatabricksInstancePoolProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksInstancePoolProviderConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceId = this._workspaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksInstancePoolProviderConfig | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/instance_pool databricks_instance_pool}
*/
export class DataDatabricksInstancePool extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_instance_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataDatabricksInstancePool resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksInstancePool to import
  * @param importFromId The id of the existing DataDatabricksInstancePool that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/instance_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksInstancePool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_instance_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/instance_pool databricks_instance_pool} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksInstancePoolConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksInstancePoolConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_instance_pool',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.116.0',
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
    this._id = config.id;
    this._name = config.name;
    this._poolInfo.internalValue = config.poolInfo;
    this._providerConfig.internalValue = config.providerConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // pool_info - computed: false, optional: true, required: false
  private _poolInfo = new DataDatabricksInstancePoolPoolInfoOutputReference(this, "pool_info");
  public get poolInfo() {
    return this._poolInfo;
  }
  public putPoolInfo(value: DataDatabricksInstancePoolPoolInfo) {
    this._poolInfo.internalValue = value;
  }
  public resetPoolInfo() {
    this._poolInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInfoInput() {
    return this._poolInfo.internalValue;
  }

  // provider_config - computed: false, optional: true, required: false
  private _providerConfig = new DataDatabricksInstancePoolProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataDatabricksInstancePoolProviderConfig) {
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
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      pool_info: dataDatabricksInstancePoolPoolInfoToTerraform(this._poolInfo.internalValue),
      provider_config: dataDatabricksInstancePoolProviderConfigToTerraform(this._providerConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktn.stringToHclTerraform(this._id),
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
      pool_info: {
        value: dataDatabricksInstancePoolPoolInfoToHclTerraform(this._poolInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataDatabricksInstancePoolPoolInfoList",
      },
      provider_config: {
        value: dataDatabricksInstancePoolProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataDatabricksInstancePoolProviderConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
