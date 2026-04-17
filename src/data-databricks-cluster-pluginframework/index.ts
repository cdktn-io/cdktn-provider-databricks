/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataDatabricksClusterPluginframeworkConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#cluster_id DataDatabricksClusterPluginframework#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#cluster_info DataDatabricksClusterPluginframework#cluster_info}
  */
  readonly clusterInfo?: DataDatabricksClusterPluginframeworkClusterInfo[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#cluster_name DataDatabricksClusterPluginframework#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#provider_config DataDatabricksClusterPluginframework#provider_config}
  */
  readonly providerConfig?: DataDatabricksClusterPluginframeworkProviderConfig;
}
export interface DataDatabricksClusterPluginframeworkClusterInfoAutoscale {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#max_workers DataDatabricksClusterPluginframework#max_workers}
  */
  readonly maxWorkers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#min_workers DataDatabricksClusterPluginframework#min_workers}
  */
  readonly minWorkers?: number;
}

export function dataDatabricksClusterPluginframeworkClusterInfoAutoscaleToTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoAutoscale | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_workers: cdktn.numberToTerraform(struct!.maxWorkers),
    min_workers: cdktn.numberToTerraform(struct!.minWorkers),
  }
}


export function dataDatabricksClusterPluginframeworkClusterInfoAutoscaleToHclTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoAutoscale | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_workers: {
      value: cdktn.numberToHclTerraform(struct!.maxWorkers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_workers: {
      value: cdktn.numberToHclTerraform(struct!.minWorkers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksClusterPluginframeworkClusterInfoAutoscaleOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksClusterPluginframeworkClusterInfoAutoscale | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxWorkers !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxWorkers = this._maxWorkers;
    }
    if (this._minWorkers !== undefined) {
      hasAnyValues = true;
      internalValueResult.minWorkers = this._minWorkers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterPluginframeworkClusterInfoAutoscale | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxWorkers = undefined;
      this._minWorkers = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxWorkers = value.maxWorkers;
      this._minWorkers = value.minWorkers;
    }
  }

  // max_workers - computed: true, optional: true, required: false
  private _maxWorkers?: number; 
  public get maxWorkers() {
    return this.getNumberAttribute('max_workers');
  }
  public set maxWorkers(value: number) {
    this._maxWorkers = value;
  }
  public resetMaxWorkers() {
    this._maxWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWorkersInput() {
    return this._maxWorkers;
  }

  // min_workers - computed: true, optional: true, required: false
  private _minWorkers?: number; 
  public get minWorkers() {
    return this.getNumberAttribute('min_workers');
  }
  public set minWorkers(value: number) {
    this._minWorkers = value;
  }
  public resetMinWorkers() {
    this._minWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minWorkersInput() {
    return this._minWorkers;
  }
}

export class DataDatabricksClusterPluginframeworkClusterInfoAutoscaleList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksClusterPluginframeworkClusterInfoAutoscale[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksClusterPluginframeworkClusterInfoAutoscaleOutputReference {
    return new DataDatabricksClusterPluginframeworkClusterInfoAutoscaleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksClusterPluginframeworkClusterInfoAwsAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#availability DataDatabricksClusterPluginframework#availability}
  */
  readonly availability?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#ebs_volume_count DataDatabricksClusterPluginframework#ebs_volume_count}
  */
  readonly ebsVolumeCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#ebs_volume_iops DataDatabricksClusterPluginframework#ebs_volume_iops}
  */
  readonly ebsVolumeIops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#ebs_volume_size DataDatabricksClusterPluginframework#ebs_volume_size}
  */
  readonly ebsVolumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#ebs_volume_throughput DataDatabricksClusterPluginframework#ebs_volume_throughput}
  */
  readonly ebsVolumeThroughput?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#ebs_volume_type DataDatabricksClusterPluginframework#ebs_volume_type}
  */
  readonly ebsVolumeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#first_on_demand DataDatabricksClusterPluginframework#first_on_demand}
  */
  readonly firstOnDemand?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#instance_profile_arn DataDatabricksClusterPluginframework#instance_profile_arn}
  */
  readonly instanceProfileArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#spot_bid_price_percent DataDatabricksClusterPluginframework#spot_bid_price_percent}
  */
  readonly spotBidPricePercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#zone_id DataDatabricksClusterPluginframework#zone_id}
  */
  readonly zoneId?: string;
}

export function dataDatabricksClusterPluginframeworkClusterInfoAwsAttributesToTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoAwsAttributes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability: cdktn.stringToTerraform(struct!.availability),
    ebs_volume_count: cdktn.numberToTerraform(struct!.ebsVolumeCount),
    ebs_volume_iops: cdktn.numberToTerraform(struct!.ebsVolumeIops),
    ebs_volume_size: cdktn.numberToTerraform(struct!.ebsVolumeSize),
    ebs_volume_throughput: cdktn.numberToTerraform(struct!.ebsVolumeThroughput),
    ebs_volume_type: cdktn.stringToTerraform(struct!.ebsVolumeType),
    first_on_demand: cdktn.numberToTerraform(struct!.firstOnDemand),
    instance_profile_arn: cdktn.stringToTerraform(struct!.instanceProfileArn),
    spot_bid_price_percent: cdktn.numberToTerraform(struct!.spotBidPricePercent),
    zone_id: cdktn.stringToTerraform(struct!.zoneId),
  }
}


export function dataDatabricksClusterPluginframeworkClusterInfoAwsAttributesToHclTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoAwsAttributes | cdktn.IResolvable): any {
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
    ebs_volume_count: {
      value: cdktn.numberToHclTerraform(struct!.ebsVolumeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ebs_volume_iops: {
      value: cdktn.numberToHclTerraform(struct!.ebsVolumeIops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ebs_volume_size: {
      value: cdktn.numberToHclTerraform(struct!.ebsVolumeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ebs_volume_throughput: {
      value: cdktn.numberToHclTerraform(struct!.ebsVolumeThroughput),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ebs_volume_type: {
      value: cdktn.stringToHclTerraform(struct!.ebsVolumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    first_on_demand: {
      value: cdktn.numberToHclTerraform(struct!.firstOnDemand),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataDatabricksClusterPluginframeworkClusterInfoAwsAttributesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksClusterPluginframeworkClusterInfoAwsAttributes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availability !== undefined) {
      hasAnyValues = true;
      internalValueResult.availability = this._availability;
    }
    if (this._ebsVolumeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsVolumeCount = this._ebsVolumeCount;
    }
    if (this._ebsVolumeIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsVolumeIops = this._ebsVolumeIops;
    }
    if (this._ebsVolumeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsVolumeSize = this._ebsVolumeSize;
    }
    if (this._ebsVolumeThroughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsVolumeThroughput = this._ebsVolumeThroughput;
    }
    if (this._ebsVolumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsVolumeType = this._ebsVolumeType;
    }
    if (this._firstOnDemand !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstOnDemand = this._firstOnDemand;
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

  public set internalValue(value: DataDatabricksClusterPluginframeworkClusterInfoAwsAttributes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availability = undefined;
      this._ebsVolumeCount = undefined;
      this._ebsVolumeIops = undefined;
      this._ebsVolumeSize = undefined;
      this._ebsVolumeThroughput = undefined;
      this._ebsVolumeType = undefined;
      this._firstOnDemand = undefined;
      this._instanceProfileArn = undefined;
      this._spotBidPricePercent = undefined;
      this._zoneId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availability = value.availability;
      this._ebsVolumeCount = value.ebsVolumeCount;
      this._ebsVolumeIops = value.ebsVolumeIops;
      this._ebsVolumeSize = value.ebsVolumeSize;
      this._ebsVolumeThroughput = value.ebsVolumeThroughput;
      this._ebsVolumeType = value.ebsVolumeType;
      this._firstOnDemand = value.firstOnDemand;
      this._instanceProfileArn = value.instanceProfileArn;
      this._spotBidPricePercent = value.spotBidPricePercent;
      this._zoneId = value.zoneId;
    }
  }

  // availability - computed: true, optional: true, required: false
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

  // ebs_volume_count - computed: true, optional: true, required: false
  private _ebsVolumeCount?: number; 
  public get ebsVolumeCount() {
    return this.getNumberAttribute('ebs_volume_count');
  }
  public set ebsVolumeCount(value: number) {
    this._ebsVolumeCount = value;
  }
  public resetEbsVolumeCount() {
    this._ebsVolumeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsVolumeCountInput() {
    return this._ebsVolumeCount;
  }

  // ebs_volume_iops - computed: true, optional: true, required: false
  private _ebsVolumeIops?: number; 
  public get ebsVolumeIops() {
    return this.getNumberAttribute('ebs_volume_iops');
  }
  public set ebsVolumeIops(value: number) {
    this._ebsVolumeIops = value;
  }
  public resetEbsVolumeIops() {
    this._ebsVolumeIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsVolumeIopsInput() {
    return this._ebsVolumeIops;
  }

  // ebs_volume_size - computed: true, optional: true, required: false
  private _ebsVolumeSize?: number; 
  public get ebsVolumeSize() {
    return this.getNumberAttribute('ebs_volume_size');
  }
  public set ebsVolumeSize(value: number) {
    this._ebsVolumeSize = value;
  }
  public resetEbsVolumeSize() {
    this._ebsVolumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsVolumeSizeInput() {
    return this._ebsVolumeSize;
  }

  // ebs_volume_throughput - computed: true, optional: true, required: false
  private _ebsVolumeThroughput?: number; 
  public get ebsVolumeThroughput() {
    return this.getNumberAttribute('ebs_volume_throughput');
  }
  public set ebsVolumeThroughput(value: number) {
    this._ebsVolumeThroughput = value;
  }
  public resetEbsVolumeThroughput() {
    this._ebsVolumeThroughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsVolumeThroughputInput() {
    return this._ebsVolumeThroughput;
  }

  // ebs_volume_type - computed: true, optional: true, required: false
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

  // first_on_demand - computed: true, optional: true, required: false
  private _firstOnDemand?: number; 
  public get firstOnDemand() {
    return this.getNumberAttribute('first_on_demand');
  }
  public set firstOnDemand(value: number) {
    this._firstOnDemand = value;
  }
  public resetFirstOnDemand() {
    this._firstOnDemand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstOnDemandInput() {
    return this._firstOnDemand;
  }

  // instance_profile_arn - computed: true, optional: true, required: false
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

  // spot_bid_price_percent - computed: true, optional: true, required: false
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

export class DataDatabricksClusterPluginframeworkClusterInfoAwsAttributesList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksClusterPluginframeworkClusterInfoAwsAttributes[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksClusterPluginframeworkClusterInfoAwsAttributesOutputReference {
    return new DataDatabricksClusterPluginframeworkClusterInfoAwsAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksClusterPluginframeworkClusterInfoAzureAttributesLogAnalyticsInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#log_analytics_primary_key DataDatabricksClusterPluginframework#log_analytics_primary_key}
  */
  readonly logAnalyticsPrimaryKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#log_analytics_workspace_id DataDatabricksClusterPluginframework#log_analytics_workspace_id}
  */
  readonly logAnalyticsWorkspaceId?: string;
}

export function dataDatabricksClusterPluginframeworkClusterInfoAzureAttributesLogAnalyticsInfoToTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoAzureAttributesLogAnalyticsInfo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_analytics_primary_key: cdktn.stringToTerraform(struct!.logAnalyticsPrimaryKey),
    log_analytics_workspace_id: cdktn.stringToTerraform(struct!.logAnalyticsWorkspaceId),
  }
}


export function dataDatabricksClusterPluginframeworkClusterInfoAzureAttributesLogAnalyticsInfoToHclTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoAzureAttributesLogAnalyticsInfo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_analytics_primary_key: {
      value: cdktn.stringToHclTerraform(struct!.logAnalyticsPrimaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_analytics_workspace_id: {
      value: cdktn.stringToHclTerraform(struct!.logAnalyticsWorkspaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksClusterPluginframeworkClusterInfoAzureAttributesLogAnalyticsInfoOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksClusterPluginframeworkClusterInfoAzureAttributesLogAnalyticsInfo | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logAnalyticsPrimaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAnalyticsPrimaryKey = this._logAnalyticsPrimaryKey;
    }
    if (this._logAnalyticsWorkspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAnalyticsWorkspaceId = this._logAnalyticsWorkspaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterPluginframeworkClusterInfoAzureAttributesLogAnalyticsInfo | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logAnalyticsPrimaryKey = undefined;
      this._logAnalyticsWorkspaceId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logAnalyticsPrimaryKey = value.logAnalyticsPrimaryKey;
      this._logAnalyticsWorkspaceId = value.logAnalyticsWorkspaceId;
    }
  }

  // log_analytics_primary_key - computed: true, optional: true, required: false
  private _logAnalyticsPrimaryKey?: string; 
  public get logAnalyticsPrimaryKey() {
    return this.getStringAttribute('log_analytics_primary_key');
  }
  public set logAnalyticsPrimaryKey(value: string) {
    this._logAnalyticsPrimaryKey = value;
  }
  public resetLogAnalyticsPrimaryKey() {
    this._logAnalyticsPrimaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnalyticsPrimaryKeyInput() {
    return this._logAnalyticsPrimaryKey;
  }

  // log_analytics_workspace_id - computed: true, optional: true, required: false
  private _logAnalyticsWorkspaceId?: string; 
  public get logAnalyticsWorkspaceId() {
    return this.getStringAttribute('log_analytics_workspace_id');
  }
  public set logAnalyticsWorkspaceId(value: string) {
    this._logAnalyticsWorkspaceId = value;
  }
  public resetLogAnalyticsWorkspaceId() {
    this._logAnalyticsWorkspaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnalyticsWorkspaceIdInput() {
    return this._logAnalyticsWorkspaceId;
  }
}

export class DataDatabricksClusterPluginframeworkClusterInfoAzureAttributesLogAnalyticsInfoList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksClusterPluginframeworkClusterInfoAzureAttributesLogAnalyticsInfo[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksClusterPluginframeworkClusterInfoAzureAttributesLogAnalyticsInfoOutputReference {
    return new DataDatabricksClusterPluginframeworkClusterInfoAzureAttributesLogAnalyticsInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksClusterPluginframeworkClusterInfoAzureAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#availability DataDatabricksClusterPluginframework#availability}
  */
  readonly availability?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#first_on_demand DataDatabricksClusterPluginframework#first_on_demand}
  */
  readonly firstOnDemand?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#log_analytics_info DataDatabricksClusterPluginframework#log_analytics_info}
  */
  readonly logAnalyticsInfo?: DataDatabricksClusterPluginframeworkClusterInfoAzureAttributesLogAnalyticsInfo[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#spot_bid_max_price DataDatabricksClusterPluginframework#spot_bid_max_price}
  */
  readonly spotBidMaxPrice?: number;
}

export function dataDatabricksClusterPluginframeworkClusterInfoAzureAttributesToTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoAzureAttributes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability: cdktn.stringToTerraform(struct!.availability),
    first_on_demand: cdktn.numberToTerraform(struct!.firstOnDemand),
    log_analytics_info: cdktn.listMapper(dataDatabricksClusterPluginframeworkClusterInfoAzureAttributesLogAnalyticsInfoToTerraform, false)(struct!.logAnalyticsInfo),
    spot_bid_max_price: cdktn.numberToTerraform(struct!.spotBidMaxPrice),
  }
}


export function dataDatabricksClusterPluginframeworkClusterInfoAzureAttributesToHclTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoAzureAttributes | cdktn.IResolvable): any {
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
    first_on_demand: {
      value: cdktn.numberToHclTerraform(struct!.firstOnDemand),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_analytics_info: {
      value: cdktn.listMapperHcl(dataDatabricksClusterPluginframeworkClusterInfoAzureAttributesLogAnalyticsInfoToHclTerraform, false)(struct!.logAnalyticsInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterPluginframeworkClusterInfoAzureAttributesLogAnalyticsInfoList",
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

export class DataDatabricksClusterPluginframeworkClusterInfoAzureAttributesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksClusterPluginframeworkClusterInfoAzureAttributes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availability !== undefined) {
      hasAnyValues = true;
      internalValueResult.availability = this._availability;
    }
    if (this._firstOnDemand !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstOnDemand = this._firstOnDemand;
    }
    if (this._logAnalyticsInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAnalyticsInfo = this._logAnalyticsInfo?.internalValue;
    }
    if (this._spotBidMaxPrice !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotBidMaxPrice = this._spotBidMaxPrice;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterPluginframeworkClusterInfoAzureAttributes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availability = undefined;
      this._firstOnDemand = undefined;
      this._logAnalyticsInfo.internalValue = undefined;
      this._spotBidMaxPrice = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availability = value.availability;
      this._firstOnDemand = value.firstOnDemand;
      this._logAnalyticsInfo.internalValue = value.logAnalyticsInfo;
      this._spotBidMaxPrice = value.spotBidMaxPrice;
    }
  }

  // availability - computed: true, optional: true, required: false
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

  // first_on_demand - computed: true, optional: true, required: false
  private _firstOnDemand?: number; 
  public get firstOnDemand() {
    return this.getNumberAttribute('first_on_demand');
  }
  public set firstOnDemand(value: number) {
    this._firstOnDemand = value;
  }
  public resetFirstOnDemand() {
    this._firstOnDemand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstOnDemandInput() {
    return this._firstOnDemand;
  }

  // log_analytics_info - computed: true, optional: true, required: false
  private _logAnalyticsInfo = new DataDatabricksClusterPluginframeworkClusterInfoAzureAttributesLogAnalyticsInfoList(this, "log_analytics_info", false);
  public get logAnalyticsInfo() {
    return this._logAnalyticsInfo;
  }
  public putLogAnalyticsInfo(value: DataDatabricksClusterPluginframeworkClusterInfoAzureAttributesLogAnalyticsInfo[] | cdktn.IResolvable) {
    this._logAnalyticsInfo.internalValue = value;
  }
  public resetLogAnalyticsInfo() {
    this._logAnalyticsInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnalyticsInfoInput() {
    return this._logAnalyticsInfo.internalValue;
  }

  // spot_bid_max_price - computed: true, optional: true, required: false
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

export class DataDatabricksClusterPluginframeworkClusterInfoAzureAttributesList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksClusterPluginframeworkClusterInfoAzureAttributes[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksClusterPluginframeworkClusterInfoAzureAttributesOutputReference {
    return new DataDatabricksClusterPluginframeworkClusterInfoAzureAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksClusterPluginframeworkClusterInfoClusterLogConfDbfs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#destination DataDatabricksClusterPluginframework#destination}
  */
  readonly destination: string;
}

export function dataDatabricksClusterPluginframeworkClusterInfoClusterLogConfDbfsToTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoClusterLogConfDbfs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktn.stringToTerraform(struct!.destination),
  }
}


export function dataDatabricksClusterPluginframeworkClusterInfoClusterLogConfDbfsToHclTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoClusterLogConfDbfs | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksClusterPluginframeworkClusterInfoClusterLogConfDbfsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksClusterPluginframeworkClusterInfoClusterLogConfDbfs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterPluginframeworkClusterInfoClusterLogConfDbfs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination = value.destination;
    }
  }

  // destination - computed: true, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }
}

export class DataDatabricksClusterPluginframeworkClusterInfoClusterLogConfDbfsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksClusterPluginframeworkClusterInfoClusterLogConfDbfs[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksClusterPluginframeworkClusterInfoClusterLogConfDbfsOutputReference {
    return new DataDatabricksClusterPluginframeworkClusterInfoClusterLogConfDbfsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksClusterPluginframeworkClusterInfoClusterLogConfS3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#canned_acl DataDatabricksClusterPluginframework#canned_acl}
  */
  readonly cannedAcl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#destination DataDatabricksClusterPluginframework#destination}
  */
  readonly destination: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#enable_encryption DataDatabricksClusterPluginframework#enable_encryption}
  */
  readonly enableEncryption?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#encryption_type DataDatabricksClusterPluginframework#encryption_type}
  */
  readonly encryptionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#endpoint DataDatabricksClusterPluginframework#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#kms_key DataDatabricksClusterPluginframework#kms_key}
  */
  readonly kmsKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#region DataDatabricksClusterPluginframework#region}
  */
  readonly region?: string;
}

export function dataDatabricksClusterPluginframeworkClusterInfoClusterLogConfS3ToTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoClusterLogConfS3 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    canned_acl: cdktn.stringToTerraform(struct!.cannedAcl),
    destination: cdktn.stringToTerraform(struct!.destination),
    enable_encryption: cdktn.booleanToTerraform(struct!.enableEncryption),
    encryption_type: cdktn.stringToTerraform(struct!.encryptionType),
    endpoint: cdktn.stringToTerraform(struct!.endpoint),
    kms_key: cdktn.stringToTerraform(struct!.kmsKey),
    region: cdktn.stringToTerraform(struct!.region),
  }
}


export function dataDatabricksClusterPluginframeworkClusterInfoClusterLogConfS3ToHclTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoClusterLogConfS3 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    canned_acl: {
      value: cdktn.stringToHclTerraform(struct!.cannedAcl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination: {
      value: cdktn.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_encryption: {
      value: cdktn.booleanToHclTerraform(struct!.enableEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    encryption_type: {
      value: cdktn.stringToHclTerraform(struct!.encryptionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktn.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key: {
      value: cdktn.stringToHclTerraform(struct!.kmsKey),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksClusterPluginframeworkClusterInfoClusterLogConfS3OutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksClusterPluginframeworkClusterInfoClusterLogConfS3 | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cannedAcl !== undefined) {
      hasAnyValues = true;
      internalValueResult.cannedAcl = this._cannedAcl;
    }
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._enableEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableEncryption = this._enableEncryption;
    }
    if (this._encryptionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionType = this._encryptionType;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._kmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKey = this._kmsKey;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterPluginframeworkClusterInfoClusterLogConfS3 | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cannedAcl = undefined;
      this._destination = undefined;
      this._enableEncryption = undefined;
      this._encryptionType = undefined;
      this._endpoint = undefined;
      this._kmsKey = undefined;
      this._region = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cannedAcl = value.cannedAcl;
      this._destination = value.destination;
      this._enableEncryption = value.enableEncryption;
      this._encryptionType = value.encryptionType;
      this._endpoint = value.endpoint;
      this._kmsKey = value.kmsKey;
      this._region = value.region;
    }
  }

  // canned_acl - computed: true, optional: true, required: false
  private _cannedAcl?: string; 
  public get cannedAcl() {
    return this.getStringAttribute('canned_acl');
  }
  public set cannedAcl(value: string) {
    this._cannedAcl = value;
  }
  public resetCannedAcl() {
    this._cannedAcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cannedAclInput() {
    return this._cannedAcl;
  }

  // destination - computed: true, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // enable_encryption - computed: true, optional: true, required: false
  private _enableEncryption?: boolean | cdktn.IResolvable; 
  public get enableEncryption() {
    return this.getBooleanAttribute('enable_encryption');
  }
  public set enableEncryption(value: boolean | cdktn.IResolvable) {
    this._enableEncryption = value;
  }
  public resetEnableEncryption() {
    this._enableEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEncryptionInput() {
    return this._enableEncryption;
  }

  // encryption_type - computed: true, optional: true, required: false
  private _encryptionType?: string; 
  public get encryptionType() {
    return this.getStringAttribute('encryption_type');
  }
  public set encryptionType(value: string) {
    this._encryptionType = value;
  }
  public resetEncryptionType() {
    this._encryptionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionTypeInput() {
    return this._encryptionType;
  }

  // endpoint - computed: true, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // kms_key - computed: true, optional: true, required: false
  private _kmsKey?: string; 
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string) {
    this._kmsKey = value;
  }
  public resetKmsKey() {
    this._kmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey;
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
}

export class DataDatabricksClusterPluginframeworkClusterInfoClusterLogConfS3List extends cdktn.ComplexList {
  public internalValue? : DataDatabricksClusterPluginframeworkClusterInfoClusterLogConfS3[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksClusterPluginframeworkClusterInfoClusterLogConfS3OutputReference {
    return new DataDatabricksClusterPluginframeworkClusterInfoClusterLogConfS3OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksClusterPluginframeworkClusterInfoClusterLogConfVolumes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#destination DataDatabricksClusterPluginframework#destination}
  */
  readonly destination: string;
}

export function dataDatabricksClusterPluginframeworkClusterInfoClusterLogConfVolumesToTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoClusterLogConfVolumes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktn.stringToTerraform(struct!.destination),
  }
}


export function dataDatabricksClusterPluginframeworkClusterInfoClusterLogConfVolumesToHclTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoClusterLogConfVolumes | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksClusterPluginframeworkClusterInfoClusterLogConfVolumesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksClusterPluginframeworkClusterInfoClusterLogConfVolumes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterPluginframeworkClusterInfoClusterLogConfVolumes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination = value.destination;
    }
  }

  // destination - computed: true, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }
}

export class DataDatabricksClusterPluginframeworkClusterInfoClusterLogConfVolumesList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksClusterPluginframeworkClusterInfoClusterLogConfVolumes[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksClusterPluginframeworkClusterInfoClusterLogConfVolumesOutputReference {
    return new DataDatabricksClusterPluginframeworkClusterInfoClusterLogConfVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksClusterPluginframeworkClusterInfoClusterLogConf {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#dbfs DataDatabricksClusterPluginframework#dbfs}
  */
  readonly dbfs?: DataDatabricksClusterPluginframeworkClusterInfoClusterLogConfDbfs[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#s3 DataDatabricksClusterPluginframework#s3}
  */
  readonly s3?: DataDatabricksClusterPluginframeworkClusterInfoClusterLogConfS3[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#volumes DataDatabricksClusterPluginframework#volumes}
  */
  readonly volumes?: DataDatabricksClusterPluginframeworkClusterInfoClusterLogConfVolumes[] | cdktn.IResolvable;
}

export function dataDatabricksClusterPluginframeworkClusterInfoClusterLogConfToTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoClusterLogConf | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dbfs: cdktn.listMapper(dataDatabricksClusterPluginframeworkClusterInfoClusterLogConfDbfsToTerraform, false)(struct!.dbfs),
    s3: cdktn.listMapper(dataDatabricksClusterPluginframeworkClusterInfoClusterLogConfS3ToTerraform, false)(struct!.s3),
    volumes: cdktn.listMapper(dataDatabricksClusterPluginframeworkClusterInfoClusterLogConfVolumesToTerraform, false)(struct!.volumes),
  }
}


export function dataDatabricksClusterPluginframeworkClusterInfoClusterLogConfToHclTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoClusterLogConf | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dbfs: {
      value: cdktn.listMapperHcl(dataDatabricksClusterPluginframeworkClusterInfoClusterLogConfDbfsToHclTerraform, false)(struct!.dbfs),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterPluginframeworkClusterInfoClusterLogConfDbfsList",
    },
    s3: {
      value: cdktn.listMapperHcl(dataDatabricksClusterPluginframeworkClusterInfoClusterLogConfS3ToHclTerraform, false)(struct!.s3),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterPluginframeworkClusterInfoClusterLogConfS3List",
    },
    volumes: {
      value: cdktn.listMapperHcl(dataDatabricksClusterPluginframeworkClusterInfoClusterLogConfVolumesToHclTerraform, false)(struct!.volumes),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterPluginframeworkClusterInfoClusterLogConfVolumesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksClusterPluginframeworkClusterInfoClusterLogConfOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksClusterPluginframeworkClusterInfoClusterLogConf | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dbfs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbfs = this._dbfs?.internalValue;
    }
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    if (this._volumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterPluginframeworkClusterInfoClusterLogConf | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dbfs.internalValue = undefined;
      this._s3.internalValue = undefined;
      this._volumes.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dbfs.internalValue = value.dbfs;
      this._s3.internalValue = value.s3;
      this._volumes.internalValue = value.volumes;
    }
  }

  // dbfs - computed: true, optional: true, required: false
  private _dbfs = new DataDatabricksClusterPluginframeworkClusterInfoClusterLogConfDbfsList(this, "dbfs", false);
  public get dbfs() {
    return this._dbfs;
  }
  public putDbfs(value: DataDatabricksClusterPluginframeworkClusterInfoClusterLogConfDbfs[] | cdktn.IResolvable) {
    this._dbfs.internalValue = value;
  }
  public resetDbfs() {
    this._dbfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbfsInput() {
    return this._dbfs.internalValue;
  }

  // s3 - computed: true, optional: true, required: false
  private _s3 = new DataDatabricksClusterPluginframeworkClusterInfoClusterLogConfS3List(this, "s3", false);
  public get s3() {
    return this._s3;
  }
  public putS3(value: DataDatabricksClusterPluginframeworkClusterInfoClusterLogConfS3[] | cdktn.IResolvable) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }

  // volumes - computed: true, optional: true, required: false
  private _volumes = new DataDatabricksClusterPluginframeworkClusterInfoClusterLogConfVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: DataDatabricksClusterPluginframeworkClusterInfoClusterLogConfVolumes[] | cdktn.IResolvable) {
    this._volumes.internalValue = value;
  }
  public resetVolumes() {
    this._volumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes.internalValue;
  }
}

export class DataDatabricksClusterPluginframeworkClusterInfoClusterLogConfList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksClusterPluginframeworkClusterInfoClusterLogConf[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksClusterPluginframeworkClusterInfoClusterLogConfOutputReference {
    return new DataDatabricksClusterPluginframeworkClusterInfoClusterLogConfOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksClusterPluginframeworkClusterInfoClusterLogStatus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#last_attempted DataDatabricksClusterPluginframework#last_attempted}
  */
  readonly lastAttempted?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#last_exception DataDatabricksClusterPluginframework#last_exception}
  */
  readonly lastException?: string;
}

export function dataDatabricksClusterPluginframeworkClusterInfoClusterLogStatusToTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoClusterLogStatus | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    last_attempted: cdktn.numberToTerraform(struct!.lastAttempted),
    last_exception: cdktn.stringToTerraform(struct!.lastException),
  }
}


export function dataDatabricksClusterPluginframeworkClusterInfoClusterLogStatusToHclTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoClusterLogStatus | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    last_attempted: {
      value: cdktn.numberToHclTerraform(struct!.lastAttempted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    last_exception: {
      value: cdktn.stringToHclTerraform(struct!.lastException),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksClusterPluginframeworkClusterInfoClusterLogStatusOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksClusterPluginframeworkClusterInfoClusterLogStatus | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lastAttempted !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastAttempted = this._lastAttempted;
    }
    if (this._lastException !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastException = this._lastException;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterPluginframeworkClusterInfoClusterLogStatus | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lastAttempted = undefined;
      this._lastException = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lastAttempted = value.lastAttempted;
      this._lastException = value.lastException;
    }
  }

  // last_attempted - computed: true, optional: true, required: false
  private _lastAttempted?: number; 
  public get lastAttempted() {
    return this.getNumberAttribute('last_attempted');
  }
  public set lastAttempted(value: number) {
    this._lastAttempted = value;
  }
  public resetLastAttempted() {
    this._lastAttempted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastAttemptedInput() {
    return this._lastAttempted;
  }

  // last_exception - computed: true, optional: true, required: false
  private _lastException?: string; 
  public get lastException() {
    return this.getStringAttribute('last_exception');
  }
  public set lastException(value: string) {
    this._lastException = value;
  }
  public resetLastException() {
    this._lastException = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastExceptionInput() {
    return this._lastException;
  }
}

export class DataDatabricksClusterPluginframeworkClusterInfoClusterLogStatusList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksClusterPluginframeworkClusterInfoClusterLogStatus[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksClusterPluginframeworkClusterInfoClusterLogStatusOutputReference {
    return new DataDatabricksClusterPluginframeworkClusterInfoClusterLogStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksClusterPluginframeworkClusterInfoDockerImageBasicAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#password DataDatabricksClusterPluginframework#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#username DataDatabricksClusterPluginframework#username}
  */
  readonly username?: string;
}

export function dataDatabricksClusterPluginframeworkClusterInfoDockerImageBasicAuthToTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoDockerImageBasicAuth | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktn.stringToTerraform(struct!.password),
    username: cdktn.stringToTerraform(struct!.username),
  }
}


export function dataDatabricksClusterPluginframeworkClusterInfoDockerImageBasicAuthToHclTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoDockerImageBasicAuth | cdktn.IResolvable): any {
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

export class DataDatabricksClusterPluginframeworkClusterInfoDockerImageBasicAuthOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksClusterPluginframeworkClusterInfoDockerImageBasicAuth | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: DataDatabricksClusterPluginframeworkClusterInfoDockerImageBasicAuth | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

export class DataDatabricksClusterPluginframeworkClusterInfoDockerImageBasicAuthList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksClusterPluginframeworkClusterInfoDockerImageBasicAuth[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksClusterPluginframeworkClusterInfoDockerImageBasicAuthOutputReference {
    return new DataDatabricksClusterPluginframeworkClusterInfoDockerImageBasicAuthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksClusterPluginframeworkClusterInfoDockerImage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#basic_auth DataDatabricksClusterPluginframework#basic_auth}
  */
  readonly basicAuth?: DataDatabricksClusterPluginframeworkClusterInfoDockerImageBasicAuth[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#url DataDatabricksClusterPluginframework#url}
  */
  readonly url?: string;
}

export function dataDatabricksClusterPluginframeworkClusterInfoDockerImageToTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoDockerImage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    basic_auth: cdktn.listMapper(dataDatabricksClusterPluginframeworkClusterInfoDockerImageBasicAuthToTerraform, false)(struct!.basicAuth),
    url: cdktn.stringToTerraform(struct!.url),
  }
}


export function dataDatabricksClusterPluginframeworkClusterInfoDockerImageToHclTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoDockerImage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    basic_auth: {
      value: cdktn.listMapperHcl(dataDatabricksClusterPluginframeworkClusterInfoDockerImageBasicAuthToHclTerraform, false)(struct!.basicAuth),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterPluginframeworkClusterInfoDockerImageBasicAuthList",
    },
    url: {
      value: cdktn.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksClusterPluginframeworkClusterInfoDockerImageOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksClusterPluginframeworkClusterInfoDockerImage | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basicAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuth = this._basicAuth?.internalValue;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterPluginframeworkClusterInfoDockerImage | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._basicAuth.internalValue = undefined;
      this._url = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._basicAuth.internalValue = value.basicAuth;
      this._url = value.url;
    }
  }

  // basic_auth - computed: true, optional: true, required: false
  private _basicAuth = new DataDatabricksClusterPluginframeworkClusterInfoDockerImageBasicAuthList(this, "basic_auth", false);
  public get basicAuth() {
    return this._basicAuth;
  }
  public putBasicAuth(value: DataDatabricksClusterPluginframeworkClusterInfoDockerImageBasicAuth[] | cdktn.IResolvable) {
    this._basicAuth.internalValue = value;
  }
  public resetBasicAuth() {
    this._basicAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthInput() {
    return this._basicAuth.internalValue;
  }

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class DataDatabricksClusterPluginframeworkClusterInfoDockerImageList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksClusterPluginframeworkClusterInfoDockerImage[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksClusterPluginframeworkClusterInfoDockerImageOutputReference {
    return new DataDatabricksClusterPluginframeworkClusterInfoDockerImageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksClusterPluginframeworkClusterInfoDriverNodeAwsAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#is_spot DataDatabricksClusterPluginframework#is_spot}
  */
  readonly isSpot?: boolean | cdktn.IResolvable;
}

export function dataDatabricksClusterPluginframeworkClusterInfoDriverNodeAwsAttributesToTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoDriverNodeAwsAttributes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_spot: cdktn.booleanToTerraform(struct!.isSpot),
  }
}


export function dataDatabricksClusterPluginframeworkClusterInfoDriverNodeAwsAttributesToHclTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoDriverNodeAwsAttributes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_spot: {
      value: cdktn.booleanToHclTerraform(struct!.isSpot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksClusterPluginframeworkClusterInfoDriverNodeAwsAttributesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksClusterPluginframeworkClusterInfoDriverNodeAwsAttributes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isSpot !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSpot = this._isSpot;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterPluginframeworkClusterInfoDriverNodeAwsAttributes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isSpot = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isSpot = value.isSpot;
    }
  }

  // is_spot - computed: true, optional: true, required: false
  private _isSpot?: boolean | cdktn.IResolvable; 
  public get isSpot() {
    return this.getBooleanAttribute('is_spot');
  }
  public set isSpot(value: boolean | cdktn.IResolvable) {
    this._isSpot = value;
  }
  public resetIsSpot() {
    this._isSpot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSpotInput() {
    return this._isSpot;
  }
}

export class DataDatabricksClusterPluginframeworkClusterInfoDriverNodeAwsAttributesList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksClusterPluginframeworkClusterInfoDriverNodeAwsAttributes[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksClusterPluginframeworkClusterInfoDriverNodeAwsAttributesOutputReference {
    return new DataDatabricksClusterPluginframeworkClusterInfoDriverNodeAwsAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksClusterPluginframeworkClusterInfoDriver {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#host_private_ip DataDatabricksClusterPluginframework#host_private_ip}
  */
  readonly hostPrivateIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#instance_id DataDatabricksClusterPluginframework#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#node_aws_attributes DataDatabricksClusterPluginframework#node_aws_attributes}
  */
  readonly nodeAwsAttributes?: DataDatabricksClusterPluginframeworkClusterInfoDriverNodeAwsAttributes[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#node_id DataDatabricksClusterPluginframework#node_id}
  */
  readonly nodeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#private_ip DataDatabricksClusterPluginframework#private_ip}
  */
  readonly privateIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#public_dns DataDatabricksClusterPluginframework#public_dns}
  */
  readonly publicDns?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#start_timestamp DataDatabricksClusterPluginframework#start_timestamp}
  */
  readonly startTimestamp?: number;
}

export function dataDatabricksClusterPluginframeworkClusterInfoDriverToTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoDriver | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_private_ip: cdktn.stringToTerraform(struct!.hostPrivateIp),
    instance_id: cdktn.stringToTerraform(struct!.instanceId),
    node_aws_attributes: cdktn.listMapper(dataDatabricksClusterPluginframeworkClusterInfoDriverNodeAwsAttributesToTerraform, false)(struct!.nodeAwsAttributes),
    node_id: cdktn.stringToTerraform(struct!.nodeId),
    private_ip: cdktn.stringToTerraform(struct!.privateIp),
    public_dns: cdktn.stringToTerraform(struct!.publicDns),
    start_timestamp: cdktn.numberToTerraform(struct!.startTimestamp),
  }
}


export function dataDatabricksClusterPluginframeworkClusterInfoDriverToHclTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoDriver | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_private_ip: {
      value: cdktn.stringToHclTerraform(struct!.hostPrivateIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_id: {
      value: cdktn.stringToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_aws_attributes: {
      value: cdktn.listMapperHcl(dataDatabricksClusterPluginframeworkClusterInfoDriverNodeAwsAttributesToHclTerraform, false)(struct!.nodeAwsAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterPluginframeworkClusterInfoDriverNodeAwsAttributesList",
    },
    node_id: {
      value: cdktn.stringToHclTerraform(struct!.nodeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_ip: {
      value: cdktn.stringToHclTerraform(struct!.privateIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_dns: {
      value: cdktn.stringToHclTerraform(struct!.publicDns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_timestamp: {
      value: cdktn.numberToHclTerraform(struct!.startTimestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksClusterPluginframeworkClusterInfoDriverOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksClusterPluginframeworkClusterInfoDriver | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostPrivateIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostPrivateIp = this._hostPrivateIp;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._nodeAwsAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAwsAttributes = this._nodeAwsAttributes?.internalValue;
    }
    if (this._nodeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeId = this._nodeId;
    }
    if (this._privateIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateIp = this._privateIp;
    }
    if (this._publicDns !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicDns = this._publicDns;
    }
    if (this._startTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTimestamp = this._startTimestamp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterPluginframeworkClusterInfoDriver | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostPrivateIp = undefined;
      this._instanceId = undefined;
      this._nodeAwsAttributes.internalValue = undefined;
      this._nodeId = undefined;
      this._privateIp = undefined;
      this._publicDns = undefined;
      this._startTimestamp = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostPrivateIp = value.hostPrivateIp;
      this._instanceId = value.instanceId;
      this._nodeAwsAttributes.internalValue = value.nodeAwsAttributes;
      this._nodeId = value.nodeId;
      this._privateIp = value.privateIp;
      this._publicDns = value.publicDns;
      this._startTimestamp = value.startTimestamp;
    }
  }

  // host_private_ip - computed: true, optional: true, required: false
  private _hostPrivateIp?: string; 
  public get hostPrivateIp() {
    return this.getStringAttribute('host_private_ip');
  }
  public set hostPrivateIp(value: string) {
    this._hostPrivateIp = value;
  }
  public resetHostPrivateIp() {
    this._hostPrivateIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPrivateIpInput() {
    return this._hostPrivateIp;
  }

  // instance_id - computed: true, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // node_aws_attributes - computed: true, optional: true, required: false
  private _nodeAwsAttributes = new DataDatabricksClusterPluginframeworkClusterInfoDriverNodeAwsAttributesList(this, "node_aws_attributes", false);
  public get nodeAwsAttributes() {
    return this._nodeAwsAttributes;
  }
  public putNodeAwsAttributes(value: DataDatabricksClusterPluginframeworkClusterInfoDriverNodeAwsAttributes[] | cdktn.IResolvable) {
    this._nodeAwsAttributes.internalValue = value;
  }
  public resetNodeAwsAttributes() {
    this._nodeAwsAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAwsAttributesInput() {
    return this._nodeAwsAttributes.internalValue;
  }

  // node_id - computed: true, optional: true, required: false
  private _nodeId?: string; 
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }
  public set nodeId(value: string) {
    this._nodeId = value;
  }
  public resetNodeId() {
    this._nodeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeIdInput() {
    return this._nodeId;
  }

  // private_ip - computed: true, optional: true, required: false
  private _privateIp?: string; 
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }
  public set privateIp(value: string) {
    this._privateIp = value;
  }
  public resetPrivateIp() {
    this._privateIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpInput() {
    return this._privateIp;
  }

  // public_dns - computed: true, optional: true, required: false
  private _publicDns?: string; 
  public get publicDns() {
    return this.getStringAttribute('public_dns');
  }
  public set publicDns(value: string) {
    this._publicDns = value;
  }
  public resetPublicDns() {
    this._publicDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicDnsInput() {
    return this._publicDns;
  }

  // start_timestamp - computed: true, optional: true, required: false
  private _startTimestamp?: number; 
  public get startTimestamp() {
    return this.getNumberAttribute('start_timestamp');
  }
  public set startTimestamp(value: number) {
    this._startTimestamp = value;
  }
  public resetStartTimestamp() {
    this._startTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimestampInput() {
    return this._startTimestamp;
  }
}

export class DataDatabricksClusterPluginframeworkClusterInfoDriverList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksClusterPluginframeworkClusterInfoDriver[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksClusterPluginframeworkClusterInfoDriverOutputReference {
    return new DataDatabricksClusterPluginframeworkClusterInfoDriverOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksClusterPluginframeworkClusterInfoDriverNodeTypeFlexibility {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#alternate_node_type_ids DataDatabricksClusterPluginframework#alternate_node_type_ids}
  */
  readonly alternateNodeTypeIds?: string[];
}

export function dataDatabricksClusterPluginframeworkClusterInfoDriverNodeTypeFlexibilityToTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoDriverNodeTypeFlexibility | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alternate_node_type_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.alternateNodeTypeIds),
  }
}


export function dataDatabricksClusterPluginframeworkClusterInfoDriverNodeTypeFlexibilityToHclTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoDriverNodeTypeFlexibility | cdktn.IResolvable): any {
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

export class DataDatabricksClusterPluginframeworkClusterInfoDriverNodeTypeFlexibilityOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksClusterPluginframeworkClusterInfoDriverNodeTypeFlexibility | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alternateNodeTypeIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.alternateNodeTypeIds = this._alternateNodeTypeIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterPluginframeworkClusterInfoDriverNodeTypeFlexibility | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alternateNodeTypeIds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alternateNodeTypeIds = value.alternateNodeTypeIds;
    }
  }

  // alternate_node_type_ids - computed: true, optional: true, required: false
  private _alternateNodeTypeIds?: string[]; 
  public get alternateNodeTypeIds() {
    return this.getListAttribute('alternate_node_type_ids');
  }
  public set alternateNodeTypeIds(value: string[]) {
    this._alternateNodeTypeIds = value;
  }
  public resetAlternateNodeTypeIds() {
    this._alternateNodeTypeIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alternateNodeTypeIdsInput() {
    return this._alternateNodeTypeIds;
  }
}

export class DataDatabricksClusterPluginframeworkClusterInfoDriverNodeTypeFlexibilityList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksClusterPluginframeworkClusterInfoDriverNodeTypeFlexibility[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksClusterPluginframeworkClusterInfoDriverNodeTypeFlexibilityOutputReference {
    return new DataDatabricksClusterPluginframeworkClusterInfoDriverNodeTypeFlexibilityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksClusterPluginframeworkClusterInfoExecutorsNodeAwsAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#is_spot DataDatabricksClusterPluginframework#is_spot}
  */
  readonly isSpot?: boolean | cdktn.IResolvable;
}

export function dataDatabricksClusterPluginframeworkClusterInfoExecutorsNodeAwsAttributesToTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoExecutorsNodeAwsAttributes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_spot: cdktn.booleanToTerraform(struct!.isSpot),
  }
}


export function dataDatabricksClusterPluginframeworkClusterInfoExecutorsNodeAwsAttributesToHclTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoExecutorsNodeAwsAttributes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_spot: {
      value: cdktn.booleanToHclTerraform(struct!.isSpot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksClusterPluginframeworkClusterInfoExecutorsNodeAwsAttributesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksClusterPluginframeworkClusterInfoExecutorsNodeAwsAttributes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isSpot !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSpot = this._isSpot;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterPluginframeworkClusterInfoExecutorsNodeAwsAttributes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isSpot = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isSpot = value.isSpot;
    }
  }

  // is_spot - computed: true, optional: true, required: false
  private _isSpot?: boolean | cdktn.IResolvable; 
  public get isSpot() {
    return this.getBooleanAttribute('is_spot');
  }
  public set isSpot(value: boolean | cdktn.IResolvable) {
    this._isSpot = value;
  }
  public resetIsSpot() {
    this._isSpot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSpotInput() {
    return this._isSpot;
  }
}

export class DataDatabricksClusterPluginframeworkClusterInfoExecutorsNodeAwsAttributesList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksClusterPluginframeworkClusterInfoExecutorsNodeAwsAttributes[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksClusterPluginframeworkClusterInfoExecutorsNodeAwsAttributesOutputReference {
    return new DataDatabricksClusterPluginframeworkClusterInfoExecutorsNodeAwsAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksClusterPluginframeworkClusterInfoExecutors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#host_private_ip DataDatabricksClusterPluginframework#host_private_ip}
  */
  readonly hostPrivateIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#instance_id DataDatabricksClusterPluginframework#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#node_aws_attributes DataDatabricksClusterPluginframework#node_aws_attributes}
  */
  readonly nodeAwsAttributes?: DataDatabricksClusterPluginframeworkClusterInfoExecutorsNodeAwsAttributes[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#node_id DataDatabricksClusterPluginframework#node_id}
  */
  readonly nodeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#private_ip DataDatabricksClusterPluginframework#private_ip}
  */
  readonly privateIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#public_dns DataDatabricksClusterPluginframework#public_dns}
  */
  readonly publicDns?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#start_timestamp DataDatabricksClusterPluginframework#start_timestamp}
  */
  readonly startTimestamp?: number;
}

export function dataDatabricksClusterPluginframeworkClusterInfoExecutorsToTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoExecutors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_private_ip: cdktn.stringToTerraform(struct!.hostPrivateIp),
    instance_id: cdktn.stringToTerraform(struct!.instanceId),
    node_aws_attributes: cdktn.listMapper(dataDatabricksClusterPluginframeworkClusterInfoExecutorsNodeAwsAttributesToTerraform, false)(struct!.nodeAwsAttributes),
    node_id: cdktn.stringToTerraform(struct!.nodeId),
    private_ip: cdktn.stringToTerraform(struct!.privateIp),
    public_dns: cdktn.stringToTerraform(struct!.publicDns),
    start_timestamp: cdktn.numberToTerraform(struct!.startTimestamp),
  }
}


export function dataDatabricksClusterPluginframeworkClusterInfoExecutorsToHclTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoExecutors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_private_ip: {
      value: cdktn.stringToHclTerraform(struct!.hostPrivateIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_id: {
      value: cdktn.stringToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_aws_attributes: {
      value: cdktn.listMapperHcl(dataDatabricksClusterPluginframeworkClusterInfoExecutorsNodeAwsAttributesToHclTerraform, false)(struct!.nodeAwsAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterPluginframeworkClusterInfoExecutorsNodeAwsAttributesList",
    },
    node_id: {
      value: cdktn.stringToHclTerraform(struct!.nodeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_ip: {
      value: cdktn.stringToHclTerraform(struct!.privateIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_dns: {
      value: cdktn.stringToHclTerraform(struct!.publicDns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_timestamp: {
      value: cdktn.numberToHclTerraform(struct!.startTimestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksClusterPluginframeworkClusterInfoExecutorsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksClusterPluginframeworkClusterInfoExecutors | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostPrivateIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostPrivateIp = this._hostPrivateIp;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._nodeAwsAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAwsAttributes = this._nodeAwsAttributes?.internalValue;
    }
    if (this._nodeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeId = this._nodeId;
    }
    if (this._privateIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateIp = this._privateIp;
    }
    if (this._publicDns !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicDns = this._publicDns;
    }
    if (this._startTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTimestamp = this._startTimestamp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterPluginframeworkClusterInfoExecutors | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostPrivateIp = undefined;
      this._instanceId = undefined;
      this._nodeAwsAttributes.internalValue = undefined;
      this._nodeId = undefined;
      this._privateIp = undefined;
      this._publicDns = undefined;
      this._startTimestamp = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostPrivateIp = value.hostPrivateIp;
      this._instanceId = value.instanceId;
      this._nodeAwsAttributes.internalValue = value.nodeAwsAttributes;
      this._nodeId = value.nodeId;
      this._privateIp = value.privateIp;
      this._publicDns = value.publicDns;
      this._startTimestamp = value.startTimestamp;
    }
  }

  // host_private_ip - computed: true, optional: true, required: false
  private _hostPrivateIp?: string; 
  public get hostPrivateIp() {
    return this.getStringAttribute('host_private_ip');
  }
  public set hostPrivateIp(value: string) {
    this._hostPrivateIp = value;
  }
  public resetHostPrivateIp() {
    this._hostPrivateIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPrivateIpInput() {
    return this._hostPrivateIp;
  }

  // instance_id - computed: true, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // node_aws_attributes - computed: true, optional: true, required: false
  private _nodeAwsAttributes = new DataDatabricksClusterPluginframeworkClusterInfoExecutorsNodeAwsAttributesList(this, "node_aws_attributes", false);
  public get nodeAwsAttributes() {
    return this._nodeAwsAttributes;
  }
  public putNodeAwsAttributes(value: DataDatabricksClusterPluginframeworkClusterInfoExecutorsNodeAwsAttributes[] | cdktn.IResolvable) {
    this._nodeAwsAttributes.internalValue = value;
  }
  public resetNodeAwsAttributes() {
    this._nodeAwsAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAwsAttributesInput() {
    return this._nodeAwsAttributes.internalValue;
  }

  // node_id - computed: true, optional: true, required: false
  private _nodeId?: string; 
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }
  public set nodeId(value: string) {
    this._nodeId = value;
  }
  public resetNodeId() {
    this._nodeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeIdInput() {
    return this._nodeId;
  }

  // private_ip - computed: true, optional: true, required: false
  private _privateIp?: string; 
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }
  public set privateIp(value: string) {
    this._privateIp = value;
  }
  public resetPrivateIp() {
    this._privateIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpInput() {
    return this._privateIp;
  }

  // public_dns - computed: true, optional: true, required: false
  private _publicDns?: string; 
  public get publicDns() {
    return this.getStringAttribute('public_dns');
  }
  public set publicDns(value: string) {
    this._publicDns = value;
  }
  public resetPublicDns() {
    this._publicDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicDnsInput() {
    return this._publicDns;
  }

  // start_timestamp - computed: true, optional: true, required: false
  private _startTimestamp?: number; 
  public get startTimestamp() {
    return this.getNumberAttribute('start_timestamp');
  }
  public set startTimestamp(value: number) {
    this._startTimestamp = value;
  }
  public resetStartTimestamp() {
    this._startTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimestampInput() {
    return this._startTimestamp;
  }
}

export class DataDatabricksClusterPluginframeworkClusterInfoExecutorsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksClusterPluginframeworkClusterInfoExecutors[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksClusterPluginframeworkClusterInfoExecutorsOutputReference {
    return new DataDatabricksClusterPluginframeworkClusterInfoExecutorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksClusterPluginframeworkClusterInfoGcpAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#availability DataDatabricksClusterPluginframework#availability}
  */
  readonly availability?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#boot_disk_size DataDatabricksClusterPluginframework#boot_disk_size}
  */
  readonly bootDiskSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#first_on_demand DataDatabricksClusterPluginframework#first_on_demand}
  */
  readonly firstOnDemand?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#google_service_account DataDatabricksClusterPluginframework#google_service_account}
  */
  readonly googleServiceAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#local_ssd_count DataDatabricksClusterPluginframework#local_ssd_count}
  */
  readonly localSsdCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#use_preemptible_executors DataDatabricksClusterPluginframework#use_preemptible_executors}
  */
  readonly usePreemptibleExecutors?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#zone_id DataDatabricksClusterPluginframework#zone_id}
  */
  readonly zoneId?: string;
}

export function dataDatabricksClusterPluginframeworkClusterInfoGcpAttributesToTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoGcpAttributes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability: cdktn.stringToTerraform(struct!.availability),
    boot_disk_size: cdktn.numberToTerraform(struct!.bootDiskSize),
    first_on_demand: cdktn.numberToTerraform(struct!.firstOnDemand),
    google_service_account: cdktn.stringToTerraform(struct!.googleServiceAccount),
    local_ssd_count: cdktn.numberToTerraform(struct!.localSsdCount),
    use_preemptible_executors: cdktn.booleanToTerraform(struct!.usePreemptibleExecutors),
    zone_id: cdktn.stringToTerraform(struct!.zoneId),
  }
}


export function dataDatabricksClusterPluginframeworkClusterInfoGcpAttributesToHclTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoGcpAttributes | cdktn.IResolvable): any {
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
    boot_disk_size: {
      value: cdktn.numberToHclTerraform(struct!.bootDiskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    first_on_demand: {
      value: cdktn.numberToHclTerraform(struct!.firstOnDemand),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    google_service_account: {
      value: cdktn.stringToHclTerraform(struct!.googleServiceAccount),
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
    use_preemptible_executors: {
      value: cdktn.booleanToHclTerraform(struct!.usePreemptibleExecutors),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class DataDatabricksClusterPluginframeworkClusterInfoGcpAttributesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksClusterPluginframeworkClusterInfoGcpAttributes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availability !== undefined) {
      hasAnyValues = true;
      internalValueResult.availability = this._availability;
    }
    if (this._bootDiskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDiskSize = this._bootDiskSize;
    }
    if (this._firstOnDemand !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstOnDemand = this._firstOnDemand;
    }
    if (this._googleServiceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleServiceAccount = this._googleServiceAccount;
    }
    if (this._localSsdCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSsdCount = this._localSsdCount;
    }
    if (this._usePreemptibleExecutors !== undefined) {
      hasAnyValues = true;
      internalValueResult.usePreemptibleExecutors = this._usePreemptibleExecutors;
    }
    if (this._zoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneId = this._zoneId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterPluginframeworkClusterInfoGcpAttributes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availability = undefined;
      this._bootDiskSize = undefined;
      this._firstOnDemand = undefined;
      this._googleServiceAccount = undefined;
      this._localSsdCount = undefined;
      this._usePreemptibleExecutors = undefined;
      this._zoneId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availability = value.availability;
      this._bootDiskSize = value.bootDiskSize;
      this._firstOnDemand = value.firstOnDemand;
      this._googleServiceAccount = value.googleServiceAccount;
      this._localSsdCount = value.localSsdCount;
      this._usePreemptibleExecutors = value.usePreemptibleExecutors;
      this._zoneId = value.zoneId;
    }
  }

  // availability - computed: true, optional: true, required: false
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

  // boot_disk_size - computed: true, optional: true, required: false
  private _bootDiskSize?: number; 
  public get bootDiskSize() {
    return this.getNumberAttribute('boot_disk_size');
  }
  public set bootDiskSize(value: number) {
    this._bootDiskSize = value;
  }
  public resetBootDiskSize() {
    this._bootDiskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskSizeInput() {
    return this._bootDiskSize;
  }

  // first_on_demand - computed: true, optional: true, required: false
  private _firstOnDemand?: number; 
  public get firstOnDemand() {
    return this.getNumberAttribute('first_on_demand');
  }
  public set firstOnDemand(value: number) {
    this._firstOnDemand = value;
  }
  public resetFirstOnDemand() {
    this._firstOnDemand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstOnDemandInput() {
    return this._firstOnDemand;
  }

  // google_service_account - computed: true, optional: true, required: false
  private _googleServiceAccount?: string; 
  public get googleServiceAccount() {
    return this.getStringAttribute('google_service_account');
  }
  public set googleServiceAccount(value: string) {
    this._googleServiceAccount = value;
  }
  public resetGoogleServiceAccount() {
    this._googleServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleServiceAccountInput() {
    return this._googleServiceAccount;
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

  // use_preemptible_executors - computed: true, optional: true, required: false
  private _usePreemptibleExecutors?: boolean | cdktn.IResolvable; 
  public get usePreemptibleExecutors() {
    return this.getBooleanAttribute('use_preemptible_executors');
  }
  public set usePreemptibleExecutors(value: boolean | cdktn.IResolvable) {
    this._usePreemptibleExecutors = value;
  }
  public resetUsePreemptibleExecutors() {
    this._usePreemptibleExecutors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePreemptibleExecutorsInput() {
    return this._usePreemptibleExecutors;
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

export class DataDatabricksClusterPluginframeworkClusterInfoGcpAttributesList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksClusterPluginframeworkClusterInfoGcpAttributes[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksClusterPluginframeworkClusterInfoGcpAttributesOutputReference {
    return new DataDatabricksClusterPluginframeworkClusterInfoGcpAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksClusterPluginframeworkClusterInfoInitScriptsAbfss {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#destination DataDatabricksClusterPluginframework#destination}
  */
  readonly destination: string;
}

export function dataDatabricksClusterPluginframeworkClusterInfoInitScriptsAbfssToTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoInitScriptsAbfss | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktn.stringToTerraform(struct!.destination),
  }
}


export function dataDatabricksClusterPluginframeworkClusterInfoInitScriptsAbfssToHclTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoInitScriptsAbfss | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksClusterPluginframeworkClusterInfoInitScriptsAbfssOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksClusterPluginframeworkClusterInfoInitScriptsAbfss | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterPluginframeworkClusterInfoInitScriptsAbfss | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination = value.destination;
    }
  }

  // destination - computed: true, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }
}

export class DataDatabricksClusterPluginframeworkClusterInfoInitScriptsAbfssList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksClusterPluginframeworkClusterInfoInitScriptsAbfss[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksClusterPluginframeworkClusterInfoInitScriptsAbfssOutputReference {
    return new DataDatabricksClusterPluginframeworkClusterInfoInitScriptsAbfssOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksClusterPluginframeworkClusterInfoInitScriptsDbfs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#destination DataDatabricksClusterPluginframework#destination}
  */
  readonly destination: string;
}

export function dataDatabricksClusterPluginframeworkClusterInfoInitScriptsDbfsToTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoInitScriptsDbfs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktn.stringToTerraform(struct!.destination),
  }
}


export function dataDatabricksClusterPluginframeworkClusterInfoInitScriptsDbfsToHclTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoInitScriptsDbfs | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksClusterPluginframeworkClusterInfoInitScriptsDbfsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksClusterPluginframeworkClusterInfoInitScriptsDbfs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterPluginframeworkClusterInfoInitScriptsDbfs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination = value.destination;
    }
  }

  // destination - computed: true, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }
}

export class DataDatabricksClusterPluginframeworkClusterInfoInitScriptsDbfsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksClusterPluginframeworkClusterInfoInitScriptsDbfs[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksClusterPluginframeworkClusterInfoInitScriptsDbfsOutputReference {
    return new DataDatabricksClusterPluginframeworkClusterInfoInitScriptsDbfsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksClusterPluginframeworkClusterInfoInitScriptsFile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#destination DataDatabricksClusterPluginframework#destination}
  */
  readonly destination: string;
}

export function dataDatabricksClusterPluginframeworkClusterInfoInitScriptsFileToTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoInitScriptsFile | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktn.stringToTerraform(struct!.destination),
  }
}


export function dataDatabricksClusterPluginframeworkClusterInfoInitScriptsFileToHclTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoInitScriptsFile | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksClusterPluginframeworkClusterInfoInitScriptsFileOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksClusterPluginframeworkClusterInfoInitScriptsFile | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterPluginframeworkClusterInfoInitScriptsFile | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination = value.destination;
    }
  }

  // destination - computed: true, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }
}

export class DataDatabricksClusterPluginframeworkClusterInfoInitScriptsFileList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksClusterPluginframeworkClusterInfoInitScriptsFile[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksClusterPluginframeworkClusterInfoInitScriptsFileOutputReference {
    return new DataDatabricksClusterPluginframeworkClusterInfoInitScriptsFileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksClusterPluginframeworkClusterInfoInitScriptsGcs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#destination DataDatabricksClusterPluginframework#destination}
  */
  readonly destination: string;
}

export function dataDatabricksClusterPluginframeworkClusterInfoInitScriptsGcsToTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoInitScriptsGcs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktn.stringToTerraform(struct!.destination),
  }
}


export function dataDatabricksClusterPluginframeworkClusterInfoInitScriptsGcsToHclTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoInitScriptsGcs | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksClusterPluginframeworkClusterInfoInitScriptsGcsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksClusterPluginframeworkClusterInfoInitScriptsGcs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterPluginframeworkClusterInfoInitScriptsGcs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination = value.destination;
    }
  }

  // destination - computed: true, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }
}

export class DataDatabricksClusterPluginframeworkClusterInfoInitScriptsGcsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksClusterPluginframeworkClusterInfoInitScriptsGcs[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksClusterPluginframeworkClusterInfoInitScriptsGcsOutputReference {
    return new DataDatabricksClusterPluginframeworkClusterInfoInitScriptsGcsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksClusterPluginframeworkClusterInfoInitScriptsS3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#canned_acl DataDatabricksClusterPluginframework#canned_acl}
  */
  readonly cannedAcl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#destination DataDatabricksClusterPluginframework#destination}
  */
  readonly destination: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#enable_encryption DataDatabricksClusterPluginframework#enable_encryption}
  */
  readonly enableEncryption?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#encryption_type DataDatabricksClusterPluginframework#encryption_type}
  */
  readonly encryptionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#endpoint DataDatabricksClusterPluginframework#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#kms_key DataDatabricksClusterPluginframework#kms_key}
  */
  readonly kmsKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#region DataDatabricksClusterPluginframework#region}
  */
  readonly region?: string;
}

export function dataDatabricksClusterPluginframeworkClusterInfoInitScriptsS3ToTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoInitScriptsS3 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    canned_acl: cdktn.stringToTerraform(struct!.cannedAcl),
    destination: cdktn.stringToTerraform(struct!.destination),
    enable_encryption: cdktn.booleanToTerraform(struct!.enableEncryption),
    encryption_type: cdktn.stringToTerraform(struct!.encryptionType),
    endpoint: cdktn.stringToTerraform(struct!.endpoint),
    kms_key: cdktn.stringToTerraform(struct!.kmsKey),
    region: cdktn.stringToTerraform(struct!.region),
  }
}


export function dataDatabricksClusterPluginframeworkClusterInfoInitScriptsS3ToHclTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoInitScriptsS3 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    canned_acl: {
      value: cdktn.stringToHclTerraform(struct!.cannedAcl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination: {
      value: cdktn.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_encryption: {
      value: cdktn.booleanToHclTerraform(struct!.enableEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    encryption_type: {
      value: cdktn.stringToHclTerraform(struct!.encryptionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktn.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key: {
      value: cdktn.stringToHclTerraform(struct!.kmsKey),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksClusterPluginframeworkClusterInfoInitScriptsS3OutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksClusterPluginframeworkClusterInfoInitScriptsS3 | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cannedAcl !== undefined) {
      hasAnyValues = true;
      internalValueResult.cannedAcl = this._cannedAcl;
    }
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._enableEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableEncryption = this._enableEncryption;
    }
    if (this._encryptionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionType = this._encryptionType;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._kmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKey = this._kmsKey;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterPluginframeworkClusterInfoInitScriptsS3 | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cannedAcl = undefined;
      this._destination = undefined;
      this._enableEncryption = undefined;
      this._encryptionType = undefined;
      this._endpoint = undefined;
      this._kmsKey = undefined;
      this._region = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cannedAcl = value.cannedAcl;
      this._destination = value.destination;
      this._enableEncryption = value.enableEncryption;
      this._encryptionType = value.encryptionType;
      this._endpoint = value.endpoint;
      this._kmsKey = value.kmsKey;
      this._region = value.region;
    }
  }

  // canned_acl - computed: true, optional: true, required: false
  private _cannedAcl?: string; 
  public get cannedAcl() {
    return this.getStringAttribute('canned_acl');
  }
  public set cannedAcl(value: string) {
    this._cannedAcl = value;
  }
  public resetCannedAcl() {
    this._cannedAcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cannedAclInput() {
    return this._cannedAcl;
  }

  // destination - computed: true, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // enable_encryption - computed: true, optional: true, required: false
  private _enableEncryption?: boolean | cdktn.IResolvable; 
  public get enableEncryption() {
    return this.getBooleanAttribute('enable_encryption');
  }
  public set enableEncryption(value: boolean | cdktn.IResolvable) {
    this._enableEncryption = value;
  }
  public resetEnableEncryption() {
    this._enableEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEncryptionInput() {
    return this._enableEncryption;
  }

  // encryption_type - computed: true, optional: true, required: false
  private _encryptionType?: string; 
  public get encryptionType() {
    return this.getStringAttribute('encryption_type');
  }
  public set encryptionType(value: string) {
    this._encryptionType = value;
  }
  public resetEncryptionType() {
    this._encryptionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionTypeInput() {
    return this._encryptionType;
  }

  // endpoint - computed: true, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // kms_key - computed: true, optional: true, required: false
  private _kmsKey?: string; 
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string) {
    this._kmsKey = value;
  }
  public resetKmsKey() {
    this._kmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey;
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
}

export class DataDatabricksClusterPluginframeworkClusterInfoInitScriptsS3List extends cdktn.ComplexList {
  public internalValue? : DataDatabricksClusterPluginframeworkClusterInfoInitScriptsS3[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksClusterPluginframeworkClusterInfoInitScriptsS3OutputReference {
    return new DataDatabricksClusterPluginframeworkClusterInfoInitScriptsS3OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksClusterPluginframeworkClusterInfoInitScriptsVolumes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#destination DataDatabricksClusterPluginframework#destination}
  */
  readonly destination: string;
}

export function dataDatabricksClusterPluginframeworkClusterInfoInitScriptsVolumesToTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoInitScriptsVolumes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktn.stringToTerraform(struct!.destination),
  }
}


export function dataDatabricksClusterPluginframeworkClusterInfoInitScriptsVolumesToHclTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoInitScriptsVolumes | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksClusterPluginframeworkClusterInfoInitScriptsVolumesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksClusterPluginframeworkClusterInfoInitScriptsVolumes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterPluginframeworkClusterInfoInitScriptsVolumes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination = value.destination;
    }
  }

  // destination - computed: true, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }
}

export class DataDatabricksClusterPluginframeworkClusterInfoInitScriptsVolumesList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksClusterPluginframeworkClusterInfoInitScriptsVolumes[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksClusterPluginframeworkClusterInfoInitScriptsVolumesOutputReference {
    return new DataDatabricksClusterPluginframeworkClusterInfoInitScriptsVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksClusterPluginframeworkClusterInfoInitScriptsWorkspace {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#destination DataDatabricksClusterPluginframework#destination}
  */
  readonly destination: string;
}

export function dataDatabricksClusterPluginframeworkClusterInfoInitScriptsWorkspaceToTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoInitScriptsWorkspace | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktn.stringToTerraform(struct!.destination),
  }
}


export function dataDatabricksClusterPluginframeworkClusterInfoInitScriptsWorkspaceToHclTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoInitScriptsWorkspace | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksClusterPluginframeworkClusterInfoInitScriptsWorkspaceOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksClusterPluginframeworkClusterInfoInitScriptsWorkspace | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterPluginframeworkClusterInfoInitScriptsWorkspace | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination = value.destination;
    }
  }

  // destination - computed: true, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }
}

export class DataDatabricksClusterPluginframeworkClusterInfoInitScriptsWorkspaceList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksClusterPluginframeworkClusterInfoInitScriptsWorkspace[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksClusterPluginframeworkClusterInfoInitScriptsWorkspaceOutputReference {
    return new DataDatabricksClusterPluginframeworkClusterInfoInitScriptsWorkspaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksClusterPluginframeworkClusterInfoInitScripts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#abfss DataDatabricksClusterPluginframework#abfss}
  */
  readonly abfss?: DataDatabricksClusterPluginframeworkClusterInfoInitScriptsAbfss[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#dbfs DataDatabricksClusterPluginframework#dbfs}
  */
  readonly dbfs?: DataDatabricksClusterPluginframeworkClusterInfoInitScriptsDbfs[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#file DataDatabricksClusterPluginframework#file}
  */
  readonly file?: DataDatabricksClusterPluginframeworkClusterInfoInitScriptsFile[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#gcs DataDatabricksClusterPluginframework#gcs}
  */
  readonly gcs?: DataDatabricksClusterPluginframeworkClusterInfoInitScriptsGcs[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#s3 DataDatabricksClusterPluginframework#s3}
  */
  readonly s3?: DataDatabricksClusterPluginframeworkClusterInfoInitScriptsS3[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#volumes DataDatabricksClusterPluginframework#volumes}
  */
  readonly volumes?: DataDatabricksClusterPluginframeworkClusterInfoInitScriptsVolumes[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#workspace DataDatabricksClusterPluginframework#workspace}
  */
  readonly workspace?: DataDatabricksClusterPluginframeworkClusterInfoInitScriptsWorkspace[] | cdktn.IResolvable;
}

export function dataDatabricksClusterPluginframeworkClusterInfoInitScriptsToTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoInitScripts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abfss: cdktn.listMapper(dataDatabricksClusterPluginframeworkClusterInfoInitScriptsAbfssToTerraform, false)(struct!.abfss),
    dbfs: cdktn.listMapper(dataDatabricksClusterPluginframeworkClusterInfoInitScriptsDbfsToTerraform, false)(struct!.dbfs),
    file: cdktn.listMapper(dataDatabricksClusterPluginframeworkClusterInfoInitScriptsFileToTerraform, false)(struct!.file),
    gcs: cdktn.listMapper(dataDatabricksClusterPluginframeworkClusterInfoInitScriptsGcsToTerraform, false)(struct!.gcs),
    s3: cdktn.listMapper(dataDatabricksClusterPluginframeworkClusterInfoInitScriptsS3ToTerraform, false)(struct!.s3),
    volumes: cdktn.listMapper(dataDatabricksClusterPluginframeworkClusterInfoInitScriptsVolumesToTerraform, false)(struct!.volumes),
    workspace: cdktn.listMapper(dataDatabricksClusterPluginframeworkClusterInfoInitScriptsWorkspaceToTerraform, false)(struct!.workspace),
  }
}


export function dataDatabricksClusterPluginframeworkClusterInfoInitScriptsToHclTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoInitScripts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    abfss: {
      value: cdktn.listMapperHcl(dataDatabricksClusterPluginframeworkClusterInfoInitScriptsAbfssToHclTerraform, false)(struct!.abfss),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterPluginframeworkClusterInfoInitScriptsAbfssList",
    },
    dbfs: {
      value: cdktn.listMapperHcl(dataDatabricksClusterPluginframeworkClusterInfoInitScriptsDbfsToHclTerraform, false)(struct!.dbfs),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterPluginframeworkClusterInfoInitScriptsDbfsList",
    },
    file: {
      value: cdktn.listMapperHcl(dataDatabricksClusterPluginframeworkClusterInfoInitScriptsFileToHclTerraform, false)(struct!.file),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterPluginframeworkClusterInfoInitScriptsFileList",
    },
    gcs: {
      value: cdktn.listMapperHcl(dataDatabricksClusterPluginframeworkClusterInfoInitScriptsGcsToHclTerraform, false)(struct!.gcs),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterPluginframeworkClusterInfoInitScriptsGcsList",
    },
    s3: {
      value: cdktn.listMapperHcl(dataDatabricksClusterPluginframeworkClusterInfoInitScriptsS3ToHclTerraform, false)(struct!.s3),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterPluginframeworkClusterInfoInitScriptsS3List",
    },
    volumes: {
      value: cdktn.listMapperHcl(dataDatabricksClusterPluginframeworkClusterInfoInitScriptsVolumesToHclTerraform, false)(struct!.volumes),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterPluginframeworkClusterInfoInitScriptsVolumesList",
    },
    workspace: {
      value: cdktn.listMapperHcl(dataDatabricksClusterPluginframeworkClusterInfoInitScriptsWorkspaceToHclTerraform, false)(struct!.workspace),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterPluginframeworkClusterInfoInitScriptsWorkspaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksClusterPluginframeworkClusterInfoInitScriptsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksClusterPluginframeworkClusterInfoInitScripts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._abfss?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.abfss = this._abfss?.internalValue;
    }
    if (this._dbfs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbfs = this._dbfs?.internalValue;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    if (this._gcs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcs = this._gcs?.internalValue;
    }
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    if (this._volumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes?.internalValue;
    }
    if (this._workspace?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspace = this._workspace?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterPluginframeworkClusterInfoInitScripts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._abfss.internalValue = undefined;
      this._dbfs.internalValue = undefined;
      this._file.internalValue = undefined;
      this._gcs.internalValue = undefined;
      this._s3.internalValue = undefined;
      this._volumes.internalValue = undefined;
      this._workspace.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._abfss.internalValue = value.abfss;
      this._dbfs.internalValue = value.dbfs;
      this._file.internalValue = value.file;
      this._gcs.internalValue = value.gcs;
      this._s3.internalValue = value.s3;
      this._volumes.internalValue = value.volumes;
      this._workspace.internalValue = value.workspace;
    }
  }

  // abfss - computed: true, optional: true, required: false
  private _abfss = new DataDatabricksClusterPluginframeworkClusterInfoInitScriptsAbfssList(this, "abfss", false);
  public get abfss() {
    return this._abfss;
  }
  public putAbfss(value: DataDatabricksClusterPluginframeworkClusterInfoInitScriptsAbfss[] | cdktn.IResolvable) {
    this._abfss.internalValue = value;
  }
  public resetAbfss() {
    this._abfss.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abfssInput() {
    return this._abfss.internalValue;
  }

  // dbfs - computed: true, optional: true, required: false
  private _dbfs = new DataDatabricksClusterPluginframeworkClusterInfoInitScriptsDbfsList(this, "dbfs", false);
  public get dbfs() {
    return this._dbfs;
  }
  public putDbfs(value: DataDatabricksClusterPluginframeworkClusterInfoInitScriptsDbfs[] | cdktn.IResolvable) {
    this._dbfs.internalValue = value;
  }
  public resetDbfs() {
    this._dbfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbfsInput() {
    return this._dbfs.internalValue;
  }

  // file - computed: true, optional: true, required: false
  private _file = new DataDatabricksClusterPluginframeworkClusterInfoInitScriptsFileList(this, "file", false);
  public get file() {
    return this._file;
  }
  public putFile(value: DataDatabricksClusterPluginframeworkClusterInfoInitScriptsFile[] | cdktn.IResolvable) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // gcs - computed: true, optional: true, required: false
  private _gcs = new DataDatabricksClusterPluginframeworkClusterInfoInitScriptsGcsList(this, "gcs", false);
  public get gcs() {
    return this._gcs;
  }
  public putGcs(value: DataDatabricksClusterPluginframeworkClusterInfoInitScriptsGcs[] | cdktn.IResolvable) {
    this._gcs.internalValue = value;
  }
  public resetGcs() {
    this._gcs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsInput() {
    return this._gcs.internalValue;
  }

  // s3 - computed: true, optional: true, required: false
  private _s3 = new DataDatabricksClusterPluginframeworkClusterInfoInitScriptsS3List(this, "s3", false);
  public get s3() {
    return this._s3;
  }
  public putS3(value: DataDatabricksClusterPluginframeworkClusterInfoInitScriptsS3[] | cdktn.IResolvable) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }

  // volumes - computed: true, optional: true, required: false
  private _volumes = new DataDatabricksClusterPluginframeworkClusterInfoInitScriptsVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: DataDatabricksClusterPluginframeworkClusterInfoInitScriptsVolumes[] | cdktn.IResolvable) {
    this._volumes.internalValue = value;
  }
  public resetVolumes() {
    this._volumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes.internalValue;
  }

  // workspace - computed: true, optional: true, required: false
  private _workspace = new DataDatabricksClusterPluginframeworkClusterInfoInitScriptsWorkspaceList(this, "workspace", false);
  public get workspace() {
    return this._workspace;
  }
  public putWorkspace(value: DataDatabricksClusterPluginframeworkClusterInfoInitScriptsWorkspace[] | cdktn.IResolvable) {
    this._workspace.internalValue = value;
  }
  public resetWorkspace() {
    this._workspace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceInput() {
    return this._workspace.internalValue;
  }
}

export class DataDatabricksClusterPluginframeworkClusterInfoInitScriptsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksClusterPluginframeworkClusterInfoInitScripts[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksClusterPluginframeworkClusterInfoInitScriptsOutputReference {
    return new DataDatabricksClusterPluginframeworkClusterInfoInitScriptsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksClusterPluginframeworkClusterInfoSpecAutoscale {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#max_workers DataDatabricksClusterPluginframework#max_workers}
  */
  readonly maxWorkers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#min_workers DataDatabricksClusterPluginframework#min_workers}
  */
  readonly minWorkers?: number;
}

export function dataDatabricksClusterPluginframeworkClusterInfoSpecAutoscaleToTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoSpecAutoscale | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_workers: cdktn.numberToTerraform(struct!.maxWorkers),
    min_workers: cdktn.numberToTerraform(struct!.minWorkers),
  }
}


export function dataDatabricksClusterPluginframeworkClusterInfoSpecAutoscaleToHclTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoSpecAutoscale | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_workers: {
      value: cdktn.numberToHclTerraform(struct!.maxWorkers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_workers: {
      value: cdktn.numberToHclTerraform(struct!.minWorkers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksClusterPluginframeworkClusterInfoSpecAutoscaleOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksClusterPluginframeworkClusterInfoSpecAutoscale | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxWorkers !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxWorkers = this._maxWorkers;
    }
    if (this._minWorkers !== undefined) {
      hasAnyValues = true;
      internalValueResult.minWorkers = this._minWorkers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterPluginframeworkClusterInfoSpecAutoscale | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxWorkers = undefined;
      this._minWorkers = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxWorkers = value.maxWorkers;
      this._minWorkers = value.minWorkers;
    }
  }

  // max_workers - computed: true, optional: true, required: false
  private _maxWorkers?: number; 
  public get maxWorkers() {
    return this.getNumberAttribute('max_workers');
  }
  public set maxWorkers(value: number) {
    this._maxWorkers = value;
  }
  public resetMaxWorkers() {
    this._maxWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWorkersInput() {
    return this._maxWorkers;
  }

  // min_workers - computed: true, optional: true, required: false
  private _minWorkers?: number; 
  public get minWorkers() {
    return this.getNumberAttribute('min_workers');
  }
  public set minWorkers(value: number) {
    this._minWorkers = value;
  }
  public resetMinWorkers() {
    this._minWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minWorkersInput() {
    return this._minWorkers;
  }
}

export class DataDatabricksClusterPluginframeworkClusterInfoSpecAutoscaleList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksClusterPluginframeworkClusterInfoSpecAutoscale[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksClusterPluginframeworkClusterInfoSpecAutoscaleOutputReference {
    return new DataDatabricksClusterPluginframeworkClusterInfoSpecAutoscaleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksClusterPluginframeworkClusterInfoSpecAwsAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#availability DataDatabricksClusterPluginframework#availability}
  */
  readonly availability?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#ebs_volume_count DataDatabricksClusterPluginframework#ebs_volume_count}
  */
  readonly ebsVolumeCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#ebs_volume_iops DataDatabricksClusterPluginframework#ebs_volume_iops}
  */
  readonly ebsVolumeIops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#ebs_volume_size DataDatabricksClusterPluginframework#ebs_volume_size}
  */
  readonly ebsVolumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#ebs_volume_throughput DataDatabricksClusterPluginframework#ebs_volume_throughput}
  */
  readonly ebsVolumeThroughput?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#ebs_volume_type DataDatabricksClusterPluginframework#ebs_volume_type}
  */
  readonly ebsVolumeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#first_on_demand DataDatabricksClusterPluginframework#first_on_demand}
  */
  readonly firstOnDemand?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#instance_profile_arn DataDatabricksClusterPluginframework#instance_profile_arn}
  */
  readonly instanceProfileArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#spot_bid_price_percent DataDatabricksClusterPluginframework#spot_bid_price_percent}
  */
  readonly spotBidPricePercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#zone_id DataDatabricksClusterPluginframework#zone_id}
  */
  readonly zoneId?: string;
}

export function dataDatabricksClusterPluginframeworkClusterInfoSpecAwsAttributesToTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoSpecAwsAttributes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability: cdktn.stringToTerraform(struct!.availability),
    ebs_volume_count: cdktn.numberToTerraform(struct!.ebsVolumeCount),
    ebs_volume_iops: cdktn.numberToTerraform(struct!.ebsVolumeIops),
    ebs_volume_size: cdktn.numberToTerraform(struct!.ebsVolumeSize),
    ebs_volume_throughput: cdktn.numberToTerraform(struct!.ebsVolumeThroughput),
    ebs_volume_type: cdktn.stringToTerraform(struct!.ebsVolumeType),
    first_on_demand: cdktn.numberToTerraform(struct!.firstOnDemand),
    instance_profile_arn: cdktn.stringToTerraform(struct!.instanceProfileArn),
    spot_bid_price_percent: cdktn.numberToTerraform(struct!.spotBidPricePercent),
    zone_id: cdktn.stringToTerraform(struct!.zoneId),
  }
}


export function dataDatabricksClusterPluginframeworkClusterInfoSpecAwsAttributesToHclTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoSpecAwsAttributes | cdktn.IResolvable): any {
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
    ebs_volume_count: {
      value: cdktn.numberToHclTerraform(struct!.ebsVolumeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ebs_volume_iops: {
      value: cdktn.numberToHclTerraform(struct!.ebsVolumeIops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ebs_volume_size: {
      value: cdktn.numberToHclTerraform(struct!.ebsVolumeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ebs_volume_throughput: {
      value: cdktn.numberToHclTerraform(struct!.ebsVolumeThroughput),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ebs_volume_type: {
      value: cdktn.stringToHclTerraform(struct!.ebsVolumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    first_on_demand: {
      value: cdktn.numberToHclTerraform(struct!.firstOnDemand),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataDatabricksClusterPluginframeworkClusterInfoSpecAwsAttributesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksClusterPluginframeworkClusterInfoSpecAwsAttributes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availability !== undefined) {
      hasAnyValues = true;
      internalValueResult.availability = this._availability;
    }
    if (this._ebsVolumeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsVolumeCount = this._ebsVolumeCount;
    }
    if (this._ebsVolumeIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsVolumeIops = this._ebsVolumeIops;
    }
    if (this._ebsVolumeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsVolumeSize = this._ebsVolumeSize;
    }
    if (this._ebsVolumeThroughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsVolumeThroughput = this._ebsVolumeThroughput;
    }
    if (this._ebsVolumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsVolumeType = this._ebsVolumeType;
    }
    if (this._firstOnDemand !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstOnDemand = this._firstOnDemand;
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

  public set internalValue(value: DataDatabricksClusterPluginframeworkClusterInfoSpecAwsAttributes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availability = undefined;
      this._ebsVolumeCount = undefined;
      this._ebsVolumeIops = undefined;
      this._ebsVolumeSize = undefined;
      this._ebsVolumeThroughput = undefined;
      this._ebsVolumeType = undefined;
      this._firstOnDemand = undefined;
      this._instanceProfileArn = undefined;
      this._spotBidPricePercent = undefined;
      this._zoneId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availability = value.availability;
      this._ebsVolumeCount = value.ebsVolumeCount;
      this._ebsVolumeIops = value.ebsVolumeIops;
      this._ebsVolumeSize = value.ebsVolumeSize;
      this._ebsVolumeThroughput = value.ebsVolumeThroughput;
      this._ebsVolumeType = value.ebsVolumeType;
      this._firstOnDemand = value.firstOnDemand;
      this._instanceProfileArn = value.instanceProfileArn;
      this._spotBidPricePercent = value.spotBidPricePercent;
      this._zoneId = value.zoneId;
    }
  }

  // availability - computed: true, optional: true, required: false
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

  // ebs_volume_count - computed: true, optional: true, required: false
  private _ebsVolumeCount?: number; 
  public get ebsVolumeCount() {
    return this.getNumberAttribute('ebs_volume_count');
  }
  public set ebsVolumeCount(value: number) {
    this._ebsVolumeCount = value;
  }
  public resetEbsVolumeCount() {
    this._ebsVolumeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsVolumeCountInput() {
    return this._ebsVolumeCount;
  }

  // ebs_volume_iops - computed: true, optional: true, required: false
  private _ebsVolumeIops?: number; 
  public get ebsVolumeIops() {
    return this.getNumberAttribute('ebs_volume_iops');
  }
  public set ebsVolumeIops(value: number) {
    this._ebsVolumeIops = value;
  }
  public resetEbsVolumeIops() {
    this._ebsVolumeIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsVolumeIopsInput() {
    return this._ebsVolumeIops;
  }

  // ebs_volume_size - computed: true, optional: true, required: false
  private _ebsVolumeSize?: number; 
  public get ebsVolumeSize() {
    return this.getNumberAttribute('ebs_volume_size');
  }
  public set ebsVolumeSize(value: number) {
    this._ebsVolumeSize = value;
  }
  public resetEbsVolumeSize() {
    this._ebsVolumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsVolumeSizeInput() {
    return this._ebsVolumeSize;
  }

  // ebs_volume_throughput - computed: true, optional: true, required: false
  private _ebsVolumeThroughput?: number; 
  public get ebsVolumeThroughput() {
    return this.getNumberAttribute('ebs_volume_throughput');
  }
  public set ebsVolumeThroughput(value: number) {
    this._ebsVolumeThroughput = value;
  }
  public resetEbsVolumeThroughput() {
    this._ebsVolumeThroughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsVolumeThroughputInput() {
    return this._ebsVolumeThroughput;
  }

  // ebs_volume_type - computed: true, optional: true, required: false
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

  // first_on_demand - computed: true, optional: true, required: false
  private _firstOnDemand?: number; 
  public get firstOnDemand() {
    return this.getNumberAttribute('first_on_demand');
  }
  public set firstOnDemand(value: number) {
    this._firstOnDemand = value;
  }
  public resetFirstOnDemand() {
    this._firstOnDemand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstOnDemandInput() {
    return this._firstOnDemand;
  }

  // instance_profile_arn - computed: true, optional: true, required: false
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

  // spot_bid_price_percent - computed: true, optional: true, required: false
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

export class DataDatabricksClusterPluginframeworkClusterInfoSpecAwsAttributesList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksClusterPluginframeworkClusterInfoSpecAwsAttributes[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksClusterPluginframeworkClusterInfoSpecAwsAttributesOutputReference {
    return new DataDatabricksClusterPluginframeworkClusterInfoSpecAwsAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksClusterPluginframeworkClusterInfoSpecAzureAttributesLogAnalyticsInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#log_analytics_primary_key DataDatabricksClusterPluginframework#log_analytics_primary_key}
  */
  readonly logAnalyticsPrimaryKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#log_analytics_workspace_id DataDatabricksClusterPluginframework#log_analytics_workspace_id}
  */
  readonly logAnalyticsWorkspaceId?: string;
}

export function dataDatabricksClusterPluginframeworkClusterInfoSpecAzureAttributesLogAnalyticsInfoToTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoSpecAzureAttributesLogAnalyticsInfo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_analytics_primary_key: cdktn.stringToTerraform(struct!.logAnalyticsPrimaryKey),
    log_analytics_workspace_id: cdktn.stringToTerraform(struct!.logAnalyticsWorkspaceId),
  }
}


export function dataDatabricksClusterPluginframeworkClusterInfoSpecAzureAttributesLogAnalyticsInfoToHclTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoSpecAzureAttributesLogAnalyticsInfo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_analytics_primary_key: {
      value: cdktn.stringToHclTerraform(struct!.logAnalyticsPrimaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_analytics_workspace_id: {
      value: cdktn.stringToHclTerraform(struct!.logAnalyticsWorkspaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksClusterPluginframeworkClusterInfoSpecAzureAttributesLogAnalyticsInfoOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksClusterPluginframeworkClusterInfoSpecAzureAttributesLogAnalyticsInfo | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logAnalyticsPrimaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAnalyticsPrimaryKey = this._logAnalyticsPrimaryKey;
    }
    if (this._logAnalyticsWorkspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAnalyticsWorkspaceId = this._logAnalyticsWorkspaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterPluginframeworkClusterInfoSpecAzureAttributesLogAnalyticsInfo | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logAnalyticsPrimaryKey = undefined;
      this._logAnalyticsWorkspaceId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logAnalyticsPrimaryKey = value.logAnalyticsPrimaryKey;
      this._logAnalyticsWorkspaceId = value.logAnalyticsWorkspaceId;
    }
  }

  // log_analytics_primary_key - computed: true, optional: true, required: false
  private _logAnalyticsPrimaryKey?: string; 
  public get logAnalyticsPrimaryKey() {
    return this.getStringAttribute('log_analytics_primary_key');
  }
  public set logAnalyticsPrimaryKey(value: string) {
    this._logAnalyticsPrimaryKey = value;
  }
  public resetLogAnalyticsPrimaryKey() {
    this._logAnalyticsPrimaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnalyticsPrimaryKeyInput() {
    return this._logAnalyticsPrimaryKey;
  }

  // log_analytics_workspace_id - computed: true, optional: true, required: false
  private _logAnalyticsWorkspaceId?: string; 
  public get logAnalyticsWorkspaceId() {
    return this.getStringAttribute('log_analytics_workspace_id');
  }
  public set logAnalyticsWorkspaceId(value: string) {
    this._logAnalyticsWorkspaceId = value;
  }
  public resetLogAnalyticsWorkspaceId() {
    this._logAnalyticsWorkspaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnalyticsWorkspaceIdInput() {
    return this._logAnalyticsWorkspaceId;
  }
}

export class DataDatabricksClusterPluginframeworkClusterInfoSpecAzureAttributesLogAnalyticsInfoList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksClusterPluginframeworkClusterInfoSpecAzureAttributesLogAnalyticsInfo[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksClusterPluginframeworkClusterInfoSpecAzureAttributesLogAnalyticsInfoOutputReference {
    return new DataDatabricksClusterPluginframeworkClusterInfoSpecAzureAttributesLogAnalyticsInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksClusterPluginframeworkClusterInfoSpecAzureAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#availability DataDatabricksClusterPluginframework#availability}
  */
  readonly availability?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#first_on_demand DataDatabricksClusterPluginframework#first_on_demand}
  */
  readonly firstOnDemand?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#log_analytics_info DataDatabricksClusterPluginframework#log_analytics_info}
  */
  readonly logAnalyticsInfo?: DataDatabricksClusterPluginframeworkClusterInfoSpecAzureAttributesLogAnalyticsInfo[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#spot_bid_max_price DataDatabricksClusterPluginframework#spot_bid_max_price}
  */
  readonly spotBidMaxPrice?: number;
}

export function dataDatabricksClusterPluginframeworkClusterInfoSpecAzureAttributesToTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoSpecAzureAttributes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability: cdktn.stringToTerraform(struct!.availability),
    first_on_demand: cdktn.numberToTerraform(struct!.firstOnDemand),
    log_analytics_info: cdktn.listMapper(dataDatabricksClusterPluginframeworkClusterInfoSpecAzureAttributesLogAnalyticsInfoToTerraform, false)(struct!.logAnalyticsInfo),
    spot_bid_max_price: cdktn.numberToTerraform(struct!.spotBidMaxPrice),
  }
}


export function dataDatabricksClusterPluginframeworkClusterInfoSpecAzureAttributesToHclTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoSpecAzureAttributes | cdktn.IResolvable): any {
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
    first_on_demand: {
      value: cdktn.numberToHclTerraform(struct!.firstOnDemand),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_analytics_info: {
      value: cdktn.listMapperHcl(dataDatabricksClusterPluginframeworkClusterInfoSpecAzureAttributesLogAnalyticsInfoToHclTerraform, false)(struct!.logAnalyticsInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterPluginframeworkClusterInfoSpecAzureAttributesLogAnalyticsInfoList",
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

export class DataDatabricksClusterPluginframeworkClusterInfoSpecAzureAttributesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksClusterPluginframeworkClusterInfoSpecAzureAttributes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availability !== undefined) {
      hasAnyValues = true;
      internalValueResult.availability = this._availability;
    }
    if (this._firstOnDemand !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstOnDemand = this._firstOnDemand;
    }
    if (this._logAnalyticsInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAnalyticsInfo = this._logAnalyticsInfo?.internalValue;
    }
    if (this._spotBidMaxPrice !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotBidMaxPrice = this._spotBidMaxPrice;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterPluginframeworkClusterInfoSpecAzureAttributes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availability = undefined;
      this._firstOnDemand = undefined;
      this._logAnalyticsInfo.internalValue = undefined;
      this._spotBidMaxPrice = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availability = value.availability;
      this._firstOnDemand = value.firstOnDemand;
      this._logAnalyticsInfo.internalValue = value.logAnalyticsInfo;
      this._spotBidMaxPrice = value.spotBidMaxPrice;
    }
  }

  // availability - computed: true, optional: true, required: false
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

  // first_on_demand - computed: true, optional: true, required: false
  private _firstOnDemand?: number; 
  public get firstOnDemand() {
    return this.getNumberAttribute('first_on_demand');
  }
  public set firstOnDemand(value: number) {
    this._firstOnDemand = value;
  }
  public resetFirstOnDemand() {
    this._firstOnDemand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstOnDemandInput() {
    return this._firstOnDemand;
  }

  // log_analytics_info - computed: true, optional: true, required: false
  private _logAnalyticsInfo = new DataDatabricksClusterPluginframeworkClusterInfoSpecAzureAttributesLogAnalyticsInfoList(this, "log_analytics_info", false);
  public get logAnalyticsInfo() {
    return this._logAnalyticsInfo;
  }
  public putLogAnalyticsInfo(value: DataDatabricksClusterPluginframeworkClusterInfoSpecAzureAttributesLogAnalyticsInfo[] | cdktn.IResolvable) {
    this._logAnalyticsInfo.internalValue = value;
  }
  public resetLogAnalyticsInfo() {
    this._logAnalyticsInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnalyticsInfoInput() {
    return this._logAnalyticsInfo.internalValue;
  }

  // spot_bid_max_price - computed: true, optional: true, required: false
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

export class DataDatabricksClusterPluginframeworkClusterInfoSpecAzureAttributesList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksClusterPluginframeworkClusterInfoSpecAzureAttributes[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksClusterPluginframeworkClusterInfoSpecAzureAttributesOutputReference {
    return new DataDatabricksClusterPluginframeworkClusterInfoSpecAzureAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksClusterPluginframeworkClusterInfoSpecClusterLogConfDbfs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#destination DataDatabricksClusterPluginframework#destination}
  */
  readonly destination: string;
}

export function dataDatabricksClusterPluginframeworkClusterInfoSpecClusterLogConfDbfsToTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoSpecClusterLogConfDbfs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktn.stringToTerraform(struct!.destination),
  }
}


export function dataDatabricksClusterPluginframeworkClusterInfoSpecClusterLogConfDbfsToHclTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoSpecClusterLogConfDbfs | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksClusterPluginframeworkClusterInfoSpecClusterLogConfDbfsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksClusterPluginframeworkClusterInfoSpecClusterLogConfDbfs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterPluginframeworkClusterInfoSpecClusterLogConfDbfs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination = value.destination;
    }
  }

  // destination - computed: true, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }
}

export class DataDatabricksClusterPluginframeworkClusterInfoSpecClusterLogConfDbfsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksClusterPluginframeworkClusterInfoSpecClusterLogConfDbfs[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksClusterPluginframeworkClusterInfoSpecClusterLogConfDbfsOutputReference {
    return new DataDatabricksClusterPluginframeworkClusterInfoSpecClusterLogConfDbfsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksClusterPluginframeworkClusterInfoSpecClusterLogConfS3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#canned_acl DataDatabricksClusterPluginframework#canned_acl}
  */
  readonly cannedAcl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#destination DataDatabricksClusterPluginframework#destination}
  */
  readonly destination: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#enable_encryption DataDatabricksClusterPluginframework#enable_encryption}
  */
  readonly enableEncryption?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#encryption_type DataDatabricksClusterPluginframework#encryption_type}
  */
  readonly encryptionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#endpoint DataDatabricksClusterPluginframework#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#kms_key DataDatabricksClusterPluginframework#kms_key}
  */
  readonly kmsKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#region DataDatabricksClusterPluginframework#region}
  */
  readonly region?: string;
}

export function dataDatabricksClusterPluginframeworkClusterInfoSpecClusterLogConfS3ToTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoSpecClusterLogConfS3 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    canned_acl: cdktn.stringToTerraform(struct!.cannedAcl),
    destination: cdktn.stringToTerraform(struct!.destination),
    enable_encryption: cdktn.booleanToTerraform(struct!.enableEncryption),
    encryption_type: cdktn.stringToTerraform(struct!.encryptionType),
    endpoint: cdktn.stringToTerraform(struct!.endpoint),
    kms_key: cdktn.stringToTerraform(struct!.kmsKey),
    region: cdktn.stringToTerraform(struct!.region),
  }
}


export function dataDatabricksClusterPluginframeworkClusterInfoSpecClusterLogConfS3ToHclTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoSpecClusterLogConfS3 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    canned_acl: {
      value: cdktn.stringToHclTerraform(struct!.cannedAcl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination: {
      value: cdktn.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_encryption: {
      value: cdktn.booleanToHclTerraform(struct!.enableEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    encryption_type: {
      value: cdktn.stringToHclTerraform(struct!.encryptionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktn.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key: {
      value: cdktn.stringToHclTerraform(struct!.kmsKey),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksClusterPluginframeworkClusterInfoSpecClusterLogConfS3OutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksClusterPluginframeworkClusterInfoSpecClusterLogConfS3 | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cannedAcl !== undefined) {
      hasAnyValues = true;
      internalValueResult.cannedAcl = this._cannedAcl;
    }
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._enableEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableEncryption = this._enableEncryption;
    }
    if (this._encryptionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionType = this._encryptionType;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._kmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKey = this._kmsKey;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterPluginframeworkClusterInfoSpecClusterLogConfS3 | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cannedAcl = undefined;
      this._destination = undefined;
      this._enableEncryption = undefined;
      this._encryptionType = undefined;
      this._endpoint = undefined;
      this._kmsKey = undefined;
      this._region = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cannedAcl = value.cannedAcl;
      this._destination = value.destination;
      this._enableEncryption = value.enableEncryption;
      this._encryptionType = value.encryptionType;
      this._endpoint = value.endpoint;
      this._kmsKey = value.kmsKey;
      this._region = value.region;
    }
  }

  // canned_acl - computed: true, optional: true, required: false
  private _cannedAcl?: string; 
  public get cannedAcl() {
    return this.getStringAttribute('canned_acl');
  }
  public set cannedAcl(value: string) {
    this._cannedAcl = value;
  }
  public resetCannedAcl() {
    this._cannedAcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cannedAclInput() {
    return this._cannedAcl;
  }

  // destination - computed: true, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // enable_encryption - computed: true, optional: true, required: false
  private _enableEncryption?: boolean | cdktn.IResolvable; 
  public get enableEncryption() {
    return this.getBooleanAttribute('enable_encryption');
  }
  public set enableEncryption(value: boolean | cdktn.IResolvable) {
    this._enableEncryption = value;
  }
  public resetEnableEncryption() {
    this._enableEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEncryptionInput() {
    return this._enableEncryption;
  }

  // encryption_type - computed: true, optional: true, required: false
  private _encryptionType?: string; 
  public get encryptionType() {
    return this.getStringAttribute('encryption_type');
  }
  public set encryptionType(value: string) {
    this._encryptionType = value;
  }
  public resetEncryptionType() {
    this._encryptionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionTypeInput() {
    return this._encryptionType;
  }

  // endpoint - computed: true, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // kms_key - computed: true, optional: true, required: false
  private _kmsKey?: string; 
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string) {
    this._kmsKey = value;
  }
  public resetKmsKey() {
    this._kmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey;
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
}

export class DataDatabricksClusterPluginframeworkClusterInfoSpecClusterLogConfS3List extends cdktn.ComplexList {
  public internalValue? : DataDatabricksClusterPluginframeworkClusterInfoSpecClusterLogConfS3[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksClusterPluginframeworkClusterInfoSpecClusterLogConfS3OutputReference {
    return new DataDatabricksClusterPluginframeworkClusterInfoSpecClusterLogConfS3OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksClusterPluginframeworkClusterInfoSpecClusterLogConfVolumes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#destination DataDatabricksClusterPluginframework#destination}
  */
  readonly destination: string;
}

export function dataDatabricksClusterPluginframeworkClusterInfoSpecClusterLogConfVolumesToTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoSpecClusterLogConfVolumes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktn.stringToTerraform(struct!.destination),
  }
}


export function dataDatabricksClusterPluginframeworkClusterInfoSpecClusterLogConfVolumesToHclTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoSpecClusterLogConfVolumes | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksClusterPluginframeworkClusterInfoSpecClusterLogConfVolumesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksClusterPluginframeworkClusterInfoSpecClusterLogConfVolumes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterPluginframeworkClusterInfoSpecClusterLogConfVolumes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination = value.destination;
    }
  }

  // destination - computed: true, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }
}

export class DataDatabricksClusterPluginframeworkClusterInfoSpecClusterLogConfVolumesList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksClusterPluginframeworkClusterInfoSpecClusterLogConfVolumes[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksClusterPluginframeworkClusterInfoSpecClusterLogConfVolumesOutputReference {
    return new DataDatabricksClusterPluginframeworkClusterInfoSpecClusterLogConfVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksClusterPluginframeworkClusterInfoSpecClusterLogConf {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#dbfs DataDatabricksClusterPluginframework#dbfs}
  */
  readonly dbfs?: DataDatabricksClusterPluginframeworkClusterInfoSpecClusterLogConfDbfs[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#s3 DataDatabricksClusterPluginframework#s3}
  */
  readonly s3?: DataDatabricksClusterPluginframeworkClusterInfoSpecClusterLogConfS3[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#volumes DataDatabricksClusterPluginframework#volumes}
  */
  readonly volumes?: DataDatabricksClusterPluginframeworkClusterInfoSpecClusterLogConfVolumes[] | cdktn.IResolvable;
}

export function dataDatabricksClusterPluginframeworkClusterInfoSpecClusterLogConfToTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoSpecClusterLogConf | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dbfs: cdktn.listMapper(dataDatabricksClusterPluginframeworkClusterInfoSpecClusterLogConfDbfsToTerraform, false)(struct!.dbfs),
    s3: cdktn.listMapper(dataDatabricksClusterPluginframeworkClusterInfoSpecClusterLogConfS3ToTerraform, false)(struct!.s3),
    volumes: cdktn.listMapper(dataDatabricksClusterPluginframeworkClusterInfoSpecClusterLogConfVolumesToTerraform, false)(struct!.volumes),
  }
}


export function dataDatabricksClusterPluginframeworkClusterInfoSpecClusterLogConfToHclTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoSpecClusterLogConf | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dbfs: {
      value: cdktn.listMapperHcl(dataDatabricksClusterPluginframeworkClusterInfoSpecClusterLogConfDbfsToHclTerraform, false)(struct!.dbfs),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterPluginframeworkClusterInfoSpecClusterLogConfDbfsList",
    },
    s3: {
      value: cdktn.listMapperHcl(dataDatabricksClusterPluginframeworkClusterInfoSpecClusterLogConfS3ToHclTerraform, false)(struct!.s3),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterPluginframeworkClusterInfoSpecClusterLogConfS3List",
    },
    volumes: {
      value: cdktn.listMapperHcl(dataDatabricksClusterPluginframeworkClusterInfoSpecClusterLogConfVolumesToHclTerraform, false)(struct!.volumes),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterPluginframeworkClusterInfoSpecClusterLogConfVolumesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksClusterPluginframeworkClusterInfoSpecClusterLogConfOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksClusterPluginframeworkClusterInfoSpecClusterLogConf | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dbfs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbfs = this._dbfs?.internalValue;
    }
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    if (this._volumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterPluginframeworkClusterInfoSpecClusterLogConf | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dbfs.internalValue = undefined;
      this._s3.internalValue = undefined;
      this._volumes.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dbfs.internalValue = value.dbfs;
      this._s3.internalValue = value.s3;
      this._volumes.internalValue = value.volumes;
    }
  }

  // dbfs - computed: true, optional: true, required: false
  private _dbfs = new DataDatabricksClusterPluginframeworkClusterInfoSpecClusterLogConfDbfsList(this, "dbfs", false);
  public get dbfs() {
    return this._dbfs;
  }
  public putDbfs(value: DataDatabricksClusterPluginframeworkClusterInfoSpecClusterLogConfDbfs[] | cdktn.IResolvable) {
    this._dbfs.internalValue = value;
  }
  public resetDbfs() {
    this._dbfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbfsInput() {
    return this._dbfs.internalValue;
  }

  // s3 - computed: true, optional: true, required: false
  private _s3 = new DataDatabricksClusterPluginframeworkClusterInfoSpecClusterLogConfS3List(this, "s3", false);
  public get s3() {
    return this._s3;
  }
  public putS3(value: DataDatabricksClusterPluginframeworkClusterInfoSpecClusterLogConfS3[] | cdktn.IResolvable) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }

  // volumes - computed: true, optional: true, required: false
  private _volumes = new DataDatabricksClusterPluginframeworkClusterInfoSpecClusterLogConfVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: DataDatabricksClusterPluginframeworkClusterInfoSpecClusterLogConfVolumes[] | cdktn.IResolvable) {
    this._volumes.internalValue = value;
  }
  public resetVolumes() {
    this._volumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes.internalValue;
  }
}

export class DataDatabricksClusterPluginframeworkClusterInfoSpecClusterLogConfList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksClusterPluginframeworkClusterInfoSpecClusterLogConf[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksClusterPluginframeworkClusterInfoSpecClusterLogConfOutputReference {
    return new DataDatabricksClusterPluginframeworkClusterInfoSpecClusterLogConfOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksClusterPluginframeworkClusterInfoSpecDockerImageBasicAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#password DataDatabricksClusterPluginframework#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#username DataDatabricksClusterPluginframework#username}
  */
  readonly username?: string;
}

export function dataDatabricksClusterPluginframeworkClusterInfoSpecDockerImageBasicAuthToTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoSpecDockerImageBasicAuth | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktn.stringToTerraform(struct!.password),
    username: cdktn.stringToTerraform(struct!.username),
  }
}


export function dataDatabricksClusterPluginframeworkClusterInfoSpecDockerImageBasicAuthToHclTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoSpecDockerImageBasicAuth | cdktn.IResolvable): any {
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

export class DataDatabricksClusterPluginframeworkClusterInfoSpecDockerImageBasicAuthOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksClusterPluginframeworkClusterInfoSpecDockerImageBasicAuth | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: DataDatabricksClusterPluginframeworkClusterInfoSpecDockerImageBasicAuth | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

export class DataDatabricksClusterPluginframeworkClusterInfoSpecDockerImageBasicAuthList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksClusterPluginframeworkClusterInfoSpecDockerImageBasicAuth[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksClusterPluginframeworkClusterInfoSpecDockerImageBasicAuthOutputReference {
    return new DataDatabricksClusterPluginframeworkClusterInfoSpecDockerImageBasicAuthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksClusterPluginframeworkClusterInfoSpecDockerImage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#basic_auth DataDatabricksClusterPluginframework#basic_auth}
  */
  readonly basicAuth?: DataDatabricksClusterPluginframeworkClusterInfoSpecDockerImageBasicAuth[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#url DataDatabricksClusterPluginframework#url}
  */
  readonly url?: string;
}

export function dataDatabricksClusterPluginframeworkClusterInfoSpecDockerImageToTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoSpecDockerImage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    basic_auth: cdktn.listMapper(dataDatabricksClusterPluginframeworkClusterInfoSpecDockerImageBasicAuthToTerraform, false)(struct!.basicAuth),
    url: cdktn.stringToTerraform(struct!.url),
  }
}


export function dataDatabricksClusterPluginframeworkClusterInfoSpecDockerImageToHclTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoSpecDockerImage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    basic_auth: {
      value: cdktn.listMapperHcl(dataDatabricksClusterPluginframeworkClusterInfoSpecDockerImageBasicAuthToHclTerraform, false)(struct!.basicAuth),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterPluginframeworkClusterInfoSpecDockerImageBasicAuthList",
    },
    url: {
      value: cdktn.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksClusterPluginframeworkClusterInfoSpecDockerImageOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksClusterPluginframeworkClusterInfoSpecDockerImage | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basicAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuth = this._basicAuth?.internalValue;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterPluginframeworkClusterInfoSpecDockerImage | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._basicAuth.internalValue = undefined;
      this._url = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._basicAuth.internalValue = value.basicAuth;
      this._url = value.url;
    }
  }

  // basic_auth - computed: true, optional: true, required: false
  private _basicAuth = new DataDatabricksClusterPluginframeworkClusterInfoSpecDockerImageBasicAuthList(this, "basic_auth", false);
  public get basicAuth() {
    return this._basicAuth;
  }
  public putBasicAuth(value: DataDatabricksClusterPluginframeworkClusterInfoSpecDockerImageBasicAuth[] | cdktn.IResolvable) {
    this._basicAuth.internalValue = value;
  }
  public resetBasicAuth() {
    this._basicAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthInput() {
    return this._basicAuth.internalValue;
  }

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class DataDatabricksClusterPluginframeworkClusterInfoSpecDockerImageList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksClusterPluginframeworkClusterInfoSpecDockerImage[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksClusterPluginframeworkClusterInfoSpecDockerImageOutputReference {
    return new DataDatabricksClusterPluginframeworkClusterInfoSpecDockerImageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksClusterPluginframeworkClusterInfoSpecDriverNodeTypeFlexibility {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#alternate_node_type_ids DataDatabricksClusterPluginframework#alternate_node_type_ids}
  */
  readonly alternateNodeTypeIds?: string[];
}

export function dataDatabricksClusterPluginframeworkClusterInfoSpecDriverNodeTypeFlexibilityToTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoSpecDriverNodeTypeFlexibility | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alternate_node_type_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.alternateNodeTypeIds),
  }
}


export function dataDatabricksClusterPluginframeworkClusterInfoSpecDriverNodeTypeFlexibilityToHclTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoSpecDriverNodeTypeFlexibility | cdktn.IResolvable): any {
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

export class DataDatabricksClusterPluginframeworkClusterInfoSpecDriverNodeTypeFlexibilityOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksClusterPluginframeworkClusterInfoSpecDriverNodeTypeFlexibility | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alternateNodeTypeIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.alternateNodeTypeIds = this._alternateNodeTypeIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterPluginframeworkClusterInfoSpecDriverNodeTypeFlexibility | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alternateNodeTypeIds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alternateNodeTypeIds = value.alternateNodeTypeIds;
    }
  }

  // alternate_node_type_ids - computed: true, optional: true, required: false
  private _alternateNodeTypeIds?: string[]; 
  public get alternateNodeTypeIds() {
    return this.getListAttribute('alternate_node_type_ids');
  }
  public set alternateNodeTypeIds(value: string[]) {
    this._alternateNodeTypeIds = value;
  }
  public resetAlternateNodeTypeIds() {
    this._alternateNodeTypeIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alternateNodeTypeIdsInput() {
    return this._alternateNodeTypeIds;
  }
}

export class DataDatabricksClusterPluginframeworkClusterInfoSpecDriverNodeTypeFlexibilityList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksClusterPluginframeworkClusterInfoSpecDriverNodeTypeFlexibility[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksClusterPluginframeworkClusterInfoSpecDriverNodeTypeFlexibilityOutputReference {
    return new DataDatabricksClusterPluginframeworkClusterInfoSpecDriverNodeTypeFlexibilityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksClusterPluginframeworkClusterInfoSpecGcpAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#availability DataDatabricksClusterPluginframework#availability}
  */
  readonly availability?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#boot_disk_size DataDatabricksClusterPluginframework#boot_disk_size}
  */
  readonly bootDiskSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#first_on_demand DataDatabricksClusterPluginframework#first_on_demand}
  */
  readonly firstOnDemand?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#google_service_account DataDatabricksClusterPluginframework#google_service_account}
  */
  readonly googleServiceAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#local_ssd_count DataDatabricksClusterPluginframework#local_ssd_count}
  */
  readonly localSsdCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#use_preemptible_executors DataDatabricksClusterPluginframework#use_preemptible_executors}
  */
  readonly usePreemptibleExecutors?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#zone_id DataDatabricksClusterPluginframework#zone_id}
  */
  readonly zoneId?: string;
}

export function dataDatabricksClusterPluginframeworkClusterInfoSpecGcpAttributesToTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoSpecGcpAttributes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability: cdktn.stringToTerraform(struct!.availability),
    boot_disk_size: cdktn.numberToTerraform(struct!.bootDiskSize),
    first_on_demand: cdktn.numberToTerraform(struct!.firstOnDemand),
    google_service_account: cdktn.stringToTerraform(struct!.googleServiceAccount),
    local_ssd_count: cdktn.numberToTerraform(struct!.localSsdCount),
    use_preemptible_executors: cdktn.booleanToTerraform(struct!.usePreemptibleExecutors),
    zone_id: cdktn.stringToTerraform(struct!.zoneId),
  }
}


export function dataDatabricksClusterPluginframeworkClusterInfoSpecGcpAttributesToHclTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoSpecGcpAttributes | cdktn.IResolvable): any {
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
    boot_disk_size: {
      value: cdktn.numberToHclTerraform(struct!.bootDiskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    first_on_demand: {
      value: cdktn.numberToHclTerraform(struct!.firstOnDemand),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    google_service_account: {
      value: cdktn.stringToHclTerraform(struct!.googleServiceAccount),
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
    use_preemptible_executors: {
      value: cdktn.booleanToHclTerraform(struct!.usePreemptibleExecutors),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class DataDatabricksClusterPluginframeworkClusterInfoSpecGcpAttributesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksClusterPluginframeworkClusterInfoSpecGcpAttributes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availability !== undefined) {
      hasAnyValues = true;
      internalValueResult.availability = this._availability;
    }
    if (this._bootDiskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDiskSize = this._bootDiskSize;
    }
    if (this._firstOnDemand !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstOnDemand = this._firstOnDemand;
    }
    if (this._googleServiceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleServiceAccount = this._googleServiceAccount;
    }
    if (this._localSsdCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSsdCount = this._localSsdCount;
    }
    if (this._usePreemptibleExecutors !== undefined) {
      hasAnyValues = true;
      internalValueResult.usePreemptibleExecutors = this._usePreemptibleExecutors;
    }
    if (this._zoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneId = this._zoneId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterPluginframeworkClusterInfoSpecGcpAttributes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availability = undefined;
      this._bootDiskSize = undefined;
      this._firstOnDemand = undefined;
      this._googleServiceAccount = undefined;
      this._localSsdCount = undefined;
      this._usePreemptibleExecutors = undefined;
      this._zoneId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availability = value.availability;
      this._bootDiskSize = value.bootDiskSize;
      this._firstOnDemand = value.firstOnDemand;
      this._googleServiceAccount = value.googleServiceAccount;
      this._localSsdCount = value.localSsdCount;
      this._usePreemptibleExecutors = value.usePreemptibleExecutors;
      this._zoneId = value.zoneId;
    }
  }

  // availability - computed: true, optional: true, required: false
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

  // boot_disk_size - computed: true, optional: true, required: false
  private _bootDiskSize?: number; 
  public get bootDiskSize() {
    return this.getNumberAttribute('boot_disk_size');
  }
  public set bootDiskSize(value: number) {
    this._bootDiskSize = value;
  }
  public resetBootDiskSize() {
    this._bootDiskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskSizeInput() {
    return this._bootDiskSize;
  }

  // first_on_demand - computed: true, optional: true, required: false
  private _firstOnDemand?: number; 
  public get firstOnDemand() {
    return this.getNumberAttribute('first_on_demand');
  }
  public set firstOnDemand(value: number) {
    this._firstOnDemand = value;
  }
  public resetFirstOnDemand() {
    this._firstOnDemand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstOnDemandInput() {
    return this._firstOnDemand;
  }

  // google_service_account - computed: true, optional: true, required: false
  private _googleServiceAccount?: string; 
  public get googleServiceAccount() {
    return this.getStringAttribute('google_service_account');
  }
  public set googleServiceAccount(value: string) {
    this._googleServiceAccount = value;
  }
  public resetGoogleServiceAccount() {
    this._googleServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleServiceAccountInput() {
    return this._googleServiceAccount;
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

  // use_preemptible_executors - computed: true, optional: true, required: false
  private _usePreemptibleExecutors?: boolean | cdktn.IResolvable; 
  public get usePreemptibleExecutors() {
    return this.getBooleanAttribute('use_preemptible_executors');
  }
  public set usePreemptibleExecutors(value: boolean | cdktn.IResolvable) {
    this._usePreemptibleExecutors = value;
  }
  public resetUsePreemptibleExecutors() {
    this._usePreemptibleExecutors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePreemptibleExecutorsInput() {
    return this._usePreemptibleExecutors;
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

export class DataDatabricksClusterPluginframeworkClusterInfoSpecGcpAttributesList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksClusterPluginframeworkClusterInfoSpecGcpAttributes[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksClusterPluginframeworkClusterInfoSpecGcpAttributesOutputReference {
    return new DataDatabricksClusterPluginframeworkClusterInfoSpecGcpAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsAbfss {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#destination DataDatabricksClusterPluginframework#destination}
  */
  readonly destination: string;
}

export function dataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsAbfssToTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsAbfss | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktn.stringToTerraform(struct!.destination),
  }
}


export function dataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsAbfssToHclTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsAbfss | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsAbfssOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsAbfss | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsAbfss | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination = value.destination;
    }
  }

  // destination - computed: true, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }
}

export class DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsAbfssList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsAbfss[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsAbfssOutputReference {
    return new DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsAbfssOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsDbfs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#destination DataDatabricksClusterPluginframework#destination}
  */
  readonly destination: string;
}

export function dataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsDbfsToTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsDbfs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktn.stringToTerraform(struct!.destination),
  }
}


export function dataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsDbfsToHclTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsDbfs | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsDbfsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsDbfs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsDbfs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination = value.destination;
    }
  }

  // destination - computed: true, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }
}

export class DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsDbfsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsDbfs[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsDbfsOutputReference {
    return new DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsDbfsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsFile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#destination DataDatabricksClusterPluginframework#destination}
  */
  readonly destination: string;
}

export function dataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsFileToTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsFile | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktn.stringToTerraform(struct!.destination),
  }
}


export function dataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsFileToHclTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsFile | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsFileOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsFile | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsFile | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination = value.destination;
    }
  }

  // destination - computed: true, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }
}

export class DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsFileList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsFile[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsFileOutputReference {
    return new DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsFileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsGcs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#destination DataDatabricksClusterPluginframework#destination}
  */
  readonly destination: string;
}

export function dataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsGcsToTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsGcs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktn.stringToTerraform(struct!.destination),
  }
}


export function dataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsGcsToHclTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsGcs | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsGcsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsGcs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsGcs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination = value.destination;
    }
  }

  // destination - computed: true, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }
}

export class DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsGcsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsGcs[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsGcsOutputReference {
    return new DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsGcsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsS3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#canned_acl DataDatabricksClusterPluginframework#canned_acl}
  */
  readonly cannedAcl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#destination DataDatabricksClusterPluginframework#destination}
  */
  readonly destination: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#enable_encryption DataDatabricksClusterPluginframework#enable_encryption}
  */
  readonly enableEncryption?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#encryption_type DataDatabricksClusterPluginframework#encryption_type}
  */
  readonly encryptionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#endpoint DataDatabricksClusterPluginframework#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#kms_key DataDatabricksClusterPluginframework#kms_key}
  */
  readonly kmsKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#region DataDatabricksClusterPluginframework#region}
  */
  readonly region?: string;
}

export function dataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsS3ToTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsS3 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    canned_acl: cdktn.stringToTerraform(struct!.cannedAcl),
    destination: cdktn.stringToTerraform(struct!.destination),
    enable_encryption: cdktn.booleanToTerraform(struct!.enableEncryption),
    encryption_type: cdktn.stringToTerraform(struct!.encryptionType),
    endpoint: cdktn.stringToTerraform(struct!.endpoint),
    kms_key: cdktn.stringToTerraform(struct!.kmsKey),
    region: cdktn.stringToTerraform(struct!.region),
  }
}


export function dataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsS3ToHclTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsS3 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    canned_acl: {
      value: cdktn.stringToHclTerraform(struct!.cannedAcl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination: {
      value: cdktn.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_encryption: {
      value: cdktn.booleanToHclTerraform(struct!.enableEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    encryption_type: {
      value: cdktn.stringToHclTerraform(struct!.encryptionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktn.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key: {
      value: cdktn.stringToHclTerraform(struct!.kmsKey),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsS3OutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsS3 | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cannedAcl !== undefined) {
      hasAnyValues = true;
      internalValueResult.cannedAcl = this._cannedAcl;
    }
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._enableEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableEncryption = this._enableEncryption;
    }
    if (this._encryptionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionType = this._encryptionType;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._kmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKey = this._kmsKey;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsS3 | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cannedAcl = undefined;
      this._destination = undefined;
      this._enableEncryption = undefined;
      this._encryptionType = undefined;
      this._endpoint = undefined;
      this._kmsKey = undefined;
      this._region = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cannedAcl = value.cannedAcl;
      this._destination = value.destination;
      this._enableEncryption = value.enableEncryption;
      this._encryptionType = value.encryptionType;
      this._endpoint = value.endpoint;
      this._kmsKey = value.kmsKey;
      this._region = value.region;
    }
  }

  // canned_acl - computed: true, optional: true, required: false
  private _cannedAcl?: string; 
  public get cannedAcl() {
    return this.getStringAttribute('canned_acl');
  }
  public set cannedAcl(value: string) {
    this._cannedAcl = value;
  }
  public resetCannedAcl() {
    this._cannedAcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cannedAclInput() {
    return this._cannedAcl;
  }

  // destination - computed: true, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // enable_encryption - computed: true, optional: true, required: false
  private _enableEncryption?: boolean | cdktn.IResolvable; 
  public get enableEncryption() {
    return this.getBooleanAttribute('enable_encryption');
  }
  public set enableEncryption(value: boolean | cdktn.IResolvable) {
    this._enableEncryption = value;
  }
  public resetEnableEncryption() {
    this._enableEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEncryptionInput() {
    return this._enableEncryption;
  }

  // encryption_type - computed: true, optional: true, required: false
  private _encryptionType?: string; 
  public get encryptionType() {
    return this.getStringAttribute('encryption_type');
  }
  public set encryptionType(value: string) {
    this._encryptionType = value;
  }
  public resetEncryptionType() {
    this._encryptionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionTypeInput() {
    return this._encryptionType;
  }

  // endpoint - computed: true, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // kms_key - computed: true, optional: true, required: false
  private _kmsKey?: string; 
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string) {
    this._kmsKey = value;
  }
  public resetKmsKey() {
    this._kmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey;
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
}

export class DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsS3List extends cdktn.ComplexList {
  public internalValue? : DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsS3[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsS3OutputReference {
    return new DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsS3OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsVolumes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#destination DataDatabricksClusterPluginframework#destination}
  */
  readonly destination: string;
}

export function dataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsVolumesToTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsVolumes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktn.stringToTerraform(struct!.destination),
  }
}


export function dataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsVolumesToHclTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsVolumes | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsVolumesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsVolumes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsVolumes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination = value.destination;
    }
  }

  // destination - computed: true, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }
}

export class DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsVolumesList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsVolumes[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsVolumesOutputReference {
    return new DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsWorkspace {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#destination DataDatabricksClusterPluginframework#destination}
  */
  readonly destination: string;
}

export function dataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsWorkspaceToTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsWorkspace | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktn.stringToTerraform(struct!.destination),
  }
}


export function dataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsWorkspaceToHclTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsWorkspace | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsWorkspaceOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsWorkspace | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsWorkspace | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination = value.destination;
    }
  }

  // destination - computed: true, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }
}

export class DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsWorkspaceList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsWorkspace[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsWorkspaceOutputReference {
    return new DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsWorkspaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksClusterPluginframeworkClusterInfoSpecInitScripts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#abfss DataDatabricksClusterPluginframework#abfss}
  */
  readonly abfss?: DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsAbfss[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#dbfs DataDatabricksClusterPluginframework#dbfs}
  */
  readonly dbfs?: DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsDbfs[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#file DataDatabricksClusterPluginframework#file}
  */
  readonly file?: DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsFile[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#gcs DataDatabricksClusterPluginframework#gcs}
  */
  readonly gcs?: DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsGcs[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#s3 DataDatabricksClusterPluginframework#s3}
  */
  readonly s3?: DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsS3[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#volumes DataDatabricksClusterPluginframework#volumes}
  */
  readonly volumes?: DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsVolumes[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#workspace DataDatabricksClusterPluginframework#workspace}
  */
  readonly workspace?: DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsWorkspace[] | cdktn.IResolvable;
}

export function dataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsToTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoSpecInitScripts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abfss: cdktn.listMapper(dataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsAbfssToTerraform, false)(struct!.abfss),
    dbfs: cdktn.listMapper(dataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsDbfsToTerraform, false)(struct!.dbfs),
    file: cdktn.listMapper(dataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsFileToTerraform, false)(struct!.file),
    gcs: cdktn.listMapper(dataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsGcsToTerraform, false)(struct!.gcs),
    s3: cdktn.listMapper(dataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsS3ToTerraform, false)(struct!.s3),
    volumes: cdktn.listMapper(dataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsVolumesToTerraform, false)(struct!.volumes),
    workspace: cdktn.listMapper(dataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsWorkspaceToTerraform, false)(struct!.workspace),
  }
}


export function dataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsToHclTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoSpecInitScripts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    abfss: {
      value: cdktn.listMapperHcl(dataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsAbfssToHclTerraform, false)(struct!.abfss),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsAbfssList",
    },
    dbfs: {
      value: cdktn.listMapperHcl(dataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsDbfsToHclTerraform, false)(struct!.dbfs),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsDbfsList",
    },
    file: {
      value: cdktn.listMapperHcl(dataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsFileToHclTerraform, false)(struct!.file),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsFileList",
    },
    gcs: {
      value: cdktn.listMapperHcl(dataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsGcsToHclTerraform, false)(struct!.gcs),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsGcsList",
    },
    s3: {
      value: cdktn.listMapperHcl(dataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsS3ToHclTerraform, false)(struct!.s3),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsS3List",
    },
    volumes: {
      value: cdktn.listMapperHcl(dataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsVolumesToHclTerraform, false)(struct!.volumes),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsVolumesList",
    },
    workspace: {
      value: cdktn.listMapperHcl(dataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsWorkspaceToHclTerraform, false)(struct!.workspace),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsWorkspaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksClusterPluginframeworkClusterInfoSpecInitScripts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._abfss?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.abfss = this._abfss?.internalValue;
    }
    if (this._dbfs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbfs = this._dbfs?.internalValue;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    if (this._gcs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcs = this._gcs?.internalValue;
    }
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    if (this._volumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes?.internalValue;
    }
    if (this._workspace?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspace = this._workspace?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterPluginframeworkClusterInfoSpecInitScripts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._abfss.internalValue = undefined;
      this._dbfs.internalValue = undefined;
      this._file.internalValue = undefined;
      this._gcs.internalValue = undefined;
      this._s3.internalValue = undefined;
      this._volumes.internalValue = undefined;
      this._workspace.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._abfss.internalValue = value.abfss;
      this._dbfs.internalValue = value.dbfs;
      this._file.internalValue = value.file;
      this._gcs.internalValue = value.gcs;
      this._s3.internalValue = value.s3;
      this._volumes.internalValue = value.volumes;
      this._workspace.internalValue = value.workspace;
    }
  }

  // abfss - computed: true, optional: true, required: false
  private _abfss = new DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsAbfssList(this, "abfss", false);
  public get abfss() {
    return this._abfss;
  }
  public putAbfss(value: DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsAbfss[] | cdktn.IResolvable) {
    this._abfss.internalValue = value;
  }
  public resetAbfss() {
    this._abfss.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abfssInput() {
    return this._abfss.internalValue;
  }

  // dbfs - computed: true, optional: true, required: false
  private _dbfs = new DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsDbfsList(this, "dbfs", false);
  public get dbfs() {
    return this._dbfs;
  }
  public putDbfs(value: DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsDbfs[] | cdktn.IResolvable) {
    this._dbfs.internalValue = value;
  }
  public resetDbfs() {
    this._dbfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbfsInput() {
    return this._dbfs.internalValue;
  }

  // file - computed: true, optional: true, required: false
  private _file = new DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsFileList(this, "file", false);
  public get file() {
    return this._file;
  }
  public putFile(value: DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsFile[] | cdktn.IResolvable) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // gcs - computed: true, optional: true, required: false
  private _gcs = new DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsGcsList(this, "gcs", false);
  public get gcs() {
    return this._gcs;
  }
  public putGcs(value: DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsGcs[] | cdktn.IResolvable) {
    this._gcs.internalValue = value;
  }
  public resetGcs() {
    this._gcs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsInput() {
    return this._gcs.internalValue;
  }

  // s3 - computed: true, optional: true, required: false
  private _s3 = new DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsS3List(this, "s3", false);
  public get s3() {
    return this._s3;
  }
  public putS3(value: DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsS3[] | cdktn.IResolvable) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }

  // volumes - computed: true, optional: true, required: false
  private _volumes = new DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsVolumes[] | cdktn.IResolvable) {
    this._volumes.internalValue = value;
  }
  public resetVolumes() {
    this._volumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes.internalValue;
  }

  // workspace - computed: true, optional: true, required: false
  private _workspace = new DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsWorkspaceList(this, "workspace", false);
  public get workspace() {
    return this._workspace;
  }
  public putWorkspace(value: DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsWorkspace[] | cdktn.IResolvable) {
    this._workspace.internalValue = value;
  }
  public resetWorkspace() {
    this._workspace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceInput() {
    return this._workspace.internalValue;
  }
}

export class DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksClusterPluginframeworkClusterInfoSpecInitScripts[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsOutputReference {
    return new DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksClusterPluginframeworkClusterInfoSpecWorkerNodeTypeFlexibility {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#alternate_node_type_ids DataDatabricksClusterPluginframework#alternate_node_type_ids}
  */
  readonly alternateNodeTypeIds?: string[];
}

export function dataDatabricksClusterPluginframeworkClusterInfoSpecWorkerNodeTypeFlexibilityToTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoSpecWorkerNodeTypeFlexibility | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alternate_node_type_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.alternateNodeTypeIds),
  }
}


export function dataDatabricksClusterPluginframeworkClusterInfoSpecWorkerNodeTypeFlexibilityToHclTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoSpecWorkerNodeTypeFlexibility | cdktn.IResolvable): any {
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

export class DataDatabricksClusterPluginframeworkClusterInfoSpecWorkerNodeTypeFlexibilityOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksClusterPluginframeworkClusterInfoSpecWorkerNodeTypeFlexibility | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alternateNodeTypeIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.alternateNodeTypeIds = this._alternateNodeTypeIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterPluginframeworkClusterInfoSpecWorkerNodeTypeFlexibility | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alternateNodeTypeIds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alternateNodeTypeIds = value.alternateNodeTypeIds;
    }
  }

  // alternate_node_type_ids - computed: true, optional: true, required: false
  private _alternateNodeTypeIds?: string[]; 
  public get alternateNodeTypeIds() {
    return this.getListAttribute('alternate_node_type_ids');
  }
  public set alternateNodeTypeIds(value: string[]) {
    this._alternateNodeTypeIds = value;
  }
  public resetAlternateNodeTypeIds() {
    this._alternateNodeTypeIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alternateNodeTypeIdsInput() {
    return this._alternateNodeTypeIds;
  }
}

export class DataDatabricksClusterPluginframeworkClusterInfoSpecWorkerNodeTypeFlexibilityList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksClusterPluginframeworkClusterInfoSpecWorkerNodeTypeFlexibility[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksClusterPluginframeworkClusterInfoSpecWorkerNodeTypeFlexibilityOutputReference {
    return new DataDatabricksClusterPluginframeworkClusterInfoSpecWorkerNodeTypeFlexibilityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksClusterPluginframeworkClusterInfoSpecWorkloadTypeClients {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#jobs DataDatabricksClusterPluginframework#jobs}
  */
  readonly jobs?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#notebooks DataDatabricksClusterPluginframework#notebooks}
  */
  readonly notebooks?: boolean | cdktn.IResolvable;
}

export function dataDatabricksClusterPluginframeworkClusterInfoSpecWorkloadTypeClientsToTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoSpecWorkloadTypeClients): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jobs: cdktn.booleanToTerraform(struct!.jobs),
    notebooks: cdktn.booleanToTerraform(struct!.notebooks),
  }
}


export function dataDatabricksClusterPluginframeworkClusterInfoSpecWorkloadTypeClientsToHclTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoSpecWorkloadTypeClients): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    jobs: {
      value: cdktn.booleanToHclTerraform(struct!.jobs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    notebooks: {
      value: cdktn.booleanToHclTerraform(struct!.notebooks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksClusterPluginframeworkClusterInfoSpecWorkloadTypeClientsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksClusterPluginframeworkClusterInfoSpecWorkloadTypeClients | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jobs !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobs = this._jobs;
    }
    if (this._notebooks !== undefined) {
      hasAnyValues = true;
      internalValueResult.notebooks = this._notebooks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterPluginframeworkClusterInfoSpecWorkloadTypeClients | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jobs = undefined;
      this._notebooks = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jobs = value.jobs;
      this._notebooks = value.notebooks;
    }
  }

  // jobs - computed: true, optional: true, required: false
  private _jobs?: boolean | cdktn.IResolvable; 
  public get jobs() {
    return this.getBooleanAttribute('jobs');
  }
  public set jobs(value: boolean | cdktn.IResolvable) {
    this._jobs = value;
  }
  public resetJobs() {
    this._jobs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobsInput() {
    return this._jobs;
  }

  // notebooks - computed: true, optional: true, required: false
  private _notebooks?: boolean | cdktn.IResolvable; 
  public get notebooks() {
    return this.getBooleanAttribute('notebooks');
  }
  public set notebooks(value: boolean | cdktn.IResolvable) {
    this._notebooks = value;
  }
  public resetNotebooks() {
    this._notebooks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notebooksInput() {
    return this._notebooks;
  }
}

export class DataDatabricksClusterPluginframeworkClusterInfoSpecWorkloadTypeClientsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksClusterPluginframeworkClusterInfoSpecWorkloadTypeClients[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksClusterPluginframeworkClusterInfoSpecWorkloadTypeClientsOutputReference {
    return new DataDatabricksClusterPluginframeworkClusterInfoSpecWorkloadTypeClientsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksClusterPluginframeworkClusterInfoSpecWorkloadType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#clients DataDatabricksClusterPluginframework#clients}
  */
  readonly clients: DataDatabricksClusterPluginframeworkClusterInfoSpecWorkloadTypeClients[] | cdktn.IResolvable;
}

export function dataDatabricksClusterPluginframeworkClusterInfoSpecWorkloadTypeToTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoSpecWorkloadType | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clients: cdktn.listMapper(dataDatabricksClusterPluginframeworkClusterInfoSpecWorkloadTypeClientsToTerraform, false)(struct!.clients),
  }
}


export function dataDatabricksClusterPluginframeworkClusterInfoSpecWorkloadTypeToHclTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoSpecWorkloadType | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clients: {
      value: cdktn.listMapperHcl(dataDatabricksClusterPluginframeworkClusterInfoSpecWorkloadTypeClientsToHclTerraform, false)(struct!.clients),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterPluginframeworkClusterInfoSpecWorkloadTypeClientsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksClusterPluginframeworkClusterInfoSpecWorkloadTypeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksClusterPluginframeworkClusterInfoSpecWorkloadType | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clients?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clients = this._clients?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterPluginframeworkClusterInfoSpecWorkloadType | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clients.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clients.internalValue = value.clients;
    }
  }

  // clients - computed: true, optional: false, required: true
  private _clients = new DataDatabricksClusterPluginframeworkClusterInfoSpecWorkloadTypeClientsList(this, "clients", false);
  public get clients() {
    return this._clients;
  }
  public putClients(value: DataDatabricksClusterPluginframeworkClusterInfoSpecWorkloadTypeClients[] | cdktn.IResolvable) {
    this._clients.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientsInput() {
    return this._clients.internalValue;
  }
}

export class DataDatabricksClusterPluginframeworkClusterInfoSpecWorkloadTypeList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksClusterPluginframeworkClusterInfoSpecWorkloadType[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksClusterPluginframeworkClusterInfoSpecWorkloadTypeOutputReference {
    return new DataDatabricksClusterPluginframeworkClusterInfoSpecWorkloadTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksClusterPluginframeworkClusterInfoSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#apply_policy_default_values DataDatabricksClusterPluginframework#apply_policy_default_values}
  */
  readonly applyPolicyDefaultValues?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#autoscale DataDatabricksClusterPluginframework#autoscale}
  */
  readonly autoscale?: DataDatabricksClusterPluginframeworkClusterInfoSpecAutoscale[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#autotermination_minutes DataDatabricksClusterPluginframework#autotermination_minutes}
  */
  readonly autoterminationMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#aws_attributes DataDatabricksClusterPluginframework#aws_attributes}
  */
  readonly awsAttributes?: DataDatabricksClusterPluginframeworkClusterInfoSpecAwsAttributes[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#azure_attributes DataDatabricksClusterPluginframework#azure_attributes}
  */
  readonly azureAttributes?: DataDatabricksClusterPluginframeworkClusterInfoSpecAzureAttributes[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#cluster_log_conf DataDatabricksClusterPluginframework#cluster_log_conf}
  */
  readonly clusterLogConf?: DataDatabricksClusterPluginframeworkClusterInfoSpecClusterLogConf[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#cluster_name DataDatabricksClusterPluginframework#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#custom_tags DataDatabricksClusterPluginframework#custom_tags}
  */
  readonly customTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#data_security_mode DataDatabricksClusterPluginframework#data_security_mode}
  */
  readonly dataSecurityMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#docker_image DataDatabricksClusterPluginframework#docker_image}
  */
  readonly dockerImage?: DataDatabricksClusterPluginframeworkClusterInfoSpecDockerImage[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#driver_instance_pool_id DataDatabricksClusterPluginframework#driver_instance_pool_id}
  */
  readonly driverInstancePoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#driver_node_type_flexibility DataDatabricksClusterPluginframework#driver_node_type_flexibility}
  */
  readonly driverNodeTypeFlexibility?: DataDatabricksClusterPluginframeworkClusterInfoSpecDriverNodeTypeFlexibility[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#driver_node_type_id DataDatabricksClusterPluginframework#driver_node_type_id}
  */
  readonly driverNodeTypeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#enable_elastic_disk DataDatabricksClusterPluginframework#enable_elastic_disk}
  */
  readonly enableElasticDisk?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#enable_local_disk_encryption DataDatabricksClusterPluginframework#enable_local_disk_encryption}
  */
  readonly enableLocalDiskEncryption?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#gcp_attributes DataDatabricksClusterPluginframework#gcp_attributes}
  */
  readonly gcpAttributes?: DataDatabricksClusterPluginframeworkClusterInfoSpecGcpAttributes[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#init_scripts DataDatabricksClusterPluginframework#init_scripts}
  */
  readonly initScripts?: DataDatabricksClusterPluginframeworkClusterInfoSpecInitScripts[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#instance_pool_id DataDatabricksClusterPluginframework#instance_pool_id}
  */
  readonly instancePoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#is_single_node DataDatabricksClusterPluginframework#is_single_node}
  */
  readonly isSingleNode?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#kind DataDatabricksClusterPluginframework#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#node_type_id DataDatabricksClusterPluginframework#node_type_id}
  */
  readonly nodeTypeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#num_workers DataDatabricksClusterPluginframework#num_workers}
  */
  readonly numWorkers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#policy_id DataDatabricksClusterPluginframework#policy_id}
  */
  readonly policyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#remote_disk_throughput DataDatabricksClusterPluginframework#remote_disk_throughput}
  */
  readonly remoteDiskThroughput?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#runtime_engine DataDatabricksClusterPluginframework#runtime_engine}
  */
  readonly runtimeEngine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#single_user_name DataDatabricksClusterPluginframework#single_user_name}
  */
  readonly singleUserName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#spark_conf DataDatabricksClusterPluginframework#spark_conf}
  */
  readonly sparkConf?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#spark_env_vars DataDatabricksClusterPluginframework#spark_env_vars}
  */
  readonly sparkEnvVars?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#spark_version DataDatabricksClusterPluginframework#spark_version}
  */
  readonly sparkVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#ssh_public_keys DataDatabricksClusterPluginframework#ssh_public_keys}
  */
  readonly sshPublicKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#total_initial_remote_disk_size DataDatabricksClusterPluginframework#total_initial_remote_disk_size}
  */
  readonly totalInitialRemoteDiskSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#use_ml_runtime DataDatabricksClusterPluginframework#use_ml_runtime}
  */
  readonly useMlRuntime?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#worker_node_type_flexibility DataDatabricksClusterPluginframework#worker_node_type_flexibility}
  */
  readonly workerNodeTypeFlexibility?: DataDatabricksClusterPluginframeworkClusterInfoSpecWorkerNodeTypeFlexibility[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#workload_type DataDatabricksClusterPluginframework#workload_type}
  */
  readonly workloadType?: DataDatabricksClusterPluginframeworkClusterInfoSpecWorkloadType[] | cdktn.IResolvable;
}

export function dataDatabricksClusterPluginframeworkClusterInfoSpecToTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoSpec | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apply_policy_default_values: cdktn.booleanToTerraform(struct!.applyPolicyDefaultValues),
    autoscale: cdktn.listMapper(dataDatabricksClusterPluginframeworkClusterInfoSpecAutoscaleToTerraform, false)(struct!.autoscale),
    autotermination_minutes: cdktn.numberToTerraform(struct!.autoterminationMinutes),
    aws_attributes: cdktn.listMapper(dataDatabricksClusterPluginframeworkClusterInfoSpecAwsAttributesToTerraform, false)(struct!.awsAttributes),
    azure_attributes: cdktn.listMapper(dataDatabricksClusterPluginframeworkClusterInfoSpecAzureAttributesToTerraform, false)(struct!.azureAttributes),
    cluster_log_conf: cdktn.listMapper(dataDatabricksClusterPluginframeworkClusterInfoSpecClusterLogConfToTerraform, false)(struct!.clusterLogConf),
    cluster_name: cdktn.stringToTerraform(struct!.clusterName),
    custom_tags: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.customTags),
    data_security_mode: cdktn.stringToTerraform(struct!.dataSecurityMode),
    docker_image: cdktn.listMapper(dataDatabricksClusterPluginframeworkClusterInfoSpecDockerImageToTerraform, false)(struct!.dockerImage),
    driver_instance_pool_id: cdktn.stringToTerraform(struct!.driverInstancePoolId),
    driver_node_type_flexibility: cdktn.listMapper(dataDatabricksClusterPluginframeworkClusterInfoSpecDriverNodeTypeFlexibilityToTerraform, false)(struct!.driverNodeTypeFlexibility),
    driver_node_type_id: cdktn.stringToTerraform(struct!.driverNodeTypeId),
    enable_elastic_disk: cdktn.booleanToTerraform(struct!.enableElasticDisk),
    enable_local_disk_encryption: cdktn.booleanToTerraform(struct!.enableLocalDiskEncryption),
    gcp_attributes: cdktn.listMapper(dataDatabricksClusterPluginframeworkClusterInfoSpecGcpAttributesToTerraform, false)(struct!.gcpAttributes),
    init_scripts: cdktn.listMapper(dataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsToTerraform, false)(struct!.initScripts),
    instance_pool_id: cdktn.stringToTerraform(struct!.instancePoolId),
    is_single_node: cdktn.booleanToTerraform(struct!.isSingleNode),
    kind: cdktn.stringToTerraform(struct!.kind),
    node_type_id: cdktn.stringToTerraform(struct!.nodeTypeId),
    num_workers: cdktn.numberToTerraform(struct!.numWorkers),
    policy_id: cdktn.stringToTerraform(struct!.policyId),
    remote_disk_throughput: cdktn.numberToTerraform(struct!.remoteDiskThroughput),
    runtime_engine: cdktn.stringToTerraform(struct!.runtimeEngine),
    single_user_name: cdktn.stringToTerraform(struct!.singleUserName),
    spark_conf: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.sparkConf),
    spark_env_vars: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.sparkEnvVars),
    spark_version: cdktn.stringToTerraform(struct!.sparkVersion),
    ssh_public_keys: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sshPublicKeys),
    total_initial_remote_disk_size: cdktn.numberToTerraform(struct!.totalInitialRemoteDiskSize),
    use_ml_runtime: cdktn.booleanToTerraform(struct!.useMlRuntime),
    worker_node_type_flexibility: cdktn.listMapper(dataDatabricksClusterPluginframeworkClusterInfoSpecWorkerNodeTypeFlexibilityToTerraform, false)(struct!.workerNodeTypeFlexibility),
    workload_type: cdktn.listMapper(dataDatabricksClusterPluginframeworkClusterInfoSpecWorkloadTypeToTerraform, false)(struct!.workloadType),
  }
}


export function dataDatabricksClusterPluginframeworkClusterInfoSpecToHclTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoSpec | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apply_policy_default_values: {
      value: cdktn.booleanToHclTerraform(struct!.applyPolicyDefaultValues),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    autoscale: {
      value: cdktn.listMapperHcl(dataDatabricksClusterPluginframeworkClusterInfoSpecAutoscaleToHclTerraform, false)(struct!.autoscale),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterPluginframeworkClusterInfoSpecAutoscaleList",
    },
    autotermination_minutes: {
      value: cdktn.numberToHclTerraform(struct!.autoterminationMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    aws_attributes: {
      value: cdktn.listMapperHcl(dataDatabricksClusterPluginframeworkClusterInfoSpecAwsAttributesToHclTerraform, false)(struct!.awsAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterPluginframeworkClusterInfoSpecAwsAttributesList",
    },
    azure_attributes: {
      value: cdktn.listMapperHcl(dataDatabricksClusterPluginframeworkClusterInfoSpecAzureAttributesToHclTerraform, false)(struct!.azureAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterPluginframeworkClusterInfoSpecAzureAttributesList",
    },
    cluster_log_conf: {
      value: cdktn.listMapperHcl(dataDatabricksClusterPluginframeworkClusterInfoSpecClusterLogConfToHclTerraform, false)(struct!.clusterLogConf),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterPluginframeworkClusterInfoSpecClusterLogConfList",
    },
    cluster_name: {
      value: cdktn.stringToHclTerraform(struct!.clusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_tags: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.customTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    data_security_mode: {
      value: cdktn.stringToHclTerraform(struct!.dataSecurityMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    docker_image: {
      value: cdktn.listMapperHcl(dataDatabricksClusterPluginframeworkClusterInfoSpecDockerImageToHclTerraform, false)(struct!.dockerImage),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterPluginframeworkClusterInfoSpecDockerImageList",
    },
    driver_instance_pool_id: {
      value: cdktn.stringToHclTerraform(struct!.driverInstancePoolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    driver_node_type_flexibility: {
      value: cdktn.listMapperHcl(dataDatabricksClusterPluginframeworkClusterInfoSpecDriverNodeTypeFlexibilityToHclTerraform, false)(struct!.driverNodeTypeFlexibility),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterPluginframeworkClusterInfoSpecDriverNodeTypeFlexibilityList",
    },
    driver_node_type_id: {
      value: cdktn.stringToHclTerraform(struct!.driverNodeTypeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_elastic_disk: {
      value: cdktn.booleanToHclTerraform(struct!.enableElasticDisk),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_local_disk_encryption: {
      value: cdktn.booleanToHclTerraform(struct!.enableLocalDiskEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gcp_attributes: {
      value: cdktn.listMapperHcl(dataDatabricksClusterPluginframeworkClusterInfoSpecGcpAttributesToHclTerraform, false)(struct!.gcpAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterPluginframeworkClusterInfoSpecGcpAttributesList",
    },
    init_scripts: {
      value: cdktn.listMapperHcl(dataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsToHclTerraform, false)(struct!.initScripts),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsList",
    },
    instance_pool_id: {
      value: cdktn.stringToHclTerraform(struct!.instancePoolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_single_node: {
      value: cdktn.booleanToHclTerraform(struct!.isSingleNode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kind: {
      value: cdktn.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_type_id: {
      value: cdktn.stringToHclTerraform(struct!.nodeTypeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_workers: {
      value: cdktn.numberToHclTerraform(struct!.numWorkers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    policy_id: {
      value: cdktn.stringToHclTerraform(struct!.policyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_disk_throughput: {
      value: cdktn.numberToHclTerraform(struct!.remoteDiskThroughput),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    runtime_engine: {
      value: cdktn.stringToHclTerraform(struct!.runtimeEngine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    single_user_name: {
      value: cdktn.stringToHclTerraform(struct!.singleUserName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spark_conf: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.sparkConf),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    spark_env_vars: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.sparkEnvVars),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    spark_version: {
      value: cdktn.stringToHclTerraform(struct!.sparkVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_public_keys: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sshPublicKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    total_initial_remote_disk_size: {
      value: cdktn.numberToHclTerraform(struct!.totalInitialRemoteDiskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_ml_runtime: {
      value: cdktn.booleanToHclTerraform(struct!.useMlRuntime),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    worker_node_type_flexibility: {
      value: cdktn.listMapperHcl(dataDatabricksClusterPluginframeworkClusterInfoSpecWorkerNodeTypeFlexibilityToHclTerraform, false)(struct!.workerNodeTypeFlexibility),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterPluginframeworkClusterInfoSpecWorkerNodeTypeFlexibilityList",
    },
    workload_type: {
      value: cdktn.listMapperHcl(dataDatabricksClusterPluginframeworkClusterInfoSpecWorkloadTypeToHclTerraform, false)(struct!.workloadType),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterPluginframeworkClusterInfoSpecWorkloadTypeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksClusterPluginframeworkClusterInfoSpecOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksClusterPluginframeworkClusterInfoSpec | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applyPolicyDefaultValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.applyPolicyDefaultValues = this._applyPolicyDefaultValues;
    }
    if (this._autoscale?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscale = this._autoscale?.internalValue;
    }
    if (this._autoterminationMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoterminationMinutes = this._autoterminationMinutes;
    }
    if (this._awsAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAttributes = this._awsAttributes?.internalValue;
    }
    if (this._azureAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureAttributes = this._azureAttributes?.internalValue;
    }
    if (this._clusterLogConf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterLogConf = this._clusterLogConf?.internalValue;
    }
    if (this._clusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterName = this._clusterName;
    }
    if (this._customTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.customTags = this._customTags;
    }
    if (this._dataSecurityMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSecurityMode = this._dataSecurityMode;
    }
    if (this._dockerImage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerImage = this._dockerImage?.internalValue;
    }
    if (this._driverInstancePoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.driverInstancePoolId = this._driverInstancePoolId;
    }
    if (this._driverNodeTypeFlexibility?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.driverNodeTypeFlexibility = this._driverNodeTypeFlexibility?.internalValue;
    }
    if (this._driverNodeTypeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.driverNodeTypeId = this._driverNodeTypeId;
    }
    if (this._enableElasticDisk !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableElasticDisk = this._enableElasticDisk;
    }
    if (this._enableLocalDiskEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableLocalDiskEncryption = this._enableLocalDiskEncryption;
    }
    if (this._gcpAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpAttributes = this._gcpAttributes?.internalValue;
    }
    if (this._initScripts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initScripts = this._initScripts?.internalValue;
    }
    if (this._instancePoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instancePoolId = this._instancePoolId;
    }
    if (this._isSingleNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSingleNode = this._isSingleNode;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._nodeTypeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeTypeId = this._nodeTypeId;
    }
    if (this._numWorkers !== undefined) {
      hasAnyValues = true;
      internalValueResult.numWorkers = this._numWorkers;
    }
    if (this._policyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyId = this._policyId;
    }
    if (this._remoteDiskThroughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteDiskThroughput = this._remoteDiskThroughput;
    }
    if (this._runtimeEngine !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeEngine = this._runtimeEngine;
    }
    if (this._singleUserName !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleUserName = this._singleUserName;
    }
    if (this._sparkConf !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparkConf = this._sparkConf;
    }
    if (this._sparkEnvVars !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparkEnvVars = this._sparkEnvVars;
    }
    if (this._sparkVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparkVersion = this._sparkVersion;
    }
    if (this._sshPublicKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshPublicKeys = this._sshPublicKeys;
    }
    if (this._totalInitialRemoteDiskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalInitialRemoteDiskSize = this._totalInitialRemoteDiskSize;
    }
    if (this._useMlRuntime !== undefined) {
      hasAnyValues = true;
      internalValueResult.useMlRuntime = this._useMlRuntime;
    }
    if (this._workerNodeTypeFlexibility?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerNodeTypeFlexibility = this._workerNodeTypeFlexibility?.internalValue;
    }
    if (this._workloadType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadType = this._workloadType?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterPluginframeworkClusterInfoSpec | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applyPolicyDefaultValues = undefined;
      this._autoscale.internalValue = undefined;
      this._autoterminationMinutes = undefined;
      this._awsAttributes.internalValue = undefined;
      this._azureAttributes.internalValue = undefined;
      this._clusterLogConf.internalValue = undefined;
      this._clusterName = undefined;
      this._customTags = undefined;
      this._dataSecurityMode = undefined;
      this._dockerImage.internalValue = undefined;
      this._driverInstancePoolId = undefined;
      this._driverNodeTypeFlexibility.internalValue = undefined;
      this._driverNodeTypeId = undefined;
      this._enableElasticDisk = undefined;
      this._enableLocalDiskEncryption = undefined;
      this._gcpAttributes.internalValue = undefined;
      this._initScripts.internalValue = undefined;
      this._instancePoolId = undefined;
      this._isSingleNode = undefined;
      this._kind = undefined;
      this._nodeTypeId = undefined;
      this._numWorkers = undefined;
      this._policyId = undefined;
      this._remoteDiskThroughput = undefined;
      this._runtimeEngine = undefined;
      this._singleUserName = undefined;
      this._sparkConf = undefined;
      this._sparkEnvVars = undefined;
      this._sparkVersion = undefined;
      this._sshPublicKeys = undefined;
      this._totalInitialRemoteDiskSize = undefined;
      this._useMlRuntime = undefined;
      this._workerNodeTypeFlexibility.internalValue = undefined;
      this._workloadType.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applyPolicyDefaultValues = value.applyPolicyDefaultValues;
      this._autoscale.internalValue = value.autoscale;
      this._autoterminationMinutes = value.autoterminationMinutes;
      this._awsAttributes.internalValue = value.awsAttributes;
      this._azureAttributes.internalValue = value.azureAttributes;
      this._clusterLogConf.internalValue = value.clusterLogConf;
      this._clusterName = value.clusterName;
      this._customTags = value.customTags;
      this._dataSecurityMode = value.dataSecurityMode;
      this._dockerImage.internalValue = value.dockerImage;
      this._driverInstancePoolId = value.driverInstancePoolId;
      this._driverNodeTypeFlexibility.internalValue = value.driverNodeTypeFlexibility;
      this._driverNodeTypeId = value.driverNodeTypeId;
      this._enableElasticDisk = value.enableElasticDisk;
      this._enableLocalDiskEncryption = value.enableLocalDiskEncryption;
      this._gcpAttributes.internalValue = value.gcpAttributes;
      this._initScripts.internalValue = value.initScripts;
      this._instancePoolId = value.instancePoolId;
      this._isSingleNode = value.isSingleNode;
      this._kind = value.kind;
      this._nodeTypeId = value.nodeTypeId;
      this._numWorkers = value.numWorkers;
      this._policyId = value.policyId;
      this._remoteDiskThroughput = value.remoteDiskThroughput;
      this._runtimeEngine = value.runtimeEngine;
      this._singleUserName = value.singleUserName;
      this._sparkConf = value.sparkConf;
      this._sparkEnvVars = value.sparkEnvVars;
      this._sparkVersion = value.sparkVersion;
      this._sshPublicKeys = value.sshPublicKeys;
      this._totalInitialRemoteDiskSize = value.totalInitialRemoteDiskSize;
      this._useMlRuntime = value.useMlRuntime;
      this._workerNodeTypeFlexibility.internalValue = value.workerNodeTypeFlexibility;
      this._workloadType.internalValue = value.workloadType;
    }
  }

  // apply_policy_default_values - computed: true, optional: true, required: false
  private _applyPolicyDefaultValues?: boolean | cdktn.IResolvable; 
  public get applyPolicyDefaultValues() {
    return this.getBooleanAttribute('apply_policy_default_values');
  }
  public set applyPolicyDefaultValues(value: boolean | cdktn.IResolvable) {
    this._applyPolicyDefaultValues = value;
  }
  public resetApplyPolicyDefaultValues() {
    this._applyPolicyDefaultValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyPolicyDefaultValuesInput() {
    return this._applyPolicyDefaultValues;
  }

  // autoscale - computed: true, optional: true, required: false
  private _autoscale = new DataDatabricksClusterPluginframeworkClusterInfoSpecAutoscaleList(this, "autoscale", false);
  public get autoscale() {
    return this._autoscale;
  }
  public putAutoscale(value: DataDatabricksClusterPluginframeworkClusterInfoSpecAutoscale[] | cdktn.IResolvable) {
    this._autoscale.internalValue = value;
  }
  public resetAutoscale() {
    this._autoscale.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleInput() {
    return this._autoscale.internalValue;
  }

  // autotermination_minutes - computed: true, optional: true, required: false
  private _autoterminationMinutes?: number; 
  public get autoterminationMinutes() {
    return this.getNumberAttribute('autotermination_minutes');
  }
  public set autoterminationMinutes(value: number) {
    this._autoterminationMinutes = value;
  }
  public resetAutoterminationMinutes() {
    this._autoterminationMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoterminationMinutesInput() {
    return this._autoterminationMinutes;
  }

  // aws_attributes - computed: true, optional: true, required: false
  private _awsAttributes = new DataDatabricksClusterPluginframeworkClusterInfoSpecAwsAttributesList(this, "aws_attributes", false);
  public get awsAttributes() {
    return this._awsAttributes;
  }
  public putAwsAttributes(value: DataDatabricksClusterPluginframeworkClusterInfoSpecAwsAttributes[] | cdktn.IResolvable) {
    this._awsAttributes.internalValue = value;
  }
  public resetAwsAttributes() {
    this._awsAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAttributesInput() {
    return this._awsAttributes.internalValue;
  }

  // azure_attributes - computed: true, optional: true, required: false
  private _azureAttributes = new DataDatabricksClusterPluginframeworkClusterInfoSpecAzureAttributesList(this, "azure_attributes", false);
  public get azureAttributes() {
    return this._azureAttributes;
  }
  public putAzureAttributes(value: DataDatabricksClusterPluginframeworkClusterInfoSpecAzureAttributes[] | cdktn.IResolvable) {
    this._azureAttributes.internalValue = value;
  }
  public resetAzureAttributes() {
    this._azureAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureAttributesInput() {
    return this._azureAttributes.internalValue;
  }

  // cluster_log_conf - computed: true, optional: true, required: false
  private _clusterLogConf = new DataDatabricksClusterPluginframeworkClusterInfoSpecClusterLogConfList(this, "cluster_log_conf", false);
  public get clusterLogConf() {
    return this._clusterLogConf;
  }
  public putClusterLogConf(value: DataDatabricksClusterPluginframeworkClusterInfoSpecClusterLogConf[] | cdktn.IResolvable) {
    this._clusterLogConf.internalValue = value;
  }
  public resetClusterLogConf() {
    this._clusterLogConf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterLogConfInput() {
    return this._clusterLogConf.internalValue;
  }

  // cluster_name - computed: true, optional: true, required: false
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  public resetClusterName() {
    this._clusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // custom_tags - computed: true, optional: true, required: false
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

  // data_security_mode - computed: true, optional: true, required: false
  private _dataSecurityMode?: string; 
  public get dataSecurityMode() {
    return this.getStringAttribute('data_security_mode');
  }
  public set dataSecurityMode(value: string) {
    this._dataSecurityMode = value;
  }
  public resetDataSecurityMode() {
    this._dataSecurityMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSecurityModeInput() {
    return this._dataSecurityMode;
  }

  // docker_image - computed: true, optional: true, required: false
  private _dockerImage = new DataDatabricksClusterPluginframeworkClusterInfoSpecDockerImageList(this, "docker_image", false);
  public get dockerImage() {
    return this._dockerImage;
  }
  public putDockerImage(value: DataDatabricksClusterPluginframeworkClusterInfoSpecDockerImage[] | cdktn.IResolvable) {
    this._dockerImage.internalValue = value;
  }
  public resetDockerImage() {
    this._dockerImage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerImageInput() {
    return this._dockerImage.internalValue;
  }

  // driver_instance_pool_id - computed: true, optional: true, required: false
  private _driverInstancePoolId?: string; 
  public get driverInstancePoolId() {
    return this.getStringAttribute('driver_instance_pool_id');
  }
  public set driverInstancePoolId(value: string) {
    this._driverInstancePoolId = value;
  }
  public resetDriverInstancePoolId() {
    this._driverInstancePoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverInstancePoolIdInput() {
    return this._driverInstancePoolId;
  }

  // driver_node_type_flexibility - computed: true, optional: true, required: false
  private _driverNodeTypeFlexibility = new DataDatabricksClusterPluginframeworkClusterInfoSpecDriverNodeTypeFlexibilityList(this, "driver_node_type_flexibility", false);
  public get driverNodeTypeFlexibility() {
    return this._driverNodeTypeFlexibility;
  }
  public putDriverNodeTypeFlexibility(value: DataDatabricksClusterPluginframeworkClusterInfoSpecDriverNodeTypeFlexibility[] | cdktn.IResolvable) {
    this._driverNodeTypeFlexibility.internalValue = value;
  }
  public resetDriverNodeTypeFlexibility() {
    this._driverNodeTypeFlexibility.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverNodeTypeFlexibilityInput() {
    return this._driverNodeTypeFlexibility.internalValue;
  }

  // driver_node_type_id - computed: true, optional: true, required: false
  private _driverNodeTypeId?: string; 
  public get driverNodeTypeId() {
    return this.getStringAttribute('driver_node_type_id');
  }
  public set driverNodeTypeId(value: string) {
    this._driverNodeTypeId = value;
  }
  public resetDriverNodeTypeId() {
    this._driverNodeTypeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverNodeTypeIdInput() {
    return this._driverNodeTypeId;
  }

  // enable_elastic_disk - computed: true, optional: true, required: false
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

  // enable_local_disk_encryption - computed: true, optional: true, required: false
  private _enableLocalDiskEncryption?: boolean | cdktn.IResolvable; 
  public get enableLocalDiskEncryption() {
    return this.getBooleanAttribute('enable_local_disk_encryption');
  }
  public set enableLocalDiskEncryption(value: boolean | cdktn.IResolvable) {
    this._enableLocalDiskEncryption = value;
  }
  public resetEnableLocalDiskEncryption() {
    this._enableLocalDiskEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLocalDiskEncryptionInput() {
    return this._enableLocalDiskEncryption;
  }

  // gcp_attributes - computed: true, optional: true, required: false
  private _gcpAttributes = new DataDatabricksClusterPluginframeworkClusterInfoSpecGcpAttributesList(this, "gcp_attributes", false);
  public get gcpAttributes() {
    return this._gcpAttributes;
  }
  public putGcpAttributes(value: DataDatabricksClusterPluginframeworkClusterInfoSpecGcpAttributes[] | cdktn.IResolvable) {
    this._gcpAttributes.internalValue = value;
  }
  public resetGcpAttributes() {
    this._gcpAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpAttributesInput() {
    return this._gcpAttributes.internalValue;
  }

  // init_scripts - computed: true, optional: true, required: false
  private _initScripts = new DataDatabricksClusterPluginframeworkClusterInfoSpecInitScriptsList(this, "init_scripts", false);
  public get initScripts() {
    return this._initScripts;
  }
  public putInitScripts(value: DataDatabricksClusterPluginframeworkClusterInfoSpecInitScripts[] | cdktn.IResolvable) {
    this._initScripts.internalValue = value;
  }
  public resetInitScripts() {
    this._initScripts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initScriptsInput() {
    return this._initScripts.internalValue;
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

  // is_single_node - computed: true, optional: true, required: false
  private _isSingleNode?: boolean | cdktn.IResolvable; 
  public get isSingleNode() {
    return this.getBooleanAttribute('is_single_node');
  }
  public set isSingleNode(value: boolean | cdktn.IResolvable) {
    this._isSingleNode = value;
  }
  public resetIsSingleNode() {
    this._isSingleNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSingleNodeInput() {
    return this._isSingleNode;
  }

  // kind - computed: true, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // node_type_id - computed: true, optional: true, required: false
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

  // num_workers - computed: true, optional: true, required: false
  private _numWorkers?: number; 
  public get numWorkers() {
    return this.getNumberAttribute('num_workers');
  }
  public set numWorkers(value: number) {
    this._numWorkers = value;
  }
  public resetNumWorkers() {
    this._numWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numWorkersInput() {
    return this._numWorkers;
  }

  // policy_id - computed: true, optional: true, required: false
  private _policyId?: string; 
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string) {
    this._policyId = value;
  }
  public resetPolicyId() {
    this._policyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // remote_disk_throughput - computed: true, optional: true, required: false
  private _remoteDiskThroughput?: number; 
  public get remoteDiskThroughput() {
    return this.getNumberAttribute('remote_disk_throughput');
  }
  public set remoteDiskThroughput(value: number) {
    this._remoteDiskThroughput = value;
  }
  public resetRemoteDiskThroughput() {
    this._remoteDiskThroughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteDiskThroughputInput() {
    return this._remoteDiskThroughput;
  }

  // runtime_engine - computed: true, optional: true, required: false
  private _runtimeEngine?: string; 
  public get runtimeEngine() {
    return this.getStringAttribute('runtime_engine');
  }
  public set runtimeEngine(value: string) {
    this._runtimeEngine = value;
  }
  public resetRuntimeEngine() {
    this._runtimeEngine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeEngineInput() {
    return this._runtimeEngine;
  }

  // single_user_name - computed: true, optional: true, required: false
  private _singleUserName?: string; 
  public get singleUserName() {
    return this.getStringAttribute('single_user_name');
  }
  public set singleUserName(value: string) {
    this._singleUserName = value;
  }
  public resetSingleUserName() {
    this._singleUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleUserNameInput() {
    return this._singleUserName;
  }

  // spark_conf - computed: true, optional: true, required: false
  private _sparkConf?: { [key: string]: string }; 
  public get sparkConf() {
    return this.getStringMapAttribute('spark_conf');
  }
  public set sparkConf(value: { [key: string]: string }) {
    this._sparkConf = value;
  }
  public resetSparkConf() {
    this._sparkConf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkConfInput() {
    return this._sparkConf;
  }

  // spark_env_vars - computed: true, optional: true, required: false
  private _sparkEnvVars?: { [key: string]: string }; 
  public get sparkEnvVars() {
    return this.getStringMapAttribute('spark_env_vars');
  }
  public set sparkEnvVars(value: { [key: string]: string }) {
    this._sparkEnvVars = value;
  }
  public resetSparkEnvVars() {
    this._sparkEnvVars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkEnvVarsInput() {
    return this._sparkEnvVars;
  }

  // spark_version - computed: true, optional: true, required: false
  private _sparkVersion?: string; 
  public get sparkVersion() {
    return this.getStringAttribute('spark_version');
  }
  public set sparkVersion(value: string) {
    this._sparkVersion = value;
  }
  public resetSparkVersion() {
    this._sparkVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkVersionInput() {
    return this._sparkVersion;
  }

  // ssh_public_keys - computed: true, optional: true, required: false
  private _sshPublicKeys?: string[]; 
  public get sshPublicKeys() {
    return this.getListAttribute('ssh_public_keys');
  }
  public set sshPublicKeys(value: string[]) {
    this._sshPublicKeys = value;
  }
  public resetSshPublicKeys() {
    this._sshPublicKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPublicKeysInput() {
    return this._sshPublicKeys;
  }

  // total_initial_remote_disk_size - computed: true, optional: true, required: false
  private _totalInitialRemoteDiskSize?: number; 
  public get totalInitialRemoteDiskSize() {
    return this.getNumberAttribute('total_initial_remote_disk_size');
  }
  public set totalInitialRemoteDiskSize(value: number) {
    this._totalInitialRemoteDiskSize = value;
  }
  public resetTotalInitialRemoteDiskSize() {
    this._totalInitialRemoteDiskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalInitialRemoteDiskSizeInput() {
    return this._totalInitialRemoteDiskSize;
  }

  // use_ml_runtime - computed: true, optional: true, required: false
  private _useMlRuntime?: boolean | cdktn.IResolvable; 
  public get useMlRuntime() {
    return this.getBooleanAttribute('use_ml_runtime');
  }
  public set useMlRuntime(value: boolean | cdktn.IResolvable) {
    this._useMlRuntime = value;
  }
  public resetUseMlRuntime() {
    this._useMlRuntime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMlRuntimeInput() {
    return this._useMlRuntime;
  }

  // worker_node_type_flexibility - computed: true, optional: true, required: false
  private _workerNodeTypeFlexibility = new DataDatabricksClusterPluginframeworkClusterInfoSpecWorkerNodeTypeFlexibilityList(this, "worker_node_type_flexibility", false);
  public get workerNodeTypeFlexibility() {
    return this._workerNodeTypeFlexibility;
  }
  public putWorkerNodeTypeFlexibility(value: DataDatabricksClusterPluginframeworkClusterInfoSpecWorkerNodeTypeFlexibility[] | cdktn.IResolvable) {
    this._workerNodeTypeFlexibility.internalValue = value;
  }
  public resetWorkerNodeTypeFlexibility() {
    this._workerNodeTypeFlexibility.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerNodeTypeFlexibilityInput() {
    return this._workerNodeTypeFlexibility.internalValue;
  }

  // workload_type - computed: true, optional: true, required: false
  private _workloadType = new DataDatabricksClusterPluginframeworkClusterInfoSpecWorkloadTypeList(this, "workload_type", false);
  public get workloadType() {
    return this._workloadType;
  }
  public putWorkloadType(value: DataDatabricksClusterPluginframeworkClusterInfoSpecWorkloadType[] | cdktn.IResolvable) {
    this._workloadType.internalValue = value;
  }
  public resetWorkloadType() {
    this._workloadType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadTypeInput() {
    return this._workloadType.internalValue;
  }
}

export class DataDatabricksClusterPluginframeworkClusterInfoSpecList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksClusterPluginframeworkClusterInfoSpec[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksClusterPluginframeworkClusterInfoSpecOutputReference {
    return new DataDatabricksClusterPluginframeworkClusterInfoSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksClusterPluginframeworkClusterInfoTerminationReason {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#code DataDatabricksClusterPluginframework#code}
  */
  readonly code?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#parameters DataDatabricksClusterPluginframework#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#type DataDatabricksClusterPluginframework#type}
  */
  readonly type?: string;
}

export function dataDatabricksClusterPluginframeworkClusterInfoTerminationReasonToTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoTerminationReason | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktn.stringToTerraform(struct!.code),
    parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.parameters),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function dataDatabricksClusterPluginframeworkClusterInfoTerminationReasonToHclTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoTerminationReason | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktn.stringToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.parameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksClusterPluginframeworkClusterInfoTerminationReasonOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksClusterPluginframeworkClusterInfoTerminationReason | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterPluginframeworkClusterInfoTerminationReason | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
      this._parameters = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
      this._parameters = value.parameters;
      this._type = value.type;
    }
  }

  // code - computed: true, optional: true, required: false
  private _code?: string; 
  public get code() {
    return this.getStringAttribute('code');
  }
  public set code(value: string) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // parameters - computed: true, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DataDatabricksClusterPluginframeworkClusterInfoTerminationReasonList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksClusterPluginframeworkClusterInfoTerminationReason[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksClusterPluginframeworkClusterInfoTerminationReasonOutputReference {
    return new DataDatabricksClusterPluginframeworkClusterInfoTerminationReasonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksClusterPluginframeworkClusterInfoWorkerNodeTypeFlexibility {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#alternate_node_type_ids DataDatabricksClusterPluginframework#alternate_node_type_ids}
  */
  readonly alternateNodeTypeIds?: string[];
}

export function dataDatabricksClusterPluginframeworkClusterInfoWorkerNodeTypeFlexibilityToTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoWorkerNodeTypeFlexibility | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alternate_node_type_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.alternateNodeTypeIds),
  }
}


export function dataDatabricksClusterPluginframeworkClusterInfoWorkerNodeTypeFlexibilityToHclTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoWorkerNodeTypeFlexibility | cdktn.IResolvable): any {
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

export class DataDatabricksClusterPluginframeworkClusterInfoWorkerNodeTypeFlexibilityOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksClusterPluginframeworkClusterInfoWorkerNodeTypeFlexibility | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alternateNodeTypeIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.alternateNodeTypeIds = this._alternateNodeTypeIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterPluginframeworkClusterInfoWorkerNodeTypeFlexibility | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alternateNodeTypeIds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alternateNodeTypeIds = value.alternateNodeTypeIds;
    }
  }

  // alternate_node_type_ids - computed: true, optional: true, required: false
  private _alternateNodeTypeIds?: string[]; 
  public get alternateNodeTypeIds() {
    return this.getListAttribute('alternate_node_type_ids');
  }
  public set alternateNodeTypeIds(value: string[]) {
    this._alternateNodeTypeIds = value;
  }
  public resetAlternateNodeTypeIds() {
    this._alternateNodeTypeIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alternateNodeTypeIdsInput() {
    return this._alternateNodeTypeIds;
  }
}

export class DataDatabricksClusterPluginframeworkClusterInfoWorkerNodeTypeFlexibilityList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksClusterPluginframeworkClusterInfoWorkerNodeTypeFlexibility[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksClusterPluginframeworkClusterInfoWorkerNodeTypeFlexibilityOutputReference {
    return new DataDatabricksClusterPluginframeworkClusterInfoWorkerNodeTypeFlexibilityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksClusterPluginframeworkClusterInfoWorkloadTypeClients {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#jobs DataDatabricksClusterPluginframework#jobs}
  */
  readonly jobs?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#notebooks DataDatabricksClusterPluginframework#notebooks}
  */
  readonly notebooks?: boolean | cdktn.IResolvable;
}

export function dataDatabricksClusterPluginframeworkClusterInfoWorkloadTypeClientsToTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoWorkloadTypeClients): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jobs: cdktn.booleanToTerraform(struct!.jobs),
    notebooks: cdktn.booleanToTerraform(struct!.notebooks),
  }
}


export function dataDatabricksClusterPluginframeworkClusterInfoWorkloadTypeClientsToHclTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoWorkloadTypeClients): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    jobs: {
      value: cdktn.booleanToHclTerraform(struct!.jobs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    notebooks: {
      value: cdktn.booleanToHclTerraform(struct!.notebooks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksClusterPluginframeworkClusterInfoWorkloadTypeClientsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksClusterPluginframeworkClusterInfoWorkloadTypeClients | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jobs !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobs = this._jobs;
    }
    if (this._notebooks !== undefined) {
      hasAnyValues = true;
      internalValueResult.notebooks = this._notebooks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterPluginframeworkClusterInfoWorkloadTypeClients | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jobs = undefined;
      this._notebooks = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jobs = value.jobs;
      this._notebooks = value.notebooks;
    }
  }

  // jobs - computed: true, optional: true, required: false
  private _jobs?: boolean | cdktn.IResolvable; 
  public get jobs() {
    return this.getBooleanAttribute('jobs');
  }
  public set jobs(value: boolean | cdktn.IResolvable) {
    this._jobs = value;
  }
  public resetJobs() {
    this._jobs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobsInput() {
    return this._jobs;
  }

  // notebooks - computed: true, optional: true, required: false
  private _notebooks?: boolean | cdktn.IResolvable; 
  public get notebooks() {
    return this.getBooleanAttribute('notebooks');
  }
  public set notebooks(value: boolean | cdktn.IResolvable) {
    this._notebooks = value;
  }
  public resetNotebooks() {
    this._notebooks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notebooksInput() {
    return this._notebooks;
  }
}

export class DataDatabricksClusterPluginframeworkClusterInfoWorkloadTypeClientsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksClusterPluginframeworkClusterInfoWorkloadTypeClients[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksClusterPluginframeworkClusterInfoWorkloadTypeClientsOutputReference {
    return new DataDatabricksClusterPluginframeworkClusterInfoWorkloadTypeClientsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksClusterPluginframeworkClusterInfoWorkloadType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#clients DataDatabricksClusterPluginframework#clients}
  */
  readonly clients: DataDatabricksClusterPluginframeworkClusterInfoWorkloadTypeClients[] | cdktn.IResolvable;
}

export function dataDatabricksClusterPluginframeworkClusterInfoWorkloadTypeToTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoWorkloadType | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clients: cdktn.listMapper(dataDatabricksClusterPluginframeworkClusterInfoWorkloadTypeClientsToTerraform, false)(struct!.clients),
  }
}


export function dataDatabricksClusterPluginframeworkClusterInfoWorkloadTypeToHclTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfoWorkloadType | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clients: {
      value: cdktn.listMapperHcl(dataDatabricksClusterPluginframeworkClusterInfoWorkloadTypeClientsToHclTerraform, false)(struct!.clients),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterPluginframeworkClusterInfoWorkloadTypeClientsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksClusterPluginframeworkClusterInfoWorkloadTypeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksClusterPluginframeworkClusterInfoWorkloadType | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clients?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clients = this._clients?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterPluginframeworkClusterInfoWorkloadType | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clients.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clients.internalValue = value.clients;
    }
  }

  // clients - computed: true, optional: false, required: true
  private _clients = new DataDatabricksClusterPluginframeworkClusterInfoWorkloadTypeClientsList(this, "clients", false);
  public get clients() {
    return this._clients;
  }
  public putClients(value: DataDatabricksClusterPluginframeworkClusterInfoWorkloadTypeClients[] | cdktn.IResolvable) {
    this._clients.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientsInput() {
    return this._clients.internalValue;
  }
}

export class DataDatabricksClusterPluginframeworkClusterInfoWorkloadTypeList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksClusterPluginframeworkClusterInfoWorkloadType[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksClusterPluginframeworkClusterInfoWorkloadTypeOutputReference {
    return new DataDatabricksClusterPluginframeworkClusterInfoWorkloadTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksClusterPluginframeworkClusterInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#autoscale DataDatabricksClusterPluginframework#autoscale}
  */
  readonly autoscale?: DataDatabricksClusterPluginframeworkClusterInfoAutoscale[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#autotermination_minutes DataDatabricksClusterPluginframework#autotermination_minutes}
  */
  readonly autoterminationMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#aws_attributes DataDatabricksClusterPluginframework#aws_attributes}
  */
  readonly awsAttributes?: DataDatabricksClusterPluginframeworkClusterInfoAwsAttributes[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#azure_attributes DataDatabricksClusterPluginframework#azure_attributes}
  */
  readonly azureAttributes?: DataDatabricksClusterPluginframeworkClusterInfoAzureAttributes[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#cluster_cores DataDatabricksClusterPluginframework#cluster_cores}
  */
  readonly clusterCores?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#cluster_id DataDatabricksClusterPluginframework#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#cluster_log_conf DataDatabricksClusterPluginframework#cluster_log_conf}
  */
  readonly clusterLogConf?: DataDatabricksClusterPluginframeworkClusterInfoClusterLogConf[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#cluster_log_status DataDatabricksClusterPluginframework#cluster_log_status}
  */
  readonly clusterLogStatus?: DataDatabricksClusterPluginframeworkClusterInfoClusterLogStatus[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#cluster_memory_mb DataDatabricksClusterPluginframework#cluster_memory_mb}
  */
  readonly clusterMemoryMb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#cluster_name DataDatabricksClusterPluginframework#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#cluster_source DataDatabricksClusterPluginframework#cluster_source}
  */
  readonly clusterSource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#creator_user_name DataDatabricksClusterPluginframework#creator_user_name}
  */
  readonly creatorUserName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#custom_tags DataDatabricksClusterPluginframework#custom_tags}
  */
  readonly customTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#data_security_mode DataDatabricksClusterPluginframework#data_security_mode}
  */
  readonly dataSecurityMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#default_tags DataDatabricksClusterPluginframework#default_tags}
  */
  readonly defaultTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#docker_image DataDatabricksClusterPluginframework#docker_image}
  */
  readonly dockerImage?: DataDatabricksClusterPluginframeworkClusterInfoDockerImage[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#driver DataDatabricksClusterPluginframework#driver}
  */
  readonly driver?: DataDatabricksClusterPluginframeworkClusterInfoDriver[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#driver_instance_pool_id DataDatabricksClusterPluginframework#driver_instance_pool_id}
  */
  readonly driverInstancePoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#driver_node_type_flexibility DataDatabricksClusterPluginframework#driver_node_type_flexibility}
  */
  readonly driverNodeTypeFlexibility?: DataDatabricksClusterPluginframeworkClusterInfoDriverNodeTypeFlexibility[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#driver_node_type_id DataDatabricksClusterPluginframework#driver_node_type_id}
  */
  readonly driverNodeTypeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#enable_elastic_disk DataDatabricksClusterPluginframework#enable_elastic_disk}
  */
  readonly enableElasticDisk?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#enable_local_disk_encryption DataDatabricksClusterPluginframework#enable_local_disk_encryption}
  */
  readonly enableLocalDiskEncryption?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#executors DataDatabricksClusterPluginframework#executors}
  */
  readonly executors?: DataDatabricksClusterPluginframeworkClusterInfoExecutors[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#gcp_attributes DataDatabricksClusterPluginframework#gcp_attributes}
  */
  readonly gcpAttributes?: DataDatabricksClusterPluginframeworkClusterInfoGcpAttributes[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#init_scripts DataDatabricksClusterPluginframework#init_scripts}
  */
  readonly initScripts?: DataDatabricksClusterPluginframeworkClusterInfoInitScripts[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#instance_pool_id DataDatabricksClusterPluginframework#instance_pool_id}
  */
  readonly instancePoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#is_single_node DataDatabricksClusterPluginframework#is_single_node}
  */
  readonly isSingleNode?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#jdbc_port DataDatabricksClusterPluginframework#jdbc_port}
  */
  readonly jdbcPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#kind DataDatabricksClusterPluginframework#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#last_restarted_time DataDatabricksClusterPluginframework#last_restarted_time}
  */
  readonly lastRestartedTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#last_state_loss_time DataDatabricksClusterPluginframework#last_state_loss_time}
  */
  readonly lastStateLossTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#node_type_id DataDatabricksClusterPluginframework#node_type_id}
  */
  readonly nodeTypeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#num_workers DataDatabricksClusterPluginframework#num_workers}
  */
  readonly numWorkers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#policy_id DataDatabricksClusterPluginframework#policy_id}
  */
  readonly policyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#remote_disk_throughput DataDatabricksClusterPluginframework#remote_disk_throughput}
  */
  readonly remoteDiskThroughput?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#runtime_engine DataDatabricksClusterPluginframework#runtime_engine}
  */
  readonly runtimeEngine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#single_user_name DataDatabricksClusterPluginframework#single_user_name}
  */
  readonly singleUserName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#spark_conf DataDatabricksClusterPluginframework#spark_conf}
  */
  readonly sparkConf?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#spark_context_id DataDatabricksClusterPluginframework#spark_context_id}
  */
  readonly sparkContextId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#spark_env_vars DataDatabricksClusterPluginframework#spark_env_vars}
  */
  readonly sparkEnvVars?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#spark_version DataDatabricksClusterPluginframework#spark_version}
  */
  readonly sparkVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#spec DataDatabricksClusterPluginframework#spec}
  */
  readonly spec?: DataDatabricksClusterPluginframeworkClusterInfoSpec[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#ssh_public_keys DataDatabricksClusterPluginframework#ssh_public_keys}
  */
  readonly sshPublicKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#start_time DataDatabricksClusterPluginframework#start_time}
  */
  readonly startTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#state DataDatabricksClusterPluginframework#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#state_message DataDatabricksClusterPluginframework#state_message}
  */
  readonly stateMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#terminated_time DataDatabricksClusterPluginframework#terminated_time}
  */
  readonly terminatedTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#termination_reason DataDatabricksClusterPluginframework#termination_reason}
  */
  readonly terminationReason?: DataDatabricksClusterPluginframeworkClusterInfoTerminationReason[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#total_initial_remote_disk_size DataDatabricksClusterPluginframework#total_initial_remote_disk_size}
  */
  readonly totalInitialRemoteDiskSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#use_ml_runtime DataDatabricksClusterPluginframework#use_ml_runtime}
  */
  readonly useMlRuntime?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#worker_node_type_flexibility DataDatabricksClusterPluginframework#worker_node_type_flexibility}
  */
  readonly workerNodeTypeFlexibility?: DataDatabricksClusterPluginframeworkClusterInfoWorkerNodeTypeFlexibility[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#workload_type DataDatabricksClusterPluginframework#workload_type}
  */
  readonly workloadType?: DataDatabricksClusterPluginframeworkClusterInfoWorkloadType[] | cdktn.IResolvable;
}

export function dataDatabricksClusterPluginframeworkClusterInfoToTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autoscale: cdktn.listMapper(dataDatabricksClusterPluginframeworkClusterInfoAutoscaleToTerraform, false)(struct!.autoscale),
    autotermination_minutes: cdktn.numberToTerraform(struct!.autoterminationMinutes),
    aws_attributes: cdktn.listMapper(dataDatabricksClusterPluginframeworkClusterInfoAwsAttributesToTerraform, false)(struct!.awsAttributes),
    azure_attributes: cdktn.listMapper(dataDatabricksClusterPluginframeworkClusterInfoAzureAttributesToTerraform, false)(struct!.azureAttributes),
    cluster_cores: cdktn.numberToTerraform(struct!.clusterCores),
    cluster_id: cdktn.stringToTerraform(struct!.clusterId),
    cluster_log_conf: cdktn.listMapper(dataDatabricksClusterPluginframeworkClusterInfoClusterLogConfToTerraform, false)(struct!.clusterLogConf),
    cluster_log_status: cdktn.listMapper(dataDatabricksClusterPluginframeworkClusterInfoClusterLogStatusToTerraform, false)(struct!.clusterLogStatus),
    cluster_memory_mb: cdktn.numberToTerraform(struct!.clusterMemoryMb),
    cluster_name: cdktn.stringToTerraform(struct!.clusterName),
    cluster_source: cdktn.stringToTerraform(struct!.clusterSource),
    creator_user_name: cdktn.stringToTerraform(struct!.creatorUserName),
    custom_tags: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.customTags),
    data_security_mode: cdktn.stringToTerraform(struct!.dataSecurityMode),
    default_tags: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.defaultTags),
    docker_image: cdktn.listMapper(dataDatabricksClusterPluginframeworkClusterInfoDockerImageToTerraform, false)(struct!.dockerImage),
    driver: cdktn.listMapper(dataDatabricksClusterPluginframeworkClusterInfoDriverToTerraform, false)(struct!.driver),
    driver_instance_pool_id: cdktn.stringToTerraform(struct!.driverInstancePoolId),
    driver_node_type_flexibility: cdktn.listMapper(dataDatabricksClusterPluginframeworkClusterInfoDriverNodeTypeFlexibilityToTerraform, false)(struct!.driverNodeTypeFlexibility),
    driver_node_type_id: cdktn.stringToTerraform(struct!.driverNodeTypeId),
    enable_elastic_disk: cdktn.booleanToTerraform(struct!.enableElasticDisk),
    enable_local_disk_encryption: cdktn.booleanToTerraform(struct!.enableLocalDiskEncryption),
    executors: cdktn.listMapper(dataDatabricksClusterPluginframeworkClusterInfoExecutorsToTerraform, false)(struct!.executors),
    gcp_attributes: cdktn.listMapper(dataDatabricksClusterPluginframeworkClusterInfoGcpAttributesToTerraform, false)(struct!.gcpAttributes),
    init_scripts: cdktn.listMapper(dataDatabricksClusterPluginframeworkClusterInfoInitScriptsToTerraform, false)(struct!.initScripts),
    instance_pool_id: cdktn.stringToTerraform(struct!.instancePoolId),
    is_single_node: cdktn.booleanToTerraform(struct!.isSingleNode),
    jdbc_port: cdktn.numberToTerraform(struct!.jdbcPort),
    kind: cdktn.stringToTerraform(struct!.kind),
    last_restarted_time: cdktn.numberToTerraform(struct!.lastRestartedTime),
    last_state_loss_time: cdktn.numberToTerraform(struct!.lastStateLossTime),
    node_type_id: cdktn.stringToTerraform(struct!.nodeTypeId),
    num_workers: cdktn.numberToTerraform(struct!.numWorkers),
    policy_id: cdktn.stringToTerraform(struct!.policyId),
    remote_disk_throughput: cdktn.numberToTerraform(struct!.remoteDiskThroughput),
    runtime_engine: cdktn.stringToTerraform(struct!.runtimeEngine),
    single_user_name: cdktn.stringToTerraform(struct!.singleUserName),
    spark_conf: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.sparkConf),
    spark_context_id: cdktn.numberToTerraform(struct!.sparkContextId),
    spark_env_vars: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.sparkEnvVars),
    spark_version: cdktn.stringToTerraform(struct!.sparkVersion),
    spec: cdktn.listMapper(dataDatabricksClusterPluginframeworkClusterInfoSpecToTerraform, false)(struct!.spec),
    ssh_public_keys: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sshPublicKeys),
    start_time: cdktn.numberToTerraform(struct!.startTime),
    state: cdktn.stringToTerraform(struct!.state),
    state_message: cdktn.stringToTerraform(struct!.stateMessage),
    terminated_time: cdktn.numberToTerraform(struct!.terminatedTime),
    termination_reason: cdktn.listMapper(dataDatabricksClusterPluginframeworkClusterInfoTerminationReasonToTerraform, false)(struct!.terminationReason),
    total_initial_remote_disk_size: cdktn.numberToTerraform(struct!.totalInitialRemoteDiskSize),
    use_ml_runtime: cdktn.booleanToTerraform(struct!.useMlRuntime),
    worker_node_type_flexibility: cdktn.listMapper(dataDatabricksClusterPluginframeworkClusterInfoWorkerNodeTypeFlexibilityToTerraform, false)(struct!.workerNodeTypeFlexibility),
    workload_type: cdktn.listMapper(dataDatabricksClusterPluginframeworkClusterInfoWorkloadTypeToTerraform, false)(struct!.workloadType),
  }
}


export function dataDatabricksClusterPluginframeworkClusterInfoToHclTerraform(struct?: DataDatabricksClusterPluginframeworkClusterInfo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autoscale: {
      value: cdktn.listMapperHcl(dataDatabricksClusterPluginframeworkClusterInfoAutoscaleToHclTerraform, false)(struct!.autoscale),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterPluginframeworkClusterInfoAutoscaleList",
    },
    autotermination_minutes: {
      value: cdktn.numberToHclTerraform(struct!.autoterminationMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    aws_attributes: {
      value: cdktn.listMapperHcl(dataDatabricksClusterPluginframeworkClusterInfoAwsAttributesToHclTerraform, false)(struct!.awsAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterPluginframeworkClusterInfoAwsAttributesList",
    },
    azure_attributes: {
      value: cdktn.listMapperHcl(dataDatabricksClusterPluginframeworkClusterInfoAzureAttributesToHclTerraform, false)(struct!.azureAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterPluginframeworkClusterInfoAzureAttributesList",
    },
    cluster_cores: {
      value: cdktn.numberToHclTerraform(struct!.clusterCores),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cluster_id: {
      value: cdktn.stringToHclTerraform(struct!.clusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_log_conf: {
      value: cdktn.listMapperHcl(dataDatabricksClusterPluginframeworkClusterInfoClusterLogConfToHclTerraform, false)(struct!.clusterLogConf),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterPluginframeworkClusterInfoClusterLogConfList",
    },
    cluster_log_status: {
      value: cdktn.listMapperHcl(dataDatabricksClusterPluginframeworkClusterInfoClusterLogStatusToHclTerraform, false)(struct!.clusterLogStatus),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterPluginframeworkClusterInfoClusterLogStatusList",
    },
    cluster_memory_mb: {
      value: cdktn.numberToHclTerraform(struct!.clusterMemoryMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cluster_name: {
      value: cdktn.stringToHclTerraform(struct!.clusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_source: {
      value: cdktn.stringToHclTerraform(struct!.clusterSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    creator_user_name: {
      value: cdktn.stringToHclTerraform(struct!.creatorUserName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_tags: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.customTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    data_security_mode: {
      value: cdktn.stringToHclTerraform(struct!.dataSecurityMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_tags: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.defaultTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    docker_image: {
      value: cdktn.listMapperHcl(dataDatabricksClusterPluginframeworkClusterInfoDockerImageToHclTerraform, false)(struct!.dockerImage),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterPluginframeworkClusterInfoDockerImageList",
    },
    driver: {
      value: cdktn.listMapperHcl(dataDatabricksClusterPluginframeworkClusterInfoDriverToHclTerraform, false)(struct!.driver),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterPluginframeworkClusterInfoDriverList",
    },
    driver_instance_pool_id: {
      value: cdktn.stringToHclTerraform(struct!.driverInstancePoolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    driver_node_type_flexibility: {
      value: cdktn.listMapperHcl(dataDatabricksClusterPluginframeworkClusterInfoDriverNodeTypeFlexibilityToHclTerraform, false)(struct!.driverNodeTypeFlexibility),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterPluginframeworkClusterInfoDriverNodeTypeFlexibilityList",
    },
    driver_node_type_id: {
      value: cdktn.stringToHclTerraform(struct!.driverNodeTypeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_elastic_disk: {
      value: cdktn.booleanToHclTerraform(struct!.enableElasticDisk),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_local_disk_encryption: {
      value: cdktn.booleanToHclTerraform(struct!.enableLocalDiskEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    executors: {
      value: cdktn.listMapperHcl(dataDatabricksClusterPluginframeworkClusterInfoExecutorsToHclTerraform, false)(struct!.executors),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterPluginframeworkClusterInfoExecutorsList",
    },
    gcp_attributes: {
      value: cdktn.listMapperHcl(dataDatabricksClusterPluginframeworkClusterInfoGcpAttributesToHclTerraform, false)(struct!.gcpAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterPluginframeworkClusterInfoGcpAttributesList",
    },
    init_scripts: {
      value: cdktn.listMapperHcl(dataDatabricksClusterPluginframeworkClusterInfoInitScriptsToHclTerraform, false)(struct!.initScripts),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterPluginframeworkClusterInfoInitScriptsList",
    },
    instance_pool_id: {
      value: cdktn.stringToHclTerraform(struct!.instancePoolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_single_node: {
      value: cdktn.booleanToHclTerraform(struct!.isSingleNode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    jdbc_port: {
      value: cdktn.numberToHclTerraform(struct!.jdbcPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kind: {
      value: cdktn.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_restarted_time: {
      value: cdktn.numberToHclTerraform(struct!.lastRestartedTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    last_state_loss_time: {
      value: cdktn.numberToHclTerraform(struct!.lastStateLossTime),
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
    num_workers: {
      value: cdktn.numberToHclTerraform(struct!.numWorkers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    policy_id: {
      value: cdktn.stringToHclTerraform(struct!.policyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_disk_throughput: {
      value: cdktn.numberToHclTerraform(struct!.remoteDiskThroughput),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    runtime_engine: {
      value: cdktn.stringToHclTerraform(struct!.runtimeEngine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    single_user_name: {
      value: cdktn.stringToHclTerraform(struct!.singleUserName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spark_conf: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.sparkConf),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    spark_context_id: {
      value: cdktn.numberToHclTerraform(struct!.sparkContextId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    spark_env_vars: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.sparkEnvVars),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    spark_version: {
      value: cdktn.stringToHclTerraform(struct!.sparkVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spec: {
      value: cdktn.listMapperHcl(dataDatabricksClusterPluginframeworkClusterInfoSpecToHclTerraform, false)(struct!.spec),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterPluginframeworkClusterInfoSpecList",
    },
    ssh_public_keys: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sshPublicKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    start_time: {
      value: cdktn.numberToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    state: {
      value: cdktn.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state_message: {
      value: cdktn.stringToHclTerraform(struct!.stateMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    terminated_time: {
      value: cdktn.numberToHclTerraform(struct!.terminatedTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    termination_reason: {
      value: cdktn.listMapperHcl(dataDatabricksClusterPluginframeworkClusterInfoTerminationReasonToHclTerraform, false)(struct!.terminationReason),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterPluginframeworkClusterInfoTerminationReasonList",
    },
    total_initial_remote_disk_size: {
      value: cdktn.numberToHclTerraform(struct!.totalInitialRemoteDiskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_ml_runtime: {
      value: cdktn.booleanToHclTerraform(struct!.useMlRuntime),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    worker_node_type_flexibility: {
      value: cdktn.listMapperHcl(dataDatabricksClusterPluginframeworkClusterInfoWorkerNodeTypeFlexibilityToHclTerraform, false)(struct!.workerNodeTypeFlexibility),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterPluginframeworkClusterInfoWorkerNodeTypeFlexibilityList",
    },
    workload_type: {
      value: cdktn.listMapperHcl(dataDatabricksClusterPluginframeworkClusterInfoWorkloadTypeToHclTerraform, false)(struct!.workloadType),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterPluginframeworkClusterInfoWorkloadTypeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksClusterPluginframeworkClusterInfoOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksClusterPluginframeworkClusterInfo | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoscale?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscale = this._autoscale?.internalValue;
    }
    if (this._autoterminationMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoterminationMinutes = this._autoterminationMinutes;
    }
    if (this._awsAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAttributes = this._awsAttributes?.internalValue;
    }
    if (this._azureAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureAttributes = this._azureAttributes?.internalValue;
    }
    if (this._clusterCores !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterCores = this._clusterCores;
    }
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    if (this._clusterLogConf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterLogConf = this._clusterLogConf?.internalValue;
    }
    if (this._clusterLogStatus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterLogStatus = this._clusterLogStatus?.internalValue;
    }
    if (this._clusterMemoryMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterMemoryMb = this._clusterMemoryMb;
    }
    if (this._clusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterName = this._clusterName;
    }
    if (this._clusterSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterSource = this._clusterSource;
    }
    if (this._creatorUserName !== undefined) {
      hasAnyValues = true;
      internalValueResult.creatorUserName = this._creatorUserName;
    }
    if (this._customTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.customTags = this._customTags;
    }
    if (this._dataSecurityMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSecurityMode = this._dataSecurityMode;
    }
    if (this._defaultTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultTags = this._defaultTags;
    }
    if (this._dockerImage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerImage = this._dockerImage?.internalValue;
    }
    if (this._driver?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.driver = this._driver?.internalValue;
    }
    if (this._driverInstancePoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.driverInstancePoolId = this._driverInstancePoolId;
    }
    if (this._driverNodeTypeFlexibility?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.driverNodeTypeFlexibility = this._driverNodeTypeFlexibility?.internalValue;
    }
    if (this._driverNodeTypeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.driverNodeTypeId = this._driverNodeTypeId;
    }
    if (this._enableElasticDisk !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableElasticDisk = this._enableElasticDisk;
    }
    if (this._enableLocalDiskEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableLocalDiskEncryption = this._enableLocalDiskEncryption;
    }
    if (this._executors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.executors = this._executors?.internalValue;
    }
    if (this._gcpAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpAttributes = this._gcpAttributes?.internalValue;
    }
    if (this._initScripts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initScripts = this._initScripts?.internalValue;
    }
    if (this._instancePoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instancePoolId = this._instancePoolId;
    }
    if (this._isSingleNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSingleNode = this._isSingleNode;
    }
    if (this._jdbcPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.jdbcPort = this._jdbcPort;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._lastRestartedTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastRestartedTime = this._lastRestartedTime;
    }
    if (this._lastStateLossTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastStateLossTime = this._lastStateLossTime;
    }
    if (this._nodeTypeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeTypeId = this._nodeTypeId;
    }
    if (this._numWorkers !== undefined) {
      hasAnyValues = true;
      internalValueResult.numWorkers = this._numWorkers;
    }
    if (this._policyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyId = this._policyId;
    }
    if (this._remoteDiskThroughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteDiskThroughput = this._remoteDiskThroughput;
    }
    if (this._runtimeEngine !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeEngine = this._runtimeEngine;
    }
    if (this._singleUserName !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleUserName = this._singleUserName;
    }
    if (this._sparkConf !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparkConf = this._sparkConf;
    }
    if (this._sparkContextId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparkContextId = this._sparkContextId;
    }
    if (this._sparkEnvVars !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparkEnvVars = this._sparkEnvVars;
    }
    if (this._sparkVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparkVersion = this._sparkVersion;
    }
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    if (this._sshPublicKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshPublicKeys = this._sshPublicKeys;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._stateMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateMessage = this._stateMessage;
    }
    if (this._terminatedTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminatedTime = this._terminatedTime;
    }
    if (this._terminationReason?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminationReason = this._terminationReason?.internalValue;
    }
    if (this._totalInitialRemoteDiskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalInitialRemoteDiskSize = this._totalInitialRemoteDiskSize;
    }
    if (this._useMlRuntime !== undefined) {
      hasAnyValues = true;
      internalValueResult.useMlRuntime = this._useMlRuntime;
    }
    if (this._workerNodeTypeFlexibility?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerNodeTypeFlexibility = this._workerNodeTypeFlexibility?.internalValue;
    }
    if (this._workloadType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadType = this._workloadType?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterPluginframeworkClusterInfo | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoscale.internalValue = undefined;
      this._autoterminationMinutes = undefined;
      this._awsAttributes.internalValue = undefined;
      this._azureAttributes.internalValue = undefined;
      this._clusterCores = undefined;
      this._clusterId = undefined;
      this._clusterLogConf.internalValue = undefined;
      this._clusterLogStatus.internalValue = undefined;
      this._clusterMemoryMb = undefined;
      this._clusterName = undefined;
      this._clusterSource = undefined;
      this._creatorUserName = undefined;
      this._customTags = undefined;
      this._dataSecurityMode = undefined;
      this._defaultTags = undefined;
      this._dockerImage.internalValue = undefined;
      this._driver.internalValue = undefined;
      this._driverInstancePoolId = undefined;
      this._driverNodeTypeFlexibility.internalValue = undefined;
      this._driverNodeTypeId = undefined;
      this._enableElasticDisk = undefined;
      this._enableLocalDiskEncryption = undefined;
      this._executors.internalValue = undefined;
      this._gcpAttributes.internalValue = undefined;
      this._initScripts.internalValue = undefined;
      this._instancePoolId = undefined;
      this._isSingleNode = undefined;
      this._jdbcPort = undefined;
      this._kind = undefined;
      this._lastRestartedTime = undefined;
      this._lastStateLossTime = undefined;
      this._nodeTypeId = undefined;
      this._numWorkers = undefined;
      this._policyId = undefined;
      this._remoteDiskThroughput = undefined;
      this._runtimeEngine = undefined;
      this._singleUserName = undefined;
      this._sparkConf = undefined;
      this._sparkContextId = undefined;
      this._sparkEnvVars = undefined;
      this._sparkVersion = undefined;
      this._spec.internalValue = undefined;
      this._sshPublicKeys = undefined;
      this._startTime = undefined;
      this._state = undefined;
      this._stateMessage = undefined;
      this._terminatedTime = undefined;
      this._terminationReason.internalValue = undefined;
      this._totalInitialRemoteDiskSize = undefined;
      this._useMlRuntime = undefined;
      this._workerNodeTypeFlexibility.internalValue = undefined;
      this._workloadType.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoscale.internalValue = value.autoscale;
      this._autoterminationMinutes = value.autoterminationMinutes;
      this._awsAttributes.internalValue = value.awsAttributes;
      this._azureAttributes.internalValue = value.azureAttributes;
      this._clusterCores = value.clusterCores;
      this._clusterId = value.clusterId;
      this._clusterLogConf.internalValue = value.clusterLogConf;
      this._clusterLogStatus.internalValue = value.clusterLogStatus;
      this._clusterMemoryMb = value.clusterMemoryMb;
      this._clusterName = value.clusterName;
      this._clusterSource = value.clusterSource;
      this._creatorUserName = value.creatorUserName;
      this._customTags = value.customTags;
      this._dataSecurityMode = value.dataSecurityMode;
      this._defaultTags = value.defaultTags;
      this._dockerImage.internalValue = value.dockerImage;
      this._driver.internalValue = value.driver;
      this._driverInstancePoolId = value.driverInstancePoolId;
      this._driverNodeTypeFlexibility.internalValue = value.driverNodeTypeFlexibility;
      this._driverNodeTypeId = value.driverNodeTypeId;
      this._enableElasticDisk = value.enableElasticDisk;
      this._enableLocalDiskEncryption = value.enableLocalDiskEncryption;
      this._executors.internalValue = value.executors;
      this._gcpAttributes.internalValue = value.gcpAttributes;
      this._initScripts.internalValue = value.initScripts;
      this._instancePoolId = value.instancePoolId;
      this._isSingleNode = value.isSingleNode;
      this._jdbcPort = value.jdbcPort;
      this._kind = value.kind;
      this._lastRestartedTime = value.lastRestartedTime;
      this._lastStateLossTime = value.lastStateLossTime;
      this._nodeTypeId = value.nodeTypeId;
      this._numWorkers = value.numWorkers;
      this._policyId = value.policyId;
      this._remoteDiskThroughput = value.remoteDiskThroughput;
      this._runtimeEngine = value.runtimeEngine;
      this._singleUserName = value.singleUserName;
      this._sparkConf = value.sparkConf;
      this._sparkContextId = value.sparkContextId;
      this._sparkEnvVars = value.sparkEnvVars;
      this._sparkVersion = value.sparkVersion;
      this._spec.internalValue = value.spec;
      this._sshPublicKeys = value.sshPublicKeys;
      this._startTime = value.startTime;
      this._state = value.state;
      this._stateMessage = value.stateMessage;
      this._terminatedTime = value.terminatedTime;
      this._terminationReason.internalValue = value.terminationReason;
      this._totalInitialRemoteDiskSize = value.totalInitialRemoteDiskSize;
      this._useMlRuntime = value.useMlRuntime;
      this._workerNodeTypeFlexibility.internalValue = value.workerNodeTypeFlexibility;
      this._workloadType.internalValue = value.workloadType;
    }
  }

  // autoscale - computed: true, optional: true, required: false
  private _autoscale = new DataDatabricksClusterPluginframeworkClusterInfoAutoscaleList(this, "autoscale", false);
  public get autoscale() {
    return this._autoscale;
  }
  public putAutoscale(value: DataDatabricksClusterPluginframeworkClusterInfoAutoscale[] | cdktn.IResolvable) {
    this._autoscale.internalValue = value;
  }
  public resetAutoscale() {
    this._autoscale.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleInput() {
    return this._autoscale.internalValue;
  }

  // autotermination_minutes - computed: true, optional: true, required: false
  private _autoterminationMinutes?: number; 
  public get autoterminationMinutes() {
    return this.getNumberAttribute('autotermination_minutes');
  }
  public set autoterminationMinutes(value: number) {
    this._autoterminationMinutes = value;
  }
  public resetAutoterminationMinutes() {
    this._autoterminationMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoterminationMinutesInput() {
    return this._autoterminationMinutes;
  }

  // aws_attributes - computed: true, optional: true, required: false
  private _awsAttributes = new DataDatabricksClusterPluginframeworkClusterInfoAwsAttributesList(this, "aws_attributes", false);
  public get awsAttributes() {
    return this._awsAttributes;
  }
  public putAwsAttributes(value: DataDatabricksClusterPluginframeworkClusterInfoAwsAttributes[] | cdktn.IResolvable) {
    this._awsAttributes.internalValue = value;
  }
  public resetAwsAttributes() {
    this._awsAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAttributesInput() {
    return this._awsAttributes.internalValue;
  }

  // azure_attributes - computed: true, optional: true, required: false
  private _azureAttributes = new DataDatabricksClusterPluginframeworkClusterInfoAzureAttributesList(this, "azure_attributes", false);
  public get azureAttributes() {
    return this._azureAttributes;
  }
  public putAzureAttributes(value: DataDatabricksClusterPluginframeworkClusterInfoAzureAttributes[] | cdktn.IResolvable) {
    this._azureAttributes.internalValue = value;
  }
  public resetAzureAttributes() {
    this._azureAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureAttributesInput() {
    return this._azureAttributes.internalValue;
  }

  // cluster_cores - computed: true, optional: true, required: false
  private _clusterCores?: number; 
  public get clusterCores() {
    return this.getNumberAttribute('cluster_cores');
  }
  public set clusterCores(value: number) {
    this._clusterCores = value;
  }
  public resetClusterCores() {
    this._clusterCores = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterCoresInput() {
    return this._clusterCores;
  }

  // cluster_id - computed: true, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // cluster_log_conf - computed: true, optional: true, required: false
  private _clusterLogConf = new DataDatabricksClusterPluginframeworkClusterInfoClusterLogConfList(this, "cluster_log_conf", false);
  public get clusterLogConf() {
    return this._clusterLogConf;
  }
  public putClusterLogConf(value: DataDatabricksClusterPluginframeworkClusterInfoClusterLogConf[] | cdktn.IResolvable) {
    this._clusterLogConf.internalValue = value;
  }
  public resetClusterLogConf() {
    this._clusterLogConf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterLogConfInput() {
    return this._clusterLogConf.internalValue;
  }

  // cluster_log_status - computed: true, optional: true, required: false
  private _clusterLogStatus = new DataDatabricksClusterPluginframeworkClusterInfoClusterLogStatusList(this, "cluster_log_status", false);
  public get clusterLogStatus() {
    return this._clusterLogStatus;
  }
  public putClusterLogStatus(value: DataDatabricksClusterPluginframeworkClusterInfoClusterLogStatus[] | cdktn.IResolvable) {
    this._clusterLogStatus.internalValue = value;
  }
  public resetClusterLogStatus() {
    this._clusterLogStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterLogStatusInput() {
    return this._clusterLogStatus.internalValue;
  }

  // cluster_memory_mb - computed: true, optional: true, required: false
  private _clusterMemoryMb?: number; 
  public get clusterMemoryMb() {
    return this.getNumberAttribute('cluster_memory_mb');
  }
  public set clusterMemoryMb(value: number) {
    this._clusterMemoryMb = value;
  }
  public resetClusterMemoryMb() {
    this._clusterMemoryMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterMemoryMbInput() {
    return this._clusterMemoryMb;
  }

  // cluster_name - computed: true, optional: true, required: false
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  public resetClusterName() {
    this._clusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // cluster_source - computed: true, optional: true, required: false
  private _clusterSource?: string; 
  public get clusterSource() {
    return this.getStringAttribute('cluster_source');
  }
  public set clusterSource(value: string) {
    this._clusterSource = value;
  }
  public resetClusterSource() {
    this._clusterSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterSourceInput() {
    return this._clusterSource;
  }

  // creator_user_name - computed: true, optional: true, required: false
  private _creatorUserName?: string; 
  public get creatorUserName() {
    return this.getStringAttribute('creator_user_name');
  }
  public set creatorUserName(value: string) {
    this._creatorUserName = value;
  }
  public resetCreatorUserName() {
    this._creatorUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creatorUserNameInput() {
    return this._creatorUserName;
  }

  // custom_tags - computed: true, optional: true, required: false
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

  // data_security_mode - computed: true, optional: true, required: false
  private _dataSecurityMode?: string; 
  public get dataSecurityMode() {
    return this.getStringAttribute('data_security_mode');
  }
  public set dataSecurityMode(value: string) {
    this._dataSecurityMode = value;
  }
  public resetDataSecurityMode() {
    this._dataSecurityMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSecurityModeInput() {
    return this._dataSecurityMode;
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

  // docker_image - computed: true, optional: true, required: false
  private _dockerImage = new DataDatabricksClusterPluginframeworkClusterInfoDockerImageList(this, "docker_image", false);
  public get dockerImage() {
    return this._dockerImage;
  }
  public putDockerImage(value: DataDatabricksClusterPluginframeworkClusterInfoDockerImage[] | cdktn.IResolvable) {
    this._dockerImage.internalValue = value;
  }
  public resetDockerImage() {
    this._dockerImage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerImageInput() {
    return this._dockerImage.internalValue;
  }

  // driver - computed: true, optional: true, required: false
  private _driver = new DataDatabricksClusterPluginframeworkClusterInfoDriverList(this, "driver", false);
  public get driver() {
    return this._driver;
  }
  public putDriver(value: DataDatabricksClusterPluginframeworkClusterInfoDriver[] | cdktn.IResolvable) {
    this._driver.internalValue = value;
  }
  public resetDriver() {
    this._driver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverInput() {
    return this._driver.internalValue;
  }

  // driver_instance_pool_id - computed: true, optional: true, required: false
  private _driverInstancePoolId?: string; 
  public get driverInstancePoolId() {
    return this.getStringAttribute('driver_instance_pool_id');
  }
  public set driverInstancePoolId(value: string) {
    this._driverInstancePoolId = value;
  }
  public resetDriverInstancePoolId() {
    this._driverInstancePoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverInstancePoolIdInput() {
    return this._driverInstancePoolId;
  }

  // driver_node_type_flexibility - computed: true, optional: true, required: false
  private _driverNodeTypeFlexibility = new DataDatabricksClusterPluginframeworkClusterInfoDriverNodeTypeFlexibilityList(this, "driver_node_type_flexibility", false);
  public get driverNodeTypeFlexibility() {
    return this._driverNodeTypeFlexibility;
  }
  public putDriverNodeTypeFlexibility(value: DataDatabricksClusterPluginframeworkClusterInfoDriverNodeTypeFlexibility[] | cdktn.IResolvable) {
    this._driverNodeTypeFlexibility.internalValue = value;
  }
  public resetDriverNodeTypeFlexibility() {
    this._driverNodeTypeFlexibility.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverNodeTypeFlexibilityInput() {
    return this._driverNodeTypeFlexibility.internalValue;
  }

  // driver_node_type_id - computed: true, optional: true, required: false
  private _driverNodeTypeId?: string; 
  public get driverNodeTypeId() {
    return this.getStringAttribute('driver_node_type_id');
  }
  public set driverNodeTypeId(value: string) {
    this._driverNodeTypeId = value;
  }
  public resetDriverNodeTypeId() {
    this._driverNodeTypeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverNodeTypeIdInput() {
    return this._driverNodeTypeId;
  }

  // enable_elastic_disk - computed: true, optional: true, required: false
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

  // enable_local_disk_encryption - computed: true, optional: true, required: false
  private _enableLocalDiskEncryption?: boolean | cdktn.IResolvable; 
  public get enableLocalDiskEncryption() {
    return this.getBooleanAttribute('enable_local_disk_encryption');
  }
  public set enableLocalDiskEncryption(value: boolean | cdktn.IResolvable) {
    this._enableLocalDiskEncryption = value;
  }
  public resetEnableLocalDiskEncryption() {
    this._enableLocalDiskEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLocalDiskEncryptionInput() {
    return this._enableLocalDiskEncryption;
  }

  // executors - computed: true, optional: true, required: false
  private _executors = new DataDatabricksClusterPluginframeworkClusterInfoExecutorsList(this, "executors", false);
  public get executors() {
    return this._executors;
  }
  public putExecutors(value: DataDatabricksClusterPluginframeworkClusterInfoExecutors[] | cdktn.IResolvable) {
    this._executors.internalValue = value;
  }
  public resetExecutors() {
    this._executors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executorsInput() {
    return this._executors.internalValue;
  }

  // gcp_attributes - computed: true, optional: true, required: false
  private _gcpAttributes = new DataDatabricksClusterPluginframeworkClusterInfoGcpAttributesList(this, "gcp_attributes", false);
  public get gcpAttributes() {
    return this._gcpAttributes;
  }
  public putGcpAttributes(value: DataDatabricksClusterPluginframeworkClusterInfoGcpAttributes[] | cdktn.IResolvable) {
    this._gcpAttributes.internalValue = value;
  }
  public resetGcpAttributes() {
    this._gcpAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpAttributesInput() {
    return this._gcpAttributes.internalValue;
  }

  // init_scripts - computed: true, optional: true, required: false
  private _initScripts = new DataDatabricksClusterPluginframeworkClusterInfoInitScriptsList(this, "init_scripts", false);
  public get initScripts() {
    return this._initScripts;
  }
  public putInitScripts(value: DataDatabricksClusterPluginframeworkClusterInfoInitScripts[] | cdktn.IResolvable) {
    this._initScripts.internalValue = value;
  }
  public resetInitScripts() {
    this._initScripts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initScriptsInput() {
    return this._initScripts.internalValue;
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

  // is_single_node - computed: true, optional: true, required: false
  private _isSingleNode?: boolean | cdktn.IResolvable; 
  public get isSingleNode() {
    return this.getBooleanAttribute('is_single_node');
  }
  public set isSingleNode(value: boolean | cdktn.IResolvable) {
    this._isSingleNode = value;
  }
  public resetIsSingleNode() {
    this._isSingleNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSingleNodeInput() {
    return this._isSingleNode;
  }

  // jdbc_port - computed: true, optional: true, required: false
  private _jdbcPort?: number; 
  public get jdbcPort() {
    return this.getNumberAttribute('jdbc_port');
  }
  public set jdbcPort(value: number) {
    this._jdbcPort = value;
  }
  public resetJdbcPort() {
    this._jdbcPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jdbcPortInput() {
    return this._jdbcPort;
  }

  // kind - computed: true, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // last_restarted_time - computed: true, optional: true, required: false
  private _lastRestartedTime?: number; 
  public get lastRestartedTime() {
    return this.getNumberAttribute('last_restarted_time');
  }
  public set lastRestartedTime(value: number) {
    this._lastRestartedTime = value;
  }
  public resetLastRestartedTime() {
    this._lastRestartedTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastRestartedTimeInput() {
    return this._lastRestartedTime;
  }

  // last_state_loss_time - computed: true, optional: true, required: false
  private _lastStateLossTime?: number; 
  public get lastStateLossTime() {
    return this.getNumberAttribute('last_state_loss_time');
  }
  public set lastStateLossTime(value: number) {
    this._lastStateLossTime = value;
  }
  public resetLastStateLossTime() {
    this._lastStateLossTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastStateLossTimeInput() {
    return this._lastStateLossTime;
  }

  // node_type_id - computed: true, optional: true, required: false
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

  // num_workers - computed: true, optional: true, required: false
  private _numWorkers?: number; 
  public get numWorkers() {
    return this.getNumberAttribute('num_workers');
  }
  public set numWorkers(value: number) {
    this._numWorkers = value;
  }
  public resetNumWorkers() {
    this._numWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numWorkersInput() {
    return this._numWorkers;
  }

  // policy_id - computed: true, optional: true, required: false
  private _policyId?: string; 
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string) {
    this._policyId = value;
  }
  public resetPolicyId() {
    this._policyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // remote_disk_throughput - computed: true, optional: true, required: false
  private _remoteDiskThroughput?: number; 
  public get remoteDiskThroughput() {
    return this.getNumberAttribute('remote_disk_throughput');
  }
  public set remoteDiskThroughput(value: number) {
    this._remoteDiskThroughput = value;
  }
  public resetRemoteDiskThroughput() {
    this._remoteDiskThroughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteDiskThroughputInput() {
    return this._remoteDiskThroughput;
  }

  // runtime_engine - computed: true, optional: true, required: false
  private _runtimeEngine?: string; 
  public get runtimeEngine() {
    return this.getStringAttribute('runtime_engine');
  }
  public set runtimeEngine(value: string) {
    this._runtimeEngine = value;
  }
  public resetRuntimeEngine() {
    this._runtimeEngine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeEngineInput() {
    return this._runtimeEngine;
  }

  // single_user_name - computed: true, optional: true, required: false
  private _singleUserName?: string; 
  public get singleUserName() {
    return this.getStringAttribute('single_user_name');
  }
  public set singleUserName(value: string) {
    this._singleUserName = value;
  }
  public resetSingleUserName() {
    this._singleUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleUserNameInput() {
    return this._singleUserName;
  }

  // spark_conf - computed: true, optional: true, required: false
  private _sparkConf?: { [key: string]: string }; 
  public get sparkConf() {
    return this.getStringMapAttribute('spark_conf');
  }
  public set sparkConf(value: { [key: string]: string }) {
    this._sparkConf = value;
  }
  public resetSparkConf() {
    this._sparkConf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkConfInput() {
    return this._sparkConf;
  }

  // spark_context_id - computed: true, optional: true, required: false
  private _sparkContextId?: number; 
  public get sparkContextId() {
    return this.getNumberAttribute('spark_context_id');
  }
  public set sparkContextId(value: number) {
    this._sparkContextId = value;
  }
  public resetSparkContextId() {
    this._sparkContextId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkContextIdInput() {
    return this._sparkContextId;
  }

  // spark_env_vars - computed: true, optional: true, required: false
  private _sparkEnvVars?: { [key: string]: string }; 
  public get sparkEnvVars() {
    return this.getStringMapAttribute('spark_env_vars');
  }
  public set sparkEnvVars(value: { [key: string]: string }) {
    this._sparkEnvVars = value;
  }
  public resetSparkEnvVars() {
    this._sparkEnvVars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkEnvVarsInput() {
    return this._sparkEnvVars;
  }

  // spark_version - computed: true, optional: true, required: false
  private _sparkVersion?: string; 
  public get sparkVersion() {
    return this.getStringAttribute('spark_version');
  }
  public set sparkVersion(value: string) {
    this._sparkVersion = value;
  }
  public resetSparkVersion() {
    this._sparkVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkVersionInput() {
    return this._sparkVersion;
  }

  // spec - computed: true, optional: true, required: false
  private _spec = new DataDatabricksClusterPluginframeworkClusterInfoSpecList(this, "spec", false);
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataDatabricksClusterPluginframeworkClusterInfoSpec[] | cdktn.IResolvable) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // ssh_public_keys - computed: true, optional: true, required: false
  private _sshPublicKeys?: string[]; 
  public get sshPublicKeys() {
    return this.getListAttribute('ssh_public_keys');
  }
  public set sshPublicKeys(value: string[]) {
    this._sshPublicKeys = value;
  }
  public resetSshPublicKeys() {
    this._sshPublicKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPublicKeysInput() {
    return this._sshPublicKeys;
  }

  // start_time - computed: true, optional: true, required: false
  private _startTime?: number; 
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }
  public set startTime(value: number) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // state - computed: true, optional: true, required: false
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

  // state_message - computed: true, optional: true, required: false
  private _stateMessage?: string; 
  public get stateMessage() {
    return this.getStringAttribute('state_message');
  }
  public set stateMessage(value: string) {
    this._stateMessage = value;
  }
  public resetStateMessage() {
    this._stateMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateMessageInput() {
    return this._stateMessage;
  }

  // terminated_time - computed: true, optional: true, required: false
  private _terminatedTime?: number; 
  public get terminatedTime() {
    return this.getNumberAttribute('terminated_time');
  }
  public set terminatedTime(value: number) {
    this._terminatedTime = value;
  }
  public resetTerminatedTime() {
    this._terminatedTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminatedTimeInput() {
    return this._terminatedTime;
  }

  // termination_reason - computed: true, optional: true, required: false
  private _terminationReason = new DataDatabricksClusterPluginframeworkClusterInfoTerminationReasonList(this, "termination_reason", false);
  public get terminationReason() {
    return this._terminationReason;
  }
  public putTerminationReason(value: DataDatabricksClusterPluginframeworkClusterInfoTerminationReason[] | cdktn.IResolvable) {
    this._terminationReason.internalValue = value;
  }
  public resetTerminationReason() {
    this._terminationReason.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationReasonInput() {
    return this._terminationReason.internalValue;
  }

  // total_initial_remote_disk_size - computed: true, optional: true, required: false
  private _totalInitialRemoteDiskSize?: number; 
  public get totalInitialRemoteDiskSize() {
    return this.getNumberAttribute('total_initial_remote_disk_size');
  }
  public set totalInitialRemoteDiskSize(value: number) {
    this._totalInitialRemoteDiskSize = value;
  }
  public resetTotalInitialRemoteDiskSize() {
    this._totalInitialRemoteDiskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalInitialRemoteDiskSizeInput() {
    return this._totalInitialRemoteDiskSize;
  }

  // use_ml_runtime - computed: true, optional: true, required: false
  private _useMlRuntime?: boolean | cdktn.IResolvable; 
  public get useMlRuntime() {
    return this.getBooleanAttribute('use_ml_runtime');
  }
  public set useMlRuntime(value: boolean | cdktn.IResolvable) {
    this._useMlRuntime = value;
  }
  public resetUseMlRuntime() {
    this._useMlRuntime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMlRuntimeInput() {
    return this._useMlRuntime;
  }

  // worker_node_type_flexibility - computed: true, optional: true, required: false
  private _workerNodeTypeFlexibility = new DataDatabricksClusterPluginframeworkClusterInfoWorkerNodeTypeFlexibilityList(this, "worker_node_type_flexibility", false);
  public get workerNodeTypeFlexibility() {
    return this._workerNodeTypeFlexibility;
  }
  public putWorkerNodeTypeFlexibility(value: DataDatabricksClusterPluginframeworkClusterInfoWorkerNodeTypeFlexibility[] | cdktn.IResolvable) {
    this._workerNodeTypeFlexibility.internalValue = value;
  }
  public resetWorkerNodeTypeFlexibility() {
    this._workerNodeTypeFlexibility.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerNodeTypeFlexibilityInput() {
    return this._workerNodeTypeFlexibility.internalValue;
  }

  // workload_type - computed: true, optional: true, required: false
  private _workloadType = new DataDatabricksClusterPluginframeworkClusterInfoWorkloadTypeList(this, "workload_type", false);
  public get workloadType() {
    return this._workloadType;
  }
  public putWorkloadType(value: DataDatabricksClusterPluginframeworkClusterInfoWorkloadType[] | cdktn.IResolvable) {
    this._workloadType.internalValue = value;
  }
  public resetWorkloadType() {
    this._workloadType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadTypeInput() {
    return this._workloadType.internalValue;
  }
}

export class DataDatabricksClusterPluginframeworkClusterInfoList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksClusterPluginframeworkClusterInfo[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksClusterPluginframeworkClusterInfoOutputReference {
    return new DataDatabricksClusterPluginframeworkClusterInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksClusterPluginframeworkProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#workspace_id DataDatabricksClusterPluginframework#workspace_id}
  */
  readonly workspaceId: string;
}

export function dataDatabricksClusterPluginframeworkProviderConfigToTerraform(struct?: DataDatabricksClusterPluginframeworkProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function dataDatabricksClusterPluginframeworkProviderConfigToHclTerraform(struct?: DataDatabricksClusterPluginframeworkProviderConfig | cdktn.IResolvable): any {
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

export class DataDatabricksClusterPluginframeworkProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksClusterPluginframeworkProviderConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceId = this._workspaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterPluginframeworkProviderConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._workspaceId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._workspaceId = value.workspaceId;
    }
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework databricks_cluster_pluginframework}
*/
export class DataDatabricksClusterPluginframework extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_cluster_pluginframework";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataDatabricksClusterPluginframework resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksClusterPluginframework to import
  * @param importFromId The id of the existing DataDatabricksClusterPluginframework that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksClusterPluginframework to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_cluster_pluginframework", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/cluster_pluginframework databricks_cluster_pluginframework} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksClusterPluginframeworkConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksClusterPluginframeworkConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_cluster_pluginframework',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.113.0',
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
    this._clusterId = config.clusterId;
    this._clusterInfo.internalValue = config.clusterInfo;
    this._clusterName = config.clusterName;
    this._providerConfig.internalValue = config.providerConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: true, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // cluster_info - computed: true, optional: true, required: false
  private _clusterInfo = new DataDatabricksClusterPluginframeworkClusterInfoList(this, "cluster_info", false);
  public get clusterInfo() {
    return this._clusterInfo;
  }
  public putClusterInfo(value: DataDatabricksClusterPluginframeworkClusterInfo[] | cdktn.IResolvable) {
    this._clusterInfo.internalValue = value;
  }
  public resetClusterInfo() {
    this._clusterInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInfoInput() {
    return this._clusterInfo.internalValue;
  }

  // cluster_name - computed: true, optional: true, required: false
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  public resetClusterName() {
    this._clusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // provider_config - computed: false, optional: true, required: false
  private _providerConfig = new DataDatabricksClusterPluginframeworkProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataDatabricksClusterPluginframeworkProviderConfig) {
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
      cluster_id: cdktn.stringToTerraform(this._clusterId),
      cluster_info: cdktn.listMapper(dataDatabricksClusterPluginframeworkClusterInfoToTerraform, false)(this._clusterInfo.internalValue),
      cluster_name: cdktn.stringToTerraform(this._clusterName),
      provider_config: dataDatabricksClusterPluginframeworkProviderConfigToTerraform(this._providerConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktn.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_info: {
        value: cdktn.listMapperHcl(dataDatabricksClusterPluginframeworkClusterInfoToHclTerraform, false)(this._clusterInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataDatabricksClusterPluginframeworkClusterInfoList",
      },
      cluster_name: {
        value: cdktn.stringToHclTerraform(this._clusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_config: {
        value: dataDatabricksClusterPluginframeworkProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataDatabricksClusterPluginframeworkProviderConfig",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
